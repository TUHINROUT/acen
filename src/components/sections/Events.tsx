"use client";

import { useState } from "react";
import Link from "next/link";

interface EventItem {
  id: number;
  day: string;
  monthYear: string;
  time: string;
  title: string;
  location: string;
  image: string;
  href: string;
}

const EVENTS_DATA: EventItem[] = [
  {
    id: 1,
    day: "22",
    monthYear: "Nov 2025",
    time: "8:00 AM - 5:00 PM",
    title: "London Leading Design",
    location: "Bedford Way, London",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80",
    href: "#contact",
  },
  {
    id: 2,
    day: "24",
    monthYear: "Nov 2025",
    time: "9:00 AM - 6:00 PM",
    title: "Web Summit 2023",
    location: "Prior Velho, Lisbon",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
    href: "#contact",
  },
  {
    id: 3,
    day: "27",
    monthYear: "Nov 2025",
    time: "10:00 AM - 5:00 PM",
    title: "SXSW Conference",
    location: "London, UK",
    image:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=600&q=80",
    href: "#contact",
  },
];

export function Events() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section
      id="events"
      className="relative w-full bg-bg py-12 sm:py-16 text-white select-none"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        {/* Section Heading Area */}
        <div className="flex flex-col items-center text-center">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#e9204f]">
            Upcoming
          </span>
          <h2 className="mt-1 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Digital Events
          </h2>
          <div className="mt-2.5 h-[3px] w-12 rounded-full bg-[#e9204f]" />
        </div>

        {/* Events List */}
        <div className="mt-8 sm:mt-10 border-t border-white/10">
          {EVENTS_DATA.map((event) => {
            const isHovered = hoveredId === event.id;

            return (
              <div
                key={event.id}
                onMouseEnter={() => setHoveredId(event.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative flex flex-col justify-between gap-4 border-b border-white/10 py-4 sm:py-5 transition-colors duration-300 sm:flex-row sm:items-center"
              >
                {/* Left Side: Outlined Day Number + Date & Time */}
                <div className="flex items-center gap-5 sm:gap-7">
                  <span
                    className="font-black text-5xl sm:text-6xl lg:text-[68px] leading-none text-transparent select-none min-w-[75px] sm:min-w-[85px]"
                    style={{
                      WebkitTextStroke: "1.5px #e9204f",
                    }}
                  >
                    {event.day}
                  </span>

                  <div className="flex flex-col text-xs sm:text-[13px] text-neutral-300 font-medium leading-tight">
                    <span>{event.monthYear}</span>
                    <span className="text-neutral-400 mt-0.5">
                      {event.time}
                    </span>
                  </div>
                </div>

                {/* Middle: Title & Location */}
                <div className="flex flex-col flex-1 sm:px-8">
                  <h3 className="text-base sm:text-lg font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-white">
                    {event.title}
                  </h3>
                  <span className="mt-0.5 text-xs sm:text-sm font-medium text-[#e9204f]">
                    {event.location}
                  </span>
                </div>

                {/* Right Side: Details Button */}
                <div className="relative z-10 flex items-center justify-start sm:justify-end">
                  <Link
                    href={event.href}
                    className="inline-flex items-center justify-center rounded-full bg-[#e9204f] px-7 py-2 text-xs sm:text-sm font-bold tracking-wider text-white shadow-md transition-all duration-300 hover:bg-[#d01742] hover:scale-105 active:scale-95"
                  >
                    Details
                  </Link>
                </div>

                {/* Hover Circular Image (Matched to row height) */}
                <div
                  className={`pointer-events-none absolute right-32 top-1/2 hidden -translate-y-1/2 lg:block z-20 transition-all duration-300 ease-out ${
                    isHovered
                      ? "opacity-100 scale-100 translate-x-0"
                      : "opacity-0 scale-90 translate-x-4"
                  }`}
                >
                  <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-white/20 shadow-2xl">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="h-full w-full object-cover filter grayscale contrast-125 brightness-95"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
