import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}

export function PageHero({ title, description, children, className }: PageHeroProps) {
  return (
    <section className={cn("py-16 md:py-24", className)}>
      <Container>
        <div className="max-w-3xl">
          <Heading as="h1">{title}</Heading>
          {description && (
            <Text variant="large" className="mt-6">
              {description}
            </Text>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </Container>
    </section>
  );
}
