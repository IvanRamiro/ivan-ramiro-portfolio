"use client";

import { usePathname } from "next/navigation";
import { useRef } from "react";
import { gsap, prefersReducedMotion, useGSAP } from "@/lib/gsap";

type Blob = {
  position: string;
  size: string;
  color: string;
  scrollShift: number;
};

const blobs: Blob[] = [
  { position: "-left-[10%] top-[8%]", size: "size-[40rem]", color: "bg-accent/25", scrollShift: -260 },
  { position: "-right-[12%] top-[38%]", size: "size-[36rem]", color: "bg-accent-2/25", scrollShift: 300 },
  { position: "left-[18%] top-[72%]", size: "size-[32rem]", color: "bg-fuchsia-500/15", scrollShift: -200 },
];

export default function AuroraBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Rebuilt on route change because each page has a different scroll height
  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container || prefersReducedMotion()) return;

      container.querySelectorAll<HTMLElement>("[data-shift]").forEach((blob) => {
        gsap.to(blob, {
          y: Number(blob.dataset.shift),
          ease: "none",
          scrollTrigger: { start: 0, end: "max", scrub: 1.2 },
        });
      });
    },
    { scope: containerRef, dependencies: [pathname], revertOnUpdate: true }
  );

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {blobs.map(({ position, size, color, scrollShift }) => (
        // Outer layer: scroll parallax (GSAP). Inner layer: idle drift (CSS).
        <div key={position} data-shift={scrollShift} className={`absolute ${position}`}>
          <div className={`animate-drift rounded-full blur-3xl ${size} ${color}`} />
        </div>
      ))}
      <div className="bg-grid absolute inset-0 opacity-60" />
      <div className="bg-noise absolute inset-0 opacity-[0.07] mix-blend-overlay" />
    </div>
  );
}