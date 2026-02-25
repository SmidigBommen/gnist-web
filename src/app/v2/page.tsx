import { Container } from "@/components/ui/container";
import { V2Section } from "@/components/v2/ui/v2-section";
import { V2Heading } from "@/components/v2/ui/v2-heading";
import { V2Text } from "@/components/v2/ui/v2-text";
import { V2Button } from "@/components/v2/ui/v2-button";
import { V2Card } from "@/components/v2/ui/v2-card";
import { Compass, Repeat, Rocket, Quote } from "lucide-react";

const pillars = [
  {
    icon: Compass,
    title: "Teknisk ledelse",
    description:
      "Erfarne CTO-er, tech leads og arkitekter som gir retning og bygger kultur fra dag én.",
    href: "/v2/tjenester#teknisk-ledelse",
  },
  {
    icon: Repeat,
    title: "Smidig utvikling",
    description:
      "Coaching og transformasjon som gjør team genuint smidige – tilpasset deres virkelighet.",
    href: "/v2/tjenester#smidig-utvikling",
  },
  {
    icon: Rocket,
    title: "Produktutvikling",
    description:
      "Fra strategi til leveranse – vi hjelper med hele verdikjeden i produktutvikling.",
    href: "/v2/tjenester#produktutvikling",
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

export default function V2HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-32 bg-v2-void">
        <div
          className="absolute inset-0 -z-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle, #2A2A3A 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <Container>
          <div className="relative max-w-3xl">
            <V2Heading as="h1">
              Smidig i praksis
            </V2Heading>
            <V2Text variant="large" className="mt-6">
              Vi er ~30 teknologiledere som hjelper organisasjoner med å levere
              bedre, raskere og med mer glede. Gjennom teknisk ledelse, smidig
              coaching og produktutvikling.
            </V2Text>
            <div className="mt-8 flex flex-wrap gap-4">
              <V2Button href="/v2/kontakt" size="lg">
                Ta kontakt
              </V2Button>
              <V2Button href="/v2/tjenester" variant="outline" size="lg">
                Våre tjenester
              </V2Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Competence pillars */}
      <V2Section variant="surface">
        <Container>
          <div className="text-center">
            <V2Heading as="h2">Tre pilarer av kompetanse</V2Heading>
            <V2Text variant="muted" className="mx-auto mt-4 max-w-2xl">
              Vi kombinerer dyp teknisk kompetanse med menneskeforståelse for å
              skape varig endring.
            </V2Text>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {pillars.map((pillar) => (
              <V2Card key={pillar.title} hover>
                <div className="flex h-12 w-12 items-center justify-center border border-v2-cyan/20 bg-v2-cyan/5">
                  <pillar.icon className="h-6 w-6 text-v2-cyan" />
                </div>
                <h3 className="mt-4 font-body text-xl font-semibold text-v2-heading">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-v2-muted">
                  {pillar.description}
                </p>
                <V2Button
                  href={pillar.href}
                  variant="ghost"
                  size="sm"
                  className="mt-4 -ml-4"
                >
                  Les mer →
                </V2Button>
              </V2Card>
            ))}
          </div>
        </Container>
      </V2Section>

      {/* Client logo strip */}
      <V2Section variant="void">
        <Container>
          <V2Text variant="muted" className="text-center font-mono text-xs uppercase tracking-widest">
            Vi har hjulpet blant andre
          </V2Text>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {clients.map((client) => (
              <span
                key={client}
                className="text-lg font-medium text-v2-border transition-colors hover:text-v2-text"
              >
                {client}
              </span>
            ))}
          </div>
        </Container>
      </V2Section>

      {/* Testimonials */}
      <V2Section variant="surface">
        <Container>
          <V2Heading as="h2" className="text-center">
            Hva kundene sier
          </V2Heading>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <V2Card key={i}>
                <Quote className="h-8 w-8 text-v2-cyan/40" />
                <blockquote className="mt-4 text-base leading-relaxed text-v2-text italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-6 border-t border-v2-border pt-4">
                  <p className="text-sm font-medium text-v2-heading">
                    {t.author}
                  </p>
                  <p className="text-sm text-v2-muted">{t.company}</p>
                </div>
              </V2Card>
            ))}
          </div>
        </Container>
      </V2Section>

      {/* CTA */}
      <V2Section variant="surface-alt">
        <Container>
          <div className="text-center">
            <V2Heading as="h2">
              Klar for en uforpliktende prat?
            </V2Heading>
            <V2Text className="mx-auto mt-4 max-w-2xl text-v2-muted">
              Vi starter gjerne med en kaffe og en god samtale om utfordringene
              dine. Ingen forpliktelser – bare ærlig rådgivning.
            </V2Text>
            <V2Button href="/v2/kontakt" size="lg" className="mt-8">
              Kontakt oss
            </V2Button>
          </div>
        </Container>
      </V2Section>
    </>
  );
}
