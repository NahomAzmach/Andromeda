"use client";
import styles from "../app/page.module.css";
import { motion } from "framer-motion";
import { Globe, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className={styles.footer} style={{ paddingTop: '60px', paddingBottom: '60px' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
        <motion.div
           animate={{ rotate: 360 }}
           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Globe size={40} color="var(--primary-accent)" />
        </motion.div>
        
        <p style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1rem', fontWeight: 500, letterSpacing: '0.5px', textAlign: 'center' }}>
          &copy; {new Date().getFullYear()} Andromeda Interpreting & Translation Services. All Rights Reserved.
        </p>
        
        <p style={{ margin: 0, marginTop: '-8px' }}>
          <a href="mailto:iSchedule@AndromedaEnt.com" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '1rem', fontWeight: 500, transition: 'color 0.2s ease' }} onMouseOver={e => e.currentTarget.style.color = 'var(--primary-accent)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
            <Mail size={18} /> iSchedule@AndromedaEnt.com
          </a>
        </p>

        <motion.div 
           initial={{ width: 0 }}
           whileInView={{ width: '120px' }}
           viewport={{ once: true }}
           transition={{ duration: 1.2, ease: "easeOut" }}
           style={{ height: '3px', backgroundColor: 'var(--primary-accent)', marginTop: '8px', borderRadius: '2px' }}
        />
      </div>
    </footer>
  );
}
