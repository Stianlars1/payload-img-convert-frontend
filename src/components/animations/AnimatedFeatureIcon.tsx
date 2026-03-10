"use client";
import React from "react";
import { motion } from "framer-motion";
import {
    Repeat, Pointer, Globe, Sliders, Image as ImageIcon,
    Maximize, Shrink, ZapOff, Fingerprint,
    SaveAll, AlertTriangle, ArrowRightCircle, Expand,
    Activity, EyeOff, ShieldAlert, ShieldX, Database,
    Layers, CheckCircle2, Package
} from "lucide-react";

interface AnimatedFeatureIconProps {
    featureTitle: string;
}

export const AnimatedFeatureIcon = ({ featureTitle }: AnimatedFeatureIconProps) => {
    const t = featureTitle.toLowerCase();

    // "Any format, automatically." -> Automatic conversion
    if (t.includes("automatic conversion")) {
        return (
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
                <Repeat size={24} color="var(--accent-primary)" />
            </motion.div>
        );
    }

    // Per-image format selection
    if (t.includes("per-image format")) {
        return (
            <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <Pointer size={24} color="var(--accent-cyan, #00f2ff)" />
            </motion.div>
        );
    }

    // Global default format
    if (t.includes("global default")) {
        return (
            <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
                <Globe size={24} color="var(--text-primary)" />
            </motion.div>
        );
    }

    // Configurable quality
    if (t.includes("configurable quality") || t.includes("sharp options")) {
        return (
            <motion.div
                animate={{ x: [-2, 2, -2] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
                <Sliders size={24} color="var(--accent-secondary)" />
            </motion.div>
        );
    }

    // Image resizing
    if (t.includes("image resizing")) {
        return (
            <motion.div
                animate={{ scale: [1, 0.8, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
                <Maximize size={24} color="var(--text-primary)" />
            </motion.div>
        );
    }

    // Aspect ratio preservation
    if (t.includes("aspect ratio")) {
        return (
            <motion.div
                animate={{ width: ["100%", "80%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                style={{ display: "flex", justifyContent: "center", overflow: "hidden" }}
            >
                <ImageIcon size={24} color="var(--accent-cyan, #00f2ff)" />
            </motion.div>
        );
    }

    // No upscaling
    if (t.includes("no upscaling")) {
        return (
            <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [1, 0.6, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
                <Shrink size={24} color="var(--text-muted)" />
            </motion.div>
        );
    }

    // Format-aware re-encoding
    if (t.includes("format-aware")) {
        return (
            <motion.div
                animate={{ rotateY: [0, 180, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
                <Layers size={24} color="var(--accent-primary)" />
            </motion.div>
        );
    }

    // Re-conversion without re-upload
    if (t.includes("re-conversion")) {
        return (
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
                <SaveAll size={24} color="var(--accent-cyan, #00f2ff)" />
            </motion.div>
        );
    }

    // File size savings display
    if (t.includes("file size savings")) {
        return (
            <motion.div
                animate={{ scale: [1, 1.05, 1], color: ["#fff", "#00ff7f", "#fff"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <Activity size={24} />
            </motion.div>
        );
    }

    // Oversize image detection
    if (t.includes("oversize image")) {
        return (
            <motion.div
                animate={{ scale: [1, 1.2, 1], borderColor: ["rgba(0,0,0,0)", "rgba(255,0,0,0.5)", "rgba(0,0,0,0)"] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                style={{ borderRadius: "50%", border: "1px solid transparent" }}
            >
                <Maximize size={24} color="var(--accent-primary)" />
            </motion.div>
        );
    }

    // Auto-fill resize suggestion
    if (t.includes("auto-fill")) {
        return (
            <motion.div
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
            >
                <Pointer size={24} color="var(--accent-secondary)" />
            </motion.div>
        );
    }

    // Collapsible resize panel
    if (t.includes("collapsible resize")) {
        return (
            <motion.div
                animate={{ scaleY: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <Expand size={24} color="var(--text-dim)" />
            </motion.div>
        );
    }

    // Quality degradation warnings
    if (t.includes("degradation")) {
        return (
            <motion.div
                animate={{ opacity: [1, 0.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            >
                <AlertTriangle size={24} color="#ffaa00" />
            </motion.div>
        );
    }

    // SVG and GIF skip
    if (t.includes("svg and gif")) {
        return (
            <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
            >
                <ArrowRightCircle size={24} color="var(--accent-cyan, #00f2ff)" />
            </motion.div>
        );
    }

    // Max file size guard
    if (t.includes("max file size")) {
        return (
            <motion.div
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <ShieldAlert size={24} color="var(--accent-primary)" />
            </motion.div>
        );
    }

    // Kill switch
    if (t.includes("kill switch")) {
        return (
            <motion.div
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
            >
                <ZapOff size={24} color="var(--text-dim)" />
            </motion.div>
        );
    }

    // Double-conversion warning
    if (t.includes("double-conversion")) {
        return (
            <motion.div
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
                <ShieldX size={24} color="#ffaa00" />
            </motion.div>
        );
    }

    // Graceful failure
    if (t.includes("graceful failure")) {
        return (
            <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeIn" }}
            >
                <Fingerprint size={24} color="var(--text-muted)" />
            </motion.div>
        );
    }

    // Schema consistency
    if (t.includes("schema consistency")) {
        return (
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
                <Database size={24} color="var(--text-primary)" />
            </motion.div>
        );
    }

    // Hook prepend order
    if (t.includes("prepend order")) {
        return (
            <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
                <Layers size={24} color="var(--accent-secondary)" />
            </motion.div>
        );
    }

    // No Sharp dependency
    if (t.includes("sharp dependency") || t.includes("no sharp")) {
        return (
            <motion.div
                animate={{ scale: [1, 0.9, 1], opacity: [1, 0.8, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <EyeOff size={24} color="var(--text-dim)" />
            </motion.div>
        );
    }

    // Original file size tracking
    if (t.includes("size tracking")) {
        return (
            <motion.div
                animate={{ x: [0, 2, -2, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
                <Database size={24} color="var(--accent-cyan, #00f2ff)" />
            </motion.div>
        );
    }

    // Three package exports
    if (t.includes("three package exports")) {
        return (
            <motion.div
                animate={{ rotateZ: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <Package size={24} color="var(--text-primary)" />
            </motion.div>
        );
    }

    // Default fallback
    return (
        <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
            <CheckCircle2 size={24} color="var(--text-muted)" />
        </motion.div>
    );
};
