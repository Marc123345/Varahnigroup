import { useState, useEffect, useRef, type ReactNode } from 'react';
import { useInView } from '../../hooks/useInView';
import { motion } from 'motion/react';
import {
  Building2, Shield, Target, Eye, Heart, Award, HardHat,
  Droplets, Wrench, Home, Factory, MapPin, Mail, Phone,
  ArrowRight, ArrowLeft, Users, Briefcase,
  GraduationCap, X,
} from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';


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
      style={{ background: dark ? 'var(--vharanani-burgundy)' : '#ffffff' }}
    >
      {children}
    </motion.section>
  );
}

// ═══════════════════════════════════════════════════════════
// IMAGES
// ═══════════════════════════════════════════════════════════

const IMAGES = {
  ceoPortrait: 'https://ik.imagekit.io/qcvroy8xpd/image%202.png',
  roadsCivils: 'https://i0.wp.com/vharananiproperties.co.za/wp-content/uploads/2021/07/DJI_0673-scaled.jpg?w=1440&ssl=1',
  waterSanitation: 'https://i0.wp.com/vharananiproperties.co.za/wp-content/uploads/2020/08/rsz_5-nandoni-dam-1-1.jpg?w=1080&ssl=1',
  buildingConstruction: 'https://i0.wp.com/vharananiproperties.co.za/wp-content/uploads/2021/06/MAPHUTA-MALATJIE-HOSPITAL-2.jpg?w=1080&ssl=1',
  residential: 'https://i0.wp.com/vharananiproperties.co.za/wp-content/uploads/2021/06/SOSHANGUVE-EXT.19-RDP-HOUSES-1.jpg?w=1080&ssl=1',
  propertyDev: 'https://i0.wp.com/vharananiproperties.co.za/wp-content/uploads/2020/10/Property-development-scaled.jpg?w=1080&ssl=1',
  facilitiesMgmt: 'https://i0.wp.com/vharananiproperties.co.za/wp-content/uploads/2021/06/Transnet-12.jpg?w=1080&ssl=1',
  brt: 'https://i0.wp.com/vharananiproperties.co.za/wp-content/uploads/2020/08/Tswane-BRT.jpg?w=1080&ssl=1',
  constructionWorker: 'https://i0.wp.com/vharananiproperties.co.za/wp-content/uploads/2020/08/rsz_dsc_0127.jpg?w=1080&ssl=1',
  values: 'https://i0.wp.com/vharananiproperties.co.za/wp-content/uploads/2020/08/rsz_untitled_panorama4-1.jpg?w=1080&ssl=1',
  map: 'https://i0.wp.com/vharananiproperties.co.za/wp-content/uploads/2020/08/rsz_dji_0519.jpg?w=1080&ssl=1',
};


// ═══════════════════════════════════════════════════════════
// SECTION 2: ABOUT & IMPACT — "The Dignity Narrative"
// ═══════════════════════════════════════════════════════════

