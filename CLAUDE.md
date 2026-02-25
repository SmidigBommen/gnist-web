# CLAUDE.md – Gnist Website

## Project Overview

Corporate website for Gnist Consulting AS (gnist.as), a Norwegian IT consultancy (~30 people) specializing in technology leadership. All user-facing content is in Norwegian (Bokmål).

## Tech Stack

- **Framework**: Next.js 16 with App Router, TypeScript, Turbopack
- **Styling**: Tailwind CSS v4 (theme configured via `@theme inline` in `src/app/globals.css`)
- **Fonts**: DM Serif Display (headings), Inter (body), JetBrains Mono (code) – loaded via `next/font/google`
- **Icons**: lucide-react
- **Utilities**: clsx + tailwind-merge (combined in `cn()` at `src/lib/utils.ts`)
- **No component library** – custom design system in `src/components/ui/`

## Commands

- `npm run dev` – Start dev server (Turbopack)
- `npm run build` – Production build
- `npm run start` – Serve production build
- `npm run lint` – Run ESLint

## Project Structure

```
src/
  app/                    # Next.js App Router pages
    layout.tsx            # Root layout: fonts, lang="nb", Header, Footer
    page.tsx              # Home page
    globals.css           # Tailwind v4 theme (colors, fonts)
    om-gnist/page.tsx     # About page
    tjenester/page.tsx    # Services page
    folka/page.tsx        # Team page
    kurs/page.tsx         # Courses page
    kontakt/page.tsx      # Contact page
    artikler/page.tsx     # Blog listing
    artikler/[slug]/page.tsx  # Article detail (SSG)
    apenhetsloven/page.tsx    # Legal: Transparency Act
    personvern/page.tsx       # Legal: Privacy policy
    api/contact/route.ts      # Contact form POST endpoint
  components/
    ui/                   # Design system primitives (Button, Card, Badge, Container, Section, Heading, Text)
    layout/               # Header, Footer, PageHero
    blocks/               # Domain-specific: TeamMemberCard, ServiceCard, CourseCard, ProblemCard, ContactForm
  data/                   # Static Norwegian content as typed TypeScript files
    team.ts               # 30 team members
    services.ts           # 3 service categories + principles
    courses.ts            # 4 courses
    problems.ts           # 6 problem-solution pairs
    values.ts             # Company values + social responsibility
    navigation.ts         # Nav items (main + footer)
    company.ts            # Company info, address, contact
    articles.ts           # Blog articles with full content
  lib/
    utils.ts              # cn() helper
    metadata.ts           # SEO metadata factory
```

## Architecture Decisions

- **Server Components by default.** Only these are client components: `Header` (mobile nav state), `ContactForm` (form state), `ServiceCard` (accordion), `ProblemCard` (accordion).
- **No CMS.** All content lives in `src/data/*.ts` with TypeScript types. Content changes infrequently.
- **No i18n framework.** Site is Norwegian-only; `<html lang="nb">` is set in root layout.
- **No dark mode.** Single warm light theme.

## Color Palette

| Token | Hex | Role |
|-------|-----|------|
| `ember` | `#D4622B` | Primary – buttons, links, accents |
| `ember-dark` | `#A8461A` | Hover/active states |
| `glow` | `#F0A06A` | Soft highlights, tag backgrounds |
| `charcoal` | `#2C2825` | Headings, primary text |
| `warm-gray` | `#6B6560` | Secondary text |
| `ash` | `#B5AFA8` | Borders, dividers |
| `warm-white` | `#FAF7F4` | Page background |
| `cream` | `#F2ECE5` | Cards, alternating sections |
| `terracotta` | `#C4785C` | Secondary accent |
| `sage` | `#6B8F71` | Success / social responsibility |
| `warm-indigo` | `#4A4063` | Sparingly for tech elements |

Use these Tailwind tokens directly: `bg-ember`, `text-charcoal`, `border-ash`, etc.

## Conventions

- **Imports** use `@/*` alias (maps to `src/*`).
- **Component files** use kebab-case (`team-member-card.tsx`).
- **Data files** use kebab-case or simple names (`team.ts`, `services.ts`).
- **Styling**: Use Tailwind classes. Use `cn()` for conditional classes. Avoid inline styles except for gradients.
- **New pages**: Create `src/app/<route>/page.tsx`. Use `createPageMetadata()` from `src/lib/metadata.ts` for SEO.
- **New components**: Place in `ui/` (generic), `layout/` (structural), or `blocks/` (domain-specific).

## TODOs

- [ ] Integrate email service (e.g., Resend) in `src/app/api/contact/route.ts`
- [ ] Replace placeholder team data with real employee information and photos
- [ ] Add real client logos to home page
- [ ] Add Open Graph images
- [ ] Add JSON-LD structured data
- [ ] Add subtle scroll animations
- [ ] Set up URL redirects from old WordPress paths
- [ ] Accessibility audit (focus states, ARIA, keyboard nav)
- [ ] Responsive QA at 375px, 768px, 1024px, 1440px
