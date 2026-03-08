"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { campaignDetails } from "@/content/campaigns";

import styles from "./ArchivePreview.module.css";

export function ArchivePreview() {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = campaignDetails;
  const activeItem = items[activeIndex];

  return (
    <section className={styles.section} data-header-theme="light">
      <div className={styles.inner}>
        <div className={styles.intro}>
          <p className={`eyebrow ${styles.eyebrow}`}>Section 03 / archive</p>

          <h2 className={styles.title}>
            A gallery system that can grow into a living brand archive.
          </h2>

          <p className={styles.copy}>
            This section acts as the homepage preview of the archive system,
            while still linking into the individual campaign issues that make up
            the archive.
          </p>

          <Link href="/archive" className={styles.link}>
            Enter archive
          </Link>
        </div>

        <div className={styles.viewer}>
          <div className={styles.previewFrame}>
            <div className={styles.previewMedia}>
              <Image
                src={activeItem.heroImage.src}
                alt={activeItem.heroImage.alt}
                fill
                sizes="(max-width: 1100px) 100vw, 44vw"
                className={styles.previewImage}
              />
            </div>

            <div className={styles.previewMeta}>
              <div className={styles.previewTop}>
                <span className="eyebrow">{activeItem.season}</span>
                <span className={styles.id}>{activeItem.id}</span>
              </div>

              <div className={styles.previewMain}>
                <h3>{activeItem.title}</h3>
                <p>{activeItem.location}</p>
              </div>

              <div className={styles.previewActions}>
                <Link
                  href={`/campaigns/${activeItem.slug}`}
                  className={styles.previewLink}
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
                >
                  <div className={styles.rowMeta}>
                    <span className="eyebrow">Campaign {item.id}</span>
                    <strong>{item.title}</strong>
                    <span>{item.note}</span>
                  </div>

                  <Link
                    href={`/campaigns/${item.slug}`}
                    className={styles.rowArrow}
                    onClick={(event) => event.stopPropagation()}
                  >
                    View
                  </Link>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
