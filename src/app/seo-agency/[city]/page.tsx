import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { locationsData } from "@/data/locations";
import { constructMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { LocalServiceSchema, FAQPageSchema } from "@/lib/schema/jsonld";
import { AuditForm } from "@/components/forms/AuditForm";
import {
  MapPin,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Building2,
} from "lucide-react";

export async function generateStaticParams() {
  return locationsData.map((loc) => ({
    city: loc.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const loc = locationsData.find((l) => l.slug === city);
  if (!loc) return {};

  return constructMetadata({
    title: loc.metaTitle,
    description: loc.metaDescription,
    path: `/seo-agency/${loc.slug}`,
  });
}

export default async function LocalCityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const loc = locationsData.find((l) => l.slug === city);

  if (!loc) {
    notFound();
  }

  return (
    <>
      <LocalServiceSchema cityName={loc.cityName} state={loc.state} />
      <FAQPageSchema faqs={loc.faqs} />

      <Breadcrumbs
        items={[
          { label: "Locations", href: "/#locations" },
          { label: `SEO Agency ${loc.cityName}`, href: `/seo-agency/${loc.slug}` },
        ]}
      />

      {/* City Hero */}
      <section className="py-16 md:py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[350px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-semibold">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>
                {loc.cityName}, {loc.state} • Regional SEO Agency
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {loc.headline}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {loc.subheadline}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link
                href="/seo-audit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-600/30 transition-all text-sm"
              >
                <span>Request Free {loc.cityName} SEO Audit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/talk-to-expert"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-200 hover:text-white bg-slate-900 border border-slate-700 hover:bg-slate-800 transition-all text-sm"
              >
                <span>Book Strategic Consultation</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Market Overview & Economic Context */}
      <section className="py-20 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded">
                  Market Intelligence
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2 mb-4">
                  Navigating the Search Landscape in {loc.cityName}
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {loc.marketOverview}
                </p>
              </div>

              {/* Local Challenges & Opportunities */}
              <div className="space-y-4 pt-2">
                <h3 className="text-xl font-bold text-slate-900">
                  Search Competition Challenges in {loc.cityName}
                </h3>
                <div className="space-y-3">
                  {loc.localChallenges.map((ch) => (
                    <div
                      key={ch.title}
                      className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80"
                    >
                      <h4 className="text-sm font-bold text-slate-900 mb-1">{ch.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">{ch.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tailored Strategies */}
              <div className="space-y-4 pt-4">
                <h3 className="text-xl font-bold text-slate-900">
                  How We Drive Results for {loc.cityName} Companies
                </h3>
                <div className="space-y-3">
                  {loc.strategies.map((strat) => (
                    <div
                      key={strat.title}
                      className="p-4 rounded-xl border border-blue-100 bg-blue-50/40 flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">{strat.title}</h4>
                        <p className="text-xs text-slate-600 mt-0.5">{strat.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Key Industries & Consultation Card */}
            <div className="lg:col-span-5 space-y-8 sticky top-28">
              <div className="bg-slate-900 text-white rounded-2xl p-7 border border-slate-800 shadow-xl space-y-5">
                <div className="flex items-center gap-3">
                  <Building2 className="w-8 h-8 text-blue-400" />
                  <div>
                    <h3 className="text-base font-bold text-white">Dominant Industries</h3>
                    <p className="text-xs text-slate-400">Targeted in {loc.cityName}</p>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  {loc.keyIndustries.map((ind) => (
                    <div
                      key={ind}
                      className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-xs font-semibold text-slate-200 flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>{ind}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <Link
                    href={`/contact?location=${encodeURIComponent(loc.cityName)}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm bg-blue-600 hover:bg-blue-500 text-white transition-colors"
                  >
                    <span>Enquire for {loc.cityName} Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Physical Office Transparency Notice (Requirement compliance) */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
                <p className="font-bold text-slate-800 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Consultation Protocol Notice
                </p>
                <p className="leading-relaxed">
                  SkyRank Solution provides digital marketing services to {loc.cityName} businesses via dedicated account managers, remote video sessions, and scheduled on-site client visits. We do not claim unverified physical branch offices in cities where we do not operate permanent facilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* City FAQs */}
      {loc.faqs.length > 0 && (
        <section className="py-16 bg-slate-50 text-slate-900 border-y border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Local FAQ</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                {loc.cityName} SEO Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3.5">
              {loc.faqs.map((faq) => (
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

      {/* Embedded Audit Form for City */}
      <section className="py-20 bg-slate-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              Get Your Free SEO Audit in {loc.cityName}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Enter your website domain below to receive a personalized diagnostic report.
            </p>
          </div>
          <AuditForm compact={true} />
        </div>
      </section>
    </>
  );
}
