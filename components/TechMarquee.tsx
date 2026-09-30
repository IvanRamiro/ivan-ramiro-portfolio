import type { CSSProperties } from "react";
import type { IconType } from "react-icons";
import {
  SiBlender,
  SiBootstrap,
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
  SiArduino,
  SiCplusplus,
} from "react-icons/si";

type Tech = {
  name: string;
  Icon: IconType;
  color: string; // brand color, also used for the hover glow
};

const techs: Tech[] = [
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

// Two copies make the loop seamless (the animation slides by exactly 50%).
const COPIES = [0, 1];

function TechItem({ name, Icon, color }: Tech) {
  return (
    <li
      style={{ "--brand": color } as CSSProperties}
      className="group flex items-center gap-2 whitespace-nowrap pr-12"
    >
      <Icon
        style={{ color }}
        className="text-2xl transition duration-300 group-hover:scale-125 group-hover:[filter:drop-shadow(0_0_6px_var(--brand))_drop-shadow(0_0_14px_var(--brand))]"
      />
      <span className="font-mono text-sm text-muted transition group-hover:text-foreground">
        {name}
      </span>
    </li>
  );
}

export default function TechMarquee() {
  return (
    <div
      className="marquee overflow-hidden border-y border-border bg-card/40 py-5 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      aria-label="Technologies I work with"
    >
      <div className="animate-marquee flex w-max">
        {COPIES.map((copy) => (
          <ul
            key={copy}
            className="flex"
            // The second copy is only for the loop, so screen readers skip it
            aria-hidden={copy === 1}
          >
            {techs.map((tech) => (
              <TechItem key={tech.name} {...tech} />
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}