"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { servicesData } from "@/data/services";
import { DynamicIcon } from "@/lib/utils/icons";
import { ArrowRight, ChevronRight } from "lucide-react";
import { FadeIn } from "@/components/ui/Motion";

export function ServicesOverview() {
  const [filter, setFilter] = useState<"featured" | "technical" | "local" | "growth">("featured");

  const filterMaps: Record<string, string[]> = {
    featured: [
      "ai-seo",
      "local-seo",
      "technical-seo",
      "ecommerce-seo",
      "content-marketing",
      "link-building",
      "website-development",
      "mobile-app-development",
    ],
    technical: ["technical-seo", "ai-seo", "website-development", "seo-services"],
    local: ["local-seo", "google-business-profile-optimization", "international-seo"],
    growth: ["content-marketing", "link-building", "keyword-research", "competitor-analysis", "ecommerce-seo"],
  };

  const currentSlugs = filterMaps[filter] || filterMaps.featured;
  const filteredServices = servicesData.filter((svc) => currentSlugs.includes(svc.slug));

  const filterTabs = [
    { id: "featured", label: "Core Featured (8)" },
    { id: "technical", label: "Technical & AI SEO" },
    { id: "local", label: "Local & Regional Maps" },
    { id: "growth", label: "Content & Link Building" },
  ] as const;

  return (
    <section className="py-24 bg-[#F8FAFC] text-slate-900 relative overflow-hidden border-b border-slate-200/80">
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-14 relative z-10">
        
        {/* Header with FadeIn */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200">
            Engineered Capabilities
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Comprehensive Search & Growth Engineering
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            From technical Core Web Vitals remediation and semantic AI entity clustering to high-authority editorial outreach and custom Next.js development.
          </p>
        </FadeIn>

        {/* Interactive Filter Pills */}
        <FadeIn delay={0.1} className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {filterTabs.map((tab) => {
            const isActive = filter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id)}
                className={`relative px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? "text-white"
                    : "text-slate-600 hover:text-slate-900 bg-white border border-slate-200 hover:border-slate-300 shadow-sm"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeServiceFilter"
                    className="absolute inset-0 bg-blue-600 rounded-xl shadow-md shadow-blue-500/25 border border-blue-500"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </FadeIn>

        {/* Animated Service Cards Grid with AnimatePresence */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, idx) => (
              <motion.div
                key={service.slug}
                layout
                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: -20 }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white border border-slate-200/90 rounded-2xl p-6 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10 flex flex-col justify-between group relative overflow-hidden transition-all duration-300 shadow-sm"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-2xl group-hover:bg-blue-100/60 transition-all" />

                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 transition-all">
                    <DynamicIcon name={service.icon} className="w-6 h-6" />
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-4">
                    {service.shortDesc}
                  </p>
                </div>

                <Link
                  href={`/services/${service.slug}`}
                  className="w-full inline-flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-slate-50 hover:bg-blue-600 text-xs font-bold text-slate-700 hover:text-white border border-slate-200 hover:border-blue-500 transition-all group-hover:shadow-sm"
                >
                  <span>Explore Service</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Callout */}
        <FadeIn delay={0.2} className="text-center pt-14">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-slate-800 bg-white border border-slate-200 hover:border-blue-400 hover:text-blue-600 shadow-md transition-all hover:scale-105"
          >
            <span>Explore All 15 Specialized Disciplines</span>
            <ChevronRight className="w-4 h-4 text-blue-600" />
          </Link>
        </FadeIn>

      </div>
    </section>
  );
}
