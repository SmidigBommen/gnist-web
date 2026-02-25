"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { v3MainNavigation } from "@/data/v3-navigation";

export function V3Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // All nav items except Kontakt (rendered as pill button)
  const navLinks = v3MainNavigation.filter((item) => item.label !== "Kontakt");
  const kontaktItem = v3MainNavigation.find((item) => item.label === "Kontakt");

  return (
    <header className="sticky top-0 z-50 border-b border-v3-stone bg-v3-snow/95 backdrop-blur-sm">
      <Container>
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Brand */}
          <Link href="/v3" className="flex items-baseline gap-2">
            <span className="v3-serif text-2xl text-v3-heading">Gnist</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative text-sm tracking-wide transition-colors duration-200",
                    isActive
                      ? "text-v3-heading"
                      : "text-v3-drift hover:text-v3-heading"
                  )}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-px bg-v3-heading" />
                  )}
                </Link>
              );
            })}

            {/* Kontakt pill button */}
            {kontaktItem && (
              <Link
                href={kontaktItem.href}
                className={cn(
                  "rounded-full px-5 py-2 text-sm font-medium tracking-wide transition-colors duration-200",
                  pathname === kontaktItem.href
                    ? "bg-v3-heading text-white"
                    : "bg-v3-heading text-white hover:bg-v3-text"
                )}
              >
                {kontaktItem.label}
              </Link>
            )}
          </nav>

          {/* Mobile toggle */}
          <button
            className="p-2 text-v3-heading md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Lukk meny" : "Åpne meny"}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="border-t border-v3-stone pb-8 pt-6 md:hidden">
            <div className="flex flex-col gap-1">
              {v3MainNavigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "rounded-lg px-3 py-3 text-base tracking-wide transition-colors duration-200",
                      isActive
                        ? "bg-v3-linen text-v3-heading font-medium"
                        : "text-v3-drift hover:bg-v3-linen hover:text-v3-heading"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
}
