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
    <div className="border-b border-v3-stone/40">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between gap-4 py-6 text-left"
        aria-expanded={open}
      >
        <div>
          <h3 className="text-base font-medium text-v3-heading">
            &ldquo;{problem.problem}&rdquo;
          </h3>
          <p className="mt-1 text-sm text-v3-drift">{problem.description}</p>
        </div>
        {open ? (
          <Minus className="mt-0.5 h-4 w-4 shrink-0 text-v3-drift" />
        ) : (
          <Plus className="mt-0.5 h-4 w-4 shrink-0 text-v3-drift" />
        )}
      </button>
      {open && (
        <div className="mb-6 border-l-2 border-v3-moss bg-v3-moss-light/50 px-5 py-4">
          <p className="text-xs font-medium uppercase tracking-widest text-v3-moss">
            Vår tilnærming
          </p>
          <p className="mt-2 text-sm leading-relaxed text-v3-text">
            {problem.solution}
          </p>
        </div>
      )}
    </div>
  );
}
