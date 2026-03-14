import { useCallback } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { VharananiTextScramble } from './VharananiTextScramble';

const SCRAMBLE_PHRASES = [
  'Infrastructure',
  'Innovation',
  'Investment',
  'Impact',
];

const TICKER_ROW_1 = [
  'INFRASTRUCTURE', 'PROPERTY DEVELOPMENT', 'INNOVATION', 'SOCIAL IMPACT',
  'B-BBEE LEVEL 1', 'EST. 2001', '100% BLACK-OWNED', 'VISION. STRUCTURE. IMPACT.',
  '9 PROVINCES', '4 DIVISIONS', 'JOHANNESBURG', 'SOUTH AFRICA',
];

const TICKER_ROW_2 = [
  'VHARANI PROPERTIES', 'DMFT PROPERTY DEVELOPERS', 'DAVID MABILU FOUNDATION',
  'CIVIL ENGINEERING', 'RESIDENTIAL ESTATES', 'MIXED-USE DEVELOPMENTS',
  'COMMUNITY UPLIFTMENT', 'STRATEGIC PARTNERSHIPS', 'SUSTAINABLE GROWTH',
  'GOVERNANCE & COMPLIANCE', 'SKILLS DEVELOPMENT', 'NATION BUILDING',
];

interface VharananiHomeBannerProps {
  onExplorePortfolio: () => void;
  onAboutGroup: () => void;
}

