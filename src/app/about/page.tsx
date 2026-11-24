import type { Metadata } from "next";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { siteConfig } from "@/data/site-config";
import {
  ShieldCheck,
  TrendingUp,
  Cpu,
  Target,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "About Us | AI-Powered SEO & Digital Marketing Agency",
  description: "Learn about SkyRank Solution's mission, engineering approach to search optimization, target global markets, and core values.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "About Us", href: "/about" }]} />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[350px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-400/20">
            About SkyRank Solution
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-4 mb-6">
            We Engineer Search Visibility for Modern Businesses
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            SkyRank Solution is a digital marketing and search optimization agency focused on sustainable, algorithm-proof organic revenue growth.
          </p>
        </div>
      </section>

      {/* Core Mission & Positioning */}
      <section className="py-16 md:py-20 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded">
                Our Foundation
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Combining Engineering Rigor with Commercial Strategy
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Most agencies treat SEO as a checklist of superficial blog posts and opaque link acquisitions. At SkyRank Solution, we approach organic search as a technical discipline and a compounding business asset.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                By integrating server-level technical optimization, AI-assisted SERP semantic modeling, and bottom-of-funnel content architecture, we ensure your brand commands authority in search engines and converts visitors into loyal clients.
              </p>
              <div className="pt-2">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors text-sm"
                >
                  Explore Our Services
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-8 space-y-6">
              <h3 className="text-xl font-bold text-slate-900">Our Strategic Guiding Principles</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Target className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Revenue-First Intent Focus</h4>
                    <p className="text-xs text-slate-600 mt-0.5">We prioritize search queries that indicate strong purchasing or hiring intent over vanity traffic.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">100% Google Compliance</h4>
                    <p className="text-xs text-slate-600 mt-0.5">We strictly execute white-hat optimization conforming to Google Search Essentials and Helpful Content standards.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">AI-Augmented Intelligence</h4>
                    <p className="text-xs text-slate-600 mt-0.5">We use modern machine learning tools for entity clustering and SERP analysis, steered by senior human discernment.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Transparent Data Access</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Clients receive full, unfiltered access to their Search Console data, ranking movement, and GA4 dashboards.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Global Markets */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Global Reach</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">Primary Target Markets We Serve</h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Our technical SEO and international hreflang frameworks optimize client visibility across key economic hubs.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {siteConfig.targetMarkets.map((m) => (
              <div key={m.code} className="bg-white border border-slate-200/80 rounded-xl p-4 text-center shadow-sm">
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">{m.code}</span>
                <p className="text-sm font-bold text-slate-900 mt-2">{m.country}</p>
                <p className="text-[11px] text-slate-500 mt-0.5">Geo-Targeted Search</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Verification Note */}
      <section className="py-12 bg-white text-xs text-slate-500 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-2">
          <p className="font-semibold text-slate-700">Corporate Transparency Statement</p>
          <p>
            SkyRank Solution is operated by seasoned digital marketing engineers. All company contact details, address representations, and registered business entities are configured via editable placeholders pending local statutory filings. We do not publish unverified awards or fabricated certifications.
          </p>
        </div>
      </section>
    </>
  );
}
