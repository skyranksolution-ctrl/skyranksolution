import { NextRequest, NextResponse } from "next/server";
import { validateAuditForm } from "@/lib/validations/forms";
import { saveSubmission } from "@/lib/db/submissions";

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

    const { id } = await saveSubmission("audit", validation.sanitizedData as unknown as Record<string, unknown>);

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
