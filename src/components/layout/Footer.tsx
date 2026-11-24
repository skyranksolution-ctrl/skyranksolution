import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site-config";
import { Mail, Phone, MapPin, ArrowRight, ShieldCheck, Globe2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-14">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Column 1: Company Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3.5 group">
              <div className="relative w-12 h-12 rounded-full p-[1.5px] bg-gradient-to-tr from-blue-600 to-indigo-600 shadow-md flex-shrink-0 group-hover:scale-105 transition-transform">
                <Image
                  src="/images/logo.png"
                  alt="SkyRank Solution Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover rounded-full bg-white"
                />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white group-hover:text-blue-400 transition-colors">
                SkyRank<span className="text-blue-500">Solution</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              SkyRank Solution is a results-driven digital marketing and SEO agency. We empower startups, enterprise brands, and local businesses with AI-powered search optimization, technical engineering, and high-converting web solutions.
            </p>

            <div className="space-y-2 pt-2 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>
                  {siteConfig.contact.address.street}, {siteConfig.contact.address.city}, {siteConfig.contact.address.state} – {siteConfig.contact.address.postalCode}, {siteConfig.contact.address.country}.
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <p className="text-xs uppercase tracking-wider font-semibold text-slate-500 mb-2">Target Global Markets</p>
              <div className="flex flex-wrap gap-1.5">
                {siteConfig.targetMarkets.map((m) => (
                  <span key={m.code} className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 bg-slate-900 border border-slate-800 rounded text-slate-300">
                    <Globe2 className="w-3 h-3 text-blue-400" />
                    {m.country}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Core SEO Services */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              SEO Services
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {siteConfig.footerServices.slice(0, 8).map((svc) => (
                <li key={svc.href}>
                  <Link href={svc.href} className="hover:text-blue-400 transition-colors flex items-center gap-1 group">
                    <span className="text-slate-600 group-hover:text-blue-400">›</span>
                    <span>{svc.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Specialized Services */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Growth & Tech
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {siteConfig.footerServices.slice(8).map((svc) => (
                <li key={svc.href}>
                  <Link href={svc.href} className="hover:text-blue-400 transition-colors flex items-center gap-1 group">
                    <span className="text-slate-600 group-hover:text-blue-400">›</span>
                    <span>{svc.label}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link href="/services" className="text-blue-400 font-semibold hover:underline inline-flex items-center gap-1">
                  View All Services <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Links & Locations */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Locations & Company
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About SkyRank</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">SEO Insights & Blog</Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors">Careers & Hiring</Link>
              </li>
              <li>
                <Link href="/seo-audit" className="hover:text-white transition-colors text-amber-300 font-medium">Free SEO Audit</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Contact Our Team</Link>
              </li>
            </ul>

            <div className="pt-4">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Key City Hubs</p>
              <div className="flex flex-wrap gap-1 text-xs text-slate-400">
                {siteConfig.locations.map((loc) => (
                  <Link
                    key={loc.name}
                    href={loc.href}
                    className="hover:text-blue-400 hover:underline px-1 py-0.5"
                  >
                    {loc.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer Notice */}
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 mb-8 text-xs text-slate-400 leading-relaxed flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-slate-300">Transparency & Ethical SEO Guarantee: </span>
            SkyRank Solution implements white-hat, compliant search optimization aligned with Google Search Essentials. We do not make misleading claims of guaranteed #1 positions. Performance metrics and case studies shown across this website are based on verifiable strategy methodologies and clearly marked demo records where indicated.
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <div>
            © 2026 {siteConfig.name}. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-6 gap-y-2">
            <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-slate-300 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/disclaimer" className="hover:text-slate-300 transition-colors">
              Disclaimer
            </Link>
            <Link href="/sitemap.xml" className="hover:text-slate-300 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
