"use client";

import { useState, useEffect } from "react";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/site";
import { SectionHeading } from "@/components/ui/Eyebrow";

export function Testimonials() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const itemsPerPage = 2;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  // Keep the selected page valid if the testimonial list changes.
  useEffect(() => {
    if (totalPages === 0) {
      setCurrentPage(0);
    } else if (currentPage >= totalPages) {
      setCurrentPage(0);
    }
  }, [currentPage, totalPages]);

  // Automatically change slides.
  useEffect(() => {
    if (isPaused || totalPages <= 1) return;

    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused, totalPages]);

  const visibleTestimonials = testimonials.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage,
  );

  // Don't render the section when no testimonials exist.
  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section className="bg-bg-alt select-none py-24 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading eyebrow="What clients say" title="Testimonials" />

        {/* Testimonial carousel */}
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
                <Quote
                  className="text-accent"
                  size={28}
                  fill="currentColor"
                  aria-hidden="true"
                />

                <p className="mt-5 text-sm leading-relaxed text-muted">
                  {t.quote}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-3 border-t border-line/40 pt-4">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/15 font-display text-sm font-semibold text-accent"
                  aria-hidden="true"
                >
                  {t.name
                    .trim()
                    .split(/\s+/)
                    .map((part) => part[0])
                    .join("")
                    .toUpperCase()}
                </span>

                <div>
                  <p className="font-display text-sm font-semibold">{t.name}</p>

                  <p className="text-xs text-muted">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentPage(idx)}
                aria-label={`Go to testimonial page ${idx + 1}`}
                aria-current={currentPage === idx ? "true" : undefined}
                className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                  currentPage === idx
                    ? "scale-125 bg-accent"
                    : "bg-muted/40 hover:bg-muted"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
