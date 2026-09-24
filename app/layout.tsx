import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import WhatsAppButton from "./components/WhatsAppButton";
import CookieBanner from "./components/CookieBanner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#050a14",
};

export const metadata: Metadata = {
  title: "Don Digital — Agentes de Voz con IA para el Turismo",
  description:
    "Implementamos agentes de voz con inteligencia artificial que atienden llamadas, gestionan reservas y captan clientes 24/7 para hoteles, apartamentos turísticos, campings y agencias de viajes.",
  verification: {
    other: {
      "facebook-domain-verification": "ajf7zeip0jtcx664eq2wk33mcemj2g",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${geistSans.variable} h-full`}>
      <body className="min-h-full antialiased">
        {children}
        <WhatsAppButton />
        <CookieBanner />
      </body>
    </html>
  );
}
