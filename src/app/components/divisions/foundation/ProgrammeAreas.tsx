import { type ReactNode } from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Home, Heart } from 'lucide-react';
import { ImageWithFallback } from '../../ui/ImageWithFallback';
import { SectionWrapper } from '../shared';

const IMAGES = {
  education: 'https://images.unsplash.com/photo-1758270703250-80a6387439ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwdW5pdmVyc2l0eSUyMHN0dWRlbnRzJTIwZ3JhZHVhdGlvbiUyMGNlbGVicmF0aW9uJTIwY2FtcHVzfGVufDF8fHx8MTc3Mzg0OTM3NHww&ixlib=rb-4.1.0&q=80&w=1080',
  housing: 'https://images.unsplash.com/photo-1707410148802-fe08fe956398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZmZvcmRhYmxlJTIwaG91c2luZyUyMGNvbnN0cnVjdGlvbiUyMHdvcmtlcnMlMjBTb3V0aCUyMEFmcmljYSUyMHRvd25zaGlwfGVufDF8fHx8MTc3Mzg0OTM3NHww&ixlib=rb-4.1.0&q=80&w=1080',
  youthCommunity: 'https://images.unsplash.com/photo-1506185386801-3d7bc0ddd2bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIweW91dGglMjBzcG9ydHMlMjBzb2NjZXIlMjBjb21tdW5pdHklMjBmaWVsZHxlbnwxfHx8fDE3NzM4NDkzNzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
};

