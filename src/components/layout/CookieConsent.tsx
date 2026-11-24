"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const consent = localStorage.getItem("skyrank_cookie_consent");
      if (!consent) {
        setShow(true);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("skyrank_cookie_consent", "accepted");
    setShow(false);
  };

  const handleDecline = () => {
    localStorage.setItem("skyrank_cookie_consent", "declined");
    setShow(false);
  };

  if (!show) return null;

  return (
    <aside aria-label="Cookie consent banner" className="fixed bottom-4 left-4 right-4 md:right-auto md:max-w-md z-50 bg-white/95 backdrop-blur-xl border border-slate-200 text-slate-800 p-4 rounded-2xl shadow-2xl animate-fade-in">
      <div className="flex items-start gap-3">
        <Cookie className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <h4 className="text-xs font-bold text-slate-900 mb-0.5">Privacy &amp; Analytics Consent</h4>
          <p className="text-[11px] text-slate-600 leading-relaxed mb-2.5">
            We use anonymized cookies to analyze traffic and optimize website speed in accordance with our{" "}
            <Link href="/privacy-policy" className="text-blue-600 underline hover:text-blue-700">
              Privacy Policy
            </Link>.
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={handleAccept}
              className="px-3 py-1 rounded-lg text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white transition-colors cursor-pointer"
            >
              Accept All
            </button>
            <button
              onClick={handleDecline}
              className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
            >
              Essential Only
            </button>
          </div>
        </div>
        <button
          onClick={() => setShow(false)}
          className="text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
          aria-label="Dismiss cookie notice"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
}
