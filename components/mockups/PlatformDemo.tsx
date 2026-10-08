import Parallax from "../Parallax";
import BrowserFrame from "./BrowserFrame";
import PhoneFrame from "./PhoneFrame";
import Skeleton from "./Skeleton";
import Sparkline from "./Sparkline";

const STAT_COUNT = 3;

function DesktopDashboard() {
  return (
    <div className="flex aspect-[16/10] overflow-hidden">
      <div className="flex w-[18%] flex-col gap-2.5 border-r border-white/10 p-2.5">
        <Skeleton tone="accent" className="h-3 w-full" />
        {[0, 1, 2, 3].map((item) => (
          <Skeleton key={item} className="h-2 w-4/5" />
        ))}
      </div>

      <div className="flex-1 space-y-2.5 p-3">
        <div className="grid grid-cols-3 gap-2">
          {Array.from({ length: STAT_COUNT }, (_, index) => (
            <div key={index} className="space-y-1.5 rounded-md border border-white/10 bg-white/5 p-2">
              <Skeleton className="h-1.5 w-8" />
              <Skeleton tone="strong" className="h-2.5 w-10" />
            </div>
          ))}
        </div>

        <div className="rounded-md border border-white/10 bg-white/5 p-2">
          <Sparkline className="w-full" />
        </div>

        {[0, 1].map((row) => (
          <div key={row} className="flex items-center gap-2">
            <Skeleton className="size-3" />
            <Skeleton className="h-1.5 flex-1" />
            <Skeleton tone="accent" className="h-1.5 w-6" />
          </div>
        ))}
      </div>
    </div>
  );
}

function MobileDashboard() {
  return (
    <div className="space-y-2 px-2.5 pt-7">
      <Skeleton tone="strong" className="h-2 w-14" />

      <div className="grid grid-cols-2 gap-1.5">
        {[0, 1].map((stat) => (
          <div key={stat} className="space-y-1.5 rounded-md bg-white/5 p-2">
            <Skeleton className="h-1 w-6" />
            <Skeleton tone="strong" className="h-2 w-8" />
          </div>
        ))}
      </div>

      <div className="rounded-md bg-white/5 p-1.5">
        <Sparkline className="w-full" />
      </div>

      {[0, 1].map((row) => (
        <div key={row} className="flex items-center gap-1.5 rounded-md bg-white/5 p-2">
          <Skeleton className="size-2.5" />
          <Skeleton className="h-1 flex-1" />
        </div>
      ))}
    </div>
  );
}

/** One system shown on a desktop browser and a phone side by side */
export default function PlatformDemo() {
  return (
    <div className="relative w-full max-w-md">
      <BrowserFrame address="dashboard.example.com" className="w-[88%]">
        <DesktopDashboard />
      </BrowserFrame>

      {/* The phone drifts at a different speed than the desktop as you scroll, which adds depth */}
      <Parallax distance={26} className="absolute -bottom-8 right-0 w-[7.5rem]">
        <PhoneFrame className="animate-float">
          <MobileDashboard />
        </PhoneFrame>
      </Parallax>
    </div>
  );
}