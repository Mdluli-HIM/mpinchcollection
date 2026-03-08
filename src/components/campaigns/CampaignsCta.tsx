import Link from "next/link";

import styles from "./CampaignsCta.module.css";

export function CampaignsCta() {
  return (
    <section className={styles.section} data-header-theme="light">
      <div className={styles.inner}>
        <div className={styles.meta}>
          <span className="eyebrow">Next step</span>
          <span className="eyebrow">Build the issue pages</span>
        </div>

        <div className={styles.content}>
          <h2 className={styles.title}>
            The campaigns page is the index. The next layer is the issue
            experience itself.
          </h2>

          <div className={styles.side}>
            <p className={styles.copy}>
              After this, we can design the individual campaign detail pages
              with hero film frames, editorial credits, image sequences, and
              narrative layout blocks.
            </p>

            <div className={styles.actions}>
              <Link href="/contact" className={styles.primaryAction}>
                Start a project
              </Link>

              <Link href="/archive" className={styles.secondaryAction}>
                Open archive
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
