export const profilePhoto = {
  src: "/ivanprofile.jpg",
  alt: "Portrait of John Ivan Ramiro",
} as const;

export const resume = {
  href: "/ivanramiro_resume.pdf",
  filename: "John-Ivan-Ramiro-Resume.pdf",
} as const;

export const bio = [
  "I'm Ivan, a computer engineering graduate who enjoys turning ideas into working software. I specialize in building web and mobile applications.",
  "My engineering training gives me an edge on projects that mix software with hardware, like dashboards for sensors and IoT systems.",
  "During my internship I built and deployed a company website with an admin dashboard so non-technical staff could manage their own content. My thesis was a VR science laboratory simulation built with C# and Unity.",
];

export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "PostgreSQL",
      "Neon",
      "Drizzle ORM",
      "Server Actions",
      "Zod",
      "Resend",
      "REST APIs",
      "PHP",
      "MySQL",
    ],
  },
  { title: "Mobile", items: ["React Native", "Flutter"] },
  {
    title: "DevOps & Networking",
    items: ["Docker", "VMware", "Postman", "Cisco", "OSPF / VPN", "Python", "GitHub Actions"],
  },
  { title: "3D & Design", items: ["Unity", "C#", "Blender", "Photoshop", "Canva"] },
  {
    title: "Engineering & Tools",
    items: ["Git", "GitHub", "Playwright", "Arduino / IoT", "Linux", "Figma"],
  },
];

export type Milestone = {
  title: string;
  place: string;
  period?: string;
  description: string;
};

/** Shown in chronological order on the journey timeline. */
export const milestones: Milestone[] = [
  {
    title: "BS Computer Engineering",
    place: "Technological Institute of the Philippines, Quezon City",
    description:
      "Four years of Cisco-aligned training in routing, switching, OSPF, and VPN, plus Docker, VMware, Python, and Postman.",
  },
  {
    title: "Thesis: sciVRse",
    place: "Team of four",
    description:
      "A VR science laboratory simulation built with C# and Unity, with a companion website for downloads and documentation.",
  },
  {
    title: "Full-Stack Web Developer Intern",
    place: "Gudlyf Property Corp",
    period: "Mar – May 2025",
    description:
      "Built and deployed a company website with an admin dashboard so non-technical staff could manage their own content.",
  },
  {
    title: "Now",
    place: "Open to work",
    description:
      "Building with Next.js, TypeScript, and Postgres, with automated tests and CI on every push.",
  },
];