export function VharananiHomeBanner({
  onExplorePortfolio,
  onAboutGroup,
}: VharananiHomeBannerProps) {
  const scrollToCube = useCallback(() => {
    const cube = document.getElementById('vharanani-cube-section');
    if (cube) cube.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <section className="relative w-full overflow-hidden" style={{ height: '100vh', minHeight: '640px' }}>
      {/* ── BACKGROUND ── */}
      <div className="absolute inset-0 z-0" style={{ backgroundColor: '#222222' }}>
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* ── CONTENT ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 h-full flex flex-col justify-center pb-16">
        <div className="grid grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-center">
          {/* Left — Main Content */}
          <div className="col-span-12 lg:col-span-8 xl:col-span-7 pt-20 sm:pt-24 lg:pt-28 pb-8">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <div
                className="h-[2px] w-10"
                style={{ background: 'var(--vharanani-burgundy)' }}
              />
              <span
                className="typo-caption tracking-[0.3em] uppercase"
                style={{
                  color: 'var(--vharanani-burgundy)',
                }}
              >
                EST. 2001 &mdash; SOUTH AFRICA
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-bebas-neue uppercase tracking-tight mb-2"
              style={{
                fontSize: 'clamp(40px, 7vw, 80px)',
                lineHeight: '1.05',
                color: 'white',
              }}
            >
              Building the
            </motion.h1>

            {/* Scramble Line */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="font-bebas-neue uppercase tracking-tight mb-2"
              style={{
                fontSize: 'clamp(40px, 7vw, 80px)',
                lineHeight: '1.05',
              }}
            >
              <VharananiTextScramble
                phrases={SCRAMBLE_PHRASES}
                holdDuration={5000}
                scrambleDuration={2200}
                className="font-bebas-neue uppercase tracking-tight"
              />
            </motion.div>

            {/* Sub-headline */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="font-bebas-neue uppercase tracking-tight mb-8"
              style={{
                fontSize: 'clamp(40px, 7vw, 80px)',
                lineHeight: '1.05',
                color: 'white',
              }}
            >
              of Africa's Future
            </motion.h2>

            {/* Body copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="font-inter typo-copy mb-10"
              style={{
                color: 'rgba(255,255,255,0.7)',
              }}
            >
              Vharani Group is a wholly Black-owned investment holding company
              driving infrastructure, property development, innovation, and
              social impact across South Africa.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="flex flex-wrap items-center gap-4"
            >
              {/* Primary CTA */}
              <button
                onClick={onExplorePortfolio}
                className="group flex items-center gap-3 px-7 py-4 transition-all duration-300 hover:gap-4"
                style={{ background: 'var(--vharanani-burgundy)' }}
              >
                <span
                  className="font-bebas-neue typo-headline-small tracking-wider uppercase text-white"
                >
                  Explore Our Portfolio
                </span>
                <ArrowRight
                  size={16}
                  className="text-white transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              {/* Secondary CTA */}
              <button
                onClick={onAboutGroup}
                className="group flex items-center gap-3 px-7 py-4 transition-all duration-300"
                style={{
                  border: '2px solid rgba(255,255,255,0.3)',
                  background: 'transparent',
                }}
              >
                <span
                  className="font-bebas-neue typo-headline-small tracking-wider uppercase text-white"
                >
                  About the Group
                </span>
              </button>
            </motion.div>

            {/* Stats Strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="mt-12 flex items-center gap-0"
              style={{ border: '1px solid rgba(255,255,255,0.1)' }}
            >
              {[
                { value: '20+', label: 'Years' },
                { value: '100%', label: 'Black-Owned' },
                { value: '4', label: 'Divisions' },
                { value: '9', label: 'Provinces' },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className="text-center flex-1 py-4 px-3"
                  style={{
                    borderRight: i < 3 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                    background: 'rgba(0,0,0,0.3)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <div
                    className="font-bebas-neue typo-subline"
                    style={{ color: 'var(--vharanani-burgundy)' }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="font-inter typo-meta tracking-[0.15em] uppercase"
                    style={{ color: 'rgba(255,255,255,0.5)' }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── SCROLL INDICATOR ── */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        onClick={scrollToCube}
        className="absolute bottom-14 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1 group"
        aria-label="Scroll to portfolio"
      >
        <span
          className="font-inter typo-meta tracking-[0.2em] uppercase"
          style={{
            color: 'rgba(255,255,255,0.4)',
          }}
        >
          SCROLL
        </span>
        <div
          className="w-[1px] h-6"
          style={{ background: 'rgba(255,255,255,0.2)' }}
        />
        <ChevronDown
          size={14}
          className="animate-bounce"
          style={{ color: 'var(--vharanani-burgundy)' }}
        />
      </motion.button>

      {/* ── TICKER STRIPS ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="absolute bottom-[4px] left-0 right-0 z-20 overflow-hidden"
        style={{ backgroundColor: 'rgba(0,0,0,0.45)', backdropFilter: 'blur(6px)' }}
      >
        {/* Row 1 — scrolls left */}
        <div className="overflow-hidden" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="animate-ticker-left flex whitespace-nowrap py-[6px]">
            {[...TICKER_ROW_1, ...TICKER_ROW_1].map((item, i) => (
              <span key={`t1-${i}`} className="flex items-center gap-5 px-5 flex-shrink-0">
                <span
                  className="font-inter typo-meta tracking-[0.25em] uppercase whitespace-nowrap"
                  style={{
                    color: 'rgba(255,255,255,0.45)',
                  }}
                >
                  {item}
                </span>
                <span
                  className="w-[3px] h-[3px] flex-shrink-0"
                  style={{ backgroundColor: 'var(--vharanani-burgundy)' }}
                />
              </span>
            ))}
          </div>
        </div>
        {/* Row 2 — scrolls right (reversed) */}
        <div className="overflow-hidden">
          <div className="animate-ticker-right flex whitespace-nowrap py-[6px]">
            {[...TICKER_ROW_2, ...TICKER_ROW_2].map((item, i) => (
              <span key={`t2-${i}`} className="flex items-center gap-5 px-5 flex-shrink-0">
                <span
                  className="font-bebas-neue typo-label tracking-[0.15em] uppercase whitespace-nowrap"
                  style={{
                    color: 'rgba(255,255,255,0.3)',
                  }}
                >
                  {item}
                </span>
                <span
                  className="w-[3px] h-[3px] flex-shrink-0 opacity-40"
                  style={{ backgroundColor: 'var(--vharanani-burgundy)' }}
                />
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── BOTTOM ACCENT LINE ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[4px]"
        style={{ background: 'var(--vharanani-burgundy)' }}
      />
    </section>
  );
}