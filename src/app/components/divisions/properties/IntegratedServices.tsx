import { type ReactNode } from 'react';
import { Building2, Droplets, Wrench, Home, Factory, Briefcase } from 'lucide-react';
import { ImageWithFallback } from '../../ui/ImageWithFallback';
import { SectionWrapper } from '../shared';

const SERVICES = [
  {
    id: 'roads-civils',
    title: 'Roads & Civil Engineering',
    shortTitle: 'Roads & Civils',
    subtitle: 'Turnkey civil construction — road construction, earthworks, water infrastructure, BRT systems, highways, and pipelines.',
    icon: <Wrench size={22} />,
    image: 'https://ik.imagekit.io/qcvroy8xpd/Vharnani%20final/31_road_construction_compacted_gravel_surface_rural.jpg?updatedAt=1774955145267',
    capabilities: ['Road construction & earthworks', 'Bus Rapid Transit (BRT) systems', 'Highway construction', 'Civil structures', 'Pipeline infrastructure', 'Water reticulation projects'],
    projects: [
      { name: 'Polokwane BRT System', location: 'Limpopo', status: 'Completed' },
      { name: 'Tshwane BRT System', location: 'Gauteng', status: 'Completed' },
      { name: 'Marulaneng–Sekhukhune Road', location: 'Limpopo', status: 'Completed' },
    ],
  },
  {
    id: 'water-sanitation',
    title: 'Water & Sanitation',
    shortTitle: 'Water & Sanitation',
    subtitle: 'Bulk water supply systems, pipeline installations, sewer reticulation, and grey water systems for sustainable municipal service delivery.',
    icon: <Droplets size={22} />,
    image: 'https://ik.imagekit.io/qcvroy8xpd/Vharnani%20final/46_large_steel_pipes_stockpiled_on_site.jpg?updatedAt=1774955145222',
    capabilities: ['Bulk water supply systems', 'Pipeline installations', 'Sewer reticulation', 'Grey water systems', 'Municipal water infrastructure', 'Sustainable service delivery'],
    projects: [
      { name: 'Lepelle Revitalization Programme', location: 'Limpopo', status: 'Completed' },
      { name: 'Rand Water Pipeline', location: 'Gauteng', status: 'Completed' },
      { name: 'Polokwane CBD Pipeline', location: 'Limpopo', status: 'Completed' },
    ],
  },
  {
    id: 'building-construction',
    title: 'Building Construction',
    shortTitle: 'Building Construction',
    subtitle: 'Public and private sector buildings across mining, education, healthcare, retail, industrial, commercial, and residential sectors.',
    icon: <Building2 size={22} />,
    image: 'https://ik.imagekit.io/qcvroy8xpd/Vharnani%20final/67_hospital_ward_corridor_handrails_under_construction.jpg?updatedAt=1774955145332',
    capabilities: ['Mining infrastructure', 'Education facilities', 'Healthcare buildings', 'Retail developments', 'Industrial facilities', 'Commercial offices'],
    projects: [
      { name: 'Maphutha Malatjie Hospital', location: 'Limpopo', status: 'Completed' },
      { name: 'Mogalakwena Civic Centre', location: 'Limpopo', status: 'Completed' },
      { name: 'Capricorn FET College', location: 'Limpopo', status: 'Completed' },
    ],
  },
  {
    id: 'residential',
    title: 'Residential Development',
    shortTitle: 'Residential',
    subtitle: 'RDP housing, walk-up developments, apartment complexes, townhouses, and residential estates supporting provincial and national housing initiatives.',
    icon: <Home size={22} />,
    image: 'https://ik.imagekit.io/qcvroy8xpd/Vharnani%20final/73_aerial_view_brick_apartment_complex_main_road.jpg?updatedAt=1774955145546',
    capabilities: ['RDP housing projects', 'Walk-up housing developments', 'Apartment complexes', 'Townhouse developments', 'Residential estates'],
    projects: [
      { name: 'Mamelodi X5 Housing', location: 'Gauteng', status: 'Completed' },
      { name: 'Nellmapius X22 Housing', location: 'Gauteng', status: 'Completed' },
      { name: 'Soshanguve Ext 19 RDP', location: 'Gauteng', status: 'Completed' },
    ],
  },
  {
    id: 'property-dev',
    title: 'Property Development',
    shortTitle: 'Property Development',
    subtitle: 'Turnkey solutions from land acquisition, zoning, and feasibility through to architectural design, project management, and construction.',
    icon: <Briefcase size={22} />,
    image: 'https://ik.imagekit.io/qcvroy8xpd/Vharnani%20final/26_residential_townhouse_terracotta_roof_garage.jpg?updatedAt=1774955146174',
    capabilities: ['Land acquisition', 'Property zoning', 'Feasibility studies', 'Architectural design', 'Full project management', 'Construction and delivery'],
    projects: [
      { name: 'ST Maria Development', location: 'South Africa', status: 'Completed' },
      { name: 'The Mbilu Development', location: 'South Africa', status: 'Completed' },
      { name: 'Belle Ombre Estate', location: 'South Africa', status: 'Completed' },
    ],
  },
  {
    id: 'facilities',
    title: 'Facilities Management',
    shortTitle: 'Facilities Mgmt',
    subtitle: 'Maintenance of office complexes, cleaning services, repairs, and management of institutional housing complexes for institutional and corporate clients.',
    icon: <Factory size={22} />,
    image: 'https://ik.imagekit.io/qcvroy8xpd/Vharnani%20final/21_cleaning_crew_mopping_commercial_lobby.jpg?updatedAt=1774955145962',
    capabilities: ['Office complex maintenance', 'Cleaning and hygiene services', 'Repairs and operational management', 'Institutional housing management'],
    projects: [
      { name: 'Transnet Facilities', location: 'National', status: 'Active' },
    ],
  },
];

