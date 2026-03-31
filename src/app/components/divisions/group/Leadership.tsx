import { useRef, type ReactNode } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../../ui/ImageWithFallback';
import { useInView } from '../../../hooks/useInView';

const IMAGES = {
  leadership: 'https://vharananiproperties.co.za/wp-content/uploads/2020/09/DSC_0920B-1.jpg',
};

export function GroupWireframe_Leadership(): ReactNode {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.08 });

  const teamRef = useRef<HTMLDivElement>(null);
  const teamInView = useInView(teamRef, { once: true, amount: 0.15 });

  const executives = [
    { name: 'Chief Operating Officer', role: 'Operations & Delivery', initial: 'CO' },
    { name: 'Chief Financial Officer', role: 'Finance & Governance', initial: 'CF' },
    { name: 'Group Legal Counsel', role: 'Legal & Compliance', initial: 'GL' },
    { name: 'Head of Development', role: 'Strategy & Growth', initial: 'HD' },
  ];

  return (
    <section ref={sectionRef} className="w-full overflow-hidden">
      {/* ─── SECTION 1: Hero Split — Burgundy Text / Portrait ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] lg:min-h-[700px]">
        {/* LEFT: Burgundy panel */}
        <motion.div
          className="relative flex flex-col justify-center px-8 md:px-16 lg:px-20 xl:px-28 py-16 lg:py-24"
          style={{ background: '#812921' }}
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Decorative vertical line */}
          <div
            className="absolute left-0 top-[15%] bottom-[15%] w-[3px]"
            style={{ background: 'rgba(255,255,255,0.15)' }}
          />

          {/* Overline */}
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="w-10 h-[2px] bg-white/40" />
            <span className="typo-caption tracking-[0.3em] uppercase font-inter text-white/60">
              PEOPLE
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            className="font-bebas-neue uppercase tracking-wide text-white leading-[0.9] mb-8"
            style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)' }}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            Leader&shy;ship
          </motion.h2>

          {/* Accent bar */}
          <motion.div
            className="w-16 h-[3px] bg-white mb-8"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            style={{ transformOrigin: 'left' }}
          />

          {/* Founder name & title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="font-bebas-neue uppercase tracking-wide text-white text-3xl md:text-4xl mb-2">
              David Mabilu
            </h3>
            <p className="typo-caption tracking-[0.25em] uppercase font-inter text-white/50">
              Founder & Group Executive Chairman
            </p>
          </motion.div>

          {/* Bottom-right decorative block */}
          <div
            className="absolute bottom-0 right-0 w-24 h-24 opacity-10"
            style={{ background: 'white' }}
          />
        </motion.div>

        {/* RIGHT: Portrait image */}
        <motion.div
          className="relative min-h-[400px] lg:min-h-0 overflow-hidden"
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <ImageWithFallback
            src={IMAGES.leadership}
            alt="David Mabilu — Founder & Group Executive Chairman"
            className="w-full h-full object-cover object-top absolute inset-0"
          />
          {/* Gradient bleed from burgundy side */}
          <div
            className="absolute inset-y-0 left-0 w-24 pointer-events-none hidden lg:block"
            style={{
              background: 'linear-gradient(to right, #812921 0%, transparent 100%)',
            }}
          />
          {/* Dark bottom vignette */}
          <div
            className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
            style={{
              background: 'linear-gradient(to top, rgba(14,18,29,0.45) 0%, transparent 100%)',
            }}
          />
        </motion.div>
      </div>

      {/* ─── SECTION 2: Bio & Executive Team Split ─── */}
      <div ref={teamRef} className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
        {/* LEFT: White panel with bio */}
        <motion.div
          className="flex flex-col justify-center px-8 md:px-16 lg:px-20 xl:px-28 py-16 lg:py-20 bg-white relative"
          initial={{ opacity: 0, y: 40 }}
          animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Thin burgundy top border accent */}
          <div
            className="absolute top-0 left-8 md:left-16 lg:left-20 xl:left-28 right-8 md:right-16 lg:right-20 xl:right-28 h-[2px]"
            style={{ background: '#812921' }}
          />

          <motion.p
            className="typo-copy font-inter leading-relaxed mb-6"
            style={{ color: 'var(--vharanani-charcoal-80)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            David Mabilu founded Vharanani Group with a clear vision: to build a diversified
            African enterprise rooted in infrastructure, ownership, and impact. With over two
            decades of experience in construction and property development, he has led the
            Group&#39;s expansion across multiple sectors while maintaining a firm commitment to
            economic transformation and community advancement.
          </motion.p>

          {/* Blockquote */}
          <motion.blockquote
            className="relative pl-6 py-4 my-4"
            style={{ borderLeft: '3px solid #812921' }}
            initial={{ opacity: 0, x: -20 }}
            animate={teamInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <p
              className="typo-copy font-inter italic leading-relaxed"
              style={{ color: 'var(--vharanani-charcoal)' }}
            >
              &ldquo;Under his leadership, Vharanani Group continues to strengthen its national
              footprint and long-term investment strategy.&rdquo;
            </p>
          </motion.blockquote>

          <motion.p
            className="typo-copy-small font-inter mt-4"
            style={{ color: 'var(--vharanani-charcoal-60)' }}
            initial={{ opacity: 0 }}
            animate={teamInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Vharanani Group &mdash; Building Africa&apos;s future through infrastructure, ownership, and impact.
          </motion.p>
        </motion.div>

        {/* RIGHT: Dark panel with executive grid */}
        <motion.div
          className="flex flex-col justify-center px-8 md:px-16 lg:px-14 xl:px-20 py-16 lg:py-20 relative"
          style={{ background: '#0e121d' }}
          initial={{ opacity: 0, x: 40 }}
          animate={teamInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Section label */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-[2px]" style={{ background: '#812921' }} />
            <span className="typo-caption tracking-[0.3em] uppercase font-inter" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Executive Team
            </span>
          </div>

          {/* 2x2 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {executives.map((exec, i) => (
              <motion.div
                key={exec.initial}
                className="group cursor-default p-5 relative"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
                initial={{ opacity: 0, y: 24 }}
                animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -4,
                  background: 'rgba(129,41,33,0.12)',
                  borderColor: 'rgba(129,41,33,0.3)',
                  transition: { duration: 0.25 },
                }}
              >
                {/* Left accent stripe */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-[3px] transition-all duration-300"
                  style={{ background: '#812921' }}
                />

                {/* Initial badge */}
                <motion.div
                  className="w-12 h-12 flex items-center justify-center font-bebas-neue text-lg tracking-wider text-white mb-4"
                  style={{ background: '#812921' }}
                  whileHover={{
                    scale: 1.08,
                    transition: { duration: 0.2 },
                  }}
                >
                  {exec.initial}
                </motion.div>

                <div className="font-bebas-neue uppercase tracking-wide text-white text-base md:text-lg">
                  {exec.name}
                </div>
                <div className="typo-caption font-inter mt-1" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  {exec.role}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
