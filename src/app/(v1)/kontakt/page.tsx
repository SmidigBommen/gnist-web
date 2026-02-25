import { createPageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Card } from "@/components/ui/card";
import { PageHero } from "@/components/layout/page-hero";
import { ContactForm } from "@/components/blocks/contact-form";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { company } from "@/data/company";

export const metadata = createPageMetadata({
  title: "Kontakt",
  description:
    "Ta kontakt med Gnist for en uforpliktende prat om hvordan vi kan hjelpe din organisasjon.",
  path: "/kontakt",
});

export default function KontaktPage() {
  return (
    <>
      <PageHero
        title="Kontakt oss"
        description="Vi starter gjerne med en uforpliktende samtale. Fortell oss litt om hva dere trenger, så tar vi det derfra."
      />

      <Section variant="cream">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact form */}
            <div>
              <Heading as="h3">Send oss en melding</Heading>
              <Text variant="secondary" className="mt-2">
                Fyll ut skjemaet, så hører du fra oss innen kort tid.
              </Text>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            {/* Contact info */}
            <div>
              <Heading as="h3">Eller ta kontakt direkte</Heading>
              <Text variant="secondary" className="mt-2">
                Foretrekker du å ringe eller sende e-post? Her er
                kontaktinformasjonen vår.
              </Text>

              <Card className="mt-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-glow/20">
                    <span className="text-2xl font-heading text-ember">
                      {company.contact.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-charcoal">
                      {company.contact.name}
                    </p>
                    <p className="text-sm text-warm-gray">
                      {company.contact.role}
                    </p>
                  </div>
                </div>
              </Card>

              <div className="mt-6 space-y-4">
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-3 text-charcoal transition-colors hover:text-ember"
                >
                  <Mail className="h-5 w-5 text-ember" />
                  {company.email}
                </a>
                <a
                  href={`tel:${company.phone}`}
                  className="flex items-center gap-3 text-charcoal transition-colors hover:text-ember"
                >
                  <Phone className="h-5 w-5 text-ember" />
                  {company.phone}
                </a>
                <div className="flex items-center gap-3 text-charcoal">
                  <MapPin className="h-5 w-5 text-ember" />
                  {company.address.street}, {company.address.postalCode}{" "}
                  {company.address.city}
                </div>
                <a
                  href={company.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-charcoal transition-colors hover:text-ember"
                >
                  <Linkedin className="h-5 w-5 text-ember" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
