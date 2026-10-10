"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { whoWeHelp } from "@/data/site";

const IMGS = ["1522335789203-aabd1fc54bc9", "1507238691740-187a5b1d37b8", "1503376780353-7e6692767b70", "1460925895917-afdab827c52f", "1542744094-24638eff58bb"];
const ALL = whoWeHelp.map(([who, title, text, best], i) => ({
  id: i + 1, who, title, text, best,
  image: `https://images.unsplash.com/photo-${IMGS[i]}?auto=format&fit=crop&w=800&q=80`,
}));
const PAGES = [ALL.slice(0, 3), ALL.slice(3, 5)];

export function WhoWeHelp() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => setCurrentPage((p) => (p + 1) % PAGES.length), 7000);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section id="who-we-help" className="relative w-full bg-[#0d0d0f] py-20 sm:py-24 text-white select-none">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center text-center">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#0066ff]">WHO WE HELP</span>
          <h2 className="mt-1 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Technology for Every Stage of Business
          </h2>
          <div className="mt-2.5 h-[3px] w-12 rounded-full bg-[#0066ff]" />
        </div>

        <div
          className="mt-12 sm:mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {PAGES[currentPage].map((post) => (
            <article key={post.id} className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/5 bg-[#141416] p-6 pb-7 transition-all duration-300 hover:shadow-2xl hover:shadow-black/60">
              <div className="relative aspect-[16/11] w-full overflow-hidden rounded-xl bg-black">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={post.image} alt={post.who} className="h-full w-full scale-110 object-cover brightness-95 contrast-125 grayscale filter transition-transform duration-700 ease-out group-hover:scale-100" />
                <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-black/10" />
              </div>
              <div className="mt-5 flex flex-col items-center text-center">
                <span className="text-xs font-semibold tracking-wide text-[#0066ff]">0{post.id} — {post.who}</span>
                <h3 className="mt-2 text-base font-bold leading-snug tracking-tight text-white sm:text-lg">{post.title}</h3>
                <p className="mt-3 text-xs leading-relaxed text-neutral-400 sm:text-sm">{post.text}</p>
                <p className="mt-3 text-xs text-neutral-300"><b className="text-white">Best for:</b> {post.best}</p>
                <div className="mt-3.5 flex h-5 items-center justify-center">
                  <Link href="/contact" aria-label={`Talk to us about ${post.who}`} className="-translate-x-2 text-[#0066ff] opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100 focus-visible:opacity-100">
                    <ArrowRight size={20} strokeWidth={2.4} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center gap-2">
          {PAGES.map((_, idx) => (
            <button key={idx} type="button" onClick={() => setCurrentPage(idx)} aria-label={`Go to page ${idx + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${currentPage === idx ? "scale-110 bg-[#0066ff]" : "bg-white/80 hover:bg-white"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
