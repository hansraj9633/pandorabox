import { ArrowRight, MessageSquare } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";

export function FinalCtaSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container size="narrow">
        <FadeIn>
          <div
            className="relative overflow-hidden rounded-3xl border border-accent/20 px-8 py-14 sm:px-14 sm:py-16 text-center"
            style={{
              background:
                "linear-gradient(160deg, #13131f 0%, #0f0f1a 100%)",
              boxShadow:
                "0 0 0 1px rgba(99,102,241,0.08), 0 0 60px rgba(99,102,241,0.07), 0 1px 0 rgba(255,255,255,0.04)",
            }}
          >
            {/* Background glow bloom */}
            <div
              className="absolute inset-0 pointer-events-none"
              aria-hidden="true"
              style={{
                background:
                  "radial-gradient(ellipse 80% 60% at 50% 110%, rgba(99,102,241,0.14) 0%, rgba(139,92,246,0.06) 50%, transparent 70%)",
              }}
            />

            {/* Decorative top line */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px pointer-events-none"
              aria-hidden="true"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(99,102,241,0.5), transparent)",
              }}
            />

            {/* Content */}
            <div className="relative space-y-5">
              {/* Icon mark */}
              <div className="flex justify-center mb-6">
                <span
                  className="inline-flex items-center justify-center w-12 h-12 rounded-2xl
                             bg-accent/12 border border-accent/20 text-accent-soft"
                >
                  <MessageSquare className="w-5 h-5" strokeWidth={1.75} />
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight heading-gradient">
                Need a project built,
                <br className="hidden sm:block" /> or a custom version?
              </h2>

              <p className="text-text-secondary text-base sm:text-lg leading-relaxed max-w-md mx-auto">
                Whether you have a fully scoped idea or just a rough concept,
                reach out and let&apos;s figure out what makes sense.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
                <Button
                  href="/contact"
                  size="lg"
                  variant="primary"
                  iconRight={<ArrowRight className="w-4 h-4" />}
                >
                  Start a Conversation
                </Button>
                <Button href="/projects" size="lg" variant="ghost">
                  Browse Projects First
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
