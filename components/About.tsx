import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const skills = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  Backend: ["Node.js", "PostgreSQL", "REST APIs"],
  Mobile: ["React Native", "Flutter"],
  "Engineering & Tools": ["Git", "Arduino", "VS Code", "Figma"],
};

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <Reveal>
        <SectionHeading label="// 01 about" title="A bit about me" />
      </Reveal>

      <div className="mt-10 grid gap-12 lg:grid-cols-2">
        <Reveal className="space-y-4 text-muted">
          <p>
            I&apos;m Ivan, a computer engineering graduate who enjoys turning ideas
            into working software. I specialize in building web and mobile applications.
          </p>
          <p>
            My engineering training gives me an edge on projects that mix
            software with hardware, like dashboards for sensors and IoT systems.
          </p>
          <a
            href="/resume.pdf"
            download
            className="mt-4 inline-block rounded-lg border border-border px-5 py-2 text-sm text-foreground transition hover:border-accent hover:text-accent"
          >
            Download resume
          </a>
        </Reveal>

        <Reveal delay={0.1} className="grid gap-6 sm:grid-cols-2">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="font-semibold">{category}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {items.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-border bg-card px-3 py-1 font-mono text-xs text-muted"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}