"use client";

import { useState } from "react";
import { ChevronDown, Compass, Repeat, Rocket, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Service } from "@/data/services";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Compass,
  Repeat,
  Rocket,
  Briefcase,
};

interface V3ServiceCardProps {
  service: Service;
}

export function V3ServiceCard({ service }: V3ServiceCardProps) {
  const [open, setOpen] = useState(false);
  const Icon = iconMap[service.icon] || Briefcase;

  return (
    <div className="border-b border-v3-stone">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center gap-5 py-8 text-left transition-colors duration-200"
        aria-expanded={open}
      >
        <Icon className="h-5 w-5 shrink-0 text-v3-moss" />
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-medium text-v3-heading">
            {service.title}
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-v3-drift">
            {service.description}
          </p>
        </div>
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 text-v3-drift transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>

      {open && (
        <div className="pb-8 pl-10">
          <ul className="space-y-3">
            {service.details.map((detail) => (
              <li
                key={detail}
                className="flex items-start gap-3 text-sm leading-relaxed text-v3-text"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-v3-moss" />
                {detail}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
