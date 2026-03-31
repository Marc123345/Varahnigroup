import { useState, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HardHat, Landmark, Cpu, Heart } from 'lucide-react';
import { ImageWithFallback } from '../../ui/ImageWithFallback';

const PILLARS = [
  {
    num: '01',
    Icon: HardHat,
    title: 'Infrastructure\nDevelopment',
    shortTitle: 'Infrastructure',
    description:
      'Building roads, bridges, clinics, schools, and essential services that support national growth and community development.',
    capabilities: ['Roads & Highways', 'Bridges & Culverts', 'Public Facilities', 'Water Infrastructure'],
    metric: { value: '200+', label: 'Projects Delivered' },
    image:
      'https://vharananiproperties.co.za/wp-content/uploads/2020/08/rsz_7-tshwane-brt-road-construction.jpg',
  },
  {
    num: '02',
    Icon: Landmark,
    title: 'Asset Ownership\n& Investment',
    shortTitle: 'Asset Ownership',
    description:
      'Developing and managing long-term property assets that generate sustainable economic value.',
    capabilities: ['Commercial Property', 'Residential Estates', 'Industrial Assets', 'Land Banking'],
    metric: { value: 'R5B+', label: 'Asset Portfolio' },
    image:
      'https://vharananiproperties.co.za/wp-content/uploads/2020/08/rsz_3-the-mbilu.jpg',
  },
  {
    num: '03',
    Icon: Cpu,
    title: 'Innovation\n& Expansion',
    shortTitle: 'Innovation',
    description:
      'Exploring growth opportunities across technology, aviation, and resource-driven industries.',
    capabilities: ['Digital Solutions', 'Aviation Services', 'Resource Management', 'Smart Infrastructure'],
    metric: { value: '4', label: 'Emerging Sectors' },
    image:
      'https://vharananiproperties.co.za/wp-content/uploads/2018/01/Interior4.jpg',
  },
  {
    num: '04',
    Icon: Heart,
    title: 'Social\nImpact',
    shortTitle: 'Social Impact',
    description:
      'Investing in people, education, and entrepreneurial development to ensure inclusive and sustainable progress.',
    capabilities: ['Education Bursaries', 'Skills Training', 'Housing Programmes', 'Health Initiatives'],
    metric: { value: '50K+', label: 'Lives Impacted' },
    image:
      'https://vharananiproperties.co.za/wp-content/uploads/2020/08/rsz_1-belle-ombre-1.jpg',
  },
];

const EASE = [0.76, 0, 0.24, 1] as const;

