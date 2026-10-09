import Image from "next/image";
import { FiDownload } from "react-icons/fi";
import Reveal from "@/components/motion/Reveal";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Tile from "@/components/ui/Tile";
import { bio, profilePhoto, resume } from "@/data/about";
import Journey from "./Journey";
import Toolkit from "./Toolkit";

const TILE_PADDING = "p-6 sm:p-8";

export default function About() {
  return (
    <Section id="about">
      <Reveal>
        <SectionHeading
          index="02"
          label="About"
          title="Engineer first, developer by practice."
          subtitle="Computer engineering taught me how systems fit together. Building software is where I put that to work."
        />
      </Reveal>

      <Reveal stagger className="mt-16 grid gap-4 md:grid-cols-6 lg:mt-20 lg:grid-cols-12">
        <Tile className="min-h-[22rem] md:col-span-3 lg:col-span-5 lg:row-span-2">
          <Image
            src={profilePhoto.src}
            alt={profilePhoto.alt}
            fill
            sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </Tile>

        <Tile className={`md:col-span-3 lg:col-span-7 ${TILE_PADDING}`}>
          <Eyebrow>Profile</Eyebrow>
          <div className="mt-5 space-y-4 text-ink-muted">
            {bio.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Tile>

        <Tile className={`md:col-span-4 lg:col-span-4 ${TILE_PADDING}`}>
          <Eyebrow>Hardware meets software</Eyebrow>
          <p className="mt-5 text-ink-muted">{bio.hardware}</p>
        </Tile>

        <Tile className={`flex flex-col justify-between gap-8 md:col-span-2 lg:col-span-3 ${TILE_PADDING}`}>
          <div>
            <Eyebrow>Resume</Eyebrow>
            <p className="mt-5 text-ink-muted">Education, experience, and skills, ready to send.</p>
          </div>
          <Button href={resume.href} download={resume.filename} variant="secondary">
            <FiDownload aria-hidden="true" />
            Download PDF
          </Button>
        </Tile>

        <Tile className={`md:col-span-6 lg:col-span-12 ${TILE_PADDING}`}>
          <Toolkit />
        </Tile>
      </Reveal>

      <Journey />
    </Section>
  );
}
