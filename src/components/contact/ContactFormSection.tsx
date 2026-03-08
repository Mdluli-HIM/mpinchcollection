"use client";

import { FormEvent, useRef, useState } from "react";

import { gsap, useGSAP } from "@/lib/gsap";

import styles from "./ContactFormSection.module.css";

export function ContactFormSection() {
  const root = useRef<HTMLElement | null>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      return;
    }

    setSubmitted(true);
    setForm({
      name: "",
      email: "",
      company: "",
      message: "",
    });
  };

  useGSAP(
    () => {
      const section = root.current;
      if (!section) return;

      gsap.from("[data-contact-form-reveal]", {
        y: 28,
        autoAlpha: 0,
        duration: 0.85,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className={styles.section} data-header-theme="light">
      <div className={styles.inner}>
        <div className={styles.left}>
          <p className={`eyebrow ${styles.eyebrow}`} data-contact-form-reveal>
            Direct form
          </p>

          <h2 className={styles.title} data-contact-form-reveal>
            Send the first message with the right context.
          </h2>

          <p className={styles.copy} data-contact-form-reveal>
            Keep it short and clear: what you need, the kind of project, and the
            visual direction or timeline you have in mind.
          </p>
        </div>

        <div className={styles.panel} data-contact-form-reveal>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.fieldGrid}>
              <div className={styles.field}>
                <label htmlFor="name" className={styles.label}>
                  Name
                </label>
                <input
                  id="name"
                  className={styles.input}
                  value={form.name}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      name: event.target.value,
                    }))
                  }
                  placeholder="Your name"
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="email" className={styles.label}>
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className={styles.input}
                  value={form.email}
                  onChange={(event) =>
                    setForm((current) => ({
                      ...current,
                      email: event.target.value,
                    }))
                  }
                  placeholder="name@email.com"
                />
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="company" className={styles.label}>
                Brand / company
              </label>
              <input
                id="company"
                className={styles.input}
                value={form.company}
                onChange={(event) =>
                  setForm((current) => ({
                    ...current,
                    company: event.target.value,
                  }))
                }
                placeholder="Optional"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="message" className={styles.label}>
                Project message
              </label>
              <textarea
                id="message"
                className={styles.textarea}
                value={form.message}
                onChange={(event) =>
                  setForm((current) => ({
                    ...current,
                    message: event.target.value,
                  }))
                }
                placeholder="Tell us what you need."
              />
            </div>

            <div className={styles.bottomRow}>
              <span className={styles.note}>
                This front-end form is ready to connect to email handling or a
                CMS workflow later.
              </span>

              <div className={styles.actions}>
                <span
                  className={`${styles.response} ${
                    submitted ? styles.responseVisible : ""
                  }`}
                >
                  Message received.
                </span>

                <button type="submit" className={styles.button}>
                  Send message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
