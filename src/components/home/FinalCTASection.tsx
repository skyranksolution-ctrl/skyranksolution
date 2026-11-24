"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, CheckCircle2, Gift } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/Motion";

export function FinalCTASection() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-950 text-white relative overflow-hidden">
      {/* Background radial highlight */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-500/25 blur-[130px] rounded-full pointer-events-none"
      />

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-14 text-center relative z-10 space-y-8">
        <FadeIn className="space-y-4">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-black uppercase tracking-wider">
            <Gift className="w-4 h-4 text-emerald-400 animate-bounce" />
            Special Offer: 15-Day Free Demo Trial
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Experience SkyRank AI SEO for 15 Days Completely Free
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Stop losing high-value commercial searches to competitors. Test our ranking intelligence, technical audit, and entity models on your domain with zero financial risk.
          </p>
        </FadeIn>

        {/* Buttons with Hover Scale */}
        <FadeIn delay={0.2} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="/talk-to-expert?offer=15-days-free-demo"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-black text-slate-900 bg-white hover:bg-slate-100 shadow-xl transition-all hover:scale-105 text-sm sm:text-base cursor-pointer"
          >
            <Gift className="w-4 h-4 text-emerald-600" />
            <span>Claim 15-Day Free Demo</span>
          </Link>

          <Link
            href="/seo-audit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-600/40 border border-blue-400/30 transition-all hover:scale-105 text-sm sm:text-base cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Instant SEO Audit Scan</span>
          </Link>
        </FadeIn>

        {/* Trust Badges */}
        <FadeIn delay={0.3} className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>15 Days Free Trial</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>No Credit Card Required</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Zero Lock-In Contract</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>100% White-Hat Guarantee</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
