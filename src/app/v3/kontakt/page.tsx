import { createPageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/container";
import { V3ContactForm } from "@/components/v3/blocks/v3-contact-form";
import { Mail, Phone, MapPin } from "lucide-react";
import { company } from "@/data/company";

export const metadata = createPageMetadata({
  title: "Kontakt",
  description: "Ta kontakt med Gnist.",
  path: "/v3/kontakt",
});

export default function V3KontaktPage() {
  return (
    <>
      {/* === HERO === */}
      <section className="bg-v3-snow py-28 md:py-40">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-v3-moss">
              Kontakt
            </p>
            <h1 className="mt-8 v3-serif text-4xl leading-[1.15] text-v3-heading md:text-5xl lg:text-6xl">
              La oss ta en
              <br />
              kaffe sammen.
            </h1>
            <p className="mt-8 max-w-xl text-lg font-light leading-relaxed text-v3-drift">
              Ingen forpliktelser — bare en ærlig samtale om utfordringene dine.
            </p>
          </div>
        </Container>
      </section>

      <div className="v3-thin-rule mx-auto max-w-7xl" />

      {/* === CONTACT INFO: Minimal horizontal === */}
      <section className="bg-v3-snow py-16">
        <Container>
          <div className="mx-auto flex max-w-3xl flex-col gap-6 md:flex-row md:gap-12">
            <a
              href={`mailto:${company.email}`}
              className="flex items-center gap-3 text-sm text-v3-text transition-colors hover:text-v3-moss"
            >
              <Mail className="h-4 w-4 text-v3-moss" />
              {company.email}
            </a>
            <a
              href={`tel:${company.phone}`}
              className="flex items-center gap-3 text-sm text-v3-text transition-colors hover:text-v3-moss"
            >
              <Phone className="h-4 w-4 text-v3-moss" />
              {company.phone}
            </a>
            <span className="flex items-center gap-3 text-sm text-v3-drift">
              <MapPin className="h-4 w-4 text-v3-moss" />
              {company.address.street}, {company.address.postalCode} {company.address.city}
            </span>
          </div>
        </Container>
      </section>

      <div className="v3-thin-rule mx-auto max-w-7xl" />

      {/* === FORM + PERSON: Two columns === */}
      <section className="bg-v3-snow py-24 md:py-32">
        <Container>
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-20 md:grid-cols-[1.2fr_1fr]">
              {/* Form */}
              <div>
                <h2 className="v3-serif text-2xl text-v3-heading">
                  Send en melding
                </h2>
                <p className="mt-2 text-sm text-v3-drift">
                  Fyll ut skjemaet, så hører du fra oss.
                </p>
                <div className="mt-10">
                  <V3ContactForm />
                </div>
              </div>

              {/* Contact person */}
              <div className="md:pt-2">
                <h2 className="v3-serif text-2xl text-v3-heading">
                  Din kontakt
                </h2>
                <div className="mt-8 border-t border-v3-stone/30 pt-8">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-v3-linen">
                      <span className="v3-serif text-xl text-v3-heading">
                        {company.contact.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-v3-heading">
                        {company.contact.name}
                      </p>
                      <p className="text-sm text-v3-drift">{company.contact.role}</p>
                    </div>
                  </div>
                  <div className="mt-6 space-y-3">
                    <a
                      href={`mailto:${company.contact.email}`}
                      className="flex items-center gap-3 text-sm text-v3-text transition-colors hover:text-v3-moss"
                    >
                      <Mail className="h-4 w-4 text-v3-moss" />
                      {company.contact.email}
                    </a>
                    <a
                      href={`tel:${company.contact.phone}`}
                      className="flex items-center gap-3 text-sm text-v3-text transition-colors hover:text-v3-moss"
                    >
                      <Phone className="h-4 w-4 text-v3-moss" />
                      {company.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="mt-10 border-t border-v3-stone/30 pt-8">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-v3-drift">
                    Responstid
                  </p>
                  <p className="mt-2 text-sm text-v3-drift leading-relaxed">
                    Vi svarer vanligvis innen 24 timer på hverdager.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
