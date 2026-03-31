import { useState, type ReactNode } from 'react';
import { motion } from 'motion/react';
import { HardHat, Landmark, Heart, Globe, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '../../ui/ImageWithFallback';
import { SectionWrapper } from '../shared';

const IMAGES = {
  aerialDev: 'https://ik.imagekit.io/qcvroy8xpd/Vharnani%20final/76_commercial_kitchen_staff_food_preparation.jpg?updatedAt=1774955145540',
  blueprint: 'https://ik.imagekit.io/qcvroy8xpd/Vharnani%20final/78_technicians_servicing_rooftop_hvac_chiller_unit.jpg?updatedAt=1774955145170',
  propertyDev: 'https://ik.imagekit.io/qcvroy8xpd/Vharnani%20final/20_haranani_properties_maintenance_worker_kitchen.jpg?updatedAt=1774955145502',
  residentialEstate: 'https://ik.imagekit.io/qcvroy8xpd/Vharnani%20final/79_haranani_properties_commercial_kitchen_gas_appliance_repair.jpg?updatedAt=1774955145304',
  mixedUse: 'https://ik.imagekit.io/qcvroy8xpd/Vharnani%20final/77_haranani_properties_landscaping_team_garden_maintenance.jpg?updatedAt=1774955148286',
  townhouse: 'https://ik.imagekit.io/qcvroy8xpd/Vharnani%20final/75_haranani_properties_generator_servicing_close_up.jpg?updatedAt=1774955145509',
};

export function DMFTWireframe_CapabilitiesQuality(): ReactNode {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const capabilities = [
    { title: 'Land Development & Township Establishment', image: IMAGES.aerialDev },
    { title: 'Property Development Planning', image: IMAGES.blueprint },
    { title: 'Project Management', image: IMAGES.propertyDev },
    { title: 'Infrastructure Integration', image: IMAGES.mixedUse },
    { title: 'Residential Development Construction', image: IMAGES.residentialEstate },
    { title: 'Mixed-Use Development Delivery', image: IMAGES.townhouse },
  ];

  return (
    <SectionWrapper className="!py-0 !px-0">
      {/* ── HEADER BAND ── */}
      <div className="relative h-[30vh] min-h-[240px] overflow-hidden">
        <ImageWithFallback
          src={IMAGES.propertyDev}
          alt="DMFT development expertise"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.85) 100%)'
        }} />
        <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: 'var(--vharanani-burgundy)' }} />

        <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-12 lg:px-20 pb-10">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px]" style={{ background: 'var(--vharanani-burgundy)' }} />
              <span className="typo-caption tracking-[0.28em] uppercase font-inter" style={{ color: 'var(--vharanani-burgundy-60)' }}>
                EXPERTISE
              </span>
            </div>
            <h2 className="typo-header font-bebas-neue tracking-wide uppercase text-white" style={{ lineHeight: 0.95 }}>
              Capabilities &<br />Quality
            </h2>
          </div>
        </div>
      </div>

      {/* ── CONTENT SPLIT ── */}
      <div className="px-6 md:px-12 lg:px-20 py-0" style={{ background: 'var(--vharanani-burgundy)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
            {/* Left — Capability List (7 cols) */}
            <div className="lg:col-span-7 relative p-4 sm:p-8 md:p-10" style={{ background: 'rgba(255,255,255,0.02)' }}>
              {/* Hover background image */}
              {hoveredIdx !== null && (
                <div className="absolute inset-0 transition-opacity duration-500 opacity-10">
                  <ImageWithFallback
                    src={capabilities[hoveredIdx].image}
                    alt={capabilities[hoveredIdx].title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="relative z-10">
                <div className="typo-caption tracking-[0.28em] uppercase font-inter mb-8" style={{ color: 'var(--vharanani-burgundy)' }}>
                  CAPABILITIES
                </div>

                <div className="space-y-0">
                  {capabilities.map((cap, i) => (
                    <div
                      key={i}
                      className="group cursor-pointer py-5 transition-all duration-300"
                      style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
                      onMouseEnter={() => setHoveredIdx(i)}
                      onMouseLeave={() => setHoveredIdx(null)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <span
                            className="font-inter typo-meta tracking-wider opacity-30 group-hover:opacity-100 transition-opacity duration-300"
                            style={{ color: 'var(--vharanani-burgundy)' }}
                          >
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <h3 className="font-bebas-neue typo-subline tracking-wide uppercase text-white transition-all duration-300 group-hover:translate-x-2">
                            {cap.title}
                          </h3>
                        </div>
                        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <div className="w-8 h-[1px]" style={{ background: 'var(--vharanani-burgundy)' }} />
                          <ChevronRight size={16} style={{ color: 'var(--vharanani-burgundy)' }} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Quality Manifesto (5 cols) */}
            <div className="lg:col-span-5 p-4 sm:p-8 md:p-10 flex flex-col justify-center" style={{ background: 'rgba(255,255,255,0.04)', borderLeft: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="typo-caption tracking-[0.28em] uppercase font-inter mb-6" style={{ color: 'var(--vharanani-burgundy)' }}>
                COMMITMENT TO QUALITY
              </div>

              <div className="mb-8 p-5" style={{ borderLeft: '3px solid var(--vharanani-burgundy)', background: 'rgba(0,0,0,0.06)' }}>
                <p className="typo-subline font-bebas-neue tracking-wide uppercase text-white" style={{ lineHeight: 1.3 }}>
                  &ldquo;Quality is central to every development we undertake.&rdquo;
                </p>
              </div>

              <div className="grid grid-cols-1 gap-0" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
                {[
                  { icon: <HardHat size={18} />, label: 'High Construction Standards', text: 'Meeting high construction standards on every development we undertake.' },
                  { icon: <Landmark size={18} />, label: 'Long-Term Value', text: 'Providing long-term value to residents and investors.' },
                  { icon: <Heart size={18} />, label: 'Community Contribution', text: 'Contributing positively to the communities in which we operate.' },
                  { icon: <Globe size={18} />, label: 'Sustainable Urban Growth', text: 'Supporting sustainable urban growth through responsible development.' },
                ].map((item, i) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 p-5"
                    style={{ borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}
                  >
                    <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center" style={{ border: '1px solid var(--vharanani-burgundy)', color: 'var(--vharanani-burgundy)' }}>
                      {item.icon}
                    </div>
                    <div>
                      <div className="typo-headline-small font-bebas-neue tracking-wide uppercase text-white mb-1">{item.label}</div>
                      <p className="typo-copy-small font-inter text-white/60">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
