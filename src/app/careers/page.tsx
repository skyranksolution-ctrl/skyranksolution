import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Careers & Open Positions | SkyRank Solution",
  description: "Join the technical SEO and digital marketing engineering team at SkyRank Solution. Explore remote and hybrid positions.",
  path: "/careers",
});

export default function CareersPage() {
  const openings = [
    {
      title: "Senior Technical SEO Strategist",
      department: "SEO Engineering",
      location: "Hybrid (Ahmedabad / Remote)",
      type: "Full-Time",
      experience: "3–6 Years",
      description: "Lead technical diagnostic audits, server log investigations, Core Web Vitals remediation, and modern Next.js/React rendering architectures.",
    },
    {
      title: "SEO Copywriter & Content Strategist",
      department: "Content & E-E-A-T",
      location: "Remote (India)",
      type: "Full-Time",
      experience: "2–4 Years",
      description: "Research and write in-depth bottom-of-funnel pillar pages, technical comparison guides, and semantic entities that rank on Google.",
    },
    {
      title: "Digital PR & Outreach Specialist",
      department: "Authority Building",
      location: "Remote (India)",
      type: "Full-Time",
      experience: "2–5 Years",
      description: "Pitch data-driven stories, survey insights, and expert commentary to reputable journalists, webmasters, and editors to earn high-tier backlinks.",
    },
    {
      title: "Full-Stack Next.js / React Developer",
      department: "Web Development",
      location: "Hybrid (Ahmedabad / Remote)",
      type: "Full-Time",
      experience: "2–5 Years",
      description: "Build ultra-fast, accessible, SEO-native client websites with Next.js App Router, Tailwind CSS, TypeScript, and structured schema integration.",
    },
  ];

  return (
    <>
      <Breadcrumbs items={[{ label: "Careers", href: "/careers" }]} />

      <section className="py-16 md:py-24 bg-slate-950 text-white text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-400/20">
            Work With Us
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-4 mb-4">
            Build the Future of Organic Search
          </h1>
          <p className="text-base text-slate-300 leading-relaxed">
            We are looking for analytical thinkers, technical problem-solvers, and growth strategists passionate about engineering search excellence.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50 text-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {openings.map((job) => (
              <div
                key={job.title}
                className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                    <span className="font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded">
                      {job.department}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {job.location}
                    </span>
                    <span>•</span>
                    <span>Exp: {job.experience}</span>
                  </div>

                  <h2 className="text-xl font-bold text-slate-900">{job.title}</h2>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">{job.description}</p>
                </div>

                <div className="flex-shrink-0">
                  <a
                    href="mailto:skyranksolution@gmail.com?subject=Job%20Application%20-%20"
                    className="inline-flex items-center gap-1.5 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                  >
                    <span>Apply for Role</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* General Application */}
          <div className="mt-12 bg-white border border-slate-200 rounded-2xl p-8 text-center space-y-3">
            <h3 className="text-lg font-bold text-slate-900">Don&apos;t See Your Exact Role?</h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
              We are always eager to meet talented developers, data analysts, and SEO consultants. Send your resume and portfolio to{" "}
              <a href="mailto:skyranksolution@gmail.com" className="text-blue-600 font-bold hover:underline">
                skyranksolution@gmail.com
              </a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
