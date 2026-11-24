"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  Zap,
  Search,
  CheckCircle2,
  Globe2,
  Activity,
  Layers,
  Loader2,
  Star,
  Sparkles,
  Cpu,
  Gift,
} from "lucide-react";

export function HeroSection() {
  const router = useRouter();
  const [auditDomain, setAuditDomain] = useState("");
  const [targetMarket, setTargetMarket] = useState("US");
  const [analyzing, setAnalyzing] = useState(false);
  const [activeTab, setActiveTab] = useState<"traffic" | "rankings" | "sge" | "vitals">("traffic");

  const handleInstantAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!auditDomain.trim()) return;

    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      router.push(
        `/seo-audit?domain=${encodeURIComponent(auditDomain.trim())}&market=${encodeURIComponent(
          targetMarket
        )}`
      );
    }, 600);
  };

  return (
    <section className="relative overflow-hidden bg-[#FAFCFF] text-slate-900 pt-10 pb-20 md:pt-16 md:pb-28">
      {/* 1. Ambient Light Gradient Glows & Modern Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-70 pointer-events-none [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Luminous Soft Aurora Orbs */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-blue-100/80 via-indigo-50/60 to-transparent blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[600px] h-[500px] bg-cyan-100/60 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[400px] bg-purple-100/50 blur-[140px] rounded-full pointer-events-none" />

      {/* Edge-to-Edge Container with balanced padding */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-14 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-14 items-center">
          
          {/* Left Column: Authority Copy, Interactive Scanner & Social Proof */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Live 15-Day Free Demo Highlight Pill */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-50 via-white to-blue-50 border border-emerald-300 shadow-sm backdrop-blur-xl"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600 shadow-[0_0_8px_#10b981]" />
              </span>
              <span className="text-[11px] font-black text-emerald-800 tracking-wider uppercase flex items-center gap-1.5">
                <Gift className="w-3.5 h-3.5 text-emerald-600" /> 15-DAY FREE DEMO TRIAL ACTIVE
              </span>
              <span className="text-slate-300">•</span>
              <span className="text-[11px] text-blue-700 font-bold hidden sm:inline flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-500" /> 100% Risk-Free • No Credit Card Required
              </span>
            </motion.div>

            {/* High-Impact Main Heading with Multi-Tone Gradient */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight text-slate-900 leading-[1.08]"
            >
              AI-Powered SEO That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">
                Outranks, Converts
              </span>{" "}
              <br className="hidden sm:inline" />
              &amp; Dominates Search
            </motion.h1>

            {/* Supporting Copy with Enhanced Readability */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal"
            >
              SkyRank Solution transforms search volatility into predictable organic pipeline. We fuse algorithmic content modeling, sub-second Next.js architecture, and authoritative digital PR to win #1 Google rankings.
            </motion.p>

            {/* Instant Website Audit Command Capsule */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-1 max-w-2xl mx-auto lg:mx-0"
            >
              <form
                onSubmit={handleInstantAudit}
                className="p-2 sm:p-2.5 rounded-2xl bg-white border border-slate-200/90 shadow-[0_20px_50px_-15px_rgba(15,23,42,0.12)] focus-within:border-blue-600 focus-within:ring-4 focus-within:ring-blue-100 backdrop-blur-2xl flex flex-col sm:flex-row items-center gap-2 group transition-all duration-300"
              >
                <div className="relative flex-1 w-full flex items-center pl-3">
                  <Search className="w-5 h-5 text-blue-600 flex-shrink-0 animate-pulse" />
                  <input
                    type="text"
                    value={auditDomain}
                    onChange={(e) => setAuditDomain(e.target.value)}
                    placeholder="Enter your website URL (e.g. yourbrand.com)"
                    required
                    className="w-full bg-transparent px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none"
                  />
                </div>

                {/* Target Market Selector with Flags */}
                <div className="w-full sm:w-auto px-2 border-t sm:border-t-0 sm:border-l border-slate-200 flex items-center">
                  <select
                    value={targetMarket}
                    onChange={(e) => setTargetMarket(e.target.value)}
                    aria-label="Select target market"
                    className="w-full bg-slate-50 text-xs text-slate-700 font-semibold rounded-xl px-3 py-2.5 border border-slate-200 focus:outline-none focus:border-blue-500 cursor-pointer"
                  >
                    <option value="US">🇺🇸 United States</option>
                    <option value="IN">🇮🇳 India</option>
                    <option value="UK">🇬🇧 United Kingdom</option>
                    <option value="AE">🇦🇪 UAE / Middle East</option>
                    <option value="AU">🇦🇺 Australia</option>
                    <option value="CA">🇨🇦 Canada</option>
                  </select>
                </div>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={analyzing}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/40 cursor-pointer flex-shrink-0 disabled:opacity-70 whitespace-nowrap transition-all"
                >
                  {analyzing ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Scanning Domain...</span>
                    </>
                  ) : (
                    <>
                      <span>Run Instant AI Audit</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </form>

              {/* Instant Audit Trust Chips */}
              <div className="flex flex-wrap items-center justify-between text-[11px] text-slate-500 px-2 pt-3 gap-2">
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  100% Free Live SERP Diagnostic
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                  Core Web Vitals Pass Check
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                  Competitor Keyword Gap Analysis
                </span>
              </div>
            </motion.div>

            {/* 15 Days Free Demo High-Impact VIP Offer Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-[1.5px] shadow-lg shadow-blue-500/20 max-w-2xl mx-auto lg:mx-0 group"
            >
              <div className="bg-gradient-to-r from-blue-50/90 via-white/95 to-indigo-50/90 rounded-[15px] p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-white flex flex-col items-center justify-center font-black shadow-md shadow-emerald-500/30 flex-shrink-0">
                    <span className="text-lg leading-none font-black">15</span>
                    <span className="text-[9px] uppercase font-bold tracking-tight">Days</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                        🎁 Free Live Demo Trial
                      </span>
                      <span className="text-[11px] font-semibold text-slate-600 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> No Credit Card Required
                      </span>
                    </div>
                    <h3 className="text-sm sm:text-base font-black text-slate-900 mt-1">
                      Experience Our AI SEO Growth Engine for <span className="text-blue-600">15 Days Free</span>
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-600 mt-0.5 leading-relaxed">
                      Live keyword ranking telemetry, technical crawl audit &amp; competitor intelligence for your domain with zero commitment.
                    </p>
                  </div>
                </div>

                <Link
                  href="/talk-to-expert?offer=15-days-free-demo"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:shadow-lg hover:shadow-blue-500/35 hover:scale-105 transition-all flex-shrink-0 whitespace-nowrap cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
                  <span>Claim 15-Day Free Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Social Proof & Secondary Links Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-2 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-4 max-w-2xl mx-auto lg:mx-0"
            >
              {/* Overlapping Client Avatars + Star Rating */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 border-2 border-white flex items-center justify-center text-[10px] font-black text-white shadow-sm">
                    AC
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-400 border-2 border-white flex items-center justify-center text-[10px] font-black text-white shadow-sm">
                    SK
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 border-2 border-white flex items-center justify-center text-[10px] font-black text-white shadow-sm">
                    TL
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 to-orange-400 border-2 border-white flex items-center justify-center text-[10px] font-black text-white shadow-sm">
                    RX
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-xs font-bold text-slate-900 ml-1">4.9/5</span>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Trusted by 250+ fast-growing enterprises
                  </p>
                </div>
              </div>

              {/* Quick Jump Links */}
              <div className="flex items-center gap-2">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm transition-all"
                >
                  <Layers className="w-3.5 h-3.5 text-blue-600" />
                  <span>15 Services</span>
                </Link>
                <Link
                  href="/talk-to-expert?offer=15-days-free-demo"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-all"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>15-Day Free Demo →</span>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Apple / Stripe Clean Glassmorphic SEO Telemetry Cockpit */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative mt-4 lg:mt-0"
          >
            {/* Floating Live Badge 1: Top Right - 15-Day Free Demo Badge */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-5 -right-2 sm:-right-4 z-20 bg-white/95 border border-emerald-500/40 rounded-2xl px-4 py-2.5 shadow-[0_15px_30px_rgba(15,23,42,0.12)] backdrop-blur-2xl flex items-center gap-3 max-w-[280px]"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-white flex items-center justify-center flex-shrink-0 font-black text-base shadow-md shadow-emerald-500/30">
                🎁
              </div>
              <div>
                <p className="text-[10px] uppercase font-black tracking-wider text-emerald-700 flex items-center gap-1">
                  15-Day Free Demo Active
                </p>
                <p className="text-xs font-bold text-slate-900 line-clamp-1">Zero Risk • Full Platform Access</p>
              </div>
            </motion.div>

            {/* Floating Live Badge 2: Bottom Left */}
            <motion.div
              animate={{ y: [6, -6, 6] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-5 -left-2 sm:-left-4 z-20 bg-white/95 border border-blue-500/30 rounded-2xl px-4 py-2.5 shadow-[0_15px_30px_rgba(15,23,42,0.12)] backdrop-blur-2xl flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 shadow-sm border border-blue-200">
                <Zap className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <p className="text-[10px] uppercase font-bold tracking-wider text-blue-700">Core Web Vitals Pass</p>
                <p className="text-xs font-bold text-slate-900">LCP 0.65s • 100% Mobile Score</p>
              </div>
            </motion.div>

            {/* Main Command Console Container - Apple / Stripe Glass Chassis */}
            <div className="rounded-3xl p-6 sm:p-7 border border-slate-200/90 bg-white/95 backdrop-blur-3xl shadow-[0_25px_70px_-15px_rgba(15,23,42,0.15)] relative overflow-hidden space-y-4">
              
              {/* Top Bar with Console Header */}
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 flex-wrap gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center gap-1.5 mr-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500 inline-block shadow-sm" />
                    <span className="w-3 h-3 rounded-full bg-amber-400 inline-block shadow-sm" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block shadow-sm" />
                  </div>
                  <div>
                    <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                      <span>SkyRank Telemetry Hub</span>
                      <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-blue-50 text-blue-700 border border-blue-200">v4.2</span>
                    </h2>
                    <p className="text-[10px] text-slate-500 font-mono">Googlebot-Smartphone Telemetry</p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600 shadow-[0_0_6px_#10b981]" />
                  </span>
                  <span className="text-[10px] px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-200 tracking-wider uppercase">
                    15-Day Demo Live
                  </span>
                </div>
              </div>

              {/* Interactive Metric Switcher Tabs */}
              <div className="grid grid-cols-4 gap-1 p-1 bg-slate-100 border border-slate-200/80 rounded-2xl text-xs font-semibold">
                {[
                  { id: "traffic", label: "Traffic" },
                  { id: "rankings", label: "Rankings" },
                  { id: "sge", label: "AI SGE" },
                  { id: "vitals", label: "Vitals" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id as typeof activeTab)}
                    className={`py-2 px-1 text-center rounded-xl transition-all text-[11px] cursor-pointer relative ${
                      activeTab === tab.id
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm font-bold"
                        : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Dynamic Tab Views */}
              <AnimatePresence mode="wait">
                {activeTab === "traffic" && (
                  <motion.div
                    key="traffic"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-3"
                  >
                    {/* Dual KPI Cards */}
                    <div className="grid grid-cols-2 gap-2.5">
                      <div className="bg-slate-50/80 border border-slate-200/80 p-3.5 rounded-2xl hover:border-blue-300 transition-all">
                        <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Monthly Search Visitors</p>
                        <p className="text-2xl sm:text-3xl font-black text-slate-900 mt-1 tracking-tight">148,920</p>
                        <p className="text-[10px] text-emerald-600 font-semibold mt-1 flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" /> +34.2% MoM Compounding
                        </p>
                      </div>

                      <div className="bg-slate-50/80 border border-slate-200/80 p-3.5 rounded-2xl hover:border-blue-300 transition-all">
                        <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Organic Lead Conversion</p>
                        <p className="text-2xl sm:text-3xl font-black text-blue-600 mt-1 tracking-tight">+41.8%</p>
                        <p className="text-[10px] text-slate-500 font-medium mt-1">Verified Attribution</p>
                      </div>
                    </div>

                    {/* Dynamic Animated Curve SVG Graph with Vibrant Light Styling */}
                    <div className="bg-slate-50/80 border border-slate-200/80 p-3.5 rounded-2xl space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-700 font-medium flex items-center gap-1.5">
                          <Activity className="w-3.5 h-3.5 text-blue-600" />
                          6-Month Organic Visibility Trajectory
                        </span>
                        <span className="text-[10px] text-blue-600 font-mono font-bold">+284% Total Lift</span>
                      </div>

                      <div className="relative h-24 w-full pt-1">
                        <svg viewBox="0 0 420 100" className="w-full h-full overflow-visible">
                          <defs>
                            <linearGradient id="luminousLightGrad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#2563EB" stopOpacity="0.25" />
                              <stop offset="70%" stopColor="#06B6D4" stopOpacity="0.08" />
                              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.0" />
                            </linearGradient>
                            <filter id="lightGlow" x="-20%" y="-20%" width="140%" height="140%">
                              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#2563EB" floodOpacity="0.4" />
                            </filter>
                          </defs>
                          <path
                            d="M 10 92 Q 60 80 110 68 T 210 42 T 310 24 T 410 8 L 410 100 L 10 100 Z"
                            fill="url(#luminousLightGrad)"
                          />
                          <path
                            d="M 10 92 Q 60 80 110 68 T 210 42 T 310 24 T 410 8"
                            fill="none"
                            stroke="#2563EB"
                            strokeWidth="3.5"
                            strokeLinecap="round"
                            filter="url(#lightGlow)"
                          />
                          <circle cx="410" cy="8" r="6" fill="#3B82F6" className="animate-ping opacity-75" />
                          <circle cx="410" cy="8" r="4" fill="#1D4ED8" />
                        </svg>
                      </div>

                      <div className="flex items-center justify-between text-[9px] text-slate-400 font-mono px-1">
                        <span>Month 1</span>
                        <span>Month 2</span>
                        <span>Month 3</span>
                        <span>Month 4</span>
                        <span>Month 5</span>
                        <span className="text-blue-600 font-bold">Month 6 (Target)</span>
                      </div>
                    </div>

                    {/* Simulated Google SERP Snippet Preview */}
                    <div className="bg-white border border-slate-200/90 p-3 rounded-2xl space-y-1 hover:border-blue-400 transition-all shadow-sm">
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="text-emerald-700 font-mono flex items-center gap-1 font-semibold">
                          <Globe2 className="w-3 h-3 text-emerald-600" /> https://yourbrand.com &gt; solutions
                        </span>
                        <span className="text-amber-700 font-bold bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                          Rank #1 Google
                        </span>
                      </div>
                      <p className="text-xs font-bold text-blue-600 hover:underline cursor-pointer">
                        The Leading Growth &amp; Enterprise SEO Platform | SkyRank
                      </p>
                      <div className="flex items-center gap-1 text-[10px] text-amber-500">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <span className="text-slate-500">Rating: 4.9 · 150+ Enterprise Clients · White-Hat Verified</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === "rankings" && (
                  <motion.div
                    key="rankings"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-2.5"
                  >
                    <div className="flex items-center justify-between bg-blue-50 border border-blue-200 p-3 rounded-2xl">
                      <div>
                        <p className="text-xs font-bold text-slate-900">384 Commercial Keywords on Page 1</p>
                        <p className="text-[10px] text-slate-600">94 Top-3 Podium Positions Secured</p>
                      </div>
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                        +84 Positions
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      {[
                        { kw: "enterprise ai seo agency", pos: "#1", prev: "#4", vol: "14,200/mo", lift: "+3" },
                        { kw: "technical seo consulting", pos: "#1", prev: "#7", vol: "8,900/mo", lift: "+6" },
                        { kw: "ecommerce organic growth", pos: "#2", prev: "#5", vol: "18,400/mo", lift: "+3" },
                        { kw: "nextjs web development seo", pos: "#1", prev: "#9", vol: "6,500/mo", lift: "+8" },
                      ].map((k) => (
                        <div
                          key={k.kw}
                          className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs"
                        >
                          <div className="flex items-center gap-2">
                            <span className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-700 font-bold text-[11px] flex items-center justify-center border border-emerald-300">
                              {k.pos}
                            </span>
                            <div>
                              <p className="font-semibold text-slate-800">{k.kw}</p>
                              <p className="text-[10px] text-slate-400">{k.vol} searches</p>
                            </div>
                          </div>
                          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md">
                            {k.lift}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === "sge" && (
                  <motion.div
                    key="sge"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-2.5"
                  >
                    <div className="flex items-center justify-between bg-purple-50 border border-purple-200 p-3 rounded-2xl">
                      <div>
                        <p className="text-xs font-bold text-slate-900">Google SGE &amp; Gemini Citations</p>
                        <p className="text-[10px] text-slate-600">Generative AI Knowledge Graph Entity Optimization</p>
                      </div>
                      <span className="text-xs font-bold text-purple-700 bg-purple-100 px-2.5 py-1 rounded-full border border-purple-300">
                        94.2% Rate
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-center">
                        <p className="text-2xl font-black text-purple-700">4.1x</p>
                        <p className="text-[10px] text-slate-500 mt-0.5">Perplexity &amp; SGE Lift</p>
                      </div>
                      <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-center">
                        <p className="text-2xl font-black text-blue-600">1,420</p>
                        <p className="text-[10px] text-slate-500 mt-0.5">Indexed Entities</p>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                      <div className="flex items-center gap-2 text-[11px] text-slate-800 font-semibold">
                        <Cpu className="w-3.5 h-3.5 text-purple-600" />
                        <span>AI Answer Engine Inclusion: Verified</span>
                      </div>
                      <p className="text-[10px] text-slate-500 leading-relaxed">
                        Engineered with schema entity graphs and semantic topic vectors to guarantee citation in conversational search engines.
                      </p>
                    </div>
                  </motion.div>
                )}

                {activeTab === "vitals" && (
                  <motion.div
                    key="vitals"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-2.5"
                  >
                    <div className="flex items-center justify-between bg-amber-50 border border-amber-200 p-3 rounded-2xl">
                      <div>
                        <p className="text-xs font-bold text-slate-900">Lighthouse Performance 100/100</p>
                        <p className="text-[10px] text-slate-600">Next.js Server-Side Hydration &amp; Speed</p>
                      </div>
                      <span className="text-xs font-bold text-amber-700 bg-amber-100 px-2.5 py-1 rounded-full border border-amber-300">
                        100% Pass
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-center">
                        <p className="text-xl font-black text-emerald-600">0.65s</p>
                        <p className="text-[9px] uppercase font-bold text-slate-500 mt-0.5">LCP (Fast)</p>
                      </div>
                      <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-center">
                        <p className="text-xl font-black text-blue-600">18ms</p>
                        <p className="text-[9px] uppercase font-bold text-slate-500 mt-0.5">INP (Zero Lag)</p>
                      </div>
                      <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-center">
                        <p className="text-xl font-black text-amber-600">0.00</p>
                        <p className="text-[9px] uppercase font-bold text-slate-500 mt-0.5">CLS (Zero Shift)</p>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                      <div className="flex items-center gap-2 text-[11px] text-slate-800 font-semibold">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Google Page Experience Verified</span>
                      </div>
                      <p className="text-[10px] text-slate-500 leading-relaxed">
                        Instant TTFB and sub-second rendering across all mobile networks worldwide.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
