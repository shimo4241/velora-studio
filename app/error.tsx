"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowLeft, RefreshCw } from "lucide-react";

export default function GlobalError({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [locale, setLocale] = useState<"fr" | "en" | "es">("en");

  useEffect(() => {
    console.error("Global boundary caught error:", error);
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      setTimeout(() => {
        if (path.startsWith("/es")) {
          setLocale("es");
        } else if (path.startsWith("/en")) {
          setLocale("en");
        } else {
          setLocale("fr");
        }
      }, 0);
    }
  }, [error]);

  const copy = {
    fr: {
      title: "Erreur Système",
      subtitle: "Une erreur imprévue est survenue dans nos systèmes.",
      tryAgain: "Réessayer",
      backHome: "Retour à l'accueil"
    },
    en: {
      title: "System Error",
      subtitle: "An unexpected error occurred in our systems.",
      tryAgain: "Try Again",
      backHome: "Back to Home"
    },
    es: {
      title: "Error del Sistema",
      subtitle: "Ocurrió un error inesperado en nuestros sistemas.",
      tryAgain: "Reintentar",
      backHome: "Volver al Inicio"
    }
  }[locale];

  const homeHref = locale === "fr" ? "/" : locale === "en" ? "/en" : "/es";

  return (
    <main className="velora-foundation" style={{ display: "flex", minHeight: "100vh", alignItems: "center", justifyContent: "center", padding: "24px" }}>
      <div className="scroll-video-container" style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", background: "#050505" }} aria-hidden="true">
        <div className="video-overlay" style={{ background: "linear-gradient(to top, rgba(1, 1, 1, 0.92), rgba(1, 1, 1, 0.74))" }} />
      </div>

      <div style={{ position: "relative", zIndex: 5, width: "100%", maxWidth: "500px", padding: "48px 32px", borderRadius: "12px", border: "1px solid rgba(248, 232, 176, 0.16)", background: "rgba(8, 8, 8, 0.84)", backdropFilter: "blur(20px)", textAlign: "center", boxShadow: "0 28px 90px rgba(0,0,0,0.56)" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "32px" }}>
          <Image src="/brand/velora-monogram.png" alt="Velora" width={72} height={72} style={{ filter: "drop-shadow(0 0 20px rgba(200, 152, 72, 0.3))" }} />
        </div>

        <span style={{ color: "var(--gold-light)", fontSize: "72px", fontWeight: 700, display: "block", lineHeight: 1, marginBottom: "14px" }}>
          500
        </span>

        <h1 style={{ color: "#fff", fontSize: "1.8rem", fontWeight: 700, margin: "0 0 12px", lineHeight: 1.2 }}>
          {copy.title}
        </h1>

        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", lineHeight: 1.6, margin: "0 0 36px" }}>
          {copy.subtitle}
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "center" }}>
          <button onClick={() => reset()} className="cta-button" style={{ width: "100%", cursor: "pointer" }}>
            <RefreshCw size={16} />
            {copy.tryAgain}
          </button>
          <Link href={homeHref} className="secondary-button" style={{ width: "100%", textDecoration: "none" }}>
            <ArrowLeft size={16} />
            {copy.backHome}
          </Link>
        </div>
      </div>
    </main>
  );
}
