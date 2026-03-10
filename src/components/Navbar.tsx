"use client";

import { Box, Github } from "lucide-react";
import { MonolithElement } from "./MonolithElement";
import { motion } from "framer-motion";
import styles from "./Navbar.module.css";

export const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={styles.navGlass}
        >
            <div className={styles.navBrand}>
                <div className={styles.navLogoBox}>
                    <Box size={16} color="white" />
                </div>
                <span className="mono" style={{ fontSize: '14px', fontWeight: 500 }}>payload-img-convert</span>
            </div>

            {/* <div className={styles.navLinks}>
                <a href="#features">Features</a>
                <a href="#developers">Developers</a>
                <a href="#docs">Docs</a>
            </div> */}

            <div className={styles.navActions}>
                <a href="https://github.com/stianlars1/payload-img-convert" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)' }}>
                    <Github size={20} />
                </a>
                <MonolithElement role="button" tabIndex={0} style={{ padding: '8px 16px', fontSize: '14px', fontWeight: 500, background: 'rgba(255,255,255,0.05)', cursor: 'pointer' }}>
                    Get Started
                </MonolithElement>
            </div>
        </motion.nav>
    );
};
