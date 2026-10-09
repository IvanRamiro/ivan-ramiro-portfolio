import Reveal from "@/components/motion/Reveal";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";
import GithubTile from "./GithubTile";
import ProjectPlate from "./ProjectPlate";

export default function Projects() {
  return (
    <Section id="projects">
      <Reveal>
        <SectionHeading
          index="01"
          label="Work"
          title="Selected work"
          subtitle="Two things I've built end to end, and the problems they solve."
        />
      </Reveal>

      <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-28">
        {projects.map((project, index) => (
          <Reveal key={project.slug}>
            <ProjectPlate project={project} index={index} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-16 lg:mt-20">
        <GithubTile />
      </Reveal>
    </Section>
  );
}
