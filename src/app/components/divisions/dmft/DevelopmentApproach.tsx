import { type ReactNode, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Search, Target, HardHat, Briefcase } from 'lucide-react';
import { ImageWithFallback } from '../../ui/ImageWithFallback';

const TICKER_ITEMS = [
  'Land Acquisition', 'Planning & Feasibility', 'Construction Management',
  'Project Delivery', 'Sales & Handover', 'Land Acquisition',
  'Planning & Feasibility', 'Construction Management', 'Project Delivery', 'Sales & Handover',
];

interface Phase {
  step: string;
  title: string;
  icon: ReactNode;
  headline: string;
  description: string;
  capabilities: string[];
  image: string;
}

const PHASES: Phase[] = [
  {
    step: '01',
    title: 'Land Identification\n& Acquisition',
    icon: <Search size={13} style={{ color: 'rgba(255,255,255,0.25)' }} />,
    headline: 'Strategic Location Selection',
    description:
      'Carefully identifying strategic locations with strong growth potential, development viability, and alignment with market demand — ensuring every project starts from a position of strength.',
    capabilities: ['Market Analysis', 'Growth Corridors', 'Zoning Assessment', 'Feasibility Studies'],
    image:
      'https://vharananiproperties.co.za/wp-content/uploads/2020/08/rsz_dji_0519.jpg',
  },
  {
    step: '02',
    title: 'Planning &\nFeasibility',
    icon: <Target size={13} style={{ color: 'rgba(255,255,255,0.25)' }} />,
    headline: 'From Concept to Blueprint',
    description:
      'Conducting detailed feasibility studies, zoning processes, and development planning, working with experienced professionals to design modern and functional developments.',
    capabilities: ['Town Planning', 'Architectural Design', 'Zoning Processes', 'Municipal Approvals'],
    image:
      'https://vharananiproperties.co.za/wp-content/uploads/2018/01/Interior2.jpg',
  },
  {
    step: '03',
    title: 'Construction &\nProject Management',
    icon: <HardHat size={13} style={{ color: 'rgba(255,255,255,0.25)' }} />,
    headline: 'Built With Vharanani Expertise',
    description:
      'Leveraging the construction expertise of the Vharanani Group to deliver projects efficiently and safely, from groundbreaking through to handover.',
    capabilities: ['Quality Construction', 'Project Management', 'Safety Compliance', 'Timeline Delivery'],
    image:
      'https://vharananiproperties.co.za/wp-content/uploads/2021/06/Marulaneng-4.jpg',
  },
  {
    step: '04',
    title: 'Sales &\nDelivery',
    icon: <Briefcase size={13} style={{ color: 'rgba(255,255,255,0.25)' }} />,
    headline: 'Lasting Value for All',
    description:
      'Delivering completed developments that provide value for homeowners, investors, and communities.',
    capabilities: ['Sales Management', 'Title Transfers', 'Homeowner Support', 'Community Integration'],
    image:
      'https://vharananiproperties.co.za/wp-content/uploads/2020/08/rsz_9-tshwane-brt-road-construction.jpg',
  },
];

