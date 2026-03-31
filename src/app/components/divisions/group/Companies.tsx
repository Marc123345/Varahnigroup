import { type ReactNode } from 'react';
import { Building2, Landmark, Heart } from 'lucide-react';
import { ImageWithFallback } from '../../ui/ImageWithFallback';
import { SectionWrapper } from '../shared';

const IMAGES = {
  construction: 'https://ik.imagekit.io/qcvroy8xpd/Vharnani%20final/36_aerial_view_highway_interchange_earthworks_construction.jpg?updatedAt=1774955146327',
  foundation: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=1080&q=80',
  dmft: 'https://ik.imagekit.io/qcvroy8xpd/Vharnani%20final/73_aerial_view_brick_apartment_complex_main_road.jpg?updatedAt=1774955145546',
};

export function GroupWireframe_Companies(): ReactNode {
  const companies = [
    {
      title: 'Vharanani Properties',
      tag: 'CONSTRUCTION',
      icon: <Building2 size={20} />,
      image: IMAGES.construction,
      description: 'Construction, civil engineering, infrastructure development, and facilities management. Delivering large-scale public and private sector projects across South Africa.',
      highlights: ['CIDB Grade 9 CE & GB', 'B-BBEE Level 1', 'ISO 9001 Certified'],
    },
    {
      title: 'The David Mabilu Foundation',
      tag: 'SOCIAL IMPACT',
      icon: <Landmark size={20} />,
      image: IMAGES.foundation,
      description: 'Driving educational support, housing initiatives, entrepreneurship programs, and community upliftment.',
      highlights: ['Education Programmes', 'Housing Initiatives', 'Community Upliftment'],
    },
    {
      title: 'DMFT Property Developers',
      tag: 'PROPERTY DEVELOPMENT',
      icon: <Heart size={20} />,
      image: IMAGES.dmft,
      description: 'Property development, investment management, and facilities oversight supported by a substantial unencumbered property portfolio.',
      highlights: ['Residential Estates', 'Mixed-Use Developments', 'Townhouse Complexes'],
    },
  ];

  return (
    <SectionWrapper dark>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-[2px]" style={{ background: 'rgba(255,255,255,0.5)' }} />
          <span className="typo-caption tracking-[0.28em] uppercase font-inter" style={{ color: 'rgba(255,255,255,0.7)' }}>
            SUBSIDIARIES
          </span>
        </div>
        <p className="typo-meta tracking-[0.25em] uppercase font-inter mb-2" style={{ color: 'rgba(255,255,255,0.7)' }}>COMPANIES</p>
        <h2 className="typo-headline-big font-bebas-neue uppercase tracking-wide mb-8 text-white">
          Our Companies
        </h2>

        <div className="space-y-6">
          {companies.map((company) => (
            <div
              key={company.title}
              className="grid grid-cols-1 md:grid-cols-3 gap-0 overflow-hidden hover:shadow-lg transition-shadow duration-300"
              style={{ border: '1px solid rgba(255,255,255,0.1)' }}
            >
              {/* Image */}
              <div className="relative h-[200px] md:h-auto overflow-hidden">
                <ImageWithFallback
                  src={company.image}
                  alt={company.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.3)' }} />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span style={{ color: 'white' }}>{company.icon}</span>
                  <span className="typo-caption tracking-[0.2em] uppercase font-inter" style={{ color: 'rgba(255,255,255,0.9)' }}>
                    {company.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="md:col-span-2 p-6 md:p-8 flex flex-col justify-center" style={{ background: 'rgba(255,255,255,0.03)' }}>
                <h3 className="typo-subline font-bebas-neue uppercase tracking-wide text-white mb-3">
                  {company.title}
                </h3>
                <p className="typo-copy-small font-inter text-white/60 mb-4">
                  {company.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {company.highlights.map((h) => (
                    <span key={h} className="typo-caption tracking-[0.1em] uppercase font-inter px-3 py-1" style={{ border: '1px solid rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.8)' }}>
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
