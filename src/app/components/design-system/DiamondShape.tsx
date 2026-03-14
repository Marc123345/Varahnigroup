import * as React from 'react';
import { cn } from '../ui/utils';

interface DiamondShapeProps {
  className?: string;
  color?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  variant?: 'default' | 'tall' | 'wide';
}

export function DiamondShape({ 
  className, 
  color = '#822C1E', 
  size = 'md',
  variant = 'default' 
}: DiamondShapeProps) {
  const sizeMap = {
    sm: 'w-32 h-32',
    md: 'w-64 h-64',
    lg: 'w-96 h-96',
    xl: 'w-[32rem] h-[32rem]',
    full: 'w-full h-full',
  };

  // Default variant (original)
  if (variant === 'default') {
    return (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 596 481" 
        fill="none"
        className={cn(sizeMap[size], className)}
        preserveAspectRatio="xMidYMid meet"
      >
        <path 
          fillRule="evenodd" 
          clipRule="evenodd" 
          d="M-124.993 34.049L216.444 -307.388C240.398 -331.342 279.594 -331.342 303.548 -307.388L644.985 34.049C668.938 58.002 668.938 97.199 644.985 121.152L303.548 462.59C279.594 486.543 240.398 486.543 216.444 462.59L-124.993 121.152C-148.947 97.199 -148.947 58.002 -124.993 34.049Z" 
          fill={color}
        />
      </svg>
    );
  }

  // Tall variant
  if (variant === 'tall') {
    return (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 596 574" 
        fill="none"
        className={cn(sizeMap[size], className)}
        preserveAspectRatio="xMidYMid meet"
      >
        <path 
          fillRule="evenodd" 
          clipRule="evenodd" 
          d="M-306.728 421.008L93.236 21.0443C121.296 -7.01476 167.21 -7.01476 195.27 21.0443L595.235 421.008C623.293 449.068 623.293 494.982 595.234 523.041L195.27 923.006C167.21 951.066 121.296 951.066 93.236 923.006L-306.728 523.041C-334.787 494.983 -334.787 449.068 -306.728 421.008Z" 
          fill={color}
        />
      </svg>
    );
  }

  // Wide variant
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 596 407" 
      fill="none"
      className={cn(sizeMap[size], className)}
      preserveAspectRatio="xMidYMid meet"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M-184.243 442.134L235.791 22.1002C265.258 -7.36674 313.477 -7.36674 342.944 22.1002L762.978 442.134C792.444 471.601 792.444 519.82 762.978 549.287L342.944 969.321C313.477 998.788 265.258 998.788 235.791 969.321L-184.243 549.286C-213.71 519.82 -213.71 471.602 -184.243 442.134Z" 
        fill={color}
      />
    </svg>
  );
}

interface DiamondBackgroundProps {
  className?: string;
  color?: string;
  opacity?: number;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
}

export function DiamondBackground({ 
  className, 
  color = '#822C1E', 
  opacity = 0.1,
  position = 'top-right' 
}: DiamondBackgroundProps) {
  const positionMap = {
    'top-left': '-top-32 -left-32',
    'top-right': '-top-32 -right-32',
    'bottom-left': '-bottom-32 -left-32',
    'bottom-right': '-bottom-32 -right-32',
    'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  };

  return (
    <div className={cn('absolute overflow-hidden pointer-events-none', positionMap[position], className)}>
      <div style={{ opacity }}>
        <DiamondShape color={color} size="xl" />
      </div>
    </div>
  );
}

interface DiamondPatternProps {
  className?: string;
  color?: string;
  opacity?: number;
}

export function DiamondPattern({ className, color = '#822C1E', opacity = 0.05 }: DiamondPatternProps) {
  return (
    <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
      <div style={{ opacity }}>
        <DiamondShape color={color} size="lg" className="absolute -top-20 -right-20 rotate-12" />
        <DiamondShape color={color} size="md" className="absolute bottom-10 left-10 -rotate-6" />
      </div>
    </div>
  );
}

export const DiamondShapes = {
  DiamondShape,
  DiamondBackground,
  DiamondPattern,
};