"use client";

import { useRef } from "react";

import { gsap, useGSAP } from "@/lib/gsap";

import styles from "./ContactHero.module.css";

export function ContactHero() {
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const section = root.current;
      if (!section) return;

      gsap.from("[data-contact-hero-reveal]", {
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

      gsap.to("[data-contact-hero-word]", {
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
      <div className={styles.word} data-contact-hero-word aria-hidden="true">
        Contact
      </div>

      <div className={styles.inner}>
        <div className={styles.meta}>
          <span
            className={`eyebrow ${styles.eyebrow}`}
            data-contact-hero-reveal
          >
            Page 03 / contact
          </span>

          <span
            className={`eyebrow ${styles.eyebrow}`}
            data-contact-hero-reveal
          >
            Mpinch Clothing
          </span>
        </div>

        <div className={styles.content}>
          <h1 className={styles.title} data-contact-hero-reveal>
            Start the conversation with clarity and intent.
          </h1>

          <div className={styles.side}>
            <p className={styles.copy} data-contact-hero-reveal>
              Use this page for campaign enquiries, collaborations, creative
              direction conversations, or brand presentation requests.
            </p>

            <p className={styles.copy} data-contact-hero-reveal>
              The structure stays minimal on purpose — direct, premium, and easy
              to act on.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
