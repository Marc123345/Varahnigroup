import { type ReactNode } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, GraduationCap, Home, Heart } from 'lucide-react';
import { ImageWithFallback } from '../../ui/ImageWithFallback';
import { AnimatedCounter } from '../shared';

const IMAGES = {
  communityGathering: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1080&q=80',
  founderPortrait: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1080&q=80',
};

export function FoundationWireframe_Hero({ onTabChange }: { onTabChange?: (tabId: string) => void } = {}): ReactNode {
  return (
    <div>
      {/* ── CONTACT-US STYLE HERO — dark bg, image right, content left ── */}
      <div className="relative overflow-hidden" style={{ background: '#111111', minHeight: 'clamp(500px, 70vh, 757px)' }}>

        {/* Background texture (subtle grid) */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />

        {/* Decorative diagonal shape — right side */}
        <div
          className="absolute top-0 right-0 bottom-0 hidden lg:block"
          style={{
            width: '48%',
            background: 'var(--vharanani-burgundy)',
            clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)',
            opacity: 0.12,
          }}
        />

        {/* Large image — right side, overlapping the shape */}
        <div className="absolute top-4 right-[8%] bottom-0 hidden lg:block" style={{ width: '45%' }}>
          <ImageWithFallback
            src={IMAGES.communityGathering}
            alt="Community gathering and empowerment"
            className="w-full h-full object-cover"
            style={{ maxHeight: '100%' }}
          />
        </div>

        {/* ── CONTENT — left side ── */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24 lg:py-32">
          <div className="max-w-xl lg:max-w-[600px]">

            {/* Overline */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-8 h-[2px]" style={{ background: 'var(--vharanani-burgundy)' }} />
              <span
                className="font-inter tracking-[0.5px]"
                style={{ fontSize: 18, fontWeight: 600, lineHeight: '26px', color: 'var(--vharanani-burgundy)' }}
              >
                The David Mabilu Foundation
              </span>
            </motion.div>

            {/* Big headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-bebas-neue uppercase mb-5"
              style={{
                fontSize: 'clamp(36px, 5vw, 48px)',
                letterSpacing: '0.5px',
                lineHeight: '56px',
                color: 'white',
              }}
            >
              Building Stronger Communities Through Opportunity
              <span style={{ color: 'var(--vharanani-burgundy)' }}> !</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-inter mb-8"
              style={{ fontSize: 16, lineHeight: '24px', color: 'rgba(255,255,255,0.7)', maxWidth: 602 }}
            >
              The David Mabilu Foundation (DMF) is a social development organisation committed to reducing poverty and sustainably improving the living standards of poor and marginalised communities across South Africa. Through education support, housing initiatives, and community development programmes, the Foundation empowers individuals and communities to become self-sustaining.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex items-center gap-4 mb-12"
            >
              <button
                onClick={() => onTabChange?.('impact')}
                className="flex items-center justify-center gap-2 transition-all duration-300 hover:brightness-110"
                style={{
                  background: 'var(--vharanani-burgundy)',
                  height: 56,
                  padding: '16px 25px',
                  fontSize: 16,
                  fontWeight: 600,
                  letterSpacing: '0.5px',
                  lineHeight: '24px',
                  color: 'white',
                  fontFamily: 'var(--font-inter)',
                }}
              >
                SEE OUR IMPACT
                <ArrowRight size={18} />
              </button>
              <button
                onClick={() => onTabChange?.('get-involved')}
                className="flex items-center justify-center gap-2 transition-all duration-300 hover:bg-white/10"
                style={{
                  height: 56,
                  padding: '16px 25px',
                  border: '1.5px solid rgba(255,255,255,0.25)',
                  fontSize: 16,
                  fontWeight: 600,
                  letterSpacing: '0.5px',
                  color: 'white',
                  fontFamily: 'var(--font-inter)',
                }}
              >
                PARTNER WITH US
              </button>
            </motion.div>

            {/* Key pillars row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-0"
              style={{ border: '1px solid rgba(255,255,255,0.1)' }}
            >
              {[
                { icon: <GraduationCap size={18} />, label: 'Education' },
                { icon: <Home size={18} />, label: 'Housing' },
                { icon: <Heart size={18} />, label: 'Community' },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 px-5 py-4 flex-1"
                  style={{
                    borderRight: i < 2 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                    background: 'rgba(255,255,255,0.03)',
                  }}
                >
                  <div style={{ color: 'var(--vharanani-burgundy)' }}>{item.icon}</div>
                  <span className="typo-label tracking-[0.12em] uppercase font-inter" style={{ color: 'rgba(255,255,255,0.7)' }}>{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Mobile image — shown below content on small screens */}
        <div className="relative lg:hidden h-[300px] overflow-hidden">
          <ImageWithFallback
            src={IMAGES.communityGathering}
            alt="Community gathering"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, #111111 0%, transparent 30%)' }} />
        </div>
      </div>

      {/* ── IMPACT STATS BAR ── */}
      <div style={{ background: 'var(--vharanani-burgundy)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
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
                <div className="typo-meta tracking-[0.12em] uppercase font-inter mt-2" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FOUNDER QUOTE SECTION ── */}
      <div style={{ background: '#111111' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Portrait */}
            <div className="lg:col-span-4 relative h-[300px] lg:h-[360px] overflow-hidden">
              <ImageWithFallback
                src={IMAGES.founderPortrait}
                alt="David Mabilu, Foundation Founder"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.7) 100%)' }} />
            </div>

            {/* Quote */}
            <div className="lg:col-span-8 lg:pl-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-[2px]" style={{ background: 'var(--vharanani-burgundy)' }} />
                <span className="font-inter typo-caption tracking-[0.28em] uppercase" style={{ color: 'var(--vharanani-burgundy)' }}>
                  OUR FOUNDER
                </span>
              </div>
              <blockquote className="mb-5" style={{ borderLeft: '3px solid var(--vharanani-burgundy)', paddingLeft: 24 }}>
                <p className="font-inter italic" style={{ fontSize: 20, lineHeight: '34px', color: 'rgba(255,255,255,0.85)' }}>
                  "The Foundation was established with a vision to give back meaningfully to the communities that continue to shape South Africa's future. Lasting change is achieved when communities are empowered with access to education, housing, and opportunities for social and economic development."
                </p>
              </blockquote>
              <div className="font-inter" style={{ fontSize: 16, fontWeight: 600, color: 'white', letterSpacing: '0.5px' }}>
                David Mabilu
              </div>
              <div className="font-inter typo-meta tracking-[0.15em] uppercase mt-1" style={{ color: 'rgba(255,255,255,0.45)' }}>
                Founder &amp; Group Executive Chairman
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