/* ─────────────────────────────────────────────────── */
/* Phase block                                         */
/* ─────────────────────────────────────────────────── */
function PhaseBlock({ phase, index }: { phase: Phase; index: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isEven = index % 2 === 0;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden"
      style={{ background: isEven ? '#060606' : '#0c0c0c' }}
    >
      {/* Ghost step number */}
      <div
        className="absolute inset-0 pointer-events-none select-none overflow-hidden flex items-center"
        style={{ justifyContent: isEven ? 'flex-end' : 'flex-start' }}
        aria-hidden="true"
      >
        <span
          className="font-bebas-neue"
          style={{
            fontSize: 'clamp(80px, 28vw, 420px)',
            lineHeight: 0.85,
            color: 'rgba(255,255,255,0.022)',
            paddingRight: isEven ? '4vw' : 0,
            paddingLeft: isEven ? 0 : '4vw',
          }}
        >
          {phase.step}
        </span>
      </div>

      <div className="relative max-w-screen-xl mx-auto">
        <div
          className="grid grid-cols-1 lg:grid-cols-2"
          style={{ minHeight: 'min(580px, 85vh)' }}
        >
          {/* ── IMAGE ── */}
          <div
            className="relative overflow-hidden"
            style={{
              order: isEven ? 2 : 1,
              minHeight: '360px',
            }}
          >
            {/* Image reveal */}
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Parallax image */}
              <motion.div
                style={{
                  y: imageY,
                  position: 'absolute',
                  top: '-12%',
                  left: 0,
                  right: 0,
                  bottom: '-12%',
                }}
              >
                <ImageWithFallback
                  src={phase.image}
                  alt={phase.title.replace('\n', ' ')}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'rgba(0,0,0,0.28)' }}
                />
              </motion.div>
            </motion.div>

            {/* Phase label bar */}
            <div
              className="absolute bottom-0 left-0 right-0 flex items-center gap-4 px-8 py-4"
              style={{
                background: 'rgba(4,4,4,0.9)',
                backdropFilter: 'blur(16px)',
                borderTop: '1px solid rgba(129,41,33,0.22)',
              }}
            >
              <span
                className="font-bebas-neue tracking-[0.3em] uppercase"
                style={{ fontSize: 13, color: 'var(--vharanani-burgundy)' }}
              >
                Phase {phase.step}
              </span>
              <div
                className="flex-1"
                style={{ height: 1, background: 'rgba(255,255,255,0.06)' }}
              />
              {phase.icon}
            </div>
          </div>

          {/* ── CONTENT ── */}
          <div
            className="flex flex-col justify-center px-6 md:px-12 lg:px-16 py-10 md:py-16 lg:py-20"
            style={{ order: isEven ? 1 : 2 }}
          >
            {/* Step indicator */}
            <motion.div
              initial={{ opacity: 0, x: isEven ? -24 : 24 }}
              animate={{ opacity: 1, x: 0 }}

              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-5 mb-10"
            >
              <div
                style={{
                  width: 2,
                  height: 60,
                  background: 'var(--vharanani-burgundy)',
                  flexShrink: 0,
                }}
              />
              <div>
                <div
                  className="typo-caption font-inter tracking-[0.28em] uppercase mb-1"
                  style={{ color: 'var(--vharanani-burgundy-60)' }}
                >
                  Development Phase
                </div>
                <div
                  className="font-bebas-neue text-white"
                  style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1 }}
                >
                  {phase.step}{' '}
                  <span style={{ color: 'rgba(255,255,255,0.14)' }}>/ 04</span>
                </div>
              </div>
            </motion.div>

            {/* Title — clip reveal */}
            <div className="overflow-hidden mb-4 pb-1">
              <motion.h3
                initial={{ y: '108%' }}
                animate={{ y: 0 }}
  
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
                className="font-bebas-neue uppercase text-white"
                style={{
                  fontSize: 'clamp(32px, 4.5vw, 58px)',
                  lineHeight: 1.05,
                  whiteSpace: 'pre-line',
                }}
              >
                {phase.title}
              </motion.h3>
            </div>

            {/* Headline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}

              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-bebas-neue uppercase tracking-wide mb-7"
              style={{ fontSize: 22, color: 'var(--vharanani-burgundy)', letterSpacing: '0.04em' }}
            >
              — {phase.headline}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}

              transition={{ delay: 0.42, duration: 0.7 }}
              className="typo-copy font-inter mb-10"
              style={{ color: 'rgba(255,255,255,0.75)', maxWidth: 460, lineHeight: 1.78 }}
            >
              {phase.description}
            </motion.p>

            {/* Capability tags */}
            <div className="flex flex-wrap gap-2">
              {phase.capabilities.map((cap, ci) => (
                <motion.span
                  key={cap}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
    
                  transition={{ delay: 0.54 + ci * 0.09, duration: 0.45 }}
                  className="typo-label font-inter tracking-[0.14em] uppercase px-4 py-2"
                  style={{
                    border: '1px solid rgba(129,41,33,0.35)',
                    color: 'rgba(255,255,255,0.7)',
                    background: 'rgba(129,41,33,0.08)',
                  }}
                >
                  {cap}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Phase divider */}
      <div style={{ height: 1, background: 'rgba(129,41,33,0.14)' }} />
    </div>
  );
}

