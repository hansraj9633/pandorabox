"use client";

import Link from "next/link";
import { Github, Twitter, Box, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/config";
import { Container } from "@/components/ui/Container";

const footerLinks = [
  {
    group: "Navigate",
    links: siteConfig.nav,
  },
  {
    group: "Connect",
    links: [
      { label: "GitHub", href: siteConfig.social.github, external: true },
      { label: "Twitter / X", href: siteConfig.social.twitter, external: true },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border-default mt-auto">
      {/* Subtle top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(99,102,241,0.4) 50%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      <Container className="py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* Brand column */}
          <div className="space-y-4 md:col-span-1">
            {/* Logo */}
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
              aria-label={siteConfig.name}
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-br from-accent to-violet-accent shadow-glow-sm">
                <Box className="w-4 h-4 text-white" strokeWidth={2} />
              </span>
              <span className="font-semibold text-base tracking-tight">
                <span className="gradient-text">Pandora</span>
                <span className="text-text-secondary font-normal">Box</span>
              </span>
            </Link>

            <p className="text-sm text-text-muted leading-relaxed max-w-xs">
              {siteConfig.tagline}. Independent builds — crafted with care.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2 pt-1">
              <SocialIcon
                href={siteConfig.social.github}
                label="GitHub"
                icon={<Github className="w-3.5 h-3.5" />}
              />
              <SocialIcon
                href={siteConfig.social.twitter}
                label="Twitter"
                icon={<Twitter className="w-3.5 h-3.5" />}
              />
            </div>
          </div>

          {/* Link groups */}
          <div className="grid grid-cols-2 gap-8 md:col-span-2">
            {footerLinks.map((group) => (
              <div key={group.group} className="space-y-3">
                <p className="text-xs font-semibold tracking-widest uppercase text-text-muted">
                  {group.group}
                </p>
                <ul className="space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className={cn(
                          "inline-flex items-center gap-1 text-sm text-text-secondary",
                          "hover:text-text-primary transition-colors duration-150",
                          "focus-visible:outline-none focus-visible:text-accent-soft"
                        )}
                      >
                        {link.label}
                        {link.external && (
                          <ArrowUpRight className="w-3 h-3 opacity-50" />
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="divider mt-10 mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-text-muted">
          <p>
            &copy; {year}{" "}
            <span className="text-text-secondary font-medium">
              {siteConfig.name}
            </span>
            . All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Built with precision.
          </p>
        </div>
      </Container>
    </footer>
  );
}

/* ─── Social Icon Button ─────────────────────────────────────────────────── */

function SocialIcon({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        "flex items-center justify-center w-8 h-8 rounded-xl",
        "bg-background-elevated border border-border-bright text-text-muted",
        "hover:bg-background-card hover:border-accent/30 hover:text-accent-soft",
        "transition-all duration-150",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      )}
    >
      {icon}
    </a>
  );
}
