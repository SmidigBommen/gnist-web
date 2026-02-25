import { V2Card } from "@/components/v2/ui/v2-card";
import type { TeamMember } from "@/data/team";
import { User } from "lucide-react";

interface V2TeamMemberCardProps {
  member: TeamMember;
}

export function V2TeamMemberCard({ member }: V2TeamMemberCardProps) {
  return (
    <V2Card hover className="flex flex-col items-center text-center">
      <div className="mb-4 flex h-24 w-24 items-center justify-center border border-v2-border bg-v2-surface-alt">
        <User className="h-10 w-10 text-v2-muted" />
      </div>
      <h3 className="font-body text-lg font-semibold text-v2-heading">{member.name}</h3>
      <p className="mt-1 font-mono text-xs uppercase tracking-wider text-v2-cyan">{member.role}</p>
    </V2Card>
  );
}
