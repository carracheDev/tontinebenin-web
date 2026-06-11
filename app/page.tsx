import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Hero, Apercu, MarcheStats, ContactCTA } from "@/components/sections";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Apercu />
      <MarcheStats />
      <ContactCTA />
      <Footer />
    </>
  );
}
