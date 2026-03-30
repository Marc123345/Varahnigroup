import { type ReactNode } from 'react';
import { Building2, Droplets, Wrench, Home, Factory, Briefcase } from 'lucide-react';
import { ImageWithFallback } from '../../ui/ImageWithFallback';
import { SectionWrapper } from '../shared';

const IMAGES = {
  roadsCivils: 'https://vharananiproperties.co.za/wp-content/uploads/2021/06/Marulaneng-Road-2.jpg',
  waterSanitation: 'https://vharananiproperties.co.za/wp-content/uploads/2021/06/Polokwane-CBD-Pipeline.png',
  buildingConstruction: 'https://vharananiproperties.co.za/wp-content/uploads/2021/06/MAPHUTA-MALATJIE-HOSPITAL-2.jpg',
  residential: 'https://vharananiproperties.co.za/wp-content/uploads/2021/06/SOSHANGUVE-EXT.19-RDP-HOUSES-1.jpg',
  propertyDev: 'https://vharananiproperties.co.za/wp-content/uploads/2020/10/Property-development-scaled.jpg',
  facilitiesMgmt: 'https://vharananiproperties.co.za/wp-content/uploads/2021/06/Facilities-1.jpg',
};

export function PropertiesWireframe_IntegratedServices(): ReactNode {
  const services = [
    {
      title: 'Roads & Civils',
      subtitle: 'Turnkey civil construction — road construction, earthworks, water infrastructure, BRT systems, highways, and pipelines.',
      icon: <Wrench size={22} />,
      image: IMAGES.roadsCivils,
      span: 'md:col-span-2 md:row-span-2',
      height: 'h-[280px] md:h-full',
    },
    {
      title: 'Water & Sanitation',
      subtitle: 'Bulk water supply systems, pipeline installations, sewer reticulation, and grey water systems for sustainable municipal service delivery.',
      icon: <Droplets size={22} />,
      image: IMAGES.waterSanitation,
      span: '',
      height: 'h-[220px]',
    },
    {
      title: 'Building Construction',
      subtitle: 'Public and private sector buildings across mining, education, healthcare, retail, industrial, commercial, and residential sectors.',
      icon: <Building2 size={22} />,
      image: IMAGES.buildingConstruction,
      span: '',
      height: 'h-[220px]',
    },
    {
      title: 'Residential',
      subtitle: 'RDP housing, walk-up developments, apartment complexes, townhouses, and residential estates supporting provincial and national housing initiatives.',
      icon: <Home size={22} />,
      image: IMAGES.residential,
      span: '',
      height: 'h-[220px]',
    },
    {
      title: 'Property Development',
      subtitle: 'Turnkey solutions from land acquisition, zoning, and feasibility through to architectural design, project management, and construction.',
      icon: <Briefcase size={22} />,
      image: IMAGES.propertyDev,
      span: '',
      height: 'h-[220px]',
    },
    {
      title: 'Facilities Management',
      subtitle: 'Maintenance of office complexes, cleaning services, repairs, and management of institutional housing complexes for institutional and corporate clients.',
      icon: <Factory size={22} />,
      image: IMAGES.facilitiesMgmt,
      span: 'md:col-span-2',
      height: 'h-[220px]',
    },
  ];

  return (
    <SectionWrapper>
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
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

        <div className="grid grid-cols-1 md:grid-cols-4 gap-[1px]" style={{ background: 'var(--vharanani-charcoal-20)' }}>
          {services.map((svc, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden cursor-pointer ${svc.span} ${svc.height}`}
            >
              <ImageWithFallback
                src={svc.image}
                alt={svc.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)] transition-all duration-500 group-hover:bg-[rgba(0,0,0,0.7)]" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-5">
                <div className="flex items-center gap-2 mb-1">
                  <div className="text-white opacity-70 group-hover:opacity-100 transition-opacity duration-300">{svc.icon}</div>
                  <h4 className="font-bebas-neue typo-headline-small tracking-wide text-white uppercase">
                    {svc.title}
                  </h4>
                </div>

                <div className="overflow-hidden max-h-0 group-hover:max-h-32 transition-all duration-500">
                  <p className="font-inter typo-copy-small mt-1" style={{ color: 'rgba(255,255,255,0.7)' }}>
                    {svc.subtitle}
                  </p>
                </div>
              </div>

              {/* Top-right category badge */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-2 py-1" style={{ background: 'var(--vharanani-burgundy)' }}>
                <span className="font-inter typo-meta text-white tracking-wider uppercase">SERVICE</span>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[3px] transition-all duration-500" style={{ background: 'var(--vharanani-burgundy)' }} />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
