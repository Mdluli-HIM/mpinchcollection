"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { campaignDetails } from "@/content/campaigns";
import { gsap, useGSAP } from "@/lib/gsap";

import styles from "./CampaignsHero.module.css";

export function CampaignsHero() {
  const root = useRef<HTMLElement | null>(null);
  const featured = campaignDetails[0];

  useGSAP(
    () => {
      const section = root.current;
      if (!section) return;

      gsap.from("[data-campaigns-hero-reveal]", {
        y: 28,
        autoAlpha: 0,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
      });

      gsap.to("[data-campaigns-hero-word]", {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className={styles.section} data-header-theme="dark">
      <div className={styles.word} data-campaigns-hero-word aria-hidden="true">
        Campaigns
      </div>

      <div className={styles.inner}>
        <div className={styles.intro}>
          <p className={`eyebrow ${styles.eyebrow}`} data-campaigns-hero-reveal>
            Page 01 / campaigns
          </p>

          <h1 className={styles.title} data-campaigns-hero-reveal>
            Editorial issues built as campaign worlds.
          </h1>

          <p className={styles.copy} data-campaigns-hero-reveal>
            A structured index of Mpinch campaign releases — each one treated
            like a visual issue with its own tone, styling language, and image
            system.
          </p>

          <div className={styles.actions} data-campaigns-hero-reveal>
            <Link
              href={`/campaigns/${featured.slug}`}
              className={styles.primaryAction}
            >
              Open featured issue
            </Link>

            <Link href="/archive" className={styles.secondaryAction}>
              View archive
            </Link>
          </div>
        </div>

        <article className={styles.featured} data-campaigns-hero-reveal>
          <div className={styles.featuredMedia}>
            <Image
              src={featured.heroImage.src}
              alt={featured.heroImage.alt}
              fill
              sizes="(max-width: 1100px) 100vw, 46vw"
              className={styles.featuredImage}
            />
          </div>

          <div className={styles.featuredMeta}>
            <div className={styles.metaTop}>
              <span className="eyebrow">{featured.season}</span>
              <span className={styles.id}>{featured.id}</span>
            </div>

            <div className={styles.metaMain}>
              <h2>{featured.title}</h2>
              <p>{featured.location}</p>
            </div>

            <div className={styles.metaBottom}>
              <span className={styles.accent}>{featured.accent}</span>
              <span className={styles.note}>{featured.note}</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
