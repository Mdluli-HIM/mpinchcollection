"use client";

import { useRef } from "react";

import type { CampaignDetail } from "@/content/campaigns";
import { gsap, useGSAP } from "@/lib/gsap";

import styles from "./CampaignDetailStory.module.css";

type CampaignDetailStoryProps = {
  campaign: CampaignDetail;
};

export function CampaignDetailStory({ campaign }: CampaignDetailStoryProps) {
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const section = root.current;
      if (!section) return;

      gsap.from("[data-campaign-story-reveal]", {
        y: 26,
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
    <section ref={root} className={styles.section} data-header-theme="light">
      <div className={styles.inner}>
        <div className={styles.meta}>
          <span
            className={`eyebrow ${styles.eyebrow}`}
            data-campaign-story-reveal
          >
            Story / statement
          </span>
        </div>

        <div className={styles.content}>
          <h2 className={styles.title} data-campaign-story-reveal>
            {campaign.statement}
          </h2>

          <div className={styles.body}>
            {campaign.body.map((paragraph) => (
              <p
                key={paragraph}
                className={styles.copy}
                data-campaign-story-reveal
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
