import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  PageHero,
  ModeleEco,
  Avantage,
  MarcheStats,
  Deploiement,
  Partenaires,
  Roadmap,
  FaqInvestisseurs,
  ContactCTA,
} from "@/components/sections";

export const metadata: Metadata = {
  title: "Modèle & investisseurs — TontineBénin",
  description:
    "Modèle économique, avantage concurrentiel, marché, stratégie de déploiement, partenaires, feuille de route, utilisation des fonds et FAQ investisseurs de TontineBénin.",
};

export default function InvestisseursPage() {
  return (
    <>
      <Header />
      <PageHero
        title="Modèle & investisseurs"
        sub="Un modèle simple, un marché immense et un produit prêt à déployer. Voici comment TontineBénin crée de la valeur."
      />
      <ModeleEco />
      <Avantage alt />
      <MarcheStats />
      <Deploiement />
      <Partenaires alt />
      <Roadmap />
      <FaqInvestisseurs alt />
      <ContactCTA />
      <Footer />
    </>
  );
}
