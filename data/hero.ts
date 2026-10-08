import type { IconType } from "react-icons";
import { FiGlobe, FiSmartphone } from "react-icons/fi";
import { VrHeadsetIcon } from "@/components/icons/VrHeadsetIcon";
import { COLORS } from "@/lib/theme";

/** Phrases cycled by the typewriter in the headline. */
export const heroRoles = [
  "Web Apps",
  "Mobile Apps",
  "IoT Systems",
  "Custom Platforms",
  "Admin Dashboards",
  "VR Experiences",
  "API Integrations",
];

export const heroIntro =
  "I turn ideas into fast, reliable software for businesses and teams, from first sketch to deployment.";

/** Values rendered as a code snippet on the front of the hero card. */
export const heroProfile = {
  stack: ["Next.js", "TypeScript", "PostgreSQL", "PHP", "Unity"],
  focus: "Web, Mobile & Game Development",
  openToWork: true,
} as const;

export type Platform = {
  label: string;
  caption: string;
  Icon: IconType;
  /** Tints the tile and the icon glow */
  color: string;
};

/** Shown on the back of the hero card. */
export const platforms: Platform[] = [
  { label: "Websites", caption: "Sites & dashboards", Icon: FiGlobe, color: COLORS.accent },
  { label: "Mobile", caption: "iOS & Android", Icon: FiSmartphone, color: COLORS.accentSecondary },
  { label: "VR", caption: "Unity simulations", Icon: VrHeadsetIcon, color: "#f472b6" },
];
