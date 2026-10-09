export type NavLink = {
  href: string;
  label: string;
  sectionId: string;
};

export const navLinks: NavLink[] = [
  { href: "/#projects", label: "Work", sectionId: "projects" },
  { href: "/#about", label: "About", sectionId: "about" },
  { href: "/#services", label: "Services", sectionId: "services" },
  { href: "/#contact", label: "Contact", sectionId: "contact" },
];

export const hireMeLink = { href: "/#contact", label: "Hire me" } as const;

export const navSectionIds = navLinks.map((link) => link.sectionId);
