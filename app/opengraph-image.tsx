import { OG_IMAGE_CONTENT_TYPE, OG_IMAGE_SIZE, renderOgImage } from "@/lib/og";
import { SITE } from "@/lib/site";

export const alt = SITE.title;
export const size = OG_IMAGE_SIZE;
export const contentType = OG_IMAGE_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: "Portfolio",
    title: SITE.name,
    subtitle: "Computer Engineer · Web Apps · Admin Dashboards · VR Simulations",
  });
}
