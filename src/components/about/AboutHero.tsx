"use client";

import { useRef } from "react";

import { gsap, useGSAP } from "@/lib/gsap";

import styles from "./AboutHero.module.css";

export function AboutHero() {
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const section = root.current;
      if (!section) return;

      gsap.from("[data-about-hero-reveal]", {
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

      gsap.to("[data-about-hero-word]", {
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
      <div className={styles.word} data-about-hero-word aria-hidden="true">
        About
      </div>

      <div className={styles.inner}>
        <div className={styles.meta}>
          <span className={`eyebrow ${styles.eyebrow}`} data-about-hero-reveal>
            Page 02 / about
          </span>

          <span className={`eyebrow ${styles.eyebrow}`} data-about-hero-reveal>
            Mpinch Clothing
          </span>
        </div>

        <div className={styles.content}>
          <h1 className={styles.title} data-about-hero-reveal>
            Built as an urban fashion language with editorial discipline.
          </h1>

          <div className={styles.side}>
            <p className={styles.copy} data-about-hero-reveal>
              Mpinch Clothing is framed as a premium visual archive: quiet,
              structured, image-led, and rooted in a harder, more deliberate
              interpretation of contemporary street fashion.
            </p>

            <p className={styles.copy} data-about-hero-reveal>
              The brand is not presented like fast e-commerce. It is presented
              like an ongoing collection system — a sequence of issues,
              campaigns, silhouettes, and visual studies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
