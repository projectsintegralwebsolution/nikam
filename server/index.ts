import express, { Request, Response } from "express";
import next from "next";
import cors from "cors";
import dotenv from "dotenv";
import { sendContactEmail, ContactFormData } from "../src/lib/mailer";

// Load environment variables
dotenv.config({ path: ".env.local" });
dotenv.config({ path: ".env" });

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = parseInt(process.env.PORT || "3000", 10);

const nextApp = next({ dev, hostname, port });
const handle = nextApp.getRequestHandler();

async function main() {
  try {
    await nextApp.prepare();
    const server = express();

    // Middlewares
    server.use(cors());
    server.use(express.json());
    server.use(express.urlencoded({ extended: true }));

    // Health check
    server.get("/api/health", (_req: Request, res: Response) => {
      res.json({ status: "ok", timestamp: new Date().toISOString() });
    });

    // Contact form / Quote request endpoint (Node & Express + Nodemailer)
    server.post("/api/contact", async (req: Request, res: Response) => {
      try {
        const { name, email, phone, category, message, agree } = req.body as ContactFormData;

        if (!name || !email || !phone || !message) {
          return res.status(400).json({
            success: false,
            error: "Please fill in all required fields: Name, Email, Phone, and Message.",
          });
        }

        // Basic email format check
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          return res.status(400).json({
            success: false,
            error: "Please provide a valid email address.",
          });
        }

        const result = await sendContactEmail({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          category: category || "General Inquiry",
          message: message.trim(),
          agree: Boolean(agree),
        });

        console.log(`[Express /api/contact] Email dispatched successfully for ${name} (${email})`);

        return res.status(200).json({
          success: true,
          message: "Thank you for contacting Nikam Scientific! Your inquiry has been sent successfully. We will reply within 3 hours.",
          data: result,
        });
      } catch (err: any) {
        console.error("[Express /api/contact] Error sending email:", err);
        return res.status(500).json({
          success: false,
          error: "Failed to send email. Please try again or contact us directly at +91 9422685973.",
          details: dev ? err.message : undefined,
        });
      }
    });

    const PRODUCT_SLUGS = new Set([
      "burettes",
      "pipettes",
      "measuring-volumetric-flasks",
      "tube",
      "distillation-apparatus-parts-condensers",
      "standard-joints-stoppers-adapters",
      "flasks",
      "still-heads-splash-heads",
      "miscellaneous-fitting",
      "stirrers",
      "separating-dropping-funnels",
      "fractionating-columns",
      "distillation-apparatus",
      "chromatography-apparatus",
      "beakers",
      "bottles",
      "gas-apparatus",
      "miscellaneous-apparatus",
      "laboratory-ovens",
      "lab-water-bath",
      "bod-incubator",
      "autoclave",
      "pipeline-components",
      "vessels",
      "stirrers-2",
      "heat-exchangers",
      "column-components",
      "sight-glass",
    ]);

    // Legacy /demo-2 asset path compatibility
    server.use((req: Request, _res: Response, next) => {
      if (req.url.startsWith("/demo-2/")) {
        req.url = req.url.replace(/^\/demo-2/, "");
      }
      next();
    });

    // Direct WordPress product route compatibility
    server.use((req: Request, _res: Response, next) => {
      const cleanPath = req.path.replace(/^\/+|\/+$/g, "");
      if (PRODUCT_SLUGS.has(cleanPath)) {
        req.url = `/products/${cleanPath}`;
      }
      next();
    });

    // Delegate all other routes to Next.js handler
    server.all("*", (req: Request, res: Response) => {
      return handle(req, res);
    });

    server.listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
      console.log(`> Nikam Scientific App running with Node.js + Express + Next.js + Nodemailer`);
    });
  } catch (err) {
    console.error("Error starting server:", err);
    process.exit(1);
  }
}

main();
