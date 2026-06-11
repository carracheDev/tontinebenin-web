import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PageHero } from "@/components/sections";

export const metadata: Metadata = {
  title: "Politique de confidentialité — TontineBénin",
  description:
    "Comment TontineBénin collecte et protège les données personnelles transmises via son site vitrine.",
};

export default function ConfidentialitePage() {
  return (
    <>
      <Header />
      <PageHero
        title="Politique de confidentialité"
        sub="La protection de vos données est une priorité. Voici comment nous les traitons."
      />

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-5 space-y-8">
          <div>
            <h2 className="text-xl font-bold mb-3">Préambule</h2>
            <p className="text-soft leading-relaxed">
              TontineBénin accorde une grande importance à la protection des données personnelles et inscrit sa démarche
              dans le respect du cadre béninois (Autorité de Protection des Données Personnelles — APDP). La présente
              politique concerne le <strong className="text-ink">site vitrine</strong> ; l&apos;application mobile fait
              l&apos;objet de conditions distinctes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">Données collectées</h2>
            <p className="text-soft leading-relaxed">
              Le site ne crée aucun compte utilisateur. Les seules données collectées le sont via le{" "}
              <strong className="text-ink">formulaire de contact</strong> : nom, adresse email, organisation ou téléphone
              (facultatif), sujet et message. Vous nous les transmettez volontairement.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">Finalité</h2>
            <p className="text-soft leading-relaxed">
              Ces informations sont utilisées <strong className="text-ink">uniquement pour répondre à votre demande</strong>
              . Elles ne font l&apos;objet d&apos;aucune revente ni d&apos;aucun usage commercial.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">Sous-traitant</h2>
            <p className="text-soft leading-relaxed">
              L&apos;envoi du formulaire est traité par le service <strong className="text-ink">Formspree</strong>, qui
              nous transmet votre message par email. La carte de localisation est fournie par Google Maps, susceptible de
              déposer des cookies tiers.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">Conservation</h2>
            <p className="text-soft leading-relaxed">
              Les messages sont conservés le temps nécessaire au traitement de votre demande et à un éventuel suivi.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">Vos droits</h2>
            <p className="text-soft leading-relaxed">
              Conformément à la réglementation, vous disposez d&apos;un droit d&apos;accès, de rectification et de
              suppression de vos données. Pour l&apos;exercer, écrivez-nous à{" "}
              <a href="mailto:sodjinoucarrache457@gmail.com" className="text-primary hover:underline">
                sodjinoucarrache457@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
