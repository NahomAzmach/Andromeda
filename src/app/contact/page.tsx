"use client";

import { motion } from "framer-motion";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import styles from "../page.module.css";
import pageStyles from "../shared.module.css";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formsubmit.co/ajax/", {
        method: "POST",
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };
  return (
    <div className={styles.main}>
      <Header />

      <section className={pageStyles.pageContainer}>
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={pageStyles.pageTitle}
          >
            CONTACT US
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={pageStyles.contentBox}
          >
            <form onSubmit={handleSubmit} className={pageStyles.contactForm}>
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New Contact Form Submission - Andromeda Website" />

              <div className={pageStyles.formGroup}>
                <label>Name (First, Last) *</label>
                <input type="text" name="name" required className={pageStyles.inputField} />
              </div>

              <div className={pageStyles.formGroup}>
                <label>Email *</label>
                <input type="email" name="email" required className={pageStyles.inputField} />
              </div>

              <div className={pageStyles.formGroup}>
                <label>Phone Number</label>
                <input type="tel" name="phone" className={pageStyles.inputField} />
              </div>

              <div className={pageStyles.formGroup}>
                <label>Message *</label>
                <textarea name="message" required rows={5} className={pageStyles.inputField}></textarea>
              </div>

              {status === "error" && (
                <div style={{ color: '#ff4d4d', marginBottom: '16px', fontWeight: 500 }}>
                  There was an error sending your message. Please try emailing us directly instead.
                </div>
              )}
              {status === "success" && (
                <div style={{ color: '#4caf50', marginBottom: '16px', fontWeight: 500 }}>
                  Message sent successfully! We will get back to you soon.
                </div>
              )}

              <button type="submit" disabled={status === "sending"} className="button" style={{ width: '100%', marginTop: '16px', opacity: status === "sending" ? 0.7 : 1 }}>
                {status === "sending" ? "SENDING..." : "SUBMIT"}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
