"use client";
import React from 'react';
import { motion } from 'framer-motion';
import styles from '@/app/page.module.css';

export const ModernStandardChartAnimation = () => {
    return (
        <div className={`${styles.barChart} mono`}>
            {/* Infinite looping variants for the charts */}

            <div className={styles.barRow}>
                <div className={styles.barLabel}>PNG</div>
                <div className={styles.barTrack}>
                    <motion.div
                        initial={{ x: '-100%' }}
                        whileInView={{ x: '0%' }}
                        viewport={{ once: false, margin: "-50px" }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                        className={styles.barFill}
                        style={{ background: 'rgba(255,255,255,0.1)', width: '100%' }}
                    />
                </div>
                <div className={styles.barLabel} style={{ textAlign: 'left', color: 'var(--text-primary)' }}>1.2MB</div>
            </div>

            <div className={styles.barRow}>
                <div className={styles.barLabel}>JPEG</div>
                <div className={styles.barTrack}>
                    <motion.div
                        initial={{ x: '-100%' }}
                        whileInView={{ x: '0%' }}
                        viewport={{ once: false, margin: "-50px" }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                        className={styles.barFill}
                        style={{ background: 'rgba(255,255,255,0.1)', width: '65%' }}
                    />
                </div>
                <div className={styles.barLabel} style={{ textAlign: 'left', color: 'var(--text-primary)' }}>800KB</div>
            </div>

            <div className={styles.barRow}>
                <div className={styles.barLabel} style={{ color: 'var(--accent-secondary)', fontWeight: 800 }}>WebP</div>
                <div className={styles.barTrack}>
                    <motion.div
                        initial={{ x: '-100%' }}
                        whileInView={{ x: '0%' }}
                        viewport={{ once: false, margin: "-50px" }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                        className={styles.barFill}
                        style={{ background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-tertiary))', boxShadow: '0 0 15px rgba(255,0,51,0.3)', width: '35%' }}
                    />
                </div>
                <div className={styles.barLabel} style={{ textAlign: 'left', color: 'var(--accent-secondary)', fontWeight: 800 }}>320KB</div>
            </div>

            <div className={styles.barRow}>
                <div className={styles.barLabel} style={{ color: 'var(--accent-secondary)', fontWeight: 800 }}>AVIF</div>
                <div className={styles.barTrack}>
                    <motion.div
                        initial={{ x: '-100%' }}
                        whileInView={{ x: '0%' }}
                        viewport={{ once: false, margin: "-50px" }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
                        className={styles.barFill}
                        style={{ background: 'var(--accent-tertiary)', boxShadow: '0 0 10px rgba(161, 0, 31, 0.5)', width: '25%' }}
                    />
                </div>
                <div className={styles.barLabel} style={{ textAlign: 'left', color: 'var(--accent-secondary)', fontWeight: 800 }}>210KB</div>
            </div>
        </div>
    );
};
