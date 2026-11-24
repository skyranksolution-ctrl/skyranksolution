import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { servicesData } from "@/data/services";
import { constructMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ServiceSchema, FAQPageSchema } from "@/lib/schema/jsonld";
import { DynamicIcon } from "@/lib/utils/icons";
import {
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export async function generateStaticParams() {
  return servicesData.map((svc) => ({
    slug: svc.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const svc = servicesData.find((item) => item.slug === slug);
  if (!svc) return {};

  return constructMetadata({
    title: svc.metaTitle,
    description: svc.metaDescription,
    path: `/services/${svc.slug}`,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const svc = servicesData.find((item) => item.slug === slug);

  if (!svc) {
    notFound();
  }

  // Find related services objects
  const related = servicesData.filter((s) => svc.relatedServices.includes(s.slug));

  return (
    <>
      <ServiceSchema
        name={svc.title}
        description={svc.shortDesc}
        url={`/services/${svc.slug}`}
      />
      <FAQPageSchema faqs={svc.faqs} />

      <Breadcrumbs
        items={[
          { label: "Services", href: "/services" },
          { label: svc.navTitle, href: `/services/${svc.slug}` },
        ]}
      />

      {/* Hero Header */}
      <section className="py-16 md:py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[350px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-semibold">
              <DynamicIcon name={svc.icon} className="w-4 h-4 text-amber-400" />
              <span>Specialized SEO Capability</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {svc.heroHeadline}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {svc.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider mr-1">
                Optimized For:
              </span>
              {svc.targetAudience.map((aud) => (
                <span
                  key={aud}
                  className="text-xs px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 font-medium"
                >
                  {aud}
                </span>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link
                href="/seo-audit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-600/30 transition-all text-sm"
              >
                <span>Request Free Audit for This Service</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/talk-to-expert"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-200 hover:text-white bg-slate-900 border border-slate-700 hover:bg-slate-800 transition-all text-sm"
              >
                <span>Book 1-on-1 Consultation</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* In-Depth Overview & Features */}
      <section className="py-20 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left 7 Cols: Detailed Narrative & Value Drivers */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded">
                  Service Architecture
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2 mb-4">
                  Why {svc.title} Matters for Your Business Growth
                </h2>

                <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  {svc.fullDesc.map((par, i) => (
                    <p key={i}>{par}</p>
                  ))}
                </div>
              </div>

              {/* Core Features Cards */}
              <div className="space-y-4 pt-4">
                <h3 className="text-xl font-bold text-slate-900">Core Strategic Pillars</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {svc.features.map((feat) => (
                    <div
                      key={feat.title}
                      className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-all"
                    >
                      <h4 className="text-sm font-bold text-slate-900 mb-1.5">{feat.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">{feat.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5-Step Process */}
              <div className="pt-6 space-y-4">
                <h3 className="text-xl font-bold text-slate-900">Our 5-Step Execution Roadmap</h3>
                <div className="space-y-3">
                  {svc.processSteps.map((step) => (
                    <div
                      key={step.step}
                      className="p-4 rounded-xl border border-slate-200/80 bg-white shadow-sm flex items-start gap-4"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-600 text-white font-extrabold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                        0{step.step}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">{step.title}</h4>
                        <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 5 Cols: Deliverables & Quick Audit Form */}
            <div className="lg:col-span-5 space-y-8 sticky top-28">
              {/* Deliverables Checklist Card */}
              <div className="bg-slate-900 text-white rounded-2xl p-7 border border-slate-800 shadow-xl space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/30 text-blue-400 flex items-center justify-center font-bold">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Concrete Deliverables</h3>
                    <p className="text-xs text-slate-400">Included in Every Engagement</p>
                  </div>
                </div>

                <ul className="space-y-3 pt-2">
                  {svc.deliverables.map((deliv) => (
                    <li key={deliv} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-slate-800">
                  <Link
                    href={`/contact?service=${encodeURIComponent(svc.title)}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm bg-blue-600 hover:bg-blue-500 text-white transition-colors"
                  >
                    <span>Request Proposal for {svc.navTitle}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Related Services Internal Links */}
              {related.length > 0 && (
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Frequently Paired Capabilities
                  </h4>
                  <div className="space-y-2">
                    {related.map((rel) => (
                      <Link
                        key={rel.slug}
                        href={`/services/${rel.slug}`}
                        className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200/80 hover:border-blue-400 transition-colors group"
                      >
                        <span className="text-xs font-bold text-slate-800 group-hover:text-blue-600">
                          {rel.title}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-transform group-hover:translate-x-1" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Service FAQs Section */}
      {svc.faqs.length > 0 && (
        <section className="py-16 bg-slate-50 text-slate-900 border-y border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Service FAQ</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                Frequently Asked Questions About {svc.navTitle}
              </h2>
            </div>

            <div className="space-y-3.5">
              {svc.faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm"
                >
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom Conversion Section */}
      <section className="py-20 bg-slate-950 text-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Ready to Accelerate Your {svc.navTitle} Performance?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Get a tailored technical diagnostic of your current search positioning, competitor gaps, and immediate ranking opportunities.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href="/seo-audit"
              className="px-6 py-3.5 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition-all text-sm"
            >
              Get Free SEO Audit
            </Link>
            <Link
              href="/talk-to-expert"
              className="px-6 py-3.5 rounded-xl font-semibold text-slate-200 border border-slate-700 hover:bg-slate-900 transition-colors text-sm"
            >
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
