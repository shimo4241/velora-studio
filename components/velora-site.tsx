"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState, Suspense, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  ChevronDown,
  ExternalLink,
  Mail,
  MessageCircle,
  X,
  ArrowUp
} from "lucide-react";
import { type Dictionary, type Locale, localeLinks } from "@/lib/i18n";
import { Button } from "./ui/button";

// @ts-ignore
const Spline = React.lazy(() => import("@splinetool/react-spline"));

gsap.registerPlugin(useGSAP, ScrollTrigger);

type VeloraSiteProps = {
  locale: Locale;
  content: Dictionary;
};

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  tone: "gold" | "light";
};

const serviceNames = [
  "AI Automation",
  "AI Agents",
  "Digital Marketing",
  "Premium Web Development",
  "SEO",
  "Brand Strategy",
  "Lead Generation",
  "CRM Automation",
  "Business Automation",
  "Custom AI Solutions"
] as const;

type PartnerItem = {
  name: string;
  country: string;
  logo: string;
  website: string;
  category: "international" | "morocco";
};

const PARTNERS_DATA: readonly PartnerItem[] = [
  {
    name: "Foundever",
    country: "Global",
    logo: "/brand/int_foundever.png",
    website: "https://foundever.com",
    category: "international"
  },
  {
    name: "Dr. Jared Dental Studio",
    country: "USA",
    logo: "/brand/int_drjared.jpg",
    website: "https://drjareddental.com",
    category: "international"
  },
  {
    name: "MVP Miami",
    country: "USA",
    logo: "/brand/int_mvpmiami.png",
    website: "https://mvpmiami.com",
    category: "international"
  },
  {
    name: "Omi Farm Colombia",
    country: "Colombia",
    logo: "/brand/int_omifarm.png",
    website: "https://omifarmcolombia.com",
    category: "international"
  },
  {
    name: "International Clinic",
    country: "Morocco",
    logo: "/brand/int_international_clinic.png",
    website: "https://www.internationalclinic.ma",
    category: "international"
  },
  {
    name: "Dental Medellin",
    country: "Colombia",
    logo: "/brand/int_dentalmedellin.jpg",
    website: "https://dentalmedellin.com",
    category: "international"
  },
  {
    name: "Arthrodont",
    country: "Morocco",
    logo: "/brand/ma_arthrodont.png",
    website: "https://www.arthrodont.fr",
    category: "morocco"
  },
  {
    name: "Elbilia International",
    country: "Morocco",
    logo: "/brand/ma_elbilia.png",
    website: "https://elbilia.international",
    category: "morocco"
  },
  {
    name: "Barceló Palmeraie",
    country: "Morocco",
    logo: "/brand/ma_barcelo.png",
    website: "https://www.barcelo.com",
    category: "morocco"
  },
  {
    name: "Tamouh",
    country: "Morocco",
    logo: "/brand/ma_tamouh.jpg",
    website: "https://tamouh.ae",
    category: "morocco"
  },
  {
    name: "AKDITAL",
    country: "Morocco",
    logo: "/brand/ma_akdital.png",
    website: "https://akdital.ma",
    category: "morocco"
  },
  {
    name: "Tamouh Employment",
    country: "Morocco",
    logo: "/brand/ma_tamouh_employment.png",
    website: "https://tamouhemployment.com",
    category: "morocco"
  },
  {
    name: "Art's Clinic",
    country: "Morocco",
    logo: "/brand/ma_artsclinic.png",
    website: "https://artsclinic.ma",
    category: "morocco"
  },
  {
    name: "Al Jabr",
    country: "Morocco",
    logo: "/brand/ma_aljabr.jpg",
    website: "https://www.ecolealjabr.com",
    category: "morocco"
  },
  {
    name: "Morocco Dental Expo",
    country: "Morocco",
    logo: "/brand/ma_morocco_dental_expo.png",
    website: "https://moroccodentalexpo.ma",
    category: "morocco"
  },
  {
    name: "Chaabane Immobilier",
    country: "Morocco",
    logo: "/brand/ma_chaabane.png",
    website: "https://chaabane-immobilier.com",
    category: "morocco"
  },
  {
    name: "Intelcia",
    country: "Morocco",
    logo: "/brand/ma_intelcia.jpg",
    website: "https://intelcia.com",
    category: "morocco"
  },
  {
    name: "ONMD Conseil Régional Sud",
    country: "Morocco",
    logo: "/brand/ma_onmd_sud.jpg",
    website: "https://www.ordr-dentistes-sud.ma",
    category: "morocco"
  },
  {
    name: "ONMD Ordre National",
    country: "Morocco",
    logo: "/brand/ma_onmd_national.png",
    website: "https://onmd.ma",
    category: "morocco"
  },
  {
    name: "Clinique Les Tulipes",
    country: "Morocco",
    logo: "/brand/ma_lestulipes.jpg",
    website: "https://clinique-lestulipes.com",
    category: "morocco"
  }
];

type PartnerCardProps = {
  item: PartnerItem;
};