export function FoundationWireframe_ProgrammeAreas(): ReactNode {
  const programmes = [
    {
      title: 'Education',
      step: '01',
      icon: <GraduationCap size={22} />,
      image: IMAGES.education,
      headline: 'Breaking the Cycle of Poverty',
      description: 'Education is a powerful catalyst for breaking the cycle of poverty. Through scholarships, school support programmes, and infrastructure development, the Foundation invests in the future of young South Africans.',
      details: ['Full tuition & stipends', 'School uniforms & supplies', 'Computer labs & classrooms', 'Educational trips'],
      metric: { value: '34', label: 'Full Scholarships Since 2011' },
    },
    {
      title: 'Housing',
      step: '02',
      icon: <Home size={22} />,
      image: IMAGES.housing,
      headline: 'Dignified Shelter for All',
      description: 'Access to safe and dignified housing is essential for improving the quality of life of vulnerable families. The Foundation supports housing initiatives that provide homes for disadvantaged individuals and families.',
      details: ['Home construction', 'Community housing', 'Government partnerships', 'Nelson Mandela Day builds'],
      metric: { value: '3BR', label: 'Home Built for Elderly in Eenzaam' },
    },
    {
      title: 'Community Upliftment',
      step: '03',
      icon: <Heart size={22} />,
      image: IMAGES.youthCommunity,
      headline: 'Strengthening Social Wellbeing',
      description: 'The Foundation supports community-driven initiatives that strengthen social wellbeing, encourage youth development, and promote economic participation.',
      details: ['Youth development', 'Sports equipment & kits', 'Women\'s empowerment', 'Winter blanket drives'],
      metric: { value: '5', label: 'Provinces Reached' },
    },
  ];

  return (
    <SectionWrapper className="!py-0 !px-0">
      {/* ── SECTION HEADER ── */}
      <div className="px-6 md:px-12 lg:px-20 pt-10 md:pt-14 pb-8" style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[2px]" style={{ background: 'var(--vharanani-burgundy)' }} />
                <span className="typo-caption tracking-[0.25em] uppercase font-inter" style={{ color: 'var(--vharanani-burgundy)' }}>
                  OUR KEY PROGRAMME AREAS
                </span>
              </div>
              <h2 className="typo-header font-bebas-neue tracking-wide uppercase" style={{ color: 'var(--vharanani-charcoal)', lineHeight: 0.95 }}>
                Core Programme<br />Areas
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="typo-copy font-inter" style={{ color: 'var(--vharanani-charcoal-60)' }}>
                The David Mabilu Foundation focuses on three core programme areas that directly address community needs and long-term development.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── ALTERNATING PROGRAMME CARDS ── */}
      <div style={{ background: '#ffffff' }}>
        {programmes.map((prog, i) => {
          const isEven = i % 2 === 0;
          return (
            <motion.div
              key={prog.step}
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
                  <div className={`lg:col-span-5 relative h-[300px] lg:h-auto lg:min-h-[400px] overflow-hidden ${isEven ? '' : 'lg:order-2'}`}>
                    <ImageWithFallback
                      src={prog.image}
                      alt={prog.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0" style={{
                      background: isEven
                        ? 'linear-gradient(135deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.45) 100%)'
                        : 'linear-gradient(225deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.45) 100%)'
                    }} />
                    {/* Ghost number */}
                    <div className="absolute top-4 left-6">
                      <span className="font-bebas-neue" style={{ fontSize: 'clamp(72px, 10vw, 120px)', lineHeight: 1, color: 'rgba(255,255,255,0.07)' }}>
                        {prog.step}
                      </span>
                    </div>
                    {/* Bottom metric overlay */}
                    <div className="absolute bottom-0 left-0 right-0 px-6 py-4" style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }}>
                      <div className="flex items-center gap-4">
                        <div className="typo-headline-big font-bebas-neue" style={{ color: 'var(--vharanani-burgundy)' }}>
                          {prog.metric.value}
                        </div>
                        <div className="typo-caption tracking-[0.15em] uppercase font-inter text-white/50">
                          {prog.metric.label}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content side */}
                  <div className={`lg:col-span-7 p-8 md:p-12 flex flex-col justify-center ${isEven ? '' : 'lg:order-1'}`} style={{ background: i % 2 === 0 ? '#ffffff' : '#fafafa' }}>
                    {/* Icon + tag */}
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 flex items-center justify-center flex-shrink-0" style={{ border: '1.5px solid var(--vharanani-burgundy)', color: 'var(--vharanani-burgundy)' }}>
                        {prog.icon}
                      </div>
                      <span className="typo-caption tracking-[0.2em] uppercase font-inter" style={{ color: 'var(--vharanani-burgundy)' }}>
                        PROGRAMME {prog.step}
                      </span>
                      <div className="flex-1 h-[1px] ml-2" style={{ background: 'var(--vharanani-charcoal-20)' }} />
                    </div>

                    <h3 className="typo-headline-big font-bebas-neue uppercase tracking-wide mb-2" style={{ color: 'var(--vharanani-charcoal)' }}>
                      {prog.title}
                    </h3>
                    <p className="typo-subline font-bebas-neue uppercase tracking-wide mb-5" style={{ color: 'var(--vharanani-burgundy)', lineHeight: 1.2 }}>
                      {prog.headline}
                    </p>
                    <p className="typo-copy font-inter mb-8" style={{ color: 'var(--vharanani-charcoal-60)' }}>
                      {prog.description}
                    </p>

                    {/* Details grid */}
                    <div className="grid grid-cols-2 gap-0" style={{ border: '1px solid var(--vharanani-charcoal-20)' }}>
                      {prog.details.map((detail, di) => (
                        <div
                          key={detail}
                          className="flex items-center gap-3 p-4"
                          style={{
                            borderRight: di % 2 === 0 ? '1px solid var(--vharanani-charcoal-20)' : 'none',
                            borderBottom: di < 2 ? '1px solid var(--vharanani-charcoal-20)' : 'none',
                          }}
                        >
                          <div className="w-1.5 h-1.5 flex-shrink-0" style={{ background: 'var(--vharanani-burgundy)' }} />
                          <span className="typo-copy-small font-inter" style={{ color: 'var(--vharanani-charcoal-80)' }}>
                            {detail}
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

      {/* ── PROGRAMME SUMMARY BAND ── */}
      <div className="relative overflow-hidden" style={{ background: 'var(--vharanani-burgundy)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 py-12" style={{ borderTop: '3px solid var(--vharanani-burgundy)' }}>
            {programmes.map((prog, i) => (
              <motion.div
                key={prog.step + '-summary'}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 text-center"
                style={{ borderRight: i < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}
              >
                <div className="w-10 h-10 mx-auto mb-3 flex items-center justify-center" style={{ border: '1px solid var(--vharanani-burgundy)', color: 'var(--vharanani-burgundy)' }}>
                  {prog.icon}
                </div>
                <div className="typo-headline-small font-bebas-neue uppercase tracking-wide text-white mb-1">
                  {prog.title}
                </div>
                <div className="typo-headline-big font-bebas-neue" style={{ color: 'var(--vharanani-burgundy)' }}>
                  {prog.metric.value}
                </div>
                <div className="typo-meta tracking-[0.1em] uppercase font-inter text-white/60 mt-1">
                  {prog.metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
