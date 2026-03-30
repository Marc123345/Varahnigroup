import { type ReactNode } from 'react';
import { Sprout, Route, TrendingUp, Users } from 'lucide-react';
import { ImageWithFallback } from '../../ui/ImageWithFallback';
import { SectionWrapper } from '../shared';

const IMAGES = {
  visionMission: 'https://vharananiproperties.co.za/wp-content/uploads/2021/06/hq.png',
};

export function GroupWireframe_VisionMission(): ReactNode {
  const objectives = [
    { icon: <Sprout size={28} />, text: 'Develop sustainable businesses across high-impact sectors.', label: 'SUSTAINABLE GROWTH' },
    { icon: <Route size={28} />, text: 'Deliver infrastructure that improves quality of life.', label: 'INFRASTRUCTURE' },
    { icon: <TrendingUp size={28} />, text: 'Build and manage long-term asset portfolios.', label: 'ASSET MANAGEMENT' },
    { icon: <Users size={28} />, text: 'Foster entrepreneurship and community development.', label: 'COMMUNITY' },
  ];

  return (
    <SectionWrapper>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-[2px]" style={{ background: 'var(--vharanani-burgundy)' }} />
          <span className="typo-caption tracking-[0.28em] uppercase font-inter" style={{ color: 'var(--vharanani-burgundy)' }}>
            MANDATE
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0" style={{ border: '1px solid var(--vharanani-charcoal-20)' }}>
          {/* Vision */}
          <div className="p-8 md:p-12" style={{ background: '#812921' }}>
            <div className="typo-caption tracking-[0.28em] uppercase font-inter mb-6" style={{ color: 'rgba(255,255,255,0.85)' }}>
              OUR VISION
            </div>
            <h2 className="typo-headline-big font-bebas-neue uppercase tracking-wide text-white mb-6">
              To build a diversified African enterprise that strengthens national infrastructure, drives innovation, and advances inclusive economic growth.
            </h2>
            <div className="w-12 h-[2px] mb-6" style={{ background: 'rgba(255,255,255,0.4)' }} />
          </div>

          {/* Mission */}
          <div className="p-8 md:p-12" style={{ background: '#fafafa' }}>
            <div className="typo-caption tracking-[0.28em] uppercase font-inter mb-6" style={{ color: 'var(--vharanani-burgundy)' }}>
              OUR MISSION
            </div>
            <h3 className="typo-subline font-bebas-neue uppercase tracking-wide mb-6" style={{ color: 'var(--vharanani-charcoal)' }}>
              Strategic Objectives
            </h3>
            <div className="space-y-6">
              {objectives.map((obj) => (
                <div key={obj.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center" style={{ border: '1.5px solid var(--vharanani-burgundy)', color: 'var(--vharanani-burgundy)' }}>
                    {obj.icon}
                  </div>
                  <div>
                    <div className="typo-caption tracking-[0.15em] uppercase font-inter mb-1" style={{ color: 'var(--vharanani-burgundy)' }}>
                      {obj.label}
                    </div>
                    <div className="typo-copy-small font-inter" style={{ color: 'var(--vharanani-charcoal-60)' }}>
                      {obj.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image strip */}
        <div className="relative h-[180px] overflow-hidden">
          <ImageWithFallback
            src={IMAGES.visionMission}
            alt="Vision and mission"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.6)' }} />
        </div>
      </div>
    </SectionWrapper>
  );
}
