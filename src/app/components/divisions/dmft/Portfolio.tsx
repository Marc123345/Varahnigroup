import { useState, type ReactNode } from 'react';
import { motion } from 'motion/react';
import { Building2 } from 'lucide-react';
import { ImageWithFallback } from '../../ui/ImageWithFallback';
import { SectionWrapper } from '../shared';

const IMAGES = {
  residentialEstate: 'https://vharananiproperties.co.za/wp-content/uploads/2020/08/rsz_2-belle-ombre.jpg',
  apartment: 'https://vharananiproperties.co.za/wp-content/uploads/2020/08/rsz_3-belle-ombre.jpg',
  townhouse: 'https://vharananiproperties.co.za/wp-content/uploads/2020/08/Belle-Ombre-01-1.jpg',
  mixedUse: 'https://vharananiproperties.co.za/wp-content/uploads/2018/01/Interior3.jpg',
};

const DEVELOPMENTS = [
  {
    id: 'residential-estates',
    title: 'Residential Estates',
    category: 'FLAGSHIP',
    image: IMAGES.residentialEstate,
    description: 'Secure residential estates designed to provide comfortable and modern living environments.',
    detail: 'DMFT develops secure residential estates across South Africa, designed to provide comfortable, modern living environments with shared amenities, landscaped gardens, and 24-hour security.',
    features: ['Gated Security', 'Modern Amenities', 'Landscaped Gardens', 'Community Living'],
    projects: [
      { name: 'Belle Ombre Estate', location: 'South Africa', status: 'Completed' },
      { name: 'Sterpark Residential', location: 'Limpopo', status: 'Completed' },
    ],
    metric: { value: '1,200+', label: 'Units Across Estates' },
  },
  {
    id: 'apartments-townhouses',
    title: 'Apartment Developments',
    category: 'URBAN LIVING',
    image: IMAGES.apartment,
    description: 'Well-designed apartment developments offering efficient living spaces within growing urban areas.',
    detail: 'Our apartment developments are designed for modern urban living — efficient, well-finished units in strategically located complexes with parking, security, and communal facilities.',
    features: ['Modern Finishes', 'Open-Plan Living', 'Parking Included', 'Security'],
    projects: [
      { name: 'Nellmapius X22 Apartments', location: 'Gauteng', status: 'Completed' },
      { name: 'Soshanguve Ext 19', location: 'Gauteng', status: 'Completed' },
    ],
    metric: { value: '800+', label: 'Units Planned' },
  },
  {
    id: 'mixed-use',
    title: 'Mixed-Use Developments',
    category: 'INTEGRATED',
    image: IMAGES.mixedUse,
    description: 'Integrated developments that combine residential, commercial, and community spaces.',
    detail: 'Our mixed-use projects create self-sustaining environments where people can live, work, and engage with their communities in one well-planned precinct with retail, office, and residential components.',
    features: ['Retail Ground Floor', 'Office Spaces', 'Residential Above', 'Community Spaces'],
    projects: [
      { name: 'Faranani Place', location: 'Limpopo', status: 'Completed' },
      { name: 'ST Maria Development', location: 'South Africa', status: 'Completed' },
    ],
    metric: { value: '3', label: 'Precincts In Development' },
  },
];

interface Props {
  activeDevelopment?: string;
}

