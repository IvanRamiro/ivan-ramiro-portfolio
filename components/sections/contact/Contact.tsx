import Reveal from "@/components/motion/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import Section from "@/components/ui/Section";
import Tile from "@/components/ui/Tile";
import { socials } from "@/data/socials";
import ContactForm from "@/features/contact/components/ContactForm";
import AvailabilityBadge from "./AvailabilityBadge";
import SocialRow from "./SocialRow";

export default function Contact() {
  return (
    <Section id="contact" className="on-copper bg-copper-field text-copper-ink">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <Eyebrow index="04" tone="inverse">
            Contact
          </Eyebrow>
          <h2 className="mt-5 text-h2 font-semibold">Let&apos;s build something that ships.</h2>
          <p className="mt-5 max-w-[46ch] text-lede text-copper-muted">
            Have a website, app, or system in mind? Tell me about it and I&apos;ll get back to you
            soon.
          </p>

          <div className="mt-8">
            <AvailabilityBadge />
          </div>

          <div className="mt-10 border-b border-copper-ink/15">
            {socials.map((social) => (
              <SocialRow key={social.label} {...social} />
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-7">
          <Tile tone="ground" className="on-ground p-6 text-ink sm:p-8 lg:p-10">
            <ContactForm />
          </Tile>
        </Reveal>
      </div>
    </Section>
  );
}
