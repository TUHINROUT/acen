"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface WorkItem {
  id: number;
  title: string;
  category: string;
  image: string;
  href: string;
}

const WORK_PAGES: WorkItem[][] = [
  // Page 1
  [
    {
      id: 1,
      title: "T-shirt Design",
      category: "Branding",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
      href: "/projects/t-shirt-design",
    },
    {
      id: 2,
      title: "App Interface",
      category: "UI / UX Design",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      href: "/projects/app-interface",
    },
    {
      id: 3,
      title: "Brand Packaging",
      category: "Photography",
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      href: "/projects/brand-packaging",
    },
  ],
  // Page 2
  [
    {
      id: 4,
      title: "Power Up Your Drive",
      category: "Digital Agency",
      image:
        "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
      href: "/projects/power-up",
    },
    {
      id: 5,
      title: "Minimal Identity",
      category: "Creative",
      image:
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
      href: "/projects/minimal-identity",
    },
    {
      id: 6,
      title: "Editorial Spread",
      category: "Print",
      image:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80",
      href: "/projects/editorial-spread",
    },
  ],
];

export function Works() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play every 6 seconds, pauses on hover
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % WORK_PAGES.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section
      id="works"
      className="relative w-full bg-[#1b1b1b] py-20 sm:py-28 text-white select-none transition-colors duration-300"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section Heading Area */}
        <div className="flex flex-col items-center text-center">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#e9204f]">
            Portfolio & Project
          </span>
          <h2 className="mt-2 text-4xl sm:text-5xl lg:text-[54px] font-black tracking-tight text-white">
            Our Works
          </h2>
          {/* Signature Accent Line */}
          <div className="mt-3.5 h-[3px] w-12 rounded-full bg-[#e9204f]" />
        </div>

        {/* Works Grid */}
        <div
          className="mt-14 sm:mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {WORK_PAGES[currentPage].map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group relative block aspect-[4/4.8] w-full overflow-hidden rounded-xl bg-[#242424] shadow-md shadow-black/20"
            >
              {/* Card Image */}
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover filter grayscale contrast-115 brightness-[0.85] transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Dark Overlay Transition */}
              <div className="absolute inset-0 bg-black/25 transition-colors duration-500 group-hover:bg-[#111113]/90" />

              {/* Default State Indicator (— ◦ ◦) */}
              <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0 group-hover:scale-90">
                <div className="flex items-center gap-2">
                  <span className="h-[2px] w-5 bg-white/90" />
                  <span className="h-2 w-2 rounded-full border border-white/90" />
                  <span className="h-2 w-2 rounded-full border border-white/90" />
                </div>
              </div>

              {/* Hover State Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center opacity-0 transition-all duration-300 ease-out group-hover:opacity-100">
                <h3 className="translate-y-2 text-2xl font-bold tracking-tight text-white transition-transform duration-300 group-hover:translate-y-0">
                  {item.title}
                </h3>
                <p className="mt-1 translate-y-2 text-sm font-semibold tracking-wide text-[#e9204f] transition-transform duration-300 delay-75 group-hover:translate-y-0">
                  {item.category}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="mt-12 flex items-center justify-center gap-2">
          {WORK_PAGES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentPage(idx)}
              aria-label={`Go to works page ${idx + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                currentPage === idx
                  ? "bg-[#e9204f] scale-110"
                  : "bg-white/80 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
