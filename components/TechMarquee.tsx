import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiPython,
  SiTailwindcss, SiNodedotjs, SiPostgresql, SiFlutter, SiFirebase,
  SiGit, SiArduino, SiCplusplus, SiLinux, SiFigma, SiHtml5,
} from "react-icons/si";

const techs = [
  { name: "JavaScript", Icon: SiJavascript },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "React", Icon: SiReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Python", Icon: SiPython },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "Firebase", Icon: SiFirebase },
  { name: "Flutter", Icon: SiFlutter },
  { name: "C++", Icon: SiCplusplus },
  { name: "Arduino", Icon: SiArduino },
  { name: "HTML5", Icon: SiHtml5 },
  { name: "Git", Icon: SiGit },
  { name: "Linux", Icon: SiLinux },
  { name: "Figma", Icon: SiFigma },
];

export default function TechMarquee() {
  const items = [...techs, ...techs]; // duplicated so the loop is seamless

  return (
    <div className="marquee overflow-hidden border-y border-border bg-card/40 py-5 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="animate-marquee flex w-max">
        {items.map(({ name, Icon }, i) => (
          <div
            key={i}
            className="flex items-center gap-2 whitespace-nowrap pr-12 text-muted transition hover:text-accent"
          >
            <Icon className="text-xl" />
            <span className="font-mono text-sm">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}