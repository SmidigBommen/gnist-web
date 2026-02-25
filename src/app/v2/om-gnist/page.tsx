import { createPageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/container";
import { V2Section } from "@/components/v2/ui/v2-section";
import { V2Heading } from "@/components/v2/ui/v2-heading";
import { V2Text } from "@/components/v2/ui/v2-text";
import { V2Card } from "@/components/v2/ui/v2-card";
import { V2Button } from "@/components/v2/ui/v2-button";
import { V2PageHero } from "@/components/v2/layout/v2-page-hero";
import { Flame, Eye, Shield, Users, Heart, Briefcase } from "lucide-react";
import { values, socialResponsibility } from "@/data/values";
import { company } from "@/data/company";

export const metadata = createPageMetadata({
  title: "Om Gnist",
  description:
    "Gnist er et norsk konsulenthus som brenner for teknologiledelse. Lær om verdiene våre, historien vår og hvordan vi bidrar til samfunnet.",
  path: "/v2/om-gnist",
});

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Flame,
  Eye,
  Shield,
  Users,
};

export default function V2OmGnistPage() {
  return (
    <>
      <V2PageHero
        title="Om Gnist"
        description="Gnist betyr gnist – den indre driven som får oss til å stå opp om morgenen og gjøre vårt beste. Vi er et konsulenthus bygget på verdier, med mennesker i sentrum."
      />

      {/* Story */}
      <V2Section variant="surface">
        <Container>
          <div className="mx-auto max-w-3xl">
            <V2Heading as="h2">Vår historie</V2Heading>
            <div className="mt-6 space-y-4">
              <V2Text>
                Gnist ble grunnlagt med en enkel idé: samle Norges beste
                teknologiledere i et fellesskap der de kan vokse, dele og gjøre
                hverandre bedre.
              </V2Text>
              <V2Text>
                Vi tror at den viktigste teknologien i enhver organisasjon er
                menneskene. Verktøy og rammeverk kommer og går, men evnen til å
                lede, samarbeide og tilpasse seg – den varer.
              </V2Text>
              <V2Text>
                I dag er vi rundt 30 konsulenter med bred erfaring fra noen av
                Norges mest spennende selskaper og prosjekter. Vi jobber som
                CTO-er, tech leads, smidige coacher, produktledere og
                arkitekter.
              </V2Text>
            </div>
          </div>
        </Container>
      </V2Section>

      {/* Values */}
      <V2Section variant="void">
        <Container>
          <div className="text-center">
            <V2Heading as="h2">Våre verdier</V2Heading>
            <V2Text variant="muted" className="mx-auto mt-4 max-w-2xl">
              Verdiene våre er ikke bare ord på en vegg. De er det vi lever etter
              hver dag – i møte med kunder, kolleger og oss selv.
            </V2Text>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {values.map((value) => {
              const Icon = iconMap[value.icon] || Flame;
              return (
                <V2Card key={value.title}>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-v2-cyan/20 bg-v2-cyan/5">
                      <Icon className="h-6 w-6 text-v2-cyan" />
                    </div>
                    <div>
                      <h3 className="font-body text-xl font-semibold text-v2-heading">
                        {value.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-v2-muted">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </V2Card>
              );
            })}
          </div>
        </Container>
      </V2Section>

      {/* Social responsibility */}
      <V2Section variant="surface">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-3">
              <Heart className="h-8 w-8 text-v2-success" />
              <V2Heading as="h2">{socialResponsibility.title}</V2Heading>
            </div>
            <V2Text variant="muted" className="mt-4">
              {socialResponsibility.intro}
            </V2Text>
            <div className="mt-8 space-y-6">
              {socialResponsibility.initiatives.map((init) => (
                <V2Card key={init.title}>
                  <h3 className="font-body text-lg font-semibold text-v2-heading">
                    {init.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-v2-muted">
                    {init.description}
                  </p>
                </V2Card>
              ))}
            </div>
          </div>
        </Container>
      </V2Section>

      {/* Careers CTA */}
      <V2Section variant="void">
        <Container>
          <V2Card className="border-v2-cyan/20 text-center">
            <Briefcase className="mx-auto h-10 w-10 text-v2-cyan" />
            <V2Heading as="h3" className="mt-4">
              Bli en av oss
            </V2Heading>
            <V2Text className="mx-auto mt-4 max-w-xl text-v2-muted">
              Er du en erfaren teknologileder som vil jobbe i et sterkt
              fagmiljø? Vi er alltid på jakt etter gode folk som deler verdiene
              våre.
            </V2Text>
            <V2Button href="/v2/kontakt" className="mt-6">
              Ta kontakt med {company.contact.name}
            </V2Button>
          </V2Card>
        </Container>
      </V2Section>
    </>
  );
}
