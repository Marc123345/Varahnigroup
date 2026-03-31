import { useRef, type ReactNode } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../../ui/ImageWithFallback';
import { AnimatedCounter } from '../shared';
import { useInView } from '../../../hooks/useInView';

const IMAGES = {
  ceoPortrait: 'https://ik.imagekit.io/qcvroy8xpd/image%202.png',
  founded: 'https://vharananiproperties.co.za/wp-content/uploads/2020/08/rsz_dji_0560.jpg',
};

/* ─── Stagger helper ─── */
function stagger(i: number, base = 0.15) {
  return { delay: i * base };
}

export function PropertiesWireframe_AboutImpact(): ReactNode {
  const sectionOneRef = useRef<HTMLDivElement>(null);
  const sectionTwoRef = useRef<HTMLDivElement>(null);
  const s1InView = useInView(sectionOneRef, { once: true, amount: 0.15 });
  const s2InView = useInView(sectionTwoRef, { once: true, amount: 0.15 });

  return (
    <div className="w-full overflow-hidden">

      {/* ═══════════════════════════════════════════════════════════
          SECTION 1 — CEO Portrait  |  About Story
      ═══════════════════════════════════════════════════════════ */}
      <div ref={sectionOneRef} className="grid grid-cols-1 lg:grid-cols-2 min-h-[640px] lg:min-h-[720px]">

        {/* ── LEFT: CEO Portrait ── */}
        <motion.div
          className="relative overflow-hidden"
          initial={{ opacity: 0, x: -60 }}
          animate={s1InView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Full‑bleed image */}
          <ImageWithFallback
            src={IMAGES.ceoPortrait}
            alt="David Mabilu, Founder & CEO of Vharanani Properties"
            className="w-full h-full object-cover object-top absolute inset-0"
          />

          {/* Dark overlay */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.20) 0%, rgba(0,0,0,0.70) 100%)' }}
          />

          {/* Diagonal accent stripe */}
          <div
            className="absolute top-0 right-0 w-24 h-full pointer-events-none hidden lg:block"
            style={{
              background: 'linear-gradient(135deg, transparent 48%, #812921 49%, #812921 52%, transparent 53%)',
              opacity: 0.5,
            }}
          />

          {/* Name + title pinned at bottom */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 p-8 md:p-10"
            initial={{ opacity: 0, y: 30 }}
            animate={s1InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            <div
              className="w-10 h-[3px] mb-4"
              style={{ background: '#812921' }}
            />
            <h3 className="font-bebas-neue tracking-wide text-white uppercase" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: 1.05 }}>
              David Mabilu
            </h3>
            <p className="font-inter typo-meta tracking-[0.3em] uppercase mt-2" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Founder&nbsp;&amp;&nbsp;Chief Executive Officer
            </p>
          </motion.div>

          {/* Spacer to ensure min‑height on mobile where we are not position:absolute */}
          <div className="lg:hidden h-[480px]" />
        </motion.div>

        {/* ── RIGHT: About Story ── */}
        <motion.div
          className="relative flex flex-col justify-center px-8 py-14 md:px-14 md:py-16 lg:px-16 lg:py-20"
          style={{ background: '#ffffff' }}
          initial={{ opacity: 0, x: 60 }}
          animate={s1InView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
        >
          {/* Oversized decorative number */}
          <span
            className="absolute top-4 right-6 font-bebas-neue select-none pointer-events-none hidden lg:block"
            style={{ fontSize: '13rem', lineHeight: 0.85, color: 'rgba(129,41,33,0.04)' }}
            aria-hidden="true"
          >
            01
          </span>

          {/* Overline */}
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={s1InView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ...stagger(1) }}
          >
            <div className="w-10 h-[2px]" style={{ background: 'var(--vharanani-burgundy)' }} />
            <span className="typo-caption tracking-[0.28em] uppercase font-inter" style={{ color: 'var(--vharanani-burgundy)' }}>
              OUR STORY
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            className="font-bebas-neue tracking-wide uppercase mb-6"
            style={{ color: 'var(--vharanani-charcoal)', fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', lineHeight: 1.05 }}
            initial={{ opacity: 0, y: 24 }}
            animate={s1InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.6, ...stagger(2) }}
          >
            About Vharanani Properties
          </motion.h2>

          <motion.div
            className="w-14 h-[3px] mb-8"
            style={{ background: 'var(--vharanani-burgundy)' }}
            initial={{ scaleX: 0 }}
            animate={s1InView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.5, ...stagger(3) }}
          />

          {/* Paragraphs */}
          <motion.p
            className="font-inter typo-copy mb-5 leading-relaxed"
            style={{ color: 'var(--vharanani-charcoal-80)' }}
            initial={{ opacity: 0, y: 16 }}
            animate={s1InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.5, ...stagger(4) }}
          >
            Vharanani Properties was founded in 2001 by Chief Executive Officer David Mabilu. What began as a small operation has grown into one of South Africa&apos;s leading Black-owned and managed construction companies.
          </motion.p>

          <motion.p
            className="font-inter typo-copy mb-5 leading-relaxed"
            style={{ color: 'var(--vharanani-charcoal-80)' }}
            initial={{ opacity: 0, y: 16 }}
            animate={s1InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.5, ...stagger(5) }}
          >
            With more than two decades of experience, the company has developed strong technical expertise across a broad range of infrastructure sectors, delivering projects that meet the highest standards of quality, safety, and efficiency.
          </motion.p>

          <motion.p
            className="font-inter typo-copy leading-relaxed"
            style={{ color: 'var(--vharanani-charcoal-60)' }}
            initial={{ opacity: 0, y: 16 }}
            animate={s1InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.5, ...stagger(6) }}
          >
            Today, Vharanani Properties operates nationally and has successfully completed numerous high-value construction projects valued at billions of rands. Our multidisciplinary capability enables us to deliver projects of varying scale and complexity while maintaining strict adherence to quality standards, safety protocols, and responsible project management.
          </motion.p>
        </motion.div>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2 — Mission & Stats  |  Founded Detail
      ═══════════════════════════════════════════════════════════ */}
      <div ref={sectionTwoRef} className="grid grid-cols-1 lg:grid-cols-2 min-h-[480px]">

        {/* ── LEFT: Burgundy panel — Mission + Stats ── */}
        <motion.div
          className="relative flex flex-col justify-center px-8 py-14 md:px-14 md:py-16 lg:px-16 lg:py-20 overflow-hidden"
          style={{ background: '#812921' }}
          initial={{ opacity: 0, x: -50 }}
          animate={s2InView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Large ghost watermark */}
          <span
            className="absolute -bottom-6 -right-4 font-bebas-neue select-none pointer-events-none"
            style={{ fontSize: 'clamp(8rem, 18vw, 20rem)', lineHeight: 0.8, color: 'rgba(255,255,255,0.06)' }}
            aria-hidden="true"
          >
            MISSION
          </span>

          {/* Quote mark */}
          <motion.span
            className="font-bebas-neue select-none"
            style={{ fontSize: '5rem', lineHeight: 0.7, color: 'rgba(255,255,255,0.2)' }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={s2InView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            aria-hidden="true"
          >
            &ldquo;
          </motion.span>

          {/* Mission statement */}
          <motion.blockquote
            className="font-inter italic leading-relaxed mb-3 max-w-md"
            style={{ color: '#ffffff', fontSize: 'clamp(1.15rem, 2.2vw, 1.5rem)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={s2InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            To restore people&apos;s dignity through infrastructure development.
          </motion.blockquote>

          <motion.p
            className="font-inter typo-meta tracking-[0.2em] uppercase mb-12"
            style={{ color: 'rgba(255,255,255,0.55)' }}
            initial={{ opacity: 0 }}
            animate={s2InView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            &mdash; Our Mission
          </motion.p>

          {/* Key stats row */}
          <div className="grid grid-cols-3 gap-6">
            {[
              { value: 20, suffix: '+', label: 'Years Experience' },
              { value: 1, suffix: '', label: 'B-BBEE Level', prefix: 'Level ' },
              { value: 9, suffix: '', label: 'Provinces Active' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 24 }}
                animate={s2InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.12 }}
              >
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  color="#ffffff"
                />
                <div
                  className="w-6 h-[2px] mx-auto my-2"
                  style={{ background: 'rgba(255,255,255,0.25)' }}
                />
                <div className="font-inter typo-meta tracking-wider uppercase" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── RIGHT: Founded Detail ── */}
        <motion.div
          className="relative flex flex-col justify-center items-center px-8 py-14 md:px-14 md:py-16 lg:px-16 lg:py-20"
          style={{ background: '#fafafa' }}
          initial={{ opacity: 0, x: 50 }}
          animate={s2InView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
        >
          {/* Decorative vertical line */}
          <motion.div
            className="absolute top-0 left-0 w-[3px] h-full hidden lg:block"
            style={{ background: 'var(--vharanani-burgundy)' }}
            initial={{ scaleY: 0 }}
            animate={s2InView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />

          {/* Content block */}
          <div className="max-w-sm w-full">
            <motion.div
              className="flex items-center gap-3 mb-4"
              initial={{ opacity: 0, x: -16 }}
              animate={s2InView ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              <div className="w-8 h-[2px]" style={{ background: 'var(--vharanani-burgundy)' }} />
              <span className="typo-caption tracking-[0.28em] uppercase font-inter" style={{ color: 'var(--vharanani-burgundy)' }}>
                EST. 2001
              </span>
            </motion.div>

            <motion.h3
              className="font-bebas-neue tracking-wide uppercase mb-3"
              style={{ color: 'var(--vharanani-charcoal)', fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', lineHeight: 1.1 }}
              initial={{ opacity: 0, y: 20 }}
              animate={s2InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Founded&nbsp;2001
            </motion.h3>

            <motion.p
              className="font-inter typo-copy leading-relaxed mb-8"
              style={{ color: 'var(--vharanani-charcoal-60)' }}
              initial={{ opacity: 0, y: 16 }}
              animate={s2InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              From humble beginnings in Limpopo to a national footprint spanning all nine provinces &mdash; building dignity, one project at a time.
            </motion.p>

            {/* Small image with burgundy frame */}
            <motion.div
              className="relative overflow-hidden rounded-sm"
              style={{ border: '3px solid #812921' }}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={s2InView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              <ImageWithFallback
                src={IMAGES.founded}
                alt="Vharanani Properties aerial project view"
                className="w-full h-48 object-cover"
              />
              {/* Red‑tinted overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'rgba(129,41,33,0.10)' }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
