"use client";

import React from "react";
import { AuditForm } from "@/components/forms/AuditForm";
import { CheckCircle2, Sparkles } from "lucide-react";
import { FadeIn } from "@/components/ui/Motion";

export function AuditCTASection() {
  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-14 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading and Value Pillars with FadeIn */}
          <FadeIn direction="right" className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-semibold">
              <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
              <span>Complimentary Technical Diagnostic</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Discover What&apos;s Holding Your Website Back
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Uncover hidden crawl bottlenecks, indexing errors, keyword cannibalization, and competitor gaps that prevent your business from ranking #1.
            </p>

            <div className="space-y-3.5 pt-2 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-3 justify-center lg:justify-start">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>Core Web Vitals & speed performance breakdown</span>
              </div>
              <div className="flex items-start gap-3 justify-center lg:justify-start">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>Competitor keyword footprint & market gap analysis</span>
              </div>
              <div className="flex items-start gap-3 justify-center lg:justify-start">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>Actionable remediation roadmap delivered within 24 hours</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-xs text-slate-400">
              <p className="font-semibold text-slate-200 mb-1">🔒 Complete Confidentiality Guarantee</p>
              <p>Your search telemetry and competitor data are strictly confidential and never shared with third parties.</p>
            </div>
          </FadeIn>

          {/* Right Column: Secure Audit Form with FadeIn */}
          <FadeIn direction="left" delay={0.2} className="lg:col-span-7">
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-9 shadow-2xl backdrop-blur-xl">
              <AuditForm />
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
