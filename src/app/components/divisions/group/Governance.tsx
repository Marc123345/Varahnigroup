import { useState, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Gavel, FileCheck, Scale, Shield, Eye, Plus } from 'lucide-react';
import { ImageWithFallback } from '../../ui/ImageWithFallback';

const PRINCIPLES = [
  {
    num: '01',
    icon: Gavel,
    label: 'Ethical Leadership',
    description:
      'Principled decision-making at every level of the organisation, guided by the King IV framework and a commitment to integrity.',
    tag: 'King IV Aligned',
    attributes: ['King IV', 'Board Oversight', 'Integrity', 'Ethics Policy'],
  },
  {
    num: '02',
    icon: FileCheck,
    label: 'Regulatory Compliance',
    description:
      'Full adherence to all statutory, industry, and sector-specific requirements across every division and province of operation.',
    tag: 'Statutory',
    attributes: ['Multi-Province', 'Industry Standards', 'Statutory', 'Legal Adherence'],
  },
  {
    num: '03',
    icon: Scale,
    label: 'Financial Discipline',
    description:
      'Rigorous fiscal management, independent oversight, and transparent financial reporting to all stakeholders.',
    tag: 'Oversight',
    attributes: ['IFRS Aligned', 'Independent Audit', 'Fiscal Control', 'Oversight'],
  },
  {
    num: '04',
    icon: Shield,
    label: 'Risk Management',
    description:
      'Proactive identification, assessment, and mitigation of operational, financial, and reputational risks.',
    tag: 'Proactive',
    attributes: ['ERM Framework', 'Operational Risk', 'Reputational', 'Proactive'],
  },
  {
    num: '05',
    icon: Eye,
    label: 'Transparent Reporting',
    description:
      'Open, consistent stakeholder communication underpinned by accurate and timely disclosures.',
    tag: 'Disclosure',
    attributes: ['ESG Reporting', 'Stakeholder Comms', 'Timely Disclosure', 'Audit Trail'],
  },
];

const IMAGE = 'https://ik.imagekit.io/qcvroy8xpd/Vharnani%20final/63_lepelle_northern_water_office_building_exterior.jpg?updatedAt=1774955146803';

const CREDENTIALS = [
  { label: 'King IV Aligned', logo: 'https://ik.imagekit.io/qcvroy8xpd/Vharnani%20final/07_department_of_labour_south_africa_logo.jpg?updatedAt=1774955144781' },
  { label: 'B-BBEE Level 1', logo: 'https://ik.imagekit.io/qcvroy8xpd/Vharnani%20final/06_BBBEE_level_1_contributor_certificate.jpg?updatedAt=1774955144760' },
  { label: 'ISO Compliant', logo: 'https://ik.imagekit.io/qcvroy8xpd/Vharnani%20final/05_ISO_9001_2015_certified_badge.jpg?updatedAt=1774955144716' },
  { label: 'CIDB Registered', logo: 'https://ik.imagekit.io/qcvroy8xpd/Vharnani%20final/09_CIDB_construction_industry_development_board_logo.jpg?updatedAt=1774955145144' },
];

