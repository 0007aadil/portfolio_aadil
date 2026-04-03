"use client";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={`section ${styles.about}`} id="about">
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <p className="section-label">Background</p>
          <h2 className="section-title">Driven by Impact.</h2>
        </div>

        <div className={styles.content}>
          <div className={styles.textColumn}>
            <p className={styles.paragraph}>
              I am a Software Engineer specializing in full-stack architecture and native iOS development. My focus is on building enterprise-grade tools that solve complex business problems with elegant code and intuitive user experiences.
            </p>
            <p className={styles.paragraph}>
              Operating out of Delhi NCR, I partner with organizations to deliver everything from institutional digital platforms to highly optimized mobile applications. I believe that exceptional engineering is invisible—users only feel the speed, reliability, and polish of the final product.
            </p>
            <p className={styles.paragraph}>
              When I&apos;m not writing Swift or tweaking Next.js infrastructures, I&apos;m analyzing system designs, exploring new cloud optimizations, or contributing to the software community.
            </p>
          </div>

          <div className={styles.statsColumn}>
            <div className={`glass-card ${styles.statCard}`}>
              <span className={styles.statNumber}>10+</span>
              <span className={styles.statLabel}>Products Shipped</span>
            </div>
            <div className={`glass-card ${styles.statCard}`}>
              <span className={styles.statNumber}>3+</span>
              <span className={styles.statLabel}>Years Coding</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
