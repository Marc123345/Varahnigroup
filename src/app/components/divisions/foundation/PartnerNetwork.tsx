import { type ReactNode } from 'react';
import { motion } from 'motion/react';
import { Globe, Landmark, BookOpen, Shield, Building2, Users } from 'lucide-react';
import { ImageWithFallback } from '../../ui/ImageWithFallback';
import { SectionWrapper } from '../shared';

const IMAGES = {
  blanketDrive: 'https://images.unsplash.com/photo-1559154352-06e29e1e11aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyaXR5JTIwYmxhbmtldCUyMGRvbmF0aW9uJTIwd2ludGVyJTIwQWZyaWNhJTIwZWxkZXJseSUyMHdvbWFufGVufDF8fHx8MTc3Mzg0OTM3OXww&ixlib=rb-4.1.0&q=80&w=1080',
};

export function FoundationWireframe_PartnerNetwork(): ReactNode {
  const partners = [
    { icon: <Globe size={22} />, title: 'Local & National Partners', description: 'Collaborating with organisations across South Africa to extend reach and impact.', step: '01' },
    { icon: <Landmark size={22} />, title: 'Government Institutions', description: 'Working with national and provincial government departments on development initiatives.', step: '02' },
    { icon: <BookOpen size={22} />, title: 'Faith-Based Organisations', description: 'Partnering with churches and religious bodies to support community education and welfare.', step: '03' },
    { icon: <Shield size={22} />, title: 'Traditional Leaders', description: 'Engaging with traditional authorities to ensure cultural sensitivity and community buy-in.', step: '04' },
    { icon: <Building2 size={22} />, title: 'Private Sector Partners', description: 'Leveraging corporate resources and expertise for sustainable programme delivery.', step: '05' },
    { icon: <Users size={22} />, title: 'Community Organisations', description: 'Empowering grassroots organisations to drive local change and development.', step: '06' },
  ];

  return (
    <SectionWrapper className="!py-0 !px-0">
      {/* ── HEADER BAND ── */}
      <div className="relative h-[30vh] sm:h-[36vh] min-h-[240px] sm:min-h-[290px] overflow-hidden">
        <ImageWithFallback
          src={IMAGES.blanketDrive}
          alt="Community partnership and collaboration"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.85) 100%)'
        }} />
        <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: 'var(--vharanani-burgundy)' }} />

        <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-12 lg:px-20 pb-10">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-[2px]" style={{ background: 'var(--vharanani-burgundy)' }} />
                  <span className="typo-caption tracking-[0.25em] uppercase font-inter" style={{ color: 'var(--vharanani-burgundy-60)' }}>
                    HOW WE ACHIEVE OUR GOAL
                  </span>
                </div>
                <h2 className="typo-header font-bebas-neue tracking-wide uppercase text-white" style={{ lineHeight: 0.95 }}>
                  Collaborating for<br />Meaningful Impact.
                </h2>
              </div>
              <div className="lg:col-span-5">
                <p className="typo-copy font-inter text-white/60">
                  The David Mabilu Foundation works collaboratively with a broad network of partners to deliver impactful programmes and initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── PARTNER GRID — 3x2 ── */}
      <div className="px-6 md:px-12 lg:px-20 py-10 md:py-16" style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0" style={{ border: '1px solid var(--vharanani-charcoal-20)' }}>
            {partners.map((partner, i) => (
              <motion.div
                key={partner.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative p-8 group hover:bg-[var(--vharanani-burgundy-20)] transition-colors duration-200"
                style={{
                  borderRight: (i % 3 !== 2) ? '1px solid var(--vharanani-charcoal-20)' : 'none',
                  borderBottom: i < 3 ? '1px solid var(--vharanani-charcoal-20)' : 'none',
                  background: i % 2 === 0 ? '#ffffff' : '#fafafa',
                }}
              >
                {/* Ghost step number */}
                <div className="absolute top-3 right-4">
                  <span className="typo-headline-big font-bebas-neue" style={{ color: 'var(--vharanani-charcoal-20)', opacity: 0.5 }}>
                    {partner.step}
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 flex items-center justify-center" style={{ border: '1.5px solid var(--vharanani-burgundy)', color: 'var(--vharanani-burgundy)' }}>
                    {partner.icon}
                  </div>
                  <div className="flex-1 h-[1px]" style={{ background: 'var(--vharanani-charcoal-20)' }} />
                </div>

                <h4 className="typo-headline-small font-bebas-neue tracking-wide uppercase mb-3" style={{ color: 'var(--vharanani-charcoal)' }}>
                  {partner.title}
                </h4>
                <p className="typo-copy-small font-inter" style={{ color: 'var(--vharanani-charcoal-60)' }}>
                  {partner.description}
                </p>

                {/* Bottom accent line on hover */}
                <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[2px] transition-all duration-500" style={{ background: 'var(--vharanani-burgundy)' }} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
