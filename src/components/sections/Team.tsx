"use client";

import { useState, useEffect } from "react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

const TEAM_PAGES: TeamMember[][] = [
  // Page 1
  [
    {
      id: 1,
      name: "Micheal Dan",
      role: "Database Developer",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "Emily Martin",
      role: "Graphic Designer",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "Enrico Brown",
      role: "Director",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    },
  ],
  // Page 2
  [
    {
      id: 4,
      name: "Jesica Dan",
      role: "Support Engineer",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      name: "Oliva Smith",
      role: "Social Media",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      name: "Elisa Brown",
      role: "Lead Developer",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    },
  ],
];

export function Team() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % TEAM_PAGES.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section
      id="team"
      className="relative w-full bg-bg-alt py-16 sm:py-20 text-white select-none"
    >
      {/* Scaled container from max-w-7xl down to max-w-5xl */}
      <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-10">
        {/* Section Heading Area */}
        <div className="flex flex-col items-center text-center">
          <span className="text-xs font-semibold tracking-wider text-[#e9204f]">
            Creative Staff
          </span>
          <h2 className="mt-1.5 text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight text-white">
            Meet Team
          </h2>
          {/* Accent Pink Bar */}
          <div className="mt-3 h-[2.5px] w-10 rounded-full bg-[#e9204f]" />
        </div>

        {/* Team Grid with Compact Card Proportions */}
        <div
          className="mt-10 sm:mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {TEAM_PAGES[currentPage].map((member) => (
            <div
              key={member.id}
              className="group relative flex aspect-[3.6/4.5] w-full flex-col justify-end overflow-hidden rounded-xl bg-[#8c8c8c]"
            >
              {/* Member Photo */}
              <img
                src={member.image}
                alt={member.name}
                className="absolute inset-0 h-full w-full object-cover filter grayscale contrast-125 brightness-105 transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Scaled-down Floating Info Card */}
              <div className="relative z-10 m-3 sm:m-3.5 rounded-lg bg-[#141416]/95 px-4 py-2.5 shadow-md backdrop-blur-sm transition-all duration-300 ease-out group-hover:bg-[#e9204f] group-hover:shadow-[#e9204f]/30">
                <h3 className="text-sm sm:text-[15px] font-bold tracking-tight text-white">
                  {member.name}
                </h3>
                <p className="text-[11px] font-normal text-neutral-400 transition-colors duration-300 group-hover:text-white/90">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="mt-9 flex items-center justify-center gap-2">
          {TEAM_PAGES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentPage(idx)}
              aria-label={`Go to team page ${idx + 1}`}
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
