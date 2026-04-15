import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Stagger, StaggerItem } from "@/components/motion/FadeIn";
import { getFeaturedProjects } from "@/lib/projects";

export function FeaturedProjectsSection() {
  const featured = getFeaturedProjects();

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Featured Work"
          title="Ready to Deploy"
          highlight="Deploy"
          description="Handpicked projects available for immediate purchase. Each ships with full source code and documentation."
          className="mb-12"
        />

        <Stagger staggerDelay={0.1} containerDelay={0.05}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featured.map((project) => (
              <StaggerItem key={project.id} className="flex flex-col h-full">
                <ProjectCard project={project} />
              </StaggerItem>
            ))}
          </div>
        </Stagger>

        <div className="flex justify-center mt-10">
          <Button
            href="/projects"
            variant="outline"
            iconRight={<ArrowRight className="w-4 h-4" />}
          >
            Browse All Projects
          </Button>
        </div>
      </Container>
    </section>
  );
}
