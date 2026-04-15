"use client";

import { cn } from "@/lib/utils";

interface PageBackgroundProps {
  /** Visual variant of the background glow */
  variant?: "hero" | "subtle" | "none";
  className?: string;
}

/**
 * Renders the shared page background system:
 * - Base dark canvas
 * - Optional radial gradient glow (hero vs subtle)
 * - Noise grain overlay for depth
 * - Fixed so it sits behind all page content
 */
export function PageBackground({
  variant = "subtle",
  className,
}: PageBackgroundProps) {
  return (
    <div
      className={cn("fixed inset-0 pointer-events-none z-[-1] overflow-hidden", className)}
      aria-hidden="true"
    >
      {/* Base canvas */}
      <div className="absolute inset-0 bg-background" />

      {/* Hero glow — large top-center bloom */}
      {variant === "hero" && (
        <>
          <div
            className="absolute inset-x-0 top-0 h-[70vh]"
            style={{
              background:
                "radial-gradient(ellipse 90% 60% at 50% -5%, rgba(99,102,241,0.16) 0%, rgba(139,92,246,0.06) 40%, transparent 70%)",
            }}
          />
          {/* Side glow left */}
          <div
            className="absolute -left-32 top-1/4 w-96 h-96 rounded-full opacity-30"
            style={{
              background:
                "radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
          {/* Side glow right */}
          <div
            className="absolute -right-32 top-1/3 w-80 h-80 rounded-full opacity-20"
            style={{
              background:
                "radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
        </>
      )}

      {/* Subtle glow — soft ambient bloom */}
      {variant === "subtle" && (
        <div
          className="absolute inset-x-0 top-0 h-[50vh]"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% -5%, rgba(99,102,241,0.08) 0%, transparent 65%)",
          }}
        />
      )}

      {/* Noise grain — adds texture without clutter */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "256px 256px",
        }}
      />

      {/* Subtle grid dots — very faint structural guide */}
      <div
        className="absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
}
