import { FiCheck } from "react-icons/fi";
import Reveal from "@/components/motion/Reveal";
import type { Service } from "@/data/services";
import { cssVar } from "@/lib/css";
import ServiceStage from "./ServiceStage";

type ServiceShowcaseProps = {
  service: Service;
  /** Zero-based position; drives the "01" numbering and alternates the layout side */
  index: number;
};

/** Copy on one side, animated mock-up on the other, swapping sides on every other row. */
export default function ServiceShowcase({ service, index }: ServiceShowcaseProps) {
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
