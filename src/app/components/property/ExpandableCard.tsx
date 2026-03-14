import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { gsap } from 'gsap';
import { safeVibrate } from '../../utils/vibration';

interface ExpandableCardProps {
  title: string;
  description: string;
  image?: string;
  maxLines?: number;
  children?: React.ReactNode;
}

export const ExpandableCard: React.FC<ExpandableCardProps> = ({
  title,
  description,
  image,
  maxLines = 3,
  children
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const fullContentRef = useRef<HTMLDivElement>(null);
  const [canExpand, setCanExpand] = useState(false);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  // Check if content needs expand button
  useEffect(() => {
    if (!contentRef.current || !fullContentRef.current) return;

    const checkExpansion = () => {
      if (!contentRef.current || !fullContentRef.current) return;
      
      const contentHeight = contentRef.current.scrollHeight;
      const fullHeight = fullContentRef.current.scrollHeight;
      
      setCanExpand(fullHeight > contentHeight + 10); // 10px threshold
    };

    checkExpansion();
    window.addEventListener('resize', checkExpansion);

    return () => window.removeEventListener('resize', checkExpansion);
  }, [description]);

  const toggleExpand = () => {
    if (!contentRef.current || !fullContentRef.current) return;

    // Kill any existing timeline
    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    const collapsedHeight = contentRef.current.scrollHeight;
    const expandedHeight = fullContentRef.current.scrollHeight;

    timelineRef.current = gsap.timeline({
      defaults: { duration: 0.4, ease: 'power2.inOut' }
    });

    if (isExpanded) {
      timelineRef.current.to(contentRef.current, {
        height: collapsedHeight / (maxLines + 1),
        onComplete: () => setIsExpanded(false)
      });
    } else {
      timelineRef.current.to(contentRef.current, {
        height: expandedHeight,
        onComplete: () => setIsExpanded(true)
      });
    }

    // Haptic feedback
    safeVibrate(20);
  };

  // Cleanup timeline on unmount
  useEffect(() => {
    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, []);

  return (
    <div className="bg-white border-2 border-[var(--vharanani-charcoal)] overflow-hidden hover:border-[var(--vharanani-burgundy)] transition-all duration-300">
      {image && (
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--vharanani-charcoal)] via-[var(--vharanani-charcoal)]/50 to-transparent" />
        </div>
      )}

      <div className="p-4 sm:p-6">
        <h3 
          className="text-[var(--typo-subline-size)] leading-[var(--typo-subline-line-height)] font-bebas-neue font-bold text-[var(--vharanani-charcoal)] mb-4 uppercase tracking-wide"
        >
          {title}
        </h3>
        
        <div
          ref={contentRef}
          className={`relative overflow-hidden transition-all duration-300 ${
            !isExpanded ? `line-clamp-${maxLines}` : ''
          }`}
          style={!isExpanded ? { maxHeight: `calc(var(--typo-copy-line-height) * ${maxLines})` } : undefined}
        >
          <div ref={fullContentRef}>
            <p 
              className="text-[var(--typo-copy-size)] leading-[var(--typo-copy-line-height)] font-inter text-[var(--vharanani-text)]"
            >
              {description}
            </p>
            {children}
          </div>
        </div>

        {canExpand && (
          <button
            onClick={toggleExpand}
            className="flex items-center gap-2 mt-4 text-[var(--typo-headline-small-size)] leading-[var(--typo-headline-small-line-height)] font-bebas-neue text-[var(--vharanani-burgundy)] hover:text-[var(--vharanani-burgundy-60)] transition-colors uppercase tracking-wide group"
          >
            <span>{isExpanded ? 'Show less' : 'Read more'}</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${
                isExpanded ? 'rotate-180' : ''
              } group-hover:translate-y-0.5`}
            />
          </button>
        )}
      </div>
    </div>
  );
};
