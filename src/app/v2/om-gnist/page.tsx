import { createPageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/container";
import { V2Button } from "@/components/v2/ui/v2-button";
import { Flame, Eye, Shield, Users, Heart, ArrowRight } from "lucide-react";
import { socialResponsibility } from "@/data/values";
import { company } from "@/data/company";

export const metadata = createPageMetadata({
  title: "Om Gnist",
  description:
    "Gnist er et norsk konsulenthus som brenner for teknologiledelse.",
  path: "/v2/om-gnist",
});

const values = [
  {
    icon: Flame,
    title: "Gnist",
    description: "Den indre driven og nysgjerrigheten er det som gjør oss gode.",
    color: "text-v2-cyan",
    border: "border-v2-cyan/20",
  },
  {
    icon: Eye,
    title: "Åpenhet",
    description: "Vi deler kunnskap fritt og bygger tillit gjennom åpen kommunikasjon.",
    color: "text-v2-purple",
    border: "border-v2-purple/20",
  },
  {
    icon: Shield,
    title: "Mot",
    description: "Vi tør å utfordre status quo og ta de vanskelige samtalene.",
    color: "text-v2-success",
    border: "border-v2-success/20",
  },
  {
    icon: Users,
    title: "Fellesskap",
    description: "Sammen skaper vi bedre løsninger enn noen av oss kunne gjort alene.",
    color: "text-v2-cyan",
    border: "border-v2-cyan/20",
  },
];

export default function V2OmGnistPage() {
  return (
    <>
      {/* === MANIFESTO HERO === */}
      <section className="relative min-h-[80vh] flex items-center bg-v2-void">
        <div className="absolute inset-0 v2-dot-grid opacity-10" />
        <div
          className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full opacity-15 blur-[120px]"
          style={{ background: "radial-gradient(circle, #8B5CF6, transparent)" }}
        />
        <Container>
          <div className="relative max-w-5xl">
            <span className="font-mono text-xs uppercase tracking-widest text-v2-cyan">
              Vår filosofi
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.1] text-v2-heading md:text-6xl lg:text-7xl">
              Vi tror den viktigste
              <br />
              teknologien i enhver
              <br />
              organisasjon er{" "}
              <span className="v2-gradient-text">menneskene</span>
            </h1>
          </div>
        </Container>
      </section>

      {/* === STORY: Alternating timeline === */}
      <section className="bg-v2-surface py-24 md:py-32">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-0 md:grid-cols-[1fr_auto_1fr]">
              {/* Left content */}
              <div className="md:text-right md:pr-10">
                <span className="font-mono text-xs uppercase tracking-widest text-v2-cyan">Starten</span>
                <h2 className="mt-3 text-2xl font-bold text-v2-heading md:text-3xl">En enkel idé</h2>
                <p className="mt-4 text-v2-muted leading-relaxed">
                  Samle Norges beste teknologiledere i et fellesskap der de kan
                  vokse, dele og gjøre hverandre bedre. Ikke et vanlig
                  konsulentselskap — et hjem for folk som brenner for faget.
                </p>
              </div>

              {/* Timeline line */}
              <div className="hidden md:flex flex-col items-center">
                <div className="h-4 w-4 rounded-full border-2 border-v2-cyan bg-v2-void" />
                <div className="flex-1 w-px bg-v2-border" />
              </div>

              {/* Right spacer */}
              <div className="hidden md:block" />

              {/* Left spacer */}
              <div className="hidden md:block" />

              {/* Timeline line */}
              <div className="hidden md:flex flex-col items-center">
                <div className="flex-1 w-px bg-v2-border" />
                <div className="h-4 w-4 rounded-full border-2 border-v2-purple bg-v2-void" />
                <div className="flex-1 w-px bg-v2-border" />
              </div>

              {/* Right content */}
              <div className="mt-12 md:mt-0 md:pl-10">
                <span className="font-mono text-xs uppercase tracking-widest text-v2-purple">I dag</span>
                <h2 className="mt-3 text-2xl font-bold text-v2-heading md:text-3xl">~30 sterke</h2>
                <p className="mt-4 text-v2-muted leading-relaxed">
                  CTO-er, tech leads, smidige coacher, produktledere og arkitekter.
                  Bred erfaring fra noen av Norges mest spennende selskaper og prosjekter.
                  Verktøy og rammeverk kommer og går — evnen til å lede, samarbeide
                  og tilpasse seg varer.
                </p>
              </div>

              {/* Left content */}
              <div className="mt-12 md:mt-0 md:text-right md:pr-10">
                <span className="font-mono text-xs uppercase tracking-widest text-v2-success">Alltid</span>
                <h2 className="mt-3 text-2xl font-bold text-v2-heading md:text-3xl">Mennesker først</h2>
                <p className="mt-4 text-v2-muted leading-relaxed">
                  Vi leverer ikke bare konsulenter — vi leverer folk som bryr seg.
                  Folk som investerer i teamene de jobber med, som deler kunnskap
                  fritt, og som gjør organisasjoner bedre fra innsiden.
                </p>
              </div>

              {/* Timeline line */}
              <div className="hidden md:flex flex-col items-center">
                <div className="flex-1 w-px bg-v2-border" />
                <div className="h-4 w-4 rounded-full border-2 border-v2-success bg-v2-void" />
              </div>

              {/* Right spacer */}
              <div className="hidden md:block" />
            </div>
          </div>
        </Container>
      </section>

      {/* === VALUES: Full-width horizontal scroll look === */}
      <section className="bg-v2-void py-24 md:py-32">
        <Container>
          <div className="flex items-end justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-v2-cyan">DNA</span>
              <h2 className="mt-3 text-3xl font-bold text-v2-heading md:text-5xl">Verdiene våre</h2>
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <div
                key={value.title}
                className={`group relative border ${value.border} bg-v2-surface p-8 transition-colors hover:bg-v2-surface-alt`}
              >
                <span className="absolute right-4 top-4 font-mono text-5xl font-bold text-v2-border/20">
                  0{i + 1}
                </span>
                <value.icon className={`h-8 w-8 ${value.color}`} />
                <h3 className="mt-6 text-xl font-bold text-v2-heading">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-v2-muted">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* === SOCIAL RESPONSIBILITY: Split layout === */}
      <section className="bg-v2-surface py-24 md:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
            {/* Left: sticky header */}
            <div className="lg:sticky lg:top-32 lg:self-start">
              <Heart className="h-10 w-10 text-v2-success" />
              <h2 className="mt-4 text-3xl font-bold text-v2-heading md:text-4xl">
                {socialResponsibility.title}
              </h2>
              <p className="mt-4 text-v2-muted leading-relaxed">
                {socialResponsibility.intro}
              </p>
            </div>

            {/* Right: initiative cards */}
            <div className="space-y-4">
              {socialResponsibility.initiatives.map((init, i) => (
                <div
                  key={init.title}
                  className="flex gap-6 border border-v2-success/10 bg-v2-success/5 p-6 md:p-8"
                >
                  <span className="font-mono text-3xl font-bold text-v2-success/30">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-v2-heading">{init.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-v2-muted">
                      {init.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* === CAREERS CTA: Full-bleed === */}
      <section className="relative overflow-hidden bg-v2-void py-32">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 20px, #00D4FF 20px, #00D4FF 21px)",
          }}
        />
        <Container>
          <div className="relative flex flex-col items-center text-center">
            <span className="font-mono text-xs uppercase tracking-widest text-v2-cyan">Karriere</span>
            <h2 className="mt-4 text-4xl font-bold text-v2-heading md:text-6xl">
              Bli en av oss
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-v2-muted">
              Er du en erfaren teknologileder som vil jobbe i et sterkt fagmiljø?
              Vi er alltid på jakt etter gode folk som deler verdiene våre.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <V2Button href="/v2/kontakt">
                Snakk med {company.contact.name}
              </V2Button>
              <ArrowRight className="h-5 w-5 text-v2-muted" />
              <span className="text-sm text-v2-muted">{company.contact.role}</span>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
