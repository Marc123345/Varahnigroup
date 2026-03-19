import * as React from 'react';
import { useEffect, useRef } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { safeVibrate } from '../../utils/vibration';

interface MobileMenuItem {
  label: string;
  id: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate?: (divisionId: string) => void;
  items?: MobileMenuItem[];
}

const DEFAULT_ITEMS: MobileMenuItem[] = [
  { label: 'Vharanani Group', id: 'group' },
  { label: 'Vharanani Properties', id: 'properties' },
  { label: 'David Mabilu Foundation', id: 'foundation' },
  { label: 'DMFT Property Developers', id: 'dmft' },
];

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onNavigate, items = DEFAULT_ITEMS }) => {
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
      document.body.style.overflow = '';
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

  const handleItemClick = (id: string) => {
    safeVibrate(10);
    if (onNavigate) {
      onNavigate(id);
    }
    handleClose();
  };

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 hidden items-center justify-end bg-[var(--vharanani-charcoal)]/80 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div
        ref={menuRef}
        className="h-full w-full max-w-[85vw] sm:max-w-sm bg-white border-l-4 border-[var(--vharanani-burgundy)] shadow-2xl flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b-2 border-[var(--vharanani-charcoal)]">
          <h2 className="typo-subline font-bebas-neue text-[var(--vharanani-burgundy)] uppercase tracking-wide">
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

        {/* Division Label */}
        <div className="px-4 sm:px-6 pt-4 sm:pt-5 pb-2">
          <span className="font-inter typo-caption tracking-[0.25em] uppercase" style={{ color: 'var(--vharanani-burgundy)' }}>
            EXPLORE DIVISIONS
          </span>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 overflow-y-auto px-3 sm:px-6 pb-4 sm:pb-6">
          <ul className="space-y-1">
            {items.map((item, index) => (
              <li key={item.id}>
                <button
                  onClick={() => handleItemClick(item.id)}
                  className="w-full text-left flex items-center justify-between py-3 sm:py-4 px-3 sm:px-4 border-l-4 border-transparent hover:border-[var(--vharanani-burgundy)] hover:bg-[var(--vharanani-burgundy-20)] transition-all duration-200 group min-h-[44px]"
                >
                  <div>
                    <span className="font-inter typo-meta tracking-[0.15em] uppercase block mb-1" style={{ color: 'var(--vharanani-charcoal-60)' }}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="typo-headline-small font-bebas-neue text-[var(--vharanani-charcoal)] uppercase tracking-wide truncate">
                      {item.label}
                    </span>
                  </div>
                  <ArrowRight size={14} className="text-[var(--vharanani-burgundy)] opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer CTA */}
        <div className="p-4 sm:p-6 border-t-2 border-[var(--vharanani-charcoal)]">
          <button
            onClick={() => {
              const footer = document.querySelector('footer');
              if (footer) footer.scrollIntoView({ behavior: 'smooth' });
              handleClose();
            }}
            className="w-full bg-[var(--vharanani-burgundy)] hover:bg-[var(--vharanani-burgundy-80)] text-white px-6 py-4 typo-headline-small font-bebas-neue uppercase tracking-wide transition-colors duration-300 flex items-center justify-center gap-2 min-h-[48px]"
          >
            Get in Touch
            <ArrowRight size={14} />
          </button>
          <div className="mt-3 text-center">
            <a href="mailto:info@vharanani.com" className="font-inter typo-meta tracking-wider" style={{ color: 'var(--vharanani-burgundy)' }}>
              info@vharanani.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
