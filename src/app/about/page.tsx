import { PageHero, Block, Heading, MiniCard } from "@/components/ui/Page";
import { CTA } from "@/components/sections/CTA";
import { Chevrons } from "@/components/ui/Logo";
import { capabilities, evolution } from "@/data/site";

export const metadata = { title: "About Us — Upvik Technologies" };

const b = "font-semibold text-white";

export default function About() {
  return (
    <>
      <PageHero outline="About" solid="Upvik" title="From Digital Marketing to Intelligent Business Technology" text="About Upvik Technologies" />
      <Block>
        <div className="mx-auto max-w-3xl space-y-5 text-sm leading-relaxed text-neutral-400 sm:text-base">
          <p>Founded in <b className={b}>2017</b>, Upvik began its journey as a specialized <b className={b}>SEO &amp; SMO company</b>, helping businesses establish their presence and grow in the digital world.</p>
          <p className="text-lg font-semibold text-white">As technology evolved, so did we.</p>
          <p>Over the years, we expanded beyond digital marketing into <b className={b}>Website Design &amp; Development</b>, building high-performance digital experiences that helped businesses connect with their customers and strengthen their online presence.</p>
          <p>But we didn&apos;t stop there. We started developing our own <b className={b}>SaaS products</b> to solve real business challenges. This led to the creation of solutions such as <b className={b}>Billing Software, Employee Tracking, and Lead Management</b>—products designed to simplify everyday business operations, improve productivity, and streamline communication.</p>
          <p>Today, we are taking the next step by bringing <b className={b}>Artificial Intelligence into our products and services</b>. We integrate AI into our SaaS ecosystem to make business processes smarter, faster, and more automated—from intelligent communication and customer interactions to workforce management and business workflows.</p>
        </div>
      </Block>
      <Block tone="b">
        <Heading eyebrow="Our Evolution" title="Our Journey, Year by Year" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {evolution.map(([y, t, d]) => <MiniCard key={y} n={y} title={t} text={d} />)}
        </div>
      </Block>
      <Block>
        <Heading eyebrow="What We Do Today" title="Digital Marketing, Software, Automation, and AI Under One Ecosystem"
          text="At Upvik Technologies, we bring all four together. Alongside our services, we continue to build and improve our own technology products for modern businesses." />
        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-2.5">
          {capabilities.map((c) => <span key={c} className="rounded-full border border-white/15 px-4 py-2 text-xs text-neutral-300 transition hover:border-[#0066ff] hover:text-white sm:text-sm">{c}</span>)}
        </div>
      </Block>
      <Block tone="c">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Chevrons className="h-10 w-10" />
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">More Than a Digital Agency</h2>
          <div className="mt-3.5 h-[3px] w-12 rounded-full bg-[#0066ff]" />
          <p className="mt-6 text-sm leading-relaxed text-neutral-400 sm:text-base">Our journey has always been about adapting to what businesses need next. We started by helping businesses <b className={b}>get discovered online</b>. Then we helped them <b className={b}>build their digital presence</b>. Then we began building <b className={b}>software to manage and automate their businesses</b>. Now, we&apos;re using <b className={b}>AI to make those systems smarter</b>.</p>
          <p className="mt-6 text-lg">That&apos;s what defines <b>Upvik</b>.</p>
          <p className="mt-2 text-xl font-bold text-[#0066ff]">We don&apos;t just follow technology. We evolve with it.</p>
        </div>
      </Block>
      <Block>
        <div className="grid gap-6 md:grid-cols-2">
          <MiniCard n="Our Vision" title="Work smarter. Operate efficiently. Grow faster." text="To build practical digital, software, automation, and AI solutions that help businesses work smarter, operate efficiently, and grow faster." />
          <MiniCard n="Our Mission" title="Technology, creativity, automation, and AI." text="To combine technology, creativity, automation, and AI to solve real business problems and create solutions that deliver measurable value." />
        </div>
      </Block>
      <CTA />
    </>
  );
}
