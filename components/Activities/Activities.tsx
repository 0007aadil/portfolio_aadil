"use client";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import styles from "./Activities.module.css";

const activities = [
  { src: "/Activities/1.jpeg", position: "center bottom" },
  { src: "/Activities/2.jpg", position: "center center" },
  { src: "/Activities/3.jpeg", position: "center center" },
  { src: "/Activities/4.png", position: "center center" },
  { src: "/Activities/5.png", position: "center center" },
  { src: "/Activities/6.png", position: "center center" },
  { src: "/Activities/7.png", position: "center center" },
  { src: "/Activities/8.png", position: "center center" },
];

export default function Activities() {
  return (
    <section className={`section ${styles.activities}`} id="activities">
      <div className={`container ${styles.container}`}>
        <ScrollReveal>
          <div className="section-label">
            <span>05</span> Beyond the Code
          </div>
          <h2 className="section-title">ACTIVITIES.</h2>
          <p className="section-subtitle">
            A visual glimpse into presentations, collaborations, and defining moments during my internship journey.
          </p>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.2} duration={1}>
        <div className={styles.gallery}>
          <div className={styles.track}>
            {[...activities, ...activities].map((item, i) => (
              <div key={i} className={styles.imageWrapper}>
                <Image 
                  src={item.src} 
                  alt={`Activity ${i + 1}`} 
                  fill 
                  className={styles.image}
                  style={{ objectPosition: item.position }}
                  sizes="(max-width: 768px) 80vw, 500px"
                />
                <div className={styles.overlay} />
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
