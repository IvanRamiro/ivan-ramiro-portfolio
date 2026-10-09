import type { MediaAsset } from "@/components/ui/Media";

export type Service = {
  title: string;
  description: string;
  features: string[];
  art?: MediaAsset;
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
  },
  {
    title: "Mobile app development",
    description: "Cross-platform apps for Android and iOS, from prototype to release.",
    features: [
      "Designed for iOS and Android",
      "Smooth gestures and transitions",
      "Connected to your data and accounts",
    ],
  },
  {
    title: "Custom platform development",
    description: "Dashboards, booking systems, and inventory tools tailored to how you work.",
    features: [
      "Admin dashboards, booking, and inventory tools",
      "One system that works on desktop and phone",
      "Built around how your team works",
    ],
  },
];
