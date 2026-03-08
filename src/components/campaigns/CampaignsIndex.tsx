"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import { campaignDetails } from "@/content/campaigns";
import { gsap, useGSAP } from "@/lib/gsap";

import styles from "./CampaignsIndex.module.css";

export function CampaignsIndex() {
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const section = root.current;
      if (!section) return;

      gsap.from("[data-campaign-index-reveal]", {
        y: 24,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 78%",
        },
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className={styles.section} data-header-theme="dark">
      <div className={styles.inner}>
        <div className={styles.topRow}>
          <p className={`eyebrow ${styles.eyebrow}`} data-campaign-index-reveal>
            Issue index
          </p>

          <p className={styles.copy} data-campaign-index-reveal>
            A clean view of current campaign worlds. Later, this can become a
            Sanity-powered listing with category filters, release dates, and
            individual issue pages.
          </p>
        </div>

        <div className={styles.grid}>
          {campaignDetails.map((item) => (
            <article
              key={item.slug}
              className={styles.card}
              data-campaign-index-reveal
            >
              <div className={styles.media}>
                <Image
                  src={item.heroImage.src}
                  alt={item.heroImage.alt}
                  fill
                  sizes="(max-width: 960px) 100vw, 33vw"
                  className={styles.image}
                />
              </div>

              <div className={styles.meta}>
                <div className={styles.metaTop}>
                  <span className="eyebrow">{item.season}</span>
                  <span className={styles.id}>{item.id}</span>
                </div>

                <div className={styles.metaMain}>
                  <h3>{item.title}</h3>
                  <p>{item.location}</p>
                </div>

                <p className={styles.note}>{item.note}</p>

                <div className={styles.metaBottom}>
                  <span className={styles.accent}>{item.accent}</span>
                  <Link
                    href={`/campaigns/${item.slug}`}
                    className={styles.link}
                  >
                    View issue
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
