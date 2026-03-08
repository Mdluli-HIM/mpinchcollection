import Link from "next/link";

import styles from "./AboutCta.module.css";

export function AboutCta() {
  return (
    <section className={styles.section} data-header-theme="dark">
      <div className={styles.inner}>
        <div className={styles.meta}>
          <span className="eyebrow">Next step</span>
          <span className="eyebrow">Contact / collaboration</span>
        </div>

        <div className={styles.content}>
          <h2 className={styles.title}>
            If the brand language is clear, the next move is the work.
          </h2>

          <div className={styles.side}>
            <p className={styles.copy}>
              Use this page as the point where the brand introduces itself,
              defines its method, and then invites the audience into campaigns,
              archive, or future collaborations.
            </p>

            <div className={styles.actions}>
              <Link href="/contact" className={styles.primaryAction}>
                Start a project
              </Link>

              <Link href="/campaigns" className={styles.secondaryAction}>
                View campaigns
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
