import { useState, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GraduationCap, Home, Heart, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../../ui/ImageWithFallback';

const PROGRAMMES = [
  {
    num: '01',
    icon: GraduationCap,
    title: 'Education',
    headline: 'Breaking the Cycle of Poverty',
    description: 'Education is a powerful catalyst for breaking the cycle of poverty. Through scholarships, school support programmes, and infrastructure development, the Foundation invests in the future of young South Africans.',
    details: ['Full tuition & stipends', 'School uniforms & supplies', 'Computer labs & classrooms', 'Educational trips'],
    metric: { value: '34', label: 'Full Scholarships Since 2011' },
    image: 'https://images.unsplash.com/photo-1758270703250-80a6387439ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwdW5pdmVyc2l0eSUyMHN0dWRlbnRzJTIwZ3JhZHVhdGlvbiUyMGNlbGVicmF0aW9uJTIwY2FtcHVzfGVufDF8fHx8MTc3Mzg0OTM3NHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    num: '02',
    icon: Home,
    title: 'Housing',
    headline: 'Dignified Shelter for All',
    description: 'Access to safe and dignified housing is essential for improving the quality of life of vulnerable families. The Foundation supports housing initiatives that provide homes for disadvantaged individuals and families.',
    details: ['Home construction', 'Community housing', 'Government partnerships', 'Nelson Mandela Day builds'],
    metric: { value: '3BR', label: 'Home Built for Elderly in Eenzaam' },
    image: 'https://vharananiproperties.co.za/wp-content/uploads/2020/08/Nellmapius.jpg',
  },
  {
    num: '03',
    icon: Heart,
    title: 'Community Upliftment',
    headline: 'Strengthening Social Wellbeing',
    description: 'The Foundation supports community-driven initiatives that strengthen social wellbeing, encourage youth development, and promote economic participation.',
    details: ['Youth development', 'Sports equipment & kits', "Women's empowerment", 'Winter blanket drives'],
    metric: { value: '5', label: 'Provinces Reached' },
    image: 'https://images.unsplash.com/photo-1506185386801-3d7bc0ddd2bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIweW91dGglMjBzcG9ydHMlMjBzb2NjZXIlMjBjb21tdW5pdHklMjBmaWVsZHxlbnwxfHx8fDE3NzM4NDkzNzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function FoundationWireframe_ProgrammeAreas(): ReactNode {
  const [active, setActive] = useState('01');
  const prog = PROGRAMMES.find(p => p.num === active)!;

  return (
    <div style={{ background: '#ffffff', overflow: 'hidden' }}>

      {/* ══════ HEADER ══════ */}
      <div className="px-6 md:px-12 lg:px-20 pt-14 pb-10 md:pt-20 md:pb-14">
        <div className="max-w-7xl mx-auto">

          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="h-[2px] w-8" style={{ background: 'var(--vharanani-burgundy)' }} />
            <span className="font-inter typo-caption tracking-[0.28em] uppercase" style={{ color: 'var(--vharanani-burgundy)' }}>
              Our Key Programme Areas
            </span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-8 overflow-hidden">
              <motion.h2
                className="typo-headline-big font-bebas-neue uppercase tracking-wide"
                style={{ color: 'var(--vharanani-charcoal)' }}
                initial={{ clipPath: 'inset(0 0 100% 0)' }}
                whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.85, delay: 0.06, ease: [0.76, 0, 0.24, 1] }}
              >
                Core Programme<br />
                <span style={{ color: 'var(--vharanani-burgundy)' }}>Areas</span>
              </motion.h2>
            </div>
            <motion.p
              className="lg:col-span-4 font-inter leading-relaxed"
              style={{ fontSize: 'clamp(13px, 1.1vw, 15px)', color: 'rgba(0,0,0,0.5)' }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.18 }}
            >
              Three core programme areas directly addressing community needs and long-term development.
            </motion.p>
          </div>
        </div>
      </div>

      {/* ══════ INTERACTIVE PANEL ══════ */}
      <div className="px-6 md:px-12 lg:px-20 pb-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0" style={{ border: '1px solid rgba(0,0,0,0.09)' }}>

            {/* LEFT — tab selector */}
            <div className="lg:col-span-4 flex flex-col" style={{ borderRight: '1px solid rgba(0,0,0,0.09)' }}>
              {PROGRAMMES.map((p, i) => {
                const Icon = p.icon;
                const isActive = active === p.num;
                return (
                  <motion.button
                    key={p.num}
                    onClick={() => setActive(p.num)}
                    className="relative text-left flex items-center gap-4 px-6 py-6 w-full"
                    style={{
                      borderBottom: i < PROGRAMMES.length - 1 ? '1px solid rgba(0,0,0,0.07)' : 'none',
                      background: isActive ? 'rgba(129,41,33,0.04)' : 'transparent',
                      transition: 'background 0.25s ease',
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {/* Active bar */}
                    <motion.div
                      className="absolute left-0 top-0 bottom-0 w-[3px]"
                      style={{ background: 'var(--vharanani-burgundy)', transformOrigin: 'top' }}
                      animate={{ scaleY: isActive ? 1 : 0 }}
                      transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
                    />

                    {/* Number */}
                    <span
                      className="font-bebas-neue flex-shrink-0"
                      style={{
                        fontSize: '13px', letterSpacing: '0.1em',
                        color: isActive ? 'var(--vharanani-burgundy)' : 'rgba(0,0,0,0.25)',
                        transition: 'color 0.25s', minWidth: '22px',
                      }}
                    >
                      {p.num}
                    </span>

                    {/* Icon */}
                    <div
                      className="w-9 h-9 flex items-center justify-center flex-shrink-0"
                      style={{
                        background: isActive ? 'var(--vharanani-burgundy)' : 'transparent',
                        border: `1.5px solid ${isActive ? 'var(--vharanani-burgundy)' : 'rgba(0,0,0,0.18)'}`,
                        color: isActive ? 'white' : 'rgba(0,0,0,0.38)',
                        transition: 'all 0.25s ease',
                      }}
                    >
                      <Icon size={16} />
                    </div>

                    {/* Label + metric */}
                    <div className="flex-1 min-w-0">
                      <div
                        className="font-bebas-neue uppercase tracking-wide"
                        style={{
                          fontSize: 'clamp(15px, 1.4vw, 19px)',
                          color: isActive ? '#111111' : 'rgba(0,0,0,0.5)',
                          transition: 'color 0.25s',
                        }}
                      >
                        {p.title}
                      </div>
                      <motion.div
                        className="font-inter typo-meta mt-0.5"
                        style={{ fontSize: '11px', color: 'var(--vharanani-burgundy)' }}
                        animate={{ opacity: isActive ? 1 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {p.metric.value} — {p.metric.label}
                      </motion.div>
                    </div>

                    <motion.div
                      animate={{ x: isActive ? 0 : -6, opacity: isActive ? 1 : 0 }}
                      transition={{ duration: 0.2 }}
                      style={{ color: 'var(--vharanani-burgundy)', flexShrink: 0 }}
                    >
                      <ArrowRight size={15} />
                    </motion.div>
                  </motion.button>
                );
              })}
            </div>

            {/* RIGHT — detail panel */}
            <div className="lg:col-span-8 flex flex-col">

              {/* Image */}
              <div className="relative overflow-hidden flex-shrink-0" style={{ height: 'clamp(200px, 28vh, 320px)' }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`img-${active}`}
                    className="absolute inset-0"
                    initial={{ scale: 1.07, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
                  >
                    <ImageWithFallback
                      src={prog.image}
                      alt={prog.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: 'linear-gradient(90deg, rgba(0,0,0,0.45) 0%, transparent 55%)' }}
                />
                {/* Metric overlay */}
                <div className="absolute bottom-5 left-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`metric-${active}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="font-bebas-neue text-white" style={{ fontSize: 'clamp(28px, 4vw, 48px)', lineHeight: 1 }}>
                        {prog.metric.value}
                      </div>
                      <div className="font-inter typo-meta tracking-[0.15em] uppercase mt-1" style={{ color: 'rgba(255,255,255,0.65)' }}>
                        {prog.metric.label}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
                {/* Ghost number */}
                <div
                  className="absolute top-3 right-5 font-bebas-neue pointer-events-none select-none"
                  style={{ fontSize: '72px', lineHeight: 1, color: 'rgba(255,255,255,0.1)' }}
                >
                  {active}
                </div>
                {/* Burgundy top accent */}
                <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: 'var(--vharanani-burgundy)' }} />
              </div>

              {/* Content */}
              <div className="flex-1 p-7 md:p-9" style={{ borderTop: '1px solid rgba(0,0,0,0.09)' }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`content-${active}`}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {/* Tag */}
                    <div className="flex items-center gap-2 mb-4">
                      <span
                        className="font-inter typo-meta tracking-[0.18em] uppercase px-3 py-1"
                        style={{ background: 'var(--vharanani-burgundy)', color: 'white', fontSize: '10px' }}
                      >
                        Programme {prog.num}
                      </span>
                    </div>

                    <h3
                      className="font-bebas-neue uppercase tracking-wide mb-1"
                      style={{ fontSize: 'clamp(22px, 2.5vw, 32px)', lineHeight: 1.05, color: '#111111', letterSpacing: '0.02em' }}
                    >
                      {prog.title}
                    </h3>
                    <p
                      className="font-bebas-neue uppercase mb-4"
                      style={{ fontSize: 'clamp(14px, 1.5vw, 18px)', color: 'var(--vharanani-burgundy)', lineHeight: 1.2, letterSpacing: '0.02em' }}
                    >
                      {prog.headline}
                    </p>

                    <p
                      className="font-inter leading-relaxed mb-6"
                      style={{ fontSize: 'clamp(13px, 1.1vw, 15px)', color: 'rgba(0,0,0,0.6)' }}
                    >
                      {prog.description}
                    </p>

                    {/* Details */}
                    <div className="grid grid-cols-2 gap-2">
                      {prog.details.map((d, i) => (
                        <motion.div
                          key={d}
                          className="flex items-center gap-2"
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.06 }}
                        >
                          <div className="w-1.5 h-1.5 flex-shrink-0" style={{ background: 'var(--vharanani-burgundy)' }} />
                          <span className="font-inter" style={{ fontSize: 'clamp(12px, 1vw, 14px)', color: 'rgba(0,0,0,0.65)' }}>
                            {d}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ══════ SUMMARY BAND ══════ */}
      <motion.div
        className="relative mt-10 overflow-hidden"
        style={{ background: 'var(--vharanani-burgundy)' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden" aria-hidden>
          <span
            className="font-bebas-neue uppercase whitespace-nowrap"
            style={{ fontSize: 'clamp(60px, 13vw, 160px)', color: 'rgba(255,255,255,0.05)', letterSpacing: '0.06em', lineHeight: 1 }}
          >
            PROGRAMMES
          </span>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-3 divide-x divide-white/10">
            {PROGRAMMES.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.button
                  key={p.num}
                  onClick={() => setActive(p.num)}
                  className="py-6 sm:py-8 px-2 sm:px-4 text-center"
                  style={{
                    opacity: active === p.num ? 1 : 0.65,
                    transition: 'opacity 0.25s ease',
                  }}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.09 }}
                >
                  <div className="w-8 h-8 mx-auto mb-2 flex items-center justify-center"
                    style={{ border: '1px solid rgba(255,255,255,0.4)', color: 'white' }}>
                    <Icon size={15} />
                  </div>
                  <div className="font-bebas-neue uppercase text-white"
                    style={{ fontSize: 'clamp(18px, 2.2vw, 28px)', lineHeight: 1 }}>
                    {p.metric.value}
                  </div>
                  <div className="font-bebas-neue uppercase text-white mt-1"
                    style={{ fontSize: 'clamp(12px, 1.2vw, 15px)', letterSpacing: '0.04em', opacity: 0.85 }}>
                    {p.title}
                  </div>
                  <div className="font-inter typo-meta mt-1" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '10px' }}>
                    {p.metric.label}
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </motion.div>

    </div>
  );
}
