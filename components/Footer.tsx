import Link from "next/link";

const navLinks = [
  { href: "/projet", label: "Le projet" },
  { href: "/application", label: "L'application" },
  { href: "/investisseurs", label: "Modèle & investisseurs" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0b1f14] text-gray-300 pt-14 pb-7">
      <div className="max-w-container mx-auto px-5 grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-8 pb-8 border-b border-white/10">
        <div>
          <Link href="/" className="inline-flex items-center gap-1 mb-3.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-mark.png" alt="TontineBénin" className="h-14 w-auto" />
            <span className="text-[22px] font-extrabold tracking-tight text-white">
              Tontine<span className="text-primary">Bénin</span>
            </span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed">
            Plateforme fintech de digitalisation des tontines au Bénin.
            Démarrage à Parakou, ambition nationale.
          </p>
        </div>

        <div>
          <h5 className="text-white text-[15px] font-semibold mb-3.5">Navigation</h5>
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block text-gray-400 text-sm mb-2 hover:text-primary"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div>
          <h5 className="text-white text-[15px] font-semibold mb-3.5">Contact</h5>
          <p className="text-gray-400 text-sm mb-1.5">Parakou, 2ᵉ arrondissement, Banikanni</p>
          <a
            href="mailto:sodjinoucarrache457@gmail.com"
            className="block text-gray-400 text-sm mb-1.5 hover:text-primary"
          >
            sodjinoucarrache457@gmail.com
          </a>
          <a
            href="https://wa.me/2290141193597"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-gray-400 text-sm hover:text-primary"
          >
            WhatsApp : +229 0141193597
          </a>
        </div>
      </div>

      <div className="max-w-container mx-auto px-5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[13px] text-gray-400">
        <span>© {new Date().getFullYear()} TontineBénin — Tous droits réservés.</span>
        <span className="flex gap-4">
          <Link href="/mentions-legales" className="hover:text-primary">Mentions légales</Link>
          <Link href="/confidentialite" className="hover:text-primary">Confidentialité</Link>
        </span>
      </div>
    </footer>
  );
}
