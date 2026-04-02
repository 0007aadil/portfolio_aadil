"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`${styles.container} container`}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>AA</span>
          <span className={styles.logoDot}>.</span>
        </Link>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ""}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={styles.link}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/resume/Resume_april.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.resumeBtn}
            >
              Resume
            </a>
          </li>
        </ul>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.active : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          id="hamburger-btn"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
