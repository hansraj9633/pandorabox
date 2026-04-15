# PandoraBox

> **Apps, Websites & Digital Builds** — A premium indie developer showcase.

---

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14+ (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Icons | Lucide React |
| Fonts | Geist Sans + Geist Mono |

---

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| Background | `#0a0a0f` | Base canvas |
| Background Secondary | `#0f0f1a` | Subtle surface |
| Background Card | `#15151f` | Card fills |
| Border Default | `#1e1e2e` | Card/container borders |
| Border Bright | `#2a2a3f` | Hover borders |
| Accent | `#6366f1` | Primary brand color (indigo) |
| Accent Soft | `#818cf8` | Lighter accent for text |
| Violet Accent | `#8b5cf6` | Secondary gradient end |
| Text Primary | `#f1f0ff` | Headings and key content |
| Text Secondary | `#a9a8c0` | Body text |
| Text Muted | `#5f5e7a` | Labels, captions |

---

## Font Setup

The project uses **Geist** (by Vercel) via the `geist` npm package — no Google Fonts dependency:

- `GeistSans` → `--font-geist-sans` → used as `font-sans`
- `GeistMono` → `--font-geist-mono` → used as `font-mono`

To swap fonts, update `src/app/layout.tsx` and `tailwind.config.ts`.

---

## Project Structure

```
src/
├── app/                     # Next.js App Router
│   ├── layout.tsx           # Root layout (Navbar, Footer, fonts)
│   ├── page.tsx             # Home page (/)
│   ├── not-found.tsx        # 404 page
│   ├── projects/
│   │   ├── page.tsx         # /projects listing
│   │   └── [slug]/
│   │       └── page.tsx     # /projects/[slug] detail
│   └── contact/
│       └── page.tsx         # /contact page
│
├── components/
│   ├── ui/                  # Reusable UI primitives
│   │   ├── Button.tsx       # Multi-variant button (supports href)
│   │   ├── Container.tsx    # Max-width layout wrapper
│   │   ├── SectionHeading.tsx  # Eyebrow + title + description
│   │   ├── Badge.tsx        # Status/tag badges
│   │   └── index.ts
│   ├── layout/              # Global layout components
│   │   ├── Navbar.tsx       # Fixed nav with mobile menu
│   │   ├── Footer.tsx       # Footer with links and social
│   │   ├── PageBackground.tsx  # Background glow/gradient system
│   │   └── index.ts
│   └── motion/              # Animation wrappers
│       ├── FadeIn.tsx       # Scroll-triggered fade + slide
│       ├── PageTransition.tsx  # Route-level transition
│       └── index.ts
│
├── lib/
│   ├── utils.ts             # cn(), slugify(), truncate() etc.
│   ├── config.ts            # Site-wide config (name, nav, social)
│   ├── metadata.ts          # buildMetadata() helper
│   └── projects.ts          # Static project data + helpers
│
├── styles/
│   └── globals.css          # Tailwind base + CSS custom properties
│
└── types/
    └── index.ts             # Shared TypeScript types
```

---

## Adding Projects

Edit `src/lib/projects.ts` and add entries to the `projects` array:

```ts
{
  id: "1",
  slug: "my-app",                        // → /projects/my-app
  title: "My App",
  tagline: "One-liner description.",
  description: "Card description.",
  status: "live",                        // live | beta | wip | archived
  tags: [{ label: "Web App", color: "blue" }],
  tech: ["Next.js", "TypeScript"],
  liveUrl: "https://myapp.com",
  featured: true,
  createdAt: "2024-06-01",
}
```

---

## Customization

| What | Where |
|---|---|
| Brand name / tagline | `src/lib/config.ts` |
| Color tokens | `tailwind.config.ts` + `src/styles/globals.css` |
| Nav links | `siteConfig.nav` in `src/lib/config.ts` |
| Social links | `siteConfig.social` in `src/lib/config.ts` |
| Fonts | `src/app/layout.tsx` |
| SEO metadata | `src/app/layout.tsx` + `src/lib/metadata.ts` |

---

## Deployment

Optimized for **Vercel** (zero-config):

```bash
vercel deploy
```

Or any Node.js host supporting Next.js 14+.
