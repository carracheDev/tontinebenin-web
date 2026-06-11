import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  PageHero,
  AppGallery,
  TypesTontines,
  Fonctionnalites,
  ScoreCredit,
  Securite,
  ContactCTA,
} from "@/components/sections";

export const metadata: Metadata = {
  title: "L'application — TontineBénin",
  description:
    "Fonctionnalités, types de tontines, score de crédit, captures réelles et sécurité de l'application TontineBénin.",
};

export default function ApplicationPage() {
  return (
    <>
      <Header />
      <PageHero
        title="L'application"
        sub="Une plateforme hybride déjà fonctionnelle : app, USSD et collecteurs terrain — pensée pour le Bénin."
      />
      <AppGallery />
      <TypesTontines alt />
      <Fonctionnalites />
      <ScoreCredit alt />
      <Securite />
      <ContactCTA />
      <Footer />
    </>
  );
}
