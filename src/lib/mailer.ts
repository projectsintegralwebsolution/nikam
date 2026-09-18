import nodemailer from "nodemailer";

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  category: string;
  message: string;
  agree?: boolean;
}

// Create Nodemailer Transporter
export async function getTransporter() {
  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const port = parseInt(process.env.SMTP_PORT || "587", 10);
  const secure = process.env.SMTP_SECURE === "true";
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  // If credentials are provided, use standard SMTP transporter
  if (user && pass) {
    return nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user,
        pass,
      },
      connectionTimeout: 10000,
    });
  }

  // Fallback for development/testing: use instant local transporter
  console.log("ℹ️ [Mailer] No external SMTP credentials configured in .env. Using local mail logger (instant dev mode)...");
  return nodemailer.createTransport({
    jsonTransport: true,
  });
}

// Send Contact/Quote Inquiry Email to:
// 1. Customer (Confirmation / Auto-Responder)
// 2. Website Owner (nikamscientific@gmail.com)
// 3. Technical Partner (integralwebsolution@gmail.com)
export async function sendContactEmail(data: ContactFormData) {
  const transporter = await getTransporter();

  const ownerEmail = process.env.OWNER_EMAIL || process.env.CONTACT_EMAIL_TO || "nikamscientific@gmail.com";
  const agencyEmail = process.env.ADMIN_NOTIFY_EMAIL || "integralwebsolution@gmail.com";
  const senderAddress = process.env.SMTP_USER || "integralwebsolution@gmail.com";
  const fromEmail = process.env.SMTP_FROM || process.env.CONTACT_EMAIL_FROM || `"Nikam Scientific Co." <${senderAddress}>`;

  const submissionDate = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "medium",
  });

  const customerHtml = generateCustomerEmailHtml(data, submissionDate, ownerEmail);
  const ownerHtml = generateLeadAlertEmailHtml(data, submissionDate, "owner");
  const agencyHtml = generateLeadAlertEmailHtml(data, submissionDate, "technical");

  console.log(`📨 [Mailer] Dispatching 3 emails for lead from ${data.name} (${data.email}):`);
  console.log(`   1. Customer Auto-Confirmation -> ${data.email}`);
  console.log(`   2. Website Owner Alert       -> ${ownerEmail}`);
  console.log(`   3. Technical Notification    -> ${agencyEmail}`);

  // Send all 3 emails in parallel with individual error resilience
  const [customerResult, ownerResult, agencyResult] = await Promise.allSettled([
    // 1. Email to Customer
    transporter.sendMail({
      from: fromEmail,
      to: data.email,
      replyTo: ownerEmail,
      subject: `Thank you for contacting Nikam Scientific - Inquiry Acknowledgment [${data.category}]`,
      html: customerHtml,
    }),

    // 2. Email to Website Owner (nikamscientific@gmail.com)
    transporter.sendMail({
      from: fromEmail,
      to: ownerEmail,
      replyTo: `"${data.name}" <${data.email}>`,
      subject: `🔥 [New Website Lead] ${data.category} - from ${data.name}`,
      html: ownerHtml,
    }),

    // 3. Email to Technical / Agency (integralwebsolution@gmail.com)
    transporter.sendMail({
      from: fromEmail,
      to: agencyEmail,
      replyTo: `"${data.name}" <${data.email}>`,
      subject: `📋 [Web Lead Notification] ${data.category} - ${data.name}`,
      html: agencyHtml,
    }),
  ]);

  const resultsSummary = {
    customer: customerResult.status === "fulfilled" ? "sent" : `failed: ${(customerResult as PromiseRejectedResult).reason}`,
    owner: ownerResult.status === "fulfilled" ? "sent" : `failed: ${(ownerResult as PromiseRejectedResult).reason}`,
    agency: agencyResult.status === "fulfilled" ? "sent" : `failed: ${(agencyResult as PromiseRejectedResult).reason}`,
  };

  console.log("📬 [Mailer Results]:", resultsSummary);

  const primaryMessageId =
    ownerResult.status === "fulfilled" ? (ownerResult.value as any)?.messageId : undefined;

  return {
    success: true,
    messageId: primaryMessageId,
    details: resultsSummary,
  };
}

