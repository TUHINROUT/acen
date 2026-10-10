import { PageHero, Block, Heading, MiniCard } from "@/components/ui/Page";
import { ProjectsGrid } from "@/components/pages/ProjectsGrid";
import { CTA } from "@/components/sections/CTA";
import { caseSteps } from "@/data/site";

export const metadata = { title: "Our Projects — Upvik Technologies" };

export default function Projects() {
  return (
    <>
      <PageHero outline="Our" solid="Projects" title="Ideas We've Turned Into Digital Experiences"
        text="From business websites and SEO campaigns to social media, advertising, automation, and software solutions—we create digital experiences designed around real business goals."
        buttons={[["View Our Work", "#work"]]} />
      <Block id="work">
        <Heading eyebrow="Portfolio" title="Our Work. Your Inspiration."
          text="Every business has a different challenge. That's why we don't believe in one-size-fits-all digital solutions. Our portfolio reflects the different ways we help businesses build their presence, reach customers, generate leads, and adopt technology." />
        <ProjectsGrid />
      </Block>
      <Block tone="b">
        <Heading eyebrow="Case Studies" title="Don't Just See What We Built. See What We Solved."
          text="A project is more than a finished website or campaign. We document the challenge, strategy, solution, and outcome behind our work so you can understand the impact—not just the design." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {caseSteps.map(([t, d], i) => <MiniCard key={t} n={`0${i + 1}`} title={t} text={d} />)}
        </div>
      </Block>
      <CTA eyebrow="Have a Project in Mind?" outline="Start Your" solid="Project" text="Whether you need a website, want to grow through digital marketing, or are looking to automate your business with AI—we'd love to build it with you." buttons={[["Start Your Project", "/contact"], ["Talk to Upvik", "/contact"]]} />
    </>
  );
}
