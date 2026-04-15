import type { BadgeVariant } from "@/types";

/* ─── Featured Projects (placeholder — replace with real data from projects.ts) ── */

export interface HomeFeaturedProject {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  price: string;
  status: "live" | "beta" | "wip";
  statusLabel: string;
  statusVariant: BadgeVariant;
  accentColor: string; // Tailwind arbitrary or CSS value for top accent bar
}

export const featuredProjects: HomeFeaturedProject[] = [
  {
    id: "1",
    slug: "saas-starter-kit",
    title: "SaaS Starter Kit",
    category: "Web Application",
    description:
      "A fully configured Next.js SaaS boilerplate with authentication, billing hooks, dashboard layout, and dark UI — ready to customize and launch.",
    price: "From $149",
    status: "live",
    statusLabel: "Live",
    statusVariant: "green",
    accentColor: "#6366f1",
  },
  {
    id: "2",
    slug: "link-analytics-tool",
    title: "Link Analytics Tool",
    category: "Developer Tool",
    description:
      "Lightweight URL shortener and click analytics dashboard. Self-hosted, privacy-focused, and built with a clean minimal UI.",
    price: "From $79",
    status: "live",
    statusLabel: "Live",
    statusVariant: "green",
    accentColor: "#8b5cf6",
  },
  {
    id: "3",
    slug: "portfolio-pro-template",
    title: "Portfolio Pro Template",
    category: "Website Template",
    description:
      "A sleek, high-conversion personal portfolio template for developers and designers. One-time purchase, fully editable source code included.",
    price: "From $49",
    status: "beta",
    statusLabel: "Beta",
    statusVariant: "amber",
    accentColor: "#06b6d4",
  },
];

/* ─── What I Offer ─────────────────────────────────────────────────────────── */

export interface Offering {
  id: string;
  iconName: string; // references LucideIconName — resolved in component
  title: string;
  description: string;
}

export const offerings: Offering[] = [
  {
    id: "ready-made",
    iconName: "Boxes",
    title: "Ready-Made Projects",
    description:
      "Browse a curated catalogue of finished apps, templates, and tools. Buy once, get the full source — deploy immediately or adapt to your needs.",
  },
  {
    id: "custom-dev",
    iconName: "Code2",
    title: "Custom Development",
    description:
      "Have a specific idea or workflow in mind? I build tailored web apps and digital tools from the ground up, focused on quality and fast delivery.",
  },
  {
    id: "ui-websites",
    iconName: "Monitor",
    title: "UI & Website Solutions",
    description:
      "Modern, responsive websites and interface designs — from landing pages to product UIs. Crafted with attention to detail and built to perform.",
  },
];

/* ─── Why Work With Me ─────────────────────────────────────────────────────── */

export interface TrustPoint {
  id: string;
  iconName: string;
  title: string;
  description: string;
}

export const trustPoints: TrustPoint[] = [
  {
    id: "modern-ui",
    iconName: "Sparkles",
    title: "Modern UI",
    description:
      "Every project ships with a clean, well-structured interface — no templates, no shortcuts.",
  },
  {
    id: "practical-builds",
    iconName: "Wrench",
    title: "Practical Builds",
    description:
      "Focused on real-world usability. Code you can actually understand, extend, and maintain.",
  },
  {
    id: "fast-iteration",
    iconName: "Zap",
    title: "Fast Iteration",
    description:
      "Lean scope, clear communication, and quick turnaround — without sacrificing output quality.",
  },
  {
    id: "customizable",
    iconName: "Sliders",
    title: "Customizable Solutions",
    description:
      "Everything is built to be adapted. Need a different stack or feature set? Just ask.",
  },
];
