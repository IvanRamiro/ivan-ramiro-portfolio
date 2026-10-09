import type { LoopVideoAsset } from "@/components/ui/LoopVideo";
import type { SpecRow } from "@/components/ui/SpecTable";

export const heroEyebrow = "Computer engineer · Web · Mobile · VR";

export const heroHeadline = {
  lead: "Software built like hardware.",
  support: "Web apps, mobile apps and VR simulations, engineered to ship.",
} as const;

export const heroIntro =
  "I turn ideas into fast, reliable software for businesses and teams, from first sketch to deployment.";

export const heroLoop: LoopVideoAsset = {
  webm: "/art/hero-loop.webm",
  mp4: "/art/hero-loop.mp4",
  poster: "/art/hero-poster.jpg",
  width: 960,
  height: 720,
};

export const specSheet: SpecRow[] = [
  { label: "Role", value: "Computer Engineering graduate" },
  { label: "Platforms", value: "Web · Mobile · VR" },
  { label: "Focus", value: "Software, backend, networking & systems" },
  { label: "Status", value: "Open to freelance & full-time" },
];
