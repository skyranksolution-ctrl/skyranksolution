"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Sparkles,
  Phone,
  ArrowUpRight,
  Search,
  Cpu,
  BarChart3,
  Globe2,
} from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const serviceCategories = [
    {
      category: "AI & Technical Search",
      icon: Cpu,
      items: [
        { label: "AI-Powered SEO", href: "/services/ai-seo", desc: "SGE & LLM search optimization" },
        { label: "Technical SEO", href: "/services/technical-seo", desc: "Core Web Vitals & architecture" },
        { label: "Website Development", href: "/services/website-development", desc: "Next.js high-speed web apps" },
      ],
    },
    {
      category: "Core SEO & Growth",
      icon: Search,
      items: [
        { label: "Comprehensive SEO", href: "/services/seo-services", desc: "End-to-end organic campaigns" },
        { label: "On-Page SEO", href: "/services/on-page-seo", desc: "Semantic keyword & intent tuning" },
        { label: "Keyword Research", href: "/services/keyword-research", desc: "High-CPC commercial opportunity" },
      ],
    },
    {
      category: "Local & E-Commerce",
      icon: Globe2,
      items: [
        { label: "Local SEO & Maps", href: "/services/local-seo", desc: "Google 3-Pack geo-ranking" },
        { label: "Google Business Profile", href: "/services/google-business-profile-optimization", desc: "Local profile mastery" },
        { label: "E-commerce SEO", href: "/services/ecommerce-seo", desc: "Product schema & category sales" },
      ],
    },
    {
      category: "Authority & PR",
      icon: BarChart3,
      items: [
        { label: "Link Building", href: "/services/link-building", desc: "High-DA white-hat digital PR" },
        { label: "Content Marketing", href: "/services/content-marketing", desc: "Data-backed authority articles" },
        { label: "Competitor Analysis", href: "/services/competitor-analysis", desc: "Algorithmic SERP reverse engineering" },
      ],
    },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-2xl border-b border-slate-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
          : "bg-white/85 backdrop-blur-xl border-b border-slate-200/60"
      }`}
    >
      {/* Edge-to-Edge Container with balanced padding */}
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-14">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Official Brand Logo Section */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3.5 group flex-shrink-0">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full p-[1.5px] bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 shadow-[0_0_20px_rgba(8,102,255,0.25)] group-hover:shadow-[0_0_30px_rgba(8,102,255,0.45)] group-hover:scale-105 transition-all duration-300">
              <Image
                src="/images/logo.png"
                alt="SkyRank Solution Logo"
                width={48}
                height={48}
                priority
                className="w-full h-full rounded-full object-cover bg-white"
              />
              <div className="absolute -top-0.5 -right-0.5 w-3 sm:w-3.5 h-3 sm:h-3.5 rounded-full bg-emerald-500 border-2 border-white animate-pulse shadow-[0_0_8px_#10b981]" />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-lg sm:text-xl tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors whitespace-nowrap">
                SkyRank<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Solution</span>
              </span>
              <span className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold whitespace-nowrap hidden sm:inline-block">
                Autonomous Search &amp; Growth Agency
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - High contrast, crisp, zero wrapping */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 flex-shrink-0">
            <Link
              href="/"
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all whitespace-nowrap ${
                pathname === "/"
                  ? "text-blue-600 bg-blue-50 font-bold border border-blue-100"
                  : "text-slate-700 hover:text-slate-900 hover:bg-slate-100/80"
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown with Rich Mega-Menu */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  pathname.startsWith("/services")
                    ? "text-blue-600 bg-blue-50 font-bold border border-blue-100"
                    : "text-slate-700 hover:text-slate-900 hover:bg-slate-100/80"
                }`}
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesDropdownOpen ? "rotate-180 text-blue-600" : "text-slate-500"
                  }`}
                />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full -left-20 w-[720px] bg-white border border-slate-200 rounded-3xl shadow-[0_25px_70px_rgba(15,23,42,0.15)] p-5 z-50 backdrop-blur-3xl animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-600 shadow-[0_0_8px_#2563eb]" />
                      <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
                        15 Specialized Search Disciplines
                      </p>
                    </div>
                    <Link
                      href="/services"
                      onClick={() => setServicesDropdownOpen(false)}
                      className="text-xs font-bold text-slate-800 hover:text-blue-600 flex items-center gap-1 transition-colors"
                    >
                      View All Services <ArrowUpRight className="w-3.5 h-3.5 text-blue-600" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {serviceCategories.map((cat) => {
                      const CatIcon = cat.icon;
                      return (
                        <div key={cat.category} className="space-y-1 bg-slate-50/70 p-3 rounded-2xl border border-slate-100">
                          <div className="flex items-center gap-2 px-2 py-1 mb-1">
                            <CatIcon className="w-3.5 h-3.5 text-blue-600" />
                            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-700">
                              {cat.category}
                            </p>
                          </div>
                          {cat.items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setServicesDropdownOpen(false)}
                              className="p-2 rounded-xl hover:bg-white border border-transparent hover:border-slate-200/80 hover:shadow-sm transition-all group block"
                            >
                              <div className="text-xs font-semibold text-slate-800 group-hover:text-blue-600 flex items-center justify-between">
                                <span>{item.label}</span>
                                <ArrowUpRight className="w-3 h-3 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                              </div>
                              <p className="text-[10px] text-slate-500 line-clamp-1">{item.desc}</p>
                            </Link>
                          ))}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setResourcesDropdownOpen(true)}
              onMouseLeave={() => setResourcesDropdownOpen(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  pathname.startsWith("/blog") || pathname.startsWith("/seo-agency")
                    ? "text-blue-600 bg-blue-50 font-bold border border-blue-100"
                    : "text-slate-700 hover:text-slate-900 hover:bg-slate-100/80"
                }`}
                onClick={() => setResourcesDropdownOpen(!resourcesDropdownOpen)}
              >
                <span>Resources</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    resourcesDropdownOpen ? "rotate-180 text-blue-600" : "text-slate-500"
                  }`}
                />
              </button>

              {resourcesDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white border border-slate-200 rounded-3xl shadow-[0_20px_60px_rgba(15,23,42,0.12)] p-3 grid gap-1 z-50 backdrop-blur-3xl animate-in fade-in slide-in-from-top-2 duration-200">
                  <Link
                    href="/blog"
                    onClick={() => setResourcesDropdownOpen(false)}
                    className="p-2.5 rounded-2xl hover:bg-slate-50 transition-colors group block"
                  >
                    <p className="text-xs font-semibold text-slate-800 group-hover:text-blue-600">
                      SEO Knowledge Base
                    </p>
                    <p className="text-[10px] text-slate-500">In-depth guides & algorithm breakdowns</p>
                  </Link>

                  <Link
                    href="/seo-audit"
                    onClick={() => setResourcesDropdownOpen(false)}
                    className="p-2.5 rounded-2xl hover:bg-slate-50 transition-colors group block"
                  >
                    <p className="text-xs font-semibold text-slate-800 group-hover:text-blue-600">
                      Free SEO Audit Tool
                    </p>
                    <p className="text-[10px] text-slate-500">Instant website diagnostic</p>
                  </Link>

                  <div className="pt-2 mt-1 border-t border-slate-100 px-2 pb-1">
                    <p className="text-[9px] uppercase tracking-wider font-bold text-slate-500">
                      Local Agency Hubs
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-1 text-[11px] px-2 text-slate-600">
                    <Link
                      href="/seo-agency/ahmedabad"
                      onClick={() => setResourcesDropdownOpen(false)}
                      className="hover:text-blue-600 py-0.5"
                    >
                      Ahmedabad
                    </Link>
                    <Link
                      href="/seo-agency/surat"
                      onClick={() => setResourcesDropdownOpen(false)}
                      className="hover:text-blue-600 py-0.5"
                    >
                      Surat
                    </Link>
                    <Link
                      href="/seo-agency/mumbai"
                      onClick={() => setResourcesDropdownOpen(false)}
                      className="hover:text-blue-600 py-0.5"
                    >
                      Mumbai
                    </Link>
                    <Link
                      href="/seo-agency/bangalore"
                      onClick={() => setResourcesDropdownOpen(false)}
                      className="hover:text-blue-600 py-0.5"
                    >
                      Bangalore
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all whitespace-nowrap ${
                pathname === "/about"
                  ? "text-blue-600 bg-blue-50 font-bold border border-blue-100"
                  : "text-slate-700 hover:text-slate-900 hover:bg-slate-100/80"
              }`}
            >
              About
            </Link>

            <Link
              href="/contact"
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all whitespace-nowrap ${
                pathname === "/contact"
                  ? "text-blue-600 bg-blue-50 font-bold border border-blue-100"
                  : "text-slate-700 hover:text-slate-900 hover:bg-slate-100/80"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Action CTAs - Pushed to right edge */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <Link
              href="/talk-to-expert"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs xl:text-sm font-bold text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-blue-400 bg-white hover:bg-slate-50 shadow-sm transition-all whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              <span>Talk to Expert</span>
            </Link>

            <Link
              href="/seo-audit"
              className="relative group inline-flex items-center gap-2 px-6 py-2.5 rounded-2xl text-xs xl:text-sm font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300 whitespace-nowrap overflow-hidden"
            >
              <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
              <span>Free SEO Audit</span>
              <div className="absolute inset-0 rounded-2xl border border-white/20 pointer-events-none" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/seo-audit"
              className="hidden sm:inline-flex px-3 py-1.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md shadow-blue-600/30"
            >
              Free Audit
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-100">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`p-2.5 rounded-2xl text-xs font-semibold text-center transition-colors ${
                pathname === "/" ? "bg-blue-50 text-blue-600 font-bold" : "bg-slate-50 text-slate-800 hover:bg-slate-100"
              }`}
            >
              Home
            </Link>
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className={`p-2.5 rounded-2xl text-xs font-semibold text-center transition-colors ${
                pathname.startsWith("/services") ? "bg-blue-50 text-blue-600 font-bold" : "bg-slate-50 text-slate-800 hover:bg-slate-100"
              }`}
            >
              Services (15)
            </Link>
            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className={`p-2.5 rounded-2xl text-xs font-semibold text-center transition-colors ${
                pathname.startsWith("/blog") ? "bg-blue-50 text-blue-600 font-bold" : "bg-slate-50 text-slate-800 hover:bg-slate-100"
              }`}
            >
              Blog
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`p-2.5 rounded-2xl text-xs font-semibold text-center transition-colors ${
                pathname === "/about" ? "bg-blue-50 text-blue-600 font-bold" : "bg-slate-50 text-slate-800 hover:bg-slate-100"
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`p-2.5 rounded-2xl text-xs font-semibold text-center transition-colors col-span-2 ${
                pathname === "/contact" ? "bg-blue-50 text-blue-600 font-bold" : "bg-slate-50 text-slate-800 hover:bg-slate-100"
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Quick Services Navigation in Mobile Drawer */}
          <div className="pt-1">
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2 px-1">Top Services</p>
            <div className="grid grid-cols-2 gap-1.5 text-[11px] text-slate-700">
              <Link
                href="/services/ai-seo"
                onClick={() => setMobileMenuOpen(false)}
                className="px-2.5 py-1.5 rounded-lg bg-slate-50 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                AI-Powered SEO
              </Link>
              <Link
                href="/services/technical-seo"
                onClick={() => setMobileMenuOpen(false)}
                className="px-2.5 py-1.5 rounded-lg bg-slate-50 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                Technical SEO
              </Link>
              <Link
                href="/services/local-seo"
                onClick={() => setMobileMenuOpen(false)}
                className="px-2.5 py-1.5 rounded-lg bg-slate-50 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                Local SEO &amp; Maps
              </Link>
              <Link
                href="/services/ecommerce-seo"
                onClick={() => setMobileMenuOpen(false)}
                className="px-2.5 py-1.5 rounded-lg bg-slate-50 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                E-commerce SEO
              </Link>
            </div>
          </div>

          <div className="space-y-2 pt-2">
            <Link
              href="/seo-audit"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 font-bold text-white text-xs sm:text-sm text-center shadow-lg shadow-blue-500/20"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              Get Free SEO Audit
            </Link>
            <Link
              href="/talk-to-expert"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 p-3.5 rounded-2xl bg-white border border-slate-200 font-semibold text-slate-800 text-xs sm:text-sm text-center hover:bg-slate-50"
            >
              <Phone className="w-4 h-4 text-blue-600" />
              Talk to SEO Expert
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
