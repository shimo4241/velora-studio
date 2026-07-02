import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { getDictionary } from "@/lib/i18n";

export default function SpanishThankYouPage() {
  const content = getDictionary("es");

  return (
    <main className="velora-foundation" style={{ display: "flex", minHeight: "100vh", alignItems: "center", justifyContent: "center", padding: "24px" }}>
      <div className="scroll-video-container" style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", background: "#050505" }}>
        <div className="video-overlay" style={{ background: "linear-gradient(to top, rgba(1, 1, 1, 0.9), rgba(1, 1, 1, 0.6))" }} />
      </div>

      <div style={{ position: "relative", zIndex: 5, width: "100%", maxWidth: "560px", padding: "48px 32px", borderRadius: "12px", border: "1px solid rgba(248, 232, 176, 0.16)", background: "rgba(8, 8, 8, 0.82)", backdropFilter: "blur(20px)", textAlign: "center", boxShadow: "0 28px 90px rgba(0,0,0,0.56)" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "32px" }}>
          <Image src="/brand/velora-monogram.png" alt="Velora" width={72} height={72} style={{ filter: "drop-shadow(0 0 20px rgba(200, 152, 72, 0.3))" }} />
        </div>
        
        <h1 style={{ color: "#fff", fontSize: "2.2rem", fontWeight: 700, margin: "0 0 16px", lineHeight: 1.2 }}>
          {content.thankYou.title}
        </h1>
        
        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "15px", lineHeight: 1.6, margin: "0 0 36px" }}>
          {content.thankYou.subtitle}
        </p>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link href="/es" className="cta-button" style={{ textDecoration: "none" }}>
            <ArrowLeft size={16} />
            {content.thankYou.backHome}
          </Link>
        </div>
      </div>
    </main>
  );
}
