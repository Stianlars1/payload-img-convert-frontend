"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const FORMATS = ["RAW", "JPG", "PNG", "WEBP", "AVIF"];

export const FormatMorphAnimation = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % FORMATS.length);
        }, 1500);
        return () => clearInterval(timer);
    }, []);

    return (
        <div style={{ position: "relative", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={FORMATS[index]}
                    initial={{ y: 20, opacity: 0, scale: 0.8 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: -20, opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
                    style={{ fontSize: "10px", fontWeight: 800, fontFamily: "var(--font-geist-mono)", color: "var(--text-primary)" }}
                >
                    {FORMATS[index]}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};
