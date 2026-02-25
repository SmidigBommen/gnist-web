import { createPageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/container";
import { V2ContactForm } from "@/components/v2/blocks/v2-contact-form";
import { Mail, Phone, MapPin, Linkedin, ArrowUpRight } from "lucide-react";
import { company } from "@/data/company";

export const metadata = createPageMetadata({
  title: "Kontakt",
  description:
    "Ta kontakt med Gnist for en uforpliktende prat.",
  path: "/v2/kontakt",
});

export default function V2KontaktPage() {
  return (
    <>
      {/* === HERO: Dramatic split === */}
      <section className="relative min-h-[60vh] flex items-center bg-v2-void">
        <div className="absolute inset-0 v2-dot-grid opacity-10" />
        <div
          className="absolute -top-20 right-0 h-[500px] w-[500px] rounded-full opacity-10 blur-[120px]"
          style={{ background: "radial-gradient(circle, #00D4FF, transparent)" }}
        />
        <Container>
          <div className="relative">
            <h1 className="text-5xl font-bold text-v2-heading md:text-7xl lg:text-8xl">
              La oss
              <br />
              <span className="v2-gradient-text">snakkes.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-v2-muted">
              Ingen pitch-deck. Ingen forpliktelser.
              Bare en ærlig samtale om utfordringene dine.
            </p>
          </div>
        </Container>
      </section>

      {/* === CONTACT INFO: Horizontal strip === */}
      <section className="border-y border-v2-border bg-v2-surface">
        <Container>
          <div className="grid grid-cols-1 divide-y divide-v2-border md:grid-cols-4 md:divide-x md:divide-y-0">
            <a
              href={`mailto:${company.email}`}
              className="group flex items-center gap-4 py-8 transition-colors md:px-6 md:py-10"
            >
              <Mail className="h-5 w-5 text-v2-cyan" />
              <div className="flex-1">
                <span className="font-mono text-xs uppercase tracking-widest text-v2-muted">E-post</span>
                <p className="mt-1 text-sm text-v2-text group-hover:text-v2-cyan transition-colors">
                  {company.email}
                </p>
              </div>
              <ArrowUpRight className="h-4 w-4 text-v2-border group-hover:text-v2-cyan transition-colors" />
            </a>
            <a
              href={`tel:${company.phone}`}
              className="group flex items-center gap-4 py-8 transition-colors md:px-6 md:py-10"
            >
              <Phone className="h-5 w-5 text-v2-cyan" />
              <div className="flex-1">
                <span className="font-mono text-xs uppercase tracking-widest text-v2-muted">Telefon</span>
                <p className="mt-1 text-sm text-v2-text group-hover:text-v2-cyan transition-colors">
                  {company.phone}
                </p>
              </div>
              <ArrowUpRight className="h-4 w-4 text-v2-border group-hover:text-v2-cyan transition-colors" />
            </a>
            <div className="flex items-center gap-4 py-8 md:px-6 md:py-10">
              <MapPin className="h-5 w-5 text-v2-cyan" />
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-v2-muted">Kontor</span>
                <p className="mt-1 text-sm text-v2-text">
                  {company.address.street}, {company.address.postalCode} {company.address.city}
                </p>
              </div>
            </div>
            <a
              href={company.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 py-8 transition-colors md:px-6 md:py-10"
            >
              <Linkedin className="h-5 w-5 text-v2-cyan" />
              <div className="flex-1">
                <span className="font-mono text-xs uppercase tracking-widest text-v2-muted">LinkedIn</span>
                <p className="mt-1 text-sm text-v2-text group-hover:text-v2-cyan transition-colors">
                  Gnist Consulting
                </p>
              </div>
              <ArrowUpRight className="h-4 w-4 text-v2-border group-hover:text-v2-cyan transition-colors" />
            </a>
          </div>
        </Container>
      </section>

      {/* === FORM + CONTACT PERSON: Asymmetric split === */}
      <section className="bg-v2-void py-24 md:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr]">
            {/* Form */}
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-v2-cyan">
                Skriv til oss
              </span>
              <h2 className="mt-3 text-3xl font-bold text-v2-heading md:text-4xl">
                Send en melding
              </h2>
              <p className="mt-4 text-v2-muted">
                Fyll ut skjemaet, så hører du fra oss innen kort tid.
              </p>
              <div className="mt-10">
                <V2ContactForm />
              </div>
            </div>

            {/* Contact person */}
            <div className="lg:sticky lg:top-32 lg:self-start">
              <span className="font-mono text-xs uppercase tracking-widest text-v2-purple">
                Din kontakt
              </span>
              <div className="mt-6 border border-v2-border bg-v2-surface p-8">
                <div className="flex h-20 w-20 items-center justify-center border border-v2-cyan/20 bg-v2-cyan/5">
                  <span className="font-body text-3xl font-bold text-v2-cyan">
                    {company.contact.name.charAt(0)}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-bold text-v2-heading">
                  {company.contact.name}
                </h3>
                <p className="mt-1 text-sm text-v2-muted">{company.contact.role}</p>

                <div className="mt-6 space-y-3 border-t border-v2-border pt-6">
                  <a
                    href={`mailto:${company.contact.email}`}
                    className="flex items-center gap-3 text-sm text-v2-text transition-colors hover:text-v2-cyan"
                  >
                    <Mail className="h-4 w-4 text-v2-cyan" />
                    {company.contact.email}
                  </a>
                  <a
                    href={`tel:${company.contact.phone}`}
                    className="flex items-center gap-3 text-sm text-v2-text transition-colors hover:text-v2-cyan"
                  >
                    <Phone className="h-4 w-4 text-v2-cyan" />
                    {company.contact.phone}
                  </a>
                </div>
              </div>

              {/* Office hours note */}
              <div className="mt-4 border border-v2-purple/20 bg-v2-purple/5 p-6">
                <span className="font-mono text-xs uppercase tracking-widest text-v2-purple">
                  Responstid
                </span>
                <p className="mt-2 text-sm text-v2-muted">
                  Vi svarer vanligvis innen 24 timer på hverdager.
                  Haster det? Ring oss direkte.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
