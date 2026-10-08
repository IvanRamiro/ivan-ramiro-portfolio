export default function AvailabilityBadge() {
  return (
    <p className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 font-mono text-xs text-emerald-300">
      <span className="relative flex size-2">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:animate-none" />
        <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
      </span>
      Open to freelance and full-time roles
    </p>
  );
}
