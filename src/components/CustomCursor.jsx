"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Track mouse movement
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  // Prevent SSR hydration mismatch
  if (!isClient) return null;

  return (
    <div className="hidden lg:block">
      {/* Outer Glow Trailing Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full bg-[#2e936f]/20 pointer-events-none z-[9998] blur-[2px]"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      />
      {/* Inner Sharp Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#2e936f] pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{ type: "tween", ease: "linear", duration: 0 }}
      />
    </div>
  );
}
