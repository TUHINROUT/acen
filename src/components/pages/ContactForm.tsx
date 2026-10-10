"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { contact } from "@/data/site";

const f = "w-full rounded-xl border border-white/10 bg-[#0a0a0c] px-4 py-3 text-sm text-white outline-none transition placeholder:text-neutral-500 focus:border-[#0066ff]";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const body = `Name: ${d.name}\nEmail: ${d.email}\nPhone: ${d.phone}\nInterested in: ${d.service}\n\n${d.message}`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent("Enquiry from " + d.name)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }
  return (
    <form onSubmit={submit} className="space-y-4 rounded-2xl border border-white/5 bg-[#141416] p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="name" required placeholder="Your name" className={f} />
        <input name="email" type="email" required placeholder="Email address" className={f} />
        <input name="phone" type="tel" placeholder="Phone / WhatsApp" className={f} />
        <select name="service" defaultValue="Website Design" className={f}>
          {["Website Design", "SEO", "Social Media Marketing", "Paid Ads", "WhatsApp Automation", "AI Solutions", "Billing Software", "Employee Tracking", "Communiket", "Something else"].map((s) => <option key={s} className="bg-black">{s}</option>)}
        </select>
      </div>
      <textarea name="message" required rows={5} placeholder="Tell us what you're trying to achieve" className={f} />
      <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-[#0066ff] px-8 py-3 text-xs font-bold tracking-wider text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#0052cc] active:scale-95 sm:text-sm">
        Send Message <Send size={15} />
      </button>
      {sent && <p className="text-sm text-neutral-400">Thanks! Your email app should open with your message ready to send.</p>}
    </form>
  );
}
