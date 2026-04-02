"use client";
import { useState } from "react";
import Image from "next/image";
import Lightbox from "@/components/Lightbox/Lightbox";
import styles from "./Projects.module.css";

const projects = [
  {
    id: "project-srm-dei",
    title: "SRM DEI Architectural Build",
    subtitle: "End-to-End Institutional Platform",
    description:
      "Contracted to design and engineer the official digital infrastructure for SRM's Directorate. Engineered a robust platform serving thousands of daily active users, deploying strict performance and security measures.",
    tags: ["Next.js", "React", "Bun", "Node.js", "MongoDB", "JavaScript"],
    period: "Delivered Q4 2025",
    color: "blue",
    emoji: "🏛️",
    image: "/images/dei-project.svg",
    repoUrl: "https://github.com/0007aadil",
  },
  {
    id: "project-birac",
    title: "BIRAC Startup Funding Portal",
    subtitle: "Complex Financial Processing System",
    description:
      "Architected a secure portal to manage and streamline critical financial applications for biotech startup funding. Built custom workflows that drastically reduced manual pipeline processing times.",
    tags: ["Next.js", "React", "Bun", "JavaScript", "HTML", "CSS"],
    period: "Delivered Q1 2026",
    color: "purple",
    emoji: "🧬",
    image: "/images/birac-project.svg",
    repoUrl: "https://github.com/0007aadil",
  },
  {
    id: "project-ciap",
    title: "CIAP Platform Overhaul",
    subtitle: "Incubation Automation Engine",
    description:
      "Overhauled entirely manual processes into a fully automated digital incubation dashboard. Delivered sleek UX over complex data schemas, allowing real-time tracking for hundreds of institutional startups.",
    tags: ["Next.js", "React", "Bun", "JavaScript", "HTML", "CSS"],
    period: "Delivered Q1 2026",
    color: "cyan",
    emoji: "🚀",
    image: "/images/ciap.svg",
    repoUrl: "https://github.com/0007aadil",
  },
];

export default function Projects() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxAlt, setLightboxAlt] = useState<string>("");

  const openLightbox = (src: string, alt: string) => {
    setLightboxSrc(src);
    setLightboxAlt(alt);
  };

  const closeLightbox = () => {
    setLightboxSrc(null);
    setLightboxAlt("");
  };

  return (
    <>
      <section className={`section ${styles.projects}`} id="projects">
        <div className="container">
          <div className={styles.header}>
            <p className="section-label">Selected Portfolio</p>
            <h2 className="section-title">Products Delivered</h2>
            <p className="section-subtitle">
              A highlight of scalable systems, complex portals, and refined UI successfully deployed for enterprise clients.
            </p>
          </div>

          <div className={styles.grid}>
            {projects.map((project) => (
              <div key={project.id} id={project.id} className={styles.card}>

                {/* Screenshot Preview — click to open lightbox */}
                <div
                  className={`${styles.imageWrap} ${styles[`imageBorder_${project.color}`]} ${project.image ? styles.clickable : ""}`}
                  onClick={() => project.image && openLightbox(project.image, project.title)}
                  role={project.image ? "button" : undefined}
                  tabIndex={project.image ? 0 : undefined}
                  aria-label={project.image ? `View ${project.title} preview` : undefined}
                  onKeyDown={(e) => e.key === "Enter" && project.image && openLightbox(project.image, project.title)}
                >
                  {project.image ? (
                    <>
                      <Image
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        fill
                        className={styles.screenshot}
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      {/* Hover hint */}
                      <div className={styles.hoverHint}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                          <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                        </svg>
                        <span>Click to expand</span>
                      </div>
                    </>
                  ) : (
                    <div className={`${styles.imagePlaceholder} ${styles[`placeholder_${project.color}`]}`}>
                      <span className={styles.placeholderEmoji}>{project.emoji}</span>
                      <span className={styles.placeholderText}>Screenshot coming soon</span>
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className={styles.cardBody}>
                  <div className={styles.cardTop}>
                    <div className={`${styles.projectIcon} ${styles[`icon_${project.color}`]}`}>
                      {project.emoji}
                    </div>
                    <div className={styles.cardTopRight}>
                      <span className={styles.period}>{project.period}</span>
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.githubLink}
                        id={`${project.id}-github`}
                        aria-label="View on GitHub"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                        </svg>
                        GitHub
                      </a>
                    </div>
                  </div>

                  <h3 className={styles.title}>{project.title}</h3>
                  <p className={styles.subtitle}>{project.subtitle}</p>
                  <p className={styles.description}>{project.description}</p>

                  <div className={styles.tags}>
                    {project.tags.map((tag, j) => (
                      <span key={j} className={`${styles.tag} ${styles[`tag_${project.color}`]}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom glow line */}
                <div className={`${styles.glowLine} ${styles[`glow_${project.color}`]}`} aria-hidden="true" />
              </div>
            ))}
          </div>

          <div className={styles.footer}>
            <a
              href="https://github.com/0007aadil"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.moreBtn}
              id="github-more-btn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              View Developer Profile
            </a>
          </div>
        </div>
      </section>

      {/* Fullscreen Lightbox */}
      {lightboxSrc && (
        <Lightbox src={lightboxSrc} alt={lightboxAlt} onClose={closeLightbox} />
      )}
    </>
  );
}
