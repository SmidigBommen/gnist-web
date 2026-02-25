import Link from "next/link";
import { Container } from "@/components/ui/container";
import { v3FooterNavigation } from "@/data/v3-navigation";
import { company } from "@/data/company";

export function V3Footer() {
  return (
    <footer className="border-t border-v3-stone/30 bg-v3-paper">
      <Container>
        <div className="grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <span className="v3-serif text-2xl text-v3-heading">Gnist</span>
            <p className="mt-4 text-sm leading-relaxed text-v3-drift">
              {company.description}
            </p>
          </div>

          {/* Tjenester */}
          <div>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-widest text-v3-drift">
              Tjenester
            </h3>
            <ul className="space-y-3">
              {v3FooterNavigation.tjenester.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-v3-text transition-colors duration-300 hover:text-v3-moss"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Selskap */}
          <div>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-widest text-v3-drift">
              Selskap
            </h3>
            <ul className="space-y-3">
              {v3FooterNavigation.selskap.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-v3-text transition-colors duration-300 hover:text-v3-moss"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-widest text-v3-drift">
              Kontakt
            </h3>
            <ul className="space-y-3 text-sm text-v3-text">
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="transition-colors duration-300 hover:text-v3-moss"
                >
                  {company.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${company.phone}`}
                  className="transition-colors duration-300 hover:text-v3-moss"
                >
                  {company.phone}
                </a>
              </li>
              <li className="text-v3-drift">
                {company.address.street}
                <br />
                {company.address.postalCode} {company.address.city}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-v3-stone/30 py-8 md:flex-row">
          <p className="text-xs text-v3-drift">
            &copy; {new Date().getFullYear()} {company.name}
          </p>
          <div className="flex gap-6">
            {v3FooterNavigation.juridisk.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs text-v3-drift transition-colors hover:text-v3-text"
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
