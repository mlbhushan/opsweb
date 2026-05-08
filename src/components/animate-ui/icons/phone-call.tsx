'use client';

import * as React from 'react';
import { motion, useAnimation } from 'framer-motion';

interface PhoneCallIconProps {
  size?: number;
  className?: string;
  /** Pass true to trigger the animation imperatively (e.g. from a parent hover) */
  animate?: boolean;
  /** Animate when the wrapper element is hovered */
  animateOnHover?: boolean;
}

export function PhoneCallIcon({
  size = 20,
  className,
  animate,
  animateOnHover,
}: PhoneCallIconProps) {
  const controls = useAnimation();

  // Imperative animate prop
  React.useEffect(() => {
    if (animate) {
      void controls.start('animate');
    } else {
      void controls.start('initial');
    }
  }, [animate, controls]);

  const wave1Variants = {
    initial: { opacity: 1, scale: 1 },
    animate: {
      opacity: [1, 0, 1],
      scale: [1, 0, 1],
      transition: { duration: 0.4, ease: 'easeInOut' as const, repeat: Infinity, repeatDelay: 1.2 },
    },
  };

  const wave2Variants = {
    initial: { opacity: 1, scale: 1 },
    animate: {
      opacity: [1, 0, 1],
      scale: [1, 0, 1],
      transition: { duration: 0.4, ease: 'easeInOut' as const, delay: 0.2, repeat: Infinity, repeatDelay: 1.2 },
    },
  };

  const svg = (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Inner wave */}
      <motion.path
        d="M13 6a5 5 0 0 1 5 5"
        variants={wave1Variants}
        initial="initial"
        animate={controls}
      />
      {/* Outer wave */}
      <motion.path
        d="M13 2a9 9 0 0 1 9 9"
        variants={wave2Variants}
        initial="initial"
        animate={controls}
      />
      {/* Phone body */}
      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
    </motion.svg>
  );

  if (animateOnHover) {
    return (
      <motion.span
        style={{ display: 'contents' }}
        onHoverStart={() => void controls.start('animate')}
        onHoverEnd={() => void controls.start('initial')}
      >
        {svg}
      </motion.span>
    );
  }

  return svg;
}
