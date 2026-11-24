import { NextRequest, NextResponse } from "next/server";
import { validateConsultationForm } from "@/lib/validations/forms";
import { saveSubmission } from "@/lib/db/submissions";

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

    const { id } = await saveSubmission("consultation", validation.sanitizedData as unknown as Record<string, unknown>);

    return NextResponse.json({
      success: true,
      message: "Consultation booked! We have received your request and will confirm your meeting slot with our Lead SEO Consultant shortly.",
      submissionId: id,
    });
  } catch (error) {
    console.error("Consultation form API error:", error);
    return NextResponse.json(
      { success: false, message: "Could not schedule consultation. Please try again or contact us directly." },
      { status: 500 }
    );
  }
}
