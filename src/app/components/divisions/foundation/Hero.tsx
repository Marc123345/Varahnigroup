import { type ReactNode } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, GraduationCap, Home, Heart } from 'lucide-react';
import { ImageWithFallback } from '../../ui/ImageWithFallback';
import { AnimatedCounter } from '../shared';

const IMAGES = {
  communityGathering: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=1080&q=80',
  founderPortrait: 'https://ik.imagekit.io/qcvroy8xpd/image%202.png',
};

export function FoundationWireframe_Hero({ onTabChange }: { onTabChange?: (tabId: string) => void } = {}): ReactNode {
  return (
    <div>
      {/* ── SECTION 1: GREEN LEFT / IMAGE RIGHT SPLIT ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2" style={{ minHeight: '600px' }}>

        {/* Left — Green panel */}
        <motion.div
          className="relative flex flex-col justify-center px-8 md:px-14 lg:px-16 xl:px-20 py-16 lg:py-20"
          style={{ background: 'var(--dmf-primary)' }}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Corner accent */}
          <div className="absolute top-0 left-0 w-20 h-20 pointer-events-none" style={{ borderTop: '3px solid rgba(255,255,255,0.2)', borderLeft: '3px solid rgba(255,255,255,0.2)' }} />

          {/* Overline */}
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-10 h-[2px] bg-white/40" />
            <span className="typo-caption tracking-[0.3em] uppercase font-inter text-white/60">
              THE DAVID MABILU FOUNDATION
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            className="font-bebas-neue uppercase tracking-wide text-white mb-6"
            style={{ fontSize: 'clamp(32px, 4.5vw, 56px)', lineHeight: 0.95 }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Building Stronger<br />Communities Through<br />Opportunity.
          </motion.h2>

          {/* Accent bar */}
          <motion.div
            className="w-16 h-[3px] bg-white mb-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            style={{ transformOrigin: 'left' }}
          />

          {/* Description */}
          <motion.p
            className="font-inter typo-copy text-white/80 mb-10 max-w-md leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            The David Mabilu Foundation is a social development organisation committed to reducing poverty and sustainably improving the living standards of marginalised communities across South Africa.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <button
              onClick={() => onTabChange?.('impact')}
              className="flex items-center gap-2 px-6 py-3.5 transition-all duration-300 hover:gap-3 bg-white"
            >
              <span className="font-bebas-neue typo-headline-small tracking-wider uppercase" style={{ color: 'var(--dmf-primary)' }}>
                See Our Impact
              </span>
              <ArrowRight size={14} style={{ color: 'var(--dmf-primary)' }} />
            </button>
            <button
              onClick={() => onTabChange?.('get-involved')}
              className="flex items-center gap-2 px-6 py-3.5 transition-all duration-300 hover:bg-white/10"
              style={{ border: '1.5px solid rgba(255,255,255,0.3)' }}
            >
              <span className="font-bebas-neue typo-headline-small tracking-wider uppercase text-white">
                Partner With Us
              </span>
            </button>
          </motion.div>

          {/* Key pillars */}
          <motion.div
            className="flex items-center gap-0 mt-10"
            style={{ border: '1px solid rgba(255,255,255,0.15)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            {[
              { icon: <GraduationCap size={16} />, label: 'Education' },
              { icon: <Home size={16} />, label: 'Housing' },
              { icon: <Heart size={16} />, label: 'Community' },
            ].map((item, i) => (
              <div
                key={item.label}
                className="flex items-center gap-2 px-4 py-3 flex-1"
                style={{ borderRight: i < 2 ? '1px solid rgba(255,255,255,0.15)' : 'none' }}
              >
                <div className="text-white/70">{item.icon}</div>
                <span className="typo-meta tracking-[0.12em] uppercase font-inter text-white/60">{item.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Bottom accent */}
          <div className="absolute bottom-0 right-0 w-20 h-20 opacity-10" style={{ background: 'white' }} />
        </motion.div>

        {/* Right — Image */}
        <motion.div
          className="relative min-h-[400px] lg:min-h-0 overflow-hidden"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <ImageWithFallback
            src={IMAGES.communityGathering}
            alt="Community gathering and empowerment"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Gradient bleed from green side */}
          <div className="absolute inset-y-0 left-0 w-24 pointer-events-none hidden lg:block" style={{ background: 'linear-gradient(to right, var(--dmf-primary) 0%, transparent 100%)' }} />
          {/* Dark bottom vignette */}
          <div className="absolute inset-x-0 bottom-0 h-32 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 100%)' }} />
        </motion.div>
      </div>

      {/* ── STATS BAND ── */}
      <div style={{ background: 'var(--dmf-primary)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { target: 50, suffix: 'K+', label: 'Lives Impacted' },
              { target: 34, suffix: '', label: 'Full Scholarships' },
              { target: 5, suffix: '', label: 'Provinces Reached' },
              { target: 12, suffix: '+', label: 'Years of Service' },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="py-8 md:py-10 text-center"
                style={{ borderRight: i < 3 ? '1px solid rgba(255,255,255,0.15)' : 'none' }}
              >
                <AnimatedCounter target={stat.target} suffix={stat.suffix} color="white" />
                <div className="typo-meta tracking-[0.12em] uppercase font-inter mt-2 text-white/60">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SECTION 2: WHITE LEFT (BIO) / GREEN RIGHT (QUOTE) ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2" style={{ minHeight: '400px' }}>

        {/* Left — White panel with founder bio */}
        <motion.div
          className="flex flex-col justify-center px-8 md:px-14 lg:px-16 xl:px-20 py-14 lg:py-16 bg-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-[2px]" style={{ background: 'var(--dmf-primary)' }} />
            <span className="font-inter typo-caption tracking-[0.28em] uppercase" style={{ color: 'var(--dmf-primary)' }}>
              OUR GOAL
            </span>
          </div>

          <h3 className="font-bebas-neue typo-headline-big uppercase tracking-wide mb-4" style={{ color: 'var(--vharanani-charcoal)' }}>
            A Vision for<br />Lasting Change.
          </h3>

          <p className="font-inter typo-copy mb-4 leading-relaxed" style={{ color: 'var(--vharanani-charcoal-80)' }}>
            The primary goal of the David Mabilu Foundation is to reduce poverty and sustainably improve the living standards of disadvantaged and marginalised communities throughout South Africa.
          </p>
          <p className="font-inter typo-copy-small leading-relaxed" style={{ color: 'var(--vharanani-charcoal-60)' }}>
            We believe that lasting change is achieved when communities are empowered with access to education, housing, and opportunities for social and economic development.
          </p>
        </motion.div>

        {/* Right — Green panel with founder quote */}
        <motion.div
          className="relative flex flex-col justify-center px-8 md:px-14 lg:px-16 xl:px-20 py-14 lg:py-16"
          style={{ background: '#111111' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-[2px]" style={{ background: 'var(--dmf-primary)' }} />
            <span className="font-inter typo-caption tracking-[0.28em] uppercase" style={{ color: 'var(--dmf-primary)' }}>
              OUR FOUNDER
            </span>
          </div>

          <blockquote className="mb-5" style={{ borderLeft: '3px solid var(--dmf-primary)', paddingLeft: 20 }}>
            <p className="font-inter italic" style={{ fontSize: 18, lineHeight: '30px', color: 'rgba(255,255,255,0.85)' }}>
              "The Foundation was established with a vision to give back meaningfully to the communities that continue to shape South Africa's future."
            </p>
          </blockquote>

          <div className="font-inter" style={{ fontSize: 15, fontWeight: 600, color: 'white', letterSpacing: '0.5px' }}>
            David Mabilu
          </div>
          <div className="font-inter typo-meta tracking-[0.15em] uppercase mt-1 text-white/45">
            Founder & Group Executive Chairman
          </div>

          {/* Small portrait */}
          <div className="absolute bottom-6 right-6 w-20 h-20 overflow-hidden opacity-20 hidden lg:block">
            <ImageWithFallback
              src={IMAGES.founderPortrait}
              alt="David Mabilu"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
