export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  role: string;
  stack: string[];
  image: string;
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
    role: "Thesis project (team of 4)",
    stack: ["C#", "Unity", "Firebase", "Next.js", "Tailwind CSS"],
    image: "/projects/scivrs.png",
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
    role: "Design and development",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/projects/webportfolio.png",
    problem:
      "I needed a place to present my work and let clients reach me directly.",
    solution:
      "A dark-themed responsive site with animated sections and a server-side contact form that emails inquiries straight to my inbox.",
    links: [
      { label: "View on GitHub", href: "https://github.com/IvanRamiro/my-portfolio" },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

if (process.env.NODE_ENV !== "production") {
  const slugs = projects.map((project) => project.slug);
  if (new Set(slugs).size !== slugs.length) {
    throw new Error("Duplicate project slug found in data/projects.ts");
  }
}