"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { V2Button } from "@/components/v2/ui/v2-button";
import { v2MainNavigation } from "@/data/v2-navigation";

export function V2Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-v2-border bg-v2-void/90 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link href="/v2" className="flex items-center gap-2">
            <span className="font-body text-2xl font-bold text-v2-cyan">Gnist</span>
            <span className="hidden font-mono text-xs uppercase tracking-widest text-v2-muted sm:inline">
              v2
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {v2MainNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "text-v2-cyan"
                    : "text-v2-text hover:text-v2-cyan"
                )}
              >
                {item.label}
                {pathname === item.href && (
                  <span className="absolute inset-x-3 -bottom-[1.0625rem] h-px bg-v2-cyan md:-bottom-[1.3125rem]" />
                )}
              </Link>
            ))}
            <V2Button href="/v2/kontakt" size="sm" className="ml-4">
              Kontakt
            </V2Button>
          </nav>

          {/* Mobile toggle */}
          <button
            className="p-2 text-v2-text md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Lukk meny" : "Åpne meny"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="border-t border-v2-border pb-6 pt-4 md:hidden">
            <div className="flex flex-col gap-1">
              {v2MainNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "px-3 py-3 text-base font-medium transition-colors",
                    pathname === item.href
                      ? "text-v2-cyan"
                      : "text-v2-text hover:text-v2-cyan"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <V2Button href="/v2/kontakt" className="mt-4">
                Kontakt
              </V2Button>
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
}
