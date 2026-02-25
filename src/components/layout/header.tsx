"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { mainNavigation } from "@/data/navigation";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ash/20 bg-warm-white/90 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-heading text-2xl text-ember">Gnist</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {mainNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "text-ember"
                    : "text-charcoal hover:text-ember"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button href="/kontakt" size="sm" className="ml-4">
              Ta kontakt
            </Button>
          </nav>

          {/* Mobile toggle */}
          <button
            className="rounded-lg p-2 text-charcoal md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Lukk meny" : "Åpne meny"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="border-t border-ash/20 pb-6 pt-4 md:hidden">
            <div className="flex flex-col gap-1">
              {mainNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "rounded-lg px-3 py-3 text-base font-medium transition-colors",
                    pathname === item.href
                      ? "bg-ember/10 text-ember"
                      : "text-charcoal hover:bg-cream"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Button href="/kontakt" className="mt-4">
                Ta kontakt
              </Button>
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
}
