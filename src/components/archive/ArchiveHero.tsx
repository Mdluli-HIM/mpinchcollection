"use client";

import { useRef } from "react";

import { gsap, useGSAP } from "@/lib/gsap";

import styles from "./ArchiveHero.module.css";

export function ArchiveHero() {
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const section = root.current;
      if (!section) return;

      gsap.from("[data-archive-hero-reveal]", {
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

      gsap.to("[data-archive-hero-word]", {
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
    { scope: root }
  );

  return (
    <section ref={root} className={styles.section} data-header-theme="light">
      <div className={styles.word} data-archive-hero-word aria-hidden="true">
        Archive
      </div>

      <div className={styles.inner}>
        <div className={styles.meta}>
          <span
            className={`eyebrow ${styles.eyebrow}`}
            data-archive-hero-reveal
          >
            Page 04 / archive
          </span>

          <span
            className={`eyebrow ${styles.eyebrow}`}
            data-archive-hero-reveal
          >
            Living collection memory
          </span>
        </div>

        <div className={styles.content}>
          <h1 className={styles.title} data-archive-hero-reveal>
            A structured record of releases, studies, and brand image history.
          </h1>

          <div className={styles.side}>
            <p className={styles.copy} data-archive-hero-reveal>
              The archive is where the work becomes organized. It holds campaign
              memory, visual references, and a scalable system for future issues
              and collection entries.
            </p>

            <p className={styles.copy} data-archive-hero-reveal>
              This page is designed to later connect cleanly to Sanity, so the
              archive can grow into a real editorial catalog.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
