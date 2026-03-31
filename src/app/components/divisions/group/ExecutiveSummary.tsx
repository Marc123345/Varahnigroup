import { type ReactNode } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../../ui/ImageWithFallback';

const IMAGES = [
  { src: 'https://ik.imagekit.io/qcvroy8xpd/Photo%201.png',                                    alt: 'Vharanani leadership' },
  { src: 'https://ik.imagekit.io/qcvroy8xpd/the%20.png',                                       alt: 'Vharanani infrastructure' },
  { src: 'https://vharananiproperties.co.za/wp-content/uploads/2021/06/Polokwane-CBD-Pipeline.png', alt: 'Vharanani community' },
  { src: 'https://vharananiproperties.co.za/wp-content/uploads/2020/08/rsz_dji_0002.jpg',      alt: 'Vharanani people' },
];

/* ── animation variants (using `animate` — no whileInView) ── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
  },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
  },
});

const clipReveal = (delay = 0) => ({
  initial: { clipPath: 'inset(0 0 100% 0)' },
  animate: {
    clipPath: 'inset(0 0 0% 0)',
    transition: { duration: 1, delay, ease: [0.76, 0, 0.24, 1] },
  },
});

const slideFromLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -60 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] },
  },
});

const slideFromRight = (delay = 0) => ({
  initial: { opacity: 0, x: 60 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] },
  },
});

/* ── key stats ── */
const STATS = [
  { value: '24+', label: 'Years' },
  { value: '8', label: 'Divisions' },
  { value: '1000+', label: 'Projects' },
];

