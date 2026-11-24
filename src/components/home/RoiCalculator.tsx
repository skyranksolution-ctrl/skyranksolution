"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Calculator,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export function RoiCalculator() {
  const [monthlyVisitors, setMonthlyVisitors] = useState(15000);
  const [avgCustomerValue, setAvgCustomerValue] = useState(500); // USD / ~40,000 INR
  const [conversionRate, setConversionRate] = useState(2.5); // %
  const [currency, setCurrency] = useState<"USD" | "INR">("INR");

  // Multiplier logic based on data-backed industry benchmarks
  const trafficGrowthMultiplier = 2.8; // +180% to 280% organic growth in 6-12 months
  const projectedTraffic = Math.round(monthlyVisitors * trafficGrowthMultiplier);
  
  // Leads: visitors * convRate
  const currentMonthlyLeads = Math.round((monthlyVisitors * conversionRate) / 100);
  const projectedMonthlyLeads = Math.round((projectedTraffic * (conversionRate + 0.8)) / 100);
  const additionalLeads = projectedMonthlyLeads - currentMonthlyLeads;

  // Pipeline revenue calculation
  const formatMoney = (val: number) => {
    if (currency === "INR") {
      const inrValue = val * 83; // approx exchange
      if (inrValue >= 10000000) return `₹${(inrValue / 10000000).toFixed(2)} Cr`;
      if (inrValue >= 100000) return `₹${(inrValue / 100000).toFixed(2)} Lakhs`;
      return `₹${Math.round(inrValue).toLocaleString("en-IN")}`;
    } else {
      if (val >= 1000000) return `$${(val / 1000000).toFixed(2)}M`;
      if (val >= 1000) return `$${(val / 1000).toFixed(1)}k`;
      return `$${Math.round(val).toLocaleString()}`;
    }
  };

  const additionalAnnualPipeline = additionalLeads * avgCustomerValue * 12 * 0.25; // 25% close rate

  return (
    <section className="py-24 bg-[#030712] text-white relative overflow-hidden border-t border-slate-800/80">
      {/* Background Subtle Mesh & Glows */}
      <div className="absolute inset-0 bg-grid-white opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[400px] bg-blue-600/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[350px] bg-indigo-600/15 blur-[150px] rounded-full pointer-events-none" />

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-14 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5 text-blue-400" />
            <span>Interactive Organic ROI Modeler</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Estimate Your Organic Search Revenue Potential
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Calculate how compounding first-page rankings, technical speed optimization, and AI search visibility translate into qualified inbound pipeline.
          </p>
        </div>

        {/* Interactive Calculator Shell */}
        <div className="max-w-5xl mx-auto bg-slate-900/80 border border-blue-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl relative overflow-hidden">
          
          {/* Top Bar Switcher */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-800 flex-wrap gap-4">
            <div>
              <p className="text-sm font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Predictive Growth Simulation Engine</span>
              </p>
              <p className="text-xs text-slate-400">Based on multi-channel B2B & E-commerce campaign trajectories</p>
            </div>

            <div className="flex items-center gap-2 bg-slate-950 p-1 rounded-xl border border-slate-800">
              <span className="text-xs text-slate-400 px-2 font-medium">Currency:</span>
              <button
                type="button"
                onClick={() => setCurrency("INR")}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  currency === "INR" ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                ₹ INR
              </button>
              <button
                type="button"
                onClick={() => setCurrency("USD")}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  currency === "USD" ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                $ USD
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-center">
            
            {/* Left Column: Sliders */}
            <div className="lg:col-span-7 space-y-7">
              
              {/* Slider 1: Current Monthly Traffic */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-slate-200">Current Monthly Organic Traffic:</span>
                  <span className="font-black text-blue-400 text-base bg-blue-500/10 px-3 py-1 rounded-lg border border-blue-400/20">
                    {monthlyVisitors.toLocaleString()} visits/mo
                  </span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="100000"
                  step="1000"
                  value={monthlyVisitors}
                  onChange={(e) => setMonthlyVisitors(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>1,000/mo (Early Stage)</span>
                  <span>50,000/mo (Mid-Market)</span>
                  <span>100,000+/mo (Enterprise)</span>
                </div>
              </div>

              {/* Slider 2: Average Customer Value (LTV) */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-slate-200">Average Customer Lifetime Value (LTV):</span>
                  <span className="font-black text-amber-400 text-base bg-amber-500/10 px-3 py-1 rounded-lg border border-amber-400/20">
                    {formatMoney(avgCustomerValue)}
                  </span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="5000"
                  step="50"
                  value={avgCustomerValue}
                  onChange={(e) => setAvgCustomerValue(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>{formatMoney(50)} (E-comm / Retail)</span>
                  <span>{formatMoney(1500)} (B2B Services)</span>
                  <span>{formatMoney(5000)} (Enterprise SaaS)</span>
                </div>
              </div>

              {/* Slider 3: Conversion Rate */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-slate-200">Target Organic Lead Conversion Rate:</span>
                  <span className="font-black text-emerald-400 text-base bg-emerald-500/10 px-3 py-1 rounded-lg border border-emerald-400/20">
                    {conversionRate}%
                  </span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="6.0"
                  step="0.5"
                  value={conversionRate}
                  onChange={(e) => setConversionRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>0.5% (Low Intent)</span>
                  <span>2.5% (Commercial Average)</span>
                  <span>6.0% (High-Converting CRO)</span>
                </div>
              </div>

            </div>

            {/* Right Column: Projected Results Display */}
            <div className="lg:col-span-5 bg-slate-950/90 border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-5 shadow-inner">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs uppercase tracking-wider font-bold text-slate-400">
                  Projected 6–12 Month Growth
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  +{trafficGrowthMultiplier * 100 - 100}% Traffic
                </span>
              </div>

              {/* Projected Monthly Visitors */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-400">Projected Monthly Traffic</p>
                  <p className="text-2xl font-black text-white mt-0.5">
                    {projectedTraffic.toLocaleString()}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-400">Net Additional Leads</p>
                  <p className="text-2xl font-black text-blue-400 mt-0.5">
                    +{additionalLeads}/mo
                  </p>
                </div>
              </div>

              {/* Big Revenue Highlight Card */}
              <div className="p-4 rounded-xl bg-gradient-to-tr from-blue-950/80 to-indigo-950/80 border border-blue-500/40 text-center space-y-1">
                <p className="text-xs uppercase font-bold tracking-wider text-blue-300">
                  Estimated Additional Annual Pipeline
                </p>
                <p className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                  {formatMoney(additionalAnnualPipeline)}
                </p>
                <p className="text-[10px] text-slate-400">
                  Calculated at 25% qualified lead close rate
                </p>
              </div>

              {/* Action Button */}
              <Link
                href={`/seo-audit?visitors=${monthlyVisitors}&leads=${additionalLeads}`}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-[length:200%_auto] hover:bg-right shadow-lg shadow-blue-600/40 transition-all hover:scale-[1.02]"
              >
                <span>Unlock This Growth Blueprint</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="text-center">
                <p className="text-[11px] text-slate-500">
                  ✓ Customized SEO strategy • No locked contracts • 100% White-Hat
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
