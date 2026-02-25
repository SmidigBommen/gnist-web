import { createPageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/container";
import { V2Button } from "@/components/v2/ui/v2-button";
import { team } from "@/data/team";
import { Linkedin } from "lucide-react";

export const metadata = createPageMetadata({
  title: "Folka",
  description:
    "Møt menneskene i Gnist – ~30 engasjerte teknologiledere.",
  path: "/v2/folka",
});

function getInitials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
}

function splitName(name: string) {
  const parts = name.split(" ");
  const lastName = parts.pop() || "";
  const firstName = parts.join(" ");
  return { firstName, lastName };
}

const accentColors = [
  { bg: "bg-v2-cyan/8", border: "border-v2-cyan/20", text: "text-v2-cyan", initBg: "bg-v2-cyan/10" },
  { bg: "bg-v2-purple/8", border: "border-v2-purple/20", text: "text-v2-purple", initBg: "bg-v2-purple/10" },
  { bg: "bg-v2-success/8", border: "border-v2-success/20", text: "text-v2-success", initBg: "bg-v2-success/10" },
];

export default function V2FolkaPage() {
  return (
    <>
      {/* === HERO === */}
      <section className="relative bg-v2-void py-24 md:py-36">
        <div className="absolute inset-0 v2-dot-grid opacity-10" />
        <Container>
          <div className="relative max-w-4xl">
            <span className="font-mono text-xs uppercase tracking-widest text-v2-cyan">
              Teamet
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.1] text-v2-heading md:text-6xl lg:text-7xl">
              {team.length} mennesker.
              <br />
              <span className="v2-gradient-text">Én gnist.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-v2-muted">
              CTO-er, tech leads, smidige coacher, produktledere og arkitekter —
              folk som har stått i det og vet hva som fungerer.
            </p>
          </div>
        </Container>
      </section>

      {/* === STAGGERED TEAM CARDS === */}
      <section className="bg-v2-surface py-24 md:py-32">
        <Container>
          <div className="mx-auto max-w-4xl space-y-6">
            {team.map((member, i) => {
              const colors = accentColors[i % accentColors.length];
              const isEven = i % 2 === 0;
              const { firstName, lastName } = splitName(member.name);

              return (
                <div
                  key={member.id}
                  className={`flex ${isEven ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`group relative flex w-full max-w-2xl items-center gap-6 border ${colors.border} ${colors.bg} p-6 transition-colors hover:bg-v2-surface-alt md:gap-8 md:p-8 ${
                      isEven ? "" : "flex-row-reverse text-right"
                    }`}
                  >
                    {/* Avatar / initials */}
                    <div
                      className={`flex h-20 w-20 shrink-0 items-center justify-center border ${colors.border} ${colors.initBg} md:h-24 md:w-24`}
                    >
                      <span className={`font-mono text-2xl font-bold ${colors.text} md:text-3xl`}>
                        {getInitials(member.name)}
                      </span>
                    </div>

                    {/* Name + role */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg leading-tight md:text-xl">
                        <span className="font-body font-light text-v2-muted">{firstName} </span>
                        <span className="font-body font-bold text-v2-heading">{lastName}</span>
                      </h3>
                      <p className={`mt-2 font-mono text-xs uppercase tracking-wider ${colors.text}`}>
                        {member.role}
                      </p>
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-flex items-center gap-1 text-xs text-v2-muted transition-colors hover:text-v2-cyan"
                        >
                          <Linkedin className="h-3 w-3" />
                          LinkedIn
                        </a>
                      )}
                    </div>

                    {/* Index number */}
                    <span className="absolute bottom-3 right-4 font-mono text-xs text-v2-border">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* === JOIN CTA === */}
      <section className="relative overflow-hidden bg-v2-void py-32">
        <div
          className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-[100px]"
          style={{ background: "linear-gradient(90deg, #00D4FF, #8B5CF6)" }}
        />
        <Container>
          <div className="relative flex flex-col items-center text-center">
            <span className="font-mono text-xs uppercase tracking-widest text-v2-cyan">
              Karriere
            </span>
            <h2 className="mt-4 text-4xl font-bold text-v2-heading md:text-6xl">
              Plass til én til?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-v2-muted">
              Vi er alltid nysgjerrige på folk som brenner for faget sitt.
            </p>
            <V2Button href="/v2/kontakt" className="mt-8">
              Ta kontakt
            </V2Button>
          </div>
        </Container>
      </section>
    </>
  );
}
