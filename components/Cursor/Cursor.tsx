"use client";
import { useEffect, useRef } from "react";
import styles from "./Cursor.module.css";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const animateRing = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12;
      ring.current.y += (pos.current.y - ring.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`;
      }
      rafRef.current = requestAnimationFrame(animateRing);
    };

    const onEnterLink = () => {
      dotRef.current?.classList.add(styles.hover);
      ringRef.current?.classList.add(styles.hover);
    };
    const onLeaveLink = () => {
      dotRef.current?.classList.remove(styles.hover);
      ringRef.current?.classList.remove(styles.hover);
    };

    window.addEventListener("mousemove", moveCursor);
    rafRef.current = requestAnimationFrame(animateRing);

    const links = document.querySelectorAll("a, button, [role='button'], [tabIndex]");
    links.forEach((el) => {
      el.addEventListener("mouseenter", onEnterLink);
      el.addEventListener("mouseleave", onLeaveLink);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className={styles.dot} aria-hidden="true" />
      <div ref={ringRef} className={styles.ring} aria-hidden="true" />
    </>
  );
}
