import { createPageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/container";
import { V2Section } from "@/components/v2/ui/v2-section";
import { V2PageHero } from "@/components/v2/layout/v2-page-hero";
import { V2TeamMemberCard } from "@/components/v2/blocks/v2-team-member-card";
import { team } from "@/data/team";

export const metadata = createPageMetadata({
  title: "Folka",
  description:
    "Møt menneskene i Gnist – ~30 engasjerte teknologiledere som brenner for faget sitt.",
  path: "/v2/folka",
});

export default function V2FolkaPage() {
  return (
    <>
      <V2PageHero
        title="Folka i Gnist"
        description="Vi er ~30 engasjerte teknologiledere med bred kompetanse innen teknisk ledelse, smidig utvikling og produktutvikling. Det er menneskene som gjør Gnist til Gnist."
      />

      <V2Section variant="surface">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <V2TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </Container>
      </V2Section>
    </>
  );
}
