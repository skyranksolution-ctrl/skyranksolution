"use client";

import React from "react";
import { siteConfig } from "@/data/site-config";
import { MessageSquareText } from "lucide-react";

export function WhatsAppButton() {
  const phone = siteConfig.contact.whatsapp;
  const message = encodeURIComponent(siteConfig.contact.whatsappMessage);
  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with our SEO Strategist on WhatsApp"
      className="fixed bottom-6 right-6 z-40 bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 rounded-full shadow-xl hover:shadow-emerald-500/40 hover:scale-110 transition-all flex items-center justify-center group"
    >
      <MessageSquareText className="w-6 h-6" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-bold pl-0 group-hover:pl-2">
        Chat with Expert
      </span>
    </a>
  );
}
