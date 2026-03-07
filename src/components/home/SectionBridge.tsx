"use client";

import { useRef } from "react";

import { gsap, useGSAP } from "@/lib/gsap";

import styles from "./SectionBridge.module.css";

type SectionBridgeProps = {
  index: string;
  label: string;
  title: string;
  copy: string;
  tone?: "boneToBlack" | "blackToBone";
  backgroundWord?: string | string[];
};

export function SectionBridge({
  index,
  label,
  title,
  copy,
  tone = "boneToBlack",
  backgroundWord,
}: SectionBridgeProps) {
  const root = useRef<HTMLElement | null>(null);

  const wordParts = Array.isArray(backgroundWord)
    ? backgroundWord
    : backgroundWord
    ? [backgroundWord]
    : [label];

  useGSAP(
    () => {
      const section = root.current;
      if (!section) return;

      gsap.from("[data-bridge-reveal]", {
        y: 28,
        autoAlpha: 0,
        stagger: 0.08,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 82%",
        },
      });

      gsap.to("[data-bridge-word]", {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to("[data-bridge-panel]", {
        yPercent: -6,
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
    <section
      ref={root}
      className={`${styles.section} ${
        tone === "boneToBlack" ? styles.boneToBlack : styles.blackToBone
      }`}
      data-header-theme={tone === "boneToBlack" ? "light" : "dark"}
    >
      <div
        className={`${styles.word} ${
          wordParts.length > 1 ? styles.wordSplit : ""
        }`}
        data-bridge-word
        aria-hidden="true"
      >
        {wordParts.map((part) => (
          <span key={part}>{part}</span>
        ))}
      </div>

      <div className={styles.inner} data-bridge-panel>
        <div className={styles.meta}>
          <span className={`eyebrow ${styles.index}`} data-bridge-reveal>
            {index}
          </span>

          <span className={`eyebrow ${styles.label}`} data-bridge-reveal>
            {label}
          </span>
        </div>

        <div className={styles.content}>
          <h2 className={styles.title} data-bridge-reveal>
            {title}
          </h2>

          <p className={styles.copy} data-bridge-reveal>
            {copy}
          </p>
        </div>
      </div>
    </section>
  );
}
