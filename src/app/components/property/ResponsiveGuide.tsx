import * as React from 'react';
import { useState } from 'react';
import { Monitor, Tablet, Smartphone, X } from 'lucide-react';
import { useResponsive, BREAKPOINTS } from '../../hooks/useResponsive';

export const ResponsiveGuide: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { breakpoint, windowWidth } = useResponsive();

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 z-40 bg-[var(--vharanani-burgundy)] text-white p-3 shadow-lg hover:bg-[var(--vharanani-burgundy-80)] transition-colors"
        aria-label="Show responsive guide"
      >
        <Monitor className="w-5 h-5" />
      </button>
    );
  }

  const getIcon = () => {
    switch (breakpoint) {
      case 'mobile':
        return <Smartphone className="w-5 h-5" />;
      case 'tablet':
        return <Tablet className="w-5 h-5" />;
      default:
        return <Monitor className="w-5 h-5" />;
    }
  };

  const getBreakpointColor = () => {
    switch (breakpoint) {
      case 'mobile':
        return 'bg-blue-500';
      case 'tablet':
        return 'bg-green-500';
      case 'desktop':
        return 'bg-purple-500';
      case 'wide':
        return 'bg-orange-500';
      case 'ultrawide':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-40 bg-white border-2 border-[var(--vharanani-charcoal)] shadow-lg max-w-xs">
      <div className="flex items-center justify-between p-3 bg-[var(--vharanani-charcoal)] text-white">
        <div className="flex items-center gap-2">
          {getIcon()}
          <span className="text-[var(--typo-caption-size)] leading-[var(--typo-caption-line-height)] font-bebas-neue uppercase tracking-wide">
            Responsive Guide
          </span>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="hover:bg-white/20 p-1 transition-colors"
          aria-label="Hide guide"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="p-4 space-y-3">
        {/* Current Breakpoint */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-[var(--typo-copy-size)] leading-[var(--typo-copy-line-height)] font-inter font-medium text-[var(--vharanani-charcoal)]">
              Current Breakpoint
            </span>
            <span className={`px-2 py-1 text-white text-[var(--typo-caption-size)] leading-[var(--typo-caption-line-height)] font-bebas-neue uppercase ${getBreakpointColor()}`}>
              {breakpoint}
            </span>
          </div>
          <div className="text-[var(--typo-copy-size)] leading-[var(--typo-copy-line-height)] font-inter text-[var(--vharanani-text-muted)]">
            {windowWidth}px
          </div>
        </div>

        {/* Breakpoint List */}
        <div className="space-y-2">
          <div className="text-[var(--typo-copy-size)] leading-[var(--typo-copy-line-height)] font-inter font-medium text-[var(--vharanani-charcoal)] mb-2">
            Breakpoints
          </div>
          {Object.entries(BREAKPOINTS).map(([name, width]) => (
            <div
              key={name}
              className={`flex items-center justify-between text-[var(--typo-caption-size)] leading-[var(--typo-caption-line-height)] font-inter ${
                breakpoint === name
                  ? 'text-[var(--vharanani-burgundy)] font-medium'
                  : 'text-[var(--vharanani-text-muted)]'
              }`}
            >
              <span className="uppercase">{name}</span>
              <span>{width}px+</span>
            </div>
          ))}
        </div>

        {/* Visual Width Indicator */}
        <div>
          <div className="text-[var(--typo-copy-size)] leading-[var(--typo-copy-line-height)] font-inter font-medium text-[var(--vharanani-charcoal)] mb-2">
            Width Scale
          </div>
          <div className="relative h-2 bg-[var(--vharanani-charcoal-20)]">
            <div
              className={`absolute top-0 left-0 h-full ${getBreakpointColor()} transition-all duration-300`}
              style={{
                width: `${Math.min((windowWidth / BREAKPOINTS.ultrawide) * 100, 100)}%`
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
