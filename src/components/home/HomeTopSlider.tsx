"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Trophy,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Search,
  Pause,
  Play,
  Lock,
  ShieldCheck,
  Zap,
} from "lucide-react";

interface SlideData {
  id: number;
  image: string;
  client: string;
  clientDomain: string;
  achievement: string;
  badge: string;
  badgeColor: string;
  keyword: string;
  googleUrl: string;
  outranked: string;
  tagline: string;
  impactMetric: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    image: "/images/slider/slide-1-propertysdeal-rank-1.jpg",
    client: "PropertysDeal",
    clientDomain: "propertysdeal.in",
    achievement: "Ranked No. 1 on Google",
    badge: "Podium Rank #1",
    badgeColor: "bg-amber-500 text-white shadow-amber-500/20",
    keyword: "flats for sale in ahmedabad",
    googleUrl: "google.com/search?q=flats+for+sale+in+ahmedabad",
    outranked: "MagicBricks, 99acres & Housing.com",
    tagline: "Gujarat's Leading Real Estate Platform",
    impactMetric: "+380% Organic Inquiries",
  },
  {
    id: 2,
    image: "/images/slider/slide-2-propertysdeal-page-1.jpg",
    client: "PropertysDeal",
    clientDomain: "propertysdeal.in",
    achievement: "Google Page 1 Top 3",
    badge: "Top 3 Position",
    badgeColor: "bg-blue-600 text-white shadow-blue-600/20",
    keyword: "flat for sale in satellite ahmedabad",
    googleUrl: "google.com/search?q=flat+for+sale+in+satellite+ahmedabad",
    outranked: "OLX, VitalSpace & Local Aggregators",
    tagline: "High-Ticket Commercial & Residential SERP",
    impactMetric: "Zero Paid Ad Spend",
  },
  {
    id: 3,
    image: "/images/slider/slide-3-shyamsir-ai-class.jpg",
    client: "Shyam Sir Institute",
    clientDomain: "shyamsir.com",
    achievement: "Google Page 1 Ranking",
    badge: "Organic Winner",
    badgeColor: "bg-emerald-600 text-white shadow-emerald-600/20",
    keyword: "ai class in ahmedabad",
    googleUrl: "google.com/search?q=ai+class+in+ahmedabad",
    outranked: "Top Regional Training Centers",
    tagline: "Technology & Skill Training Academy",
    impactMetric: "Continuous Student Intake",
  },
  {
    id: 4,
    image: "/images/slider/slide-4-globalit-ai-course.jpg",
    client: "Global IT Computer Academy",
    clientDomain: "globalitacademy.in",
    achievement: "Page 1 Search Visibility",
    badge: "SERP Highlight",
    badgeColor: "bg-indigo-600 text-white shadow-indigo-600/20",
    keyword: "artificial intelligence course in ahmedabad",
    googleUrl: "google.com/search?q=ai+course+in+ahmedabad",
    outranked: "National EdTech Competitors",
    tagline: "IT & Professional Career Training",
    impactMetric: "High-Trust SERP Map Pack",
  },
];

const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    transition: {
      x: { type: "tween" as const, ease: [0.25, 1, 0.5, 1], duration: 0.5 },
      opacity: { duration: 0.25 },
    },
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
    transition: {
      x: { type: "tween" as const, ease: [0.25, 1, 0.5, 1], duration: 0.5 },
      opacity: { duration: 0.25 },
    },
  }),
};