const PartnerCard = React.memo(({ item }: PartnerCardProps) => {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const shineRef = useRef<HTMLDivElement>(null);
  const cardRectRef = useRef<DOMRect | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 768) return;
    const card = cardRef.current;
    const inner = innerRef.current;
    const shine = shineRef.current;
    if (!card || !inner || !shine) return;

    if (!cardRectRef.current) {
      cardRectRef.current = card.getBoundingClientRect();
    }
    const rect = cardRectRef.current;
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const rotateX = (y - 0.5) * -12;
    const rotateY = (x - 0.5) * 12;

    inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    inner.style.transition = "transform 0.05s linear";
    
    shine.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(255, 255, 255, 0.4) 0%, transparent 60%)`;
    shine.style.opacity = "1";
  };

  const handleMouseEnter = () => {
    if (window.innerWidth < 768) return;
    const card = cardRef.current;
    if (card) {
      cardRectRef.current = card.getBoundingClientRect();
    }
    const shine = shineRef.current;
    if (shine) {
      shine.style.opacity = "1";
    }
  };

  const handleMouseLeave = () => {
    cardRectRef.current = null;
    const inner = innerRef.current;
    const shine = shineRef.current;
    if (inner) {
      inner.style.transform = "rotateX(0deg) rotateY(0deg)";
      inner.style.transition = "transform 0.5s ease";
    }
    if (shine) {
      shine.style.opacity = "0";
    }
  };

  return (
    <a
      ref={cardRef}
      href={item.website}
      target="_blank"
      rel="noopener noreferrer"
      className="partner-card"
      aria-label={`${item.name} website`}
    >
      <div className="partner-card-glow" />
      <div
        ref={innerRef}
        className="partner-card-inner"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={shineRef}
          className="partner-card-shine"
          style={{ opacity: 0, transition: "opacity 0.2s ease" }}
        />
        <div className="partner-logo-wrapper">
          <Image
            src={item.logo}
            alt={`${item.name} logo`}
            fill
            sizes="160px"
            style={{ objectFit: "contain" }}
            className="partner-logo"
            loading="lazy"
          />
        </div>
      </div>
    </a>
  );
});
PartnerCard.displayName = "PartnerCard";

interface MarqueeRowProps {
  items: PartnerItem[];
  direction: "left" | "right";
  speed: number;
}

const MarqueeRow = React.memo(({ items, direction, speed }: MarqueeRowProps) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const currentTranslate = useRef(0);
  const groupWidthRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const group = track.querySelector<HTMLElement>(".marquee-group");
    if (!group) return;

    const updateMarquee = () => {
      const groupWidth = group.offsetWidth || group.getBoundingClientRect().width || 1200;
      groupWidthRef.current = groupWidth;

      if (tweenRef.current) {
        tweenRef.current.kill();
      }

      const duration = groupWidth / speed;

      if (direction === "left") {
        tweenRef.current = gsap.fromTo(
          track,
          { x: currentTranslate.current },
          {
            x: -groupWidth,
            ease: "none",
            duration: ((groupWidth + currentTranslate.current) / groupWidth) * duration,
            onComplete: () => {
              currentTranslate.current = 0;
              gsap.set(track, { x: 0 });
              tweenRef.current = gsap.to(track, {
                x: -groupWidth,
                ease: "none",
                duration: duration,
                repeat: -1
              });
            }
          }
        );
      } else {
        if (currentTranslate.current === 0) {
          currentTranslate.current = -groupWidth;
        }

        tweenRef.current = gsap.fromTo(
          track,
          { x: currentTranslate.current },
          {
            x: 0,
            ease: "none",
            duration: (Math.abs(currentTranslate.current) / groupWidth) * duration,
            onComplete: () => {
              currentTranslate.current = -groupWidth;
              gsap.set(track, { x: -groupWidth });
              tweenRef.current = gsap.to(track, {
                x: 0,
                ease: "none",
                duration: duration,
                repeat: -1
              });
            }
          }
        );
      }
    };

    updateMarquee();

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !document.hidden) {
        if (tweenRef.current && tweenRef.current.paused() && !isDragging.current) {
          tweenRef.current.play();
        }
      } else {
        if (tweenRef.current && !tweenRef.current.paused()) {
          tweenRef.current.pause();
        }
      }
    }, { threshold: 0 });

    observer.observe(track);

    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (tweenRef.current && !tweenRef.current.paused()) {
          tweenRef.current.pause();
        }
      } else {
        const rect = track.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
        if (isInViewport && tweenRef.current && tweenRef.current.paused() && !isDragging.current) {
          tweenRef.current.play();
        }
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    window.addEventListener("resize", updateMarquee);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("resize", updateMarquee);
      if (tweenRef.current) {
        tweenRef.current.kill();
      }
    };
  }, [direction, speed, items]);

  const handleDragStart = (clientX: number) => {
    isDragging.current = true;
    startX.current = clientX;
    if (tweenRef.current) {
      tweenRef.current.pause();
    }
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging.current) return;
    const track = trackRef.current;
    if (!track || groupWidthRef.current === 0) return;

    const deltaX = clientX - startX.current;
    startX.current = clientX;

    let newTranslate = currentTranslate.current + deltaX;
    const limit = groupWidthRef.current;

    if (newTranslate > 0) {
      newTranslate -= limit;
    } else if (newTranslate < -limit * 2) {
      newTranslate += limit;
    }

    currentTranslate.current = newTranslate;
    gsap.set(track, { x: newTranslate });
  };

  const handleDragEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;

    const track = trackRef.current;
    if (!track || groupWidthRef.current === 0) return;

    const groupWidth = groupWidthRef.current;
    const duration = groupWidth / speed;

    if (tweenRef.current) {
      tweenRef.current.kill();
    }

    if (direction === "left") {
      let startXVal = currentTranslate.current;
      if (startXVal < -groupWidth) {
        startXVal += groupWidth;
      }
      currentTranslate.current = startXVal;
      gsap.set(track, { x: startXVal });

      const remainingDistance = groupWidth + startXVal;
      const remainingDuration = (remainingDistance / groupWidth) * duration;

      tweenRef.current = gsap.to(track, {
        x: -groupWidth,
        ease: "none",
        duration: remainingDuration,
        onComplete: () => {
          currentTranslate.current = 0;
          gsap.set(track, { x: 0 });
          tweenRef.current = gsap.to(track, {
            x: -groupWidth,
            ease: "none",
            duration: duration,
            repeat: -1
          });
        }
      });
    } else {
      let startXVal = currentTranslate.current;
      if (startXVal > 0) {
        startXVal -= groupWidth;
      }
      currentTranslate.current = startXVal;
      gsap.set(track, { x: startXVal });

      const remainingDistance = Math.abs(startXVal);
      const remainingDuration = (remainingDistance / groupWidth) * duration;

      tweenRef.current = gsap.to(track, {
        x: 0,
        ease: "none",
        duration: remainingDuration,
        onComplete: () => {
          currentTranslate.current = -groupWidth;
          gsap.set(track, { x: -groupWidth });
          tweenRef.current = gsap.to(track, {
            x: 0,
            ease: "none",
            duration: duration,
            repeat: -1
          });
        }
      });
    }
  };

  const onMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    handleDragStart(e.clientX);
    document.addEventListener("mousemove", onMouseMoveGlobal);
    document.addEventListener("mouseup", onMouseUpGlobal);
  };

  const onMouseMoveGlobal = (e: MouseEvent) => {
    handleDragMove(e.clientX);
  };

  const onMouseUpGlobal = () => {
    handleDragEnd();
    document.removeEventListener("mousemove", onMouseMoveGlobal);
    document.removeEventListener("mouseup", onMouseUpGlobal);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 0) return;
    handleDragStart(e.touches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 0) return;
    handleDragMove(e.touches[0].clientX);
  };

  const onTouchEnd = () => {
    handleDragEnd();
  };

  const onMouseEnter = () => {
    if (!isDragging.current && tweenRef.current) {
      tweenRef.current.pause();
    }
  };

  const onMouseLeave = () => {
    if (!isDragging.current && tweenRef.current) {
      const track = trackRef.current;
      if (track) {
        const rect = track.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
        if (isInViewport) {
          tweenRef.current.play();
        }
      }
    }
  };

  return (
    <div
      className="marquee-container"
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ cursor: "grab" }}
    >
      <div className="marquee-track" ref={trackRef}>
        <div className="marquee-group">
          {items.map((item, idx) => (
            <PartnerCard key={`${direction}-g1-${item.name}-${idx}`} item={item} />
          ))}
        </div>
        <div className="marquee-group" aria-hidden="true">
          {items.map((item, idx) => (
            <PartnerCard key={`${direction}-g2-${item.name}-${idx}`} item={item} />
          ))}
        </div>
        <div className="marquee-group" aria-hidden="true">
          {items.map((item, idx) => (
            <PartnerCard key={`${direction}-g3-${item.name}-${idx}`} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
});
MarqueeRow.displayName = "MarqueeRow";

MarqueeRow.displayName = "MarqueeRow";

const navItems = [
  ["home", "#hero"],
  ["services", "#services"],
  ["solutions", "#solutions"],
  ["projects", "#projects"],
  ["about", "#why-velora"],
  ["contact", "#contact"]
] as const;

const renderHeadline = (headline: string) => {
  const words = headline.trim().split(" ");
  if (words.length === 0) return "";
  const lastWord = words[words.length - 1];
  const otherWords = words.slice(0, words.length - 1).join(" ");
  return (
    <>
      {otherWords}{" "}
      <span className="text-primary">
        {lastWord}
      </span>
    </>
  );
};

interface NavbarProps {
  content: Dictionary;
  locale: Locale;
}

const Navbar = React.memo(({ content, locale }: NavbarProps) => {
  return (
    <nav className="foundation-nav fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-16 py-5 bg-transparent" aria-label={content.a11y.primaryNavigation}>
      <a href="#hero" className="nav-brand" aria-label={content.a11y.home}>
        <Image src="/brand/logo-transparent.png" alt="VELORA" width={470} height={113} priority />
      </a>
      <div className="nav-links-foundation hidden md:flex gap-8 items-center">
        {navItems.map(([key, href]) => (
          <a key={key} href={href} className="text-sm text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest">
            {content.nav[key]}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-6">
        <div className="language-switch" aria-label={content.nav.language}>
          {(Object.keys(localeLinks) as Locale[]).map((item) => (
            <a key={item} href={localeLinks[item]} aria-current={locale === item ? "page" : undefined}>
              {item.toUpperCase()}
            </a>
          ))}
        </div>
        <Button variant="navCta" size="lg" className="hidden md:inline-flex rounded-lg px-6" onClick={() => {
          const contactSection = document.getElementById("contact");
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
          }
        }}>
          {content.nav.contact}
        </Button>
      </div>
    </nav>
  );
});
Navbar.displayName = "Navbar";

interface HeroSectionProps {
  content: Dictionary;
  isMounted: boolean;
  isHeroVisible: boolean;
  onSplineLoad?: (splineApp: any) => void;
}

const HeroSection = React.memo(({ content, isMounted, isHeroVisible, onSplineLoad }: HeroSectionProps) => {
  const trustLine = content.hero.stats.map((stat) => `${stat.value} ${stat.label}`).join(". ");

  return (
    <section id="hero" className="hero-stage relative min-h-screen flex items-end bg-hero-bg overflow-hidden w-full">
      {/* Spline 3D Scene Backdrop */}
      {isMounted && isHeroVisible && (
        <div className="spline-container absolute inset-0 z-0 opacity-50 mix-blend-screen pointer-events-none spline-gold-filter">
          <Suspense fallback={<div className="absolute inset-0 bg-transparent" />}>
            <Spline 
              scene="https://prod.spline.design/Slk6b8kz3LRlKiyk/scene.splinecode" 
              className="w-full h-full"
              onLoad={onSplineLoad}
            />
          </Suspense>
        </div>
      )}

      {/* Interactive Gold Light Overlay */}
      <div className="hero-gold-light" />

      <div className="absolute inset-0 bg-black/30 z-[1] pointer-events-none" />
      <div className="hero-gradient" aria-hidden="true" />
      
      <div className="hero-content relative z-10 pointer-events-none w-full max-w-[90%] sm:max-w-md lg:max-w-2xl px-6 md:px-10 pb-10 md:pb-10 pt-32 text-left">
        <h1 className="hero-title text-[clamp(3rem,8vw,6rem)] font-bold leading-[1.05] tracking-[-0.05em] text-foreground mb-2 md:mb-4 uppercase opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          {renderHeadline(content.hero.headline)}
        </h1>
        <p className="hero-subtitle text-foreground/80 text-[clamp(1.125rem,2.5vw,1.875rem)] font-light mb-3 md:mb-6 opacity-0 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          {content.hero.subtitle}
        </p>
        <p className="hero-description text-muted-foreground text-[clamp(0.875rem,1.5vw,1.25rem)] font-light mb-4 md:mb-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.55s" }}>
          {content.hero.description}
        </p>
        <div className="hero-actions flex flex-wrap gap-3 font-bold opacity-0 animate-fade-up" aria-label={content.a11y.heroActions} style={{ animationDelay: "0.7s" }}>
          <button className="bg-primary text-primary-foreground px-6 py-3 md:px-8 md:py-4 text-sm rounded-sm cursor-pointer hover:brightness-110 transition-all active:scale-[0.97] pointer-events-auto magnetic-btn" onClick={() => {
            const contactSection = document.getElementById("contact");
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" });
            }
          }}>
            {content.hero.primary}
          </button>
          <button className="bg-white text-background px-6 py-3 md:px-8 md:py-4 text-sm rounded-sm cursor-pointer hover:brightness-90 transition-all active:scale-[0.97] pointer-events-auto magnetic-btn" onClick={() => {
            const projectsSection = document.getElementById("projects");
            if (projectsSection) {
              projectsSection.scrollIntoView({ behavior: "smooth" });
            }
          }}>
            {content.hero.secondary}
          </button>
        </div>
        <p className="hero-trust-line text-muted-foreground/60 text-xs font-light mt-4 md:mt-6 opacity-0 animate-fade-up" aria-label={content.a11y.performanceStats} style={{ animationDelay: "0.85s" }}>
          {trustLine}.
        </p>
      </div>
    </section>
  );
});
HeroSection.displayName = "HeroSection";

interface PartnersSectionProps {
  content: Dictionary;
}

const PartnersSection = React.memo(({ content }: PartnersSectionProps) => {
  return (
    <section id="partners" className="after-section partners-panel" aria-labelledby="partners-title">
      <div className="partners-content-container">
        <div className="section-kicker text-center" style={{ marginBottom: "12px" }}>{content.partners.eyebrow}</div>
        <h2 id="partners-title" className="partners-main-title text-center">{content.partners.title}</h2>
        <p className="partners-description text-center">{content.partners.description}</p>
      </div>

      <div className="partners-marquee-wrapper">
        <div className="partners-marquee-row">
          <div className="partners-category-title-container">
            <h3 className="partners-category-title">{content.partners.international}</h3>
          </div>
          <MarqueeRow
            items={PARTNERS_DATA.filter(p => p.category === "international")}
            direction="left"
            speed={30}
          />
        </div>

        <div className="partners-marquee-row">
          <div className="partners-category-title-container">
            <h3 className="partners-category-title">{content.partners.morocco}</h3>
          </div>
          <MarqueeRow
            items={PARTNERS_DATA.filter(p => p.category === "morocco")}
            direction="right"
            speed={30}
          />
        </div>
      </div>
    </section>
  );
});
PartnersSection.displayName = "PartnersSection";

interface SolutionsSectionProps {
  content: Dictionary;
}

const SolutionsSection = React.memo(({ content }: SolutionsSectionProps) => {
  return (
    <section id="solutions" className="future-section">
      <div className="future-inner">
        <p>{content.future.eyebrow}</p>
        <h2>{content.future.title}</h2>
        {content.future.lines.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </div>
    </section>
  );
});
SolutionsSection.displayName = "SolutionsSection";

interface VerticalSectionProps {
  section: Dictionary["verticals"][number];
  index: number;
  content: Dictionary;
}

const VerticalSection = React.memo(({ section, index, content }: VerticalSectionProps) => {
  return (
    <section
      id={section.id}
      className={`after-section vertical-section ${index % 2 === 1 ? "is-reversed" : ""}`}
      aria-labelledby={`${section.id}-title`}
    >
      <div className="vertical-copy">
        <div className="section-kicker">{section.eyebrow}</div>
        <h2 id={`${section.id}-title`}>{section.title}</h2>
        <p>{section.description}</p>
        {section.appName ? (
          <a className="app-website-link" href={section.website ?? section.href} target="_blank" rel="noreferrer">
            {section.appName}
            <ExternalLink aria-hidden="true" size={16} />
          </a>
        ) : null}
        <div className="vertical-points" aria-label={`${section.eyebrow} ${content.a11y.highlights}`}>
          {section.points.map((point) => (
            <span key={point}>{point}</span>
          ))}
        </div>
        <a
          className="cta-button magnetic"
          href={section.href}
          target={section.href.startsWith("http") ? "_blank" : undefined}
          rel={section.href.startsWith("http") ? "noreferrer" : undefined}
        >
          {section.cta}
          <ArrowRight aria-hidden="true" size={18} />
        </a>
      </div>
      <div className="vertical-media">
        <Image
          className="vertical-image"
          src={section.image.src}
          alt={section.image.alt}
          width={section.image.width}
          height={section.image.height}
          sizes="(max-width: 980px) 100vw, 54vw"
        />
        <div className="media-beam" aria-hidden="true" />
      </div>
    </section>
  );
});
VerticalSection.displayName = "VerticalSection";

interface ProjectsSectionProps {
  content: Dictionary;
}

const ProjectsSection = React.memo(({ content }: ProjectsSectionProps) => {
  return (
    <section id="projects" className="after-section projects-panel" aria-labelledby="projects-title">
      <div className="why-heading">
        <div className="section-kicker">{content.portfolio.eyebrow}</div>
        <h2 id="projects-title">{content.portfolio.title}</h2>
        <p>{content.portfolio.description}</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "32px", marginTop: "40px" }}>
        {content.portfolio.projects.map((project) => (
          <article
            key={project.title}
            className="capability-item"
            style={{
              minHeight: "360px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "32px",
              border: "1px solid rgba(248, 232, 176, 0.16)",
              borderRadius: "12px",
              background: "linear-gradient(145deg, rgba(248, 232, 176, 0.06), rgba(255, 255, 255, 0.01))"
            }}
          >
            <div>
              <span style={{ color: "var(--gold-light)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                {project.category}
              </span>
              <h3 style={{ color: "white", fontSize: "1.7rem", margin: "8px 0 20px" }}>{project.title}</h3>
              
              <div style={{ marginBottom: "16px" }}>
                <strong style={{ color: "var(--gold-light)", fontSize: "12px", display: "block", marginBottom: "4px", textTransform: "uppercase" }}>Problem</strong>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", lineHeight: 1.6, margin: 0 }}>{project.problem}</p>
              </div>
              
              <div style={{ marginBottom: "16px" }}>
                <strong style={{ color: "var(--gold-light)", fontSize: "12px", display: "block", marginBottom: "4px", textTransform: "uppercase" }}>Solution</strong>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", lineHeight: 1.6, margin: 0 }}>{project.solution}</p>
              </div>
            </div>

            <div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", margin: "16px 0" }}>
                {project.technologies.map((tech) => (
                  <span key={tech} style={{ border: "1px solid rgba(255,255,255,0.08)", borderRadius: "4px", padding: "4px 8px", fontSize: "11px", background: "rgba(255,255,255,0.02)", color: "rgba(255,255,255,0.6)" }}>
                    {tech}
                  </span>
                ))}
              </div>

              <div style={{ borderTop: "1px solid rgba(248, 232, 176, 0.2)", paddingTop: "12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", display: "block" }}>Results</span>
                  <strong style={{ color: "white", fontSize: "13px" }}>{project.results}</strong>
                </div>
                <a href="#contact" className="app-website-link" style={{ fontSize: "13px" }}>
                  {content.contactForm.submitButton.split(" ")[0] || "Start"} <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
});
ProjectsSection.displayName = "ProjectsSection";

interface TestimonialsSectionProps {
  content: Dictionary;
}

const TestimonialsSection = React.memo(({ content }: TestimonialsSectionProps) => {
  return (
    <section id="testimonials" className="after-section testimonials-panel" aria-labelledby="testimonials-title">
      <div className="why-heading">
        <div className="section-kicker">{content.testimonials.eyebrow}</div>
        <h2 id="testimonials-title">{content.testimonials.title}</h2>
      </div>
      <div className="testimonial-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px", marginTop: "32px" }}>
        {content.testimonials.list.map((item, index) => (
          <article
            key={index}
            style={{
              background: "rgba(8, 8, 8, 0.68)",
              border: "1px solid rgba(248, 232, 176, 0.12)",
              borderRadius: "12px",
              padding: "32px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: "220px",
              position: "relative"
            }}
          >
            <div style={{ color: "rgba(255, 255, 255, 0.05)", fontSize: "72px", fontFamily: "serif", position: "absolute", top: "10px", left: "20px", pointerEvents: "none" }}>“</div>
            <p style={{ color: "rgba(255, 255, 255, 0.82)", fontSize: "15px", lineHeight: 1.7, position: "relative", zIndex: 2, fontStyle: "italic", margin: "0 0 24px" }}>
              {item.quote}
            </p>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
              <div>
                <h4 style={{ color: "white", margin: "0 0 4px", fontSize: "15px", fontWeight: 650 }}>{item.author}</h4>
                <span style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: "12px" }}>{item.role}</span>
              </div>
              <span style={{ border: "1px solid rgba(248, 232, 176, 0.2)", borderRadius: "4px", padding: "2px 6px", fontSize: "10px", color: "var(--gold-light)", textTransform: "uppercase", fontWeight: 700 }}>
                {item.isDemo}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
});
TestimonialsSection.displayName = "TestimonialsSection";

interface FaqSectionProps {
  content: Dictionary;
}

const FaqSection = React.memo(({ content }: FaqSectionProps) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="faq" className="after-section faq-panel" aria-labelledby="faq-title">
      <div className="faq-heading">
        <div className="section-kicker">{content.faq.eyebrow}</div>
        <h2 id="faq-title">{content.faq.title}</h2>
      </div>
      <div className="faq-list">
        {content.faq.items.map((item, index) => (
          <div key={index} className="faq-item" style={{ borderBottom: "1px solid var(--line)" }}>
            <button
              className="faq-question"
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
              aria-expanded={openFaq === index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                background: "none",
                border: "none",
                color: "white",
                padding: "24px 0",
                fontSize: "1.1rem",
                fontWeight: 600,
                cursor: "pointer",
                textAlign: "left"
              }}
            >
              {item.question}
              <ChevronDown
                style={{
                  transform: openFaq === index ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                  color: "var(--gold-light)"
                }}
              />
            </button>
            <div
              className="faq-answer-container"
              style={{
                maxHeight: openFaq === index ? "200px" : "0px",
                overflow: "hidden",
                transition: "max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease",
                opacity: openFaq === index ? 1 : 0
              }}
            >
              <p style={{ paddingBottom: "24px", color: "rgba(255,255,255,0.7)", margin: 0, fontSize: "14px", lineHeight: 1.7 }}>
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});
FaqSection.displayName = "FaqSection";

interface WhyVeloraSectionProps {
  content: Dictionary;
  onServiceClick: (index: number) => void;
}

const WhyVeloraSection = React.memo(({ content, onServiceClick }: WhyVeloraSectionProps) => {
  return (
    <section id="why-velora" className="after-section why-panel" aria-labelledby="why-title">
      <div className="why-heading">
        <div className="section-kicker">{content.why.eyebrow}</div>
        <h2 id="why-title">{content.why.title}</h2>
        <p>{content.why.description}</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px", margin: "16px 0" }}>
        <article style={{ border: "1px solid rgba(248, 232, 176, 0.16)", borderRadius: "12px", padding: "28px", background: "rgba(8, 8, 8, 0.42)", backdropFilter: "blur(8px)" }}>
          <h3 style={{ fontSize: "1.25rem", margin: "0 0 12px", color: "var(--gold-light)", fontWeight: 700 }}>{content.about.missionTitle}</h3>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "13.5px", lineHeight: 1.6, margin: 0 }}>{content.about.missionDesc}</p>
        </article>
        <article style={{ border: "1px solid rgba(248, 232, 176, 0.16)", borderRadius: "12px", padding: "28px", background: "rgba(8, 8, 8, 0.42)", backdropFilter: "blur(8px)" }}>
          <h3 style={{ fontSize: "1.25rem", margin: "0 0 12px", color: "var(--gold-light)", fontWeight: 700 }}>{content.about.visionTitle}</h3>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "13.5px", lineHeight: 1.6, margin: 0 }}>{content.about.visionDesc}</p>
        </article>
        <article style={{ border: "1px solid rgba(248, 232, 176, 0.16)", borderRadius: "12px", padding: "28px", background: "rgba(8, 8, 8, 0.42)", backdropFilter: "blur(8px)" }}>
          <h3 style={{ fontSize: "1.25rem", margin: "0 0 12px", color: "var(--gold-light)", fontWeight: 700 }}>{content.about.valuesTitle}</h3>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "13.5px", lineHeight: 1.6, margin: 0 }}>{content.about.valuesDesc}</p>
        </article>
      </div>

      <div className="counter-grid" aria-label={content.why.eyebrow}>
        {content.why.stats.map((stat) => (
          <div className="counter-card" key={stat.label}>
            <strong data-counter={stat.value} data-suffix={stat.suffix}>
              0{stat.suffix}
            </strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>

      <div className="capability-grid" aria-label={content.nav.services}>
        {content.services.map((service, index) => (
          <article
            key={service.title}
            className="capability-item"
            onClick={() => onServiceClick(index)}
            style={{ cursor: "pointer" }}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                onServiceClick(index);
              }
            }}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div style={{ color: "var(--gold-light)", fontSize: "12px", display: "flex", alignItems: "center", gap: "6px", marginTop: "12px", fontWeight: 650 }}>
              {service.cta} <ArrowRight size={14} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
});
WhyVeloraSection.displayName = "WhyVeloraSection";

interface ProcessSectionProps {
  content: Dictionary;
}

const ProcessSection = React.memo(({ content }: ProcessSectionProps) => {
  return (
    <section id="process" className="after-section process-panel" aria-labelledby="process-title">
      <div className="process-heading">
        <div className="section-kicker">{content.process.eyebrow}</div>
        <h2 id="process-title">{content.process.title}</h2>
        <p>{content.process.description}</p>
      </div>
      <div className="process-track">
        <div className="process-line" aria-hidden="true">
          <span className="process-line-fill" />
        </div>
        {content.process.steps.map((step, index) => (
          <article className="process-step" key={step.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
});
ProcessSection.displayName = "ProcessSection";
interface ContactSectionProps {
  content: Dictionary;
  formData: any;
  status: "idle" | "loading" | "success" | "error";
  errorMessage: string;
  errors: Record<string, string>;
  captcha: { num1: number; num2: number; expected: number } | null;
  handleFormChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleContactSubmit: (e: React.FormEvent) => void;
}

const ContactSection = React.memo(({
  content,
  formData,
  status,
  errorMessage,
  errors,
  captcha,
  handleFormChange,
  handleContactSubmit
}: ContactSectionProps) => {
  const serviceNames = content.services.map((s) => s.title);
  return (
    <section id="contact" className="after-section contact-panel" aria-labelledby="contact-title" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "40px" }}>
      <div>
        <div className="section-kicker">{content.contact.eyebrow}</div>
        <h2 id="contact-title">{content.contact.title}</h2>
        <p>{content.contact.description}</p>
      </div>

      <form onSubmit={handleContactSubmit} className="contact-form" style={{ width: "100%", maxWidth: "680px", margin: "0 auto", display: "grid", gap: "20px" }}>
        {/* Honeypot hidden input */}
        <input
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleFormChange}
          style={{ display: "none" }}
          tabIndex={-1}
          autoComplete="off"
        />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }} className="form-row-mobile">
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label htmlFor="form-name" style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--gold-light)", fontWeight: 600 }}>
              {content.contactForm.nameLabel} *
            </label>
            <input
              id="form-name"
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleFormChange}
              placeholder={content.contactForm.namePlaceholder}
              style={{ background: "rgba(10, 10, 10, 0.62)", border: errors.name ? "1px solid #ff4d4d" : "1px solid rgba(248, 232, 176, 0.16)", borderRadius: "8px", padding: "12px 16px", color: "white", fontSize: "14px" }}
            />
            {errors.name && <span style={{ color: "#ff4d4d", fontSize: "11px" }}>{errors.name}</span>}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label htmlFor="form-email" style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--gold-light)", fontWeight: 600 }}>
              {content.contactForm.emailLabel} *
            </label>
            <input
              id="form-email"
              type="email"
              required
              name="email"
              value={formData.email}
              onChange={handleFormChange}
              placeholder={content.contactForm.emailPlaceholder}
              style={{ background: "rgba(10, 10, 10, 0.62)", border: errors.email ? "1px solid #ff4d4d" : "1px solid rgba(248, 232, 176, 0.16)", borderRadius: "8px", padding: "12px 16px", color: "white", fontSize: "14px" }}
            />
            {errors.email && <span style={{ color: "#ff4d4d", fontSize: "11px" }}>{errors.email}</span>}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }} className="form-row-mobile">
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label htmlFor="form-service" style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--gold-light)", fontWeight: 600 }}>
              {content.contactForm.serviceLabel} *
            </label>
            <select
              id="form-service"
              name="service"
              required
              value={formData.service}
              onChange={handleFormChange}
              style={{ background: "rgba(10, 10, 10, 0.62)", border: "1px solid rgba(248, 232, 176, 0.16)", borderRadius: "8px", padding: "12px 16px", color: "white", fontSize: "14px", height: "45px" }}
            >
              <option value="" disabled>{content.contactForm.serviceSelect}</option>
              {serviceNames.map((s) => (
                <option key={s} value={s} style={{ background: "#111" }}>{s}</option>
              ))}
            </select>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label htmlFor="form-budget" style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--gold-light)", fontWeight: 600 }}>
              {content.contactForm.budgetLabel}
            </label>
            <select
              id="form-budget"
              name="budget"
              value={formData.budget}
              onChange={handleFormChange}
              style={{ background: "rgba(10, 10, 10, 0.62)", border: "1px solid rgba(248, 232, 176, 0.16)", borderRadius: "8px", padding: "12px 16px", color: "white", fontSize: "14px", height: "45px" }}
            >
              <option value="< 5k">&lt; 5k €</option>
              <option value="5k - 15k">5k € - 15k €</option>
              <option value="15k - 50k">15k € - 50k €</option>
              <option value="50k+">50k+ €</option>
            </select>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <label htmlFor="form-message" style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--gold-light)", fontWeight: 600 }}>
            {content.contactForm.messageLabel} *
          </label>
          <textarea
            id="form-message"
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleFormChange}
            placeholder={content.contactForm.messagePlaceholder}
            style={{ background: "rgba(10, 10, 10, 0.62)", border: errors.message ? "1px solid #ff4d4d" : "1px solid rgba(248, 232, 176, 0.16)", borderRadius: "8px", padding: "12px 16px", color: "white", fontSize: "14px", resize: "vertical" }}
          />
          {errors.message && <span style={{ color: "#ff4d4d", fontSize: "11px" }}>{errors.message}</span>}
        </div>

        {/* Captcha security check */}
        {captcha && (
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label htmlFor="form-captcha" style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--gold-light)", fontWeight: 600 }}>
              {content.contactForm.challengeLabel} ({captcha.num1} + {captcha.num2} = ?) *
            </label>
            <input
              id="form-captcha"
              type="text"
              name="securityAnswer"
              required
              value={formData.securityAnswer}
              onChange={handleFormChange}
              placeholder={content.contactForm.challengePlaceholder}
              style={{ background: "rgba(10, 10, 10, 0.62)", border: errors.securityAnswer ? "1px solid #ff4d4d" : "1px solid rgba(248, 232, 176, 0.16)", borderRadius: "8px", padding: "12px 16px", color: "white", fontSize: "14px" }}
            />
            {errors.securityAnswer && <span style={{ color: "#ff4d4d", fontSize: "11px" }}>{errors.securityAnswer}</span>}
          </div>
        )}

        {/* Status Feedback */}
        {status === "error" && (
          <div style={{ padding: "12px 16px", background: "rgba(255, 77, 77, 0.1)", border: "1px solid #ff4d4d", borderRadius: "8px", color: "#ff4d4d", fontSize: "14px" }}>
            {errorMessage || content.contactForm.errorMessage}
          </div>
        )}

        {/* Form Actions */}
        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "12px", position: "relative" }}>
          {status === "loading" && (
            <div className="media-beam" style={{ position: "absolute", top: "-4px", left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, var(--gold-light), transparent)" }} />
          )}
          <button
            type="submit"
            disabled={status === "loading"}
            className="cta-button"
            style={{ cursor: status === "loading" ? "not-allowed" : "pointer", opacity: status === "loading" ? 0.7 : 1, width: "100%", maxWidth: "260px" }}
          >
            {status === "loading" ? content.contactForm.submitting : content.contactForm.submitButton}
            <ArrowRight size={18} />
          </button>
        </div>
      </form>

      {/* Backup Contact channels */}
      <div style={{ display: "flex", justifyContent: "center", gap: "24px", marginTop: "24px" }} className="form-row-mobile">
        <a className="secondary-button" href={content.contact.primaryHref} target="_blank" rel="noreferrer" style={{ fontSize: "13px" }}>
          <MessageCircle size={16} />
          {content.contact.primary}
        </a>
        <a className="secondary-button" href={content.contact.secondaryHref} style={{ fontSize: "13px" }}>
          <Mail size={16} />
          {content.contact.secondary}
        </a>
      </div>
    </section>
  );
});
ContactSection.displayName = "ContactSection";

interface FooterProps {
  content: Dictionary;
  locale: Locale;
}

const Footer = React.memo(({ content, locale }: FooterProps) => {
  return (
    <footer className="foundation-footer">
      <div className="footer-brand">
        <Image src="/brand/logo-transparent.png" alt="VELORA" width={470} height={113} />
        <span>{content.footer.tagline}</span>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", lineHeight: 1.6, marginTop: "12px" }}>
          {content.footer.companyInfo}
        </p>
      </div>
      
      <div className="footer-column">
        <h2>{content.footer.quickLinksTitle}</h2>
        {navItems.map(([key, href]) => (
          <a key={key} href={href}>
            {content.nav[key]}
          </a>
        ))}
      </div>

      <div className="footer-column">
        <h2>{content.footer.languagesTitle}</h2>
        {content.footer.languages.map((language) => (
          <a key={language.href} href={language.href}>
            {language.label}
          </a>
        ))}
      </div>

      <div className="footer-column footer-contact">
        <h2>{content.footer.contactTitle}</h2>
        <a href={content.footer.emailHref}>
          <span>{content.footer.emailLabel}</span>
          {content.footer.email}
        </a>
        <a href={content.footer.whatsappHref} target="_blank" rel="noreferrer">
          <span>{content.footer.whatsappLabel}</span>
          {content.footer.whatsapp}
        </a>
        <a href={content.footer.websiteHref} target="_blank" rel="noreferrer">
          <span>{content.footer.websiteLabel}</span>
          {content.footer.website}
        </a>
      </div>
      
      <div className="footer-bottom" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px", width: "100%" }}>
        <div>&copy; 2026 Velora Studio. All rights reserved.</div>
        <div style={{ display: "flex", gap: "24px" }}>
          <Link href={locale === "fr" ? "/privacy" : locale === "en" ? "/en/privacy" : "/es/privacy"} style={{ transition: "color 0.2s ease" }} className="hover:text-white">
            {content.footer.privacyPolicy}
          </Link>
          <Link href={locale === "fr" ? "/terms" : locale === "en" ? "/en/terms" : "/es/terms"} style={{ transition: "color 0.2s ease" }} className="hover:text-white">
            {content.footer.termsOfService}
          </Link>
          <Link href={locale === "fr" ? "/cookies" : locale === "en" ? "/en/cookies" : "/es/cookies"} style={{ transition: "color 0.2s ease" }} className="hover:text-white">
            {content.footer.cookiePolicy}
          </Link>
        </div>
      </div>
    </footer>
  );
});
Footer.displayName = "Footer";

export function VeloraSite({ locale, content }: VeloraSiteProps) {
  const router = useRouter();
  const rootRef = useRef<HTMLElement>(null);

  const particlesRef = useRef<HTMLCanvasElement>(null);

  // UI Interactive States
  const [activeService, setActiveService] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  const splineAppRef = useRef<any>(null);
  const onSplineLoad = useCallback((splineApp: any) => {
    splineAppRef.current = splineApp;
  }, []);

  // Cookie Consent States
  const [consentVisible, setConsentVisible] = useState(false);
  const [customizeActive, setCustomizeActive] = useState(false);
  const [analyticsAccepted, setAnalyticsAccepted] = useState(false);
  const [marketingAccepted, setMarketingAccepted] = useState(false);

  // Contact Form States
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "< 5k",
    message: "",
    honeypot: "",
    securityAnswer: ""
  });
  const [captcha, setCaptcha] = useState<{ num1: number; num2: number; expected: number } | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Initialize Captcha
  const resetCaptcha = useCallback(() => {
    const n1 = Math.floor(Math.random() * 9) + 1;
    const n2 = Math.floor(Math.random() * 9) + 1;
    setCaptcha({ num1: n1, num2: n2, expected: n1 + n2 });
  }, []);

  // Mount logic for cookies & captcha
  useEffect(() => {
    setIsMounted(true);
    setTimeout(() => {
      resetCaptcha();

      // Check cookie consent status in local storage
      const consent = localStorage.getItem("velora_cookie_consent");
      if (!consent) {
        setConsentVisible(true);
      } else {
        try {
          const parsed = JSON.parse(consent);
          setAnalyticsAccepted(!!parsed.analytics);
          setMarketingAccepted(!!parsed.marketing);
        } catch {
          setConsentVisible(true);
        }
      }
    }, 0);

    // Scroll listener for Back to Top button
    let currentShow = false;
    const handleScroll = () => {
      const shouldShow = window.scrollY > 300;
      if (shouldShow !== currentShow) {
        currentShow = shouldShow;
        setShowBackToTop(shouldShow);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [resetCaptcha]);

  // Observer to toggle Hero section visibility (for Spline rendering control)
  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      { threshold: 0 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  // Form submission handlers
  const handleFormChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    }
  }, [errors]);

  const handleContactSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    const fieldErrors: Record<string, string> = {};

    // Basic Validation
    if (!formData.name.trim()) {
      fieldErrors.name = content.contactForm.validationRequired;
    }
    if (!formData.email.trim()) {
      fieldErrors.email = content.contactForm.validationRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      fieldErrors.email = content.contactForm.validationEmail;
    }
    if (!formData.message.trim()) {
      fieldErrors.message = content.contactForm.validationRequired;
    }
    if (captcha && String(formData.securityAnswer).trim() !== String(captcha.expected)) {
      fieldErrors.securityAnswer = content.contactForm.validationSpam;
    }

    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      setStatus("error");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          securityExpected: captcha?.expected
        })
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || content.contactForm.errorMessage);
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        service: "",
        budget: "< 5k",
        message: "",
        honeypot: "",
        securityAnswer: ""
      });
      resetCaptcha();

      // Smooth redirect to Thank You page
      const thankYouHref = locale === "fr" ? "/thank-you" : locale === "en" ? "/en/thank-you" : "/es/thank-you";
      router.push(thankYouHref);
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage((err as Error).message || content.contactForm.errorMessage);
    }
  }, [formData, captcha, content, locale, router, resetCaptcha]);

  // Cookie Actions
  const handleAcceptAllCookies = useCallback(() => {
    const preferences = { necessary: true, analytics: true, marketing: true };
    localStorage.setItem("velora_cookie_consent", JSON.stringify(preferences));
    setAnalyticsAccepted(true);
    setMarketingAccepted(true);
    setConsentVisible(false);
  }, []);

  const handleRejectAllCookies = useCallback(() => {
    const preferences = { necessary: true, analytics: false, marketing: false };
    localStorage.setItem("velora_cookie_consent", JSON.stringify(preferences));
    setAnalyticsAccepted(false);
    setMarketingAccepted(false);
    setConsentVisible(false);
  }, []);

  const handleSaveCustomCookies = useCallback(() => {
    const preferences = { necessary: true, analytics: analyticsAccepted, marketing: marketingAccepted };
    localStorage.setItem("velora_cookie_consent", JSON.stringify(preferences));
    setConsentVisible(false);
  }, [analyticsAccepted, marketingAccepted]);

  // Structured Data (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://velora-studioo.vercel.app/#organization",
        "name": "Velora Studio",
        "url": "https://velora-studioo.vercel.app",
        "logo": "https://velora-studioo.vercel.app/brand/velora-monogram.png",
        "sameAs": [
          "https://www.linkedin.com/company/velora-studio",
          "https://twitter.com/velora_studio",
          "https://github.com/velora-studio"
        ]
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://velora-studioo.vercel.app/#service",
        "name": "Velora Studio",
        "url": "https://velora-studioo.vercel.app",
        "image": "https://velora-studioo.vercel.app/brand/velora-source.png",
        "priceRange": "$$$",
        "telephone": "+34640559699",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "ES"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://velora-studioo.vercel.app/#website",
        "url": "https://velora-studioo.vercel.app",
        "name": "Velora Studio",
        "publisher": {
          "@id": "https://velora-studioo.vercel.app/#organization"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://velora-studioo.vercel.app/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": locale === "fr" ? "Accueil" : locale === "en" ? "Home" : "Inicio",
            "item": "https://velora-studioo.vercel.app"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://velora-studioo.vercel.app/#faq",
        "mainEntity": content.faq.items.map((item) => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      }
    ]
  };

  // Original Scroll & Cards mask animation
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const fixedCards = root.querySelector<HTMLElement>(".fixed-cards");
    const cardsGrid = root.querySelector<HTMLElement>(".cards-grid");
    const trigger = root.querySelector<HTMLElement>(".cards-trigger");
    if (!fixedCards || !cardsGrid || !trigger) return;

    let animationFrame = 0;
    let triggerTop = 0;
    let triggerHeight = 0;

    const updateTriggerCoords = () => {
      const rect = trigger.getBoundingClientRect();
      triggerTop = rect.top + window.scrollY;
      triggerHeight = rect.height;
    };

    updateTriggerCoords();

    const renderCards = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const start = triggerTop - viewportHeight * 0.5;
      const end = triggerTop + triggerHeight - viewportHeight * 0.3;
      const range = Math.max(1, end - start);
      const progress = gsap.utils.clamp(0, 1, (scrollY - start) / range);
      const active = scrollY >= start - viewportHeight * 0.2 && scrollY <= end + viewportHeight * 0.3;
      const fadeIn = gsap.utils.clamp(0, 1, (scrollY - (start - viewportHeight * 0.2)) / (viewportHeight * 0.2));
      const fadeOut = gsap.utils.clamp(0, 1, (end + viewportHeight * 0.3 - scrollY) / (viewportHeight * 0.3));
      const opacity = active ? Math.min(fadeIn, fadeOut) : 0;
      const reveal = progress * 130;
      const gradient =
        window.innerWidth < 768
          ? `linear-gradient(to bottom, black ${reveal}%, transparent ${reveal + 20}%)`
          : `linear-gradient(to right, black ${reveal}%, transparent ${reveal + 15}%)`;

      fixedCards.style.opacity = String(opacity);
      fixedCards.style.pointerEvents = opacity > 0.1 ? "auto" : "none";
      cardsGrid.style.maskImage = gradient;
      cardsGrid.style.webkitMaskImage = gradient;
    };

    const scheduleRender = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(renderCards);
    };

    const handleResize = () => {
      updateTriggerCoords();
      scheduleRender();
    };

    renderCards();
    window.addEventListener("scroll", scheduleRender, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", scheduleRender);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Counters & Process line animations
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const counterElements = Array.from(root.querySelectorAll<HTMLElement>("[data-counter]"));
    const processPanel = root.querySelector<HTMLElement>(".process-panel");
    const processFill = root.querySelector<HTMLElement>(".process-line-fill");
    const processSteps = Array.from(root.querySelectorAll<HTMLElement>(".process-step"));
    const cleanups: Array<() => void> = [];

    const setCountersFinal = () => {
      counterElements.forEach((counter) => {
        counter.textContent = `${counter.dataset.counter ?? "0"}${counter.dataset.suffix ?? ""}`;
      });
    };

    if (prefersReducedMotion) {
      setCountersFinal();
      if (processFill) gsap.set(processFill, { scaleX: 1 });
      gsap.set(processSteps, { autoAlpha: 1, y: 0 });
      return;
    }

    if (counterElements.length > 0) {
      const counterTweens: gsap.core.Tween[] = [];
      const counterObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            const counter = entry.target as HTMLElement;
            const target = Number(counter.dataset.counter ?? 0);
            const suffix = counter.dataset.suffix ?? "";
            const state = { value: 0 };

            counterObserver.unobserve(counter);

            const tween = gsap.to(state, {
              value: target,
              duration: 1.35,
              ease: "power3.out",
              onUpdate: () => {
                counter.textContent = `${Math.round(state.value)}${suffix}`;
              },
              onComplete: () => {
                counter.textContent = `${target}${suffix}`;
              }
            });

            counterTweens.push(tween);
          });
        },
        { threshold: 0.35, rootMargin: "0px 0px -12% 0px" }
      );

      counterElements.forEach((counter) => counterObserver.observe(counter));
      cleanups.push(() => {
        counterObserver.disconnect();
        counterTweens.forEach((tween) => tween.kill());
      });
    }

    if (processPanel && processFill) {
      let frame = 0;

      let panelTop = 0;
      let panelHeight = 0;

      const updatePanelCoords = () => {
        const rect = processPanel.getBoundingClientRect();
        panelTop = rect.top + window.scrollY;
        panelHeight = rect.height;
      };

      updatePanelCoords();

      const updateProcessProgress = () => {
        window.cancelAnimationFrame(frame);
        frame = window.requestAnimationFrame(() => {
          const rectTop = panelTop - window.scrollY;
          const start = window.innerHeight * 0.78;
          const end = -panelHeight * 0.18;
          const progress = gsap.utils.clamp(0, 1, (start - rectTop) / (start - end));
          gsap.set(processFill, { scaleX: progress });
        });
      };

      const handleResize = () => {
        updatePanelCoords();
        updateProcessProgress();
      };

      updateProcessProgress();
      window.addEventListener("scroll", updateProcessProgress, { passive: true });
      window.addEventListener("resize", handleResize);

      cleanups.push(() => {
        window.cancelAnimationFrame(frame);
        window.removeEventListener("scroll", updateProcessProgress);
        window.removeEventListener("resize", handleResize);
      });
    }

    if (processSteps.length > 0 && processPanel) {
      gsap.set(processSteps, { autoAlpha: 0, y: 28 });

      const processObserver = new IntersectionObserver(
        (entries) => {
          if (!entries.some((entry) => entry.isIntersecting)) return;

          processObserver.disconnect();
          gsap.to(processSteps, {
            autoAlpha: 1,
            y: 0,
            duration: 0.72,
            ease: "power3.out",
            stagger: 0.07
          });
        },
        { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
      );

      processObserver.observe(processPanel);
      cleanups.push(() => processObserver.disconnect());
    }

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  // GSAP Video and Interactive Mouse Handlers
  useGSAP(
    () => {
      const root = rootRef.current;
      const particlesCanvas = particlesRef.current;

      if (!root || !particlesCanvas) return;

      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const cleanups: Array<() => void> = [];

      const setupParticles = () => {
        const ctx = particlesCanvas.getContext("2d");
        if (!ctx) return;

        let width = 0;
        let height = 0;
        let animationId = 0;
        let resizeFrame = 0;
        let lastFrameTime = 0;
        let particles: Particle[] = [];
        let disposed = false;
        let isAnimating = true;

        let targetX = 0;
        let targetY = 0;
        let currentX = 0;
        let currentY = 0;

        const onMouseMove = (e: MouseEvent) => {
          if (window.innerWidth < 768) return;
          targetX = (e.clientX / window.innerWidth - 0.5) * 45;
          targetY = (e.clientY / window.innerHeight - 0.5) * 45;
        };

        if (!reduceMotion) {
          window.addEventListener("mousemove", onMouseMove, { passive: true });
        }

        const createParticles = () => {
          const count = Math.min(window.innerWidth < 768 ? 40 : 140, Math.max(20, Math.floor((width * height) / 11000)));
          particles = Array.from({ length: count }, (_, index) => ({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.28,
            vy: (Math.random() - 0.5) * 0.28,
            size: Math.random() * 1.35 + 0.45,
            opacity: Math.random() * 0.42 + 0.16,
            tone: index % 4 === 0 ? "light" : "gold"
          }));
        };

        const resizeParticles = () => {
          const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
          width = window.innerWidth;
          height = window.innerHeight;
          particlesCanvas.width = Math.max(1, Math.round(width * dpr));
          particlesCanvas.height = Math.max(1, Math.round(height * dpr));
          ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
          createParticles();
        };

        const drawParticles = (timestamp = window.performance.now()) => {
          if (disposed) return;

          // Check if tab hidden or offscreen
          const isHeroVisible = window.scrollY < window.innerHeight + 100;
          if (document.hidden || !isHeroVisible) {
            lastFrameTime = 0;
            isAnimating = false;
            animationId = 0;
            return;
          }

          const delta = lastFrameTime ? Math.min(48, timestamp - lastFrameTime) : 16.67;
          const speed = delta / 16.67;
          const pointerLerp = 1 - Math.pow(0.92, speed);
          lastFrameTime = timestamp;

          ctx.clearRect(0, 0, width, height);
          ctx.globalCompositeOperation = "lighter";

          currentX += (targetX - currentX) * pointerLerp;
          currentY += (targetY - currentY) * pointerLerp;

          particles.forEach((particle) => {
            if (!reduceMotion) {
              particle.x += particle.vx * speed;
              particle.y += particle.vy * speed;

              if (particle.x < 0) particle.x = width;
              if (particle.x > width) particle.x = 0;
              if (particle.y < 0) particle.y = height;
              if (particle.y > height) particle.y = 0;
            }

            const drawX = reduceMotion ? particle.x : particle.x + currentX * (particle.size * 0.8);
            const drawY = reduceMotion ? particle.y : particle.y + currentY * (particle.size * 0.8);

            ctx.beginPath();
            ctx.arc(drawX, drawY, particle.size, 0, Math.PI * 2);
            ctx.fillStyle =
              particle.tone === "light"
                ? `rgba(248,232,176,${particle.opacity})`
                : `rgba(200,152,72,${particle.opacity})`;
            ctx.fill();
          });

          ctx.globalCompositeOperation = "source-over";

          if (!reduceMotion && !disposed && isAnimating) {
            animationId = window.requestAnimationFrame(drawParticles);
          }
        };

        const startLoop = () => {
          if (isAnimating) return;
          isAnimating = true;
          lastFrameTime = 0;
          drawParticles();
        };

        const stopLoop = () => {
          isAnimating = false;
          lastFrameTime = 0;
          if (animationId) {
            window.cancelAnimationFrame(animationId);
            animationId = 0;
          }
        };

        const handleScrollVisibility = () => {
          const isHeroVisible = window.scrollY < window.innerHeight + 100;
          if (document.hidden || !isHeroVisible) {
            stopLoop();
          } else {
            startLoop();
          }
        };

        const onResize = () => {
          window.cancelAnimationFrame(resizeFrame);
          resizeFrame = window.requestAnimationFrame(() => {
            resizeParticles();
            if (reduceMotion) drawParticles();
          });
        };

        resizeParticles();
        drawParticles();
        window.addEventListener("resize", onResize);
        if (!reduceMotion) {
          window.addEventListener("scroll", handleScrollVisibility, { passive: true });
          document.addEventListener("visibilitychange", handleScrollVisibility);
        }

        cleanups.push(() => {
          disposed = true;
          window.cancelAnimationFrame(animationId);
          window.cancelAnimationFrame(resizeFrame);
          window.removeEventListener("resize", onResize);
          window.removeEventListener("mousemove", onMouseMove);
          window.removeEventListener("scroll", handleScrollVisibility);
          document.removeEventListener("visibilitychange", handleScrollVisibility);
        });
      };

      const setupHeroInteractions = () => {
        if (reduceMotion) return;
        if (window.innerWidth < 768) return;

        const heroSection = root.querySelector<HTMLElement>("#hero");
        const splineContainer = root.querySelector<HTMLElement>(".spline-container");
        const heroContent = root.querySelector<HTMLElement>(".hero-content");
        const goldLight = root.querySelector<HTMLElement>(".hero-gold-light");

        if (!heroSection) return;

        let mouseX = 0;
        let mouseY = 0;
        let targetX = 0;
        let targetY = 0;
        let tickerActive = false;

        let sphereObj: any = null;
        let cubeObjs: any[] = [];
        let cubeGroupObj: any = null;
        let splineChecked = false;

        const checkSplineObjects = () => {
          if (splineChecked) return;
          const splineApp = splineAppRef.current;
          if (!splineApp) return;

          try {
            // Retrieve all objects inside the Spline WebGL app
            const all = splineApp.getObjects ? splineApp.getObjects() : [];
            all.forEach((obj: any) => {
              const name = obj.name.toLowerCase();
              if (name.includes("sphere") || name.includes("globe") || name.includes("ball")) {
                sphereObj = obj;
              } else if (name.includes("cube") || name.includes("box")) {
                cubeObjs.push(obj);
              } else if (name.includes("group") || name.includes("cubes")) {
                cubeGroupObj = obj;
              }
            });

            // Backups: query direct names
            if (!sphereObj) {
              sphereObj = splineApp.findObjectByName("Sphere") || splineApp.findObjectByName("sphere") || splineApp.findObjectByName("Sphere 1");
            }
            if (!cubeGroupObj && cubeObjs.length === 0) {
              cubeGroupObj = splineApp.findObjectByName("Group") || splineApp.findObjectByName("group") || splineApp.findObjectByName("Cubes");
            }

            // Save default position and rotation values
            if (sphereObj && sphereObj.position && sphereObj.rotation) {
              sphereObj._initPos = { x: sphereObj.position.x, y: sphereObj.position.y, z: sphereObj.position.z };
              sphereObj._initRot = { x: sphereObj.rotation.x, y: sphereObj.rotation.y, z: sphereObj.rotation.z };
            }
            if (cubeGroupObj && cubeGroupObj.position && cubeGroupObj.rotation) {
              cubeGroupObj._initPos = { x: cubeGroupObj.position.x, y: cubeGroupObj.position.y, z: cubeGroupObj.position.z };
              cubeGroupObj._initRot = { x: cubeGroupObj.rotation.x, y: cubeGroupObj.rotation.y, z: cubeGroupObj.rotation.z };
            }
            cubeObjs.forEach((cube) => {
              if (cube.position && cube.rotation) {
                cube._initPos = { x: cube.position.x, y: cube.position.y, z: cube.position.z };
                cube._initRot = { x: cube.rotation.x, y: cube.rotation.y, z: cube.rotation.z };
              }
            });

            splineChecked = true;
          } catch (e) {
            console.error("Error setting up Spline object references:", e);
          }
        };

        let heroRect = heroSection.getBoundingClientRect();
        const updateHeroRect = () => {
          heroRect = heroSection.getBoundingClientRect();
        };
        window.addEventListener("resize", updateHeroRect);

        const updateTick = () => {
          const dx = targetX - mouseX;
          const dy = targetY - mouseY;

          if (Math.abs(dx) < 0.0001 && Math.abs(dy) < 0.0001) {
            mouseX = targetX;
            mouseY = targetY;
            if (tickerActive) {
              gsap.ticker.remove(updateTick);
              tickerActive = false;
            }
          } else {
            mouseX += dx * 0.08;
            mouseY += dy * 0.08;
          }

          // Ensure objects are initialized
          checkSplineObjects();

          // 1. Animate the Golden Sphere (Slow and elegant)
          if (sphereObj && sphereObj._initPos && sphereObj.position && sphereObj.rotation) {
            sphereObj.position.x = sphereObj._initPos.x + mouseX * 60; // Max ±60px
            sphereObj.position.y = sphereObj._initPos.y - mouseY * 40; // Max ±40px
            sphereObj.position.z = sphereObj._initPos.z + (Math.abs(mouseX) + Math.abs(mouseY)) * 15; // Depth translation
            
            sphereObj.rotation.x = sphereObj._initRot.x - mouseY * 0.14; // Max 8° rotation
            sphereObj.rotation.y = sphereObj._initRot.y + mouseX * 0.14;
          }

          // 2. Animate the Cubes (Slightly faster than the sphere)
          if (cubeGroupObj && cubeGroupObj._initPos && cubeGroupObj.position && cubeGroupObj.rotation) {
            cubeGroupObj.position.x = cubeGroupObj._initPos.x + mouseX * 90; // ±90px
            cubeGroupObj.position.y = cubeGroupObj._initPos.y - mouseY * 60; // ±60px
            cubeGroupObj.position.z = cubeGroupObj._initPos.z - (Math.abs(mouseX) + Math.abs(mouseY)) * 25;
            
            cubeGroupObj.rotation.x = cubeGroupObj._initRot.x - mouseY * 0.17; // Max ~10° rotation
            cubeGroupObj.rotation.y = cubeGroupObj._initRot.y + mouseX * 0.17;
          } else if (cubeObjs.length > 0) {
            cubeObjs.forEach((cube) => {
              if (cube._initPos && cube.position && cube.rotation) {
                cube.position.x = cube._initPos.x + mouseX * 90;
                cube.position.y = cube._initPos.y - mouseY * 60;
                cube.position.z = cube._initPos.z - (Math.abs(mouseX) + Math.abs(mouseY)) * 25;
                
                cube.rotation.x = cube._initRot.x - mouseY * 0.17;
                cube.rotation.y = cube._initRot.y + mouseX * 0.17;
              }
            });
          }

          // Subtle overall baseline shift for depth comparison
          if (splineContainer) {
            gsap.set(splineContainer, {
              x: mouseX * 15,
              y: mouseY * 15,
              rotateY: mouseX * 4,
              rotateX: -mouseY * 4,
              transformPerspective: 1000
            });
          }

          if (heroContent) {
            gsap.set(heroContent, {
              x: mouseX * -15,
              y: mouseY * -15
            });
          }
        };

        const onMouseMove = (e: MouseEvent) => {
          const relativeX = (e.clientX - heroRect.left) / heroRect.width;
          const relativeY = (e.clientY - heroRect.top) / heroRect.height;

          targetX = relativeX - 0.5;
          targetY = relativeY - 0.5;

          if (goldLight) {
            goldLight.style.setProperty("--mx", `${e.clientX - heroRect.left}px`);
            goldLight.style.setProperty("--my", `${e.clientY - heroRect.top}px`);
          }

          if (!tickerActive) {
            gsap.ticker.add(updateTick);
            tickerActive = true;
          }
        };

        window.addEventListener("mousemove", onMouseMove, { passive: true });

        cleanups.push(() => {
          window.removeEventListener("mousemove", onMouseMove);
          window.removeEventListener("resize", updateHeroRect);
          if (tickerActive) {
            gsap.ticker.remove(updateTick);
          }
        });

        const magneticButtons = root.querySelectorAll<HTMLElement>(".magnetic-btn");
        magneticButtons.forEach((btn) => {
          let btnRect: DOMRect | null = null;

          const onBtnEnter = () => {
            btnRect = btn.getBoundingClientRect();
          };

          const onBtnMove = (e: MouseEvent) => {
            if (window.innerWidth < 768) return;
            if (!btnRect) btnRect = btn.getBoundingClientRect();
            const x = e.clientX - btnRect.left - btnRect.width / 2;
            const y = e.clientY - btnRect.top - btnRect.height / 2;

            gsap.to(btn, {
              x: x * 0.35,
              y: y * 0.35,
              duration: 0.3,
              ease: "power2.out"
            });
          };

          const onBtnLeave = () => {
            btnRect = null;
            if (window.innerWidth < 768) return;
            gsap.to(btn, {
              x: 0,
              y: 0,
              duration: 0.6,
              ease: "elastic.out(1, 0.3)"
            });
          };

          btn.addEventListener("mouseenter", onBtnEnter);
          btn.addEventListener("mousemove", onBtnMove, { passive: true });
          btn.addEventListener("mouseleave", onBtnLeave);

          cleanups.push(() => {
            btn.removeEventListener("mouseenter", onBtnEnter);
            btn.removeEventListener("mousemove", onBtnMove);
            btn.removeEventListener("mouseleave", onBtnLeave);
          });
        });
      };

      const setupFlowerScrollVideo = () => {
        if (reduceMotion) return;
        const video = root.querySelector<HTMLVideoElement>("#global-bg-video");
        const canvas = root.querySelector<HTMLCanvasElement>("#global-bg-video-canvas");
        const heroSection = root.querySelector<HTMLElement>("#hero");
        const flowerText = root.querySelector<HTMLElement>(".future-inner");
        const ctx = canvas?.getContext("2d");
        if (!video || !canvas || !ctx) return;

        video.autoplay = false;
        video.loop = false;
        video.removeAttribute("autoplay");
        video.removeAttribute("loop");
        video.muted = true;
        video.playsInline = true;
        video.pause();
        video.currentTime = 0;

        const mobileQuery = window.matchMedia("(max-width: 767px)");
        const scrubState = { progress: 0, opacity: 0 };
        let scrubTimeline: gsap.core.Timeline | null = null;
        let animationFrame = 0;
        let canvasWidth = 0;
        let canvasHeight = 0;
        let frames: ImageBitmap[] = [];
        let framesReady = false;
        let lastFrameIndex = -1;
        let videoSeeking = false;
        let disposed = false;
        let objectUrl = "";

        const getHeroEnd = () => {
          return heroSection ? heroSection.offsetTop + heroSection.offsetHeight : window.innerHeight;
        };

        const getFlowerEnd = (heroEnd: number) => {
          if (mobileQuery.matches) {
            return document.documentElement.scrollHeight - window.innerHeight;
          }

          return document.documentElement.scrollHeight - window.innerHeight;
        };

        const getFadeRatio = () => {
          const heroEnd = getHeroEnd();
          const scrubEnd = getFlowerEnd(heroEnd);
          const range = Math.max(1, scrubEnd - heroEnd);
          const fadeDistance = mobileQuery.matches ? window.innerHeight * 0.22 : window.innerHeight * 0.85;
          return gsap.utils.clamp(0.05, 1, fadeDistance / range);
        };

        const getVideoDuration = () => {
          return Number.isFinite(video.duration) && video.duration > 0 ? video.duration : 0;
        };

        const resizeCanvas = () => {
          const dpr = Math.min(window.devicePixelRatio || 1, 2);
          const rect = canvas.getBoundingClientRect();
          const width = Math.max(1, Math.round((rect.width || window.innerWidth) * dpr));
          const height = Math.max(1, Math.round((rect.height || window.innerHeight) * dpr));

          if (canvas.width !== width || canvas.height !== height) {
            canvas.width = width;
            canvas.height = height;
            lastFrameIndex = -1;
          }
          canvasWidth = canvas.width;
          canvasHeight = canvas.height;
        };

        const drawCoverFrame = (frame: ImageBitmap) => {
          if (!canvasWidth || !canvasHeight) resizeCanvas();

          const scale = Math.max(canvasWidth / frame.width, canvasHeight / frame.height);
          const drawWidth = frame.width * scale;
          const drawHeight = frame.height * scale;

          ctx.clearRect(0, 0, canvasWidth, canvasHeight);
          ctx.drawImage(frame, (canvasWidth - drawWidth) / 2, (canvasHeight - drawHeight) / 2, drawWidth, drawHeight);
        };

        const renderFrame = () => {
          animationFrame = 0;

          const opacity = gsap.utils.clamp(0, 0.65, scrubState.opacity);
          const progress = gsap.utils.clamp(0, 1, scrubState.progress);

          if (framesReady && frames.length > 0) {
            canvas.style.visibility = opacity > 0 ? "visible" : "hidden";
            canvas.style.opacity = String(opacity);
            video.style.opacity = "0";

            const frameIndex = Math.round(progress * (frames.length - 1));
            if (frameIndex !== lastFrameIndex && frames[frameIndex]) {
              lastFrameIndex = frameIndex;
              drawCoverFrame(frames[frameIndex]);
            }
            return;
          }

          canvas.style.visibility = "hidden";
          canvas.style.opacity = "0";
          video.style.visibility = opacity > 0 ? "visible" : "hidden";
          video.style.opacity = String(opacity);

          const duration = getVideoDuration();
          if (!duration || video.readyState < 1) return;

          const targetTime = progress * duration;
          if (!videoSeeking && Math.abs(video.currentTime - targetTime) > 0.001) {
            videoSeeking = true;
            video.currentTime = targetTime;
          }
        };

        const scheduleRender = () => {
          if (disposed || animationFrame) return;
          animationFrame = window.requestAnimationFrame(renderFrame);
        };

        const killScrubTimeline = () => {
          const timelineWithTrigger = scrubTimeline as (gsap.core.Timeline & { scrollTrigger?: { kill: () => void } }) | null;
          timelineWithTrigger?.scrollTrigger?.kill();
          scrubTimeline?.kill();
          scrubTimeline = null;
        };

        const buildScrubTimeline = () => {
          killScrubTimeline();
          scrubState.progress = 0;
          scrubState.opacity = 0;
          gsap.set(video, { opacity: 0 });
          gsap.set(canvas, { opacity: 0 });
          if (flowerText) {
            gsap.set(flowerText, {
              autoAlpha: 0,
              y: 40,
              filter: "blur(8px)",
              willChange: "transform, opacity, filter"
            });
          }

          scrubTimeline = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: document.body,
              start: () => getHeroEnd(),
              end: () => getFlowerEnd(getHeroEnd()),
              scrub: true,
              pin: false,
              invalidateOnRefresh: true,
              onRefresh: scheduleRender
            }
          });

          scrubTimeline
            .to(
              scrubState,
              {
                progress: 1,
                duration: 1,
                ease: "none",
                onUpdate: scheduleRender
              },
              0
            )
            .to(
              scrubState,
              {
                opacity: 0.65,
                duration: getFadeRatio(),
                ease: "none",
                onUpdate: scheduleRender
              },
              0
            );

          if (flowerText) {
            scrubTimeline.fromTo(
              flowerText,
              { autoAlpha: 0, y: 40, filter: "blur(8px)" },
              {
                autoAlpha: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 0.38,
                ease: "none",
                immediateRender: false
              },
              0.62
            );
          }

          if (window.scrollY < getHeroEnd()) {
            video.currentTime = 0;
            scrubState.progress = 0;
            scrubState.opacity = 0;
            if (flowerText) {
              gsap.set(flowerText, { autoAlpha: 0, y: 40, filter: "blur(8px)" });
            }
          }

          scheduleRender();
        };

        const waitForVideoEvent = (target: HTMLVideoElement, eventName: string, timeoutMs: number) => {
          return new Promise<void>((resolve, reject) => {
            const onEvent = () => {
              window.clearTimeout(timeout);
              target.removeEventListener(eventName, onEvent);
              resolve();
            };

            const timeout = window.setTimeout(() => {
              target.removeEventListener(eventName, onEvent);
              reject(new Error(`${eventName} timeout`));
            }, timeoutMs);

            target.addEventListener(eventName, onEvent);
          });
        };

        const extractFrames = async () => {
          try {
            const source = video.currentSrc || video.src;
            const response = await fetch(source, { mode: "cors", cache: "force-cache" });
            const blob = await response.blob();
            if (disposed) return;

            objectUrl = URL.createObjectURL(blob);

            const decoder = document.createElement("video");
            decoder.muted = true;
            decoder.playsInline = true;
            decoder.crossOrigin = "anonymous";
            decoder.preload = "auto";
            decoder.src = objectUrl;

            await waitForVideoEvent(decoder, "loadedmetadata", 15000);
            if (disposed || !decoder.duration || !Number.isFinite(decoder.duration)) return;

            const scale = Math.min(1, 1280 / Math.max(1, decoder.videoWidth));
            const scaledWidth = Math.max(1, Math.round(decoder.videoWidth * scale));
            const scaledHeight = Math.max(1, Math.round(decoder.videoHeight * scale));
            const frameCount = Math.max(30, Math.min(120, Math.round(decoder.duration * 24)));

            for (let index = 0; index < frameCount && !disposed; index += 1) {
              const targetTime = (index / Math.max(1, frameCount - 1)) * Math.max(0, decoder.duration - 0.05);
              decoder.currentTime = targetTime;
              await waitForVideoEvent(decoder, "seeked", 3000);
              if (disposed) return;

              const bitmap = await createImageBitmap(decoder, {
                resizeWidth: scaledWidth,
                resizeHeight: scaledHeight
              });
              frames.push(bitmap);
            }

            if (frames.length > 0 && !disposed) {
              framesReady = true;
              video.style.visibility = "hidden";
              canvas.style.visibility = "visible";
              lastFrameIndex = -1;
              scheduleRender();
            }
          } catch {
            framesReady = false;
            canvas.style.visibility = "hidden";
            scheduleRender();
          } finally {
            if (objectUrl) {
              URL.revokeObjectURL(objectUrl);
              objectUrl = "";
            }
          }
        };

        const onMetadata = () => {
          scheduleRender();
          ScrollTrigger.refresh();
        };

        const onSeekDone = () => {
          videoSeeking = false;
        };

        const onResize = () => {
          resizeCanvas();
          lastFrameIndex = -1;
          scheduleRender();
        };

        resizeCanvas();
        buildScrubTimeline();

        video.addEventListener("seeked", onSeekDone);
        video.addEventListener("stalled", onSeekDone);
        video.addEventListener("waiting", onSeekDone);
        video.addEventListener("loadedmetadata", onMetadata);
        window.addEventListener("resize", onResize);
        video.load();
        void extractFrames();

        cleanups.push(() => {
          disposed = true;
          window.cancelAnimationFrame(animationFrame);
          window.removeEventListener("resize", onResize);
          video.removeEventListener("seeked", onSeekDone);
          video.removeEventListener("stalled", onSeekDone);
          video.removeEventListener("waiting", onSeekDone);
          video.removeEventListener("loadedmetadata", onMetadata);
          killScrubTimeline();
          frames.forEach((frame) => frame.close());
          frames = [];
          if (objectUrl) {
            URL.revokeObjectURL(objectUrl);
          }
        });
      };

      setupFlowerScrollVideo();
      setupParticles();
      setupHeroInteractions();

      const mm = gsap.matchMedia();

      mm.add(
        {
          reduceMotion: "(prefers-reduced-motion: reduce)",
          isMobile: "(max-width: 767px)",
          isMobileOrTablet: "(max-width: 1024px)"
        },
        (context) => {
          const { reduceMotion: prefersReduced, isMobileOrTablet } = context.conditions ?? {};

          const counterElements = gsap.utils.toArray<HTMLElement>("[data-counter]");
          const setCountersFinal = () => {
            counterElements.forEach((counter) => {
              counter.textContent = `${counter.dataset.counter ?? "0"}${counter.dataset.suffix ?? ""}`;
            });
          };

          if (prefersReduced) {
            setCountersFinal();
            gsap.set(
              ".foundation-nav, .hero-subtitle, .hero-title, .hero-description, .hero-actions, .hero-trust-line, .fixed-cards, .future-inner, .after-section, .vertical-copy, .vertical-media, .process-step",
              {
                autoAlpha: 1,
                y: 0,
                filter: "none"
              }
            );
            gsap.set(".process-line-fill", { scaleX: 1 });
            return;
          }

          const heroRevealTargets = [
            ".foundation-nav",
            ".hero-subtitle",
            ".hero-title",
            ".hero-description",
            ".hero-actions",
            ".hero-actions > *",
            ".hero-trust-line"
          ].join(", ");

          gsap.set(heroRevealTargets, {
            animation: "none",
            willChange: "transform, opacity, filter"
          });
          gsap.set(".foundation-nav", { autoAlpha: 0, y: -18, filter: "blur(0px)" });
          gsap.set(".hero-subtitle, .hero-description", { autoAlpha: 0, y: 18, filter: "blur(6px)" });
          gsap.set(".hero-title", { autoAlpha: 0, y: 30, filter: "blur(8px)" });
          gsap.set(".hero-actions", { autoAlpha: 0, y: 22, filter: "blur(6px)" });
          gsap.set(".hero-actions > *, .hero-trust-line", { autoAlpha: 0, y: 18, filter: "blur(0px)" });

          const intro = gsap.timeline({
            defaults: { duration: 0.9, ease: "power3.out" },
            onComplete: () => {
              gsap.set(heroRevealTargets, { willChange: "auto" });
            }
          });

          intro
            .to(".foundation-nav", { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.75 })
            .to(".hero-subtitle", { autoAlpha: 1, y: 0, filter: "blur(0px)" }, "-=0.36")
            .to(".hero-title", { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 1.05 }, "-=0.52")
            .to(".hero-description", { autoAlpha: 1, y: 0, filter: "blur(0px)" }, "-=0.58")
            .to(".hero-actions", { autoAlpha: 1, y: 0, filter: "blur(0px)" }, "-=0.52")
            .to(".hero-actions > *, .hero-trust-line", { autoAlpha: 1, y: 0, stagger: 0.08 }, "-=0.5");

          gsap.to(".hero-stage", {
            autoAlpha: 0,
            y: -64,
            ease: "none",
            scrollTrigger: {
              trigger: ".hero-stage",
              start: "top top",
              end: "30% top",
              scrub: true
            }
          });

          gsap.utils.toArray<HTMLElement>(".after-section:not(.vertical-section):not(.process-panel)").forEach((section) => {
            if (isMobileOrTablet && section.id === "partners") return;

            gsap.fromTo(
              section,
              { autoAlpha: 0, y: 52, filter: "blur(8px)" },
              {
                autoAlpha: 1,
                y: 0,
                filter: "blur(0px)",
                ease: "none",
                scrollTrigger: {
                  trigger: section,
                  start: "top 86%",
                  end: "top 62%",
                  scrub: true
                }
              }
            );
          });



          if (isMobileOrTablet) {
            gsap.set("#partners, #partners .partners-content-container > *, #partners .marquee-container", {
              autoAlpha: 1,
              y: 0,
              clearProps: "opacity,visibility,transform"
            });
          } else {
            // Reveal partners header & marquee containers
            gsap.fromTo(
              "#partners .partners-content-container > *, #partners .marquee-container",
              { autoAlpha: 0, y: 32, filter: "blur(8px)" },
              {
                autoAlpha: 1,
                y: 0,
                filter: "blur(0px)",
                ease: "none",
                stagger: 0.1,
                scrollTrigger: {
                  trigger: "#partners",
                  start: "top 84%",
                  end: "top 62%",
                  scrub: true
                }
              }
            );
          }

          gsap.utils.toArray<HTMLElement>(".vertical-section").forEach((section) => {
            const media = section.querySelector(".vertical-media");
            const copyItems = section.querySelectorAll(".vertical-copy > *");

            gsap.fromTo(
              copyItems,
              { autoAlpha: 0, y: 26, filter: "blur(6px)" },
              {
                autoAlpha: 1,
                y: 0,
                filter: "blur(0px)",
                ease: "none",
                stagger: 0.08,
                scrollTrigger: {
                  trigger: section,
                  start: "top 82%",
                  end: "top 60%",
                  scrub: true
                }
              }
            );

            if (media) {
              gsap.fromTo(
                media,
                { autoAlpha: 0, y: 46, scale: 0.96, filter: "blur(8px)" },
                {
                  autoAlpha: 1,
                  y: 0,
                  scale: 1,
                  filter: "blur(0px)",
                  ease: "none",
                  scrollTrigger: {
                    trigger: section,
                    start: "top 82%",
                    end: "top 58%",
                    scrub: true
                  }
                }
              );
            }
          });

          gsap.fromTo(
            ".process-heading > *",
            { autoAlpha: 0, y: 28, filter: "blur(6px)" },
            {
              autoAlpha: 1,
              y: 0,
              filter: "blur(0px)",
              ease: "none",
              stagger: 0.08,
              scrollTrigger: {
                trigger: ".process-panel",
                start: "top 84%",
                end: "top 62%",
                scrub: true
              }
            }
          );

          const magneticCleanups = gsap.utils.toArray<HTMLElement>(".magnetic").map((button) => {
            const xTo = gsap.quickTo(button, "x", { duration: 0.36, ease: "power3.out" });
            const yTo = gsap.quickTo(button, "y", { duration: 0.36, ease: "power3.out" });
            let rect: DOMRect | null = null;

            const onEnter = () => {
              rect = button.getBoundingClientRect();
            };

            const onMove = (event: MouseEvent) => {
              if (!rect) rect = button.getBoundingClientRect();
              xTo((event.clientX - rect.left - rect.width / 2) * 0.12);
              yTo((event.clientY - rect.top - rect.height / 2) * 0.12);
            };

            const onLeave = () => {
              rect = null;
              xTo(0);
              yTo(0);
            };

            button.addEventListener("mouseenter", onEnter);
            button.addEventListener("mousemove", onMove, { passive: true });
            button.addEventListener("mouseleave", onLeave);

            return () => {
              button.removeEventListener("mouseenter", onEnter);
              button.removeEventListener("mousemove", onMove);
              button.removeEventListener("mouseleave", onLeave);
              gsap.killTweensOf(button);
            };
          });

          return () => {
            magneticCleanups.forEach((cleanup) => cleanup());
          };
        }
      );

      cleanups.push(() => mm.revert());

      return () => {
        cleanups.forEach((cleanup) => cleanup());
      };
    },
    { scope: rootRef }
  );

  return (
    <main ref={rootRef} className="velora-foundation">
      {/* Dynamic JSON-LD Structured Data Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <a className="skip-link" href="#services">
        {content.a11y.skipToContent}
      </a>

      {/* Interactive Floating Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="cta-button"
          aria-label={content.a11y.backToTop}
          style={{
            position: "fixed",
            bottom: consentVisible ? "180px" : "24px",
            right: "24px",
            zIndex: 998,
            width: "44px",
            height: "44px",
            minHeight: "44px",
            borderRadius: "50%",
            padding: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 8px 30px rgba(0,0,0,0.5)",
            cursor: "pointer",
            transition: "bottom 0.3s ease"
          }}
        >
          <ArrowUp size={20} />
        </button>
      )}

      {/* Interactive Cookie Consent Banner */}
      {consentVisible && (
        <div
          className="cookie-consent-bar"
          style={{
            position: "fixed",
            bottom: "24px",
            left: "24px",
            right: "24px",
            zIndex: 999,
            background: "rgba(8, 8, 8, 0.92)",
            border: "1px solid rgba(248, 232, 176, 0.2)",
            borderRadius: "12px",
            padding: "24px",
            boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
            backdropFilter: "blur(24px)",
            display: "flex",
            flexDirection: "column",
            gap: "16px"
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "16px" }}>
            <div style={{ flex: "1 1 450px" }}>
              <h4 style={{ color: "white", margin: "0 0 6px", fontSize: "15px", fontWeight: 700 }}>
                {content.cookieConsent.title}
              </h4>
              <p style={{ color: "rgba(255,255,255,0.7)", margin: 0, fontSize: "13px", lineHeight: 1.5 }}>
                {content.cookieConsent.description}{" "}
                <Link href={locale === "fr" ? "/cookies" : locale === "en" ? "/en/cookies" : "/es/cookies"} style={{ color: "var(--gold-light)", textDecoration: "underline" }}>
                  {content.footer.cookiePolicy}
                </Link>
              </p>
            </div>
            
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <button
                onClick={() => setCustomizeActive(!customizeActive)}
                className="secondary-button"
                style={{ height: "40px", minHeight: "40px", fontSize: "12px", padding: "0 14px", cursor: "pointer" }}
              >
                {content.cookieConsent.customize}
              </button>
              <button
                onClick={handleRejectAllCookies}
                className="secondary-button"
                style={{ height: "40px", minHeight: "40px", fontSize: "12px", padding: "0 14px", cursor: "pointer" }}
              >
                {content.cookieConsent.rejectAll}
              </button>
              <button
                onClick={handleAcceptAllCookies}
                className="cta-button"
                style={{ height: "40px", minHeight: "40px", fontSize: "12px", padding: "0 14px", cursor: "pointer" }}
              >
                {content.cookieConsent.acceptAll}
              </button>
            </div>
          </div>

          {customizeActive && (
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "16px", display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "center" }}>
              <label style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "rgba(255,255,255,0.8)", cursor: "not-allowed" }}>
                <input type="checkbox" checked disabled style={{ accentColor: "var(--gold)" }} />
                {content.cookieConsent.necessary}
              </label>
              <label style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "rgba(255,255,255,0.8)", cursor: "pointer" }}>
                <input
                  type="checkbox"
                  checked={analyticsAccepted}
                  onChange={(e) => setAnalyticsAccepted(e.target.checked)}
                  style={{ accentColor: "var(--gold)" }}
                />
                {content.cookieConsent.analytics}
              </label>
              <label style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "rgba(255,255,255,0.8)", cursor: "pointer" }}>
                <input
                  type="checkbox"
                  checked={marketingAccepted}
                  onChange={(e) => setMarketingAccepted(e.target.checked)}
                  style={{ accentColor: "var(--gold)" }}
                />
                {content.cookieConsent.marketing}
              </label>
              <button
                onClick={handleSaveCustomCookies}
                className="cta-button"
                style={{ height: "36px", minHeight: "36px", fontSize: "12px", padding: "0 12px", marginLeft: "auto", cursor: "pointer" }}
              >
                {content.cookieConsent.save}
              </button>
            </div>
          )}
        </div>
      )}

      {/* 1. Global Scroll Video Backdrop */}
      <div 
        id="global-scroll-video-container" 
        className="fixed inset-0 z-0 pointer-events-none"
        style={{ background: "#010101" }}
      >
        <canvas
          id="global-bg-video-canvas"
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ opacity: 0, visibility: "hidden" }}
          aria-hidden="true"
        />
        <video
          id="global-bg-video"
          className="w-full h-full object-cover pointer-events-none"
          style={{ opacity: 0 }}
          muted
          playsInline
          preload="auto"
          crossOrigin="anonymous"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260616_212935_bbf608da-62d1-4f25-9be4-c346e4d09cc8.mp4"
        />
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      </div>

      {/* 2. Enhanced Particles Canvas Layer */}
      <canvas
        ref={particlesRef}
        className="particles-canvas"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          pointerEvents: "none"
        }}
      />

      <div className="site-content-flow relative z-10 w-full flex flex-col items-center">
        {/* Navigation Bar */}
        <Navbar content={content} locale={locale} />

        {/* Hero Section */}
        <HeroSection 
          content={content} 
          isMounted={isMounted} 
          isHeroVisible={isHeroVisible}
          onSplineLoad={onSplineLoad}
        />

        {/* Trusted by Industry Leaders Section */}
        <PartnersSection content={content} />

        <div className="cards-trigger" aria-hidden="true" />

        {/* Solutions / Future section */}
        <SolutionsSection content={content} />

        {/* Vertical details / services section */}
        {content.verticals.map((section, index) => (
          <VerticalSection
            key={section.id}
            section={section}
            index={index}
            content={content}
          />
        ))}

        {/* Showcase (Case Studies) Section */}
        <ProjectsSection content={content} />

        {/* Testimonials Section */}
        <TestimonialsSection content={content} />

        {/* FAQ Section */}
        <FaqSection content={content} />

        {/* Why Velora section */}
        <WhyVeloraSection content={content} onServiceClick={setActiveService} />

        {/* Process Section */}
        <ProcessSection content={content} />

        {/* Contact Form Section */}
        <ContactSection
          content={content}
          formData={formData}
          status={status}
          errorMessage={errorMessage}
          errors={errors}
          captcha={captcha}
          handleFormChange={handleFormChange}
          handleContactSubmit={handleContactSubmit}
        />

        {/* Footer */}
        <Footer content={content} locale={locale} />
      </div>

      {/* Modal Dialog for detailed services information */}
      {activeService !== null && (
        <div
          onClick={() => setActiveService(null)}
          className="service-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="service-modal-card"
          >
            <button
              onClick={() => setActiveService(null)}
              className="service-modal-close"
              aria-label="Close"
            >
              <X size={20} />
            </button>
            <span>{String(activeService + 1).padStart(2, "0")}</span>
            <h2 id="modal-title">{content.services[activeService]?.title}</h2>
            <p>{content.services[activeService]?.description}</p>
            <div className="service-modal-points">
              {content.services[activeService]?.benefits?.map((point: string) => (
                <div className="service-modal-point" key={point}>
                  <div className="point-dot" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
            <a
              onClick={() => setActiveService(null)}
              className="cta-button"
              href="#contact"
            >
              {content.services[activeService]?.cta}
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      )}
    </main>
  );
}
