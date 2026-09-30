import { FiGlobe, FiSmartphone, FiLayout, FiCpu, FiBox, FiWifi } from "react-icons/fi";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const services = [
  {
    Icon: FiGlobe,
    title: "Website development",
    desc: "Fast, mobile-friendly websites for businesses, organizations, and personal brands.",
  },
  {
    Icon: FiSmartphone,
    title: "Mobile app development",
    desc: "Cross-platform apps for Android and iOS, from prototype to release.",
  },
  {
    Icon: FiLayout,
    title: "Custom web platforms",
    desc: "Dashboards, booking systems, and inventory tools tailored to how you work.",
  },
  {
    Icon: FiCpu,
    title: "IoT and embedded prototypes",
    desc: "Connecting sensors and devices to apps that display and act on the data.",
  },
    {
    Icon: FiBox,
    title: "VR and 3D simulations",
    desc: "Interactive training and learning experiences built with Unity.",
  },
  {
    Icon: FiWifi,
    title: "Network setup and IT support",
    desc: "Small office networking, configuration, and troubleshooting.",
  },
];

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

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {services.map(({ Icon, title, desc }, i) => (
          <Reveal key={title} delay={i * 0.08}>
            <div className="h-full rounded-2xl border border-border bg-card p-6 transition hover:border-accent/60">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-xl text-accent">
                <Icon />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted">{desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}