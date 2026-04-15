import { Sparkles, Wrench, Zap, Sliders } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/FadeIn";
import { trustPoints, type TrustPoint } from "@/lib/home-data";

/* ─── Icon resolver ──────────────────────────────────────────────────────── */

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Wrench,
  Zap,
  Sliders,
};

/* ─── Single Trust Point ─────────────────────────────────────────────────── */

function TrustCard({ point, index }: { point: TrustPoint; index: number }) {
  const Icon = iconMap[point.iconName] ?? Sparkles;

  // Alternate subtle accent tints so the grid feels alive but not busy
  const accentTints = [
    "from-accent/8 to-transparent",
    "from-violet-accent/8 to-transparent",
    "from-accent/8 to-transparent",
    "from-violet-accent/8 to-transparent",
  ];

  return (
    <div
      className={`group relative p-5 rounded-2xl border border-border-default
                  bg-gradient-to-br ${accentTints[index % accentTints.length]}
                  hover:border-accent/25 transition-all duration-300`}
      style={{ boxShadow: "0 1px 0 rgba(255,255,255,0.025), 0 2px 12px rgba(0,0,0,0.25)" }}
    >
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div
          className="shrink-0 flex items-center justify-center w-9 h-9 rounded-xl
                     bg-background-elevated border border-border-bright text-accent-soft
                     group-hover:border-accent/30 transition-colors duration-200"
        >
          <Icon className="w-4 h-4" strokeWidth={1.75} />
        </div>

        {/* Text */}
        <div className="space-y-1 min-w-0">
          <h3 className="text-sm font-semibold text-text-primary leading-tight">
            {point.title}
          </h3>
          <p className="text-xs text-text-secondary leading-relaxed">
            {point.description}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── Section ────────────────────────────────────────────────────────────── */

export function WhyWorkWithMeSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Why Work With Me"
          title="Built for the Real World"
          highlight="Real World"
          description="A few things that set the work apart from generic freelance output."
          className="mb-12"
        />

        <Stagger staggerDelay={0.09} containerDelay={0.05}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {trustPoints.map((point, i) => (
              <StaggerItem key={point.id}>
                <TrustCard point={point} index={i} />
              </StaggerItem>
            ))}
          </div>
        </Stagger>
      </Container>
    </section>
  );
}
