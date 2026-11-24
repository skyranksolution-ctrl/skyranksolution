"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Trophy,
  ChevronDown,
  Calculator,
  TrendingUp,
  Search,
  Zap,
  Building2,
  Flame,
  CheckCircle2,
  Clock,
  Gift,
} from "lucide-react";
import { pricingPlans } from "@/data/pricing";

interface FeatureRow {
  name: string;
  category: string;
  starter: string | boolean;
  growth: string | boolean;
  enterprise: string | boolean;
}

const detailedFeatureMatrix: FeatureRow[] = [
  // Strategy & Keywords
  {
    name: "Target Commercial Keyword Scope",
    category: "Strategy & Keyword Engineering",
    starter: "10 – 15 Keywords",
    growth: "25 – 30 Keywords",
    enterprise: "50+ Multi-Cluster Groups",
  },
  {
    name: "Competitor Keyword Gap Analysis",
    category: "Strategy & Keyword Engineering",
    starter: "Basic Top 2 Rivals",
    growth: "In-depth Top 5 Rivals",
    enterprise: "Full SERP Landscape & Market Share",
  },
  {
    name: "Search Intent Clustering (Commercial vs Informational)",
    category: "Strategy & Keyword Engineering",
    starter: true,
    growth: true,
    enterprise: true,
  },
  {
    name: "AI & Google SGE / Gemini Overview Optimization",
    category: "Strategy & Keyword Engineering",
    starter: false,
    growth: true,
    enterprise: true,
  },

  // Technical SEO
  {
    name: "Comprehensive Technical SEO Audit",
    category: "Technical Architecture & Performance",
    starter: true,
    growth: true,
    enterprise: true,
  },
  {
    name: "Core Web Vitals Remediation (LCP, INP, CLS)",
    category: "Technical Architecture & Performance",
    starter: "Diagnostic Only",
    growth: "Full Code Optimization",
    enterprise: "Continuous Engineering & Next.js Tuning",
  },
  {
    name: "Robots.txt, Sitemap & Crawl Budget Optimization",
    category: "Technical Architecture & Performance",
    starter: true,
    growth: true,
    enterprise: true,
  },
  {
    name: "Schema Markup & Rich Snippets (JSON-LD)",
    category: "Technical Architecture & Performance",
    starter: "Basic Schema",
    growth: "Advanced Product/FAQ/Org",
    enterprise: "Custom Enterprise Entity Graph",
  },
  {
    name: "Multi-Region / International Hreflang Configuration",
    category: "Technical Architecture & Performance",
    starter: false,
    growth: false,
    enterprise: true,
  },

  // Content & Authority
  {
    name: "SEO-Optimized Content Updates / Month",
    category: "Content & Editorial Publishing",
    starter: "2 Articles / Pages",
    growth: "4 In-Depth Assets",
    enterprise: "8+ Thought-Leadership Pieces",
  },
  {
    name: "High-Authority Contextual Link Acquisition",
    category: "Content & Editorial Publishing",
    starter: false,
    growth: "Monthly Vetted Backlinks",
    enterprise: "High-Tier Digital PR & Media Outreach",
  },
  {
    name: "Google Business Profile / Local Map Pack (Ahmedabad/Gujarat)",
    category: "Content & Editorial Publishing",
    starter: "1 Location",
    growth: "Up to 3 Locations",
    enterprise: "Unlimited Multi-Location Network",
  },

  // Reporting & Communication
  {
    name: "Transparent Monthly Executive Dashboard",
    category: "Analytics & Client Support",
    starter: true,
    growth: true,
    enterprise: true,
  },
  {
    name: "Strategic Consultation Review Meetings",
    category: "Analytics & Client Support",
    starter: "Monthly (Email/Async)",
    growth: "Bi-Weekly Video Call",
    enterprise: "Weekly Syncs + Board Reports",
  },
  {
    name: "Dedicated Communication Channel",
    category: "Analytics & Client Support",
    starter: "Email Support (48h)",
    growth: "Priority Email & WhatsApp",
    enterprise: "Dedicated Slack / WhatsApp Channel",
  },
  {
    name: "15-Day Free Risk-Free Trial Eligible",
    category: "Analytics & Client Support",
    starter: true,
    growth: true,
    enterprise: true,
  },
];

