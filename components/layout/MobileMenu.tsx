"use client";

import Link from "next/link";
import { useEffect, useRef, type RefObject } from "react";
import { buttonClasses } from "@/components/ui/Button";
import { CONTAINER_CLASS } from "@/components/ui/Section";
import { hireMeLink, navLinks } from "@/data/navigation";
import { cn, cssVar } from "@/lib/css";

export const MOBILE_MENU_ID = "mobile-menu";

type MobileMenuProps = {
  onNavigate: () => void;
  returnFocusTo: RefObject<HTMLButtonElement | null>;
};

export default function MobileMenu({ onNavigate, returnFocusTo }: MobileMenuProps) {
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    const pageRegions = Array.from(document.querySelectorAll("main, footer"));
    root.style.overflow = "hidden";
    pageRegions.forEach((region) => region.setAttribute("inert", ""));
    firstLinkRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onNavigate();
    };
    window.addEventListener("keydown", handleKeyDown);

    const toggle = returnFocusTo.current;
    return () => {
      root.style.overflow = previousOverflow;
      pageRegions.forEach((region) => region.removeAttribute("inert"));
      window.removeEventListener("keydown", handleKeyDown);
      toggle?.focus();
    };
  }, [onNavigate, returnFocusTo]);

  return (
    <div
      id={MOBILE_MENU_ID}
      className={cn(
        CONTAINER_CLASS,
        "menu-panel fixed inset-x-0 top-16 bottom-0 flex flex-col justify-between bg-ground pt-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] md:hidden"
      )}
    >
      <ul className="flex flex-col">
        {navLinks.map(({ href, label }, index) => (
          <li
            key={href}
            data-menu-item
            style={cssVar("--menu-index", String(index))}
            className="border-b border-line"
          >
            <Link
              ref={index === 0 ? firstLinkRef : undefined}
              href={href}
              onClick={onNavigate}
              className="flex items-center justify-between py-5 font-display text-3xl font-semibold tracking-tight text-ink transition-colors duration-(--dur-fast) hover:text-copper"
            >
              {label}
              <span aria-hidden="true" className="font-mono text-label text-ink-faint">
                0{index + 1}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href={hireMeLink.href}
        onClick={onNavigate}
        data-menu-item
        style={cssVar("--menu-index", String(navLinks.length))}
        className={buttonClasses("primary", "w-full", "lg")}
      >
        {hireMeLink.label}
      </Link>
    </div>
  );
}
