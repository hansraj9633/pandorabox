import type { ReactNode } from "react";

/* ─── Layout & Navigation ───────────────────────────────────────────────── */

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface LayoutProps {
  children: ReactNode;
}

/* ─── Project Data Model ─────────────────────────────────────────────────── */

/** Display status shown on cards and detail pages */
export type ProjectAvailability = "Available" | "Customizable" | "Coming Soon";

/** Internal build status */
export type ProjectStatus = "live" | "beta" | "archived" | "wip";

/** Category used for filtering on the projects listing */
export type ProjectCategory = "App" | "Website" | "Tool" | "Template";

export interface ProjectTag {
  label: string;
  color?: "default" | "blue" | "violet" | "green" | "amber";
}

export interface Project {
  // ── Identity ──────────────────────────────────────────────────────────────
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  /** One-liner shown on cards */
  tagline: string;
  /** 2–3 sentence card description */
  shortDescription: string;
  /** Rich paragraphs for detail page */
  fullDescription: string;

  // ── Media ─────────────────────────────────────────────────────────────────
  thumbnail: string;
  images: string[];

  // ── Metadata ──────────────────────────────────────────────────────────────
  featured: boolean;
  status: ProjectStatus;
  availability: ProjectAvailability;
  tags: ProjectTag[];

  // ── Pricing & Contact ────────────────────────────────────────────────────
  priceText: string;
  contactPrefillMessage: string;

  // ── Technical ────────────────────────────────────────────────────────────
  techStack: string[];
  features: string[];

  // ── Links ─────────────────────────────────────────────────────────────────
  demoUrl?: string;

  // ── Timestamps ────────────────────────────────────────────────────────────
  createdAt: string;
  updatedAt?: string;

  // ── Legacy fields kept for backward compat with home-data ─────────────────
  /** @deprecated use shortDescription */
  description?: string;
  /** @deprecated use fullDescription */
  longDescription?: string;
  /** @deprecated use thumbnail */
  coverImage?: string;
  /** @deprecated use images */
  screenshots?: string[];
  /** @deprecated use techStack */
  tech?: string[];
  /** @deprecated use demoUrl */
  liveUrl?: string;
}

/* ─── UI Component Props ─────────────────────────────────────────────────── */

export type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
export type ButtonSize = "sm" | "md" | "lg";

export type BadgeVariant = "default" | "blue" | "violet" | "green" | "amber" | "red";

/* ─── SEO ────────────────────────────────────────────────────────────────── */

export interface PageMeta {
  title: string;
  description: string;
  image?: string;
  noIndex?: boolean;
}
