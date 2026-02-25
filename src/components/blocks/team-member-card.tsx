import { Card } from "@/components/ui/card";
import type { TeamMember } from "@/data/team";
import { User } from "lucide-react";

interface TeamMemberCardProps {
  member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <Card hover className="flex flex-col items-center text-center">
      <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-cream">
        <User className="h-10 w-10 text-warm-gray" />
      </div>
      <h3 className="font-heading text-lg text-charcoal">{member.name}</h3>
      <p className="mt-1 text-sm font-medium text-ember">{member.role}</p>
    </Card>
  );
}
