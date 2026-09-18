import { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion';

type AnimatedTextProps = {
  text: string;
  className?: string;
  style?: React.CSSProperties;
};

type CharProps = {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
};

/** A single character: an invisible placeholder keeps layout, an absolutely
 *  positioned span fades from 0.2 → 1 opacity as scroll crosses its range. */
function Char({ char, progress, range }: CharProps) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  // Preserve width for spaces, which would otherwise collapse in inline-block.
  const display = char === ' ' ? ' ' : char;

  return (
    <span className="relative inline-block">
      <span className="opacity-0" aria-hidden="true">
        {display}
      </span>
      <motion.span
        className="absolute left-0 top-0"
        style={{ opacity }}
        aria-hidden="true"
      >
        {display}
      </motion.span>
    </span>
  );
}

/**
 * Reveals text one character at a time, driven by the paragraph's own scroll
 * progress through the viewport.
 */
export default function AnimatedText({
  text,
  className,
  style,
}: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const chars = text.split('');
  const total = chars.length;

  return (
    <p ref={ref} className={className} style={style} aria-label={text}>
      {chars.map((char, i) => {
        const start = i / total;
        const end = (i + 1) / total;
        return (
          <Char
            key={i}
            char={char}
            progress={scrollYProgress}
            range={[start, end]}
          />
        );
      })}
    </p>
  );
}
