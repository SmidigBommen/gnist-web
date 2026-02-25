import { Container } from "@/components/ui/container";
import { V2Heading } from "@/components/v2/ui/v2-heading";
import { V2Text } from "@/components/v2/ui/v2-text";
import { cn } from "@/lib/utils";

interface V2PageHeroProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
  dotGrid?: boolean;
}

export function V2PageHero({ title, description, children, className, dotGrid = false }: V2PageHeroProps) {
  return (
    <section className={cn("relative py-16 md:py-24 bg-v2-void", className)}>
      {dotGrid && (
        <div
          className="absolute inset-0 -z-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle, #2A2A3A 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      )}
      <Container>
        <div className="relative max-w-3xl">
          <V2Heading as="h1">{title}</V2Heading>
          {description && (
            <V2Text variant="large" className="mt-6">
              {description}
            </V2Text>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </Container>
    </section>
  );
}
