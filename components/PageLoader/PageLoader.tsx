"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./PageLoader.module.css";

export default function PageLoader({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"name" | "exit">("name");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("exit"), 2000);
    const t2 = setTimeout(() => onComplete(), 2800);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "exit" ? null : null}
      <motion.div
        className={styles.loader}
        initial={{ opacity: 1 }}
        animate={phase === "exit" ? { opacity: 0 } : { opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        style={{ pointerEvents: phase === "exit" ? "none" : "auto" }}
      >
        <div className={styles.content}>
          <motion.div
            className={styles.line}
            initial={{ width: 0 }}
            animate={{ width: "60px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          />
          <motion.h1
            className={styles.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Aadil Ahsan
          </motion.h1>
          <motion.p
            className={styles.role}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Software Engineer
          </motion.p>
          <motion.div
            className={styles.progressBar}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.8, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
