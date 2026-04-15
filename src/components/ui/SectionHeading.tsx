"use client";

import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/motion/FadeIn";

interface SectionHeadingProps {
  /** Small label shown above the heading */
  eyebrow?: string;
  title: string;
  /** Highlighted portion of the title (rendered as gradient text) */
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  /** Whether to animate on scroll */
  animate?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
  className,
  animate = true,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  const renderTitle = () => {
    if (!highlight) return title;
    const parts = title.split(highlight);
    return (
      <>
        {parts[0]}
        <span className="gradient-text">{highlight}</span>
        {parts[1]}
      </>
    );
  };

  const content = (
    <div
      className={cn(
        "space-y-4",
        isCenter && "text-center items-center",
        "flex flex-col",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase",
            "text-accent-soft",
            !isCenter && "self-start"
          )}
        >
          <span
            className="inline-block w-4 h-px bg-gradient-to-r from-accent to-violet-accent opacity-80"
            aria-hidden="true"
          />
          {eyebrow}
          <span
            className="inline-block w-4 h-px bg-gradient-to-r from-violet-accent to-accent opacity-80"
            aria-hidden="true"
          />
        </span>
      )}

      <h2
        className={cn(
          "text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight",
          "heading-gradient"
        )}
      >
        {renderTitle()}
      </h2>

      {description && (
        <p
          className={cn(
            "text-text-secondary text-base sm:text-lg leading-relaxed",
            isCenter && "max-w-2xl mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );

  if (!animate) return content;

  return <FadeIn>{content}</FadeIn>;
}
