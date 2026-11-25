import { NextRequest, NextResponse } from "next/server";
import { validateContactForm } from "@/lib/validations/forms";
import { saveSubmission } from "@/lib/db/submissions";
import { sendLeadNotificationEmail } from "@/lib/email/mailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validation = validateContactForm(body);

    if (!validation.success) {
      return NextResponse.json(
        { success: false, errors: validation.errors },
        { status: 400 }
      );
    }

    const sanitized = validation.sanitizedData as unknown as Record<string, string>;
    const { id } = await saveSubmission("contact", sanitized);

    // Send email notification to skyranksolution@gmail.com
    await sendLeadNotificationEmail({
      name: sanitized.fullName,
      email: sanitized.email,
      website: sanitized.companyName || "Contact Inquiry",
      phone: sanitized.phone,
      primaryGoal: sanitized.message,
      budget: sanitized.monthlyBudget,
      source: "Contact Page Form",
    });

    return NextResponse.json({
      success: true,
      message: "Message received! A senior SEO strategist from SkyRank Solution will review your requirements and reach out within 1 business day.",
      submissionId: id,
    });
  } catch (error) {
    console.error("Contact form API error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to submit contact inquiry. Please try again or email us directly." },
      { status: 500 }
    );
  }
}
