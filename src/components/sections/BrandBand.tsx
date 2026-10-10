import { Pill } from "@/components/ui/Page";

export function BrandBand() {
  return (
    <section className="relative w-full overflow-hidden">
      <div
        className="relative flex min-h-[420px] w-full items-center justify-center bg-cover bg-center sm:min-h-[480px] md:bg-fixed"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80')` }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-grayscale contrast-125" />
        <div className="relative z-10 flex flex-col items-center px-6 py-14 text-center">
          <span className="text-xs font-semibold tracking-wider text-[#0066ff] sm:text-sm">UPVIK TECHNOLOGIES</span>
          <h2 className="mt-3 text-3xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-[54px]">
            Technology. <span className="text-transparent" style={{ WebkitTextStroke: "1.2px rgba(255,255,255,0.8)" }}>Automation.</span> Growth.
          </h2>
          <p className="mt-5 max-w-2xl text-xs leading-relaxed text-white/70 sm:text-base">
            Digital solutions, intelligent automation, and business software built to solve real problems.
          </p>
          <div className="mt-8"><Pill href="/about">Discover Upvik</Pill></div>
        </div>
      </div>
    </section>
  );
}
