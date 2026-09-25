"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Target,
  ClipboardList,
  ShoppingBag,
  MessageSquare,
  Layout,
  Compass,
  ArrowRight,
} from "lucide-react";

const SLIDES_DATA = [
  // Page 1: Cards 1, 2, 3
  [
    {
      id: 1,
      number: "1",
      title: "Digital Marketing",
      description:
        "Summary Aliquam vel felis elit. Phasellus vitae laoreet mauris. Nullam at cursus odio. Suspendisse semper magna ve...",
      icon: Target,
      href: "/services/digital-marketing",
    },
    {
      id: 2,
      number: "2",
      title: "Content Strategy",
      description:
        "Summary Aliquam vel felis elit. Phasellus vitae laoreet mauris. Nullam at cursus odio. Suspendisse semper magna ve...",
      icon: ClipboardList,
      href: "/services/content-strategy",
    },
    {
      id: 3,
      number: "3",
      title: "Ecommerce",
      description:
        "Summary Aliquam vel felis elit. Phasellus vitae laoreet mauris. Nullam at cursus odio. Suspendisse semper magna ve...",
      icon: ShoppingBag,
      href: "/services/ecommerce",
    },
  ],
  // Page 2: Cards 4, 5, 6
  [
    {
      id: 4,
      number: "4",
      title: "Social Media",
      description:
        "Summary Aliquam vel felis elit. Phasellus vitae laoreet mauris. Nullam at cursus odio. Suspendisse semper magna ve...",
      icon: MessageSquare,
      href: "/services/social-media",
    },
    {
      id: 5,
      number: "5",
      title: "Web Development",
      description:
        "Summary Aliquam vel felis elit. Phasellus vitae laoreet mauris. Nullam at cursus odio. Suspendisse semper magna ve...",
      icon: Layout,
      href: "/services/web-development",
    },
    {
      id: 6,
      number: "6",
      title: "Digital Strategy",
      description:
        "Summary Aliquam vel felis elit. Phasellus vitae laoreet mauris. Nullam at cursus odio. Suspendisse semper magna ve...",
      icon: Compass,
      href: "/services/digital-strategy",
    },
  ],
];

export function Services() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section
      id="services"
      className="relative w-full bg-[#0a0a0c] py-20 sm:py-28 text-white select-none"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#e9204f]">
            What We Do
          </span>
          <h2 className="mt-2 text-4xl sm:text-5xl lg:text-[54px] font-black tracking-tight text-white">
            Our Services
          </h2>
          {/* Accent Pink Bar */}
          <div className="mt-3.5 h-[3px] w-12 rounded-full bg-[#e9204f]" />
        </div>

        {/* Services Cards Slider */}
        <div className="mt-14 sm:mt-16">
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 transition-opacity duration-500 ease-in-out">
            {SLIDES_DATA[activeSlide].map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="group relative flex flex-col items-center justify-between rounded-2xl bg-[#141416] p-8 sm:p-10 text-center transition-all duration-300 ease-out hover:-translate-y-1.5 hover:bg-[#e9204f] hover:shadow-2xl hover:shadow-[#e9204f]/25 overflow-hidden min-h-[390px]"
                >
                  {/* Outlined Watermark Number in Bottom-Right Corner */}
                  <span
                    className="pointer-events-none absolute -bottom-3 right-5 select-none font-black text-7xl sm:text-8xl leading-none text-transparent transition-all duration-300"
                    style={{
                      WebkitTextStroke: "1px rgba(255, 255, 255, 0.08)",
                    }}
                  >
                    {service.number}
                  </span>

                  {/* Content Container */}
                  <div className="flex flex-col items-center w-full z-10">
                    {/* Icon */}
                    <div className="flex items-center justify-center text-[#e9204f] transition-colors duration-300 group-hover:text-white">
                      <Icon size={46} strokeWidth={1.4} />
                    </div>

                    {/* Title */}
                    <h3 className="mt-6 text-xl sm:text-2xl font-bold tracking-tight text-white">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-4 text-xs sm:text-sm leading-relaxed text-neutral-400 transition-colors duration-300 group-hover:text-white/90">
                      {service.description}
                    </p>
                  </div>

                  {/* Link Arrow (Reveals on Hover) */}
                  <div className="mt-6 z-10 flex items-center justify-center min-h-[36px]">
                    <Link
                      href={service.href}
                      aria-label={`Learn more about ${service.title}`}
                      className="flex h-9 w-9 items-center justify-center text-transparent transition-all duration-300 group-hover:text-white group-hover:translate-x-1"
                    >
                      <ArrowRight size={22} strokeWidth={2.2} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="mt-12 flex items-center justify-center gap-2">
          {SLIDES_DATA.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveSlide(idx)}
              aria-label={`Switch to Services slide ${idx + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                activeSlide === idx
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
