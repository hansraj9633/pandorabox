"use client";

import { useState, useMemo } from "react";
import { Search, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Stagger, StaggerItem } from "@/components/motion/FadeIn";
import { FadeIn } from "@/components/motion/FadeIn";
import { getAllProjects } from "@/lib/projects";
import { cn } from "@/lib/utils";
import type { ProjectCategory } from "@/types";

const ALL = "All";
const CATEGORIES: (typeof ALL | ProjectCategory)[] = ["All", "App", "Website", "Tool", "Template"];

export default function ProjectsPage() {
  const allProjects = useMemo(() => getAllProjects(), []);
  const [activeCategory, setActiveCategory] = useState<typeof ALL | ProjectCategory>(ALL);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return allProjects.filter((p) => {
      const matchCat = activeCategory === ALL || p.category === activeCategory;
      const q = query.trim().toLowerCase();
      const matchSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.techStack.some((t) => t.toLowerCase().includes(q));
      return matchCat && matchSearch;
    });
  }, [allProjects, activeCategory, query]);

  return (
    <div className="py-16 sm:py-24">
      <Container>
        <FadeIn className="mb-10">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-accent-soft mb-4">
              <span className="inline-block w-4 h-px bg-gradient-to-r from-accent to-violet-accent opacity-80" />
              All Projects
              <span className="inline-block w-4 h-px bg-gradient-to-r from-violet-accent to-accent opacity-80" />
            </span>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight heading-gradient mb-4">
              Browse the Catalogue
            </h1>
            <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
              Apps, websites, tools, and templates built for real-world use.
              Each project includes full source code and documentation.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
            <div className="flex flex-wrap items-center gap-2 flex-1">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "h-8 px-4 text-xs font-medium rounded-xl border",
                    "transition-all duration-150",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                    activeCategory === cat
                      ? "bg-accent text-white border-accent shadow-glow-sm"
                      : "bg-background-elevated text-text-secondary border-border-bright hover:text-text-primary hover:border-accent/30"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-56">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-text-muted pointer-events-none" />
              <input
                type="search"
                placeholder="Search projects..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className={cn(
                  "w-full h-8 pl-8 pr-8 text-xs rounded-xl",
                  "bg-background-elevated border border-border-bright",
                  "text-text-primary placeholder:text-text-muted",
                  "focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/30",
                  "transition-colors duration-150"
                )}
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-secondary transition-colors"
                  aria-label="Clear search"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>
          </div>
        </FadeIn>

        {(query || activeCategory !== ALL) && (
          <p className="text-xs text-text-muted mb-6">
            {filtered.length === 0
              ? "No projects match your filters."
              : `${filtered.length} project${filtered.length === 1 ? "" : "s"} found`}
          </p>
        )}

        {filtered.length > 0 ? (
          <Stagger staggerDelay={0.08}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((project) => (
                <StaggerItem key={project.id} className="flex flex-col h-full">
                  <ProjectCard project={project} />
                </StaggerItem>
              ))}
            </div>
          </Stagger>
        ) : (
          <FadeIn>
            <div className="flex flex-col items-center justify-center py-24 rounded-2xl border border-dashed border-border-bright text-center space-y-3">
              <p className="text-text-secondary text-sm font-medium">No projects found</p>
              <p className="text-text-muted text-xs max-w-xs">Try adjusting your filters or search query.</p>
              <button
                onClick={() => { setActiveCategory(ALL); setQuery(""); }}
                className="mt-2 text-xs text-accent-soft hover:text-accent transition-colors underline underline-offset-2"
              >
                Clear all filters
              </button>
            </div>
          </FadeIn>
        )}
      </Container>
    </div>
  );
}
