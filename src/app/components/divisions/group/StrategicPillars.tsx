import { useState, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HardHat, Landmark, Cpu, Heart, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../../ui/ImageWithFallback';

const PILLARS = [
  {
    num: '01',
    icon: HardHat,
    title: 'Infrastructure Development',
    description: 'Building roads, bridges, clinics, schools, and essential services that support national growth and community development.',
    capabilities: ['Roads & Highways', 'Bridges & Culverts', 'Public Facilities', 'Water Infrastructure'],
    metric: { value: '200+', label: 'Projects Delivered' },
    image: 'https://images.unsplash.com/photo-1750580037263-1b012684fb44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdod2F5JTIwYnJpZGdlJTIwY29uc3RydWN0aW9uJTIwU291dGglMjBBZnJpY2ElMjBpbmZyYXN0cnVjdHVyZXxlbnwxfHx8fDE3NzM3NDg3NTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    num: '02',
    icon: Landmark,
    title: 'Asset Ownership & Investment',
    description: 'Developing and managing long-term property assets that generate sustainable economic value.',
    capabilities: ['Commercial Property', 'Residential Estates', 'Industrial Assets', 'Land Banking'],
    metric: { value: 'R5B+', label: 'Asset Portfolio' },
    image: 'https://images.unsplash.com/photo-1769697694222-016642c08125?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb21tZXJjaWFsJTIwcHJvcGVydHklMjBpbnZlc3RtZW50JTIwcmVhbCUyMGVzdGF0ZXxlbnwxfHx8fDE3NzM3NDg3NTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    num: '03',
    icon: Cpu,
    title: 'Innovation & Expansion',
    description: 'Exploring growth opportunities across technology, aviation, and resource-driven industries.',
    capabilities: ['Digital Solutions', 'Aviation Services', 'Resource Management', 'Smart Infrastructure'],
    metric: { value: '4', label: 'Emerging Sectors' },
    image: 'https://images.unsplash.com/photo-1759836096317-e746643cc277?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbiUyMGRpZ2l0YWwlMjB0cmFuc2Zvcm1hdGlvbiUyMHNlcnZlcnxlbnwxfHx8fDE3NzM3NDg3NTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    num: '04',
    icon: Heart,
    title: 'Social Impact',
    description: 'Investing in people, education, and entrepreneurial development to ensure inclusive and sustainable progress.',
    capabilities: ['Education Bursaries', 'Skills Training', 'Housing Programmes', 'Health Initiatives'],
    metric: { value: '50K+', label: 'Lives Impacted' },
    image: 'https://images.unsplash.com/photo-1761039808115-77b271985e47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwY29tbXVuaXR5JTIwZW1wb3dlcm1lbnQlMjBzb2NpYWwlMjB1cGxpZnRtZW50JTIweW91dGh8ZW58MXx8fHwxNzczNzQ4NzU0fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function GroupWireframe_StrategicPillars(): ReactNode {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div style={{ background: '#ffffff', overflow: 'hidden' }}>

      {/* ══════ HEADER ══════ */}
      <div className="px-6 md:px-12 lg:px-20 pt-14 pb-12 md:pt-20 md:pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">

            <div className="lg:col-span-8">
              <motion.div
                className="flex items-center gap-3 mb-6"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="h-[2px] w-8" style={{ background: 'var(--vharanani-burgundy)' }} />
                <span className="font-inter typo-caption tracking-[0.28em] uppercase" style={{ color: 'var(--vharanani-burgundy)' }}>
                  Strategy
                </span>
              </motion.div>

              <div className="overflow-hidden">
                <motion.h2
                  className="typo-headline-big font-bebas-neue uppercase tracking-wide"
                  style={{ color: 'var(--vharanani-charcoal)' }}
                  initial={{ clipPath: 'inset(0 0 100% 0)' }}
                  whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.06, ease: [0.76, 0, 0.24, 1] }}
                >
                  Our Strategic<br />
                  <span style={{ color: 'var(--vharanani-burgundy)' }}>Pillars</span>
                </motion.h2>
              </div>
            </div>

            <motion.p
              className="lg:col-span-4 font-inter leading-relaxed"
              style={{ fontSize: 'clamp(13px, 1.1vw, 15px)', color: 'rgba(0,0,0,0.5)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              Four interconnected pillars defining our growth trajectory — each reinforcing the others to build a resilient, diversified platform.
            </motion.p>

          </div>
        </div>
      </div>

      {/* ══════ PILLAR ROWS ══════ */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pb-0">
        {PILLARS.map((pillar, i) => {
          const Icon = pillar.icon;
          const isActive = active === pillar.num;
          return (
            <motion.div
              key={pillar.num}
              className="relative overflow-hidden cursor-pointer"
              style={{
                borderTop: '1px solid rgba(0,0,0,0.09)',
                borderBottom: i === PILLARS.length - 1 ? '1px solid rgba(0,0,0,0.09)' : 'none',
              }}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              onHoverStart={() => setActive(pillar.num)}
              onHoverEnd={() => setActive(null)}
            >
              {/* Burgundy left bar — slides in on hover */}
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-[4px]"
                style={{ background: 'var(--vharanani-burgundy)', transformOrigin: 'top' }}
                animate={{ scaleY: isActive ? 1 : 0 }}
                transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
              />

              {/* Background tint on hover */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{ backgroundColor: isActive ? 'rgba(129,41,33,0.025)' : 'rgba(0,0,0,0)' }}
                transition={{ duration: 0.3 }}
              />

              <div className="relative grid grid-cols-12 gap-6 md:gap-8 items-center py-7 md:py-9 pl-5">

                {/* Number */}
                <div className="col-span-2 md:col-span-1">
                  <motion.div
                    className="font-bebas-neue"
                    style={{ fontSize: 'clamp(28px, 3vw, 42px)', lineHeight: 1, letterSpacing: '0.04em' }}
                    animate={{ color: isActive ? 'var(--vharanani-burgundy)' : 'rgba(0,0,0,0.18)' }}
                    transition={{ duration: 0.25 }}
                  >
                    {pillar.num}
                  </motion.div>
                </div>

                {/* Icon */}
                <div className="hidden md:flex col-span-1 justify-center">
                  <motion.div
                    className="w-9 h-9 flex items-center justify-center flex-shrink-0"
                    animate={{
                      backgroundColor: isActive ? 'var(--vharanani-burgundy)' : 'transparent',
                      borderColor: isActive ? 'var(--vharanani-burgundy)' : 'rgba(0,0,0,0.2)',
                    }}
                    transition={{ duration: 0.25 }}
                    style={{ border: '1.5px solid rgba(0,0,0,0.2)' }}
                  >
                    <motion.div
                      animate={{ color: isActive ? '#ffffff' : 'rgba(0,0,0,0.45)' }}
                      transition={{ duration: 0.25 }}
                    >
                      <Icon size={16} />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Title + description */}
                <div className="col-span-10 md:col-span-6 lg:col-span-5">
                  <motion.div
                    className="font-bebas-neue uppercase mb-2"
                    style={{ fontSize: 'clamp(22px, 2.4vw, 32px)', lineHeight: 1.05, letterSpacing: '0.02em' }}
                    animate={{ color: isActive ? '#111111' : '#333333' }}
                    transition={{ duration: 0.25 }}
                  >
                    {pillar.title}
                  </motion.div>
                  <p
                    className="font-inter leading-relaxed"
                    style={{ fontSize: 'clamp(13px, 1.05vw, 14px)', color: 'rgba(0,0,0,0.55)' }}
                  >
                    {pillar.description}
                  </p>
                </div>

                {/* Capabilities — visible on hover (desktop) */}
                <div className="hidden lg:block col-span-3">
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        className="flex flex-wrap gap-1.5"
                        initial={{ opacity: 0, x: 12 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 8 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        {pillar.capabilities.map((cap) => (
                          <span
                            key={cap}
                            className="font-inter px-2.5 py-1 tracking-[0.08em] uppercase"
                            style={{ border: '1px solid rgba(129,41,33,0.3)', color: 'var(--vharanani-burgundy)', fontSize: '10px' }}
                          >
                            {cap}
                          </span>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Metric + arrow */}
                <div className="hidden md:flex col-span-2 items-center justify-end gap-4">
                  <div className="text-right">
                    <motion.div
                      className="font-bebas-neue"
                      style={{ fontSize: 'clamp(22px, 2.5vw, 34px)', lineHeight: 1 }}
                      animate={{ color: isActive ? 'var(--vharanani-burgundy)' : 'rgba(0,0,0,0.22)' }}
                      transition={{ duration: 0.25 }}
                    >
                      {pillar.metric.value}
                    </motion.div>
                    <div
                      className="font-inter typo-meta tracking-[0.1em] uppercase mt-0.5"
                      style={{ color: 'rgba(0,0,0,0.35)', fontSize: '10px' }}
                    >
                      {pillar.metric.label}
                    </div>
                  </div>
                  <motion.div
                    animate={{
                      x: isActive ? 0 : -4,
                      opacity: isActive ? 1 : 0,
                      color: 'var(--vharanani-burgundy)',
                    }}
                    transition={{ duration: 0.25 }}
                  >
                    <ArrowRight size={18} />
                  </motion.div>
                </div>

              </div>

              {/* Image strip — reveals on hover */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    className="overflow-hidden"
                    initial={{ height: 0 }}
                    animate={{ height: 'clamp(160px, 22vh, 260px)' }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                  >
                    <div className="relative w-full h-full" style={{ minHeight: 'clamp(160px, 22vh, 260px)' }}>
                      <ImageWithFallback
                        src={pillar.image}
                        alt={pillar.title}
                        className="w-full h-full object-cover"
                      />
                      <div
                        className="absolute inset-0"
                        style={{ background: 'linear-gradient(90deg, rgba(0,0,0,0.45) 0%, transparent 50%)' }}
                      />
                      <div className="absolute bottom-5 left-5 flex items-center gap-3">
                        <div className="h-[1px] w-6" style={{ background: 'var(--vharanani-burgundy)' }} />
                        <span
                          className="font-inter typo-meta tracking-[0.2em] uppercase text-white/70"
                        >
                          {pillar.title}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          );
        })}
      </div>

      {/* ══════ SUMMARY BAND — burgundy ══════ */}
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
          <span
            className="font-bebas-neue uppercase whitespace-nowrap"
            style={{ fontSize: 'clamp(60px, 14vw, 180px)', color: 'rgba(255,255,255,0.05)', letterSpacing: '0.06em', lineHeight: 1 }}
          >
            PILLARS
          </span>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {PILLARS.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.num}
                  className="py-10 px-4 text-center"
                  style={{ borderRight: i < 3 ? '1px solid rgba(255,255,255,0.12)' : 'none' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <div className="w-9 h-9 mx-auto mb-3 flex items-center justify-center"
                    style={{ border: '1px solid rgba(255,255,255,0.35)', color: 'white' }}>
                    <Icon size={16} />
                  </div>
                  <div className="font-bebas-neue uppercase text-white mb-1"
                    style={{ fontSize: 'clamp(14px, 1.4vw, 18px)', letterSpacing: '0.04em' }}>
                    {p.title}
                  </div>
                  <div className="font-bebas-neue text-white"
                    style={{ fontSize: 'clamp(26px, 3.5vw, 44px)', lineHeight: 1 }}>
                    {p.metric.value}
                  </div>
                  <div className="font-inter typo-meta tracking-[0.12em] uppercase mt-1"
                    style={{ color: 'rgba(255,255,255,0.55)', fontSize: '10px' }}>
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