export function DMFTWireframe_Portfolio({ activeDevelopment }: Props = {}): ReactNode {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const active = DEVELOPMENTS.find((d) => d.id === activeDevelopment) || null;

  return (
    <SectionWrapper className="!py-0 !px-0">
      {/* ── FOCUSED DEVELOPMENT HERO (when a specific development is active) ── */}
      {active && (
        <div className="px-6 md:px-12 lg:px-20 pt-10 md:pt-14 pb-8" style={{ background: '#ffffff' }}>
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[2px]" style={{ background: 'var(--vharanani-burgundy)' }} />
              <span className="typo-caption tracking-[0.28em] uppercase font-inter" style={{ color: 'var(--vharanani-burgundy)' }}>
                {active.category}
              </span>
            </div>

            {/* Hero image */}
            <div className="relative overflow-hidden mb-8" style={{ height: 'clamp(240px, 35vh, 380px)' }}>
              <ImageWithFallback
                src={active.image}
                alt={active.title}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ filter: 'brightness(0.6)' }}
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10">
                <div className="flex items-center gap-3 mb-2">
                  <Building2 size={22} className="text-white opacity-80" />
                  <h2 className="font-bebas-neue uppercase text-white" style={{ fontSize: 'clamp(28px, 4vw, 48px)', lineHeight: 1.05 }}>
                    {active.title}
                  </h2>
                </div>
                <p className="font-inter typo-copy text-white/80 max-w-xl">
                  {active.detail}
                </p>
              </div>
              <div className="absolute top-6 right-6 px-3 py-1.5" style={{ background: 'var(--vharanani-burgundy)' }}>
                <span className="typo-meta tracking-[0.2em] uppercase font-inter text-white">{active.category}</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: 'var(--vharanani-burgundy)' }} />
            </div>

            {/* Features + Projects */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-bebas-neue typo-headline-small uppercase tracking-wide mb-4" style={{ color: 'var(--vharanani-charcoal)' }}>
                  Features
                </h3>
                <div className="grid grid-cols-2 gap-0" style={{ border: '1px solid var(--vharanani-charcoal-20)' }}>
                  {active.features.map((f, fi) => (
                    <div
                      key={f}
                      className="flex items-center gap-3 p-4"
                      style={{
                        borderRight: fi % 2 === 0 ? '1px solid var(--vharanani-charcoal-20)' : 'none',
                        borderBottom: fi < 2 ? '1px solid var(--vharanani-charcoal-20)' : 'none',
                      }}
                    >
                      <div className="w-1.5 h-1.5 flex-shrink-0" style={{ background: 'var(--vharanani-burgundy)' }} />
                      <span className="typo-copy-small font-inter" style={{ color: 'var(--vharanani-charcoal-80)' }}>{f}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-baseline gap-3">
                  <span className="font-bebas-neue" style={{ fontSize: 40, lineHeight: 1, color: 'var(--vharanani-burgundy)' }}>{active.metric.value}</span>
                  <span className="typo-caption tracking-[0.15em] uppercase font-inter" style={{ color: 'var(--vharanani-charcoal-60)' }}>{active.metric.label}</span>
                </div>
              </div>
              <div>
                <h3 className="font-bebas-neue typo-headline-small uppercase tracking-wide mb-4" style={{ color: 'var(--vharanani-charcoal)' }}>
                  Key Projects
                </h3>
                <div className="space-y-3">
                  {active.projects.map((proj) => (
                    <div key={proj.name} className="p-4" style={{ border: '1px solid var(--vharanani-charcoal-20)', background: 'rgba(0,0,0,0.02)' }}>
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-bebas-neue typo-headline-small tracking-wide" style={{ color: 'var(--vharanani-charcoal)' }}>{proj.name}</h4>
                        <span className="typo-caption tracking-[0.15em] uppercase px-2 py-1" style={{ color: 'var(--vharanani-burgundy)', border: '1px solid var(--vharanani-burgundy)' }}>{proj.status}</span>
                      </div>
                      <span className="tracking-[0.1em] uppercase font-inter typo-label" style={{ color: 'var(--vharanani-charcoal-60)' }}>{proj.location}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ borderBottom: '1px solid var(--vharanani-charcoal-20)' }} />
          </div>
        </div>
      )}

      {/* ── SECTION HEADER ── */}
      <div className="px-6 md:px-12 lg:px-20 pt-10 md:pt-14 pb-8" style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[2px]" style={{ background: 'var(--vharanani-burgundy)' }} />
                <span className="typo-caption tracking-[0.28em] uppercase font-inter" style={{ color: 'var(--vharanani-burgundy)' }}>
                  {active ? 'ALL DEVELOPMENTS' : 'PORTFOLIO'}
                </span>
              </div>
              {!active && (
                <h2 className="typo-header font-bebas-neue tracking-wide uppercase" style={{ color: 'var(--vharanani-charcoal)', lineHeight: 0.95 }}>
                  Our<br />Developments
                </h2>
              )}
            </div>
            {!active && (
              <div className="lg:col-span-5">
                <p className="typo-copy font-inter" style={{ color: 'var(--vharanani-charcoal-60)' }}>
                  DMFT Property Developers focuses on the development of well-planned residential and mixed-use developments across South Africa.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── FLAGSHIP HERO CARD ── */}
      <div className="px-6 md:px-12 lg:px-20" style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden"
            style={{ border: '1px solid var(--vharanani-charcoal-20)' }}
          >
            {/* Image — 7 cols */}
            <div className="lg:col-span-7 relative h-[320px] lg:h-auto lg:min-h-[440px] overflow-hidden group">
              <ImageWithFallback
                src={DEVELOPMENTS[0].image}
                alt={DEVELOPMENTS[0].title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0" style={{
                background: 'linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 100%)'
              }} />
              {/* Ghost number */}
              <div className="absolute top-6 left-8">
                <span className="font-bebas-neue" style={{ fontSize: '140px', lineHeight: 1, color: 'rgba(255,255,255,0.06)' }}>01</span>
              </div>
              {/* Flagship badge */}
              <div className="absolute top-6 right-6 px-3 py-1.5" style={{ background: 'var(--vharanani-burgundy)' }}>
                <span className="typo-meta tracking-[0.2em] uppercase font-inter text-white">Flagship</span>
              </div>
              {/* Bottom metric */}
              <div className="absolute bottom-0 left-0 right-0 px-8 py-5" style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }}>
                <div className="flex items-center gap-4">
                  <div className="typo-headline-big font-bebas-neue text-white">
                    {DEVELOPMENTS[0].metric.value}
                  </div>
                  <div className="typo-caption tracking-[0.15em] uppercase font-inter text-white/50">
                    {DEVELOPMENTS[0].metric.label}
                  </div>
                </div>
              </div>
            </div>

            {/* Content — 5 cols */}
            <div className="lg:col-span-5 p-5 sm:p-8 md:p-10 flex flex-col justify-center" style={{ background: '#fafafa' }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 flex items-center justify-center" style={{ border: '1.5px solid var(--vharanani-burgundy)', color: 'var(--vharanani-burgundy)' }}>
                  <Building2 size={22} />
                </div>
                <span className="typo-caption tracking-[0.2em] uppercase font-inter" style={{ color: 'var(--vharanani-burgundy)' }}>
                  {DEVELOPMENTS[0].category}
                </span>
                <div className="flex-1 h-[1px] ml-2" style={{ background: 'var(--vharanani-charcoal-20)' }} />
              </div>

              <h3 className="typo-headline-big font-bebas-neue uppercase tracking-wide mb-5" style={{ color: 'var(--vharanani-charcoal)' }}>
                {DEVELOPMENTS[0].title}
              </h3>
              <p className="typo-copy font-inter mb-8" style={{ color: 'var(--vharanani-charcoal-60)' }}>
                {DEVELOPMENTS[0].description}
              </p>

              <div className="grid grid-cols-2 gap-0" style={{ border: '1px solid var(--vharanani-charcoal-20)' }}>
                {DEVELOPMENTS[0].features.map((f, fi) => (
                  <div
                    key={f}
                    className="flex items-center gap-3 p-4"
                    style={{
                      borderRight: fi % 2 === 0 ? '1px solid var(--vharanani-charcoal-20)' : 'none',
                      borderBottom: fi < 2 ? '1px solid var(--vharanani-charcoal-20)' : 'none',
                    }}
                  >
                    <div className="w-1.5 h-1.5 flex-shrink-0" style={{ background: 'var(--vharanani-burgundy)' }} />
                    <span className="typo-copy-small font-inter" style={{ color: 'var(--vharanani-charcoal-80)' }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── SECONDARY DEVELOPMENT CARDS — 3 columns ── */}
      <div className="px-6 md:px-12 lg:px-20 pb-0" style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0" style={{ borderLeft: '1px solid var(--vharanani-charcoal-20)', borderRight: '1px solid var(--vharanani-charcoal-20)', borderBottom: '1px solid var(--vharanani-charcoal-20)' }}>
            {DEVELOPMENTS.slice(1).map((dev, i) => {
              const isExpanded = expandedCard === i;
              return (
                <motion.div
                  key={dev.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group cursor-pointer"
                  style={{ borderRight: i < 2 ? '1px solid var(--vharanani-charcoal-20)' : 'none' }}
                  onClick={() => setExpandedCard(isExpanded ? null : i)}
                >
                  {/* Image header */}
                  <div className="relative h-[220px] overflow-hidden">
                    <ImageWithFallback
                      src={dev.image}
                      alt={dev.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0" style={{
                      background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.6) 100%)'
                    }} />
                    {/* Hover overlay */}
                    <div
                      className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
                      style={{ background: 'rgba(0,0,0,0.75)', opacity: isExpanded ? 1 : 0 }}
                    >
                      <span className="font-bebas-neue typo-headline-small tracking-wider uppercase text-white">
                        {isExpanded ? 'Close' : 'View Details'}
                      </span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ pointerEvents: 'none' }}>
                      {!isExpanded && <span className="font-bebas-neue typo-headline-small tracking-wider uppercase text-white">View Details</span>}
                    </div>
                    {/* Ghost number */}
                    <div className="absolute top-2 left-4">
                      <span className="font-bebas-neue" style={{ fontSize: '80px', lineHeight: 1, color: 'rgba(255,255,255,0.06)' }}>
                        {String(i + 2).padStart(2, '0')}
                      </span>
                    </div>
                    {/* Category badge */}
                    <div className="absolute top-4 right-4 px-2 py-1" style={{ background: 'rgba(0,0,0,0.85)' }}>
                      <span className="typo-meta tracking-[0.15em] uppercase font-inter text-white">{dev.category}</span>
                    </div>
                    {/* Bottom metric */}
                    <div className="absolute bottom-0 left-0 right-0 px-5 py-3" style={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(4px)' }}>
                      <div className="flex items-center gap-3">
                        <span className="typo-headline-small font-bebas-neue text-white">{dev.metric.value}</span>
                        <span className="typo-meta tracking-[0.1em] uppercase font-inter text-white/60">{dev.metric.label}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6" style={{ background: i % 2 === 0 ? '#ffffff' : '#fafafa' }}>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="typo-headline-small font-bebas-neue uppercase tracking-wide" style={{ color: 'var(--vharanani-charcoal)' }}>
                        {dev.title}
                      </h4>
                      <div
                        className="w-6 h-6 flex items-center justify-center transition-transform duration-300 flex-shrink-0"
                        style={{ border: '1px solid var(--vharanani-charcoal-20)', transform: isExpanded ? 'rotate(45deg)' : 'none' }}
                      >
                        <span className="font-bebas-neue text-sm leading-none" style={{ color: 'var(--vharanani-burgundy)' }}>+</span>
                      </div>
                    </div>
                    <p className="typo-copy-small font-inter mb-4" style={{ color: 'var(--vharanani-charcoal-60)' }}>
                      {dev.description}
                    </p>

                    {/* Expandable features */}
                    <motion.div
                      initial={false}
                      animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="grid grid-cols-2 gap-0 mt-2" style={{ border: '1px solid var(--vharanani-charcoal-20)' }}>
                        {dev.features.map((f, fi) => (
                          <div
                            key={f}
                            className="flex items-center gap-2 px-3 py-2"
                            style={{
                              borderRight: fi % 2 === 0 ? '1px solid var(--vharanani-charcoal-20)' : 'none',
                              borderBottom: fi < dev.features.length - 2 ? '1px solid var(--vharanani-charcoal-20)' : 'none',
                            }}
                          >
                            <div className="w-1.5 h-1.5 flex-shrink-0" style={{ background: 'var(--vharanani-burgundy)' }} />
                            <span className="typo-meta font-inter" style={{ color: 'var(--vharanani-charcoal-80)' }}>{f}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-3 flex items-center gap-2">
                        <div className="h-[1px] flex-1" style={{ background: 'var(--vharanani-charcoal-20)' }} />
                        <span className="typo-meta tracking-[0.12em] uppercase font-inter" style={{ color: 'var(--vharanani-charcoal-40)' }}>
                          {dev.metric.value} {dev.metric.label}
                        </span>
                      </div>
                    </motion.div>

                    {!isExpanded && (
                      <div className="grid grid-cols-2 gap-1">
                        {dev.features.slice(0, 2).map((f) => (
                          <div key={f} className="flex items-center gap-2">
                            <div className="w-1 h-1 flex-shrink-0" style={{ background: 'var(--vharanani-burgundy)' }} />
                            <span className="typo-meta font-inter" style={{ color: 'var(--vharanani-charcoal-60)' }}>{f}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── PORTFOLIO SUMMARY BAND ── */}
      <div className="relative overflow-hidden" style={{ background: 'var(--vharanani-burgundy)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 py-12" style={{ borderTop: '3px solid var(--vharanani-burgundy)' }}>
            {DEVELOPMENTS.map((dev, i) => (
              <motion.div
                key={dev.title + '-summary'}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 text-center"
                style={{ borderRight: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}
              >
                <div className="typo-headline-small font-bebas-neue uppercase tracking-wide text-white mb-1">
                  {dev.title}
                </div>
                <div className="typo-headline-big font-bebas-neue text-white">
                  {dev.metric.value}
                </div>
                <div className="typo-meta tracking-[0.1em] uppercase font-inter text-white/60 mt-1">
                  {dev.metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
