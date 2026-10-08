"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";
import { cn } from "@/lib/css";
import { gsap, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/motion";

const PULL = 0.3; // how far the content follows the pointer (0 to 1)

type MagneticProps = {
  children: ReactNode;
  className?: string;
};

type Follow = { x: gsap.QuickToFunc; y: gsap.QuickToFunc };

/** Lets its content lean toward the pointer and spring back when it leaves. */
export default function Magnetic({ children, className }: MagneticProps) {
  const innerRef = useRef<HTMLDivElement>(null);
  const followRef = useRef<Follow | null>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      const options = { duration: 0.6, ease: "elastic.out(1, 0.4)" };
      followRef.current = {
        x: gsap.quickTo(innerRef.current, "x", options),
        y: gsap.quickTo(innerRef.current, "y", options),
      };
    },
    { scope: innerRef }
  );

  // Listeners sit on the still outer layer, so the moving inner layer can't confuse the maths
  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    followRef.current?.x((event.clientX - left - width / 2) * PULL);
    followRef.current?.y((event.clientY - top - height / 2) * PULL);
  };

  const handlePointerLeave = () => {
    followRef.current?.x(0);
    followRef.current?.y(0);
  };

  return (
    <div
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={cn("inline-block", className)}
    >
      <div ref={innerRef}>{children}</div>
    </div>
  );
}