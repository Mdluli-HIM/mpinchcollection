"use client";

import Image from "next/image";
import { useRef } from "react";

import type { CampaignDetail } from "@/content/campaigns";
import { gsap, useGSAP } from "@/lib/gsap";

import styles from "./CampaignDetailGallery.module.css";

type CampaignDetailGalleryProps = {
  campaign: CampaignDetail;
};

export function CampaignDetailGallery({
  campaign,
}: CampaignDetailGalleryProps) {
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const section = root.current;
      if (!section) return;

      gsap.from("[data-campaign-gallery-reveal]", {
        y: 28,
        autoAlpha: 0,
        duration: 0.85,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className={styles.section} data-header-theme="dark">
      <div className={styles.inner}>
        <div className={styles.topRow}>
          <span
            className={`eyebrow ${styles.eyebrow}`}
            data-campaign-gallery-reveal
          >
            Gallery sequence
          </span>

          <p className={styles.copy} data-campaign-gallery-reveal>
            A harder editorial grid for campaign stills. This can later expand
            into longer sequences, film frames, or modular issue layouts.
          </p>
        </div>

        <div className={styles.grid}>
          {campaign.gallery.map((image, index) => (
            <article
              key={`${image.src}-${index}`}
              className={styles.card}
              data-campaign-gallery-reveal
            >
              <div className={styles.media}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 960px) 100vw, 50vw"
                  className={styles.image}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
