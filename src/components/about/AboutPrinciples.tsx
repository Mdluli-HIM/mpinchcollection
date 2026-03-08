"use client";

import { useRef } from "react";

import { gsap, useGSAP } from "@/lib/gsap";

import styles from "./AboutPrinciples.module.css";

const principles = [
  {
    index: "01",
    title: "Image first",
    body: "The brand leads with image language, silhouette, material presence, and editorial composition before anything else.",
  },
  {
    index: "02",
    title: "Hard restraint",
    body: "The system avoids noise. Layout, motion, and typography are structured to feel precise rather than decorative.",
  },
  {
    index: "03",
    title: "Issue logic",
    body: "Collections and campaigns are treated like issues — each release becomes part of a living archive rather than a disposable drop.",
  },
  {
    index: "04",
    title: "Urban elegance",
    body: "Street fashion is translated through a cleaner and more deliberate premium lens.",
  },
];

export function AboutPrinciples() {
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const section = root.current;
      if (!section) return;

      gsap.from("[data-principle-reveal]", {
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
          <span className={`eyebrow ${styles.eyebrow}`} data-principle-reveal>
            Core principles
          </span>

          <p className={styles.copy} data-principle-reveal>
            The brand language is built around a few fixed ideas. This keeps the
            system coherent as collections, campaigns, and archive entries grow.
          </p>
        </div>

        <div className={styles.grid}>
          {principles.map((item) => (
            <article
              key={item.index}
              className={styles.card}
              data-principle-reveal
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
