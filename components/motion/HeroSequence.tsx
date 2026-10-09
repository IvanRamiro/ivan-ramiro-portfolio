"use client";

import { useRef, type ReactNode } from "react";
import { DURATION, EASE, MEDIA, gsap, useGSAP } from "@/lib/gsap";

const HIDDEN_CLIP = "inset(100% 0 0 0)";
const VISIBLE_CLIP = "inset(0% 0 0 0)";

export default function HeroSequence({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;

      const select = gsap.utils.selector(root);
      const lines = select<HTMLElement>('[data-hero="line"]');
      const copy = select<HTMLElement>('[data-hero="copy"]');
      const visual = select<HTMLElement>('[data-hero="visual"]');
      const spec = select<HTMLElement>('[data-hero="spec"]');
      const everything = [...lines, ...copy, ...visual, ...spec];
      const matchMedia = gsap.matchMedia();

      matchMedia.add(MEDIA.reduce, () => {
        root.setAttribute("data-hero-played", "");
        gsap.fromTo(everything, { opacity: 0 }, { opacity: 1, duration: DURATION.fast });
      });

      matchMedia.add({ desktop: MEDIA.motionDesktop, mobile: MEDIA.motionMobile }, ({ conditions }) => {
        gsap.set(lines, { clipPath: HIDDEN_CLIP, y: 16, opacity: 1 });
        gsap.set(copy, { opacity: 0, y: 8 });
        gsap.set(visual, { opacity: 0, scale: 0.96 });
        gsap.set(spec, { opacity: 0, y: 6 });
        root.setAttribute("data-hero-played", "");

        const timeline = gsap.timeline({ defaults: { ease: EASE.out } });
        timeline
          .to(lines, { clipPath: VISIBLE_CLIP, y: 0, duration: 0.6, stagger: 0.08 }, 0)
          .to(visual, { opacity: 1, scale: 1, duration: 0.6 }, 0.15)
          .to(copy, { opacity: 1, y: 0, duration: DURATION.slow, stagger: 0.06 }, 0.3)
          .to(spec, { opacity: 1, y: 0, duration: DURATION.slow }, 0.45)
          .set(lines, { clearProps: "clipPath" });

        timeline.timeScale(conditions?.mobile ? 1.3 : 1);
      });
    },
    { scope: rootRef }
  );

  return (
    <div ref={rootRef} data-hero-sequence>
      {children}
    </div>
  );
}
