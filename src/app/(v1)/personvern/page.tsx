import { createPageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/layout/page-hero";

export const metadata = createPageMetadata({
  title: "Personvernerklæring",
  description: "Gnist Consulting sin personvernerklæring.",
  path: "/personvern",
});

export default function PersonvernPage() {
  return (
    <>
      <PageHero
        title="Personvernerklæring"
        description="Gnist Consulting AS tar personvern på alvor. Her beskriver vi hvordan vi samler inn, bruker og beskytter personopplysninger."
      />

      <Section variant="cream">
        <Container>
          <div className="prose-gnist mx-auto max-w-3xl space-y-6">
            <h2 className="font-heading text-2xl text-charcoal">
              Behandlingsansvarlig
            </h2>
            <p className="leading-relaxed text-charcoal">
              Gnist Consulting AS (org.nr. 924 827 847) er
              behandlingsansvarlig for personopplysninger som behandles i
              forbindelse med vår virksomhet og nettsted.
            </p>

            <h2 className="font-heading text-2xl text-charcoal">
              Hvilke opplysninger vi samler inn
            </h2>
            <ul className="list-disc space-y-2 pl-6 text-charcoal">
              <li>
                <strong>Kontaktskjema:</strong> Navn, e-post, selskap og
                melding når du sender oss en henvendelse via kontaktskjemaet.
              </li>
              <li>
                <strong>Informasjonskapsler:</strong> Vi bruker nødvendige
                informasjonskapsler for å sikre at nettstedet fungerer
                korrekt.
              </li>
            </ul>

            <h2 className="font-heading text-2xl text-charcoal">
              Formål med behandlingen
            </h2>
            <p className="leading-relaxed text-charcoal">
              Vi behandler personopplysninger for å besvare henvendelser via
              kontaktskjemaet, administrere kundeforhold og forbedre
              nettstedet vårt.
            </p>

            <h2 className="font-heading text-2xl text-charcoal">
              Rettslig grunnlag
            </h2>
            <p className="leading-relaxed text-charcoal">
              Behandlingen av personopplysninger er basert på samtykke (GDPR
              art. 6 (1) a) når du sender inn kontaktskjemaet, og berettiget
              interesse (GDPR art. 6 (1) f) for administrasjon av
              kundeforhold.
            </p>

            <h2 className="font-heading text-2xl text-charcoal">
              Dine rettigheter
            </h2>
            <p className="leading-relaxed text-charcoal">
              Du har rett til innsyn, retting, sletting og dataportabilitet.
              Du kan også klage til Datatilsynet. Henvendelser kan sendes til{" "}
              <a
                href="mailto:post@gnist.as"
                className="text-ember hover:underline"
              >
                post@gnist.as
              </a>
              .
            </p>

            <h2 className="font-heading text-2xl text-charcoal">
              Endringer
            </h2>
            <p className="leading-relaxed text-charcoal">
              Vi kan oppdatere denne personvernerklæringen ved behov.
              Vesentlige endringer vil bli kommunisert via nettstedet.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
