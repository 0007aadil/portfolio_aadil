"use client";
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
        <div className={styles.header}>
          <p className="section-label">Career</p>
          <h2 className="section-title">Professional Experience.</h2>
        </div>

        <div className={styles.timeline}>
          {experiences.map((exp, i) => (
            <div key={i} className={styles.timelineItem}>
              <div className={styles.dot}></div>
              <div className={styles.content}>
                <div className={styles.roleHeader}>
                  <h3 className={styles.role}>{exp.role}</h3>
                  <span className={styles.period}>{exp.period}</span>
                </div>
                <h4 className={styles.company}>{exp.company}</h4>
                <ul className={styles.bullets}>
                  {exp.description.map((bullet, j) => (
                    <li key={j}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
