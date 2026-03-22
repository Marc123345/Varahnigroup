import { useState, useEffect, useCallback, useRef, memo } from 'react';

// Elegant character set — letters only, no harsh symbols
const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

interface TextScrambleProps {
  phrases: string[];
  /** Time each phrase stays fully revealed (ms) */
  holdDuration?: number;
  /** Time for the scramble-in transition (ms) */
  scrambleDuration?: number;
  className?: string;
}

/** Ease-out cubic for a decelerating reveal */
function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

/**
 * TextScramble — Sleek character-by-character decode effect.
 * Uses eased timing, longer holds, and a gentle fade transition
 * between phrases for an editorial feel.
 */
export const VharananiTextScramble = memo(function VharananiTextScramble({
  phrases,
  holdDuration = 5000,
  scrambleDuration = 2200,
  className = '',
}: TextScrambleProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isScrambling, setIsScrambling] = useState(true);
  const [opacity, setOpacity] = useState(1);
  const frameRef = useRef<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const fadeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Scramble interval — only update random chars every N ms for a calmer look
  const lastTickTime = useRef(0);
  const TICK_INTERVAL = 70; // ms between random char changes (slower = calmer)

  const scrambleTo = useCallback(
    (target: string) => {
      setIsScrambling(true);
      setOpacity(1);
      const startTime = performance.now();
      const totalChars = target.length;
      let cachedRandom = Array.from({ length: totalChars }, () =>
        SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
      );

      const tick = (now: number) => {
        const elapsed = now - startTime;
        const rawProgress = Math.min(elapsed / scrambleDuration, 1);
        const progress = easeOutCubic(rawProgress);

        // Number of characters that are "resolved" so far
        const resolved = Math.floor(progress * totalChars);

        // Only refresh random characters at a throttled interval
        if (now - lastTickTime.current > TICK_INTERVAL) {
          lastTickTime.current = now;
          cachedRandom = cachedRandom.map((ch, i) =>
            i >= resolved && target[i] !== ' '
              ? SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
              : ch
          );
        }

        let result = '';
        for (let i = 0; i < totalChars; i++) {
          if (i < resolved) {
            result += target[i];
          } else if (target[i] === ' ') {
            result += ' ';
          } else {
            result += cachedRandom[i];
          }
        }

        setDisplayText(result);

        if (rawProgress < 1) {
          frameRef.current = requestAnimationFrame(tick);
        } else {
          setDisplayText(target);
          setIsScrambling(false);
        }
      };

      frameRef.current = requestAnimationFrame(tick);
    },
    [scrambleDuration]
  );

  useEffect(() => {
    // Fade in and scramble to current phrase
    scrambleTo(phrases[currentIndex]);

    // After hold, gently fade out then advance
    const fadeDuration = 600;
    fadeTimerRef.current = setTimeout(() => {
      setOpacity(0); // triggers CSS transition fade-out
    }, scrambleDuration + holdDuration - fadeDuration);

    timerRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % phrases.length);
    }, scrambleDuration + holdDuration);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      if (timerRef.current) clearTimeout(timerRef.current);
      if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current);
    };
  }, [currentIndex, phrases, scrambleTo, scrambleDuration, holdDuration]);

  return (
    <span
      className={`inline-block ${className}`}
      style={{
        fontFamily: 'inherit',
        whiteSpace: 'nowrap',
        opacity,
        transition: 'opacity 0.6s ease',
      }}
      aria-label={phrases[currentIndex]}
    >
      {displayText.split('').map((char, i) => {
        const isResolved =
          !isScrambling || char === phrases[currentIndex]?.[i];
        return (
          <span
            key={`${currentIndex}-${i}`}
            style={{
              display: 'inline-block',
              color: isResolved
                ? 'var(--vharanani-burgundy)'
                : 'rgba(255,255,255,0.25)',
              transition: 'color 0.35s ease',
              minWidth: char === ' ' ? '0.3em' : undefined,
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        );
      })}
    </span>
  );
});
