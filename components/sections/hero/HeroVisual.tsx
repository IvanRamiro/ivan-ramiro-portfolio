import { preload } from "react-dom";
import PointerParallax from "@/components/motion/PointerParallax";
import LoopVideo from "@/components/ui/LoopVideo";
import { MEDIA_FRAME_CLASS } from "@/components/ui/Media";
import { heroLoop } from "@/data/hero";
import { cn } from "@/lib/css";

export default function HeroVisual() {
  preload(heroLoop.poster, { as: "image", fetchPriority: "high" });

  return (
    <div data-hero="visual" className="md:mx-auto md:max-w-[60%] lg:max-w-none">
      <PointerParallax>
        <div className={cn(MEDIA_FRAME_CLASS, "aspect-[4/3]")}>
          <LoopVideo asset={heroLoop} />
        </div>
      </PointerParallax>
    </div>
  );
}
