import * as React from 'react';
import { cn } from '../ui/utils';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

// Caption Text - Century Gothic Regular (using Inter as fallback)
// 6 pt Type / 9 pt Leading
export function CaptionText({ children, className, as: Component = 'p' }: TypographyProps) {
  return (
    <Component 
      className={cn(
        "font-['Inter',sans-serif] font-normal text-[6pt] leading-[9pt] tracking-[0.05em] text-[var(--vharanani-text)]",
        className
      )}
    >
      {children}
    </Component>
  );
}

// Copy Text - Century Gothic Regular (using Inter as fallback)
// 8 pt Type / 11 pt Leading
export function CopyText({ children, className, as: Component = 'p' }: TypographyProps) {
  return (
    <Component 
      className={cn(
        "font-['Inter',sans-serif] font-normal text-[8pt] leading-[11pt] text-[var(--vharanani-text)]",
        className
      )}
    >
      {children}
    </Component>
  );
}

// Headlines Copytext - Bebas Neue Book - Capital Letters
// 13pt Type / 11pt Leading
export function HeadlineSmall({ children, className, as: Component = 'h3' }: TypographyProps) {
  return (
    <Component 
      className={cn(
        "font-['Bebas_Neue',sans-serif] font-normal text-[13pt] leading-[11pt] uppercase tracking-wide text-[var(--vharanani-text)]",
        className
      )}
    >
      {children}
    </Component>
  );
}

// Sublines Sections - Bebas Neue Bold - Capital Letters
// 20pt Type / 16pt Leading
export function Subline({ children, className, as: Component = 'h2' }: TypographyProps) {
  return (
    <Component 
      className={cn(
        "font-['Bebas_Neue',sans-serif] font-bold text-[20pt] leading-[16pt] uppercase tracking-wide text-[var(--vharanani-text)]",
        className
      )}
    >
      {children}
    </Component>
  );
}

// Big Headlines - Bebas Neue Bold - Capital Letters
// 40pt Type / 30 pt Leading
export function HeadlineBig({ children, className, as: Component = 'h1' }: TypographyProps) {
  return (
    <Component 
      className={cn(
        "font-['Bebas_Neue',sans-serif] font-bold text-[40pt] leading-[30pt] uppercase tracking-[0.075em] text-[var(--vharanani-text)]",
        className
      )}
    >
      {children}
    </Component>
  );
}

// Sequencer and Title for Marketing - Bebas Neue Bold - Capital Letters
// 50pt Type / 48 pt Leading
export function Header({ children, className, as: Component = 'h1' }: TypographyProps) {
  return (
    <Component 
      className={cn(
        "font-['Bebas_Neue',sans-serif] font-bold text-[50pt] leading-[48pt] uppercase tracking-[0.075em] text-[var(--vharanani-text)]",
        className
      )}
    >
      {children}
    </Component>
  );
}

// Section Heading - Montserrat Medium - Capitalized
// 14px Type / 30px Leading / 0.70px Letter Spacing
export function SectionHeading({ children, className, as: Component = 'h3' }: TypographyProps) {
  return (
    <Component 
      className={cn(
        "font-['Montserrat',sans-serif] font-medium text-[14px] leading-[30px] tracking-[0.70px] capitalize text-[#822C1D]",
        className
      )}
    >
      {children}
    </Component>
  );
}

// Export all typography components
export const Typography = {
  CaptionText,
  CopyText,
  HeadlineSmall,
  Subline,
  HeadlineBig,
  Header,
  SectionHeading,
};
