"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { slides } from "@/data/site";

const EXTRA = [
  { outlineText: "Digital", solidText: "Growth", align: "center", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80" },
  { outlineText: "AI &", solidText: "Automation", align: "left", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80" },
  { outlineText: "SaaS", solidText: "Products", align: "right", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80" },
];
const SLIDES = slides.map((s, i) => ({ id: i + 1, ...s, ...EXTRA[i] }));

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
      className="relative flex min-h-[calc(100dvh-80px)] py-14 w-full items-center justify-center overflow-hidden bg-[#0d0d0f] text-white"
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
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-12 lg:px-20 pb-12">
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

          {/* Headline, description, highlight */}
          <p className="mt-4 max-w-2xl text-base sm:text-xl font-semibold tracking-tight text-white">
            {slide.title}
          </p>
          <p className="mt-3 max-w-xl text-xs sm:text-sm md:text-base font-normal leading-relaxed text-white/70">
            {slide.text}
          </p>
          <p className="mt-3 text-xs sm:text-sm font-semibold text-[#0066ff]">{slide.tags}</p>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row">
            <Link
              href={slide.a[1]}
              className="inline-flex items-center justify-center rounded-full bg-[#0066ff] px-7 sm:px-9 py-2.5 sm:py-3 text-xs sm:text-sm font-bold tracking-wider text-white shadow-lg transition-all duration-300 hover:bg-[#0052cc] hover:scale-105 active:scale-95"
            >
              {slide.a[0]}
            </Link>
            <Link
              href={slide.b[1]}
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 sm:px-9 py-2.5 sm:py-3 text-xs sm:text-sm font-bold tracking-wider text-white transition-all duration-300 hover:border-[#0066ff] hover:bg-[#0066ff] hover:scale-105 active:scale-95"
            >
              {slide.b[0]}
            </Link>
          </div>
        </div>
      </div>

      {/* Dots & Line: Strictly Fixed in the Center Bottom Across All Slides */}
      <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-auto">
        <div className="flex items-center gap-2">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                current === idx
                  ? "bg-[#0066ff] scale-110"
                  : "bg-white/80 hover:bg-white"
              }`}
            />
          ))}
        </div>
        <div className="mt-2 h-4 sm:h-5 w-[2px] bg-[#0066ff]" />
      </div>
    </section>
  );
}
