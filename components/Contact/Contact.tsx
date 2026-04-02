"use client";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={`section ${styles.contact}`} id="contact">
      <div className="container">
        <div className={styles.wrapper}>
          {/* Left: Heading + Info */}
          <div className={styles.left}>
            <p className="section-label">Hire Me</p>
            <h2 className="section-title">Let&apos;s Build Something.</h2>
            <p className={styles.intro}>
              I partner with ambitious companies, startups, and agencies to deliver mission-critical software. Ready to scale your product perfectly on schedule? My inbox is open.
            </p>

            <div className={styles.contactItems}>
              <a href="mailto:aadilahsan007@gmail.com" className={styles.contactItem} id="email-contact">
                <div className={styles.cIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <div className={styles.cLabel}>Direct Email</div>
                  <div className={styles.cValue}>aadilahsan007@gmail.com</div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/aadilahsan0007/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactItem}
                id="linkedin-contact"
              >
                <div className={styles.cIcon}>
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <div className={styles.cLabel}>Professional Network</div>
                  <div className={styles.cValue}>LinkedIn Profile</div>
                </div>
              </a>

              <a
                href="https://github.com/0007aadil"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactItem}
                id="github-contact"
              >
                <div className={styles.cIcon}>
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div>
                  <div className={styles.cLabel}>Code Portfolio</div>
                  <div className={styles.cValue}>GitHub Actions & Code</div>
                </div>
              </a>

              <div className={styles.contactItem}>
                <div className={styles.cIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <div className={styles.cLabel}>Timezone / Location</div>
                  <div className={styles.cValue}>Global Remote / India (IST)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Certifications + CTA */}
          <div className={styles.right}>
            <div className={`glass-card ${styles.certCard}`}>
              <div className={styles.certHeader}>
                <span className={styles.certBadge}>🏅 Certification</span>
              </div>
              <h3 className={styles.certTitle}>MongoDB Associate Developer</h3>
              <p className={styles.certIssuer}>Issued by MongoDB • April 2026</p>
              <p className={styles.certDesc}>
                Demonstrates deep database architectural proficiency. Guaranteeing secure, optimized data layers and pipeline aggregations for enterprise deployments.
              </p>
              <div className={styles.certId}>
                ID: 5cb994bf-78c7-4b82-9d8f-fe02ff334414
              </div>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.certLink}
                id="mongo-cert-link"
              >
                View Credential
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </a>
            </div>

            <div className={styles.ctaBox}>
              <p className={styles.ctaText}>
                Need an expert engineer to execute your exact vision?
              </p>
              <a
                href="mailto:aadilahsan007@gmail.com"
                className={styles.ctaBtn}
                id="main-cta-btn"
              >
                Request a Consultation →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
