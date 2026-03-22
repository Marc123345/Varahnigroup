import { type ReactNode } from 'react';
import { motion } from 'motion/react';
import { HardHat, Landmark, Cpu, Heart } from 'lucide-react';
import { ImageWithFallback } from '../../ui/ImageWithFallback';
import { SectionWrapper } from '../shared';

export function GroupWireframe_StrategicPillars(): ReactNode {
  const PILLAR_IMAGES = {
    infrastructure: 'https://images.unsplash.com/photo-1750580037263-1b012684fb44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdod2F5JTIwYnJpZGdlJTIwY29uc3RydWN0aW9uJTIwU291dGglMjBBZnJpY2ElMjBpbmZyYXN0cnVjdHVyZXxlbnwxfHx8fDE3NzM3NDg3NTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    assets: 'https://images.unsplash.com/photo-1769697694222-016642c08125?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb21tZXJjaWFsJTIwcHJvcGVydHklMjBpbnZlc3RtZW50JTIwcmVhbCUyMGVzdGF0ZXxlbnwxfHx8fDE3NzM3NDg3NTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    innovation: 'https://images.unsplash.com/photo-1759836096317-e746643cc277?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbiUyMGRpZ2l0YWwlMjB0cmFuc2Zvcm1hdGlvbiUyMHNlcnZlcnxlbnwxfHx8fDE3NzM3NDg3NTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    social: 'https://images.unsplash.com/photo-1761039808115-77b271985e47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwY29tbXVuaXR5JTIwZW1wb3dlcm1lbnQlMjBzb2NpYWwlMjB1cGxpZnRtZW50JTIweW91dGh8ZW58MXx8fHwxNzczNzQ4NzU0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    panorama: 'https://images.unsplash.com/photo-1765475467677-579353b25ce0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJpYWwlMjB2aWV3JTIwQWZyaWNhbiUyMGNpdHklMjB1cmJhbiUyMHBsYW5uaW5nJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc3Mzc0ODc1NXww&ixlib=rb-4.1.0&q=80&w=1080',
  };

  const pillars = [
    {
      icon: <HardHat size={22} />,
      title: 'Infrastructure',
      step: '01',
      image: PILLAR_IMAGES.infrastructure,
      headline: 'Building the Backbone of Progress',
      description: 'Building roads, bridges, clinics, schools, and essential services that support national growth and community development.',
      capabilities: ['Roads & Highways', 'Bridges & Culverts', 'Public Facilities', 'Water Infrastructure'],
      metric: { value: '200+', label: 'Projects Delivered' },
    },
    {
      icon: <Landmark size={22} />,
      title: 'Asset Ownership',
      step: '02',
      image: PILLAR_IMAGES.assets,
      headline: 'Long-Term Value Creation',
      description: 'Developing and managing property assets that generate sustainable economic value and build lasting equity for future generations.',
      capabilities: ['Commercial Property', 'Residential Estates', 'Industrial Assets', 'Land Banking'],
      metric: { value: 'R5B+', label: 'Asset Portfolio' },
    },
    {
      icon: <Cpu size={22} />,
      title: 'Innovation',
      step: '03',
      image: PILLAR_IMAGES.innovation,
      headline: 'Pioneering New Frontiers',
      description: 'Exploring growth opportunities across technology, aviation, and resource-driven industries.',
      capabilities: ['Digital Solutions', 'Aviation Services', 'Resource Management', 'Smart Infrastructure'],
      metric: { value: '4', label: 'Emerging Sectors' },
    },
    {
      icon: <Heart size={22} />,
      title: 'Social Impact',
      step: '04',
      image: PILLAR_IMAGES.social,
      headline: 'Empowering Communities',
      description: 'Investing in people, education, and entrepreneurial development to ensure inclusive and sustainable progress.',
      capabilities: ['Education Bursaries', 'Skills Training', 'Housing Programmes', 'Health Initiatives'],
      metric: { value: '50K+', label: 'Lives Impacted' },
    },
  ];

  return (
    <SectionWrapper className="!py-0 !px-0">
      {/* ── CINEMATIC HEADER BAND ── */}
      <div className="relative h-[40vh] min-h-[340px] overflow-hidden">
        <ImageWithFallback
          src={PILLAR_IMAGES.panorama}
          alt="Strategic growth across Africa"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.98) 100%)'
        }} />
        <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: 'var(--vharanani-burgundy)' }} />

        <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-12 lg:px-20 pb-12">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-[2px]" style={{ background: 'var(--vharanani-burgundy)' }} />
                  <span className="typo-caption tracking-[0.25em] uppercase font-inter" style={{ color: 'var(--vharanani-burgundy-60)' }}>
                    STRATEGY
                  </span>
                </div>
                <h2 className="typo-header font-bebas-neue uppercase tracking-wide text-white" style={{ lineHeight: 0.95 }}>
                  Strategic<br />Pillars
                </h2>
              </div>
              <div className="lg:col-span-5">
                <p className="typo-copy font-inter text-white/50">
                  Four interconnected pillars that define our growth trajectory — each reinforcing the others to create a resilient, diversified platform for sustainable value creation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── PILLAR CARDS — Alternating layout ── */}
      <div style={{ background: '#ffffff' }}>
        {pillars.map((pillar, i) => {
          const isEven = i % 2 === 0;
          return (
            <motion.div
              key={pillar.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                <div
                  className="grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden"
                  style={{
                    borderLeft: '1px solid var(--vharanani-charcoal-20)',
                    borderRight: '1px solid var(--vharanani-charcoal-20)',
                    borderBottom: '1px solid var(--vharanani-charcoal-20)',
                    borderTop: i === 0 ? '1px solid var(--vharanani-charcoal-20)' : 'none',
                  }}
                >
                  {/* Image side */}
                  <div className={`lg:col-span-5 relative h-[280px] lg:h-auto lg:min-h-[380px] overflow-hidden ${isEven ? '' : 'lg:order-2'}`}>
                    <motion.div
                      className="absolute inset-0"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                    <ImageWithFallback
                      src={pillar.image}
                      alt={pillar.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    </motion.div>
                    <div className="absolute inset-0" style={{
                      background: isEven
                        ? 'linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.5) 100%)'
                        : 'linear-gradient(225deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.5) 100%)'
                    }} />
                    {/* Large ghost step number */}
                    <div className="absolute top-4 left-6">
                      <span className="font-bebas-neue" style={{ fontSize: '120px', lineHeight: 1, color: 'rgba(255,255,255,0.07)' }}>
                        {pillar.step}
                      </span>
                    </div>
                    {/* Bottom metric overlay */}
                    <div className="absolute bottom-0 left-0 right-0 px-6 py-4" style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }}>
                      <div className="flex items-center gap-4">
                        <div className="typo-headline-big font-bebas-neue" style={{ color: 'var(--vharanani-burgundy)' }}>
                          {pillar.metric.value}
                        </div>
                        <div className="typo-caption tracking-[0.15em] uppercase font-inter text-white/50">
                          {pillar.metric.label}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content side */}
                  <div className={`lg:col-span-7 p-8 md:p-12 flex flex-col justify-center ${isEven ? '' : 'lg:order-1'}`} style={{ background: i % 2 === 0 ? '#ffffff' : '#fafafa' }}>
                    {/* Icon + tag row */}
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 flex items-center justify-center" style={{ border: '1.5px solid var(--vharanani-burgundy)', color: 'var(--vharanani-burgundy)' }}>
                        {pillar.icon}
                      </div>
                      <div>
                        <span className="typo-caption tracking-[0.2em] uppercase font-inter" style={{ color: 'var(--vharanani-burgundy)' }}>
                          PILLAR {pillar.step}
                        </span>
                      </div>
                      {/* Horizontal line */}
                      <div className="flex-1 h-[1px] ml-2" style={{ background: 'var(--vharanani-charcoal-20)' }} />
                    </div>

                    <h3 className="typo-headline-big font-bebas-neue uppercase tracking-wide mb-2" style={{ color: 'var(--vharanani-charcoal)' }}>
                      {pillar.title}
                    </h3>
                    <p className="typo-subline font-bebas-neue uppercase tracking-wide mb-5" style={{ color: 'var(--vharanani-burgundy)', lineHeight: 1.2 }}>
                      {pillar.headline}
                    </p>
                    <p className="typo-copy font-inter mb-8" style={{ color: 'var(--vharanani-charcoal-60)' }}>
                      {pillar.description}
                    </p>

                    {/* Capabilities grid */}
                    <div className="grid grid-cols-2 gap-0" style={{ border: '1px solid var(--vharanani-charcoal-20)' }}>
                      {pillar.capabilities.map((cap, ci) => (
                        <div
                          key={cap}
                          className="flex items-center gap-3 p-4"
                          style={{
                            borderRight: ci % 2 === 0 ? '1px solid var(--vharanani-charcoal-20)' : 'none',
                            borderBottom: ci < 2 ? '1px solid var(--vharanani-charcoal-20)' : 'none',
                          }}
                        >
                          <div className="w-1.5 h-1.5 flex-shrink-0" style={{ background: 'var(--vharanani-burgundy)' }} />
                          <span className="typo-copy-small font-inter" style={{ color: 'var(--vharanani-charcoal-80)' }}>
                            {cap}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ── CLOSING SUMMARY BAND ── */}
      <div className="relative overflow-hidden" style={{ background: 'var(--vharanani-burgundy)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 py-12" style={{ borderTop: '1px solid rgba(255,255,255,0.2)' }}>
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.step + '-summary'}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 text-center"
                style={{ borderRight: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}
              >
                <div className="w-10 h-10 mx-auto mb-3 flex items-center justify-center" style={{ border: '1px solid rgba(255,255,255,0.4)', color: 'white' }}>
                  {pillar.icon}
                </div>
                <div className="typo-headline-small font-bebas-neue uppercase tracking-wide text-white mb-1">
                  {pillar.title}
                </div>
                <div className="typo-headline-big font-bebas-neue text-white">
                  {pillar.metric.value}
                </div>
                <div className="typo-meta tracking-[0.1em] uppercase font-inter text-white/60 mt-1">
                  {pillar.metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
