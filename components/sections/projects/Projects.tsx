import Reveal from "@/components/motion/Reveal";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <Section id="projects">
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
    </Section>
  );
}
