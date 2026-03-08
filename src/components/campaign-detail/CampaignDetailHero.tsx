"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import type { CampaignDetail } from "@/content/campaigns";
import { gsap, useGSAP } from "@/lib/gsap";

import styles from "./CampaignDetailHero.module.css";

type CampaignDetailHeroProps = {
  campaign: CampaignDetail;
};

export function CampaignDetailHero({ campaign }: CampaignDetailHeroProps) {
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const section = root.current;
      if (!section) return;

      gsap.from("[data-campaign-detail-hero-reveal]", {
        y: 28,
        autoAlpha: 0,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 82%",
        },
      });

      gsap.to("[data-campaign-detail-word]", {
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
      <div className={styles.word} data-campaign-detail-word aria-hidden="true">
        {campaign.title}
      </div>

      <div className={styles.inner}>
        <div className={styles.meta}>
          <span
            className={`eyebrow ${styles.eyebrow}`}
            data-campaign-detail-hero-reveal
          >
            {campaign.season}
          </span>

          <span
            className={`eyebrow ${styles.eyebrow}`}
            data-campaign-detail-hero-reveal
          >
            {campaign.location}
          </span>
        </div>

        <div className={styles.content}>
          <div className={styles.intro}>
            <h1 className={styles.title} data-campaign-detail-hero-reveal>
              {campaign.title}
            </h1>

            <p className={styles.copy} data-campaign-detail-hero-reveal>
              {campaign.intro}
            </p>

            <div className={styles.actions} data-campaign-detail-hero-reveal>
              <Link href="/campaigns" className={styles.secondaryAction}>
                Back to campaigns
              </Link>

              <Link href="/contact" className={styles.primaryAction}>
                Start a project
              </Link>
            </div>
          </div>

          <article className={styles.featured} data-campaign-detail-hero-reveal>
            <div className={styles.media}>
              <Image
                src={campaign.heroImage.src}
                alt={campaign.heroImage.alt}
                fill
                sizes="(max-width: 1100px) 100vw, 48vw"
                className={styles.image}
              />
            </div>

            <div className={styles.featuredMeta}>
              <div className={styles.featuredTop}>
                <span className="eyebrow">{campaign.season}</span>
                <span className={styles.id}>{campaign.id}</span>
              </div>

              <div className={styles.featuredMain}>
                <h2>{campaign.title}</h2>
                <p>{campaign.location}</p>
              </div>

              <div className={styles.featuredBottom}>
                <span className={styles.accent}>{campaign.accent}</span>
                <span className={styles.note}>{campaign.note}</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
