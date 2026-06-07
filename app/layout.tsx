import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TontineBénin — Digitaliser l'épargne, inclure tous les Béninois",
  description:
    "TontineBénin : plateforme fintech qui digitalise les tontines au Bénin via Mobile Money, USSD et collecteurs terrain. Épargne sécurisée, score de crédit, accès au micro-crédit.",
  keywords: [
    "tontine",
    "Bénin",
    "fintech",
    "Mobile Money",
    "épargne",
    "micro-crédit",
    "inclusion financière",
    "USSD",
  ],
  authors: [{ name: "TontineBénin" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: "TontineBénin — Digitaliser l'épargne au Bénin",
    description:
      "Plateforme fintech hybride : tontines digitalisées, Mobile Money, USSD, score de crédit. Inclure les Béninois exclus du crédit bancaire.",
    siteName: "TontineBénin",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={poppins.variable}>
      <body>{children}</body>
    </html>
  );
}
