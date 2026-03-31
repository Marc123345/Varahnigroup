import { type ReactNode } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Layers, Building2, Landmark, Home } from 'lucide-react';
import { ImageWithFallback } from '../../ui/ImageWithFallback';
import { AnimatedCounter } from '../shared';

const IMAGES = {
  aerialDev: 'https://ik.imagekit.io/qcvroy8xpd/Vharnani%20Group/Building%201/Clip%20path%20frame-1.png?updatedAt=1774870591546',
  architectural: 'https://ik.imagekit.io/qcvroy8xpd/Vharnani%20Group/Building%201/Clip%20path%20frame-3.png?updatedAt=1774870591805',
};

export function DMFTWireframe_HeroAbout({ onTabChange }: { onTabChange?: (tabId: string) => void } = {}): ReactNode {
  return (
    <div>
      {/* ── CINEMATIC HERO ── */}
      <div className="relative h-[45vh] sm:h-[55vh] min-h-[320px] sm:min-h-[440px] overflow-hidden">
        <ImageWithFallback
          src={IMAGES.aerialDev}
          alt="Aerial view of DMFT property development"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.85) 100%)'
        }} />
        <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: 'var(--vharanani-burgundy)' }} />

        {/* Nav bar */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 md:px-12 lg:px-20 py-5">
          <div className="font-bebas-neue typo-headline-small tracking-wider text-white uppercase opacity-80">DMFT Property Developers</div>
          <div className="hidden md:flex items-center gap-6">
            {['About', 'Developments', 'Approach', 'Vharanani Group', 'Contact'].map((item) => (
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
                  <span className="typo-caption tracking-[0.28em] uppercase font-inter" style={{ color: 'var(--vharanani-burgundy-60)' }}>
                    DMFT PROPERTY DEVELOPERS
                  </span>
                </div>
                <h1 className="typo-header font-bebas-neue tracking-wide uppercase text-white" style={{ lineHeight: 0.95 }}>
                  Creating Exceptional<br />Property Developments.
                </h1>
              </div>
              <div className="lg:col-span-5 flex flex-col gap-6">
                <p className="typo-copy font-inter text-white/60">
                  DMFT Property Developers is a property development company focused on the creation of high-quality residential and mixed-use developments across South Africa. As part of the Vharanani Group, DMFT leverages deep expertise in construction, infrastructure development, and project management to deliver well-planned developments that meet the needs of modern communities.
                </p>
                <div className="flex items-center gap-3">
                  <button onClick={() => onTabChange?.('residential-estates')} className="flex items-center gap-2 px-5 py-3 transition-all duration-300 hover:gap-3" style={{ background: 'var(--vharanani-burgundy)' }}>
                    <span className="font-bebas-neue typo-headline-small tracking-wider uppercase text-white">View Developments</span>
                    <ArrowRight size={14} className="text-white" />
                  </button>
                  <button onClick={() => onTabChange?.('approach')} className="flex items-center gap-2 px-5 py-3 transition-all duration-300 hover:bg-white/10" style={{ border: '1px solid rgba(255,255,255,0.3)' }}>
                    <span className="font-bebas-neue typo-headline-small tracking-wider uppercase text-white">Our Process</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── STATS BAR ── */}
      <div style={{ background: '#812921' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0" style={{ borderBottom: '1px solid rgba(255,255,255,0.2)' }}>
            {[
              { target: 12, suffix: '+', label: 'Developments' },
              { target: 3, suffix: 'K+', label: 'Units Planned' },
              { target: 4, suffix: '', label: 'Provinces Active' },
              { target: 20, suffix: '+', label: 'Years Group Experience' },
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

      {/* ── ABOUT SPLIT ── */}
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
            {/* Left — Text (7 cols) */}
            <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-center" style={{ background: '#fafafa' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[2px]" style={{ background: 'var(--vharanani-burgundy)' }} />
                <span className="typo-caption tracking-[0.28em] uppercase font-inter" style={{ color: 'var(--vharanani-burgundy)' }}>
                  ABOUT DMFT
                </span>
              </div>

              <h2 className="typo-headline-big font-bebas-neue tracking-wide uppercase mb-4" style={{ color: 'var(--vharanani-charcoal)' }}>
                A Real Estate Development Company Dedicated to Quality.
              </h2>

              <div className="w-12 h-[3px] mb-6" style={{ background: 'var(--vharanani-burgundy)' }} />

              <p className="typo-copy font-inter mb-4" style={{ color: 'var(--vharanani-charcoal-80)' }}>
                Working in collaboration with the Vharanani Group, DMFT benefits from extensive construction and infrastructure expertise, enabling the successful delivery of complex property development projects from concept through to completion.
              </p>

              <p className="typo-copy-small font-inter mb-8" style={{ color: 'var(--vharanani-charcoal-60)' }}>
                Our developments are designed with long-term value in mind, combining strong architectural design, efficient infrastructure planning, and quality construction to create environments that enhance both lifestyle and economic opportunity.
              </p>

              {/* Key pillars */}
              <div className="grid grid-cols-3 gap-0" style={{ border: '1px solid var(--vharanani-charcoal-20)' }}>
                {[
                  { icon: <Building2 size={18} />, label: 'Residential' },
                  { icon: <Landmark size={18} />, label: 'Commercial' },
                  { icon: <Home size={18} />, label: 'Mixed-Use' },
                ].map((item, i) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 p-4"
                    style={{ borderRight: i < 2 ? '1px solid var(--vharanani-charcoal-20)' : 'none' }}
                  >
                    <div style={{ color: 'var(--vharanani-burgundy)' }}>{item.icon}</div>
                    <span className="typo-meta tracking-[0.12em] uppercase font-inter" style={{ color: 'var(--vharanani-charcoal-60)' }}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Image (5 cols) */}
            <div className="lg:col-span-5 relative min-h-[380px]">
              <ImageWithFallback
                src={IMAGES.architectural}
                alt="DMFT modern architecture"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{
                background: 'linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.8) 100%)'
              }} />
              {/* Overlaid badge */}
              <div className="absolute bottom-0 left-0 right-0 p-6" style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }}>
                <div className="flex items-center gap-3">
                  <Layers size={16} style={{ color: 'var(--vharanani-burgundy)' }} />
                  <span className="typo-meta tracking-[0.15em] uppercase font-inter text-white/50">
                    Part of the Vharanani Group
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
