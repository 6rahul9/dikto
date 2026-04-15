import React, { useRef, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

export function MouseTilt({ children, className = '', maxRotation = 10 }: { children: React.ReactNode, className?: string, maxRotation?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  
  const [hovered, setHovered] = useState(false);
  const x = useSpring(0.5, { stiffness: 300, damping: 30 });
  const y = useSpring(0.5, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const rotateX = useTransform(y, [0, 1], [maxRotation, -maxRotation]);
  const rotateY = useTransform(x, [0, 1], [-maxRotation, maxRotation]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        x.set(0.5);
        y.set(0.5);
      }}
      style={{
        rotateX: hovered ? rotateX : 0,
        rotateY: hovered ? rotateY : 0,
        transformPerspective: 1000,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
