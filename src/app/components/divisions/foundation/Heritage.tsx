import { type ReactNode } from 'react';
import { motion } from 'motion/react';
import { Building2, Home, Heart } from 'lucide-react';
import { ImageWithFallback } from '../../ui/ImageWithFallback';

const IMAGE = 'https://ik.imagekit.io/qcvroy8xpd/A%20community%20health%20worker%20conducts%20a%20health%20education%20session%20outdoors%20in%20a%20rural%20village.png?updatedAt=1764674101441';

const PARTNERS = [
  { icon: Building2, label: 'Vharanani Properties', desc: 'Infrastructure & Construction' },
  { icon: Home,      label: 'DMFT',                 desc: 'Property Development'         },
  { icon: Heart,     label: 'Foundation',            desc: 'Social Impact'                },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
});

export function FoundationWireframe_Heritage(): ReactNode {
  return (
    <div style={{ background: '#ffffff', overflow: 'hidden' }}>

      {/* ══════ FULL-BLEED IMAGE HEADER ══════ */}
      <motion.div
        className="relative overflow-hidden"
        style={{ height: 'clamp(240px, 38vh, 420px)' }}
        initial={{ clipPath: 'inset(0 0 100% 0)' }}
        whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
        viewport={{ once: true }}
        transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
      >
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <ImageWithFallback
            src={IMAGE}
            alt="Vharanani Group community engagement"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.65) 100%)' }}
        />
        {/* Burgundy bottom line */}
        <div className="absolute bottom-0 left-0 right-0 h-[4px]" style={{ background: 'var(--vharanani-burgundy)' }} />
        {/* Image label */}
        <div className="absolute bottom-8 left-6 md:left-12 lg:left-20 flex items-center gap-3">
          <div className="h-[1px] w-6" style={{ background: 'var(--vharanani-burgundy)' }} />
          <span className="font-inter typo-meta tracking-[0.2em] uppercase text-white/70">
            Community Partnership
          </span>
        </div>
        {/* Ghost watermark */}
        <div className="absolute top-6 right-6 pointer-events-none select-none" aria-hidden>
          <span
            className="font-bebas-neue uppercase"
            style={{ fontSize: 'clamp(48px, 8vw, 110px)', color: 'rgba(255,255,255,0.07)', letterSpacing: '0.06em', lineHeight: 1 }}
          >
            HERITAGE
          </span>
        </div>
      </motion.div>

      {/* ══════ MAIN CONTENT ══════ */}
      <div className="px-6 md:px-12 lg:px-20 py-14 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">

            {/* Left — narrative */}
            <div className="lg:col-span-7">
              <motion.div className="flex items-center gap-3 mb-6" {...fadeUp(0)}>
                <div className="h-[2px] w-8" style={{ background: 'var(--vharanani-burgundy)' }} />
                <span className="font-inter typo-caption tracking-[0.28em] uppercase" style={{ color: 'var(--vharanani-burgundy)' }}>
                  Our Heritage
                </span>
              </motion.div>

              <div className="overflow-hidden mb-8">
                <motion.h2
                  className="typo-headline-big font-bebas-neue uppercase tracking-wide"
                  style={{ color: 'var(--vharanani-charcoal)' }}
                  initial={{ clipPath: 'inset(0 0 100% 0)' }}
                  whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.85, delay: 0.08, ease: [0.76, 0, 0.24, 1] }}
                >
                  Supported by the<br />
                  <span style={{ color: 'var(--vharanani-burgundy)' }}>Vharanani Group.</span>
                </motion.h2>
              </div>

              <motion.p
                className="font-inter leading-relaxed mb-5"
                style={{ fontSize: 'clamp(15px, 1.3vw, 17px)', color: '#1a1a1a' }}
                {...fadeUp(0.18)}
              >
                The David Mabilu Foundation works closely with the Vharanani Group and its subsidiary
                companies to support social development initiatives.
              </motion.p>

              <motion.p
                className="font-inter leading-relaxed mb-5"
                style={{ fontSize: 'clamp(14px, 1.15vw, 15px)', color: 'rgba(0,0,0,0.55)' }}
                {...fadeUp(0.26)}
              >
                Through these relationships, the Foundation is able to leverage resources, expertise,
                and partnerships that enhance the reach and impact of its programmes.
              </motion.p>

              <motion.p
                className="font-inter leading-relaxed"
                style={{ fontSize: 'clamp(14px, 1.15vw, 15px)', color: 'rgba(0,0,0,0.55)' }}
                {...fadeUp(0.32)}
              >
                Together, these efforts contribute to building stronger, more resilient communities
                across South Africa.
              </motion.p>
            </div>

            {/* Right — relationship panel */}
            <div className="lg:col-span-5 flex flex-col gap-4">

              {/* Group hub node */}
              <motion.div
                className="relative p-6 text-center"
                style={{ background: 'var(--vharanani-burgundy)' }}
                {...fadeUp(0.1)}
              >
                <div className="h-[1px] w-8 mx-auto mb-3" style={{ background: 'rgba(255,255,255,0.35)' }} />
                <div
                  className="font-bebas-neue uppercase text-white"
                  style={{ fontSize: 'clamp(18px, 2vw, 24px)', letterSpacing: '0.05em' }}
                >
                  Vharanani Group
                </div>
                <p className="font-inter typo-meta tracking-[0.15em] uppercase mt-1" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  Parent Organisation
                </p>
                {/* Connector line */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[1px] h-4" style={{ background: 'var(--vharanani-burgundy)' }} />
              </motion.div>

              {/* Division nodes */}
              <div className="flex flex-col gap-3 pt-4 pl-4" style={{ borderLeft: '2px solid rgba(129,41,33,0.15)' }}>
                {PARTNERS.map((p, i) => {
                  const Icon = p.icon;
                  return (
                    <motion.div
                      key={p.label}
                      className="relative flex items-center gap-4 p-4"
                      style={{ border: '1px solid rgba(0,0,0,0.08)', background: '#fafafa' }}
                      {...fadeUp(0.2 + i * 0.1)}
                    >
                      {/* Connector tick */}
                      <div
                        className="absolute -left-[18px] top-1/2 -translate-y-1/2 w-4 h-[1px]"
                        style={{ background: 'rgba(129,41,33,0.4)' }}
                      />
                      <div
                        className="w-8 h-8 flex items-center justify-center flex-shrink-0"
                        style={{ background: 'var(--vharanani-burgundy)' }}
                      >
                        <Icon size={15} color="white" />
                      </div>
                      <div>
                        <div
                          className="font-bebas-neue uppercase tracking-wide"
                          style={{ fontSize: 'clamp(14px, 1.3vw, 17px)', color: '#111111', letterSpacing: '0.04em' }}
                        >
                          {p.label}
                        </div>
                        <div className="font-inter typo-meta mt-0.5" style={{ color: 'rgba(0,0,0,0.45)', fontSize: '11px' }}>
                          {p.desc}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ══════ QUOTE BAND ══════ */}
      <motion.div
        className="relative overflow-hidden"
        style={{ background: 'var(--vharanani-burgundy)' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Ghost watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden" aria-hidden>
          <span
            className="font-bebas-neue uppercase whitespace-nowrap"
            style={{ fontSize: 'clamp(60px, 12vw, 160px)', color: 'rgba(255,255,255,0.05)', letterSpacing: '0.06em', lineHeight: 1 }}
          >
            FOUNDATION
          </span>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-16">
          <div className="flex items-start gap-6">
            <div
              className="hidden md:block font-bebas-neue text-white flex-shrink-0 leading-none"
              style={{ fontSize: '80px', opacity: 0.15 }}
            >
              "
            </div>
            <div>
              <p
                className="font-bebas-neue uppercase text-white"
                style={{ fontSize: 'clamp(20px, 2.8vw, 38px)', lineHeight: 1.2, letterSpacing: '0.02em' }}
              >
                We build not just infrastructure, but the foundations for a dignified future.
              </p>
              <div className="flex items-center gap-3 mt-5">
                <div className="h-[1px] w-6" style={{ background: 'rgba(255,255,255,0.35)' }} />
                <span className="font-inter typo-meta tracking-[0.2em] uppercase" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  David Mabilu — Founder
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

    </div>
  );
}
