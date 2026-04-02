"use client";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.logo}>
          <span className={styles.logoGrad}>AA</span>
          <span className={styles.logoDot}>.</span>
        </div>
        <p className={styles.copy}>
          © {year} Aadil Ahsan. Crafted with ❤️ &amp; Next.js.
        </p>
        <div className={styles.links}>
          <a href="https://github.com/0007aadil" target="_blank" rel="noopener noreferrer" className={styles.link}>GitHub</a>
          <a href="https://www.linkedin.com/in/aadilahsan0007/" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn</a>
          <a href="mailto:aadilahsan007@gmail.com" className={styles.link}>Email</a>
        </div>
      </div>
    </footer>
  );
}
