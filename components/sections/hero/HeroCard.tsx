"use client";

import { Fragment, useEffect, useState, type ReactNode } from "react";
import WindowDots from "@/components/ui/WindowDots";
import { heroProfile, platforms } from "@/data/hero";
import { cn } from "@/lib/css";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { SITE } from "@/lib/site";
import { withAlpha } from "@/lib/theme";

const AUTO_FLIP_MS = 6000;
const LINE_DELAY_S = 0.12;

function StringLiteral({ children }: { children: string }) {
  return <span className="text-emerald-400">&quot;{children}&quot;</span>;
}

function WindowBar({ filename }: { filename: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-border px-4 py-3">
      <WindowDots />
      <span className="ml-3 font-mono text-xs text-muted">{filename}</span>
    </div>
  );
}

type CodeLineProps = {
  /** Position in the snippet; each line slides in slightly after the one above */
  index: number;
  indent?: boolean;
  children: ReactNode;
};

function CodeLine({ index, indent = false, children }: CodeLineProps) {
  return (
    <div
      style={{ animationDelay: `${index * LINE_DELAY_S}s` }}
      className={cn("animate-slide-in", indent && "pl-6")}
    >
      {children}
    </div>
  );
}

type FaceProps = {
  isHidden: boolean;
  isBack?: boolean;
  children: ReactNode;
};

/** One side of the card. Both faces share a grid cell; the back starts rotated away. */
function Face({ isHidden, isBack = false, children }: FaceProps) {
  return (
    <div
      aria-hidden={isHidden}
      className={cn(
        "flex flex-col rounded-xl border border-border bg-card shadow-2xl shadow-accent/10 backface-hidden [grid-area:1/1]",
        isBack && "rotate-y-180"
      )}
    >
      {children}
    </div>
  );
}

function CodeFace() {
  return (
    <>
      <WindowBar filename="ivan.ts" />
      <div className="p-5 font-mono text-sm leading-7">
        <CodeLine index={0}>
          <span className="text-accent-2">const</span> <span className="text-accent">ivan</span>{" "}
          {"= {"}
        </CodeLine>
        <CodeLine index={1} indent>
          role: <StringLiteral>{SITE.role}</StringLiteral>,
        </CodeLine>
        <CodeLine index={2} indent>
          stack: [
          {heroProfile.stack.map((tech, index) => (
            <Fragment key={tech}>
              {index > 0 && ", "}
              <StringLiteral>{tech}</StringLiteral>
            </Fragment>
          ))}
          ],
        </CodeLine>
        <CodeLine index={3} indent>
          focus: <StringLiteral>{heroProfile.focus}</StringLiteral>,
        </CodeLine>
        <CodeLine index={4} indent>
          openToWork: <span className="text-accent-2">{String(heroProfile.openToWork)}</span>,
        </CodeLine>
        <CodeLine index={5}>{"};"}</CodeLine>
      </div>
    </>
  );
}

function PlatformsFace() {
  return (
    <>
      <WindowBar filename="platforms.ts" />
      <div className="flex flex-1 flex-col justify-center gap-5 p-5">
        <p className="font-mono text-sm text-muted">{"// what I build for"}</p>
        <div className="grid auto-cols-fr grid-flow-col gap-3">
          {platforms.map(({ label, caption, Icon, color }) => (
            <div
              key={label}
              style={{ borderColor: withAlpha(color, 0.25), backgroundColor: withAlpha(color, 0.08) }}
              className="flex flex-col items-center rounded-lg border px-2 py-4 text-center"
            >
              <span
                style={{ color, filter: `drop-shadow(0 0 8px ${withAlpha(color, 0.6)})` }}
                className="text-4xl"
              >
                <Icon />
              </span>
              <p className="mt-3 text-sm font-semibold">{label}</p>
              <p className="mt-1 text-xs text-muted">{caption}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/**
 * A 3D card that flips between a code snippet and the platforms I build for.
 * It flips on its own until the visitor flips it by hand.
 */
export default function HeroCard() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAutoFlipping, setIsAutoFlipping] = useState(true);

  useEffect(() => {
    if (!isAutoFlipping || prefersReducedMotion) return;

    const timer = setInterval(() => setIsFlipped((flipped) => !flipped), AUTO_FLIP_MS);
    return () => clearInterval(timer);
  }, [isAutoFlipping, prefersReducedMotion]);

  const handleFlip = () => {
    setIsAutoFlipping(false);
    setIsFlipped((flipped) => !flipped);
  };

  return (
    <div>
      <div className="perspective-[1200px]">
        <div
          className={cn(
            // The native ease-in-out curve, not Tailwind's; matches the original flip exactly
            "grid transform-3d transition-transform duration-700 ease-[ease-in-out] motion-reduce:transition-none",
            isFlipped && "rotate-y-180"
          )}
        >
          <Face isHidden={isFlipped}>
            <CodeFace />
          </Face>
          <Face isHidden={!isFlipped} isBack>
            <PlatformsFace />
          </Face>
        </div>
      </div>

      <button
        type="button"
        onClick={handleFlip}
        className="mt-4 ml-auto block font-mono text-xs text-muted transition hover:text-accent"
      >
        {isFlipped ? "← back to code" : "what I build →"}
      </button>
    </div>
  );
}
