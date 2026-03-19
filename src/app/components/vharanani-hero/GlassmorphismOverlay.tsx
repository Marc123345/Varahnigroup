import { useEffect, useRef, useState, useCallback, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowLeft } from 'lucide-react';
import { safeVibrate } from '../../utils/vibration';

interface Tab {
  id: string;
  label: string;
  content: ReactNode;
}

interface GlassmorphismOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  scrollMode?: boolean;
  divisionLogo?: string;
}

export function GlassmorphismOverlay({
  isOpen,
  onClose,
  title,
  subtitle,
  tabs,
  activeTab,
  onTabChange,
  scrollMode = false,
  divisionLogo,
}: GlassmorphismOverlayProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [visibleSection, setVisibleSection] = useState(tabs[0]?.id || '');
  const isScrollingTo = useRef(false);

  // ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleClose]);

  // Track which section is visible during scroll (scroll mode only)
  useEffect(() => {
    if (!scrollMode || !scrollContainerRef.current) return;
    const container = scrollContainerRef.current;

    const handleScroll = () => {
      if (isScrollingTo.current) return;
      const containerTop = container.scrollTop + 120; // offset for sticky nav
      let currentId = tabs[0]?.id || '';

      for (const tab of tabs) {
        const el = sectionRefs.current[tab.id];
        if (el) {
          const elTop = el.offsetTop;
          if (containerTop >= elTop) {
            currentId = tab.id;
          }
        }
      }
      setVisibleSection(currentId);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [scrollMode, tabs]);

  const handleClose = useCallback(() => {
    safeVibrate(10);
    onClose();
  }, [onClose]);

  const handleTabClick = (tabId: string) => {
    safeVibrate(5);
    if (scrollMode) {
      // Smooth scroll to section
      const el = sectionRefs.current[tabId];
      const container = scrollContainerRef.current;
      if (el && container) {
        isScrollingTo.current = true;
        setVisibleSection(tabId);
        const targetTop = el.offsetTop - 8;
        container.scrollTo({ top: targetTop, behavior: 'smooth' });
        setTimeout(() => { isScrollingTo.current = false; }, 800);
      }
    } else {
      onTabChange(tabId);
    }
  };

  const activeTabContent = tabs.find(tab => tab.id === activeTab)?.content;
  const activeTabIndex = tabs.findIndex(tab => tab.id === activeTab);
  const currentNavId = scrollMode ? visibleSection : activeTab;
  const currentNavIndex = tabs.findIndex(tab => tab.id === currentNavId);

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 bg-white overflow-hidden"
    >
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(137,43,28,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(137,43,28,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Top burgundy accent line */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: 'var(--vharanani-burgundy)' }} />

      {/* ── NAV BAR (tabs or scroll anchors) ── */}
      <div
        className="relative flex items-center gap-0 px-6 sm:px-10 lg:px-16 border-b overflow-x-auto"
        style={{ borderColor: 'var(--vharanani-charcoal-20)', scrollbarWidth: 'none' }}
      >
        {/* Back button */}
        <button
          onClick={handleClose}
          className="flex items-center gap-2 group flex-shrink-0 mr-4 sm:mr-6"
        >
          <div
            className="w-8 h-8 flex items-center justify-center transition-colors group-hover:bg-[var(--vharanani-burgundy)]"
            style={{ border: '1px solid var(--vharanani-burgundy)' }}
          >
            <ArrowLeft
              size={16}
              className="transition-colors group-hover:text-white"
              style={{ color: 'var(--vharanani-burgundy)' }}
            />
          </div>
        </button>

        {/* Division logo */}
        {divisionLogo && (
          <img
            src={divisionLogo}
            alt=""
            className="h-6 sm:h-7 w-auto object-contain flex-shrink-0 mr-4 sm:mr-6"
          />
        )}

        {/* Divider */}
        <div className="w-[1px] h-6 mr-4 sm:mr-6 flex-shrink-0" style={{ backgroundColor: 'var(--vharanani-charcoal-20)' }} />

        {tabs.map((tab, i) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className="relative px-3 sm:px-5 py-3 sm:py-4 transition-all duration-300 flex-shrink-0"
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <span
                className="font-bebas-neue text-sm transition-colors"
                style={{
                  color:
                    currentNavId === tab.id
                      ? 'var(--vharanani-burgundy)'
                      : 'var(--vharanani-charcoal-40)',
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <span
                className="typo-meta tracking-[0.12em] sm:tracking-[0.15em] uppercase font-inter transition-colors whitespace-nowrap"
                style={{
                  color:
                    currentNavId === tab.id
                      ? 'var(--vharanani-charcoal)'
                      : 'var(--vharanani-charcoal-40)',
                }}
              >
                {tab.label}
              </span>
            </div>

            {/* Active Indicator */}
            {currentNavId === tab.id && (
              <motion.div
                layoutId="overlayActiveTab"
                className="absolute bottom-0 left-0 right-0 h-[2px]"
                style={{ backgroundColor: 'var(--vharanani-burgundy)' }}
                transition={{ type: 'spring', damping: 30, stiffness: 400 }}
              />
            )}
          </button>
        ))}

        {/* Tab counter */}
        <div className="ml-auto flex-shrink-0 hidden sm:flex items-center gap-4">
          <span
            className="font-inter typo-meta tracking-[0.2em] uppercase"
            style={{ color: 'var(--vharanani-charcoal-40)' }}
          >
            {String((currentNavIndex >= 0 ? currentNavIndex : 0) + 1).padStart(2, '0')} / {String(tabs.length).padStart(2, '0')}
          </span>
        </div>

        {/* Close button */}
        <button
          onClick={handleClose}
          className="w-8 h-8 flex items-center justify-center transition-colors hover:bg-[var(--vharanani-burgundy)] group flex-shrink-0 ml-4"
          style={{ border: '1px solid var(--vharanani-charcoal-20)' }}
          aria-label="Close overlay"
        >
          <X size={16} className="transition-colors group-hover:text-white" style={{ color: 'var(--vharanani-charcoal)' }} />
        </button>
      </div>

      {/* ── CONTENT AREA ── */}
      <div
        ref={scrollContainerRef}
        className="relative overflow-y-auto px-6 sm:px-10 lg:px-16 py-8 sm:py-10"
        style={{ height: 'calc(100vh - 60px)' }}
      >
        <div className="max-w-5xl mx-auto">
          {scrollMode ? (
            /* ── SCROLL MODE: All sections stacked ── */
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {tabs.map((tab, i) => (
                <div
                  key={tab.id}
                  ref={(el) => { sectionRefs.current[tab.id] = el; }}
                  className={i > 0 ? 'mt-6 pt-8' : ''}
                  style={i > 0 ? { borderTop: '1px solid var(--vharanani-charcoal-20)' } : {}}
                >
                  {/* Section header */}
                  <div className="flex items-center gap-3 mb-6">
                    <span
                      className="font-bebas-neue text-lg"
                      style={{ color: 'var(--vharanani-burgundy)' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div
                      className="flex-1 h-[1px]"
                      style={{ backgroundColor: 'var(--vharanani-charcoal-20)' }}
                    />
                    <span
                      className="typo-caption tracking-[0.2em] uppercase font-inter"
                      style={{ color: 'var(--vharanani-charcoal-40)' }}
                    >
                      {tab.label}
                    </span>
                  </div>
                  {/* Section content */}
                  {tab.content}
                </div>
              ))}
            </motion.div>
          ) : (
            /* ── TAB MODE: Single active tab ── */
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {activeTabContent}
              </motion.div>
            </AnimatePresence>
          )}
        </div>

        {/* Bottom padding for scroll */}
        <div className="h-16" />
      </div>

      {/* Bottom burgundy accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ backgroundColor: 'var(--vharanani-burgundy)' }} />

      {/* Bottom meta bar */}
      <div
        className="absolute bottom-1 left-0 right-0 flex items-center justify-between px-6 sm:px-10 lg:px-16 py-2 bg-white"
      >
        <div className="font-inter typo-meta tracking-[0.3em] uppercase" style={{ color: 'var(--vharanani-charcoal-40)' }}>
          VISION. STRUCTURE. IMPACT.
        </div>
        <div className="font-inter typo-meta tracking-[0.15em] uppercase" style={{ color: 'var(--vharanani-charcoal-40)' }}>
          ESC TO CLOSE
        </div>
      </div>
    </motion.div>
  );
}