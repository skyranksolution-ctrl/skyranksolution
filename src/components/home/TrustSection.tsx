"use client";

import React from "react";
import {
  Target,
  FileText,
  Database,
  Headphones,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem, AnimatedCounter, CardHoverMotion } from "@/components/ui/Motion";

export function TrustSection() {
  const pillars = [
    {
      icon: Target,
      badge: "Commercial Intent",
      title: "Customized SEO Strategy",
      description:
        "Tailored organic roadmaps built around your exact commercial business model, industry economics, and customer journey.",
    },
    {
      icon: FileText,
      badge: "Zero Obfuscation",
      title: "Transparent Reporting",
      description:
        "Live access to verified metrics in Google Search Console and GA4 with zero hidden data, fabricated charts, or obfuscated reports.",
    },
    {
      icon: Database,
      badge: "Scientific Modeling",
      title: "Data-Driven Decisions",
      description:
        "Every optimization, keyword target, and technical refactor is grounded in rigorous mathematical SERP analysis and entity clustering.",
    },
    {
      icon: Headphones,
      badge: "Senior Engineers",
      title: "Dedicated Strategic Support",
      description:
        "Direct collaboration with senior technical SEO specialists and web architects who understand both code and bottom-line revenue.",
    },
  ];

  const statPills = [
    { label: "Keywords Analyzed & Tracked", value: 500000, suffix: "+" },
    { label: "Core Web Vitals Pass Rate", value: 99, suffix: ".4%" },
    { label: "Specialized Disciplines", value: 15, suffix: " Services" },
    { label: "Global Target Markets", value: 6, suffix: " Regions" },
  ];

  const marqueeItems = [
    "Google Search Essentials Compliant",
    "Schema.org Semantic Entity Graph Validation",
    "Next.js App Router Architecture",
    "Zero PBNs • 100% White-Hat Editorial Outreach",
    "Sub-Second Mobile LCP Guaranteed",
    "GA4 & Search Console Direct Attribution",
    "Google SGE & Gemini AI Indexing Ready",
    "International Hreflang Multi-Region Targeting",
  ];

  return (
    <section className="bg-white border-y border-slate-200/80 py-16 relative overflow-hidden text-slate-900">
      {/* Background Subtle Dot Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      {/* Infinite Horizontal Marquee Ticker */}
      <div className="w-full overflow-hidden border-b border-slate-100 pb-8 mb-12">
        <div className="flex w-max animate-marquee">
          <div className="flex items-center gap-4 sm:gap-6 whitespace-nowrap px-4">
            {marqueeItems.concat(marqueeItems).map((item, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-700 bg-slate-50 px-3.5 sm:px-4 py-2 rounded-full border border-slate-200 shadow-sm hover:border-blue-400 hover:text-blue-600 transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-14 relative z-10">
        
        {/* Stat Highlights Bar with Animated Counters on Scroll */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pb-12 border-b border-slate-100">
          {statPills.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/80 border border-slate-200 hover:border-blue-400 hover:bg-white hover:shadow-md transition-all flex items-center gap-3.5 sm:gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center font-black text-sm group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-amber-500 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-[11px] text-slate-500 uppercase font-bold tracking-wider">{stat.label}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Section Heading with FadeIn Animation */}
        <FadeIn className="text-center max-w-3xl mx-auto my-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200">
            Our Operating Philosophy
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Built on Engineering Precision, White-Hat Ethics, and Verifiable Commercial ROI
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            We reject manipulative black-hat schemes and hollow vanity impressions. We construct durable search equity that compounds month over month.
          </p>
        </FadeIn>

        {/* 4 Pillars Grid with Stagger & Card Hover */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <StaggerItem key={pillar.title}>
                <CardHoverMotion className="h-full">
                  <div className="bg-white border border-slate-200/90 rounded-2xl p-6 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 group flex flex-col justify-between h-full relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-full blur-xl group-hover:bg-blue-100/50 transition-all" />

                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] uppercase font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                          {pillar.badge}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{pillar.description}</p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-blue-600">
                      <CheckCircle2 className="w-3.5 h-3.5" />
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
