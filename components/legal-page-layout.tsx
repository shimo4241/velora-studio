import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { type Locale, getDictionary } from "@/lib/i18n";

type LegalPageLayoutProps = {
  locale: Locale;
  type: "privacy" | "terms" | "cookies";
};

export function LegalPageLayout({ locale, type }: LegalPageLayoutProps) {
  const content = getDictionary(locale);
  const homeHref = locale === "fr" ? "/" : locale === "en" ? "/en" : "/es";

  let title = "";
  let lastUpdated = "";
  let bodyText = "";

  if (type === "privacy") {
    title = content.legal.privacyTitle;
    lastUpdated = content.legal.privacyLastUpdated;
    bodyText = content.legal.privacyContent;
  } else if (type === "terms") {
    title = content.legal.termsTitle;
    lastUpdated = content.legal.termsLastUpdated;
    bodyText = content.legal.termsContent;
  } else {
    title = content.legal.cookiesTitle;
    lastUpdated = content.legal.cookiesLastUpdated;
    bodyText = content.legal.cookiesContent;
  }

  return (
    <main className="velora-foundation" style={{ minHeight: "100vh", padding: "120px 24px 80px" }}>
      {/* Background container */}
      <div className="scroll-video-container" style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", background: "#050505" }} aria-hidden="true">
        <div className="video-overlay" style={{ background: "linear-gradient(to top, rgba(1, 1, 1, 0.92), rgba(1, 1, 1, 0.8))" }} />
      </div>

      <div style={{ position: "relative", zIndex: 5, width: "100%", maxWidth: "800px", margin: "0 auto" }}>
        {/* Nav Brand Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "48px", borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: "24px" }}>
          <Link href={homeHref} style={{ display: "inline-flex", alignItems: "center", filter: "drop-shadow(0 0 15px rgba(200,152,72,0.2))" }}>
            <Image src="/brand/velora-horizontal.png" alt="Velora" width={140} height={34} />
          </Link>
          <Link href={homeHref} className="secondary-button" style={{ height: "40px", minHeight: "40px", padding: "0 16px", fontSize: "13px" }}>
            <ArrowLeft size={14} style={{ marginRight: "6px" }} />
            {content.thankYou.backHome}
          </Link>
        </div>

        {/* Content Card */}
        <article style={{ background: "rgba(8, 8, 8, 0.62)", border: "1px solid rgba(248, 232, 176, 0.12)", borderRadius: "12px", padding: "40px 32px", backdropFilter: "blur(20px)", boxShadow: "0 20px 60px rgba(0,0,0,0.5)" }}>
          <span style={{ color: "var(--gold-light)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" }}>
            {lastUpdated}
          </span>
          <h1 style={{ color: "#fff", fontSize: "2.5rem", fontWeight: 700, margin: "12px 0 24px", lineHeight: 1.15 }}>
            {title}
          </h1>
          <div style={{ color: "rgba(255,255,255,0.8)", fontSize: "16px", lineHeight: 1.8, whiteSpace: "pre-line" }}>
            {bodyText}
          </div>
        </article>
      </div>
    </main>
  );
}
