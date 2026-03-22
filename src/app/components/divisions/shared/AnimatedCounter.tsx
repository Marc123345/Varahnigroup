import { useState, useEffect, useRef } from 'react';
import { useInView } from '../../../hooks/useInView';

export function AnimatedCounter({ target, suffix = '', prefix = '', duration = 2000, color = 'var(--vharanani-burgundy)' }: { target: number; suffix?: string; prefix?: string; duration?: number; color?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return (
    <div ref={ref} className="typo-headline-big font-bebas-neue" style={{ color }}>
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  );
}
