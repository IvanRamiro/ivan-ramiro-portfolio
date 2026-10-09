"use client";

import { useRef } from "react";
import Reveal from "@/components/motion/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import Tile from "@/components/ui/Tile";
import { milestones, type Milestone } from "@/data/about";
import { MEDIA, ScrollTrigger, gsap, useGSAP } from "@/lib/gsap";

function MilestoneItem({ title, place, period, description }: Milestone) {
  return (
    <li data-milestone className="relative">
      <span
        data-dot
        data-active="false"
        aria-hidden="true"
        className="group absolute top-7 -left-10 flex size-4 items-center justify-center rounded-full border border-line-strong bg-ground transition-colors duration-(--dur-fast) data-[active=true]:border-copper"
      >
        <span className="size-1.5 rounded-full bg-ink-faint transition-colors duration-(--dur-fast) group-data-[active=true]:bg-copper" />
      </span>

      <Reveal>
        <Tile className="p-5 sm:p-6">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <h3 className="font-semibold">{title}</h3>
            {period && (
              <span className="font-mono text-label normal-case tracking-normal text-copper">
                {period}
              </span>
            )}
          </div>
          <p className="mt-1 font-mono text-data text-ink-muted">{place}</p>
          <p className="mt-3 max-w-[60ch] text-sm text-ink-muted">{description}</p>
        </Tile>
      </Reveal>
    </li>
  );
}

export default function Journey() {
  const rootRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;

      const items = root.querySelectorAll<HTMLElement>("[data-milestone]");
      const dots = root.querySelectorAll<HTMLElement>("[data-dot]");
      const matchMedia = gsap.matchMedia();

      matchMedia.add(MEDIA.reduce, () => {
        gsap.set(progressRef.current, { scaleY: 1 });
        dots.forEach((dot) => {
          dot.dataset.active = "true";
        });
      });

      matchMedia.add(MEDIA.motion, () => {
        dots.forEach((dot) => {
          dot.dataset.active = "false";
        });

        gsap.fromTo(
          progressRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: { trigger: root, start: "top 70%", end: "bottom 70%", scrub: 0.6 },
          }
        );

        items.forEach((item) => {
          const dot = item.querySelector<HTMLElement>("[data-dot]");
          if (!dot) return;

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
      });
    },
    { scope: rootRef }
  );

  return (
    <div className="mt-20 lg:mt-24">
      <Eyebrow index="02.1">Journey</Eyebrow>

      <div ref={rootRef} className="relative mt-8">
        <span aria-hidden="true" className="absolute top-3 bottom-3 left-2 w-px bg-line-strong" />
        <span
          ref={progressRef}
          aria-hidden="true"
          className="absolute top-3 bottom-3 left-2 w-px origin-top bg-copper"
        />

        <ol className="space-y-6 pl-10">
          {milestones.map((milestone) => (
            <MilestoneItem key={milestone.title} {...milestone} />
          ))}
        </ol>
      </div>
    </div>
  );
}
