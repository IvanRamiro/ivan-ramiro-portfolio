import Image from "next/image";
import { cn } from "@/lib/css";

export const MEDIA_FRAME_CLASS =
  "relative overflow-hidden rounded-media border border-line bg-surface-2";

export type MediaAsset = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type MediaProps = {
  asset?: MediaAsset;
  width: number;
  height: number;
  sizes: string;
  preload?: boolean;
  eager?: boolean;
  backdrop?: string;
  className?: string;
  imageClassName?: string;
};

export default function Media({
  asset,
  width,
  height,
  sizes,
  preload = false,
  eager = false,
  backdrop,
  className,
  imageClassName,
}: MediaProps) {
  const frameWidth = asset?.width ?? width;
  const frameHeight = asset?.height ?? height;
  const intrinsicRatio =
    asset?.width && asset?.height ? { aspectRatio: `${asset.width} / ${asset.height}` } : undefined;

  return (
    <div
      style={intrinsicRatio}
      className={cn(MEDIA_FRAME_CLASS, className)}
    >
      {backdrop && (
        <Image
          src={backdrop}
          alt=""
          fill
          sizes={sizes}
          aria-hidden="true"
          className="object-cover"
        />
      )}
      {asset ? (
        <Image
          src={asset.src}
          alt={asset.alt}
          width={frameWidth}
          height={frameHeight}
          sizes={sizes}
          preload={preload}
          loading={preload || eager ? "eager" : undefined}
          fetchPriority={preload ? "high" : undefined}
          className={cn("relative size-full object-cover", imageClassName)}
        />
      ) : (
        <MediaPlaceholder />
      )}
    </div>
  );
}

function MediaPlaceholder() {
  return (
    <div aria-hidden="true" className="absolute inset-0">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-line)_1px,transparent_1px)] bg-[size:20%_20%] opacity-60" />
      <span className="absolute inset-x-[12%] top-[40%] h-px bg-copper/70" />
      <span className="absolute left-[12%] top-[40%] size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-copper" />
      <span className="absolute right-[12%] top-[40%] size-1.5 translate-x-1/2 -translate-y-1/2 rounded-full bg-copper" />
      <span className="absolute left-[40%] top-[40%] h-[20%] w-px bg-copper/70" />
      <span className="absolute left-[40%] top-[60%] size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-copper" />
    </div>
  );
}
