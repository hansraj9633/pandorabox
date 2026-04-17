import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  MessageCircle,
  Code2,
  FileText,
  Wrench,
  HeadphonesIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/FadeIn";
import {
  getProjectBySlug,
  getAllSlugs,
  getRelatedProjects,
} from "@/lib/projects";
import {
  getProjectWhatsAppLink,
  getCustomRequestWhatsAppLink,
} from "@/lib/whatsapp";
import { siteConfig } from "@/lib/config";
import type { BadgeVariant, Project } from "@/types";

/* ─── Static params ──────────────────────────────────────────────────────── */

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

/* ─── Metadata ───────────────────────────────────────────────────────────── */

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | ${siteConfig.name}`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} | ${siteConfig.name}`,
      description: project.shortDescription,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | ${siteConfig.name}`,
      description: project.shortDescription,
    },
  };
}

/* ─── Availability badge mapping ─────────────────────────────────────────── */

const availabilityConfig: Record<string, { variant: BadgeVariant; dot: boolean }> = {
  Available: { variant: "green", dot: true },
  Customizable: { variant: "blue", dot: false },
  "Coming Soon": { variant: "default", dot: false },
};

/* ─── Category accent colours ─────────────────────────────────────────────── */

const categoryAccent: Record<string, string> = {
  App: "#6366f1",
  Website: "#8b5cf6",
  Tool: "#06b6d4",
  Template: "#f59e0b",
};

/* ─────────────────────────────────────────────────────────────────────────
   SUB-COMPONENTS
   ───────────────────────────────────────────────────────────────────────── */

/* ── Hero Section ────────────────────────────────────────────────────────── */

function ProjectHero({ project }: { project: Project }) {
  const avail = availabilityConfig[project.availability] ?? availabilityConfig["Available"];
  const whatsappBuy = getProjectWhatsAppLink(project.contactPrefillMessage);
  const whatsappCustom = getCustomRequestWhatsAppLink(project.title);

  return (
    <div className="py-10 sm:py-14">
      {/* Back link */}
      <FadeIn>
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-xs text-text-muted hover:text-text-secondary transition-colors mb-8 group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform duration-150" />
          Back to Projects
        </Link>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        {/* Left: metadata */}
        <div>
          <FadeIn delay={0.05}>
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <Badge variant="default">{project.category}</Badge>
              <Badge variant={avail.variant} dot={avail.dot}>
                {project.availability}
              </Badge>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight heading-gradient mb-4">
              {project.title}
            </h1>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-6">
              {project.tagline}
            </p>
          </FadeIn>

          {/* <FadeIn delay={0.2}>
            <p className="text-2xl font-semibold text-text-primary mb-8">
              {project.priceText}
            </p>
          </FadeIn> */}

          <FadeIn delay={0.25}>
            <div className="flex flex-wrap gap-3">
              {/* <Button
                href={whatsappBuy}
                variant="primary"
                size="lg"
                icon={<MessageCircle className="w-4 h-4" />}
              >
                Contact to Buy
              </Button> */}

              {/* {project.demoUrl && (
                <Button
                  href={project.demoUrl}
                  variant="secondary"
                  size="lg"
                  icon={<ExternalLink className="w-4 h-4" />}
                >
                  View Demo
                </Button>
              )} */}

              {/* <Button href={whatsappCustom} variant="outline" size="lg">
                Request Custom Version
              </Button> */}

              <Button
                href="/downloads/chronicle.apk"
                variant="secondary"
                size="lg"
                >
                Download App
              </Button>

            </div>
          </FadeIn>
        </div>

        {/* Right: preview thumbnail */}
        <FadeIn delay={0.12} direction="left">
          <ThumbnailPanel project={project} />
        </FadeIn>
      </div>
    </div>
  );
}

/* ── Thumbnail Panel ─────────────────────────────────────────────────────── */

function ThumbnailPanel({ project }: { project: Project }) {
  const accent = categoryAccent[project.category] ?? "#6366f1";

  if (project.coverImage) {
    return (
      <div
        className="relative rounded-2xl border border-border-default overflow-hidden aspect-[4/4] bg-background-elevated"
        style={{ boxShadow: "0 1px 0 rgba(255,255,255,0.04), 0 8px 40px rgba(0,0,0,0.5)" }}
      >
        <Image
          src={project.coverImage}
          alt={`${project.title} cover preview`}
          fill
          className="object-cover"
          priority
        />
      </div>
    );
  }

  return (
    <div
      className="relative rounded-2xl border border-border-default overflow-hidden aspect-[16/10] bg-background-elevated"
      style={{ boxShadow: "0 1px 0 rgba(255,255,255,0.04), 0 8px 40px rgba(0,0,0,0.5)" }}
    >
      {/* Elegant placeholder background */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, #13131f 0%, #0f0f1a 100%)" }}
      />
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Glow */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          background: `radial-gradient(ellipse 60% 50% at 50% 50%, ${accent}22 0%, transparent 70%)`,
        }}
      />
      {/* Category initial */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className="text-8xl font-bold tracking-tighter select-none"
          style={{ color: accent, opacity: 0.12 }}
        >
          {project.category[0]}
        </span>
      </div>
      {/* Top accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5"
        style={{ background: `linear-gradient(90deg, ${accent}80 0%, ${accent}10 70%, transparent 100%)` }}
      />
    </div>
  );
}

/* ── Gallery ─────────────────────────────────────────────────────────────── */

function GallerySection({ project }: { project: Project }) {
  const accent = categoryAccent[project.category] ?? "#6366f1";
  if (!project.images || project.images.length === 0) return null;

  return (
    <FadeIn>
      <section className="py-10 border-t border-border-default">
        <h2 className="text-sm font-semibold text-text-muted tracking-widest uppercase mb-5">
          Preview
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {project.images.map((src, i) => (
            <div
              key={i}
              className="relative aspect-[8/16] rounded-xl overflow-hidden border border-border-default bg-background-elevated"
            >
              <Image
                src={src}
                alt={`${project.title} screenshot ${i + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
        {/* <p className="text-2xs text-text-faint mt-3">
          Add real screenshots to{" "}
          <code className="text-accent-soft">/public{project.images[0]}</code>
        </p> */}
      </section>
    </FadeIn>
  );
}

