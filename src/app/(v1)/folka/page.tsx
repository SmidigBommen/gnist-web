import { createPageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/layout/page-hero";
import { TeamMemberCard } from "@/components/blocks/team-member-card";
import { team } from "@/data/team";

export const metadata = createPageMetadata({
  title: "Folka",
  description:
    "Møt menneskene i Gnist – ~30 engasjerte teknologiledere som brenner for faget sitt.",
  path: "/folka",
});

export default function FolkaPage() {
  return (
    <>
      <PageHero
        title="Folka i Gnist"
        description="Vi er ~30 engasjerte teknologiledere med bred kompetanse innen teknisk ledelse, smidig utvikling og produktutvikling. Det er menneskene som gjør Gnist til Gnist."
      />

      <Section variant="cream">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
