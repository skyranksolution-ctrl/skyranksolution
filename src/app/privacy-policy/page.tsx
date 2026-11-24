import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = constructMetadata({
  title: "Privacy Policy | SkyRank Solution",
  description: "Privacy policy and data handling practices for visitors, clients, and inquiries submitted to SkyRank Solution.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Privacy Policy", href: "/privacy-policy" }]} />

      <section className="py-16 bg-slate-950 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Privacy Policy</h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">Last Updated: March 2026</p>
        </div>
      </section>

      <section className="py-16 bg-white text-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8 text-sm sm:text-base leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">1. Overview</h2>
            <p className="text-slate-600">
              {siteConfig.name} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects the privacy of our website visitors and clients. This Privacy Policy details how we collect, use, and safeguard personal and business data provided through our website, contact forms, and diagnostic audit tools.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">2. Information We Collect</h2>
            <p className="text-slate-600 mb-3">
              We collect information that you explicitly submit to us when requesting an SEO audit, scheduling a consultation, or communicating with our team:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600 text-sm">
              <li>Full Name and Contact Details (Email address, Phone number).</li>
              <li>Company details, website domain, and industry vertical.</li>
              <li>Target keywords, geographic markets, and organic growth priorities.</li>
              <li>Technical analytics and diagnostic data needed to generate requested audits.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">3. How We Use Your Information</h2>
            <p className="text-slate-600 mb-2">We use collected information solely for legitimate business operations:</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600 text-sm">
              <li>To produce and deliver your requested website audit and technical reports.</li>
              <li>To respond to your inquiries and schedule consultations.</li>
              <li>To diagnose technical website performance and compile aggregate analytics.</li>
              <li>To fulfill statutory and regulatory obligations.</li>
            </ul>
            <p className="text-slate-600 mt-2 font-medium">
              We never sell, rent, or lease your personal or business data to third-party brokers or advertisers.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">4. Cookies & Analytics</h2>
            <p className="text-slate-600">
              We utilize anonymized analytics tracking (including Google Analytics 4) to monitor website speed, traffic trends, and error states. You may disable cookies through your browser settings or select &quot;Essential Only&quot; on our cookie consent banner.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">5. Data Security & Storage</h2>
            <p className="text-slate-600">
              We implement industry-standard security headers, encryption, and restricted database access controls to safeguard your submissions against unauthorized access, loss, or disclosure.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">6. Contact for Privacy Inquiries</h2>
            <p className="text-slate-600">
              If you have any questions regarding your data or wish to request data erasure, contact our data privacy officer at{" "}
              <a href={`mailto:${siteConfig.contact.email}`} className="text-blue-600 font-bold hover:underline">
                {siteConfig.contact.email}
              </a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