interface Props {
  activeService?: string;
}

export function PropertiesWireframe_IntegratedServices({ activeService }: Props = {}): ReactNode {
  const active = SERVICES.find((s) => s.id === activeService) || null;

  return (
    <SectionWrapper>
      <div className="max-w-7xl mx-auto">

        {/* ── FOCUSED SERVICE HERO (when a specific service is active) ── */}
        {active && (
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[2px]" style={{ background: 'var(--vharanani-burgundy)' }} />
              <span className="typo-caption tracking-[0.28em] uppercase font-inter" style={{ color: 'var(--vharanani-burgundy)' }}>
                SERVICE DETAIL
              </span>
            </div>

            {/* Hero image + overlay */}
            <div className="relative overflow-hidden mb-8" style={{ height: 'clamp(240px, 35vh, 380px)' }}>
              <ImageWithFallback
                src={active.image}
                alt={active.title}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ filter: 'brightness(0.6)' }}
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-white opacity-80">{active.icon}</div>
                  <h2 className="font-bebas-neue uppercase text-white" style={{ fontSize: 'clamp(28px, 4vw, 48px)', lineHeight: 1.05 }}>
                    {active.title}
                  </h2>
                </div>
                <p className="font-inter typo-copy text-white/80 max-w-xl">
                  {active.subtitle}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: 'var(--vharanani-burgundy)' }} />
            </div>

            {/* Capabilities + Projects grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Capabilities */}
              <div>
                <h3 className="font-bebas-neue typo-headline-small uppercase tracking-wide mb-4" style={{ color: 'var(--vharanani-charcoal)' }}>
                  Core Capabilities
                </h3>
                <ul className="space-y-2">
                  {active.capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-2 font-inter typo-copy" style={{ lineHeight: 1.6, color: 'var(--vharanani-charcoal)' }}>
                      <span className="w-1.5 h-1.5 mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--vharanani-burgundy)' }} />
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Projects */}
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
          </div>
        )}

        {/* ── ALL SERVICES GRID ── */}
        <div className={active ? 'pt-8' : ''} style={active ? { borderTop: '1px solid var(--vharanani-charcoal-20)' } : {}}>
          {!active && (
            <>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[2px]" style={{ background: 'var(--vharanani-burgundy)' }} />
                <span className="typo-caption tracking-[0.28em] uppercase font-inter" style={{ color: 'var(--vharanani-burgundy)' }}>
                  CAPABILITIES
                </span>
              </div>
              <div className="mb-10">
                <h2 className="font-bebas-neue typo-headline-big tracking-wide uppercase mb-3" style={{ color: 'var(--vharanani-charcoal)' }}>
                  Integrated Services
                </h2>
                <p className="font-inter typo-copy max-w-2xl" style={{ color: 'var(--vharanani-charcoal-60)' }}>
                  A comprehensive suite of construction and development capabilities, delivered with precision across every project.
                </p>
              </div>
            </>
          )}

          {active && (
            <div className="mb-6">
              <h3 className="font-bebas-neue typo-subline tracking-wide uppercase" style={{ color: 'var(--vharanani-charcoal)' }}>
                All Services
              </h3>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px]" style={{ background: 'var(--vharanani-charcoal-20)' }}>
            {SERVICES.map((svc) => {
              const isHighlighted = active?.id === svc.id;
              return (
                <div
                  key={svc.id}
                  className="group relative overflow-hidden h-[200px]"
                  style={isHighlighted ? { outline: '2px solid var(--vharanani-burgundy)', outlineOffset: '-2px' } : {}}
                >
                  <ImageWithFallback
                    src={svc.image}
                    alt={svc.shortTitle}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 transition-all duration-500" style={{ background: isHighlighted ? 'rgba(129,41,33,0.55)' : 'rgba(0,0,0,0.5)' }} />

                  <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-5">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="text-white opacity-70">{svc.icon}</div>
                      <h4 className="font-bebas-neue typo-headline-small tracking-wide text-white uppercase">
                        {svc.shortTitle}
                      </h4>
                    </div>
                    <p className="font-inter typo-meta mt-1" style={{ color: 'rgba(255,255,255,0.6)' }}>
                      {svc.subtitle.split('.')[0]}.
                    </p>
                  </div>

                  {isHighlighted && (
                    <div className="absolute top-3 right-3 px-2 py-1" style={{ background: 'var(--vharanani-burgundy)' }}>
                      <span className="font-inter typo-meta text-white tracking-wider uppercase">VIEWING</span>
                    </div>
                  )}

                  <div className="absolute bottom-0 left-0 w-full h-[3px]" style={{ background: isHighlighted ? 'var(--vharanani-burgundy)' : 'transparent' }} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
