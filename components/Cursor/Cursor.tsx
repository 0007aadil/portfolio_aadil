"use client";
import { useEffect, useRef, useCallback } from "react";
import styles from "./Cursor.module.css";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const rafRef = useRef<number | null>(null);
  const isTouch = useRef(false);

  const moveCursor = useCallback((e: MouseEvent) => {
    if (isTouch.current) return;
    pos.current = { x: e.clientX, y: e.clientY };
    if (dotRef.current) {
      dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    }
  }, []);

  useEffect(() => {
    // Detect touch device
    const checkTouch = () => { isTouch.current = true; };
    window.addEventListener("touchstart", checkTouch, { once: true });

    const animateRing = () => {
      if (isTouch.current) return;
      ring.current.x += (pos.current.x - ring.current.x) * 0.1;
      ring.current.y += (pos.current.y - ring.current.y) * 0.1;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px) translate(-50%, -50%)`;
      }
      rafRef.current = requestAnimationFrame(animateRing);
    };

    window.addEventListener("mousemove", moveCursor);
    rafRef.current = requestAnimationFrame(animateRing);

    // Hover detection with MutationObserver for dynamic content
    const addHoverListeners = () => {
      const interactives = document.querySelectorAll("a, button, [role='button'], [tabIndex], input, textarea");
      interactives.forEach((el) => {
        el.addEventListener("mouseenter", onEnterLink);
        el.addEventListener("mouseleave", onLeaveLink);
      });
    };

    const onEnterLink = () => {
      dotRef.current?.classList.add(styles.hover);
      ringRef.current?.classList.add(styles.hover);
    };
    const onLeaveLink = () => {
      dotRef.current?.classList.remove(styles.hover);
      ringRef.current?.classList.remove(styles.hover);
    };

    addHoverListeners();

    // Re-attach on DOM changes
    const observer = new MutationObserver(() => addHoverListeners());
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("touchstart", checkTouch);
      observer.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [moveCursor]);

  return (
    <>
      <div ref={dotRef} className={styles.dot} aria-hidden="true" />
      <div ref={ringRef} className={styles.ring} aria-hidden="true" />
    </>
  );
}
