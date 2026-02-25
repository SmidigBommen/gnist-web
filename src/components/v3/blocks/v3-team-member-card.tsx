import type { TeamMember } from "@/data/team";

interface V3TeamMemberCardProps {
  member: TeamMember;
}

export function V3TeamMemberCard({ member }: V3TeamMemberCardProps) {
  const initials = member.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  return (
    <div className="group py-6">
      <div className="flex items-center gap-5">
        {/* Circular initials avatar */}
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-v3-linen text-sm font-semibold text-v3-heading">
          {initials}
        </div>

        <div className="min-w-0">
          <h3 className="truncate text-base font-medium text-v3-heading">
            {member.name}
          </h3>
          <p className="mt-0.5 truncate text-sm text-v3-drift">{member.role}</p>
        </div>
      </div>
    </div>
  );
}
