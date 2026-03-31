import { type ReactNode } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../../ui/ImageWithFallback';

const IMAGES = [
  { src: 'https://ik.imagekit.io/qcvroy8xpd/Photo%201.png',                                    alt: 'Vharanani leadership' },
  { src: 'https://ik.imagekit.io/qcvroy8xpd/the%20.png',                                       alt: 'Vharanani infrastructure' },
  { src: 'https://vharananiproperties.co.za/wp-content/uploads/2021/06/Polokwane-CBD-Pipeline.png', alt: 'Vharanani community' },
  { src: 'https://vharananiproperties.co.za/wp-content/uploads/2020/08/rsz_dji_0002.jpg',      alt: 'Vharanani people' },
];

// Clip-path reveal (bottom up — cinematic curtain lift)
const clipReveal = {
  hidden: { clipPath: 'inset(0 0 100% 0)', opacity: 1 },
  visible: (delay = 0) => ({
    clipPath: 'inset(0 0 0% 0)',
    opacity: 1,
    transition: { duration: 0.9, delay, ease: [0.76, 0, 0.24, 1] },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function GroupWireframe_ExecutiveSummary(): ReactNode {
  return (
    <div style={{ background: '#ffffff', overflow: 'hidden' }}>

      {/* ══════════════════════════════════════════════
          TOP BAND — eyebrow + ghost headline
      ══════════════════════════════════════════════ */}
      <div
        className="relative px-6 md:px-12 lg:px-20 pt-14 pb-0 overflow-hidden"
        style={{ background: '#ffffff' }}
      >
        {/* Ghost background text */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          aria-hidden
        >
          <span
            className="font-bebas-neue uppercase whitespace-nowrap"
            style={{
              fontSize: 'clamp(80px, 18vw, 220px)',
              letterSpacing: '0.06em',
              color: 'rgba(129,41,33,0.045)',
              lineHeight: 1,
              marginTop: '0.1em',
            }}
          >
            WHO WE ARE
          </span>
        </div>

        {/* Eyebrow */}
        <motion.div
          className="relative flex items-center gap-3 mb-8"
          variants={fadeUp} custom={0}
          initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          <div className="h-[2px] w-8" style={{ background: 'var(--vharanani-burgundy)' }} />
          <span
            className="font-inter typo-caption tracking-[0.28em] uppercase"
            style={{ color: 'var(--vharanani-burgundy)' }}
          >
            Who We Are
          </span>
        </motion.div>

        {/* Logo */}
        <motion.div
          className="relative mb-12 md:mb-16"
          variants={fadeUp} custom={0.05}
          initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          <img
            src="https://ik.imagekit.io/qcvroy8xpd/Frame%207%20(1).png"
            alt="Vharanani Group"
            style={{ height: 'clamp(52px, 8vw, 96px)', width: 'auto', objectFit: 'contain' }}
          />
        </motion.div>
      </div>

      {/* ══════════════════════════════════════════════
          MAIN GRID — hero image left, text + images right
      ══════════════════════════════════════════════ */}
      <div className="px-6 md:px-12 lg:px-20 pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">

          {/* ── LEFT: Hero image ── */}
          <motion.div
            className="lg:col-span-6 relative overflow-hidden"
            style={{ aspectRatio: '3/4', maxHeight: 560 }}
            variants={clipReveal} custom={0.1}
            initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            <motion.div
              className="absolute inset-0"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            >
              <ImageWithFallback
                src={IMAGES[0].src}
                alt={IMAGES[0].alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
            {/* Burgundy corner accent */}
            <div
              className="absolute top-0 left-0 w-12 h-12 pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, var(--vharanani-burgundy) 50%, transparent 50%)',
              }}
            />
            {/* Label */}
            <div
              className="absolute bottom-0 left-0 right-0 px-5 py-4"
              style={{ background: 'linear-gradient(0deg, rgba(0,0,0,0.55) 0%, transparent 100%)' }}
            >
              <span
                className="font-inter typo-meta tracking-[0.18em] uppercase text-white/70"
              >
                Est. 2001 — South Africa
              </span>
            </div>
          </motion.div>

          {/* ── RIGHT: Text + two images ── */}
          <div className="lg:col-span-6 flex flex-col gap-6">

            {/* Paragraph 1 */}
            <motion.p
              className="font-inter leading-relaxed"
              style={{ fontSize: 'clamp(15px, 1.3vw, 18px)', color: '#1a1a1a' }}
              variants={fadeUp} custom={0.22}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              Vharanani Group is an innovation-driven African conglomerate founded
              and led by David Mabilu. With a diversified portfolio spanning
              construction, property development, mining, technology, aviation, and
              philanthropy, the Group is committed to building sustainable enterprises
              that contribute to economic transformation and long-term infrastructure
              development.
            </motion.p>

            {/* Paragraph 2 */}
            <motion.p
              className="font-inter leading-relaxed"
              style={{ fontSize: 'clamp(14px, 1.15vw, 16px)', color: 'rgba(0,0,0,0.52)' }}
              variants={fadeUp} custom={0.32}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              We operate with a clear mandate: to build assets that strengthen
              communities, enable economic participation, and support Africa's growth
              trajectory.
            </motion.p>

            {/* Two stacked images */}
            <div className="grid grid-cols-2 gap-3 mt-2">
              {[IMAGES[1], IMAGES[2]].map((img, i) => (
                <motion.div
                  key={img.src}
                  className="relative overflow-hidden"
                  style={{ aspectRatio: '4/3' }}
                  variants={clipReveal} custom={0.36 + i * 0.1}
                  initial="hidden" whileInView="visible" viewport={{ once: true }}
                >
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                  >
                    <ImageWithFallback
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  {/* Thin burgundy bottom line on hover */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-[3px]"
                    style={{ background: 'var(--vharanani-burgundy)' }}
                  />
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          MANDATE BAND — full-width burgundy
      ══════════════════════════════════════════════ */}
      <motion.div
        className="relative mt-10 px-6 md:px-12 lg:px-20 py-12 md:py-16 overflow-hidden"
        style={{ background: 'var(--vharanani-burgundy)' }}
        variants={fadeUp} custom={0.1}
        initial="hidden" whileInView="visible" viewport={{ once: true }}
      >
        {/* Ghost "MANDATE" watermark */}
        <div
          className="absolute inset-0 flex items-center justify-end pr-8 pointer-events-none select-none overflow-hidden"
          aria-hidden
        >
          <span
            className="font-bebas-neue uppercase"
            style={{
              fontSize: 'clamp(60px, 12vw, 160px)',
              color: 'rgba(255,255,255,0.06)',
              letterSpacing: '0.05em',
              lineHeight: 1,
            }}
          >
            MANDATE
          </span>
        </div>

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-3">
            <div className="h-[2px] w-8 mb-4" style={{ background: 'rgba(255,255,255,0.4)' }} />
            <span
              className="font-inter typo-caption tracking-[0.28em] uppercase"
              style={{ color: 'rgba(255,255,255,0.6)' }}
            >
              Our Mandate
            </span>
          </div>
          <div className="lg:col-span-9">
            <motion.p
              className="font-bebas-neue uppercase"
              style={{
                fontSize: 'clamp(24px, 3.2vw, 44px)',
                lineHeight: 1.12,
                letterSpacing: '0.02em',
                color: '#ffffff',
              }}
              variants={clipReveal} custom={0.18}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
            >
              To build assets that strengthen communities, enable economic
              participation, and support Africa's growth trajectory.
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* ══════════════════════════════════════════════
          BOTTOM IMAGE STRIP — 4th image full bleed
      ══════════════════════════════════════════════ */}
      <motion.div
        className="relative overflow-hidden"
        style={{ height: 'clamp(200px, 28vh, 340px)' }}
        variants={clipReveal} custom={0.08}
        initial="hidden" whileInView="visible" viewport={{ once: true }}
      >
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <ImageWithFallback
            src={IMAGES[3].src}
            alt={IMAGES[3].alt}
            className="w-full h-full object-cover"
          />
        </motion.div>
        {/* Dark overlay with label */}
        <div
          className="absolute inset-0 flex items-end px-6 md:px-12 lg:px-20 pb-8"
          style={{ background: 'linear-gradient(90deg, rgba(0,0,0,0.55) 0%, transparent 60%)' }}
        >
          <motion.div
            variants={fadeUp} custom={0.25}
            initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            <div className="h-[2px] w-8 mb-3" style={{ background: 'var(--vharanani-burgundy)' }} />
            <p
              className="font-inter typo-caption tracking-[0.22em] uppercase"
              style={{ color: 'rgba(255,255,255,0.7)' }}
            >
              Building Africa's Future
            </p>
          </motion.div>
        </div>
      </motion.div>

    </div>
  );
}
