import { useState, useEffect, useRef } from 'react';

export function useInView(
  ref: React.RefObject<HTMLElement | null>,
  options?: { once?: boolean; amount?: number }
) {
  const [inView, setInView] = useState(false);
  const hasTriggered = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (options?.once && hasTriggered.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          hasTriggered.current = true;
          if (options?.once) observer.disconnect();
        } else if (!options?.once) {
          setInView(false);
        }
      },
      { threshold: options?.amount ?? 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, options?.once, options?.amount]);

  return inView;
}
