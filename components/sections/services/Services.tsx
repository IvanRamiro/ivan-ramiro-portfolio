import Reveal from "@/components/motion/Reveal";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/data/services";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <Section id="services">
      <Reveal>
        <SectionHeading
          index="03"
          label="Services"
          title="What I can build for you"
          subtitle="Whether it's a first website or a full platform, here's where I can help."
        />
      </Reveal>

      <Reveal stagger className="mt-16 grid gap-4 lg:mt-20 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </Reveal>

      <Reveal className="mt-12 flex flex-wrap items-center gap-6 border-t border-line pt-10">
        <p className="max-w-[40ch] text-ink-muted">
          Not sure which one fits? Describe the problem and I&apos;ll suggest the simplest thing
          that solves it.
        </p>
        <Button href="#contact" size="lg">
          Start a project
        </Button>
      </Reveal>
    </Section>
  );
}
