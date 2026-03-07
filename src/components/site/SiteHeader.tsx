"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import styles from "./SiteHeader.module.css";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/campaigns", label: "Campaigns" },
  { href: "/archive", label: "Archive" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

type HeaderTheme = "light" | "dark";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<HeaderTheme>("light");

  useEffect(() => {
    const sampleTheme = () => {
      const sections = document.querySelectorAll<HTMLElement>(
        "[data-header-theme]"
      );

      if (!sections.length) {
        setTheme("light");
        return;
      }

      const sampleY = 96;

      let matchedTheme: HeaderTheme = "light";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionTheme =
          (section.dataset.headerTheme as HeaderTheme | undefined) ?? "light";

        if (rect.top <= sampleY && rect.bottom > sampleY) {
          matchedTheme = sectionTheme;
        }
      });

      setTheme(matchedTheme);
    };

    let ticking = false;

    const onScroll = () => {
      if (ticking) return;

      ticking = true;

      requestAnimationFrame(() => {
        sampleTheme();
        ticking = false;
      });
    };

    sampleTheme();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  return (
    <header className={styles.header}>
      <div className={styles.shell}>
        <div
          className={`${styles.bar} ${
            theme === "dark" ? styles.barDark : styles.barLight
          }`}
        >
          <div className={styles.brandBlock}>
            <Link
              href="/"
              className={styles.brand}
              onClick={() => setIsOpen(false)}
            >
              <span className={styles.brandMark}>MPINCH</span>
              <span className={styles.brandSub}>
                Clothing / Urban Vogue Archive
              </span>
            </Link>
          </div>

          <nav className={styles.nav} aria-label="Primary">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${styles.navLink} ${
                    active ? styles.navLinkActive : ""
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className={styles.meta}>
            <div className={styles.metaText}>
              <span className={styles.metaLabel}>Issue</span>
              <span className={styles.metaValue}>01 / Portfolio</span>
            </div>

            <Link href="/contact" className={styles.cta}>
              Start a project
            </Link>

            <button
              type="button"
              className={styles.menuButton}
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
              onClick={() => setIsOpen((value) => !value)}
            >
              <span className={styles.menuLine} />
              <span className={styles.menuLine} />
              <span className={styles.menuText}>Menu</span>
            </button>
          </div>
        </div>

        <div
          id="mobile-nav"
          className={`${styles.mobilePanel} ${
            isOpen ? styles.mobilePanelOpen : ""
          } ${
            theme === "dark" ? styles.mobilePanelDark : styles.mobilePanelLight
          }`}
        >
          <nav className={styles.mobileNav} aria-label="Mobile">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${styles.mobileLink} ${
                    active ? styles.mobileLinkActive : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <span>{item.label}</span>
                  <span className={styles.mobileIndex}>
                    0{navItems.indexOf(item) + 1}
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
