export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="eyebrow text-sm font-display">{children}</p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-semibold mt-2">
        {title}
      </h2>
      <span
        className={`mt-4 h-[3px] w-14 bg-accent rounded-full ${
          align === "center" ? "mx-auto" : ""
        } block`}
      />
    </div>
  );
}
