import { useState, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, Landmark, BookOpen, Shield, Building2, Users } from 'lucide-react';

const PARTNERS = [
  {
    num: '01',
    icon: Globe,
    title: 'Local & National Partners',
    description: 'Collaborating with organisations across South Africa to extend reach and impact.',
  },
  {
    num: '02',
    icon: Landmark,
    title: 'Government Institutions',
    description: 'Working with national and provincial government departments on development initiatives.',
  },
  {
    num: '03',
    icon: BookOpen,
    title: 'Faith-Based Organisations',
    description: 'Partnering with churches and religious bodies to support community education and welfare.',
  },
  {
    num: '04',
    icon: Shield,
    title: 'Traditional Leaders',
    description: 'Engaging with traditional authorities to ensure cultural sensitivity and community buy-in.',
  },
  {
    num: '05',
    icon: Building2,
    title: 'Private Sector Partners',
    description: 'Leveraging corporate resources and expertise for sustainable programme delivery.',
  },
  {
    num: '06',
    icon: Users,
    title: 'Community Organisations',
    description: 'Empowering grassroots organisations to drive local change and development.',
  },
];

export function FoundationWireframe_PartnerNetwork(): ReactNode {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div style={{ background: '#ffffff', overflow: 'hidden' }}>

      {/* ══════ HEADER ══════ */}
      <div className="px-6 md:px-12 lg:px-20 pt-14 pb-12 md:pt-20 md:pb-16">
        <div className="max-w-7xl mx-auto">

          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="h-[2px] w-8" style={{ background: 'var(--vharanani-burgundy)' }} />
            <span className="font-inter typo-caption tracking-[0.28em] uppercase" style={{ color: 'var(--vharanani-burgundy)' }}>
              How We Achieve Our Goal
            </span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-8 overflow-hidden">
              <motion.h2
                className="typo-headline-big font-bebas-neue uppercase tracking-wide"
                style={{ color: 'var(--vharanani-charcoal)' }}
                initial={{ clipPath: 'inset(0 0 100% 0)' }}
                whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.85, delay: 0.06, ease: [0.76, 0, 0.24, 1] }}
              >
                Collaborating for<br />
                <span style={{ color: 'var(--vharanani-burgundy)' }}>Meaningful Impact.</span>
              </motion.h2>
            </div>
            <motion.p
              className="lg:col-span-4 font-inter leading-relaxed"
              style={{ fontSize: 'clamp(13px, 1.1vw, 15px)', color: 'rgba(0,0,0,0.5)' }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.18 }}
            >
              The David Mabilu Foundation works collaboratively with a broad network of partners to deliver impactful programmes and initiatives.
            </motion.p>
          </div>

        </div>
      </div>

      {/* ══════ PARTNER ROWS ══════ */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pb-0">
        {PARTNERS.map((p, i) => {
          const Icon = p.icon;
          const isHovered = hovered === p.num;
          return (
            <motion.div
              key={p.num}
              className="relative overflow-hidden cursor-default"
              style={{
                borderTop: '1px solid rgba(0,0,0,0.08)',
                borderBottom: i === PARTNERS.length - 1 ? '1px solid rgba(0,0,0,0.08)' : 'none',
              }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              onHoverStart={() => setHovered(p.num)}
              onHoverEnd={() => setHovered(null)}
            >
              {/* Background fill on hover */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{ backgroundColor: isHovered ? 'rgba(129,41,33,0.03)' : 'rgba(0,0,0,0)' }}
                transition={{ duration: 0.28 }}
              />

              {/* Left bar */}
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-[3px]"
                style={{ background: 'var(--vharanani-burgundy)', transformOrigin: 'top' }}
                animate={{ scaleY: isHovered ? 1 : 0 }}
                transition={{ duration: 0.32, ease: [0.76, 0, 0.24, 1] }}
              />

              <div className="relative grid grid-cols-12 gap-4 items-center py-6 pl-5 pr-4">

                {/* Number */}
                <div className="col-span-2 md:col-span-1">
                  <motion.span
                    className="font-bebas-neue"
                    style={{ fontSize: 'clamp(24px, 2.5vw, 36px)', lineHeight: 1, letterSpacing: '0.04em' }}
                    animate={{ color: isHovered ? 'var(--vharanani-burgundy)' : 'rgba(0,0,0,0.15)' }}
                    transition={{ duration: 0.22 }}
                  >
                    {p.num}
                  </motion.span>
                </div>

                {/* Icon */}
                <div className="hidden md:flex col-span-1 justify-center">
                  <motion.div
                    className="w-9 h-9 flex items-center justify-center flex-shrink-0"
                    animate={{
                      backgroundColor: isHovered ? 'var(--vharanani-burgundy)' : 'transparent',
                      borderColor: isHovered ? 'var(--vharanani-burgundy)' : 'rgba(0,0,0,0.18)',
                    }}
                    transition={{ duration: 0.22 }}
                    style={{ border: '1.5px solid rgba(0,0,0,0.18)' }}
                  >
                    <motion.div
                      animate={{ color: isHovered ? '#ffffff' : 'rgba(0,0,0,0.4)' }}
                      transition={{ duration: 0.22 }}
                    >
                      <Icon size={16} />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Title */}
                <div className="col-span-7 md:col-span-5 lg:col-span-4">
                  <motion.div
                    className="font-bebas-neue uppercase tracking-wide"
                    style={{ fontSize: 'clamp(18px, 2vw, 26px)', lineHeight: 1.1, letterSpacing: '0.02em' }}
                    animate={{ color: isHovered ? '#111111' : '#444444' }}
                    transition={{ duration: 0.22 }}
                  >
                    {p.title}
                  </motion.div>
                </div>

                {/* Description — slides in from right */}
                <div className="hidden lg:block col-span-5">
                  <AnimatePresence>
                    {isHovered && (
                      <motion.p
                        className="font-inter leading-relaxed"
                        style={{ fontSize: 'clamp(13px, 1.05vw, 14px)', color: 'rgba(0,0,0,0.55)' }}
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        {p.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile description — always visible */}
                <p
                  className="col-span-10 md:col-span-5 lg:hidden font-inter leading-relaxed"
                  style={{ fontSize: '13px', color: 'rgba(0,0,0,0.5)', marginTop: '-4px' }}
                >
                  {p.description}
                </p>

              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ══════ BURGUNDY BAND ══════ */}
      <motion.div
        className="relative mt-10 overflow-hidden"
        style={{ background: 'var(--vharanani-burgundy)' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Ghost watermark */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          aria-hidden
        >
          <span
            className="font-bebas-neue uppercase whitespace-nowrap"
            style={{ fontSize: 'clamp(56px, 13vw, 160px)', color: 'rgba(255,255,255,0.05)', letterSpacing: '0.06em', lineHeight: 1 }}
          >
            PARTNERSHIPS
          </span>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-10 md:py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

            {/* Left — statement */}
            <div className="md:col-span-2">
              <div className="h-[1px] w-8 mb-4" style={{ background: 'rgba(255,255,255,0.35)' }} />
              <p
                className="font-bebas-neue uppercase text-white"
                style={{ fontSize: 'clamp(20px, 2.8vw, 36px)', lineHeight: 1.15, letterSpacing: '0.02em' }}
              >
                Six partner networks. One shared mission: dignified communities across South Africa.
              </p>
            </div>

            {/* Right — partner count */}
            <div className="flex flex-col gap-3">
              {[
                { value: '6',   label: 'Partner Networks'       },
                { value: '9',   label: 'Provinces Covered'      },
                { value: '20+', label: 'Years of Collaboration'  },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.09 }}
                >
                  <div
                    className="font-bebas-neue text-white flex-shrink-0"
                    style={{ fontSize: 'clamp(22px, 2.5vw, 32px)', lineHeight: 1, minWidth: '52px' }}
                  >
                    {stat.value}
                  </div>
                  <div className="h-[1px] w-4 flex-shrink-0" style={{ background: 'rgba(255,255,255,0.3)' }} />
                  <div className="font-inter typo-meta tracking-[0.14em] uppercase" style={{ color: 'rgba(255,255,255,0.65)' }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </motion.div>

    </div>
  );
}
