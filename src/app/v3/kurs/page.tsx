import { createPageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/container";
import { V3Button } from "@/components/v3/ui/v3-button";
import { V3CourseCard } from "@/components/v3/blocks/v3-course-card";
import { courses } from "@/data/courses";

export const metadata = createPageMetadata({
  title: "Kurs",
  description: "Kurs og workshops fra erfarne praktikere.",
  path: "/v3/kurs",
});

export default function V3KursPage() {
  return (
    <>
      {/* === HERO === */}
      <section className="bg-v3-snow py-28 md:py-40">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-v3-moss">
              Kompetanse
            </p>
            <h1 className="mt-8 v3-serif text-4xl leading-[1.15] text-v3-heading md:text-5xl lg:text-6xl">
              Kurs bygget
              <br />
              av praktikere.
            </h1>
            <p className="mt-8 max-w-xl text-lg font-light leading-relaxed text-v3-drift">
              Reelle erfaringer fra folk som har stått i det — ikke teori fra en bok.
            </p>
          </div>
        </Container>
      </section>

      <div className="v3-thin-rule mx-auto max-w-7xl" />

      {/* === COURSES === */}
      <section className="bg-v3-snow py-24 md:py-32">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {courses.map((course) => (
              <V3CourseCard key={course.id} course={course} />
            ))}
          </div>
        </Container>
      </section>

      {/* === CUSTOM WORKSHOP CTA === */}
      <section className="bg-v3-linen py-28 md:py-36">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-v3-sand">
              Skreddersydd
            </p>
            <h2 className="mt-4 v3-serif text-3xl text-v3-heading md:text-4xl">
              Trenger dere noe eget?
            </h2>
            <p className="mt-4 text-v3-drift font-light">
              Vi designer workshops tilpasset deres kontekst og behov.
            </p>
            <V3Button href="/v3/kontakt" variant="secondary" className="mt-10">
              Diskuter behov
            </V3Button>
          </div>
        </Container>
      </section>
    </>
  );
}
