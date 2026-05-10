"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import styles from "./About.module.css";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section className={`section ${styles.about}`} id="about" ref={sectionRef}>
      <div className={`container ${styles.container}`}>
        <ScrollReveal>
          <div className="section-label">
            <span>01</span> Background
          </div>
          <h2 className="section-title">DRIVEN BY IMPACT.</h2>
        </ScrollReveal>

        <div className={styles.grid}>
          <div className={styles.imageColumn}>
            <ScrollReveal direction="right" duration={1}>
              <div className={styles.imageWrapper}>
                <motion.div style={{ y: imageY, width: "100%", height: "100%" }}>
                  <Image
                    src="/images/profile.jpeg"
                    alt="Aadil Ahsan"
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </motion.div>
                <div className={styles.imageOverlay} />
              </div>
            </ScrollReveal>
          </div>

          <div className={styles.textColumn}>
            <ScrollReveal delay={0.2}>
              <div className={styles.textContent}>
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
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className={styles.statsRow}>
                <div className={styles.statBox}>
                  <span className={styles.statNum}>10+</span>
                  <span className={styles.statLabel}>Products Shipped</span>
                </div>
                <div className={styles.statDivider} />
                <div className={styles.statBox}>
                  <span className={styles.statNum}>3+</span>
                  <span className={styles.statLabel}>Years Coding</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
