import { createPageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/layout/page-hero";

export const metadata = createPageMetadata({
  title: "Åpenhetsloven",
  description:
    "Gnist Consulting sin redegjørelse i henhold til åpenhetsloven.",
  path: "/apenhetsloven",
});

export default function ApenhetslovenPage() {
  return (
    <>
      <PageHero
        title="Åpenhetsloven"
        description="Redegjørelse i henhold til lov om virksomheters åpenhet og arbeid med grunnleggende menneskerettigheter og anstendige arbeidsforhold."
      />

      <Section variant="cream">
        <Container>
          <div className="prose-gnist mx-auto max-w-3xl space-y-6">
            <h2 className="font-heading text-2xl text-charcoal">
              Om Gnist Consulting
            </h2>
            <p className="leading-relaxed text-charcoal">
              Gnist Consulting AS er et norsk konsulenthus med rundt 30 ansatte,
              lokalisert i Oslo. Vi leverer tjenester innen teknisk ledelse,
              smidig utvikling og produktutvikling til norske virksomheter.
            </p>

            <h2 className="font-heading text-2xl text-charcoal">
              Aktsomhetsvurderinger
            </h2>
            <p className="leading-relaxed text-charcoal">
              Som en tjenestevirksomhet med primært norske kunder og ansatte, er
              vår risiko for negativ påvirkning på grunnleggende
              menneskerettigheter og anstendige arbeidsforhold begrenset.
              Likevel tar vi vårt ansvar på alvor og gjennomfører jevnlige
              aktsomhetsvurderinger.
            </p>

            <h2 className="font-heading text-2xl text-charcoal">
              Våre tiltak
            </h2>
            <ul className="list-disc space-y-2 pl-6 text-charcoal">
              <li>
                Vi sikrer gode arbeidsforhold for alle ansatte med
                konkurransedyktig lønn, fleksibel arbeidstid og fokus på
                arbeidsmiljø.
              </li>
              <li>
                Vi jobber aktivt med mangfold og inkludering i vår
                rekrutteringsprosess.
              </li>
              <li>
                Vi stiller krav til våre underleverandører om etterlevelse av
                grunnleggende menneskerettigheter.
              </li>
              <li>
                Vi har etablert rutiner for håndtering av varsling og
                bekymringsmeldinger.
              </li>
            </ul>

            <h2 className="font-heading text-2xl text-charcoal">
              Kontakt
            </h2>
            <p className="leading-relaxed text-charcoal">
              Henvendelser knyttet til åpenhetsloven kan rettes til{" "}
              <a
                href="mailto:post@gnist.as"
                className="text-ember hover:underline"
              >
                post@gnist.as
              </a>
              . Vi vil besvare alle henvendelser innen tre uker.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
