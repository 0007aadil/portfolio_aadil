"use client";
import { useEffect, useState } from "react";
import styles from "./Typewriter.module.css";

const roles = [
  "Full-Stack Web Developer",
  "iOS & Swift Engineer",
  "Systems Architect",
  "UI/UX Craftsman",
  "MongoDB Expert",
  "Freelance Consultant",
];

export default function Typewriter() {
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.slice(0, charIndex + 1));
        if (charIndex + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        } else {
          setCharIndex((c) => c + 1);
        }
      } else {
        setDisplayText(current.slice(0, charIndex - 1));
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setCharIndex(0);
          setRoleIndex((r) => (r + 1) % roles.length);
        } else {
          setCharIndex((c) => c - 1);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <span className={styles.wrapper}>
      <span className={styles.prefix}>// </span>
      <span className={styles.text}>{displayText}</span>
      <span className={styles.cursor} aria-hidden="true">▋</span>
    </span>
  );
}
