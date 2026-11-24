"use client";

import React, { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle, Calendar } from "lucide-react";
import { ConsultationFormData } from "@/lib/validations/forms";

export function ConsultationForm() {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: "",
    email: "",
    phone: "",
    websiteUrl: "",
    preferredDate: "",
    primaryGoal: "",
    honeypot: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[e.target.name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          websiteUrl: "",
          preferredDate: "",
          primaryGoal: "",
          honeypot: "",
        });
      }
    } catch {
      setErrorMessage("Network error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-slate-100">
      {successMessage ? (
        <div className="text-center py-10">
          <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Consultation Scheduled!</h3>
          <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">{successMessage}</p>
          <button
            type="button"
            onClick={() => setSuccessMessage(null)}
            className="text-sm font-semibold text-blue-600 hover:text-blue-700 underline"
          >
            Schedule Another Consultation
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
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
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3 text-red-700 text-sm">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="consultFullName" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                Your Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="consultFullName"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Alex Morgan"
                required
                className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none transition-colors ${errors.fullName ? "border-red-300 bg-red-50/20" : "border-slate-300 focus:border-blue-600"
                  }`}
              />
              {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
            </div>

            <div>
              <label htmlFor="consultEmail" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                Work Email <span className="text-red-500">*</span>
              </label>
              <input
                id="consultEmail"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="alex@company.com"
                required
                className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none transition-colors ${errors.email ? "border-red-300 bg-red-50/20" : "border-slate-300 focus:border-blue-600"
                  }`}
              />
              {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="consultPhone" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                Phone / WhatsApp <span className="text-red-500">*</span>
              </label>
              <input
                id="consultPhone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 94086 26950"
                required
                className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none transition-colors ${errors.phone ? "border-red-300 bg-red-50/20" : "border-slate-300 focus:border-blue-600"
                  }`}
              />
              {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label htmlFor="consultWebsite" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                Current Website URL <span className="text-red-500">*</span>
              </label>
              <input
                id="consultWebsite"
                type="text"
                name="websiteUrl"
                value={formData.websiteUrl}
                onChange={handleChange}
                placeholder="yourcompany.com"
                required
                className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none transition-colors ${errors.websiteUrl ? "border-red-300 bg-red-50/20" : "border-slate-300 focus:border-blue-600"
                  }`}
              />
              {errors.websiteUrl && <p className="text-xs text-red-600 mt-1">{errors.websiteUrl}</p>}
            </div>

            <div className="md:col-span-2">
              <label htmlFor="preferredDate" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                Preferred Consultation Timeframe
              </label>
              <select
                id="preferredDate"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-blue-600"
              >
                <option value="">-- Earliest Availability --</option>
                <option value="Next 24 Hours (Urgent Priority)">Within next 24 Hours (Urgent)</option>
                <option value="This Week (Morning Slot)">This Week — Morning Slot (10 AM - 1 PM)</option>
                <option value="This Week (Afternoon Slot)">This Week — Afternoon Slot (2 PM - 6 PM)</option>
                <option value="Next Week">Next Week</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="primaryGoal" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
              Primary Organic Growth Objective <span className="text-red-500">*</span>
            </label>
            <textarea
              id="primaryGoal"
              name="primaryGoal"
              rows={3}
              value={formData.primaryGoal}
              onChange={handleChange}
              placeholder="e.g. We want to double organic leads in 6 months, recover from a traffic drop, or scale in the US and UK markets..."
              required
              className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none transition-colors ${errors.primaryGoal ? "border-red-300 bg-red-50/20" : "border-slate-300 focus:border-blue-600"
                }`}
            />
            {errors.primaryGoal && <p className="text-xs text-red-600 mt-1">{errors.primaryGoal}</p>}
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/30 transition-all disabled:opacity-60 cursor-pointer text-sm md:text-base"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Confirming Slot...
                </>
              ) : (
                <>
                  Confirm Strategy Consultation
                  <Calendar className="w-4 h-4" />
                </>
              )}
            </button>
            <p className="text-center text-xs text-slate-500 mt-2">
              30-minute private strategy session with a Senior SEO Strategist. No obligation.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
