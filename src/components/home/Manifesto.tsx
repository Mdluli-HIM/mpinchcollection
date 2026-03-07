"use client";

import { useRef } from "react";

import { gsap, useGSAP } from "@/lib/gsap";

import styles from "./Manifesto.module.css";

const lines = ["Motion with", "discipline and", "editorial weight"];

const features = [
  {
    index: "01",
    title: "Premium stillness",
    body: "Big type, quiet palette, precise spacing, and no decorative gloss.",
  },
  {
    index: "02",
    title: "Scroll rhythm",
    body: "Movement should support the photography and typography, never fight them.",
  },
];

export function Manifesto() {
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const section = root.current;
      if (!section) return;

      gsap.from("[data-manifesto-line]", {
        yPercent: 110,
        autoAlpha: 0,
        stagger: 0.08,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 74%",
        },
      });

      gsap.from("[data-manifesto-side]", {
        y: 24,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 72%",
        },
      });

      gsap.from("[data-manifesto-tile]", {
        y: 36,
        autoAlpha: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-manifesto-panel]",
          start: "top 82%",
        },
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className={styles.section} data-header-theme="dark">
      <div className={styles.grid} aria-hidden="true" />

      <div className={styles.topRow}>
        <div className={styles.statementBlock}>
          <p className={`eyebrow ${styles.eyebrow}`}>Section 01 / manifesto</p>

          <div className={styles.statement}>
            {lines.map((line) => (
              <div key={line} className={styles.lineMask}>
                <span data-manifesto-line>{line}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.sideCol} data-manifesto-side>
          <p className={styles.sideText}>
            The first statement section should feel controlled and expensive.
            Large typography enters quietly, the field stays matte, and the
            layout holds tension through spacing rather than effects.
          </p>

          <div className={styles.sideMeta}>
            <span className="eyebrow">Editorial system</span>
            <span className="eyebrow">Matte / precise / restrained</span>
          </div>
        </div>
      </div>

      <div className={styles.panel} data-manifesto-panel>
        <div className={styles.panelHeader}>
          <span className="eyebrow">Design language</span>
          <span className="eyebrow">No gradients / no gloss / no blur</span>
        </div>

        <div className={styles.panelGrid}>
          {features.map((feature) => (
            <article
              key={feature.index}
              className={styles.tile}
              data-manifesto-tile
            >
              <div className={styles.tileTop}>
                <span className="eyebrow">{feature.index}</span>
              </div>

              <div className={styles.tileBody}>
                <strong>{feature.title}</strong>
                <p>{feature.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
