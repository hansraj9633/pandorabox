"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Box } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/config";
import { Container } from "@/components/ui/Container";

/* ─── Logo ───────────────────────────────────────────────────────────────── */

function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
      aria-label={siteConfig.name}
    >
      {/* Icon mark */}
      <span className="relative flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-br from-accent to-violet-accent shadow-glow-sm transition-shadow duration-300 group-hover:shadow-glow-md">
        <Box className="w-4 h-4 text-white" strokeWidth={2} />
      </span>

      {/* Wordmark */}
      <span className="font-semibold text-base tracking-tight text-text-primary">
        <span className="gradient-text">Pandora</span>
        <span className="text-text-secondary font-normal">Box</span>
      </span>
    </Link>
  );
}

/* ─── Desktop Nav Link ───────────────────────────────────────────────────── */

interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
  onClick?: () => void;
}

function DesktopNavLink({ href, label, isActive }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "relative text-sm font-medium transition-colors duration-200",
        "px-1 py-1 nav-link-underline",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm",
        isActive ? "text-text-primary active" : "text-text-secondary hover:text-text-primary"
      )}
    >
      {label}
      {isActive && (
        <motion.span
          layoutId="nav-active-dot"
          className="absolute -bottom-0.5 left-0 right-0 h-px bg-gradient-to-r from-accent to-violet-accent rounded-full"
          transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
        />
      )}
    </Link>
  );
}

/* ─── Mobile Nav Link ────────────────────────────────────────────────────── */

function MobileNavLink({ href, label, isActive, onClick }: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "flex items-center w-full px-4 py-3 text-sm font-medium rounded-xl",
        "transition-all duration-150",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
        isActive
          ? "text-text-primary bg-accent/10 border border-accent/20"
          : "text-text-secondary hover:text-text-primary hover:bg-background-elevated border border-transparent"
      )}
    >
      {label}
    </Link>
  );
}

/* ─── Navbar ─────────────────────────────────────────────────────────────── */

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for glass effect intensification
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* ── Main nav bar ── */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50",
          "transition-all duration-300",
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border-default shadow-nav"
            : "bg-transparent"
        )}
        style={{ height: "var(--nav-height)" }}
      >
        <Container className="h-full flex items-center justify-between">
          {/* Left: Logo */}
          <Logo />

          {/* Center: Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-6"
            aria-label="Primary navigation"
          >
            {siteConfig.nav.map((item) => (
              <DesktopNavLink
                key={item.href}
                href={item.href}
                label={item.label}
                isActive={isActive(item.href)}
              />
            ))}
          </nav>

          {/* Right: CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            {/* Desktop CTA */}
            <Link
              href="/contact"
              className={cn(
                "hidden sm:inline-flex items-center gap-2",
                "h-9 px-4 text-sm font-medium rounded-xl",
                "bg-gradient-to-r from-accent to-violet-accent text-white",
                "shadow-button-glow hover:shadow-glow-md hover:brightness-110",
                "transition-all duration-200 active:scale-[0.97]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              )}
            >
              Get in Touch
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className={cn(
                "md:hidden flex items-center justify-center",
                "w-9 h-9 rounded-xl",
                "text-text-secondary hover:text-text-primary",
                "bg-background-elevated border border-border-bright",
                "transition-colors duration-150",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              )}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X className="w-4 h-4" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu className="w-4 h-4" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </Container>
      </header>

      {/* ── Mobile Menu Overlay ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-background/60 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />

            {/* Panel */}
            <motion.div
              key="mobile-panel"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
              className={cn(
                "fixed left-4 right-4 z-50 md:hidden",
                "rounded-2xl border border-border-default",
                "bg-background-elevated/95 backdrop-blur-xl",
                "shadow-[0_8px_40px_rgba(0,0,0,0.6)]",
                "p-4 space-y-1"
              )}
              style={{ top: "calc(var(--nav-height) + 8px)" }}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              {siteConfig.nav.map((item) => (
                <MobileNavLink
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  isActive={isActive(item.href)}
                  onClick={() => setMobileOpen(false)}
                />
              ))}

              {/* Mobile CTA */}
              <div className="pt-2 border-t border-border-subtle mt-2">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center justify-center w-full",
                    "h-10 px-4 text-sm font-medium rounded-xl",
                    "bg-gradient-to-r from-accent to-violet-accent text-white",
                    "shadow-button-glow hover:brightness-110",
                    "transition-all duration-200"
                  )}
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
