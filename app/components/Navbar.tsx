"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-[#FAFAFA]/90 backdrop-blur-sm transition-all duration-200 ${
        scrolled ? "shadow-sm border-b border-[#E2E8F0]" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-xl text-[#0F172A] hover:text-[#0052FF] transition-colors duration-200"
        >
          piet.dev
        </Link>

        {/* Nav */}
        <nav aria-label="Primary navigation" className="flex items-center gap-1">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                pathname === href
                  ? "text-[#0052FF] bg-[#0052FF]/5 font-medium"
                  : "text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9]"
              }`}
            >
              {label}
            </Link>
          ))}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 px-4 py-2 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-[#0052FF] to-[#4D7CFF] shadow-sm hover:-translate-y-0.5 hover:shadow-accent transition-all duration-200"
          >
            GitHub ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
