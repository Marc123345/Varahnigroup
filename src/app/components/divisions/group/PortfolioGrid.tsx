import { type ReactNode } from 'react';
import { motion } from 'motion/react';
import { Building2, Home, Landmark } from 'lucide-react';
import { ImageWithFallback } from '../../ui/ImageWithFallback';
import { SectionWrapper } from '../shared';

const PORTFOLIO_BENTO_IMAGES = {
  construction: 'https://i0.wp.com/vharananiproperties.co.za/wp-content/uploads/2021/07/DJI_0673-scaled.jpg?w=1440&ssl=1',
  foundation: 'https://i0.wp.com/vharananiproperties.co.za/wp-content/uploads/2020/08/rsz_dsc_0127.jpg?w=1080&ssl=1',
  dmft: 'https://i0.wp.com/vharananiproperties.co.za/wp-content/uploads/2020/08/rsz_faranani-estate-1-1.jpg?w=1080&ssl=1',
};

const PORTFOLIO_BENTO_ITEMS = [
  {
    id: 'properties',
    title: 'Vharanani Properties',
    tag: 'CONSTRUCTION & INFRASTRUCTURE',
    image: PORTFOLIO_BENTO_IMAGES.construction,
    description: 'Delivering large-scale civil engineering and infrastructure projects that improve quality of life and restore dignity to communities.',
    stats: [{ value: '200+', label: 'Projects' }, { value: 'Grade 9', label: 'CIDB' }],
    capabilities: ['Roads & Highways', 'Water & Sanitation', 'Public Buildings'],
    size: 'large',
  },
  {
    id: 'dmft',
    title: 'DMFT Property Developers',
    tag: 'PROPERTY DEVELOPMENT',
    image: PORTFOLIO_BENTO_IMAGES.dmft,
    description: 'Delivering high-quality residential and mixed-use developments as part of the Vharanani Group.',
    stats: [{ value: '15+', label: 'Developments' }, { value: 'R2B+', label: 'Portfolio' }],
    capabilities: ['Residential Estates', 'Mixed-Use Precincts'],
    size: 'medium',
  },
  {
    id: 'foundation',
    title: 'The David Mabilu Foundation',
    tag: 'SOCIAL IMPACT',
    image: PORTFOLIO_BENTO_IMAGES.foundation,
    description: 'Advancing education, housing access, and community upliftment across South Africa.',
    stats: [{ value: '34', label: 'Scholarships' }, { value: '5+', label: 'Provinces' }],
    capabilities: ['Education', 'Housing', 'Community Upliftment'],
    size: 'medium',
  },
];

const PORTFOLIO_METRICS = [
  { value: 'R5B+', label: 'Portfolio Value' },
  { value: '20+', label: 'Years' },
  { value: '3', label: 'Divisions' },
  { value: '9', label: 'Provinces' },
];

