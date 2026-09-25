"use client";

import { useState, useEffect } from "react";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/site";
import { SectionHeading } from "@/components/ui/Eyebrow";

export function Testimonials() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Group testimonials in pairs of 2 per slide
  const itemsPerPage = 2;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  // Auto-play interval
  useEffect(() => {
    if (isPaused || totalPages <= 1) return;

    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused, totalPages]);

  // Current visible cards
  const visibleTestimonials = testimonials.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage,
  );

  return (
    <section className="bg-bg-alt py-24 sm:py-28 select-none">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading eyebrow="What clients say" title="Testimonials" />

        {/* Carousel Container */}
        <div
          className="mt-16 grid gap-6 sm:grid-cols-2"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {visibleTestimonials.map((t) => (
            <div
              key={t.id}
              className="flex flex-col justify-between rounded-2xl border border-line bg-card p-8 transition-all duration-300 hover:border-accent/40"
            >
              <div>
                <Quote className="text-accent" size={28} fill="currentColor" />
                <p className="mt-5 text-sm leading-relaxed text-muted">
                  {t.quote}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-3 border-t border-line/40 pt-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 font-display text-sm font-semibold text-accent">
                  {t.name
                    .split(" ")
                    .map((n: string) => n[0])
                    .join("")}
                </span>
                <div>
                  <p className="font-display text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Working Clickable Pagination Dots */}
        <div className="mt-12 flex items-center justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentPage(idx)}
              aria-label={`Go to testimonial page ${idx + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                currentPage === idx
                  ? "bg-accent scale-125"
                  : "bg-muted/40 hover:bg-muted"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
