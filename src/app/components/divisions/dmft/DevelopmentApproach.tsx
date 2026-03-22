import { type ReactNode } from 'react';
import { motion } from 'motion/react';
import { Search, Target, HardHat, Briefcase } from 'lucide-react';
import { ImageWithFallback } from '../../ui/ImageWithFallback';
import { SectionWrapper } from '../shared';

const IMAGES = {
  aerialDev: 'https://i0.wp.com/vharananiproperties.co.za/wp-content/uploads/2020/09/DJI_0247-scaled.jpg?w=1440&ssl=1',
  blueprint: 'https://i0.wp.com/vharananiproperties.co.za/wp-content/uploads/2020/08/Mogalakwena.jpg?w=1080&ssl=1',
  propertyDev: 'https://i0.wp.com/vharananiproperties.co.za/wp-content/uploads/2020/10/Property-development-scaled.jpg?w=1080&ssl=1',
  residentialEstate: 'https://i0.wp.com/vharananiproperties.co.za/wp-content/uploads/2020/08/rsz_faranani-estate-1-1.jpg?w=1080&ssl=1',
};

export function DMFTWireframe_DevelopmentApproach(): ReactNode {
  const phases = [
    {
      step: '01',
      title: 'Land Identification & Acquisition',
      icon: <Search size={22} />,
      headline: 'Strategic Location Selection',
      description: 'Carefully identifying strategic locations with strong growth potential, development viability, and alignment with market demand — ensuring every project starts from a position of strength.',
      capabilities: ['Market Analysis', 'Growth Corridors', 'Zoning Assessment', 'Feasibility Studies'],
      image: IMAGES.aerialDev,
    },
    {
      step: '02',
      title: 'Planning & Feasibility',
      icon: <Target size={22} />,
      headline: 'From Concept to Blueprint',
      description: 'Conducting detailed feasibility studies, zoning processes, and development planning, working with experienced professionals to design modern and functional developments.',
      capabilities: ['Town Planning', 'Architectural Design', 'Zoning Processes', 'Municipal Approvals'],
      image: IMAGES.blueprint,
    },
    {
      step: '03',
      title: 'Construction & Project Management',
      icon: <HardHat size={22} />,
      headline: 'Built With Vharanani Expertise',
      description: 'Leveraging the construction expertise of the Vharanani Group to deliver projects efficiently and safely, from groundbreaking through to handover.',
      capabilities: ['Quality Construction', 'Project Management', 'Safety Compliance', 'Timeline Delivery'],
      image: IMAGES.propertyDev,
    },
    {
      step: '04',
      title: 'Sales & Delivery',
      icon: <Briefcase size={22} />,
      headline: 'Lasting Value for All',
      description: 'Delivering completed developments that provide value for homeowners, investors, and communities.',
      capabilities: ['Sales Management', 'Title Transfers', 'Homeowner Support', 'Community Integration'],
      image: IMAGES.residentialEstate,
    },
  ];

  return (
    <SectionWrapper className="!py-0 !px-0">
      {/* ── HEADER BAND ── */}
      <div className="relative h-[35vh] sm:h-[40vh] min-h-[260px] sm:min-h-[320px] overflow-hidden">
        <ImageWithFallback
          src={IMAGES.blueprint}
          alt="Property development planning"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.98) 100%)'
        }} />
        <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: 'var(--vharanani-burgundy)' }} />

        <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-12 lg:px-20 pb-12">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-[2px]" style={{ background: 'var(--vharanani-burgundy)' }} />
                  <span className="typo-caption tracking-[0.25em] uppercase font-inter" style={{ color: 'var(--vharanani-burgundy-60)' }}>
                    OUR PROCESS
                  </span>
                </div>
                <h2 className="typo-header font-bebas-neue tracking-wide uppercase text-white" style={{ lineHeight: 0.95 }}>
                  Development<br />Approach
                </h2>
              </div>
              <div className="lg:col-span-5">
                <p className="typo-copy font-inter text-white/50">
                  We manage the full lifecycle of property development — from strategic land identification through to sales and handover, ensuring every project is delivered to the highest standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── ALTERNATING PHASE CARDS ── */}
      <div style={{ background: '#ffffff' }}>
        {phases.map((phase, i) => {
          const isEven = i % 2 === 0;
          return (
            <motion.div
              key={phase.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                <div
                  className="grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden"
                  style={{
                    borderLeft: '1px solid var(--vharanani-charcoal-20)',
                    borderRight: '1px solid var(--vharanani-charcoal-20)',
                    borderBottom: '1px solid var(--vharanani-charcoal-20)',
                    borderTop: i === 0 ? '1px solid var(--vharanani-charcoal-20)' : 'none',
                  }}
                >
                  {/* Image side */}
                  <div className={`lg:col-span-5 relative h-[280px] lg:h-auto lg:min-h-[380px] overflow-hidden ${isEven ? '' : 'lg:order-2'}`}>
                    <ImageWithFallback
                      src={phase.image}
                      alt={phase.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0" style={{
                      background: isEven
                        ? 'linear-gradient(135deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.45) 100%)'
                        : 'linear-gradient(225deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.45) 100%)'
                    }} />
                    {/* Ghost step number */}
                    <div className="absolute top-4 left-6">
                      <span className="font-bebas-neue" style={{ fontSize: 'clamp(72px, 10vw, 120px)', lineHeight: 1, color: 'rgba(255,255,255,0.07)' }}>
                        {phase.step}
                      </span>
                    </div>
                    {/* Bottom phase label */}
                    <div className="absolute bottom-0 left-0 right-0 px-6 py-4" style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }}>
                      <div className="flex items-center gap-4">
                        <div className="typo-headline-small font-bebas-neue uppercase tracking-wide" style={{ color: 'var(--vharanani-burgundy)' }}>
                          Phase {phase.step}
                        </div>
                        <div className="flex-1 h-[1px]" style={{ background: 'rgba(255,255,255,0.1)' }} />
                        <div className="typo-caption tracking-[0.15em] uppercase font-inter text-white/60">
                          {phase.title}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content side */}
                  <div className={`lg:col-span-7 p-8 md:p-12 flex flex-col justify-center ${isEven ? '' : 'lg:order-1'}`} style={{ background: i % 2 === 0 ? '#ffffff' : '#fafafa' }}>
                    {/* Icon + tag */}
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 flex items-center justify-center" style={{ border: '1.5px solid var(--vharanani-burgundy)', color: 'var(--vharanani-burgundy)' }}>
                        {phase.icon}
                      </div>
                      <span className="typo-caption tracking-[0.2em] uppercase font-inter" style={{ color: 'var(--vharanani-burgundy)' }}>
                        STEP {phase.step}
                      </span>
                      <div className="flex-1 h-[1px] ml-2" style={{ background: 'var(--vharanani-charcoal-20)' }} />
                    </div>

                    <h3 className="typo-headline-big font-bebas-neue uppercase tracking-wide mb-2" style={{ color: 'var(--vharanani-charcoal)' }}>
                      {phase.title}
                    </h3>
                    <p className="typo-subline font-bebas-neue uppercase tracking-wide mb-5" style={{ color: 'var(--vharanani-burgundy)', lineHeight: 1.2 }}>
                      {phase.headline}
                    </p>
                    <p className="typo-copy font-inter mb-8" style={{ color: 'var(--vharanani-charcoal-60)' }}>
                      {phase.description}
                    </p>

                    {/* Capabilities grid */}
                    <div className="grid grid-cols-2 gap-0" style={{ border: '1px solid var(--vharanani-charcoal-20)' }}>
                      {phase.capabilities.map((cap, ci) => (
                        <div
                          key={cap}
                          className="flex items-center gap-3 p-4"
                          style={{
                            borderRight: ci % 2 === 0 ? '1px solid var(--vharanani-charcoal-20)' : 'none',
                            borderBottom: ci < 2 ? '1px solid var(--vharanani-charcoal-20)' : 'none',
                          }}
                        >
                          <div className="w-1.5 h-1.5 flex-shrink-0" style={{ background: 'var(--vharanani-burgundy)' }} />
                          <span className="typo-copy-small font-inter" style={{ color: 'var(--vharanani-charcoal-80)' }}>
                            {cap}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
