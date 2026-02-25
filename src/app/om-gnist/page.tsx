import { createPageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/layout/page-hero";
import { Flame, Eye, Shield, Users, Heart, Briefcase } from "lucide-react";
import { values, socialResponsibility } from "@/data/values";
import { company } from "@/data/company";

export const metadata = createPageMetadata({
  title: "Om Gnist",
  description:
    "Gnist er et norsk konsulenthus som brenner for teknologiledelse. Lær om verdiene våre, historien vår og hvordan vi bidrar til samfunnet.",
  path: "/om-gnist",
});

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Flame,
  Eye,
  Shield,
  Users,
};

export default function OmGnistPage() {
  return (
    <>
      <PageHero
        title="Om Gnist"
        description="Gnist betyr gnist – den indre driven som får oss til å stå opp om morgenen og gjøre vårt beste. Vi er et konsulenthus bygget på verdier, med mennesker i sentrum."
      />

      {/* Story */}
      <Section variant="cream">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Heading as="h2">Vår historie</Heading>
            <div className="mt-6 space-y-4">
              <Text>
                Gnist ble grunnlagt med en enkel idé: samle Norges beste
                teknologiledere i et fellesskap der de kan vokse, dele og gjøre
                hverandre bedre.
              </Text>
              <Text>
                Vi tror at den viktigste teknologien i enhver organisasjon er
                menneskene. Verktøy og rammeverk kommer og går, men evnen til å
                lede, samarbeide og tilpasse seg – den varer.
              </Text>
              <Text>
                I dag er vi rundt 30 konsulenter med bred erfaring fra noen av
                Norges mest spennende selskaper og prosjekter. Vi jobber som
                CTO-er, tech leads, smidige coacher, produktledere og
                arkitekter.
              </Text>
            </div>
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section>
        <Container>
          <div className="text-center">
            <Heading as="h2">Våre verdier</Heading>
            <Text variant="secondary" className="mx-auto mt-4 max-w-2xl">
              Verdiene våre er ikke bare ord på en vegg. De er det vi lever etter
              hver dag – i møte med kunder, kolleger og oss selv.
            </Text>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {values.map((value) => {
              const Icon = iconMap[value.icon] || Flame;
              return (
                <Card key={value.title}>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-glow/20">
                      <Icon className="h-6 w-6 text-ember" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl text-charcoal">
                        {value.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-warm-gray">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Social responsibility */}
      <Section variant="cream">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-3">
              <Heart className="h-8 w-8 text-sage" />
              <Heading as="h2">{socialResponsibility.title}</Heading>
            </div>
            <Text variant="secondary" className="mt-4">
              {socialResponsibility.intro}
            </Text>
            <div className="mt-8 space-y-6">
              {socialResponsibility.initiatives.map((init) => (
                <Card key={init.title}>
                  <h3 className="font-heading text-lg text-charcoal">
                    {init.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-warm-gray">
                    {init.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Careers CTA */}
      <Section>
        <Container>
          <Card className="bg-charcoal text-center">
            <Briefcase className="mx-auto h-10 w-10 text-ember" />
            <Heading as="h3" className="mt-4 text-warm-white">
              Bli en av oss
            </Heading>
            <Text className="mx-auto mt-4 max-w-xl text-ash">
              Er du en erfaren teknologileder som vil jobbe i et sterkt
              fagmiljø? Vi er alltid på jakt etter gode folk som deler verdiene
              våre.
            </Text>
            <Button href="/kontakt" className="mt-6">
              Ta kontakt med {company.contact.name}
            </Button>
          </Card>
        </Container>
      </Section>
    </>
  );
}