export function GroupWireframe_Governance(): ReactNode {
  const [active, setActive] = useState<string | null>('01');

  return (
    <div style={{ background: '#040404', overflow: 'hidden' }}>

      {/* ── HEADER ── */}
      <div className="relative overflow-hidden px-6 md:px-12 lg:px-20 pt-10 md:pt-16 pb-10 md:pb-14">

        {/* Ghost "KING IV" watermark */}
        <div
          className="absolute inset-0 pointer-events-none select-none overflow-hidden flex items-end justify-end"
          aria-hidden="true"
        >
          <span
            className="font-bebas-neue text-white"
            style={{
              fontSize: 'clamp(100px, 20vw, 280px)',
              lineHeight: 0.88,
              opacity: 0.025,
              letterSpacing: '-0.02em',
              paddingRight: '1vw',
            }}
          >
            KING IV
          </span>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-8 h-[2px]" style={{ background: 'var(--vharanani-burgundy)' }} />
            <span className="typo-caption tracking-[0.28em] uppercase font-inter" style={{ color: 'var(--vharanani-burgundy)' }}>
              COMPLIANCE
            </span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-7 overflow-hidden">
              <motion.h2
                className="typo-headline-big font-bebas-neue uppercase tracking-wide text-white"
                initial={{ clipPath: 'inset(0 0 100% 0)' }}
                whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.85, delay: 0.06, ease: [0.76, 0, 0.24, 1] }}
              >
                Governance &amp;<br />
                <span style={{ color: 'var(--vharanani-burgundy)' }}>Compliance</span>
              </motion.h2>
            </div>
            <motion.p
              className="lg:col-span-5 font-inter typo-copy"
              style={{ color: 'rgba(255,255,255,0.4)' }}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.14 }}
            >
              Ethics, risk management, and transparent reporting define our operational
              framework across all divisions.
            </motion.p>
          </div>
        </div>
      </div>

      {/* ── PRINCIPLES ACCORDION ── */}
      <div
        className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20"
        style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
      >
        {PRINCIPLES.map((p, i) => {
          const Icon = p.icon;
          const isOpen = active === p.num;

          return (
            <motion.div
              key={p.num}
              className="relative"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >

              {/* ── HEADER BUTTON ── */}
              <button
                className="relative w-full flex items-center gap-4 md:gap-6 py-5 md:py-7 text-left overflow-hidden"
                style={{ minHeight: 64 }}
                onClick={() => setActive(isOpen ? null : p.num)}
              >

                {/* Left accent bar (inside button, clipped to row height) */}
                <motion.div
                  className="absolute left-0 inset-y-0 w-[3px]"
                  style={{ background: 'var(--vharanani-burgundy)', transformOrigin: 'bottom' }}
                  animate={{ scaleY: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                />

                {/* Ghost numeral (clipped by button overflow:hidden) */}
                <div
                  className="absolute right-0 top-0 bottom-0 flex items-center pointer-events-none select-none"
                  aria-hidden="true"
                >
                  <span
                    className="font-bebas-neue text-white transition-opacity duration-300"
                    style={{
                      fontSize: 'clamp(70px, 14vw, 190px)',
                      lineHeight: 1,
                      letterSpacing: '-0.02em',
                      opacity: isOpen ? 0.07 : 0.033,
                    }}
                  >
                    {p.num}
                  </span>
                </div>

                {/* Icon box */}
                <div
                  className="relative z-10 w-10 h-10 md:w-11 md:h-11 flex items-center justify-center shrink-0 transition-all duration-300"
                  style={{
                    border: `1px solid ${isOpen ? 'rgba(129,41,33,0.7)' : 'rgba(255,255,255,0.12)'}`,
                    color: isOpen ? 'var(--vharanani-burgundy)' : 'rgba(255,255,255,0.35)',
                    background: isOpen ? 'rgba(129,41,33,0.1)' : 'transparent',
                  }}
                >
                  <Icon size={18} />
                </div>

                {/* Title */}
                <h3
                  className="relative z-10 font-bebas-neue uppercase leading-none flex-1 transition-all duration-300"
                  style={{
                    fontSize: 'clamp(22px, 3.2vw, 40px)',
                    letterSpacing: '0.02em',
                    color: isOpen ? 'white' : 'rgba(255,255,255,0.45)',
                  }}
                >
                  {p.label}
                </h3>

                {/* Tag pill */}
                <span
                  className="relative z-10 font-inter tracking-[0.16em] uppercase shrink-0 hidden sm:inline transition-all duration-300"
                  style={{
                    border: `1px solid ${isOpen ? 'rgba(129,41,33,0.55)' : 'rgba(255,255,255,0.1)'}`,
                    color: isOpen ? 'var(--vharanani-burgundy)' : 'rgba(255,255,255,0.25)',
                    padding: '4px 12px',
                    fontSize: '10px',
                  }}
                >
                  {p.tag}
                </span>

                {/* +/× toggle */}
                <div
                  className="relative z-10 w-8 h-8 shrink-0 flex items-center justify-center transition-all duration-300"
                  style={{
                    border: `1px solid ${isOpen ? 'rgba(129,41,33,0.4)' : 'rgba(255,255,255,0.1)'}`,
                  }}
                >
                  <motion.div animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.3 }}>
                    <Plus size={12} style={{ color: isOpen ? 'var(--vharanani-burgundy)' : 'rgba(255,255,255,0.4)' }} />
                  </motion.div>
                </div>
              </button>

              {/* ── EXPANDED DETAIL ── */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div className="pb-8 md:pb-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">

                      {/* Left: description + attribute tags */}
                      <div className="md:col-span-7 flex flex-col gap-5">
                        <p className="font-inter typo-copy" style={{ color: 'rgba(255,255,255,0.5)', maxWidth: 520 }}>
                          {p.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {p.attributes.map((attr) => (
                            <span
                              key={attr}
                              className="font-inter tracking-[0.14em] uppercase"
                              style={{
                                border: '1px solid rgba(255,255,255,0.1)',
                                color: 'rgba(255,255,255,0.35)',
                                padding: '4px 12px',
                                fontSize: '10px',
                              }}
                            >
                              {attr}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Right: cinematic image panel */}
                      <div
                        className="md:col-span-5 relative overflow-hidden hidden md:block"
                        style={{ height: 168 }}
                      >
                        <ImageWithFallback
                          src={IMAGE}
                          alt={p.label}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div
                          className="absolute inset-0"
                          style={{
                            background:
                              'linear-gradient(135deg, rgba(129,41,33,0.9) 0%, rgba(18,3,2,0.95) 100%)',
                          }}
                        />
                        <div className="absolute inset-0 flex flex-col items-start justify-between p-5">
                          <span
                            className="font-inter typo-meta tracking-[0.2em] uppercase"
                            style={{ color: 'rgba(255,255,255,0.4)' }}
                          >
                            Principle {p.num}
                          </span>
                          <div>
                            <div
                              className="font-bebas-neue text-white/[0.15] leading-none"
                              style={{ fontSize: 76 }}
                            >
                              {p.num}
                            </div>
                            <div className="w-6 h-[1px] mb-2" style={{ background: 'rgba(255,255,255,0.3)' }} />
                            <span
                              className="font-bebas-neue uppercase tracking-wide"
                              style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)' }}
                            >
                              {p.tag}
                            </span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* ── CREDENTIALS STRIP ── */}
      <div
        className="relative mt-10 overflow-hidden"
        style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
      >
        {/* Ghost watermark */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          aria-hidden="true"
        >
          <span
            className="font-bebas-neue uppercase whitespace-nowrap text-white"
            style={{
              fontSize: 'clamp(60px, 13vw, 160px)',
              opacity: 0.025,
              letterSpacing: '0.06em',
              lineHeight: 1,
            }}
          >
            GOVERNANCE
          </span>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-10 md:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Statement */}
            <div className="lg:col-span-5">
              <div className="w-8 h-[1px] mb-4" style={{ background: 'rgba(255,255,255,0.3)' }} />
              <p
                className="font-bebas-neue uppercase text-white"
                style={{
                  fontSize: 'clamp(20px, 2.5vw, 30px)',
                  lineHeight: 1.2,
                  letterSpacing: '0.02em',
                  opacity: 0.85,
                }}
              >
                Transparent, ethical, and accountable — aligned to King IV and best-practice standards.
              </p>
            </div>

            {/* Credential stamps */}
            <div
              className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-0"
              style={{ border: '1px solid rgba(255,255,255,0.08)' }}
            >
              {CREDENTIALS.map((badge, i) => (
                <motion.div
                  key={badge.label}
                  className="flex flex-col items-center justify-center py-7 px-4 text-center"
                  style={{
                    borderRight: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                    borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                  }}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <img
                    src={badge.logo}
                    alt={badge.label}
                    className="h-10 w-auto object-contain mb-3"
                    style={{ filter: 'brightness(0) invert(1)', opacity: 0.85 }}
                  />
                  <span
                    className="font-bebas-neue uppercase tracking-wide text-white"
                    style={{ fontSize: 'clamp(12px, 1.3vw, 14px)', opacity: 0.75 }}
                  >
                    {badge.label}
                  </span>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
