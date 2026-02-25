"use client";

import { useState } from "react";
import { ChevronDown, Compass, Repeat, Rocket, Briefcase } from "lucide-react";
import { V2Card } from "@/components/v2/ui/v2-card";
import { cn } from "@/lib/utils";
import type { Service } from "@/data/services";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Compass,
  Repeat,
  Rocket,
  Briefcase,
};

interface V2ServiceCardProps {
  service: Service;
}

export function V2ServiceCard({ service }: V2ServiceCardProps) {
  const [open, setOpen] = useState(false);
  const Icon = iconMap[service.icon] || Briefcase;

  return (
    <V2Card hover className="overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-start gap-4 text-left"
        aria-expanded={open}
      >
        <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-v2-cyan/20 bg-v2-cyan/5">
          <Icon className="h-6 w-6 text-v2-cyan" />
        </div>
        <div className="flex-1">
          <h3 className="font-body text-xl font-semibold text-v2-heading">{service.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-v2-muted">
            {service.description}
          </p>
        </div>
        <ChevronDown
          className={cn(
            "mt-1 h-5 w-5 shrink-0 text-v2-muted transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>
      {open && (
        <ul className="mt-4 space-y-2 border-t border-v2-border pt-4 pl-16">
          {service.details.map((detail) => (
            <li key={detail} className="flex items-start gap-2 text-sm text-v2-text">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-v2-cyan" />
              {detail}
            </li>
          ))}
        </ul>
      )}
    </V2Card>
  );
}
