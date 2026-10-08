import Image from "next/image";

type ProfilePhotoProps = {
  src: string;
  alt: string;
};

export default function ProfilePhoto({ src, alt }: ProfilePhotoProps) {
  return (
    <div className="relative size-44 sm:size-52">
      {/* A slow-spinning gradient, clipped to a thin ring around the photo */}
      <div
        aria-hidden="true"
        className="absolute -inset-1 overflow-hidden rounded-3xl shadow-[0_0_40px_rgb(56_189_248/0.25)]"
      >
        <div className="absolute -inset-[60%] animate-[spin_10s_linear_infinite] bg-[conic-gradient(from_0deg,var(--color-accent),var(--color-accent-2),var(--color-accent))] motion-reduce:animate-none" />
      </div>
      <Image
        src={src}
        alt={alt}
        width={400}
        height={400}
        priority
        className="relative size-full rounded-2xl border border-white/10 object-cover"
      />
    </div>
  );
}