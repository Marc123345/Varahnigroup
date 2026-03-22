import { type ReactNode } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, GraduationCap, Home, Heart } from 'lucide-react';
import { ImageWithFallback } from '../../ui/ImageWithFallback';
import { AnimatedCounter } from '../shared';

const IMAGES = {
  communityGathering: 'https://images.unsplash.com/photo-1655720359248-eeace8c709c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwY29tbXVuaXR5JTIwY2VsZWJyYXRpb24lMjB1bml0eSUyMGdhdGhlcmluZyUyMGhhbmRzfGVufDF8fHx8MTc3Mzg0OTM3NHww&ixlib=rb-4.1.0&q=80&w=1080',
  founderPortrait: 'https://ik.imagekit.io/qcvroy8xpd/image%202.png',
};

export function FoundationWireframe_Hero({ onTabChange }: { onTabChange?: (tabId: string) => void } = {}): ReactNode {
  return (
    <div>
      {/* ── CINEMATIC HERO ── */}
      <div className="relative h-[45vh] sm:h-[55vh] min-h-[320px] sm:min-h-[440px] overflow-hidden">
        <ImageWithFallback
          src={IMAGES.communityGathering}
          alt="Community gathering and empowerment"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.85) 100%)'
        }} />
        <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: 'var(--vharanani-burgundy)' }} />

        {/* Nav placeholder */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 md:px-12 lg:px-20 py-5">
          <div className="font-bebas-neue typo-headline-small tracking-wider text-white uppercase opacity-80">
            The David Mabilu Foundation
          </div>
          <div className="hidden md:flex items-center gap-6">
            {['About', 'Programmes', 'Our Impact', 'Vharanani Group', 'Contact'].map((item) => (
              <span key={item} className="font-inter typo-meta tracking-[0.12em] uppercase text-white opacity-50 hover:opacity-100 cursor-pointer transition-opacity">{item}</span>
            ))}
          </div>
        </div>

        {/* Hero content */}
        <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-12 lg:px-20 pb-14">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-[2px]" style={{ background: 'var(--vharanani-burgundy)' }} />
                  <span className="typo-caption tracking-[0.25em] uppercase font-inter" style={{ color: 'var(--vharanani-burgundy-60)' }}>
                    THE DAVID MABILU FOUNDATION
                  </span>
                </div>
                <h1 className="typo-header font-bebas-neue tracking-wide uppercase text-white" style={{ lineHeight: 0.95 }}>
                  Building Stronger<br />Communities Through<br />Opportunity.
                </h1>
              </div>
              <div className="lg:col-span-5 flex flex-col gap-6">
                <p className="typo-copy font-inter text-white/60">
                  The David Mabilu Foundation (DMF) is a social development organisation committed to reducing poverty and sustainably improving the living standards of poor and marginalised communities across South Africa.
                </p>
                <div className="flex items-center gap-3">
                  <button onClick={() => onTabChange?.('impact')} className="flex items-center gap-2 px-5 py-3 transition-all duration-300 hover:gap-3" style={{ background: 'var(--vharanani-burgundy)' }}>
                    <span className="font-bebas-neue typo-headline-small tracking-wider uppercase text-white">See Our Impact</span>
                    <ArrowRight size={14} className="text-white" />
                  </button>
                  <button onClick={() => onTabChange?.('get-involved')} className="flex items-center gap-2 px-5 py-3 transition-all duration-300 hover:bg-white/10" style={{ border: '1px solid rgba(255,255,255,0.3)' }}>
                    <span className="font-bebas-neue typo-headline-small tracking-wider uppercase text-white">Partner With Us</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── IMPACT STATS BAR ── */}
      <div style={{ background: '#812921' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0" style={{ borderBottom: '1px solid rgba(255,255,255,0.2)' }}>
            {[
              { target: 50, suffix: 'K+', label: 'Lives Impacted' },
              { target: 34, suffix: '', label: 'Full Scholarships' },
              { target: 5, suffix: '', label: 'Provinces Reached' },
              { target: 12, suffix: '+', label: 'Years of Service' },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="py-8 md:py-10 text-center"
                style={{ borderRight: i < 3 ? '1px solid rgba(255,255,255,0.2)' : 'none' }}
              >
                <AnimatedCounter target={stat.target} suffix={stat.suffix} color="white" />
                <div className="typo-meta tracking-[0.12em] uppercase font-inter mt-2" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── VISION & FOUNDER SPLIT ── */}
      <div style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-10 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 overflow-hidden"
            style={{ border: '1px solid var(--vharanani-charcoal-20)' }}
          >
            {/* Left — Vision text (7 cols) */}
            <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-center" style={{ background: '#fafafa' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[2px]" style={{ background: 'var(--vharanani-burgundy)' }} />
                <span className="typo-caption tracking-[0.25em] uppercase font-inter" style={{ color: 'var(--vharanani-burgundy)' }}>
                  OUR GOAL
                </span>
              </div>
              <h2 className="typo-headline-big font-bebas-neue tracking-wide uppercase mb-4" style={{ color: 'var(--vharanani-charcoal)' }}>
                A Vision for Lasting Change.
              </h2>
              <div className="w-12 h-[3px] mb-6" style={{ background: 'var(--vharanani-burgundy)' }} />
              <p className="typo-copy font-inter mb-4" style={{ color: 'var(--vharanani-charcoal-80)' }}>
                The primary goal of the David Mabilu Foundation is to reduce poverty and sustainably improve the living standards of disadvantaged and marginalised communities throughout South Africa.
              </p>
              <p className="typo-copy-small font-inter mb-8" style={{ color: 'var(--vharanani-charcoal-80)' }}>
                We believe that lasting change is achieved when communities are empowered with access to education, housing, and opportunities for social and economic development.
              </p>

              {/* Key pillars */}
              <div className="grid grid-cols-3 gap-0" style={{ border: '1px solid var(--vharanani-charcoal-20)' }}>
                {[
                  { icon: <GraduationCap size={18} />, label: 'Education' },
                  { icon: <Home size={18} />, label: 'Housing' },
                  { icon: <Heart size={18} />, label: 'Community' },
                ].map((item, i) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 p-4"
                    style={{ borderRight: i < 2 ? '1px solid var(--vharanani-charcoal-20)' : 'none' }}
                  >
                    <div style={{ color: 'var(--vharanani-burgundy)' }}>{item.icon}</div>
                    <span className="typo-meta tracking-[0.12em] uppercase font-inter" style={{ color: 'var(--vharanani-charcoal-80)' }}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Founder portrait + quote (5 cols) */}
            <div className="lg:col-span-5 relative min-h-[380px]">
              <ImageWithFallback
                src={IMAGES.founderPortrait}
                alt="David Mabilu, Foundation Founder"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{
                background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.85) 100%)'
              }} />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="p-5" style={{ borderLeft: '3px solid var(--vharanani-burgundy)', background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(8px)' }}>
                  <p className="typo-copy font-inter italic text-white mb-3">
                    "The Foundation was established with a vision to give back meaningfully to the communities that continue to shape South Africa's future."
                  </p>
                  <div className="typo-meta tracking-[0.15em] uppercase font-inter" style={{ color: 'var(--vharanani-burgundy-60)' }}>
                    &mdash; David Mabilu, Founder
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
