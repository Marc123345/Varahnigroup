import { useState, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Gavel, FileCheck, Scale, Shield, Eye, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../../ui/ImageWithFallback';

const PRINCIPLES = [
  {
    num: '01',
    icon: Gavel,
    label: 'Ethical Leadership',
    description: 'Principled decision-making at every level of the organisation, guided by the King IV framework and a commitment to integrity.',
    tag: 'King IV Aligned',
  },
  {
    num: '02',
    icon: FileCheck,
    label: 'Regulatory Compliance',
    description: 'Full adherence to all statutory, industry, and sector-specific requirements across every division and province of operation.',
    tag: 'Statutory',
  },
  {
    num: '03',
    icon: Scale,
    label: 'Financial Discipline',
    description: 'Rigorous fiscal management, independent oversight, and transparent financial reporting to all stakeholders.',
    tag: 'Oversight',
  },
  {
    num: '04',
    icon: Shield,
    label: 'Risk Management',
    description: 'Proactive identification, assessment, and mitigation of operational, financial, and reputational risks.',
    tag: 'Proactive',
  },
  {
    num: '05',
    icon: Eye,
    label: 'Transparent Reporting',
    description: 'Open, consistent stakeholder communication underpinned by accurate and timely disclosures.',
    tag: 'Disclosure',
  },
];

const IMAGE = 'https://images.unsplash.com/photo-1556219845-95c1847629e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBnb3Zlcm5hbmNlJTIwYW5udWFsJTIwcmVwb3J0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MzA1NTkxM3ww&ixlib=rb-4.1.0&q=80&w=1080';

export function GroupWireframe_Governance(): ReactNode {
  const [active, setActive] = useState<string>('01');
  const activePrinciple = PRINCIPLES.find(p => p.num === active)!;

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
              Compliance
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
                Governance &amp;<br />
                <span style={{ color: 'var(--vharanani-burgundy)' }}>Compliance</span>
              </motion.h2>
            </div>
            <motion.p
              className="lg:col-span-4 font-inter leading-relaxed"
              style={{ fontSize: 'clamp(13px, 1.1vw, 15px)', color: 'rgba(0,0,0,0.5)' }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            >
              Ethics, risk management, and transparent reporting define our operational framework across all divisions.
            </motion.p>
          </div>
        </div>
      </div>

      {/* ══════ MAIN PANEL ══════ */}
      <div className="px-6 md:px-12 lg:px-20 pb-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0" style={{ border: '1px solid rgba(0,0,0,0.09)' }}>

            {/* LEFT — selector list */}
            <div className="lg:col-span-5 flex flex-col" style={{ borderRight: '1px solid rgba(0,0,0,0.09)' }}>
              {PRINCIPLES.map((p, i) => {
                const Icon = p.icon;
                const isActive = active === p.num;
                return (
                  <motion.button
                    key={p.num}
                    className="relative text-left w-full flex items-center gap-4 px-6 py-5 group"
                    style={{
                      borderBottom: i < PRINCIPLES.length - 1 ? '1px solid rgba(0,0,0,0.07)' : 'none',
                      background: isActive ? 'rgba(129,41,33,0.04)' : 'transparent',
                      transition: 'background 0.25s ease',
                    }}
                    onClick={() => setActive(p.num)}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {/* Active left bar */}
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
                        fontSize: '13px',
                        letterSpacing: '0.1em',
                        color: isActive ? 'var(--vharanani-burgundy)' : 'rgba(0,0,0,0.25)',
                        transition: 'color 0.25s ease',
                        minWidth: '22px',
                      }}
                    >
                      {p.num}
                    </span>

                    {/* Icon box */}
                    <div
                      className="w-8 h-8 flex items-center justify-center flex-shrink-0 transition-all duration-250"
                      style={{
                        background: isActive ? 'var(--vharanani-burgundy)' : 'transparent',
                        border: `1.5px solid ${isActive ? 'var(--vharanani-burgundy)' : 'rgba(0,0,0,0.2)'}`,
                        color: isActive ? 'white' : 'rgba(0,0,0,0.4)',
                      }}
                    >
                      <Icon size={14} />
                    </div>

                    {/* Label */}
                    <span
                      className="font-bebas-neue uppercase tracking-wide flex-1 text-left"
                      style={{
                        fontSize: 'clamp(15px, 1.4vw, 18px)',
                        color: isActive ? '#111111' : 'rgba(0,0,0,0.5)',
                        transition: 'color 0.25s ease',
                      }}
                    >
                      {p.label}
                    </span>

                    {/* Arrow */}
                    <motion.div
                      animate={{ x: isActive ? 0 : -6, opacity: isActive ? 1 : 0 }}
                      transition={{ duration: 0.2 }}
                      style={{ color: 'var(--vharanani-burgundy)' }}
                    >
                      <ArrowRight size={15} />
                    </motion.div>
                  </motion.button>
                );
              })}
            </div>

            {/* RIGHT — detail panel + image */}
            <div className="lg:col-span-7 flex flex-col">

              {/* Detail content */}
              <div className="flex-1 p-5 sm:p-8 md:p-10" style={{ minHeight: '200px' }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {/* Tag */}
                    <div className="flex items-center gap-2 mb-5">
                      <span
                        className="font-inter typo-meta tracking-[0.18em] uppercase px-3 py-1"
                        style={{ background: 'var(--vharanani-burgundy)', color: 'white', fontSize: '10px' }}
                      >
                        {activePrinciple.tag}
                      </span>
                      <span
                        className="font-inter typo-meta tracking-[0.14em] uppercase"
                        style={{ color: 'rgba(0,0,0,0.3)' }}
                      >
                        Principle {activePrinciple.num}
                      </span>
                    </div>

                    <h3
                      className="font-bebas-neue uppercase tracking-wide mb-4"
                      style={{ fontSize: 'clamp(26px, 3vw, 38px)', lineHeight: 1.05, color: '#111111', letterSpacing: '0.02em' }}
                    >
                      {activePrinciple.label}
                    </h3>

                    <p
                      className="font-inter leading-relaxed"
                      style={{ fontSize: 'clamp(14px, 1.2vw, 16px)', color: 'rgba(0,0,0,0.6)', maxWidth: '480px' }}
                    >
                      {activePrinciple.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Image */}
              <div className="relative overflow-hidden flex-shrink-0" style={{ height: 'clamp(180px, 24vh, 280px)', borderTop: '1px solid rgba(0,0,0,0.09)' }}>
                <motion.div
                  key={`img-${active}`}
                  className="absolute inset-0"
                  initial={{ scale: 1.08, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
                >
                  <ImageWithFallback
                    src={IMAGE}
                    alt="Corporate governance"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)' }}
                />
                <div className="absolute bottom-5 left-6">
                  <div className="h-[1px] w-6 mb-2" style={{ background: 'var(--vharanani-burgundy)' }} />
                  <span className="font-inter typo-meta tracking-[0.2em] uppercase text-white/70">
                    King IV Aligned Governance
                  </span>
                </div>

                {/* Ghost principle number */}
                <div
                  className="absolute top-3 right-5 font-bebas-neue pointer-events-none select-none"
                  style={{ fontSize: '80px', lineHeight: 1, color: 'rgba(255,255,255,0.1)' }}
                >
                  {active}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ══════ BURGUNDY SUMMARY BAND ══════ */}
      <motion.div
        className="relative mt-10 overflow-hidden"
        style={{ background: 'var(--vharanani-burgundy)' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Ghost watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden" aria-hidden>
          <span
            className="font-bebas-neue uppercase whitespace-nowrap"
            style={{ fontSize: 'clamp(60px, 13vw, 160px)', color: 'rgba(255,255,255,0.05)', letterSpacing: '0.06em', lineHeight: 1 }}
          >
            GOVERNANCE
          </span>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

            <div className="md:col-span-2">
              <div className="h-[1px] w-8 mb-4" style={{ background: 'rgba(255,255,255,0.35)' }} />
              <p
                className="font-bebas-neue uppercase"
                style={{ fontSize: 'clamp(20px, 2.5vw, 32px)', color: 'white', lineHeight: 1.15, letterSpacing: '0.02em' }}
              >
                Transparent, ethical, and accountable — aligned to King IV and best-practice standards.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {['King IV Aligned', 'B-BBEE Level 1', 'ISO Compliant', 'CIDB Registered'].map((badge, i) => (
                <motion.div
                  key={badge}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                >
                  <div className="w-1.5 h-1.5 flex-shrink-0" style={{ background: 'rgba(255,255,255,0.5)' }} />
                  <span className="font-inter typo-meta tracking-[0.15em] uppercase" style={{ color: 'rgba(255,255,255,0.75)' }}>
                    {badge}
                  </span>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </motion.div>

    </div>
  );
}
