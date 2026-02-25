import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/container";
import { V2Button } from "@/components/v2/ui/v2-button";
import { V2ProblemCard } from "@/components/v2/blocks/v2-problem-card";
import { services, principles } from "@/data/services";
import { problems } from "@/data/problems";
import { Compass, Repeat, Rocket, ArrowRight, Check } from "lucide-react";

export const metadata = createPageMetadata({
  title: "Tjenester",
  description:
    "Teknisk ledelse, smidig utvikling og produktutvikling – tilpasset din organisasjons behov.",
  path: "/v2/tjenester",
});

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Compass,
  Repeat,
  Rocket,
};

const colorMap: Record<string, { accent: string; border: string; bg: string; num: string }> = {
  "teknisk-ledelse": { accent: "text-v2-cyan", border: "border-v2-cyan/30", bg: "bg-v2-cyan/5", num: "01" },
  "smidig-utvikling": { accent: "text-v2-purple", border: "border-v2-purple/30", bg: "bg-v2-purple/5", num: "02" },
  "produktutvikling": { accent: "text-v2-success", border: "border-v2-success/30", bg: "bg-v2-success/5", num: "03" },
};

export default function V2TjenesterPage() {
  return (
    <>
      {/* === HERO: Big type with code aesthetic === */}
      <section className="relative bg-v2-void py-24 md:py-36">
        <div className="absolute inset-0 v2-dot-grid opacity-10" />
        <Container>
          <div className="relative max-w-5xl">
            <span className="font-mono text-xs uppercase tracking-widest text-v2-cyan">
              // tjenester
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.1] text-v2-heading md:text-6xl lg:text-7xl">
              Tre disipliner.<br />
              <span className="v2-gradient-text">En leveranse.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-v2-muted">
              Vi hjelper organisasjoner med å levere bedre gjennom teknisk ledelse,
              smidig utvikling og produktutvikling. Alltid tilpasset din virkelighet.
            </p>
          </div>
        </Container>
      </section>

      {/* === SERVICES: Full-width showcases === */}
      {services.map((service) => {
        const Icon = iconMap[service.icon] || Compass;
        const colors = colorMap[service.id] || colorMap["teknisk-ledelse"];

        return (
          <section
            key={service.id}
            id={service.id}
            className={`border-t ${colors.border} ${colors.bg} py-20 md:py-28`}
          >
            <Container>
              <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
                {/* Left: title block */}
                <div>
                  <span className={`font-mono text-6xl font-bold ${colors.accent} opacity-30 md:text-8xl`}>
                    {colors.num}
                  </span>
                  <div className="mt-4 flex items-center gap-3">
                    <Icon className={`h-6 w-6 ${colors.accent}`} />
                    <h2 className="text-3xl font-bold text-v2-heading md:text-4xl">
                      {service.title}
                    </h2>
                  </div>
                  <p className="mt-4 text-v2-muted leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Right: detail list */}
                <div className="border-l border-v2-border pl-8 md:pl-12">
                  <span className="font-mono text-xs uppercase tracking-widest text-v2-muted">
                    Hva vi leverer
                  </span>
                  <ul className="mt-6 space-y-4">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <Check className={`mt-0.5 h-5 w-5 shrink-0 ${colors.accent}`} />
                        <span className="text-v2-text">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Container>
          </section>
        );
      })}

      {/* === PROBLEMS: Dark section with different layout === */}
      <section className="bg-v2-void py-24 md:py-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-mono text-xs uppercase tracking-widest text-v2-cyan">
              Diagnostikk
            </span>
            <h2 className="mt-3 text-3xl font-bold text-v2-heading md:text-5xl">
              Kjenner du deg igjen?
            </h2>
            <p className="mt-4 text-v2-muted">
              Klikk på en utfordring for å se hvordan vi kan hjelpe.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {problems.map((problem) => (
              <V2ProblemCard key={problem.id} problem={problem} />
            ))}
          </div>
        </Container>
      </section>

      {/* === PRINCIPLES: Horizontal strip === */}
      <section className="border-y border-v2-border bg-v2-surface py-24 md:py-32">
        <Container>
          <span className="font-mono text-xs uppercase tracking-widest text-v2-cyan">
            Prinsipper
          </span>
          <h2 className="mt-3 text-3xl font-bold text-v2-heading md:text-4xl">
            Hvordan vi jobber
          </h2>

          <div className="mt-12 grid gap-px bg-v2-border md:grid-cols-2 lg:grid-cols-4">
            {principles.map((p, i) => (
              <div key={p.title} className="bg-v2-surface p-8">
                <span className="font-mono text-3xl font-bold text-v2-border">
                  0{i + 1}
                </span>
                <h3 className="mt-4 text-lg font-bold text-v2-heading">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-v2-muted">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* === CTA === */}
      <section className="bg-v2-void py-32">
        <Container>
          <div className="flex flex-col items-center text-center">
            <h2 className="text-4xl font-bold text-v2-heading md:text-6xl">
              La oss <span className="v2-gradient-text-cyan">snakkes</span>
            </h2>
            <p className="mt-4 max-w-md text-v2-muted">
              Fortell oss om utfordringene dine, så finner vi ut om vi er rett match.
            </p>
            <div className="mt-8 flex items-center gap-6">
              <V2Button href="/v2/kontakt" size="lg">
                Ta kontakt
              </V2Button>
              <Link
                href="/v2/folka"
                className="inline-flex items-center gap-2 text-sm text-v2-muted transition-colors hover:text-v2-cyan"
              >
                Møt folkene <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
