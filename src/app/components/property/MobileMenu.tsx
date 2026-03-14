import * as React from 'react';
import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { gsap } from 'gsap';
import { safeVibrate } from '../../utils/vibration';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!overlayRef.current || !menuRef.current) return;

    // Kill existing timeline
    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    timelineRef.current = gsap.timeline();

    if (isOpen) {
      // Open animation
      document.body.style.overflow = 'hidden';
      
      timelineRef.current
        .set(overlayRef.current, { display: 'flex' })
        .fromTo(
          overlayRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.3, ease: 'power2.out' }
        )
        .fromTo(
          menuRef.current,
          { x: '100%' },
          { x: '0%', duration: 0.4, ease: 'power3.out' },
          '-=0.2'
        );
    } else {
      // Close animation
      timelineRef.current
        .to(menuRef.current, {
          x: '100%',
          duration: 0.3,
          ease: 'power2.in'
        })
        .to(
          overlayRef.current,
          { opacity: 0, duration: 0.2, ease: 'power2.in' },
          '-=0.1'
        )
        .set(overlayRef.current, { display: 'none' })
        .call(() => {
          document.body.style.overflow = '';
        });
    }

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, [isOpen]);

  const handleClose = () => {
    safeVibrate(20);
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 hidden items-center justify-end bg-[var(--vharanani-charcoal)]/80 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div
        ref={menuRef}
        className="h-full w-full max-w-sm bg-white border-l-4 border-[var(--vharanani-burgundy)] shadow-2xl flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b-2 border-[var(--vharanani-charcoal)]">
          <h2 className="text-[var(--typo-subline-size)] leading-[var(--typo-subline-line-height)] font-bebas-neue font-bold text-[var(--vharanani-burgundy)] uppercase tracking-wide">
            Menu
          </h2>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-[var(--vharanani-burgundy-20)] transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6 text-[var(--vharanani-charcoal)]" />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 overflow-y-auto p-6">
          <ul className="space-y-4">
            {[
              'Residential Portfolio',
              'Commercial Properties',
              'Mixed-Use Developments',
              'About Us',
              'Contact'
            ].map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={handleClose}
                  className="block py-4 px-4 border-l-4 border-transparent hover:border-[var(--vharanani-burgundy)] hover:bg-[var(--vharanani-burgundy-20)] transition-all duration-200"
                >
                  <span className="text-[var(--typo-headline-small-size)] leading-[var(--typo-headline-small-line-height)] font-bebas-neue text-[var(--vharanani-charcoal)] uppercase tracking-wide">
                    {item}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer CTA */}
        <div className="p-6 border-t-2 border-[var(--vharanani-charcoal)]">
          <button className="w-full bg-[var(--vharanani-burgundy)] hover:bg-[var(--vharanani-burgundy-80)] text-white px-6 py-4 text-[var(--typo-headline-small-size)] leading-[var(--typo-headline-small-line-height)] font-bebas-neue uppercase tracking-wide transition-colors duration-300">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};
