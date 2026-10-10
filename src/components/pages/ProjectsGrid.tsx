"use client";

import { useState } from "react";
import { projectFilters, projects } from "@/data/site";
import { Pill } from "@/components/ui/Page";

export function ProjectsGrid() {
  const [f, setF] = useState("All");
  const list = projects.filter((p) => f === "All" || p.cat === f);
  return (
    <>
      <div className="mt-10 flex flex-wrap justify-center gap-2.5" role="tablist" aria-label="Project categories">
        {projectFilters.map((c) => (
          <button key={c} type="button" role="tab" aria-selected={f === c} onClick={() => setF(c)}
            className={`rounded-full border px-5 py-2 text-xs font-semibold tracking-wide transition-all duration-300 sm:text-sm ${f === c ? "border-[#0066ff] bg-[#0066ff] text-white" : "border-white/20 text-neutral-300 hover:border-[#0066ff] hover:text-white"}`}>
            {c}
          </button>
        ))}
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <article key={p.name} className="group flex flex-col rounded-2xl border border-white/5 bg-[#141416] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#0066ff]/60 hover:shadow-2xl hover:shadow-[#0066ff]/10">
            <span className="w-fit rounded-full bg-[#0066ff]/15 px-3 py-1 text-xs font-semibold text-[#0066ff]">{p.cat}</span>
            <h3 className="mt-4 text-sm font-semibold text-neutral-400">{p.name}</h3>
            <h4 className="mt-1 text-xl font-bold leading-snug tracking-tight">{p.title}</h4>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-400">{p.text}</p>
            <p className="mb-2 mt-5 text-xs font-bold uppercase tracking-wider">Focus</p>
            <div className="flex flex-wrap gap-2">
              {p.focus.map((t) => <span key={t} className="rounded-full border border-white/10 px-3 py-1 text-xs text-neutral-300">{t}</span>)}
            </div>
            <div className="mt-6"><Pill href="/contact" outline>Start a Similar Project</Pill></div>
          </article>
        ))}
      </div>
    </>
  );
}
