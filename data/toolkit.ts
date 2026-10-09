import type { IconType } from "react-icons";
import {
  SiArduino,
  SiBlender,
  SiBootstrap,
  SiCplusplus,
  SiDocker,
  SiFigma,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiUnity,
} from "react-icons/si";

export type ToolkitItem = {
  name: string;
  Icon?: IconType;
  color?: string;
};

export type ToolkitGroup = {
  title: string;
  items: ToolkitItem[];
};

export const toolkit: ToolkitGroup[] = [
  {
    title: "Frontend",
    items: [
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
      { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
      { name: "Bootstrap", Icon: SiBootstrap, color: "#7952B3" },
      { name: "GSAP" },
      { name: "Framer Motion" },
    ],
  },
  {
    title: "Backend & data",
    items: [
      { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
      { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
      { name: "PHP", Icon: SiPhp, color: "#777BB4" },
      { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
      { name: "Neon" },
      { name: "Drizzle ORM" },
      { name: "Server Actions" },
      { name: "REST APIs" },
      { name: "Zod" },
      { name: "Resend" },
    ],
  },
  {
    title: "Mobile",
    items: [{ name: "Flutter", Icon: SiFlutter, color: "#54C5F8" }, { name: "React Native" }],
  },
  {
    title: "Networking & DevOps",
    items: [
      { name: "Docker", Icon: SiDocker, color: "#2496ED" },
      { name: "Linux", Icon: SiLinux, color: "#FCC624" },
      { name: "Python", Icon: SiPython, color: "#4B8BBE" },
      { name: "Git", Icon: SiGit, color: "#F05032" },
      { name: "GitHub", Icon: SiGithub, color: "#FFFFFF" },
      { name: "Postman", Icon: SiPostman, color: "#FF6C37" },
      { name: "GitHub Actions" },
      { name: "Playwright" },
      { name: "Cisco" },
      { name: "OSPF / VPN" },
      { name: "VMware" },
    ],
  },
  {
    title: "Hardware & 3D",
    items: [
      { name: "Arduino / IoT", Icon: SiArduino, color: "#00979D" },
      { name: "C++", Icon: SiCplusplus, color: "#659AD2" },
      { name: "Unity", Icon: SiUnity, color: "#FFFFFF" },
      { name: "C#" },
      { name: "Blender", Icon: SiBlender, color: "#E87D0D" },
      { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
      { name: "Photoshop" },
      { name: "Canva" },
    ],
  },
];
