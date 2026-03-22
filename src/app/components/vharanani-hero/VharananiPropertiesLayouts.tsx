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
  ceoPortrait: 'https://ik.imagekit.io/qcvroy8xpd/image%202.png',
  roadsCivils: 'https://images.unsplash.com/photo-1766330301270-e4c652b1c538?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY29uc3RydWN0aW9uJTIwaW5mcmFzdHJ1Y3R1cmUlMjByb2Fkc3xlbnwxfHx8fDE3NzM2OTA0ODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
  waterSanitation: 'https://images.unsplash.com/photo-1582476999010-7b857b165b6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMHNhbml0YXRpb24lMjBwaXBlbGluZSUyMG11bmljaXBhbHxlbnwxfHx8fDE3NzM2OTA0ODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
  buildingConstruction: 'https://images.unsplash.com/photo-1691147421207-d4274cfb482d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMGJ1aWxkaW5nJTIwY29uc3RydWN0aW9uJTIwQWZyaWNhfGVufDF8fHx8MTc3MzY5MDQ4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
  residential: 'https://images.unsplash.com/photo-1653505914751-93e8ac1123be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGhvdXNpbmclMjBkZXZlbG9wbWVudCUyMFNvdXRoJTIwQWZyaWNhfGVufDF8fHx8MTc3MzY5MDQ4OHww&ixlib=rb-4.1.0&q=80&w=1080',
  propertyDev: 'https://images.unsplash.com/photo-1769697507341-d868b055c6a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwcHJvcGVydHklMjBkZXZlbG9wbWVudCUyMG1vZGVybnxlbnwxfHx8fDE3NzM2OTA0ODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
  facilitiesMgmt: 'https://images.unsplash.com/photo-1768796372362-05c256e61d8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNpbGl0aWVzJTIwbWFuYWdlbWVudCUyMGJ1aWxkaW5nJTIwb3BlcmF0aW9uc3xlbnwxfHx8fDE3NzM2OTA0ODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
  brt: 'https://images.unsplash.com/photo-1764778822237-f8bb3369aaad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdWJsaWMlMjB0cmFuc3BvcnRhdGlvbiUyMGJ1cyUyMHN5c3RlbSUyMGNpdHl8ZW58MXx8fHwxNzczNjkwNDk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
  constructionWorker: 'https://images.unsplash.com/photo-1694521787162-5373b598945c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXIlMjBzYWZldHklMjBoZWxtZXQlMjBzaXRlfGVufDF8fHx8MTc3MzY5MDQ5NHww&ixlib=rb-4.1.0&q=80&w=1080',
  values: 'https://images.unsplash.com/photo-1676276376140-a4030cc596a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB2YWx1ZXMlMjB0ZWFtd29yayUyMHByb2Zlc3Npb25hbHN8ZW58MXx8fHwxNzczNjkwNDk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
  map: 'https://images.unsplash.com/photo-1744968777216-8d6d14ffa734?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwbWFwJTIwc291dGglMjBhZnJpY2ElMjBnZW9ncmFwaGljfGVufDF8fHx8MTc3MzY5MDQ5NHww&ixlib=rb-4.1.0&q=80&w=1080',
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
          <div className="relative h-[360px] md:h-auto md:min-h-[520px] overflow-hidden group">
            <ImageWithFallback
              src={IMAGES.ceoPortrait}
              alt="David Mabilu, Founder & CEO of Vharanani Properties"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            {/* Name overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="font-inter typo-meta tracking-[0.3em] uppercase mb-1" style={{ color: 'var(--vharanani-burgundy-60)' }}>
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
              Two Decades of Building Africa
            </h3>

            <div className="w-12 h-[3px] mb-6" style={{ background: 'var(--vharanani-burgundy)' }} />

            <p className="font-inter typo-copy mb-6" style={{ color: 'var(--vharanani-charcoal-80)' }}>
              Founded in 2001 by David Mabilu, Vharanani Properties has grown from a small construction company into one of South Africa's leading Black-owned infrastructure and property development firms, delivering projects valued at billions of rands across all nine provinces.
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
      subtitle: 'Turnkey solutions for BRT & Highways',
      icon: <Wrench size={22} />,
      image: IMAGES.roadsCivils,
      span: 'md:col-span-2 md:row-span-2',
      height: 'h-[280px] md:h-full',
    },
    {
      title: 'Water & Sanitation',
      subtitle: 'Large-scale municipal service delivery',
      icon: <Droplets size={22} />,
      image: IMAGES.waterSanitation,
      span: '',
      height: 'h-[220px]',
    },
    {
      title: 'Building Construction',
      subtitle: 'Mining, Education & Healthcare facilities',
      icon: <Building2 size={22} />,
      image: IMAGES.buildingConstruction,
      span: '',
      height: 'h-[220px]',
    },
    {
      title: 'Residential',
      subtitle: 'From RDP to Luxury Estates',
      icon: <Home size={22} />,
      image: IMAGES.residential,
      span: '',
      height: 'h-[220px]',
    },
    {
      title: 'Property Development',
      subtitle: 'Full lifecycle: Land to Construction',
      icon: <Briefcase size={22} />,
      image: IMAGES.propertyDev,
      span: '',
      height: 'h-[220px]',
    },
    {
      title: 'Facilities Management',
      subtitle: 'Long-term operational excellence',
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
              <div className="absolute inset-0 bg-black/50 transition-all duration-500 group-hover:bg-black/70" />

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
      title: 'Lepelle Water Revitalization',
      category: 'Water & Sanitation',
      location: 'Limpopo, South Africa',
      image: IMAGES.waterSanitation,
      specs: 'Bulk water supply programme including pipeline infrastructure and treatment facility upgrades.',
      impact: 'Restored reliable water supply to rural communities, improving health outcomes and quality of life.',
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
      title: 'Mamelodi X5 Housing',
      category: 'Residential',
      location: 'Gauteng, South Africa',
      image: IMAGES.residential,
      specs: 'Large-scale residential housing development providing dignified homes for qualifying families.',
      impact: 'Delivered sustainable human settlements and created local employment during the construction phase.',
    },
  ];

  const current = projects[activeIdx];

  return (
    <SectionWrapper className="!px-0">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-[2px]" style={{ background: 'var(--vharanani-burgundy)' }} />
          <span className="typo-caption tracking-[0.25em] uppercase font-inter" style={{ color: 'var(--vharanani-burgundy)' }}>
            SEC 03 — PROOF OF DELIVERY
          </span>
        </div>
        <h2 className="font-bebas-neue typo-headline-big tracking-wide uppercase mb-10" style={{ color: 'var(--vharanani-charcoal)' }}>
          Featured Projects
        </h2>
      </div>

      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        {/* Active Slide */}
        <div className="relative h-[280px] sm:h-[380px] lg:h-[520px]">
          <ImageWithFallback
            src={current.image}
            alt={current.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

          {/* Slide Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 md:p-10 max-w-full sm:max-w-[75%] lg:max-w-[60%]">
            <div className="inline-block self-start px-2 py-1 mb-3" style={{ background: 'var(--vharanani-burgundy)' }}>
              <span className="font-inter typo-meta text-white tracking-[0.2em] uppercase">{current.category}</span>
            </div>
            <h3 className="font-bebas-neue typo-subline tracking-wide text-white uppercase mb-2">
              {current.title}
            </h3>
            <div className="flex items-center gap-2 mb-4">
              <MapPin size={12} style={{ color: 'rgba(255,255,255,0.5)' }} />
              <span className="font-inter typo-copy-small tracking-wider uppercase" style={{ color: 'rgba(255,255,255,0.5)' }}>
                {current.location}
              </span>
            </div>
            {/* Quick View CTA */}
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 self-start px-5 py-3 transition-all duration-300 hover:gap-3"
              style={{ background: 'var(--vharanani-burgundy)' }}
            >
              <span className="font-bebas-neue typo-headline-small tracking-wider uppercase text-white">Quick View</span>
              <ArrowRight size={14} className="text-white" />
            </button>
          </div>

          {/* Slide counter */}
          <div className="absolute top-4 right-4 px-3 py-1" style={{ background: 'rgba(0,0,0,0.6)' }}>
            <span className="font-bebas-neue typo-headline-small tracking-wider text-white">
              {String(activeIdx + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
            </span>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute bottom-6 right-6 flex items-center gap-2">
            <button
              onClick={() => setActiveIdx(activeIdx === 0 ? projects.length - 1 : activeIdx - 1)}
              className="w-10 h-10 flex items-center justify-center transition-colors duration-200 hover:bg-white/10"
              style={{ border: '1px solid rgba(255,255,255,0.3)', background: 'rgba(0,0,0,0.4)' }}
            >
              <ArrowLeft size={16} className="text-white" />
            </button>
            <button
              onClick={() => setActiveIdx(activeIdx === projects.length - 1 ? 0 : activeIdx + 1)}
              className="w-10 h-10 flex items-center justify-center transition-colors duration-200 hover:bg-white/10"
              style={{ border: '1px solid rgba(255,255,255,0.3)', background: 'rgba(0,0,0,0.4)' }}
            >
              <ArrowRight size={16} className="text-white" />
            </button>
          </div>
        </div>

        {/* Progress dots */}
        <div className="flex items-center gap-2 p-3" style={{ background: 'rgba(0,0,0,0.04)' }}>
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className="h-[3px] flex-1 transition-all duration-300"
              style={{
                background: i === activeIdx ? 'var(--vharanani-burgundy)' : 'var(--vharanani-charcoal-20)',
              }}
            />
          ))}
        </div>
      </div>

      {/* Quick View Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)' }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-[94vw] sm:w-full max-w-2xl max-h-[88vh] sm:max-h-[80vh] overflow-y-auto"
            style={{ background: 'white' }}
          >
            {/* Modal Header */}
            <div className="relative h-[160px] sm:h-[220px]">
              <ImageWithFallback
                src={current.image}
                alt={current.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center hover:bg-white/20 transition-colors"
                style={{ background: 'rgba(0,0,0,0.5)' }}
              >
                <X size={16} className="text-white" />
              </button>
              <div className="absolute bottom-4 left-4">
                <div className="inline-block px-2 py-1 mb-2" style={{ background: 'var(--vharanani-burgundy)' }}>
                  <span className="font-inter typo-meta text-white tracking-[0.2em] uppercase">{current.category}</span>
                </div>
                <h3 className="font-bebas-neue typo-subline tracking-wide text-white uppercase">{current.title}</h3>
              </div>
            </div>
            {/* Modal Body */}
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <MapPin size={14} style={{ color: 'var(--vharanani-burgundy)' }} />
                <span className="font-inter typo-label tracking-wider uppercase" style={{ color: 'var(--vharanani-charcoal-60)' }}>
                  {current.location}
                </span>
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
    { icon: <Award size={28} />, title: 'ISO 9001:2015', subtitle: 'Quality Management Systems', highlight: false },
    { icon: <Shield size={28} />, title: 'B-BBEE Level 1', subtitle: 'Highest Contributor Level', highlight: false },
    { icon: <Building2 size={28} />, title: 'CIDB Grade 9GB', subtitle: 'General Building', highlight: true },
    { icon: <HardHat size={28} />, title: 'CIDB Grade 9CE', subtitle: 'Civil Engineering', highlight: true },
    { icon: <Home size={28} />, title: 'NHBRC', subtitle: 'National Home Builders Registration', highlight: false },
  ];

  return (
    <SectionWrapper>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="typo-caption tracking-[0.3em] uppercase font-inter mb-3" style={{ color: 'var(--vharanani-burgundy)' }}>
            ACCREDITATION & COMPLIANCE
          </div>
          <h2 className="font-bebas-neue typo-headline-big uppercase tracking-wide mb-4" style={{ color: 'var(--vharanani-charcoal)' }}>
            Certified Excellence.
          </h2>
          <div className="w-12 h-[3px] mx-auto" style={{ background: 'var(--vharanani-burgundy)' }} />
        </div>

        {/* Certification Seals Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-[1px]" style={{ background: 'var(--vharanani-charcoal-20)' }}>
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-center justify-center p-6 text-center hover:border-[var(--vharanani-burgundy)] transition-colors duration-200"
              style={{
                background: cert.highlight ? 'rgba(129,41,33,0.04)' : 'white',
                borderBottom: cert.highlight ? '3px solid var(--vharanani-burgundy)' : '3px solid transparent',
              }}
            >
              <div
                className="w-16 h-16 flex items-center justify-center mb-3"
                style={{
                  border: cert.highlight ? '2px solid var(--vharanani-burgundy)' : '2px solid var(--vharanani-charcoal-20)',
                  color: cert.highlight ? 'var(--vharanani-burgundy)' : 'var(--vharanani-charcoal-60)',
                }}
              >
                {cert.icon}
              </div>
              <h4 className="font-bebas-neue typo-headline-small tracking-wide uppercase" style={{ color: 'var(--vharanani-charcoal)' }}>
                {cert.title}
              </h4>
              <div className="font-inter typo-meta tracking-wider uppercase mt-1" style={{ color: 'var(--vharanani-charcoal-60)' }}>
                {cert.subtitle}
              </div>
              {cert.highlight && (
                <div className="mt-2 px-2 py-0.5" style={{ background: 'var(--vharanani-burgundy)' }}>
                  <span className="font-inter typo-meta text-white tracking-[0.15em] uppercase">Highest Grade</span>
                </div>
              )}
            </motion.div>
          ))}
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
    { icon: <Users size={22} />, label: 'Employment', value: 1000, suffix: 's+', description: 'Jobs created across construction sites nationally' },
    { icon: <GraduationCap size={22} />, label: 'Skills Development', value: 500, suffix: '+', description: 'Training and upskilling programmes delivered' },
    { icon: <Home size={22} />, label: 'Settlements', value: 9, suffix: '', description: 'Provinces with dignified housing developments' },
  ];

  return (
    <SectionWrapper>
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-8 h-[2px]" style={{ background: 'var(--vharanani-burgundy)' }} />
          <span className="typo-caption tracking-[0.25em] uppercase font-inter" style={{ color: 'var(--vharanani-burgundy)' }}>
            SEC 04 — VALUES & IMPACT
          </span>
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

        {/* Impact Infographic Strip */}
        <div className="overflow-hidden" style={{ border: '1px solid var(--vharanani-charcoal-20)' }}>
          <div className="relative p-6 text-center overflow-hidden" style={{ background: '#812921', borderBottom: '3px solid rgba(255,255,255,0.3)' }}>
            <ImageWithFallback
              src={IMAGES.values}
              alt="Vharanani Properties team and values"
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            />
            <div className="relative z-10">
              <h3 className="font-bebas-neue typo-subline tracking-wide uppercase text-white">Our Impact</h3>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-[1px]" style={{ background: 'var(--vharanani-charcoal-20)' }}>
            {impacts.map((item, i) => (
              <div key={i} className="p-6 text-center" style={{ background: '#fafafa' }}>
                <div className="w-12 h-12 mx-auto flex items-center justify-center mb-3" style={{ color: 'var(--vharanani-burgundy)', background: 'rgba(129,41,33,0.06)' }}>
                  {item.icon}
                </div>
                <AnimatedCounter target={item.value} suffix={item.suffix} />
                <h4 className="font-bebas-neue typo-headline-small tracking-wide uppercase mb-1" style={{ color: 'var(--vharanani-charcoal)' }}>
                  {item.label}
                </h4>
                <p className="font-inter typo-meta" style={{ color: 'var(--vharanani-charcoal-60)' }}>
                  {item.description}
                </p>
              </div>
            ))}
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
      address: 'Johannesburg, Gauteng, South Africa',
      phone: '+27 (0) 11 XXX XXXX',
      email: 'info@vharanani.com',
    },
    polokwane: {
      name: 'Polokwane Office',
      city: 'Polokwane',
      address: 'Polokwane, Limpopo, South Africa',
      phone: '+27 (0) 15 XXX XXXX',
      email: 'polokwane@vharanani.com',
    },
  };

  const current = offices[activeTab];

  return (
    <SectionWrapper dark>
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-8 h-[2px]" style={{ background: 'var(--vharanani-burgundy)' }} />
          <span className="typo-caption tracking-[0.25em] uppercase font-inter" style={{ color: 'var(--vharanani-burgundy)' }}>
            SEC 05 — CONNECT
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
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
                  <div className="w-4 h-4 animate-ping absolute" style={{ background: 'var(--vharanani-burgundy)', opacity: 0.4 }} />
                  <div className="w-4 h-4 relative z-10" style={{ background: 'var(--vharanani-burgundy)' }} />
                  <div className="absolute top-5 left-5 whitespace-nowrap px-2 py-1" style={{ background: 'rgba(0,0,0,0.7)' }}>
                    <span className="font-inter typo-meta text-white tracking-wider uppercase">Johannesburg (HQ)</span>
                  </div>
                </div>
              </div>
              {/* Polokwane pin */}
              <div className="absolute" style={{ top: '38%', left: '56%' }}>
                <div className="relative">
                  <div className="w-3 h-3 animate-ping absolute" style={{ background: 'var(--vharanani-burgundy-60)', opacity: 0.3 }} />
                  <div className="w-3 h-3 relative z-10" style={{ background: 'var(--vharanani-burgundy-60)' }} />
                  <div className="absolute top-4 left-4 whitespace-nowrap px-2 py-1" style={{ background: 'rgba(0,0,0,0.7)' }}>
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
              <p className="font-inter typo-copy-small mt-1" style={{ color: 'rgba(255,255,255,0.5)' }}>
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
                  style={{ border: '1px solid var(--vharanani-charcoal-20)', background: 'rgba(0,0,0,0.02)' }}
                />
                <input
                  type="text"
                  placeholder="Company"
                  className="w-full px-4 py-3 font-inter typo-copy-small text-base outline-none transition-colors duration-200 focus:border-[var(--vharanani-burgundy)]"
                  style={{ border: '1px solid var(--vharanani-charcoal-20)', background: 'rgba(0,0,0,0.02)' }}
                />
                <select
                  className="w-full px-4 py-3 font-inter typo-copy-small text-base outline-none focus:outline-none transition-colors duration-200 focus:border-[var(--vharanani-burgundy)]"
                  style={{ border: '1px solid var(--vharanani-charcoal-20)', background: 'rgba(0,0,0,0.02)', color: 'var(--vharanani-charcoal-60)' }}
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
                  style={{ border: '1px solid var(--vharanani-charcoal-20)', background: 'rgba(0,0,0,0.02)' }}
                />
                <button
                  onClick={() => { window.location.href = 'mailto:info@vharanani.com?subject=Project%20Enquiry'; }}
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
