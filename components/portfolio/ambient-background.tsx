"use client";

import { useEffect, useState } from "react";

export default function AmbientBackground() {
    const [bubbles, setBubbles] = useState<{ id: number; left: number; size: number; delay: number; duration: number }[]>([]);
    const [snow, setSnow] = useState<{ id: number; left: number; top: number; size: number; duration: number; delay: number; opacity: number }[]>([]);

    useEffect(() => {
        const newBubbles = Array.from({ length: 20 }).map((_, i) => ({
            id: i,
            left: Math.random() * 100,
            size: Math.random() * 5 + 3,
            delay: Math.random() * 5,
            duration: Math.random() * 15 + 15,
        }));
        setBubbles(newBubbles);

        const newSnow = Array.from({ length: 35 }).map((_, i) => ({
            id: i,
            left: Math.random() * 100,
            top: Math.random() * 100,
            size: Math.random() * 3 + 1.5,
            duration: Math.random() * 25 + 20,
            delay: Math.random() * -20,
            opacity: Math.random() * 0.4 + 0.2,
        }));
        setSnow(newSnow);
    }, []);

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-gradient-to-b from-[#020813] via-[#010409] to-[#000000]">

            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#148E96] opacity-[0.05] blur-[120px] rounded-full mix-blend-screen" />
            <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-[#148E96] opacity-[0.04] blur-[150px] rounded-full mix-blend-screen" />
            <div className="absolute top-[40%] left-[50%] w-[30%] h-[30%] bg-[#0a4a52] opacity-[0.06] blur-[100px] rounded-full mix-blend-screen" />

            {snow.map((s) => (
                <div
                    key={`snow-${s.id}`}
                    className="absolute rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.6)] animate-float"
                    style={{
                        left: `${s.left}%`,
                        top: `${s.top}%`,
                        width: `${s.size}px`,
                        height: `${s.size}px`,
                        opacity: s.opacity,
                        animationDelay: `${s.delay}s`,
                        animationDuration: `${s.duration}s`,
                    }}
                />
            ))}

            {bubbles.map((b) => (
                <div
                    key={`bubble-${b.id}`}
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

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,#000000_130%)] opacity-90" />
        </div>
    );
}