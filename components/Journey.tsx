"use client";

import { useRef } from "react";
import { gsap, prefersReducedMotion, ScrollTrigger, useGSAP } from "@/lib/gsap";
import GlassCard from "./GlassCard";
import Reveal from "./Reveal";

type Milestone = {
  title: string;
  place: string;
  period?: string;
  description: string;
};

const milestones: Milestone[] = [
  {
    title: "BS Computer Engineering",
    place: "Technological Institute of the Philippines, Quezon City",
    description:
      "Four years of Cisco-aligned training in routing, switching, OSPF, and VPN, plus Docker, VMware, Python, and Postman.",
  },
  {
    title: "Thesis: sciVRse",
    place: "Team of four",
    description:
      "A VR science laboratory simulation built with C# and Unity, with a companion website for downloads and documentation.",
  },
  {
    title: "Full-Stack Web Developer Intern",
    place: "Gudlyf Property Corp",
    period: "Mar – May 2025",
    description:
      "Built and deployed a company website with an admin dashboard so non-technical staff could manage their own content.",
  },
  {
    title: "Now",
    place: "Open to work",
    description:
      "Building with Next.js, TypeScript, and Postgres, with automated tests and CI on every push.",
  },
];

export default function Journey() {
  const rootRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root || prefersReducedMotion()) return;

      // The glowing line draws itself as you scroll down the list
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

        // Dots are lit by default (reduced motion), and switched off here only when animating
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
          {milestones.map(({ title, place, period, description }) => (
            <li key={title} data-milestone className="relative">
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
          ))}
        </ol>
      </div>
    </div>
  );
}