"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  category: string;
  image: string;
  href: string;
}

const BLOG_PAGES: BlogPost[][] = [
  // Slide 1
  [
    {
      id: 1,
      title: "What is innovation product design?",
      category: "Branding",
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
      href: "/blog/innovation-product-design",
    },
    {
      id: 2,
      title: "The Best Websites for Design Inspiration",
      category: "Website",
      image:
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
      href: "/blog/best-websites-inspiration",
    },
    {
      id: 3,
      title: "The Best 3 Dimensional Art",
      category: "Product",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
      href: "/blog/three-dimensional-art",
    },
  ],
  // Slide 2
  [
    {
      id: 4,
      title: "Top Digital Marketing Trends for 2026",
      category: "Agency",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      href: "/blog/marketing-trends",
    },
    {
      id: 5,
      title: "Creative Branding Strategies That Convert",
      category: "Creative",
      image:
        "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&w=800&q=80",
      href: "/blog/creative-branding",
    },
    {
      id: 6,
      title: "Mastering Minimalist Web Design Layouts",
      category: "UI / UX",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      href: "/blog/minimalist-layouts",
    },
  ],
];

export function Blog() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play feature (changes slide every 6s, pauses on hover)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % BLOG_PAGES.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section
      id="blog"
      className="relative w-full bg-[#0d0d0f] py-20 sm:py-24 text-white select-none"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section Heading Area */}
        <div className="flex flex-col items-center text-center">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#e9204f]">
            News & Blog
          </span>
          <h2 className="mt-1 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Latest News
          </h2>
          <div className="mt-2.5 h-[3px] w-12 rounded-full bg-[#e9204f]" />
        </div>

        {/* Blog Cards Grid */}
        <div
          className="mt-12 sm:mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {BLOG_PAGES[currentPage].map((post) => (
            <article
              key={post.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-[#141416] p-6 pb-7 transition-all duration-300 hover:shadow-2xl hover:shadow-black/60 border border-white/5"
            >
              {/* Image Container with Zoom-Out Effect */}
              <div className="relative aspect-[16/11] w-full overflow-hidden rounded-xl bg-black">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover filter grayscale contrast-125 brightness-95 scale-110 transition-transform duration-700 ease-out group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
              </div>

              {/* Bottom Metadata & Title Block */}
              <div className="mt-5 flex flex-col items-center text-center">
                {/* Category in hot-pink */}
                <span className="text-xs font-semibold tracking-wide text-[#e9204f]">
                  {post.category}
                </span>

                {/* Article Title */}
                <h3 className="mt-2 text-base sm:text-lg font-bold tracking-tight text-white leading-snug">
                  <Link href={post.href} className="hover:text-white/90">
                    {post.title}
                  </Link>
                </h3>

                {/* Hover Reveal Red Arrow (Slides in smoothly on hover) */}
                <div className="mt-3.5 flex h-5 items-center justify-center">
                  <Link
                    href={post.href}
                    aria-label={`Read ${post.title}`}
                    className="text-[#e9204f] opacity-0 -translate-x-2 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0"
                  >
                    <ArrowRight size={20} strokeWidth={2.4} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="mt-12 flex items-center justify-center gap-2">
          {BLOG_PAGES.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentPage(idx)}
              aria-label={`Go to blog page ${idx + 1}`}
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
