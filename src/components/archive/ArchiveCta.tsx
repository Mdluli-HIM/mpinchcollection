import Link from "next/link";

import styles from "./ArchiveCta.module.css";

export function ArchiveCta() {
  return (
    <section className={styles.section} data-header-theme="light">
      <div className={styles.inner}>
        <div className={styles.meta}>
          <span className="eyebrow">Next step</span>
          <span className="eyebrow">Detail pages / archive scaling</span>
        </div>

        <div className={styles.content}>
          <h2 className={styles.title}>
            The archive becomes stronger as every issue gains its own depth.
          </h2>

          <div className={styles.side}>
            <p className={styles.copy}>
              After this page, the next strong move is building the individual
              issue detail pages and wiring the full system into Sanity so the
              archive can be managed like a real editorial catalog.
            </p>

            <div className={styles.actions}>
              <Link href="/campaigns" className={styles.primaryAction}>
                View campaigns
              </Link>

              <Link href="/contact" className={styles.secondaryAction}>
                Start a project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
