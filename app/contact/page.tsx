import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PageHero } from "@/components/sections";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — TontineBénin",
  description:
    "Contactez l'équipe TontineBénin via le formulaire, par email ou WhatsApp. Disponibles pour une démonstration à Parakou, Bénin.",
};

const reasons = [
  { ic: "🖥️", t: "Une démonstration", d: "Voir la plateforme et l'app en conditions réelles." },
  { ic: "📈", t: "Investir / financer", d: "Échanger sur le projet, le modèle et la levée." },
  { ic: "🤝", t: "Un partenariat", d: "IMF, opérateurs, programmes d'inclusion financière." },
];

const coords = [
  { ic: "✉️", t: "Email", v: "sodjinoucarrache457@gmail.com", href: "mailto:sodjinoucarrache457@gmail.com" },
  { ic: "💬", t: "WhatsApp", v: "+229 0141193597", href: "https://wa.me/2290141193597" },
  { ic: "📍", t: "Localisation", v: "Parakou, Banikanni — Bénin", href: undefined },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <PageHero
        title="Parlons-en"
        sub="Vous évaluez, accompagnez ou souhaitez une démonstration ? Écrivez-nous, l'équipe répond rapidement."
      />

      {/* Raisons de contact */}
      <section className="pt-16">
        <div className="max-w-container mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((r) => (
            <div key={r.t} className="bg-white border border-gray-200 rounded-2xl p-6 text-center">
              <div className="w-[52px] h-[52px] mx-auto grid place-items-center text-[26px] bg-primary-light rounded-[14px] mb-3">{r.ic}</div>
              <h3 className="font-semibold mb-1">{r.t}</h3>
              <p className="text-soft text-sm">{r.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Formulaire + coordonnées */}
      <section className="py-16">
        <div className="max-w-container mx-auto px-5 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 items-start">
          {/* Formulaire */}
          <div className="bg-white border border-gray-200 rounded-2xl p-7 md:p-9 shadow-card">
            <h2 className="text-2xl font-bold mb-1">Envoyez-nous un message</h2>
            <p className="text-soft mb-6">Remplissez le formulaire, nous revenons vers vous au plus vite.</p>
            <ContactForm />
          </div>

          {/* Colonne infos */}
          <div className="space-y-4">
            {coords.map((c) => (
              <div key={c.t} className="bg-white border border-gray-200 rounded-2xl p-5 flex gap-4 items-start transition-all hover:-translate-y-0.5 hover:shadow-card">
                <div className="shrink-0 w-12 h-12 grid place-items-center text-2xl bg-primary-light rounded-xl">{c.ic}</div>
                <div className="min-w-0">
                  <h4 className="font-semibold mb-0.5">{c.t}</h4>
                  {c.href ? (
                    <a href={c.href} target="_blank" rel="noopener noreferrer" className="text-primary font-medium break-words hover:underline">{c.v}</a>
                  ) : (
                    <p className="text-soft">{c.v}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Disponibilité */}
            <div className="bg-primary-dark text-white rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
                </span>
                <span className="font-semibold">Équipe disponible</span>
              </div>
              <p className="text-white/80 text-sm">Réponse généralement sous 24h. Disponibles pour une démonstration en ligne ou à Parakou.</p>
            </div>

            <a href="https://wa.me/2290141193597" target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full justify-center text-[16px] py-3.5">
              💬 Discuter sur WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Carte */}
      <section className="pb-20">
        <div className="max-w-container mx-auto px-5">
          <h2 className="text-2xl font-bold text-center mb-2">Où nous trouver</h2>
          <p className="text-soft text-center mb-8">Parakou, capitale du nord Bénin — notre point de départ.</p>
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-card">
            <iframe
              title="Localisation TontineBénin — Parakou, Bénin"
              src="https://www.google.com/maps?q=Parakou,B%C3%A9nin&output=embed"
              className="w-full h-[360px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
