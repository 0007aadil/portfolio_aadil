"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./Hero.module.css";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section className={styles.hero} id="home" ref={containerRef}>
      <motion.div className={styles.backgroundGlow} style={{ y: y1, opacity }} />
      
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ y: y2 }}
          >
            <h1 className={styles.title}>
              <span className={styles.titleLine}>AADIL</span>
              <span className={styles.titleLine}>AHSAN</span>
            </h1>
          </motion.div>

          <motion.div
            className={styles.subtitleWrapper}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2, ease: "easeOut" }}
          >
            <p className={styles.subtitle}>
              SOFTWARE ENGINEER CRAFTING SCALABLE ARCHITECTURES AND INTUITIVE DIGITAL EXPERIENCES.
            </p>
          </motion.div>
        </div>

        {/* Abstract Animation */}
        <motion.div
          className={styles.animationWrapper}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.abstractScene}>
            {/* Main floating glowing orb */}
            <motion.div
              className={styles.glowOrb}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Rotating geometric shape 1 */}
            <motion.div
              className={styles.shape1}
              animate={{
                rotate: [0, 180, 360],
                borderRadius: ["30%", "50%", "30%"],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />

            {/* Rotating geometric shape 2 */}
            <motion.div
              className={styles.shape2}
              animate={{
                rotate: [360, 180, 0],
                x: [0, 20, -20, 0],
                y: [0, -20, 20, 0],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Floating glassmorphic card */}
            <motion.div
              className={styles.glassCard}
              animate={{
                y: [0, -15, 0],
                rotate: [-5, 5, -5],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className={styles.codeLines}>
                <div className={styles.line} style={{ width: "40%" }} />
                <div className={styles.line} style={{ width: "80%" }} />
                <div className={styles.line} style={{ width: "60%" }} />
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className={styles.scrollIndicator}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          <div className={styles.mouse}>
            <div className={styles.wheel}></div>
          </div>
          <span className={styles.scrollText}>SCROLL</span>
        </motion.div>
      </div>
    </section>
  );
}
