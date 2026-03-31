'use client';

import { useRef, type ReactNode } from 'react';
import { motion } from 'motion/react';
import { Shield, Layers, Globe } from 'lucide-react';
import { ImageWithFallback } from '../../ui/ImageWithFallback';
import { AnimatedCounter, SectionWrapper } from '../shared';
import { useInView } from '../../../hooks/useInView';

/* ─────────────────────────── data ─────────────────────────── */

const IMAGES = {
  impact: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=1080&q=80',
};

const impactStats = [
  { value: 50000, suffix: '+', label: 'Lives Impacted' },
  { value: 500, suffix: '+', label: 'Bursaries Awarded' },
  { value: 200, suffix: '+', label: 'Infrastructure Projects' },
  { value: 5, suffix: '', label: 'Provinces Reached' },
];

const governancePrinciples = [
  {
    icon: <Shield size={24} />,
    label: 'Ethical Leadership',
    description: 'Principled decision-making at every level of the organisation.',
  },
  {
    icon: <Layers size={24} />,
    label: 'Financial Discipline',
    description: 'Rigorous fiscal management and transparent oversight.',
  },
  {
    icon: <Globe size={24} />,
    label: 'Risk Management',
    description: 'Proactive identification, assessment, and mitigation.',
  },
];

/* ─────────────────────── animation helpers ─────────────────── */

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: EASE } },
});

const fadeLeft = (delay = 0) => ({
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay, ease: EASE } },
});

const fadeRight = (delay = 0) => ({
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay, ease: EASE } },
});

const scaleIn = (delay = 0) => ({
  hidden: { opacity: 0, scale: 1.08 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.9, delay, ease: EASE } },
});

/* ─────────────────────── component ─────────────────────────── */

