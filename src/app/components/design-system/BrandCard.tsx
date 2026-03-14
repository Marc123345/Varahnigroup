import * as React from 'react';
import { cn } from '../ui/utils';

interface BrandCardProps {
  className?: string;
  variant?: 'burgundy' | 'charcoal';
}

export function BrandCard({ className, variant = 'burgundy' }: BrandCardProps) {
  const bgColor = variant === 'burgundy' ? '#892B1C' : '#2C2D2D';
  
  return (
    <div className={cn("relative h-[110.66px] w-[243.18px] overflow-hidden", className)}>
      {/* White background */}
      <div 
        className="absolute left-[-10.78px] top-[5.17px] h-[110.66px] w-[243.18px]"
        style={{ background: 'white' }}
      />
      
      {/* Bottom left rectangle */}
      <div 
        className="absolute left-[-10.78px] top-[43.48px] h-[56.78px] w-[112.23px]"
        style={{ background: bgColor }}
      />
      
      {/* Bottom right rectangle */}
      <div 
        className="absolute left-[78.75px] top-[62.94px] h-[72.79px] w-[153.66px]"
        style={{ background: bgColor }}
      />
    </div>
  );
}

interface BrandCardLargeProps {
  className?: string;
}

export function BrandCardLarge({ className }: BrandCardLargeProps) {
  return (
    <div className={cn("relative h-[300px] w-full overflow-hidden border border-gray-200 bg-white", className)}>
      {/* White background layer */}
      <div className="absolute inset-0 bg-white" />
      
      {/* Bottom left burgundy shape */}
      <div 
        className="absolute bottom-0 left-0 h-[45%] w-[40%]"
        style={{ background: '#892B1C' }}
      />
      
      {/* Bottom right burgundy shape - overlapping */}
      <div 
        className="absolute bottom-0 right-0 h-[55%] w-[55%]"
        style={{ background: '#892B1C' }}
      />
      
      {/* Optional: Add subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/5" />
    </div>
  );
}

export const BrandCards = {
  BrandCard,
  BrandCardLarge,
};
