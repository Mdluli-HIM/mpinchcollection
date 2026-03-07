"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { homeHero } from "@/content/home";
import { gsap, useGSAP } from "@/lib/gsap";

import styles from "./Hero.module.css";

export function Hero() {
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const hero = root.current;
      if (!hero) return;

      const mm = gsap.matchMedia();
      const intro = gsap.utils.toArray<HTMLElement>("[data-hero-reveal]");
      const cards = gsap.utils.toArray<HTMLElement>("[data-look-card]");

      gsap.from(intro, {
        y: 28,
        autoAlpha: 0,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",
        delay: 0.1,
      });

      mm.add("(min-width: 961px)", () => {
        gsap.set(cards, {
          y: 36,
          autoAlpha: 0,
        });

        gsap.set("[data-hero-title]", {
          opacity: 0.78,
        });

        gsap.set("[data-hero-copy], [data-hero-actions], [data-hero-kicker]", {
          opacity: 0.9,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "+=150%",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        });

        tl.to(
          "[data-hero-word]",
          {
            scale: 1.04,
            autoAlpha: 0.08,
            ease: "none",
          },
          0
        )
          .to(
            "[data-hero-title]",
            {
              opacity: 1,
              yPercent: -2,
              ease: "none",
            },
            0
          )
          .to(
            "[data-hero-kicker], [data-hero-copy], [data-hero-actions]",
            {
              opacity: 1,
              yPercent: -3,
              ease: "none",
            },
            0
          )
          .to(
            "[data-hero-main-image]",
            {
              scale: 1.06,
              yPercent: 0,
              ease: "none",
            },
            0
          )
          .to(
            cards,
            {
              y: 0,
              autoAlpha: 1,
              stagger: 0.08,
              ease: "power2.out",
            },
            0.12
          );
      });

      return () => {
        mm.revert();
      };
    },
    { scope: root }
  );

  return (
    <section ref={root} className={styles.hero} data-header-theme="light">
      <div className={styles.word} data-hero-word aria-hidden="true">
        {homeHero.backgroundWord}
      </div>

      <div className={styles.topline} data-hero-reveal>
        <span className="eyebrow">{homeHero.eyebrowLeft}</span>
        <span className="eyebrow">{homeHero.eyebrowRight}</span>
      </div>

      <div className={styles.layout}>
        <div className={styles.intro}>
          <p
            className={`eyebrow ${styles.kicker}`}
            data-hero-reveal
            data-hero-kicker
          >
            {homeHero.kicker}
          </p>

          <h1 className={styles.title} data-hero-reveal data-hero-title>
            {homeHero.title}
          </h1>

          <p className={styles.copy} data-hero-reveal data-hero-copy>
            {homeHero.copy}
          </p>

          <div className={styles.actions} data-hero-reveal data-hero-actions>
            <Link href="/campaigns" className={styles.primaryAction}>
              Enter campaigns
            </Link>

            <Link href="/archive" className={styles.secondaryAction}>
              View archive
            </Link>
          </div>
        </div>

        <div className={styles.stage}>
          <article className={styles.mainFrame}>
            <div className={styles.mainImageWrap}>
              <Image
                src={homeHero.mainImage.src}
                alt={homeHero.mainImage.alt}
                fill
                priority
                sizes="(max-width: 960px) 100vw, 42vw"
                className={styles.mainImage}
                data-hero-main-image
              />
            </div>

            <div className={styles.mainMeta}>
              <span className="eyebrow">Issue 01 / quiet power</span>
              <p>Editorial streetwear for the modern city frame.</p>
            </div>
          </article>

          <div className={styles.lookRail}>
            {homeHero.looks.map((look) => (
              <article
                key={look.title}
                className={styles.lookCard}
                data-look-card
              >
                <div className={styles.lookImageWrap}>
                  <Image
                    src={look.image.src}
                    alt={look.image.alt}
                    fill
                    sizes="(max-width: 960px) 100vw, 22vw"
                    className={styles.lookImage}
                  />
                </div>

                <div className={styles.lookMeta}>
                  <span className="eyebrow">{look.title}</span>
                  <p>{look.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.bottomBar} data-hero-reveal>
        <span className="eyebrow">{homeHero.bottomLabel}</span>
        <span className={styles.bottomStatement}>
          {homeHero.bottomStatement}
        </span>
      </div>
    </section>
  );
}