const pricingFaqs = [
  {
    q: "Is there any long-term lock-in contract?",
    a: "Absolutely not. All SkyRank Solution pricing packages operate on flexible month-to-month or quarterly billing. You can pause, upgrade, downgrade, or cancel anytime with zero hidden penalty fees.",
  },
  {
    q: "How does the 15-Day Free Demo work?",
    a: "We start by auditing your domain, fixing critical crawl errors, mapping your top keyword opportunities, and optimizing your baseline performance. You test our communication, technical depth, and speed of delivery for 15 days completely risk-free with zero upfront payment.",
  },
  {
    q: "How much do I save with Quarterly billing?",
    a: "When you choose quarterly retainer billing, you receive an instant 20% discount across every plan. For example, the Growth SEO plan drops from ₹20,000/month to just ₹16,000/month (saving you ₹12,000 every quarter).",
  },
  {
    q: "Can I upgrade or customize my keyword scope later?",
    a: "Yes. Many of our clients start with Starter SEO for 10-15 keywords and seamlessly scale to Growth (25-30 keywords) or Enterprise as their organic revenue and business footprint expand.",
  },
  {
    q: "Are there any hidden setup or onboarding charges?",
    a: "Zero hidden fees. The price you see includes initial technical auditing, keyword research, on-page optimization, content strategy, and dashboard setup.",
  },
  {
    q: "What payment methods and invoicing do you provide?",
    a: "We support direct UPI, Net Banking (IMPS/NEFT), Credit/Debit Cards, and international wire transfers. Every payment is backed by a GST-compliant tax invoice for your business accounting.",
  },
];

