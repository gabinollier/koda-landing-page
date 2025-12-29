import type { Metadata } from "next";
import { Geist, Geist_Mono, Gasoek_One } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const titleFont = Gasoek_One({
  variable: "--font-title",
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Koda - Tous vos outils d'écriture de paroles, réunis.",
  description: "Koda unifie en une seule interface l'éditeur de texte, le dictionnaire des rimes, le métronome, le lecteur audio et le dictaphone. Professionnel mais léger. Local-first avec synchronisation automatique.",
  keywords: ["écriture de paroles", "songwriting", "lyrics", "rimes", "métronome", "dictaphone", "éditeur"],
  authors: [{ name: "Koda" }],
  openGraph: {
    title: "Koda - Tous vos outils d'écriture de paroles, réunis.",
    description: "Koda unifie en une seule interface l'éditeur de texte, le dictionnaire des rimes, le métronome, le lecteur audio et le dictaphone.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${titleFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
