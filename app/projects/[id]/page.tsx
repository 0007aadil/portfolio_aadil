import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { personalProjects } from "@/data/projects";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import styles from "./ProjectDetails.module.css";
import Cursor from "@/components/Cursor/Cursor";

export function generateStaticParams() {
  return personalProjects.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectDetails({ params }: { params: { id: string } }) {
  const project = personalProjects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Cursor />
      
      {/* Navbar Minimal Wrapper */}
      <nav className={styles.minimalNav}>
        <div className={`container ${styles.navContainer}`}>
          <Link href="/#projects" className={styles.backBtn}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Back
          </Link>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.visitBtn}>
            Visit Site ↗
          </a>
        </div>
      </nav>

      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroBg}>
            <Image 
              src={project.cover}
              alt={project.title}
              fill
              className={styles.heroImage}
              priority
            />
            <div className={styles.heroOverlay} />
          </div>

          <div className={`container ${styles.heroContent}`}>
            <ScrollReveal direction="down">
              <span className={styles.heroSubtitle}>{project.subtitle}</span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className={styles.heroTitle}>{project.title}</h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className={styles.heroTags}>
                {project.tags.map((tag, i) => (
                  <span key={i} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Content Sections */}
        <section className={`container ${styles.contentSection}`}>
          {project.sections.map((section, idx) => (
            <ScrollReveal key={idx} delay={0.1} className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>{section.title}</h2>
              
              {section.content && (
                <p className={styles.sectionBody}>{section.content}</p>
              )}
              
              {section.list && (
                <ul className={styles.sectionList}>
                  {section.list.map((item, i) => (
                    <li key={i} className={styles.listItem}>{item}</li>
                  ))}
                </ul>
              )}
              
              {section.table && (
                <div className={styles.tableWrapper}>
                  {section.table.map((row, i) => (
                    <div key={i} className={styles.tableRow}>
                      <span className={styles.tableLabel}>{row.label}</span>
                      <span className={styles.tableValue}>{row.value}</span>
                    </div>
                  ))}
                </div>
              )}
            </ScrollReveal>
          ))}
        </section>

        {/* Image Gallery */}
        <section className={styles.gallerySection}>
          <div className="container">
            <ScrollReveal>
              <h2 className={styles.sectionTitle}>Visuals</h2>
            </ScrollReveal>
          </div>
          
          <div className={styles.galleryGrid}>
            {project.images.map((src, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1} className={styles.galleryWrapper}>
                <Image 
                  src={src} 
                  alt={`${project.title} screenshot ${idx + 1}`}
                  fill
                  className={styles.galleryImage}
                />
              </ScrollReveal>
            ))}
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <Link href="/#projects" className={styles.footerBackBtn}>
          ← Return to Portfolio
        </Link>
      </footer>
    </>
  );
}