export function GroupWireframe_PortfolioGrid(): ReactNode {
  return (
    <SectionWrapper dark className="!py-0 !px-0">
      <div className="px-6 md:px-12 lg:px-20 pt-10 md:pt-14 pb-10 md:pb-14" style={{ background: '#0a0a0a' }}>
        <div className="max-w-7xl mx-auto">

          {/* ── HEADER ── */}
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[2px]" style={{ background: 'var(--vharanani-burgundy)' }} />
                <span className="typo-caption tracking-[0.25em] uppercase font-inter" style={{ color: 'var(--vharanani-burgundy)' }}>
                  HOLDINGS
                </span>
              </div>
              <h2 className="typo-header font-bebas-neue uppercase tracking-wide text-white" style={{ lineHeight: 0.95 }}>
                Our Portfolio
              </h2>
            </div>
            <p className="hidden lg:block typo-copy-small font-inter max-w-xs text-right" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Three divisions working in concert to deliver infrastructure, property, and social impact across South Africa.
            </p>
          </div>

          {/* ── BENTO GRID ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">

            {/* LARGE CELL — Vharanani Properties (spans 7 cols, 2 rows) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 lg:row-span-2 relative overflow-hidden group"
              style={{ minHeight: '520px', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <ImageWithFallback
                src={PORTFOLIO_BENTO_ITEMS[0].image}
                alt={PORTFOLIO_BENTO_ITEMS[0].title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.88) 100%)' }} />

              {/* Tag top-left */}
              <div className="absolute top-6 left-6 flex items-center gap-2">
                <div className="w-7 h-7 flex items-center justify-center" style={{ border: '1px solid rgba(255,255,255,0.3)', color: 'white' }}>
                  <Building2 size={18} />
                </div>
                <span className="typo-meta tracking-[0.18em] uppercase font-inter" style={{ color: 'rgba(255,255,255,0.7)' }}>{PORTFOLIO_BENTO_ITEMS[0].tag}</span>
              </div>

              {/* Ghost number */}
              <div className="absolute top-4 right-6">
                <span className="font-bebas-neue" style={{ fontSize: '120px', lineHeight: 1, color: 'rgba(255,255,255,0.04)' }}>01</span>
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="typo-headline-big font-bebas-neue uppercase tracking-wide text-white mb-3">
                  {PORTFOLIO_BENTO_ITEMS[0].title}
                </h3>
                <p className="typo-copy-small font-inter mb-6" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  {PORTFOLIO_BENTO_ITEMS[0].description}
                </p>
                {/* Stats + capabilities */}
                <div className="flex items-center gap-0" style={{ border: '1px solid rgba(255,255,255,0.12)' }}>
                  {PORTFOLIO_BENTO_ITEMS[0].stats.map((s, i) => (
                    <div key={s.label} className="flex-1 py-3 px-4 text-center" style={{ borderRight: i < PORTFOLIO_BENTO_ITEMS[0].stats.length - 1 ? '1px solid rgba(255,255,255,0.12)' : 'none' }}>
                      <div className="font-bebas-neue typo-subline text-white">{s.value}</div>
                      <div className="typo-meta tracking-[0.1em] uppercase font-inter mt-0.5" style={{ color: 'rgba(255,255,255,0.5)' }}>{s.label}</div>
                    </div>
                  ))}
                  <div className="flex-1 py-3 px-4" style={{ borderLeft: '1px solid rgba(255,255,255,0.12)' }}>
                    <div className="flex flex-wrap gap-1">
                      {PORTFOLIO_BENTO_ITEMS[0].capabilities.map(cap => (
                        <span key={cap} className="typo-meta font-inter px-1.5 py-0.5" style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.6)', fontSize: '10px' }}>{cap}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* MEDIUM CELL — DMFT (spans 5 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-5 relative overflow-hidden group"
              style={{ minHeight: '250px', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <ImageWithFallback
                src={PORTFOLIO_BENTO_ITEMS[1].image}
                alt={PORTFOLIO_BENTO_ITEMS[1].title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.75) 100%)' }} />

              <div className="absolute top-5 left-5 flex items-center gap-2">
                <div className="w-7 h-7 flex items-center justify-center" style={{ border: '1px solid rgba(255,255,255,0.3)', color: 'white' }}>
                  <Home size={18} />
                </div>
                <span className="typo-meta tracking-[0.15em] uppercase font-inter" style={{ color: 'rgba(255,255,255,0.7)' }}>{PORTFOLIO_BENTO_ITEMS[1].tag}</span>
              </div>

              <div className="absolute top-4 right-5">
                <span className="font-bebas-neue" style={{ fontSize: '80px', lineHeight: 1, color: 'rgba(255,255,255,0.05)' }}>02</span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="typo-subline font-bebas-neue uppercase tracking-wide text-white mb-2">{PORTFOLIO_BENTO_ITEMS[1].title}</h3>
                <p className="typo-copy-small font-inter mb-4" style={{ color: 'rgba(255,255,255,0.65)' }}>{PORTFOLIO_BENTO_ITEMS[1].description}</p>
                <div className="flex items-center gap-3">
                  {PORTFOLIO_BENTO_ITEMS[1].stats.map((s) => (
                    <div key={s.label} className="px-3 py-1.5 text-center" style={{ border: '1px solid rgba(255,255,255,0.15)' }}>
                      <span className="font-bebas-neue typo-headline-small text-white">{s.value}</span>
                      <span className="typo-meta font-inter ml-2" style={{ color: 'rgba(255,255,255,0.5)' }}>{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* MEDIUM CELL — Foundation (spans 5 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 relative overflow-hidden group"
              style={{ minHeight: '250px', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <ImageWithFallback
                src={PORTFOLIO_BENTO_ITEMS[2].image}
                alt={PORTFOLIO_BENTO_ITEMS[2].title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.75) 100%)' }} />

              <div className="absolute top-5 left-5 flex items-center gap-2">
                <div className="w-7 h-7 flex items-center justify-center" style={{ border: '1px solid rgba(255,255,255,0.3)', color: 'white' }}>
                  <Landmark size={18} />
                </div>
                <span className="typo-meta tracking-[0.15em] uppercase font-inter" style={{ color: 'rgba(255,255,255,0.7)' }}>{PORTFOLIO_BENTO_ITEMS[2].tag}</span>
              </div>

              <div className="absolute top-4 right-5">
                <span className="font-bebas-neue" style={{ fontSize: '80px', lineHeight: 1, color: 'rgba(255,255,255,0.05)' }}>03</span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="typo-subline font-bebas-neue uppercase tracking-wide text-white mb-2">{PORTFOLIO_BENTO_ITEMS[2].title}</h3>
                <p className="typo-copy-small font-inter mb-4" style={{ color: 'rgba(255,255,255,0.65)' }}>{PORTFOLIO_BENTO_ITEMS[2].description}</p>
                <div className="flex items-center gap-3">
                  {PORTFOLIO_BENTO_ITEMS[2].stats.map((s) => (
                    <div key={s.label} className="px-3 py-1.5 text-center" style={{ border: '1px solid rgba(255,255,255,0.15)' }}>
                      <span className="font-bebas-neue typo-headline-small text-white">{s.value}</span>
                      <span className="typo-meta font-inter ml-2" style={{ color: 'rgba(255,255,255,0.5)' }}>{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* METRICS STRIP — full width */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-0"
              style={{ border: '1px solid rgba(255,255,255,0.08)' }}
            >
              {PORTFOLIO_METRICS.map((m, i) => (
                <div
                  key={m.label}
                  className="py-6 px-8 text-center"
                  style={{ borderRight: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none', background: 'rgba(255,255,255,0.02)' }}
                >
                  <div className="typo-headline-big font-bebas-neue" style={{ color: 'var(--vharanani-burgundy)' }}>{m.value}</div>
                  <div className="typo-meta tracking-[0.15em] uppercase font-inter mt-1" style={{ color: 'rgba(255,255,255,0.45)' }}>{m.label}</div>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
