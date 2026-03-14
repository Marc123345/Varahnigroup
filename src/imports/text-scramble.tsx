import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  memo
} from 'react';
import gsap from 'gsap';
import { useMemorySafe } from '../hooks/useMemorySafe';
import { useAnimationCleanup } from '../hooks/useAnimationCleanup';
import { useDeviceDetect } from '../hooks/useDeviceDetect';

interface TextScrambleProps {
  phrases: string[];
  className?: string;
  colorTheme?: 'gold' | 'blue';
}

const TextScramble: React.FC<TextScrambleProps> = memo(
  ({ phrases, className = '', colorTheme = 'gold' }) => {
    const elementRef = useRef<HTMLSpanElement>(null);
    const charsRef = useRef<HTMLSpanElement[]>([]);
    const [currentPhrase, setCurrentPhrase] = useState(0);
    const { isUnmountedRef, setStateSafely } = useMemorySafe();
    const { cleanup, createTimeline } = useAnimationCleanup();
    const { isMobile } = useDeviceDetect();

    // Slower timings for more relaxed animation
    const duration = isMobile ? 2.5 : 6; // Increased from 1.6/4 to 2.5/6
    const scrambleDuration = isMobile ? 1.2 : 3; // Increased from 0.8/2 to 1.2/3
    const waveSpeed = isMobile ? 5 : 4; // Slightly slower wave
    const waveHeight = isMobile ? 15 : 25;

    const getThemeColors = useCallback(() => {
      return colorTheme === 'gold'
        ? {
            primary: '#CFAE4F',
            secondary: '#B88A44',
            highlight: '#D6BC6F',
            shadow: 'rgba(207, 174, 79, 0.3)'
          }
        : {
            primary: '#2B4C7E',
            secondary: '#1A3A6E',
            highlight: '#3A6BA5',
            shadow: 'rgba(43, 76, 126, 0.3)'
          };
    }, [colorTheme]);

    const animateWaveText = useCallback((text: string) => {
      if (!elementRef.current || isUnmountedRef.current) return;

      const colors = getThemeColors();
      const chars = text.split('');
      const fragment = document.createDocumentFragment();
      const newChars: HTMLSpanElement[] = [];

      chars.forEach((char, i) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.cssText = `
          display: inline-block;
          opacity: 0;
          transform: translateY(${waveHeight}px);
          color: ${colors.primary};
          filter: drop-shadow(0 0 ${isMobile ? '4px' : '8px'} ${colors.shadow});
          will-change: transform, opacity;
          background: linear-gradient(120deg, ${colors.primary}, ${colors.highlight});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          position: relative;
          font-kerning: normal;
          text-rendering: optimizeLegibility;
        `;

        newChars.push(span);
        fragment.appendChild(span);

        gsap.to(span, {
          opacity: 1,
          y: 0,
          duration: 1.2, // Slower fade in (was 0.8)
          delay: i * 0.08, // Slower character appearance (was 0.06)
          ease: 'power2.out',
          onComplete: () => {
            if (!isUnmountedRef.current) {
              gsap.to(span, {
                y: `${Math.sin((i / chars.length) * Math.PI * 2) * waveHeight}px`,
                duration: waveSpeed,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
                delay: i * 0.15 // Slower wave effect (was 0.1)
              });
            }
          }
        });
      });

      // Batch DOM updates
      charsRef.current.forEach(span => {
        gsap.killTweensOf(span);
        span.remove();
      });
      charsRef.current = newChars;
      elementRef.current.innerHTML = '';
      elementRef.current.appendChild(fragment);
    }, [getThemeColors, isMobile, isUnmountedRef, waveHeight, waveSpeed]);

    useEffect(() => {
      if (isUnmountedRef.current) return;

      const current = phrases[currentPhrase];
      cleanup();

      animateWaveText(current);

      const nextTimer = setTimeout(() => {
        if (!isUnmountedRef.current) {
          setStateSafely(setCurrentPhrase, prev => (prev + 1) % phrases.length);
        }
      }, duration * 1000);

      return () => {
        cleanup();
        clearTimeout(nextTimer);
      };
    }, [
      currentPhrase,
      phrases,
      duration,
      cleanup,
      animateWaveText,
      setStateSafely,
      isUnmountedRef
    ]);

    const colors = getThemeColors();

    return (
      <span
        ref={elementRef}
        className={`inline-block ${className}`}
        style={{
          background: `linear-gradient(120deg, ${colors.primary}, ${colors.highlight})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: isMobile
            ? `0 0 12px ${colors.shadow}`
            : `0 0 24px ${colors.shadow}, 0 0 48px ${colors.shadow}`,
          fontFamily: 'inherit',
          position: 'relative',
          willChange: 'transform',
          whiteSpace: 'nowrap',
          display: 'inline-block',
          textRendering: 'optimizeLegibility',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale'
        }}
        aria-label={phrases[currentPhrase]}
        role="text"
      >
        {phrases[currentPhrase]}
      </span>
    );
  }
);

TextScramble.displayName = 'TextScramble';
export default TextScramble;