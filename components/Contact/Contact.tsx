"use client";
import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import ContactForm from "@/components/ContactForm/ContactForm";
import styles from "./Contact.module.css";

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className={`section ${styles.contact}`} id="contact">
      <div className={styles.glow} />
      <div className={`container ${styles.container}`}>
        <ScrollReveal>
          <div className="section-label">
            <span>08</span> Let&apos;s Build
          </div>
        </ScrollReveal>

        <div className={styles.content}>
          <ScrollReveal delay={0.1}>
            <h2 className={styles.massiveText}>
              <button onClick={() => setIsModalOpen(true)} className={styles.emailLink}>
                LET&apos;S WORK
                <br />
                TOGETHER.
              </button>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className={styles.footerRow}>
            <p className={styles.subtitle}>
              Ready to scale an institutional platform or design a native iOS app? Let&apos;s talk.
            </p>
            <button onClick={() => setIsModalOpen(true)} className={styles.btn}>
              Email Me Directly ↗
            </button>
          </ScrollReveal>
        </div>
      </div>
      <ContactForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
