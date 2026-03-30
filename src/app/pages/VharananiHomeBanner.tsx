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
    <section className="relative w-full overflow-hidden" style={{ height: '100vh', minHeight: '640px' }}>

      {/* ── LEFT HALF — DARK BG ── */}
      <div className="absolute inset-0 z-0" style={{ backgroundColor: '#0a0a0a' }}>
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* ── RIGHT HALF — VIDEO ── */}
      <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[50%] z-[1]">
        {/* Diagonal clip — the video is clipped with a slanted left edge */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: 'polygon(12% 0, 100% 0, 100% 100%, 0% 100%)' }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: 'brightness(0.7) contrast(1.1)' }}
          >
            <source src="https://ik.imagekit.io/qcvroy8xpd/WhatsApp%20Video%202026-03-30%20at%2014.08.27.mp4" type="video/mp4" />
          </video>

          {/* Burgundy gradient overlay from left edge */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(90deg, rgba(129,41,33,0.5) 0%, transparent 50%)' }}
          />

          {/* Dark gradient at bottom for depth */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 40%)' }}
          />
        </div>

        {/* Diagonal separator line — a sharp burgundy accent along the clip edge */}
        <div
          className="absolute top-0 bottom-0 hidden lg:block"
          style={{
            left: '11.5%',
            width: '4px',
            background: 'var(--vharanani-burgundy)',
            transform: 'skewX(-3deg)',
            transformOrigin: 'top',
          }}
        />

        {/* Frosted glass accent strip along the diagonal */}
        <div
          className="absolute top-0 bottom-0 hidden lg:block"
          style={{
            left: '10%',
            width: '24px',
            background: 'linear-gradient(180deg, rgba(129,41,33,0.15) 0%, rgba(129,41,33,0.05) 100%)',
            backdropFilter: 'blur(8px)',
            transform: 'skewX(-3deg)',
            transformOrigin: 'top',
          }}
        />
      </div>

      {/* ── CONTENT — LEFT SIDE ── */}
      <div className="relative z-10 h-full flex flex-col justify-center pb-16 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28">
        <div className="max-w-xl lg:max-w-[520px] xl:max-w-xl pt-20 sm:pt-24 lg:pt-28 pb-8">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-[2px] w-10" style={{ background: 'var(--vharanani-burgundy)' }} />
            <span className="typo-caption tracking-[0.28em] uppercase" style={{ color: 'var(--vharanani-burgundy)' }}>
              EST. 2001 &mdash; SOUTH AFRICA
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-bebas-neue uppercase tracking-tight mb-2"
            style={{ fontSize: 'clamp(40px, 7vw, 80px)', lineHeight: '1.05', color: 'white' }}
          >
            Building the
          </motion.h1>

          {/* Scramble line */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="font-bebas-neue uppercase tracking-tight mb-2"
            style={{ fontSize: 'clamp(40px, 7vw, 80px)', lineHeight: '1.05' }}
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
            style={{ fontSize: 'clamp(40px, 7vw, 80px)', lineHeight: '1.05', color: 'white' }}
          >
            of Africa's Future
          </motion.h2>

          {/* Body copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="font-inter typo-copy mb-10"
            style={{ color: 'rgba(255,255,255,0.6)' }}
          >
            Vharanani Group is a wholly Black-owned investment holding company
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
            <button
              onClick={onExplorePortfolio}
              className="group flex items-center gap-3 px-7 py-4 transition-all duration-300 hover:gap-4"
              style={{ background: 'var(--vharanani-burgundy)' }}
            >
              <span className="font-bebas-neue typo-headline-small tracking-wider uppercase text-white">
                Explore Our Portfolio
              </span>
              <ArrowRight size={16} className="text-white transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              onClick={onAboutGroup}
              className="group flex items-center gap-3 px-7 py-4 transition-all duration-300"
              style={{ border: '2px solid rgba(255,255,255,0.25)', background: 'transparent' }}
            >
              <span className="font-bebas-neue typo-headline-small tracking-wider uppercase text-white">
                About the Group
              </span>
            </button>
          </motion.div>

          {/* Stats Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-12 flex items-center"
            style={{ border: '1px solid rgba(255,255,255,0.08)' }}
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
          </motion.div>
        </div>
      </div>

      {/* ── SCROLL INDICATOR ── */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        onClick={scrollToCube}
        className="absolute bottom-14 left-8 sm:left-16 z-30 flex flex-col items-center gap-1 group"
        aria-label="Scroll to portfolio"
      >
        <span className="font-inter typo-meta tracking-[0.2em] uppercase" style={{ color: 'rgba(255,255,255,0.5)' }}>
          SCROLL
        </span>
        <div className="w-[1px] h-6" style={{ background: 'rgba(255,255,255,0.15)' }} />
        <ChevronDown size={14} className="animate-bounce" style={{ color: 'var(--vharanani-burgundy)' }} />
      </motion.button>

      {/* ── TICKER STRIPS ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="absolute bottom-[4px] left-0 right-0 z-20 overflow-hidden"
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
      <div className="absolute bottom-0 left-0 right-0 h-[4px]" style={{ background: 'var(--vharanani-burgundy)' }} />
    </section>
  );
}
