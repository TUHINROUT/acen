import { PageHero, Block, Heading, DetailCard, MiniCard } from "@/components/ui/Page";
import { CTA } from "@/components/sections/CTA";
import { serviceDetails, serviceStrengths } from "@/data/site";

export const metadata = { title: "Services — Upvik Technologies" };

export default function Services() {
  return (
    <>
      <PageHero outline="Our" solid="Services" title="Digital Solutions That Solve Real Business Problems"
        text="From building your digital presence to generating leads and automating customer interactions, we create practical technology and marketing solutions that help your business grow."
        tags="Website Design • SEO • Social Media • Paid Ads • WhatsApp Automation • AI Solutions"
        buttons={[["Get a Free Consultation", "/contact"], ["Explore Our Services", "#what-we-do"]]} />
      <Block id="what-we-do">
        <Heading eyebrow="What We Do" title="Everything You Need to Grow in the Digital World"
          text="Your business doesn't need more disconnected tools—it needs solutions that work together. At Upvik, we combine digital marketing, technology, automation, and AI to solve the challenges that businesses face every day." />
        <div className="mt-14 space-y-6">
          {serviceDetails.map((s, i) => (
            <DetailCard key={s.id} id={s.id} icon={s.icon} eyebrow={s.name} title={s.title} text={[s.text]} label={s.label} list={s.list} cta={s.cta} flip={i % 2 === 1} />
          ))}
        </div>
      </Block>
      <Block tone="b">
        <Heading eyebrow="Why Upvik?" title="One Partner. Multiple Digital Capabilities."
          text="Instead of managing separate agencies for marketing, websites, automation, and AI, work with one technology partner that understands the complete digital ecosystem." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {serviceStrengths.map(([t, d], i) => <MiniCard key={t} n={`0${i + 1}`} title={t} text={d} />)}
        </div>
      </Block>
      <CTA eyebrow="Have a Digital Challenge?" outline="Let's" solid="Solve It." text="Tell us what you're trying to achieve. We'll help you identify the right digital, marketing, automation, or AI solution." buttons={[["Talk to an Expert", "/contact"]]} />
    </>
  );
}
