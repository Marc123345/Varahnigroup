import { useState, useEffect } from 'react';

export const BREAKPOINTS = {
  mobile: 0,
  tablet: 768,
  desktop: 1024,
  wide: 1280,
  ultrawide: 1536,
} as const;

export type Breakpoint = keyof typeof BREAKPOINTS;

function getBreakpoint(width: number): Breakpoint {
  if (width < BREAKPOINTS.tablet) return 'mobile';
  if (width < BREAKPOINTS.desktop) return 'tablet';
  if (width < BREAKPOINTS.wide) return 'desktop';
  if (width < BREAKPOINTS.ultrawide) return 'wide';
  return 'ultrawide';
}

const getInitialWidth = () =>
  typeof window !== 'undefined' ? window.innerWidth : 1024;

export const useResponsive = () => {
  const [windowWidth, setWindowWidth] = useState<number>(getInitialWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const breakpoint = getBreakpoint(windowWidth);

  return {
    breakpoint,
    windowWidth,
    isMobile: breakpoint === 'mobile',
    isTablet: breakpoint === 'tablet',
    isDesktop: breakpoint === 'desktop' || breakpoint === 'wide' || breakpoint === 'ultrawide',
    isWide: breakpoint === 'wide' || breakpoint === 'ultrawide',
    isUltrawide: breakpoint === 'ultrawide',
  };
};