export function PropertiesWireframe_AboutImpact(): ReactNode {
  return (
    <SectionWrapper>
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-8 h-[2px]" style={{ background: 'var(--vharanani-burgundy)' }} />
          <span className="typo-caption tracking-[0.25em] uppercase font-inter" style={{ color: 'var(--vharanani-burgundy)' }}>
            SEC 01 — OUR STORY
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden" style={{ border: '1px solid var(--vharanani-charcoal-20)' }}>
          {/* Left Column — Image */}
          <div className="relative h-[360px] md:h-auto md:min-h-[520px] overflow-hidden flex items-center justify-center" style={{ background: '#f5f0ef' }}>
            <ImageWithFallback
              src={IMAGES.ceoPortrait}
              alt="David Mabilu, Founder & CEO of Vharanani Properties"
              className="w-full h-full object-contain object-center"
            />
            {/* Name overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6" style={{ background: 'linear-gradient(to top, rgba(129,41,33,0.9) 0%, rgba(129,41,33,0.4) 60%, transparent 100%)' }}>
              <div className="font-inter typo-meta tracking-[0.3em] uppercase mb-1" style={{ color: 'rgba(255,255,255,0.8)' }}>
                FOUNDER & CEO
              </div>
              <h3 className="font-bebas-neue typo-subline tracking-wide text-white uppercase">
                David Mabilu
              </h3>
            </div>
          </div>

          {/* Right Column — Text Content */}
          <div className="p-6 md:p-10 flex flex-col justify-center" style={{ background: '#fafafa' }}>
            <p className="typo-meta tracking-[0.25em] uppercase font-inter mb-2" style={{ color: 'var(--vharanani-burgundy)' }}>VHARANANI PROPERTIES</p>
            <div
              className="typo-caption tracking-[0.3em] uppercase font-inter mb-3"
              style={{ color: 'var(--vharanani-burgundy)' }}
            >
              OUR STORY
            </div>

            <h3 className="font-bebas-neue typo-headline-big tracking-wide uppercase mb-4" style={{ color: 'var(--vharanani-charcoal)' }}>
              About Us
            </h3>

            <div className="w-12 h-[3px] mb-6" style={{ background: 'var(--vharanani-burgundy)' }} />

            <p className="font-inter typo-copy mb-4" style={{ color: 'var(--vharanani-charcoal-80)' }}>
              Vharanani Properties was founded in 2001 by Chief Executive Officer David Mabilu. What began as a small operation has grown into one of South Africa's leading Black-owned and managed construction companies.
            </p>
            <p className="font-inter typo-copy mb-4" style={{ color: 'var(--vharanani-charcoal-80)' }}>
              With more than two decades of experience, the company has developed strong technical expertise across a broad range of infrastructure sectors, delivering projects that meet the highest standards of quality, safety, and efficiency.
            </p>
            <p className="font-inter typo-copy mb-6" style={{ color: 'var(--vharanani-charcoal-60)' }}>
              Today, Vharanani Properties operates nationally and has successfully completed numerous high-value construction projects valued at billions of rands. Our multidisciplinary capability enables us to deliver projects of varying scale and complexity while maintaining strict adherence to quality standards, safety protocols, and responsible project management.
            </p>

            {/* Power Grid — Core Stats */}
            <div className="grid grid-cols-3 gap-6 mb-6 pt-6" style={{ borderTop: '1px solid var(--vharanani-charcoal-20)' }}>
              {[
                { value: 20, suffix: '+', label: 'Years Experience' },
                { value: 1, suffix: '', label: 'B-BBEE Level', prefix: 'Level ' },
                { value: 9, suffix: '', label: 'Provinces Active' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                  <div className="font-inter typo-meta tracking-wider uppercase mt-1" style={{ color: 'var(--vharanani-charcoal-60)' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Mission Blockquote */}
            <div className="p-5" style={{ borderLeft: '3px solid var(--vharanani-burgundy)', background: 'rgba(129,41,33,0.04)' }}>
              <div className="font-inter typo-copy italic" style={{ color: 'var(--vharanani-charcoal)' }}>
                "To restore people's dignity through infrastructure development."
              </div>
              <div className="font-inter typo-meta tracking-[0.15em] uppercase mt-2" style={{ color: 'var(--vharanani-charcoal-60)' }}>
                &mdash; Our Mission
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}


// ═══════════════════════════════════════════════════════════
// SECTION 3: INTEGRATED SERVICES — "The Capability Hub"
// ═══════════════════════════════════════════════════════════

export function PropertiesWireframe_IntegratedServices(): ReactNode {
  const services = [
    {
      title: 'Roads & Civils',
      subtitle: 'Turnkey civil construction — road construction, earthworks, water infrastructure, BRT systems, highways, and pipelines.',
      icon: <Wrench size={22} />,
      image: IMAGES.roadsCivils,
      span: 'md:col-span-2 md:row-span-2',
      height: 'h-[280px] md:h-full',
    },
    {
      title: 'Water & Sanitation',
      subtitle: 'Bulk water supply systems, pipeline installations, sewer reticulation, and grey water systems for sustainable municipal service delivery.',
      icon: <Droplets size={22} />,
      image: IMAGES.waterSanitation,
      span: '',
      height: 'h-[220px]',
    },
    {
      title: 'Building Construction',
      subtitle: 'Public and private sector buildings across mining, education, healthcare, retail, industrial, commercial, and residential sectors.',
      icon: <Building2 size={22} />,
      image: IMAGES.buildingConstruction,
      span: '',
      height: 'h-[220px]',
    },
    {
      title: 'Residential',
      subtitle: 'RDP housing, walk-up developments, apartment complexes, townhouses, and residential estates supporting provincial and national housing initiatives.',
      icon: <Home size={22} />,
      image: IMAGES.residential,
      span: '',
      height: 'h-[220px]',
    },
    {
      title: 'Property Development',
      subtitle: 'Turnkey solutions from land acquisition, zoning, and feasibility through to architectural design, project management, and construction.',
      icon: <Briefcase size={22} />,
      image: IMAGES.propertyDev,
      span: '',
      height: 'h-[220px]',
    },
    {
      title: 'Facilities Management',
      subtitle: 'Maintenance of office complexes, cleaning services, repairs, and management of institutional housing complexes for institutional and corporate clients.',
      icon: <Factory size={22} />,
      image: IMAGES.facilitiesMgmt,
      span: 'md:col-span-2',
      height: 'h-[220px]',
    },
  ];

  return (
    <SectionWrapper>
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-[2px]" style={{ background: 'var(--vharanani-burgundy)' }} />
          <span className="typo-caption tracking-[0.25em] uppercase font-inter" style={{ color: 'var(--vharanani-burgundy)' }}>
            SEC 02 — CAPABILITIES
          </span>
        </div>

        <div className="mb-10">
          <h2 className="font-bebas-neue typo-headline-big tracking-wide uppercase mb-3" style={{ color: 'var(--vharanani-charcoal)' }}>
            Integrated Services
          </h2>
          <p className="font-inter typo-copy max-w-2xl" style={{ color: 'var(--vharanani-charcoal-60)' }}>
            A comprehensive suite of construction and development capabilities, delivered with precision across every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-[1px]" style={{ background: 'var(--vharanani-charcoal-20)' }}>
          {services.map((svc, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden cursor-pointer ${svc.span} ${svc.height}`}
            >
              <ImageWithFallback
                src={svc.image}
                alt={svc.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[rgba(129,41,33,0.5)] transition-all duration-500 group-hover:bg-[rgba(129,41,33,0.7)]" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-5">
                <div className="flex items-center gap-2 mb-1">
                  <div className="text-white opacity-70 group-hover:opacity-100 transition-opacity duration-300">{svc.icon}</div>
                  <h4 className="font-bebas-neue typo-headline-small tracking-wide text-white uppercase">
                    {svc.title}
                  </h4>
                </div>

                <div className="overflow-hidden max-h-0 group-hover:max-h-32 transition-all duration-500">
                  <p className="font-inter typo-copy-small mt-1" style={{ color: 'rgba(255,255,255,0.7)' }}>
                    {svc.subtitle}
                  </p>
                </div>
              </div>

              {/* Top-right category badge */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-2 py-1" style={{ background: 'var(--vharanani-burgundy)' }}>
                <span className="font-inter typo-meta text-white tracking-wider uppercase">SERVICE</span>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[3px] transition-all duration-500" style={{ background: 'var(--vharanani-burgundy)' }} />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}


// ═══════════════════════════════════════════════════════════
// SECTION 4: FEATURED PROJECTS — "The Proof"
// ═══════════════════════════════════════════════════════════

export function PropertiesWireframe_FeaturedProjects(): ReactNode {
  const [activeIdx, setActiveIdx] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const projects = [
    {
      title: 'Tshwane BRT System',
      category: 'Roads & Civils',
      location: 'Gauteng, South Africa',
      image: IMAGES.brt,
      specs: 'Bus Rapid Transit infrastructure including dedicated lanes, stations, and traffic management systems.',
      impact: 'Connected thousands of daily commuters to affordable, efficient public transport across the Tshwane metropolitan area.',
    },
    {
      title: 'Polokwane BRT System',
      category: 'Roads & Civils',
      location: 'Limpopo, South Africa',
      image: IMAGES.roadsCivils,
      specs: 'Bus Rapid Transit system delivering dedicated transit lanes, station infrastructure, and integrated traffic management.',
      impact: 'Enhanced urban mobility and reduced commute times for residents across the Polokwane metropolitan area.',
    },
    {
      title: 'Marulaneng–Sekhukhune Road Development',
      category: 'Roads & Civils',
      location: 'Limpopo, South Africa',
      image: IMAGES.roadsCivils,
      specs: 'Full road construction including earthworks, drainage, paving, and road markings across challenging terrain.',
      impact: 'Improved rural accessibility, connecting remote communities to economic and social services.',
    },
    {
      title: 'Lepelle Revitalization Programme Bulk Water Project',
      category: 'Water & Sanitation',
      location: 'Limpopo, South Africa',
      image: IMAGES.waterSanitation,
      specs: 'Bulk water supply programme including pipeline infrastructure and treatment facility upgrades.',
      impact: 'Restored reliable water supply to rural communities, improving health outcomes and quality of life.',
    },
    {
      title: 'Rand Water Pipeline',
      category: 'Water & Sanitation',
      location: 'Gauteng, South Africa',
      image: IMAGES.waterSanitation,
      specs: 'Major bulk water pipeline installation supporting the Rand Water distribution network and municipal supply.',
      impact: 'Strengthened water security and service delivery capacity for communities across Gauteng.',
    },
    {
      title: 'Maphutha Malatjie Hospital',
      category: 'Building Construction',
      location: 'Limpopo, South Africa',
      image: IMAGES.buildingConstruction,
      specs: 'Full construction of a public healthcare facility, including surgical theatres, wards, and support infrastructure.',
      impact: 'Provided modern healthcare access to an underserved community, serving thousands of patients annually.',
    },
    {
      title: 'Mogalakwena Civic Centre',
      category: 'Building Construction',
      location: 'Limpopo, South Africa',
      image: IMAGES.buildingConstruction,
      specs: 'Construction of a full civic centre facility to serve the Mogalakwena local municipality and surrounding communities.',
      impact: 'Improved access to government services and created a modern public administration hub for the region.',
    },
    {
      title: 'Capricorn FET College',
      category: 'Building Construction',
      location: 'Limpopo, South Africa',
      image: IMAGES.buildingConstruction,
      specs: 'Construction of educational infrastructure including lecture halls, workshops, and student support facilities.',
      impact: 'Expanded technical and vocational education capacity, empowering youth with skills for the workforce.',
    },
    {
      title: 'Mamelodi X5 Housing Development',
      category: 'Residential',
      location: 'Gauteng, South Africa',
      image: IMAGES.residential,
      specs: 'Large-scale residential housing development providing dignified homes for qualifying families.',
      impact: 'Delivered sustainable human settlements and created local employment during the construction phase.',
    },
    {
      title: 'Nellmapius X22 Housing Development',
      category: 'Residential',
      location: 'Gauteng, South Africa',
      image: IMAGES.residential,
      specs: 'High-volume residential housing construction as part of a national human settlements programme.',
      impact: 'Provided dignified housing to hundreds of families in the Nellmapius community.',
    },
    {
      title: 'ST Maria Development',
      category: 'Property Development',
      location: 'South Africa',
      image: IMAGES.propertyDev,
      specs: 'Turnkey property development including land preparation, construction, and handover of residential units.',
      impact: 'Delivered quality residential property in a strategically positioned development.',
    },
    {
      title: 'Transnet Facilities Management Services',
      category: 'Facilities Management',
      location: 'South Africa',
      image: IMAGES.facilitiesMgmt,
      specs: 'Comprehensive facilities management services including maintenance, cleaning, and operational management of Transnet facilities.',
      impact: 'Ensured the long-term functionality and operational integrity of critical national infrastructure facilities.',
    },
  ];

  const current = projects[activeIdx];

  return (
    <SectionWrapper className="!py-0 !px-0">
      <div className="grid grid-cols-1 lg:grid-cols-12" style={{ minHeight: '560px' }}>

        {/* ── LEFT: Full image ── */}
        <div className="lg:col-span-7 relative overflow-hidden" style={{ minHeight: '360px' }}>
          <motion.div
            key={activeIdx}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <ImageWithFallback
              src={current.image}
              alt={current.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(129,41,33,0.6) 0%, rgba(129,41,33,0.2) 60%, transparent 100%)' }} />
          </motion.div>

          {/* Counter overlay */}
          <div className="absolute top-6 left-6 z-10">
            <span className="font-bebas-neue" style={{ fontSize: '80px', lineHeight: 1, color: 'rgba(255,255,255,0.12)' }}>
              {String(activeIdx + 1).padStart(2, '0')}
            </span>
          </div>

          {/* Nav arrows */}
          <div className="absolute bottom-6 left-6 z-10 flex items-center gap-2">
            <button
              onClick={() => setActiveIdx(activeIdx === 0 ? projects.length - 1 : activeIdx - 1)}
              className="w-11 h-11 flex items-center justify-center transition-all duration-200"
              style={{ border: '1px solid rgba(255,255,255,0.5)', background: 'rgba(129,41,33,0.8)' }}
              whileHover={{ background: 'var(--vharanani-burgundy)' }}
            >
              <ArrowLeft size={16} className="text-white" />
            </button>
            <button
              onClick={() => setActiveIdx(activeIdx === projects.length - 1 ? 0 : activeIdx + 1)}
              className="w-11 h-11 flex items-center justify-center transition-all duration-200"
              style={{ border: '1px solid rgba(255,255,255,0.5)', background: 'rgba(129,41,33,0.8)' }}
            >
              <ArrowRight size={16} className="text-white" />
            </button>
            <span className="font-bebas-neue typo-headline-small text-white ml-3" style={{ letterSpacing: '0.15em' }}>
              {String(activeIdx + 1).padStart(2, '0')} <span style={{ opacity: 0.4 }}>/</span> {String(projects.length).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* ── RIGHT: Content panel ── */}
        <div className="lg:col-span-5 flex flex-col" style={{ borderLeft: '1px solid var(--vharanani-charcoal-20)' }}>
          {/* Section header */}
          <div className="px-8 pt-10 pb-6" style={{ borderBottom: '1px solid var(--vharanani-charcoal-20)' }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px]" style={{ background: 'var(--vharanani-burgundy)' }} />
              <span className="typo-caption tracking-[0.25em] uppercase font-inter" style={{ color: 'var(--vharanani-burgundy)' }}>
                SEC 03 — PROOF OF DELIVERY
              </span>
            </div>
            <h2 className="font-bebas-neue typo-subline tracking-wide uppercase" style={{ color: 'var(--vharanani-charcoal)' }}>
              Featured Projects
            </h2>
          </div>

          {/* Active project detail */}
          <motion.div
            key={activeIdx}
            className="px-8 py-8 flex-1 flex flex-col"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-block self-start px-2 py-0.5 mb-4" style={{ background: 'var(--vharanani-burgundy)' }}>
              <span className="font-inter typo-meta text-white tracking-[0.2em] uppercase">{current.category}</span>
            </div>
            <h3 className="font-bebas-neue typo-subline tracking-wide uppercase mb-3" style={{ color: 'var(--vharanani-charcoal)', lineHeight: 1.1 }}>
              {current.title}
            </h3>
            <div className="flex items-center gap-2 mb-5">
              <MapPin size={13} style={{ color: 'var(--vharanani-burgundy)' }} />
              <span className="font-inter typo-copy-small tracking-wider uppercase" style={{ color: 'var(--vharanani-charcoal-60)' }}>
                {current.location}
              </span>
            </div>
            <p className="font-inter typo-copy-small mb-6" style={{ color: 'var(--vharanani-charcoal-80)', lineHeight: 1.7 }}>
              {current.specs}
            </p>
            <div className="p-4 mb-6" style={{ borderLeft: '3px solid var(--vharanani-burgundy)', background: 'rgba(129,41,33,0.04)' }}>
              <div className="font-inter typo-meta tracking-[0.18em] uppercase mb-1" style={{ color: 'var(--vharanani-burgundy)' }}>Community Impact</div>
              <p className="font-inter typo-copy-small" style={{ color: 'var(--vharanani-charcoal-80)' }}>{current.impact}</p>
            </div>
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 self-start px-6 py-3 transition-all duration-300 hover:gap-3 mt-auto"
              style={{ background: 'var(--vharanani-burgundy)' }}
            >
              <span className="font-bebas-neue typo-headline-small tracking-wider uppercase text-white">View Full Details</span>
              <ArrowRight size={14} className="text-white" />
            </button>
          </motion.div>

          {/* Thumbnail strip */}
          <div className="grid grid-cols-4 gap-[1px]" style={{ background: 'var(--vharanani-charcoal-20)', borderTop: '1px solid var(--vharanani-charcoal-20)' }}>
            {projects.map((p, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className="relative h-16 overflow-hidden group"
                style={{ outline: 'none' }}
              >
                <ImageWithFallback
                  src={p.image}
                  alt={p.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 transition-all duration-300"
                  style={{ background: i === activeIdx ? 'rgba(129,41,33,0.75)' : 'rgba(129,41,33,0.4)' }}
                />
                {i === activeIdx && (
                  <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: 'white' }} />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Quick View Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(129,41,33,0.75)', backdropFilter: 'blur(8px)' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto"
            style={{ background: 'white' }}
          >
            <div className="relative h-[200px] sm:h-[260px]">
              <ImageWithFallback src={current.image} alt={current.title} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(129,41,33,0.9) 0%, transparent 55%)' }} />
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center transition-colors"
                style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)' }}
              >
                <X size={16} className="text-white" />
              </button>
              <div className="absolute bottom-5 left-6">
                <div className="inline-block px-2 py-0.5 mb-2" style={{ background: 'var(--vharanani-burgundy)' }}>
                  <span className="font-inter typo-meta text-white tracking-[0.2em] uppercase">{current.category}</span>
                </div>
                <h3 className="font-bebas-neue typo-subline tracking-wide text-white uppercase">{current.title}</h3>
              </div>
            </div>
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-2 mb-5">
                <MapPin size={14} style={{ color: 'var(--vharanani-burgundy)' }} />
                <span className="font-inter typo-copy-small tracking-wider uppercase" style={{ color: 'var(--vharanani-charcoal-60)' }}>{current.location}</span>
              </div>
              <h4 className="font-bebas-neue typo-headline-small tracking-wide uppercase mb-2" style={{ color: 'var(--vharanani-charcoal)' }}>Project Specifications</h4>
              <p className="font-inter typo-copy mb-6" style={{ color: 'var(--vharanani-charcoal-80)' }}>{current.specs}</p>
              <div className="p-4" style={{ borderLeft: '3px solid var(--vharanani-burgundy)', background: 'rgba(129,41,33,0.04)' }}>
                <div className="font-inter typo-meta tracking-[0.2em] uppercase mb-1" style={{ color: 'var(--vharanani-burgundy)' }}>Community Impact</div>
                <p className="font-inter typo-copy-small" style={{ color: 'var(--vharanani-charcoal-80)' }}>{current.impact}</p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </SectionWrapper>
  );
}


// ═══════════════════════════════════════════════════════════
// SECTION 5: COMPLIANCE & ACCREDITATION — "The Trust Anchor"
// ═══════════════════════════════════════════════════════════

export function PropertiesWireframe_Compliance(): ReactNode {
  const certifications = [
    { icon: <Award size={28} />, title: 'ISO 9001:2015', subtitle: 'Certified Construction Company', highlight: false },
    { icon: <Shield size={28} />, title: 'B-BBEE Level 1', subtitle: 'Highest Contributor Level', highlight: false },
    { icon: <Building2 size={28} />, title: 'CIDB Grade 9GB', subtitle: 'General Building Works', highlight: true },
    { icon: <HardHat size={28} />, title: 'CIDB Grade 9CE', subtitle: 'Civil Engineering', highlight: true },
    { icon: <Home size={28} />, title: 'NHBRC', subtitle: 'National Home Builders Registration Council', highlight: false },
    { icon: <Users size={28} />, title: 'COIDA', subtitle: 'Registered with the Department of Labour', highlight: false },
  ];

  return (
    <SectionWrapper className="!py-0 !px-0">
      {/* ── BURGUNDY HEADER BAND ── */}
      <div className="px-6 md:px-12 lg:px-20 py-10 md:py-14" style={{ background: 'var(--vharanani-burgundy)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-[2px]" style={{ background: 'rgba(255,255,255,0.5)' }} />
                <span className="typo-caption tracking-[0.25em] uppercase font-inter" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  SEC 04 — ACCREDITATION
                </span>
              </div>
              <h2 className="font-bebas-neue typo-header uppercase tracking-wide text-white" style={{ lineHeight: 0.95 }}>
                Certified Excellence.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="font-inter typo-copy" style={{ color: 'rgba(255,255,255,0.8)' }}>
                Holding South Africa's highest contractor grades, affirming our commitment to quality and compliance on every project.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── HIGHLIGHTED CERTS — CIDB top tier ── */}
      <div className="px-6 md:px-12 lg:px-20 py-0" style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] mt-0" style={{ background: 'var(--vharanani-charcoal-20)', borderBottom: '1px solid var(--vharanani-charcoal-20)' }}>
            {certifications.filter(c => c.highlight).map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-6 p-8 md:p-10"
                style={{ background: 'white', borderTop: '3px solid var(--vharanani-burgundy)' }}
              >
                <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center" style={{ background: 'var(--vharanani-burgundy)', color: 'white' }}>
                  {cert.icon}
                </div>
                <div>
                  <div className="inline-block px-2 py-0.5 mb-2" style={{ background: 'var(--vharanani-burgundy)' }}>
                    <span className="font-inter typo-meta text-white tracking-[0.15em] uppercase">Highest Grade</span>
                  </div>
                  <h4 className="font-bebas-neue typo-subline tracking-wide uppercase" style={{ color: 'var(--vharanani-charcoal)' }}>
                    {cert.title}
                  </h4>
                  <div className="font-inter typo-copy-small mt-1" style={{ color: 'var(--vharanani-charcoal-60)' }}>
                    {cert.subtitle}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── STANDARD CERTS ── */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-[1px]" style={{ background: 'var(--vharanani-charcoal-20)', borderBottom: '1px solid var(--vharanani-charcoal-20)' }}>
            {certifications.filter(c => !c.highlight).map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                whileHover={{ y: -2 }}
                className="flex flex-col items-center justify-center p-8 text-center"
                style={{ background: '#fafafa' }}
              >
                <div className="w-14 h-14 flex items-center justify-center mb-4" style={{ border: '1.5px solid var(--vharanani-burgundy)', color: 'var(--vharanani-burgundy)' }}>
                  {cert.icon}
                </div>
                <h4 className="font-bebas-neue typo-headline-small tracking-wide uppercase mb-1" style={{ color: 'var(--vharanani-charcoal)' }}>
                  {cert.title}
                </h4>
                <div className="font-inter typo-meta tracking-wider uppercase" style={{ color: 'var(--vharanani-charcoal-60)' }}>
                  {cert.subtitle}
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
// SECTION 6: VALUES & IMPACT — "The Culture"
// ═══════════════════════════════════════════════════════════

export function PropertiesWireframe_ValuesImpact(): ReactNode {
  const values = [
    { icon: <Shield size={24} />, title: 'Professionalism', description: 'Maintaining the highest standards in execution and project delivery.' },
    { icon: <Target size={24} />, title: 'Accountability', description: 'Taking full responsibility for the quality, safety, and success of every project.' },
    { icon: <Eye size={24} />, title: 'Transparency', description: 'Operating with openness and integrity in all engagements.' },
    { icon: <Heart size={24} />, title: 'Honesty', description: 'Building long-term relationships based on trust and ethical conduct.' },
  ];

  const impacts = [
    { icon: <Home size={22} />, label: 'Sustainable Settlements', value: 9, suffix: '', description: 'Provinces with dignified housing developments' },
    { icon: <Users size={22} />, label: 'Employment Created', value: 1000, suffix: 's+', description: 'Jobs and skills development across construction sites nationally' },
    { icon: <GraduationCap size={22} />, label: 'Economic Participation', value: 500, suffix: '+', description: 'Local community and enterprise development initiatives' },
  ];

  return (
    <SectionWrapper>
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-[2px]" style={{ background: 'var(--vharanani-burgundy)' }} />
          <span className="typo-caption tracking-[0.25em] uppercase font-inter" style={{ color: 'var(--vharanani-burgundy)' }}>
            SEC 05 — VALUES & IMPACT
          </span>
        </div>

        <div className="mb-10">
          <h2 className="font-bebas-neue typo-headline-big tracking-wide uppercase mb-3" style={{ color: 'var(--vharanani-charcoal)' }}>Our Values & Impact</h2>
          <p className="font-inter typo-copy max-w-3xl" style={{ color: 'var(--vharanani-charcoal-60)' }}>
            Vharanani Properties is committed to contributing to South Africa's socioeconomic development through responsible infrastructure delivery. Our work reflects our mission to restore dignity through infrastructure development.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[1px] mb-8" style={{ background: 'var(--vharanani-charcoal-20)', border: '1px solid var(--vharanani-charcoal-20)' }}>
          {values.map((val, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -2 }}
              className="group p-6 pb-8 text-center"
              style={{ background: 'white' }}
            >
              <div
                className="w-14 h-14 mx-auto flex items-center justify-center mb-4 transition-colors duration-300"
                style={{ border: '2px solid var(--vharanani-charcoal-20)', color: 'var(--vharanani-burgundy)' }}
              >
                {val.icon}
              </div>
              <h4 className="font-bebas-neue typo-headline-small tracking-wide uppercase mb-2" style={{ color: 'var(--vharanani-charcoal)' }}>
                {val.title}
              </h4>
              <p className="font-inter typo-copy-small" style={{ color: 'var(--vharanani-charcoal-60)' }}>
                {val.description}
              </p>
              <div className="mx-auto mt-4 w-0 group-hover:w-10 h-[2px] transition-all duration-500" style={{ background: 'var(--vharanani-burgundy)' }} />
            </motion.div>
          ))}
        </div>

        {/* Impact Strip */}
        <div className="overflow-hidden" style={{ border: '1px solid var(--vharanani-charcoal-20)' }}>
          <div className="relative overflow-hidden" style={{ background: 'var(--vharanani-burgundy)' }}>
            <ImageWithFallback
              src={IMAGES.values}
              alt="Vharanani Properties team and values"
              className="absolute inset-0 w-full h-full object-cover opacity-10"
            />
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-0">
              {impacts.map((item, i) => (
                <div
                  key={i}
                  className="p-8 text-center flex flex-col items-center"
                  style={{ borderRight: i < 2 ? '1px solid rgba(255,255,255,0.15)' : 'none' }}
                >
                  <div className="w-12 h-12 flex items-center justify-center mb-4" style={{ border: '1px solid rgba(255,255,255,0.35)', color: 'white' }}>
                    {item.icon}
                  </div>
                  <AnimatedCounter target={item.value} suffix={item.suffix} color="white" />
                  <h4 className="font-bebas-neue typo-headline-small tracking-wide uppercase mb-1 text-white">
                    {item.label}
                  </h4>
                  <p className="font-inter typo-meta" style={{ color: 'rgba(255,255,255,0.75)' }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}


// ═══════════════════════════════════════════════════════════
// SECTION 7: CONTACT & GLOBAL FOOTPRINT
// ═══════════════════════════════════════════════════════════

export function PropertiesWireframe_ContactFootprint(): ReactNode {
  const [activeTab, setActiveTab] = useState<'head' | 'polokwane'>('head');

  const offices = {
    head: {
      name: 'Head Office',
      city: 'Johannesburg',
      address: '18 Hume Road, Dunkeld West, Johannesburg, 2196, South Africa',
      phone: '+27 11 656 1418',
      email: 'info@vharananiproperties.co.za',
    },
    polokwane: {
      name: 'Polokwane Office',
      city: 'Polokwane',
      address: '3A Schoeman Street, Polokwane, 0699, South Africa',
      phone: '+27 15 295 6085',
      email: 'info@vharananiproperties.co.za',
    },
  };

  const current = offices[activeTab];

  return (
    <SectionWrapper dark>
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-8 h-[2px]" style={{ background: 'rgba(255,255,255,0.5)' }} />
          <span className="typo-caption tracking-[0.25em] uppercase font-inter" style={{ color: 'rgba(255,255,255,0.75)' }}>
            SEC 05 — CONNECT
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.2)' }}>
          {/* Left — Map */}
          <div className="relative h-[340px] md:h-auto md:min-h-[520px] overflow-hidden">
            <ImageWithFallback
              src={IMAGES.map}
              alt="South Africa geographic coverage"
              className="absolute inset-0 w-full h-full object-cover opacity-75"
            />
            {/* Grid overlay */}
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />

            {/* Location Pins */}
            <div className="absolute inset-0">
              {/* Johannesburg pin */}
              <div className="absolute" style={{ top: '55%', left: '52%' }}>
                <div className="relative">
                  <div className="w-4 h-4 animate-ping absolute" style={{ background: 'white', opacity: 0.5 }} />
                  <div className="w-4 h-4 relative z-10" style={{ background: 'white' }} />
                  <div className="absolute top-5 left-5 whitespace-nowrap px-2 py-1" style={{ background: 'rgba(129,41,33,0.9)', border: '1px solid rgba(255,255,255,0.2)' }}>
                    <span className="font-inter typo-meta text-white tracking-wider uppercase">Johannesburg (HQ)</span>
                  </div>
                </div>
              </div>
              {/* Polokwane pin */}
              <div className="absolute" style={{ top: '38%', left: '56%' }}>
                <div className="relative">
                  <div className="w-3 h-3 animate-ping absolute" style={{ background: 'rgba(255,255,255,0.8)', opacity: 0.5 }} />
                  <div className="w-3 h-3 relative z-10" style={{ background: 'rgba(255,255,255,0.85)' }} />
                  <div className="absolute top-4 left-4 whitespace-nowrap px-2 py-1" style={{ background: 'rgba(129,41,33,0.9)', border: '1px solid rgba(255,255,255,0.2)' }}>
                    <span className="font-inter typo-meta text-white tracking-wider uppercase">Polokwane</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Title overlay */}
            <div className="absolute bottom-6 left-6">
              <h3 className="font-bebas-neue typo-subline tracking-wide text-white uppercase">
                National Footprint
              </h3>
              <p className="font-inter typo-copy-small mt-1" style={{ color: 'rgba(255,255,255,0.85)' }}>
                Projects delivered across all nine provinces
              </p>
            </div>
          </div>

          {/* Right — Contact Info + Form */}
          <div className="p-6 md:p-8 flex flex-col" style={{ background: 'white' }}>
            {/* Tab Switcher */}
            <div className="flex items-center gap-0 mb-6" style={{ borderBottom: '2px solid var(--vharanani-charcoal-20)' }}>
              {(['head', 'polokwane'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className="flex-1 py-3 text-center transition-all duration-200"
                  style={{
                    borderBottom: activeTab === tab ? '2px solid var(--vharanani-burgundy)' : '2px solid transparent',
                    marginBottom: '-2px',
                    background: activeTab === tab ? 'rgba(129,41,33,0.04)' : 'transparent',
                  }}
                >
                  <span
                    className="font-bebas-neue typo-headline-small tracking-wider uppercase"
                    style={{ color: activeTab === tab ? 'var(--vharanani-burgundy)' : 'var(--vharanani-charcoal-60)' }}
                  >
                    {tab === 'head' ? 'Head Office' : 'Polokwane Office'}
                  </span>
                </button>
              ))}
            </div>

            {/* Contact Details */}
            <div className="mb-6 space-y-3">
              <div className="flex items-center gap-3">
                <MapPin size={16} style={{ color: 'var(--vharanani-burgundy)' }} />
                <span className="font-inter typo-copy-small" style={{ color: 'var(--vharanani-charcoal)' }}>{current.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} style={{ color: 'var(--vharanani-burgundy)' }} />
                <span className="font-inter typo-copy-small" style={{ color: 'var(--vharanani-charcoal)' }}>{current.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} style={{ color: 'var(--vharanani-burgundy)' }} />
                <span className="font-inter typo-copy-small" style={{ color: 'var(--vharanani-burgundy)' }}>{current.email}</span>
              </div>
            </div>

            <div className="h-[1px] mb-6" style={{ background: 'var(--vharanani-charcoal-20)' }} />

            {/* Partnership Form */}
            <div className="flex-1">
              <h4 className="font-bebas-neue typo-headline-small tracking-wide uppercase mb-4" style={{ color: 'var(--vharanani-charcoal)' }}>
                Partner with us on your next project
              </h4>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 font-inter typo-copy-small text-base outline-none transition-colors duration-200 focus:border-[var(--vharanani-burgundy)]"
                  style={{ border: '1px solid var(--vharanani-charcoal-20)', background: 'rgba(129,41,33,0.02)' }}
                />
                <input
                  type="text"
                  placeholder="Company"
                  className="w-full px-4 py-3 font-inter typo-copy-small text-base outline-none transition-colors duration-200 focus:border-[var(--vharanani-burgundy)]"
                  style={{ border: '1px solid var(--vharanani-charcoal-20)', background: 'rgba(129,41,33,0.02)' }}
                />
                <select
                  className="w-full px-4 py-3 font-inter typo-copy-small text-base outline-none focus:outline-none transition-colors duration-200 focus:border-[var(--vharanani-burgundy)]"
                  style={{ border: '1px solid var(--vharanani-charcoal-20)', background: 'rgba(129,41,33,0.02)', color: 'var(--vharanani-charcoal-60)' }}
                  defaultValue=""
                >
                  <option value="" disabled>Service Required</option>
                  <option value="roads">Roads & Civil Engineering</option>
                  <option value="water">Water & Sanitation</option>
                  <option value="building">Building Construction</option>
                  <option value="residential">Residential Development</option>
                  <option value="property">Property Development</option>
                  <option value="facilities">Facilities Management</option>
                </select>
                <textarea
                  placeholder="Message"
                  rows={3}
                  className="w-full px-4 py-3 font-inter typo-copy-small outline-none resize-none transition-colors duration-200 focus:border-[var(--vharanani-burgundy)]"
                  style={{ border: '1px solid var(--vharanani-charcoal-20)', background: 'rgba(129,41,33,0.02)' }}
                />
                <button
                  onClick={() => { window.location.href = 'mailto:info@vharananiproperties.co.za?subject=Project%20Enquiry'; }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 transition-all duration-300 hover:gap-3"
                  style={{ background: 'var(--vharanani-burgundy)' }}
                >
                  <span className="font-bebas-neue typo-headline-small tracking-wider uppercase text-white">Send Enquiry</span>
                  <ArrowRight size={14} className="text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
