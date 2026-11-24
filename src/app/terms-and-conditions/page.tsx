import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = constructMetadata({
  title: "Terms and Conditions | SkyRank Solution",
  description: "Standard terms and conditions governing the use of the SkyRank Solution website, digital marketing services, and consultation agreements.",
  path: "/terms-and-conditions",
});

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Terms and Conditions", href: "/terms-and-conditions" }]} />

      <section className="py-16 bg-slate-950 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Terms and Conditions</h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">Last Updated: March 2026</p>
        </div>
      </section>

      <section className="py-16 bg-white text-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8 text-sm sm:text-base leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">1. Agreement to Terms</h2>
            <p className="text-slate-600">
              By accessing the {siteConfig.name} website, requesting a free SEO audit, or entering into a service agreement with us, you agree to comply with and be bound by these Terms and Conditions. If you disagree with any part of these terms, please do not use our website or services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">2. Scope of Services</h2>
            <p className="text-slate-600">
              SkyRank Solution provides digital marketing, search engine optimization, website engineering, and consulting services. All formal engagements are governed by individual client Statements of Work (SOW) outlining project scope, deliverables, and commercial compensation.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">3. Search Engine Rankings Disclaimer</h2>
            <p className="text-slate-600">
              Search engine ranking algorithms are third-party systems operated by Google, Microsoft, and other providers subject to continuous updates. While SkyRank Solution employs industry best practices, data-driven methodologies, and white-hat strategies, we cannot and do not guarantee specific numerical rankings, organic traffic levels, or revenue conversions.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">4. Client Responsibilities</h2>
            <p className="text-slate-600 mb-2">To facilitate effective service delivery, clients agree to:</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600 text-sm">
              <li>Provide timely access to necessary webmaster tools, hosting environments, and content assets.</li>
              <li>Ensure all submitted content and materials do not infringe on third-party intellectual property rights.</li>
              <li>Review and approve recommendations within agreed project timeframes.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">5. Intellectual Property</h2>
            <p className="text-slate-600">
              All proprietary frameworks, analytical tools, design assets, and code developed by SkyRank Solution remain our intellectual property until transfer of ownership as defined in a fully executed client agreement.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">6. Limitation of Liability</h2>
            <p className="text-slate-600">
              In no event shall SkyRank Solution or its consultants be liable for any indirect, incidental, special, consequential, or punitive damages arising from the use of our website or services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">7. Governing Law</h2>
            <p className="text-slate-600">
              These terms shall be governed by and construed in accordance with the laws of India, with jurisdiction in Ahmedabad, Gujarat, without regard to conflict of law provisions.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
