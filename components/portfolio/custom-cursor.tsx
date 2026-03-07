"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const mousePos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const currentAngle = useRef(0);
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    let hasMoved = false;

    const onMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      mousePos.current = { x: e.clientX, y: e.clientY };

      if (!hasMoved) {
        currentPos.current = { x: e.clientX, y: e.clientY };
        hasMoved = true;
      }
    };

    const render = () => {
      const speed = 0.12;
      currentPos.current.x += (mousePos.current.x - currentPos.current.x) * speed;
      currentPos.current.y += (mousePos.current.y - currentPos.current.y) * speed;

      const dx = mousePos.current.x - currentPos.current.x;
      const dy = mousePos.current.y - currentPos.current.y;

      if (Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5) {
        currentAngle.current = Math.atan2(dy, dx) * (180 / Math.PI);
      }

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${currentPos.current.x - 64}px, ${currentPos.current.y - 32}px) rotate(${currentAngle.current}deg)`;
      }

      requestRef.current = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMouseMove);
    requestRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-[100] w-16 h-16"
      style={{
        willChange: "transform",
        transformOrigin: "100% 50%",
      }}
    >
      <img
        src="/nautilus.png"
        alt="Nautilus Cursor"
        className="w-full h-full object-contain drop-shadow-md opacity-90"
      />
    </div>
  );
}