"use client";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import styles from "./Experience.module.css";

const experiences = [
  {
    role: "iOS Developer Intern",
    company: "Infosys - Mysore, India",
    period: "Mar 2026 - Mar 2026",
    description: [
      "Worked as an iOS Developer Intern, gaining hands-on experience in building mobile applications using Swift and UIKit.",
      "Developed and optimized UI components, understood application architecture, and followed industry-standard development practices.",
      "Improved debugging, problem-solving, and real-world software development skills."
    ]
  },
  {
    role: "Frontend Developer Intern",
    company: "Directorate of Entrepreneurship and Innovation (DEI) - Chennai",
    period: "Oct 2025 - Mar 2026",
    description: [
      "Designed and engineered frontend infrastructure for the Directorate's digital incubation and entrepreneurship tracking systems.",
      "Built responsive, user-centric interfaces serving students and administrative faculty."
    ]
  },
  {
    role: "Full Stack Intern",
    company: "Jainemo Private Limited - Remote",
    period: "May 2024 - Aug 2024",
    description: [
      "Contributed to full-stack feature development for modern educational services in an agile remote environment.",
      "Collaborated with cross-functional teams to debug, test, and ship responsive web components."
    ]
  }
];

export default function Experience() {
  return (
    <section className={`section ${styles.experience}`} id="experience">
      <div className={`container ${styles.container}`}>
        <ScrollReveal>
          <div className="section-label">
            <span>03</span> Career
          </div>
          <h2 className="section-title">PROFESSIONAL TIMELINE.</h2>
        </ScrollReveal>

        <div className={styles.timeline}>
          {experiences.map((exp, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className={styles.timelineItem}>
                <div className={styles.metaInfo}>
                  <span className={styles.period}>{exp.period}</span>
                  <h4 className={styles.company}>{exp.company}</h4>
                </div>
                
                <div className={styles.contentInfo}>
                  <h3 className={styles.role}>{exp.role}</h3>
                  <div className={styles.descriptionWrapper}>
                    <ul className={styles.bullets}>
                      {exp.description.map((bullet, j) => (
                        <li key={j}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
