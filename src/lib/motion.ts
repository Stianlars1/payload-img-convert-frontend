"use client"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP)
}

export { gsap, ScrollTrigger, useGSAP }

export function createReveal(scope: HTMLElement, selector = "[data-reveal]") {
    const items = gsap.utils.toArray<HTMLElement>(selector, scope)

    if (!items.length) {
        return
    }

    gsap.fromTo(
        items,
        {
            y: 36,
            opacity: 0,
            filter: "blur(18px)",
        },
        {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1.05,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
                trigger: scope,
                start: "top 78%",
                once: true,
            },
        }
    )
}
