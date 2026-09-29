// data/projects.ts
export type Project = {
  slug: string;
  title: string;
  summary: string;
  role: string;
  stack: string[];
  image: string;
  liveUrl?: string;
  repoUrl?: string;
  problem: string;
  solution: string;
  results?: string;
};

export const projects: Project[] = [
  {
    slug: "sample-project-one",
    title: "Sample Project One",
    summary: "One-line description of what this project does.",
    role: "Full-stack developer",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    image: "/projects/sample-1.png",
    repoUrl: "https://github.com/IvanRamiro/my-portfolio",
    problem: "Who needed this and what was painful about it.",
    solution: "What you built and the key features.",
    results: "Any numbers or outcomes, or delete this line.",
  },
  {
    slug: "sample-project-two",
    title: "Sample Project Two",
    summary: "Another one-line description.",
    role: "Mobile developer",
    stack: ["React Native", "Firebase"],
    image: "/projects/sample-2.png",
    problem: "Placeholder problem statement.",
    solution: "Placeholder solution.",
  },
];