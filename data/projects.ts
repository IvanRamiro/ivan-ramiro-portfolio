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
    slug: "vr-science-laboratory",
    title: "VR Learning Simulation for High School Science Labs",
    summary: "An immersive VR environment for safely practicing lab activities.",
    role: "Thesis project (team)",
    stack: ["C#", "Unity"],
    image: "/projects/scivrs.png",
    problem:
      "High school science labs are limited by equipment, safety risks, and cost, so students get little hands-on practice.",
    solution:
      "We built an interactive VR platform with 3D interaction and performance scoring, and tested it for accuracy, efficiency, and compatibility against real engineering constraints.",
  },
  {
    slug: "developer-portfolio",
    title: "This Portfolio",
    summary: "The site you're looking at, with a working inquiry form.",
    role: "Design and development",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/projects/webportfolio.png",
    repoUrl: "https://github.com/IvanRamiro/my-portfolio",
    problem: "I needed a place to present my work and let clients reach me directly.",
    solution:
      "A dark-themed responsive site with animated sections and a server-side contact form that emails inquiries straight to my inbox.",
  },
];