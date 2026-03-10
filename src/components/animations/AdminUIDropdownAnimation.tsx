"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Check } from "lucide-react";

export const AdminUIDropdownAnimation = () => {
    const [step, setStep] = useState(0);

    /*
      0: dropdown closed
      1: hover / select state
      2: clicking, opening dropdown
      3: selecting compressed value, dropdown closes
    */
    useEffect(() => {
        const timer = setInterval(() => {
            setStep((s) => (s + 1) % 4);
        }, 1200);
        return () => clearInterval(timer);
    }, []);

    return (
        <div style={{ position: "relative", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", overflow: "visible" }}>
            <motion.div
                animate={{
                    y: step === 0 ? 0 : step === 1 ? 0 : step === 2 ? -4 : 0,
                    scale: step === 1 ? 0.95 : 1,
                    borderColor: step > 0 ? 'var(--accent-primary)' : 'rgba(255,255,255,0.2)'
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{
                    width: "24px", height: "12px", borderRadius: "3px", border: "1px solid rgba(255,255,255,0.2)",
                    background: "rgba(0,0,0,0.4)", display: "flex", alignItems: "center", justifyContent: "center",
                    position: "relative", zIndex: 10
                }}
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={step === 3 ? "webp" : "orig"}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                        {step === 3 ? (
                            <Check size={8} color="var(--accent-primary)" strokeWidth={3} />
                        ) : (
                            <div style={{ width: "12px", height: "2px", background: "rgba(255,255,255,0.4)", borderRadius: "1px" }} />
                        )}
                    </motion.div>
                </AnimatePresence>
            </motion.div>

            {/* The dropdown popover */}
            <AnimatePresence>
                {step === 2 && (
                    <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        style={{
                            position: "absolute",
                            top: "22px",
                            width: "20px",
                            height: "14px",
                            background: "#000",
                            border: "1px solid rgba(255,255,255,0.1)",
                            borderRadius: "2px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "2px",
                            padding: "2px",
                            zIndex: 8
                        }}
                    >
                        <div style={{ width: "100%", height: "2px", background: "var(--accent-primary)", borderRadius: "1px", opacity: 0.8 }} />
                        <div style={{ width: "100%", height: "2px", background: "rgba(255,255,255,0.2)", borderRadius: "1px" }} />
                        <div style={{ width: "100%", height: "2px", background: "rgba(255,255,255,0.2)", borderRadius: "1px" }} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