/* ─────────────────────────────────────────────────── */
/* Main export                                         */
/* ─────────────────────────────────────────────────── */
export function GroupWireframe_StrategicPillars(): ReactNode {
  const [active, setActive] = useState('01');

  return (
    <div style={{ background: '#040404', overflow: 'hidden' }}>

      {/* ── HEADER ── */}
      <div
        className="relative overflow-hidden"
        style={{ borderBottom: '1px solid rgba(129,41,33,0.15)' }}
      >
        {/* Ghost watermark */}
        <div
          className="absolute right-0 bottom-0 pointer-events-none select-none overflow-hidden leading-none"
          aria-hidden="true"
        >
          <span
            className="font-bebas-neue"
            style={{ fontSize: 'clamp(80px, 14vw, 200px)', color: 'rgba(255,255,255,0.016)' }}
          >
            STRATEGY
          </span>
        </div>

        <div className="relative max-w-screen-xl mx-auto px-4 sm:px-8 md:px-16 py-14 md:py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">

            <div>
              <motion.div
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-4 mb-8"
              >
                <div style={{ width: 32, height: 2, background: 'var(--vharanani-burgundy)', flexShrink: 0 }} />
                <span
                  className="typo-caption font-inter tracking-[0.28em] uppercase"
                  style={{ color: 'var(--vharanani-burgundy)' }}
                >
                  Strategy
                </span>
              </motion.div>

              <div className="overflow-hidden">
                <motion.h2
                  initial={{ y: '100%' }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                  className="font-bebas-neue uppercase text-white typo-headline-big"
                  style={{ letterSpacing: '0.02em' }}
                >
                  Our Strategic<br />
                  <span style={{ color: 'var(--vharanani-burgundy)' }}>Pillars</span>
                </motion.h2>
              </div>
            </div>

            <div className="flex flex-col justify-end gap-6">
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.38, duration: 0.7 }}
                className="typo-copy font-inter"
                style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 400, lineHeight: 1.78 }}
              >
                Four interconnected pillars defining our growth trajectory — each reinforcing
                the others to build a resilient, diversified platform.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-2"
                style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 20 }}
              >
                {PILLARS.map((p, i) => (
                  <button
                    key={p.num}
                    onClick={() => setActive(p.num)}
                    className="font-bebas-neue tracking-[0.15em] uppercase transition-all duration-300"
                    style={{
                      fontSize: 11,
                      padding: '6px 14px',
                      border: '1px solid',
                      borderColor: active === p.num ? 'var(--vharanani-burgundy)' : 'rgba(255,255,255,0.1)',
                      color: active === p.num ? 'var(--vharanani-burgundy)' : 'rgba(255,255,255,0.3)',
                      background: active === p.num ? 'rgba(129,41,33,0.1)' : 'transparent',
                      cursor: 'pointer',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </button>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* ── HORIZONTAL ACCORDION — desktop ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="hidden lg:flex"
        style={{ height: '78vh', minHeight: 560, maxHeight: 780 }}
      >
        {PILLARS.map((pillar) => {
          const isActive = active === pillar.num;
          const Icon = pillar.Icon;

          return (
            <motion.div
              key={pillar.num}
              onClick={() => setActive(pillar.num)}
              animate={{ width: isActive ? '52%' : '16%' }}
              transition={{ duration: 0.75, ease: EASE }}
              style={{
                flexShrink: 0,
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                borderRight: '1px solid rgba(255,255,255,0.04)',
              }}
            >
              {/* Background image */}
              <div className="absolute inset-0">
                <ImageWithFallback
                  src={pillar.image}
                  alt={pillar.shortTitle}
                  className="w-full h-full object-cover"
                  style={{ transform: 'scale(1.04)', transition: 'transform 0.8s ease' }}
                />
                <motion.div
                  className="absolute inset-0"
                  animate={{ background: isActive ? 'rgba(4,4,4,0.55)' : 'rgba(4,4,4,0.82)' }}
                  transition={{ duration: 0.6 }}
                />
              </div>

              {/* Burgundy left accent — active only */}
              <motion.div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: 3,
                  background: 'var(--vharanani-burgundy)',
                  transformOrigin: 'bottom',
                }}
                animate={{ scaleY: isActive ? 1 : 0 }}
                transition={{ duration: 0.5, ease: EASE }}
              />

              {/* Ghost number */}
              <div
                className="absolute top-0 right-0 pointer-events-none select-none overflow-hidden"
                aria-hidden="true"
              >
                <span
                  className="font-bebas-neue"
                  style={{
                    fontSize: 'clamp(120px, 14vw, 220px)',
                    lineHeight: 0.82,
                    color: isActive ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.025)',
                    transition: 'color 0.5s',
                  }}
                >
                  {pillar.num}
                </span>
              </div>

              {/* ── COLLAPSED LABEL ── */}
              <AnimatePresence>
                {!isActive && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="absolute inset-0 flex flex-col items-center justify-center gap-5"
                  >
                    <span
                      className="font-bebas-neue"
                      style={{
                        fontSize: 11,
                        letterSpacing: '0.35em',
                        color: 'var(--vharanani-burgundy)',
                      }}
                    >
                      {pillar.num}
                    </span>
                    <Icon size={15} style={{ color: 'rgba(255,255,255,0.22)' }} />
                    <span
                      className="font-bebas-neue uppercase text-white"
                      style={{
                        writingMode: 'vertical-rl',
                        transform: 'rotate(180deg)',
                        fontSize: 15,
                        letterSpacing: '0.18em',
                        color: 'rgba(255,255,255,0.55)',
                        lineHeight: 1,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {pillar.shortTitle}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* ── EXPANDED CONTENT ── */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.38, delay: 0.28 }}
                    className="absolute inset-0 flex flex-col justify-end"
                    style={{ padding: '44px 48px' }}
                  >
                    {/* Eyebrow */}
                    <motion.div
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.35, duration: 0.45 }}
                      className="flex items-center gap-3 mb-5"
                    >
                      <div style={{ width: 20, height: 1, background: 'var(--vharanani-burgundy)' }} />
                      <span
                        className="typo-caption font-inter tracking-[0.3em] uppercase"
                        style={{ color: 'var(--vharanani-burgundy)' }}
                      >
                        Pillar {pillar.num}
                      </span>
                    </motion.div>

                    {/* Title */}
                    <div className="overflow-hidden mb-3">
                      <motion.h3
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.38, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                        className="font-bebas-neue uppercase text-white"
                        style={{
                          fontSize: 'clamp(36px, 4.5vw, 58px)',
                          lineHeight: 0.95,
                          whiteSpace: 'pre-line',
                        }}
                      >
                        {pillar.title}
                      </motion.h3>
                    </div>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                      className="typo-copy-small font-inter mb-7"
                      style={{ color: 'rgba(255,255,255,0.75)', maxWidth: 380, lineHeight: 1.72 }}
                    >
                      {pillar.description}
                    </motion.p>

                    {/* Capabilities */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.58, duration: 0.4 }}
                      className="flex flex-wrap gap-2 mb-8"
                    >
                      {pillar.capabilities.map((cap, ci) => (
                        <motion.span
                          key={cap}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.62 + ci * 0.07 }}
                          className="typo-label font-inter tracking-[0.12em] uppercase px-3 py-1.5"
                          style={{
                            border: '1px solid rgba(129,41,33,0.35)',
                            color: 'rgba(255,255,255,0.45)',
                            background: 'rgba(129,41,33,0.07)',
                          }}
                        >
                          {cap}
                        </motion.span>
                      ))}
                    </motion.div>

                    {/* Metric */}
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.72, duration: 0.4 }}
                      style={{
                        borderTop: '1px solid rgba(255,255,255,0.1)',
                        paddingTop: 20,
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: 12,
                      }}
                    >
                      <span
                        className="font-bebas-neue text-white"
                        style={{ fontSize: 52, lineHeight: 1 }}
                      >
                        {pillar.metric.value}
                      </span>
                      <span
                        className="typo-caption font-inter tracking-[0.2em] uppercase"
                        style={{ color: 'rgba(255,255,255,0.3)' }}
                      >
                        {pillar.metric.label}
                      </span>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>

      {/* ── MOBILE ACCORDION ── */}
      <div className="lg:hidden">
        {PILLARS.map((pillar, i) => {
          const isActive = active === pillar.num;
          const Icon = pillar.Icon;

          return (
            <div
              key={pillar.num}
              style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
            >
              {/* Header row */}
              <button
                onClick={() => setActive(isActive ? '' : pillar.num)}
                className="w-full flex items-center gap-4 px-4 sm:px-6 py-4 sm:py-5 text-left min-h-[56px]"
                style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
              >
                <span
                  className="font-bebas-neue"
                  style={{ fontSize: 13, letterSpacing: '0.3em', color: 'var(--vharanani-burgundy)', flexShrink: 0 }}
                >
                  {pillar.num}
                </span>
                <motion.div
                  style={{ width: 1, height: 28, background: 'rgba(255,255,255,0.08)', flexShrink: 0 }}
                />
                <span
                  className="font-bebas-neue uppercase text-white flex-1"
                  style={{ fontSize: 20, letterSpacing: '0.04em' }}
                >
                  {pillar.shortTitle}
                </span>
                <Icon size={14} style={{ color: isActive ? 'var(--vharanani-burgundy)' : 'rgba(255,255,255,0.25)', flexShrink: 0 }} />
                <motion.div
                  animate={{ rotate: isActive ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ fontSize: 18, color: 'rgba(255,255,255,0.2)', flexShrink: 0, lineHeight: 1 }}
                >
                  +
                </motion.div>
              </button>

              {/* Expandable content */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.45, ease: EASE }}
                    style={{ overflow: 'hidden' }}
                  >
                    {/* Image */}
                    <div style={{ height: 220, position: 'relative', overflow: 'hidden' }}>
                      <ImageWithFallback
                        src={pillar.image}
                        alt={pillar.shortTitle}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0" style={{ background: 'rgba(4,4,4,0.45)' }} />
                    </div>

                    {/* Content */}
                    <div className="px-4 sm:px-6 py-7 sm:py-8" style={{ background: '#080808' }}>
                      <p
                        className="typo-copy-small font-inter mb-6"
                        style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.72 }}
                      >
                        {pillar.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-7">
                        {pillar.capabilities.map((cap) => (
                          <span
                            key={cap}
                            className="typo-label font-inter tracking-[0.12em] uppercase px-3 py-1.5"
                            style={{
                              border: '1px solid rgba(129,41,33,0.3)',
                              color: 'rgba(255,255,255,0.4)',
                            }}
                          >
                            {cap}
                          </span>
                        ))}
                      </div>

                      <div
                        style={{
                          borderTop: '1px solid rgba(255,255,255,0.07)',
                          paddingTop: 16,
                          display: 'flex',
                          alignItems: 'baseline',
                          gap: 10,
                        }}
                      >
                        <span
                          className="font-bebas-neue text-white"
                          style={{ fontSize: 44, lineHeight: 1 }}
                        >
                          {pillar.metric.value}
                        </span>
                        <span
                          className="typo-caption font-inter tracking-[0.18em] uppercase"
                          style={{ color: 'rgba(255,255,255,0.28)' }}
                        >
                          {pillar.metric.label}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* ── STATS BAND ── */}
      <motion.div
        className="relative overflow-hidden"
        style={{ background: 'var(--vharanani-burgundy)' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        {/* Ghost watermark */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          aria-hidden="true"
        >
          <span
            className="font-bebas-neue uppercase whitespace-nowrap"
            style={{ fontSize: 'clamp(50px, 12vw, 160px)', color: 'rgba(255,255,255,0.05)', letterSpacing: '0.08em' }}
          >
            PILLARS
          </span>
        </div>

        <div className="relative max-w-screen-xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {PILLARS.map((p, i) => {
              const Icon = p.Icon;
              return (
                <motion.div
                  key={p.num}
                  className="py-8 px-4 sm:px-6 md:px-8 flex flex-col items-center text-center"
                  style={{ borderRight: i < 3 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.09 }}
                >
                  <div
                    className="w-9 h-9 mb-3 flex items-center justify-center"
                    style={{ border: '1px solid rgba(255,255,255,0.3)' }}
                  >
                    <Icon size={15} style={{ color: 'rgba(255,255,255,0.85)' }} />
                  </div>
                  <div
                    className="font-bebas-neue uppercase text-white mb-1"
                    style={{ fontSize: 'clamp(13px, 1.3vw, 16px)', letterSpacing: '0.06em', lineHeight: 1.2 }}
                  >
                    {p.shortTitle}
                  </div>
                  <div
                    className="font-bebas-neue text-white"
                    style={{ fontSize: 'clamp(28px, 3.5vw, 46px)', lineHeight: 1 }}
                  >
                    {p.metric.value}
                  </div>
                  <div
                    className="font-inter typo-meta tracking-[0.14em] uppercase mt-1"
                    style={{ color: 'rgba(255,255,255,0.5)', fontSize: '10px' }}
                  >
                    {p.metric.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>

    </div>
  );
}
