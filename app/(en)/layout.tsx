import type { ReactNode } from "react";
import "../globals.css";
import { createLocaleMetadata, siteViewport } from "@/lib/site-metadata";

export const metadata = createLocaleMetadata("en");
export const viewport = siteViewport;

export default function EnglishRootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
