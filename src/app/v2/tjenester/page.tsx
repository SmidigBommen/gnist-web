import { createPageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/container";
import { V2Section } from "@/components/v2/ui/v2-section";
import { V2Heading } from "@/components/v2/ui/v2-heading";
import { V2Text } from "@/components/v2/ui/v2-text";
import { V2Card } from "@/components/v2/ui/v2-card";
import { V2Button } from "@/components/v2/ui/v2-button";
import { V2PageHero } from "@/components/v2/layout/v2-page-hero";
import { V2ServiceCard } from "@/components/v2/blocks/v2-service-card";
import { V2ProblemCard } from "@/components/v2/blocks/v2-problem-card";
import { services, principles } from "@/data/services";
import { problems } from "@/data/problems";

export const metadata = createPageMetadata({
  title: "Tjenester",
  description:
    "Teknisk ledelse, smidig utvikling og produktutvikling – tilpasset din organisasjons behov og kontekst.",
  path: "/v2/tjenester",
});

export default function V2TjenesterPage() {
  return (
    <>
      <V2PageHero
        title="Tjenester"
        description="Vi hjelper organisasjoner med å levere bedre gjennom teknisk ledelse, smidig utvikling og produktutvikling. Alltid tilpasset din virkelighet."
      />

      {/* Services */}
      <V2Section variant="surface">
        <Container>
          <V2Heading as="h2">Hva vi tilbyr</V2Heading>
          <div className="mt-8 space-y-6">
            {services.map((service) => (
              <div key={service.id} id={service.id}>
                <V2ServiceCard service={service} />
              </div>
            ))}
          </div>
        </Container>
      </V2Section>

      {/* Problems we solve */}
      <V2Section variant="void">
        <Container>
          <div className="text-center">
            <V2Heading as="h2">Kjenner du deg igjen?</V2Heading>
            <V2Text variant="muted" className="mx-auto mt-4 max-w-2xl">
              Her er noen av utfordringene organisasjoner kommer til oss med.
              Klikk for å se hvordan vi kan hjelpe.
            </V2Text>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {problems.map((problem) => (
              <V2ProblemCard key={problem.id} problem={problem} />
            ))}
          </div>
        </Container>
      </V2Section>

      {/* Principles */}
      <V2Section variant="surface">
        <Container>
          <div className="text-center">
            <V2Heading as="h2">Hvordan vi jobber</V2Heading>
            <V2Text variant="muted" className="mx-auto mt-4 max-w-2xl">
              Uansett tjeneste – vi styres av de samme prinsippene.
            </V2Text>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {principles.map((p) => (
              <V2Card key={p.title}>
                <h3 className="font-body text-xl font-semibold text-v2-heading">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-v2-muted">
                  {p.description}
                </p>
              </V2Card>
            ))}
          </div>
        </Container>
      </V2Section>

      {/* CTA */}
      <V2Section variant="void">
        <Container>
          <div className="text-center">
            <V2Heading as="h2">La oss snakkes</V2Heading>
            <V2Text variant="muted" className="mx-auto mt-4 max-w-xl">
              Vi tror på å starte med en god samtale. Fortell oss om
              utfordringene dine, så finner vi ut om vi er rett match.
            </V2Text>
            <V2Button href="/v2/kontakt" size="lg" className="mt-8">
              Ta kontakt
            </V2Button>
          </div>
        </Container>
      </V2Section>
    </>
  );
}
