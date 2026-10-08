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

export type Technology = {
  name: string;
  Icon: IconType;
  /** Official brand colour, also used for the hover glow */
  color: string;
};

/** Order matters: this is the order they scroll past in the marquee. */
export const technologies: Technology[] = [
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Python", Icon: SiPython, color: "#4B8BBE" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
  { name: "Flutter", Icon: SiFlutter, color: "#54C5F8" },
  { name: "C++", Icon: SiCplusplus, color: "#659AD2" },
  { name: "Arduino", Icon: SiArduino, color: "#00979D" },
  { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "Linux", Icon: SiLinux, color: "#FCC624" },
  { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
  { name: "PHP", Icon: SiPhp, color: "#777BB4" },
  { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
  { name: "Bootstrap", Icon: SiBootstrap, color: "#7952B3" },
  { name: "Unity", Icon: SiUnity, color: "#FFFFFF" },
  { name: "Blender", Icon: SiBlender, color: "#E87D0D" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "Postman", Icon: SiPostman, color: "#FF6C37" },
  { name: "GitHub", Icon: SiGithub, color: "#FFFFFF" },
];
