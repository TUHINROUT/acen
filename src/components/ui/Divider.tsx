export function Divider() {
  return (
    <div className="flex justify-center py-2" aria-hidden="true">
      <span className="section-divider" />
    </div>
  );
}

export function DotPagination({ count, active = 0 }: { count: number; active?: number }) {
  return (
    <div className="flex justify-center gap-2 pt-10" role="tablist" aria-label="Slides">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className={`h-2 rounded-full transition-all ${
            i === active ? "w-6 bg-accent" : "w-2 bg-line"
          }`}
        />
      ))}
    </div>
  );
}
