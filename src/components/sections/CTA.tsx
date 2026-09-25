"use client";

import { Phone, Send } from "lucide-react";
import { phoneNumber } from "@/data/site";

export function CTA() {
  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden select-none"
    >
      {/* Fixed Parallax Background */}
      <div
        className="relative flex min-h-[460px] sm:min-h-[520px] lg:min-h-[580px] w-full items-center justify-center bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1920&q=80')`,
        }}
      >
        {/* Grayscale & Dark Ambient Tint */}
        <div className="absolute inset-0 bg-black/60 backdrop-grayscale contrast-125" />

        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-center px-6 text-center">
          {/* Eyebrow Subtitle */}
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#e9204f]">
            We develop digital future
          </span>

          {/* Heading: Outline "Let's" + Solid "Talk?" */}
          <h2 className="mt-3 flex items-center justify-center gap-2 text-5xl sm:text-6xl lg:text-[76px] font-black tracking-tight leading-none">
            <span
              className="text-transparent font-bold"
              style={{
                WebkitTextStroke: "1.2px rgba(255, 255, 255, 0.8)",
              }}
            >
              Let&apos;s
            </span>
            <span className="text-white">Talk?</span>
          </h2>

          {/* Action Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {/* Phone Button */}
            <a
              href={`tel:${phoneNumber.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#e9204f] px-8 py-3.5 text-xs sm:text-sm font-bold tracking-wider text-white shadow-lg transition-all duration-300 hover:bg-[#d01742] hover:scale-105 active:scale-95"
            >
              <Phone size={15} fill="currentColor" />
              <span>{phoneNumber}</span>
            </a>

            {/* Make an Enquiry Button */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-8 py-3.5 text-xs sm:text-sm font-bold tracking-wider text-neutral-900 shadow-lg transition-all duration-300 hover:bg-neutral-100 hover:scale-105 active:scale-95"
            >
              <Send size={15} className="-rotate-12" fill="currentColor" />
              <span>Make an enquiry</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
