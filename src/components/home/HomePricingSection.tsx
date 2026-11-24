"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { pricingPlans } from "@/data/pricing";
import { Check, ArrowRight, Sparkles, Phone } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem, CardHoverMotion } from "@/components/ui/Motion";

export function HomePricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "quarterly">("monthly");

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      {/* Ambient background glow */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.18, 0.08] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/15 blur-[150px] rounded-full pointer-events-none"
      />

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-14 relative z-10">
        
        {/* Header with FadeIn */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-3.5 py-1 rounded-full border border-blue-400/20">
            Predictable Investment Tiers
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Transparent Pricing Built for High ROI
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            No surprise invoices, hidden retainers, or lock-in contracts. Choose an investment tier aligned with your keyword volume and growth velocity. All pricing is editable and customizable.
          </p>
        </FadeIn>

        {/* Interactive Billing Toggle */}
        <FadeIn delay={0.1} className="flex justify-center mb-14">
          <div className="flex items-center p-1.5 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl relative">
            <button
              type="button"
              onClick={() => setBillingCycle("monthly")}
              className={`relative px-5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                billingCycle === "monthly" ? "text-white" : "text-slate-400 hover:text-white"
              }`}
            >
              {billingCycle === "monthly" && (
                <motion.div
                  layoutId="activeBillingCycle"
                  className="absolute inset-0 bg-blue-600 rounded-xl shadow-md shadow-blue-600/40"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">Monthly Retainer</span>
            </button>

            <button
              type="button"
              onClick={() => setBillingCycle("quarterly")}
              className={`relative px-5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                billingCycle === "quarterly" ? "text-white" : "text-slate-400 hover:text-white"
              }`}
            >
              {billingCycle === "quarterly" && (
                <motion.div
                  layoutId="activeBillingCycle"
                  className="absolute inset-0 bg-blue-600 rounded-xl shadow-md shadow-blue-600/40"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">Quarterly Retainer</span>
              <span className="relative z-10 text-[9px] px-1.5 py-0.2 rounded bg-amber-400 text-slate-950 font-black">
                SAVE 20%
              </span>
            </button>
          </div>
        </FadeIn>

        {/* 3 Pricing Packages with Stagger */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {pricingPlans.map((plan) => {
            const rawPrice = parseInt(plan.price.replace(/[^0-9]/g, "")) || 10000;
            const discountedPrice = billingCycle === "quarterly" ? Math.round(rawPrice * 0.8) : rawPrice;
            const displayPrice = `₹${discountedPrice.toLocaleString("en-IN")}`;

            return (
              <StaggerItem key={plan.id}>
                <CardHoverMotion className="h-full">
                  <div
                    className={`rounded-3xl p-8 flex flex-col justify-between h-full transition-all duration-300 relative ${
                      plan.highlighted
                        ? "bg-slate-950/95 border-2 border-blue-500 shadow-2xl shadow-blue-500/20 lg:-translate-y-3"
                        : "bg-slate-950/70 border border-slate-800 hover:border-slate-700 hover:shadow-xl"
                    }`}
                  >
                    {plan.highlighted && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[11px] font-black uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
                        <span>Most Popular for Scaling</span>
                      </div>
                    )}

                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                        <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 font-medium">
                          {plan.targetBusiness}
                        </span>
                      </div>

                      <div className="mb-6">
                        <div className="flex items-baseline gap-1">
                          <span className="text-4xl font-black text-white tracking-tight">{displayPrice}</span>
                          <span className="text-xs text-slate-400 font-semibold">{plan.period}</span>
                        </div>
                        <p className="text-xs text-blue-400 mt-1 font-semibold">
                          {plan.keywordTargeting}
                        </p>
                      </div>

                      <div className="space-y-2.5 pt-4 border-t border-slate-800 mb-6">
                        {plan.features.slice(0, 4).map((feature) => (
                          <div key={feature} className="flex items-start gap-2 text-xs text-slate-300">
                            <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-800 space-y-3">
                      <Link
                        href={plan.ctaLink}
                        className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all cursor-pointer ${
                          plan.highlighted
                            ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-[length:200%_auto] hover:bg-right text-white shadow-lg shadow-blue-600/40 hover:scale-[1.02]"
                            : "bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 hover:border-slate-500"
                        }`}
                      >
                        <span>{plan.ctaText}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>

                      <p className="text-[10px] text-center text-slate-500">
                        *Editable starting price • No guaranteed rankings claim
                      </p>
                    </div>
                  </div>
                </CardHoverMotion>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Custom Quote Banner with FadeIn */}
        <FadeIn delay={0.2} className="max-w-4xl mx-auto mt-16 p-6 sm:p-8 rounded-3xl bg-slate-950/80 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h4 className="text-lg font-bold text-white mb-1">Need a Tailored Enterprise or E-commerce Package?</h4>
            <p className="text-xs text-slate-400">
              We design custom organic architectures for high-SKU stores, multi-location clinics, and global international businesses.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs border border-slate-700 hover:border-blue-500 flex-shrink-0 transition-all hover:scale-105"
          >
            <Phone className="w-4 h-4 text-blue-400" />
            <span>Request Custom Quote</span>
          </Link>
        </FadeIn>

      </div>
    </section>
  );
}
