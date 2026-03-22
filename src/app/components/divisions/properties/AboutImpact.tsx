import { type ReactNode } from 'react';
import { ImageWithFallback } from '../../ui/ImageWithFallback';
import { AnimatedCounter, SectionWrapper } from '../shared';

const IMAGES = {
  ceoPortrait: 'https://ik.imagekit.io/qcvroy8xpd/image%202.png',
};

export function PropertiesWireframe_AboutImpact(): ReactNode {
  return (
    <SectionWrapper>
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-8 h-[2px]" style={{ background: 'var(--vharanani-burgundy)' }} />
          <span className="typo-caption tracking-[0.25em] uppercase font-inter" style={{ color: 'var(--vharanani-burgundy)' }}>
            OUR STORY
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden" style={{ border: '1px solid var(--vharanani-charcoal-20)' }}>
          {/* Left Column — Image */}
          <div className="relative h-[360px] md:h-auto md:min-h-[520px] overflow-hidden flex items-center justify-center" style={{ background: '#f5f0ef' }}>
            <ImageWithFallback
              src={IMAGES.ceoPortrait}
              alt="David Mabilu, Founder & CEO of Vharanani Properties"
              className="w-full h-full object-contain object-center"
            />
            {/* Name overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)' }}>
              <div className="font-inter typo-meta tracking-[0.3em] uppercase mb-1" style={{ color: 'rgba(255,255,255,0.8)' }}>
                FOUNDER & CEO
              </div>
              <h3 className="font-bebas-neue typo-subline tracking-wide text-white uppercase">
                David Mabilu
              </h3>
            </div>
          </div>

          {/* Right Column — Text Content */}
          <div className="p-6 md:p-10 flex flex-col justify-center" style={{ background: '#fafafa' }}>
            <p className="typo-meta tracking-[0.25em] uppercase font-inter mb-2" style={{ color: 'var(--vharanani-burgundy)' }}>VHARANANI PROPERTIES</p>
            <div
              className="typo-caption tracking-[0.3em] uppercase font-inter mb-3"
              style={{ color: 'var(--vharanani-burgundy)' }}
            >
              OUR STORY
            </div>

            <h3 className="font-bebas-neue typo-headline-big tracking-wide uppercase mb-4" style={{ color: 'var(--vharanani-charcoal)' }}>
              About Us
            </h3>

            <div className="w-12 h-[3px] mb-6" style={{ background: 'var(--vharanani-burgundy)' }} />

            <p className="font-inter typo-copy mb-4" style={{ color: 'var(--vharanani-charcoal-80)' }}>
              Vharanani Properties was founded in 2001 by Chief Executive Officer David Mabilu. What began as a small operation has grown into one of South Africa&apos;s leading Black-owned and managed construction companies.
            </p>
            <p className="font-inter typo-copy mb-4" style={{ color: 'var(--vharanani-charcoal-80)' }}>
              With more than two decades of experience, the company has developed strong technical expertise across a broad range of infrastructure sectors, delivering projects that meet the highest standards of quality, safety, and efficiency.
            </p>
            <p className="font-inter typo-copy mb-6" style={{ color: 'var(--vharanani-charcoal-60)' }}>
              Today, Vharanani Properties operates nationally and has successfully completed numerous high-value construction projects valued at billions of rands. Our multidisciplinary capability enables us to deliver projects of varying scale and complexity while maintaining strict adherence to quality standards, safety protocols, and responsible project management.
            </p>

            {/* Power Grid — Core Stats */}
            <div className="grid grid-cols-3 gap-6 mb-6 pt-6" style={{ borderTop: '1px solid var(--vharanani-charcoal-20)' }}>
              {[
                { value: 20, suffix: '+', label: 'Years Experience' },
                { value: 1, suffix: '', label: 'B-BBEE Level', prefix: 'Level ' },
                { value: 9, suffix: '', label: 'Provinces Active' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                  <div className="font-inter typo-meta tracking-wider uppercase mt-1" style={{ color: 'var(--vharanani-charcoal-60)' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Mission Blockquote */}
            <div className="p-5" style={{ borderLeft: '3px solid var(--vharanani-burgundy)', background: 'rgba(0,0,0,0.04)' }}>
              <div className="font-inter typo-copy italic" style={{ color: 'var(--vharanani-charcoal)' }}>
                &ldquo;To restore people&apos;s dignity through infrastructure development.&rdquo;
              </div>
              <div className="font-inter typo-meta tracking-[0.15em] uppercase mt-2" style={{ color: 'var(--vharanani-charcoal-60)' }}>
                &mdash; Our Mission
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
