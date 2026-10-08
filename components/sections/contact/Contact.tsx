import Reveal from "@/components/motion/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { socials } from "@/data/socials";
import ContactForm from "@/features/contact/components/ContactForm";
import AvailabilityBadge from "./AvailabilityBadge";
import SocialCard from "./SocialCard";

export default function Contact() {
  return (
    <Section id="contact">
      <div className="grid gap-12 lg:grid-cols-2">
        <Reveal stagger className="space-y-8">
          <SectionHeading
            label="// 04 contact"
            title="Let's work together"
            subtitle="Have a website, app, or system in mind? Tell me about it and I'll get back to you soon."
          />

          <AvailabilityBadge />

          <ul className="space-y-3">
            {socials.map((social) => (
              <li key={social.label}>
                <SocialCard {...social} />
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15}>
          <GlassCard className="p-6 sm:p-8">
            <ContactForm />
          </GlassCard>
        </Reveal>
      </div>
    </Section>
  );
}
