import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const PROFILE_PHOTO = "/ivanprofile.jpg";
const RESUME_PATH = "/ivanramiro_resume.pdf";
const RESUME_FILENAME = "John-Ivan-Ramiro-Resume.pdf";

const bio = [
  "I'm Ivan, a computer engineering graduate who enjoys turning ideas into working software. I specialize in building web and mobile applications.",
  "My engineering training gives me an edge on projects that mix software with hardware, like dashboards for sensors and IoT systems.",
  "During my internship I built and deployed a company website with an admin dashboard so non-technical staff could manage their own content. My thesis was a VR science laboratory simulation built with C# and Unity.",
];

const skills: Record<string, string[]> = {
  Frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "HTML5",
    "CSS3",
    "JavaScript",
    "Bootstrap",
  ],
  Backend: [
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
  Mobile: ["React Native", "Flutter"],
  "DevOps & Networking": ["Docker", "VMware", "Postman", "Cisco", "OSPF / VPN", "Python"],
  "3D & Design": ["Unity", "C#", "Blender", "Photoshop", "Canva"],
  "Engineering & Tools": ["Git", "GitHub", "Arduino / IoT", "Linux", "Figma"],
};

function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="font-semibold">{title}</h3>
      <ul className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-md border border-border bg-card px-3 py-1 font-mono text-xs text-muted"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <Reveal>
        <SectionHeading label="// 01 about" title="A bit about me" />
      </Reveal>

      <div className="mt-10 grid gap-12 lg:grid-cols-2">
        <Reveal className="space-y-4 text-muted">
          <div className="relative mb-2 w-fit">
            <div
              aria-hidden="true"
              className="absolute -inset-1 rounded-2xl bg-linear-to-r from-accent to-accent-2 opacity-40 blur"
            />
            <Image
              src={PROFILE_PHOTO}
              alt="Portrait of John Ivan Ramiro"
              width={400}
              height={400}
              className="relative size-40 rounded-2xl border border-border object-cover sm:size-48"
            />
          </div>

          {bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <a
            href={RESUME_PATH}
            download={RESUME_FILENAME}
            className="mt-4 inline-block rounded-lg border border-border px-5 py-2 text-sm text-foreground transition hover:border-accent hover:text-accent"
          >
            Download resume
          </a>
        </Reveal>

        <Reveal delay={0.1} className="grid gap-6 sm:grid-cols-2">
          {Object.entries(skills).map(([category, items]) => (
            <SkillGroup key={category} title={category} items={items} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}