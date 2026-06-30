import type { ReactNode } from "react";
import "../globals.css";
import { createLocaleMetadata, siteViewport } from "@/lib/site-metadata";

export const metadata = createLocaleMetadata("fr");
export const viewport = siteViewport;

export default function FrenchRootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
