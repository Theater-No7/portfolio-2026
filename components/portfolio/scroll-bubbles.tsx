"use client";

import { useEffect, useState } from "react";

interface Bubble {
    id: number;
    left: number;
    size: number;
}

export default function ScrollBubbles() {
    const [bubbles, setBubbles] = useState<Bubble[]>([]);

    useEffect(() => {
        let scrollAccumulator = 0;
        let lastScrollY = window.scrollY;
        let bubbleIdCounter = 0;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const delta = Math.abs(currentScrollY - lastScrollY);
            lastScrollY = currentScrollY;
            scrollAccumulator += delta;

            if (scrollAccumulator > 70) {
                scrollAccumulator = 0;
                const newBubble = {
                    id: bubbleIdCounter++,
                    left: Math.random() * 100,
                    size: Math.random() * 6 + 4,
                };

                setBubbles((prev) => [...prev, newBubble]);

                setTimeout(() => {
                    setBubbles((prev) => prev.filter((b) => b.id !== newBubble.id));
                }, 2000);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-[10] overflow-hidden">
            {bubbles.map((b) => (
                <div
                    key={b.id}
                    className="absolute bottom-[-30px] rounded-full border border-white/30 bg-white/10 backdrop-blur-md"
                    style={{
                        left: `${b.left}%`,
                        width: `${b.size}px`,
                        height: `${b.size}px`,
                        animation: "scrollBubbleFloat 2s ease-out forwards",
                    }}
                />
            ))}
        </div>
    );
}