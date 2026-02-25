"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Problem } from "@/data/problems";

interface V3ProblemCardProps {
  problem: Problem;
}

export function V3ProblemCard({ problem }: V3ProblemCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-v3-stone">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between gap-6 py-7 text-left transition-colors duration-200"
        aria-expanded={open}
      >
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-medium leading-snug text-v3-heading">
            &ldquo;{problem.problem}&rdquo;
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-v3-drift">
            {problem.description}
          </p>
        </div>
        <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center">
          {open ? (
            <Minus className="h-4 w-4 text-v3-heading" />
          ) : (
            <Plus className="h-4 w-4 text-v3-drift" />
          )}
        </div>
      </button>

      <div
        className={cn(
          "grid transition-all duration-200 ease-in-out",
          open ? "grid-rows-[1fr] pb-7" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <div className="border-l-2 border-v3-moss bg-v3-moss-light px-5 py-4">
            <p className="text-xs font-medium uppercase tracking-widest text-v3-moss">
              Vår tilnærming
            </p>
            <p className="mt-2 text-sm leading-relaxed text-v3-text">
              {problem.solution}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
