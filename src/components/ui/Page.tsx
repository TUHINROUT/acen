import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, Check, Globe, Search, Share2, Target, MessageCircle, Bot, Receipt, Activity, Users } from "lucide-react";

export const icons: Record<string, typeof Globe> = {
  web: Globe, seo: Search, social: Share2, ads: Target, whatsapp: MessageCircle, ai: Bot, billing: Receipt, tracking: Activity, users: Users,
};

export function Pill({ href, children, outline = false }: { href: string; children: ReactNode; outline?: boolean }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 sm:px-9 py-2.5 sm:py-3 text-xs sm:text-sm font-bold tracking-wider text-white shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 ${
        outline ? "border border-white/40 bg-transparent hover:border-[#0066ff] hover:bg-[#0066ff]" : "bg-[#0066ff] hover:bg-[#0052cc]"
      }`}
    >
      {children}
    </Link>
  );
}

export function Heading({ eyebrow, title, text }: { eyebrow?: string; title: string; text?: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      {eyebrow && <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#0066ff]">{eyebrow}</span>}
      <h2 className="mt-2 max-w-4xl text-3xl sm:text-4xl lg:text-[46px] font-black leading-tight tracking-tight text-white">{title}</h2>
      <div className="mt-3.5 h-[3px] w-12 rounded-full bg-[#0066ff]" />
      {text && <p className="mt-5 max-w-3xl text-sm sm:text-base leading-relaxed text-neutral-400">{text}</p>}
    </div>
  );
}

export function Block({ children, tone = "a", id }: { children: ReactNode; tone?: "a" | "b" | "c"; id?: string }) {
  const bg = tone === "a" ? "bg-[#0a0a0c]" : tone === "b" ? "bg-[#131316]" : "bg-[#0d0d0f]";
  return (
    <section id={id} className={`relative w-full ${bg} py-16 sm:py-24 text-white`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">{children}</div>
    </section>
  );
}

const IMG = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80";

export function PageHero({ outline, solid, title, text, tags, buttons }: { outline: string; solid: string; title?: string; text: string; tags?: string; buttons?: [string, string][] }) {
  return (
    <section className="relative flex min-h-[440px] w-full items-center justify-center overflow-hidden bg-[#0d0d0f] px-5 py-16 text-white sm:min-h-[520px] sm:px-12">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={IMG} alt="" className="absolute inset-0 h-full w-full object-cover grayscale contrast-110 brightness-[0.55]" />
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <div className="flex select-none flex-col leading-none">
          <span className="block text-5xl font-bold leading-tight tracking-tight text-transparent sm:text-7xl lg:text-[88px]" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.75)" }}>{outline}</span>
          <span className="-mt-2 block text-5xl font-black leading-tight tracking-tight text-white sm:-mt-5 sm:text-7xl lg:-mt-6 lg:text-[88px]">{solid}</span>
        </div>
        {title && <h1 className="mt-5 text-lg font-semibold text-white sm:text-2xl">{title}</h1>}
        <p className="mt-3 max-w-2xl text-xs leading-relaxed text-white/70 sm:text-base">{text}</p>
        {tags && <p className="mt-4 text-xs font-semibold text-[#0066ff] sm:text-sm">{tags}</p>}
        {buttons && (
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row">
            {buttons.map(([l, h], i) => <Pill key={l} href={h} outline={i > 0}>{l}</Pill>)}
          </div>
        )}
      </div>
    </section>
  );
}

export function DetailCard({ id, icon, eyebrow, title, text, label, list, best, cta, flip = false }: { id: string; icon: string; eyebrow: string; title: string; text: string[]; label: string; list: string[]; best?: string; cta: string; flip?: boolean }) {
  const Icon = icons[icon];
  return (
    <div id={id} className="scroll-mt-24 grid gap-8 rounded-2xl border border-white/5 bg-[#141416] p-6 transition-all duration-300 hover:border-[#0066ff]/60 hover:shadow-2xl hover:shadow-[#0066ff]/10 sm:p-10 lg:grid-cols-2">
      <div className={flip ? "lg:order-2" : ""}>
        <div className="flex items-center gap-4 text-[#0066ff]"><Icon size={40} strokeWidth={1.4} className="shrink-0" /><span className="text-xs font-semibold uppercase tracking-widest">{eyebrow}</span></div>
        <h3 className="mt-5 text-2xl font-bold leading-snug tracking-tight sm:text-3xl">{title}</h3>
        {text.map((t) => <p key={t} className="mt-4 text-sm leading-relaxed text-neutral-400">{t}</p>)}
      </div>
      <div className="flex flex-col justify-between gap-6">
        <div>
          <p className="mb-4 text-sm font-bold">{label}</p>
          <ul className="grid gap-2.5 sm:grid-cols-2">
            {list.map((i) => <li key={i} className="flex items-start gap-2 text-sm text-neutral-300"><Check size={16} className="mt-0.5 shrink-0 text-[#0066ff]" />{i}</li>)}
          </ul>
          {best && <p className="mt-6 text-sm text-neutral-400"><b className="text-white">Best for:</b> {best}</p>}
        </div>
        <div><Pill href="/contact">{cta} <ArrowRight size={15} /></Pill></div>
      </div>
    </div>
  );
}

export function MiniCard({ n, title, text }: { n?: string; title: string; text: string }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-[#141416] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:bg-[#0066ff] hover:shadow-2xl hover:shadow-[#0066ff]/25">
      {n && <p className="text-3xl font-black text-[#0066ff] transition-colors group-hover:text-white">{n}</p>}
      <h3 className="mt-2 text-lg font-bold tracking-tight">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-neutral-400 transition-colors group-hover:text-white/90">{text}</p>
    </div>
  );
}
