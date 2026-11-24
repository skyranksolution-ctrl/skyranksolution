import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AuditForm } from "@/components/forms/AuditForm";
import { ShieldCheck, CheckCircle2, Clock, Zap, Target, Search } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Free SEO Audit & Technical Diagnostic | SkyRank Solution",
  description: "Request a complimentary, human-reviewed SEO audit of your website. Discover Core Web Vitals bottlenecks, indexing errors, and competitor keyword gaps.",
  path: "/seo-audit",
});

export default function SEOAuditPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Free SEO Audit", href: "/seo-audit" }]} />

      <section className="py-16 md:py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Heading and Value Pillars */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                100% Free • No Obligation
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
                Get a Comprehensive Technical SEO Audit
              </h1>
              <p className="text-base text-slate-300 leading-relaxed">
                Discover the exact technical roadblocks, content gaps, and indexing issues preventing your website from dominating Google search results.
              </p>

              <div className="space-y-3.5 pt-2 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Core Web Vitals & Speed Diagnostics:</strong> Comprehensive evaluation of LCP, INP, and CLS scores.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Competitor Gap Analysis:</strong> Comparison against top 3 organic rivals in your target market.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Actionable Remediation Priority:</strong> Categorized by immediate quick wins vs long-term initiatives.
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span>Delivered in 24 Hours</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Human-Reviewed</span>
                </div>
              </div>
            </div>

            {/* Right Column: Embedded Audit Form */}
            <div className="lg:col-span-7">
              <AuditForm />
            </div>
          </div>
        </div>
      </section>

      {/* What We Inspect in Your Audit */}
      <section className="py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">What Our Diagnostic Inspects</h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Unlike generic automated checkers that spit out superficial numbers, our audit evaluates real-world search criteria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Crawl & Index Architecture</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We inspect robots.txt rules, XML sitemap health, canonical references, faceted URL traps, and HTTP status codes.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Core Web Vitals & Hydration</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We measure real-user Interaction to Next Paint (INP), Largest Contentful Paint (LCP), and JavaScript execution delays.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Search Intent & Cannibalization</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We analyze your top commercial target queries to verify that pages fulfill search intent without competing with each other.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
