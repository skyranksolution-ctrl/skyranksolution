"use client";

import React from "react";
import { UserCheck, Star } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem, CardHoverMotion } from "@/components/ui/Motion";

export function TestimonialsSection() {
  const placeholders = [
    {
      id: "placeholder-1",
      rolePlaceholder: "Founder & CEO [Editable Placeholder]",
      companyPlaceholder: "SaaS Tech Startup, Bangalore [Editable Placeholder]",
      serviceUsed: "Technical SEO & Generative Engine Optimization",
      feedbackPlaceholder:
        "“SkyRank Solution redesigned our search architecture and resolved complex Next.js rendering bottlenecks. Our commercial search impressions grew consistently within 4 months.”",
      statusNote: "Sample Client Testimonial Placeholder",
    },
    {
      id: "placeholder-2",
      rolePlaceholder: "Managing Director [Editable Placeholder]",
      companyPlaceholder: "E-Commerce Lifestyle Brand, Mumbai [Editable Placeholder]",
      serviceUsed: "E-Commerce SEO & Faceted Navigation",
      feedbackPlaceholder:
        "“Their disciplined approach to product category taxonomy and schema markup unlocked rich review stars in Google SERPs, substantially boosting our organic checkout volume.”",
      statusNote: "Sample Client Testimonial Placeholder",
    },
    {
      id: "placeholder-3",
      rolePlaceholder: "Marketing Head [Editable Placeholder]",
      companyPlaceholder: "Healthcare & Clinic Chain, Ahmedabad [Editable Placeholder]",
      serviceUsed: "Local SEO & Google Business Profile Management",
      feedbackPlaceholder:
        "“From lagging on page 3 of local maps to ranking in the top 3-pack across all our clinic locations. We now receive regular appointment inquiries directly through organic search.”",
      statusNote: "Sample Client Testimonial Placeholder",
    },
  ];

  return (
    <section className="py-24 bg-[#FAFCFF] text-slate-900 relative overflow-hidden border-t border-slate-200/80">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-14 relative z-10">
        
        {/* Header with FadeIn */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-1">
            <UserCheck className="w-3.5 h-3.5 text-blue-600" />
            <span>Client Perspectives</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Trusted by Leaders in Fast-Growth Markets
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Honest partnerships built on verified Search Console data, transparent monthly reviews, and zero lock-in contracts.
          </p>
        </FadeIn>

        {/* Testimonials 3 Column Grid with Stagger & Card Hover */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {placeholders.map((item) => (
            <StaggerItem key={item.id}>
              <CardHoverMotion className="h-full">
                <div className="bg-white border border-slate-200/90 rounded-2xl p-7 flex flex-col justify-between hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 shadow-sm h-full relative overflow-hidden">
                  <div>
                    <div className="flex items-center gap-1 text-amber-400 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    <p className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md inline-block mb-3 border border-blue-200">
                      {item.serviceUsed}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6 italic">
                      {item.feedbackPlaceholder}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <p className="text-xs font-bold text-slate-900">{item.rolePlaceholder}</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">{item.companyPlaceholder}</p>
                    <span className="text-[9px] text-slate-400 font-mono mt-2 block">{item.statusNote}</span>
                  </div>
                </div>
              </CardHoverMotion>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
}
