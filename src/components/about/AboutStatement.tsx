"use client";

import { useRef } from "react";

import { gsap, useGSAP } from "@/lib/gsap";

import styles from "./AboutStatement.module.css";

export function AboutStatement() {
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const section = root.current;
      if (!section) return;

      gsap.from("[data-statement-reveal]", {
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
    { scope: root }
  );

  return (
    <section ref={root} className={styles.section} data-header-theme="light">
      <div className={styles.inner}>
        <div className={styles.meta}>
          <span className={`eyebrow ${styles.eyebrow}`} data-statement-reveal>
            Studio statement
          </span>
        </div>

        <div className={styles.content}>
          <h2 className={styles.title} data-statement-reveal>
            Mpinch is less about volume and more about visual clarity.
          </h2>

          <div className={styles.side}>
            <p className={styles.copy} data-statement-reveal>
              The goal is to create a fashion identity that feels collected,
              cinematic, and deliberate — one that can live across campaigns,
              archive systems, and future issue pages without losing structure.
            </p>

            <p className={styles.copy} data-statement-reveal>
              As the brand grows, this page can later hold founder notes, studio
              philosophy, collaborators, or creative direction credits.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
