import Link from "next/link";
import { Container } from "@/components/ui/container";
import { V2Button } from "@/components/v2/ui/v2-button";
import { ArrowRight, Terminal, Zap, Code2, Users, GitBranch, Cpu } from "lucide-react";

const stats = [
  { value: "~30", label: "konsulenter", icon: Users },
  { value: "15+", label: "års erfaring snitt", icon: GitBranch },
  { value: "50+", label: "fornøyde kunder", icon: Zap },
  { value: "∞", label: "kopper kaffe", icon: Cpu },
];

const clients = [
  "NRK", "DNB", "Posten", "Vy", "NAV", "Storebrand", "Finn.no", "Schibsted",
  "NRK", "DNB", "Posten", "Vy", "NAV", "Storebrand", "Finn.no", "Schibsted",
];

const services = [
  {
    num: "01",
    title: "Teknisk ledelse",
    blurb: "CTO-er og arkitekter som leverer fra dag én",
    href: "/v2/tjenester#teknisk-ledelse",
    color: "text-v2-cyan",
    borderColor: "border-v2-cyan/30",
    bgColor: "bg-v2-cyan/5",
  },
  {
    num: "02",
    title: "Smidig utvikling",
    blurb: "Coaching som gjør team genuint smidige",
    href: "/v2/tjenester#smidig-utvikling",
    color: "text-v2-purple",
    borderColor: "border-v2-purple/30",
    bgColor: "bg-v2-purple/5",
  },
  {
    num: "03",
    title: "Produktutvikling",
    blurb: "Fra strategi til kode til produksjon",
    href: "/v2/tjenester#produktutvikling",
    color: "text-v2-success",
    borderColor: "border-v2-success/30",
    bgColor: "bg-v2-success/5",
  },
];

