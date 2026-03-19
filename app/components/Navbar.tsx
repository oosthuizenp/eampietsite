"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-8 py-5 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
      <Link href="/" className="text-lg font-bold tracking-tight text-white hover:text-violet-400 transition-colors">
        piet.dev
      </Link>
      <div className="flex items-center gap-1">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`px-4 py-1.5 rounded-full text-sm transition-colors ${
              pathname === href
                ? "bg-zinc-800 text-white font-medium"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            {label}
          </Link>
        ))}
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 px-4 py-1.5 rounded-full border border-zinc-700 text-sm text-zinc-400 hover:text-white hover:border-zinc-500 transition-colors"
        >
          GitHub ↗
        </a>
      </div>
    </nav>
  );
}
