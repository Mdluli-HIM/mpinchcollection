"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { homeCampaignStrip } from "@/content/home";

import styles from "./ArchivePreview.module.css";

export function ArchivePreview() {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = homeCampaignStrip.items;
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
            This section is ready to evolve into your Sanity-powered campaign
            index later. For now, it gives us a strong visual skeleton and a
            place to plug in collections, editorials, or portfolio cases.
          </p>

          <Link href="/archive" className={styles.link}>
            Enter archive
          </Link>
        </div>

        <div className={styles.viewer}>
          <div className={styles.previewFrame}>
            <div className={styles.previewMedia}>
              <Image
                src={activeItem.image.src}
                alt={activeItem.image.alt}
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
            </div>
          </div>

          <div className={styles.list}>
            {items.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={item.id}
                  type="button"
                  className={`${styles.row} ${
                    isActive ? styles.rowActive : ""
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className={styles.rowMeta}>
                    <span className="eyebrow">Campaign {item.id}</span>
                    <strong>{item.title}</strong>
                    <span>{item.note}</span>
                  </div>

                  <span className={styles.rowArrow}>View</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
