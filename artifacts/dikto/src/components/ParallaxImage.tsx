import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function ParallaxImage({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  return (
    <div ref={ref} className={`overflow-hidden relative ${className}`}>
      <motion.img
        style={{ y, scale: 1.2 }}
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover origin-center"
      />
    </div>
  );
}
