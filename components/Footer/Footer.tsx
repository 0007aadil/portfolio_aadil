"use client";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.logoGroup}>
          <span className={styles.logo}>AA<span className={styles.dot}>.</span></span>
          <span className={styles.copyright}>© {year} All Rights Reserved</span>
        </div>

        <div className={styles.links}>
          <a href="https://github.com/0007aadil" target="_blank" rel="noopener noreferrer" className={styles.link}>GitHub</a>
          <a href="https://www.linkedin.com/in/aadilahsan0007/" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
