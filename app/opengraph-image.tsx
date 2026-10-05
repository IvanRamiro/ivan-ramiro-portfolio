import { renderOgImage } from "@/lib/og";
import { SITE } from "@/lib/site";

export const alt = "Ivan Ramiro | Computer Engineer & Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({
    eyebrow: "Portfolio",
    title: SITE.name,
    subtitle: "Computer Engineer · Web Apps · Admin Dashboards · VR Simulations",
  });
}