import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { HomeTopSlider } from "@/components/home/HomeTopSlider";
import { TrustSection } from "@/components/home/TrustSection";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ProcessSection } from "@/components/home/ProcessSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";

export default function HomePage() {
  return (
    <>
      {/* 1. Main High-Converting Hero Section with Direct Lead Capture Form & City Skyline */}
      <HeroSection />

      {/* 2. Automated Live Google #1 Ranking Achievements Showcase Slider */}
      <HomeTopSlider />

      {/* 3. Trust Section */}
      <TrustSection />

      {/* 4. Services Overview */}
      <ServicesOverview />

      {/* 5. Why Choose SkyRank Solution? */}
      <WhyChooseUs />

      {/* 6. Our 10-Step SEO Process */}
      <ProcessSection />

      {/* 7. Industries We Serve */}
      <IndustriesSection />

      {/* 8. Final CTA */}
      <FinalCTASection />
    </>
  );
}
