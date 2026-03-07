import Link from "next/link";

import styles from "./SiteFooter.module.css";

const primaryLinks = [
  { href: "/", label: "Home" },
  { href: "/campaigns", label: "Campaigns" },
  { href: "/archive", label: "Archive" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const infoLinks = [
  { label: "Issue 01 / Portfolio" },
  { label: "Urban Vogue Archive" },
  { label: "Cape Town / Johannesburg" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} data-header-theme="dark">
      <div className={styles.frame}>
        <div className={styles.topRow}>
          <div className={styles.brandPanel}>
            <p className={`eyebrow ${styles.eyebrow}`}>Mpinch Clothing</p>

            <h2 className={styles.title}>
              Built as a fashion archive with discipline, structure, and image
              control.
            </h2>
          </div>

          <div className={styles.ctaPanel}>
            <div className={styles.ctaMeta}>
              <span className="eyebrow">Available for campaigns</span>
              <span className="eyebrow">
                Creative direction / editorial / styling
              </span>
            </div>

            <Link href="/contact" className={styles.cta}>
              Start a project
            </Link>
          </div>
        </div>

        <div className={styles.grid}>
          <div className={styles.column}>
            <span className={`eyebrow ${styles.columnLabel}`}>Navigation</span>

            <nav className={styles.linkList} aria-label="Footer">
              {primaryLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={styles.linkRow}
                >
                  <span>{link.label}</span>
                </Link>
              ))}
            </nav>
          </div>

          <div className={styles.column}>
            <span className={`eyebrow ${styles.columnLabel}`}>System</span>

            <div className={styles.infoList}>
              {infoLinks.map((item) => (
                <div key={item.label} className={styles.infoRow}>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.column}>
            <span className={`eyebrow ${styles.columnLabel}`}>Statement</span>

            <div className={styles.statementBox}>
              <p>
                A premium visual system built around matte surfaces, oversized
                type, precise spacing, and restrained movement.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.bottomRow}>
          <span className={styles.bottomItem}>© {year} Mpinch Clothing</span>
          <span className={styles.bottomItem}>Editorial portfolio system</span>
        </div>
      </div>
    </footer>
  );
}
