import type { IconType } from "react-icons";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { COLORS } from "@/lib/theme";

export type SocialLink = {
  label: string;
  handle: string;
  href: string;
  Icon: IconType;
  /** Brand colour shown on hover */
  color: string;
  /** External links open in a new tab; the mail link does not */
  external: boolean;
};

export const socials: SocialLink[] = [
  {
    label: "GitHub",
    handle: "IvanRamiro",
    href: "https://github.com/IvanRamiro",
    Icon: FiGithub,
    color: COLORS.foreground,
    external: true,
  },
  {
    label: "LinkedIn",
    handle: "john-ivan-ramiro",
    href: "https://linkedin.com/in/john-ivan-ramiro-782181312",
    Icon: FiLinkedin,
    color: "#70b5f9",
    external: true,
  },
  {
    label: "Email",
    handle: "ivanramiro0127@gmail.com",
    href: "mailto:ivanramiro0127@gmail.com",
    Icon: FiMail,
    color: COLORS.accent,
    external: false,
  },
];
