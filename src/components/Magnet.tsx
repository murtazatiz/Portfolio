import {
  useRef,
  useState,
  useCallback,
  type ReactNode,
  type CSSProperties,
} from 'react';

type MagnetProps = {
  children: ReactNode;
  /** Distance (px) outside the element edges where the magnet activates. */
  padding?: number;
  /** Higher = weaker pull (the offset is divided by this). */
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
  wrapperClassName?: string;
  style?: CSSProperties;
};

/**
 * Magnetic hover effect: the wrapped content follows the cursor while it is
 * within `padding` pixels of the element, then eases back to center on leave.
 */
export default function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className,
  wrapperClassName,
  style,
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const node = ref.current;
      if (!node) return;

      const rect = node.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;

      const withinX = Math.abs(distX) < rect.width / 2 + padding;
      const withinY = Math.abs(distY) < rect.height / 2 + padding;

      if (withinX && withinY) {
        setIsActive(true);
        setOffset({ x: distX / strength, y: distY / strength });
      } else {
        setIsActive(false);
        setOffset({ x: 0, y: 0 });
      }
    },
    [padding, strength],
  );

  const handleMouseLeave = useCallback(() => {
    setIsActive(false);
    setOffset({ x: 0, y: 0 });
  }, []);

  return (
    <div
      ref={ref}
      className={wrapperClassName ?? className}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        style={{
          transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
          transition: isActive ? activeTransition : inactiveTransition,
          willChange: 'transform',
        }}
      >
        {children}
      </div>
    </div>
  );
}
