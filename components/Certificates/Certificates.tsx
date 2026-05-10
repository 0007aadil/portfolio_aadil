"use client";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";
import styles from "./Certificates.module.css";

const certificates = [
  {
    title: "MongoDB Associate Developer",
    organization: "MongoDB",
    date: "March 2026",
    credentialId: "5cb994bf-78c7-4b82-9d8f-fe02ff334414",
    file: "/certificates/MongoDB Associate Developer.png",
    link: "https://www.credly.com/badges/5cb994bf-78c7-4b82-9d8f-fe02ff334414/public_url",
  },
  {
    title: "MongoDB Certified Associate Data Modeler",
    organization: "MongoDB",
    date: "May 2026",
    credentialId: "f717bcd5-de1a-405f-aa5d-1521702d39f7",
    file: "/certificates/MongoDB Certified Associate Data Modeler.png",
    link: "https://www.credly.com/badges/f717bcd5-de1a-405f-aa5d-1521702d39f7/public_url",
  },
  {
    title: "AWS Academy Graduate - Cloud Foundations",
    organization: "Amazon Web Services",
    date: "August 2024",
    credentialId: "7d7aa773-641f-45ca-a202-aa902fe0f551",
    file: "/certificates/cloud foundation.png",
    link: "https://www.credly.com/badges/7d7aa773-641f-45ca-a202-aa902fe0f551/public_url",
  },
  {
    title: "AWS Academy Graduate - Data Engineering",
    organization: "Amazon Web Services",
    date: "September 2024",
    credentialId: "8be27d8b-7ef8-4e9a-96de-7fcaabb50e02",
    file: "/certificates/data engineering.png",
    link: "https://www.credly.com/badges/8be27d8b-7ef8-4e9a-96de-7fcaabb50e02/public_url",
  }
];

export default function Certificates() {
  return (
    <section className={`section ${styles.certificates}`} id="certificates">
      <div className={`container ${styles.container}`}>
        <ScrollReveal>
          <div className="section-label">
            <span>07</span> Credentials
          </div>
          <h2 className="section-title">CERTIFICATIONS.</h2>
          <p className="section-subtitle">
            Professional training badges and developer certifications demonstrating specialized expertise.
          </p>
        </ScrollReveal>

        <div className={styles.grid}>
          {certificates.map((cert, i) => (
            <ScrollReveal key={i} delay={0.1 * i}>
              <a 
                href={cert.link} 
                target="_blank" 

                rel="noopener noreferrer" 
                className={styles.card}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.iconContainer}>
                    <Image 
                      src={cert.file} 
                      alt={cert.title} 
                      width={60} 
                      height={60} 
                      className={styles.badgeImage}
                    />
                  </div>
                  <div className={styles.orgTag}>{cert.organization}</div>
                </div>
                
                <div className={styles.cardBody}>
                  <h3 className={styles.certTitle}>{cert.title}</h3>
                  <div className={styles.metaInfo}>
                    <span className={styles.metaLabel}>Issued:</span>
                    <span className={styles.metaValue}>{cert.date}</span>
                  </div>
                  <div className={styles.metaInfo}>
                    <span className={styles.metaLabel}>ID:</span>
                    <span className={styles.metaValue}>{cert.credentialId}</span>
                  </div>
                </div>

                <div className={styles.cardFooter}>
                  <span className={styles.viewText}>View Credential</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
