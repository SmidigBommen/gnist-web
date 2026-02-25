import Link from "next/link";
import { Container } from "@/components/ui/container";
import { V3Button } from "@/components/v3/ui/v3-button";
import { ArrowRight, Quote } from "lucide-react";

const clients = [
  "NRK", "DNB", "Posten", "Vy", "NAV", "Storebrand", "Finn.no", "Schibsted",
];

export default function V3HomePage() {
  return (
    <>
      {/* === HERO: Spacious editorial === */}
      <section className="bg-v3-snow py-28 md:py-40 lg:py-52">
        <Container>
          <div className="max-w-4xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-v3-drift">
              Teknologiledelse &middot; Smidig &middot; Produkt
            </p>
            <h1 className="mt-8 v3-serif text-5xl leading-[1.1] text-v3-heading md:text-6xl lg:text-7xl">
              Vi gjør organisasjoner
              <br />
              bedre, innenfra.
            </h1>
            <p className="mt-8 max-w-xl text-lg font-light leading-relaxed text-v3-drift">
              ~30 erfarne teknologiledere som hjelper med å levere bedre,
              raskere og med mer glede.
            </p>
            <div className="mt-12 flex items-center gap-6">
              <V3Button href="/v3/kontakt" size="lg">
                Ta kontakt
              </V3Button>
              <Link
                href="/v3/tjenester"
                className="group inline-flex items-center gap-2 text-sm text-v3-drift transition-colors hover:text-v3-heading"
              >
                Se tjenester
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* === THIN RULE === */}
      <div className="v3-thin-rule mx-auto max-w-7xl" />

      {/* === THREE PILLARS: Clean horizontal === */}
      <section className="bg-v3-snow py-24 md:py-32">
        <Container>
          <div className="grid gap-0 divide-y divide-v3-stone/30 md:grid-cols-3 md:divide-x md:divide-y-0">
            {[
              { title: "Teknisk ledelse", text: "CTO-er, tech leads og arkitekter som leverer retning og resultater fra dag én." },
              { title: "Smidig utvikling", text: "Coaching og transformasjon tilpasset deres virkelighet — ikke bare et rammeverk." },
              { title: "Produktutvikling", text: "Fra strategi til leveranse. Vi hjelper med hele verdikjeden." },
            ].map((pillar, i) => (
              <div key={pillar.title} className="py-8 md:px-10 md:py-0 first:md:pl-0 last:md:pr-0">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-v3-moss">
                  0{i + 1}
                </span>
                <h3 className="mt-4 text-xl font-medium text-v3-heading">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-v3-drift">
                  {pillar.text}
                </p>
                <Link
                  href={`/v3/tjenester#${["teknisk-ledelse", "smidig-utvikling", "produktutvikling"][i]}`}
                  className="mt-4 inline-flex items-center gap-1 text-sm text-v3-text transition-colors hover:text-v3-moss"
                >
                  Les mer <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* === CLIENTS === */}
      <section className="border-y border-v3-stone/30 bg-v3-paper py-12">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
            {clients.map((client) => (
              <span
                key={client}
                className="text-sm tracking-wide text-v3-stone transition-colors hover:text-v3-text"
              >
                {client}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* === PULL QUOTE === */}
      <section className="bg-v3-snow py-28 md:py-36">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Quote className="mx-auto h-8 w-8 text-v3-stone" />
            <blockquote className="mt-8 v3-serif text-2xl leading-relaxed text-v3-heading md:text-3xl">
              Gnist-konsulentene har en unik evne til å forstå helheten.
              De leverte ikke bare teknisk kompetanse, men hjalp oss med
              å bygge en kultur for kontinuerlig forbedring.
            </blockquote>
            <div className="mt-8">
              <div className="mx-auto h-px w-12 bg-v3-moss" />
              <p className="mt-4 text-sm text-v3-drift">
                Teknologidirektør, stor norsk mediebedrift
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* === STATS: Minimal === */}
      <section className="border-y border-v3-stone/30 bg-v3-paper py-16">
        <Container>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: "~30", label: "konsulenter" },
              { value: "15+", label: "års erfaring snitt" },
              { value: "50+", label: "fornøyde kunder" },
              { value: "4", label: "kurs og workshops" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="v3-serif text-3xl text-v3-heading md:text-4xl">
                  {stat.value}
                </span>
                <p className="mt-1 text-xs uppercase tracking-widest text-v3-drift">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* === SECOND QUOTE === */}
      <section className="bg-v3-snow py-20 md:py-28">
        <Container>
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <blockquote className="text-lg leading-relaxed text-v3-text italic">
                &ldquo;Vi trengte noen som kunne ta teknisk lederskap fra dag én.
                Gnist leverte over all forventning — og teamet vårt ble
                merkbart bedre.&rdquo;
              </blockquote>
              <p className="mt-4 text-sm text-v3-drift">
                VP Engineering, norsk fintech-selskap
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Link
                href="/v3/folka"
                className="group flex flex-col items-center gap-3 text-center"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-v3-stone/50 transition-colors group-hover:border-v3-heading group-hover:bg-v3-linen">
                  <ArrowRight className="h-5 w-5 text-v3-drift transition-colors group-hover:text-v3-heading" />
                </span>
                <span className="text-sm text-v3-drift transition-colors group-hover:text-v3-heading">
                  Møt teamet
                </span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* === CTA === */}
      <section className="bg-v3-linen py-28 md:py-36">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="v3-serif text-3xl text-v3-heading md:text-4xl">
              Klar for en samtale?
            </h2>
            <p className="mt-4 text-v3-drift font-light">
              Vi starter gjerne med en kaffe — ingen forpliktelser, bare
              ærlig rådgivning.
            </p>
            <V3Button href="/v3/kontakt" size="lg" className="mt-10">
              Kontakt oss
            </V3Button>
          </div>
        </Container>
      </section>
    </>
  );
}
