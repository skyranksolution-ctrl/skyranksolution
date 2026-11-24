"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  User,
  Globe,
  Trophy,
  TrendingUp,
  Lock,
  Loader2,
  Star,
  ShieldCheck,
  Zap,
  AlertCircle,
  MessageSquare,
  KeyRound,
} from "lucide-react";
import { siteConfig } from "@/data/site-config";

export function HeroSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    countryCode: "+91",
    phone: "",
    keywords: "",
  });

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    website?: string;
    phone?: string;
    keywords?: string;
    form?: string;
  }>({});

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Field validation rules
  const validateField = (field: string, value: string): string => {
    switch (field) {
      case "name":
        if (!value.trim()) return "Full name is required.";
        if (value.trim().length < 2) return "Name must be at least 2 characters.";
        return "";
      case "email":
        if (!value.trim()) return "Company email address is required.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          return "Please enter a valid email (e.g. name@company.com).";
        }
        return "";
      case "website":
        if (!value.trim()) return "Website domain or URL is required.";
        if (!/^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/.*)?$/.test(value.trim())) {
          return "Please enter a valid website (e.g. yourbrand.com).";
        }
        return "";
      case "phone":
        if (!value.trim()) return "Phone or WhatsApp number is required.";
        const digits = value.replace(/[^0-9]/g, "");
        if (digits.length < 7 || digits.length > 15) {
          return "Please enter a valid 7 to 15 digit contact number.";
        }
        return "";
      case "keywords":
        if (!value.trim()) return "Target keywords to rank are required.";
        if (value.trim().length < 2) return "Please enter at least 2 characters.";
        return "";
      default:
        return "";
    }
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const errorMsg = validateField(field, formData[field as keyof typeof formData]);
    setErrors((prev) => ({ ...prev, [field]: errorMsg || undefined }));
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const errorMsg = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: errorMsg || undefined }));
    }
  };

  const validateAll = (): boolean => {
    const newErrors: Record<string, string> = {};
    const nameErr = validateField("name", formData.name);
    if (nameErr) newErrors.name = nameErr;

    const emailErr = validateField("email", formData.email);
    if (emailErr) newErrors.email = emailErr;

    const websiteErr = validateField("website", formData.website);
    if (websiteErr) newErrors.website = websiteErr;

    const phoneErr = validateField("phone", formData.phone);
    if (phoneErr) newErrors.phone = phoneErr;

    const keywordsErr = validateField("keywords", formData.keywords);
    if (keywordsErr) newErrors.keywords = keywordsErr;

    setErrors(newErrors);
    setTouched({
      name: true,
      email: true,
      website: true,
      phone: true,
      keywords: true,
    });
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateAll()) {
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const res = await fetch("/api/lead-capture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        if (data.errors) {
          setErrors(data.errors);
        } else {
          setErrors({ form: data.message || "Failed to submit. Please try again." });
        }
        setIsSubmitting(false);
        return;
      }

      setIsSubmitted(true);
    } catch (err) {
      console.error("Submission failed:", err);
      setErrors({ form: "Could not send request. Please check your internet connection or call us directly." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappDirectUrl = `https://wa.me/919408626950?text=${encodeURIComponent(
    `Hello SkyRank Solution, I have submitted a 15-Day Free Demo request for my website (${formData.website || "my domain"}) and would like to confirm my slot.`
  )}`;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F8FAFC] to-white pt-8 pb-14 sm:pt-12 sm:pb-18 lg:pt-12 lg:pb-20 border-b border-slate-200/80">
      {/* Background Subtle Tech Grid & Ambient Radiant Auras */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-70 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-r from-blue-100/60 via-indigo-100/50 to-cyan-100/60 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[500px] h-[350px] bg-emerald-100/40 blur-[130px] rounded-full pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 2-Column Split Hero Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
          {/* Left Column: Authoritative Messaging & Value Stack (7 Columns) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Live Authority Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/80 text-blue-700 text-xs font-bold tracking-wide shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
              <span>INDIA&apos;S MOST TRUSTED AI-POWERED SEO ENGINE</span>
            </div>

            {/* Core Value Proposition Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
                Rank Higher. Convert Faster.{" "}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
                  Dominate Google #1.
                </span>
              </h1>
              <p className="text-base sm:text-lg font-bold text-slate-800 pt-1">
                Still Not Getting Qualified Inquiries from Google Search?
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
                Stop losing high-intent customers to competitors. SkyRank Solution fuses algorithmic content modeling, Core Web Vitals engineering, and authoritative digital PR to build compounding organic revenue.
              </p>
            </div>

            {/* Micro 3-Column Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Trophy className="w-3.5 h-3.5 text-blue-600" />
                </div>
                <div>
                  <div className="text-xs font-black text-slate-900">Podium Rankings</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Guaranteed Top 3 SERP strategy</div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                <div>
                  <div className="text-xs font-black text-slate-900">Zero Risk Demo</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">15 days free on your domain</div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
                  <TrendingUp className="w-3.5 h-3.5 text-indigo-600" />
                </div>
                <div>
                  <div className="text-xs font-black text-slate-900">Buyer Intent</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Phone calls &amp; sales leads</div>
                </div>
              </div>
            </div>

            {/* Dual CTAs & Phone Call Action */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#hero-lead-form"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-black text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-500/25 hover:shadow-xl transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Start Your Advanced SEO Journey</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200/90 shadow-sm hover:border-slate-300 transition-all hover:scale-105 active:scale-95"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>{siteConfig.contact.phoneDisplay}</span>
              </a>
            </div>

            {/* Social Proof Line */}
            <div className="flex items-center gap-4 text-xs text-slate-500 font-semibold pt-2">
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <span className="text-slate-900 font-bold">4.9/5 Rating</span>
              </div>
              <span className="text-slate-300">•</span>
              <span>250+ Gujarat &amp; Global Brands</span>
              <span className="text-slate-300">•</span>
              <span className="text-emerald-700 font-bold">Verified Google Results</span>
            </div>
          </div>

          {/* Right Column: Luxury Glassmorphic Lead Generation Engine (5 Columns) */}
          <div id="hero-lead-form" className="lg:col-span-5 relative">
            {/* Ambient Background Aura behind card */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-cyan-500/10 rounded-3xl blur-2xl -z-10" />

            <div className="bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_-15px_rgba(37,99,235,0.12)] relative">
              {/* Floating Live SERP Badge on Top Right */}
              <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] font-black uppercase tracking-wider shadow-md flex items-center gap-1.5">
                <Zap className="w-3 h-3 text-amber-300" />
                <span>Instant 15-Day Free Demo</span>
              </div>

              {/* Form Title & Benefit */}
              <div className="mb-5 pt-1">
                <h2 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight leading-snug">
                  Increase Rankings with Smart SEO + AI Insights
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Get your customized keyword roadmap &amp; 15-day risk-free trial
                </p>
              </div>

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-6 text-center space-y-4 bg-emerald-50/90 border border-emerald-200 rounded-2xl"
                  >
                    <div className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-lg font-black text-emerald-950">
                        15-Day Free Demo Request Sent!
                      </h3>
                      <p className="text-xs text-emerald-800 leading-relaxed">
                        Thank you, <strong>{formData.name}</strong>. Your request has been dispatched to our team at <strong>skyranksolution@gmail.com</strong>.
                      </p>
                    </div>

                    {/* Summary Card */}
                    <div className="p-3.5 rounded-xl bg-white/80 border border-emerald-200/60 text-left text-xs space-y-1 text-slate-700">
                      <div><strong>Domain:</strong> {formData.website}</div>
                      <div><strong>Target Keywords:</strong> <span className="text-blue-600 font-bold">{formData.keywords}</span></div>
                      <div><strong>Email:</strong> {formData.email}</div>
                      <div><strong>Phone:</strong> {formData.countryCode} {formData.phone}</div>
                    </div>

                    <div className="pt-2 space-y-2">
                      <a
                        href={whatsappDirectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs text-white bg-[#25D366] hover:bg-[#20bd5a] shadow-md transition-all cursor-pointer"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Instant WhatsApp Follow-up</span>
                      </a>

                      <button
                        type="button"
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({
                            name: "",
                            email: "",
                            website: "",
                            countryCode: "+91",
                            phone: "",
                            keywords: "",
                          });
                          setErrors({});
                          setTouched({});
                        }}
                        className="text-xs font-bold text-emerald-700 hover:text-emerald-900 underline block mx-auto cursor-pointer pt-1"
                      >
                        Submit another website
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-3.5">
                    {/* General Form Error Banner */}
                    {errors.form && (
                      <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>{errors.form}</span>
                      </div>
                    )}

                    {/* 1. Full Name */}
                    <div>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <User className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          onBlur={() => handleBlur("name")}
                          className={`w-full pl-10 pr-3.5 py-3 rounded-xl border text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-all ${
                            errors.name
                              ? "border-rose-400 bg-rose-50/20 focus:ring-2 focus:ring-rose-400/30"
                              : touched.name && !errors.name
                              ? "border-emerald-400 bg-slate-50/60 focus:ring-2 focus:ring-blue-600"
                              : "border-slate-200 bg-slate-50/60 hover:bg-slate-50 focus:ring-2 focus:ring-blue-600"
                          }`}
                        />
                      </div>
                      {errors.name && (
                        <p className="text-[11px] font-semibold text-rose-600 flex items-center gap-1 mt-1 pl-1">
                          <AlertCircle className="w-3 h-3 text-rose-500 shrink-0" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* 2. Company Email */}
                    <div>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Mail className="w-4 h-4" />
                        </div>
                        <input
                          type="email"
                          placeholder="Company Email Address"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          onBlur={() => handleBlur("email")}
                          className={`w-full pl-10 pr-3.5 py-3 rounded-xl border text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-all ${
                            errors.email
                              ? "border-rose-400 bg-rose-50/20 focus:ring-2 focus:ring-rose-400/30"
                              : touched.email && !errors.email
                              ? "border-emerald-400 bg-slate-50/60 focus:ring-2 focus:ring-blue-600"
                              : "border-slate-200 bg-slate-50/60 hover:bg-slate-50 focus:ring-2 focus:ring-blue-600"
                          }`}
                        />
                      </div>
                      {errors.email && (
                        <p className="text-[11px] font-semibold text-rose-600 flex items-center gap-1 mt-1 pl-1">
                          <AlertCircle className="w-3 h-3 text-rose-500 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    {/* 3. Website URL */}
                    <div>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Globe className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          placeholder="Website URL (e.g. yourbrand.com)"
                          value={formData.website}
                          onChange={(e) => handleChange("website", e.target.value)}
                          onBlur={() => handleBlur("website")}
                          className={`w-full pl-10 pr-3.5 py-3 rounded-xl border text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-all ${
                            errors.website
                              ? "border-rose-400 bg-rose-50/20 focus:ring-2 focus:ring-rose-400/30"
                              : touched.website && !errors.website
                              ? "border-emerald-400 bg-slate-50/60 focus:ring-2 focus:ring-blue-600"
                              : "border-slate-200 bg-slate-50/60 hover:bg-slate-50 focus:ring-2 focus:ring-blue-600"
                          }`}
                        />
                      </div>
                      {errors.website && (
                        <p className="text-[11px] font-semibold text-rose-600 flex items-center gap-1 mt-1 pl-1">
                          <AlertCircle className="w-3 h-3 text-rose-500 shrink-0" />
                          <span>{errors.website}</span>
                        </p>
                      )}
                    </div>

                    {/* 4. Phone Number with Country Code */}
                    <div>
                      <div className="flex gap-2">
                        <select
                          aria-label="Country Dial Code"
                          value={formData.countryCode}
                          onChange={(e) => handleChange("countryCode", e.target.value)}
                          className="w-28 px-2 py-3 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-600 cursor-pointer"
                        >
                          <option value="+91">India (+91)</option>
                          <option value="+1">USA (+1)</option>
                          <option value="+44">UK (+44)</option>
                          <option value="+971">UAE (+971)</option>
                          <option value="+61">Australia (+61)</option>
                          <option value="+1">Canada (+1)</option>
                        </select>

                        <div className="relative flex-1">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                            <Phone className="w-3.5 h-3.5" />
                          </div>
                          <input
                            type="tel"
                            placeholder="Phone / WhatsApp Number"
                            value={formData.phone}
                            onChange={(e) => handleChange("phone", e.target.value)}
                            onBlur={() => handleBlur("phone")}
                            className={`w-full pl-9 pr-3.5 py-3 rounded-xl border text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-all ${
                              errors.phone
                                ? "border-rose-400 bg-rose-50/20 focus:ring-2 focus:ring-rose-400/30"
                                : touched.phone && !errors.phone
                                ? "border-emerald-400 bg-slate-50/60 focus:ring-2 focus:ring-blue-600"
                                : "border-slate-200 bg-slate-50/60 hover:bg-slate-50 focus:ring-2 focus:ring-blue-600"
                            }`}
                          />
                        </div>
                      </div>
                      {errors.phone && (
                        <p className="text-[11px] font-semibold text-rose-600 flex items-center gap-1 mt-1 pl-1">
                          <AlertCircle className="w-3 h-3 text-rose-500 shrink-0" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    {/* 5. Target Keywords to Rank on Google #1 */}
                    <div>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <KeyRound className="w-4 h-4 text-blue-600" />
                        </div>
                        <input
                          type="text"
                          placeholder="Target Keywords to Rank on Google #1"
                          value={formData.keywords}
                          onChange={(e) => handleChange("keywords", e.target.value)}
                          onBlur={() => handleBlur("keywords")}
                          className={`w-full pl-10 pr-3.5 py-3 rounded-xl border text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-all ${
                            errors.keywords
                              ? "border-rose-400 bg-rose-50/20 focus:ring-2 focus:ring-rose-400/30"
                              : touched.keywords && !errors.keywords
                              ? "border-emerald-400 bg-slate-50/60 focus:ring-2 focus:ring-blue-600"
                              : "border-slate-200 bg-slate-50/60 hover:bg-slate-50 focus:ring-2 focus:ring-blue-600"
                          }`}
                        />
                      </div>
                      {errors.keywords && (
                        <p className="text-[11px] font-semibold text-rose-600 flex items-center gap-1 mt-1 pl-1">
                          <AlertCircle className="w-3 h-3 text-rose-500 shrink-0" />
                          <span>{errors.keywords}</span>
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-2 py-4 px-6 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 cursor-pointer flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending To Team...</span>
                        </>
                      ) : (
                        <>
                          <span>GET STARTED WITH 15-DAY FREE DEMO</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    {/* Security Footnote */}
                    <div className="text-center pt-1">
                      <span className="text-[11px] text-slate-400 flex items-center justify-center gap-1 font-medium">
                        <Lock className="w-3 h-3 text-emerald-600" />
                        <span>100% Confidential • No credit card required • NDA Protected</span>
                      </span>
                    </div>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
