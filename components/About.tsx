import Journey from "./Journey";
import GlassCard from "./GlassCard";
import Magnetic from "./Magnetic";
import ProfilePhoto from "./ProfilePhoto";
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
    "GSAP",
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
  "DevOps & Networking": [
    "Docker",
    "VMware",
    "Postman",
    "Cisco",
    "OSPF / VPN",
    "Python",
    "GitHub Actions",
  ],
  "3D & Design": ["Unity", "C#", "Blender", "Photoshop", "Canva"],
  "Engineering & Tools": ["Git", "GitHub", "Playwright", "Arduino / IoT", "Linux", "Figma"],
};

function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <GlassCard className="h-full p-5">
      <h3 className="font-semibold">{title}</h3>
      <ul className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-md border border-white/10 bg-background/60 px-3 py-1 font-mono text-xs text-muted transition hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent"
          >
            {item}
          </li>
        ))}
      </ul>
    </GlassCard>
  );
}

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <Reveal>
        <SectionHeading label="// 01 about" title="A bit about me" />
      </Reveal>

      <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
        <Reveal stagger className="space-y-5 text-muted">
          <ProfilePhoto src={PROFILE_PHOTO} alt="Portrait of John Ivan Ramiro" />

          {bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <div>
            <Magnetic>
              <a
                href={RESUME_PATH}
                download={RESUME_FILENAME}
                className="inline-block rounded-lg border border-white/15 bg-white/5 px-5 py-2 text-sm text-foreground backdrop-blur transition hover:border-accent hover:text-accent"
              >
                Download resume
              </a>
            </Magnetic>
          </div>
        </Reveal>

        <Reveal stagger className="grid gap-4 sm:grid-cols-2">
          {Object.entries(skills).map(([category, items]) => (
            <SkillGroup key={category} title={category} items={items} />
          ))}
        </Reveal>
      </div>

      <Journey />
    </section>
  );
}