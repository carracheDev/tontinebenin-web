import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PageHero } from "@/components/sections";

export const metadata: Metadata = {
  title: "Mentions légales — TontineBénin",
  description: "Mentions légales du site TontineBénin : éditeur, hébergement et propriété intellectuelle.",
};

export default function MentionsLegalesPage() {
  return (
    <>
      <Header />
      <PageHero title="Mentions légales" sub="Informations légales relatives au site TontineBénin." />

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-5 space-y-8">
          <div>
            <h2 className="text-xl font-bold mb-3">Éditeur du site</h2>
            <p className="text-soft leading-relaxed">
              Le site <strong className="text-ink">TontineBénin</strong> est un projet porté par son équipe fondatrice
              (SODJINOU J. Carrache, AÏHODONOU Hippolyte et GOUTIN Alphonsine), basée à Parakou, Bénin.
              Directeur de la publication : SODJINOU J. Carrache.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">Contact</h2>
            <p className="text-soft leading-relaxed">
              Email :{" "}
              <a href="mailto:sodjinoucarrache457@gmail.com" className="text-primary hover:underline">
                sodjinoucarrache457@gmail.com
              </a>
              <br />
              WhatsApp :{" "}
              <a href="https://wa.me/2290141193597" className="text-primary hover:underline">
                +229 0141193597
              </a>
              <br />
              Adresse : Parakou, 2ᵉ arrondissement, Banikanni — Bénin.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">Hébergement</h2>
            <p className="text-soft leading-relaxed">
              Le site est hébergé par <strong className="text-ink">Vercel Inc.</strong>, 440 N Barranca Ave #4133,
              Covina, CA 91723, États-Unis —{" "}
              <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                vercel.com
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">Propriété intellectuelle</h2>
            <p className="text-soft leading-relaxed">
              La marque « TontineBénin », le logo, les textes, visuels et éléments graphiques présents sur ce site sont
              la propriété de l&apos;équipe TontineBénin. Toute reproduction, représentation ou diffusion, totale ou
              partielle, sans autorisation préalable est interdite.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">Responsabilité</h2>
            <p className="text-soft leading-relaxed">
              Ce site est une vitrine de présentation d&apos;un projet en cours de développement. Les informations sont
              fournies à titre indicatif et peuvent évoluer. TontineBénin ne saurait être tenu responsable d&apos;une
              utilisation faite de ces informations.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