export function GroupWireframe_ImpactGovernance(): ReactNode {
  /* section refs for viewport detection */
  const impactRef = useRef<HTMLDivElement>(null);
  const govRef = useRef<HTMLDivElement>(null);
  const impactInView = useInView(impactRef, { once: true, amount: 0.15 });
  const govInView = useInView(govRef, { once: true, amount: 0.15 });

  return (
    <>
      {/* ══════════════════════════════════════════════════════════
          SECTION 1 — IMPACT (burgundy left / image right)
      ══════════════════════════════════════════════════════════ */}
      <section
        ref={impactRef}
        className="relative w-full overflow-hidden"
        style={{ minHeight: '600px' }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ minHeight: '600px' }}>
          {/* ── LEFT: burgundy panel with stats ── */}
          <motion.div
            className="relative flex flex-col justify-center px-8 md:px-14 lg:px-16 xl:px-20 py-16 lg:py-20"
            style={{ background: '#812921' }}
            variants={fadeLeft()}
            initial="hidden"
            animate={impactInView ? 'visible' : 'hidden'}
          >
            {/* decorative corner accent */}
            <div
              className="absolute top-0 right-0 w-24 h-24 pointer-events-none hidden lg:block"
              style={{
                background: 'linear-gradient(225deg, rgba(255,255,255,0.08) 50%, transparent 50%)',
              }}
            />

            {/* eyebrow */}
            <motion.div
              className="flex items-center gap-3 mb-6"
              variants={fadeUp(0)}
              initial="hidden"
              animate={impactInView ? 'visible' : 'hidden'}
            >
              <div className="w-10 h-[2px] bg-white/50" />
              <span className="typo-caption tracking-[0.28em] uppercase font-inter text-white/70">
                Impact
              </span>
            </motion.div>

            {/* headline */}
            <motion.h2
              className="typo-headline-big font-bebas-neue uppercase tracking-wide text-white mb-5"
              variants={fadeUp(0.08)}
              initial="hidden"
              animate={impactInView ? 'visible' : 'hidden'}
            >
              Impact &<br />Responsibility
            </motion.h2>

            {/* description */}
            <motion.p
              className="typo-copy font-inter text-white/80 mb-10 max-w-lg leading-relaxed"
              variants={fadeUp(0.16)}
              initial="hidden"
              animate={impactInView ? 'visible' : 'hidden'}
            >
              Vharanani Group recognizes that infrastructure and investment must translate into
              tangible community benefit. Through responsible project delivery, employment
              creation, and the work of The David Mabilu Foundation, the Group actively
              contributes to social upliftment and economic participation in underserved
              communities.
            </motion.p>

            {/* stats grid */}
            <motion.div
              className="grid grid-cols-2 gap-x-6 gap-y-8"
              variants={fadeUp(0.24)}
              initial="hidden"
              animate={impactInView ? 'visible' : 'hidden'}
            >
              {impactStats.map((stat, i) => (
                <div key={stat.label} className="relative pl-5">
                  {/* vertical accent bar */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-[3px]"
                    style={{ background: 'rgba(255,255,255,0.3)' }}
                  />
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    color="#ffffff"
                    duration={2200}
                  />
                  <div className="typo-caption tracking-[0.18em] uppercase font-inter text-white/60 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* bottom decorative line */}
            <div
              className="absolute bottom-0 left-0 right-0 h-[3px]"
              style={{
                background: 'linear-gradient(90deg, rgba(255,255,255,0.25) 0%, transparent 100%)',
              }}
            />
          </motion.div>

          {/* ── RIGHT: full-bleed community image ── */}
          <motion.div
            className="relative overflow-hidden"
            style={{ minHeight: '400px' }}
            variants={scaleIn(0.1)}
            initial="hidden"
            animate={impactInView ? 'visible' : 'hidden'}
          >
            <ImageWithFallback
              src={IMAGES.impact}
              alt="Community development impact"
              className="w-full h-full object-cover absolute inset-0"
              style={{ minHeight: '100%' }}
            />
            {/* subtle gradient overlay for cohesion */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'linear-gradient(90deg, rgba(129,41,33,0.35) 0%, transparent 40%), linear-gradient(0deg, rgba(0,0,0,0.2) 0%, transparent 50%)',
              }}
            />
            {/* "Our approach" floating label */}
            <motion.div
              className="absolute bottom-8 left-8 md:bottom-10 md:left-10"
              variants={fadeUp(0.5)}
              initial="hidden"
              animate={impactInView ? 'visible' : 'hidden'}
            >
              <div
                className="px-5 py-3 backdrop-blur-sm"
                style={{ background: 'rgba(129,41,33,0.85)' }}
              >
                <span className="typo-caption tracking-[0.22em] uppercase font-inter text-white/90 block">
                  Our approach integrates disciplined
                </span>
                <span className="typo-caption tracking-[0.22em] uppercase font-inter text-white/90 block">
                  business growth with measurable
                </span>
                <span className="typo-caption tracking-[0.22em] uppercase font-inter text-white font-semibold block">
                  social responsibility.
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 2 — GOVERNANCE (image left / dark right)
      ══════════════════════════════════════════════════════════ */}
      <section
        ref={govRef}
        className="relative w-full overflow-hidden"
        style={{ minHeight: '520px' }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ minHeight: '520px' }}>
          {/* ── LEFT: image panel ── */}
          <motion.div
            className="relative overflow-hidden order-2 lg:order-1"
            style={{ minHeight: '380px' }}
            variants={scaleIn(0.1)}
            initial="hidden"
            animate={govInView ? 'visible' : 'hidden'}
          >
            <ImageWithFallback
              src={IMAGES.impact}
              alt="Vharanani governance and leadership"
              className="w-full h-full object-cover absolute inset-0"
              style={{ minHeight: '100%', filter: 'brightness(0.85) contrast(1.05)' }}
            />
            {/* dark gradient from right to blend into dark panel */}
            <div
              className="absolute inset-0 pointer-events-none hidden lg:block"
              style={{
                background:
                  'linear-gradient(270deg, rgba(14,18,29,0.5) 0%, transparent 50%)',
              }}
            />
            {/* bottom gradient mobile */}
            <div
              className="absolute inset-0 pointer-events-none lg:hidden"
              style={{
                background:
                  'linear-gradient(0deg, rgba(14,18,29,0.6) 0%, transparent 50%)',
              }}
            />
            {/* large decorative text */}
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 pointer-events-none">
              <span
                className="font-bebas-neue uppercase text-white/10"
                style={{ fontSize: 'clamp(60px, 10vw, 140px)', lineHeight: 0.85 }}
              >
                GOV
              </span>
            </div>
          </motion.div>

          {/* ── RIGHT: dark panel with governance principles ── */}
          <motion.div
            className="relative flex flex-col justify-center px-8 md:px-14 lg:px-16 xl:px-20 py-16 lg:py-20 order-1 lg:order-2"
            style={{ background: '#111111' }}
            initial="hidden"
            animate={govInView ? 'visible' : 'hidden'}
          >
            {/* decorative top-left corner */}
            <div
              className="absolute top-0 left-0 w-20 h-20 pointer-events-none hidden lg:block"
              style={{
                background: 'linear-gradient(135deg, rgba(129,41,33,0.5) 50%, transparent 50%)',
              }}
            />

            {/* eyebrow */}
            <motion.div
              className="flex items-center gap-3 mb-6"
              variants={fadeUp(0)}
              initial="hidden"
              animate={govInView ? 'visible' : 'hidden'}
            >
              <div className="w-10 h-[2px]" style={{ background: '#812921' }} />
              <span
                className="typo-caption tracking-[0.28em] uppercase font-inter"
                style={{ color: 'rgba(255,255,255,0.5)' }}
              >
                Governance
              </span>
            </motion.div>

            {/* headline */}
            <motion.h2
              className="typo-headline-big font-bebas-neue uppercase tracking-wide text-white mb-4"
              variants={fadeUp(0.08)}
              initial="hidden"
              animate={govInView ? 'visible' : 'hidden'}
            >
              Governance<br />Principles
            </motion.h2>

            {/* thin burgundy rule */}
            <motion.div
              className="w-16 h-[3px] mb-8"
              style={{ background: '#812921' }}
              variants={fadeUp(0.14)}
              initial="hidden"
              animate={govInView ? 'visible' : 'hidden'}
            />

            {/* principles list */}
            <div className="space-y-0">
              {governancePrinciples.map((principle, i) => (
                <motion.div
                  key={principle.label}
                  className="group flex items-start gap-5 py-6 relative"
                  style={{
                    borderBottom:
                      i < governancePrinciples.length - 1
                        ? '1px solid rgba(255,255,255,0.08)'
                        : 'none',
                  }}
                  variants={fadeRight(0.2 + i * 0.12)}
                  initial="hidden"
                  animate={govInView ? 'visible' : 'hidden'}
                >
                  {/* icon box */}
                  <div
                    className="w-12 h-12 flex-shrink-0 flex items-center justify-center relative overflow-hidden"
                    style={{
                      background: 'rgba(129,41,33,0.15)',
                      border: '1px solid rgba(129,41,33,0.4)',
                    }}
                  >
                    <div style={{ color: '#c94a3f' }}>{principle.icon}</div>
                  </div>

                  {/* text */}
                  <div className="flex-1">
                    <h3 className="typo-headline-small font-bebas-neue uppercase tracking-wide text-white mb-1">
                      {principle.label}
                    </h3>
                    <p
                      className="typo-copy-small font-inter leading-relaxed"
                      style={{ color: 'rgba(255,255,255,0.55)' }}
                    >
                      {principle.description}
                    </p>
                  </div>

                  {/* number badge */}
                  <div
                    className="hidden sm:flex items-center justify-center w-8 h-8 flex-shrink-0 self-center"
                    style={{
                      border: '1px solid rgba(129,41,33,0.3)',
                      color: 'rgba(129,41,33,0.7)',
                    }}
                  >
                    <span className="font-bebas-neue text-sm">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* bottom accent line */}
            <div
              className="absolute bottom-0 left-0 right-0 h-[3px]"
              style={{
                background: 'linear-gradient(90deg, #812921 0%, transparent 60%)',
              }}
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
