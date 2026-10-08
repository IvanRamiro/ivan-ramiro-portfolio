import { PUBLIC_SITE_URL } from "@/lib/env";

/** Identity and SEO defaults used by metadata, the layout, and the Open Graph images. */
export const SITE = {
  name: "Ivan Ramiro",
  role: "Computer Engineer",
  title: "Ivan Ramiro | Computer Engineer & Developer",
  description:
    "Portfolio of Ivan Ramiro, a computer engineer building web apps, admin dashboards, and VR simulations. Available for freelance projects.",
  url: PUBLIC_SITE_URL,
} as const;

/** Attributes for links that leave the site. */
export const EXTERNAL_LINK_PROPS = { target: "_blank", rel: "noopener noreferrer" } as const;
