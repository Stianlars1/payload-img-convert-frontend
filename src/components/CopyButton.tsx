"use client";
import { useState } from "react";
import { Copy, CheckCircle2 } from "lucide-react";

interface CopyButtonProps {
    text: string;
    size?: number;
    className?: string;
    style?: React.CSSProperties;
}

export const CopyButton = ({ text, size = 16, className, style }: CopyButtonProps) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        if (typeof navigator !== "undefined" && navigator.clipboard) {
            navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <button
            onClick={handleCopy}
            className={className}
            style={{
                background: className ? undefined : 'transparent',
                border: className ? undefined : 'none',
                cursor: 'pointer',
                padding: className ? undefined : 0,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'inherit',
                ...style
            }}
            aria-label="Copy to clipboard"
        >
            {copied ? <CheckCircle2 size={size} color="#00ff7f" /> : <Copy size={size} color="inherit" />}
        </button>
    );
};
