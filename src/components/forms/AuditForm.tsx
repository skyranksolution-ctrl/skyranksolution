"use client";

import React, { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";
import { AuditFormData } from "@/lib/validations/forms";

export function AuditForm({ compact = false }: { compact?: boolean }) {
  const [formData, setFormData] = useState<AuditFormData>({
    websiteUrl: "",
    fullName: "",
    email: "",
    phone: "",
    targetLocation: "",
    targetKeywords: "",
    honeypot: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        if (data.errors) {
          setErrors(data.errors);
        } else {
          setErrorMessage(data.message || "Failed to submit audit request.");
        }
      } else {
        setSuccessMessage(data.message);
        setFormData({
          websiteUrl: "",
          fullName: "",
          email: "",
          phone: "",
          targetLocation: "",
          targetKeywords: "",
          honeypot: "",
        });
      }
    } catch {
      setErrorMessage("Network error occurred. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-900/95 rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-700/80 backdrop-blur-xl text-white">
      {successMessage ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Audit Request Registered!</h3>
          <p className="text-slate-300 text-sm max-w-md mx-auto mb-6">{successMessage}</p>
          <button
            type="button"
            onClick={() => setSuccessMessage(null)}
            className="text-sm font-semibold text-blue-400 hover:text-blue-300 underline cursor-pointer"
          >
            Submit Another Website for Audit
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Honeypot anti-spam field */}
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
            <div className="p-3 bg-red-900/30 border border-red-500/40 rounded-xl flex items-center gap-3 text-red-300 text-sm">
              <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-400" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className={compact ? "space-y-4" : "grid grid-cols-1 md:grid-cols-2 gap-4"}>
            <div>
              <label htmlFor="websiteUrl" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Website URL <span className="text-blue-400">*</span>
              </label>
              <input
                id="websiteUrl"
                type="text"
                name="websiteUrl"
                value={formData.websiteUrl}
                onChange={handleChange}
                placeholder="e.g. yourcompany.com"
                required
                className={`w-full px-4 py-3 rounded-xl border text-sm text-white placeholder-slate-400 focus:outline-none transition-colors ${errors.websiteUrl
                    ? "border-red-500 bg-red-950/20"
                    : "border-slate-700 bg-slate-950/80 focus:border-blue-500"
                  }`}
              />
              {errors.websiteUrl && <p className="text-xs text-red-400 mt-1">{errors.websiteUrl}</p>}
            </div>

            <div>
              <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Full Name <span className="text-blue-400">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className={`w-full px-4 py-3 rounded-xl border text-sm text-white placeholder-slate-400 focus:outline-none transition-colors ${errors.fullName
                    ? "border-red-500 bg-red-950/20"
                    : "border-slate-700 bg-slate-950/80 focus:border-blue-500"
                  }`}
              />
              {errors.fullName && <p className="text-xs text-red-400 mt-1">{errors.fullName}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Business Email <span className="text-blue-400">*</span>
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@company.com"
                required
                className={`w-full px-4 py-3 rounded-xl border text-sm text-white placeholder-slate-400 focus:outline-none transition-colors ${errors.email
                    ? "border-red-500 bg-red-950/20"
                    : "border-slate-700 bg-slate-950/80 focus:border-blue-500"
                  }`}
              />
              {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Phone Number <span className="text-blue-400">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 9408626950"
                required
                className={`w-full px-4 py-3 rounded-xl border text-sm text-white placeholder-slate-400 focus:outline-none transition-colors ${errors.phone
                    ? "border-red-500 bg-red-950/20"
                    : "border-slate-700 bg-slate-950/80 focus:border-blue-500"
                  }`}
              />
              {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label htmlFor="targetLocation" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Target Market / Location <span className="text-blue-400">*</span>
              </label>
              <input
                id="targetLocation"
                type="text"
                name="targetLocation"
                value={formData.targetLocation}
                onChange={handleChange}
                placeholder="e.g. India, USA, Ahmedabad, UK"
                required
                className={`w-full px-4 py-3 rounded-xl border text-sm text-white placeholder-slate-400 focus:outline-none transition-colors ${errors.targetLocation
                    ? "border-red-500 bg-red-950/20"
                    : "border-slate-700 bg-slate-950/80 focus:border-blue-500"
                  }`}
              />
              {errors.targetLocation && <p className="text-xs text-red-400 mt-1">{errors.targetLocation}</p>}
            </div>

            <div>
              <label htmlFor="targetKeywords" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Target Keywords / Competitors <span className="text-blue-400">*</span>
              </label>
              <input
                id="targetKeywords"
                type="text"
                name="targetKeywords"
                value={formData.targetKeywords}
                onChange={handleChange}
                placeholder="e.g. b2b saas, local dental clinic"
                required
                className={`w-full px-4 py-3 rounded-xl border text-sm text-white placeholder-slate-400 focus:outline-none transition-colors ${errors.targetKeywords
                    ? "border-red-500 bg-red-950/20"
                    : "border-slate-700 bg-slate-950/80 focus:border-blue-500"
                  }`}
              />
              {errors.targetKeywords && <p className="text-xs text-red-400 mt-1">{errors.targetKeywords}</p>}
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-xl shadow-blue-600/40 transition-all disabled:opacity-60 cursor-pointer text-sm md:text-base hover:scale-[1.01]"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Analyzing Domain & Generating Request...
                </>
              ) : (
                <>
                  Get My Free SEO Audit Report
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
            <p className="text-center text-xs text-slate-400 mt-2.5">
              100% confidential. No credit card required. Detailed human-reviewed audit delivered to your inbox.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
