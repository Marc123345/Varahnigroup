import { useState, type ReactNode } from 'react';
import { motion } from 'motion/react';
import { MapPin, ArrowRight, ArrowLeft, ChevronRight, X } from 'lucide-react';
import { ImageWithFallback } from '../../ui/ImageWithFallback';
import { SectionWrapper } from '../shared';

const ROADS_IMAGES = [
  'https://ik.imagekit.io/qcvroy8xpd/Vharnani%20Group/Roads%20&%20Civil/Clip%20path%20frame-1.png?tr=q-100:e-upscale',
  'https://ik.imagekit.io/qcvroy8xpd/Vharnani%20Group/Roads%20&%20Civil/Rectangle.png?tr=q-100:e-upscale',
  'https://ik.imagekit.io/qcvroy8xpd/Vharnani%20Group/Roads%20&%20Civil/Clip%20path%20frame-2.png?tr=q-100:e-upscale',
  'https://ik.imagekit.io/qcvroy8xpd/Vharnani%20Group/Roads%20&%20Civil/Clip%20path%20frame-3.png?tr=q-100:e-upscale',
];

const IMAGES = {
  waterSanitation: 'https://vharananiproperties.co.za/wp-content/uploads/2021/06/Polokwane-CBD-Pipeline.png',
  buildingConstruction: 'https://vharananiproperties.co.za/wp-content/uploads/2021/06/MAPHUTA-MALATJIE-HOSPITAL-2.jpg',
  residential: 'https://vharananiproperties.co.za/wp-content/uploads/2021/06/SOSHANGUVE-EXT.19-RDP-HOUSES-1.jpg',
  propertyDev: 'https://vharananiproperties.co.za/wp-content/uploads/2020/10/Property-development-scaled.jpg',
  facilitiesMgmt: 'https://vharananiproperties.co.za/wp-content/uploads/2021/06/Facilities-1.jpg',
};

