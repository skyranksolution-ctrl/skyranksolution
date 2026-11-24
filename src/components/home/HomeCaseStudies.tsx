"use client";

import React from "react";
import Link from "next/link";
import { caseStudiesData } from "@/data/case-studies";
import { ArrowRight, Clock, TrendingUp } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem, CardHoverMotion } from "@/components/ui/Motion";

export function HomeCaseStudies() {
  return (
    <section className="py-24 bg-white text-slate-900 relative overflow-hidden border-t border-slate-200/80">
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-14 relative z-10">
        
        {/* Header with FadeIn */}
        <FadeIn className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
              <span>Proof of Execution</span>
              <span className="text-[10px] bg-blue-600 text-white px-2 py-0.5 rounded-full font-normal">
                Demo Records
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Real Search Engineering. Measurable Revenue Growth.
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Explore how our data-driven SEO strategies, technical remediation, and content architectures drive tangible pipeline for diverse business models.
            </p>
          </div>

          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 flex-shrink-0 transition-colors"
          >
            <span>View All Detailed Case Studies</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>

        {/* Top 2 Premier Case Studies Grid with Stagger & Card Hover */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudiesData.slice(0, 2).map((cs) => (
            <StaggerItem key={cs.slug}>
              <CardHoverMotion className="h-full">
                <div className="bg-slate-50/70 border border-slate-200/90 rounded-3xl p-7 sm:p-9 flex flex-col justify-between hover:border-blue-400 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 group h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-36 h-36 bg-blue-50 rounded-full blur-2xl group-hover:bg-blue-100/50 transition-all" />

                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-lg">
                        {cs.industry}
                      </span>
                      <span className="text-xs text-slate-500 flex items-center gap-1 font-mono">
                        <Clock className="w-3.5 h-3.5 text-blue-600" />
                        {cs.timeline}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                      {cs.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 line-clamp-2">
                      {cs.summary}
                    </p>

                    {/* Key Results Highlight */}
                    <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-white border border-slate-200/90 mb-6 shadow-sm">
                      <div>
                        <p className="text-[10px] uppercase font-bold text-slate-400">Industry Client</p>
                        <p className="text-xs font-bold text-slate-700 mt-0.5 line-clamp-1">{cs.clientNamePlaceholder}</p>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase font-bold text-emerald-600 flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" /> Key Impact
                        </p>
                        <p className="text-sm font-black text-emerald-600 mt-0.5">
                          {cs.results[0]?.metric} <span className="text-[10px] font-normal text-slate-500">({cs.results[0]?.label})</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <Link
                    href={`/case-studies/${cs.slug}`}
                    className="inline-flex items-center justify-between w-full pt-4 border-t border-slate-200 text-xs font-bold text-blue-600 group-hover:text-blue-700 transition-colors"
                  >
                    <span>Read Full Methodology &amp; Breakdown</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </Link>
                </div>
              </CardHoverMotion>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
}
