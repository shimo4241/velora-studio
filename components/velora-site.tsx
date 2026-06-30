"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ChevronDown, ExternalLink, Mail, MessageCircle } from "lucide-react";
import { type Dictionary, type Locale, localeLinks } from "@/lib/i18n";

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

const videoUrl =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260616_212935_bbf608da-62d1-4f25-9be4-c346e4d09cc8.mp4";

const navItems = [
  ["home", "#hero"],
  ["services", "#services"],
  ["solutions", "#solutions"],
  ["projects", "#velora-apps"],
  ["about", "#why-velora"],
  ["contact", "#contact"]
] as const;

export function VeloraSite({ locale, content }: VeloraSiteProps) {
  const rootRef = useRef<HTMLElement>(null);
  const videoCanvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const particlesRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const fixedCards = root.querySelector<HTMLElement>(".fixed-cards");
    const cardsGrid = root.querySelector<HTMLElement>(".cards-grid");
    const trigger = root.querySelector<HTMLElement>(".cards-trigger");
    if (!fixedCards || !cardsGrid || !trigger) return;

    let animationFrame = 0;

    const renderCards = () => {
      const rect = trigger.getBoundingClientRect();
      const triggerTop = rect.top + window.scrollY;
      const triggerHeight = rect.height;
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

    renderCards();
    window.addEventListener("scroll", scheduleRender, { passive: true });
    window.addEventListener("resize", scheduleRender);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", scheduleRender);
      window.removeEventListener("resize", scheduleRender);
    };
  }, []);

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

      const updateProcessProgress = () => {
        window.cancelAnimationFrame(frame);
        frame = window.requestAnimationFrame(() => {
          const rect = processPanel.getBoundingClientRect();
          const start = window.innerHeight * 0.78;
          const end = -rect.height * 0.18;
          const progress = gsap.utils.clamp(0, 1, (start - rect.top) / (start - end));
          gsap.set(processFill, { scaleX: progress });
        });
      };

      updateProcessProgress();
      window.addEventListener("scroll", updateProcessProgress, { passive: true });
      window.addEventListener("resize", updateProcessProgress);

      cleanups.push(() => {
        window.cancelAnimationFrame(frame);
        window.removeEventListener("scroll", updateProcessProgress);
        window.removeEventListener("resize", updateProcessProgress);
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

  useGSAP(
    () => {
      const root = rootRef.current;
      const videoCanvas = videoCanvasRef.current;
      const videoElement = videoRef.current;
      const particlesCanvas = particlesRef.current;

      if (!root || !videoCanvas || !videoElement || !particlesCanvas) return;

      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const cleanups: Array<() => void> = [];

      const setupScrollVideo = () => {
        const ctx = videoCanvas.getContext("2d");
        if (!ctx) return;

        let frames: ImageBitmap[] = [];
        let framesReady = false;
        let lastFrameIndex = -1;
        let videoSeeking = false;
        let animationId = 0;
        let disposed = false;

        const resizeCanvas = () => {
          const dpr = Math.min(window.devicePixelRatio || 1, 2);
          const rect = videoCanvas.getBoundingClientRect();
          const width = Math.max(1, Math.round(rect.width * dpr));
          const height = Math.max(1, Math.round(rect.height * dpr));

          if (videoCanvas.width !== width || videoCanvas.height !== height) {
            videoCanvas.width = width;
            videoCanvas.height = height;
            lastFrameIndex = -1;
          }
        };

        const getProgress = () => {
          const start = window.innerHeight * 0.5;
          const end = document.documentElement.scrollHeight - window.innerHeight;
          const range = Math.max(1, end - start);
          return gsap.utils.clamp(0, 1, (window.scrollY - start) / range);
        };

        const drawFrame = (frame: ImageBitmap) => {
          const canvasWidth = videoCanvas.width;
          const canvasHeight = videoCanvas.height;
          const scale = Math.max(canvasWidth / frame.width, canvasHeight / frame.height);
          const drawWidth = frame.width * scale;
          const drawHeight = frame.height * scale;

          ctx.clearRect(0, 0, canvasWidth, canvasHeight);
          ctx.drawImage(frame, (canvasWidth - drawWidth) / 2, (canvasHeight - drawHeight) / 2, drawWidth, drawHeight);
        };

        const extractFrames = async () => {
          try {
            const response = await fetch(videoUrl, { mode: "cors" });
            const blob = await response.blob();
            const objectUrl = URL.createObjectURL(blob);
            const video = document.createElement("video");

            video.muted = true;
            video.playsInline = true;
            video.crossOrigin = "anonymous";
            video.preload = "auto";
            video.src = objectUrl;

            await new Promise<void>((resolve, reject) => {
              video.onloadedmetadata = () => resolve();
              video.onerror = () => reject(new Error("Video metadata failed"));
              window.setTimeout(() => reject(new Error("Video metadata timeout")), 15000);
            });

            const scale = Math.min(1, 1280 / video.videoWidth);
            const scaledWidth = Math.max(1, Math.round(video.videoWidth * scale));
            const scaledHeight = Math.max(1, Math.round(video.videoHeight * scale));
            const frameCount = reduceMotion ? 1 : Math.max(36, Math.min(120, Math.round(video.duration * 24)));
            const extracted: ImageBitmap[] = [];

            for (let index = 0; index < frameCount && !disposed; index += 1) {
              const time = frameCount === 1 ? 0 : (index / (frameCount - 1)) * Math.max(0, video.duration - 0.05);
              video.currentTime = time;

              await new Promise<void>((resolve, reject) => {
                const onSeeked = () => {
                  video.removeEventListener("seeked", onSeeked);
                  resolve();
                };

                video.addEventListener("seeked", onSeeked);
                window.setTimeout(() => {
                  video.removeEventListener("seeked", onSeeked);
                  reject(new Error("Video seek timeout"));
                }, 3000);
              });

              extracted.push(await createImageBitmap(video, { resizeWidth: scaledWidth, resizeHeight: scaledHeight }));
            }

            if (!disposed && extracted.length > 0) {
              frames = extracted;
              framesReady = true;
              videoCanvas.style.visibility = "visible";
              videoElement.style.display = "none";
              drawFrame(frames[0]);
            }

            URL.revokeObjectURL(objectUrl);
          } catch {
            videoCanvas.style.visibility = "hidden";
            videoElement.style.display = "block";
          }
        };

        const tick = () => {
          resizeCanvas();

          if (framesReady && frames.length > 0) {
            const frameIndex = Math.round(getProgress() * (frames.length - 1));

            if (frameIndex !== lastFrameIndex && frames[frameIndex]) {
              lastFrameIndex = frameIndex;
              drawFrame(frames[frameIndex]);
            }
          } else if (videoElement.duration && Number.isFinite(videoElement.duration) && videoElement.readyState >= 1) {
            const targetTime = getProgress() * videoElement.duration;

            if (!videoSeeking && Math.abs(videoElement.currentTime - targetTime) > 0.001) {
              videoSeeking = true;
              try {
                videoElement.currentTime = targetTime;
              } catch {
                videoSeeking = false;
              }
            }
          }

          if (!reduceMotion && !disposed) {
            animationId = window.requestAnimationFrame(tick);
          }
        };

        const onSeeked = () => {
          videoSeeking = false;
        };

        const onResize = () => {
          resizeCanvas();
          lastFrameIndex = -1;
          if (reduceMotion && frames[0]) drawFrame(frames[0]);
        };

        videoElement.addEventListener("seeked", onSeeked);
        videoElement.addEventListener("stalled", onSeeked);
        window.addEventListener("resize", onResize);
        resizeCanvas();
        extractFrames();
        tick();

        cleanups.push(() => {
          disposed = true;
          window.cancelAnimationFrame(animationId);
          window.removeEventListener("resize", onResize);
          videoElement.removeEventListener("seeked", onSeeked);
          videoElement.removeEventListener("stalled", onSeeked);
          frames.forEach((frame) => frame.close());
          frames = [];
        });
      };

      const setupParticles = () => {
        const ctx = particlesCanvas.getContext("2d");
        if (!ctx) return;

        let width = 0;
        let height = 0;
        let animationId = 0;
        let particles: Particle[] = [];
        let disposed = false;

        const createParticles = () => {
          const count = Math.min(140, Math.max(38, Math.floor((width * height) / 11000)));
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
          const dpr = Math.min(window.devicePixelRatio || 1, 2);
          width = window.innerWidth;
          height = window.innerHeight;
          particlesCanvas.width = Math.max(1, Math.round(width * dpr));
          particlesCanvas.height = Math.max(1, Math.round(height * dpr));
          ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
          createParticles();
        };

        const drawParticles = () => {
          ctx.clearRect(0, 0, width, height);
          ctx.globalCompositeOperation = "lighter";

          particles.forEach((particle) => {
            if (!reduceMotion) {
              particle.x += particle.vx;
              particle.y += particle.vy;

              if (particle.x < 0) particle.x = width;
              if (particle.x > width) particle.x = 0;
              if (particle.y < 0) particle.y = height;
              if (particle.y > height) particle.y = 0;
            }

            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle =
              particle.tone === "light"
                ? `rgba(248,232,176,${particle.opacity})`
                : `rgba(200,152,72,${particle.opacity})`;
            ctx.fill();
          });

          ctx.globalCompositeOperation = "source-over";

          if (!reduceMotion && !disposed) {
            animationId = window.requestAnimationFrame(drawParticles);
          }
        };

        const onResize = () => {
          resizeParticles();
          if (reduceMotion) drawParticles();
        };

        resizeParticles();
        drawParticles();
        window.addEventListener("resize", onResize);

        cleanups.push(() => {
          disposed = true;
          window.cancelAnimationFrame(animationId);
          window.removeEventListener("resize", onResize);
        });
      };

      setupScrollVideo();
      setupParticles();

      const mm = gsap.matchMedia();

      mm.add(
        {
          reduceMotion: "(prefers-reduced-motion: reduce)",
          isMobile: "(max-width: 767px)"
        },
        (context) => {
          const { reduceMotion: prefersReduced } = context.conditions ?? {};

          const counterElements = gsap.utils.toArray<HTMLElement>("[data-counter]");
          const setCountersFinal = () => {
            counterElements.forEach((counter) => {
              counter.textContent = `${counter.dataset.counter ?? "0"}${counter.dataset.suffix ?? ""}`;
            });
          };

          if (prefersReduced) {
            setCountersFinal();
            gsap.set(
              ".foundation-nav, .hero-subtitle, .hero-title, .hero-description, .hero-actions, .hero-stats, .bounce-arrow, .fixed-cards, .future-inner, .after-section, .vertical-copy, .vertical-media, .process-step",
              {
                autoAlpha: 1,
                y: 0,
                filter: "none"
              }
            );
            gsap.set(".process-line-fill", { scaleX: 1 });
            return;
          }

          const intro = gsap.timeline({ defaults: { duration: 0.85, ease: "power3.out" } });

          intro
            .from(".foundation-nav", { autoAlpha: 0, y: -18 })
            .from(".hero-subtitle", { autoAlpha: 0, y: 18 }, "-=0.44")
            .from(".hero-title", { autoAlpha: 0, y: 30, filter: "blur(8px)" }, "-=0.5")
            .from(".hero-description", { autoAlpha: 0, y: 18 }, "-=0.52")
            .from(".hero-actions > *, .hero-stats", { autoAlpha: 0, y: 20, stagger: 0.08 }, "-=0.42")
            .from(".bounce-arrow", { autoAlpha: 0, y: -8 }, "-=0.22");

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

          gsap.fromTo(
            ".future-inner",
            { autoAlpha: 0, y: 32, filter: "blur(8px)" },
            {
              autoAlpha: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 1.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: ".future-section",
                start: "top 72%",
                once: true
              }
            }
          );

          gsap.utils.toArray<HTMLElement>(".after-section:not(.vertical-section):not(.process-panel)").forEach((section) => {
            gsap.fromTo(
              section,
              { autoAlpha: 0, y: 52 },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.92,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: section,
                  start: "top 78%",
                  once: true
                }
              }
            );
          });

          gsap.utils.toArray<HTMLElement>(".vertical-section").forEach((section) => {
            const media = section.querySelector(".vertical-media");
            const copyItems = section.querySelectorAll(".vertical-copy > *");

            gsap.fromTo(
              copyItems,
              { autoAlpha: 0, y: 26 },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.72,
                ease: "power3.out",
                stagger: 0.08,
                scrollTrigger: {
                  trigger: section,
                  start: "top 72%",
                  once: true
                }
              }
            );

            if (media) {
              gsap.fromTo(
                media,
                { autoAlpha: 0, y: 46, scale: 0.96 },
                {
                  autoAlpha: 1,
                  y: 0,
                  scale: 1,
                  duration: 1,
                  ease: "power3.out",
                  scrollTrigger: {
                    trigger: section,
                    start: "top 70%",
                    once: true
                  }
                }
              );
            }
          });

          gsap.fromTo(
            ".process-heading > *",
            { autoAlpha: 0, y: 28 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.72,
              ease: "power3.out",
              stagger: 0.08,
              scrollTrigger: {
                trigger: ".process-panel",
                start: "top 76%",
                once: true
              }
            }
          );

          const magneticCleanups = gsap.utils.toArray<HTMLElement>(".magnetic").map((button) => {
            const xTo = gsap.quickTo(button, "x", { duration: 0.36, ease: "power3.out" });
            const yTo = gsap.quickTo(button, "y", { duration: 0.36, ease: "power3.out" });

            const onMove = (event: MouseEvent) => {
              const rect = button.getBoundingClientRect();
              xTo((event.clientX - rect.left - rect.width / 2) * 0.12);
              yTo((event.clientY - rect.top - rect.height / 2) * 0.12);
            };
            const onLeave = () => {
              xTo(0);
              yTo(0);
            };

            button.addEventListener("mousemove", onMove);
            button.addEventListener("mouseleave", onLeave);

            return () => {
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
      <a className="skip-link" href="#services">
        {content.a11y.skipToContent}
      </a>

      <div className="scroll-video-container" aria-hidden="true">
        <canvas ref={videoCanvasRef} className="video-canvas" />
        <video
          ref={videoRef}
          className="video-fallback"
          muted
          playsInline
          preload="auto"
          crossOrigin="anonymous"
          src={videoUrl}
        />
        <div className="video-overlay" />
      </div>

      <canvas ref={particlesRef} className="particles-canvas" aria-hidden="true" />

      <div className="fixed-cards">
        <div className="cards-grid">
          {content.cards.map(([title, description]) => (
            <article className="feature-card" key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>

      <nav className="foundation-nav" aria-label={content.a11y.primaryNavigation}>
        <a href="#hero" className="nav-brand" aria-label={content.a11y.home}>
          <Image src="/brand/velora-horizontal.png" alt="VELORA" width={470} height={113} priority />
        </a>
        <div className="nav-links-foundation">
          {navItems.map(([key, href]) => (
            <a key={key} href={href}>
              {content.nav[key]}
            </a>
          ))}
        </div>
        <div className="language-switch" aria-label={content.nav.language}>
          {(Object.keys(localeLinks) as Locale[]).map((item) => (
            <a key={item} href={localeLinks[item]} aria-current={locale === item ? "page" : undefined}>
              {item.toUpperCase()}
            </a>
          ))}
        </div>
      </nav>

      <div className="cinematic-content">
        <section id="hero" className="hero-stage">
          <div className="hero-gradient" aria-hidden="true" />
          <div className="hero-content">
            <p className="hero-subtitle">{content.hero.subtitle}</p>
            <h1 className="hero-title">{content.hero.headline}</h1>
            <p className="hero-description">{content.hero.description}</p>
            <div className="hero-actions" aria-label={content.a11y.heroActions}>
              <a className="cta-button magnetic" href="#contact">
                {content.hero.primary}
                <ArrowRight aria-hidden="true" size={18} />
              </a>
              <a className="secondary-button magnetic" href="#velora-apps">
                {content.hero.secondary}
              </a>
            </div>
            <div className="hero-stats" aria-label={content.a11y.performanceStats}>
              {content.hero.stats.map((stat) => (
                <div className="stat-item" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <a className="bounce-arrow" href="#solutions" aria-label={content.a11y.scrollNext}>
            <ChevronDown aria-hidden="true" />
          </a>
        </section>

        <div className="scroll-spacer" aria-hidden="true" />
        <div className="cards-trigger" aria-hidden="true" />
        <div className="scroll-spacer short" aria-hidden="true" />

        <section id="solutions" className="future-section">
          <div className="future-inner">
            <p>{content.future.eyebrow}</p>
            <h2>{content.future.title}</h2>
            {content.future.lines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </div>
        </section>

        {content.verticals.map((section, index) => (
          <section
            id={section.id}
            key={section.id}
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
        ))}

        <section id="why-velora" className="after-section why-panel" aria-labelledby="why-title">
          <div className="why-heading">
            <div className="section-kicker">{content.why.eyebrow}</div>
            <h2 id="why-title">{content.why.title}</h2>
            <p>{content.why.description}</p>
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
            {content.services.map(([title, description], index) => (
              <article key={title} className="capability-item">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

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

        <section id="contact" className="after-section contact-panel" aria-labelledby="contact-title">
          <div>
            <div className="section-kicker">{content.contact.eyebrow}</div>
            <h2 id="contact-title">{content.contact.title}</h2>
            <p>{content.contact.description}</p>
          </div>
          <div className="contact-actions">
            <a className="cta-button magnetic" href={content.contact.primaryHref} target="_blank" rel="noreferrer">
              <MessageCircle aria-hidden="true" size={18} />
              {content.contact.primary}
            </a>
            <a className="secondary-button magnetic" href={content.contact.secondaryHref}>
              <Mail aria-hidden="true" size={18} />
              {content.contact.secondary}
            </a>
          </div>
        </section>

        <footer className="foundation-footer">
          <div className="footer-brand">
            <Image src="/brand/velora-horizontal.png" alt="VELORA" width={470} height={113} />
            <span>{content.footer.tagline}</span>
          </div>
          <div className="footer-column">
            <h2>{content.footer.servicesTitle}</h2>
            {content.footer.services.map((service) => (
              <a key={service} href="#services">
                {service}
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
          <div className="footer-bottom">&copy; 2026 Velora</div>
        </footer>
      </div>
    </main>
  );
}
