import { useState, useEffect, useRef, type ReactNode } from 'react';
import { useInView } from '../../hooks/useInView';
import { motion } from 'motion/react';
import {
  MapPin, ArrowRight, Search, Layers, HardHat,
  Eye, Target, Briefcase, Home, Building2, Landmark,
  Heart, Globe, Mail, Phone, ChevronRight,
} from 'lucide-react';
import { ImageWithFallback } from '../ui/ImageWithFallback';


// ═══════════════════════════════════════════════════════════
// ANIMATED COUNTER
// ═══════════════════════════════════════════════════════════

function AnimatedCounter({ target, suffix = '', prefix = '', duration = 2000, color = 'var(--vharanani-burgundy)' }: { target: number; suffix?: string; prefix?: string; duration?: number; color?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return (
    <div ref={ref} className="typo-headline-big font-bebas-neue" style={{ color }}>
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// SECTION WRAPPER
// ═══════════════════════════════════════════════════════════

function SectionWrapper({ children, className = '', dark = false }: { children: ReactNode; className?: string; dark?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`py-10 md:py-16 px-6 md:px-12 lg:px-20 ${className}`}
      style={{ background: dark ? 'var(--vharanani-charcoal)' : '#ffffff' }}
    >
      {children}
    </motion.section>
  );
}

// ═══════════════════════════════════════════════════════════
// IMAGES
// ═══════════════════════════════════════════════════════════

const IMAGES = {
  aerialDev: 'https://i0.wp.com/vharananiproperties.co.za/wp-content/uploads/2020/09/DJI_0247-scaled.jpg?w=1440&ssl=1',
  architectural: 'https://i0.wp.com/vharananiproperties.co.za/wp-content/uploads/2020/08/rsz_dsc_0127.jpg?w=1080&ssl=1',
  residentialEstate: 'https://i0.wp.com/vharananiproperties.co.za/wp-content/uploads/2020/08/rsz_faranani-estate-1-1.jpg?w=1080&ssl=1',
  apartment: 'https://i0.wp.com/vharananiproperties.co.za/wp-content/uploads/2021/06/SOSHANGUVE-EXT.19-RDP-HOUSES-1.jpg?w=1080&ssl=1',
  townhouse: 'https://i0.wp.com/vharananiproperties.co.za/wp-content/uploads/2021/06/Mamelodi-Ext-5-4.jpg?w=1080&ssl=1',
  mixedUse: 'https://i0.wp.com/vharananiproperties.co.za/wp-content/uploads/2020/08/rsz_untitled_panorama4-1.jpg?w=1080&ssl=1',
  propertyDev: 'https://i0.wp.com/vharananiproperties.co.za/wp-content/uploads/2020/10/Property-development-scaled.jpg?w=1080&ssl=1',
  blueprint: 'https://i0.wp.com/vharananiproperties.co.za/wp-content/uploads/2020/08/Mogalakwena.jpg?w=1080&ssl=1',
};


// ═══════════════════════════════════════════════════════════
// SECTION 1+2: CINEMATIC HERO + ABOUT DMFT
// ═══════════════════════════════════════════════════════════

export function DMFTWireframe_HeroAbout({ onTabChange }: { onTabChange?: (tabId: string) => void } = {}): ReactNode {
  return (
    <div>
      {/* ── CINEMATIC HERO ── */}
      <div className="relative h-[45vh] sm:h-[55vh] min-h-[320px] sm:min-h-[440px] overflow-hidden">
        <ImageWithFallback
          src={IMAGES.aerialDev}
          alt="Aerial view of DMFT property development"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.85) 100%)'
        }} />
        <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: 'var(--vharanani-burgundy)' }} />

        {/* Nav bar */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 md:px-12 lg:px-20 py-5">
          <div className="font-bebas-neue typo-headline-small tracking-wider text-white uppercase opacity-80">DMFT Property Developers</div>
          <div className="hidden md:flex items-center gap-6">
            {['About', 'Developments', 'Approach', 'Vharanani Group', 'Contact'].map((item) => (
              <span key={item} className="font-inter typo-meta tracking-[0.12em] uppercase text-white opacity-50 hover:opacity-100 cursor-pointer transition-opacity">{item}</span>
            ))}
          </div>
        </div>

        {/* Hero content */}
        <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-12 lg:px-20 pb-14">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-[2px]" style={{ background: 'var(--vharanani-burgundy)' }} />
                  <span className="typo-caption tracking-[0.25em] uppercase font-inter" style={{ color: 'var(--vharanani-burgundy-60)' }}>
                    DMFT PROPERTY DEVELOPERS
                  </span>
                </div>
                <h1 className="typo-header font-bebas-neue tracking-wide uppercase text-white" style={{ lineHeight: 0.95 }}>
                  Creating Exceptional<br />Property Developments.
                </h1>
              </div>
              <div className="lg:col-span-5 flex flex-col gap-6">
                <p className="typo-copy font-inter text-white/60">
                  DMFT Property Developers is a property development company focused on the creation of high-quality residential and mixed-use developments across South Africa. As part of the Vharanani Group, DMFT leverages deep expertise in construction, infrastructure development, and project management to deliver well-planned developments that meet the needs of modern communities.
                </p>
                <div className="flex items-center gap-3">
                  <button onClick={() => onTabChange?.('residential-estates')} className="flex items-center gap-2 px-5 py-3 transition-all duration-300 hover:gap-3" style={{ background: 'var(--vharanani-burgundy)' }}>
                    <span className="font-bebas-neue typo-headline-small tracking-wider uppercase text-white">View Developments</span>
                    <ArrowRight size={14} className="text-white" />
                  </button>
                  <button onClick={() => onTabChange?.('approach')} className="flex items-center gap-2 px-5 py-3 transition-all duration-300 hover:bg-white/10" style={{ border: '1px solid rgba(255,255,255,0.3)' }}>
                    <span className="font-bebas-neue typo-headline-small tracking-wider uppercase text-white">Our Process</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── STATS BAR ── */}
      <div style={{ background: '#812921' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0" style={{ borderBottom: '1px solid rgba(255,255,255,0.2)' }}>
            {[
              { target: 12, suffix: '+', label: 'Developments' },
              { target: 3, suffix: 'K+', label: 'Units Planned' },
              { target: 4, suffix: '', label: 'Provinces Active' },
              { target: 20, suffix: '+', label: 'Years Group Experience' },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="py-8 md:py-10 text-center"
                style={{ borderRight: i < 3 ? '1px solid rgba(255,255,255,0.2)' : 'none' }}
              >
                <AnimatedCounter target={stat.target} suffix={stat.suffix} color="white" />
                <div className="typo-meta tracking-[0.12em] uppercase font-inter mt-2" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── ABOUT SPLIT ── */}
      <div style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-10 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 overflow-hidden"
            style={{ border: '1px solid var(--vharanani-charcoal-20)' }}
          >
            {/* Left — Text (7 cols) */}
            <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-center" style={{ background: '#fafafa' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[2px]" style={{ background: 'var(--vharanani-burgundy)' }} />
                <span className="typo-caption tracking-[0.25em] uppercase font-inter" style={{ color: 'var(--vharanani-burgundy)' }}>
                  ABOUT DMFT
                </span>
              </div>

              <h2 className="typo-headline-big font-bebas-neue tracking-wide uppercase mb-4" style={{ color: 'var(--vharanani-charcoal)' }}>
                A Real Estate Development Company Dedicated to Quality.
              </h2>

              <div className="w-12 h-[3px] mb-6" style={{ background: 'var(--vharanani-burgundy)' }} />

              <p className="typo-copy font-inter mb-4" style={{ color: 'var(--vharanani-charcoal-80)' }}>
                Working in collaboration with the Vharanani Group, DMFT benefits from extensive construction and infrastructure expertise, enabling the successful delivery of complex property development projects from concept through to completion.
              </p>

              <p className="typo-copy-small font-inter mb-8" style={{ color: 'var(--vharanani-charcoal-60)' }}>
                Our developments are designed with long-term value in mind, combining strong architectural design, efficient infrastructure planning, and quality construction to create environments that enhance both lifestyle and economic opportunity.
              </p>

              {/* Key pillars */}
              <div className="grid grid-cols-3 gap-0" style={{ border: '1px solid var(--vharanani-charcoal-20)' }}>
                {[
                  { icon: <Building2 size={18} />, label: 'Residential' },
                  { icon: <Landmark size={18} />, label: 'Commercial' },
                  { icon: <Home size={18} />, label: 'Mixed-Use' },
                ].map((item, i) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 p-4"
                    style={{ borderRight: i < 2 ? '1px solid var(--vharanani-charcoal-20)' : 'none' }}
                  >
                    <div style={{ color: 'var(--vharanani-burgundy)' }}>{item.icon}</div>
                    <span className="typo-meta tracking-[0.12em] uppercase font-inter" style={{ color: 'var(--vharanani-charcoal-60)' }}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Image (5 cols) */}
            <div className="lg:col-span-5 relative min-h-[380px]">
              <ImageWithFallback
                src={IMAGES.architectural}
                alt="DMFT modern architecture"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{
                background: 'linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.8) 100%)'
              }} />
              {/* Overlaid badge */}
              <div className="absolute bottom-0 left-0 right-0 p-6" style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }}>
                <div className="flex items-center gap-3">
                  <Layers size={16} style={{ color: 'var(--vharanani-burgundy)' }} />
                  <span className="typo-meta tracking-[0.15em] uppercase font-inter text-white/50">
                    Part of the Vharanani Group
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}


