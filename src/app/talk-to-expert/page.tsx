import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { Clock, CheckCircle2, Video, ShieldCheck, UserCheck } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Talk to an SEO Expert | 1-on-1 Strategy Session | SkyRank Solution",
  description: "Schedule a complimentary 30-minute strategic consultation with a Senior SEO Consultant from SkyRank Solution.",
  path: "/talk-to-expert",
});

export default function TalkToExpertPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Talk to an Expert", href: "/talk-to-expert" }]} />

      <section className="py-16 md:py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Value Proposition */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-400/20">
                1-on-1 Strategy Call
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
                Schedule a 30-Minute SEO Strategy Session
              </h1>
              <p className="text-base text-slate-300 leading-relaxed">
                Speak directly with an experienced SEO strategist who reviews your search console footprint, competitive landscape, and commercial objectives.
              </p>

              <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <Video className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Private Video Conference:</strong> Tailored review via Google Meet or Zoom.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Zero High-Pressure Sales:</strong> Actionable strategic insight and transparent budget clarity.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <UserCheck className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Direct Access to Senior Talent:</strong> Meet with a real practitioner, not an entry-level SDR.
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-3 text-xs text-slate-400">
                <Clock className="w-4 h-4 text-blue-400" />
                <span>Duration: 30 Minutes</span>
                <span className="text-slate-600">•</span>
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>NDA Protected</span>
              </div>
            </div>

            {/* Right Column: Consultation Form */}
            <div className="lg:col-span-7">
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
