import type { ReactNode } from "react";
import { Sora } from "next/font/google";
import "../globals.css";
import { createLocaleMetadata, siteViewport } from "@/lib/site-metadata";

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata = createLocaleMetadata("fr");
export const viewport = siteViewport;

export default function FrenchRootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="fr" className={`${sora.variable}`}>
      <body className="font-sora antialiased">{children}</body>
    </html>
  );
}
