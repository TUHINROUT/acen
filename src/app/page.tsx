import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Works } from "@/components/sections/Works";
import { BrandBand } from "@/components/sections/BrandBand";
import { WhoWeHelp } from "@/components/sections/WhoWeHelp";
import { WhyUpvik } from "@/components/sections/WhyUpvik";
import { Faq } from "@/components/sections/Faq";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Works />
      <BrandBand />
      <WhoWeHelp />
      <WhyUpvik />
      <Faq />
      <CTA />
    </>
  );
}
