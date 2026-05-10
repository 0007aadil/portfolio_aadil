"use client";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import Marquee from "@/components/Marquee/Marquee";
import styles from "./Skills.module.css";

const frontendSkills = ["React", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Framer Motion", "TailwindCSS"];
const backendSkills = ["Node.js", "Bun", "MongoDB", "REST APIs", "PostgreSQL", "Express", "GraphQL"];
const mobileSkills = ["Swift", "UIKit", "iOS Development", "MVC", "MVVM", "CoreData", "SwiftUI"];

export default function Skills() {
  return (
    <section className={`section ${styles.skills}`} id="skills">
      <div className={`container ${styles.container}`}>
        <ScrollReveal>
          <div className="section-label">
            <span>02</span> Competencies
          </div>
          <h2 className="section-title">TECHNICAL ARSENAL.</h2>
        </ScrollReveal>
      </div>

      <div className={styles.marqueesContainer}>
        <ScrollReveal delay={0.1}>
          <div className={styles.marqueeWrapper}>
            <div className={styles.marqueeLabel}>Frontend</div>
            <Marquee items={frontendSkills} speed={25} />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className={styles.marqueeWrapper}>
            <div className={styles.marqueeLabel}>Backend</div>
            <Marquee items={backendSkills} speed={30} />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className={styles.marqueeWrapper}>
            <div className={styles.marqueeLabel}>Mobile</div>
            <Marquee items={mobileSkills} speed={28} />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
