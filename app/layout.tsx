import "./globals.css";
import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `Tu Batería Ya | Baterías a Domicilio en ${SITE.city}`,
  description: `Tu Batería Ya: baterías a domicilio en ${SITE.city} con instalación, garantía y atención inmediata por WhatsApp.`,
  metadataBase: new URL("https://tubateriaya.com"),
  openGraph: {
    title: `Tu Batería Ya | Baterías a Domicilio en ${SITE.city}`,
    description: `Baterías a domicilio en ${SITE.city} con instalación y garantía. Pide por WhatsApp.`,
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-[#C9C0BF] text-slate-900">{children}</body>
    </html>
  );
}
