import { Mail } from "lucide-react";
import { PageHero, Block } from "@/components/ui/Page";
import { ContactForm } from "@/components/pages/ContactForm";
import { contact } from "@/data/site";

export const metadata = { title: "Contact — Upvik Technologies" };

export default function Contact() {
  return (
    <>
      <PageHero outline="Let's" solid="Talk" text="Tell us what you're trying to achieve. We'll help you identify the right digital, marketing, automation, or AI solution." />
      <Block>
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <span className="text-xs font-semibold tracking-wider text-[#0066ff] sm:text-sm">GET IN TOUCH</span>
            <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">Have a project in mind?</h2>
            <div className="mt-3.5 h-[3px] w-12 rounded-full bg-[#0066ff]" />
            <p className="mt-5 text-sm leading-relaxed text-neutral-400">Send us a message and our team will get back to you.</p>
            <a href={`mailto:${contact.email}`} className="mt-6 inline-flex items-center gap-3 text-sm transition hover:text-[#0066ff]">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0066ff]/15 text-[#0066ff]"><Mail size={18} /></span>
              {contact.email}
            </a>
          </div>
          <div className="lg:col-span-3"><ContactForm /></div>
        </div>
      </Block>
    </>
  );
}
