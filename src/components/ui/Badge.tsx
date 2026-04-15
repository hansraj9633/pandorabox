import { cn } from "@/lib/utils";
import type { BadgeVariant } from "@/types";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: "sm" | "md";
  dot?: boolean;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-background-elevated text-text-secondary border-border-bright",
  blue:    "bg-accent/10 text-accent-soft border-accent/20",
  violet:  "bg-violet-accent/10 text-violet-300 border-violet-accent/20",
  green:   "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  amber:   "bg-amber-500/10 text-amber-400 border-amber-500/20",
  red:     "bg-red-500/10 text-red-400 border-red-500/20",
};

const dotColors: Record<BadgeVariant, string> = {
  default: "bg-text-muted",
  blue:    "bg-accent-soft",
  violet:  "bg-violet-400",
  green:   "bg-emerald-400",
  amber:   "bg-amber-400",
  red:     "bg-red-400",
};

const sizeStyles = {
  sm: "text-2xs px-2 py-0.5 gap-1 rounded-lg",
  md: "text-xs px-2.5 py-1 gap-1.5 rounded-xl",
};

export function Badge({
  children,
  variant = "default",
  size = "md",
  dot = false,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-medium border",
        "transition-colors duration-150",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {dot && (
        <span
          className={cn(
            "shrink-0 rounded-full",
            size === "sm" ? "w-1 h-1" : "w-1.5 h-1.5",
            dotColors[variant]
          )}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}