// ═══════════════════════════════════════════════════════════
// SECTION 3: DEVELOPMENT APPROACH — Cinematic Alternating
// ═══════════════════════════════════════════════════════════

export function DMFTWireframe_DevelopmentApproach(): ReactNode {
  const phases = [
    {
      step: '01',
      title: 'Land Identification & Acquisition',
      icon: <Search size={22} />,
      headline: 'Strategic Location Selection',
      description: 'Carefully identifying strategic locations with strong growth potential, development viability, and alignment with market demand — ensuring every project starts from a position of strength.',
      capabilities: ['Market Analysis', 'Growth Corridors', 'Zoning Assessment', 'Feasibility Studies'],
      image: IMAGES.aerialDev,
    },
    {
      step: '02',
      title: 'Planning & Feasibility',
      icon: <Target size={22} />,
      headline: 'From Concept to Blueprint',
      description: 'Conducting detailed feasibility studies, zoning processes, and development planning, working with experienced professionals to design modern and functional developments.',
      capabilities: ['Town Planning', 'Architectural Design', 'Zoning Processes', 'Municipal Approvals'],
      image: IMAGES.blueprint,
    },
    {
      step: '03',
      title: 'Construction & Project Management',
      icon: <HardHat size={22} />,
      headline: 'Built With Vharanani Expertise',
      description: 'Leveraging the construction expertise of the Vharanani Group to deliver projects efficiently and safely, from groundbreaking through to handover.',
      capabilities: ['Quality Construction', 'Project Management', 'Safety Compliance', 'Timeline Delivery'],
      image: IMAGES.propertyDev,
    },
    {
      step: '04',
      title: 'Sales & Delivery',
      icon: <Briefcase size={22} />,
      headline: 'Lasting Value for All',
      description: 'Delivering completed developments that provide value for homeowners, investors, and communities.',
      capabilities: ['Sales Management', 'Title Transfers', 'Homeowner Support', 'Community Integration'],
      image: IMAGES.residentialEstate,
    },
  ];

  return (
    <SectionWrapper className="!py-0 !px-0">
      {/* ── HEADER BAND ── */}
      <div className="relative h-[35vh] sm:h-[40vh] min-h-[260px] sm:min-h-[320px] overflow-hidden">
        <ImageWithFallback
          src={IMAGES.blueprint}
          alt="Property development planning"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.98) 100%)'
        }} />
        <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: 'var(--vharanani-burgundy)' }} />

        <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-12 lg:px-20 pb-12">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-[2px]" style={{ background: 'var(--vharanani-burgundy)' }} />
                  <span className="typo-caption tracking-[0.25em] uppercase font-inter" style={{ color: 'var(--vharanani-burgundy-60)' }}>
                    OUR PROCESS
                  </span>
                </div>
                <h2 className="typo-header font-bebas-neue tracking-wide uppercase text-white" style={{ lineHeight: 0.95 }}>
                  Development<br />Approach
                </h2>
              </div>
              <div className="lg:col-span-5">
                <p className="typo-copy font-inter text-white/50">
                  We manage the full lifecycle of property development — from strategic land identification through to sales and handover, ensuring every project is delivered to the highest standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── ALTERNATING PHASE CARDS ── */}
      <div style={{ background: '#ffffff' }}>
        {phases.map((phase, i) => {
          const isEven = i % 2 === 0;
          return (
            <motion.div
              key={phase.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                <div
                  className="grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden"
                  style={{
                    borderLeft: '1px solid var(--vharanani-charcoal-20)',
                    borderRight: '1px solid var(--vharanani-charcoal-20)',
                    borderBottom: '1px solid var(--vharanani-charcoal-20)',
                    borderTop: i === 0 ? '1px solid var(--vharanani-charcoal-20)' : 'none',
                  }}
                >
                  {/* Image side */}
                  <div className={`lg:col-span-5 relative h-[280px] lg:h-auto lg:min-h-[380px] overflow-hidden ${isEven ? '' : 'lg:order-2'}`}>
                    <ImageWithFallback
                      src={phase.image}
                      alt={phase.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0" style={{
                      background: isEven
                        ? 'linear-gradient(135deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.45) 100%)'
                        : 'linear-gradient(225deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.45) 100%)'
                    }} />
                    {/* Ghost step number */}
                    <div className="absolute top-4 left-6">
                      <span className="font-bebas-neue" style={{ fontSize: 'clamp(72px, 10vw, 120px)', lineHeight: 1, color: 'rgba(255,255,255,0.07)' }}>
                        {phase.step}
                      </span>
                    </div>
                    {/* Bottom phase label */}
                    <div className="absolute bottom-0 left-0 right-0 px-6 py-4" style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }}>
                      <div className="flex items-center gap-4">
                        <div className="typo-headline-small font-bebas-neue uppercase tracking-wide" style={{ color: 'var(--vharanani-burgundy)' }}>
                          Phase {phase.step}
                        </div>
                        <div className="flex-1 h-[1px]" style={{ background: 'rgba(255,255,255,0.1)' }} />
                        <div className="typo-caption tracking-[0.15em] uppercase font-inter text-white/60">
                          {phase.title}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content side */}
                  <div className={`lg:col-span-7 p-8 md:p-12 flex flex-col justify-center ${isEven ? '' : 'lg:order-1'}`} style={{ background: i % 2 === 0 ? '#ffffff' : '#fafafa' }}>
                    {/* Icon + tag */}
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 flex items-center justify-center" style={{ border: '1.5px solid var(--vharanani-burgundy)', color: 'var(--vharanani-burgundy)' }}>
                        {phase.icon}
                      </div>
                      <span className="typo-caption tracking-[0.2em] uppercase font-inter" style={{ color: 'var(--vharanani-burgundy)' }}>
                        STEP {phase.step}
                      </span>
                      <div className="flex-1 h-[1px] ml-2" style={{ background: 'var(--vharanani-charcoal-20)' }} />
                    </div>

                    <h3 className="typo-headline-big font-bebas-neue uppercase tracking-wide mb-2" style={{ color: 'var(--vharanani-charcoal)' }}>
                      {phase.title}
                    </h3>
                    <p className="typo-subline font-bebas-neue uppercase tracking-wide mb-5" style={{ color: 'var(--vharanani-burgundy)', lineHeight: 1.2 }}>
                      {phase.headline}
                    </p>
                    <p className="typo-copy font-inter mb-8" style={{ color: 'var(--vharanani-charcoal-60)' }}>
                      {phase.description}
                    </p>

                    {/* Capabilities grid */}
                    <div className="grid grid-cols-2 gap-0" style={{ border: '1px solid var(--vharanani-charcoal-20)' }}>
                      {phase.capabilities.map((cap, ci) => (
                        <div
                          key={cap}
                          className="flex items-center gap-3 p-4"
                          style={{
                            borderRight: ci % 2 === 0 ? '1px solid var(--vharanani-charcoal-20)' : 'none',
                            borderBottom: ci < 2 ? '1px solid var(--vharanani-charcoal-20)' : 'none',
                          }}
                        >
                          <div className="w-1.5 h-1.5 flex-shrink-0" style={{ background: 'var(--vharanani-burgundy)' }} />
                          <span className="typo-copy-small font-inter" style={{ color: 'var(--vharanani-charcoal-80)' }}>
                            {cap}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}


// ═══════════════════════════════════════════════════════════
// SECTION 4: PORTFOLIO — Flagship + Secondary Grid
// ═══════════════════════════════════════════════════════════

export function DMFTWireframe_Portfolio(): ReactNode {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const developments = [
    {
      title: 'Residential Estates',
      category: 'FLAGSHIP',
      image: IMAGES.residentialEstate,
      description: 'Secure residential estates designed to provide comfortable and modern living environments.',
      features: ['Gated Security', 'Modern Amenities', 'Landscaped Gardens', 'Community Living'],
      metric: { value: '1,200+', label: 'Units Across Estates' },
    },
    {
      title: 'Apartment Developments',
      category: 'URBAN LIVING',
      image: IMAGES.apartment,
      description: 'Well-designed apartment developments offering efficient living spaces within growing urban areas.',
      features: ['Modern Finishes', 'Open-Plan Living', 'Parking Included', 'Security'],
      metric: { value: '800+', label: 'Units Planned' },
    },
    {
      title: 'Townhouse Complexes',
      category: 'RESIDENTIAL',
      image: IMAGES.townhouse,
      description: 'Modern townhouse developments designed to meet the needs of families and young professionals.',
      features: ['Private Gardens', 'Double Garages', 'Family Living', 'Contemporary Finishes'],
      metric: { value: '500+', label: 'Homes Delivered' },
    },
    {
      title: 'Mixed-Use Developments',
      category: 'INTEGRATED',
      image: IMAGES.mixedUse,
      description: 'Integrated developments that combine residential, commercial, and community spaces.',
      features: ['Retail Ground Floor', 'Office Spaces', 'Residential Above', 'Community Spaces'],
      metric: { value: '3', label: 'Precincts In Development' },
    },
  ];

  return (
    <SectionWrapper className="!py-0 !px-0">
      {/* ── SECTION HEADER ── */}
      <div className="px-6 md:px-12 lg:px-20 pt-10 md:pt-14 pb-8" style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[2px]" style={{ background: 'var(--vharanani-burgundy)' }} />
                <span className="typo-caption tracking-[0.25em] uppercase font-inter" style={{ color: 'var(--vharanani-burgundy)' }}>
                  PORTFOLIO
                </span>
              </div>
              <h2 className="typo-header font-bebas-neue tracking-wide uppercase" style={{ color: 'var(--vharanani-charcoal)', lineHeight: 0.95 }}>
                Our<br />Developments
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="typo-copy font-inter" style={{ color: 'var(--vharanani-charcoal-60)' }}>
                DMFT Property Developers focuses on the development of well-planned residential and mixed-use developments across South Africa.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── FLAGSHIP HERO CARD ── */}
      <div className="px-6 md:px-12 lg:px-20" style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden"
            style={{ border: '1px solid var(--vharanani-charcoal-20)' }}
          >
            {/* Image — 7 cols */}
            <div className="lg:col-span-7 relative h-[320px] lg:h-auto lg:min-h-[440px] overflow-hidden group">
              <ImageWithFallback
                src={developments[0].image}
                alt={developments[0].title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0" style={{
                background: 'linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 100%)'
              }} />
              {/* Ghost number */}
              <div className="absolute top-6 left-8">
                <span className="font-bebas-neue" style={{ fontSize: '140px', lineHeight: 1, color: 'rgba(255,255,255,0.06)' }}>01</span>
              </div>
              {/* Flagship badge */}
              <div className="absolute top-6 right-6 px-3 py-1.5" style={{ background: 'var(--vharanani-burgundy)' }}>
                <span className="typo-meta tracking-[0.2em] uppercase font-inter text-white">Flagship</span>
              </div>
              {/* Bottom metric */}
              <div className="absolute bottom-0 left-0 right-0 px-8 py-5" style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }}>
                <div className="flex items-center gap-4">
                  <div className="typo-headline-big font-bebas-neue" style={{ color: 'var(--vharanani-burgundy)' }}>
                    {developments[0].metric.value}
                  </div>
                  <div className="typo-caption tracking-[0.15em] uppercase font-inter text-white/50">
                    {developments[0].metric.label}
                  </div>
                </div>
              </div>
            </div>

            {/* Content — 5 cols */}
            <div className="lg:col-span-5 p-8 md:p-10 flex flex-col justify-center" style={{ background: '#fafafa' }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 flex items-center justify-center" style={{ border: '1.5px solid var(--vharanani-burgundy)', color: 'var(--vharanani-burgundy)' }}>
                  <Building2 size={22} />
                </div>
                <span className="typo-caption tracking-[0.2em] uppercase font-inter" style={{ color: 'var(--vharanani-burgundy)' }}>
                  {developments[0].category}
                </span>
                <div className="flex-1 h-[1px] ml-2" style={{ background: 'var(--vharanani-charcoal-20)' }} />
              </div>

              <h3 className="typo-headline-big font-bebas-neue uppercase tracking-wide mb-5" style={{ color: 'var(--vharanani-charcoal)' }}>
                {developments[0].title}
              </h3>
              <p className="typo-copy font-inter mb-8" style={{ color: 'var(--vharanani-charcoal-60)' }}>
                {developments[0].description}
              </p>

              <div className="grid grid-cols-2 gap-0" style={{ border: '1px solid var(--vharanani-charcoal-20)' }}>
                {developments[0].features.map((f, fi) => (
                  <div
                    key={f}
                    className="flex items-center gap-3 p-4"
                    style={{
                      borderRight: fi % 2 === 0 ? '1px solid var(--vharanani-charcoal-20)' : 'none',
                      borderBottom: fi < 2 ? '1px solid var(--vharanani-charcoal-20)' : 'none',
                    }}
                  >
                    <div className="w-1.5 h-1.5 flex-shrink-0" style={{ background: 'var(--vharanani-burgundy)' }} />
                    <span className="typo-copy-small font-inter" style={{ color: 'var(--vharanani-charcoal-80)' }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── SECONDARY DEVELOPMENT CARDS — 3 columns ── */}
      <div className="px-6 md:px-12 lg:px-20 pb-0" style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0" style={{ borderLeft: '1px solid var(--vharanani-charcoal-20)', borderRight: '1px solid var(--vharanani-charcoal-20)', borderBottom: '1px solid var(--vharanani-charcoal-20)' }}>
            {developments.slice(1).map((dev, i) => {
              const isExpanded = expandedCard === i;
              return (
                <motion.div
                  key={dev.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group cursor-pointer"
                  style={{ borderRight: i < 2 ? '1px solid var(--vharanani-charcoal-20)' : 'none' }}
                  onClick={() => setExpandedCard(isExpanded ? null : i)}
                >
                  {/* Image header */}
                  <div className="relative h-[220px] overflow-hidden">
                    <ImageWithFallback
                      src={dev.image}
                      alt={dev.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0" style={{
                      background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.6) 100%)'
                    }} />
                    {/* Hover overlay */}
                    <div
                      className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
                      style={{ background: 'rgba(0,0,0,0.75)', opacity: isExpanded ? 1 : 0 }}
                    >
                      <span className="font-bebas-neue typo-headline-small tracking-wider uppercase text-white">
                        {isExpanded ? 'Close' : 'View Details'}
                      </span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ pointerEvents: 'none' }}>
                      {!isExpanded && <span className="font-bebas-neue typo-headline-small tracking-wider uppercase text-white">View Details</span>}
                    </div>
                    {/* Ghost number */}
                    <div className="absolute top-2 left-4">
                      <span className="font-bebas-neue" style={{ fontSize: '80px', lineHeight: 1, color: 'rgba(255,255,255,0.06)' }}>
                        {String(i + 2).padStart(2, '0')}
                      </span>
                    </div>
                    {/* Category badge */}
                    <div className="absolute top-4 right-4 px-2 py-1" style={{ background: 'rgba(0,0,0,0.85)' }}>
                      <span className="typo-meta tracking-[0.15em] uppercase font-inter text-white">{dev.category}</span>
                    </div>
                    {/* Bottom metric */}
                    <div className="absolute bottom-0 left-0 right-0 px-5 py-3" style={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(4px)' }}>
                      <div className="flex items-center gap-3">
                        <span className="typo-headline-small font-bebas-neue" style={{ color: 'var(--vharanani-burgundy)' }}>{dev.metric.value}</span>
                        <span className="typo-meta tracking-[0.1em] uppercase font-inter text-white/60">{dev.metric.label}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6" style={{ background: i % 2 === 0 ? '#ffffff' : '#fafafa' }}>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="typo-headline-small font-bebas-neue uppercase tracking-wide" style={{ color: 'var(--vharanani-charcoal)' }}>
                        {dev.title}
                      </h4>
                      <div
                        className="w-6 h-6 flex items-center justify-center transition-transform duration-300 flex-shrink-0"
                        style={{ border: '1px solid var(--vharanani-charcoal-20)', transform: isExpanded ? 'rotate(45deg)' : 'none' }}
                      >
                        <span className="font-bebas-neue text-sm leading-none" style={{ color: 'var(--vharanani-burgundy)' }}>+</span>
                      </div>
                    </div>
                    <p className="typo-copy-small font-inter mb-4" style={{ color: 'var(--vharanani-charcoal-60)' }}>
                      {dev.description}
                    </p>

                    {/* Expandable features */}
                    <motion.div
                      initial={false}
                      animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="grid grid-cols-2 gap-0 mt-2" style={{ border: '1px solid var(--vharanani-charcoal-20)' }}>
                        {dev.features.map((f, fi) => (
                          <div
                            key={f}
                            className="flex items-center gap-2 px-3 py-2"
                            style={{
                              borderRight: fi % 2 === 0 ? '1px solid var(--vharanani-charcoal-20)' : 'none',
                              borderBottom: fi < dev.features.length - 2 ? '1px solid var(--vharanani-charcoal-20)' : 'none',
                            }}
                          >
                            <div className="w-1.5 h-1.5 flex-shrink-0" style={{ background: 'var(--vharanani-burgundy)' }} />
                            <span className="typo-meta font-inter" style={{ color: 'var(--vharanani-charcoal-80)' }}>{f}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-3 flex items-center gap-2">
                        <div className="h-[1px] flex-1" style={{ background: 'var(--vharanani-charcoal-20)' }} />
                        <span className="typo-meta tracking-[0.12em] uppercase font-inter" style={{ color: 'var(--vharanani-charcoal-40)' }}>
                          {dev.metric.value} {dev.metric.label}
                        </span>
                      </div>
                    </motion.div>

                    {!isExpanded && (
                      <div className="grid grid-cols-2 gap-1">
                        {dev.features.slice(0, 2).map((f) => (
                          <div key={f} className="flex items-center gap-2">
                            <div className="w-1 h-1 flex-shrink-0" style={{ background: 'var(--vharanani-burgundy)' }} />
                            <span className="typo-meta font-inter" style={{ color: 'var(--vharanani-charcoal-60)' }}>{f}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── PORTFOLIO SUMMARY BAND ── */}
      <div className="relative overflow-hidden" style={{ background: 'var(--vharanani-burgundy)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 py-12" style={{ borderTop: '3px solid var(--vharanani-burgundy)' }}>
            {developments.map((dev, i) => (
              <motion.div
                key={dev.title + '-summary'}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 text-center"
                style={{ borderRight: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}
              >
                <div className="typo-headline-small font-bebas-neue uppercase tracking-wide text-white mb-1">
                  {dev.title}
                </div>
                <div className="typo-headline-big font-bebas-neue" style={{ color: 'var(--vharanani-burgundy)' }}>
                  {dev.metric.value}
                </div>
                <div className="typo-meta tracking-[0.1em] uppercase font-inter text-white/60 mt-1">
                  {dev.metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}


// ═══════════════════════════════════════════════════════════
// SECTION 5: CAPABILITIES & QUALITY — Cinematic Split
// ═══════════════════════════════════════════════════════════

export function DMFTWireframe_CapabilitiesQuality(): ReactNode {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const capabilities = [
    { title: 'Land Development & Township Establishment', image: IMAGES.aerialDev },
    { title: 'Property Development Planning', image: IMAGES.blueprint },
    { title: 'Project Management', image: IMAGES.propertyDev },
    { title: 'Infrastructure Integration', image: IMAGES.mixedUse },
    { title: 'Residential Development Construction', image: IMAGES.residentialEstate },
    { title: 'Mixed-Use Development Delivery', image: IMAGES.townhouse },
  ];

  return (
    <SectionWrapper className="!py-0 !px-0">
      {/* ── HEADER BAND ── */}
      <div className="relative h-[30vh] min-h-[240px] overflow-hidden">
        <ImageWithFallback
          src={IMAGES.propertyDev}
          alt="DMFT development expertise"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.85) 100%)'
        }} />
        <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: 'var(--vharanani-burgundy)' }} />

        <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-12 lg:px-20 pb-10">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px]" style={{ background: 'var(--vharanani-burgundy)' }} />
              <span className="typo-caption tracking-[0.25em] uppercase font-inter" style={{ color: 'var(--vharanani-burgundy-60)' }}>
                EXPERTISE
              </span>
            </div>
            <h2 className="typo-header font-bebas-neue tracking-wide uppercase text-white" style={{ lineHeight: 0.95 }}>
              Capabilities &<br />Quality
            </h2>
          </div>
        </div>
      </div>

      {/* ── CONTENT SPLIT ── */}
      <div className="px-6 md:px-12 lg:px-20 py-0" style={{ background: 'var(--vharanani-burgundy)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
            {/* Left — Capability List (7 cols) */}
            <div className="lg:col-span-7 relative p-8 md:p-10" style={{ background: 'rgba(255,255,255,0.02)' }}>
              {/* Hover background image */}
              {hoveredIdx !== null && (
                <div className="absolute inset-0 transition-opacity duration-500 opacity-10">
                  <ImageWithFallback
                    src={capabilities[hoveredIdx].image}
                    alt={capabilities[hoveredIdx].title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="relative z-10">
                <div className="typo-caption tracking-[0.3em] uppercase font-inter mb-8" style={{ color: 'var(--vharanani-burgundy)' }}>
                  CAPABILITIES
                </div>

                <div className="space-y-0">
                  {capabilities.map((cap, i) => (
                    <div
                      key={i}
                      className="group cursor-pointer py-5 transition-all duration-300"
                      style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
                      onMouseEnter={() => setHoveredIdx(i)}
                      onMouseLeave={() => setHoveredIdx(null)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <span
                            className="font-inter typo-meta tracking-wider opacity-30 group-hover:opacity-100 transition-opacity duration-300"
                            style={{ color: 'var(--vharanani-burgundy)' }}
                          >
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <h3 className="font-bebas-neue typo-subline tracking-wide uppercase text-white transition-all duration-300 group-hover:translate-x-2">
                            {cap.title}
                          </h3>
                        </div>
                        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <div className="w-8 h-[1px]" style={{ background: 'var(--vharanani-burgundy)' }} />
                          <ChevronRight size={16} style={{ color: 'var(--vharanani-burgundy)' }} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Quality Manifesto (5 cols) */}
            <div className="lg:col-span-5 p-8 md:p-10 flex flex-col justify-center" style={{ background: 'rgba(255,255,255,0.04)', borderLeft: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="typo-caption tracking-[0.3em] uppercase font-inter mb-6" style={{ color: 'var(--vharanani-burgundy)' }}>
                COMMITMENT TO QUALITY
              </div>

              <div className="mb-8 p-5" style={{ borderLeft: '3px solid var(--vharanani-burgundy)', background: 'rgba(0,0,0,0.06)' }}>
                <p className="typo-subline font-bebas-neue tracking-wide uppercase text-white" style={{ lineHeight: 1.3 }}>
                  "Quality is central to every development we undertake."
                </p>
              </div>

              <div className="grid grid-cols-1 gap-0" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
                {[
                  { icon: <HardHat size={18} />, label: 'High Construction Standards', text: 'Meeting high construction standards on every development we undertake.' },
                  { icon: <Landmark size={18} />, label: 'Long-Term Value', text: 'Providing long-term value to residents and investors.' },
                  { icon: <Heart size={18} />, label: 'Community Contribution', text: 'Contributing positively to the communities in which we operate.' },
                  { icon: <Globe size={18} />, label: 'Sustainable Urban Growth', text: 'Supporting sustainable urban growth through responsible development.' },
                ].map((item, i) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 p-5"
                    style={{ borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}
                  >
                    <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center" style={{ border: '1px solid var(--vharanani-burgundy)', color: 'var(--vharanani-burgundy)' }}>
                      {item.icon}
                    </div>
                    <div>
                      <div className="typo-headline-small font-bebas-neue tracking-wide uppercase text-white mb-1">{item.label}</div>
                      <p className="typo-copy-small font-inter text-white/60">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}


// ═══════════════════════════════════════════════════════════
// SECTION 6: HERITAGE & CONTACT — Cinematic Mega-Footer
// ═══════════════════════════════════════════════════════════

export function DMFTWireframe_HeritageContact(): ReactNode {
  return (
    <div>
      <div className="overflow-hidden">
        {/* ── CONTACT HEADER BAND ── */}
        <div className="relative h-[28vh] min-h-[220px] overflow-hidden">
          <ImageWithFallback
            src={IMAGES.aerialDev}
            alt="DMFT developments aerial"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.9) 100%)'
          }} />
          <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-12 lg:px-20 pb-10">
            <div className="max-w-7xl mx-auto w-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[2px]" style={{ background: 'var(--vharanani-burgundy)' }} />
                <span className="typo-caption tracking-[0.25em] uppercase font-inter text-white/50">
                  OUR HERITAGE & CONTACT
                </span>
              </div>
              <h2 className="typo-header font-bebas-neue tracking-wide uppercase text-white" style={{ lineHeight: 0.95 }}>
                Part of the<br />Vharanani Group.
              </h2>
            </div>
          </div>
        </div>

        {/* ── HERITAGE + CONTACT SPLIT ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Left — Heritage */}
          <div className="relative p-8 md:p-12 flex flex-col justify-start" style={{ background: '#812921' }}>
            {/* Subtle watermark */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 opacity-[0.02] pointer-events-none">
              <div className="font-bebas-neue uppercase tracking-wider" style={{ fontSize: '120px', lineHeight: '1', color: 'white' }}>
                DMFT
              </div>
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[2px]" style={{ background: 'rgba(255,255,255,0.4)' }} />
                <span className="typo-caption tracking-[0.25em] uppercase font-inter text-white/50">
                  OUR HERITAGE
                </span>
              </div>

              <h3 className="typo-headline-big font-bebas-neue tracking-wide uppercase text-white mb-5" style={{ lineHeight: 1 }}>
                Part of the<br />Vharanani Group.
              </h3>

              <p className="typo-copy font-inter text-white/70 mb-4">
                DMFT Property Developers forms part of the Vharanani Group, a diversified African holding company with interests across infrastructure, construction, property development, and investment sectors.
              </p>

              <p className="typo-copy-small font-inter text-white/60 mb-8">
                This relationship provides DMFT with access to strong technical expertise, established infrastructure capabilities, and an experienced leadership team with over 20 years of industry experience.
              </p>

              {/* Group companies */}
              <div className="grid grid-cols-3 gap-0" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
                {[
                  { icon: <Building2 size={16} />, name: 'Vharanani Properties', type: 'Construction' },
                  { icon: <Home size={16} />, name: 'DMFT', type: 'Property Dev' },
                  { icon: <Heart size={16} />, name: 'DMF Foundation', type: 'Social Impact' },
                ].map((company, i) => (
                  <div
                    key={company.name}
                    className="p-4 text-center"
                    style={{
                      borderRight: i < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                      background: i === 1 ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.02)',
                    }}
                  >
                    <div className="flex justify-center mb-2" style={{ color: i === 1 ? 'var(--vharanani-burgundy)' : 'rgba(255,255,255,0.3)' }}>
                      {company.icon}
                    </div>
                    <div className="typo-headline-small font-bebas-neue tracking-wide text-white uppercase">{company.name}</div>
                    <div className="typo-meta tracking-wider uppercase font-inter mt-1 text-white/50">{company.type}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Contact */}
          <div className="p-8 md:p-12 flex flex-col justify-center" style={{ background: '#fafafa' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[2px]" style={{ background: 'var(--vharanani-burgundy)' }} />
              <span className="typo-caption tracking-[0.25em] uppercase font-inter" style={{ color: 'var(--vharanani-burgundy)' }}>
                CONTACT
              </span>
            </div>

            <h3 className="typo-headline-big font-bebas-neue tracking-wide uppercase mb-4" style={{ color: 'var(--vharanani-charcoal)' }}>
              DMFT Property Developers
            </h3>

            <p className="typo-copy-small font-inter mb-6" style={{ color: 'var(--vharanani-charcoal-60)' }}>
              For development inquiries, partnerships, or property opportunities, please contact DMFT Property Developers.
            </p>

            {/* Form */}
            <div className="space-y-4 mb-8">
              <div>
                <label className="typo-meta tracking-[0.12em] uppercase font-inter mb-2 block" style={{ color: 'var(--vharanani-charcoal-60)' }}>Name *</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full px-4 py-3 font-inter typo-copy-small text-base outline-none transition-colors duration-200 focus:border-[var(--vharanani-burgundy)] min-h-[48px]"
                  style={{ border: '1px solid var(--vharanani-charcoal-20)', background: 'white' }}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="typo-meta tracking-[0.12em] uppercase font-inter mb-2 block" style={{ color: 'var(--vharanani-charcoal-60)' }}>Email *</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 font-inter typo-copy-small text-base outline-none transition-colors duration-200 focus:border-[var(--vharanani-burgundy)] min-h-[48px]"
                    style={{ border: '1px solid var(--vharanani-charcoal-20)', background: 'white' }}
                  />
                </div>
                <div>
                  <label className="typo-meta tracking-[0.12em] uppercase font-inter mb-2 block" style={{ color: 'var(--vharanani-charcoal-60)' }}>Phone</label>
                  <input
                    type="tel"
                    placeholder="+27..."
                    className="w-full px-4 py-3 font-inter typo-copy-small text-base outline-none transition-colors duration-200 focus:border-[var(--vharanani-burgundy)] min-h-[48px]"
                    style={{ border: '1px solid var(--vharanani-charcoal-20)', background: 'white' }}
                  />
                </div>
              </div>
              <div>
                <label className="typo-meta tracking-[0.12em] uppercase font-inter mb-2 block" style={{ color: 'var(--vharanani-charcoal-60)' }}>Message *</label>
                <textarea
                  placeholder="Tell us about your project or partnership interest"
                  rows={3}
                  className="w-full px-4 py-3 font-inter typo-copy-small outline-none resize-none transition-colors duration-200 focus:border-[var(--vharanani-burgundy)]"
                  style={{ border: '1px solid var(--vharanani-charcoal-20)', background: 'white' }}
                />
              </div>
              <button
                className="w-full flex items-center justify-center gap-2 px-8 py-4 transition-all duration-300 hover:gap-3 hover:opacity-90"
                style={{ background: 'var(--vharanani-burgundy)' }}
              >
                <span className="font-bebas-neue typo-headline-small tracking-wider uppercase text-white">Submit Enquiry</span>
                <ArrowRight size={14} className="text-white" />
              </button>
            </div>

            {/* Contact details */}
            <div className="grid grid-cols-1 gap-0" style={{ border: '1px solid var(--vharanani-charcoal-20)' }}>
              {[
                { icon: <Mail size={14} />, label: 'info@vharananiproperties.co.za' },
                { icon: <Phone size={14} />, label: '+27 11 656 1418' },
                { icon: <MapPin size={14} />, label: '18 Hume Road, Dunkeld West, Johannesburg' },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 p-4"
                  style={{ borderBottom: i < 2 ? '1px solid var(--vharanani-charcoal-20)' : 'none' }}
                >
                  <div style={{ color: 'var(--vharanani-burgundy)' }}>{item.icon}</div>
                  <span className="typo-copy-small font-inter" style={{ color: 'var(--vharanani-charcoal-60)' }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between px-6 md:px-12 lg:px-20 py-5" style={{ background: '#111111', borderTop: '3px solid var(--vharanani-burgundy)' }}>
          <div className="flex items-center gap-4">
            <span className="font-bebas-neue typo-headline-small tracking-wider text-white uppercase">DMFT Property Developers</span>
            <div className="w-[1px] h-4" style={{ background: 'rgba(255,255,255,0.15)' }} />
            <div className="flex items-center gap-1.5">
              <Layers size={12} style={{ color: 'var(--vharanani-burgundy)' }} />
              <span className="typo-meta tracking-wider uppercase font-inter" style={{ color: 'rgba(255,255,255,0.6)' }}>Vharanani Group</span>
            </div>
          </div>
          <p className="typo-meta font-inter" style={{ color: 'rgba(255,255,255,0.5)' }}>
            &copy; 2026 DMFT Property Developers. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
