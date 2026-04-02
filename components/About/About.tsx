"use client";
import styles from "./About.module.css";

const stats = [
  { value: "3", label: "Enterprise Projects Delivered", suffix: "+" },
  { value: "5", label: "Years Programming", suffix: "+" },
  { value: "100", label: "Client Satisfaction", suffix: "%" },
  { value: "24", label: "Turnaround Time", suffix: "/7" },
];

export default function About() {
  return (
    <section className={`section ${styles.about}`} id="about">
      <div className="container">
        <div className={styles.grid}>
          {/* Left: Text */}
          <div className={styles.textCol}>
            <p className="section-label">Expertise & Background</p>
            <h2 className="section-title">Why Work With Me?</h2>

            <div className={styles.bio}>
              <p>
                I&apos;m <strong>Aadil Ahsan</strong>, a seasoned Full-Stack Developer and iOS Engineer based in Chennai.
                I specialize in transforming complex business requirements into sleek, scalable, and high-performing digital products that accelerate growth and engage users.
              </p>
              <p>
                Whether contracting for massive institutional clients to overhaul their digital infrastructure (like delivering SRM DEI&apos;s sprawling incubation ecosystem), or engineering precise iOS experiences at tech giants like Infosys, I bring a product-first engineering mindset. I don&apos;t just write code; I solve business problems.
              </p>
              <p>
                My expertise spans modern web tech (Next.js, React, Node.js) and native mobile (Swift, iOS architecture). If you need an end-to-end digital solution delivered flawlessly and on time, I am ready to step in.
              </p>
            </div>

            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Email</span>
                <a href="mailto:aadilahsan007@gmail.com" className={styles.infoValue}>
                  aadilahsan007@gmail.com
                </a>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Location</span>
                <span className={styles.infoValue}>Chennai, India</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Availability</span>
                <span className={`${styles.infoValue} ${styles.available}`}>
                  Accepting Clients
                </span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Core Expertise</span>
                <span className={styles.infoValue}>Full-Stack &amp; iOS</span>
              </div>
            </div>
          </div>

          {/* Right: Stats */}
          <div className={styles.statsCol}>
            <div className={styles.statsGrid}>
              {stats.map((s, i) => (
                <div key={i} className={`glass-card ${styles.statCard}`}>
                  <div className={styles.statValue}>
                    {s.value}
                    <span className={styles.statSuffix}>{s.suffix}</span>
                  </div>
                  <div className={styles.statLabel}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Education Card — retained to show solid foundational backing */}
            <div className={`glass-card ${styles.eduCard}`}>
              <div className={styles.eduHeader}>
                <span className={styles.eduIcon}>🎓</span>
                <div>
                  <div className={styles.eduDegree}>Computer Science Foundation</div>
                  <div className={styles.eduSchool}>SRM IST • B.Tech (Networking)</div>
                </div>
              </div>
              <div className={styles.eduMeta}>
                <span className={styles.eduBadge}>Core Engineering</span>
                <span className={styles.eduCgpa}>Problem Solving Focus</span>
              </div>

              <div className={styles.eduDivider} />

              <div className={styles.eduSubHeader}>
                <span className={styles.eduIcon}>💡</span>
                <div>
                  <div className={styles.eduDegree}>Continuous Innovation</div>
                  <div className={styles.eduSchool}>Staying at the bleeding edge</div>
                </div>
              </div>
              <div className={styles.eduMeta}>
                <span className={styles.eduBadge}>Cloud & AI</span>
                <span className={styles.eduCgpa}>Systems Design</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
