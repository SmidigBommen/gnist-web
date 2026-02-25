import { createPageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/container";
import { V2Section } from "@/components/v2/ui/v2-section";
import { V2Heading } from "@/components/v2/ui/v2-heading";
import { V2Text } from "@/components/v2/ui/v2-text";
import { V2Card } from "@/components/v2/ui/v2-card";
import { V2PageHero } from "@/components/v2/layout/v2-page-hero";
import { V2ContactForm } from "@/components/v2/blocks/v2-contact-form";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { company } from "@/data/company";

export const metadata = createPageMetadata({
  title: "Kontakt",
  description:
    "Ta kontakt med Gnist for en uforpliktende prat om hvordan vi kan hjelpe din organisasjon.",
  path: "/v2/kontakt",
});

export default function V2KontaktPage() {
  return (
    <>
      <V2PageHero
        title="Kontakt oss"
        description="Vi starter gjerne med en uforpliktende samtale. Fortell oss litt om hva dere trenger, så tar vi det derfra."
      />

      <V2Section variant="surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact form */}
            <div>
              <V2Heading as="h3">Send oss en melding</V2Heading>
              <V2Text variant="muted" className="mt-2">
                Fyll ut skjemaet, så hører du fra oss innen kort tid.
              </V2Text>
              <div className="mt-8">
                <V2ContactForm />
              </div>
            </div>

            {/* Contact info */}
            <div>
              <V2Heading as="h3">Eller ta kontakt direkte</V2Heading>
              <V2Text variant="muted" className="mt-2">
                Foretrekker du å ringe eller sende e-post? Her er
                kontaktinformasjonen vår.
              </V2Text>

              <V2Card className="mt-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center border border-v2-cyan/20 bg-v2-cyan/5">
                    <span className="font-body text-2xl font-bold text-v2-cyan">
                      {company.contact.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-v2-heading">
                      {company.contact.name}
                    </p>
                    <p className="text-sm text-v2-muted">
                      {company.contact.role}
                    </p>
                  </div>
                </div>
              </V2Card>

              <div className="mt-6 space-y-4">
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-3 text-v2-text transition-colors hover:text-v2-cyan"
                >
                  <Mail className="h-5 w-5 text-v2-cyan" />
                  {company.email}
                </a>
                <a
                  href={`tel:${company.phone}`}
                  className="flex items-center gap-3 text-v2-text transition-colors hover:text-v2-cyan"
                >
                  <Phone className="h-5 w-5 text-v2-cyan" />
                  {company.phone}
                </a>
                <div className="flex items-center gap-3 text-v2-text">
                  <MapPin className="h-5 w-5 text-v2-cyan" />
                  {company.address.street}, {company.address.postalCode}{" "}
                  {company.address.city}
                </div>
                <a
                  href={company.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-v2-text transition-colors hover:text-v2-cyan"
                >
                  <Linkedin className="h-5 w-5 text-v2-cyan" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </Container>
      </V2Section>
    </>
  );
}
