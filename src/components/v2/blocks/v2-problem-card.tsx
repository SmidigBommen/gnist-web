"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { V2Card } from "@/components/v2/ui/v2-card";
import { cn } from "@/lib/utils";
import type { Problem } from "@/data/problems";

interface V2ProblemCardProps {
  problem: Problem;
}

export function V2ProblemCard({ problem }: V2ProblemCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <V2Card hover className="overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between gap-4 text-left"
        aria-expanded={open}
      >
        <div>
          <h3 className="font-body text-lg font-semibold text-v2-heading">
            &ldquo;{problem.problem}&rdquo;
          </h3>
          <p className="mt-2 text-sm text-v2-muted">{problem.description}</p>
        </div>
        <ChevronDown
          className={cn(
            "mt-1 h-5 w-5 shrink-0 text-v2-muted transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>
      {open && (
        <div className="mt-4 border-l-2 border-v2-cyan bg-v2-cyan/5 p-4">
          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-v2-cyan">
            Vår tilnærming
          </p>
          <p className="mt-2 text-sm leading-relaxed text-v2-text">
            {problem.solution}
          </p>
        </div>
      )}
    </V2Card>
  );
}
