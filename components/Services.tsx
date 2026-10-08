import type { IconType } from "react-icons";
import { FiBox, FiCpu, FiGlobe, FiLayout, FiSmartphone, FiWifi } from "react-icons/fi";
import { cssVar } from "@/lib/css";
import GlassCard from "./GlassCard";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type Service = {
  Icon: IconType;
  title: string;
  description: string;
  color: string; // tints the glow and icon
};

const services: Service[] = [
  {
    Icon: FiGlobe,
    title: "Website development",
    description:
      "Fast, mobile-friendly websites for businesses, organizations, and personal brands.",
    color: "#38bdf8",
  },
  {
    Icon: FiSmartphone,
    title: "Mobile app development",
    description: "Cross-platform apps for Android and iOS, from prototype to release.",
    color: "#a78bfa",
  },
  {
    Icon: FiLayout,
    title: "Custom web platforms",
    description:
      "Dashboards, booking systems, and inventory tools tailored to how you work.",
    color: "#34d399",
  },
  {
    Icon: FiCpu,
    title: "IoT and embedded prototypes",
    description:
      "Connecting sensors and devices to apps that display and act on the data.",
    color: "#fbbf24",
  },
  {
    Icon: FiBox,
    title: "VR and 3D simulations",
    description: "Interactive training and learning experiences built with Unity.",
    color: "#f472b6",
  },
  {
    Icon: FiWifi,
    title: "Network setup and IT support",
    description: "Small office networking, configuration, and troubleshooting.",
    color: "#22d3ee",
  },
];

type ServiceCardProps = Service & { index: number };

function ServiceCard({ Icon, title, description, color, index }: ServiceCardProps) {
  return (
    <GlassCard tilt className="h-full">
      <div style={cssVar("--tint", color)} className="relative h-full p-6">
        {/* Colored light behind the glass */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-12 -top-12 size-44 rounded-full bg-[var(--tint)] opacity-15 blur-3xl transition-opacity duration-500 group-hover:opacity-35"
        />

        <div className="relative flex items-start justify-between">
          {/* A negative delay staggers the float so the orbs don't bob in sync */}
          <span
            style={{ animationDelay: `${index * -0.8}s` }}
            className="animate-float flex size-12 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-2xl text-[var(--tint)] shadow-[0_0_24px_-6px_var(--tint)] backdrop-blur-md transition duration-300 group-hover:scale-110"
          >
            <Icon aria-hidden="true" />
          </span>
          <span className="font-mono text-xs text-muted/60">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <h3 className="relative mt-6 text-lg font-semibold">{title}</h3>
        <p className="relative mt-2 text-sm text-muted">{description}</p>
      </div>
    </GlassCard>
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

      <Reveal stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={service.title} {...service} index={index} />
        ))}
      </Reveal>
    </section>
  );
}