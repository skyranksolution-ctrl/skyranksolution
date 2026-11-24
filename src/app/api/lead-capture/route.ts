import { NextRequest, NextResponse } from "next/server";
import { saveSubmission } from "@/lib/db/submissions";
import { sendLeadNotificationEmail } from "@/lib/email/mailer";

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidDomainOrUrl(url: string): boolean {
  const trimmed = url.trim();
  if (trimmed.length < 3) return false;
  // Allows example.com, www.example.com, https://example.com, sub.example.co.in
  const domainRegex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/.*)?$/;
  return domainRegex.test(trimmed);
}

function isValidPhone(phone: string): boolean {
  const digits = phone.replace(/[^0-9]/g, "");
  return digits.length >= 7 && digits.length <= 15;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      website,
      countryCode = "+91",
      phone,
      keywords,
      targetKeywords,
      budget,
    } = body;

    const errors: Record<string, string> = {};

    // 1. Name Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      errors.name = "Please enter your full name (at least 2 characters).";
    }

    // 2. Email Validation
    if (!email || typeof email !== "string" || !isValidEmail(email.trim())) {
      errors.email = "Please enter a valid company email address.";
    }

    // 3. Website Validation
    if (!website || typeof website !== "string" || !isValidDomainOrUrl(website.trim())) {
      errors.website = "Please enter a valid website URL (e.g. yourbrand.com).";
    }

    // 4. Phone Validation
    if (!phone || typeof phone !== "string" || !isValidPhone(phone.trim())) {
      errors.phone = "Please enter a valid contact phone or WhatsApp number (7–15 digits).";
    }

    // 5. Target Keywords Validation (Replacing monthly budget)
    const finalKeywords = (keywords || targetKeywords || "").trim();
    if (!finalKeywords || finalKeywords.length < 2) {
      errors.keywords = "Please enter 1 or more target keywords you want to rank.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { success: false, errors },
        { status: 400 }
      );
    }

    const sanitizedLead = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      website: website.trim().replace(/^https?:\/\//, ""),
      countryCode: countryCode.trim(),
      phone: phone.trim().replace(/[^0-9]/g, ""),
      targetKeywords: finalKeywords,
      budget: budget ? budget.trim() : undefined,
      source: "Hero 15-Day Free Demo Form",
      submittedAt: new Date().toISOString(),
    };

    // Save to database/repository
    const { id } = await saveSubmission("consultation", sanitizedLead);

    // Send email to skyranksolution@gmail.com
    await sendLeadNotificationEmail(sanitizedLead);

    return NextResponse.json({
      success: true,
      message: "Free 15-Day Demo request received! We have notified our lead search team.",
      submissionId: id,
    });
  } catch (error) {
    console.error("Lead Capture API Error:", error);
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
