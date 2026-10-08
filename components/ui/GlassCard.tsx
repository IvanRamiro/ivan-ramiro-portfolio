"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";
import { cn } from "@/lib/css";
import { gsap, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";

const MAX_TILT_DEG = 6;
const PERSPECTIVE_PX = 900;

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  /** Tilt toward the pointer in 3D; off by default because it costs a GSAP tween per card */
  tilt?: boolean;
};

type TiltTweens = { rotateX: gsap.QuickToFunc; rotateY: gsap.QuickToFunc };

/**
 * Frosted panel with a top-edge highlight and a glow that follows the cursor.
 * It carries the `group` class, so children can use `group-hover:` for their own hover effects.
 */
export default function GlassCard({ children, className, tilt = false }: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const tiltRef = useRef<TiltTweens | null>(null);
  const boundsRef = useRef<DOMRect | null>(null);

  useGSAP(
    () => {
      if (!tilt || prefersReducedMotion()) return;

      gsap.set(cardRef.current, { transformPerspective: PERSPECTIVE_PX });
      const options = { duration: 0.5, ease: "power3.out" };
      tiltRef.current = {
        rotateX: gsap.quickTo(cardRef.current, "rotationX", options),
        rotateY: gsap.quickTo(cardRef.current, "rotationY", options),
      };
    },
    { scope: cardRef, dependencies: [tilt] }
  );

  // Measured once on enter: measuring while tilted would make the card chase its own edges
  const handlePointerEnter = () => {
    boundsRef.current = cardRef.current?.getBoundingClientRect() ?? null;
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    const bounds = boundsRef.current;
    if (!card || !bounds) return;

    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;

    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);

    tiltRef.current?.rotateX((0.5 - y / bounds.height) * 2 * MAX_TILT_DEG);
    tiltRef.current?.rotateY((x / bounds.width - 0.5) * 2 * MAX_TILT_DEG);
  };

  const handlePointerLeave = () => {
    tiltRef.current?.rotateX(0);
    tiltRef.current?.rotateY(0);
  };

  return (
    <div
      ref={cardRef}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_8px_32px_rgb(0_0_0/0.35)] backdrop-blur-xl transition-colors duration-300 hover:border-accent/40",
        className
      )}
    >
      {/* Top edge highlight, the "lit glass" look */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent"
      />
      {/* Glow that follows the cursor (see `.spotlight` in globals.css) */}
      <span
        aria-hidden="true"
        className="spotlight pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
}
