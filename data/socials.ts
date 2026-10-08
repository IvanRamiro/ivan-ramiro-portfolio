import type { AnchorHTMLAttributes } from "react";
import type { IconType } from "react-icons";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

type LinkProps = Pick<AnchorHTMLAttributes<HTMLAnchorElement>, "target" | "rel">;

export type SocialLink = {
  label: string;
  handle: string;
  href: string;
  Icon: IconType;
  color: string; // brand color shown on hover
  linkProps: LinkProps;
};

const EXTERNAL: LinkProps = { target: "_blank", rel: "noopener noreferrer" };

export const socials: SocialLink[] = [
  {
    label: "GitHub",
    handle: "IvanRamiro",
    href: "https://github.com/IvanRamiro",
    Icon: FiGithub,
    color: "#e6e9f0",
    linkProps: EXTERNAL,
  },
  {
    label: "LinkedIn",
    handle: "john-ivan-ramiro",
    href: "https://linkedin.com/in/john-ivan-ramiro-782181312",
    Icon: FiLinkedin,
    color: "#70b5f9",
    linkProps: EXTERNAL,
  },
  {
    label: "Email",
    handle: "ivanramiro0127@gmail.com",
    href: "mailto:ivanramiro0127@gmail.com",
    Icon: FiMail,
    color: "#38bdf8",
    linkProps: {},
  },
];