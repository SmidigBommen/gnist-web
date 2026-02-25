import { createPageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/container";
import { V3Button } from "@/components/v3/ui/v3-button";
import { values, socialResponsibility } from "@/data/values";
import { company } from "@/data/company";

export const metadata = createPageMetadata({
  title: "Om Gnist",
  description: "Gnist er et norsk konsulenthus som brenner for teknologiledelse.",
  path: "/v3/om-gnist",
});

export default function V3OmGnistPage() {
  return (
    <>
      {/* === HERO: Ultra minimal === */}
      <section className="bg-v3-snow py-28 md:py-40">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-v3-moss">
              Om oss
            </p>
            <h1 className="mt-8 v3-serif text-4xl leading-[1.15] text-v3-heading md:text-5xl lg:text-6xl">
              Mennesker som
              <br />
              bygger teknologi.
              <br />
              Teknologi som
              <br />
              bygger mennesker.
            </h1>
          </div>
        </Container>
      </section>

      <div className="v3-thin-rule mx-auto max-w-7xl" />

      {/* === STORY: Two columns === */}
      <section className="bg-v3-snow py-24 md:py-32">
        <Container>
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-16 md:grid-cols-2">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-v3-moss">
                  Historien
                </p>
                <h2 className="mt-4 v3-serif text-3xl text-v3-heading">
                  Det startet med en idé
                </h2>
              </div>
              <div className="space-y-5 text-v3-text leading-relaxed">
                <p>
                  Samle Norges beste teknologiledere i et fellesskap der de kan
                  vokse, dele og gjøre hverandre bedre.
                </p>
                <p>
                  Vi tror at den viktigste teknologien i enhver organisasjon er
                  menneskene. Verktøy og rammeverk kommer og går, men evnen til
                  å lede, samarbeide og tilpasse seg — den varer.
                </p>
                <p>
                  I dag er vi rundt 30 konsulenter med bred erfaring fra noen av
                  Norges mest spennende selskaper og prosjekter.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* === VALUES: Simple list === */}
      <section className="border-y border-v3-stone/30 bg-v3-paper py-24 md:py-32">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-v3-moss">
              Verdier
            </p>
            <h2 className="mt-4 v3-serif text-3xl text-v3-heading">
              Det vi lever etter
            </h2>
            <div className="mt-12 divide-y divide-v3-stone/30">
              {values.map((value) => (
                <div key={value.title} className="grid gap-4 py-8 md:grid-cols-[200px_1fr]">
                  <h3 className="text-lg font-medium text-v3-heading">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-v3-drift">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* === SOCIAL RESPONSIBILITY === */}
      <section className="bg-v3-snow py-24 md:py-32">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-v3-moss">
              Samfunn
            </p>
            <h2 className="mt-4 v3-serif text-3xl text-v3-heading">
              {socialResponsibility.title}
            </h2>
            <p className="mt-4 text-v3-drift leading-relaxed">
              {socialResponsibility.intro}
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {socialResponsibility.initiatives.map((init) => (
                <div key={init.title} className="border-t border-v3-stone/30 pt-6">
                  <h3 className="text-sm font-medium text-v3-heading">{init.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-v3-drift">
                    {init.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* === CAREERS CTA === */}
      <section className="bg-v3-linen py-28 md:py-36">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="v3-serif text-3xl text-v3-heading md:text-4xl">
              Bli en av oss
            </h2>
            <p className="mt-4 text-v3-drift font-light">
              Er du en erfaren teknologileder som vil jobbe i et sterkt
              fagmiljø? Vi er alltid nysgjerrige på gode folk.
            </p>
            <V3Button href="/v3/kontakt" className="mt-10">
              Snakk med {company.contact.name}
            </V3Button>
          </div>
        </Container>
      </section>
    </>
  );
}