/* ─────────────────────────────────────────────────── */
/* Main export                                         */
/* ─────────────────────────────────────────────────── */
export function DMFTWireframe_DevelopmentApproach(): ReactNode {
  return (
    <div style={{ background: '#060606' }}>

      {/* ── HEADER ── */}
      <div
        className="relative overflow-hidden"
        style={{ background: '#040404', borderBottom: '1px solid rgba(129,41,33,0.18)' }}
      >
        {/* Background ghost */}
        <div
          className="absolute right-0 bottom-0 pointer-events-none select-none overflow-hidden leading-none"
          aria-hidden="true"
        >
          <span
            className="font-bebas-neue"
            style={{ fontSize: 'clamp(90px, 15vw, 220px)', color: 'rgba(255,255,255,0.05)' }}
          >
            PROCESS
          </span>
        </div>

        <div className="relative max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20 py-14 md:py-20 lg:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">

            {/* Left: heading */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
  
                transition={{ duration: 0.6 }}
                className="flex items-center gap-4 mb-8"
              >
                <div
                  style={{
                    width: 32,
                    height: 2,
                    background: 'var(--vharanani-burgundy)',
                    flexShrink: 0,
                  }}
                />
                <span
                  className="typo-caption font-inter tracking-[0.28em] uppercase"
                  style={{ color: 'var(--vharanani-burgundy)' }}
                >
                  OUR PROCESS
                </span>
              </motion.div>

              <div className="overflow-hidden">
                <motion.h2
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
    
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                  className="font-bebas-neue uppercase text-white"
                  style={{
                    fontSize: 'clamp(48px, 8vw, 120px)',
                    lineHeight: 0.92,
                    letterSpacing: '-0.01em',
                  }}
                >
                  Development<br />Approach
                </motion.h2>
              </div>
            </div>

            {/* Right: body + stats */}
            <div className="flex flex-col justify-end gap-8">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
  
                transition={{ delay: 0.4, duration: 0.7 }}
                className="typo-copy font-inter"
                style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 420, lineHeight: 1.78 }}
              >
                We manage the full lifecycle of property development — from strategic land
                identification through to sales and handover, ensuring every project is
                delivered to the highest standards.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
  
                transition={{ delay: 0.65 }}
                className="flex items-center gap-8 pt-6"
                style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
              >
                {[
                  { value: '04', label: 'Development Phases' },
                  { value: '100%', label: 'Lifecycle Managed' },
                ].map((stat, i) => (
                  <div key={stat.label} className="flex items-center gap-8">
                    {i > 0 && (
                      <div
                        style={{
                          width: 1,
                          height: 44,
                          background: 'rgba(255,255,255,0.07)',
                        }}
                      />
                    )}
                    <div>
                      <div
                        className="font-bebas-neue text-white"
                        style={{ fontSize: 46, lineHeight: 1 }}
                      >
                        {stat.value}
                      </div>
                      <div
                        className="typo-caption font-inter tracking-[0.2em] uppercase"
                        style={{ color: 'rgba(255,255,255,0.24)' }}
                      >
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* ── TICKER ── */}
      <div
        className="overflow-hidden"
        style={{
          background: 'var(--vharanani-burgundy)',
          borderBottom: '1px solid rgba(0,0,0,0.3)',
          padding: '10px 0',
        }}
      >
        <div
          className="animate-ticker-left whitespace-nowrap"
          style={{ display: 'inline-flex', width: 'max-content' }}
        >
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span
              key={i}
              className="font-bebas-neue tracking-[0.22em] uppercase"
              style={{ fontSize: 13, color: 'rgba(255,255,255,0.88)', padding: '0 28px' }}
            >
              {item}
              <span style={{ marginLeft: 28, color: 'rgba(255,255,255,0.22)' }}>·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── PHASES ── */}
      {PHASES.map((phase, i) => (
        <PhaseBlock key={phase.step} phase={phase} index={i} />
      ))}

    </div>
  );
}
