import { Pill } from "@/components/ui/Page";

type Props = { eyebrow?: string; outline?: string; solid?: string; text?: string; buttons?: [string, string][] };

export function CTA({
  eyebrow = "READY TO GROW SMARTER?",
  outline = "Let's Build",
  solid = "What's Next.",
  text = "Whether you need a stronger digital presence, smarter automation, or AI-powered business solutions, Upvik Technologies is ready to help you turn your ideas and challenges into technology that works.",
  buttons = [["Let's Talk", "/contact"]],
}: Props) {
  return (
    <section className="relative w-full overflow-hidden">
      <div
        className="relative flex min-h-[460px] w-full items-center justify-center bg-cover bg-center sm:min-h-[520px] md:bg-fixed lg:min-h-[560px]"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1920&q=80')` }}
      >
        <div className="absolute inset-0 bg-black/65 backdrop-grayscale contrast-125" />
        <div className="relative z-10 flex flex-col items-center px-6 py-16 text-center">
          <span className="text-xs font-semibold tracking-wider text-[#0066ff] sm:text-sm">{eyebrow}</span>
          <h2 className="mt-3 flex flex-wrap items-center justify-center gap-x-3 text-4xl font-black leading-tight tracking-tight sm:text-6xl lg:text-[72px]">
            <span className="font-bold text-transparent" style={{ WebkitTextStroke: "1.2px rgba(255,255,255,0.8)" }}>{outline}</span>
            <span className="text-white">{solid}</span>
          </h2>
          <p className="mt-5 max-w-2xl text-xs leading-relaxed text-white/70 sm:text-base">{text}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {buttons.map(([l, h], i) => <Pill key={l} href={h} outline={i > 0}>{l}</Pill>)}
          </div>
        </div>
      </div>
    </section>
  );
}
