"use client";
import { useState } from "react";
import Lightbox from "@/components/Lightbox/Lightbox";
import styles from "./Projects.module.css";

const projects = [
  {
    id: "project-srm-dei",
    title: "SRM DEI Architectural Build",
    subtitle: "End-to-End Institutional Platform",
    description: "Official digital infrastructure for SRM's Directorate serving thousands of active users.",
    tags: ["Next.js", "React", "Node.js"],
    period: "Delivered Q4 2025",
    image: "/images/Dei.pdf",
    repoUrl: "https://github.com/0007aadil",
  },
  {
    id: "project-birac",
    title: "BIRAC Startup Funding Portal",
    subtitle: "Complex Financial Processing System",
    description: "Secure application portal to automate biotech startup funding workflows.",
    tags: ["Next.js", "React", "Tailwind"],
    period: "Delivered Q1 2026",
    image: "/images/Birac.pdf",
    repoUrl: "https://github.com/0007aadil",
  },
  {
    id: "project-ciap",
    title: "CIAP Platform Overhaul",
    subtitle: "Incubation Automation Engine",
    description: "Fully automated digital incubation dashboard replacing legacy manual processes.",
    tags: ["Next.js", "React", "TypeScript"],
    period: "Delivered Q1 2026",
    image: "/images/ciap.pdf",
    repoUrl: "https://github.com/0007aadil",
  },
  {
    id: "project-dei-feedback",
    title: "SRM DEI Client Feedback",
    subtitle: "Performance Evaluation",
    description: "Official evaluation and feedback document from the DEI Directorate board.",
    tags: ["Client Relation", "Delivery"],
    period: "Q4 2025",
    image: "/images/dei_feedback.pdf",
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
            <h2 className="section-title">Products Delivered.</h2>
            <p className="section-subtitle">
              A highlight of scalable systems, complex portals, and refined UI successfully deployed for enterprise clients.
            </p>
          </div>

          <div className={styles.grid}>
            {projects.map((project) => (
              <div key={project.id} id={project.id} className={`glass-card ${styles.card}`}>

                {/* Screenshot Preview */}
                <div
                  className={`${styles.imageWrap} ${project.image ? styles.clickable : ""}`}
                  onClick={() => project.image && openLightbox(project.image, project.title)}
                  role={project.image ? "button" : undefined}
                  tabIndex={project.image ? 0 : undefined}
                  aria-label={project.image ? `View ${project.title} preview` : undefined}
                  onKeyDown={(e) => e.key === "Enter" && project.image && openLightbox(project.image, project.title)}
                >
                  {project.image ? (
                    <>
                      <div className={styles.pdfThumbnailWrap}>
                        <iframe
                          src={`${project.image}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                          className={styles.pdfThumbnail}
                          title={`${project.title} PDF Preview`}
                          tabIndex={-1}
                        />
                      </div>
                      <div className={styles.hoverHint}>
                        <span>Preview Document</span>
                      </div>
                    </>
                  ) : (
                    <div className={styles.imagePlaceholder}>
                      <span className={styles.placeholderText}>Preview coming soon</span>
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className={styles.cardBody}>
                  <div className={styles.cardTop}>
                    <span className={styles.period}>{project.period}</span>
                  </div>

                  <h3 className={styles.title}>{project.title}</h3>
                  <p className={styles.description}>{project.description}</p>

                  <div className={styles.tags}>
                    {project.tags.map((tag, j) => (
                      <span key={j} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                  >
                    View on GitHub
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
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
