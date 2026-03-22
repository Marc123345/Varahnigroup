import { type ReactNode } from 'react';
import { Gavel, FileCheck, Scale, Shield, Eye } from 'lucide-react';
import { ImageWithFallback } from '../../ui/ImageWithFallback';
import { SectionWrapper } from '../shared';

const IMAGES = {
  governance: 'https://images.unsplash.com/photo-1556219845-95c1847629e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBnb3Zlcm5hbmNlJTIwYW5udWFsJTIwcmVwb3J0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MzA1NTkxM3ww&ixlib=rb-4.1.0&q=80&w=1080',
};

export function GroupWireframe_Governance(): ReactNode {
  const principles = [
    { icon: <Gavel size={20} />, label: 'Ethical Leadership', description: 'Principled decision-making at every level' },
    { icon: <FileCheck size={20} />, label: 'Regulatory Compliance', description: 'Adherence to all statutory requirements' },
    { icon: <Scale size={20} />, label: 'Financial Discipline', description: 'Rigorous fiscal management and oversight' },
    { icon: <Shield size={20} />, label: 'Risk Management', description: 'Proactive identification and mitigation' },
    { icon: <Eye size={20} />, label: 'Transparent Reporting', description: 'Open stakeholder communication' },
  ];

  return (
    <SectionWrapper>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-[2px]" style={{ background: 'var(--vharanani-burgundy)' }} />
          <span className="typo-caption tracking-[0.25em] uppercase font-inter" style={{ color: 'var(--vharanani-burgundy)' }}>
            COMPLIANCE
          </span>
        </div>
        <h2 className="typo-headline-big font-bebas-neue uppercase tracking-wide mb-2" style={{ color: 'var(--vharanani-charcoal)' }}>
          Governance & Compliance
        </h2>
        <p className="typo-copy font-inter mb-8 max-w-2xl" style={{ color: 'var(--vharanani-charcoal-60)' }}>
          Ethics, risk management, and transparent reporting define our operational framework.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0" style={{ border: '1px solid var(--vharanani-charcoal-20)' }}>
          {/* Image */}
          <div className="relative h-[300px] lg:h-auto overflow-hidden">
            <ImageWithFallback
              src={IMAGES.governance}
              alt="Corporate governance"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 20%, rgba(0,0,0,0.5) 100%)' }} />
            <div className="absolute bottom-6 left-6">
              <div className="typo-headline-small font-bebas-neue uppercase tracking-wide text-white">
                King IV Aligned
              </div>
              <div className="typo-caption font-inter text-white/70 mt-1">
                Corporate governance best practices
              </div>
            </div>
          </div>

          {/* Principles list */}
          <div className="lg:col-span-2">
            {principles.map((p, i) => (
              <div
                key={p.label}
                className="flex items-start gap-4 p-6"
                style={{
                  borderBottom: i < principles.length - 1 ? '1px solid var(--vharanani-charcoal-20)' : 'none',
                }}
              >
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center" style={{ border: '1px solid var(--vharanani-burgundy)', color: 'var(--vharanani-burgundy)' }}>
                  {p.icon}
                </div>
                <div className="flex-1">
                  <div className="typo-headline-small font-bebas-neue uppercase tracking-wide" style={{ color: 'var(--vharanani-charcoal)' }}>
                    {p.label}
                  </div>
                  <div className="typo-copy-small font-inter mt-1" style={{ color: 'var(--vharanani-charcoal-60)' }}>
                    {p.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
