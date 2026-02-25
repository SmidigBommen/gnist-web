import { createPageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/container";
import { V2Section } from "@/components/v2/ui/v2-section";
import { V2Heading } from "@/components/v2/ui/v2-heading";
import { V2Text } from "@/components/v2/ui/v2-text";
import { V2Button } from "@/components/v2/ui/v2-button";
import { V2PageHero } from "@/components/v2/layout/v2-page-hero";
import { V2CourseCard } from "@/components/v2/blocks/v2-course-card";
import { courses } from "@/data/courses";

export const metadata = createPageMetadata({
  title: "Kurs",
  description:
    "Kurs og workshops innen teknisk ledelse, smidig utvikling, produktledelse og DevOps. Levert av erfarne praktikere.",
  path: "/v2/kurs",
});

export default function V2KursPage() {
  return (
    <>
      <V2PageHero
        title="Kurs og workshops"
        description="Våre kurs ledes av erfarne praktikere som kombinerer teori med reelle erfaringer fra norske organisasjoner. Vi tilbyr både åpne kurs og skreddersydde workshops."
      />

      <V2Section variant="surface">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            {courses.map((course) => (
              <V2CourseCard key={course.id} course={course} />
            ))}
          </div>
        </Container>
      </V2Section>

      {/* Custom workshops */}
      <V2Section variant="void">
        <Container>
          <div className="text-center">
            <V2Heading as="h2">Skreddersydde workshops</V2Heading>
            <V2Text variant="muted" className="mx-auto mt-4 max-w-2xl">
              Trenger dere en workshop tilpasset deres konkrete utfordringer? Vi
              designer innhold basert på konteksten og behovene til
              organisasjonen din.
            </V2Text>
            <V2Button href="/v2/kontakt" size="lg" className="mt-8">
              Diskuter behov
            </V2Button>
          </div>
        </Container>
      </V2Section>
    </>
  );
}
