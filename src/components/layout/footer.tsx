import Link from "next/link";
import { Container } from "@/components/ui/container";
import { footerNavigation } from "@/data/navigation";
import { company } from "@/data/company";

export function Footer() {
  return (
    <footer className="border-t border-ash/20 bg-charcoal text-warm-white">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <span className="font-heading text-2xl text-ember">Gnist</span>
            <p className="mt-4 text-sm leading-relaxed text-ash">
              {company.description}
            </p>
          </div>

          {/* Tjenester */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-glow">
              Tjenester
            </h3>
            <ul className="space-y-3">
              {footerNavigation.tjenester.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ash transition-colors hover:text-warm-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Selskap */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-glow">
              Selskap
            </h3>
            <ul className="space-y-3">
              {footerNavigation.selskap.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ash transition-colors hover:text-warm-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-glow">
              Kontakt
            </h3>
            <ul className="space-y-3 text-sm text-ash">
              <li>{company.contact.name}</li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="transition-colors hover:text-warm-white"
                >
                  {company.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${company.phone}`}
                  className="transition-colors hover:text-warm-white"
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
        <div className="flex flex-col items-center justify-between gap-4 border-t border-warm-gray/20 py-8 md:flex-row">
          <p className="text-sm text-warm-gray">
            &copy; {new Date().getFullYear()} {company.name}. Org.nr.{" "}
            {company.orgNumber}
          </p>
          <div className="flex gap-6">
            {footerNavigation.juridisk.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-warm-gray transition-colors hover:text-warm-white"
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
