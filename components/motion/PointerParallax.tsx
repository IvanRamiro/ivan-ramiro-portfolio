"use client";

import { useRef, type ReactNode } from "react";
import { EASE, MEDIA, gsap, useGSAP } from "@/lib/gsap";

const TRAVEL_PX = 10;
const TILT_DEG = 2;

type PointerParallaxProps = {
  children: ReactNode;
  className?: string;
};

export default function PointerParallax({ children, className }: PointerParallaxProps) {
  const targetRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const target = targetRef.current;
      if (!target) return;

      const region = target.closest("section") ?? target;
      const matchMedia = gsap.matchMedia();

      matchMedia.add(MEDIA.pointerDesktop, () => {
        const options = { duration: 0.8, ease: EASE.out };
        const moveX = gsap.quickTo(target, "x", options);
        const moveY = gsap.quickTo(target, "y", options);
        const tilt = gsap.quickTo(target, "rotation", options);

        const follow = (event: PointerEvent) => {
          const offsetX = event.clientX / window.innerWidth - 0.5;
          const offsetY = event.clientY / window.innerHeight - 0.5;
          moveX(offsetX * TRAVEL_PX * 2);
          moveY(offsetY * TRAVEL_PX * 2);
          tilt(offsetX * TILT_DEG * 2);
        };

        const rest = () => {
          moveX(0);
          moveY(0);
          tilt(0);
        };

        region.addEventListener("pointermove", follow);
        region.addEventListener("pointerleave", rest);

        return () => {
          region.removeEventListener("pointermove", follow);
          region.removeEventListener("pointerleave", rest);
        };
      });
    },
    { scope: targetRef }
  );

  return (
    <div ref={targetRef} className={className}>
      {children}
    </div>
  );
}
