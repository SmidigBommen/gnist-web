import Link from "next/link";
import { Container } from "@/components/ui/container";
import { v2FooterNavigation } from "@/data/v2-navigation";
import { company } from "@/data/company";

export function V2Footer() {
  return (
    <footer className="border-t border-v2-border bg-v2-surface">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <span className="font-body text-2xl font-bold text-v2-cyan">Gnist</span>
            <p className="mt-4 text-sm leading-relaxed text-v2-muted">
              {company.description}
            </p>
          </div>

          {/* Tjenester */}
          <div>
            <h3 className="mb-4 font-mono text-xs font-semibold uppercase tracking-widest text-v2-cyan">
              Tjenester
            </h3>
            <ul className="space-y-3">
              {v2FooterNavigation.tjenester.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-v2-muted transition-colors hover:text-v2-text"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Selskap */}
          <div>
            <h3 className="mb-4 font-mono text-xs font-semibold uppercase tracking-widest text-v2-cyan">
              Selskap
            </h3>
            <ul className="space-y-3">
              {v2FooterNavigation.selskap.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-v2-muted transition-colors hover:text-v2-text"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="mb-4 font-mono text-xs font-semibold uppercase tracking-widest text-v2-cyan">
              Kontakt
            </h3>
            <ul className="space-y-3 text-sm text-v2-muted">
              <li>{company.contact.name}</li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="transition-colors hover:text-v2-text"
                >
                  {company.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${company.phone}`}
                  className="transition-colors hover:text-v2-text"
                >
                  {company.phone}
                </a>
              </li>
              <li>
                {company.address.street}, {company.address.postalCode}{" "}
                {company.address.city}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-v2-border py-8 md:flex-row">
          <p className="text-sm text-v2-muted">
            &copy; {new Date().getFullYear()} {company.name}. Org.nr.{" "}
            {company.orgNumber}
          </p>
          <div className="flex gap-6">
            {v2FooterNavigation.juridisk.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-v2-muted transition-colors hover:text-v2-text"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
