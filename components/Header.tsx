"use client";

import { useState } from "react";

const links = [
  { href: "#fonctionnalites", label: "Fonctionnalités" },
  { href: "#comment", label: "Comment ça marche" },
  { href: "#securite", label: "Sécurité" },
  { href: "#equipe", label: "Équipe" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header" id="top">
      <div className="container nav">
        <a href="#top" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">T</span>
          <span className="brand-name">
            Tontine<strong>Bénin</strong>
          </span>
        </a>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            href="#telecharger"
            className="btn btn-primary btn-sm"
            onClick={() => setOpen(false)}
          >
            Télécharger l&apos;app
          </a>
        </nav>

        <button
          className="nav-toggle"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}
