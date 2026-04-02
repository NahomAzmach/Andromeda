"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import styles from "../app/page.module.css";

export function Header() {
  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.noticeBanner}
      >
        Andromeda Interpreting and Translation Services no longer has a physical office, we are working with Google to fix this issue as soon as possible. We appreciate your understanding.
      </motion.div>

      <header className={styles.header}>
        <div className={`container ${styles.headerContent}`}>
          <div className={styles.logoArea}>
            <div className={styles.logoTitle}>Andromeda Interpreting & Translation Services</div>
            <div className={styles.logoMotto}>THE WORLD IN YOUR LANGUAGE</div>
          </div>
          <nav className={styles.navLinks}>
            <Link href="/" className={styles.navLink}>Home</Link>
            <Link href="/about" className={styles.navLink}>About</Link>
            <Link href="/contact" className={styles.navLink}>Contact</Link>
          </nav>
        </div>
      </header>
    </>
  );
}
