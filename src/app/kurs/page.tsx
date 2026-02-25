import { createPageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/layout/page-hero";
import { CourseCard } from "@/components/blocks/course-card";
import { courses } from "@/data/courses";

export const metadata = createPageMetadata({
  title: "Kurs",
  description:
    "Kurs og workshops innen teknisk ledelse, smidig utvikling, produktledelse og DevOps. Levert av erfarne praktikere.",
  path: "/kurs",
});

export default function KursPage() {
  return (
    <>
      <PageHero
        title="Kurs og workshops"
        description="Våre kurs ledes av erfarne praktikere som kombinerer teori med reelle erfaringer fra norske organisasjoner. Vi tilbyr både åpne kurs og skreddersydde workshops."
      />

      <Section variant="cream">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Custom workshops */}
      <Section>
        <Container>
          <div className="text-center">
            <Heading as="h2">Skreddersydde workshops</Heading>
            <Text variant="secondary" className="mx-auto mt-4 max-w-2xl">
              Trenger dere en workshop tilpasset deres konkrete utfordringer? Vi
              designer innhold basert på konteksten og behovene til
              organisasjonen din.
            </Text>
            <Button href="/kontakt" size="lg" className="mt-8">
              Diskuter behov
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