export default function V2HomePage() {
  return (
    <>
      {/* === HERO: Terminal-inspired === */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-v2-void">
        {/* Dot grid */}
        <div className="absolute inset-0 v2-dot-grid opacity-20" />
        {/* Gradient orb */}
        <div
          className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full opacity-20 blur-[120px]"
          style={{ background: "radial-gradient(circle, #00D4FF, #8B5CF6, transparent)" }}
        />
        <Container>
          <div className="relative">
            {/* Terminal prompt */}
            <div className="mb-8 inline-flex items-center gap-2 border border-v2-border bg-v2-surface px-4 py-2 font-mono text-sm">
              <Terminal className="h-4 w-4 text-v2-cyan" />
              <span className="text-v2-muted">gnist@consulting</span>
              <span className="text-v2-cyan">~</span>
              <span className="text-v2-text">$ cat mission.txt</span>
            </div>

            <h1 className="max-w-5xl text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
              <span className="text-v2-heading">Vi gjør tech-team </span>
              <span className="v2-gradient-text">ekstraordinære</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-v2-muted md:text-xl">
              ~30 erfarne teknologiledere. Én misjon: hjelpe organisasjoner
              med å bygge bedre, levere raskere, og trives mer.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <V2Button href="/v2/kontakt" size="lg">
                Start samtalen
              </V2Button>
              <Link
                href="/v2/tjenester"
                className="group inline-flex items-center gap-2 text-sm font-medium text-v2-muted transition-colors hover:text-v2-cyan"
              >
                Se hva vi gjør
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* === STATS BAR === */}
      <section className="border-y border-v2-border bg-v2-surface">
        <Container>
          <div className="grid grid-cols-2 divide-x divide-v2-border md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center py-10 text-center">
                <stat.icon className="mb-3 h-5 w-5 text-v2-cyan/60" />
                <span className="font-mono text-3xl font-bold text-v2-heading md:text-4xl">
                  {stat.value}
                </span>
                <span className="mt-1 font-mono text-xs uppercase tracking-widest text-v2-muted">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* === SERVICES: Numbered Horizontal Cards === */}
      <section className="bg-v2-void py-24 md:py-32">
        <Container>
          <div className="flex items-end justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-v2-cyan">
                Tjenester
              </span>
              <h2 className="mt-3 text-3xl font-bold text-v2-heading md:text-5xl">
                Tre spor,<br />ett mål
              </h2>
            </div>
            <Link
              href="/v2/tjenester"
              className="hidden items-center gap-2 text-sm font-medium text-v2-muted transition-colors hover:text-v2-cyan md:inline-flex"
            >
              Alle tjenester <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 space-y-4">
            {services.map((s) => (
              <Link
                key={s.num}
                href={s.href}
                className={`group flex items-center gap-6 border ${s.borderColor} ${s.bgColor} p-6 transition-all hover:border-opacity-60 md:gap-10 md:p-8`}
              >
                <span className={`font-mono text-4xl font-bold ${s.color} opacity-40 md:text-6xl`}>
                  {s.num}
                </span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-v2-heading md:text-2xl">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm text-v2-muted md:text-base">{s.blurb}</p>
                </div>
                <ArrowRight className={`h-5 w-5 ${s.color} opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1`} />
              </Link>
            ))}
          </div>

          <Link
            href="/v2/tjenester"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-v2-muted transition-colors hover:text-v2-cyan md:hidden"
          >
            Alle tjenester <ArrowRight className="h-4 w-4" />
          </Link>
        </Container>
      </section>

      {/* === MARQUEE: Client ticker === */}
      <section className="overflow-hidden border-y border-v2-border bg-v2-surface py-6">
        <div className="flex animate-marquee items-center whitespace-nowrap">
          {clients.map((client, i) => (
            <span
              key={`${client}-${i}`}
              className="mx-8 font-mono text-sm uppercase tracking-widest text-v2-border md:mx-12 md:text-base"
            >
              {client}
            </span>
          ))}
        </div>
      </section>

      {/* === BENTO GRID === */}
      <section className="bg-v2-void py-24 md:py-32">
        <Container>
          <span className="font-mono text-xs uppercase tracking-widest text-v2-cyan">
            Hvorfor Gnist
          </span>
          <h2 className="mt-3 text-3xl font-bold text-v2-heading md:text-5xl">
            Bygget for å levere
          </h2>

          <div className="mt-12 grid gap-4 md:grid-cols-3 md:grid-rows-2">
            {/* Big testimonial cell */}
            <div className="relative overflow-hidden border border-v2-border bg-v2-surface p-8 md:col-span-2 md:row-span-2 md:p-12">
              <div className="absolute right-6 top-6 font-mono text-8xl font-bold leading-none text-v2-border/30">
                &ldquo;
              </div>
              <div className="relative">
                <Code2 className="mb-6 h-8 w-8 text-v2-cyan" />
                <blockquote className="text-xl leading-relaxed text-v2-text md:text-2xl">
                  Gnist-konsulentene har en unik evne til å forstå helheten.
                  De leverte ikke bare teknisk kompetanse, men hjalp oss med
                  å bygge en kultur for kontinuerlig forbedring.
                </blockquote>
                <div className="mt-8 flex items-center gap-4">
                  <div className="h-px flex-1 bg-v2-border" />
                  <div className="text-right">
                    <p className="text-sm font-medium text-v2-heading">Teknologidirektør</p>
                    <p className="text-sm text-v2-muted">Stor norsk mediebedrift</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Approach cell */}
            <div className="border border-v2-purple/20 bg-v2-purple/5 p-8">
              <span className="font-mono text-xs uppercase tracking-widest text-v2-purple">Tilnærming</span>
              <h3 className="mt-4 text-lg font-bold text-v2-heading">
                Mennesker &gt; prosesser
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-v2-muted">
                Teknologi er et verktøy. Det er menneskene som bruker det som
                skaper verdien. Vi starter alltid med å forstå menneskene.
              </p>
            </div>

            {/* Second testimonial cell */}
            <div className="border border-v2-border bg-v2-surface p-8">
              <blockquote className="text-sm leading-relaxed text-v2-text italic">
                &ldquo;Vi trengte noen som kunne ta teknisk lederskap fra dag én.
                Gnist leverte over all forventning.&rdquo;
              </blockquote>
              <p className="mt-4 font-mono text-xs text-v2-muted">
                — VP Engineering, Norsk fintech
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* === TEAM TEASER === */}
      <section className="border-y border-v2-border bg-v2-surface-alt py-24 md:py-32">
        <Container>
          <div className="flex flex-col items-center text-center">
            <span className="font-mono text-xs uppercase tracking-widest text-v2-cyan">Folka</span>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold text-v2-heading md:text-5xl">
              ~30 teknologiledere<br />
              <span className="v2-gradient-text-cyan">under ett tak</span>
            </h2>
            <p className="mt-6 max-w-xl text-v2-muted">
              CTO-er, tech leads, smidige coacher, produktledere og arkitekter —
              folk som har stått i det og vet hva som fungerer.
            </p>
            <V2Button href="/v2/folka" variant="outline" className="mt-8">
              Møt teamet
            </V2Button>
          </div>
        </Container>
      </section>

      {/* === CTA: Full-width dramatic === */}
      <section className="relative overflow-hidden bg-v2-void py-32 md:py-40">
        {/* Background glow */}
        <div
          className="absolute left-1/2 top-1/2 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-[100px]"
          style={{ background: "linear-gradient(90deg, #00D4FF, #8B5CF6)" }}
        />
        <Container>
          <div className="relative text-center">
            <h2 className="text-4xl font-bold text-v2-heading md:text-6xl lg:text-7xl">
              Klar for å
              <br />
              <span className="v2-gradient-text">levere bedre?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-v2-muted">
              Ingen pitch-deck, ingen PowerPoint. Bare en ærlig samtale over en
              kopp kaffe.
            </p>
            <V2Button href="/v2/kontakt" size="lg" className="mt-10">
              Kontakt oss
            </V2Button>
          </div>
        </Container>
      </section>
    </>
  );
}
