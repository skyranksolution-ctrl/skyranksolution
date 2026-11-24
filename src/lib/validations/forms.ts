export interface AuditFormData {
  websiteUrl: string;
  fullName: string;
  email: string;
  phone: string;
  targetLocation: string;
  targetKeywords: string;
  honeypot?: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone?: string;
  companyName?: string;
  serviceNeeded: string;
  monthlyBudget?: string;
  message: string;
  honeypot?: string;
}

export interface ConsultationFormData {
  fullName: string;
  email: string;
  phone: string;
  websiteUrl: string;
  preferredDate?: string;
  primaryGoal: string;
  honeypot?: string;
}

export interface ValidationResult<T> {
  success: boolean;
  errors: Partial<Record<keyof T, string>>;
  sanitizedData?: T;
}

function sanitizeString(str: string): string {
  return str.replace(/[<>]/g, "").trim();
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidUrl(url: string): boolean {
  try {
    const formatted = url.startsWith("http://") || url.startsWith("https://") ? url : `https://${url}`;
    const parsed = new URL(formatted);
    return parsed.hostname.includes(".");
  } catch {
    return false;
  }
}

export function validateAuditForm(data: AuditFormData): ValidationResult<AuditFormData> {
  const errors: Partial<Record<keyof AuditFormData, string>> = {};

  // Honeypot spam check
  if (data.honeypot && data.honeypot.trim() !== "") {
    return { success: false, errors: { email: "Spam detected." } };
  }

  if (!data.websiteUrl || !data.websiteUrl.trim()) {
    errors.websiteUrl = "Website URL is required.";
  } else if (!isValidUrl(data.websiteUrl)) {
    errors.websiteUrl = "Please provide a valid website domain or URL.";
  }

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = "Please enter your full name (minimum 2 characters).";
  }

  if (!data.email || !isValidEmail(data.email)) {
    errors.email = "Please enter a valid business email address.";
  }

  if (!data.phone || data.phone.trim().length < 7) {
    errors.phone = "Please enter a valid contact phone number.";
  }

  if (!data.targetLocation || !data.targetLocation.trim()) {
    errors.targetLocation = "Please specify your target market or location.";
  }

  if (!data.targetKeywords || !data.targetKeywords.trim()) {
    errors.targetKeywords = "Please enter 1 or more target keywords.";
  }

  const success = Object.keys(errors).length === 0;

  return {
    success,
    errors,
    sanitizedData: success
      ? {
          websiteUrl: sanitizeString(data.websiteUrl),
          fullName: sanitizeString(data.fullName),
          email: sanitizeString(data.email).toLowerCase(),
          phone: sanitizeString(data.phone),
          targetLocation: sanitizeString(data.targetLocation),
          targetKeywords: sanitizeString(data.targetKeywords),
        }
      : undefined,
  };
}

export function validateContactForm(data: ContactFormData): ValidationResult<ContactFormData> {
  const errors: Partial<Record<keyof ContactFormData, string>> = {};

  if (data.honeypot && data.honeypot.trim() !== "") {
    return { success: false, errors: { email: "Spam detected." } };
  }

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = "Please enter your full name.";
  }

  if (!data.email || !isValidEmail(data.email)) {
    errors.email = "Please enter a valid business email address.";
  }

  if (!data.serviceNeeded || !data.serviceNeeded.trim()) {
    errors.serviceNeeded = "Please select the service you are interested in.";
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = "Please provide project details (minimum 10 characters).";
  }

  const success = Object.keys(errors).length === 0;

  return {
    success,
    errors,
    sanitizedData: success
      ? {
          fullName: sanitizeString(data.fullName),
          email: sanitizeString(data.email).toLowerCase(),
          phone: data.phone ? sanitizeString(data.phone) : undefined,
          companyName: data.companyName ? sanitizeString(data.companyName) : undefined,
          serviceNeeded: sanitizeString(data.serviceNeeded),
          monthlyBudget: data.monthlyBudget ? sanitizeString(data.monthlyBudget) : undefined,
          message: sanitizeString(data.message),
        }
      : undefined,
  };
}

export function validateConsultationForm(data: ConsultationFormData): ValidationResult<ConsultationFormData> {
  const errors: Partial<Record<keyof ConsultationFormData, string>> = {};

  if (data.honeypot && data.honeypot.trim() !== "") {
    return { success: false, errors: { email: "Spam detected." } };
  }

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = "Please enter your full name.";
  }

  if (!data.email || !isValidEmail(data.email)) {
    errors.email = "Please enter a valid business email address.";
  }

  if (!data.phone || data.phone.trim().length < 7) {
    errors.phone = "Please enter your phone or WhatsApp number.";
  }

  if (!data.websiteUrl || !data.websiteUrl.trim()) {
    errors.websiteUrl = "Please provide your website URL.";
  } else if (!isValidUrl(data.websiteUrl)) {
    errors.websiteUrl = "Please provide a valid website domain.";
  }

  if (!data.primaryGoal || !data.primaryGoal.trim()) {
    errors.primaryGoal = "Please specify your primary organic growth goal.";
  }

  const success = Object.keys(errors).length === 0;

  return {
    success,
    errors,
    sanitizedData: success
      ? {
          fullName: sanitizeString(data.fullName),
          email: sanitizeString(data.email).toLowerCase(),
          phone: sanitizeString(data.phone),
          websiteUrl: sanitizeString(data.websiteUrl),
          preferredDate: data.preferredDate ? sanitizeString(data.preferredDate) : undefined,
          primaryGoal: sanitizeString(data.primaryGoal),
        }
      : undefined,
  };
}
