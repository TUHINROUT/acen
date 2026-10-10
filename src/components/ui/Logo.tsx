export function Chevrons({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`text-accent ${className}`} fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 11l8-6 8 6M4 20l8-6 8 6" />
    </svg>
  );
}

export function Logo({ size = "text-2xl", tagline = false }: { size?: string; tagline?: boolean }) {
  return (
    <span className="inline-flex flex-col leading-none">
      <span className={`inline-flex items-start font-semibold tracking-tight text-white ${size}`}>
        upvik<Chevrons className="-mt-0.5 ml-0.5 h-[0.55em] w-[0.55em]" />
      </span>
      {tagline && (
        <span className="mt-2 text-[10px] tracking-[0.22em] text-neutral-400">
          Innovation That <b className="text-[#0066ff]">Uplifts</b>
        </span>
      )}
    </span>
  );
}
