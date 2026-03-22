import { type ReactNode } from 'react';
import { motion } from 'motion/react';

const PARA_VARIANTS = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay: i * 0.14, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function GroupWireframe_ExecutiveSummary(): ReactNode {
  return (
    <div style={{ background: '#0a0a0a', minHeight: '100%' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">

        {/* ── EYEBROW ── */}
        <motion.div
          className="flex items-center gap-3 mb-10"
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="h-[2px] w-8 flex-shrink-0" style={{ background: 'var(--vharanani-burgundy)' }} />
          <span
            className="font-inter typo-caption tracking-[0.28em] uppercase"
            style={{ color: 'var(--vharanani-burgundy)' }}
          >
            Who We Are
          </span>
        </motion.div>

        {/* ── DISPLAY HEADLINE ── */}
        <motion.h2
          className="font-bebas-neue uppercase mb-14 md:mb-20"
          style={{
            fontSize: 'clamp(52px, 10vw, 120px)',
            lineHeight: 0.95,
            letterSpacing: '0.02em',
            color: 'white',
          }}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          Vharanani<br />
          <span style={{ color: 'var(--vharanani-burgundy)' }}>Group</span>
        </motion.h2>

        {/* ── BODY GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* Left — narrative */}
          <div className="lg:col-span-7 flex flex-col gap-7">
            <motion.p
              className="font-inter leading-relaxed"
              style={{
                fontSize: 'clamp(15px, 1.35vw, 18px)',
                color: 'rgba(255,255,255,0.82)',
              }}
              custom={0}
              variants={PARA_VARIANTS}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Vharanani Group is an innovation-driven African conglomerate founded
              and led by David Mabilu. With a diversified portfolio spanning
              construction, property development, mining, technology, aviation, and
              philanthropy, the Group is committed to building sustainable enterprises
              that contribute to economic transformation and long-term infrastructure
              development.
            </motion.p>

            <motion.p
              className="font-inter leading-relaxed"
              style={{
                fontSize: 'clamp(14px, 1.2vw, 16px)',
                color: 'rgba(255,255,255,0.48)',
              }}
              custom={1}
              variants={PARA_VARIANTS}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              We operate with a clear mandate: to build assets that strengthen
              communities, enable economic participation, and support Africa's growth
              trajectory.
            </motion.p>
          </div>

          {/* Right — mandate pull-quote */}
          <motion.div
            className="lg:col-span-5"
            custom={2}
            variants={PARA_VARIANTS}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div
              className="p-8 md:p-10 relative"
              style={{ border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.025)' }}
            >
              {/* Burgundy top bar */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{ background: 'var(--vharanani-burgundy)' }}
              />

              <div
                className="font-inter typo-caption tracking-[0.22em] uppercase mb-5"
                style={{ color: 'var(--vharanani-burgundy)' }}
              >
                Our Mandate
              </div>

              <p
                className="font-bebas-neue uppercase leading-snug"
                style={{
                  fontSize: 'clamp(22px, 2.4vw, 32px)',
                  color: 'white',
                  letterSpacing: '0.02em',
                }}
              >
                To build assets that strengthen communities, enable economic
                participation, and support Africa's growth trajectory.
              </p>

              {/* Footer tag */}
              <div
                className="mt-8 pt-6 flex items-center gap-3"
                style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div className="h-[1px] w-5" style={{ background: 'var(--vharanani-burgundy)' }} />
                <span
                  className="font-inter typo-meta tracking-[0.18em] uppercase"
                  style={{ color: 'rgba(255,255,255,0.3)' }}
                >
                  Est. 2001 — South Africa
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
