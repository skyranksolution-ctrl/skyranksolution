"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQPageSchema } from "@/lib/schema/jsonld";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/Motion";

export function HomeFAQSection() {
  const faqs = [
    {
      question: "What is SEO?",
      answer:
        "Search Engine Optimization (SEO) is the scientific process of improving a website's technical architecture, content quality, and digital authority to achieve higher organic (non-paid) visibility in search engines like Google. Unlike paid advertisements where visibility stops when ad spend halts, SEO builds a compounding long-term digital asset that drives consistent, qualified customer inquiries.",
    },
    {
      question: "How long does SEO take to produce measurable results?",
      answer:
        "While immediate technical error fixes, page speed improvements, and indexing repairs often generate noticeable ranking movement in 4 to 8 weeks, significant, compounding organic traffic and qualified lead generation typically materialize within 3 to 6 months of disciplined execution. Highly competitive national or global markets may require 6 to 12 months for market leadership.",
    },
    {
      question: "What are your core SEO services?",
      answer:
        "SkyRank Solution provides 15 specialized capabilities: Technical SEO, AI-Powered SEO, Local SEO & Google Maps optimization, E-commerce SEO, On-Page & Off-Page optimization, High-Authority Link Building, Content Marketing & SEO Copywriting, International Multi-Regional SEO, Competitor Intelligence, Keyword Research, and SEO-Native Next.js Web Development.",
    },
    {
      question: "What is Local SEO and who needs it?",
      answer:
        "Local SEO optimizes your digital footprint to capture searches with geographic intent (e.g. 'dental clinic near me' or 'law firm in Ahmedabad'). It focuses on winning the Google 3-Pack on Maps, directory citation consistency (NAP), and local review velocity. Any business with a physical storefront, clinic, office, or regional service radius requires Local SEO.",
    },
    {
      question: "How much does SEO cost with SkyRank Solution?",
      answer:
        "Our monthly packages start at ₹10,000/month for small businesses targeting 10–15 keywords (Starter SEO), ₹20,000/month for growing brands targeting 25–30 keywords (Growth SEO), and ₹40,000+/month for enterprise, multi-location, or global brands (Enterprise SEO). We also offer customized quotes for high-SKU e-commerce catalogs and complex web architectures.",
    },
    {
      question: "Do you provide International SEO for global markets?",
      answer:
        "Yes. We support businesses targeting international audiences across the United States, United Kingdom, Canada, Australia, the United Arab Emirates, and Europe. Our international service covers ccTLD/subfolder architecture, bidirectional hreflang tags, currency localization, and regional search intent mapping.",
    },
    {
      question: "What is included in a Free SEO Audit from SkyRank Solution?",
      answer:
        "Our complimentary SEO audit includes an inspection of technical crawl errors, Core Web Vitals performance benchmarks, indexing health, competitor keyword gaps, on-page semantic completeness, and backlink authority. You receive an actionable, prioritized remediation checklist within 24 business hours.",
    },
    {
      question: "Can SEO genuinely improve my website's organic traffic and conversions?",
      answer:
        "Yes. Rather than chasing generic vanity traffic with high bounce rates, our strategy focuses on commercial and transactional search intent. By attracting users actively researching solutions, comparing competitors, or looking to purchase, your conversion rate from visitor to inquiry increases substantially.",
    },
    {
      question: "Do you provide monthly SEO reports and performance dashboards?",
      answer:
        "Absolutely. Every client receives transparent, unmanipulated monthly reports connected directly to Google Search Console and Google Analytics 4. We track impression trajectories, top keyword ranking changes, organic traffic growth, Core Web Vitals health, and attributed lead conversions, accompanied by regular strategic syncs.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <>
      <FAQPageSchema faqs={faqs} />
      <section className="py-24 bg-white text-slate-900 relative overflow-hidden border-t border-slate-200/80">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          
          <FadeIn className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200">
              Clear Answers
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Clear, transparent answers about our SEO engineering methodologies, timelines, investment tiers, and technical execution.
            </p>
          </FadeIn>

          {/* Accessible Accordion Component with Motion (Top 4 Questions) */}
          <StaggerContainer className="space-y-4">
            {faqs.slice(0, 4).map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <StaggerItem key={faq.question}>
                  <div
                    className={`border rounded-2xl overflow-hidden transition-all ${
                      isOpen ? "border-blue-400 bg-white shadow-md shadow-blue-500/5" : "border-slate-200 bg-slate-50/80 hover:border-slate-300"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggle(index)}
                      aria-expanded={isOpen}
                      className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                    >
                      <span className="text-sm sm:text-base font-bold text-slate-900">
                        {faq.question}
                      </span>
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180 bg-blue-600 text-white" : "bg-slate-200 text-slate-600"
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          <FadeIn delay={0.2} className="text-center pt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"
            >
              <span>Have more questions? Speak directly with our SEO architects →</span>
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
