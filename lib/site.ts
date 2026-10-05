export const SITE = {
  name: "Ivan Ramiro",
  role: "Computer Engineer & Developer",
  title: "Ivan Ramiro | Computer Engineer & Developer",
  description:
    "Portfolio of Ivan Ramiro, a computer engineer building web apps, admin dashboards, and VR simulations. Available for freelance projects.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, ""),
} as const;