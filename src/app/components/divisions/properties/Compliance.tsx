import { type ReactNode } from 'react';
import { motion } from 'motion/react';
import { Home, Users } from 'lucide-react';
import { ImageWithFallback } from '../../ui/ImageWithFallback';
import { SectionWrapper } from '../shared';

const LOGO_IMAGES = {
  cidb: 'https://vharananiproperties.co.za/wp-content/uploads/2020/08/CIDB-9GB_9CE.png',
  iso: 'https://vharananiproperties.co.za/wp-content/uploads/2020/08/ISO-Certified-Construction-Company.png',
  bbbee: 'https://vharananiproperties.co.za/wp-content/uploads/2021/06/B-BBEE-LEVEL-1.png',
  nhbrc: 'https://vharananiproperties.co.za/wp-content/uploads/2020/08/NHRBC-members.png',
};

export function PropertiesWireframe_Compliance(): ReactNode {
  const certifications = [
    { image: LOGO_IMAGES.iso, title: 'ISO 9001:2015', subtitle: 'Certified Construction Company — Quality Management Systems', highlight: false },
    { image: LOGO_IMAGES.bbbee, title: 'B-BBEE Level 1', subtitle: 'Highest Contributor Level', highlight: false },
    { image: LOGO_IMAGES.cidb, title: 'CIDB Grade 9GB & 9CE', subtitle: 'General Building Works & Civil Engineering — Highest Grade', highlight: true },
    { image: LOGO_IMAGES.nhbrc, title: 'NHBRC', subtitle: 'National Home Builders Registration Council', highlight: false },
    { icon: <Home size={28} />, title: 'COIDA', subtitle: 'Registered with the Department of Labour', highlight: false },
  ];

  const highlighted = certifications.filter(c => c.highlight);
  const standard = certifications.filter(c => !c.highlight);

  return (
    <SectionWrapper className="!py-0 !px-0">
      {/* ── BURGUNDY HEADER BAND ── */}
      <div className="px-6 md:px-12 lg:px-20 py-10 md:py-14" style={{ background: 'var(--vharanani-burgundy)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-[2px]" style={{ background: 'rgba(255,255,255,0.5)' }} />
                <span className="typo-caption tracking-[0.28em] uppercase font-inter" style={{ color: 'rgba(255,255,255,0.75)' }}>
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

      {/* ── HIGHLIGHTED CERT — CIDB ── */}
      <div className="px-6 md:px-12 lg:px-20 py-0" style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto">
          {highlighted.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center gap-8 p-8 md:p-12"
              style={{ borderTop: '4px solid var(--vharanani-burgundy)', borderBottom: '1px solid rgba(0,0,0,0.08)' }}
            >
              {cert.image && (
                <div className="w-full md:w-64 h-24 flex items-center justify-center flex-shrink-0">
                  <ImageWithFallback
                    src={cert.image}
                    alt={cert.title}
                    className="max-h-20 w-auto object-contain"
                  />
                </div>
              )}
              <div className="text-center md:text-left">
                <div className="inline-block px-3 py-1 mb-3" style={{ background: 'var(--vharanani-burgundy)' }}>
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

          {/* ── CERTIFICATION LOGO GRID ── */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-[1px]" style={{ background: 'rgba(0,0,0,0.06)' }}>
            {standard.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                whileHover={{ y: -2 }}
                className="flex flex-col items-center justify-center p-6 md:p-8 text-center"
                style={{ background: '#fafafa' }}
              >
                {cert.image ? (
                  <div className="w-full h-16 flex items-center justify-center mb-4">
                    <ImageWithFallback
                      src={cert.image}
                      alt={cert.title}
                      className="max-h-14 w-auto object-contain"
                    />
                  </div>
                ) : (
                  <div className="w-14 h-14 flex items-center justify-center mb-4" style={{ border: '1.5px solid var(--vharanani-burgundy)', color: 'var(--vharanani-burgundy)' }}>
                    {cert.icon}
                  </div>
                )}
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
