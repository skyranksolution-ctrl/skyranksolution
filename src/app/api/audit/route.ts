import { NextRequest, NextResponse } from "next/server";
import { validateAuditForm } from "@/lib/validations/forms";
import { saveSubmission } from "@/lib/db/submissions";
import { sendLeadNotificationEmail } from "@/lib/email/mailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validation = validateAuditForm(body);

    if (!validation.success) {
      return NextResponse.json(
        { success: false, errors: validation.errors },
        { status: 400 }
      );
    }

    const sanitized = validation.sanitizedData as unknown as Record<string, string>;
    const { id } = await saveSubmission("audit", sanitized);

    // Send email notification to skyranksolution@gmail.com
    await sendLeadNotificationEmail({
      name: sanitized.fullName,
      email: sanitized.email,
      website: sanitized.websiteUrl,
      phone: sanitized.phone,
      targetKeywords: sanitized.targetKeywords,
      primaryGoal: sanitized.targetLocation ? `Target Location: ${sanitized.targetLocation}` : undefined,
      source: "Free SEO Audit Form",
    });

    return NextResponse.json({
      success: true,
      message: "Thank you! Your SEO audit request has been registered. Our strategy team will inspect your domain and email your customized diagnostic report within 24 hours.",
      submissionId: id,
    });
  } catch (error) {
    console.error("Audit form API error:", error);
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred while processing your request. Please try again or reach out directly." },
      { status: 500 }
    );
  }
}
