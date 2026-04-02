"use client";
import { useEffect } from "react";
import styles from "./Lightbox.module.css";

interface LightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export default function Lightbox({ src, alt, onClose }: LightboxProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className={styles.overlay}>
      {/* Fixed top bar */}
      <div className={styles.topBar}>
        <button className={styles.backBtn} onClick={onClose} id="lightbox-back-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="17" height="17">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Back
        </button>

        <span className={styles.altLabel}>{alt}</span>

        <button className={styles.closeBtn} onClick={onClose} id="lightbox-close-btn" aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="18" height="18">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* Scrollable image area */}
      <div className={styles.scrollArea}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className={styles.image} />
      </div>
    </div>
  );
}
