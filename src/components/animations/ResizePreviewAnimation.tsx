"use client";
import { motion } from "framer-motion";

export const ResizePreviewAnimation = () => {
    return (
        <div style={{ position: "relative", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {/* bounding box */}
            <div style={{ width: "24px", height: "24px", border: "1px dashed rgba(255,255,255,0.3)", borderRadius: "4px", position: "absolute" }} />
            {/* inner dynamic box */}
            <motion.div
                animate={{ width: ["12px", "24px", "12px"], height: ["8px", "24px", "8px"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{ background: "var(--text-primary)", borderRadius: "2px", opacity: 0.8 }}
            />
        </div>
    );
};
