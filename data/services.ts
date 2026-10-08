import type { ComponentType } from "react";
import MobileAppDemo from "@/components/sections/services/mockups/MobileAppDemo";
import PlatformDemo from "@/components/sections/services/mockups/PlatformDemo";
import WebsiteDemo from "@/components/sections/services/mockups/WebsiteDemo";
import { COLORS } from "@/lib/theme";

export type Service = {
  title: string;
  description: string;
  features: string[];
  /** Tints the glow, the numbering, and the check marks */
  color: string;
  /** Animated mock-up shown beside the copy */
  Demo: ComponentType;
};

export const services: Service[] = [
  {
    title: "Website development",
    description:
      "Fast, mobile-friendly websites for businesses, organizations, and personal brands.",
    features: [
      "Responsive, fast-loading layouts",
      "Scroll animations and 3D interactions",
      "SEO-ready and easy to update",
    ],
    color: COLORS.accent,
    Demo: WebsiteDemo,
  },
  {
    title: "Mobile app development",
    description: "Cross-platform apps for Android and iOS, from prototype to release.",
    features: [
      "Designed for iOS and Android",
      "Smooth gestures and transitions",
      "Connected to your data and accounts",
    ],
    color: COLORS.accentSecondary,
    Demo: MobileAppDemo,
  },
  {
    title: "Custom platform development",
    description: "Dashboards, booking systems, and inventory tools tailored to how you work.",
    features: [
      "Admin dashboards, booking, and inventory tools",
      "One system that works on desktop and phone",
      "Built around how your team works",
    ],
    color: "#34d399",
    Demo: PlatformDemo,
  },
];
