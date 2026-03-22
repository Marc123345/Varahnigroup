import { type ReactNode } from 'react';
import { motion } from 'motion/react';
import { Award, Shield, Building2, HardHat, Home, Users } from 'lucide-react';
import { SectionWrapper } from '../shared';

export function PropertiesWireframe_Compliance(): ReactNode {
  const certifications = [
    { icon: <Award size={28} />, title: 'ISO 9001:2015', subtitle: 'Certified Construction Company', highlight: false },
    { icon: <Shield size={28} />, title: 'B-BBEE Level 1', subtitle: 'Highest Contributor Level', highlight: false },
    { icon: <Building2 size={28} />, title: 'CIDB Grade 9GB', subtitle: 'General Building Works', highlight: true },
    { icon: <HardHat size={28} />, title: 'CIDB Grade 9CE', subtitle: 'Civil Engineering', highlight: true },
    { icon: <Home size={28} />, title: 'NHBRC', subtitle: 'National Home Builders Registration Council', highlight: false },
    { icon: <Users size={28} />, title: 'COIDA', subtitle: 'Registered with the Department of Labour', highlight: false },
  ];

  return (
    <SectionWrapper className="!py-0 !px-0">
      {/* ── BURGUNDY HEADER BAND ── */}
      <div className="px-6 md:px-12 lg:px-20 py-10 md:py-14" style={{ background: 'var(--vharanani-burgundy)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-[2px]" style={{ background: 'rgba(255,255,255,0.5)' }} />
                <span className="typo-caption tracking-[0.25em] uppercase font-inter" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  ACCREDITATION
                </span>
              </div>
              <h2 className="font-bebas-neue typo-header uppercase tracking-wide text-white" style={{ lineHeight: 0.95 }}>
                Certified Excellence.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="font-inter typo-copy" style={{ color: 'rgba(255,255,255,0.8)' }}>
                Holding South Africa&apos;s highest contractor grades, affirming our commitment to quality and compliance on every project.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── HIGHLIGHTED CERTS — CIDB top tier ── */}
      <div className="px-6 md:px-12 lg:px-20 py-0" style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] mt-0" style={{ background: 'var(--vharanani-charcoal-20)', borderBottom: '1px solid var(--vharanani-charcoal-20)' }}>
            {certifications.filter(c => c.highlight).map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-6 p-8 md:p-10"
                style={{ background: 'white', borderTop: '3px solid var(--vharanani-burgundy)' }}
              >
                <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center" style={{ background: 'var(--vharanani-burgundy)', color: 'white' }}>
                  {cert.icon}
                </div>
                <div>
                  <div className="inline-block px-2 py-0.5 mb-2" style={{ background: 'var(--vharanani-burgundy)' }}>
                    <span className="font-inter typo-meta text-white tracking-[0.15em] uppercase">Highest Grade</span>
                  </div>
                  <h4 className="font-bebas-neue typo-subline tracking-wide uppercase" style={{ color: 'var(--vharanani-charcoal)' }}>
                    {cert.title}
                  </h4>
                  <div className="font-inter typo-copy-small mt-1" style={{ color: 'var(--vharanani-charcoal-60)' }}>
                    {cert.subtitle}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── STANDARD CERTS ── */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-[1px]" style={{ background: 'var(--vharanani-charcoal-20)', borderBottom: '1px solid var(--vharanani-charcoal-20)' }}>
            {certifications.filter(c => !c.highlight).map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                whileHover={{ y: -2 }}
                className="flex flex-col items-center justify-center p-8 text-center"
                style={{ background: '#fafafa' }}
              >
                <div className="w-14 h-14 flex items-center justify-center mb-4" style={{ border: '1.5px solid var(--vharanani-burgundy)', color: 'var(--vharanani-burgundy)' }}>
                  {cert.icon}
                </div>
                <h4 className="font-bebas-neue typo-headline-small tracking-wide uppercase mb-1" style={{ color: 'var(--vharanani-charcoal)' }}>
                  {cert.title}
                </h4>
                <div className="font-inter typo-meta tracking-wider uppercase" style={{ color: 'var(--vharanani-charcoal-60)' }}>
                  {cert.subtitle}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
