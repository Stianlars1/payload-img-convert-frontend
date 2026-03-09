"use client";

import { useRef, useState } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface MonolithElementProps extends HTMLMotionProps<"div"> {
    children?: React.ReactNode;
    asCard?: boolean;
}

export const MonolithElement = ({
    children,
    asCard = false,
    className = "",
    ...props
}: MonolithElementProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        setPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    const cssClass = asCard ? "monolith-card monolith-element" : "monolith-element";

    return (
        <motion.div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className={`${cssClass} ${className}`}
            style={{
                ...props.style,
                // @ts-ignore
                "--mouse-x": `${position.x}px`,
                "--mouse-y": `${position.y}px`,
            }}
            {...props}
        >
            <div className="flashlight-layer" />
            <div className="relative z-10 w-full h-full">{children}</div>
        </motion.div>
    );
};
