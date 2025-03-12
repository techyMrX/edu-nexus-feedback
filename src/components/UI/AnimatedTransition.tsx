
import React, { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AnimatedTransitionProps {
  children: ReactNode;
  className?: string;
  type?: 'fade' | 'scale' | 'slide' | 'blur';
  delay?: number;
}

const animations = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  },
  scale: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 }
  },
  slide: {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
  },
  blur: {
    initial: { opacity: 0, filter: "blur(8px)" },
    animate: { opacity: 1, filter: "blur(0px)" },
    exit: { opacity: 0, filter: "blur(8px)" }
  }
};

const AnimatedTransition = ({ 
  children, 
  className = "", 
  type = "fade",
  delay = 0
}: AnimatedTransitionProps) => {
  const animation = animations[type];
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className={className}
        initial={animation.initial}
        animate={animation.animate}
        exit={animation.exit}
        transition={{ 
          duration: 0.4, 
          ease: [0.16, 1, 0.3, 1],
          delay: delay / 10
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedTransition;