export function HomeTopSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState<1 | -1>(1);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Continuous auto-play timer: 3000ms interval (Pauses ONLY if user clicks pause button)
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, nextSlide]);

  const current = slides[currentIndex];

  return (
    <section
      aria-label="Live Verified Google SEO Rankings Showcase"
      className="relative bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC] py-10 sm:py-16 overflow-hidden border-b border-slate-200/80"
    >
      {/* Radiant High-Tech Ambient Backlight */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-tr from-blue-200/40 via-indigo-200/30 to-cyan-200/40 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:28px_28px] opacity-40 pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-5">
          <div className="space-y-2.5 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-black uppercase tracking-wider shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
              </span>
              <Trophy className="w-3.5 h-3.5 text-amber-500" />
              <span>Podium Proof • Live Google #1 Rankings</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Real Clients.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">
                Ranked #1 on Google.
              </span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
              Verifiable proof of our algorithmic SEO execution. We secure top podium positions for competitive commercial search terms across Gujarat &amp; global markets.
            </p>
          </div>

          {/* Controls Capsule */}
          <div className="flex items-center gap-3 self-start lg:self-end">
            <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-white border border-slate-200/90 shadow-sm text-xs font-bold">
              <span className="flex items-center gap-1.5">
                <span
                  className={`w-2 h-2 rounded-full ${
                    isPaused ? "bg-amber-500" : "bg-emerald-500 animate-pulse"
                  }`}
                />
                <span className={isPaused ? "text-amber-700 font-extrabold" : "text-emerald-700 font-extrabold"}>
                  {isPaused ? "Paused" : "Auto: 3s"}
                </span>
              </span>
              <span className="text-slate-300">|</span>
              <span className="text-blue-600 font-black">{String(currentIndex + 1).padStart(2, "0")}</span>
              <span className="text-slate-300">/</span>
              <span className="text-slate-400">04</span>
              
              <button
                type="button"
                onClick={() => setIsPaused(!isPaused)}
                aria-label={isPaused ? "Resume auto slide" : "Pause auto slide"}
                className="ml-1 p-1 rounded-lg text-slate-500 hover:text-blue-600 hover:bg-slate-100 transition-colors cursor-pointer"
                title={isPaused ? "Click to play (3s auto-scroll)" : "Click to pause"}
              >
                {isPaused ? (
                  <Play className="w-3.5 h-3.5 text-emerald-600" />
                ) : (
                  <Pause className="w-3.5 h-3.5 text-slate-600" />
                )}
              </button>
            </div>

            {/* Prev / Next Buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous ranking achievement"
                className="w-10 h-10 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-blue-500 hover:text-blue-600 flex items-center justify-center text-slate-700 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next ranking achievement"
                className="w-10 h-10 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-blue-500 hover:text-blue-600 flex items-center justify-center text-slate-700 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* 4 Interactive Client Switcher Tabs (Like Apple / Stripe Showcase) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3.5 mb-5">
          {slides.map((s, idx) => {
            const isActive = currentIndex === idx;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => goToSlide(idx)}
                className={`group relative text-left p-3 sm:p-4 rounded-2xl transition-all duration-300 border overflow-hidden cursor-pointer ${
                  isActive
                    ? "bg-white border-blue-500/80 shadow-[0_10px_25px_-5px_rgba(37,99,235,0.15)] ring-2 ring-blue-500/20"
                    : "bg-white/80 hover:bg-white border-slate-200/80 hover:border-slate-300 shadow-sm"
                }`}
              >
                {/* 3-second animated progress line on active tab */}
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-slate-100">
                    <motion.div
                      key={`tab-progress-${currentIndex}-${isPaused}`}
                      initial={{ width: "0%" }}
                      animate={{ width: isPaused ? "0%" : "100%" }}
                      transition={{ duration: 3.0, ease: "linear" }}
                      className="h-full bg-gradient-to-r from-blue-600 to-indigo-600"
                    />
                  </div>
                )}

                <div className="flex items-center justify-between gap-1 mb-1.5">
                  <span className="text-xs font-black text-slate-900 group-hover:text-blue-600 transition-colors truncate">
                    {s.client}
                  </span>
                  <span
                    className={`text-[9px] font-black px-1.5 py-0.5 rounded uppercase tracking-wider shrink-0 ${
                      isActive
                        ? "bg-blue-50 text-blue-700 border border-blue-200"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {s.badge}
                  </span>
                </div>

                <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-600 truncate">
                  <Search className="w-3 h-3 text-blue-500 shrink-0" />
                  <span className="truncate">&quot;{s.keyword}&quot;</span>
                </div>

                <div className="mt-1 flex items-center gap-1 text-[10px] text-emerald-600 font-bold">
                  <TrendingUp className="w-2.5 h-2.5" />
                  <span>{s.impactMetric}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Central Display: Realistic macOS Browser Window Frame */}
        <div className="relative rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.12)]">
          
          {/* macOS Window Chrome Header */}
          <div className="px-4 py-3 bg-slate-100/90 border-b border-slate-200/90 flex items-center justify-between gap-3 select-none">
            {/* macOS Window Dots */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/90 border border-rose-600/30 shadow-xs" />
              <span className="w-3 h-3 rounded-full bg-amber-500/90 border border-amber-600/30 shadow-xs" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/90 border border-emerald-600/30 shadow-xs" />
            </div>

            {/* Google Search Bar Mockup */}
            <div className="flex-1 max-w-lg mx-auto flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 shadow-inner text-xs text-slate-600 font-medium">
              <Lock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span className="text-slate-400 font-mono text-[11px] truncate">https://</span>
              <span className="text-slate-800 font-medium font-mono text-[11px] truncate">
                {current.googleUrl}
              </span>
            </div>

            {/* SERP Status Tag */}
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10px] font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Verified SERP Snapshot</span>
            </div>
          </div>

          {/* Display Stage Area (Perfect 16:9 Image Container) */}
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_e, { offset }) => {
                  if (offset.x < -40) {
                    nextSlide();
                  } else if (offset.x > 40) {
                    prevSlide();
                  }
                }}
                className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing bg-slate-100"
              >
                <Image
                  src={current.image}
                  alt={`${current.client} - ${current.achievement} for ${current.keyword}`}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 95vw, 1200px"
                  className="w-full h-full object-cover select-none"
                />

                {/* Floating Glassmorphic Badges on Screen */}
                <div className="absolute top-3 left-3 sm:top-5 sm:left-5 z-20 pointer-events-none">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-white/60 shadow-lg text-slate-900 text-xs font-black">
                    <Trophy className="w-4 h-4 text-amber-500" />
                    <span>{current.achievement}</span>
                  </div>
                </div>

                <div className="absolute top-3 right-3 sm:top-5 sm:right-5 z-20 pointer-events-none">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-800 text-white text-xs font-bold shadow-lg">
                    <Zap className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{current.impactMetric}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom Progress Bar on the Stage */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-900/10 z-20 backdrop-blur-sm">
              <motion.div
                key={`progress-${currentIndex}-${isPaused}`}
                initial={{ width: "0%" }}
                animate={{ width: isPaused ? "0%" : "100%" }}
                transition={{ duration: 3.0, ease: "linear" }}
                className="h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500"
              />
            </div>
          </div>

          {/* Bottom Insights Cockpit Bar */}
          <div className="p-4 sm:p-5 bg-white border-t border-slate-100 flex flex-col lg:flex-row items-center justify-between gap-4">
            
            {/* Left: Active Detail Metrics */}
            <div className="flex items-center flex-wrap gap-4 sm:gap-6 w-full lg:w-auto">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-black shadow-md shadow-blue-500/20 shrink-0">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-black text-slate-900">{current.client}</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {current.badge}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">{current.tagline}</p>
                </div>
              </div>

              <div className="hidden md:block h-8 w-px bg-slate-200" />

              <div className="space-y-0.5">
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Outranked Rivals
                </div>
                <div className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>{current.outranked}</span>
                </div>
              </div>
            </div>

            {/* Right: Direct CTA */}
            <div className="flex items-center gap-3 w-full lg:w-auto justify-end">
              <Link
                href="/talk-to-expert?offer=15-days-free-demo"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 shadow-md shadow-blue-500/20 hover:shadow-lg transition-all hover:scale-105 active:scale-95 whitespace-nowrap cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Claim Your 15-Day Free Demo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
