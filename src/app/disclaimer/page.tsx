import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Website & SEO Disclaimer | SkyRank Solution",
  description: "Official legal disclaimer regarding SEO outcomes, performance metrics, and third-party search engine algorithms.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Disclaimer", href: "/disclaimer" }]} />

      <section className="py-16 bg-slate-950 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Legal & Performance Disclaimer</h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">Transparency & Algorithm Disclosure</p>
        </div>
      </section>

      <section className="py-16 bg-white text-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8 text-sm sm:text-base leading-relaxed">
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl text-blue-900 text-sm flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <strong>Strict Compliance with Search Engine Guidelines:</strong> SkyRank Solution strictly adheres to the official Google Search Essentials, Webmaster Guidelines, and ethical white-hat practices.
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">1. No Guaranteed Rankings Policy</h2>
            <p className="text-slate-600">
              In accordance with Google&apos;s explicit guidance, no agency can guarantee a #1 position on Google. Google’s algorithms incorporate hundreds of dynamic signals, personalization variables, localized factors, and competitor actions that change continuously. Any company promising &quot;instant #1 rankings&quot; is engaging in deceptive marketing.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">2. Illustrative & Demo Data Disclosures</h2>
            <p className="text-slate-600">
              Charts, statistics, case studies, client names, and performance visualizations labeled as &quot;Demo,&quot; &quot;Illustrative,&quot; or &quot;Placeholder&quot; across this website are provided solely for conceptual demonstrations of our analytical capabilities. They do not constitute guaranteed future results for your website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">3. Third-Party Search Engines & Algorithm Volatility</h2>
            <p className="text-slate-600">
              Search engines periodically roll out major core updates, spam updates, and Helpful Content adjustments. While our methodologies focus on sustainable quality signals to minimize risk, SkyRank Solution is not responsible for algorithmic ranking fluctuations resulting from broad core shifts.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">4. General Informational Advice</h2>
            <p className="text-slate-600">
              Articles and guides published on our blog are intended for general educational purposes. Technical implementations should always be tested in staging environments prior to production deployment.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
