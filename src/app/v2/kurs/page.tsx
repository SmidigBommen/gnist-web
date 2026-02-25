import { createPageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/container";
import { V2Button } from "@/components/v2/ui/v2-button";
import { V2Badge } from "@/components/v2/ui/v2-badge";
import { courses } from "@/data/courses";
import { Clock, Users, Monitor, ArrowRight } from "lucide-react";

export const metadata = createPageMetadata({
  title: "Kurs",
  description:
    "Kurs og workshops innen teknisk ledelse, smidig utvikling, produktledelse og DevOps.",
  path: "/v2/kurs",
});

const colorCycle = [
  { accent: "text-v2-cyan", border: "border-v2-cyan/30", bg: "bg-v2-cyan/5", dot: "bg-v2-cyan" },
  { accent: "text-v2-purple", border: "border-v2-purple/30", bg: "bg-v2-purple/5", dot: "bg-v2-purple" },
  { accent: "text-v2-success", border: "border-v2-success/30", bg: "bg-v2-success/5", dot: "bg-v2-success" },
  { accent: "text-v2-cyan", border: "border-v2-cyan/30", bg: "bg-v2-cyan/5", dot: "bg-v2-cyan" },
];

export default function V2KursPage() {
  const featured = courses[0];
  const rest = courses.slice(1);

  return (
    <>
      {/* === HERO === */}
      <section className="relative bg-v2-void py-24 md:py-36">
        <div className="absolute inset-0 v2-dot-grid opacity-10" />
        <Container>
          <div className="relative">
            <span className="font-mono text-xs uppercase tracking-widest text-v2-cyan">
              Kompetanse
            </span>
            <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.1] text-v2-heading md:text-6xl lg:text-7xl">
              Kurs bygget av <span className="v2-gradient-text">praktikere</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-v2-muted">
              Ikke teori fra en bok — reelle erfaringer fra folk som har stått i det.
              Vi tilbyr både åpne kurs og skreddersydde workshops.
            </p>
          </div>
        </Container>
      </section>

      {/* === FEATURED COURSE: Big hero card === */}
      <section className="bg-v2-surface py-20 md:py-28">
        <Container>
          <span className="font-mono text-xs uppercase tracking-widest text-v2-cyan">
            Populært kurs
          </span>
          <div className="mt-6 grid gap-8 border border-v2-cyan/20 bg-v2-cyan/5 p-8 md:grid-cols-[2fr_1fr] md:p-12">
            <div>
              <h2 className="text-3xl font-bold text-v2-heading md:text-4xl">
                {featured.title}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-v2-muted">
                {featured.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-v2-muted">
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-v2-cyan" />
                  {featured.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <Monitor className="h-4 w-4 text-v2-cyan" />
                  {featured.format}
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="h-4 w-4 text-v2-cyan" />
                  {featured.audience}
                </span>
              </div>
              <V2Button href="/v2/kontakt" className="mt-8">
                Meld interesse
              </V2Button>
            </div>
            <div className="border-l border-v2-cyan/20 pl-8">
              <span className="font-mono text-xs uppercase tracking-widest text-v2-cyan">
                Innhold
              </span>
              <ul className="mt-4 space-y-3">
                {featured.topics.map((topic) => (
                  <li key={topic} className="flex items-start gap-2 text-sm text-v2-text">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-v2-cyan" />
                    {topic}
                  </li>
                ))}
              </ul>
              {featured.instructor && (
                <div className="mt-6 border-t border-v2-cyan/20 pt-4">
                  <V2Badge variant="cyan">Kursholder: {featured.instructor}</V2Badge>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* === COURSE CATALOG: Stacked full-width rows === */}
      <section className="bg-v2-void py-24 md:py-32">
        <Container>
          <h2 className="text-3xl font-bold text-v2-heading md:text-4xl">Alle kurs</h2>
          <div className="mt-10 space-y-4">
            {rest.map((course, i) => {
              const colors = colorCycle[i % colorCycle.length];
              return (
                <div key={course.id} className={`border ${colors.border} ${colors.bg} p-8`}>
                  <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-v2-heading">{course.title}</h3>
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-v2-muted">
                        {course.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-3">
                        <V2Badge variant={i % 2 === 0 ? "purple" : "cyan"}>
                          {course.duration}
                        </V2Badge>
                        <V2Badge>{course.format}</V2Badge>
                        <V2Badge>{course.audience}</V2Badge>
                      </div>
                    </div>
                    <div className="shrink-0">
                      <span className="font-mono text-xs uppercase tracking-widest text-v2-muted">
                        Innhold
                      </span>
                      <ul className="mt-2 space-y-1.5">
                        {course.topics.slice(0, 3).map((topic) => (
                          <li key={topic} className="flex items-start gap-2 text-sm text-v2-text">
                            <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 ${colors.dot}`} />
                            {topic}
                          </li>
                        ))}
                        {course.topics.length > 3 && (
                          <li className="text-sm text-v2-muted">
                            + {course.topics.length - 3} mer
                          </li>
                        )}
                      </ul>
                      {course.instructor && (
                        <p className="mt-3 font-mono text-xs text-v2-muted">
                          Kursholder: {course.instructor}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* === CUSTOM WORKSHOP CTA === */}
      <section className="relative overflow-hidden border-t border-v2-border bg-v2-surface py-32">
        <div
          className="absolute right-0 top-0 h-full w-1/2 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, transparent, transparent 20px, #8B5CF6 20px, #8B5CF6 21px)",
          }}
        />
        <Container>
          <div className="relative flex flex-col items-center text-center">
            <span className="font-mono text-xs uppercase tracking-widest text-v2-purple">
              Skreddersydd
            </span>
            <h2 className="mt-4 text-4xl font-bold text-v2-heading md:text-6xl">
              Trenger dere noe
              <br />
              <span className="v2-gradient-text">helt eget?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-v2-muted">
              Vi designer workshops tilpasset deres konkrete utfordringer, kontekst og behov.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <V2Button href="/v2/kontakt" variant="secondary">
                Diskuter behov
              </V2Button>
              <ArrowRight className="h-5 w-5 text-v2-muted" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
