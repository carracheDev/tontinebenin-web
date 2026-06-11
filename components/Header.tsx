"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/projet", label: "Le projet" },
  { href: "/application", label: "L'application" },
  { href: "/investisseurs", label: "Modèle & investisseurs" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      id="top"
      className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200"
    >
      <div className="max-w-container mx-auto px-5 flex items-center justify-between h-[68px]">
        <Link href="/" className="flex items-center gap-1" onClick={() => setOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-mark.png" alt="TontineBénin" className="h-14 w-auto" />
          <span className="text-[22px] font-extrabold tracking-tight text-ink">
            Tontine<span className="text-primary">Bénin</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-[15px] font-medium transition-colors ${
                isActive(l.href) ? "text-primary" : "text-ink hover:text-primary"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://wa.me/2290141193597"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary !px-4 !py-2 text-sm"
          >
            WhatsApp
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-2xl text-primary-dark"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-white border-b border-gray-200 shadow-card px-5 py-3 flex flex-col">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`py-3 border-b border-gray-100 ${
                isActive(l.href) ? "text-primary font-semibold" : "text-ink hover:text-primary"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://wa.me/2290141193597"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn btn-primary justify-center mt-3"
          >
            WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
