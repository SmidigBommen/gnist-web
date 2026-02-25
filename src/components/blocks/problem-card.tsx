"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Problem } from "@/data/problems";

interface ProblemCardProps {
  problem: Problem;
}

export function ProblemCard({ problem }: ProblemCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <Card hover className="overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between gap-4 text-left"
        aria-expanded={open}
      >
        <div>
          <h3 className="font-heading text-lg text-charcoal">
            &ldquo;{problem.problem}&rdquo;
          </h3>
          <p className="mt-2 text-sm text-warm-gray">{problem.description}</p>
        </div>
        <ChevronDown
          className={cn(
            "mt-1 h-5 w-5 shrink-0 text-warm-gray transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>
      {open && (
        <div className="mt-4 rounded-xl border-l-4 border-ember bg-glow/10 p-4">
          <p className="text-sm font-medium text-charcoal">Vår tilnærming:</p>
          <p className="mt-1 text-sm leading-relaxed text-warm-gray">
            {problem.solution}
          </p>
        </div>
      )}
    </Card>
  );
}
