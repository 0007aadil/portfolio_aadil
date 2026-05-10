"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import styles from "./Projects.module.css";
import { clientProjects, personalProjects } from "@/data/projects";

export default function Projects() {
  const router = useRouter();
  return (
    <section className={`section ${styles.projects}`} id="projects">
      <div className={`container ${styles.container}`}>
        <ScrollReveal>
          <div className="section-label">
            <span>04</span> Selected Portfolio
          </div>
          <h2 className="section-title">PRODUCTS DELIVERED.</h2>
          <p className="section-subtitle">
            A highlight of scalable systems, complex portals, and refined UI successfully deployed for enterprise clients and personal experimentation.
          </p>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.1}>
        <div className={styles.categoryHeader}>
          <h3 className={styles.categoryTitle}>Client Projects</h3>
        </div>
      </ScrollReveal>
      <div className={styles.projectsList}>
        {clientProjects.map((project, i) => (
          <ScrollReveal key={project.id} delay={0.1}>
            <div 
              className={styles.projectRow}
              onClick={() => window.open(project.link, '_blank')}
              role="button"
              tabIndex={0}
            >
              <div className={styles.rowBackground}>
                <Image 
                  src={project.cover} 
                  alt={project.title}
                  fill
                  className={styles.bgImage}
                />
                <div className={styles.bgOverlay} />
              </div>

              <div className={styles.rowContent}>
                <div className={styles.rowMeta}>
                  <span className={styles.projectNum}>0{i + 1}</span>
                  <span className={styles.projectPeriod}>{project.period}</span>
                </div>
                
                <div className={styles.rowMain}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDesc}>{project.description}</p>
                  
                  <div className={styles.tags}>
                    {project.tags.map((tag, j) => (
                      <span key={j} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                </div>
                
                <div className={styles.rowAction}>
                  <span className={styles.actionText}>Visit Site</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.1}>
        <div className={styles.categoryHeader}>
          <h3 className={styles.categoryTitle}>Personal Projects</h3>
        </div>
      </ScrollReveal>
      <div className={`${styles.projectsList} ${styles.lastList}`}>
        {personalProjects.map((project, i) => (
          <ScrollReveal key={project.id} delay={0.1}>
            <div 
              className={styles.projectRow}
              onClick={() => router.push(`/projects/${project.id}`)}
              role="button"
              tabIndex={0}
            >
              <div className={styles.rowBackground}>
                <Image 
                  src={project.cover} 
                  alt={project.title}
                  fill
                  className={styles.bgImage}
                />
                <div className={styles.bgOverlay} />
              </div>

              <div className={styles.rowContent}>
                <div className={styles.rowMeta}>
                  <span className={styles.projectNum}>P{i + 1}</span>
                  <span className={styles.projectPeriod}>{project.period}</span>
                </div>
                
                <div className={styles.rowMain}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDesc}>{project.description}</p>
                  
                  <div className={styles.tags}>
                    {project.tags.map((tag, j) => (
                      <span key={j} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                </div>
                
                <div className={styles.rowAction}>
                  <span className={styles.actionText}>View Case Study</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
