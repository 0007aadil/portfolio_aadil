"use client";
import styles from "./Experience.module.css";

const experiences = [
  {
    id: "exp-infosys",
    company: "Infosys",
    role: "iOS Engineering Consultant",
    type: "Contract",
    period: "Mar 2026",
    location: "Mysore, India",
    color: "blue",
    icon: "📱",
    description:
      "Contracted as an iOS Developer to build robust native mobile experiences using Swift and UIKit. Engineered advanced UI components, implemented complex architectural patterns, and ensured flawless performance standards for enterprise-level applications.",
    highlights: [
      "Engineered high-performance native iOS UI modules",
      "Architected heavily-tested MVC design patterns",
      "Resolved complex state and performance bottlenecks in production code",
    ],
  },
  {
    id: "exp-dei",
    company: "SRM Directorate of Entrepreneurship (Institutional Client)",
    role: "Lead Full-Stack Developer",
    type: "Client Project",
    period: "Oct 2025 – Mar 2026",
    location: "Chennai, India",
    color: "purple",
    icon: "🏛️",
    description:
      "Led the end-to-end digital transformation for the Directorate. Designed, developed, and deployed three major administrative and incubation portals from scratch. Scaled the architecture to support thousands of active concurrent requests across the entire student and startup ecosystem.",
    highlights: [
      "Delivered the high-traffic flagship SRM DEI Web Portal",
      "Architected the BIRAC Portal for million-rupee funding distribution logic",
      "Engineered the CIAP Incubation Portal, fully digitizing manual workflows",
    ],
  },
  {
    id: "exp-jainemo",
    company: "Jainemo Private Limited",
    role: "Full-Stack Engineer",
    type: "Freelance",
    period: "May 2024 – Aug 2024",
    location: "Remote",
    color: "cyan",
    icon: "💻",
    description:
      "Consulted for an EdTech startup to rapidly build and ship full-stack features. Acted autonomously to deliver robust frontend interfaces connected securely to complex backend REST APIs.",
    highlights: [
      "Designed and shipped end-to-end user features",
      "Optimized legacy JavaScript codebases and API endpoints",
      "Accelerated the agile shipping velocity to meet investor deadlines",
    ],
  },
];

export default function Experience() {
  return (
    <section className={`section ${styles.experience}`} id="experience">
      <div className="container">
        <div className={styles.header}>
          <p className="section-label">Industry Impact</p>
          <h2 className="section-title">Client & Professional Work</h2>
          <p className="section-subtitle">
            A track record of delivering high-stakes projects on time with exceptional quality.
          </p>
        </div>

        <div className={styles.timeline}>
          {experiences.map((exp, i) => (
            <div key={exp.id} className={`${styles.timelineItem} ${i % 2 === 0 ? styles.left : styles.right}`}>
              <div className={`glass-card ${styles.card}`} id={exp.id}>
                <div className={styles.cardTop}>
                  <div className={`${styles.iconWrap} ${styles[`color_${exp.color}`]}`}>
                    <span>{exp.icon}</span>
                  </div>
                  <div className={styles.cardMeta}>
                    <span className={`${styles.typeBadge} ${styles[`badge_${exp.color}`]}`}>
                      {exp.type}
                    </span>
                    <span className={styles.period}>{exp.period}</span>
                  </div>
                </div>

                <h3 className={styles.role}>{exp.role}</h3>
                <p className={styles.company}>{exp.company}</p>
                <p className={styles.location}>📍 {exp.location}</p>

                <p className={styles.description}>{exp.description}</p>

                <ul className={styles.highlights}>
                  {exp.highlights.map((h, j) => (
                    <li key={j} className={styles.highlight}>
                      <span className={styles.bullet} />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* Center line */}
          <div className={styles.line} aria-hidden="true">
            <div className={styles.lineFill} />
          </div>
        </div>
      </div>
    </section>
  );
}
