"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/css";
import { MEDIA } from "@/lib/gsap";

export type LoopVideoAsset = {
  webm: string;
  mp4: string;
  poster: string;
  width: number;
  height: number;
};

type LoopVideoProps = {
  asset: LoopVideoAsset;
  className?: string;
};

function connectionPrefersSavingData(): boolean {
  const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
  return connection?.saveData === true;
}

export default function LoopVideo({ asset, className }: LoopVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reduceMotion = window.matchMedia(MEDIA.reduce);
    let isVisible = false;

    const sync = () => {
      const shouldPlay = isVisible && !reduceMotion.matches && !connectionPrefersSavingData();
      if (shouldPlay) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    };

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      sync();
    });

    observer.observe(video);
    reduceMotion.addEventListener("change", sync);

    return () => {
      observer.disconnect();
      reduceMotion.removeEventListener("change", sync);
      video.pause();
    };
  }, []);

  return (
    <video
      ref={videoRef}
      poster={asset.poster}
      width={asset.width}
      height={asset.height}
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
      tabIndex={-1}
      className={cn("size-full object-cover", className)}
    >
      <source src={asset.webm} type="video/webm" />
      <source src={asset.mp4} type="video/mp4" />
    </video>
  );
}
