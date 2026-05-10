"use client";
import styles from "./Marquee.module.css";

interface MarqueeProps {
  items: string[];
  speed?: number;
  separator?: string;
}

export default function Marquee({
  items,
  speed = 30,
  separator = "·",
}: MarqueeProps) {
  const content = items.join(` ${separator} `) + ` ${separator} `;

  return (
    <div className={styles.marquee}>
      <div
        className={styles.track}
        style={{ animationDuration: `${speed}s` }}
      >
        <span className={styles.text}>{content}</span>
        <span className={styles.text} aria-hidden="true">{content}</span>
      </div>
    </div>
  );
}
