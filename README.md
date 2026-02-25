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

An alternative "Nordic Tech" design at `/v2` for A/B testing. Dark backgrounds, cyan accents, sharp edges, monospace labels.

| Page | Route | Description |
|------|-------|-------------|
| Hjem | `/v2` | Dark landing page with dot-grid hero |
| Om Gnist | `/v2/om-gnist` | Company story, values |
| Tjenester | `/v2/tjenester` | Services, problems, principles |
| Folka | `/v2/folka` | Team member grid |
| Kurs | `/v2/kurs` | Courses and workshops |
| Kontakt | `/v2/kontakt` | Contact form and info |

## Project Structure

```
src/
  app/
    (v1)/       # V1 pages (warm theme) – route group, no URL prefix
    v2/         # V2 pages (dark theme) – lives at /v2/*
  components/
    ui/         # V1 design system primitives (Button, Card, Badge, etc.)
    layout/     # V1 Header, Footer, PageHero
    blocks/     # V1 domain components (TeamMemberCard, ServiceCard, etc.)
    v2/
      ui/       # V2 primitives (V2Button, V2Card, V2Badge, etc.)
      layout/   # V2Header, V2Footer, V2PageHero
      blocks/   # V2 domain components
  data/         # Static content as typed TypeScript files (shared by v1 & v2)
  lib/          # Utilities (cn helper, metadata factory)
```

## Design

### V1 – Warm Theme

The design uses a warm, fire-inspired color palette ("Gnist" means "Spark" in Norwegian):

- **Primary**: Ember `#D4622B` with Deep Ember `#A8461A` for hover states
- **Typography**: DM Serif Display for headings, Inter for body text
- **Background**: Warm White `#FAF7F4` with Cream `#F2ECE5` for alternating sections

### V2 – Dark Tech Theme

A high-contrast dark theme with a cool, technical aesthetic:

- **Primary**: Cyan `#00D4FF` with secondary Purple `#8B5CF6`
- **Typography**: Inter (sans-serif) everywhere, JetBrains Mono for labels/badges
- **Background**: Near-black `#0A0A0F` with surface `#12121A` for cards
- **Style**: Sharp corners, border-based cards, dot-grid patterns

All content is in Norwegian (Bokmål). The site uses `lang="nb"` on the HTML element.

## Deployment

The site is fully static and deployed automatically to GitHub Pages on every push to `main` via GitHub Actions.

**Live site:** [https://smidigbommen.github.io/gnist-web/](https://smidigbommen.github.io/gnist-web/)

## License

Private – Gnist Consulting AS
