import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import { PageBackground } from "@/components/layout/PageBackground";
import { HeroSection } from "./home/HeroSection";
import { FeaturedProjectsSection } from "./home/FeaturedProjectsSection";
import { WhatIOfferSection } from "./home/WhatIOfferSection";
import { WhyWorkWithMeSection } from "./home/WhyWorkWithMeSection";
import { FinalCtaSection } from "./home/FinalCtaSection";

/* ─── Metadata ───────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
};

/* ─── Section Divider ────────────────────────────────────────────────────── */

function SectionDivider() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="divider" />
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      {/* Hero gets the stronger ambient glow */}
      <PageBackground variant="hero" />

      <HeroSection />

      <SectionDivider />

      <FeaturedProjectsSection />

      <SectionDivider />

      <WhatIOfferSection />

      <SectionDivider />

      <WhyWorkWithMeSection />

      <SectionDivider />

      <FinalCtaSection />
    </>
  );
}
