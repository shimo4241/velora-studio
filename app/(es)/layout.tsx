import type { ReactNode } from "react";
import "../globals.css";
import { createLocaleMetadata, siteViewport } from "@/lib/site-metadata";

export const metadata = createLocaleMetadata("es");
export const viewport = siteViewport;

export default function SpanishRootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
