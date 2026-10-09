"use client";

import { useRef, type ReactNode } from "react";
import { DURATION, EASE, MEDIA, gsap, useGSAP } from "@/lib/gsap";

const STAGGER_S = 0.06;
const MAX_STAGGERED_ITEMS = 6;

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: boolean;
};

function markRevealed(targets: Element[]) {
  for (const target of targets) {
    target.setAttribute("data-revealed", "");
  }
}

export default function Reveal({ children, className, delay = 0, stagger = false }: RevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      const targets = stagger ? Array.from(container.children) : [container];
      const matchMedia = gsap.matchMedia();

      matchMedia.add(MEDIA.reduce, () => {
        gsap.set(targets, { opacity: 1, y: 0 });
        markRevealed(targets);
      });

      matchMedia.add({ desktop: MEDIA.motionDesktop, mobile: MEDIA.motionMobile }, ({ conditions }) => {
        const distance = conditions?.mobile ? 12 : 20;
        const staggerEach = targets.length <= MAX_STAGGERED_ITEMS ? STAGGER_S : 0;

        gsap.set(targets, { opacity: 0, y: distance });
        markRevealed(targets);

        gsap.to(targets, {
          opacity: 1,
          y: 0,
          duration: DURATION.reveal,
          delay,
          ease: EASE.out,
          stagger: stagger ? staggerEach : 0,
          scrollTrigger: { trigger: container, start: "top 85%", once: true },
        });
      });
    },
    { scope: containerRef, dependencies: [stagger, delay] }
  );

  return (
    <div
      ref={containerRef}
      data-reveal={stagger ? undefined : ""}
      data-reveal-group={stagger ? "" : undefined}
      className={className}
    >
      {children}
    </div>
  );
}
