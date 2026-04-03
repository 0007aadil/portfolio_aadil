"use client";
import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={`container ${styles.container}`}>
        
        {/* Massive Image Column */}
        <div className={styles.imageColumn}>
          <div className={styles.imageWrap}>
            <Image
              src="/images/profile.jpeg"
              alt="Aadil Ahsan Profile"
              fill
              className={styles.profileImg}
              priority
            />
          </div>
          {/* Aesthetic background glow */}
          <div className={styles.glowDecor}></div>
        </div>

        {/* Text Content Column */}
        <div className={styles.textColumn}>


          <h1 className={styles.heading}>
            Aadil Ahsan.
            <br />
            <span className={styles.role}>Software Engineer.</span>
          </h1>

          <p className={styles.description}>
            I partner with businesses to architect, build, and deploy high-performance applications that drive real value. From scalable cloud infrastructures to pixel-perfect native iOS experiences.
          </p>

          <div className={styles.ctas}>
            <a href="#projects" className={styles.primaryBtn}>
              View Selected Work
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
