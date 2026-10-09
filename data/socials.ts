import type { IconType } from "react-icons";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export type SocialLink = {
  label: string;
  handle: string;
  href: string;
  Icon: IconType;
  /** External links open in a new tab; the mail link does not */
  external: boolean;
};

export const socials: SocialLink[] = [
  {
    label: "GitHub",
    handle: "IvanRamiro",
    href: "https://github.com/IvanRamiro",
    Icon: FiGithub,
    external: true,
  },
  {
    label: "LinkedIn",
    handle: "john-ivan-ramiro",
    href: "https://linkedin.com/in/john-ivan-ramiro-782181312",
    Icon: FiLinkedin,
    external: true,
  },
  {
    label: "Email",
    handle: "ivanramiro0127@gmail.com",
    href: "mailto:ivanramiro0127@gmail.com",
    Icon: FiMail,
    external: false,
  },
];
