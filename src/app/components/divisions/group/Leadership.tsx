import { type ReactNode } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../../ui/ImageWithFallback';
import { SectionWrapper } from '../shared';

const IMAGES = {
  leadership: 'https://ik.imagekit.io/qcvroy8xpd/image%202.png',
};

export function GroupWireframe_Leadership(): ReactNode {
  const executives = [
    { name: 'Chief Operating Officer', role: 'Operations & Delivery', initial: 'CO' },
    { name: 'Chief Financial Officer', role: 'Finance & Governance', initial: 'CF' },
    { name: 'Group Legal Counsel', role: 'Legal & Compliance', initial: 'GL' },
    { name: 'Head of Development', role: 'Strategy & Growth', initial: 'HD' },
  ];

  return (
    <SectionWrapper>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-[2px]" style={{ background: 'var(--vharanani-burgundy)' }} />
          <span className="typo-caption tracking-[0.25em] uppercase font-inter" style={{ color: 'var(--vharanani-burgundy)' }}>
            PEOPLE
          </span>
        </div>
        <p className="typo-meta tracking-[0.25em] uppercase font-inter mb-2" style={{ color: 'var(--vharanani-burgundy)' }}>LEADERSHIP</p>
        <h2 className="typo-headline-big font-bebas-neue uppercase tracking-wide mb-8" style={{ color: 'var(--vharanani-charcoal)' }}>
          Leadership
        </h2>

        {/* Founder spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 mb-8" style={{ border: '1px solid var(--vharanani-charcoal-20)' }}>
          <div className="lg:col-span-2 relative h-[360px] lg:h-auto overflow-hidden flex items-center justify-center" style={{ background: '#f5f0ef' }}>
            <ImageWithFallback
              src={IMAGES.leadership}
              alt="Executive Leadership"
              className="w-full h-full object-contain object-center"
            />
          </div>
          <div className="lg:col-span-3 p-8 md:p-12 flex flex-col justify-center" style={{ background: '#fafafa' }}>
            <div className="typo-caption tracking-[0.2em] uppercase font-inter mb-4" style={{ color: 'var(--vharanani-burgundy)' }}>
              FOUNDER & GROUP EXECUTIVE CHAIRMAN
            </div>
            <h3 className="typo-headline-big font-bebas-neue uppercase tracking-wide mb-4" style={{ color: 'var(--vharanani-charcoal)' }}>
              David Mabilu
            </h3>
            <div className="w-10 h-[2px] mb-6" style={{ background: 'var(--vharanani-burgundy)' }} />
            <p className="typo-copy font-inter mb-4" style={{ color: 'var(--vharanani-charcoal-80)' }}>
              David Mabilu founded Vharanani Group with a clear vision: to build a diversified African enterprise rooted in infrastructure, ownership, and impact. With over two decades of experience in construction and property development, he has led the Group's expansion across multiple sectors while maintaining a firm commitment to economic transformation and community advancement.
            </p>
            <p className="typo-copy-small font-inter mb-4" style={{ color: 'var(--vharanani-charcoal-60)' }}>
              Under his leadership, Vharanani Group continues to strengthen its national footprint and long-term investment strategy.
            </p>
          </div>
        </div>

        {/* Executive team */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0" style={{ border: '1px solid var(--vharanani-charcoal-20)' }}>
          {executives.map((exec, i) => (
            <motion.div
              key={exec.initial}
              className="p-6 text-center cursor-default group"
              style={{
                borderRight: i < 3 ? '1px solid var(--vharanani-charcoal-20)' : 'none',
                borderLeft: '3px solid var(--vharanani-burgundy)',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
            >
              <motion.div
                className="w-16 h-16 mx-auto mb-4 flex items-center justify-center typo-subline font-bebas-neue transition-colors duration-300"
                style={{ background: 'var(--vharanani-burgundy)', color: 'white' }}
                whileHover={{ background: '#812921' }}
              >
                {exec.initial}
              </motion.div>
              <div className="typo-headline-small font-bebas-neue uppercase tracking-wide" style={{ color: 'var(--vharanani-charcoal)' }}>
                {exec.name}
              </div>
              <div className="typo-caption font-inter mt-1" style={{ color: 'var(--vharanani-charcoal-60)' }}>
                {exec.role}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
