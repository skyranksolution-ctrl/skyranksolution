"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Trophy, Search, ArrowRight, TrendingUp } from "lucide-react";

interface ClientBanner {
  id: number;
  image: string;
  client: string;
  achievement: string;
  badge: string;
  keyword: string;
  tagline: string;
  metric: string;
}

const clientBanners: ClientBanner[] = [
  {
    id: 1,
    image: "/images/slider/slide-1-propertysdeal-rank-1.jpg",
    client: "PropertysDeal",
    achievement: "Ranked No. 1 on Google",
    badge: "Google #1 Podium",
    keyword: "Flats for Sale in Ahmedabad",
    tagline: "Gujarat's Trusted Real Estate Platform",
    metric: "+380% Organic Inquiries",
  },
  {
    id: 2,
    image: "/images/slider/slide-2-propertysdeal-page-1.jpg",
    client: "PropertysDeal",
    achievement: "Google Page 1 Ranking",
    badge: "Top 3 Position",
    keyword: "Flat for Sale in Satellite",
    tagline: "High-Ticket Commercial Real Estate",
    metric: "Zero Paid Ad Spend",
  },
  {
    id: 3,
    image: "/images/slider/slide-3-shyamsir-ai-class.jpg",
    client: "Shyam Sir Institute",
    achievement: "Google Page 1 Ranking",
    badge: "Page 1 Organic Winner",
    keyword: "AI Class in Ahmedabad",
    tagline: "Technology & Skill Training",
    metric: "Direct Student Pipeline",
  },
  {
    id: 4,
    image: "/images/slider/slide-4-globalit-ai-course.jpg",
    client: "Global IT Academy",
    achievement: "Page 1 Search Visibility",
    badge: "SERP Highlight",
    keyword: "AI Course in Ahmedabad",
    tagline: "Professional Software Training",
    metric: "High-Trust SERP Map Pack",
  },
];

// Duplicate items for a perfectly seamless, infinite marquee loop
const marqueeBanners = [...clientBanners, ...clientBanners, ...clientBanners];

export function HomeTopSlider() {
  return (
    <section
      aria-label="Live Client Google #1 Rankings Scrolling Showcase"
      className="bg-white border-b border-slate-200/80 py-8 sm:py-10 relative overflow-hidden text-slate-900"
    >
      {/* Background Subtle Tech Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        {/* Title Header */}
        <div className="flex items-center gap-2.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-[11px] font-black uppercase tracking-wider shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
            </span>
            <Trophy className="w-3.5 h-3.5 text-amber-500" />
            <span>Proven Results • Live Google #1 Rankings</span>
          </div>

          <span className="text-slate-300 hidden md:inline">|</span>

          <span className="text-xs text-slate-600 font-semibold hidden md:inline">
            Real clients ranking on Page 1 across Gujarat &amp; global markets
          </span>
        </div>

        {/* CTA Link */}
        <Link
          href="/talk-to-expert?offer=15-days-free-demo"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors group self-start sm:self-auto"
        >
          <span>Get Similar Results For Your Domain</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>

      {/* Infinite Horizontal Scrolling Track with Small Banners */}
      <div className="w-full overflow-hidden relative group">
        
        {/* Left & Right Soft Blur Gradients */}
        <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee">
          <div className="flex items-center gap-3 sm:gap-6 px-4">
            {marqueeBanners.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="w-[260px] sm:w-[330px] flex-shrink-0 bg-white border border-slate-200/90 hover:border-blue-500 rounded-2xl p-2.5 shadow-sm hover:shadow-xl transition-all duration-300 group/card cursor-pointer"
              >
                {/* Small Banner Image (16:9, Compact & Razor Sharp) */}
                <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-slate-900 border border-slate-100">
                  <Image
                    src={item.image}
                    alt={`${item.client} - ${item.achievement}`}
                    fill
                    sizes="(max-width: 768px) 280px, 330px"
                    className="object-cover group-hover/card:scale-105 transition-transform duration-300 select-none"
                  />

                  {/* Floating Rank Pill on Top Left */}
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-slate-950/90 backdrop-blur-md text-amber-300 text-[10px] font-black uppercase tracking-wider flex items-center gap-1 shadow-sm">
                    <Trophy className="w-3 h-3 text-amber-400" />
                    <span>{item.badge}</span>
                  </div>
                </div>

                {/* Compact Details below Small Banner */}
                <div className="pt-2.5 px-1 space-y-1">
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-xs font-black text-slate-900 truncate">
                      {item.client}
                    </span>
                    <span className="text-[10px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded font-bold shrink-0 flex items-center gap-1">
                      <TrendingUp className="w-2.5 h-2.5" />
                      <span>{item.metric}</span>
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-[11px] text-slate-600 font-semibold truncate">
                    <Search className="w-3 h-3 text-blue-600 shrink-0" />
                    <span className="truncate">&quot;{item.keyword}&quot;</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
