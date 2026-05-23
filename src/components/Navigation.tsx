"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/framework", label: "The Framework" },
    { href: "/opus-builds", label: "Opus Builds" },
    { href: "/tools", label: "Tools" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/about", label: "Philosophy" },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-brand-canvas/90 backdrop-blur-md border-b border-brand-ink/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" onClick={() => setIsOpen(false)} className="text-xl font-medium tracking-tight hover:opacity-70 transition-opacity">
          Continuum
        </Link>

        {/* Desktop Links */}
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
          <Link
            href="/contact"
            className="text-sm font-medium border border-brand-action/20 hover:border-brand-action bg-brand-action/5 hover:bg-brand-action/10 px-4 py-2 rounded-full transition-all text-brand-action"
          >
            Get in touch
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center gap-4">
          <Link
            href="/contact"
            className="text-sm font-medium border border-brand-action/20 hover:border-brand-action bg-brand-action/5 hover:bg-brand-action/10 px-4 py-1.5 rounded-full transition-all text-brand-action"
          >
            Contact
          </Link>
          <button onClick={() => setIsOpen(!isOpen)} className="text-brand-ink hover:text-brand-action transition-colors p-1">
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-canvas/95 backdrop-blur-lg border-b border-brand-ink/5 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 space-y-6">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium transition-colors ${
                    pathname === link.href ? "text-brand-action" : "text-brand-ink hover:text-brand-action"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
