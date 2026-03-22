import { useState, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from '../../ui/ImageWithFallback';
import { AnimatedCounter, SectionWrapper } from '../shared';

const EXEC_MILESTONES = [
  { year: '2001', event: 'Founded as a construction enterprise in Limpopo', detail: 'Established with a vision to build Africa\'s infrastructure from the ground up. Early projects included roads, schools and community facilities across Limpopo province.' },
  { year: '2008', event: 'Achieved CIDB Grade 9 — the highest grading in SA', detail: 'The Construction Industry Development Board\'s highest contractor rating, unlocking large-scale government and private sector contracts worth billions of rand.' },
  { year: '2015', event: 'Launched the David Mabilu Foundation for social impact', detail: 'Formalised the Group\'s commitment to community upliftment through education bursaries, housing access programmes and skills development initiatives.' },
  { year: '2020', event: 'Expanded into property development and strategic investments', detail: 'Diversified beyond construction into residential estates, mixed-use precincts, and strategic investment vehicles to build long-term asset value.' },
];

const EXEC_STATS = [
  { value: 20, suffix: '+', label: 'Years of Impact', icon: '⬡' },
  { value: 4, suffix: '', label: 'Operating Divisions', icon: '⬡' },
  { value: 500, suffix: '+', label: 'Projects Delivered', icon: '⬡' },
  { value: 5, suffix: '', label: 'Provinces Reached', icon: '⬡' },
];

const EXEC_IMAGES = {
  hero: 'https://ik.imagekit.io/qcvroy8xpd/Photo%201.png',
  mosaic1: 'https://ik.imagekit.io/qcvroy8xpd/the%20.png',
  mosaic2: 'https://ik.imagekit.io/qcvroy8xpd/Gemini_Generated_Image_6199jv6199jv6199.png',
  mosaic3: 'https://ik.imagekit.io/qcvroy8xpd/Gemini_Generated_Image_pqwh1pqwh1pqwh1p.png',
};

export function GroupWireframe_ExecutiveSummary(): ReactNode {
  const [activeYear, setActiveYear] = useState('2001');
  const activeMilestone = EXEC_MILESTONES.find(m => m.year === activeYear)!;
  const activeIdx = EXEC_MILESTONES.findIndex(m => m.year === activeYear);

  return (
    <SectionWrapper className="!py-0 !px-0">
      {/* ── MAIN CONTENT GRID ── */}
      <div className="px-6 md:px-12 lg:px-20 py-10 md:py-14" style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
            {/* Left — Large statement */}
            <div className="lg:col-span-5">
              <div className="w-12 h-[3px] mb-8" style={{ background: 'var(--vharanani-burgundy)' }} />
              <blockquote className="typo-subline font-bebas-neue uppercase tracking-wide mb-8" style={{ color: 'var(--vharanani-charcoal)', lineHeight: 1.2 }}>
                A wholly Black-owned investment holding company driving infrastructure, property development, innovation, and social impact across South Africa.
              </blockquote>
              <p className="typo-copy-small font-inter italic pl-5" style={{ borderLeft: '2px solid var(--vharanani-burgundy)', color: 'var(--vharanani-charcoal-60)' }}>
                "We build not just structures, but the architecture of opportunity for generations to come."
              </p>
            </div>

            {/* Right — Narrative + Photo Grid */}
            <div className="lg:col-span-7">
              <p className="typo-copy font-inter mb-6" style={{ color: 'var(--vharanani-charcoal-80)' }}>
                Vharanani Group is an innovation-driven African conglomerate founded and led by David Mabilu. With a diversified portfolio spanning construction, property development, mining, technology, aviation, and philanthropy, the Group is committed to building sustainable enterprises that contribute to economic transformation and long-term infrastructure development.
              </p>
              <p className="typo-copy font-inter mb-8" style={{ color: 'var(--vharanani-charcoal-60)' }}>
                We operate with a clear mandate: to build assets that strengthen communities, enable economic participation, and support Africa's growth trajectory.
              </p>

              {/* Three-image mosaic */}
              <div className="grid grid-cols-12 gap-2 h-[200px]">
                <div className="col-span-7 relative overflow-hidden group">
                  <ImageWithFallback
                    src={EXEC_IMAGES.mosaic1}
                    alt="Vharanani infrastructure"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.65) 100%)' }} />
                  <div className="absolute bottom-3 left-3">
                    <span className="typo-meta tracking-[0.15em] uppercase font-inter text-white/80">Infrastructure</span>
                  </div>
                </div>
                <div className="col-span-5 grid grid-rows-2 gap-2">
                  <div className="relative overflow-hidden group">
                    <ImageWithFallback
                      src={EXEC_IMAGES.mosaic2}
                      alt="Vharanani community"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.6) 100%)' }} />
                    <div className="absolute bottom-2 left-2">
                      <span className="typo-meta tracking-[0.12em] uppercase font-inter text-white/75" style={{ fontSize: '9px' }}>Community</span>
                    </div>
                  </div>
                  <div className="relative overflow-hidden group">
                    <ImageWithFallback
                      src={EXEC_IMAGES.mosaic3}
                      alt="Vharanani team"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.6) 100%)' }} />
                    <div className="absolute bottom-2 left-2">
                      <span className="typo-meta tracking-[0.12em] uppercase font-inter text-white/75" style={{ fontSize: '9px' }}>Our People</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── INTERACTIVE STATS ── */}
      <div style={{ background: '#0a0a0a' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-10 md:py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {EXEC_STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="group relative p-6 md:p-8 text-center cursor-default overflow-hidden"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                style={{ background: 'rgba(255,255,255,0.03)' }}
              >
                {/* Hover glow border */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{ border: '1px solid rgba(129,41,33,0.6)', background: 'rgba(129,41,33,0.05)' }}
                />
                {/* Top accent line — animates in on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-400" style={{ background: 'var(--vharanani-burgundy)' }} />
                {/* Ghost index */}
                <div className="absolute top-3 right-4 font-bebas-neue opacity-[0.06]" style={{ fontSize: '52px', color: 'white', lineHeight: 1 }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="relative">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} color="white" />
                  <div className="typo-caption tracking-[0.18em] uppercase font-inter mt-3" style={{ color: 'rgba(255,255,255,0.45)' }}>
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── INTERACTIVE TIMELINE ── */}
      <div style={{ background: '#111111' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-10 md:py-14">
          {/* Header */}
          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-[2px]" style={{ background: 'var(--vharanani-burgundy)' }} />
            <span className="typo-caption tracking-[0.25em] uppercase font-inter" style={{ color: 'var(--vharanani-burgundy)' }}>
              OUR JOURNEY
            </span>
          </div>

          {/* Year selector tabs */}
          <div className="relative mb-0">
            {/* Progress track */}
            <div className="hidden md:block absolute top-[22px] left-0 right-0 h-[1px]" style={{ background: 'rgba(255,255,255,0.08)' }}>
              <motion.div
                className="absolute inset-y-0 left-0 h-full origin-left"
                style={{ background: 'var(--vharanani-burgundy)' }}
                animate={{ scaleX: (activeIdx + 1) / EXEC_MILESTONES.length }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-0 relative">
              {EXEC_MILESTONES.map((m, i) => {
                const isActive = m.year === activeYear;
                const isPast = i <= activeIdx;
                return (
                  <button
                    key={m.year}
                    onClick={() => setActiveYear(m.year)}
                    className="group text-left md:pr-8 pb-6"
                  >
                    {/* Dot */}
                    <div className="hidden md:flex items-center mb-5">
                      <motion.div
                        className="w-3 h-3 rounded-full flex-shrink-0 relative"
                        animate={{
                          backgroundColor: isActive ? 'var(--vharanani-burgundy)' : isPast ? 'rgba(129,41,33,0.5)' : 'rgba(255,255,255,0.15)',
                          scale: isActive ? 1.4 : 1,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {isActive && (
                          <motion.div
                            className="absolute inset-0 rounded-full"
                            style={{ background: 'var(--vharanani-burgundy)' }}
                            animate={{ scale: [1, 2.2, 1], opacity: [0.6, 0, 0.6] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        )}
                      </motion.div>
                    </div>
                    {/* Year */}
                    <motion.div
                      className="typo-headline-big font-bebas-neue mb-1 transition-colors duration-300"
                      animate={{ color: isActive ? 'white' : 'rgba(255,255,255,0.3)' }}
                    >
                      {m.year}
                    </motion.div>
                    {/* Short label */}
                    <motion.p
                      className="typo-meta font-inter leading-snug"
                      animate={{ color: isActive ? 'rgba(255,255,255,0.65)' : 'rgba(255,255,255,0.2)' }}
                      transition={{ duration: 0.3 }}
                    >
                      {m.event}
                    </motion.p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Expanded detail panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeYear}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="mt-2 p-6 md:p-8"
              style={{ background: 'rgba(129,41,33,0.08)', borderLeft: '3px solid var(--vharanani-burgundy)' }}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 hidden sm:block">
                  <div className="typo-header font-bebas-neue" style={{ color: 'var(--vharanani-burgundy)', lineHeight: 1, fontSize: 'clamp(48px, 6vw, 72px)' }}>
                    {activeYear}
                  </div>
                </div>
                <div>
                  <div className="typo-headline-small font-bebas-neue uppercase tracking-wide mb-3 text-white">
                    {activeMilestone.event}
                  </div>
                  <p className="typo-copy font-inter" style={{ color: 'rgba(255,255,255,0.65)' }}>
                    {activeMilestone.detail}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </SectionWrapper>
  );
}
