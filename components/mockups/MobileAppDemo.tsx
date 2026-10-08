import type { IconType } from "react-icons";
import {
  FiBarChart2,
  FiCheckCircle,
  FiHome,
  FiPlus,
  FiTrendingUp,
  FiUser,
} from "react-icons/fi";
import PhoneFrame from "./PhoneFrame";
import Skeleton from "./Skeleton";

const WEEK_BARS = [45, 70, 55, 90, 65, 80, 100];
const TAB_ICONS: IconType[] = [FiHome, FiBarChart2, FiPlus, FiUser];

type ChipProps = {
  Icon: IconType;
  label: string;
  iconClass: string;
  className: string;
  delay: string;
};

function Chip({ Icon, label, iconClass, className, delay }: ChipProps) {
  return (
    <div
      style={{ animationDelay: delay }}
      className={`animate-float absolute z-10 flex items-center gap-2 whitespace-nowrap rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-xs shadow-lg backdrop-blur-md ${className}`}
    >
      <Icon className={iconClass} />
      {label}
    </div>
  );
}

function ProgressRing() {
  return (
    <svg viewBox="0 0 40 40" className="size-14 shrink-0 -rotate-90">
      <circle cx="20" cy="20" r="16" fill="none" strokeWidth="4" className="stroke-white/10" />
      <circle
        cx="20"
        cy="20"
        r="16"
        fill="none"
        strokeWidth="4"
        strokeLinecap="round"
        pathLength={1}
        strokeDasharray={1}
        strokeDashoffset={0.28} // the resting value (72%) when motion is reduced
        className="animate-ring stroke-accent"
      />
    </svg>
  );
}

function AppScreen() {
  return (
    <div className="flex h-full flex-col gap-2 px-3 pt-8">
      <div className="flex items-center justify-between">
        <div className="space-y-1.5">
          <Skeleton className="h-1.5 w-12" />
          <Skeleton tone="strong" className="h-2.5 w-16" />
        </div>
        <span className="size-6 rounded-full bg-linear-to-br from-accent to-accent-2" />
      </div>

      <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3">
        <ProgressRing />
        <div>
          <p className="text-[10px] text-muted">Daily goal</p>
          <p className="text-base font-bold">72%</p>
        </div>
      </div>

      <div className="flex h-16 items-end gap-1.5 rounded-xl bg-white/5 p-3">
        {WEEK_BARS.map((height, index) => (
          <span
            key={index}
            style={{ height: `${height}%`, animationDelay: `${index * 0.25}s` }}
            className="animate-bars flex-1 origin-bottom rounded-sm bg-linear-to-t from-accent to-accent-2"
          />
        ))}
      </div>

      {[0, 1].map((row) => (
        <div key={row} className="flex items-center gap-2 rounded-lg bg-white/5 p-2">
          <FiCheckCircle className="shrink-0 text-emerald-400" />
          <Skeleton className="h-1.5 w-full" />
        </div>
      ))}

      <div className="absolute inset-x-0 bottom-0 flex justify-around border-t border-white/10 bg-card/90 py-2 text-sm text-muted">
        {TAB_ICONS.map((Icon, index) => (
          <Icon key={index} className={index === 0 ? "text-accent" : undefined} />
        ))}
      </div>
    </div>
  );
}

/** A phone running a sample app, surrounded by floating notifications */
export default function MobileAppDemo() {
  return (
    <div className="relative">
      <Chip
        Icon={FiCheckCircle}
        label="Task completed"
        iconClass="text-emerald-400"
        className="-left-20 top-16"
        delay="0s"
      />
      <Chip
        Icon={FiTrendingUp}
        label="+12% this week"
        iconClass="text-accent"
        className="-right-20 bottom-20"
        delay="-2s"
      />
      <PhoneFrame className="animate-float w-40">
        <AppScreen />
      </PhoneFrame>
    </div>
  );
}