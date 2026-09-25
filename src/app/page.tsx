import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Works } from "@/components/sections/Works";
import { PromoVideo } from "@/components/sections/PromoVideo";
import { Team } from "@/components/sections/Team";
import { Events } from "@/components/sections/Events";
import { Testimonials } from "@/components/sections/Testimonials";
import { Blog } from "@/components/sections/Blog";
import { Clients } from "@/components/sections/Clients";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import { Divider } from "@/components/ui/Divider";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Divider />
        <Services />
        {/* <Divider /> */}
        <Works />
        {/* <Divider /> */}
        <PromoVideo />
        {/* <Divider /> */}
        <Team />
        {/* <Divider /> */}
        <Events />
        {/* <Divider /> */}
        <Testimonials />
        {/* <Divider /> */}
        <Blog />
        {/* <Divider /> */}
        <Clients />
        {/* <Divider /> */}
        <CTA />
      </main>
      <Footer />
    </>
  );
}
