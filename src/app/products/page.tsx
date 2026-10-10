import { PageHero, Block, Heading, DetailCard, MiniCard, Pill } from "@/components/ui/Page";
import { CTA } from "@/components/sections/CTA";
import { Chevrons } from "@/components/ui/Logo";
import { philosophy, products } from "@/data/site";

export const metadata = { title: "Products — Upvik Technologies" };

export default function Products() {
  return (
    <>
      <PageHero outline="Our" solid="Products" title="Powerful Software for Modern Businesses"
        text="We build practical SaaS products that simplify business operations, improve workforce productivity, and make communication easier."
        tags="Billing Software • Employee Tracking • Communiket"
        buttons={[["Explore Products", "#products"], ["Talk to Us", "/contact"]]} />
      <Block id="products">
        <Heading title="Technology Built to Solve Everyday Business Problems"
          text="We don't build software just because technology exists. We build products around real problems businesses face—managing people, tracking work, communicating with customers, and automating repetitive processes." />
        <div className="mt-14 space-y-6">
          {products.map((p, i) => (
            <DetailCard key={p.id} id={p.id} icon={p.icon} eyebrow={`Product ${p.n} — ${p.name}`} title={p.title} text={p.text} label={p.label} list={p.list} best={p.best} cta={p.cta} flip={i % 2 === 1} />
          ))}
        </div>
      </Block>
      <Block tone="b">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Chevrons className="h-10 w-10" />
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">Our Products Are Getting Smarter</h2>
          <div className="mt-3.5 h-[3px] w-12 rounded-full bg-[#0066ff]" />
          <p className="mt-6 text-sm leading-relaxed text-neutral-400 sm:text-base">We are continuously integrating <b className="text-white">Artificial Intelligence</b> into our SaaS ecosystem to make our products more intelligent, automated, and useful.</p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-400 sm:text-base">From intelligent customer interactions to automated workflows and smarter business insights, AI is becoming an important part of the Upvik product ecosystem.</p>
          <h3 className="mt-8 text-2xl font-bold text-[#0066ff]">AI + Software + Automation</h3>
          <p className="mt-2 font-medium">Less Manual Work. More Intelligence. Better Business.</p>
          <div className="mt-8"><Pill href="/services#ai">Explore AI Solutions</Pill></div>
        </div>
      </Block>
      <Block>
        <Heading eyebrow="Product Philosophy" title="Built Around Problems. Designed for People." text="Our approach is simple:" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {philosophy.map((s, i) => <MiniCard key={s} n={`0${i + 1}`} title={s} text="" />)}
        </div>
        <p className="mt-8 text-center text-neutral-400">That&apos;s how we build products at Upvik.</p>
      </Block>
      <CTA eyebrow="Looking for a Smarter Way to Run Your Business?" outline="Explore Our" solid="Products" text="Explore our products and discover how technology can simplify your everyday operations." buttons={[["Explore Our Products", "/contact"]]} />
    </>
  );
}
