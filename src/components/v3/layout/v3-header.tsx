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

  return (
    <header className="sticky top-0 z-50 border-b border-v3-stone/30 bg-v3-snow/95 backdrop-blur-sm">
      <Container>
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link href="/v3" className="flex items-baseline gap-2">
            <span className="v3-serif text-2xl text-v3-heading">Gnist</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {v3MainNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm tracking-wide transition-colors duration-300",
                  pathname === item.href
                    ? "text-v3-heading"
                    : "text-v3-drift hover:text-v3-heading"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            className="p-2 text-v3-text md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Lukk meny" : "Åpne meny"}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="border-t border-v3-stone/30 pb-8 pt-6 md:hidden">
            <div className="flex flex-col gap-1">
              {v3MainNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "py-3 text-base tracking-wide transition-colors",
                    pathname === item.href
                      ? "text-v3-heading"
                      : "text-v3-drift hover:text-v3-heading"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
}
