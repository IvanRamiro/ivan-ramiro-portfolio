import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <Reveal>
        <SectionHeading
          label="// 02 projects"
          title="Selected work"
          subtitle="A few things I've built, and the problems they solve."
        />
      </Reveal>

      <Reveal stagger className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </Reveal>
    </section>
  );
}