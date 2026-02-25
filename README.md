# Gnist Consulting – Website

Corporate website for [Gnist Consulting AS](https://gnist.as), a Norwegian IT consultancy specializing in technology leadership, agile coaching, and product development.

Built with Next.js 16, Tailwind CSS v4, and TypeScript.

**Live site:** [https://smidigbommen.github.io/gnist-web/](https://smidigbommen.github.io/gnist-web/)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (Turbopack) |
| `npm run build` | Create production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |

## Tech Stack

- **Next.js 16** – App Router, React Server Components, static generation
- **Tailwind CSS v4** – Utility-first styling with custom warm color palette
- **TypeScript** – Full type safety across components and data
- **lucide-react** – Icon library
- **clsx + tailwind-merge** – Conditional class merging

## Pages

### V1 – Warm Theme (default)

| Page | Route | Description |
|------|-------|-------------|
| Hjem | `/` | Landing page with hero, competence pillars, testimonials |
| Om Gnist | `/om-gnist` | Company story, values, social responsibility |
| Tjenester | `/tjenester` | Services, problem-solution cards, principles |
| Folka | `/folka` | Team member grid |
| Kurs | `/kurs` | Courses and workshops |
| Kontakt | `/kontakt` | Contact form and company info |
| Artikler | `/artikler` | Blog listing |
| Artikkel | `/artikler/[slug]` | Individual article |
| Åpenhetsloven | `/apenhetsloven` | Transparency Act statement |
| Personvern | `/personvern` | Privacy policy |

### V2 – Dark Tech Theme

Dark navy backgrounds, cyan/purple/green accents, sharp edges, monospace labels, bold layouts.

| Page | Route | Description |
|------|-------|-------------|
| Hjem | `/v2` | Terminal hero, bento grid, marquee ticker, stats bar |
| Om Gnist | `/v2/om-gnist` | Manifesto hero, alternating timeline, numbered values |
| Tjenester | `/v2/tjenester` | Color-coded service showcases with big numbers |
| Folka | `/v2/folka` | Staggered alternating cards, split name typography |
| Kurs | `/v2/kurs` | Featured course hero, catalog rows |
| Kontakt | `/v2/kontakt` | Dramatic hero, horizontal contact strip, sticky sidebar |

### V3 – Nordic Minimal

Whitespace-heavy, muted earth tones (moss, stone, sand), thin hairlines, serif accent headings, Scandinavian calm.

| Page | Route | Description |
|------|-------|-------------|
| Hjem | `/v3` | Editorial hero, divided pillars, pull quote, stats |
| Om Gnist | `/v3/om-gnist` | Two-column story, definition-list values |
| Tjenester | `/v3/tjenester` | Accordion services, plus/minus problems |
| Folka | `/v3/folka` | Clean divided list with circular initials |
| Kurs | `/v3/kurs` | Bordered course cards with badges |
| Kontakt | `/v3/kontakt` | Underline-only form inputs, minimal layout |

## Project Structure

```
src/
  app/
    (v1)/       # V1 pages (warm theme) – route group, no URL prefix
    v2/         # V2 pages (dark tech) – lives at /v2/*
    v3/         # V3 pages (nordic minimal) – lives at /v3/*
  components/
    ui/         # V1 design system primitives (Button, Card, Badge, etc.)
    layout/     # V1 Header, Footer, PageHero
    blocks/     # V1 domain components (TeamMemberCard, ServiceCard, etc.)
    v2/
      ui/       # V2 primitives (V2Button, V2Card, V2Badge, etc.)
      layout/   # V2Header, V2Footer, V2PageHero
      blocks/   # V2 domain components
    v3/
      ui/       # V3 primitives (V3Button, V3Card, V3Badge, etc.)
      layout/   # V3Header, V3Footer
      blocks/   # V3 domain components
  data/         # Static content as typed TypeScript files (shared by all versions)
  lib/          # Utilities (cn helper, metadata factory)
```

## Design

### V1 – Warm Theme

The design uses a warm, fire-inspired color palette ("Gnist" means "Spark" in Norwegian):

- **Primary**: Ember `#D4622B` with Deep Ember `#A8461A` for hover states
- **Typography**: DM Serif Display for headings, Inter for body text
- **Background**: Warm White `#FAF7F4` with Cream `#F2ECE5` for alternating sections

### V2 – Dark Tech Theme

A dark theme with a cool, technical aesthetic:

- **Primary**: Cyan `#00D4FF` with secondary Purple `#8B5CF6` and Green `#00FF88`
- **Typography**: Inter (sans-serif) everywhere, JetBrains Mono for labels/badges
- **Background**: Dark navy `#151520` with surface `#1C1C2A` for cards
- **Style**: Sharp corners, border-based cards, dot-grid patterns, gradient text

### V3 – Nordic Minimal

A calm, whitespace-heavy Scandinavian aesthetic:

- **Primary**: Moss `#5C7C5E` with Sand `#C4A97D` and Clay `#A0695C`
- **Typography**: DM Serif Display for accent headings, Inter light for body
- **Background**: Snow `#FAFAF8` with Paper `#F5F4F0` and Linen `#EDEBE5`
- **Style**: Thin hairline borders, rounded pill buttons, lots of negative space

All content is in Norwegian (Bokmål). The site uses `lang="nb"` on the HTML element.

## Deployment

The site is fully static and deployed automatically to GitHub Pages on every push to `main` via GitHub Actions.

**Live site:** [https://smidigbommen.github.io/gnist-web/](https://smidigbommen.github.io/gnist-web/)

## License

Private – Gnist Consulting AS
