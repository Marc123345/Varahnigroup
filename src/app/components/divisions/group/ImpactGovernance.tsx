import { type ReactNode } from 'react';
import { Shield, Layers, Globe } from 'lucide-react';
import { ImageWithFallback } from '../../ui/ImageWithFallback';
import { AnimatedCounter, SectionWrapper } from '../shared';

const IMAGES = {
  impact: 'https://vharananiproperties.co.za/wp-content/uploads/2021/06/MAPHUTA-MALATJIE-HOSPITAL-2.jpg',
};

export function GroupWireframe_ImpactGovernance(): ReactNode {
  const governancePrinciples = [
    { icon: <Shield size={20} />, label: 'Ethical Leadership', description: 'Principled decision-making at every level of the organisation.' },
    { icon: <Layers size={20} />, label: 'Financial Discipline', description: 'Rigorous fiscal management and transparent oversight.' },
    { icon: <Globe size={20} />, label: 'Risk Management', description: 'Proactive identification, assessment, and mitigation.' },
  ];

  const impactStats = [
    { value: 50000, suffix: '+', label: 'Lives Impacted' },
    { value: 500, suffix: '+', label: 'Bursaries Awarded' },
    { value: 200, suffix: '+', label: 'Infrastructure Projects' },
    { value: 5, suffix: '', label: 'Provinces Reached' },
  ];

  return (
    <SectionWrapper dark>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-[2px]" style={{ background: 'rgba(255,255,255,0.5)' }} />
          <span className="typo-caption tracking-[0.28em] uppercase font-inter" style={{ color: 'rgba(255,255,255,0.7)' }}>
            IMPACT
          </span>
        </div>
        <h2 className="typo-headline-big font-bebas-neue uppercase tracking-wide mb-4 text-white">
          Impact & Responsibility
        </h2>
        <p className="typo-copy font-inter mb-8 max-w-3xl" style={{ color: 'rgba(255,255,255,0.8)' }}>
          Vharanani Group recognizes that infrastructure and investment must translate into tangible community benefit. Through responsible project delivery, employment creation, and the work of The David Mabilu Foundation, the Group actively contributes to social upliftment and economic participation in underserved communities. Our approach integrates disciplined business growth with measurable social responsibility.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Impact stats */}
          <div>
            <div className="relative h-[240px] mb-8 overflow-hidden">
              <ImageWithFallback
                src={IMAGES.impact}
                alt="Community development impact"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.4)' }} />
            </div>
            <div className="grid grid-cols-2 gap-6">
              {impactStats.map((stat) => (
                <div key={stat.label} className="p-4 sm:p-6" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} color="white" />
                  <div className="typo-caption tracking-[0.15em] uppercase font-inter mt-1" style={{ color: 'rgba(255,255,255,0.7)' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Governance principles */}
          <div>
            <h3 className="typo-subline font-bebas-neue uppercase tracking-wide text-white mb-6">
              Governance Principles
            </h3>
            <div className="space-y-0">
              {governancePrinciples.map((principle, i) => (
                <div
                  key={principle.label}
                  className="flex items-start gap-4 p-5"
                  style={{
                    borderBottom: i < governancePrinciples.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                  }}
                >
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center" style={{ border: '1px solid rgba(255,255,255,0.4)', color: 'white' }}>
                    {principle.icon}
                  </div>
                  <div>
                    <div className="typo-headline-small font-bebas-neue uppercase tracking-wide text-white">
                      {principle.label}
                    </div>
                    <div className="typo-copy-small font-inter mt-1" style={{ color: 'rgba(255,255,255,0.7)' }}>
                      {principle.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
