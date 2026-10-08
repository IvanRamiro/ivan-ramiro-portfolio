import GlassCard from "@/components/ui/GlassCard";
import type { Service } from "@/data/services";
import { cssVar } from "@/lib/css";

type ServiceStageProps = Pick<Service, "Demo" | "color">;

/** Glass panel that holds a mock-up over a soft, tinted light. */
export default function ServiceStage({ Demo, color }: ServiceStageProps) {
  return (
    <GlassCard tilt>
      <div
        style={cssVar("--tint", color)}
        className="relative flex h-[24rem] items-center justify-center overflow-hidden px-4 sm:h-[26rem]"
      >
        {/* Coloured light behind the devices */}
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
