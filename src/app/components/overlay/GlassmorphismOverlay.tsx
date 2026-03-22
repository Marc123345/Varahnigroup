import { useEffect, useRef, useState, useCallback, type ReactNode } from 'react';
import { motion, AnimatePresence, useSpring, useTransform } from 'motion/react';
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
  const [scrollProgress, setScrollProgress] = useState(0);
  const prevTabIndexRef = useRef(0);
  const [tabDirection, setTabDirection] = useState<1 | -1>(1);

  const handleClose = useCallback(() => {
    safeVibrate(10);
    onClose();
  }, [onClose]);

  // ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleClose]);

  // Scroll progress + section tracking
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      // Progress bar
      const { scrollTop, scrollHeight, clientHeight } = container;
      const progress = scrollHeight <= clientHeight ? 0 : scrollTop / (scrollHeight - clientHeight);
      setScrollProgress(progress);

      // Section tracking (scroll mode only)
      if (!scrollMode || isScrollingTo.current) return;
      const containerTop = scrollTop + 120;
      let currentId = tabs[0]?.id || '';
      for (const tab of tabs) {
        const el = sectionRefs.current[tab.id];
        if (el && containerTop >= el.offsetTop) {
          currentId = tab.id;
        }
      }
      setVisibleSection(currentId);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [scrollMode, tabs]);

  const handleTabClick = (tabId: string) => {
    safeVibrate(5);
    const newIndex = tabs.findIndex(t => t.id === tabId);
    setTabDirection(newIndex >= prevTabIndexRef.current ? 1 : -1);
    prevTabIndexRef.current = newIndex;

    if (scrollMode) {
      const el = sectionRefs.current[tabId];
      const container = scrollContainerRef.current;
      if (el && container) {
        isScrollingTo.current = true;
        setVisibleSection(tabId);
        container.scrollTo({ top: el.offsetTop - 8, behavior: 'smooth' });
        setTimeout(() => { isScrollingTo.current = false; }, 800);
      }
    } else {
      onTabChange(tabId);
    }
  };

  const activeTabContent = tabs.find(tab => tab.id === activeTab)?.content;
  const currentNavId = scrollMode ? visibleSection : activeTab;
  const currentNavIndex = tabs.findIndex(tab => tab.id === currentNavId);

  // Spring-animated scroll progress bar width
  const springProgress = useSpring(scrollProgress, { stiffness: 200, damping: 40 });
  const progressWidth = useTransform(springProgress, [0, 1], ['0%', '100%']);

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12, scale: 0.99 }}
      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-50 overflow-hidden"
      style={{ background: '#000000' }}
    >
      {/* ── BACKGROUND TEXTURE ── */}
      <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.025 }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(129,41,33,1) 1px, transparent 1px), linear-gradient(90deg, rgba(129,41,33,1) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      {/* ── TOP BURGUNDY ACCENT ── */}
      <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ backgroundColor: 'var(--vharanani-burgundy)', zIndex: 60 }} />

      {/* ── SCROLL PROGRESS BAR ── */}
      <div className="absolute top-[3px] left-0 right-0 h-[2px] z-50" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
        <motion.div
          className="absolute inset-y-0 left-0 origin-left"
          style={{ width: progressWidth, backgroundColor: 'var(--vharanani-burgundy)', opacity: 0.5 }}
        />
      </div>

      {/* ── NAV BAR ── */}
      <div
        className="relative flex items-center gap-0 px-3 sm:px-6 lg:px-10 border-b overflow-x-auto"
        style={{
          borderColor: 'rgba(255,255,255,0.12)',
          scrollbarWidth: 'none',
          background: 'rgba(0,0,0,0.96)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
        }}
      >
        {/* Back button */}
        <motion.button
          onClick={handleClose}
          className="flex items-center gap-2 group flex-shrink-0 mr-2 sm:mr-4"
          whileHover={{ x: -2 }}
          whileTap={{ scale: 0.94 }}
          transition={{ duration: 0.15 }}
        >
          <div
            className="w-8 h-8 flex items-center justify-center transition-colors duration-200 group-hover:bg-[var(--vharanani-burgundy)]"
            style={{ border: '1px solid var(--vharanani-burgundy)' }}
          >
            <ArrowLeft
              size={15}
              className="transition-colors group-hover:text-white"
              style={{ color: 'var(--vharanani-burgundy)' }}
            />
          </div>
        </motion.button>

        {/* Division logo */}
        {divisionLogo && (
          <motion.img
            src={divisionLogo}
            alt=""
            className="h-5 sm:h-7 w-auto object-contain flex-shrink-0 mr-2 sm:mr-4"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          />
        )}

        {/* Divider */}
        <div className="w-[1px] h-6 mr-2 sm:mr-4 flex-shrink-0" style={{ backgroundColor: 'rgba(255,255,255,0.15)' }} />

        {/* Tabs */}
        {tabs.map((tab, i) => {
          const isActive = currentNavId === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className="relative px-2 sm:px-4 py-3 sm:py-4 transition-colors duration-200 flex-shrink-0 group"
            >
              {/* Hover background */}
              <motion.div
                className="absolute inset-x-0 inset-y-[4px] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ background: 'rgba(129,41,33,0.05)' }}
              />

              <div className="relative flex items-center gap-2 sm:gap-3">
                <span
                  className="font-bebas-neue text-sm transition-colors duration-200"
                  style={{
                    color: isActive ? 'var(--vharanani-burgundy)' : 'rgba(255,255,255,0.3)',
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span
                  className="typo-meta tracking-[0.12em] sm:tracking-[0.15em] uppercase font-inter transition-colors duration-200 whitespace-nowrap"
                  style={{
                    color: isActive ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.4)',
                    fontWeight: isActive ? 500 : 400,
                  }}
                >
                  {tab.label}
                </span>
              </div>

              {/* Active underline */}
              {isActive && (
                <motion.div
                  layoutId="overlayActiveTab"
                  className="absolute bottom-0 left-0 right-0 h-[2px]"
                  style={{ backgroundColor: 'var(--vharanani-burgundy)' }}
                  transition={{ type: 'spring', damping: 28, stiffness: 380 }}
                />
              )}
            </button>
          );
        })}

        {/* Tab counter */}
        <div className="ml-auto flex-shrink-0 hidden sm:flex items-center gap-3 pl-4">
          <span
            className="font-inter typo-meta tracking-[0.2em] uppercase tabular-nums"
            style={{ color: 'var(--vharanani-charcoal-40)' }}
          >
            {String((currentNavIndex >= 0 ? currentNavIndex : 0) + 1).padStart(2, '0')}
            <span style={{ color: 'var(--vharanani-charcoal-20)', margin: '0 4px' }}>/</span>
            {String(tabs.length).padStart(2, '0')}
          </span>
        </div>

        {/* Close button */}
        <motion.button
          onClick={handleClose}
          className="w-8 h-8 flex items-center justify-center transition-colors duration-200 group flex-shrink-0 ml-2 sm:ml-4"
          style={{ border: '1px solid var(--vharanani-charcoal-20)' }}
          aria-label="Close overlay"
          whileHover={{ backgroundColor: 'var(--vharanani-burgundy)' }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.15 }}
        >
          <X size={15} className="transition-colors group-hover:text-white" style={{ color: 'var(--vharanani-charcoal)' }} />
        </motion.button>
      </div>

      {/* ── CONTENT AREA ── */}
      <div
        ref={scrollContainerRef}
        className="relative overflow-y-auto"
        style={{ height: 'calc(100dvh - 57px)' }}
      >
        {scrollMode ? (
          /* ── SCROLL MODE: All sections stacked ── */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {tabs.map((tab, i) => (
              <div
                key={tab.id}
                ref={(el) => { sectionRefs.current[tab.id] = el; }}
              >
                {/* Editorial section divider */}
                {i > 0 && (
                  <div
                    className="flex items-center gap-4 px-4 sm:px-8 lg:px-12 py-6"
                    style={{ borderTop: '1px solid var(--vharanani-charcoal-20)' }}
                  >
                    <motion.span
                      className="font-bebas-neue text-base tabular-nums"
                      style={{ color: 'var(--vharanani-burgundy)' }}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </motion.span>
                    <motion.div
                      className="flex-1 h-px origin-left"
                      style={{ background: 'var(--vharanani-charcoal-20)' }}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    />
                    <motion.span
                      className="typo-caption tracking-[0.22em] uppercase font-inter"
                      style={{ color: 'var(--vharanani-charcoal-40)' }}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                    >
                      {tab.label}
                    </motion.span>
                  </div>
                )}

                {/* Section content */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.05 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  {tab.content}
                </motion.div>
              </div>
            ))}
            <div className="h-20" />
          </motion.div>
        ) : (
          /* ── TAB MODE: Direction-aware slide ── */
          <AnimatePresence mode="wait" custom={tabDirection}>
            <motion.div
              key={activeTab}
              custom={tabDirection}
              initial={(dir: number) => ({ opacity: 0, x: dir * 32, filter: 'blur(2px)' })}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              exit={(dir: number) => ({ opacity: 0, x: dir * -20, filter: 'blur(1px)' })}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              {activeTabContent}
              <div className="h-20" />
            </motion.div>
          </AnimatePresence>
        )}
      </div>

      {/* ── BOTTOM META BAR ── */}
      <div
        className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 sm:px-8 lg:px-12"
        style={{
          background: 'rgba(0,0,0,0.95)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          height: '36px',
        }}
      >
        <span className="font-inter typo-meta tracking-[0.28em] uppercase" style={{ color: 'rgba(255,255,255,0.35)' }}>
          VISION. STRUCTURE. IMPACT.
        </span>
        <div className="hidden sm:flex items-center gap-4">
          <span className="font-inter typo-meta tracking-[0.15em] uppercase" style={{ color: 'rgba(255,255,255,0.35)' }}>
            ESC TO CLOSE
          </span>
        </div>
      </div>

      {/* ── BOTTOM BURGUNDY ACCENT ── */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ backgroundColor: 'var(--vharanani-burgundy)' }} />
    </motion.div>
  );
}
