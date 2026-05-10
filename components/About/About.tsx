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
                  I&apos;m Aadil Ahsan — a full-stack and iOS developer building enterprise-grade software with clean architecture and sharp user experiences.
                </p>
                <p className={styles.paragraph}>
                  Currently pursuing my B.Tech in Computer Science (Networking) at SRM IST, Kattankulathur, I&apos;ve shipped real-world products across the stack — from Next.js web platforms at SRM&apos;s Directorate of Entrepreneurship and Innovation to native iOS applications during my internship at Infosys, Mysore.
                </p>
                <p className={styles.paragraph}>
                  I sit at the intersection of backend performance, frontend craft, and mobile development. I care about code that scales quietly — the kind users never notice because everything just works. Whether architecting a portal in Next.js + MongoDB or refining UIKit components in Swift, I hold the same standard: clean, maintainable, production-ready.
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
