/**
 * Custom icon: the Feather set (react-icons/fi) used elsewhere has no VR headset.
 * Accepts the same `className` as a react-icons icon so the two can be mixed in one list.
 */
export function VrHeadsetIcon({ className }: { className?: string }) {
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
