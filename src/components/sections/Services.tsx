"use client";

import { useState } from "react";
import Link from "next/link";
import { whatWeDo } from "@/data/site";
import { Globe, Search, Share2, Target, MessageCircle, Bot, ArrowRight } from "lucide-react";

const ICONS = [Globe, Search, Share2, Target, MessageCircle, Bot];
const IDS = ["website", "seo", "social", "ads", "whatsapp", "ai"];
const ALL = whatWeDo.map((s, i) => ({ id: i + 1, number: String(i + 1), title: s.title, description: s.text, icon: ICONS[i], href: `/services#${IDS[i]}` }));
const SLIDES_DATA = [ALL.slice(0, 3), ALL.slice(3, 6)];

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
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#0066ff]">
            What We Do
          </span>
          <h2 className="mt-2 max-w-3xl text-3xl sm:text-4xl lg:text-[46px] font-black leading-tight tracking-tight text-white">
            Digital Solutions Built for Business Growth
          </h2>
          {/* Accent Blue Bar */}
          <div className="mt-3.5 h-[3px] w-12 rounded-full bg-[#0066ff]" />
        </div>

        {/* Services Cards Slider */}
        <div className="mt-14 sm:mt-16">
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 transition-opacity duration-500 ease-in-out">
            {SLIDES_DATA[activeSlide].map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="group relative flex flex-col items-center justify-between rounded-2xl bg-[#141416] p-8 sm:p-10 text-center transition-all duration-300 ease-out hover:-translate-y-1.5 hover:bg-[#0066ff] hover:shadow-2xl hover:shadow-[#0066ff]/25 overflow-hidden min-h-[390px]"
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
                    <div className="flex items-center justify-center text-[#0066ff] transition-colors duration-300 group-hover:text-white">
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
                  ? "bg-[#0066ff] scale-110"
                  : "bg-white/80 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
