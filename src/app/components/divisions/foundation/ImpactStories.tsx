import { useState, type ReactNode } from 'react';
import { ImageWithFallback } from '../../ui/ImageWithFallback';
import { SectionWrapper } from '../shared';

const IMAGES = {
  housing: 'https://ik.imagekit.io/qcvroy8xpd/Vharnani%20final/83_aerial_view_colourful_social_housing_blocks_township.jpg?updatedAt=1774955148467',
  youthCommunity: 'https://ik.imagekit.io/qcvroy8xpd/Vharnani%20final/82_colourful_social_housing_blocks_under_construction_township.jpg?updatedAt=1774955147460',
  classroom: 'https://ik.imagekit.io/qcvroy8xpd/Vharnani%20final/66_aerial_view_clinic_hospital_construction_red_roof.jpg?updatedAt=1774955145718',
};

export function FoundationWireframe_ImpactStories(): ReactNode {
  const [activeTab, setActiveTab] = useState<'education' | 'housing' | 'community'>('education');

  const tabs = {
    education: {
      title: 'Education Impact',
      metric: '34',
      metricLabel: 'Full scholarships provided since 2011',
      image: IMAGES.classroom,
      highlight: 'Coverage includes tuition, monthly stipends, school uniforms, educational trips, and monthly grocery support for families.',
      details: [
        { label: 'Galananzhele Primary School', note: 'Computers & additional classrooms' },
        { label: 'Tshifhatani Primary School', note: 'Learning resources & infrastructure' },
        { label: 'Tshidimbini Secondary School', note: 'Computer lab & facilities' },
        { label: 'Tshiavha Primary School', note: 'Classroom construction & supplies' },
      ],
    },
    housing: {
      title: 'Housing Dignity',
      metric: '3',
      metricLabel: 'Bedroom home built for elderly woman in Eenzaam',
      image: IMAGES.housing,
      highlight: 'Through collaborations with government, the Foundation provided a three-bedroom house for an elderly woman in Eenzaam village who had not received her social grant since 1985.',
      details: [
        { label: 'Capricorn FM', note: 'Media partnership for housing initiative' },
        { label: 'Dept. of Human Settlements', note: 'Mpumalanga housing collaboration' },
        { label: 'Office of the Premier', note: 'Limpopo housing programme' },
        { label: 'Office of the President', note: 'National housing day support' },
      ],
    },
    community: {
      title: 'Community & Social Support',
      metric: '2012',
      metricLabel: 'Nelson Mandela Day at Mambo Primary',
      image: IMAGES.youthCommunity,
      highlight: 'David Mabilu and Vharanani Properties staff spent their 67 minutes at Mambo Primary School in Chiawelo, Soweto — painting classrooms, cleaning facilities, and donating hygiene supplies.',
      details: [
        { label: 'UAAC & Church of Christ', note: 'Faith-based student financial assistance' },
        { label: 'Sports equipment donations', note: 'Kits, soccer balls, and boots for youth' },
        { label: 'Women\'s Day 2017', note: 'Blankets for elderly women in Chiawelo' },
        { label: 'Winter blanket drives', note: 'Free State community support' },
      ],
    },
  };

  const current = tabs[activeTab];

  return (
    <SectionWrapper className="!px-0">
      <div className="px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-8">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[2px]" style={{ background: 'var(--vharanani-burgundy)' }} />
                <span className="typo-caption tracking-[0.28em] uppercase font-inter" style={{ color: 'var(--vharanani-burgundy)' }}>
                  WHAT WE DO
                </span>
              </div>
              <h2 className="typo-header font-bebas-neue tracking-wide uppercase" style={{ color: 'var(--vharanani-charcoal)', lineHeight: 0.95 }}>
                Our Impact<br />In Action
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="typo-copy font-inter" style={{ color: 'var(--vharanani-charcoal-60)' }}>
                The David Mabilu Foundation focuses on initiatives and projects that assist individuals and communities to become self-sustaining and independent.
              </p>
            </div>
          </div>

          {/* Tab bar */}
          <div className="flex gap-0 mb-0" style={{ borderBottom: '2px solid var(--vharanani-charcoal-20)' }}>
            {([['education', 'Education Impact'], ['housing', 'Housing Dignity'], ['community', 'Community Support']] as const).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className="flex-1 py-5 text-center transition-all duration-200 relative"
                style={{
                  background: activeTab === key ? 'rgba(0,0,0,0.04)' : 'transparent',
                }}
              >
                <span
                  className="typo-headline-small font-bebas-neue tracking-wider uppercase"
                  style={{ color: activeTab === key ? 'var(--vharanani-burgundy)' : 'var(--vharanani-charcoal-60)' }}
                >
                  {label}
                </span>
                {activeTab === key && (
                  <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: 'var(--vharanani-burgundy)', marginBottom: '-2px' }} />
                )}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="overflow-hidden" style={{ border: '1px solid var(--vharanani-charcoal-20)', borderTop: 'none' }}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Left — Image + metric */}
              <div className="lg:col-span-5 relative h-[320px] lg:h-auto lg:min-h-[440px] overflow-hidden">
                <ImageWithFallback
                  src={current.image}
                  alt={current.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0" style={{
                  background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.9) 100%)'
                }} />

                {/* Big metric */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="font-bebas-neue tracking-wider text-white mb-1" style={{ fontSize: 'clamp(48px, 6vw, 80px)', lineHeight: '1' }}>
                    {current.metric}
                  </div>
                  <div className="typo-copy-small font-inter text-white/60">
                    {current.metricLabel}
                  </div>
                </div>
              </div>

              {/* Right — Story + details */}
              <div className="lg:col-span-7 p-5 sm:p-8 md:p-10" style={{ background: '#fafafa' }}>
                <h3 className="typo-subline font-bebas-neue tracking-wide uppercase mb-5" style={{ color: 'var(--vharanani-charcoal)' }}>
                  {current.title}
                </h3>

                {/* Highlight */}
                <div className="p-5 mb-8" style={{ borderLeft: '3px solid var(--vharanani-burgundy)', background: 'rgba(0,0,0,0.04)' }}>
                  <p className="typo-copy font-inter" style={{ color: 'var(--vharanani-charcoal-80)' }}>
                    {current.highlight}
                  </p>
                </div>

                {/* Detail items */}
                <div className="grid grid-cols-1 gap-0" style={{ border: '1px solid var(--vharanani-charcoal-20)' }}>
                  {current.details.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 p-4"
                      style={{ borderBottom: i < 3 ? '1px solid var(--vharanani-charcoal-20)' : 'none' }}
                    >
                      <div className="w-1.5 h-1.5 flex-shrink-0 mt-2" style={{ background: 'var(--vharanani-burgundy)' }} />
                      <div>
                        <div className="typo-headline-small font-bebas-neue tracking-wide uppercase" style={{ color: 'var(--vharanani-charcoal)' }}>
                          {item.label}
                        </div>
                        <div className="typo-meta font-inter mt-0.5" style={{ color: 'var(--vharanani-charcoal-60)' }}>
                          {item.note}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
