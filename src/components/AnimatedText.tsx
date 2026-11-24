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

  return (
    <span className="relative inline-block">
      <span className="opacity-0" aria-hidden="true">
        {char}
      </span>
      <motion.span
        className="absolute left-0 top-0"
        style={{ opacity }}
        aria-hidden="true"
      >
        {char}
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

  const words = text.split(' ');
  const total = text.length;
  let offset = 0;

  return (
    <p ref={ref} className={className} style={style} aria-label={text}>
      {words.map((word, w) => {
        const wordStart = offset;
        offset += word.length + 1;
        return (
          <span key={w}>
            {/* Whole words stay together so lines only break between them. */}
            <span className="inline-block whitespace-nowrap">
              {word.split('').map((char, c) => {
                const i = wordStart + c;
                return (
                  <Char
                    key={c}
                    char={char}
                    progress={scrollYProgress}
                    range={[i / total, (i + 1) / total]}
                  />
                );
              })}
            </span>
            {w < words.length - 1 && ' '}
          </span>
        );
      })}
    </p>
  );
}
