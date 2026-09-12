import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail, ContactFormData } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ContactFormData;
    const { name, email, phone, category, message, agree } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        {
          success: false,
          error: "Please fill in all required fields: Name, Email, Phone, and Message.",
        },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          error: "Please provide a valid email address.",
        },
        { status: 400 }
      );
    }

    const result = await sendContactEmail({
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      category: category || "General Inquiry",
      message: message.trim(),
      agree: Boolean(agree),
    });

    return NextResponse.json({
      success: true,
      message: "Thank you for contacting Nikam Scientific! Your inquiry has been sent successfully. We will reply within 3 hours.",
      data: result,
    });
  } catch (err: any) {
    console.error("[Next.js /api/contact] Error sending email:", err);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to send email. Please try again or contact us directly at +91 9422685973.",
      },
      { status: 500 }
    );
  }
}
