import type { Project } from "@/types";

export const projects: Project[] = [
//   {
//     id: "1",
//     slug: "saas-starter-kit",
//     title: "SaaS Starter Kit",
//     category: "App",
//     tagline: "A production-ready Next.js SaaS boilerplate — ship in days, not weeks.",
//     shortDescription:
//       "Fully configured Next.js 14 boilerplate with auth, billing hooks, dashboard layout, and a dark premium UI. Buy once, customize, and launch your product fast.",
//     fullDescription: `Building a SaaS product from scratch means weeks of setup before you write a single line of business logic. This starter kit eliminates that entirely.

// The SaaS Starter Kit ships with a fully working authentication flow, a structured dashboard layout, billing integration hooks ready for Stripe, and a clean dark UI built on Tailwind CSS and Framer Motion. Every component is typed with TypeScript and follows a scalable file structure you can extend without rewriting.

// Whether you're validating an idea quickly or building a serious product, this kit gives you a professional foundation on day one. No fighting with boilerplate. No architectural decisions to make before you start. Just a clean codebase ready for your features.`,
//     thumbnail: "/projects/saas-starter-kit/thumbnail.png",
//     images: [
//       "/projects/saas-starter-kit/preview-1.png",
//       "/projects/saas-starter-kit/preview-2.png",
//       "/projects/saas-starter-kit/preview-3.png",
//     ],
//     featured: true,
//     status: "live",
//     availability: "Available",
//     tags: [
//       { label: "Next.js", color: "blue" },
//       { label: "TypeScript", color: "violet" },
//       { label: "SaaS", color: "green" },
//     ],
//     priceText: "Starting at ₹4,999",
//     contactPrefillMessage:
//       "Hi, I'm interested in purchasing the SaaS Starter Kit. Could you share more details about what's included and how to get started?",
//     techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "NextAuth.js", "Prisma", "PostgreSQL"],
//     features: [
//       "Complete authentication system with email/password and OAuth",
//       "Protected dashboard layout with sidebar navigation",
//       "Billing hooks pre-configured for Stripe integration",
//       "Dark premium UI with consistent design system",
//       "Role-based access control foundation",
//       "API route structure with middleware patterns",
//       "Full TypeScript coverage with strict mode",
//       "Optimized for Vercel deployment out of the box",
//     ],
//     demoUrl: "https://saas-demo.pandorabox.dev",
//     createdAt: "2024-06-01",
//   },

  // added Chronicle app
  {
    id: "1",
    slug: "Chronicle",
    title: "Chronicle",
    category: "App",
    tagline: "Because every memory deserves a place!",
    shortDescription:
      "It helps you capture moments, preserve memories, write reflections, and beautifully document your personal journey every day.",
    fullDescription: `Chronicle is a simple and beautiful personal journaling app designed to help you capture moments, preserve memories, and document your life’s journey in one private space. Whether it’s a special memory, a daily reflection, a personal milestone, or just a thought you don’t want to forget, Chronicle gives you a calm and organized place to write it all down.

With a clean and user-friendly experience, Chronicle makes journaling feel effortless and meaningful. You can record your thoughts, save important life moments, reflect on your day, and build a personal collection of memories that stays with you over time. From everyday experiences to unforgettable milestones, every entry becomes part of your unique story.

Chronicle is built for anyone who wants to stay connected with their thoughts, emotions, and memories. Whether you use it as a daily journal, a memory keeper, a reflection diary, or a personal timeline, the app helps you look back on where you’ve been and appreciate how far you’ve come.

Chronicle is more than just a journal — it’s your personal space to remember, reflect, and grow. Capture today, preserve forever.`,
    thumbnail: "/projects/chronicle/cover.png",
    coverImage: "/projects/chronicle/cover.png",
    images: [
      "/projects/chronicle/preview-1.png",
      "/projects/chronicle/preview-2.png",
      "/projects/chronicle/preview-3.png",
    ],
    featured: true,
    status: "live",
    availability: "Available",
    tags: [
      { label: "Expo", color: "blue" },
      { label: "React Native", color: "violet" },
      { label: "Journal App", color: "green" },
    ],
    priceText: "₹0",
    contactPrefillMessage:
      "Hi, I'm interested in purchasing the Chronicle App. Could you share more details about what's included and how to get started?",
    techStack: ["Expo", "React Native", "SQLite", "JavaScript", "Node.js", "npm"],
    features: [
      "Create and save personal journal entries with ease",
      "Capture memories, thoughts, reflections, and milestones",
      "Numerous themes for creativity.",
      "Fingerprint lock protected app.",
      "No third-party involvement, no data shared.",
      "Different types of export facilities.",
      "Alarm system to remind you to write every day.",
      "Share to Google Drive, Medium, and Substack.",
    ],
    demoUrl: "https://www.google.com",
    createdAt: "2024-06-01",
  },

//   {
//     id: "2",
//     slug: "link-analytics-tool",
//     title: "Link Analytics Tool",
//     category: "Tool",
//     tagline: "Self-hosted URL shortener with click analytics. Privacy-first, zero tracking.",
//     shortDescription:
//       "Lightweight URL shortener with a clean analytics dashboard. Track clicks, locations, and referrers — fully self-hosted with no third-party data sharing.",
//     fullDescription: `Most URL shorteners come with opinionated tracking, vendor lock-in, and limited control. This tool is different — you own the data, you run the server, and you get a clean interface to view exactly what you need.

// The Link Analytics Tool provides a minimal URL shortening service with a real-time analytics dashboard. It tracks click counts, geographic distribution, referrer sources, and device types. The dashboard is built for clarity — no overwhelming graphs, just the numbers that matter.

// The codebase is intentionally lean. A single Next.js app with a lightweight database schema, designed to run on any Node.js-compatible host. Configuration is straightforward and well-documented. Set it up in under an hour.`,
//     thumbnail: "/projects/link-analytics/thumbnail.png",
//     images: [
//       "/projects/link-analytics/preview-1.png",
//       "/projects/link-analytics/preview-2.png",
//     ],
//     featured: true,
//     status: "live",
//     availability: "Available",
//     tags: [
//       { label: "Tool", color: "violet" },
//       { label: "Analytics", color: "amber" },
//       { label: "Self-Hosted", color: "green" },
//     ],
//     priceText: "Starting at ₹2,499",
//     contactPrefillMessage:
//       "Hi, I'm interested in the Link Analytics Tool. Can you share setup requirements and licensing details?",
//     techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Prisma", "SQLite / PostgreSQL", "Vercel"],
//     features: [
//       "Custom short URL generation with optional aliases",
//       "Real-time click tracking dashboard",
//       "Geographic click distribution by country",
//       "Referrer source tracking and grouping",
//       "Device and browser breakdown",
//       "Link expiry and password protection options",
//       "Clean REST API for programmatic link creation",
//       "One-click Vercel deployment",
//     ],
//     demoUrl: "https://links-demo.pandorabox.dev",
//     createdAt: "2024-07-15",
//   },
//   {
//     id: "3",
//     slug: "portfolio-pro-template",
//     title: "Portfolio Pro Template",
//     category: "Template",
//     tagline: "A high-conversion developer portfolio template built for first impressions.",
//     shortDescription:
//       "Sleek, fast, and fully customizable personal portfolio template for developers and designers. Ships with dark and light modes, smooth animations, and project showcase support.",
//     fullDescription: `Your portfolio is often the first thing a potential client or employer sees. This template ensures that first impression is exceptional.

// Portfolio Pro is a meticulously designed personal portfolio template with a focus on hierarchy, readability, and conversion. It includes a hero section, skills display, project showcase grid, testimonials, and a contact form — all pre-styled and ready to populate with your content.

// Both dark and light modes are included and switch automatically based on system preference. Animations are subtle and purposeful, not distracting. The template is built with Next.js for fast loads and SEO, and can be deployed to Vercel in minutes. Full source code and a setup guide are included.`,
//     thumbnail: "/projects/portfolio-pro/thumbnail.png",
//     images: [
//       "/projects/portfolio-pro/preview-1.png",
//       "/projects/portfolio-pro/preview-2.png",
//       "/projects/portfolio-pro/preview-3.png",
//     ],
//     featured: true,
//     status: "live",
//     availability: "Available",
//     tags: [
//       { label: "Template", color: "blue" },
//       { label: "Portfolio", color: "violet" },
//     ],
//     priceText: "Starting at ₹1,499",
//     contactPrefillMessage:
//       "Hi, I'd like to purchase the Portfolio Pro Template. Could you confirm what's included and how I receive the files?",
//     techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion"],
//     features: [
//       "Responsive dark and light mode support",
//       "Hero, About, Skills, Projects, and Contact sections",
//       "Smooth scroll-triggered animations",
//       "Project showcase grid with detail pages",
//       "SEO-optimized metadata structure",
//       "Contact form with validation",
//       "Vercel-ready deployment configuration",
//       "Well-commented, clean codebase",
//     ],
//     demoUrl: "https://portfolio-demo.pandorabox.dev",
//     createdAt: "2024-08-10",
//   },
//   {
//     id: "4",
//     slug: "invoice-generator-app",
//     title: "Invoice Generator App",
//     category: "App",
//     tagline: "Create, preview, and download professional PDF invoices in seconds.",
//     shortDescription:
//       "Browser-based invoice generator that produces clean, branded PDF invoices. No account needed, no data stored — everything runs client-side.",
//     fullDescription: `Freelancers and small businesses often resort to clunky invoice software or manual spreadsheets. This app solves that cleanly.

// The Invoice Generator App is a fully client-side web application that lets you fill in your business details, client information, line items, tax, and discounts — then instantly preview and download a professional PDF invoice. No server, no account, no data stored.

// The PDF output uses a clean typographic layout that looks professional in any client's inbox. Business details are persisted in browser local storage so you don't re-enter them every time. The app supports multi-currency and custom payment terms. Everything runs in the browser, making it fast, private, and deployable to any static host.`,
//     thumbnail: "/projects/invoice-generator/thumbnail.png",
//     images: [
//       "/projects/invoice-generator/preview-1.png",
//       "/projects/invoice-generator/preview-2.png",
//     ],
//     featured: false,
//     status: "live",
//     availability: "Available",
//     tags: [
//       { label: "App", color: "blue" },
//       { label: "PDF", color: "amber" },
//       { label: "Freelancer", color: "green" },
//     ],
//     priceText: "Starting at ₹1,999",
//     contactPrefillMessage:
//       "Hi, I'm interested in the Invoice Generator App. Can you share more about customization options and how branding can be adjusted?",
//     techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "React-PDF", "Zustand"],
//     features: [
//       "Real-time invoice preview as you type",
//       "One-click PDF download with clean typography",
//       "Business profile saved locally across sessions",
//       "Multi-currency support with custom symbols",
//       "Line items with quantity, rate, and tax per row",
//       "Discount, tax, and subtotal auto-calculation",
//       "Custom invoice number sequences",
//       "No account or server required — 100% client-side",
//     ],
//     createdAt: "2024-09-05",
//   },
//   {
//     id: "5",
//     slug: "landing-page-ui-kit",
//     title: "Landing Page UI Kit",
//     category: "Website",
//     tagline: "A modular UI kit with 20+ sections to build any landing page in hours.",
//     shortDescription:
//       "Premium Tailwind CSS and React component library with over 20 pre-built, production-ready landing page sections — hero, pricing, testimonials, FAQ, and more.",
//     fullDescription: `Every product needs a landing page, and every landing page needs the same core sections. This kit gives you all of them, polished and ready to compose.

// The Landing Page UI Kit includes 20+ React and Tailwind CSS components covering every common section type: hero variants, feature grids, pricing tables, testimonial blocks, FAQ accordions, CTA sections, and more. Every component is designed with consistent spacing, typography, and interaction patterns.

// Components are copy-paste ready — no import hierarchy to untangle, no build configuration to adjust. They work in any Next.js or React project using Tailwind CSS. Dark mode variants are included for every section. The kit is regularly updated with new sections based on real-world project needs.`,
//     thumbnail: "/projects/landing-ui-kit/thumbnail.png",
//     images: [
//       "/projects/landing-ui-kit/preview-1.png",
//       "/projects/landing-ui-kit/preview-2.png",
//       "/projects/landing-ui-kit/preview-3.png",
//     ],
//     featured: false,
//     status: "live",
//     availability: "Customizable",
//     tags: [
//       { label: "UI Kit", color: "violet" },
//       { label: "Tailwind", color: "blue" },
//       { label: "Landing Page", color: "green" },
//     ],
//     priceText: "Starting at ₹2,999",
//     contactPrefillMessage:
//       "Hi, I'm interested in the Landing Page UI Kit. Can you tell me what sections are included and whether custom sections can be commissioned?",
//     techStack: ["React 18", "TypeScript", "Tailwind CSS", "Framer Motion", "Next.js 14"],
//     features: [
//       "20+ production-ready section components",
//       "Hero, features, pricing, testimonials, FAQ, CTA variants",
//       "Dark and light mode for every section",
//       "Consistent spacing and typography system",
//       "Fully typed TypeScript component props",
//       "Framer Motion animation variants per section",
//       "Mobile-first responsive layouts",
//       "Copy-paste ready — no special setup required",
//     ],
//     demoUrl: "https://ui-kit-demo.pandorabox.dev",
//     createdAt: "2024-10-20",
//   },
//   {
//     id: "6",
//     slug: "waitlist-app",
//     title: "Waitlist App",
//     category: "App",
//     tagline: "Launch a waitlist page with referral tracking in under an hour.",
//     shortDescription:
//       "Minimal waitlist web app with referral link sharing, position tracking, and a clean admin view. Ideal for validating a product idea before building.",
//     fullDescription: `Before you build, you need to know people want it. A well-designed waitlist does more than collect emails — it creates anticipation and gives early users a stake in the launch.

// The Waitlist App provides a clean, customizable waitlist landing page with referral mechanics built in. Each signee gets a unique referral link. When someone signs up through that link, both the referrer and the new user move up the queue. This creates organic word-of-mouth with a tangible incentive.

// The admin view shows total signups, top referrers, and daily growth. The stack is minimal — a Next.js frontend with a lightweight database for storing entries. The page copy, color scheme, and logo are all configurable through a single config file. Ready to deploy in under an hour.`,
//     thumbnail: "/projects/waitlist-app/thumbnail.png",
//     images: [
//       "/projects/waitlist-app/preview-1.png",
//       "/projects/waitlist-app/preview-2.png",
//     ],
//     featured: false,
//     status: "beta",
//     availability: "Customizable",
//     tags: [
//       { label: "App", color: "blue" },
//       { label: "Growth", color: "green" },
//       { label: "Beta", color: "amber" },
//     ],
//     priceText: "Starting at ₹1,799",
//     contactPrefillMessage:
//       "Hi, I'm interested in the Waitlist App. Can you explain the referral mechanics and how the admin panel works?",
//     techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL / Supabase"],
//     features: [
//       "Beautiful, customizable waitlist landing page",
//       "Unique referral link generation per signup",
//       "Real-time queue position display for signees",
//       "Admin dashboard with growth and referral analytics",
//       "Email notification on signup (optional, SMTP configurable)",
//       "CSV export of waitlist entries",
//       "Single config file for all branding and copy changes",
//       "Vercel + Supabase deployment guide included",
//     ],
//     createdAt: "2024-11-08",
//   },
];

export function getAllProjects(): Project[] {
  return [...projects].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug);
}

export function getRelatedProjects(
  currentSlug: string,
  category: string,
  limit = 3
): Project[] {
  const same = projects.filter(
    (p) => p.slug !== currentSlug && p.category === category
  );
  if (same.length >= limit) return same.slice(0, limit);
  const others = projects.filter(
    (p) => p.slug !== currentSlug && p.category !== category
  );
  return [...same, ...others].slice(0, limit);
}