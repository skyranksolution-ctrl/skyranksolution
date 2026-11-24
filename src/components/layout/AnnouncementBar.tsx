"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { X, ArrowRight, Gift, Sparkles } from "lucide-react";

export function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);

  if (!siteConfig.announcement.enabled || dismissed) return null;

  return (
    <div className="relative z-50 bg-gradient-to-r from-emerald-50 via-blue-50 to-indigo-50 border-b border-emerald-200/80 text-slate-700 text-xs py-2.5 px-3 sm:px-6 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between gap-3 relative z-10">
        
        {/* Left / Center content */}
        <div className="flex-1 flex items-center justify-center gap-2 text-center flex-wrap">
          {/* Glowing Status Pill */}
          <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-600/10 border border-emerald-600/30 text-[10px] font-black text-emerald-800 uppercase tracking-wider">
            <Gift className="w-3.5 h-3.5 text-emerald-600 animate-bounce" />
            <span>SPECIAL OFFER: 15-DAY FREE DEMO</span>
          </span>

          <span className="inline-flex items-center gap-1.5 font-semibold text-slate-800">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
            <span>{siteConfig.announcement.text}</span>
          </span>

          <Link
            href={siteConfig.announcement.ctaLink}
            className="inline-flex items-center gap-1 font-black text-blue-700 hover:text-indigo-800 transition-colors ml-1 group underline underline-offset-4 decoration-blue-400 hover:decoration-indigo-600"
          >
            <span>{siteConfig.announcement.ctaText}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Dismiss Button */}
        <button
          onClick={() => setDismissed(true)}
          aria-label="Dismiss banner"
          className="text-slate-400 hover:text-slate-700 transition-colors p-1 rounded-lg hover:bg-slate-200/50 flex-shrink-0 cursor-pointer"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
