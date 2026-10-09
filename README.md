# Ivan Ramiro | Developer Portfolio

![CI](https://github.com/IvanRamiro/ivan-ramiro-portfolio/actions/workflows/ci.yml/badge.svg)

My personal portfolio: an introduction, case studies of my projects, the services I offer, and a contact form that saves and emails every inquiry.

## Features

- **Project case studies:** every project in `data/projects.ts` gets its own page, with problem, solution, stack, and links
- **Spec-sheet hero:** a once-only GSAP load sequence, a pointer-tracking visual on desktop, and a factual spec table instead of invented stats
- **Contact form:** Server Action with Zod validation, a honeypot field, and per-visitor rate limiting
- **Inquiry storage:** each message is saved to Postgres and emailed to me; the visitor sees an error only if both fail
- **SEO:** generated Open Graph images, sitemap, robots file, and per-page metadata
- **Accessibility:** semantic HTML, keyboard-friendly menu, and support for reduced-motion settings
- **Automated checks:** lint, type check, and Playwright tests run on every push

## Tech stack

| Area | Tools |
|---|---|
| Framework | Next.js (App Router), React, TypeScript |
| Styling and motion | Tailwind CSS, GSAP, React Icons |
| Database | Neon (Postgres), Drizzle ORM |
| Validation and email | Zod, Resend |
| Testing and CI | Playwright, GitHub Actions |

## Design decisions

- **Content lives in data files.** Every piece of copy, from the hero roles to the skills and services, is in `data/`. Adding a project means adding one object to `data/projects.ts`, with no new page code.
- **One animation library.** Scroll reveals, the hero sequence, and the timeline use GSAP (with `gsap.matchMedia` for reduced motion and pointer gating); hover, press, and menu transitions are plain CSS.
- **Design tokens live in CSS.** Colours, type roles, radii, easing, and durations are `@theme` tokens in `app/globals.css`; `lib/theme.ts` mirrors only the handful of values the Open Graph renderer needs.
- **Hero video is a silent, lazy loop.** `public/art/hero-loop.{webm,mp4}` (no audio track) plays only while in view, never under reduced motion or Save-Data, and falls back to its poster frame. Service artwork is optional; the layout renders without it until renders are added to `public/art/`.
- **Inquiries are never silently lost.** The form saves to the database and sends the email at the same time, so one failing doesn't lose the message.
- **Visitor IPs are never stored.** Rate limiting keeps only a salted hash, which is enough to count repeat senders.
- **Tests avoid side effects.** They check content, navigation, validation, and SEO files, and never send a real inquiry.

## Getting started

Requirements: Node.js 22 and a Neon Postgres database.

```bash
git clone https://github.com/IvanRamiro/ivan-ramiro-portfolio.git
cd ivan-ramiro-portfolio
npm install
```

Create a `.env.local` file in the project root:

```
DATABASE_URL=postgresql://user:password@host/dbname?sslmode=require
RESEND_API_KEY=re_your_key
CONTACT_EMAIL=you@example.com
IP_HASH_SALT=a_long_random_string
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Create the database table, then start the dev server:

```bash
npm run db:push
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Check code quality |
| `npm run typecheck` | Generate Next.js types and run the TypeScript check |
| `npm test` | Run the Playwright tests |
| `npm run test:ui` | Run the tests in Playwright's visual runner |
| `npm run db:push` | Sync the database schema |
| `npm run db:studio` | Browse the database in Drizzle Studio |

## Project structure

```
app/                  Routes, root layout, 404, metadata, sitemap, and Open Graph images
components/
  layout/             Header with active-section indicator, mobile menu, footer, skip link
  motion/             GSAP primitives: Reveal, HeroSequence, PointerParallax
  ui/                 Reusable building blocks: Button, Tile, Eyebrow, SpecTable, Media, Section, TagList
  sections/           Home page sections, one folder per section
features/contact/     Contact form, Server Action, validation, rate limiting, storage, email
data/                 All site content: hero, projects, services, toolkit, about, socials, navigation
db/                   Database connection and schema
hooks/                Shared React hooks
lib/                  Environment, GSAP setup and motion tokens, CSS helpers, OG renderer, site settings
public/               Images, the resume, and (once generated) artwork under public/art/
tests/                Playwright tests (desktop Chrome and Pixel 7 projects)
```

## Contact

[LinkedIn](https://linkedin.com/in/john-ivan-ramiro-782181312) · [GitHub](https://github.com/IvanRamiro) · ivanramiro0127@gmail.com