export function PricingClientView() {
  // Billing cycle toggle: "monthly" vs "quarterly" (20% off)
  const [billingCycle, setBillingCycle] = useState<"monthly" | "quarterly">("monthly");
  
  // Interactive ROI Calculator State
  const [monthlyVisitors, setMonthlyVisitors] = useState<number>(5000);
  const [dealValue, setDealValue] = useState<number>(12000);
  const [marketScope, setMarketScope] = useState<"local" | "national" | "global">("local");

  // Show detailed comparison matrix
  const [showMatrix, setShowMatrix] = useState<boolean>(false);

  // Active FAQ accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Dynamic pricing calculation based on billing cycle
  const computedPlans = useMemo(() => {
    return pricingPlans.map((plan) => {
      if (plan.id === "starter") {
        return {
          ...plan,
          displayPrice: billingCycle === "monthly" ? "₹10,000" : "₹8,000",
          billedPeriod: billingCycle === "monthly" ? "/month" : "/month (Billed ₹24,000 quarterly)",
          savings: billingCycle === "quarterly" ? "Save ₹6,000 per quarter" : null,
          monthlyEquivalent: 8000,
        };
      }
      if (plan.id === "growth") {
        return {
          ...plan,
          displayPrice: billingCycle === "monthly" ? "₹20,000" : "₹16,000",
          billedPeriod: billingCycle === "monthly" ? "/month" : "/month (Billed ₹48,000 quarterly)",
          savings: billingCycle === "quarterly" ? "Save ₹12,000 per quarter" : null,
          monthlyEquivalent: 16000,
        };
      }
      // Enterprise
      return {
        ...plan,
        displayPrice: billingCycle === "monthly" ? "₹40,000+" : "₹32,000+",
        billedPeriod: billingCycle === "monthly" ? "/month" : "/month (Billed quarterly)",
        savings: billingCycle === "quarterly" ? "Save ₹24,000+ per quarter" : null,
        monthlyEquivalent: 32000,
      };
    });
  }, [billingCycle]);

  // Automated ROI Engine Calculations
  const roiCalculations = useMemo(() => {
    // Traffic multiplier: ~3.2x traffic increase over 6 months
    const projectedVisitors = Math.round(monthlyVisitors * 3.2);
    const addedVisitors = projectedVisitors - monthlyVisitors;
    
    // Conversion rate based on scope
    const convRate = marketScope === "local" ? 0.028 : marketScope === "national" ? 0.018 : 0.014;
    const projectedLeads = Math.max(1, Math.round(addedVisitors * convRate));
    
    // Close rate estimation: ~15%
    const projectedDeals = Math.max(1, Math.round(projectedLeads * 0.15));
    const projectedRevenue = projectedDeals * dealValue;

    // Recommended plan based on scale
    let recommendedTier = "Starter SEO";
    let recommendedId = "starter";
    if (monthlyVisitors >= 6000 && monthlyVisitors < 25000) {
      recommendedTier = "Growth SEO (Most Popular)";
      recommendedId = "growth";
    } else if (monthlyVisitors >= 25000) {
      recommendedTier = "Enterprise SEO";
      recommendedId = "enterprise";
    }

    return {
      projectedVisitors,
      addedVisitors,
      projectedLeads,
      projectedDeals,
      projectedRevenue,
      recommendedTier,
      recommendedId,
    };
  }, [monthlyVisitors, dealValue, marketScope]);

  return (
    <div className="bg-[#FAFCFF] min-h-screen text-slate-900">
      
      {/* Hero Header in Luxury Light Theme */}
      <section className="relative pt-12 pb-16 sm:pb-20 overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-white via-slate-50/70 to-white">
        {/* Subtle Tech Pattern and Ambient Glows */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-100/50 via-cyan-100/40 to-indigo-100/50 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Top VIP Offer Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-black uppercase tracking-wider mb-5 shadow-sm">
            <Gift className="w-3.5 h-3.5 text-emerald-600" />
            <span>15-Day Free Risk-Free Demo Active</span>
            <span className="text-emerald-400">•</span>
            <span className="text-emerald-700 font-semibold normal-case">No Upfront Payment Required</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 max-w-4xl mx-auto leading-tight">
            Transparent Pricing Built for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600">
              High Organic ROI
            </span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            No surprise invoices, hidden retainers, or lock-in contracts. Choose an investment tier aligned with your keyword volume and growth velocity. All pricing is editable and customizable.
          </p>

          {/* Automated Billing Cycle Switcher with 20% Discount */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-2xl bg-white border border-slate-200/90 shadow-md">
            <button
              type="button"
              onClick={() => setBillingCycle("monthly")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                billingCycle === "monthly"
                  ? "bg-slate-900 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Monthly Retainer
            </button>
            
            <button
              type="button"
              onClick={() => setBillingCycle("quarterly")}
              className={`relative px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                billingCycle === "quarterly"
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <span>Quarterly Retainer</span>
              <span className="px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider bg-amber-400 text-slate-950 shadow-xs">
                Save 20%
              </span>
            </button>
          </div>

        </div>
      </section>

      {/* Main 3 Pricing Cards Grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {computedPlans.map((plan) => {
              const isFeatured = plan.highlighted;
              return (
                <div
                  key={plan.id}
                  className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                    isFeatured
                      ? "bg-white border-2 border-blue-600 shadow-[0_25px_60px_-15px_rgba(37,99,235,0.2)] lg:-translate-y-3 ring-4 ring-blue-500/10"
                      : "bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300"
                  }`}
                >
                  {/* Top Highlight Badge */}
                  {isFeatured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[11px] font-black uppercase tracking-wider shadow-md flex items-center gap-1.5">
                      <Flame className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
                      <span>Most Popular for Scaling</span>
                    </div>
                  )}

                  <div>
                    {/* Header Details */}
                    <div className="border-b border-slate-100 pb-6 mb-6">
                      <div className="flex items-center justify-between gap-2">
                        <h2 className="text-2xl font-black text-slate-900">{plan.name}</h2>
                        {isFeatured && (
                          <span className="p-1 rounded-lg bg-blue-50 text-blue-600">
                            <Trophy className="w-4 h-4 text-blue-600" />
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-500 font-medium mt-1">{plan.targetBusiness}</p>

                      {/* Pricing Display */}
                      <div className="mt-5 flex items-baseline gap-1.5">
                        <span className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                          {plan.displayPrice}
                        </span>
                        <span className="text-xs text-slate-500 font-semibold">{plan.period}</span>
                      </div>

                      {/* Savings Note if Quarterly */}
                      {plan.savings && (
                        <div className="mt-2 text-xs font-bold text-emerald-600 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>{plan.savings}</span>
                        </div>
                      )}

                      {/* Keyword Tag Pill */}
                      <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200/80 px-3 py-1.5 rounded-xl w-fit">
                        <Search className="w-3 h-3 text-blue-600 shrink-0" />
                        <span>{plan.keywordTargeting}</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                      {plan.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-3 mb-8">
                      <p className="text-xs font-black uppercase tracking-wider text-slate-900">
                        Included Execution &amp; Deliverables:
                      </p>
                      {plan.features.map((feat) => (
                        <div key={feat} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                          <div className="w-4 h-4 rounded-full bg-emerald-50 border border-emerald-300 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5 text-emerald-600 stroke-[3]" />
                          </div>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Area */}
                  <div className="pt-5 border-t border-slate-100 space-y-3">
                    <Link
                      href={`/talk-to-expert?plan=${plan.id}&offer=15-days-free-demo&billing=${billingCycle}`}
                      className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-black text-xs sm:text-sm transition-all cursor-pointer ${
                        isFeatured
                          ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:scale-105 active:scale-95"
                          : "bg-slate-900 hover:bg-slate-800 text-white shadow-sm hover:scale-105 active:scale-95"
                      }`}
                    >
                      <Sparkles className="w-4 h-4 text-amber-300" />
                      <span>Claim 15-Day Free Demo</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <div className="text-center">
                      <span className="text-[11px] text-slate-400 font-medium flex items-center justify-center gap-1">
                        <Clock className="w-3 h-3 text-emerald-600" />
                        <span>Zero upfront risk • 15 days test period</span>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Best Automation #2: Interactive SEO ROI & Keyword Scope Calculator */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-white via-blue-50/40 to-white border-y border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-black uppercase tracking-wider mb-2">
              <Calculator className="w-3.5 h-3.5 text-blue-600" />
              <span>Interactive Automation Engine</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Estimate Your Expected Organic Growth &amp; ROI
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Adjust the sliders below to simulate your projected search traffic, high-intent lead volume, and recommended tier automatically.
            </p>
          </div>

          {/* Interactive Calculator Cockpit Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-[0_20px_50px_-15px_rgba(15,23,42,0.08)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Controls (Sliders) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Slider 1: Monthly Visitors */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="visitors-range" className="text-xs font-black text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                    <Search className="w-3.5 h-3.5 text-blue-600" />
                    <span>Current Monthly Website Visitors</span>
                  </label>
                  <span className="text-sm font-black text-blue-600 px-3 py-1 bg-blue-50 rounded-lg border border-blue-100">
                    {monthlyVisitors.toLocaleString()} /mo
                  </span>
                </div>
                <input
                  id="visitors-range"
                  type="range"
                  min="500"
                  max="50000"
                  step="500"
                  value={monthlyVisitors}
                  onChange={(e) => setMonthlyVisitors(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-bold">
                  <span>500 (Early Stage)</span>
                  <span>25,000</span>
                  <span>50,000+ (Established)</span>
                </div>
              </div>

              {/* Slider 2: Average Order / Client Deal Value */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="deal-range" className="text-xs font-black text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-amber-500" />
                    <span>Average Value per Customer / Deal</span>
                  </label>
                  <span className="text-sm font-black text-emerald-600 px-3 py-1 bg-emerald-50 rounded-lg border border-emerald-100">
                    ₹{dealValue.toLocaleString()}
                  </span>
                </div>
                <input
                  id="deal-range"
                  type="range"
                  min="1000"
                  max="100000"
                  step="1000"
                  value={dealValue}
                  onChange={(e) => setDealValue(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-bold">
                  <span>₹1,000 (E-Com)</span>
                  <span>₹50,000</span>
                  <span>₹1,00,000+ (High-Ticket / B2B)</span>
                </div>
              </div>

              {/* Market Scope Buttons */}
              <div>
                <label className="block text-xs font-black text-slate-800 uppercase tracking-wider mb-2">
                  Target Geographic Scope
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setMarketScope("local")}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                      marketScope === "local"
                        ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    Gujarat / Local
                  </button>
                  <button
                    type="button"
                    onClick={() => setMarketScope("national")}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                      marketScope === "national"
                        ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    All India / National
                  </button>
                  <button
                    type="button"
                    onClick={() => setMarketScope("global")}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                      marketScope === "global"
                        ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    Global / Export
                  </button>
                </div>
              </div>

            </div>

            {/* Right Display (Live Automated Projections) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-2xl p-6 sm:p-7 space-y-5 shadow-xl">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Simulated 6-Month Impact
                </span>
                <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Real-time Calculation</span>
                </span>
              </div>

              {/* Metric 1 */}
              <div className="flex items-baseline justify-between">
                <div>
                  <div className="text-xs text-slate-400 font-medium">Projected Organic Traffic</div>
                  <div className="text-2xl sm:text-3xl font-black text-white">
                    {roiCalculations.projectedVisitors.toLocaleString()}
                    <span className="text-xs text-emerald-400 font-bold ml-1.5">(+220%)</span>
                  </div>
                </div>
                <TrendingUp className="w-6 h-6 text-emerald-400" />
              </div>

              {/* Metric 2 */}
              <div className="flex items-baseline justify-between border-t border-slate-800/80 pt-3">
                <div>
                  <div className="text-xs text-slate-400 font-medium">Est. Monthly Inquiries / Leads</div>
                  <div className="text-2xl sm:text-3xl font-black text-white">
                    ~{roiCalculations.projectedLeads.toLocaleString()}
                    <span className="text-xs text-blue-400 font-bold ml-1.5">leads/mo</span>
                  </div>
                </div>
                <CheckCircle2 className="w-6 h-6 text-blue-400" />
              </div>

              {/* Metric 3: Pipeline Value */}
              <div className="border-t border-slate-800/80 pt-3">
                <div className="text-xs text-slate-400 font-medium">Estimated Monthly Pipeline Value</div>
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                  ₹{roiCalculations.projectedRevenue.toLocaleString()}
                </div>
              </div>

              {/* Recommended Tier Pill */}
              <div className="p-3 rounded-xl bg-slate-800/90 border border-slate-700/80">
                <div className="text-[10px] uppercase tracking-wider font-bold text-slate-400">
                  Recommended Best Tier For You:
                </div>
                <div className="text-sm font-black text-amber-300 mt-0.5">
                  {roiCalculations.recommendedTier}
                </div>
              </div>

              {/* Action */}
              <Link
                href={`/talk-to-expert?plan=${roiCalculations.recommendedId}&offer=15-days-free-demo&traffic=${monthlyVisitors}&deal=${dealValue}`}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <span>Apply This Scope To Free Demo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

            </div>

          </div>

        </div>
      </section>

      {/* Best UI/UX #3: Detailed Feature Comparison Matrix Accordion */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-8">
            <button
              type="button"
              onClick={() => setShowMatrix(!showMatrix)}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-blue-400 text-slate-800 hover:text-blue-600 font-black text-xs sm:text-sm transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>{showMatrix ? "Hide Feature Comparison Matrix" : "View Complete Feature Breakdown (28+ Parameters)"}</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showMatrix ? "rotate-180" : ""}`} />
            </button>
          </div>

          <AnimatePresence>
            {showMatrix && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35 }}
                className="overflow-hidden"
              >
                <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[700px]">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200/90">
                        <th className="p-4 sm:p-5 text-xs font-black uppercase tracking-wider text-slate-900 w-2/5">
                          Features &amp; Technical Capabilities
                        </th>
                        <th className="p-4 sm:p-5 text-xs font-black uppercase tracking-wider text-slate-900 text-center w-1/5">
                          Starter SEO
                          <div className="text-[10px] text-slate-500 normal-case font-medium">₹10,000/mo</div>
                        </th>
                        <th className="p-4 sm:p-5 text-xs font-black uppercase tracking-wider text-blue-700 bg-blue-50/80 text-center w-1/5">
                          Growth SEO
                          <div className="text-[10px] text-blue-600 normal-case font-medium">₹20,000/mo</div>
                        </th>
                        <th className="p-4 sm:p-5 text-xs font-black uppercase tracking-wider text-slate-900 text-center w-1/5">
                          Enterprise SEO
                          <div className="text-[10px] text-slate-500 normal-case font-medium">₹40,000+/mo</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {detailedFeatureMatrix.map((item, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                          <td className="p-4 text-xs font-semibold text-slate-800">
                            <div>{item.name}</div>
                            <span className="text-[10px] text-slate-400 font-normal">{item.category}</span>
                          </td>

                          {/* Starter */}
                          <td className="p-4 text-center text-xs">
                            {typeof item.starter === "boolean" ? (
                              item.starter ? (
                                <Check className="w-4 h-4 text-emerald-600 mx-auto" />
                              ) : (
                                <span className="text-slate-300 font-bold">—</span>
                              )
                            ) : (
                              <span className="font-bold text-slate-700 text-[11px]">{item.starter}</span>
                            )}
                          </td>

                          {/* Growth */}
                          <td className="p-4 text-center text-xs bg-blue-50/30">
                            {typeof item.growth === "boolean" ? (
                              item.growth ? (
                                <Check className="w-4 h-4 text-blue-600 mx-auto stroke-[2.5]" />
                              ) : (
                                <span className="text-slate-300 font-bold">—</span>
                              )
                            ) : (
                              <span className="font-extrabold text-blue-700 text-[11px]">{item.growth}</span>
                            )}
                          </td>

                          {/* Enterprise */}
                          <td className="p-4 text-center text-xs">
                            {typeof item.enterprise === "boolean" ? (
                              item.enterprise ? (
                                <Check className="w-4 h-4 text-emerald-600 mx-auto stroke-[2.5]" />
                              ) : (
                                <span className="text-slate-300 font-bold">—</span>
                              )
                            ) : (
                              <span className="font-black text-slate-900 text-[11px]">{item.enterprise}</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>

      {/* Custom Scope & Enterprise Banner */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6 border border-slate-800">
          <div className="space-y-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5" />
              <span>Multi-Location &amp; High-Volume Brands</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black">
              Need a Custom Tailored SEO Engineering Scope?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              We engineer custom solutions for massive 50,000+ SKU e-commerce platforms, multi-city healthcare clinic chains, real estate portals, and international SaaS companies.
            </p>
          </div>

          <Link
            href="/contact?type=custom-scope"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-black text-slate-950 bg-white hover:bg-slate-100 shadow-md transition-all hover:scale-105 active:scale-95 shrink-0 cursor-pointer"
          >
            <span>Request Custom Scope</span>
            <ArrowRight className="w-4 h-4 text-slate-950" />
          </Link>
        </div>
      </section>

      {/* Pricing FAQs Accordion */}
      <section className="py-16 sm:py-20 border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Frequently Asked Questions About Pricing
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Clear, transparent answers about our packages, commitments, and the 15-day free demo.
            </p>
          </div>

          <div className="space-y-3">
            {pricingFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:text-blue-600 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-blue-600" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Ethics & Compliance Footer Note */}
          <div className="mt-12 text-center text-xs text-slate-500 max-w-xl mx-auto flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              SkyRank Solution strictly adheres to Google Webmaster Guidelines. We deploy algorithmic white-hat engineering with zero artificial bots.
            </span>
          </div>

        </div>
      </section>

    </div>
  );
}
