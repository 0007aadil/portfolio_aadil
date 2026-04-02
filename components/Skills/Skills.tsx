"use client";
import styles from "./Skills.module.css";

const skillCategories = [
  {
    title: "Frontend & Web",
    icon: "🌐",
    color: "blue",
    skills: ["React", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3"],
  },
  {
    title: "Backend & Database",
    icon: "⚙️",
    color: "purple",
    skills: ["Node.js", "Bun", "MongoDB", "REST APIs"],
  },
  {
    title: "iOS & Mobile",
    icon: "📱",
    color: "cyan",
    skills: ["Swift", "UIKit", "iOS Development", "MVC/MVVM", "App Lifecycle"],
  },
  {
    title: "Tools & DevOps",
    icon: "🛠️",
    color: "green",
    skills: ["Git", "GitHub", "VS Code", "Xcode", "Vercel"],
  },
  {
    title: "Problem Solving",
    icon: "🧠",
    color: "orange",
    skills: ["Data Structures", "Algorithms", "System Design", "UI/UX Design"],
  },
  {
    title: "Languages Spoken",
    icon: "💬",
    color: "pink",
    skills: ["English (Pro)", "Hindi (Native)", "Chinese (Basic)", "Urdu", "Arabic"],
  },
];

const proficiencyLevels = [
  { label: "Web Development", level: 90, color: "blue" },
  { label: "React / Next.js", level: 88, color: "purple" },
  { label: "iOS App Development", level: 65, color: "cyan" },
  { label: "Problem Solving (DSA)", level: 70, color: "green" },
  { label: "UI/UX Design", level: 72, color: "orange" },
  { label: "Swift", level: 60, color: "pink" },
];

export default function Skills() {
  return (
    <section className={`section ${styles.skills}`} id="skills">
      <div className="container">
        <div className={styles.header}>
          <p className="section-label">What I Know</p>
          <h2 className="section-title">Technical Arsenal</h2>
          <p className="section-subtitle">
            A curated set of technologies I wield to build powerful, modern applications.
          </p>
        </div>

        <div className={styles.categoriesGrid}>
          {skillCategories.map((cat, i) => (
            <div key={i} className={`glass-card ${styles.categoryCard} ${styles[`color_${cat.color}`]}`}>
              <div className={styles.catHeader}>
                <span className={styles.catIcon}>{cat.icon}</span>
                <span className={styles.catTitle}>{cat.title}</span>
              </div>
              <div className={styles.tagList}>
                {cat.skills.map((skill, j) => (
                  <span key={j} className={styles.tag}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.proficiency}>
          <h3 className={styles.profTitle}>Proficiency Levels</h3>
          <div className={styles.bars}>
            {proficiencyLevels.map((item, i) => (
              <div key={i} className={styles.barItem}>
                <div className={styles.barMeta}>
                  <span className={styles.barLabel}>{item.label}</span>
                  <span className={styles.barPct}>{item.level}%</span>
                </div>
                <div className={styles.barTrack}>
                  <div
                    className={`${styles.barFill} ${styles[`fill_${item.color}`]}`}
                    style={{ width: `${item.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
