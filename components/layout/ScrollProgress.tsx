"use client";

import { usePathname } from "next/navigation";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      gsap.to(barRef.current, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: { start: 0, end: "max", scrub: 0.3 },
      });
    },
    { dependencies: [pathname], revertOnUpdate: true }
  );

  return (
    <div
      ref={barRef}
      aria-hidden="true"
      style={{ transform: "scaleX(0)" }}
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-linear-to-r from-accent to-accent-2"
    />
  );
}