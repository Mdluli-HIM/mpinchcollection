import Link from "next/link";

import styles from "./ContactCta.module.css";

export function ContactCta() {
  return (
    <section className={styles.section} data-header-theme="dark">
      <div className={styles.inner}>
        <div className={styles.meta}>
          <span className="eyebrow">Final note</span>
          <span className="eyebrow">Direct / premium / clear</span>
        </div>

        <div className={styles.content}>
          <h2 className={styles.title}>
            Good contact design feels like the brand itself.
          </h2>

          <div className={styles.side}>
            <p className={styles.copy}>
              This page closes the loop in the navigation: identity, work,
              archive, and a direct way to start a project.
            </p>

            <div className={styles.actions}>
              <Link href="/campaigns" className={styles.primaryAction}>
                View campaigns
              </Link>

              <Link href="/about" className={styles.secondaryAction}>
                Read about
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
