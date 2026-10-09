import type { MediaAsset } from "@/components/ui/Media";

export const profilePhoto: MediaAsset = {
  src: "/ivanprofile.jpg",
  alt: "Portrait of John Ivan Ramiro",
};

export const resume = {
  href: "/ivanramiro_resume.pdf",
  filename: "John-Ivan-Ramiro-Resume.pdf",
} as const;

export const bio = {
  intro: [
    "I'm Ivan, a computer engineering graduate who enjoys turning ideas into working software. I specialize in building web and mobile applications.",
    "My engineering training gives me an edge on projects that mix software with hardware, like dashboards for sensors and IoT systems.",
  ],
  hardware:
    "During my internship I built and deployed a company website with an admin dashboard so non-technical staff could manage their own content. My thesis was a VR science laboratory simulation built with C# and Unity.",
} as const;

export type Milestone = {
  title: string;
  place: string;
  period?: string;
  description: string;
};

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
