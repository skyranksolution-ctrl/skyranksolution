"use client";

import React, { useState } from "react";
import {
  FileSearch,
  KeyRound,
  Eye,
  Route,
  FileCode,
  Cpu,
  FileEdit,
  Link,
  Activity,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/Motion";

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    { step: 1, title: "Website Audit", desc: "Diagnostic inspection of technical hygiene, crawl health, and index status.", icon: FileSearch },
    { step: 2, title: "Keyword Research", desc: "Intent-first discovery targeting high-converting commercial queries.", icon: KeyRound },
    { step: 3, title: "Competitor Analysis", desc: "Reverse-engineering top rivals' backlink gaps and keyword market share.", icon: Eye },
    { step: 4, title: "Strategy Planning", desc: "Architecting a phased 3 to 12 month roadmap tailored to revenue targets.", icon: Route },
    { step: 5, title: "On-Page Optimization", desc: "Refining meta data, heading hierarchy, semantic entities, and CRO triggers.", icon: FileCode },
    { step: 6, title: "Technical SEO", desc: "Engineering Core Web Vitals, SSR, JSON-LD schemas, and crawl efficiency.", icon: Cpu },
    { step: 7, title: "Content Optimization", desc: "Creating authoritative pillar assets and refreshing underperforming content.", icon: FileEdit },
    { step: 8, title: "Link Building", desc: "Securing high-authority, contextual editorial backlinks through manual outreach.", icon: Link },
    { step: 9, title: "Performance Monitoring", desc: "Real-time tracking of impressions, CTR, organic rankings, and lead conversions.", icon: Activity },
    { step: 10, title: "Continuous Iteration", desc: "Iterative algorithmic defense, conversion tuning, and international scaling.", icon: Sparkles },
  ];

  return (
    <section className="py-24 bg-[#FAFCFF] text-slate-900 relative overflow-hidden border-t border-slate-200/80">
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-14 relative z-10">
        
        {/* Header with FadeIn */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3.5 py-1 rounded-full border border-amber-200">
            Systematic Methodology
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            The 10-Step Organic Growth Framework
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Market leadership is never an accident. We follow a disciplined, phased roadmap that turns technical SEO and content into compounding business equity.
          </p>
        </FadeIn>

        {/* 10 Step Grid with Stagger */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((item) => {
            const Icon = item.icon;
            const isSelected = activeStep === item.step;
            return (
              <StaggerItem key={item.step}>
                <div
                  onMouseEnter={() => setActiveStep(item.step)}
                  className={`rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between h-full cursor-pointer relative overflow-hidden border ${
                    isSelected
                      ? "bg-white border-blue-500 shadow-xl shadow-blue-500/10 -translate-y-1"
                      : "bg-white/80 border-slate-200/90 hover:border-slate-300 hover:bg-white shadow-sm"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-black text-slate-300 transition-colors">
                      {String(item.step).padStart(2, "0")}
                    </span>
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                        isSelected
                          ? "bg-blue-600 text-white scale-110 shadow-md shadow-blue-500/30"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-[10px] text-blue-600 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Phase Milestone</span>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

      </div>
    </section>
  );
}
