import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  PageHero,
  ContexteTontine,
  ProblemeSolution,
  CommentCaMarche,
  PourQui,
  ImpactODD,
  Equipe,
  ContactCTA,
} from "@/components/sections";

export const metadata: Metadata = {
  title: "Le projet — TontineBénin",
  description:
    "Comprendre la tontine et le contexte béninois, le problème de l'épargne informelle, notre solution, l'impact social (ODD) et l'équipe.",
};

export default function ProjetPage() {
  return (
    <>
      <Header />
      <PageHero
        title="Le projet"
        sub="Pourquoi TontineBénin existe : digitaliser l'épargne pour inclure les Béninois oubliés du système financier."
      />
      <ContexteTontine />
      <ProblemeSolution alt />
      <CommentCaMarche />
      <PourQui alt />
      <ImpactODD />
      <Equipe alt />
      <ContactCTA />
      <Footer />
    </>
  );
}
