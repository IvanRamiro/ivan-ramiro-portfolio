import { useEffect, useState } from "react";

const VIEWPORT_BAND = "-35% 0px -55% 0px";

export function useActiveSection(sectionIds: string[], enabled: boolean): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) return;

    const visible = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.add(entry.target.id);
          } else {
            visible.delete(entry.target.id);
          }
        }
        const current = sectionIds.find((id) => visible.has(id)) ?? null;
        setActiveId(current);
      },
      { rootMargin: VIEWPORT_BAND }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [sectionIds, enabled]);

  return enabled ? activeId : null;
}
