import type { Metadata, Viewport } from "next";
import { type Locale, localeLinks } from "@/lib/i18n";

const localeSeo: Record<
  Locale,
  {
    title: string;
    description: string;
    openGraphLocale: string;
  }
> = {
  fr: {
    title: "Velora - Croissance intelligente par IA et digital",
    description:
      "Velora aide les entreprises ambitieuses à accélérer leur croissance avec l'automatisation IA, le marketing digital, les sites premium, le SEO et les systèmes business intelligents.",
    openGraphLocale: "fr_FR"
  },
  en: {
    title: "Velora - AI, Digital Marketing and Premium Web Growth",
    description:
      "Velora helps ambitious businesses accelerate growth through AI automation, premium web experiences, SEO, digital marketing and intelligent business systems.",
    openGraphLocale: "en_US"
  },
  es: {
    title: "Velora - Crecimiento inteligente con IA y digital",
    description:
      "Velora ayuda a empresas ambiciosas a crecer con automatización de IA, marketing digital, webs premium, SEO y sistemas de negocio inteligentes.",
    openGraphLocale: "es_ES"
  }
};

export const siteViewport: Viewport = {
  themeColor: "#010101",
  colorScheme: "dark"
};

export function createLocaleMetadata(locale: Locale): Metadata {
  const seo = localeSeo[locale];

  return {
    metadataBase: new URL("https://velora-studioo.vercel.app"),
    title: {
      default: seo.title,
      template: "%s | Velora"
    },
    description: seo.description,
    applicationName: "Velora",
    authors: [{ name: "Velora" }],
    creator: "Velora",
    publisher: "Velora",
    keywords: [
      "Velora",
      "AI Automation",
      "AI Agents",
      "Digital Marketing",
      "Premium Web Development",
      "SEO",
      "CRM Automation",
      "Business Automation",
      "Lead Generation"
    ],
    robots: {
      index: true,
      follow: true
    },
    alternates: {
      canonical: localeLinks[locale],
      languages: { fr: "/", en: "/en", es: "/es" }
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: localeLinks[locale],
      siteName: "Velora",
      images: [{ url: "/brand/velora-source.png", width: 1254, height: 1254 }],
      locale: seo.openGraphLocale,
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: ["/brand/velora-source.png"]
    },
    icons: {
      icon: "/brand/velora-icon.png",
      apple: "/brand/velora-icon.png"
    }
  };
}
