"use client";

import React, { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle, Send } from "lucide-react";
import { ContactFormData } from "@/lib/validations/forms";
import { servicesData } from "@/data/services";

export function ContactForm({ defaultService }: { defaultService?: string }) {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    serviceNeeded: defaultService || "",
    monthlyBudget: "",
    message: "",
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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        if (data.errors) {
          setErrors(data.errors);
        } else {
          setErrorMessage(data.message || "Failed to submit inquiry.");
        }
      } else {
        setSuccessMessage(data.message);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          companyName: "",
          serviceNeeded: "",
          monthlyBudget: "",
          message: "",
          honeypot: "",
        });
      }
    } catch {
      setErrorMessage("A network error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl border border-slate-100">
      {successMessage ? (
        <div className="text-center py-10">
          <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Inquiry Received!</h3>
          <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">{successMessage}</p>
          <button
            type="button"
            onClick={() => setSuccessMessage(null)}
            className="text-sm font-semibold text-blue-600 hover:text-blue-700 underline"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Honeypot */}
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
              <label htmlFor="contactFullName" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="contactFullName"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Jane Smith"
                required
                className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none transition-colors ${errors.fullName ? "border-red-300 bg-red-50/20" : "border-slate-300 focus:border-blue-600"
                  }`}
              />
              {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
            </div>

            <div>
              <label htmlFor="contactEmail" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                Business Email <span className="text-red-500">*</span>
              </label>
              <input
                id="contactEmail"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="jane@organization.com"
                required
                className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none transition-colors ${errors.email ? "border-red-300 bg-red-50/20" : "border-slate-300 focus:border-blue-600"
                  }`}
              />
              {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="contactPhone" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                Phone / WhatsApp Number
              </label>
              <input
                id="contactPhone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 9408626950"
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label htmlFor="contactCompany" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                Company Name / Website
              </label>
              <input
                id="contactCompany"
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Your Brand Name"
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label htmlFor="serviceNeeded" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                Primary Service Needed <span className="text-red-500">*</span>
              </label>
              <select
                id="serviceNeeded"
                name="serviceNeeded"
                value={formData.serviceNeeded}
                onChange={handleChange}
                required
                className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none transition-colors ${errors.serviceNeeded ? "border-red-300 bg-red-50/20" : "border-slate-300 focus:border-blue-600"
                  }`}
              >
                <option value="">-- Select a Service --</option>
                {servicesData.map((svc) => (
                  <option key={svc.slug} value={svc.title}>
                    {svc.title}
                  </option>
                ))}
              </select>
              {errors.serviceNeeded && <p className="text-xs text-red-600 mt-1">{errors.serviceNeeded}</p>}
            </div>

            <div>
              <label htmlFor="monthlyBudget" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                Estimated Monthly Budget
              </label>
              <select
                id="monthlyBudget"
                name="monthlyBudget"
                value={formData.monthlyBudget}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-blue-600"
              >
                <option value="">-- Select Budget Range --</option>
                <option value="₹10,000 - ₹20,000 / month">₹10,000 – ₹20,000 / mo (Starter)</option>
                <option value="₹20,000 - ₹40,000 / month">₹20,000 – ₹40,000 / mo (Growth)</option>
                <option value="₹40,000+ / month">₹40,000+ / mo (Enterprise)</option>
                <option value="Custom Project Quote">Custom Project Quote</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="contactMessage" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
              Project Details & Goals <span className="text-red-500">*</span>
            </label>
            <textarea
              id="contactMessage"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your current organic rankings, primary target markets, competitor URLs, and what goals you want to achieve..."
              required
              className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none transition-colors ${errors.message ? "border-red-300 bg-red-50/20" : "border-slate-300 focus:border-blue-600"
                }`}
            />
            {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
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
                  Submitting Inquiry...
                </>
              ) : (
                <>
                  Send Your Project Inquiry
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
            <p className="text-center text-xs text-slate-500 mt-2">
              We respect your privacy. No spam. You will hear directly from an SEO strategist.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
