"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Clock, PhoneCall, Globe2 } from "lucide-react";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  const [typewriterKey, setTypewriterKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTypewriterKey(prev => prev + 1);
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  const typewriterText = "We translate and interpret.";
  const titleChars = typewriterText.split("");

  const languages = [
    "Spanish", "Russian", "Ukrainian", "Mandarin", "Taiwanese", 
    "Cantonese", "Arabic", "Vietnamese", "Korean", "Nepali", 
    "Hindi", "Urdu", "Japanese", "Tagalog", "German", "Farsi", "Dari"
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className={styles.main}>
      <Header />

      {/* 1:1 Preservation: Main Service Heading & Call To Action */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <img 
                src="/logo.png" 
                alt="Andromeda Logo" 
                style={{ 
                  maxWidth: '80%', 
                  maxHeight: '220px', 
                  margin: '0 auto 40px auto', 
                  display: 'block', 
                  filter: 'drop-shadow(0px 10px 15px rgba(0,0,0,0.15))' 
                }} 
              />
            </motion.div>
          </motion.div>
          <div style={{ minHeight: '60px' }}>
            <motion.h1 
              key={typewriterKey}
              className={styles.heroTitle}
            >
              {titleChars.map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ display: "none" }}
                  animate={{ display: "inline" }}
                  transition={{ delay: index * 0.05 }}
                >
                  {char}
                </motion.span>
              ))}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="heading-accent"
                style={{ display: "inline-block", marginLeft: "4px" }}
              >
                _
              </motion.span>
            </motion.h1>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Link href="/contact" className="button" style={{ 
              marginTop: '32px', 
              fontSize: '1.2rem', 
              padding: '16px 32px',
              boxShadow: '0 10px 25px rgba(235, 211, 145, 0.4)'
            }}>
              Contact us to schedule an interpreter
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 1:1 Preservation: Contact Info, Hours, Service Methods */}
      <section className={styles.gridSection} style={{ padding: '100px 0' }}>
        <div className="container">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className={styles.editorialGrid}
          >
            <motion.div variants={fadeInUp} className={styles.editorialBlock}>
              <div className={styles.editorialIcon}>
                <Clock size={40} />
              </div>
              <div className={styles.editorialText}>
                <h3>Business Hours</h3>
                <p>
                  We will respond during our regular business hours 7am to 5pm Monday through Friday.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className={styles.editorialBlock}>
              <div className={styles.editorialIcon}>
                <Globe2 size={40} />
              </div>
              <div className={styles.editorialText}>
                <h3>Service Methods</h3>
                <p>
                  We provide interpretation services in person, telephone or video call (Zoom, MS Teams, etc.).
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className={styles.editorialBlock}>
              <div className={styles.editorialIcon}>
                <PhoneCall size={40} />
              </div>
              <div className={styles.editorialText}>
                <h3>Contact Information</h3>
                <p>
                  To set up an appointment or request information, please send an email to iSchedule@AndromedaEnt.com or complete our contact form.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 1:1 Preservation: Languages Offered */}
      <section className={styles.languagesSection}>
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.sectionTitle}
          >
            Our languages
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className={styles.langGrid}
          >
            {languages.map((lang, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                whileHover={{ scale: 1.05, backgroundColor: 'var(--primary-accent)' }}
                className={styles.langPill}
              >
                {lang}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 1:1 Preservation: Founders */}
      <section className={styles.foundersSection}>
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ color: '#fff', fontSize: '3.5rem' }}
          >
            Founders
          </motion.h2>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
            className={styles.foundersGrid}
          >
            <motion.div variants={fadeInUp} className={styles.founderCard}>
              <div className={styles.founderAvatar}>
                <img src="/patty.jpg" alt="Patty Carrion" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%'}} />
              </div>
              <h3>Patty Carrion</h3>
              <p className={styles.founderSubtitle}>Co-Founder</p>
            </motion.div>
            <motion.div variants={fadeInUp} className={styles.founderCard}>
              <div className={styles.founderAvatar}>
                <img src="/miguel.jpg" alt="Miguel Muñoz" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%'}} />
              </div>
              <h3>Miguel Muñoz</h3>
              <p className={styles.founderSubtitle}>Co-Founder</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
