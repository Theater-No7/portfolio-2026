"use client";

import { useEffect, useState } from "react";

export default function AmbientBackground() {
    const [bubbles, setBubbles] = useState<{ id: number; left: number; size: number; delay: number; duration: number }[]>([]);

    useEffect(() => {
        const newBubbles = Array.from({ length: 25 }).map((_, i) => ({
            id: i,
            left: Math.random() * 100,
            size: Math.random() * 4 + 2,
            delay: Math.random() * 5,
            duration: Math.random() * 15 + 15,
        }));
        setBubbles(newBubbles);
    }, []);

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-gradient-to-b from-[#020813] via-[#010409] to-[#000000]">
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#148E96] opacity-[0.06] blur-[120px] rounded-full mix-blend-screen" />
            <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-[#148E96] opacity-[0.05] blur-[150px] rounded-full mix-blend-screen" />
            <div className="absolute top-[40%] left-[50%] w-[30%] h-[30%] bg-[#0a4a52] opacity-[0.08] blur-[100px] rounded-full mix-blend-screen" />

            {bubbles.map((b) => (
                <div
                    key={b.id}
                    className="absolute bottom-0 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm animate-float"
                    style={{
                        left: `${b.left}%`,
                        width: `${b.size}px`,
                        height: `${b.size}px`,
                        animationDelay: `${b.delay}s`,
                        animationDuration: `${b.duration}s`,
                    }}
                />
            ))}
        </div>
    );
}