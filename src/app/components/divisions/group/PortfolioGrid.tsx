import { useState, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Building2, Home, Landmark, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../../ui/ImageWithFallback';

const ITEMS = [
  {
    id: 'properties',
    num: '01',
    tag: 'Construction & Infrastructure',
    icon: Building2,
    title: 'Vharanani Properties',
    description: 'Delivering large-scale civil engineering and infrastructure projects that improve quality of life and restore dignity to communities.',
    stats: [{ value: '200+', label: 'Projects' }, { value: 'Grade 9', label: 'CIDB' }],
    capabilities: ['Roads & Highways', 'Water & Sanitation', 'Public Buildings'],
    image: 'https://vharananiproperties.co.za/wp-content/uploads/2020/08/rsz_dji_0020.jpg',
  },
  {
    id: 'dmft',
    num: '02',
    tag: 'Property Development & Investments',
    icon: Home,
    title: 'DMFT Property Developers',
    description: 'Managing strategic real estate assets and long-term property investments across commercial and residential sectors.',
    stats: [{ value: '15+', label: 'Developments' }, { value: 'R2B+', label: 'Portfolio' }],
    capabilities: ['Residential Estates', 'Mixed-Use Precincts'],
    image: 'https://vharananiproperties.co.za/wp-content/uploads/2021/06/Mamelodi-Ext-5-4.jpg',
  },
  {
    id: 'foundation',
    num: '03',
    tag: 'Social Impact',
    icon: Landmark,
    title: 'The David Mabilu Foundation',
    description: 'Advancing education, housing access, entrepreneurship, and community upliftment initiatives.',
    stats: [{ value: '34', label: 'Scholarships' }, { value: '5+', label: 'Provinces' }],
    capabilities: ['Education', 'Housing', 'Entrepreneurship', 'Community Upliftment'],
    image: 'https://ik.imagekit.io/qcvroy8xpd/A%20community%20health%20worker%20conducts%20a%20health%20education%20session%20outdoors%20in%20a%20rural%20village.png?updatedAt=1764674101441',
  },
];

const METRICS = [
  { value: 'R5B+', label: 'Portfolio Value' },
  { value: '20+',  label: 'Years Active'   },
  { value: '3',    label: 'Divisions'      },
  { value: '9',    label: 'Provinces'      },
];

const clipReveal = (delay = 0) => ({
  initial: { clipPath: 'inset(0 0 100% 0)' },
  whileInView: { clipPath: 'inset(0 0 0% 0)' },
  viewport: { once: true },
  transition: { duration: 0.9, delay, ease: [0.76, 0, 0.24, 1] },
});

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export function GroupWireframe_PortfolioGrid(): ReactNode {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div style={{ background: '#ffffff', overflow: 'hidden' }}>

      {/* ══════ HEADER ══════ */}
      <div className="px-6 md:px-12 lg:px-20 pt-14 pb-10 md:pt-20 md:pb-14">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">

            <div className="lg:col-span-8">
              <motion.div className="flex items-center gap-3 mb-6" {...fadeUp(0)}>
                <div className="h-[2px] w-8" style={{ background: 'var(--vharanani-burgundy)' }} />
                <span className="font-inter typo-caption tracking-[0.28em] uppercase" style={{ color: 'var(--vharanani-burgundy)' }}>
                  Holdings
                </span>
              </motion.div>

              {/* Ghost + solid headline layered */}
              <div className="relative overflow-hidden">
                <motion.h2
                  className="typo-headline-big font-bebas-neue uppercase tracking-wide"
                  style={{ color: 'var(--vharanani-charcoal)' }}
                  {...clipReveal(0.06)}
                >
                  Our Portfolio
                </motion.h2>
              </div>
            </div>

            <motion.p
              className="lg:col-span-4 font-inter leading-relaxed"
              style={{ fontSize: 'clamp(13px, 1.1vw, 15px)', color: 'rgba(0,0,0,0.5)' }}
              {...fadeUp(0.2)}
            >
              Vharanani Group operates through a focused portfolio of subsidiary
              companies, each delivering specialized expertise within its sector.
            </motion.p>

          </div>
        </div>
      </div>

      {/* ══════ LARGE CARD — Vharanani Properties ══════ */}
      <div className="px-6 md:px-12 lg:px-20 pb-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="relative overflow-hidden"
            style={{
              border: '1px solid rgba(0,0,0,0.08)',
              outline: hovered === 'properties' ? '2px solid var(--vharanani-burgundy)' : '2px solid transparent',
              transition: 'outline 0.3s ease',
            }}
            onHoverStart={() => setHovered('properties')}
            onHoverEnd={() => setHovered(null)}
            {...fadeUp(0.1)}
          >
            {/* Burgundy top accent */}
            <motion.div
              className="absolute top-0 left-0 right-0 h-[4px] z-10"
              style={{ background: 'var(--vharanani-burgundy)', transformOrigin: 'left' }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12">

              {/* Image — left 7 cols */}
              <motion.div
                className="lg:col-span-7 relative overflow-hidden"
                style={{ minHeight: 'clamp(260px, 38vh, 480px)' }}
                {...clipReveal(0.12)}
              >
                <motion.div
                  className="absolute inset-0"
                  animate={{ scale: hovered === 'properties' ? 1.05 : 1 }}
                  transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
                >
                  <ImageWithFallback
                    src={ITEMS[0].image}
                    alt={ITEMS[0].title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                {/* Ghost number */}
                <div className="absolute bottom-4 right-5 font-bebas-neue select-none pointer-events-none"
                  style={{ fontSize: '100px', lineHeight: 1, color: 'rgba(255,255,255,0.12)' }}>
                  01
                </div>
              </motion.div>

              {/* Content — right 5 cols */}
              <div className="lg:col-span-5 flex flex-col justify-between p-8 md:p-10" style={{ background: '#ffffff' }}>
                <div>
                  {/* Tag + icon */}
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-7 h-7 flex items-center justify-center flex-shrink-0"
                      style={{ background: 'var(--vharanani-burgundy)' }}>
                      <Building2 size={14} color="white" />
                    </div>
                    <span className="font-inter typo-meta tracking-[0.18em] uppercase"
                      style={{ color: 'var(--vharanani-burgundy)' }}>
                      {ITEMS[0].tag}
                    </span>
                  </div>

                  <motion.h3
                    className="font-bebas-neue uppercase mb-4"
                    style={{ fontSize: 'clamp(28px, 3vw, 40px)', lineHeight: 1.05, color: '#111111', letterSpacing: '0.02em' }}
                    {...fadeUp(0.2)}
                  >
                    {ITEMS[0].title}
                  </motion.h3>

                  <motion.p className="font-inter leading-relaxed mb-6"
                    style={{ fontSize: 'clamp(13px, 1.1vw, 15px)', color: 'rgba(0,0,0,0.6)' }}
                    {...fadeUp(0.28)}>
                    {ITEMS[0].description}
                  </motion.p>

                  {/* Capabilities */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {ITEMS[0].capabilities.map((cap) => (
                      <span key={cap} className="font-inter typo-meta px-3 py-1 tracking-[0.1em] uppercase"
                        style={{ border: '1px solid rgba(129,41,33,0.3)', color: 'var(--vharanani-burgundy)', fontSize: '11px' }}>
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-2 gap-0 mt-auto"
                  style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }}>
                  {ITEMS[0].stats.map((s, i) => (
                    <div key={s.label} className="py-4 px-2 text-center"
                      style={{ borderRight: i === 0 ? '1px solid rgba(0,0,0,0.08)' : 'none' }}>
                      <div className="font-bebas-neue" style={{ fontSize: 'clamp(24px, 2.5vw, 34px)', color: 'var(--vharanani-burgundy)', lineHeight: 1 }}>
                        {s.value}
                      </div>
                      <div className="font-inter typo-meta tracking-[0.12em] uppercase mt-1" style={{ color: 'rgba(0,0,0,0.45)' }}>
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>

      {/* ══════ TWO MEDIUM CARDS ══════ */}
      <div className="px-6 md:px-12 lg:px-20 pb-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4">
          {ITEMS.slice(1).map((item, idx) => {
            const Icon = item.icon;
            const delay = 0.1 + idx * 0.1;
            return (
              <motion.div
                key={item.id}
                className="relative overflow-hidden flex flex-col"
                style={{
                  border: '1px solid rgba(0,0,0,0.08)',
                  outline: hovered === item.id ? '2px solid var(--vharanani-burgundy)' : '2px solid transparent',
                  transition: 'outline 0.3s ease',
                }}
                onHoverStart={() => setHovered(item.id)}
                onHoverEnd={() => setHovered(null)}
                {...fadeUp(delay)}
              >
                {/* Burgundy top accent */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-[4px] z-10"
                  style={{ background: 'var(--vharanani-burgundy)', transformOrigin: 'left' }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: delay + 0.2, ease: [0.76, 0, 0.24, 1] }}
                />

                {/* Image */}
                <motion.div
                  className="relative overflow-hidden flex-shrink-0"
                  style={{ height: 'clamp(180px, 24vh, 280px)' }}
                  {...clipReveal(delay + 0.05)}
                >
                  <motion.div
                    className="absolute inset-0"
                    animate={{ scale: hovered === item.id ? 1.06 : 1 }}
                    transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
                  >
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  {/* Ghost number */}
                  <div className="absolute bottom-3 right-4 font-bebas-neue select-none pointer-events-none"
                    style={{ fontSize: '72px', lineHeight: 1, color: 'rgba(255,255,255,0.14)' }}>
                    {item.num}
                  </div>
                </motion.div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6 md:p-8" style={{ background: '#ffffff' }}>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0"
                      style={{ background: 'var(--vharanani-burgundy)' }}>
                      <Icon size={13} color="white" />
                    </div>
                    <span className="font-inter typo-meta tracking-[0.16em] uppercase"
                      style={{ color: 'var(--vharanani-burgundy)', fontSize: '11px' }}>
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="font-bebas-neue uppercase mb-3"
                    style={{ fontSize: 'clamp(24px, 2.4vw, 32px)', lineHeight: 1.05, color: '#111111', letterSpacing: '0.02em' }}>
                    {item.title}
                  </h3>

                  <p className="font-inter leading-relaxed mb-5 flex-1"
                    style={{ fontSize: 'clamp(13px, 1.05vw, 14px)', color: 'rgba(0,0,0,0.58)' }}>
                    {item.description}
                  </p>

                  {/* Capabilities */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {item.capabilities.map((cap) => (
                      <span key={cap} className="font-inter px-2.5 py-1 tracking-[0.1em] uppercase"
                        style={{ border: '1px solid rgba(129,41,33,0.25)', color: 'var(--vharanani-burgundy)', fontSize: '10px' }}>
                        {cap}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-0" style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }}>
                    {item.stats.map((s, i) => (
                      <div key={s.label} className="py-3 px-2 text-center"
                        style={{ borderRight: i === 0 ? '1px solid rgba(0,0,0,0.07)' : 'none' }}>
                        <div className="font-bebas-neue" style={{ fontSize: 'clamp(20px, 2vw, 28px)', color: 'var(--vharanani-burgundy)', lineHeight: 1 }}>
                          {s.value}
                        </div>
                        <div className="font-inter typo-meta tracking-[0.1em] uppercase mt-0.5" style={{ color: 'rgba(0,0,0,0.4)', fontSize: '10px' }}>
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ══════ METRICS BAND — burgundy ══════ */}
      <motion.div
        className="relative mt-10 overflow-hidden"
        style={{ background: 'var(--vharanani-burgundy)' }}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Ghost watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden" aria-hidden>
          <span className="font-bebas-neue uppercase whitespace-nowrap"
            style={{ fontSize: 'clamp(60px, 14vw, 180px)', color: 'rgba(255,255,255,0.05)', letterSpacing: '0.06em', lineHeight: 1 }}>
            PORTFOLIO
          </span>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x" style={{ '--divide-color': 'rgba(255,255,255,0.15)' } as React.CSSProperties}>
            {METRICS.map((m, i) => (
              <motion.div
                key={m.label}
                className="py-10 px-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                style={{ borderRight: i < 3 ? '1px solid rgba(255,255,255,0.15)' : 'none' }}
              >
                <div className="font-bebas-neue" style={{ fontSize: 'clamp(36px, 5vw, 60px)', color: '#ffffff', lineHeight: 1 }}>
                  {m.value}
                </div>
                <div className="font-inter typo-meta tracking-[0.18em] uppercase mt-2" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  {m.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

    </div>
  );
}
