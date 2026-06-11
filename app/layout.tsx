import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const SITE_URL = "https://tontinebenin-web.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "TontineBénin — Digitaliser l'épargne, inclure tous les Béninois",
  description:
    "TontineBénin : plateforme fintech qui digitalise les tontines au Bénin via Mobile Money, USSD et collecteurs terrain. Épargne sécurisée, score de crédit, accès au micro-crédit.",
  applicationName: "TontineBénin",
  keywords: [
    "tontine",
    "tontine Bénin",
    "tontine digitale",
    "fintech Bénin",
    "Mobile Money Bénin",
    "MTN MoMo",
    "Moov Money",
    "épargne",
    "micro-crédit",
    "inclusion financière",
    "USSD",
    "score de crédit",
    "Parakou",
  ],
  authors: [{ name: "TontineBénin" }],
  creator: "TontineBénin",
  publisher: "TontineBénin",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    title: "TontineBénin — Digitaliser l'épargne au Bénin",
    description:
      "Plateforme fintech hybride : tontines digitalisées, Mobile Money, USSD, score de crédit. Inclure les Béninois exclus du crédit bancaire.",
    siteName: "TontineBénin",
  },
  twitter: {
    card: "summary_large_image",
    title: "TontineBénin — Digitaliser l'épargne au Bénin",
    description:
      "Plateforme fintech hybride : tontines digitalisées, Mobile Money, USSD, score de crédit, micro-crédit. Pour inclure tous les Béninois.",
  },
  category: "finance",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={poppins.variable}>
      <body>
        {children}
        <WhatsAppButton />
        <ScrollReveal />
      </body>
    </html>
  );
}
