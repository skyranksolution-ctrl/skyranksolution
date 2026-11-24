import { NextRequest, NextResponse } from "next/server";
import { validateConsultationForm, ConsultationFormData } from "@/lib/validations/forms";
import { saveSubmission } from "@/lib/db/submissions";
import { sendLeadNotificationEmail } from "@/lib/email/mailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validation = validateConsultationForm(body);

    if (!validation.success) {
      return NextResponse.json(
        { success: false, errors: validation.errors },
        { status: 400 }
      );
    }

    const sanitized = validation.sanitizedData as unknown as ConsultationFormData;
    const { id } = await saveSubmission(
      "consultation",
      sanitized as unknown as Record<string, unknown>
    );

    // Send email to skyranksolution@gmail.com
    await sendLeadNotificationEmail({
      name: sanitized.fullName,
      email: sanitized.email,
      website: sanitized.websiteUrl,
      phone: sanitized.phone,
      targetKeywords: sanitized.targetKeywords,
      preferredDate: sanitized.preferredDate,
      primaryGoal: sanitized.primaryGoal,
      source: "Strategy Session / 15-Day Free Demo Form",
    });

    return NextResponse.json({
      success: true,
      message:
        "Demo & Strategy Consultation booked! We have received your request and emailed your details to our search team.",
      submissionId: id,
    });
  } catch (error) {
    console.error("Consultation form API error:", error);
    return NextResponse.json(
      {
        success: false,
        message:
          "Could not schedule consultation. Please try again or contact us directly.",
      },
      { status: 500 }
    );
  }
}
