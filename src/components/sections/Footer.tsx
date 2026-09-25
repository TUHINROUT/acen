"use client";

import Link from "next/link";
import { Send, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-[#0d0d0f] pt-16 sm:pt-20 pb-10 text-white select-none">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 pb-14 sm:pb-16">
          {/* Column 1: Brand & Socials */}
          <div className="flex flex-col items-start">
            <h2 className="text-3xl font-black tracking-tight text-white">
              Acens<span className="text-[#e9204f]">.</span>
            </h2>
            <p className="mt-4 max-w-xs text-xs sm:text-sm leading-relaxed text-neutral-400">
              Lorem amacus suscipit oremen miss theousan magnaz donec miss the
              dranaris convais nisan.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3">
              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#161619] text-white/80 transition-all duration-300 hover:border-[#e9204f] hover:text-[#e9204f]"
              >
                <svg
                  className="h-4 w-4 fill-none stroke-currentColor stroke-2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="#"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#161619] text-white/80 transition-all duration-300 hover:border-[#e9204f] hover:text-[#e9204f]"
              >
                <svg className="h-4 w-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="#"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#161619] text-white/80 transition-all duration-300 hover:border-[#e9204f] hover:text-[#e9204f]"
              >
                <svg className="h-4 w-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-bold tracking-tight text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5 text-xs sm:text-sm">
              {["Home", "Services", "Works", "About", "Blog"].map((label) => (
                <li key={label} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#e9204f]" />
                  <Link
                    href={`#${label.toLowerCase()}`}
                    className="text-neutral-400 transition-colors duration-300 hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-base sm:text-lg font-bold tracking-tight text-white">
              Contact Info
            </h3>
            <div className="mt-4 space-y-3 text-xs sm:text-sm text-neutral-400">
              <p className="leading-relaxed">
                0665 Broadway, New York
                <br />
                10001 NY / USA
              </p>
              <p className="text-base sm:text-lg font-bold text-[#e9204f]">
                800 123 4567
              </p>
              <p>
                <a
                  href="mailto:hello@yourmail.com"
                  className="text-neutral-300 underline decoration-[#e9204f] underline-offset-4 transition-colors hover:text-white"
                >
                  hello@yourmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Column 4: Newsletter Subscribe */}
          <div>
            <h3 className="text-base sm:text-lg font-bold tracking-tight text-white">
              Subscribe
            </h3>
            <p className="mt-4 text-xs sm:text-sm leading-relaxed text-neutral-400">
              Subscribe to our newsletter. Stay informed about technology news
              and events with our newsletter.
            </p>

            {/* Newsletter Pill Input */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-5 flex items-center rounded-full border border-neutral-700 bg-[#161619] p-1.5 pl-5 transition-all duration-300 focus-within:border-[#e9204f]"
            >
              <input
                type="email"
                required
                placeholder="Your email"
                className="w-full bg-transparent text-xs sm:text-sm text-white placeholder-neutral-500 outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#e9204f] transition-transform duration-300 hover:scale-105 active:scale-95"
              >
                <Send size={15} className="-rotate-12" fill="currentColor" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row text-xs text-neutral-400">
          <div className="flex flex-wrap items-center gap-6">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Legal notice
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of service
            </Link>
          </div>

          <p className="text-center sm:text-right">
            © 2026 All Rights Reserved, by{" "}
            <span className="text-white underline decoration-[#e9204f] underline-offset-4 font-medium">
              SHThemes
            </span>
          </p>
        </div>
      </div>

      {/* Floating Scroll to Top Button */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="fixed bottom-6 right-6 z-40 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-white/10 bg-[#161619]/90 text-[#e9204f] shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-[#e9204f] hover:bg-[#e9204f] hover:text-white active:scale-95"
      >
        <ArrowUp size={18} strokeWidth={2.4} />
      </button>
    </footer>
  );
}
