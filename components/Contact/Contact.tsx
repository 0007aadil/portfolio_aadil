"use client";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={`section ${styles.contact}`} id="contact">
      <div className={`container ${styles.container}`}>

        <div className={styles.contentWrap}>
          <div className={styles.header}>
            <h2 className="section-title">Let&apos;s build together.</h2>
            <p className={styles.subtitle}>
              Whether you need to scale an institutional platform, design a native iOS app, or build a secure funding portal, I have the engineering expertise to execute it flawlessly.
            </p>
          </div>

          <div className={styles.actions}>
            <a href="mailto:aadilahsan007@gmail.com" className={styles.primaryBtn} id="contact-email-btn">
              Email Me directly
            </a>
            <a
              href="https://www.linkedin.com/in/aadilahsan0007/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryBtn}
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>



      </div>
    </section>
  );
}
