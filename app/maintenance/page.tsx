"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function MaintenancePage() {
  const [locale, setLocale] = useState<"fr" | "en" | "es">("en");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const lang = navigator.language;
      setTimeout(() => {
        if (lang.startsWith("es")) {
          setLocale("es");
        } else if (lang.startsWith("fr")) {
          setLocale("fr");
        } else {
          setLocale("en");
        }
      }, 0);
    }
  }, []);

  const copy = {
    fr: {
      title: "Optimisation en cours",
      subtitle: "Nous effectuons des mises à niveau système pour élever votre expérience numérique. De retour très bientôt.",
      tagline: "Strategy. Growth. Impact."
    },
    en: {
      title: "Polishing Systems",
      subtitle: "We are performing scheduled upgrades to elevate your digital experience. We will be back shortly.",
      tagline: "Strategy. Growth. Impact."
    },
    es: {
      title: "Optimización en curso",
      subtitle: "Estamos realizando mejoras programadas para elevar su experiencia digital. Volveremos muy pronto.",
      tagline: "Strategy. Growth. Impact."
    }
  }[locale];

  return (
    <main className="velora-foundation" style={{ display: "flex", minHeight: "100vh", alignItems: "center", justifyContent: "center", padding: "24px" }}>
      <div className="scroll-video-container" style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", background: "#050505" }} aria-hidden="true">
        <div className="video-overlay" style={{ background: "linear-gradient(to top, rgba(1, 1, 1, 0.94), rgba(1, 1, 1, 0.74))" }} />
      </div>

      <div style={{ position: "relative", zIndex: 5, width: "100%", maxWidth: "540px", padding: "48px 32px", borderRadius: "12px", border: "1px solid rgba(248, 232, 176, 0.16)", background: "rgba(8, 8, 8, 0.84)", backdropFilter: "blur(20px)", textAlign: "center", boxShadow: "0 28px 90px rgba(0,0,0,0.56)" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "32px" }}>
          <Image src="/brand/velora-monogram.png" alt="Velora" width={72} height={72} style={{ filter: "drop-shadow(0 0 20px rgba(200, 152, 72, 0.3))" }} />
        </div>

        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", border: "1px solid rgba(248, 232, 176, 0.28)", borderRadius: "999px", padding: "6px 14px", background: "rgba(200, 152, 72, 0.08)", color: "var(--gold-light)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "24px" }}>
          <span className="media-beam" style={{ display: "inline-block", width: "6px", height: "6px", borderRadius: "50%", background: "var(--gold-light)", boxShadow: "0 0 8px var(--gold-light)" }} />
          Maintenance Mode
        </div>

        <h1 style={{ color: "#fff", fontSize: "2rem", fontWeight: 700, margin: "0 0 16px", lineHeight: 1.2 }}>
          {copy.title}
        </h1>

        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "15px", lineHeight: 1.6, margin: "0 0 32px" }}>
          {copy.subtitle}
        </p>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "24px", color: "var(--gold-light)", fontSize: "12px", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 600 }}>
          {copy.tagline}
        </div>
      </div>
    </main>
  );
}
