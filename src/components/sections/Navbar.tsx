"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { navLinks, phoneNumber } from "@/data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-bg-alt/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="#home" className="font-display text-xl font-bold">
          Acens<span className="text-accent">.</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-text"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 text-accent">
            <Phone size={16} />
          </span>
          <div className="leading-tight">
            <p className="text-xs text-muted">Call anytime</p>
            <p className="font-display text-sm font-semibold">{phoneNumber}</p>
          </div>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="text-text lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-line px-5 pb-5 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-3 text-sm text-muted hover:bg-card hover:text-text"
            >
              {link.label}
            </Link>
          ))}
          <p className="px-2 pt-2 font-display text-sm font-semibold text-accent">
            {phoneNumber}
          </p>
        </nav>
      )}
    </header>
  );
}