/* ── About Section ───────────────────────────────────────────────────────── */

function AboutSection({ project }: { project: Project }) {
  const paragraphs = project.fullDescription
    .split("\n\n")
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <FadeIn>
      <section className="py-10 border-t border-border-default">
        <h2 className="text-lg font-semibold text-text-primary mb-5">
          About This Project
        </h2>
        <div className="space-y-4 max-w-2xl">
          {paragraphs.map((para, i) => (
            <p key={i} className="text-text-secondary text-sm leading-relaxed">
              {para}
            </p>
          ))}
        </div>
      </section>
    </FadeIn>
  );
}

/* ── Features Section ────────────────────────────────────────────────────── */

function FeaturesSection({ project }: { project: Project }) {
  return (
    <FadeIn>
      <section className="py-10 border-t border-border-default">
        <h2 className="text-lg font-semibold text-text-primary mb-6">
          Key Features
        </h2>
        <Stagger staggerDelay={0.07}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.features.map((feature, i) => (
              <StaggerItem key={i}>
                <div className="flex items-start gap-3 p-4 rounded-xl border border-border-default bg-background-card hover:border-accent/20 transition-colors duration-200">
                  <CheckCircle2
                    className="w-4 h-4 text-accent-soft shrink-0 mt-0.5"
                    strokeWidth={2}
                  />
                  <span className="text-sm text-text-secondary leading-snug">
                    {feature}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </div>
        </Stagger>
      </section>
    </FadeIn>
  );
}

/* ── Tech Stack Section ──────────────────────────────────────────────────── */

function TechStackSection({ project }: { project: Project }) {
  return (
    <FadeIn>
      <section className="py-10 border-t border-border-default">
        <h2 className="text-lg font-semibold text-text-primary mb-5">
          Tech Stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 text-xs font-medium rounded-xl border border-border-bright bg-background-elevated text-text-secondary hover:border-accent/30 hover:text-text-primary transition-colors duration-150"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
    </FadeIn>
  );
}

/* ── What You Get Section ────────────────────────────────────────────────── */

// const whatYouGet = [
//   {
//     icon: Code2,
//     title: "Full Source Code",
//     description:
//       "Complete, well-structured codebase delivered as a zip archive or private repository invite.",
//   },
//   {
//     icon: FileText,
//     title: "Setup Documentation",
//     description:
//       "Step-by-step setup guide covering environment configuration, dependencies, and deployment.",
//   },
//   {
//     icon: Wrench,
//     title: "Customization Guide",
//     description:
//       "Notes on which files and variables to change for branding, content, and feature adjustments.",
//   },
//   {
//     icon: HeadphonesIcon,
//     title: "Post-Purchase Support",
//     description:
//       "Questions after purchase are answered via WhatsApp. Setup issues resolved within 48 hours.",
//   },
// ];

// function WhatYouGetSection() {
//   return (
//     <FadeIn>
//       <section className="py-10 border-t border-border-default">
//         <h2 className="text-lg font-semibold text-text-primary mb-6">
//           What You Get
//         </h2>
//         <Stagger staggerDelay={0.08}>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             {whatYouGet.map((item) => {
//               const Icon = item.icon;
//               return (
//                 <StaggerItem key={item.title}>
//                   <div className="flex items-start gap-4 p-5 rounded-2xl border border-border-default bg-background-card">
//                     <div className="shrink-0 flex items-center justify-center w-9 h-9 rounded-xl bg-accent/10 border border-accent/15 text-accent-soft">
//                       <Icon className="w-4 h-4" strokeWidth={1.75} />
//                     </div>
//                     <div className="space-y-1">
//                       <p className="text-sm font-semibold text-text-primary">
//                         {item.title}
//                       </p>
//                       <p className="text-xs text-text-secondary leading-relaxed">
//                         {item.description}
//                       </p>
//                     </div>
//                   </div>
//                 </StaggerItem>
//               );
//             })}
//           </div>
//         </Stagger>
//       </section>
//     </FadeIn>
//   );
// }

/* ── Contact CTA Panel ───────────────────────────────────────────────────── */

// function ContactCTASection({ project }: { project: Project }) {
//   const whatsappBuy = getProjectWhatsAppLink(project.contactPrefillMessage);
//   const whatsappCustom = getCustomRequestWhatsAppLink(project.title);

//   return (
//     <FadeIn>
//       <section className="py-10 border-t border-border-default">
//         <div
//           className="relative overflow-hidden rounded-2xl border border-accent/20 p-8 sm:p-10 text-center"
//           style={{
//             background: "linear-gradient(160deg, #13131f 0%, #0f0f1a 100%)",
//             boxShadow: "0 0 0 1px rgba(99,102,241,0.06), 0 0 40px rgba(99,102,241,0.06)",
//           }}
//         >
//           {/* <div
//             className="absolute inset-0 pointer-events-none"
//             aria-hidden="true"
//             style={{
//               background:
//                 "radial-gradient(ellipse 80% 60% at 50% 110%, rgba(99,102,241,0.12) 0%, transparent 70%)",
//             }}
//           /> */}
//           {/* <div className="relative space-y-4">
//             <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight heading-gradient">
//               Interested in {project.title}?
//             </h2>
//             <p className="text-text-secondary text-sm sm:text-base leading-relaxed max-w-md mx-auto">
//               Reach out on WhatsApp to purchase, ask questions, or discuss a
//               custom version tailored to your needs.
//             </p>
//             <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
//               <Button
//                 href={whatsappBuy}
//                 variant="primary"
//                 size="lg"
//                 icon={<MessageCircle className="w-4 h-4" />}
//               >
//                 Contact to Buy
//               </Button>
//               <Button href={whatsappCustom} variant="secondary" size="lg">
//                 Request Custom Version
//               </Button>
//             </div>
//           </div> */}
//         </div>
//       </section>
//     </FadeIn>
//   );
// }

/* ── Related Projects ────────────────────────────────────────────────────── */

function RelatedProjectsSection({
  currentSlug,
  category,
}: {
  currentSlug: string;
  category: string;
}) {
  const related = getRelatedProjects(currentSlug, category, 3);
  if (related.length === 0) return null;

  return (
    <FadeIn>
      <section className="py-10 border-t border-border-default">
        <h2 className="text-lg font-semibold text-text-primary mb-6">
          Related Projects
        </h2>
        <Stagger staggerDelay={0.08}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {related.map((p) => (
              <StaggerItem key={p.id} className="h-full">
                <ProjectCard project={p} compact />
              </StaggerItem>
            ))}
          </div>
        </Stagger>
      </section>
    </FadeIn>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────────────────────────────────── */

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <div className="pb-20">
      <Container>
        <ProjectHero project={project} />
        <GallerySection project={project} />
        <AboutSection project={project} />
        <FeaturesSection project={project} />
        <TechStackSection project={project} />
        {/* <WhatYouGetSection /> */}
        {/* <ContactCTASection project={project} /> */}
        <RelatedProjectsSection
          currentSlug={project.slug}
          category={project.category}
        />
      </Container>
    </div>
  );
}