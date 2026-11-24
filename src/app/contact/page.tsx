import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/data/site-config";
import { Mail, Phone, MapPin, ShieldCheck } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Contact Us | Schedule SEO Consultation | SkyRank Solution",
  description: "Get in touch with SkyRank Solution. Request a project proposal, schedule a 1-on-1 strategy session, or send an inquiry for SEO and development services.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Contact Us", href: "/contact" }]} />

      <section className="py-10 sm:py-16 md:py-24 bg-slate-950 text-white text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-400/20">
            Let&apos;s Connect
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mt-4 mb-4">
            Start Your Organic Growth Journey
          </h1>
          <p className="text-base text-slate-300 leading-relaxed">
            Have questions about your search visibility or ready to request a formal proposal? Reach out directly to our strategy team.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Contact Channels & Office Details */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Speak Directly With Strategists</h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We don&apos;t route inquiries through generic call centers. Your note goes straight to an experienced SEO strategist who evaluates your domain.
                </p>
              </div>

              {/* Details Cards */}
              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Email Inquiries</p>
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors">
                      {siteConfig.contact.email}
                    </a>
                    <p className="text-[11px] text-slate-400 mt-0.5">Average response: 4–6 business hours</p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Phone / WhatsApp</p>
                    <a href={`tel:${siteConfig.contact.phone}`} className="text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors">
                      {siteConfig.contact.phoneDisplay}
                    </a>
                    <p className="text-[11px] text-slate-400 mt-0.5">{siteConfig.contact.workingHours}</p>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Headquarters</p>
                    <p className="text-sm font-bold text-slate-900">
                      {siteConfig.contact.address.street}
                    </p>
                    <p className="text-xs text-slate-600">
                      {siteConfig.contact.address.city}, {siteConfig.contact.address.state} {siteConfig.contact.address.postalCode}, {siteConfig.contact.address.country}
                    </p>
                  </div>
                </div>
              </div>

              {/* Note on Location Consultation */}
              <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200/70 text-xs text-slate-700 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Flexible Hybrid Consultations:</strong> We meet clients via Google Meet or on-site across Ahmedabad, Gandhinagar, Mumbai, Bangalore, and Delhi NCR upon prior appointment.
                </span>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
