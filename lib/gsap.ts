import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger, CustomEase);

CustomEase.create("ui-out", "0.23, 1, 0.32, 1");
CustomEase.create("ui-in-out", "0.77, 0, 0.175, 1");

export const EASE = {
  out: "ui-out",
  inOut: "ui-in-out",
} as const;

export const DURATION = {
  press: 0.16,
  fast: 0.2,
  base: 0.25,
  slow: 0.4,
  reveal: 0.5,
  focal: 0.7,
} as const;

export const MEDIA = {
  reduce: "(prefers-reduced-motion: reduce)",
  motion: "(prefers-reduced-motion: no-preference)",
  motionMobile: "(prefers-reduced-motion: no-preference) and (max-width: 767px)",
  motionDesktop: "(prefers-reduced-motion: no-preference) and (min-width: 768px)",
  pointerDesktop:
    "(prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine) and (min-width: 1024px)",
} as const;

export { gsap, ScrollTrigger, useGSAP };
