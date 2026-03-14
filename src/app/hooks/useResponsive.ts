import { useState, useEffect } from 'react';

export const BREAKPOINTS = {
  mobile: 0,
  tablet: 768,
  desktop: 1024,
  wide: 1280,
  ultrawide: 1536
} as const;

export type Breakpoint = keyof typeof BREAKPOINTS;

export const useResponsive = () => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>('desktop');
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 1024
  );

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);

      if (width < BREAKPOINTS.tablet) {
        setBreakpoint('mobile');
      } else if (width < BREAKPOINTS.desktop) {
        setBreakpoint('tablet');
      } else if (width < BREAKPOINTS.wide) {
        setBreakpoint('desktop');
      } else if (width < BREAKPOINTS.ultrawide) {
        setBreakpoint('wide');
      } else {
        setBreakpoint('ultrawide');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    breakpoint,
    windowWidth,
    isMobile: breakpoint === 'mobile',
    isTablet: breakpoint === 'tablet',
    isDesktop: breakpoint === 'desktop' || breakpoint === 'wide' || breakpoint === 'ultrawide',
    isWide: breakpoint === 'wide' || breakpoint === 'ultrawide',
    isUltrawide: breakpoint === 'ultrawide'
  };
};
