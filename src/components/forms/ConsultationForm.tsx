"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  Loader2,
  CheckCircle2,
  AlertCircle,
  Calendar,
  Globe,
  KeyRound,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { ConsultationFormData } from "@/lib/validations/forms";

function ConsultationFormContent() {
  const searchParams = useSearchParams();
  const urlWebsite = searchParams.get("website") || "";
  const offer = searchParams.get("offer") || "";

  const [formData, setFormData] = useState<ConsultationFormData>(() => ({
    fullName: "",
    email: "",
    phone: "",
    websiteUrl: urlWebsite,
    targetKeywords: "",
    preferredDate: "",
    primaryGoal: "",
    honeypot: "",
  }));

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "fullName":
        if (!value.trim()) return "Full name is required.";
        if (value.trim().length < 2) return "Name must be at least 2 characters.";
        return "";
      case "email":
        if (!value.trim()) return "Work email address is required.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          return "Please enter a valid business email address.";
        }
        return "";
      case "phone":
        if (!value.trim()) return "Phone or WhatsApp number is required.";
        const digits = value.replace(/[^0-9]/g, "");
        if (digits.length < 7 || digits.length > 15) {
          return "Please enter a valid 7 to 15 digit contact number.";
        }
        return "";
      case "websiteUrl":
        if (!value.trim()) return "Target website URL is required.";
        if (!/^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/.*)?$/.test(value.trim())) {
          return "Please enter a valid domain (e.g. yourcompany.com).";
        }
        return "";
      case "targetKeywords":
        if (!value.trim()) return "Please enter 1 or more target keywords you want to rank.";
        if (value.trim().length < 2) return "Keyword must be at least 2 characters.";
        return "";
      default:
        return "";
    }
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const errorMsg = validateField(field, formData[field as keyof ConsultationFormData] || "");
    setErrors((prev) => ({ ...prev, [field]: errorMsg || "" }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const errorMsg = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: errorMsg || "" }));
    }
  };

  const validateAll = (): boolean => {
    const newErrors: Record<string, string> = {};
    const nameErr = validateField("fullName", formData.fullName);
    if (nameErr) newErrors.fullName = nameErr;

    const emailErr = validateField("email", formData.email);
    if (emailErr) newErrors.email = emailErr;

    const phoneErr = validateField("phone", formData.phone);
    if (phoneErr) newErrors.phone = phoneErr;

    const webErr = validateField("websiteUrl", formData.websiteUrl);
    if (webErr) newErrors.websiteUrl = webErr;

    const kwErr = validateField("targetKeywords", formData.targetKeywords);
    if (kwErr) newErrors.targetKeywords = kwErr;

    setErrors(newErrors);
    setTouched({
      fullName: true,
      email: true,
      phone: true,
      websiteUrl: true,
      targetKeywords: true,
    });
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateAll()) {
      return;
    }

    setLoading(true);
    setErrors({});
    setSuccessMessage(null);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        if (data.errors) {
          setErrors(data.errors);
        } else {
          setErrorMessage(data.message || "Failed to schedule consultation.");
        }
      } else {
        setSuccessMessage(data.message);
      }
    } catch {
      setErrorMessage("Network error occurred. Please try again or reach out on WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  const whatsappDirectUrl = `https://wa.me/919408626950?text=${encodeURIComponent(
    `Hello SkyRank Solution, I have submitted a 15-Day Free Demo request for my website (${formData.websiteUrl}) with keywords: "${formData.targetKeywords}".`
  )}`;

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-100 relative">
      {/* Active Offer Ribbon */}
      {(offer === "15-days-free-demo" || !offer) && (
        <div className="mb-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
          <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
          <span>15-DAY FREE RISK-FREE DEMO ACTIVE • ZERO UPFRONT COST</span>
        </div>
      )}

      {successMessage ? (
        <div className="text-center py-8 space-y-4">
          <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-md">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-black text-slate-900 tracking-tight">
            15-Day Demo Booked Successfully!
          </h3>
          <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
            Thank you, <strong>{formData.fullName}</strong>. Your website and keyword requirements have been emailed directly to our search team at <strong>skyranksolution@gmail.com</strong>.
          </p>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs space-y-1.5 text-slate-700 max-w-md mx-auto">
            <div><strong>Website Domain:</strong> {formData.websiteUrl}</div>
            <div><strong>Target Keywords:</strong> <span className="text-blue-600 font-bold">{formData.targetKeywords}</span></div>
            <div><strong>Work Email:</strong> {formData.email}</div>
            <div><strong>Phone / WhatsApp:</strong> {formData.phone}</div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-md transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Instant WhatsApp Confirmation</span>
            </a>

            <button
              type="button"
              onClick={() => {
                setSuccessMessage(null);
                setFormData({
                  fullName: "",
                  email: "",
                  phone: "",
                  websiteUrl: "",
                  targetKeywords: "",
                  preferredDate: "",
                  primaryGoal: "",
                  honeypot: "",
                });
                setErrors({});
                setTouched({});
              }}
              className="text-xs font-bold text-slate-600 hover:text-slate-900 underline"
            >
              Submit Another Website
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <div className="hidden" aria-hidden="true">
            <input
              type="text"
              name="honeypot"
              tabIndex={-1}
              value={formData.honeypot}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>

          {errorMessage && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 text-red-700 text-xs sm:text-sm">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* 1. Full Name */}
            <div>
              <label htmlFor="consultFullName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Your Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="consultFullName"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                onBlur={() => handleBlur("fullName")}
                className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 focus:outline-none transition-colors ${
                  errors.fullName
                    ? "border-red-400 bg-red-50/20 focus:ring-2 focus:ring-red-400/30"
                    : touched.fullName && !errors.fullName
                    ? "border-emerald-400 bg-white"
                    : "border-slate-300 focus:border-blue-600"
                }`}
              />
              {errors.fullName && (
                <p className="text-[11px] font-semibold text-red-600 flex items-center gap-1 mt-1 pl-1">
                  <AlertCircle className="w-3 h-3 text-red-500 shrink-0" />
                  <span>{errors.fullName}</span>
                </p>
              )}
            </div>

            {/* 2. Work Email */}
            <div>
              <label htmlFor="consultEmail" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Work Email <span className="text-red-500">*</span>
              </label>
              <input
                id="consultEmail"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={() => handleBlur("email")}
                className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 focus:outline-none transition-colors ${
                  errors.email
                    ? "border-red-400 bg-red-50/20 focus:ring-2 focus:ring-red-400/30"
                    : touched.email && !errors.email
                    ? "border-emerald-400 bg-white"
                    : "border-slate-300 focus:border-blue-600"
                }`}
              />
              {errors.email && (
                <p className="text-[11px] font-semibold text-red-600 flex items-center gap-1 mt-1 pl-1">
                  <AlertCircle className="w-3 h-3 text-red-500 shrink-0" />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>

            {/* 3. Phone / WhatsApp */}
            <div>
              <label htmlFor="consultPhone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Phone / WhatsApp <span className="text-red-500">*</span>
              </label>
              <input
                id="consultPhone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onBlur={() => handleBlur("phone")}
                className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 focus:outline-none transition-colors ${
                  errors.phone
                    ? "border-red-400 bg-red-50/20 focus:ring-2 focus:ring-red-400/30"
                    : touched.phone && !errors.phone
                    ? "border-emerald-400 bg-white"
                    : "border-slate-300 focus:border-blue-600"
                }`}
              />
              {errors.phone && (
                <p className="text-[11px] font-semibold text-red-600 flex items-center gap-1 mt-1 pl-1">
                  <AlertCircle className="w-3 h-3 text-red-500 shrink-0" />
                  <span>{errors.phone}</span>
                </p>
              )}
            </div>

            {/* 4. Target Website URL */}
            <div>
              <label htmlFor="consultWebsite" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Current Website URL <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Globe className="w-4 h-4" />
                </div>
                <input
                  id="consultWebsite"
                  type="text"
                  name="websiteUrl"
                  value={formData.websiteUrl}
                  onChange={handleChange}
                  onBlur={() => handleBlur("websiteUrl")}
                  className={`w-full pl-9 pr-4 py-2.5 rounded-xl border text-sm text-slate-900 focus:outline-none transition-colors ${
                    errors.websiteUrl
                      ? "border-red-400 bg-red-50/20 focus:ring-2 focus:ring-red-400/30"
                      : touched.websiteUrl && !errors.websiteUrl
                      ? "border-emerald-400 bg-white"
                      : "border-slate-300 focus:border-blue-600"
                  }`}
                />
              </div>
              {errors.websiteUrl && (
                <p className="text-[11px] font-semibold text-red-600 flex items-center gap-1 mt-1 pl-1">
                  <AlertCircle className="w-3 h-3 text-red-500 shrink-0" />
                  <span>{errors.websiteUrl}</span>
                </p>
              )}
            </div>
          </div>

          {/* 5. Target Keywords to Rank #1 (Explicitly requested by user) */}
          <div>
            <label htmlFor="targetKeywords" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Target Keywords to Rank on Google #1 <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <KeyRound className="w-4 h-4 text-blue-600" />
              </div>
              <input
                id="targetKeywords"
                type="text"
                name="targetKeywords"
                value={formData.targetKeywords}
                onChange={handleChange}
                onBlur={() => handleBlur("targetKeywords")}
                className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-slate-900 focus:outline-none transition-colors ${
                  errors.targetKeywords
                    ? "border-red-400 bg-red-50/20 focus:ring-2 focus:ring-red-400/30"
                    : touched.targetKeywords && !errors.targetKeywords
                    ? "border-emerald-400 bg-white"
                    : "border-slate-300 focus:border-blue-600"
                }`}
              />
            </div>
            {errors.targetKeywords && (
              <p className="text-[11px] font-semibold text-red-600 flex items-center gap-1 mt-1 pl-1">
                <AlertCircle className="w-3 h-3 text-red-500 shrink-0" />
                <span>{errors.targetKeywords}</span>
              </p>
            )}
          </div>

          {/* 6. Preferred Timeframe */}
          <div>
            <label htmlFor="preferredDate" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Preferred Consultation Timeframe
            </label>
            <select
              id="preferredDate"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-blue-600 bg-white cursor-pointer"
            >
              <option value="">-- Earliest Availability --</option>
              <option value="Next 24 Hours (Urgent Priority)">Within next 24 Hours (Urgent)</option>
              <option value="This Week (Morning Slot)">This Week — Morning Slot (10 AM - 1 PM)</option>
              <option value="This Week (Afternoon Slot)">This Week — Afternoon Slot (2 PM - 6 PM)</option>
              <option value="Next Week">Next Week</option>
            </select>
          </div>

          {/* 7. Additional Notes / Growth Objective */}
          <div>
            <label htmlFor="primaryGoal" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Additional Notes / Growth Objective (Optional)
            </label>
            <textarea
              id="primaryGoal"
              name="primaryGoal"
              rows={2}
              value={formData.primaryGoal}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-blue-600"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-black text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-700 shadow-xl shadow-blue-600/30 transition-all disabled:opacity-60 cursor-pointer text-sm md:text-base hover:scale-[1.01] active:scale-[0.99]"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Confirming Demo &amp; Dispatching Details...</span>
                </>
              ) : (
                <>
                  <span>CONFIRM 15-DAY DEMO &amp; STRATEGY CALL</span>
                  <Calendar className="w-4 h-4" />
                </>
              )}
            </button>
            <p className="text-center text-xs text-slate-500 mt-2">
              Zero obligation • 15 days risk-free on your domain • Notification sent directly to skyranksolution@gmail.com
            </p>
          </div>
        </form>
      )}
    </div>
  );
}

export function ConsultationForm() {
  return (
    <Suspense
      fallback={
        <div className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-100 flex items-center justify-center py-20">
          <Loader2 className="w-6 h-6 animate-spin text-blue-600" />
        </div>
      }
    >
      <ConsultationFormContent />
    </Suspense>
  );
}
