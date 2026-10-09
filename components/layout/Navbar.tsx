"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { buttonClasses } from "@/components/ui/Button";
import { CONTAINER_CLASS } from "@/components/ui/Section";
import { hireMeLink, navLinks, navSectionIds } from "@/data/navigation";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/css";
import { SITE } from "@/lib/site";
import MobileMenu, { MOBILE_MENU_ID } from "./MobileMenu";

type Indicator = { left: number; width: number };

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d={open ? "M6 6l12 12M18 6L6 18" : "M4 8h16M4 16h16"} />
    </svg>
  );
}

function Brand({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className="font-mono text-label uppercase tracking-[0.12em] text-ink transition-colors duration-(--dur-fast) hover:text-copper"
    >
      {SITE.name}
    </Link>
  );
}

function DesktopNav({ activeSectionId }: { activeSectionId: string | null }) {
  const listRef = useRef<HTMLUListElement>(null);
  const [indicator, setIndicator] = useState<Indicator | null>(null);

  const measure = useCallback(() => {
    const list = listRef.current;
    const active = list?.querySelector<HTMLAnchorElement>('a[aria-current="true"]');
    if (!list || !active) {
      setIndicator(null);
      return;
    }
    const listBox = list.getBoundingClientRect();
    const activeBox = active.getBoundingClientRect();
    setIndicator({ left: activeBox.left - listBox.left, width: activeBox.width });
  }, []);

  useEffect(() => {
    measure();
    const list = listRef.current;
    if (!list) return;

    const observer = new ResizeObserver(measure);
    observer.observe(list);
    document.fonts?.ready.then(measure);
    return () => observer.disconnect();
  }, [measure, activeSectionId]);

  return (
    <div className="relative hidden md:block">
      <ul ref={listRef} className="flex items-center gap-7 text-sm">
        {navLinks.map(({ href, label, sectionId }) => (
          <li key={href}>
            <Link
              href={href}
              aria-current={activeSectionId === sectionId ? "true" : undefined}
              className="block py-1 text-ink-muted transition-colors duration-(--dur-fast) hover:text-ink aria-[current=true]:text-ink"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <span
        aria-hidden="true"
        style={
          indicator
            ? { transform: `translateX(${indicator.left}px) scaleX(${indicator.width})` }
            : undefined
        }
        className={cn(
          "absolute -bottom-[18px] left-0 h-px w-px origin-left bg-copper transition-[transform,opacity] duration-(--dur-base) ease-in-out motion-reduce:transition-none",
          indicator ? "opacity-100" : "opacity-0"
        )}
      />
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const activeSectionId = useActiveSection(navSectionIds, pathname === "/");

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ground/90">
      <nav
        aria-label="Main"
        className={cn(CONTAINER_CLASS, "flex h-16 items-center justify-between")}
      >
        <Brand onClick={closeMenu} />

        <DesktopNav activeSectionId={activeSectionId} />

        <div className="flex items-center gap-2">
          <Link href={hireMeLink.href} className={buttonClasses("secondary", "max-md:hidden")}>
            {hireMeLink.label}
          </Link>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
            className="-mr-2 flex size-11 items-center justify-center rounded-full text-ink transition-colors duration-(--dur-fast) hover:text-copper md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls={MOBILE_MENU_ID}
          >
            <MenuIcon open={isMenuOpen} />
          </button>
        </div>
      </nav>

      {isMenuOpen && <MobileMenu onNavigate={closeMenu} returnFocusTo={toggleRef} />}
    </header>
  );
}