// ============================================================================
// HTML Email Templates
// ============================================================================

function generateCustomerEmailHtml(data: ContactFormData, submissionDate: string, ownerEmail: string): string {
  const escapedName = escapeHtml(data.name);
  const escapedEmail = escapeHtml(data.email);
  const escapedPhone = escapeHtml(data.phone);
  const escapedCategory = escapeHtml(data.category);
  const escapedMessage = escapeHtml(data.message);

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Inquiry Acknowledgment - Nikam Scientific Co.</title>
  <style>
    body { margin: 0; padding: 0; background-color: #f4f6f8; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #333333; -webkit-font-smoothing: antialiased; }
    table { border-collapse: collapse; }
    .wrapper { width: 100%; table-layout: fixed; background-color: #f4f6f8; padding: 30px 10px; }
    .main { background: #ffffff; max-width: 600px; margin: 0 auto; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06); border: 1px solid #e5e7eb; }
    .header { background: #021330; padding: 32px 30px 24px; text-align: center; border-bottom: 4px solid #ff7522; }
    .header h1 { color: #ffffff; margin: 0; font-size: 24px; font-weight: 800; letter-spacing: 0.5px; }
    .header p { color: #ff7522; margin: 6px 0 0; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }
    .content { padding: 32px 30px; line-height: 1.6; }
    .badge { display: inline-block; background: #fff3ec; color: #ff7522; border: 1px solid #ffd8c2; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 700; margin-bottom: 20px; }
    .greeting { font-size: 18px; font-weight: 700; color: #121315; margin-bottom: 12px; }
    .summary-card { background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 10px; padding: 20px; margin: 24px 0; }
    .summary-title { font-size: 14px; font-weight: 700; color: #121315; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 14px; padding-bottom: 8px; border-bottom: 2px solid #ff7522; }
    .data-row { margin-bottom: 10px; font-size: 14px; }
    .data-label { color: #6b7280; font-weight: 600; width: 140px; display: inline-block; }
    .data-value { color: #111827; font-weight: 500; }
    .msg-quote { background: #ffffff; border-left: 3px solid #ff7522; padding: 12px 14px; margin-top: 10px; font-size: 13px; color: #374151; font-style: italic; border-radius: 0 6px 6px 0; }
    .next-steps { background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 16px 18px; margin: 24px 0; font-size: 13px; color: #166534; }
    .next-steps strong { color: #14532d; display: block; margin-bottom: 4px; font-size: 14px; }
    .cta-box { text-align: center; margin: 28px 0 10px; padding: 20px; background: #fff7ed; border-radius: 10px; border: 1px solid #ffedd5; }
    .cta-btn { display: inline-block; background: #ff7522; color: #ffffff !important; text-decoration: none; padding: 12px 28px; border-radius: 6px; font-weight: 700; font-size: 14px; margin-top: 10px; }
    .footer { background: #021330; color: #9ca3af; padding: 24px 30px; text-align: center; font-size: 12px; line-height: 1.6; border-top: 1px solid rgba(255,255,255,0.08); }
    .footer a { color: #ff7522; text-decoration: none; }
  </style>
</head>
<body>
  <div class="wrapper">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
      <tr>
        <td align="center">
          <div class="main">
            <!-- Header -->
            <div class="header">
              <h1>NIKAM SCIENTIFIC CO.</h1>
              <p>Precision Laboratory Glassware & Equipment Manufacturer &bull; Est. 1996</p>
            </div>

            <!-- Content -->
            <div class="content">
              <span class="badge">&check; INQUIRY RECEIVED &amp; LOGGED</span>
              <div class="greeting">Dear ${escapedName},</div>
              <p style="margin: 0 0 14px; color: #4b5563;">
                Thank you for reaching out to <strong>Nikam Scientific</strong>. We have successfully received your product inquiry and technical request regarding <strong>${escapedCategory}</strong>.
              </p>

              <!-- Summary Card -->
              <div class="summary-card">
                <div class="summary-title">Summary of Your Request</div>
                <div class="data-row"><span class="data-label">Product / Category:</span> <span class="data-value" style="color: #ff7522; font-weight: 700;">${escapedCategory}</span></div>
                <div class="data-row"><span class="data-label">Registered Email:</span> <span class="data-value">${escapedEmail}</span></div>
                <div class="data-row"><span class="data-label">Phone Number:</span> <span class="data-value">${escapedPhone}</span></div>
                <div class="data-row"><span class="data-label">Submission Date:</span> <span class="data-value">${submissionDate}</span></div>
                <div style="margin-top: 12px;">
                  <span class="data-label" style="display: block; margin-bottom: 4px;">Your Message / Requirements:</span>
                  <div class="msg-quote">${escapedMessage}</div>
                </div>
              </div>

              <!-- Next Steps -->
              <div class="next-steps">
                <strong>What happens next?</strong>
                Our engineering and technical sales team in Boisar, Maharashtra is currently reviewing your technical specifications. We will respond with product availability, CAD feasibility, and formal commercial quotation within <strong>3-4 business hours</strong>.
              </div>

              <!-- Direct Call / Urgent Assistance -->
              <div class="cta-box">
                <div style="font-size: 14px; font-weight: 700; color: #9a3412;">Need Immediate Technical or Urgent Assistance?</div>
                <div style="font-size: 12px; color: #78350f; margin-top: 4px;">Our sales desk is active Monday through Saturday, 9:00 AM - 7:00 PM IST.</div>
                <a href="tel:+919422685973" class="cta-btn">&phone; Call Sales Desk: +91 9422685973</a>
              </div>
            </div>

            <!-- Footer -->
            <div class="footer">
              <strong>Nikam Scientific Co.</strong><br>
              Unit No - 18, 19 &amp; 20, Jay Ambe Nagar, Shivaji Nagar, Dist. Palghar, Salvad - 401 504, Boisar (W), Maharashtra, India<br>
              Direct: <a href="tel:+919422685973">+91 9422685973</a> | <a href="tel:+919359366254">+91 9359366254</a> | Email: <a href="mailto:${ownerEmail}">${ownerEmail}</a><br>
              Website: <a href="https://nikamscientific.com/">www.nikamscientific.com</a>
            </div>
          </div>
        </td>
      </tr>
    </table>
  </div>
</body>
</html>
  `;
}

function generateLeadAlertEmailHtml(
  data: ContactFormData,
  submissionDate: string,
  recipientRole: "owner" | "technical"
): string {
  const escapedName = escapeHtml(data.name);
  const escapedEmail = escapeHtml(data.email);
  const escapedPhone = escapeHtml(data.phone);
  const escapedCategory = escapeHtml(data.category);
  const escapedMessage = escapeHtml(data.message);

  const headerBadge =
    recipientRole === "owner"
      ? "WEBSITE LEAD ALERT &bull; INQUIRY DESK"
      : "TECHNICAL NOTIFICATION &bull; INTEGRAL WEB SOLUTION";

  const bannerColor = recipientRole === "owner" ? "#ff7522" : "#2563eb";

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Website Lead - Nikam Scientific</title>
  <style>
    body { margin: 0; padding: 0; background-color: #0f172a; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #333333; }
    table { border-collapse: collapse; }
    .wrapper { width: 100%; table-layout: fixed; background-color: #0f172a; padding: 30px 10px; }
    .main { background: #ffffff; max-width: 600px; margin: 0 auto; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.3); }
    .header { background: #021330; padding: 28px 30px; border-bottom: 4px solid ${bannerColor}; text-align: left; }
    .header-tag { display: inline-block; background: ${bannerColor}; color: #ffffff; font-size: 10px; font-weight: 800; letter-spacing: 1px; padding: 3px 8px; border-radius: 4px; text-transform: uppercase; margin-bottom: 8px; }
    .header h1 { color: #ffffff; margin: 0; font-size: 20px; font-weight: 800; }
    .content { padding: 30px; }
    .lead-highlight { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 20px; margin-bottom: 24px; }
    .table-lead { width: 100%; }
    .table-lead th { text-align: left; padding: 9px 0; color: #64748b; font-size: 13px; font-weight: 600; width: 35%; border-bottom: 1px solid #f1f5f9; }
    .table-lead td { padding: 9px 0; color: #0f172a; font-size: 14px; border-bottom: 1px solid #f1f5f9; }
    .category-pill { display: inline-block; background: #ff7522; color: #ffffff; font-weight: 700; font-size: 12px; padding: 3px 10px; border-radius: 4px; }
    .message-container { background: #ffffff; border: 2px solid #e2e8f0; border-radius: 8px; padding: 16px; margin: 16px 0 24px; font-size: 14px; line-height: 1.6; color: #1e293b; white-space: pre-wrap; font-family: monospace; }
    .action-row { text-align: center; margin: 24px 0 10px; }
    .btn-reply { display: inline-block; background: #ff7522; color: #ffffff !important; text-decoration: none; padding: 12px 22px; border-radius: 6px; font-weight: 700; font-size: 13px; margin: 4px 6px; }
    .btn-call { display: inline-block; background: #021330; color: #ffffff !important; text-decoration: none; padding: 12px 22px; border-radius: 6px; font-weight: 700; font-size: 13px; margin: 4px 6px; }
    .footer { background: #021330; color: #94a3b8; padding: 20px 30px; text-align: center; font-size: 11px; line-height: 1.6; border-top: 1px solid rgba(255,255,255,0.08); }
  </style>
</head>
<body>
  <div class="wrapper">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
      <tr>
        <td align="center">
          <div class="main">
            <!-- Header -->
            <div class="header">
              <span class="header-tag">${headerBadge}</span>
              <h1>New Quote / Contact Inquiry Received</h1>
              <p style="color: #94a3b8; font-size: 12px; margin: 4px 0 0;">Received through Nikam Scientific Website Portal &bull; ${submissionDate}</p>
            </div>

            <!-- Content -->
            <div class="content">
              <!-- Lead Details Card -->
              <div class="lead-highlight">
                <table class="table-lead">
                  <tr>
                    <th>Lead Name</th>
                    <td><strong style="font-size: 16px; color: #021330;">${escapedName}</strong></td>
                  </tr>
                  <tr>
                    <th>Email Address</th>
                    <td><a href="mailto:${escapedEmail}" style="color: #ff7522; font-weight: 600; text-decoration: underline;">${escapedEmail}</a></td>
                  </tr>
                  <tr>
                    <th>Phone Number</th>
                    <td><a href="tel:${escapedPhone}" style="color: #021330; font-weight: 700; text-decoration: underline;">${escapedPhone}</a></td>
                  </tr>
                  <tr>
                    <th>Product / Area</th>
                    <td><span class="category-pill">${escapedCategory}</span></td>
                  </tr>
                  <tr>
                    <th>Submitted On</th>
                    <td>${submissionDate}</td>
                  </tr>
                </table>
              </div>

              <!-- Message / Specification -->
              <div style="font-size: 13px; font-weight: 700; color: #475569; text-transform: uppercase; letter-spacing: 0.5px;">Customer Message / Specification Details:</div>
              <div class="message-container">${escapedMessage}</div>

              <!-- Action Buttons -->
              <div class="action-row">
                <a href="mailto:${escapedEmail}?subject=Re: Nikam Scientific Quote for ${encodeURIComponent(data.category)}" class="btn-reply">&#9993; Reply via Email</a>
                <a href="tel:${escapedPhone}" class="btn-call">&phone; Call: ${escapedPhone}</a>
              </div>
            </div>

            <!-- Footer -->
            <div class="footer">
              This automated notification was generated by the Nikam Scientific Node/Express Backend.<br>
              Recipient: ${recipientRole === "owner" ? "nikamscientific@gmail.com" : "integralwebsolution@gmail.com"} &bull; Destination: nikamscientific.com
            </div>
          </div>
        </td>
      </tr>
    </table>
  </div>
</body>
</html>
  `;
}

function escapeHtml(str: string): string {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
