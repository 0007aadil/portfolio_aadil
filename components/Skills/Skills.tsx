"use client";
import styles from "./Skills.module.css";

const skillCategories = [
  {
    title: "Frontend & Web",
    skills: ["React", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3"],
  },
  {
    title: "Backend & Database",
    skills: ["Node.js", "Bun", "MongoDB", "REST APIs"],
  },
  {
    title: "Mobile Development",
    skills: ["Swift", "UIKit", "iOS Development", "MVC/MVVM"],
  },
  {
    title: "Tools & Infrastructure",
    skills: ["Git", "GitHub", "VS Code", "Xcode", "Vercel"],
  }
];

export default function Skills() {
  return (
    <section className={`section ${styles.skills}`} id="skills">
      <div className="container">
        <div className={styles.header}>
          <p className="section-label">Competencies</p>
          <h2 className="section-title">Technical Arsenal.</h2>
        </div>

        <div className={styles.grid}>
          {skillCategories.map((cat, i) => (
            <div key={i} className={styles.categoryCard}>
              <h3 className={styles.catTitle}>{cat.title}</h3>
              <div className={styles.tagList}>
                {cat.skills.map((skill, j) => (
                  <span key={j} className={styles.tag}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
