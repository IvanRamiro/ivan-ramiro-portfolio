"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Fragment, useEffect, useState, type ReactNode } from "react";
import { FiGlobe, FiSmartphone } from "react-icons/fi";

const AUTO_FLIP_MS = 6000;
const FLIP_DURATION_S = 0.7;
const LINE_DELAY_S = 0.12;

const profile = {
  role: "Computer Engineer",
  stack: ["Next.js", "TypeScript", "PostgreSQL", "PHP", "Unity"],
  focus: "Web, Mobile & VR",
  openToWork: true,
};

const WINDOW_DOTS = ["bg-red-500/80", "bg-yellow-500/80", "bg-green-500/80"];

type PlatformIcon = (props: { className?: string }) => ReactNode;

type Platform = {
  label: string;
  caption: string;
  Icon: PlatformIcon;
  color: string;
};

function VrHeadsetIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-3.5l-1.8-2.5a2 2 0 0 0-3.4 0L8.5 17H5a2 2 0 0 1-2-2z" />
      <circle cx="8" cy="12" r="1.5" />
      <circle cx="16" cy="12" r="1.5" />
    </svg>
  );
}

const platforms: Platform[] = [
  { label: "Websites", caption: "Sites & dashboards", Icon: FiGlobe, color: "#38bdf8" },
  { label: "Mobile", caption: "iOS & Android", Icon: FiSmartphone, color: "#a78bfa" },
  { label: "VR", caption: "Unity simulations", Icon: VrHeadsetIcon, color: "#f472b6" },
];

function Str({ children }: { children: string }) {
  return <span className="text-emerald-400">&quot;{children}&quot;</span>;
}

function WindowBar({ filename }: { filename: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-border px-4 py-3">
      {WINDOW_DOTS.map((color) => (
        <span key={color} className={`size-3 rounded-full ${color}`} />
      ))}
      <span className="ml-3 font-mono text-xs text-muted">{filename}</span>
    </div>
  );
}

type CodeLineProps = {
  index: number;
  indent?: boolean;
  children: ReactNode;
};

function CodeLine({ index, indent = false, children }: CodeLineProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * LINE_DELAY_S }}
      className={indent ? "pl-6" : undefined}
    >
      {children}
    </motion.div>
  );
}

type FaceProps = {
  isHidden: boolean;
  isBack?: boolean;
  children: ReactNode;
};

function Face({ isHidden, isBack = false, children }: FaceProps) {
  return (
    <div
      aria-hidden={isHidden}
      style={{
        gridArea: "1 / 1",
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
        transform: isBack ? "rotateY(180deg)" : undefined,
      }}
      className="flex flex-col rounded-xl border border-border bg-card shadow-2xl shadow-accent/10"
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
          <span className="text-accent-2">const</span>{" "}
          <span className="text-accent">ivan</span> {"= {"}
        </CodeLine>
        <CodeLine index={1} indent>
          role: <Str>{profile.role}</Str>,
        </CodeLine>
        <CodeLine index={2} indent>
          stack: [
          {profile.stack.map((tech, index) => (
            <Fragment key={tech}>
              {index > 0 && ", "}
              <Str>{tech}</Str>
            </Fragment>
          ))}
          ],
        </CodeLine>
        <CodeLine index={3} indent>
          focus: <Str>{profile.focus}</Str>,
        </CodeLine>
        <CodeLine index={4} indent>
          openToWork:{" "}
          <span className="text-accent-2">{String(profile.openToWork)}</span>,
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
              style={{ borderColor: `${color}40`, backgroundColor: `${color}14` }}
              className="flex flex-col items-center rounded-lg border px-2 py-4 text-center"
            >
              <span
                style={{ color, filter: `drop-shadow(0 0 8px ${color}99)` }}
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

export default function HeroCard() {
  const prefersReducedMotion = useReducedMotion();
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
      <div style={{ perspective: 1200 }}>
        <motion.div
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{
            duration: prefersReducedMotion ? 0 : FLIP_DURATION_S,
            ease: "easeInOut",
          }}
          style={{ transformStyle: "preserve-3d" }}
          className="grid"
        >
          <Face isHidden={isFlipped}>
            <CodeFace />
          </Face>
          <Face isHidden={!isFlipped} isBack>
            <PlatformsFace />
          </Face>
        </motion.div>
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