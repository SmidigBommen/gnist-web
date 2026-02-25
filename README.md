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

## Project Structure

```
src/
  app/          # Pages and API routes (Next.js App Router)
  components/
    ui/         # Design system primitives (Button, Card, Badge, etc.)
    layout/     # Header, Footer, PageHero
    blocks/     # Domain components (TeamMemberCard, ServiceCard, etc.)
  data/         # Static content as typed TypeScript files
  lib/          # Utilities (cn helper, metadata factory)
```

## Design

The design uses a warm, fire-inspired color palette ("Gnist" means "Spark" in Norwegian):

- **Primary**: Ember `#D4622B` with Deep Ember `#A8461A` for hover states
- **Typography**: DM Serif Display for headings, Inter for body text
- **Background**: Warm White `#FAF7F4` with Cream `#F2ECE5` for alternating sections

All content is in Norwegian (Bokmål). The site uses `lang="nb"` on the HTML element.

## Deployment

The site is fully static and deployed automatically to GitHub Pages on every push to `main` via GitHub Actions.

**Live site:** [https://smidigbommen.github.io/gnist-web/](https://smidigbommen.github.io/gnist-web/)

## License

Private – Gnist Consulting AS
