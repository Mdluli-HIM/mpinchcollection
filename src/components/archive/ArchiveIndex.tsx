"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

import { campaignDetails } from "@/content/campaigns";
import { gsap, useGSAP } from "@/lib/gsap";

import styles from "./ArchiveIndex.module.css";

export function ArchiveIndex() {
  const root = useRef<HTMLElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const items = campaignDetails;
  const activeItem = items[activeIndex];

  useGSAP(
    () => {
      const section = root.current;
      if (!section) return;

      gsap.from("[data-archive-index-reveal]", {
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
    { scope: root },
  );

  return (
    <section ref={root} className={styles.section} data-header-theme="light">
      <div className={styles.inner}>
        <div className={styles.topRow}>
          <span
            className={`eyebrow ${styles.eyebrow}`}
            data-archive-index-reveal
          >
            Archive index
          </span>

          <p className={styles.copy} data-archive-index-reveal>
            A selected viewer for current archive entries. Each row now links
            directly into the real campaign issue template.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.viewer} data-archive-index-reveal>
            <div className={styles.viewerMedia}>
              <Image
                src={activeItem.heroImage.src}
                alt={activeItem.heroImage.alt}
                fill
                sizes="(max-width: 1100px) 100vw, 48vw"
                className={styles.viewerImage}
              />
            </div>

            <div className={styles.viewerMeta}>
              <div className={styles.viewerTop}>
                <span className="eyebrow">{activeItem.season}</span>
                <span className={styles.id}>{activeItem.id}</span>
              </div>

              <div className={styles.viewerMain}>
                <h2>{activeItem.title}</h2>
                <p>{activeItem.location}</p>
              </div>

              <div className={styles.viewerBottom}>
                <span className={styles.accent}>{activeItem.accent}</span>
                <Link
                  href={`/campaigns/${activeItem.slug}`}
                  className={styles.viewerLink}
                >
                  Open issue
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.list}>
            {items.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={item.slug}
                  type="button"
                  className={`${styles.row} ${isActive ? styles.rowActive : ""}`}
                  onClick={() => setActiveIndex(index)}
                  data-archive-index-reveal
                >
                  <div className={styles.rowMedia}>
                    <Image
                      src={item.heroImage.src}
                      alt={item.heroImage.alt}
                      fill
                      sizes="(max-width: 1100px) 30vw, 10vw"
                      className={styles.rowImage}
                    />
                  </div>

                  <div className={styles.rowMeta}>
                    <div className={styles.rowTop}>
                      <span className="eyebrow">{item.season}</span>
                      <span className={styles.id}>{item.id}</span>
                    </div>

                    <div className={styles.rowMain}>
                      <strong>{item.title}</strong>
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <Link
                    href={`/campaigns/${item.slug}`}
                    className={styles.rowOpen}
                    onClick={(event) => event.stopPropagation()}
                  >
                    Open
                  </Link>
                </button>
              );
            })}

            <Link
              href="/campaigns"
              className={styles.archiveLink}
              data-archive-index-reveal
            >
              View campaigns
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
