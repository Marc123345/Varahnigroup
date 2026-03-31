import { useCallback } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { VharananiTextScramble } from '../components/ui/VharananiTextScramble';

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
  'VHARANANI PROPERTIES', 'DMFT PROPERTY DEVELOPERS', 'DAVID MABILU FOUNDATION',
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
    <section className="relative w-full overflow-hidden" style={{ height: '100vh', minHeight: '700px' }}>

      {/* ── BACKGROUND — VIDEO + OVERLAYS ── */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.45) contrast(1.1)' }}
        >
          <source src="https://ik.imagekit.io/qcvroy8xpd/WhatsApp%20Video%202026-03-30%20at%2014.08.27.mp4" type="video/mp4" />
        </video>

        {/* Gradient overlay — dark bottom, burgundy accent */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.15) 40%, rgba(129,41,33,0.35) 100%)' }}
        />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* ── TOP-LEFT — DESCRIPTIVE TEXT ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="absolute z-10 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28"
        style={{ top: 'clamp(100px, 15vh, 180px)' }}
      >
        <div className="flex items-center gap-3 mb-5">
          <div className="h-[2px] w-10" style={{ background: 'var(--vharanani-burgundy)' }} />
          <span className="typo-caption tracking-[0.28em] uppercase font-inter" style={{ color: 'var(--vharanani-burgundy)' }}>
            EST. 2001 &mdash; SOUTH AFRICA
          </span>
        </div>
        <p
          className="font-inter typo-copy max-w-lg"
          style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.8 }}
        >
          Vharanani Group is a wholly Black-owned investment holding company
          driving infrastructure, property development, innovation, and
          social impact across South Africa.
        </p>
      </motion.div>

      {/* ── BOTTOM-LEFT — BIG HEADLINE WITH TEXT SCRAMBLE ── */}
      <div
        className="absolute z-10 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28"
        style={{ bottom: 'clamp(180px, 22vh, 280px)' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="font-bebas-neue uppercase tracking-tight"
          style={{
            fontSize: 'clamp(48px, 10vw, 150px)',
            lineHeight: 1.05,
            color: 'white',
          }}
        >
          <span style={{ fontWeight: 700 }}>Building</span>
          <br />
          <span
            style={{
              WebkitTextStroke: '2px rgba(255,255,255,0.9)',
              color: 'transparent',
              fontStyle: 'italic',
              fontWeight: 600,
            }}
          >
            <VharananiTextScramble
              phrases={SCRAMBLE_PHRASES}
              holdDuration={5000}
              scrambleDuration={2200}
              className="font-bebas-neue uppercase tracking-tight"
            />
          </span>
        </motion.div>
      </div>

      {/* ── RIGHT SIDE — SECONDARY CONTENT BLOCK ── */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="absolute z-10 hidden lg:flex flex-col items-start"
        style={{ right: 'clamp(40px, 5vw, 120px)', bottom: 'clamp(220px, 28vh, 340px)', maxWidth: 360 }}
      >
        <h3
          className="font-bebas-neue uppercase tracking-wide mb-3"
          style={{ fontSize: 30, lineHeight: '37.5px', color: 'white' }}
        >
          Our Divisions
        </h3>
        <p className="font-inter typo-copy mb-6" style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>
          Properties, Foundation, DMFT — four interconnected divisions delivering infrastructure, development, and social impact nationwide.
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={onExplorePortfolio}
            className="group flex items-center gap-3 px-6 py-3.5 transition-all duration-300 hover:gap-4"
            style={{ borderRadius: 500, background: 'var(--vharanani-burgundy)' }}
          >
            <span className="font-inter text-white" style={{ fontSize: 15, fontWeight: 500, letterSpacing: '0.5px' }}>
              Explore Portfolio
            </span>
            <ArrowRight size={16} className="text-white transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <button
            onClick={onAboutGroup}
            className="w-[54px] h-[54px] flex items-center justify-center transition-all duration-300"
            style={{ borderRadius: 500, background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}
          >
            <ArrowRight size={16} className="text-white" style={{ transform: 'rotate(-45deg)' }} />
          </button>
        </div>
      </motion.div>

      {/* ── MOBILE CTAs (below headline) ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.65 }}
        className="absolute z-10 lg:hidden px-6 sm:px-10 flex items-center gap-3"
        style={{ bottom: 'clamp(120px, 16vh, 180px)' }}
      >
        <button
          onClick={onExplorePortfolio}
          className="group flex items-center gap-3 px-6 py-3.5 transition-all duration-300"
          style={{ borderRadius: 500, background: 'var(--vharanani-burgundy)' }}
        >
          <span className="font-inter text-white" style={{ fontSize: 15, fontWeight: 500, letterSpacing: '0.5px' }}>
            Explore Portfolio
          </span>
          <ArrowRight size={16} className="text-white" />
        </button>

        <button
          onClick={onAboutGroup}
          className="px-5 py-3.5 transition-all duration-300"
          style={{ borderRadius: 500, border: '1.5px solid rgba(255,255,255,0.25)' }}
        >
          <span className="font-inter text-white" style={{ fontSize: 15, fontWeight: 500 }}>
            About
          </span>
        </button>
      </motion.div>

      {/* ── STATS STRIP — bottom ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="absolute z-10 left-6 sm:left-10 md:left-16 lg:left-20 xl:left-28"
        style={{ bottom: 'clamp(80px, 12vh, 140px)' }}
      >
        <div className="flex items-center" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
          {[
            { value: '20+', label: 'Years' },
            { value: '100%', label: 'Black-Owned' },
            { value: '4', label: 'Divisions' },
            { value: '9', label: 'Provinces' },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="text-center py-3 px-4 sm:px-6"
              style={{
                borderRight: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                background: 'rgba(0,0,0,0.4)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <div className="font-bebas-neue typo-subline" style={{ color: 'var(--vharanani-burgundy)' }}>
                {stat.value}
              </div>
              <div className="font-inter typo-meta tracking-[0.15em] uppercase" style={{ color: 'rgba(255,255,255,0.45)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── SCROLL INDICATOR ── */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        onClick={scrollToCube}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 group"
        aria-label="Scroll to portfolio"
      >
        <span className="font-inter typo-meta tracking-[0.2em] uppercase" style={{ color: 'rgba(255,255,255,0.5)' }}>
          SCROLL
        </span>
        <div className="w-[1px] h-4" style={{ background: 'rgba(255,255,255,0.15)' }} />
        <ChevronDown size={14} className="animate-bounce" style={{ color: 'var(--vharanani-burgundy)' }} />
      </motion.button>

      {/* ── PAGINATION DOTS ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="absolute z-10 flex items-center justify-center gap-4"
        style={{ bottom: 30, left: '50%', transform: 'translateX(-50%)' }}
      >
        <div className="w-[15px] h-[15px] rounded-full" style={{ background: 'rgba(255,255,255,0.25)' }} />
        <div className="relative w-[21px] h-[21px]">
          <div className="absolute top-[3px] left-[3px] w-[15px] h-[15px] rounded-full" style={{ background: 'var(--vharanani-burgundy)' }} />
          <div className="absolute inset-0 rounded-full" style={{ border: '1px solid var(--vharanani-burgundy)' }} />
        </div>
        <div className="w-[15px] h-[15px] rounded-full" style={{ background: 'rgba(255,255,255,0.25)' }} />
      </motion.div>

      {/* ── TICKER STRIPS ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="absolute bottom-0 left-0 right-0 z-20 overflow-hidden"
        style={{ backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(6px)' }}
      >
        <div className="overflow-hidden" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="animate-ticker-left flex whitespace-nowrap py-[6px]">
            {[...TICKER_ROW_1, ...TICKER_ROW_1].map((item, i) => (
              <span key={`t1-${i}`} className="flex items-center gap-5 px-5 flex-shrink-0">
                <span className="font-inter typo-meta tracking-[0.25em] uppercase whitespace-nowrap" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  {item}
                </span>
                <span className="w-[3px] h-[3px] flex-shrink-0" style={{ backgroundColor: 'var(--vharanani-burgundy)' }} />
              </span>
            ))}
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="animate-ticker-right flex whitespace-nowrap py-[6px]">
            {[...TICKER_ROW_2, ...TICKER_ROW_2].map((item, i) => (
              <span key={`t2-${i}`} className="flex items-center gap-5 px-5 flex-shrink-0">
                <span className="font-bebas-neue typo-label tracking-[0.15em] uppercase whitespace-nowrap" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  {item}
                </span>
                <span className="w-[3px] h-[3px] flex-shrink-0 opacity-40" style={{ backgroundColor: 'var(--vharanani-burgundy)' }} />
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── BOTTOM ACCENT LINE ── */}
      <div className="absolute bottom-0 left-0 right-0 h-[4px] z-30" style={{ background: 'var(--vharanani-burgundy)' }} />
    </section>
  );
}
