"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ContactForm.module.css";

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setTimeout(() => setSubmitStatus("idle"), 500);
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "",
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
      subject: "New Contact from Portfolio",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      console.log("Web3Forms response:", data);

      if (data.success) {
        setSubmitStatus("success");
        form.reset();
      } else {
        console.error("Form Error", data);
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Submission failed", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className={styles.backdrop} onClick={onClose} />
          
          <motion.div
            className={styles.modal}
            initial={{ y: 50, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <button className={styles.closeBtn} onClick={onClose} aria-label="Close form">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div className={styles.header}>
              <h2 className={styles.title}>INITIATE CONTACT.</h2>
              <p className={styles.subtitle}>Fill out the form below and I&apos;ll get back to you as soon as possible.</p>
            </div>

            {submitStatus === "success" ? (
              <div className={styles.successState}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="48" height="48">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <h3>Transmission Sent</h3>
                <p>I&apos;ve received your message and will respond shortly.</p>
                <button className={styles.actionBtn} onClick={onClose}>Close Window</button>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                  <label htmlFor="name" className={styles.label}>Name</label>
                  <input type="text" id="name" name="name" required className={styles.input} placeholder="John Doe" />
                </div>
                
                <div className={styles.inputGroup}>
                  <label htmlFor="email" className={styles.label}>Email</label>
                  <input type="email" id="email" name="email" required className={styles.input} placeholder="john@company.com" />
                </div>
                
                <div className={styles.inputGroup}>
                  <label htmlFor="message" className={styles.label}>Message</label>
                  <textarea id="message" name="message" required className={styles.textarea} placeholder="How can I help you?" rows={4} />
                </div>

                {submitStatus === "error" && (
                  <p className={styles.errorText}>Something went wrong. Please check your API key or try again later.</p>
                )}

                <button type="submit" disabled={isSubmitting} className={styles.submitBtn}>
                  {isSubmitting ? "Sending..." : "Send Transmission ↗"}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
