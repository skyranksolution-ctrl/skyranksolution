import { NextRequest, NextResponse } from "next/server";
import { validateContactForm } from "@/lib/validations/forms";
import { saveSubmission } from "@/lib/db/submissions";

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

    const { id } = await saveSubmission("contact", validation.sanitizedData as unknown as Record<string, unknown>);

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
