import { whyUpvik } from "@/data/site";

export function WhyUpvik() {
  return (
    <section id="why-upvik" className="relative w-full bg-bg py-14 sm:py-20 text-white select-none">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center text-center">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#0066ff]">WHY UPVIK</span>
          <h2 className="mt-1 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">Why Businesses Choose Upvik</h2>
          <div className="mt-2.5 h-[3px] w-12 rounded-full bg-[#0066ff]" />
        </div>

        <div className="mt-8 sm:mt-10 border-t border-white/10">
          {whyUpvik.map(([label, title, text], i) => (
            <div key={label} className="group flex flex-col gap-3 border-b border-white/10 py-5 transition-colors duration-300 sm:flex-row sm:items-center sm:gap-8">
              <div className="flex items-center gap-5 sm:w-72 sm:shrink-0 sm:gap-7">
                <span className="min-w-[75px] text-5xl font-black leading-none text-transparent sm:min-w-[85px] sm:text-6xl" style={{ WebkitTextStroke: "1.5px #0066ff" }}>
                  0{i + 1}
                </span>
                <div className="flex flex-col leading-tight">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#0066ff]">{label}</span>
                  <h3 className="mt-1 text-base font-bold tracking-tight text-white sm:text-lg">{title}</h3>
                </div>
              </div>
              <p className="flex-1 text-xs leading-relaxed text-neutral-400 transition-colors duration-300 group-hover:text-neutral-200 sm:text-sm">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
