import nodemailer from "nodemailer";

interface LeadEmailData {
  name: string;
  email: string;
  website: string;
  countryCode?: string;
  phone: string;
  budget?: string;
  targetKeywords?: string;
  preferredDate?: string;
  primaryGoal?: string;
  source?: string;
}

export async function sendLeadNotificationEmail(lead: LeadEmailData) {
  const recipientEmail = "skyranksolution@gmail.com";
  const fullPhone = lead.countryCode ? `${lead.countryCode} ${lead.phone}` : lead.phone;

  const budgetLabels: Record<string, string> = {
    "10k-25k": "₹10,000 – ₹25,000 / month (Starter SEO)",
    "25k-50k": "₹25,000 – ₹50,000 / month (Growth SEO)",
    "50k-plus": "₹50,000+ / month (Enterprise & Multi-City)",
  };

  const formattedBudget = lead.budget ? (budgetLabels[lead.budget] || lead.budget) : "Not Specified";

  const emailHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 20px; color: #1e293b; }
          .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
          .header { background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%); color: #ffffff; padding: 28px 24px; text-align: center; }
          .header h1 { margin: 0; font-size: 22px; font-weight: 800; }
          .header p { margin: 6px 0 0; font-size: 13px; opacity: 0.9; }
          .content { padding: 24px; }
          .lead-field { margin-bottom: 16px; border-bottom: 1px solid #f1f5f9; padding-bottom: 12px; }
          .label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 700; color: #64748b; margin-bottom: 4px; }
          .value { font-size: 15px; font-weight: 600; color: #0f172a; word-break: break-all; }
          .badge { display: inline-block; background-color: #dbeafe; color: #1d4ed8; padding: 4px 10px; border-radius: 8px; font-size: 13px; font-weight: 700; }
          .btn-group { margin-top: 24px; text-align: center; }
          .btn { display: inline-block; background: #2563eb; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 700; font-size: 14px; }
          .footer { background: #f8fafc; padding: 16px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="header">
            <h1>🚀 New 15-Day Free Demo Lead!</h1>
            <p>SkyRank Solution Website Lead Capture</p>
          </div>
          <div class="content">
            <div class="lead-field">
              <div class="label">Client Name</div>
              <div class="value">${lead.name}</div>
            </div>
            <div class="lead-field">
              <div class="label">Company Email</div>
              <div class="value"><a href="mailto:${lead.email}">${lead.email}</a></div>
            </div>
            <div class="lead-field">
              <div class="label">Website / Domain</div>
              <div class="value"><a href="${lead.website.startsWith("http") ? lead.website : `https://${lead.website}`}" target="_blank">${lead.website}</a></div>
            </div>
            <div class="lead-field">
              <div class="label">Phone / WhatsApp</div>
              <div class="value">
                <a href="tel:${fullPhone}">${fullPhone}</a> 
                &nbsp;|&nbsp; 
                <a href="https://wa.me/${fullPhone.replace(/[^0-9]/g, "")}" style="color: #16a34a; font-weight: bold;">Open in WhatsApp 💬</a>
              </div>
            </div>
            ${lead.targetKeywords ? `
            <div class="lead-field">
              <div class="label">Target Keywords to Rank</div>
              <div class="value" style="color: #2563eb; font-weight: 700;">🎯 ${lead.targetKeywords}</div>
            </div>
            ` : ""}
            ${lead.budget ? `
            <div class="lead-field">
              <div class="label">Monthly Budget Tier</div>
              <div class="value"><span class="badge">${formattedBudget}</span></div>
            </div>
            ` : ""}
            ${lead.preferredDate ? `
            <div class="lead-field">
              <div class="label">Preferred Consultation Time</div>
              <div class="value">${lead.preferredDate}</div>
            </div>
            ` : ""}
            ${lead.primaryGoal ? `
            <div class="lead-field">
              <div class="label">Primary Goal / Notes</div>
              <div class="value">${lead.primaryGoal}</div>
            </div>
            ` : ""}
            <div class="lead-field">
              <div class="label">Submission Timestamp</div>
              <div class="value">${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST</div>
            </div>

            <div class="btn-group">
              <a href="mailto:${lead.email}?subject=Your%20SkyRank%2015-Day%20Free%20SEO%20Demo%20Report" class="btn">
                Reply to Client Email
              </a>
            </div>
          </div>
          <div class="footer">
            SkyRank Solution • Money Plant High Street, Jagatpur Road, Jagatpur, Ahmedabad, Gujarat – 382470
          </div>
        </div>
      </body>
    </html>
  `;

  // Check if SMTP credentials are provided in environment
  const smtpUser = process.env.SMTP_USER || process.env.GMAIL_USER;
  const rawPass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD || "";
  const cleanPass = rawPass.replace(/\s+/g, "").trim();

  if (smtpUser && cleanPass) {
    try {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: smtpUser.trim(),
          pass: cleanPass,
        },
      });

      const info = await transporter.sendMail({
        from: `"SkyRank Solution Leads" <${smtpUser.trim()}>`,
        to: recipientEmail,
        replyTo: lead.email,
        subject: `🔥 New 15-Day Demo Lead: ${lead.name} (${lead.website})`,
        html: emailHtml,
      });

      console.log(`[REAL GMAIL SENT TO ${recipientEmail}] Message ID:`, info.messageId);
      return { success: true, messageId: info.messageId };
    } catch (err) {
      console.error("Nodemailer SMTP sending error:", err);
      // Fallback: Continue so user gets success screen, log details
    }
  } else {
    console.log(
      `[MOCK EMAIL to ${recipientEmail}] SMTP not configured yet. Lead Details:`,
      {
        to: recipientEmail,
        name: lead.name,
        email: lead.email,
        website: lead.website,
        phone: fullPhone,
        budget: formattedBudget,
      }
    );
  }

  return { success: true, simulated: !smtpUser };
}
