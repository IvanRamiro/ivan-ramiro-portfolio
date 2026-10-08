import Magnetic from "@/components/motion/Magnetic";
import Reveal from "@/components/motion/Reveal";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/data/services";
import ServiceShowcase from "./ServiceShowcase";

export default function Services() {
  return (
    <Section id="services">
      <Reveal>
        <SectionHeading
          label="// 03 services"
          title="What I can build for you"
          subtitle="Whether it's a first website or a full platform, here's where I can help."
        />
      </Reveal>

      <div className="mt-16 space-y-24 lg:space-y-32">
        {services.map((service, index) => (
          <ServiceShowcase key={service.title} service={service} index={index} />
        ))}
      </div>

      <Reveal className="mt-24 text-center">
        <Magnetic>
          <Button href="#contact" variant="glow" className="inline-block">
            Start a project
          </Button>
        </Magnetic>
      </Reveal>
    </Section>
  );
}
