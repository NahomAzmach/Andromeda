"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import styles from "../page.module.css";
import sharedStyles from "../shared.module.css";
import aboutStyles from "./about.module.css";
import { useRef } from "react";

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

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
      
      <section className={sharedStyles.pageContainer} style={{ overflow: 'hidden', position: 'relative' }}>
        <motion.div 
          style={{ 
            position: 'absolute', 
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'radial-gradient(circle at top right, rgba(235, 211, 145, 0.1) 0%, transparent 60%)',
            y: backgroundY,
            zIndex: -1
          }} 
        />
        
        <div className="container" ref={containerRef}>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className={sharedStyles.pageTitle}
          >
            OUR HISTORY
          </motion.h1>

          <div className={aboutStyles.timelineContainer}>
            <div className={aboutStyles.timelineLine}></div>
            
            {/* 2001 Segment */}
            <div className={aboutStyles.timelineItem}>
              <motion.div 
                className={aboutStyles.nodeDot}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              />
              <motion.div 
                className={aboutStyles.contentWrapper}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className={aboutStyles.contentCard}>
                  <div className={aboutStyles.yearText}>2001</div>
                  <h3 className={aboutStyles.storyTitle}>The Beginning</h3>
                  <p className={aboutStyles.storyText}>
                    Patty and Miguel migrated from Mexico to the Seattle area in 2001. They soon begin to notice a lack of communication between non-English speakers and the rest of the community. Patty became a certified interpreter through DSHS a few years later and Miguel followed her. Due to their dedication, precision and care for the community they were sought after more and more.
                  </p>
                </div>
              </motion.div>
              <div className={aboutStyles.contentWrapper} style={{ visibility: 'hidden' }}></div>
            </div>

            {/* 2014 Segment */}
            <div className={aboutStyles.timelineItem}>
              <motion.div 
                className={aboutStyles.nodeDot}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              />
              <motion.div 
                className={aboutStyles.contentWrapper}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className={aboutStyles.contentCard}>
                  <div className={aboutStyles.yearText}>2014</div>
                  <h3 className={aboutStyles.storyTitle}>The Agency is Born</h3>
                  <p className={aboutStyles.storyText}>
                    In November 2014, Patty and Miguel decided to go out on their own and create an agency that not only interpreted and translated but it did a service to the community with interpreters whose goal is to help the community communicate among each other seamlessly. To help families feel that they are able to be part of their community.
                  </p>
                </div>
              </motion.div>
              <div className={aboutStyles.contentWrapper} style={{ visibility: 'hidden' }}></div>
            </div>

          </div>
        </div>
      </section>

      <section className={styles.foundersSection}>
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ color: '#fff', fontSize: '3.5rem' }}
          >
            The Founders
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
