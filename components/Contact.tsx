import { socials, type SocialLink } from "@/data/socials";
import { cssVar } from "@/lib/css";
import ContactForm from "./ContactForm";
import GlassCard from "./GlassCard";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function AvailabilityBadge() {
  return (
    <p className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 font-mono text-xs text-emerald-300">
      <span className="relative flex size-2">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:animate-none" />
        <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
      </span>
      Open to freelance and full-time roles
    </p>
  );
}

function SocialCard({ label, handle, href, Icon, color, linkProps }: SocialLink) {
  return (
    <GlassCard>
      <a
        href={href}
        {...linkProps}
        style={cssVar("--brand", color)}
        className="flex items-center gap-4 p-4"
      >
        <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-background/70 text-xl text-[var(--brand)] transition duration-300 group-hover:scale-110">
          <Icon aria-hidden="true" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-sm font-semibold">{label}</span>
          <span className="block truncate font-mono text-xs text-muted">{handle}</span>
        </span>
        <span
          aria-hidden="true"
          className="text-muted transition duration-300 group-hover:translate-x-1 group-hover:text-accent"
        >
          →
        </span>
      </a>
    </GlassCard>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
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
    </section>
  );
}