export function GroupWireframe_ExecutiveSummary(): ReactNode {
  return (
    <div style={{ overflow: 'hidden' }}>

      {/* ══════════════════════════════════════════════════════════
          SECTION 1 — BLACK LEFT / IMAGE RIGHT
      ══════════════════════════════════════════════════════════ */}
      <div className="grid grid-cols-1 lg:grid-cols-2" style={{ minHeight: '85vh' }}>

        {/* ── LEFT: Solid black panel ── */}
        <div
          className="relative flex flex-col justify-center px-8 sm:px-12 md:px-16 lg:px-20 xl:px-28 py-20 lg:py-24"
          style={{ background: '#111111' }}
        >
          {/* Ghost watermark */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
            aria-hidden
          >
            <span
              className="font-bebas-neue uppercase whitespace-nowrap"
              style={{
                fontSize: 'clamp(100px, 20vw, 280px)',
                letterSpacing: '0.06em',
                color: 'rgba(255,255,255,0.025)',
                lineHeight: 1,
              }}
            >
              VHARANANI
            </span>
          </div>

          <div className="relative z-10 max-w-xl">
            {/* Overline */}
            <motion.div
              className="flex items-center gap-3 mb-8"
              {...fadeUp(0.1)}
            >
              <div className="h-[2px] w-10" style={{ background: 'var(--vharanani-burgundy)' }} />
              <span
                className="font-inter typo-caption tracking-[0.3em] uppercase"
                style={{ color: 'rgba(255,255,255,0.5)' }}
              >
                Executive Summary
              </span>
            </motion.div>

            {/* Big headline */}
            <motion.h2
              className="font-bebas-neue uppercase mb-8"
              style={{
                fontSize: 'clamp(48px, 6vw, 96px)',
                lineHeight: 0.95,
                letterSpacing: '0.02em',
                color: '#ffffff',
              }}
              {...fadeUp(0.2)}
            >
              Who We<br />Are
            </motion.h2>

            {/* Thin burgundy rule */}
            <motion.div
              className="mb-8"
              style={{ width: 64, height: 3, background: 'var(--vharanani-burgundy)' }}
              {...fadeIn(0.35)}
            />

            {/* Description */}
            <motion.p
              className="font-inter leading-relaxed mb-10"
              style={{
                fontSize: 'clamp(15px, 1.2vw, 18px)',
                color: 'rgba(255,255,255,0.72)',
                maxWidth: 480,
              }}
              {...fadeUp(0.4)}
            >
              Vharanani Group is an innovation-driven African conglomerate founded
              and led by David Mabilu. With a diversified portfolio spanning
              construction, property development, mining, technology, aviation, and
              philanthropy, the Group is committed to building sustainable enterprises
              that contribute to economic transformation and long-term infrastructure
              development.
            </motion.p>

            {/* Stats row */}
            <motion.div
              className="flex gap-10 md:gap-14 pt-2"
              {...fadeUp(0.55)}
            >
              {STATS.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span
                    className="font-bebas-neue"
                    style={{
                      fontSize: 'clamp(36px, 4vw, 56px)',
                      lineHeight: 1,
                      color: '#ffffff',
                      letterSpacing: '0.02em',
                    }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="font-inter typo-caption tracking-[0.2em] uppercase mt-1"
                    style={{ color: 'rgba(255,255,255,0.35)' }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Corner accent — bottom-left */}
          <div
            className="absolute bottom-0 left-0 w-20 h-20 pointer-events-none"
            style={{
              borderLeft: '3px solid var(--vharanani-burgundy)',
              borderBottom: '3px solid var(--vharanani-burgundy)',
            }}
          />
        </div>

        {/* ── RIGHT: Full-bleed image ── */}
        <motion.div
          className="relative overflow-hidden"
          style={{ minHeight: 'clamp(360px, 50vh, 600px)' }}
          {...clipReveal(0.15)}
        >
          <ImageWithFallback
            src={IMAGES[0].src}
            alt={IMAGES[0].alt}
            className="w-full h-full object-cover absolute inset-0"
          />
          {/* Dark vignette on left edge for blending */}
          <div
            className="absolute inset-0 pointer-events-none hidden lg:block"
            style={{
              background: 'linear-gradient(90deg, rgba(14,18,29,0.3) 0%, transparent 30%)',
            }}
          />
          {/* Bottom label */}
          <div
            className="absolute bottom-0 left-0 right-0 px-6 py-5"
            style={{ background: 'linear-gradient(0deg, rgba(0,0,0,0.6) 0%, transparent 100%)' }}
          >
            <span
              className="font-inter typo-meta tracking-[0.22em] uppercase"
              style={{ color: 'rgba(255,255,255,0.6)' }}
            >
              Est. 2001 — South Africa
            </span>
          </div>
        </motion.div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          SECTION 2 — IMAGE LEFT / BURGUNDY RIGHT
      ══════════════════════════════════════════════════════════ */}
      <div className="grid grid-cols-1 lg:grid-cols-2" style={{ minHeight: '70vh' }}>

        {/* ── LEFT: White panel with image ── */}
        <div
          className="relative flex items-center justify-center overflow-hidden"
          style={{ background: '#ffffff' }}
        >
          {/* Secondary image — infrastructure */}
          <motion.div
            className="relative w-full h-full overflow-hidden"
            style={{ minHeight: 'clamp(320px, 45vh, 560px)' }}
            {...clipReveal(0.1)}
          >
            <ImageWithFallback
              src={IMAGES[1].src}
              alt={IMAGES[1].alt}
              className="w-full h-full object-cover absolute inset-0"
            />
            {/* White vignette on right edge */}
            <div
              className="absolute inset-0 pointer-events-none hidden lg:block"
              style={{
                background: 'linear-gradient(270deg, rgba(255,255,255,0.15) 0%, transparent 40%)',
              }}
            />
          </motion.div>

          {/* Floating stat overlay — bottom left */}
          <motion.div
            className="absolute bottom-8 left-8 sm:left-12 z-10"
            {...slideFromLeft(0.4)}
          >
            <div
              className="px-6 py-5 backdrop-blur-md"
              style={{ background: 'rgba(14,18,29,0.85)' }}
            >
              <span
                className="font-bebas-neue block"
                style={{ fontSize: 'clamp(28px, 3vw, 42px)', color: '#fff', lineHeight: 1, letterSpacing: '0.02em' }}
              >
                Building Africa
              </span>
              <span
                className="font-inter typo-caption tracking-[0.2em] uppercase mt-1 block"
                style={{ color: 'rgba(255,255,255,0.5)' }}
              >
                Infrastructure &middot; Growth &middot; Legacy
              </span>
            </div>
          </motion.div>
        </div>

        {/* ── RIGHT: Burgundy panel ── */}
        <div
          className="relative flex flex-col justify-center px-8 sm:px-12 md:px-16 lg:px-20 xl:px-28 py-20 lg:py-24"
          style={{ background: '#812921' }}
        >
          {/* Ghost watermark */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
            aria-hidden
          >
            <span
              className="font-bebas-neue uppercase whitespace-nowrap"
              style={{
                fontSize: 'clamp(80px, 16vw, 200px)',
                letterSpacing: '0.06em',
                color: 'rgba(255,255,255,0.04)',
                lineHeight: 1,
              }}
            >
              MANDATE
            </span>
          </div>

          <div className="relative z-10 max-w-xl">
            {/* Overline */}
            <motion.div
              className="flex items-center gap-3 mb-8"
              {...fadeUp(0.15)}
            >
              <div className="h-[2px] w-10" style={{ background: 'rgba(255,255,255,0.35)' }} />
              <span
                className="font-inter typo-caption tracking-[0.3em] uppercase"
                style={{ color: 'rgba(255,255,255,0.5)' }}
              >
                Our Mission
              </span>
            </motion.div>

            {/* Mission statement */}
            <motion.p
              className="font-inter leading-relaxed mb-10"
              style={{
                fontSize: 'clamp(15px, 1.2vw, 18px)',
                color: 'rgba(255,255,255,0.78)',
                maxWidth: 480,
              }}
              {...fadeUp(0.25)}
            >
              We operate with a clear mandate: to build assets that strengthen
              communities, enable economic participation, and support Africa's
              growth trajectory.
            </motion.p>

            {/* Decorative thin line */}
            <motion.div
              className="mb-10"
              style={{ width: 48, height: 2, background: 'rgba(255,255,255,0.2)' }}
              {...fadeIn(0.35)}
            />

            {/* Big mandate quote */}
            <motion.blockquote
              className="font-bebas-neue uppercase"
              style={{
                fontSize: 'clamp(28px, 3.6vw, 52px)',
                lineHeight: 1.08,
                letterSpacing: '0.02em',
                color: '#ffffff',
              }}
              {...slideFromRight(0.4)}
            >
              &ldquo;To build assets that strengthen communities, enable economic
              participation, and support Africa&rsquo;s growth trajectory.&rdquo;
            </motion.blockquote>

            {/* Attribution */}
            <motion.div className="mt-8 flex items-center gap-3" {...fadeUp(0.55)}>
              <div
                className="h-[2px] w-6"
                style={{ background: 'rgba(255,255,255,0.3)' }}
              />
              <span
                className="font-inter typo-meta tracking-[0.2em] uppercase"
                style={{ color: 'rgba(255,255,255,0.45)' }}
              >
                David Mabilu — Founder &amp; Chairman
              </span>
            </motion.div>
          </div>

          {/* Corner accent — top-right */}
          <div
            className="absolute top-0 right-0 w-20 h-20 pointer-events-none"
            style={{
              borderRight: '3px solid rgba(255,255,255,0.15)',
              borderTop: '3px solid rgba(255,255,255,0.15)',
            }}
          />
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          BOTTOM STRIP — remaining images as cinematic band
      ══════════════════════════════════════════════════════════ */}
      <div className="grid grid-cols-1 md:grid-cols-2" style={{ height: 'clamp(220px, 30vh, 340px)' }}>
        {[IMAGES[2], IMAGES[3]].map((img, i) => (
          <motion.div
            key={img.src}
            className="relative overflow-hidden h-full"
            {...clipReveal(0.1 + i * 0.12)}
          >
            <ImageWithFallback
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover absolute inset-0"
            />
            <div
              className="absolute inset-0"
              style={{
                background: i === 0
                  ? 'linear-gradient(0deg, rgba(14,18,29,0.55) 0%, rgba(14,18,29,0.1) 50%)'
                  : 'linear-gradient(0deg, rgba(129,41,33,0.5) 0%, rgba(129,41,33,0.05) 50%)',
              }}
            />
            <div className="absolute bottom-0 left-0 px-6 md:px-10 pb-6">
              <motion.div {...fadeUp(0.3 + i * 0.1)}>
                <div
                  className="h-[2px] w-8 mb-3"
                  style={{ background: i === 0 ? 'var(--vharanani-burgundy)' : 'rgba(255,255,255,0.5)' }}
                />
                <span
                  className="font-inter typo-caption tracking-[0.22em] uppercase"
                  style={{ color: 'rgba(255,255,255,0.7)' }}
                >
                  {i === 0 ? 'Community Development' : 'Building Africa\u2019s Future'}
                </span>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
}
