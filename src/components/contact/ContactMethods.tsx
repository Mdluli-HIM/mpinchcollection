"use client";

import { useRef } from "react";

import { gsap, useGSAP } from "@/lib/gsap";

import styles from "./ContactMethods.module.css";

const methods = [
  {
    index: "01",
    title: "General enquiries",
    value: "hello@mpinchclothing.com",
    note: "For brand questions, introductions, and general communication.",
  },
  {
    index: "02",
    title: "Campaign work",
    value: "campaigns@mpinchclothing.com",
    note: "For campaign planning, art direction, and fashion presentation work.",
  },
  {
    index: "03",
    title: "Collaborations",
    value: "@mpinchclothing",
    note: "For partnerships, editorial collaborations, and visual projects.",
  },
];

export function ContactMethods() {
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const section = root.current;
      if (!section) return;

      gsap.from("[data-contact-method-reveal]", {
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
            data-contact-method-reveal
          >
            Contact channels
          </span>

          <p className={styles.copy} data-contact-method-reveal>
            A clean contact structure keeps the page premium. Each route should
            feel direct and intentional rather than crowded.
          </p>
        </div>

        <div className={styles.grid}>
          {methods.map((item) => (
            <article
              key={item.index}
              className={styles.card}
              data-contact-method-reveal
            >
              <div className={styles.cardTop}>
                <span className="eyebrow">{item.index}</span>
              </div>

              <div className={styles.cardBody}>
                <h2>{item.title}</h2>
                <strong>{item.value}</strong>
                <p>{item.note}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
