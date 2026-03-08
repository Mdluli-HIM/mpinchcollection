"use client";

import { useRef } from "react";

import { gsap, useGSAP } from "@/lib/gsap";

import styles from "./ArchiveSystem.module.css";

const blocks = [
  {
    index: "01",
    title: "Collections",
    body: "A place for season-based releases, capsule studies, and visual grouping across time.",
  },
  {
    index: "02",
    title: "Campaigns",
    body: "Image-led issue entries that can later connect directly to full campaign pages and detail stories.",
  },
  {
    index: "03",
    title: "Studies",
    body: "Room for silhouettes, styling references, material notes, and other visual development work.",
  },
  {
    index: "04",
    title: "Memory",
    body: "The archive keeps the brand from feeling disposable by turning releases into an organized record.",
  },
];

export function ArchiveSystem() {
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const section = root.current;
      if (!section) return;

      gsap.from("[data-archive-system-reveal]", {
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
    { scope: root }
  );

  return (
    <section ref={root} className={styles.section} data-header-theme="dark">
      <div className={styles.inner}>
        <div className={styles.topRow}>
          <span
            className={`eyebrow ${styles.eyebrow}`}
            data-archive-system-reveal
          >
            Archive logic
          </span>

          <p className={styles.copy} data-archive-system-reveal>
            This page is not only a gallery. It is the structure that allows the
            brand to expand without losing clarity.
          </p>
        </div>

        <div className={styles.grid}>
          {blocks.map((item) => (
            <article
              key={item.index}
              className={styles.card}
              data-archive-system-reveal
            >
              <div className={styles.cardTop}>
                <span className="eyebrow">{item.index}</span>
              </div>

              <div className={styles.cardBody}>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
