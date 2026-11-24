"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/ui/Motion";

export function FinalCTASection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-slate-50 relative overflow-hidden border-t border-slate-200/80">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-14">
        {/* Floating Wide Banner Card in Reference Style */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-slate-950 border border-slate-800/80 min-h-[320px] sm:min-h-[380px] md:min-h-[420px] flex items-center">
          {/* Background Image Layer */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/final-cta-banner.jpg"
              alt="SkyRank AI SEO Workspace and Growth Intelligence"
              fill
              className="object-cover object-right md:object-center"
              priority
            />
            {/* Cinematic Gradient Fade from Left (Dark) to Right (Transparent) */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 sm:via-slate-950/75 to-transparent z-10" />
            {/* Mobile dark overlay to guarantee 100% legibility */}
            <div className="absolute inset-0 bg-slate-950/60 sm:hidden z-10" />
          </div>

          {/* Banner Content (Left Aligned exactly like reference) */}
          <div className="relative z-20 py-8 sm:py-14 md:py-16 px-4 sm:px-10 md:px-14 lg:px-16 max-w-2xl text-left">
            <FadeIn className="space-y-3 sm:space-y-4">
              {/* Top Subtitle */}
              <p className="text-base sm:text-xl font-medium text-slate-200 tracking-wide">
                Get started with
              </p>

              {/* Massive Bold Headline */}
              <div className="space-y-1">
                <h2 className="text-3xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-none uppercase">
                  15 DAYS <span className="text-rose-500">FREE</span>
                </h2>
              </div>

              {/* Body Text */}
              <p className="text-sm sm:text-base md:text-lg text-slate-300 font-normal leading-relaxed max-w-lg">
                on your website ranking with SkyRank AI SEO Engine. Zero upfront cost.
              </p>

              {/* CTA Action Buttons */}
              <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
                <Link
                  href="/talk-to-expert?offer=15-days-free-demo"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-rose-600/30 transition-all hover:scale-[1.02] active:scale-95 text-center cursor-pointer"
                >
                  <span>Claim 15-Day Free Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/seo-audit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-sm sm:text-base backdrop-blur-md transition-all text-center cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Free Instant Audit</span>
                </Link>
              </div>

              {/* Trust Micro-Pills */}
              <div className="pt-2 sm:pt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-300 font-medium">
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  No Credit Card Required
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Zero Lock-In Contract
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  100% White-Hat Guarantee
                </span>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
