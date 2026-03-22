import { type ReactNode } from 'react';
import { motion } from 'motion/react';
import { Layers, Building2, Home, Heart } from 'lucide-react';
import { ImageWithFallback } from '../../ui/ImageWithFallback';
import { SectionWrapper } from '../shared';

const IMAGES = {
  communityGathering: 'https://images.unsplash.com/photo-1655720359248-eeace8c709c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwY29tbXVuaXR5JTIwY2VsZWJyYXRpb24lMjB1bml0eSUyMGdhdGhlcmluZyUyMGhhbmRzfGVufDF8fHx8MTc3Mzg0OTM3NHww&ixlib=rb-4.1.0&q=80&w=1080',
};

export function FoundationWireframe_Heritage(): ReactNode {
  return (
    <SectionWrapper dark className="!py-0 !px-0">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-10 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden"
          style={{ border: '1px solid rgba(255,255,255,0.1)' }}
        >
          {/* Left — Text content */}
          <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-center relative" style={{ background: 'rgba(255,255,255,0.03)' }}>
            {/* Watermark */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 opacity-[0.03] pointer-events-none">
              <div className="font-bebas-neue uppercase tracking-wider" style={{ fontSize: '140px', lineHeight: '1', color: 'white' }}>
                VHARANANI
              </div>
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <Layers size={18} style={{ color: 'var(--vharanani-burgundy)' }} />
                <span className="typo-caption tracking-[0.25em] uppercase font-inter" style={{ color: 'var(--vharanani-burgundy-60)' }}>
                  OUR HERITAGE
                </span>
              </div>

              <h2 className="typo-headline-big font-bebas-neue tracking-wide uppercase text-white mb-4">
                Supported by the Vharanani Group.
              </h2>

              <div className="w-10 h-[2px] mb-6" style={{ background: 'var(--vharanani-burgundy)' }} />

              <p className="typo-copy font-inter text-white/60 mb-4">
                The David Mabilu Foundation works closely with the Vharanani Group and its subsidiary companies to support social development initiatives.
              </p>

              <p className="typo-copy-small font-inter text-white/60 mb-4">
                Through these relationships, the Foundation is able to leverage resources, expertise, and partnerships that enhance the reach and impact of its programmes.
              </p>

              <p className="typo-copy-small font-inter text-white/60 mb-8">
                Together, these efforts contribute to building stronger, more resilient communities across South Africa.
              </p>

              {/* Group divisions */}
              <div className="grid grid-cols-3 gap-0" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
                {[
                  { icon: <Building2 size={16} />, label: 'Properties' },
                  { icon: <Home size={16} />, label: 'DMFT' },
                  { icon: <Heart size={16} />, label: 'Foundation' },
                ].map((item, i) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 p-4"
                    style={{ borderRight: i < 2 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}
                  >
                    <div style={{ color: 'var(--vharanani-burgundy)' }}>{item.icon}</div>
                    <span className="typo-meta tracking-[0.12em] uppercase font-inter text-white/60">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Image */}
          <div className="lg:col-span-5 relative min-h-[360px]">
            <ImageWithFallback
              src={IMAGES.communityGathering}
              alt="Vharanani Group community engagement"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{
              background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 100%)'
            }} />
            {/* Overlaid quote */}
            <div className="absolute bottom-0 left-0 right-0 p-6" style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(4px)' }}>
              <p className="typo-copy-small font-inter italic text-white/80">
                "We build not just infrastructure, but the foundations for a dignified future."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
