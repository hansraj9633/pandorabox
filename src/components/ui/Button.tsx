"use client";

import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ButtonVariant, ButtonSize } from "@/types";

/* ─── Variant & Size Maps ─────────────────────────────────────────────────── */

const variantStyles: Record<ButtonVariant, string> = {
  primary: [
    "bg-gradient-to-r from-accent to-violet-accent text-white",
    "shadow-button-glow",
    "hover:shadow-glow-md hover:brightness-110",
    "active:scale-[0.98]",
    "border border-transparent",
  ].join(" "),

  secondary: [
    "bg-background-elevated text-text-primary",
    "border border-border-bright",
    "hover:bg-background-card hover:border-accent/40 hover:text-text-primary",
    "active:scale-[0.98]",
  ].join(" "),

  outline: [
    "bg-transparent text-accent-soft",
    "border border-accent/30",
    "hover:bg-accent/8 hover:border-accent/60",
    "active:scale-[0.98]",
  ].join(" "),

  ghost: [
    "bg-transparent text-text-secondary",
    "border border-transparent",
    "hover:bg-background-elevated hover:text-text-primary",
    "active:scale-[0.98]",
  ].join(" "),
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-8 px-3.5 text-xs gap-1.5 rounded-xl",
  md: "h-10 px-5 text-sm gap-2 rounded-xl",
  lg: "h-12 px-7 text-sm gap-2.5 rounded-2xl",
};

/* ─── Types ──────────────────────────────────────────────────────────────── */

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

/* ─── Component ──────────────────────────────────────────────────────────── */

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      loading = false,
      icon,
      iconRight,
      className,
      children,
      href,
      ...props
    },
    ref
  ) => {
    const baseStyles = [
      "inline-flex items-center justify-center font-medium",
      "transition-all duration-200 ease-out",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      "disabled:opacity-40 disabled:pointer-events-none",
      "select-none whitespace-nowrap",
    ].join(" ");

    const classes = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

    const content = (
      <>
        {loading ? (
          <svg
            className="animate-spin h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        ) : (
          icon && <span className="shrink-0">{icon}</span>
        )}
        {children && <span>{children}</span>}
        {iconRight && !loading && <span className="shrink-0">{iconRight}</span>}
      </>
    );

    if (href !== undefined) {
      const isExternal = href.startsWith("http");
      return (
        <Link
          href={href}
          className={classes}
          ref={ref as React.Ref<HTMLAnchorElement>}
          {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        className={classes}
        ref={ref as React.Ref<HTMLButtonElement>}
        disabled={loading}
        {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
export type { ButtonProps };
