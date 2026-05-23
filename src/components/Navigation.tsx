"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/framework", label: "The Framework" },
    { href: "/opus-builds", label: "Opus Builds" },
    { href: "/tools", label: "Tools" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/about", label: "Philosophy" },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-brand-canvas/80 backdrop-blur-md border-b border-brand-ink/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-medium tracking-tight hover:opacity-70 transition-opacity">
          Continuum
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                pathname === link.href ? "text-brand-action" : "hover:text-brand-action"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Link
          href="/contact"
          className="text-sm font-medium border border-brand-action/20 hover:border-brand-action bg-brand-action/5 hover:bg-brand-action/10 px-4 py-2 rounded-full transition-all text-brand-action"
        >
          Get in touch
        </Link>
      </div>
    </nav>
  );
}