export function PropertiesWireframe_FeaturedProjects(): ReactNode {
  const [activeIdx, setActiveIdx] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const projects = [
    {
      title: 'Tshwane BRT System',
      category: 'Roads & Civils',
      location: 'Gauteng, South Africa',
      image: ROADS_IMAGES[0],
      specs: 'Bus Rapid Transit infrastructure including dedicated lanes, stations, and traffic management systems.',
      impact: 'Connected thousands of daily commuters to affordable, efficient public transport across the Tshwane metropolitan area.',
    },
    {
      title: 'Polokwane BRT System',
      category: 'Roads & Civils',
      location: 'Limpopo, South Africa',
      image: ROADS_IMAGES[1],
      specs: 'Bus Rapid Transit system delivering dedicated transit lanes, station infrastructure, and integrated traffic management.',
      impact: 'Enhanced urban mobility and reduced commute times for residents across the Polokwane metropolitan area.',
    },
    {
      title: 'Marulaneng–Sekhukhune Road Development',
      category: 'Roads & Civils',
      location: 'Limpopo, South Africa',
      image: ROADS_IMAGES[2],
      specs: 'Full road construction including earthworks, drainage, paving, and road markings across challenging terrain.',
      impact: 'Improved rural accessibility, connecting remote communities to economic and social services.',
    },
    {
      title: 'Lepelle Revitalization Programme Bulk Water Project',
      category: 'Water & Sanitation',
      location: 'Limpopo, South Africa',
      image: IMAGES.waterSanitation,
      specs: 'Bulk water supply programme including pipeline infrastructure and treatment facility upgrades.',
      impact: 'Restored reliable water supply to rural communities, improving health outcomes and quality of life.',
    },
    {
      title: 'Rand Water Pipeline',
      category: 'Water & Sanitation',
      location: 'Gauteng, South Africa',
      image: IMAGES.waterSanitation,
      specs: 'Major bulk water pipeline installation supporting the Rand Water distribution network and municipal supply.',
      impact: 'Strengthened water security and service delivery capacity for communities across Gauteng.',
    },
    {
      title: 'Maphutha Malatjie Hospital',
      category: 'Building Construction',
      location: 'Limpopo, South Africa',
      image: IMAGES.buildingConstruction,
      specs: 'Full construction of a public healthcare facility, including surgical theatres, wards, and support infrastructure.',
      impact: 'Provided modern healthcare access to an underserved community, serving thousands of patients annually.',
    },
    {
      title: 'Mogalakwena Civic Centre',
      category: 'Building Construction',
      location: 'Limpopo, South Africa',
      image: IMAGES.buildingConstruction,
      specs: 'Construction of a full civic centre facility to serve the Mogalakwena local municipality and surrounding communities.',
      impact: 'Improved access to government services and created a modern public administration hub for the region.',
    },
    {
      title: 'Capricorn FET College',
      category: 'Building Construction',
      location: 'Limpopo, South Africa',
      image: IMAGES.buildingConstruction,
      specs: 'Construction of educational infrastructure including lecture halls, workshops, and student support facilities.',
      impact: 'Expanded technical and vocational education capacity, empowering youth with skills for the workforce.',
    },
    {
      title: 'Mamelodi X5 Housing Development',
      category: 'Residential',
      location: 'Gauteng, South Africa',
      image: IMAGES.residential,
      specs: 'Large-scale residential housing development providing dignified homes for qualifying families.',
      impact: 'Delivered sustainable human settlements and created local employment during the construction phase.',
    },
    {
      title: 'Nellmapius X22 Housing Development',
      category: 'Residential',
      location: 'Gauteng, South Africa',
      image: IMAGES.residential,
      specs: 'High-volume residential housing construction as part of a national human settlements programme.',
      impact: 'Provided dignified housing to hundreds of families in the Nellmapius community.',
    },
    {
      title: 'ST Maria Development',
      category: 'Property Development',
      location: 'South Africa',
      image: IMAGES.propertyDev,
      specs: 'Turnkey property development including land preparation, construction, and handover of residential units.',
      impact: 'Delivered quality residential property in a strategically positioned development.',
    },
    {
      title: 'Transnet Facilities Management Services',
      category: 'Facilities Management',
      location: 'South Africa',
      image: IMAGES.facilitiesMgmt,
      specs: 'Comprehensive facilities management services including maintenance, cleaning, and operational management of Transnet facilities.',
      impact: 'Ensured the long-term functionality and operational integrity of critical national infrastructure facilities.',
    },
  ];

  const current = projects[activeIdx];

  return (
    <SectionWrapper className="!py-0 !px-0">
      <div className="grid grid-cols-1 lg:grid-cols-12" style={{ minHeight: '560px' }}>

        {/* ── LEFT: Full image ── */}
        <div className="lg:col-span-7 relative overflow-hidden" style={{ minHeight: '360px' }}>
          <motion.div
            key={activeIdx}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <ImageWithFallback
              src={current.image}
              alt={current.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)' }} />
          </motion.div>

          {/* Counter overlay */}
          <div className="absolute top-6 left-6 z-10">
            <span className="font-bebas-neue" style={{ fontSize: '80px', lineHeight: 1, color: 'rgba(255,255,255,0.12)' }}>
              {String(activeIdx + 1).padStart(2, '0')}
            </span>
          </div>

          {/* Nav arrows */}
          <div className="absolute bottom-6 left-6 z-10 flex items-center gap-2">
            <button
              onClick={() => setActiveIdx(activeIdx === 0 ? projects.length - 1 : activeIdx - 1)}
              className="w-11 h-11 flex items-center justify-center transition-all duration-200"
              style={{ border: '1px solid rgba(255,255,255,0.5)', background: 'rgba(0,0,0,0.8)' }}
            >
              <ArrowLeft size={16} className="text-white" />
            </button>
            <button
              onClick={() => setActiveIdx(activeIdx === projects.length - 1 ? 0 : activeIdx + 1)}
              className="w-11 h-11 flex items-center justify-center transition-all duration-200"
              style={{ border: '1px solid rgba(255,255,255,0.5)', background: 'rgba(0,0,0,0.8)' }}
            >
              <ArrowRight size={16} className="text-white" />
            </button>
            <span className="font-bebas-neue typo-headline-small text-white ml-3" style={{ letterSpacing: '0.15em' }}>
              {String(activeIdx + 1).padStart(2, '0')} <span style={{ opacity: 0.4 }}>/</span> {String(projects.length).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* ── RIGHT: Content panel ── */}
        <div className="lg:col-span-5 flex flex-col" style={{ borderLeft: '1px solid var(--vharanani-charcoal-20)' }}>
          {/* Section header */}
          <div className="px-8 pt-10 pb-6" style={{ borderBottom: '1px solid var(--vharanani-charcoal-20)' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px]" style={{ background: 'var(--vharanani-burgundy)' }} />
              <span className="typo-caption tracking-[0.28em] uppercase font-inter" style={{ color: 'var(--vharanani-burgundy)' }}>
                PROOF OF DELIVERY
              </span>
            </div>
            <h2 className="font-bebas-neue typo-subline tracking-wide uppercase" style={{ color: 'var(--vharanani-charcoal)' }}>
              Featured Projects
            </h2>
          </div>

          {/* Active project detail */}
          <motion.div
            key={activeIdx}
            className="px-8 py-8 flex-1 flex flex-col"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-block self-start px-2 py-0.5 mb-4" style={{ background: 'var(--vharanani-burgundy)' }}>
              <span className="font-inter typo-meta text-white tracking-[0.2em] uppercase">{current.category}</span>
            </div>
            <h3 className="font-bebas-neue typo-subline tracking-wide uppercase mb-3" style={{ color: 'var(--vharanani-charcoal)', lineHeight: 1.1 }}>
              {current.title}
            </h3>
            <div className="flex items-center gap-2 mb-5">
              <MapPin size={13} style={{ color: 'var(--vharanani-burgundy)' }} />
              <span className="font-inter typo-copy-small tracking-wider uppercase" style={{ color: 'var(--vharanani-charcoal-60)' }}>
                {current.location}
              </span>
            </div>
            <p className="font-inter typo-copy-small mb-6" style={{ color: 'var(--vharanani-charcoal-80)', lineHeight: 1.7 }}>
              {current.specs}
            </p>
            <div className="p-4 mb-6" style={{ borderLeft: '3px solid var(--vharanani-burgundy)', background: 'rgba(0,0,0,0.04)' }}>
              <div className="font-inter typo-meta tracking-[0.18em] uppercase mb-1" style={{ color: 'var(--vharanani-burgundy)' }}>Community Impact</div>
              <p className="font-inter typo-copy-small" style={{ color: 'var(--vharanani-charcoal-80)' }}>{current.impact}</p>
            </div>
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 self-start px-6 py-3 transition-all duration-300 hover:gap-3 mt-auto"
              style={{ background: 'var(--vharanani-burgundy)' }}
            >
              <span className="font-bebas-neue typo-headline-small tracking-wider uppercase text-white">View Full Details</span>
              <ArrowRight size={14} className="text-white" />
            </button>
          </motion.div>

          {/* Project index list */}
          <div className="overflow-y-auto" style={{ borderTop: '1px solid var(--vharanani-charcoal-20)', maxHeight: '240px' }}>
            {projects.map((p, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className="w-full flex items-center gap-4 px-6 py-3 text-left transition-colors duration-200 group"
                style={{
                  background: i === activeIdx ? 'rgba(129,41,33,0.05)' : 'transparent',
                  borderBottom: '1px solid var(--vharanani-charcoal-10)',
                  borderLeft: i === activeIdx ? '3px solid var(--vharanani-burgundy)' : '3px solid transparent',
                }}
              >
                <span
                  className="font-bebas-neue flex-shrink-0"
                  style={{ fontSize: '13px', color: i === activeIdx ? 'var(--vharanani-burgundy)' : 'var(--vharanani-charcoal-40)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="min-w-0">
                  <div
                    className="font-inter typo-copy-small truncate"
                    style={{ color: i === activeIdx ? 'var(--vharanani-charcoal)' : 'var(--vharanani-charcoal-60)', fontWeight: i === activeIdx ? 500 : 400 }}
                  >
                    {p.title}
                  </div>
                  <div className="font-inter typo-meta tracking-[0.1em] uppercase" style={{ color: 'var(--vharanani-charcoal-40)' }}>
                    {p.category}
                  </div>
                </div>
                {i === activeIdx && (
                  <ChevronRight size={14} className="ml-auto flex-shrink-0" style={{ color: 'var(--vharanani-burgundy)' }} />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Quick View Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(8px)' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto"
            style={{ background: 'white' }}
          >
            <div className="relative h-[200px] sm:h-[260px]">
              <ImageWithFallback src={current.image} alt={current.title} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 55%)' }} />
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center transition-colors"
                style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)' }}
              >
                <X size={16} className="text-white" />
              </button>
              <div className="absolute bottom-5 left-6">
                <div className="inline-block px-2 py-0.5 mb-2" style={{ background: 'var(--vharanani-burgundy)' }}>
                  <span className="font-inter typo-meta text-white tracking-[0.2em] uppercase">{current.category}</span>
                </div>
                <h3 className="font-bebas-neue typo-subline tracking-wide text-white uppercase">{current.title}</h3>
              </div>
            </div>
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-2 mb-5">
                <MapPin size={14} style={{ color: 'var(--vharanani-burgundy)' }} />
                <span className="font-inter typo-copy-small tracking-wider uppercase" style={{ color: 'var(--vharanani-charcoal-60)' }}>{current.location}</span>
              </div>
              <h4 className="font-bebas-neue typo-headline-small tracking-wide uppercase mb-2" style={{ color: 'var(--vharanani-charcoal)' }}>Project Specifications</h4>
              <p className="font-inter typo-copy mb-6" style={{ color: 'var(--vharanani-charcoal-80)' }}>{current.specs}</p>
              <div className="p-4" style={{ borderLeft: '3px solid var(--vharanani-burgundy)', background: 'rgba(0,0,0,0.04)' }}>
                <div className="font-inter typo-meta tracking-[0.2em] uppercase mb-1" style={{ color: 'var(--vharanani-burgundy)' }}>Community Impact</div>
                <p className="font-inter typo-copy-small" style={{ color: 'var(--vharanani-charcoal-80)' }}>{current.impact}</p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </SectionWrapper>
  );
}
