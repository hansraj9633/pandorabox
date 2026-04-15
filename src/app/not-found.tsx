import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center flex-1 py-28 text-center px-4">
      <Container size="narrow">
        <div className="space-y-6">
          {/* 404 number */}
          <p
            className="text-8xl sm:text-9xl font-semibold tracking-tighter gradient-text"
            aria-hidden="true"
          >
            404
          </p>

          <div className="space-y-3">
            <h1 className="text-2xl sm:text-3xl font-semibold heading-gradient">
              Page not found
            </h1>
            <p className="text-text-secondary text-base max-w-sm mx-auto">
              The page you&apos;re looking for doesn&apos;t exist or has been
              moved.
            </p>
          </div>

          <Button
            href="/"
            variant="secondary"
            icon={<ArrowLeft className="w-4 h-4" />}
          >
            Back to Home
          </Button>
        </div>
      </Container>
    </section>
  );
}
