import { createPageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/container";
import { V3Button } from "@/components/v3/ui/v3-button";
import { V3TeamMemberCard } from "@/components/v3/blocks/v3-team-member-card";
import { team } from "@/data/team";

export const metadata = createPageMetadata({
  title: "Teamet",
  description: "Møt menneskene i Gnist.",
  path: "/v3/folka",
});

export default function V3FolkaPage() {
  return (
    <>
      {/* === HERO === */}
      <section className="bg-v3-snow py-28 md:py-40">
        <Container>
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-v3-moss">
              Teamet
            </p>
            <h1 className="mt-8 v3-serif text-4xl leading-[1.15] text-v3-heading md:text-5xl lg:text-6xl">
              Menneskene som
              <br />
              gjør Gnist til Gnist.
            </h1>
            <p className="mt-8 max-w-xl text-lg font-light leading-relaxed text-v3-drift">
              {team.length} teknologiledere med bred kompetanse og én felles
              gnist for faget.
            </p>
          </div>
        </Container>
      </section>

      <div className="v3-thin-rule mx-auto max-w-7xl" />

      {/* === TEAM LIST: Clean, airy === */}
      <section className="bg-v3-snow py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl divide-y divide-v3-stone/30">
            {team.map((member) => (
              <V3TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </Container>
      </section>

      {/* === CTA === */}
      <section className="bg-v3-linen py-28 md:py-36">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="v3-serif text-3xl text-v3-heading">
              Plass til deg?
            </h2>
            <p className="mt-4 text-v3-drift font-light">
              Vi er alltid nysgjerrige på folk som brenner for faget sitt.
            </p>
            <V3Button href="/v3/kontakt" className="mt-10">
              Ta kontakt
            </V3Button>
          </div>
        </Container>
      </section>
    </>
  );
}
