import { type ReactNode } from 'react';
import { motion } from 'motion/react';
import { Shield, Target, Eye, Heart, Home, Users, GraduationCap, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../../ui/ImageWithFallback';
import { AnimatedCounter } from '../shared';

const IMAGES = {
  impact: 'https://vharananiproperties.co.za/wp-content/uploads/2020/08/Mogalakwena.jpg',
};

const TICKER_ITEMS = [
  'Professionalism', 'Accountability', 'Transparency', 'Honesty',
  'Professionalism', 'Accountability', 'Transparency', 'Honesty',
];

export function PropertiesWireframe_ValuesImpact(): ReactNode {
  const values = [
    { icon: <Shield size={20} />, title: 'Professionalism', description: 'Maintaining the highest standards in execution and project delivery.' },
    { icon: <Target size={20} />, title: 'Accountability', description: 'Taking full responsibility for the quality, safety, and success of every project.' },
    { icon: <Eye size={20} />, title: 'Transparency', description: 'Operating with openness and integrity in all engagements.' },
    { icon: <Heart size={20} />, title: 'Honesty', description: 'Building long-term relationships based on trust and ethical conduct.' },
  ];

  const impacts = [
    { icon: <Home size={26} />, label: 'Sustainable Settlements', value: 9, suffix: '', description: 'Provinces with dignified housing developments' },
    { icon: <Users size={26} />, label: 'Employment Created', value: 1000, suffix: 's+', description: 'Jobs and skills development across construction sites nationally' },
    { icon: <GraduationCap size={26} />, label: 'Economic Participation', value: 500, suffix: '+', description: 'Local community and enterprise development initiatives' },
  ];

  return (
    <div>

      {/* ── ACT 1: VALUES — DARK EDITORIAL ── */}
      <div className="relative overflow-hidden" style={{ background: '#040404' }}>

        {/* Ghost watermark */}
        <div
          className="absolute inset-0 pointer-events-none select-none overflow-hidden flex items-end justify-end"
          aria-hidden="true"
        >
          <span
            className="font-bebas-neue text-white"
            style={{ fontSize: 'clamp(110px, 24vw, 340px)', lineHeight: 0.88, opacity: 0.028, letterSpacing: '-0.02em', paddingRight: '1vw' }}
          >
            VALUES
          </span>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-10 md:pt-16 pb-0">

          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 mb-12 md:mb-14">
            <div className="lg:col-span-7">
              <motion.div
                className="flex items-center gap-3 mb-6"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-8 h-[2px]" style={{ background: 'var(--vharanani-burgundy)' }} />
                <span className="typo-caption tracking-[0.28em] uppercase font-inter" style={{ color: 'var(--vharanani-burgundy)' }}>
                  VALUES & IMPACT
                </span>
              </motion.div>
              <motion.h2
                className="typo-headline-big font-bebas-neue tracking-wide uppercase text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.05 }}
              >
                The Foundation<br />We Build On.
              </motion.h2>
              <motion.p
                className="typo-copy font-inter max-w-lg"
                style={{ color: 'rgba(255,255,255,0.4)' }}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.12 }}
              >
                Our values are not aspirational statements — they are the non-negotiable principles embedded in every project, partnership, and community we serve.
              </motion.p>
            </div>
          </div>

          {/* Value rows */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
            {values.map((val, i) => (
              <motion.div
                key={i}
                className="group relative cursor-default"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                {/* Hover background wash */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: 'rgba(255,255,255,0.018)' }}
                />

                {/* Left accent bar */}
                <div
                  className="absolute left-0 inset-y-0 w-[3px] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom"
                  style={{ background: 'var(--vharanani-burgundy)' }}
                />

                {/* Ghost step numeral */}
                <div
                  className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none font-bebas-neue leading-none opacity-[0.038] group-hover:opacity-[0.07] transition-opacity duration-300"
                  style={{ fontSize: 'clamp(60px, 13vw, 170px)' , color: 'white' }}
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Row */}
                <div className="relative flex items-center gap-4 md:gap-7 py-5 md:py-7">

                  {/* Ordinal */}
                  <span
                    className="font-bebas-neue shrink-0"
                    style={{ fontSize: 'clamp(16px, 2.5vw, 24px)', color: 'rgba(255,255,255,0.15)', width: '2.2rem' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Divider */}
                  <div className="h-9 w-px shrink-0" style={{ background: 'rgba(255,255,255,0.1)' }} />

                  {/* Icon box */}
                  <div
                    className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center shrink-0 transition-colors duration-300"
                    style={{ border: '1px solid rgba(129,41,33,0.45)', color: 'var(--vharanani-burgundy)' }}
                  >
                    {val.icon}
                  </div>

                  {/* Title */}
                  <h4
                    className="font-bebas-neue uppercase text-white leading-none shrink-0"
                    style={{ fontSize: 'clamp(24px, 3.5vw, 42px)', letterSpacing: '0.02em', minWidth: 'min(155px, 36vw)' }}
                  >
                    {val.title}
                  </h4>

                  {/* Description — desktop only */}
                  <p className="font-inter typo-copy-small flex-1 hidden sm:block" style={{ color: 'rgba(255,255,255,0.38)' }}>
                    {val.description}
                  </p>

                  {/* Arrow */}
                  <ArrowRight
                    size={15}
                    className="shrink-0 opacity-0 group-hover:opacity-100 -translate-x-3 group-hover:translate-x-0 transition-all duration-300"
                    style={{ color: 'var(--vharanani-burgundy)' }}
                  />
                </div>

                {/* Description — mobile only */}
                <p
                  className="font-inter typo-copy-small pb-5 sm:hidden pl-10"
                  style={{ color: 'rgba(255,255,255,0.38)' }}
                >
                  {val.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── TICKER ── */}
      <div className="overflow-hidden" style={{ background: 'var(--vharanani-burgundy)', height: 46 }}>
        <motion.div
          className="flex items-center h-full whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="font-bebas-neue text-[17px] tracking-[0.14em] uppercase text-white/80 mx-7 shrink-0">
              {item}
              <span className="text-white/25 ml-7">·</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* ── ACT 2: IMPACT — CINEMATIC ── */}
      <div className="relative overflow-hidden">

        {/* Background image */}
        <ImageWithFallback
          src={IMAGES.impact}
          alt="Vharanani Properties impact"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Deep burgundy gradient overlay */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(129,41,33,0.95) 0%, rgba(38,7,5,0.97) 100%)' }}
        />

        {/* Ghost watermark */}
        <div
          className="absolute inset-0 pointer-events-none select-none overflow-hidden flex items-center justify-start"
          aria-hidden="true"
        >
          <span
            className="font-bebas-neue text-white"
            style={{ fontSize: 'clamp(110px, 24vw, 340px)', lineHeight: 0.88, opacity: 0.04, letterSpacing: '-0.02em', paddingLeft: '1vw' }}
          >
            IMPACT
          </span>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-10 md:py-16">

          {/* Eyebrow + headline */}
          <motion.div
            className="mb-10 md:mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-[2px]" style={{ background: 'rgba(255,255,255,0.4)' }} />
              <span className="typo-caption tracking-[0.28em] uppercase font-inter" style={{ color: 'rgba(255,255,255,0.55)' }}>
                OUR IMPACT
              </span>
            </div>
            <h2 className="typo-headline-big font-bebas-neue tracking-wide uppercase text-white">
              The Work Speaks<br />For Itself.
            </h2>
          </motion.div>

          {/* Stats grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3"
            style={{ border: '1px solid rgba(255,255,255,0.1)' }}
          >
            {impacts.map((item, i) => (
              <motion.div
                key={i}
                className="group flex flex-col p-7 md:p-10"
                style={{
                  borderRight: i < 2 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
              >
                {/* Icon */}
                <div
                  className="w-11 h-11 flex items-center justify-center mb-5 transition-colors duration-300"
                  style={{ border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.6)' }}
                >
                  {item.icon}
                </div>

                {/* Counter */}
                <div className="mb-2">
                  <AnimatedCounter target={item.value} suffix={item.suffix} color="white" />
                </div>

                {/* Accent line */}
                <div
                  className="h-[2px] mb-3 transition-all duration-500 group-hover:w-12"
                  style={{ background: 'rgba(255,255,255,0.25)', width: 24 }}
                />

                {/* Label */}
                <h4 className="font-bebas-neue typo-subline tracking-wide uppercase text-white mb-1">
                  {item.label}
                </h4>

                {/* Description */}
                <p className="font-inter typo-meta" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom strip */}
          <motion.div
            className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-8"
            style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <p className="font-inter typo-copy-small max-w-xl" style={{ color: 'rgba(255,255,255,0.38)' }}>
              Committed to South Africa's socioeconomic development through responsible infrastructure delivery — restoring dignity through construction.
            </p>
            <div className="flex items-center gap-2 shrink-0">
              <span className="font-bebas-neue typo-headline-small tracking-wider uppercase" style={{ color: 'rgba(255,255,255,0.35)' }}>
                9 Provinces
              </span>
              <ArrowRight size={14} style={{ color: 'rgba(255,255,255,0.25)' }} />
            </div>
          </motion.div>
        </div>
      </div>

    </div>
  );
}
