"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

import { homeCampaignStrip } from "@/content/home";
import { gsap, useGSAP } from "@/lib/gsap";

import styles from "./LooksStrip.module.css";

export function LooksStrip() {
  const root = useRef<HTMLElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const stageImageMotionRef = useRef<HTMLDivElement | null>(null);
  const stageMetaRef = useRef<HTMLDivElement | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [loadedIds, setLoadedIds] = useState<Record<string, boolean>>({});

  const items = homeCampaignStrip.items;
  const activeItem = items[activeIndex];
  const maxIndex = Math.max(0, items.length - 1);

  const markLoaded = (id: string) => {
    setLoadedIds((current) => {
      if (current[id]) return current;
      return { ...current, [id]: true };
    });
  };

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex(Math.max(0, Math.min(maxIndex, index)));
    },
    [maxIndex]
  );

  const next = useCallback(() => {
    setActiveIndex((current) => Math.min(maxIndex, current + 1));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setActiveIndex((current) => Math.max(0, current - 1));
  }, []);

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    const dominant =
      Math.abs(event.deltaX) > Math.abs(event.deltaY)
        ? event.deltaX
        : event.deltaY;

    if (Math.abs(dominant) < 18) return;

    event.preventDefault();

    if (dominant > 0) next();
    if (dominant < 0) prev();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      next();
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      prev();
    }
  };

  useGSAP(
    () => {
      const section = root.current;
      if (!section) return;

      gsap.from("[data-campaign-reveal]", {
        y: 26,
        autoAlpha: 0,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 74%",
        },
      });

      gsap.from("[data-thumb-item]", {
        y: 24,
        autoAlpha: 0,
        duration: 0.75,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 68%",
        },
      });
    },
    { scope: root }
  );

  useEffect(() => {
    const stage = stageRef.current;
    const imageMotion = stageImageMotionRef.current;
    const meta = stageMetaRef.current;

    if (!stage || !imageMotion || !meta) return;

    const shell = stage.querySelector<HTMLElement>("[data-stage-shell]");
    if (!shell) return;

    const tl = gsap.timeline();

    tl.fromTo(
      shell,
      {
        clipPath: "inset(0% 0% 100% 0%)",
      },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 0.8,
        ease: "power3.out",
      }
    )
      .fromTo(
        imageMotion,
        {
          scale: 1.08,
        },
        {
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
        },
        0
      )
      .fromTo(
        meta,
        {
          y: 20,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.7,
          ease: "power3.out",
        },
        0.12
      );

    return () => {
      tl.kill();
    };
  }, [activeIndex]);

  useEffect(() => {
    const stage = stageRef.current;
    const imageMotion = stageImageMotionRef.current;
    const meta = stageMetaRef.current;

    if (!stage || !imageMotion || !meta) return;

    const handleMove = (event: PointerEvent) => {
      const bounds = stage.getBoundingClientRect();
      const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
      const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;

      gsap.to(imageMotion, {
        x: x * 18,
        y: y * 18,
        scale: 1.03,
        duration: 0.55,
        ease: "power3.out",
        overwrite: "auto",
      });

      gsap.to(meta, {
        x: x * 6,
        y: y * 4,
        duration: 0.55,
        ease: "power3.out",
        overwrite: "auto",
      });
    };

    const handleLeave = () => {
      gsap.to(imageMotion, {
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.65,
        ease: "power3.out",
      });

      gsap.to(meta, {
        x: 0,
        y: 0,
        duration: 0.65,
        ease: "power3.out",
      });
    };

    stage.addEventListener("pointermove", handleMove);
    stage.addEventListener("pointerleave", handleLeave);

    return () => {
      stage.removeEventListener("pointermove", handleMove);
      stage.removeEventListener("pointerleave", handleLeave);
    };
  }, [activeIndex]);

  return (
    <section ref={root} className={styles.section} data-header-theme="dark">
      <div className={styles.inner}>
        <div className={styles.intro}>
          <p className={`eyebrow ${styles.eyebrow}`} data-campaign-reveal>
            {homeCampaignStrip.eyebrow}
          </p>

          <h2 className={styles.title} data-campaign-reveal>
            {homeCampaignStrip.title}
          </h2>

          <p className={styles.copy} data-campaign-reveal>
            {homeCampaignStrip.copy}
          </p>

          <div className={styles.actions} data-campaign-reveal>
            <Link href="/campaigns" className={styles.primaryAction}>
              View all campaigns
            </Link>

            <Link href="/about" className={styles.secondaryAction}>
              About Mpinch
            </Link>
          </div>
        </div>

        <div className={styles.gallery} data-campaign-reveal>
          <div className={styles.galleryBar}>
            <div className={styles.galleryStatus}>
              <span className="eyebrow">Interactive gallery</span>
              <span className={styles.galleryHint}>
                Wheel / click / arrow keys
              </span>
            </div>

            <div className={styles.galleryControls}>
              <span className={styles.counter}>
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(items.length).padStart(2, "0")}
              </span>

              <button
                type="button"
                className={styles.controlButton}
                onClick={prev}
                disabled={activeIndex === 0}
              >
                Prev
              </button>

              <button
                type="button"
                className={styles.controlButton}
                onClick={next}
                disabled={activeIndex === maxIndex}
              >
                Next
              </button>
            </div>
          </div>

          <div
            ref={stageRef}
            className={styles.stage}
            onWheel={handleWheel}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            aria-label="Campaign image viewer"
          >
            <div className={styles.stageMedia}>
              <div className={styles.stageShell} data-stage-shell>
                <div
                  ref={stageImageMotionRef}
                  className={styles.stageImageMotion}
                >
                  <Image
                    key={activeItem.id}
                    src={activeItem.image.src}
                    alt={activeItem.image.alt}
                    fill
                    sizes="(max-width: 1100px) 100vw, 55vw"
                    className={styles.stageImage}
                    onLoad={() => markLoaded(activeItem.id)}
                  />
                </div>
              </div>

              <div
                className={`${styles.loader} ${
                  loadedIds[activeItem.id] ? styles.loaderHidden : ""
                }`}
              >
                <span className={styles.loaderLabel}>
                  Loading issue {activeItem.id}
                </span>
                <span className={styles.loaderBar} />
              </div>
            </div>

            <div ref={stageMetaRef} className={styles.stageMeta}>
              <div className={styles.stageMetaTop}>
                <span className="eyebrow">{activeItem.season}</span>
                <span className={styles.id}>{activeItem.id}</span>
              </div>

              <div className={styles.stageMetaMain}>
                <h3 className={styles.cardTitle}>{activeItem.title}</h3>
                <p className={styles.location}>{activeItem.location}</p>
              </div>

              <p className={styles.note}>{activeItem.note}</p>

              <div className={styles.stageMetaBottom}>
                <span className={styles.accent}>{activeItem.accent}</span>
                <Link href="/campaigns" className={styles.cardLink}>
                  Open issue
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.thumbGrid}>
            {items.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={item.id}
                  type="button"
                  className={`${styles.thumb} ${
                    isActive ? styles.thumbActive : ""
                  }`}
                  onClick={() => goTo(index)}
                  data-thumb-item
                >
                  <div className={styles.thumbMedia}>
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      fill
                      sizes="(max-width: 1100px) 50vw, 18vw"
                      className={styles.thumbImage}
                    />
                  </div>

                  <div className={styles.thumbMeta}>
                    <div className={styles.thumbTop}>
                      <span className="eyebrow">{item.season}</span>
                      <span className={styles.id}>{item.id}</span>
                    </div>

                    <div className={styles.thumbMain}>
                      <strong>{item.title}</strong>
                      <span>{item.location}</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
