"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Navbar.module.css";
import ContactForm from "@/components/ContactForm/ContactForm";

const navLinks = [
  { href: "#home", label: "Home", num: "01" },
  { href: "#about", label: "About", num: "02" },
  { href: "#skills", label: "Skills", num: "03" },
  { href: "#experience", label: "Experience", num: "04" },
  { href: "#projects", label: "Projects", num: "05" },
  { href: "#activities", label: "Activities", num: "06" },
  { href: "#certificates", label: "Certificates", num: "07" },
  { href: "#contact", label: "Contact", num: "08" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <div className={`container ${styles.navContainer}`}>
          <a href="#home" className={styles.logo}>
            AA<span className={styles.logoDot}>.</span>
          </a>

          <button
            className={`${styles.hamburger} ${menuOpen ? styles.active : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            id="nav-hamburger"
          >
            <span className={styles.bar} />
            <span className={styles.bar} />
          </button>
        </div>
      </header>

      {/* Full-screen overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.overlay}
            initial={{ clipPath: "circle(0% at calc(100% - 60px) 40px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 60px) 40px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 60px) 40px)" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <nav className={styles.overlayNav}>
              <ul className={styles.overlayList}>
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1 + i * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <a
                      href={link.href}
                      className={styles.overlayLink}
                      onClick={handleLinkClick}
                    >
                      <span className={styles.linkNum}>{link.num}</span>
                      <span className={styles.linkText}>{link.label}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                className={styles.overlayFooter}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <a
                  href="/resume/Resume_april.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.overlayResume}
                >
                  Download Resume ↗
                </a>
                <div className={styles.overlaySocials}>
                  <a href="https://github.com/0007aadil" target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href="https://www.linkedin.com/in/aadilahsan0007/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <button onClick={() => setIsContactOpen(true)}>Email</button>
                </div>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <ContactForm 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </>
  );
}
