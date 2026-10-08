export type NavLink = {
  href: string;
  label: string;
};

/** Section links shown in the header. Hrefs start with "/" so they work from project pages too. */
export const navLinks: NavLink[] = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#services", label: "Services" },
  { href: "/#contact", label: "Contact" },
];

export const hireMeLink: NavLink = { href: "/#contact", label: "Hire me" };
