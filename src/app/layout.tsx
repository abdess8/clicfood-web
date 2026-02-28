import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RecipeConcierge from "@/components/RecipeConcierge";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ClicFood | Premium Beldi Home Made",
  description: "The Moroccan leader in ready-to-cook 'Beldi' homemade meals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${montserrat.variable} antialiased font-sans text-stone-800 bg-stone-50 selection:bg-clic-orange/30 overflow-x-hidden`}
      >
        <Banner />
        <div className="relative pt-[env(safe-area-inset-top)]">
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
        </div>
        <Footer />
        <RecipeConcierge />
      </body>
    </html>
  );
}
