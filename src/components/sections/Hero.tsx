"use client";

import { useState, useEffect } from "react";

const SLIDES = [
  {
    id: 1,
    outlineText: "Digital",
    solidText: "Agency",
    description:
      "Agency viverra tristique usto duis vitae diam neque nivamus aestan.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80",
    align: "center",
  },
  {
    id: 2,
    outlineText: "Grow",
    solidText: "Business",
    description:
      "Agency viverra tristique usto duis vitae diam neque nivamus aestan.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80",
    align: "left",
  },
  {
    id: 3,
    outlineText: "Creative",
    solidText: "Solutions",
    description:
      "Agency viverra tristique usto duis vitae diam neque nivamus aestan.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80",
    align: "right",
  },
];

export function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[current];

  return (
    <section
      id="home"
      className="relative flex h-[calc(100dvh-80px)] w-full items-center justify-center overflow-hidden bg-[#0d0d0f] text-white"
    >
      {/* Background Slides */}
      {SLIDES.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <img
            src={item.image}
            alt={item.solidText}
            className="h-full w-full object-cover filter grayscale contrast-110 brightness-[0.7]"
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>
      ))}

      {/* Main Slide Content Area */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-12 lg:px-20 pb-10">
        <div
          className={`flex flex-col transition-all duration-500 ease-out ${
            slide.align === "left"
              ? "items-start text-left"
              : slide.align === "right"
                ? "ml-auto items-end text-right"
                : "mx-auto items-center text-center"
          }`}
        >
          {/* Double Layer Heading */}
          <div className="select-none flex flex-col leading-none">
            {/* Outline Top Word */}
            <span
              className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-[104px] font-bold tracking-tight text-transparent block leading-tight pb-0"
              style={{
                WebkitTextStroke: "1px rgba(255, 255, 255, 0.75)",
              }}
            >
              {slide.outlineText}
            </span>

            {/* Solid Bottom Word with Balanced Overlap */}
            <span className="-mt-2 xs:-mt-3 sm:-mt-5 md:-mt-6 lg:-mt-7 text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-[104px] font-black tracking-tight text-white block leading-tight">
              {slide.solidText}
            </span>
          </div>

          {/* Subtitle */}
          <p className="mt-3 sm:mt-4 max-w-xs sm:max-w-md text-xs sm:text-sm md:text-base font-normal tracking-wide text-white/70">
            {slide.description}
          </p>

          {/* CTA Button */}
          <div className="mt-5 sm:mt-6">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-[#e9204f] px-7 sm:px-9 py-2.5 sm:py-3 text-xs sm:text-sm font-bold tracking-wider text-white shadow-lg transition-all duration-300 hover:bg-[#d01742] hover:scale-105 active:scale-95"
            >
              Getting Started
            </a>
          </div>
        </div>
      </div>

      {/* Dots & Line: Strictly Fixed in the Center Bottom Across All Slides */}
      <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-auto">
        <div className="flex items-center gap-2">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                current === idx
                  ? "bg-[#e9204f] scale-110"
                  : "bg-white/80 hover:bg-white"
              }`}
            />
          ))}
        </div>
        <div className="mt-2 h-4 sm:h-5 w-[2px] bg-[#e9204f]" />
      </div>
    </section>
  );
}
