# Ivan Ramiro | Developer Portfolio

![CI](https://github.com/IvanRamiro/my-portfolio/actions/workflows/ci.yml/badge.svg)

My personal portfolio: an introduction, case studies of my projects, the services I offer, and a contact form that saves and emails every inquiry.

## Features

- **Project case studies:** every project in `data/projects.ts` gets its own page, with problem, solution, stack, and links
- **Animated hero:** typewriter roles and a flip card that switches between code and the platforms I build for
- **Contact form:** Server Action with Zod validation, a honeypot field, and per-visitor rate limiting
- **Inquiry storage:** each message is saved to Postgres and emailed to me; the visitor sees an error only if both fail
- **SEO:** generated Open Graph images, sitemap, robots file, and per-page metadata
- **Accessibility:** semantic HTML, keyboard-friendly menu, and support for reduced-motion settings
- **Automated checks:** lint, type check, and Playwright tests run on every push

## Tech stack

| Area | Tools |
|---|---|
| Framework | Next.js (App Router), React, TypeScript |
| Styling and motion | Tailwind CSS, Framer Motion, React Icons |
| Database | Neon (Postgres), Drizzle ORM |
| Validation and email | Zod, Resend |
| Testing and CI | Playwright, GitHub Actions |

## Design decisions

- **Content lives in data files.** Adding a project means adding one object to `data/projects.ts`, with no new page code.
- **Inquiries are never silently lost.** The form saves to the database and sends the email at the same time, so one failing doesn't lose the message.
- **Visitor IPs are never stored.** Rate limiting keeps only a salted hash, which is enough to count repeat senders.
- **Tests avoid side effects.** They check content, navigation, validation, and SEO files, and never send a real inquiry.

## Getting started

Requirements: Node.js 22 and a Neon Postgres database.

```bash
git clone https://github.com/IvanRamiro/my-portfolio.git
cd my-portfolio
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
app/            Routes, layout, and the contact form Server Action
components/     Page sections and reusable UI
data/           Project content
db/             Database connection and schema
lib/            Shared validation rules, rate limiting, and site settings
public/         Images and the resume
tests/          Playwright tests
```

## Contact

[LinkedIn](https://linkedin.com/in/john-ivan-ramiro-782181312) · [GitHub](https://github.com/IvanRamiro) · ivanramiro0127@gmail.com