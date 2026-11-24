import type { Metadata } from "next";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { servicesData } from "@/data/services";
import { DynamicIcon } from "@/lib/utils/icons";
import { ArrowRight, Check } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Agency Services | 15 Specialized SEO & Growth Capabilities",
  description: "Explore SkyRank Solution's complete suite of 15 specialized SEO services, including Technical SEO, Local SEO, AI SEO, Link Building, and Next.js Web Development.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Services", href: "/services" }]} />

      {/* Hero Header */}
      <section className="py-10 sm:py-16 md:py-20 bg-slate-950 text-white text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-400/20">
            Our Complete Capabilities
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mt-4 mb-4">
            Specialized SEO & Engineering Services
          </h1>
          <p className="text-base text-slate-300 leading-relaxed">
            Every service is engineered to solve a specific organic search barrier—from crawlability and entity clustering to local map pack dominance and enterprise conversions.
          </p>
        </div>
      </section>

      {/* All 15 Services Detailed Grid */}
      <section className="py-16 md:py-20 bg-slate-50 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((svc, index) => (
              <div
                key={svc.slug}
                className="bg-white border border-slate-200/90 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <DynamicIcon name={svc.icon} className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-slate-400">0{index + 1}</span>
                  </div>

                  <h2 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {svc.title}
                  </h2>

                  <p className="text-xs font-semibold text-blue-600 mb-3">{svc.tagline}</p>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {svc.shortDesc}
                  </p>

                  <div className="space-y-2 mb-6 pt-4 border-t border-slate-100">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-800">Key Deliverables:</p>
                    {svc.deliverables.slice(0, 3).map((deliv) => (
                      <div key={deliv} className="flex items-start gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <Link
                    href={`/services/${svc.slug}`}
                    className="inline-flex items-center justify-between w-full text-xs font-bold text-blue-600 group-hover:text-blue-700"
                  >
                    <span>View Service Roadmap</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Banner */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">Unsure Which SEO Capabilities Your Website Needs?</h2>
          <p className="text-sm text-slate-600 max-w-xl mx-auto">
            Our Senior SEO Strategist will review your website and competitor landscape to craft an optimal multi-service growth package.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/seo-audit"
              className="px-6 py-3 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors text-sm"
            >
              Get Free SEO Audit
            </Link>
            <Link
              href="/talk-to-expert"
              className="px-6 py-3 rounded-xl font-semibold text-slate-800 border border-slate-300 hover:bg-slate-100 transition-colors text-sm"
            >
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
