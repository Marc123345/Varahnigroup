import { type ReactNode } from 'react';
import { motion } from 'motion/react';
import { FileCheck } from 'lucide-react';
import { ImageWithFallback } from '../../ui/ImageWithFallback';
import { SectionWrapper } from '../shared';

const LOGO_IMAGES = {
  cidb: 'https://vharananiproperties.co.za/wp-content/uploads/2020/08/CIDB-9GB_9CE.png',
  iso: 'https://vharananiproperties.co.za/wp-content/uploads/2020/08/ISO-Certified-Construction-Company.png',
  bbbee: 'https://vharananiproperties.co.za/wp-content/uploads/2021/06/B-BBEE-LEVEL-1.png',
  nhbrc: 'https://vharananiproperties.co.za/wp-content/uploads/2020/08/NHRBC-members.png',
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

export function PropertiesWireframe_Compliance(): ReactNode {
  return (
    <SectionWrapper className="!py-0 !px-0">

      {/* ── BURGUNDY HEADER ── */}
      <div className="px-6 md:px-12 lg:px-20 py-12 md:py-16 lg:py-20" style={{ background: 'var(--vharanani-burgundy)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <motion.div className="flex items-center gap-3 mb-6" {...fadeUp(0)}>
                <div className="w-8 h-[2px]" style={{ background: 'rgba(255,255,255,0.5)' }} />
                <span className="typo-caption tracking-[0.28em] uppercase font-inter" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  ACCREDITATION
                </span>
              </motion.div>
              <motion.h2
                className="font-bebas-neue typo-header uppercase tracking-wide text-white"
                style={{ lineHeight: 0.95 }}
                {...fadeUp(0.05)}
              >
                Certified Excellence.
              </motion.h2>
            </div>
            <motion.div className="lg:col-span-5" {...fadeUp(0.1)}>
              <p className="font-inter typo-copy" style={{ color: 'rgba(255,255,255,0.75)' }}>
                Holding South Africa&apos;s highest contractor grades, affirming our commitment to quality and compliance on every project.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── CERTIFICATIONS ── */}
      <div style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

          {/* CIDB — Featured / highlighted */}
          <motion.div
            className="py-10 md:py-14"
            style={{ borderBottom: '1px solid rgba(0,0,0,0.08)' }}
            {...fadeUp(0.1)}
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-4 flex justify-center">
                <div className="w-full max-w-[240px]">
                  <ImageWithFallback
                    src={LOGO_IMAGES.cidb}
                    alt="CIDB Grade 9GB & 9CE"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
              <div className="md:col-span-8">
                <div className="inline-block px-3 py-1 mb-4" style={{ background: 'var(--vharanani-burgundy)' }}>
                  <span className="font-inter typo-meta text-white tracking-[0.15em] uppercase">Highest Grade</span>
                </div>
                <h3 className="font-bebas-neue uppercase tracking-wide mb-2" style={{ fontSize: 'clamp(28px, 3vw, 42px)', lineHeight: 1.05, color: 'var(--vharanani-charcoal)' }}>
                  CIDB Grade 9GB &amp; 9CE
                </h3>
                <p className="font-inter typo-copy" style={{ color: 'var(--vharanani-charcoal-60)', maxWidth: '520px' }}>
                  General Building Works &amp; Civil Engineering — the highest possible grading issued by the Construction Industry Development Board of South Africa.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Other certifications — clean grid */}
          <div className="py-10 md:py-14">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">

              {/* ISO */}
              <motion.div className="flex flex-col items-center text-center" {...fadeUp(0.15)}>
                <div className="h-20 flex items-center justify-center mb-5">
                  <ImageWithFallback
                    src={LOGO_IMAGES.iso}
                    alt="ISO 9001:2015"
                    className="max-h-16 w-auto object-contain"
                  />
                </div>
                <h4 className="font-bebas-neue typo-headline-small tracking-wide uppercase mb-1" style={{ color: 'var(--vharanani-charcoal)' }}>
                  ISO 9001:2015
                </h4>
                <p className="font-inter typo-meta" style={{ color: 'var(--vharanani-charcoal-60)' }}>
                  Certified Construction Company — Quality Management Systems
                </p>
              </motion.div>

              {/* B-BBEE */}
              <motion.div className="flex flex-col items-center text-center" {...fadeUp(0.2)}>
                <div className="h-20 flex items-center justify-center mb-5">
                  <ImageWithFallback
                    src={LOGO_IMAGES.bbbee}
                    alt="B-BBEE Level 1"
                    className="max-h-16 w-auto object-contain"
                  />
                </div>
                <h4 className="font-bebas-neue typo-headline-small tracking-wide uppercase mb-1" style={{ color: 'var(--vharanani-charcoal)' }}>
                  B-BBEE Level 1
                </h4>
                <p className="font-inter typo-meta" style={{ color: 'var(--vharanani-charcoal-60)' }}>
                  Highest Contributor Level
                </p>
              </motion.div>

              {/* NHBRC */}
              <motion.div className="flex flex-col items-center text-center" {...fadeUp(0.25)}>
                <div className="h-20 flex items-center justify-center mb-5">
                  <ImageWithFallback
                    src={LOGO_IMAGES.nhbrc}
                    alt="NHBRC"
                    className="max-h-16 w-auto object-contain"
                  />
                </div>
                <h4 className="font-bebas-neue typo-headline-small tracking-wide uppercase mb-1" style={{ color: 'var(--vharanani-charcoal)' }}>
                  NHBRC
                </h4>
                <p className="font-inter typo-meta" style={{ color: 'var(--vharanani-charcoal-60)' }}>
                  National Home Builders Registration Council
                </p>
              </motion.div>

              {/* COIDA */}
              <motion.div className="flex flex-col items-center text-center" {...fadeUp(0.3)}>
                <div className="h-20 flex items-center justify-center mb-5">
                  <div className="w-16 h-16 flex items-center justify-center" style={{ border: '1.5px solid var(--vharanani-burgundy)', color: 'var(--vharanani-burgundy)' }}>
                    <FileCheck size={28} />
                  </div>
                </div>
                <h4 className="font-bebas-neue typo-headline-small tracking-wide uppercase mb-1" style={{ color: 'var(--vharanani-charcoal)' }}>
                  COIDA
                </h4>
                <p className="font-inter typo-meta" style={{ color: 'var(--vharanani-charcoal-60)' }}>
                  Registered with the Department of Labour
                </p>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
}
