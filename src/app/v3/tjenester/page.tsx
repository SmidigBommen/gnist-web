import { createPageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/container";
import { V3Button } from "@/components/v3/ui/v3-button";
import { V3ServiceCard } from "@/components/v3/blocks/v3-service-card";
import { V3ProblemCard } from "@/components/v3/blocks/v3-problem-card";
import { services, principles } from "@/data/services";
import { problems } from "@/data/problems";
import { ArrowRight } from "lucide-react";

export const metadata = createPageMetadata({
  title: "Tjenester",
  description: "Teknisk ledelse, smidig utvikling og produktutvikling.",
  path: "/v3/tjenester",
});

export default function V3TjenesterPage() {
  return (
    <>
      {/* === HERO === */}
      <section className="bg-v3-snow py-28 md:py-40">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-v3-moss">
              Tjenester
            </p>
            <h1 className="mt-8 v3-serif text-4xl leading-[1.15] text-v3-heading md:text-5xl lg:text-6xl">
              Tre disipliner.
              <br />
              Én tilnærming.
            </h1>
            <p className="mt-8 max-w-xl text-lg font-light leading-relaxed text-v3-drift">
              Vi hjelper organisasjoner med å levere bedre — alltid tilpasset
              din virkelighet.
            </p>
          </div>
        </Container>
      </section>

      <div className="v3-thin-rule mx-auto max-w-7xl" />

      {/* === SERVICES: Accordion list === */}
      <section className="bg-v3-snow py-24 md:py-32">
        <Container>
          <div className="mx-auto max-w-3xl">
            {services.map((service) => (
              <div key={service.id} id={service.id}>
                <V3ServiceCard service={service} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* === PROBLEMS === */}
      <section className="border-y border-v3-stone/30 bg-v3-paper py-24 md:py-32">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-v3-moss">
              Utfordringer
            </p>
            <h2 className="mt-4 v3-serif text-3xl text-v3-heading">
              Kjenner du deg igjen?
            </h2>
            <div className="mt-10">
              {problems.map((problem) => (
                <V3ProblemCard key={problem.id} problem={problem} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* === PRINCIPLES: Horizontal grid === */}
      <section className="bg-v3-snow py-24 md:py-32">
        <Container>
          <div className="mx-auto max-w-5xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-v3-moss">
              Prinsipper
            </p>
            <h2 className="mt-4 v3-serif text-3xl text-v3-heading">
              Hvordan vi jobber
            </h2>
            <div className="mt-12 grid gap-0 divide-y divide-v3-stone/30 md:grid-cols-2 md:divide-x md:divide-y-0">
              {principles.map((p, i) => (
                <div key={p.title} className={`py-8 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ${i >= 2 ? 'md:border-t md:border-v3-stone/30' : ''}`}>
                  <h3 className="text-base font-medium text-v3-heading">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-v3-drift">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* === CTA === */}
      <section className="bg-v3-linen py-28 md:py-36">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="v3-serif text-3xl text-v3-heading">La oss snakkes</h2>
            <p className="mt-4 text-v3-drift font-light">
              Fortell oss om utfordringene dine — vi starter med en god samtale.
            </p>
            <div className="mt-10 flex items-center justify-center gap-6">
              <V3Button href="/v3/kontakt" size="lg">
                Ta kontakt
              </V3Button>
              <span className="hidden text-v3-stone md:inline">|</span>
              <a
                href="/v3/folka"
                className="hidden items-center gap-1 text-sm text-v3-drift transition-colors hover:text-v3-heading md:inline-flex"
              >
                Møt folkene <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
