import { type ReactNode, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowRight, Layers, Building2, Landmark, Home } from 'lucide-react';
import { ImageWithFallback } from '../../ui/ImageWithFallback';
import { AnimatedCounter } from '../shared';

const IMAGES = {
  aerialDev: 'https://ik.imagekit.io/qcvroy8xpd/Vharnani%20final/74_aerial_view_brick_apartment_complex_suburban_backdrop.jpg?updatedAt=1774955145529',
  architectural: 'https://ik.imagekit.io/qcvroy8xpd/Vharnani%20final/69_modern_brick_apartment_complex_street_view.jpg?updatedAt=1774955145953',
};

export function DMFTWireframe_HeroAbout({ onTabChange }: { onTabChange?: (tabId: string) => void } = {}): ReactNode {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true, amount: 0.2 });
  const aboutInView = useInView(aboutRef, { once: true, amount: 0.2 });

  return (
    <div>
      {/* ── BLACK & WHITE SPLIT HERO ── */}
      <div className="relative min-h-[90vh] lg:min-h-[85vh]">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[90vh] lg:min-h-[85vh]">

          {/* LEFT — Solid black panel with text */}
          <div
            ref={heroRef}
            className="relative flex flex-col justify-center px-8 md:px-14 lg:px-16 xl:px-20 py-20 lg:py-24 order-2 lg:order-1"
            style={{ background: '#111111' }}
          >
            {/* Subtle corner accent */}
            <div
              className="absolute top-0 left-0 w-24 h-24 pointer-events-none"
              style={{
                borderTop: '3px solid var(--vharanani-burgundy)',
                borderLeft: '3px solid var(--vharanani-burgundy)',
              }}
            />

            <motion.div
              animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {/* Overline */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-[2px]" style={{ background: 'var(--vharanani-burgundy)' }} />
                <span
                  className="typo-caption tracking-[0.3em] uppercase font-inter"
                  style={{ color: 'rgba(255,255,255,0.45)' }}
                >
                  DMFT Property Developers
                </span>
              </div>

              {/* Big headline */}
              <h1
                className="typo-header font-bebas-neue tracking-wide uppercase text-white mb-8"
                style={{ lineHeight: 0.92, maxWidth: '560px' }}
              >
                Creating<br />
                Exceptional<br />
                Property<br />
                Developments.
              </h1>
            </motion.div>

            <motion.div
              animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {/* Description */}
              <p
                className="typo-copy font-inter mb-10"
                style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '460px', lineHeight: 1.7 }}
              >
                DMFT Property Developers is a property development company focused on the creation of high-quality residential and mixed-use developments across South Africa. As part of the Vharanani Group, DMFT leverages deep expertise in construction, infrastructure development, and project management to deliver well-planned developments that meet the needs of modern communities.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onTabChange?.('residential-estates')}
                  className="group flex items-center gap-3 px-7 py-4 transition-all duration-300 hover:gap-4"
                  style={{ background: 'var(--vharanani-burgundy)' }}
                >
                  <span className="font-bebas-neue typo-headline-small tracking-wider uppercase text-white">
                    View Developments
                  </span>
                  <ArrowRight size={16} className="text-white transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() => onTabChange?.('approach')}
                  className="flex items-center gap-3 px-7 py-4 transition-all duration-300 hover:bg-white/10"
                  style={{ border: '1px solid rgba(255,255,255,0.25)' }}
                >
                  <span className="font-bebas-neue typo-headline-small tracking-wider uppercase text-white">
                    Our Process
                  </span>
                </button>
              </div>
            </motion.div>

            {/* Bottom edge line */}
            <div
              className="absolute bottom-0 left-0 right-0 h-[3px] lg:hidden"
              style={{ background: 'var(--vharanani-burgundy)' }}
            />
          </div>

          {/* RIGHT — Full-bleed image */}
          <div className="relative min-h-[50vh] lg:min-h-0 order-1 lg:order-2 overflow-hidden">
            <motion.div
              animate={heroInView ? { scale: 1 } : { scale: 1.08 }}
              transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute inset-0"
            >
              <ImageWithFallback
                src={IMAGES.aerialDev}
                alt="Aerial view of DMFT property development"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>
            {/* Dark gradient overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'linear-gradient(135deg, rgba(14,18,29,0.6) 0%, rgba(14,18,29,0.15) 40%, rgba(14,18,29,0.4) 100%)',
              }}
            />
            {/* Vertical burgundy edge on desktop */}
            <div
              className="hidden lg:block absolute top-0 left-0 bottom-0 w-[3px]"
              style={{ background: 'var(--vharanani-burgundy)' }}
            />
            {/* Nav overlay (top-right) */}
            <div className="absolute top-0 left-0 right-0 flex items-center justify-end px-6 md:px-12 py-6">
              <div className="hidden md:flex items-center gap-6">
                {['About', 'Developments', 'Approach', 'Vharanani Group', 'Contact'].map((item) => (
                  <span
                    key={item}
                    className="font-inter typo-meta tracking-[0.12em] uppercase text-white opacity-50 hover:opacity-100 cursor-pointer transition-opacity"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── STATS BAND ── */}
      <div style={{ background: 'var(--vharanani-burgundy)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { target: 12, suffix: '+', label: 'Developments' },
              { target: 3, suffix: 'K+', label: 'Units Planned' },
              { target: 4, suffix: '', label: 'Provinces Active' },
              { target: 20, suffix: '+', label: 'Years Group Experience' },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="py-10 md:py-12 text-center"
                style={{
                  borderRight: i < 3 ? '1px solid rgba(255,255,255,0.15)' : 'none',
                  borderBottom: '1px solid rgba(255,255,255,0.15)',
                }}
              >
                <AnimatedCounter target={stat.target} suffix={stat.suffix} color="white" />
                <div
                  className="typo-meta tracking-[0.14em] uppercase font-inter mt-2"
                  style={{ color: 'rgba(255,255,255,0.6)' }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── ABOUT — FULL-WIDTH SPLIT ── */}
      <div ref={aboutRef} className="grid grid-cols-1 lg:grid-cols-2">

        {/* LEFT — Image panel */}
        <div className="relative min-h-[50vh] lg:min-h-[600px] overflow-hidden">
          <motion.div
            animate={aboutInView ? { scale: 1 } : { scale: 1.06 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute inset-0"
          >
            <ImageWithFallback
              src={IMAGES.architectural}
              alt="DMFT modern architecture"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(180deg, rgba(14,18,29,0.05) 0%, rgba(14,18,29,0.25) 60%, rgba(14,18,29,0.7) 100%)',
            }}
          />
          {/* Badge at bottom */}
          <div
            className="absolute bottom-0 left-0 right-0 px-8 py-6"
            style={{ background: 'rgba(14,18,29,0.9)', backdropFilter: 'blur(12px)' }}
          >
            <div className="flex items-center gap-3">
              <Layers size={16} style={{ color: 'var(--vharanani-burgundy)' }} />
              <span className="typo-meta tracking-[0.15em] uppercase font-inter text-white/50">
                Part of the Vharanani Group
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT — White text panel */}
        <div
          className="flex flex-col justify-center px-8 md:px-14 lg:px-16 xl:px-20 py-16 lg:py-24"
          style={{ background: '#ffffff' }}
        >
          <motion.div
            animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Section overline */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-[2px]" style={{ background: 'var(--vharanani-burgundy)' }} />
              <span
                className="typo-caption tracking-[0.3em] uppercase font-inter"
                style={{ color: 'var(--vharanani-burgundy)' }}
              >
                About DMFT
              </span>
            </div>

            <h2
              className="typo-headline-big font-bebas-neue tracking-wide uppercase mb-4"
              style={{ color: 'var(--vharanani-charcoal)', maxWidth: '500px' }}
            >
              A Real Estate Development Company Dedicated to Quality.
            </h2>

            <div className="w-14 h-[3px] mb-8" style={{ background: 'var(--vharanani-burgundy)' }} />
          </motion.div>

          <motion.div
            animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="typo-copy font-inter mb-5" style={{ color: 'var(--vharanani-charcoal-80)', lineHeight: 1.75 }}>
              Working in collaboration with the Vharanani Group, DMFT benefits from extensive construction and infrastructure expertise, enabling the successful delivery of complex property development projects from concept through to completion.
            </p>

            <p className="typo-copy-small font-inter mb-10" style={{ color: 'var(--vharanani-charcoal-60)', lineHeight: 1.75 }}>
              Our developments are designed with long-term value in mind, combining strong architectural design, efficient infrastructure planning, and quality construction to create environments that enhance both lifestyle and economic opportunity.
            </p>
          </motion.div>

          {/* Key pillars */}
          <motion.div
            animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-0"
            style={{ border: '1px solid var(--vharanani-charcoal-20)' }}
          >
            {[
              { icon: <Building2 size={20} />, label: 'Residential' },
              { icon: <Landmark size={20} />, label: 'Commercial' },
              { icon: <Home size={20} />, label: 'Mixed-Use' },
            ].map((item, i) => (
              <div
                key={item.label}
                className="flex items-center gap-3 p-5 transition-colors duration-300 hover:bg-gray-50"
                style={{
                  borderRight: i < 2 ? '1px solid var(--vharanani-charcoal-20)' : 'none',
                  borderBottom: 'none',
                }}
              >
                <div style={{ color: 'var(--vharanani-burgundy)' }}>{item.icon}</div>
                <span
                  className="typo-meta tracking-[0.14em] uppercase font-inter"
                  style={{ color: 'var(--vharanani-charcoal-60)' }}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
