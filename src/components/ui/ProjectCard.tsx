import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "./Badge";
import type { Project, BadgeVariant } from "@/types";

/* ─── Availability badge mapping ─────────────────────────────────────────── */

const availabilityConfig: Record<
  string,
  { variant: BadgeVariant; dot: boolean }
> = {
  Available: { variant: "green", dot: true },
  Customizable: { variant: "blue", dot: false },
  "Coming Soon": { variant: "default", dot: false },
};

/* ─── Category accent colours ────────────────────────────────────────────── */

const categoryAccent: Record<string, string> = {
  App: "#6366f1",
  Website: "#8b5cf6",
  Tool: "#06b6d4",
  Template: "#f59e0b",
};

/* ─── Thumbnail / placeholder ────────────────────────────────────────────── */

function Thumbnail({
  src,
  title,
  category,
}: {
  src: string;
  title: string;
  category: string;
}) {
  const accent = categoryAccent[category] ?? "#6366f1";

  return (
    <div
      className="relative w-full aspect-[16/9] overflow-hidden bg-background-elevated flex-shrink-0"
      aria-hidden="true"
    >
      {/* Fallback placeholder background */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          background: `linear-gradient(135deg, #13131f 0%, #0f0f1a 100%)`,
        }}
      >
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Centre glow */}
        <div
          className="absolute w-24 h-24 rounded-full opacity-20"
          style={{
            background: `radial-gradient(circle, ${accent} 0%, transparent 70%)`,
            filter: "blur(20px)",
          }}
        />
        {/* Category initial */}
        <span
          className="relative text-3xl font-bold tracking-tighter opacity-20 select-none"
          style={{ color: accent }}
        >
          {category[0]}
        </span>
      </div>

      {/* Real image overlay */}
      {src && (
        <Image
          src={src}
          alt={`${title} cover image`}
          fill
          className="object-cover"
        />
      )}

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}

/* ─── ProjectCard ────────────────────────────────────────────────────────── */

interface ProjectCardProps {
  project: Project;
  className?: string;
  /** If true renders a slightly more compact layout — used in related projects */
  compact?: boolean;
}

export function ProjectCard({
  project,
  className,
  compact = false,
}: ProjectCardProps) {
  const accent = categoryAccent[project.category] ?? "#6366f1";
  const avail =
    availabilityConfig[project.availability] ?? availabilityConfig["Available"];

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn(
        "group relative flex flex-col h-full rounded-2xl border border-border-default",
        "bg-background-card overflow-hidden",
        "hover:border-accent/30 hover:shadow-card-hover",
        "transition-all duration-300",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className
      )}
      style={{
        boxShadow: "0 1px 0 rgba(255,255,255,0.03), 0 4px 24px rgba(0,0,0,0.35)",
      }}
    >
      {/* Top accent stripe */}
      <div
        className="h-0.5 w-full flex-shrink-0"
        style={{
          background: `linear-gradient(90deg, ${accent}80 0%, ${accent}18 55%, transparent 100%)`,
        }}
      />

      {/* Card shine overlay on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl z-10"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.022) 0%, transparent 55%)",
        }}
        aria-hidden="true"
      />

      {/* Thumbnail */}
      {!compact && (
        <Thumbnail
          src={project.thumbnail}
          title={project.title}
          category={project.category}
        />
      )}

      {/* Body */}
      <div className="relative flex flex-col flex-1 p-5 sm:p-6">
        {/* Top row: category + availability */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium text-text-muted tracking-wide">
            {project.category}
          </span>
          <Badge variant={avail.variant} size="sm" dot={avail.dot}>
            {project.availability}
          </Badge>
        </div>

        {/* Title */}
        <h3
          className={cn(
            "font-semibold text-text-primary mb-2",
            "group-hover:text-accent-soft transition-colors duration-200",
            compact ? "text-sm" : "text-base"
          )}
        >
          {project.title}
        </h3>

        {/* Short description */}
        <p
          className={cn(
            "text-text-secondary leading-relaxed flex-1 mb-5",
            compact ? "text-xs line-clamp-2" : "text-sm line-clamp-3"
          )}
        >
          {project.shortDescription}
        </p>

        {/* Bottom row: price + CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-border-subtle">
          {/* <span className="text-sm font-semibold text-text-primary">
            {project.priceText}
          </span> */}
          <span
            className="inline-flex items-center gap-1.5 text-xs font-medium text-accent-soft
                       group-hover:gap-2.5 transition-all duration-200"
          >
            View Details
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
          </span>
        </div>
      </div>
    </Link>
  );
}