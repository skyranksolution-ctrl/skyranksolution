"use client";

import React from "react";
import Link from "next/link";
import { industriesData } from "@/data/industries";
import { DynamicIcon } from "@/lib/utils/icons";
import { ArrowRight } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem, CardHoverMotion } from "@/components/ui/Motion";

export function IndustriesSection() {
  return (
    <section className="py-24 bg-white text-slate-900 relative overflow-hidden border-t border-slate-200/80">
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />
      
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-14 relative z-10">
        
        {/* Header with FadeIn */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200">
            Sector Expertise
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Industries We Help Dominate Organic Search
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Different sectors require distinct search funnels. We apply tailored SEO architectures calibrated to the unique commercial intent of your target buyers.
          </p>
        </FadeIn>

        {/* 8 Industry Cards with Stagger and Hover Motion */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industriesData.map((ind) => (
            <StaggerItem key={ind.id}>
              <CardHoverMotion className="h-full">
                <div className="bg-slate-50/70 border border-slate-200/90 rounded-2xl p-6 shadow-sm hover:border-blue-400 hover:bg-white hover:shadow-xl hover:shadow-blue-500/10 transition-all flex flex-col justify-between h-full group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-full blur-xl group-hover:bg-blue-100/50 transition-all" />

                  <div>
                    <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <DynamicIcon name={ind.icon} className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {ind.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">{ind.tagline}</p>
                  </div>

                  <div className="pt-3 border-t border-slate-200">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 group-hover:translate-x-1 transition-all"
                    >
                      <span>Explore {ind.name} SEO</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </CardHoverMotion>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
}
