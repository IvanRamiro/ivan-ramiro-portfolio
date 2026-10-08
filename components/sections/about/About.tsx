import Magnetic from "@/components/motion/Magnetic";
import Reveal from "@/components/motion/Reveal";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { bio, profilePhoto, resume } from "@/data/about";
import Journey from "./Journey";
import ProfilePhoto from "./ProfilePhoto";
import SkillGroups from "./SkillGroups";

export default function About() {
  return (
    <Section id="about">
      <Reveal>
        <SectionHeading label="// 01 about" title="A bit about me" />
      </Reveal>

      <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
        <Reveal stagger className="space-y-5 text-muted">
          <ProfilePhoto {...profilePhoto} />

          {bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <div>
            <Magnetic>
              <Button
                href={resume.href}
                download={resume.filename}
                variant="glass"
                className="inline-block"
              >
                Download resume
              </Button>
            </Magnetic>
          </div>
        </Reveal>

        <Reveal stagger className="grid gap-4 sm:grid-cols-2">
          <SkillGroups />
        </Reveal>
      </div>

      <Journey />
    </Section>
  );
}
