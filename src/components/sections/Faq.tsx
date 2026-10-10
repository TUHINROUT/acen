"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "@/data/site";

export function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="bg-bg-alt py-20 sm:py-28 select-none">
      <div className="mx-auto max-w-4xl px-5 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#0066ff]">FAQ</span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">Frequently Asked Questions</h2>
          <div className="mt-3.5 h-[3px] w-12 rounded-full bg-[#0066ff]" />
        </div>
        <div className="mt-12 space-y-4">
          {faqs.map(([q, bold, rest], i) => (
            <div key={q} className={`rounded-2xl border bg-card transition-all duration-300 ${open === i ? "border-accent/60" : "border-line hover:border-accent/40"}`}>
              <button type="button" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}
                className="flex w-full items-center justify-between gap-4 p-5 text-left text-sm font-semibold sm:p-6 sm:text-base">
                <span>{i + 1}. {q}</span>
                <Plus size={20} className={`shrink-0 text-accent transition-transform duration-300 ${open === i ? "rotate-45" : ""}`} />
              </button>
              {open === i && (
                <p className="px-5 pb-5 text-xs leading-relaxed text-muted sm:px-6 sm:pb-6 sm:text-sm">
                  <b className="text-white">{bold}</b> {rest}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
