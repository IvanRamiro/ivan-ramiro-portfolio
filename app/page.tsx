import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import About from "@/components/About";
import Services from "@/components/Services";
import ProjectCard from "@/components/ProjectCard";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <About />

      <section id="projects" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
        <Reveal>
          <SectionHeading
            label="// 02 projects"
            title="Selected work"
            subtitle="A few things I've built, and the problems they solve."
          />
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.1}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </section>

      <Services />

      <section id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              label="// 04 contact"
              title="Let's work together"
              subtitle="Have a website, app, or system in mind? Tell me about it and I'll get back to you soon."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}