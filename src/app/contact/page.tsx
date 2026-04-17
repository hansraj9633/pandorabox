import type { Metadata } from "next";
import { Mail, Github, Twitter, Linkedin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion";
import { siteConfig } from "@/lib/config";


export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with PandoraBox for custom builds or project inquiries.",
};

const contactOptions = [
  {
    icon: Mail,
    label: "Email",
    description: "Send mail to: thelittlespark.official@gmail.com",
    action: "Send an email",
    href: "https://mail.google.com", // Update with your actual email
    external: true,
  },
  {
    icon: Github,
    label: "GitHub",
    description: "Browse open-source work and contributions.",
    action: "View GitHub",
    href: siteConfig.social.github,
    external: true,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    description: "Connect with me professionally and explore my work and updates.",
    action: "Connect on LinkedIn",
    href: "https://linkedin.com/in/your-linkedin-id",
    external: true,
  },
];

export default function ContactPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container size="narrow">
        <SectionHeading
          eyebrow="Reach Out"
          title="Get in Touch"
          highlight="in Touch"
          description="Interested in a custom version, have a question, or just want to say hello? Choose how you'd like to connect."
          className="mb-14"
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {contactOptions.map((option, i) => {
            const Icon = option.icon;
            return (
              <FadeIn key={option.label} delay={i * 0.08}>
                <div
                  className="group h-full p-6 rounded-2xl border border-border-default bg-background-card
                             hover:border-accent/25 hover:shadow-card-hover
                             transition-all duration-300 flex flex-col gap-5"
                >
                  <div
                    className="inline-flex items-center justify-center w-10 h-10 rounded-xl
                               bg-accent/10 border border-accent/15 text-accent-soft
                               group-hover:bg-accent/15 transition-colors duration-200"
                  >
                    <Icon className="w-5 h-5" strokeWidth={1.75} />
                  </div>

                  <div className="flex-1 space-y-1.5">
                    <h3 className="text-sm font-semibold text-text-primary">
                      {option.label}
                    </h3>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {option.description}
                    </p>
                  </div>

                  <Button href={option.href} variant="outline" size="sm">
                    {option.action}
                  </Button>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Note */}
        <FadeIn delay={0.3}>
          <p className="text-center text-xs text-text-muted mt-10">
            Response time is typically within 24 to 48 hours on business days.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}