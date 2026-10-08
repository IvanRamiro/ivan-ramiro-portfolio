"use client";

import { useRef, type ReactNode } from "react";
import { gsap, prefersReducedMotion, useGSAP } from "@/lib/gsap";

type ParallaxProps = {
  children: ReactNode;
  className?: string;
  /** Pixels the content travels above and below its resting position */
  distance?: number;
};

export default function Parallax({ children, className, distance = 30 }: ParallaxProps) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  // The outer layer stays still and acts as the trigger; only the inner layer moves
  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      gsap.fromTo(
        innerRef.current,
        { y: distance },
        {
          y: -distance,
          ease: "none",
          scrollTrigger: {
            trigger: outerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8,
          },
        }
      );
    },
    { scope: outerRef, dependencies: [distance] }
  );

  return (
    <div ref={outerRef} className={className}>
      <div ref={innerRef}>{children}</div>
    </div>
  );
}