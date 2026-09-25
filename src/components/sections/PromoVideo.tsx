"use client";

import { useState } from "react";
import { Play } from "lucide-react";

export function PromoVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative w-full overflow-hidden select-none">
      {/* Fixed Parallax Background */}
      <div
        className="relative flex min-h-[460px] sm:min-h-[520px] lg:min-h-[580px] w-full items-center justify-center bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80')`,
        }}
      >
        {/* Grayscale & Dark Ambient Tint */}
        <div className="absolute inset-0 bg-black/65 backdrop-grayscale contrast-125" />

        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-center px-6 text-center">
          {/* Eyebrow Subtitle */}
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#e9204f]">
            Our Agency Video
          </span>

          {/* Heading */}
          <h2 className="mt-2 text-4xl sm:text-5xl lg:text-[54px] font-black tracking-tight text-white">
            Promo Video
          </h2>

          {/* Circular Play Button */}
          <button
            type="button"
            onClick={() => setIsPlaying(true)}
            aria-label="Play promo video"
            className="group relative mt-8 sm:mt-10 flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-[#e9204f]/60 hover:bg-[#e9204f]/10"
          >
            {/* Ripple Pulse Effect */}
            <span className="absolute inset-0 rounded-full border border-white/20 animate-ping group-hover:border-[#e9204f]/50" />

            {/* Play Triangle Icon */}
            <Play
              size={28}
              className="ml-1 text-[#e9204f] transition-transform duration-300 group-hover:scale-110"
              fill="#e9204f"
            />
          </button>
        </div>
      </div>

      {/* Optional Video Modal Popup */}
      {isPlaying && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setIsPlaying(false)}
        >
          <div className="relative aspect-video w-full max-w-4xl overflow-hidden rounded-2xl bg-black">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Promo Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
