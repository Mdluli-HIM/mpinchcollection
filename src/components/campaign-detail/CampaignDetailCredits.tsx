import Link from "next/link";

import type { CampaignDetail } from "@/content/campaigns";

import styles from "./CampaignDetailCredits.module.css";

type CampaignDetailCreditsProps = {
  campaign: CampaignDetail;
};

export function CampaignDetailCredits({
  campaign,
}: CampaignDetailCreditsProps) {
  return (
    <section className={styles.section} data-header-theme="light">
      <div className={styles.inner}>
        <div className={styles.topRow}>
          <span className={`eyebrow ${styles.eyebrow}`}>Credits / system</span>

          <p className={styles.copy}>
            A structured ending block for issue metadata, collaborators, and
            future archive references.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.credits}>
            {campaign.credits.map((credit) => (
              <div key={credit.label} className={styles.creditRow}>
                <span className="eyebrow">{credit.label}</span>
                <span className={styles.creditValue}>{credit.value}</span>
              </div>
            ))}
          </div>

          <div className={styles.ctaPanel}>
            <h2 className={styles.title}>
              Every issue can grow into a deeper campaign world.
            </h2>

            <p className={styles.ctaCopy}>
              The next layer is adding richer narrative sections, more image
              sequences, or wiring the whole issue system into Sanity.
            </p>

            <div className={styles.actions}>
              <Link href="/campaigns" className={styles.secondaryAction}>
                Back to campaigns
              </Link>

              <Link href="/contact" className={styles.primaryAction}>
                Start a project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
