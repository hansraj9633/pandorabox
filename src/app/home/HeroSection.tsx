"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";

/* ─── Hero Visual Panel ──────────────────────────────────────────────────── */

const previewCards = [
  {
    id: 1,
    label: "SaaS Starter Kit",
    category: "Web Application",
    indicator: "#6366f1",
    lines: [3, 5, 4],
  },
  {
    id: 2,
    label: "Link Analytics Tool",
    category: "Developer Tool",
    indicator: "#8b5cf6",
    lines: [4, 3, 5],
  },
  {
    id: 3,
    label: "Portfolio Template",
    category: "Website Template",
    indicator: "#06b6d4",
    lines: [5, 4, 3],
  },
];

function PreviewCard({
  card,
  index,
}: {
  card: (typeof previewCards)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.55,
        delay: 0.35 + index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="relative group"
    >
      <div
        className="rounded-2xl border border-border-default bg-background-card
                   hover:border-accent/30 transition-all duration-300
                   hover:shadow-card-hover overflow-hidden"
        style={{
          boxShadow: "0 1px 0 rgba(255,255,255,0.04), 0 4px 20px rgba(0,0,0,0.35)",
        }}
      >
        {/* Top accent line */}
        <div
          className="h-px w-full"
          style={{ background: `linear-gradient(90deg, ${card.indicator}60, transparent 70%)` }}
        />

        <div className="p-4">
          {/* Header row */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: card.indicator, boxShadow: `0 0 6px ${card.indicator}80` }}
              />
              <span className="text-xs font-medium text-text-primary truncate">
                {card.label}
              </span>
            </div>
            <span className="text-2xs font-medium text-text-muted shrink-0 ml-2 px-1.5 py-0.5 rounded-lg bg-background-elevated border border-border-subtle">
              {card.category}
            </span>
          </div>

          {/* Skeleton content lines */}
          <div className="space-y-2">
            {card.lines.map((width, i) => (
              <div
                key={i}
                className="h-1.5 rounded-full bg-border-bright"
                style={{ width: `${width * 16}%` }}
              />
            ))}
          </div>

          {/* Bottom row */}
          <div className="flex items-center justify-between mt-4 pt-3 border-t border-border-subtle">
            <div className="flex items-center gap-1 text-2xs text-green-400 font-medium">
              <CheckCircle2 className="w-3 h-3" />
              Live
            </div>
            <ExternalLink className="w-3 h-3 text-text-faint group-hover:text-accent-soft transition-colors duration-200" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function HeroVisual() {
  return (
    <div className="relative w-full max-w-sm mx-auto lg:max-w-none">
      {/* Outer glow */}
      <div
        className="absolute inset-0 rounded-3xl pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(99,102,241,0.1) 0%, transparent 70%)",
        }}
      />

      {/* Cards stack */}
      <div className="relative space-y-3">
        {previewCards.map((card, i) => (
          <PreviewCard key={card.id} card={card} index={i} />
        ))}
      </div>

      {/* Floating stat badge */}
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.75, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute -bottom-4 -left-4 lg:-left-6"
      >
        <div
          className="flex items-center gap-2 px-3 py-2 rounded-xl border border-border-bright bg-background-elevated"
          style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.4)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-slow" />
          <span className="text-xs font-medium text-text-secondary whitespace-nowrap">
            Available for custom work
          </span>
        </div>
      </motion.div>
    </div>
  );
}

/* ─── Hero Section ───────────────────────────────────────────────────────── */

const bullets = [
  "Ready-to-launch apps & templates",
  "Custom builds on request",
  "Clean code, full source included",
];

export function HeroSection() {
  return (
    <section className="relative pt-16 pb-24 sm:pt-20 sm:pb-32 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── Left: Copy ── */}
          <div>
            {/* Eyebrow pill */}
            <FadeIn delay={0} duration={0.5}>
              <div className="mb-6">
                <span
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium
                             border border-accent/25 bg-accent/8 text-accent-soft"
                  style={{ boxShadow: "0 0 12px rgba(99,102,241,0.08)" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-soft animate-pulse-slow" />
                  Independent Developer
                </span>
              </div>
            </FadeIn>

            {/* Headline */}
            <FadeIn delay={0.08} duration={0.6}>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-6xl font-semibold tracking-tight leading-[1.1] mb-6">
                <span className="heading-gradient">I Build Apps,</span>
                <br />
                <span className="heading-gradient">Websites & Digital</span>
                <br />
                <span className="gradient-text">Products</span>{" "}
                <span className="heading-gradient">That Are</span>
                <br />
                <span className="heading-gradient">Ready to Launch.</span>
              </h1>
            </FadeIn>

            {/* Body */}
            <FadeIn delay={0.16} duration={0.55}>
              <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
                Browse finished projects you can buy and deploy immediately, or
                reach out to commission a custom version built exactly to your
                requirements.
              </p>
            </FadeIn>

            {/* Bullet points */}
            <FadeIn delay={0.22} duration={0.5}>
              <ul className="space-y-2 mb-9">
                {bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2.5 text-sm text-text-secondary">
                    <CheckCircle2 className="w-4 h-4 text-accent-soft shrink-0" strokeWidth={2} />
                    {b}
                  </li>
                ))}
              </ul>
            </FadeIn>

            {/* CTAs */}
            <FadeIn delay={0.28} duration={0.5}>
              <div className="flex flex-wrap gap-3">
                <Button
                  href="/projects"
                  size="lg"
                  variant="primary"
                  iconRight={<ArrowRight className="w-4 h-4" />}
                >
                  View Projects
                </Button>
                <Button href="/contact" size="lg" variant="secondary">
                  Contact Me
                </Button>
              </div>
            </FadeIn>
          </div>

          {/* ── Right: Visual ── */}
          <div className="hidden sm:block lg:block">
            <HeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}
