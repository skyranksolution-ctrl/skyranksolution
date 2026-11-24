import React from "react";
import { HomeTopSlider } from "@/components/home/HomeTopSlider";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustSection } from "@/components/home/TrustSection";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ProcessSection } from "@/components/home/ProcessSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";

export default function HomePage() {
  return (
    <>
      {/* Top Automated Client SEO Ranking Achievements Slider */}
      <HomeTopSlider />

      {/* Section 3: Hero Section */}
      <HeroSection />

      {/* Section 4: Trust Section */}
      <TrustSection />

      {/* Section 5: Services Overview */}
      <ServicesOverview />

      {/* Section 6: Why Choose SkyRank Solution? */}
      <WhyChooseUs />

      {/* Section 7: Our 10-Step SEO Process */}
      <ProcessSection />

      {/* Section 8: Industries We Serve */}
      <IndustriesSection />

      {/* Section 14: Final CTA */}
      <FinalCTASection />
    </>
  );
}
