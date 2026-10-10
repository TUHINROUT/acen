"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { contact, nav } from "@/data/site";
import { Logo } from "@/components/ui/Logo";

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
            <Logo size="text-3xl" tagline />
            <p className="mt-4 max-w-xs text-xs sm:text-sm leading-relaxed text-neutral-400">
              Digital solutions, intelligent automation, and business software built to solve real problems.
            </p>

            </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-bold tracking-tight text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5 text-xs sm:text-sm">
              {nav.map(({ label, href }) => (
                <li key={label} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0066ff]" />
                  <Link
                    href={href}
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
              <p className="text-base sm:text-lg font-bold text-[#0066ff]">Technology. Automation. Growth.</p>
              <p>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-neutral-300 underline decoration-[#0066ff] underline-offset-4 transition-colors hover:text-white"
                >
                  {contact.email}
                </a>
              </p>
            </div>
          </div>

          {/* Column 4: Services */}
          <div>
            <h3 className="text-base sm:text-lg font-bold tracking-tight text-white">Services</h3>
            <ul className="mt-4 space-y-2.5 text-xs sm:text-sm">
              {nav[1].sub!.map(([n, h]) => (
                <li key={h} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0066ff]" />
                  <Link href={h} className="text-neutral-400 transition-colors duration-300 hover:text-white">{n}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row text-xs text-neutral-400">
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>

          <p className="text-center sm:text-right">
            © 2026 All Rights Reserved,{" "}
            <span className="text-white underline decoration-[#0066ff] underline-offset-4 font-medium">
              Upvik Technologies
            </span>
          </p>
        </div>
      </div>

      {/* Floating Scroll to Top Button */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="fixed bottom-6 right-6 z-40 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-white/10 bg-[#161619]/90 text-[#0066ff] shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-[#0066ff] hover:bg-[#0066ff] hover:text-white active:scale-95"
      >
        <ArrowUp size={18} strokeWidth={2.4} />
      </button>
    </footer>
  );
}
