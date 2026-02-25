import { createPageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/layout/page-hero";
import { ServiceCard } from "@/components/blocks/service-card";
import { ProblemCard } from "@/components/blocks/problem-card";
import { services, principles } from "@/data/services";
import { problems } from "@/data/problems";

export const metadata = createPageMetadata({
  title: "Tjenester",
  description:
    "Teknisk ledelse, smidig utvikling og produktutvikling – tilpasset din organisasjons behov og kontekst.",
  path: "/tjenester",
});

export default function TjenesterPage() {
  return (
    <>
      <PageHero
        title="Tjenester"
        description="Vi hjelper organisasjoner med å levere bedre gjennom teknisk ledelse, smidig utvikling og produktutvikling. Alltid tilpasset din virkelighet."
      />

      {/* Services */}
      <Section variant="cream">
        <Container>
          <Heading as="h2">Hva vi tilbyr</Heading>
          <div className="mt-8 space-y-6">
            {services.map((service) => (
              <div key={service.id} id={service.id}>
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Problems we solve */}
      <Section>
        <Container>
          <div className="text-center">
            <Heading as="h2">Kjenner du deg igjen?</Heading>
            <Text variant="secondary" className="mx-auto mt-4 max-w-2xl">
              Her er noen av utfordringene organisasjoner kommer til oss med.
              Klikk for å se hvordan vi kan hjelpe.
            </Text>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {problems.map((problem) => (
              <ProblemCard key={problem.id} problem={problem} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Principles */}
      <Section variant="cream">
        <Container>
          <div className="text-center">
            <Heading as="h2">Hvordan vi jobber</Heading>
            <Text variant="secondary" className="mx-auto mt-4 max-w-2xl">
              Uansett tjeneste – vi styres av de samme prinsippene.
            </Text>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {principles.map((p) => (
              <Card key={p.title}>
                <h3 className="font-heading text-xl text-charcoal">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-warm-gray">
                  {p.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section>
        <Container>
          <div className="text-center">
            <Heading as="h2">La oss snakkes</Heading>
            <Text variant="secondary" className="mx-auto mt-4 max-w-xl">
              Vi tror på å starte med en god samtale. Fortell oss om
              utfordringene dine, så finner vi ut om vi er rett match.
            </Text>
            <Button href="/kontakt" size="lg" className="mt-8">
              Ta kontakt
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
