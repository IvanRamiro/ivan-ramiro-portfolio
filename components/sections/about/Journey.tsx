"use client";

import { useRef } from "react";
import Reveal from "@/components/motion/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import { milestones, type Milestone } from "@/data/about";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";

function MilestoneItem({ title, place, period, description }: Milestone) {
  return (
    <li data-milestone className="relative">
      {/* Lit by default so the timeline reads correctly without JavaScript or with reduced motion */}
      <span
        data-dot
        data-active="true"
        aria-hidden="true"
        className="group absolute -left-10 top-6 flex size-4 items-center justify-center rounded-full border border-border bg-background transition-all duration-500 data-[active=true]:border-accent data-[active=true]:shadow-[0_0_16px_var(--color-accent)]"
      >
        <span className="size-1.5 rounded-full bg-muted/40 transition-colors duration-500 group-data-[active=true]:bg-accent" />
      </span>

      <div data-card>
        <GlassCard className="p-5">
          <h4 className="font-semibold">{title}</h4>
          <p className="mt-1 font-mono text-xs text-accent">
            {period ? `${place} · ${period}` : place}
          </p>
          <p className="mt-2 max-w-2xl text-sm text-muted">{description}</p>
        </GlassCard>
      </div>
    </li>
  );
}

/** Vertical timeline whose glowing line draws itself and lights each dot as you scroll past. */
export default function Journey() {
  const rootRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root || prefersReducedMotion()) return;

      gsap.fromTo(
        progressRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: { trigger: root, start: "top 70%", end: "bottom 70%", scrub: 0.6 },
        }
      );

      root.querySelectorAll<HTMLElement>("[data-milestone]").forEach((item) => {
        const dot = item.querySelector<HTMLElement>("[data-dot]");
        const card = item.querySelector<HTMLElement>("[data-card]");
        if (!dot || !card) return;

        gsap.from(card, {
          opacity: 0,
          x: 40,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: item, start: "top 80%", once: true },
        });

        // Only when animating do dots start dark and light up as they scroll into view
        dot.dataset.active = "false";
        ScrollTrigger.create({
          trigger: item,
          start: "top 70%",
          onEnter: () => {
            dot.dataset.active = "true";
          },
          onLeaveBack: () => {
            dot.dataset.active = "false";
          },
        });
      });
    },
    { scope: rootRef }
  );

  return (
    <div className="mt-24">
      <Reveal>
        <h3 className="font-mono text-sm text-accent">{"// journey"}</h3>
      </Reveal>

      <div ref={rootRef} className="relative mt-8">
        <span aria-hidden="true" className="absolute bottom-3 left-2 top-3 w-px bg-border" />
        <span
          ref={progressRef}
          aria-hidden="true"
          className="absolute bottom-3 left-2 top-3 w-px origin-top bg-linear-to-b from-accent via-accent-2 to-transparent"
        />

        <ol className="space-y-8 pl-10">
          {milestones.map((milestone) => (
            <MilestoneItem key={milestone.title} {...milestone} />
          ))}
        </ol>
      </div>
    </div>
  );
}
