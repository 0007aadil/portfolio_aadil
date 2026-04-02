"use client";
import { useEffect, useState } from "react";
import styles from "./Terminal.module.css";

const lines = [
  { delay: 0,    type: "cmd",    text: "whoami" },
  { delay: 600,  type: "out",    text: "aadil-ahsan  --expert-developer" },
  { delay: 1200, type: "cmd",    text: "cat skills.json | grep stack" },
  { delay: 1900, type: "out",    text: '"stack": ["Next.js","Swift","Node","MongoDB"]' },
  { delay: 2600, type: "cmd",    text: "git log --oneline --max-count=3" },
  { delay: 3300, type: "commit", text: "a3f2b1c  Shipped BIRAC Portal ✓" },
  { delay: 3600, type: "commit", text: "b8d4e5f  Delivered SRM DEI Platform ✓" },
  { delay: 3900, type: "commit", text: "c9e1a2d  Engineered CIAP System ✓" },
  { delay: 4600, type: "cmd",    text: "npm run hire-me" },
  { delay: 5200, type: "success",text: "✔  Ready to ship your next product →" },
];

export default function Terminal() {
  const [visible, setVisible] = useState<number[]>([]);

  useEffect(() => {
    const timers = lines.map((line, i) =>
      setTimeout(() => setVisible((v) => [...v, i]), line.delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className={styles.terminal} aria-label="Terminal code snippet">
      {/* Window chrome */}
      <div className={styles.chrome}>
        <span className={styles.dot} data-color="red" />
        <span className={styles.dot} data-color="yellow" />
        <span className={styles.dot} data-color="green" />
        <span className={styles.title}>aadil@dev ~ zsh</span>
      </div>

      {/* Lines */}
      <div className={styles.body}>
        {lines.map((line, i) =>
          visible.includes(i) ? (
            <div key={i} className={`${styles.line} ${styles[line.type]}`}>
              {line.type === "cmd" && (
                <span className={styles.prompt}>❯</span>
              )}
              <span className={styles.lineText}>{line.text}</span>
            </div>
          ) : null
        )}
        {/* Blinking prompt at end */}
        {visible.length === lines.length && (
          <div className={styles.line}>
            <span className={styles.prompt}>❯</span>
            <span className={styles.blinkCursor}>▋</span>
          </div>
        )}
      </div>
    </div>
  );
}
