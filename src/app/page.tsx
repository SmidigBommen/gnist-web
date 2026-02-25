import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Compass, Repeat, Rocket, Quote } from "lucide-react";

const pillars = [
  {
    icon: Compass,
    title: "Teknisk ledelse",
    description:
      "Erfarne CTO-er, tech leads og arkitekter som gir retning og bygger kultur fra dag én.",
    href: "/tjenester#teknisk-ledelse",
  },
  {
    icon: Repeat,
    title: "Smidig utvikling",
    description:
      "Coaching og transformasjon som gjør team genuint smidige – tilpasset deres virkelighet.",
    href: "/tjenester#smidig-utvikling",
  },
  {
    icon: Rocket,
    title: "Produktutvikling",
    description:
      "Fra strategi til leveranse – vi hjelper med hele verdikjeden i produktutvikling.",
    href: "/tjenester#produktutvikling",
  },
];

const clients = [
  "NRK",
  "DNB",
  "Posten",
  "Vy",
  "NAV",
  "Storebrand",
  "Finn.no",
  "Schibsted",
];

const testimonials = [
  {
    quote:
      "Gnist-konsulentene har en unik evne til å forstå helheten. De leverte ikke bare teknisk kompetanse, men hjalp oss med å bygge en kultur for kontinuerlig forbedring.",
    author: "Teknologidirektør",
    company: "Stor norsk mediebedrift",
  },
  {
    quote:
      "Vi trengte noen som kunne ta teknisk lederskap fra dag én. Gnist leverte over all forventning – og teamet vårt ble merkbart bedre.",
    author: "VP Engineering",
    company: "Norsk fintech-selskap",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(135deg, #D4622B 0%, #F0A06A 40%, #FAF7F4 80%)",
            opacity: 0.08,
          }}
        />
        <Container>
          <div className="max-w-3xl">
            <Heading as="h1">
              Smidig i praksis
            </Heading>
            <Text variant="large" className="mt-6">
              Vi er ~30 teknologiledere som hjelper organisasjoner med å levere
              bedre, raskere og med mer glede. Gjennom teknisk ledelse, smidig
              coaching og produktutvikling.
            </Text>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/kontakt" size="lg">
                Ta kontakt
              </Button>
              <Button href="/tjenester" variant="outline" size="lg">
                Våre tjenester
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Competence pillars */}
      <Section variant="cream">
        <Container>
          <div className="text-center">
            <Heading as="h2">Tre pilarer av kompetanse</Heading>
            <Text variant="secondary" className="mx-auto mt-4 max-w-2xl">
              Vi kombinerer dyp teknisk kompetanse med menneskeforståelse for å
              skape varig endring.
            </Text>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {pillars.map((pillar) => (
              <Card key={pillar.title} hover>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-glow/20">
                  <pillar.icon className="h-6 w-6 text-ember" />
                </div>
                <h3 className="mt-4 font-heading text-xl text-charcoal">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-warm-gray">
                  {pillar.description}
                </p>
                <Button
                  href={pillar.href}
                  variant="ghost"
                  size="sm"
                  className="mt-4 -ml-4"
                >
                  Les mer →
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Client logo strip */}
      <Section>
        <Container>
          <Text variant="secondary" className="text-center text-sm uppercase tracking-wider">
            Vi har hjulpet blant andre
          </Text>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {clients.map((client) => (
              <span
                key={client}
                className="text-lg font-medium text-ash transition-colors hover:text-charcoal"
              >
                {client}
              </span>
            ))}
          </div>
        </Container>
      </Section>

      {/* Testimonials */}
      <Section variant="cream">
        <Container>
          <Heading as="h2" className="text-center">
            Hva kundene sier
          </Heading>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <Card key={i}>
                <Quote className="h-8 w-8 text-glow" />
                <blockquote className="mt-4 text-base leading-relaxed text-charcoal italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-6 border-t border-ash/20 pt-4">
                  <p className="text-sm font-medium text-charcoal">
                    {t.author}
                  </p>
                  <p className="text-sm text-warm-gray">{t.company}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section variant="charcoal">
        <Container>
          <div className="text-center">
            <Heading as="h2" className="text-warm-white">
              Klar for en uforpliktende prat?
            </Heading>
            <Text className="mx-auto mt-4 max-w-2xl text-ash">
              Vi starter gjerne med en kaffe og en god samtale om utfordringene
              dine. Ingen forpliktelser – bare ærlig rådgivning.
            </Text>
            <Button href="/kontakt" size="lg" className="mt-8">
              Kontakt oss
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
