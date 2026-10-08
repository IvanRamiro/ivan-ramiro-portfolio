"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";

const OFFSET_Y = 40;
const DURATION_S = 0.9;
const STAGGER_S = 0.1;

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Animate each direct child in sequence instead of the wrapper itself */
  stagger?: boolean;
};

export default function Reveal({
  children,
  className,
  delay = 0,
  stagger = false,
}: RevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container || prefersReducedMotion()) return;

      // Opacity only (not visibility), so the content stays available to screen readers
      gsap.from(stagger ? Array.from(container.children) : container, {
        opacity: 0,
        y: OFFSET_Y,
        duration: DURATION_S,
        delay,
        ease: "power3.out",
        stagger: stagger ? STAGGER_S : 0,
        scrollTrigger: { trigger: container, start: "top 85%", once: true },
      });
    },
    { scope: containerRef, dependencies: [stagger, delay] }
  );

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}