"use client";

import { useState } from "react";
import { ChevronDown, Compass, Repeat, Rocket, Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Service } from "@/data/services";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Compass,
  Repeat,
  Rocket,
  Briefcase,
};

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const [open, setOpen] = useState(false);
  const Icon = iconMap[service.icon] || Briefcase;

  return (
    <Card hover className="overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-start gap-4 text-left"
        aria-expanded={open}
      >
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-glow/20">
          <Icon className="h-6 w-6 text-ember" />
        </div>
        <div className="flex-1">
          <h3 className="font-heading text-xl text-charcoal">{service.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-warm-gray">
            {service.description}
          </p>
        </div>
        <ChevronDown
          className={cn(
            "mt-1 h-5 w-5 shrink-0 text-warm-gray transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>
      {open && (
        <ul className="mt-4 space-y-2 border-t border-ash/20 pt-4 pl-16">
          {service.details.map((detail) => (
            <li key={detail} className="flex items-start gap-2 text-sm text-charcoal">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ember" />
              {detail}
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}
