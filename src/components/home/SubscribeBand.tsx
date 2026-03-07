"use client";

import { FormEvent, useRef, useState } from "react";

import { gsap, useGSAP } from "@/lib/gsap";

import styles from "./SubscribeBand.module.css";

export function SubscribeBand() {
  const root = useRef<HTMLElement | null>(null);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim()) return;

    setSubmitted(true);
    setEmail("");
  };

  useGSAP(
    () => {
      const section = root.current;
      if (!section) return;

      gsap.from("[data-subscribe-reveal]", {
        y: 28,
        autoAlpha: 0,
        duration: 0.85,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 78%",
        },
      });

      gsap.from("[data-subscribe-line]", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 82%",
        },
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className={styles.section} data-header-theme="light">
      <div className={styles.inner}>
        <div className={styles.topRow}>
          <span className={`eyebrow ${styles.index}`} data-subscribe-reveal>
            Section 04 / final frame
          </span>

          <div className={styles.rule} data-subscribe-line />

          <span className={`eyebrow ${styles.label}`} data-subscribe-reveal>
            Closing chapter
          </span>
        </div>

        <div className={styles.grid}>
          <div className={styles.intro}>
            <p className={`eyebrow ${styles.kicker}`} data-subscribe-reveal>
              Join the release signal
            </p>

            <h2 className={styles.title} data-subscribe-reveal>
              Stay close to the next issue.
            </h2>

            <p className={styles.copy} data-subscribe-reveal>
              Subscribe for campaign drops, archive updates, and future
              editorial releases from Mpinch Clothing.
            </p>
          </div>

          <div className={styles.panel} data-subscribe-reveal>
            <form className={styles.form} onSubmit={handleSubmit}>
              <label htmlFor="email" className={styles.labelText}>
                Email address
              </label>

              <div className={styles.formRow}>
                <input
                  id="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder="name@email.com"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    if (submitted) setSubmitted(false);
                  }}
                  className={styles.input}
                />

                <button type="submit" className={styles.button}>
                  Subscribe
                </button>
              </div>

              <div className={styles.responseRow}>
                <span className={styles.note}>
                  No noise. Only meaningful brand updates.
                </span>

                <span
                  className={`${styles.response} ${
                    submitted ? styles.responseVisible : ""
                  }`}
                >
                  Request received.
                </span>
              </div>
            </form>

            <div className={styles.metaGrid}>
              <div className={styles.metaBlock}>
                <span className="eyebrow">Focus</span>
                <p>Campaign releases / archive entries / editorial notes</p>
              </div>

              <div className={styles.metaBlock}>
                <span className="eyebrow">Signal</span>
                <p>Minimal contact. Premium cadence. Curated output only.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
