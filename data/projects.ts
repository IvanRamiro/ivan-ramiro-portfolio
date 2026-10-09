import type { MediaAsset } from "@/components/ui/Media";
import type { SpecRow } from "@/components/ui/SpecTable";
import { isProduction } from "@/lib/env";

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  kind: string;
  role?: string;
  team?: string;
  year?: string;
  stack: string[];
  image: MediaAsset;
  backdrop?: string;
  gallery?: MediaAsset[];
  problem: string;
  solution: string;
  results?: string;
  links?: ProjectLink[];
};

export const projects: Project[] = [
  {
    slug: "vr-science-laboratory",
    title: "sciVRse: VR Learning Simulation for Science Labs",
    summary:
      "A VR platform that lets students run senior high school science experiments safely.",
    kind: "Thesis project",
    team: "Team of 4",
    stack: ["C#", "Unity", "Firebase", "Next.js", "Tailwind CSS"],
    image: {
      src: "/projects/scivrs.png",
      alt: "Screenshot of the sciVRse website",
      width: 2346,
      height: 1382,
    },
    problem:
      "High school science labs are limited by equipment, safety risks, and cost, so students get little hands-on practice.",
    solution:
      "We built an interactive VR platform that simulates experiments from the senior high school curriculum, such as flame tests and chemical reactions. It includes lab activities with in-game assessments and a built-in scoring system, plus a companion website for downloads and documentation.",
    links: [{ label: "Visit sciVRse", href: "https://scivrse.web.app/" }],
  },
  {
    slug: "developer-portfolio",
    title: "This Portfolio",
    summary: "The site you're looking at, with a working inquiry form.",
    kind: "Personal project",
    role: "Design and development",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP", "PostgreSQL"],
    image: {
      src: "/projects/webportfolio.png",
      alt: "Screenshot of this portfolio's home page",
      width: 2910,
      height: 1668,
    },
    problem: "I needed a place to present my work and let clients reach me directly.",
    solution:
      "A responsive site with a server-side contact form that validates input, rate-limits repeat senders, saves every inquiry to Postgres, and emails it straight to my inbox. Lint, type checks, and Playwright tests run on every push.",
    links: [{ label: "View on GitHub", href: "https://github.com/IvanRamiro/ivan-ramiro-portfolio" }],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectStaticParams(): { slug: string }[] {
  return projects.map(({ slug }) => ({ slug }));
}

export function getCaseStudySections({ problem, solution, results }: Project) {
  return [
    { title: "The problem", body: problem },
    { title: "The solution", body: solution },
    ...(results ? [{ title: "Results", body: results }] : []),
  ];
}

export function getProjectSpecRows(project: Project, options: { stack?: boolean } = {}): SpecRow[] {
  const rows: SpecRow[] = [];
  if (project.role) rows.push({ label: "Role", value: project.role });
  if (project.team) rows.push({ label: "Team", value: project.team });
  if (project.year) rows.push({ label: "Year", value: project.year });
  if (options.stack) rows.push({ label: "Stack", value: project.stack.join(" · ") });
  return rows;
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return { previous: undefined, next: undefined };
  return {
    previous: projects[index - 1],
    next: projects[index + 1],
  };
}

if (!isProduction) {
  const slugs = projects.map((project) => project.slug);
  if (new Set(slugs).size !== slugs.length) {
    throw new Error("Duplicate project slug found in data/projects.ts");
  }
}
