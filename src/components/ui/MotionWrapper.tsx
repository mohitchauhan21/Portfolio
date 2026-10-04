"use client";

import { useEffect, useState, useRef, type ReactNode } from "react";
import { LazyMotion, domAnimation, m } from "motion/react";
import { MOTION } from "@/lib/motion";

interface HeroMotionProps {
  leftContent: ReactNode;
  rightContent: ReactNode;
}

export function HeroMotion({ leftContent, rightContent }: HeroMotionProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Only animate after client has mounted (SSR safe, zero layout shift)
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!prefersReducedMotion) {
      const id = setTimeout(() => setMounted(true), 0);
      return () => clearTimeout(id);
    }
  }, []);

  if (!mounted) {
    return (
      <div className="flex flex-col items-center gap-6 lg:grid lg:grid-cols-12 lg:items-center lg:gap-12">
        {/* Avatar first in DOM → shows on top on mobile */}
        <div className="flex justify-center lg:col-span-4 lg:order-2">{rightContent}</div>
        {/* Text second in DOM → shows below avatar on mobile, left on desktop */}
        <div className="w-full lg:col-span-8 lg:order-1">
          <div className="flex flex-col">{leftContent}</div>
        </div>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: MOTION.hero.stagger,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: MOTION.hero.distance },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: MOTION.hero.duration,
        ease: MOTION.ease,
      },
    },
  };

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className="flex flex-col items-center gap-6 lg:grid lg:grid-cols-12 lg:items-center lg:gap-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Avatar first in DOM → shows on top on mobile */}
        <m.div className="flex justify-center lg:col-span-4 lg:order-2" variants={itemVariants}>
          {rightContent}
        </m.div>
        {/* Text second in DOM → shows below avatar on mobile, left on desktop */}
        <m.div className="w-full lg:col-span-8 lg:order-1" variants={itemVariants}>
          <div className="flex flex-col">{leftContent}</div>
        </m.div>
      </m.div>
    </LazyMotion>
  );
}

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function ScrollReveal({ children, className, delay = 0 }: ScrollRevealProps) {
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!prefersReducedMotion) {
      const id = setTimeout(() => setMounted(true), 0);
      return () => clearTimeout(id);
    }
  }, []);

  if (!mounted) {
    return <div className={className}>{children}</div>;
  }

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        ref={ref}
        className={className}
        initial={{ opacity: 0, y: MOTION.reveal.distance }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: MOTION.reveal.viewportAmount }}
        transition={{
          duration: MOTION.reveal.duration,
          ease: MOTION.ease,
          delay,
        }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}
