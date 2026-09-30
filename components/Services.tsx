import type { IconType } from "react-icons";
import { FiBox, FiCpu, FiGlobe, FiLayout, FiSmartphone, FiWifi } from "react-icons/fi";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type Service = {
  Icon: IconType;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    Icon: FiGlobe,
    title: "Website development",
    description:
      "Fast, mobile-friendly websites for businesses, organizations, and personal brands.",
  },
  {
    Icon: FiSmartphone,
    title: "Mobile app development",
    description: "Cross-platform apps for Android and iOS, from prototype to release.",
  },
  {
    Icon: FiLayout,
    title: "Custom web platforms",
    description:
      "Dashboards, booking systems, and inventory tools tailored to how you work.",
  },
  {
    Icon: FiCpu,
    title: "IoT and embedded prototypes",
    description:
      "Connecting sensors and devices to apps that display and act on the data.",
  },
  {
    Icon: FiBox,
    title: "VR and 3D simulations",
    description: "Interactive training and learning experiences built with Unity.",
  },
  {
    Icon: FiWifi,
    title: "Network setup and IT support",
    description: "Small office networking, configuration, and troubleshooting.",
  },
];

function ServiceCard({ Icon, title, description }: Service) {
  return (
    <div className="h-full rounded-2xl border border-border bg-card p-6 transition hover:border-accent/60">
      <div className="flex size-11 items-center justify-center rounded-lg bg-accent/10 text-xl text-accent">
        <Icon aria-hidden="true" />
      </div>
      <h3 className="mt-5 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted">{description}</p>
    </div>
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

      <ul className="mt-10 grid gap-6 sm:grid-cols-2">
        {services.map((service, index) => (
          <li key={service.title}>
            <Reveal delay={index * 0.08} className="h-full">
              <ServiceCard {...service} />
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}