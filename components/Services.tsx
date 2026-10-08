import type { ComponentType } from "react";
import { FiCheck } from "react-icons/fi";
import { cssVar } from "@/lib/css";
import GlassCard from "./GlassCard";
import Magnetic from "./Magnetic";
import MobileAppDemo from "./mockups/MobileAppDemo";
import PlatformDemo from "./mockups/PlatformDemo";
import WebsiteDemo from "./mockups/WebsiteDemo";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type Service = {
  title: string;
  description: string;
  features: string[];
  color: string; // tints the glow and the check marks
  Demo: ComponentType;
};

const services: Service[] = [
  {
    title: "Website development",
    description:
      "Fast, mobile-friendly websites for businesses, organizations, and personal brands.",
    features: [
      "Responsive, fast-loading layouts",
      "Scroll animations and 3D interactions",
      "SEO-ready and easy to update",
    ],
    color: "#38bdf8",
    Demo: WebsiteDemo,
  },
  {
    title: "Mobile app development",
    description: "Cross-platform apps for Android and iOS, from prototype to release.",
    features: [
      "Designed for iOS and Android",
      "Smooth gestures and transitions",
      "Connected to your data and accounts",
    ],
    color: "#a78bfa",
    Demo: MobileAppDemo,
  },
  {
    title: "Custom platform development",
    description:
      "Dashboards, booking systems, and inventory tools tailored to how you work.",
    features: [
      "Admin dashboards, booking, and inventory tools",
      "One system that works on desktop and phone",
      "Built around how your team works",
    ],
    color: "#34d399",
    Demo: PlatformDemo,
  },
];

function ServiceStage({ Demo, color }: Pick<Service, "Demo" | "color">) {
  return (
    <GlassCard tilt>
      <div
        style={cssVar("--tint", color)}
        className="relative flex h-[24rem] items-center justify-center overflow-hidden px-4 sm:h-[26rem]"
      >
        {/* Colored light behind the devices */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--tint)] opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-35"
        />

        {/* Decorative: screen readers skip the mock-up text */}
        <div aria-hidden="true" className="relative flex w-full items-center justify-center">
          <Demo />
        </div>

        <span className="absolute bottom-3 left-4 font-mono text-[10px] uppercase tracking-widest text-muted/70">
          Concept preview
        </span>
      </div>
    </GlassCard>
  );
}

type ServiceShowcaseProps = {
  service: Service;
  index: number;
};

function ServiceShowcase({ service, index }: ServiceShowcaseProps) {
  const { title, description, features, color, Demo } = service;
  const isReversed = index % 2 === 1;

  return (
    <article className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <Reveal className={isReversed ? "lg:order-2" : undefined}>
        <div style={cssVar("--tint", color)}>
          <p className="font-mono text-sm text-[var(--tint)]">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">{title}</h3>
          <p className="mt-4 max-w-md text-muted">{description}</p>

          <ul className="mt-6 space-y-3">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs text-[var(--tint)]">
                  <FiCheck aria-hidden="true" />
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <ServiceStage Demo={Demo} color={color} />
      </Reveal>
    </article>
  );
}

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
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
          <a
            href="#contact"
            className="inline-block rounded-lg bg-accent px-6 py-3 font-semibold text-background transition hover:shadow-[0_0_28px_rgb(56_189_248/0.5)]"
          >
            Start a project
          </a>
        </Magnetic>
      </Reveal>
    </section>
  );
}