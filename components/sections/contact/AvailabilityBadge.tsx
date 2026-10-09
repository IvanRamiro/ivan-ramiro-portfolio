export default function AvailabilityBadge() {
  return (
    <p className="inline-flex items-center gap-3 rounded-full border border-copper-ink/20 px-4 py-2 font-mono text-label uppercase tracking-[0.12em]">
      <span className="relative flex size-2">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-copper-ink opacity-60 motion-reduce:animate-none" />
        <span className="relative inline-flex size-2 rounded-full bg-copper-ink" />
      </span>
      Open to freelance and full-time roles
    </p>
  );
}
