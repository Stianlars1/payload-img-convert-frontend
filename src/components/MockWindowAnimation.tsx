'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Hexagon, UserCircle, MoreVertical, X, ChevronDown, Check, Loader2, MousePointer2 } from 'lucide-react';
import styles from './MockWindowAnimation.module.css';
import { CopyButton } from './CopyButton';

export const MockWindowAnimation = ({ ready }: { ready: boolean }) => {
    // --- STATE ---
    const [seqIndex, setSeqIndex] = useState(0);

    // UI State
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedFormat, setSelectedFormat] = useState('Original Format');
    const [altText, setAltText] = useState('');
    const [captionText, setCaptionText] = useState('');
    const [saveState, setSaveState] = useState<'idle' | 'saving' | 'success'>('idle');
    const [showSavings, setShowSavings] = useState(false);
    const [activeField, setActiveField] = useState<'none' | 'alt' | 'cap'>('none');

    // Cursor State
    const [cursorPos, setCursorPos] = useState({ x: '80%', y: '110%' });
    const [cursorActive, setCursorActive] = useState(false);

    // Dynamic Element Refs
    const containerRef = useRef<HTMLDivElement>(null);
    const formatDropdownRef = useRef<HTMLDivElement>(null);
    const formatOptionRef = useRef<HTMLDivElement>(null);
    const altInputRef = useRef<HTMLDivElement>(null);
    const captionInputRef = useRef<HTMLDivElement>(null);
    const saveBtnRef = useRef<HTMLButtonElement>(null);
    const autofillBtnRef = useRef<HTMLButtonElement>(null);

    // Typing simulator
    const typeText = async (setText: (t: string) => void, fullText: string, delay = 50) => {
        setText('');
        for (let i = 0; i <= fullText.length; i++) {
            setText(fullText.substring(0, i));
            await new Promise(r => setTimeout(r, delay));
        }
    };

    // Helper to compute exact center relative to the container by traversing offsetParent
    const getRefCenter = (targetRef: React.RefObject<HTMLElement | null>, offsetX = 0, offsetY = 0): { x: number, y: number } => {
        if (!containerRef.current || !targetRef.current) return { x: 0, y: 0 };

        let el: HTMLElement | null = targetRef.current;
        let x = 0;
        let y = 0;

        while (el && el !== containerRef.current) {
            x += el.offsetLeft;
            y += el.offsetTop;
            el = el.offsetParent as HTMLElement | null;
            if (el && el !== containerRef.current) {
                x += el.clientLeft;
                y += el.clientTop;
            }
        }

        return {
            x: x + (targetRef.current.offsetWidth / 2) + offsetX,
            y: y + (targetRef.current.offsetHeight / 2) + offsetY
        };
    };

    const runSequence = async () => {
        // Reset
        setDropdownOpen(false);
        setSelectedFormat('Original Format');
        setAltText('');
        setCaptionText('');
        setSaveState('idle');
        setShowSavings(false);
        setActiveField('none');
        setCursorActive(false);
        setCursorPos({ x: '80%', y: '110%' });
        await new Promise(r => setTimeout(r, 1000));

        // 1. Move to drop down
        const dropdownCenter = getRefCenter(formatDropdownRef);
        setCursorPos({ x: `${dropdownCenter.x}px`, y: `${dropdownCenter.y}px` });
        await new Promise(r => setTimeout(r, 1000));

        // 2. Click drop down
        setCursorActive(true);
        await new Promise(r => setTimeout(r, 150));
        setCursorActive(false);
        setDropdownOpen(true);
        await new Promise(r => setTimeout(r, 600));

        // 3. Move to WebP option
        const optionCenter = getRefCenter(formatOptionRef, 0, 10); // Slight offset into the menu
        setCursorPos({ x: `${optionCenter.x}px`, y: `${optionCenter.y}px` });
        await new Promise(r => setTimeout(r, 600));

        // 4. Select Formats
        setCursorActive(true);
        await new Promise(r => setTimeout(r, 150));
        setCursorActive(false);
        setSelectedFormat('WebP');
        setDropdownOpen(false);
        await new Promise(r => setTimeout(r, 800));

        // 4.5 Move to Auto-fill button (New Resize Panel Addition)
        const autofillCenter = getRefCenter(autofillBtnRef);
        if (autofillCenter.x !== 0) { // Safety check incase ref is not mounted
            setCursorPos({ x: `${autofillCenter.x}px`, y: `${autofillCenter.y}px` });
            await new Promise(r => setTimeout(r, 800));

            setCursorActive(true);
            await new Promise(r => setTimeout(r, 150));
            setCursorActive(false);
            await new Promise(r => setTimeout(r, 600));
        }

        // 5. Move to Alt Text
        const altCenter = getRefCenter(altInputRef, 40, 0); // Offset right so we click inside the box
        setCursorPos({ x: `${altCenter.x}px`, y: `${altCenter.y}px` });
        await new Promise(r => setTimeout(r, 1000));

        // 6. Click Alt Text
        setCursorActive(true);
        await new Promise(r => setTimeout(r, 150));
        setCursorActive(false);
        setActiveField('alt');

        // Move cursor out of the way for typing
        setCursorPos({ x: '10%', y: '70%' });
        await typeText(setAltText, 'seo optimized hero image', 40);
        await new Promise(r => setTimeout(r, 500));

        // 7. Move to Caption
        const capCenter = getRefCenter(captionInputRef, 40, 0);
        setCursorPos({ x: `${capCenter.x}px`, y: `${capCenter.y}px` });
        await new Promise(r => setTimeout(r, 800));

        // 8. Click Caption
        setCursorActive(true);
        await new Promise(r => setTimeout(r, 150));
        setCursorActive(false);
        setActiveField('cap');

        // move away
        setCursorPos({ x: '10%', y: '80%' });
        await typeText(setCaptionText, 'hero preview version 2', 40);
        await new Promise(r => setTimeout(r, 800));

        // 9. Move to Save
        setActiveField('none');
        const saveCenter = getRefCenter(saveBtnRef);
        setCursorPos({ x: `${saveCenter.x}px`, y: `${saveCenter.y}px` });
        await new Promise(r => setTimeout(r, 1000));

        // 10. Click Save
        setCursorActive(true);
        await new Promise(r => setTimeout(r, 150));
        setCursorActive(false);
        setSaveState('saving');

        // move slightly off button
        setCursorPos({ x: `${saveCenter.x + 30}px`, y: `${saveCenter.y + 20}px` });
        await new Promise(r => setTimeout(r, 1500));

        // 11. Complete
        setSaveState('success');
        setShowSavings(true);
        await new Promise(r => setTimeout(r, 4000)); // Hold on result

        // Loop
        setSeqIndex(i => i + 1);
    };

    useEffect(() => {
        // We delay the first run slightly to ensure refs are firmly attached and CSS layouts complete
        if (!ready) return;

        const t = setTimeout(() => {
            runSequence();
        }, 500);
        return () => clearTimeout(t);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [seqIndex, ready]);

    return (
        <div ref={containerRef} className={`${styles.mockWindowContainer} apple-liquid-glass`} style={{ position: 'relative', overflow: 'hidden', borderRadius: '12px' }}>

            {/* --- Simulated Cursor --- */}
            <motion.div
                animate={{
                    left: cursorPos.x,
                    top: cursorPos.y,
                    scale: cursorActive ? 0.9 : 1
                }}
                transition={{ type: 'spring', damping: 25, stiffness: 200, mass: 0.5 }}
                style={{
                    position: 'absolute',
                    zIndex: 9999,
                    pointerEvents: 'none',
                    marginLeft: '-8px',
                    marginTop: '-4px', // Adjust so the point of the arrow hits exactly where positioned
                }}
            >
                <MousePointer2 size={24} color="#ffffff" fill="rgba(255,255,255,0.2)" />
                {cursorActive && (
                    <motion.div
                        initial={{ scale: 0, opacity: 0.8 }}
                        animate={{ scale: 2, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        style={{
                            position: 'absolute',
                            top: '4px', left: '10px',
                            width: '16px', height: '16px',
                            borderRadius: '50%',
                            background: 'rgba(255,0,51,0.5)',
                            zIndex: -1
                        }}
                    />
                )}
            </motion.div>

            {/* --- Payload Top Nav --- */}
            <div className={styles.payloadHeaderTop}>
                <div className={styles.payloadHeaderTopLeft}>
                    <Menu size={16} color="var(--text-muted)" style={{ flexShrink: 0 }} />
                    <Hexagon size={18} color="var(--text-primary)" style={{ flexShrink: 0 }} />
                    <span className="mono" style={{ color: 'var(--text-muted)', fontSize: '12px', whiteSpace: 'normal', wordBreak: 'break-all' }}>/ Media / <span style={{ color: 'var(--text-primary)' }}>{selectedFormat === 'WebP' ? 'hero-banner.webp' : 'hero-banner.jpeg'}</span></span>
                </div>
                <UserCircle size={20} color="var(--text-muted)" />
            </div>

            {/* --- Payload Title Row --- */}
            <div className={styles.payloadHeaderTitle}>
                <h2 className={styles.payloadTitleText}>{selectedFormat === 'WebP' ? 'hero-banner.webp' : 'hero-banner.jpeg'}</h2>
                <div style={{ display: 'flex', gap: '8px' }}>
                    <button className={styles.payloadBtn}>Edit</button>
                    <button className={styles.payloadBtn}>API</button>
                </div>
            </div>

            {/* --- Payload Meta Row --- */}
            <div className={styles.payloadHeaderMeta}>
                <div className="mono" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    <span>Last Modified: <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Just now</span></span>
                    <span>Created: <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>March 7th 2026</span></span>
                </div>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>

                    <AnimatePresence>
                        {saveState === 'success' && (
                            <motion.span
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0 }}
                                style={{ color: '#00e676', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '4px', marginRight: '8px' }}
                            >
                                <Check size={14} /> Saved successfully
                            </motion.span>
                        )}
                    </AnimatePresence>

                    <button ref={saveBtnRef} className={styles.payloadBtn} style={{
                        display: 'flex', alignItems: 'center', gap: '6px',
                        background: saveState === 'saving' || saveState === 'success' ? 'var(--text-primary)' : 'rgba(255,255,255,0.1)',
                        color: saveState === 'saving' || saveState === 'success' ? '#000' : 'var(--text-primary)',
                        borderColor: saveState === 'saving' || saveState === 'success' ? 'var(--text-primary)' : 'rgba(255,255,255,0.1)',
                    }}>
                        {saveState === 'saving' ? <Loader2 size={14} className="animate-spin" /> : 'Save'}
                    </button>
                    <button className={styles.payloadBtn}><MoreVertical size={14} /></button>
                </div>
            </div>

            {/* --- Payload Body Split --- */}
            <div className={styles.payloadBody}>
                <div className={styles.payloadMain}>
                    {/* Image Card */}
                    <div className={styles.payloadImageCard}>
                        <div className={styles.payloadImagePreview}>
                            <div style={{ background: '#e0e0e0', width: '80px', height: '60px' }} />
                        </div>
                        <div className={styles.payloadImageInfo}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 600, flexWrap: 'wrap', wordBreak: 'break-all' }}>
                                <span>{selectedFormat === 'WebP' ? 'hero-banner.webp' : 'hero-banner.jpeg'}</span> <CopyButton text={selectedFormat === 'WebP' ? 'hero-banner.webp' : 'hero-banner.jpeg'} size={12} style={{ flexShrink: 0, color: 'var(--text-muted)' }} />
                            </div>
                            <div className="mono" style={{ fontSize: '12px', color: 'var(--text-muted)', wordBreak: 'break-all' }}>
                                {saveState === 'success' && selectedFormat === 'WebP' ? '465KB - 6000x4410 - image/webp' : '1.3MB - 6000x4410 - image/jpeg'}
                            </div>
                            <button className={styles.payloadBtn} style={{ width: 'fit-content', marginTop: '4px' }}>Edit Image</button>
                        </div>
                    </div>

                    {/* Form Fields */}
                    <div className={styles.payloadFieldGroup}>
                        <span className={styles.payloadLabel}>Alt text <span style={{ color: 'var(--accent-primary)' }}>*</span></span>
                        <div ref={altInputRef} className={styles.payloadInput} style={{
                            borderColor: activeField === 'alt' ? 'var(--accent-primary)' : 'rgba(255,255,255,0.1)',
                            minHeight: '44px', display: 'flex', alignItems: 'center', flexWrap: 'wrap', wordBreak: 'break-all'
                        }}>
                            <span>{altText}</span>
                            {activeField === 'alt' && <motion.span animate={{ opacity: [0, 1] }} transition={{ repeat: Infinity, duration: 0.8 }}>|</motion.span>}
                        </div>
                    </div>

                    <div className={styles.payloadFieldGroup}>
                        <span className={styles.payloadLabel}>Image description text</span>
                        <div ref={captionInputRef} className={styles.payloadInput} style={{
                            borderColor: activeField === 'cap' ? 'var(--accent-primary)' : 'rgba(255,255,255,0.1)',
                            minHeight: '44px', display: 'flex', alignItems: 'center', flexWrap: 'wrap', wordBreak: 'break-all'
                        }}>
                            <span>{captionText}</span>
                            {activeField === 'cap' && <motion.span animate={{ opacity: [0, 1] }} transition={{ repeat: Infinity, duration: 0.8 }}>|</motion.span>}
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className={styles.payloadSidebar} style={{ position: 'relative' }}>
                    <span className={styles.payloadLabel}>Convert to Format</span>

                    <div style={{ position: 'relative' }}>
                        {/* The Dropdown Input */}
                        <div ref={formatDropdownRef} className={styles.payloadSelect} style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                            <span>{selectedFormat}</span>
                            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                                {selectedFormat !== 'Original Format' && <X size={14} color="var(--text-muted)" />}
                                <ChevronDown size={14} color="var(--text-muted)" />
                            </div>
                        </div>

                        {/* The Dropdown Menu */}
                        <AnimatePresence>
                            {dropdownOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: -4 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.15 }}
                                    style={{
                                        position: 'absolute', top: 'calc(100% + 4px)', left: 0, right: 0,
                                        background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.1)',
                                        borderRadius: '4px', zIndex: 100, padding: '4px',
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                                    }}
                                >
                                    <div ref={formatOptionRef} style={{ padding: '8px', fontSize: '14px', borderRadius: '4px', cursor: 'pointer', background: 'rgba(255,255,255,0.05)' }}>WebP</div>
                                    <div style={{ padding: '8px', fontSize: '14px', borderRadius: '4px', cursor: 'pointer', color: 'var(--text-dim)' }}>AVIF</div>
                                    <div style={{ padding: '8px', fontSize: '14px', borderRadius: '4px', cursor: 'pointer', color: 'var(--text-dim)' }}>JPEG</div>
                                    <div style={{ padding: '8px', fontSize: '14px', borderRadius: '4px', cursor: 'pointer', color: 'var(--text-dim)' }}>PNG</div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Resize panel */}
                    <div style={{ marginTop: '32px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                            <span className={styles.payloadLabel} style={{ marginBottom: 0 }}>Resize Image</span>
                            <span style={{ fontSize: '11px', background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '4px', color: 'var(--text-dim)' }}>(active)</span>
                        </div>

                        <div style={{
                            background: 'rgba(255,193,7,0.1)',
                            border: '1px solid rgba(255,193,7,0.3)',
                            borderRadius: '4px',
                            padding: '12px',
                            marginBottom: '16px'
                        }}>
                            <p style={{ color: '#ffc107', fontSize: '12px', margin: '0 0 8px 0', lineHeight: 1.4 }}>
                                Image is 6000x4410px — consider resizing for better web performance.
                            </p>
                            <button className={styles.payloadBtn} style={{ fontSize: '11px', padding: '4px 8px', background: 'rgba(255,193,7,0.2)', color: '#ffb300', borderColor: 'rgba(255,193,7,0.4)', marginTop: '4px' }}>
                                Auto-fill max width (2500px)
                            </button>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                            <div>
                                <span className={styles.payloadLabel} style={{ fontSize: '11px' }}>Max Width (px)</span>
                                <div className={styles.payloadInput} style={{ minHeight: '36px', display: 'flex', alignItems: 'center' }}>2500</div>
                            </div>
                            <div>
                                <span className={styles.payloadLabel} style={{ fontSize: '11px' }}>Max Height (px)</span>
                                <div className={styles.payloadInput} style={{ minHeight: '36px', display: 'flex', alignItems: 'center', color: 'var(--text-dim)' }}>auto</div>
                            </div>
                        </div>
                        <p style={{ fontSize: '11px', color: 'var(--text-dim)', margin: '8px 0 0 0' }}>Aspect ratio preserved, no upscaling.</p>
                    </div>

                    {/* Success / Savings Info */}
                    <AnimatePresence>
                        {showSavings && selectedFormat === 'WebP' && (
                            <motion.div
                                initial={{ opacity: 0, y: 4 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                className={styles.payloadSavedText}
                            >
                                Saved 64% (1.3 MB &rarr; 465 KB)
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};
