import { type ReactNode } from 'react';
import { motion } from 'motion/react';
import { Shield, Target, Eye, Heart, Home, Users, GraduationCap } from 'lucide-react';
import { ImageWithFallback } from '../../ui/ImageWithFallback';
import { AnimatedCounter, SectionWrapper } from '../shared';

const IMAGES = {
  values: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80&fit=crop',
};

export function PropertiesWireframe_ValuesImpact(): ReactNode {
  const values = [
    { icon: <Shield size={24} />, title: 'Professionalism', description: 'Maintaining the highest standards in execution and project delivery.' },
    { icon: <Target size={24} />, title: 'Accountability', description: 'Taking full responsibility for the quality, safety, and success of every project.' },
    { icon: <Eye size={24} />, title: 'Transparency', description: 'Operating with openness and integrity in all engagements.' },
    { icon: <Heart size={24} />, title: 'Honesty', description: 'Building long-term relationships based on trust and ethical conduct.' },
  ];

  const impacts = [
    { icon: <Home size={22} />, label: 'Sustainable Settlements', value: 9, suffix: '', description: 'Provinces with dignified housing developments' },
    { icon: <Users size={22} />, label: 'Employment Created', value: 1000, suffix: 's+', description: 'Jobs and skills development across construction sites nationally' },
    { icon: <GraduationCap size={22} />, label: 'Economic Participation', value: 500, suffix: '+', description: 'Local community and enterprise development initiatives' },
  ];

  return (
    <SectionWrapper>
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-[2px]" style={{ background: 'var(--vharanani-burgundy)' }} />
          <span className="typo-caption tracking-[0.28em] uppercase font-inter" style={{ color: 'var(--vharanani-burgundy)' }}>
            VALUES & IMPACT
          </span>
        </div>

        <div className="mb-10">
          <h2 className="font-bebas-neue typo-headline-big tracking-wide uppercase mb-3" style={{ color: 'var(--vharanani-charcoal)' }}>Our Values & Impact</h2>
          <p className="font-inter typo-copy max-w-3xl" style={{ color: 'var(--vharanani-charcoal-60)' }}>
            Vharanani Properties is committed to contributing to South Africa&apos;s socioeconomic development through responsible infrastructure delivery. Our work reflects our mission to restore dignity through infrastructure development.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[1px] mb-8" style={{ background: 'var(--vharanani-charcoal-20)', border: '1px solid var(--vharanani-charcoal-20)' }}>
          {values.map((val, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -2 }}
              className="group p-6 pb-8 text-center"
              style={{ background: 'white' }}
            >
              <div
                className="w-14 h-14 mx-auto flex items-center justify-center mb-4 transition-colors duration-300"
                style={{ border: '2px solid var(--vharanani-charcoal-20)', color: 'var(--vharanani-burgundy)' }}
              >
                {val.icon}
              </div>
              <h4 className="font-bebas-neue typo-headline-small tracking-wide uppercase mb-2" style={{ color: 'var(--vharanani-charcoal)' }}>
                {val.title}
              </h4>
              <p className="font-inter typo-copy-small" style={{ color: 'var(--vharanani-charcoal-60)' }}>
                {val.description}
              </p>
              <div className="mx-auto mt-4 w-0 group-hover:w-10 h-[2px] transition-all duration-500" style={{ background: 'var(--vharanani-burgundy)' }} />
            </motion.div>
          ))}
        </div>

        {/* Impact Strip */}
        <div className="overflow-hidden" style={{ border: '1px solid var(--vharanani-charcoal-20)' }}>
          <div className="relative overflow-hidden" style={{ background: 'var(--vharanani-burgundy)' }}>
            <ImageWithFallback
              src={IMAGES.values}
              alt="Vharanani Properties team and values"
              className="absolute inset-0 w-full h-full object-cover opacity-10"
            />
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-0">
              {impacts.map((item, i) => (
                <div
                  key={i}
                  className="p-8 text-center flex flex-col items-center"
                  style={{ borderRight: i < 2 ? '1px solid rgba(255,255,255,0.15)' : 'none' }}
                >
                  <div className="w-12 h-12 flex items-center justify-center mb-4" style={{ border: '1px solid rgba(255,255,255,0.35)', color: 'white' }}>
                    {item.icon}
                  </div>
                  <AnimatedCounter target={item.value} suffix={item.suffix} color="white" />
                  <h4 className="font-bebas-neue typo-headline-small tracking-wide uppercase mb-1 text-white">
                    {item.label}
                  </h4>
                  <p className="font-inter typo-meta" style={{ color: 'rgba(255,255,255,0.75)' }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
