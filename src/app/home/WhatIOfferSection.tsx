import { Boxes, Code2, Monitor } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/FadeIn";
import { offerings, type Offering } from "@/lib/home-data";

/* ─── Icon resolver ──────────────────────────────────────────────────────── */

const iconMap: Record<string, LucideIcon> = {
  Boxes,
  Code2,
  Monitor,
};

/* ─── Single Offering Card ───────────────────────────────────────────────── */

function OfferingCard({ offering }: { offering: Offering }) {
  const Icon = iconMap[offering.iconName] ?? Boxes;

  return (
    <div
      className="group relative h-full p-6 rounded-2xl border border-border-default bg-background-card
                 hover:border-accent/25 hover:shadow-card-hover
                 transition-all duration-300"
      style={{ boxShadow: "0 1px 0 rgba(255,255,255,0.03), 0 4px 20px rgba(0,0,0,0.3)" }}
    >
      {/* Hover shine */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(99,102,241,0.04) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative space-y-4">
        {/* Icon container */}
        <div
          className="inline-flex items-center justify-center w-11 h-11 rounded-xl
                     bg-accent/10 border border-accent/15 text-accent-soft
                     group-hover:bg-accent/15 group-hover:border-accent/25
                     transition-all duration-200"
        >
          <Icon className="w-5 h-5" strokeWidth={1.75} />
        </div>

        {/* Title */}
        <h3 className="text-base font-semibold text-text-primary">
          {offering.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-text-secondary leading-relaxed">
          {offering.description}
        </p>
      </div>
    </div>
  );
}

/* ─── Section ────────────────────────────────────────────────────────────── */

export function WhatIOfferSection() {
  return (
    <section className="py-20 sm:py-28">
      {/* Section background tint */}
      <div
        className="absolute inset-x-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(30,30,46,0.8) 50%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      <Container>
        <SectionHeading
          eyebrow="Services"
          title="What I Offer"
          highlight="I Offer"
          description="Whether you need something ready-made or fully bespoke, here's how I can help."
          className="mb-12"
        />

        <Stagger staggerDelay={0.1} containerDelay={0.05}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {offerings.map((offering) => (
              <StaggerItem key={offering.id} className="h-full">
                <OfferingCard offering={offering} />
              </StaggerItem>
            ))}
          </div>
        </Stagger>
      </Container>
    </section>
  );
}
