"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Mail, ChevronDown } from "lucide-react";
import { contact, nav } from "@/data/site";
import { Logo } from "@/components/ui/Logo";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const active = (h: string) => (h === "/" ? path === "/" : path.startsWith(h));

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-bg-alt/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" onClick={() => setOpen(false)} aria-label="Upvik home">
          <Logo size="text-2xl" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((link) => (
            <div key={link.label} className="group relative">
              <Link
                href={link.href}
                className={`flex items-center gap-1 py-2 text-sm transition-colors hover:text-text ${active(link.href) ? "text-accent" : "text-muted"}`}
              >
                {link.label}
                {link.sub && <ChevronDown size={14} />}
              </Link>
              {link.sub && (
                <div className="invisible absolute left-0 top-full min-w-56 rounded-xl border border-line bg-bg-alt p-2 opacity-0 shadow-xl transition-all group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  {link.sub.map(([n, h]) => (
                    <Link key={h} href={h} className="block rounded-lg px-3 py-2 text-sm text-muted hover:bg-accent/15 hover:text-text">{n}</Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <a href={`mailto:${contact.email}`} className="hidden items-center gap-3 lg:flex">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 text-accent">
            <Mail size={16} />
          </span>
          <div className="leading-tight">
            <p className="text-xs text-muted">Mail us anytime</p>
            <p className="font-display text-sm font-semibold">{contact.email}</p>
          </div>
        </a>

        <button onClick={() => setOpen((v) => !v)} className="text-text lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="max-h-[calc(100dvh-72px)] overflow-y-auto border-t border-line px-5 pb-5 lg:hidden">
          {nav.map((link) => (
            <div key={link.label} className="border-b border-line/50 py-1">
              <Link href={link.href} onClick={() => setOpen(false)} className={`block rounded-lg px-2 py-3 text-sm hover:bg-card hover:text-text ${active(link.href) ? "text-accent" : "text-muted"}`}>
                {link.label}
              </Link>
              {link.sub && (
                <div className="mb-1 ml-4 border-l border-line pl-3">
                  {link.sub.map(([n, h]) => (
                    <Link key={h} href={h} onClick={() => setOpen(false)} className="block py-2 text-xs text-muted hover:text-text">{n}</Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a href={`mailto:${contact.email}`} className="block px-2 pt-3 font-display text-sm font-semibold text-accent">{contact.email}</a>
        </nav>
      )}
    </header>
  );
}
