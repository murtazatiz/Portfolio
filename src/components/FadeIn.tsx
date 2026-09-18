import { useMemo, type ElementType, type ReactNode } from 'react';
import { motion } from 'framer-motion';

type FadeInProps = {
  children: ReactNode;
  /** The element type to render (e.g. 'div', 'h1', 'p', 'nav'). Defaults to 'div'. */
  as?: ElementType;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  style?: React.CSSProperties;
};

const EASING = [0.25, 0.1, 0.25, 1] as const;

/**
 * Scroll-triggered fade/slide-in wrapper. Animates once when it enters the
 * viewport. The rendered element type is dynamic via motion.create().
 */
export default function FadeIn({
  children,
  as = 'div',
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className,
  style,
}: FadeInProps) {
  const MotionTag = useMemo(() => motion.create(as), [as]);

  return (
    <MotionTag
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ duration, delay, ease: EASING }}
    >
      {children}
    </MotionTag>
  );
}
