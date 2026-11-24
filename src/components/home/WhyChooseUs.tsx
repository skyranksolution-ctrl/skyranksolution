"use client";

import React from "react";
import {
  Compass,
  Cpu,
  Code2,
  FileBarChart,
  LineChart,
  ShieldCheck,
  Check,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem, CardHoverMotion } from "@/components/ui/Motion";

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Compass,
      title: "Customized SEO Strategies",
      description:
        "We don't sell cookie-cutter checklists. Every roadmap is customized to your competitive landscape, sales cycle, and market conditions.",
    },
    {
      icon: Cpu,
      title: "AI-Assisted SEO Research",
      description:
        "We combine modern machine learning tools with human strategic discernment to model SERP trends and identify high-value opportunities faster.",
    },
    {
      icon: Code2,
      title: "Technical SEO Expertise",
      description:
        "Engineering-grade optimization. We audit server logs, optimize Next.js/React rendering, and solve Core Web Vitals at the code level.",
    },
    {
      icon: FileBarChart,
      title: "100% Transparent Reporting",
      description:
        "No vanity metrics or masked numbers. You receive clear executive dashboards with verified Search Console impressions, clicks, and conversions.",
    },
    {
      icon: LineChart,
      title: "Aggressive Competitor Analysis",
      description:
        "We reverse-engineer your competitors' top-performing keywords, backlink sources, and content structures to ethically outrank them.",
    },
    {
      icon: ShieldCheck,
      title: "Long-Term Organic Growth",
      description:
        "We strictly practice white-hat, Google-compliant SEO methods designed to compound in value and withstand algorithmic core updates.",
    },
  ];

  return (
    <section className="py-24 bg-white text-slate-900 relative overflow-hidden border-t border-slate-200/80">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-14 relative z-10">
        
        {/* Section Heading with FadeIn */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-50 px-3.5 py-1 rounded-full border border-amber-200">
            Why SkyRank Solution
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Why High-Growth Companies Choose SkyRank Solution
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            In an industry plagued by false promises and automated spam, SkyRank Solution stands apart through engineering discipline, mathematical rigor, and radical transparency.
          </p>
        </FadeIn>

        {/* 6 Core Value Cards Grid with Stagger */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.title}>
                <CardHoverMotion className="h-full">
                  <div className="bg-slate-50/80 border border-slate-200/90 rounded-2xl p-6 hover:border-blue-400 hover:bg-white hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group h-full flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-full blur-xl group-hover:bg-blue-100/50 transition-all" />

                    <div>
                      <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-slate-200 flex items-center gap-1.5 text-[11px] font-bold text-emerald-600">
                      <Check className="w-3.5 h-3.5" />
                      <span>Standard Operating Protocol</span>
                    </div>
                  </div>
                </CardHoverMotion>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
