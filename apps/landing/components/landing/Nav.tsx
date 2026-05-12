"use client";

import { useEffect, useState } from "react";
import { Icons } from "./Icons";

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-ink-950/70 border-b hairline"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2.5 text-[15px] font-medium">
          <Icons.Logo size={22} />
          <span className="tracking-tight">let&apos;s chat</span>
          <span className="ml-1 hidden sm:inline rounded-md bg-white/5 px-1.5 py-0.5 text-[10px] font-mono uppercase tracking-wider text-ink-300">
            v2
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-[13.5px] text-ink-200">
          <a href="#bulk" className="hover:text-white transition-colors">
            Campaigns
          </a>
          <a href="#service" className="hover:text-white transition-colors">
            Automation
          </a>
          <a href="#reminder" className="hover:text-white transition-colors">
            Reminders
          </a>
          <a href="#portal" className="hover:text-white transition-colors">
            Admin
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Docs
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="#" className="hidden sm:inline-flex text-[13px] text-ink-200 hover:text-white px-3 py-1.5">
            Sign in
          </a>
          <a
            href="#cta"
            className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[13px] font-medium btn-accent transition"
          >
            Start free <Icons.Arrow size={13} stroke={2} />
          </a>
        </div>
      </div>
    </header>
  );
};
