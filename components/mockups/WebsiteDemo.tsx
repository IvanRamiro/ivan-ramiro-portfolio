import BrowserFrame from "./BrowserFrame";
import Skeleton from "./Skeleton";

const CUBE_PX = 72;

const FACE_TRANSFORMS = [
  "rotateY(0deg)",
  "rotateY(90deg)",
  "rotateY(180deg)",
  "rotateY(-90deg)",
  "rotateX(90deg)",
  "rotateX(-90deg)",
].map((rotation) => `${rotation} translateZ(${CUBE_PX / 2}px)`);

function Cube() {
  return (
    <div style={{ perspective: 600 }} className="relative">
      <div aria-hidden="true" className="absolute -inset-6 rounded-full bg-accent/30 blur-2xl" />
      <div
        className="animate-spin-3d relative"
        style={{
          width: CUBE_PX,
          height: CUBE_PX,
          transformStyle: "preserve-3d",
          transform: "rotateX(-24deg) rotateY(35deg)", // resting pose when motion is reduced
        }}
      >
        {FACE_TRANSFORMS.map((transform) => (
          <span
            key={transform}
            style={{ transform }}
            className="absolute inset-0 border border-white/40 bg-linear-to-br from-accent/50 to-accent-2/50"
          />
        ))}
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <div className="flex flex-1 items-center justify-between gap-4 bg-linear-to-br from-background to-card px-6">
      <div className="space-y-2">
        <Skeleton tone="accent" className="h-1.5 w-10" />
        <Skeleton tone="strong" className="h-3 w-28" />
        <Skeleton tone="strong" className="h-3 w-20" />
        <Skeleton className="h-1.5 w-24" />
        <Skeleton tone="accent" className="mt-3 h-5 w-16" />
      </div>
      <Cube />
    </div>
  );
}

function CardsSection() {
  return (
    <div className="flex flex-1 flex-col justify-center gap-4 px-6">
      <Skeleton tone="strong" className="h-2.5 w-24" />
      <div className="grid grid-cols-3 gap-3">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            style={{ animationDelay: `${index * -1.2}s` }}
            className="animate-float space-y-2 rounded-lg border border-white/10 bg-white/5 p-3"
          >
            <span className="block size-6 rounded-md bg-linear-to-br from-accent to-accent-2" />
            <Skeleton className="h-1.5 w-full" />
            <Skeleton className="h-1.5 w-2/3" />
          </div>
        ))}
      </div>
    </div>
  );
}

function CtaSection() {
  return (
    <div className="flex flex-1 items-center justify-center px-6">
      <div className="flex w-full flex-col items-center gap-3 rounded-xl bg-linear-to-r from-accent/30 to-accent-2/30 py-6">
        <Skeleton tone="strong" className="h-3 w-32" />
        <Skeleton className="h-1.5 w-20" />
        <Skeleton tone="accent" className="h-5 w-16" />
      </div>
    </div>
  );
}

/** A sample site that scrolls by itself: a 3D hero, a card grid, and a call to action */
export default function WebsiteDemo() {
  return (
    <BrowserFrame address="lumen.studio" className="w-full max-w-md">
      <div className="flex aspect-[16/10] flex-col">
        {/* Fixed navigation bar, like a real site */}
        <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-4 py-2">
          <Skeleton tone="accent" className="h-2 w-8" />
          <div className="flex gap-2">
            <Skeleton className="h-1.5 w-6" />
            <Skeleton className="h-1.5 w-6" />
            <Skeleton className="h-1.5 w-6" />
          </div>
        </div>

        {/* Three stacked pages that slide past the viewport */}
        <div className="relative flex-1 overflow-hidden">
          <div className="animate-page-scroll absolute inset-x-0 top-0 flex h-[300%] flex-col">
            <HeroSection />
            <CardsSection />
            <CtaSection />
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}