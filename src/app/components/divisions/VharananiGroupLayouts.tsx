import { useState, useEffect, useRef, type ReactNode } from 'react';
import { useInView } from '../../hooks/useInView';
import { motion } from 'motion/react';
import {
  Building2, Landmark, Heart, HardHat, Cpu, Shield, Layers, Globe,
  Sprout, Route, TrendingUp, Users, Gavel, FileCheck, Scale, Eye,
  Linkedin, Twitter, Facebook, MapPin, Phone, Mail,
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
// SECTION WRAPPER — consistent padding + animation
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
// IMAGES — Unsplash photography
// ═══════════════════════════════════════════════════════════

const IMAGES = {
  headquarters: 'https://images.unsplash.com/photo-1726056295062-bc43f12e11f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwY29ycG9yYXRlJTIwc2t5bGluZSUyMG1vZGVybiUyMGdsYXNzJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzczNzQ3NDE4fDA&ixlib=rb-4.1.0&q=80&w=1080',
  headquartersSecondary: 'https://images.unsplash.com/photo-1585484147302-3ab2f01f9f52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTb3V0aCUyMEFmcmljYSUyMGluZnJhc3RydWN0dXJlJTIwY29uc3RydWN0aW9uJTIwYWVyaWFsJTIwaGlnaHdheXxlbnwxfHx8fDE3NzM3NDc0MTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
  headquartersTertiary: 'https://images.unsplash.com/photo-1758691736975-9f7f643d178e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0ZWFtJTIwZGl2ZXJzZSUyMHByb2Zlc3Npb25hbCUyMG9mZmljZXxlbnwxfHx8fDE3NzM3NDc0MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  portfolio: 'https://images.unsplash.com/photo-1653378972336-103e1ea62721?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwaW52ZXN0bWVudCUyMHBvcnRmb2xpbyUyMGJ1c2luZXNzJTIwc3RyYXRlZ3l8ZW58MXx8fHwxNzczMDU2MzM0fDA&ixlib=rb-4.1.0&q=80&w=1080',
  pillars: 'https://images.unsplash.com/photo-1769738360873-3ba6cac0b308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm93dGglMjBwaWxsYXJzJTIwY29ycG9yYXRlJTIwcGxhbm5pbmclMjB3aGl0ZWJvYXJkfGVufDF8fHx8MTc3MzA1NjMzOHww&ixlib=rb-4.1.0&q=80&w=1080',
  leadership: 'https://ik.imagekit.io/qcvroy8xpd/image%202.png',
  impact: 'https://images.unsplash.com/photo-1658129850537-ea7517a9682f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBpbXBhY3QlMjBjb21tdW5pdHklMjBkZXZlbG9wbWVudCUyMEFmcmljYXxlbnwxfHx8fDE3NzMwNTYzMzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
  visionMission: 'https://images.unsplash.com/photo-1656646424292-cf207f3f1749?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB2aXNpb24lMjBtaXNzaW9uJTIwc3RhdGVtZW50JTIwYm9hcmRyb29tfGVufDF8fHx8MTc3MzA1NjMzNXww&ixlib=rb-4.1.0&q=80&w=1080',
  governance: 'https://images.unsplash.com/photo-1556219845-95c1847629e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBnb3Zlcm5hbmNlJTIwYW5udWFsJTIwcmVwb3J0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MzA1NTkxM3ww&ixlib=rb-4.1.0&q=80&w=1080',
  companies: 'https://images.unsplash.com/photo-1682924754699-dcf11b641343?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGluZnJhc3RydWN0dXJlJTIwZGV2ZWxvcG1lbnQlMjBBZnJpY2ElMjByb2Fkc3xlbnwxfHx8fDE3NzMwNTYzMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  news: 'https://images.unsplash.com/photo-1766740606233-6573571caa6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXdzJTIwbWVkaWElMjB1cGRhdGUlMjBjb3Jwb3JhdGUlMjBvZmZpY2V8ZW58MXx8fHwxNzczMDU2MzQyfDA&ixlib=rb-4.1.0&q=80&w=1080',
  construction: 'https://images.unsplash.com/photo-1764222233275-87dc016c11dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwcm9wZXJ0eSUyMGRldmVsb3BtZW50JTIwYWVyaWFsfGVufDF8fHx8MTc3MjczNDk4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
  foundation: 'https://images.unsplash.com/photo-1694286068274-1058e6b04dcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY2hhcml0eSUyMGZvdW5kYXRpb24lMjBjb21tdW5pdHl8ZW58MXx8fHwxNzcyNzM0OTg2fDA&ixlib=rb-4.1.0&q=80&w=1080',
  dmft: 'https://images.unsplash.com/photo-1707410148802-fe08fe956398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBkZXZlbG9wbWVudCUyMGluZnJhc3RydWN0dXJlJTIwc291dGglMjBhZnJpY2F8ZW58MXx8fHwxNzcyNzM0OTg3fDA&ixlib=rb-4.1.0&q=80&w=1080',
};


// ═══════════════════════════════════════════════════════════
// SECTION 1: EXECUTIVE SUMMARY — "Who We Are"
// Full-width split layout: image left, narrative right
// ═══════════════════════════════════════════════════════════

export function GroupWireframe_ExecutiveSummary(): ReactNode {
  const milestones = [
    { year: '2001', event: 'Founded as a construction enterprise in Limpopo' },
    { year: '2008', event: 'Achieved CIDB Grade 9 — the highest grading in SA' },
    { year: '2015', event: 'Launched the David Mabilu Foundation for social impact' },
    { year: '2020', event: 'Expanded into property development and strategic investments' },
  ];

  return (
    <SectionWrapper className="!py-0 !px-0">
      {/* ── HERO IMAGE BAND ── */}
      <div className="relative h-[55vh] min-h-[420px] overflow-hidden">
        <ImageWithFallback
          src={IMAGES.headquarters}
          alt="Vharanani Group Corporate Headquarters"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.95) 100%)'
        }} />
        <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: 'var(--vharanani-burgundy)' }} />

        <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-12 lg:px-20 pb-12 max-w-7xl mx-auto w-full">
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="w-8 h-[2px]" style={{ background: 'rgba(255,255,255,0.5)' }} />
            <span className="typo-caption tracking-[0.25em] uppercase font-inter" style={{ color: 'rgba(255,255,255,0.7)' }}>
              INTELLIGENCE
            </span>
          </motion.div>
          <motion.h2
            className="typo-header font-bebas-neue uppercase tracking-wide text-white mb-3"
            style={{ lineHeight: 0.95 }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Building Africa's<br />Future
          </motion.h2>
          <motion.div
            className="flex items-center gap-4 mt-2"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="typo-caption tracking-[0.2em] uppercase px-3 py-1 font-inter" style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', color: 'white' }}>
              EST. 2001
            </div>
            <span className="typo-caption tracking-[0.15em] uppercase font-inter text-white/85">
              Polokwane, Limpopo — South Africa
            </span>
          </motion.div>
        </div>
      </div>

      {/* ── MAIN CONTENT GRID ── */}
      <div className="px-6 md:px-12 lg:px-20 py-10 md:py-14" style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
            {/* Left — Large statement */}
            <div className="lg:col-span-5">
              <div className="w-12 h-[3px] mb-8" style={{ background: 'var(--vharanani-burgundy)' }} />
              <blockquote className="typo-subline font-bebas-neue uppercase tracking-wide mb-8" style={{ color: 'var(--vharanani-charcoal)', lineHeight: 1.2 }}>
                A wholly Black-owned investment holding company driving infrastructure, property development, innovation, and social impact across South Africa.
              </blockquote>
              <p className="typo-copy-small font-inter italic pl-5" style={{ borderLeft: '2px solid var(--vharanani-burgundy)', color: 'var(--vharanani-charcoal-60)' }}>
                "We build not just structures, but the architecture of opportunity for generations to come."
              </p>
            </div>

            {/* Right — Narrative */}
            <div className="lg:col-span-7">
              <p className="typo-copy font-inter mb-6" style={{ color: 'var(--vharanani-charcoal-80)' }}>
                Vharanani Group is an innovation-driven African conglomerate founded and led by David Mabilu. With a diversified portfolio spanning construction, property development, mining, technology, aviation, and philanthropy, the Group is committed to building sustainable enterprises that contribute to economic transformation and long-term infrastructure development.
              </p>
              <p className="typo-copy font-inter mb-8" style={{ color: 'var(--vharanani-charcoal-60)' }}>
                We operate with a clear mandate: to build assets that strengthen communities, enable economic participation, and support Africa's growth trajectory.
              </p>

              {/* Two-image mosaic */}
              <div className="grid grid-cols-2 gap-3">
                <div className="relative h-[180px] overflow-hidden">
                  <ImageWithFallback
                    src={IMAGES.headquartersSecondary}
                    alt="Vharanani infrastructure projects"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.6) 100%)' }} />
                  <div className="absolute bottom-3 left-3">
                    <span className="typo-meta tracking-[0.15em] uppercase font-inter text-white/80">Infrastructure</span>
                  </div>
                </div>
                <div className="relative h-[180px] overflow-hidden">
                  <ImageWithFallback
                    src={IMAGES.headquartersTertiary}
                    alt="Vharanani corporate team"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.6) 100%)' }} />
                  <div className="absolute bottom-3 left-3">
                    <span className="typo-meta tracking-[0.15em] uppercase font-inter text-white/80">Our People</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── STATS BAR ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0" style={{ background: '#812921' }}>
            {[
              { value: 20, suffix: '+', label: 'Years of Impact' },
              { value: 4, suffix: '', label: 'Operating Divisions' },
              { value: 500, suffix: '+', label: 'Projects Delivered' },
              { value: 5, suffix: '', label: 'Provinces Reached' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="p-6 md:p-8 text-center"
                style={{
                  borderRight: i < 3 ? '1px solid rgba(255,255,255,0.2)' : 'none',
                  borderBottom: '1px solid rgba(255,255,255,0.2)',
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <AnimatedCounter target={stat.value} suffix={stat.suffix} color="white" />
                <div className="typo-caption tracking-[0.15em] uppercase font-inter mt-2" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── TIMELINE STRIP ── */}
          <div className="mt-0" style={{ background: 'var(--vharanani-burgundy)' }}>
            {/* Connecting line */}
            <div className="relative hidden md:block">
              <div className="absolute top-[52px] left-[12.5%] right-[12.5%] h-[1px]" style={{ background: 'rgba(255,255,255,0.25)' }}>
                <motion.div
                  className="absolute inset-y-0 left-0 origin-left"
                  style={{ background: 'rgba(255,255,255,0.6)', opacity: 0.6 }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="p-6 md:p-8 relative"
                  style={{
                    borderRight: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                  }}
                >
                  {/* Timeline dot */}
                  <motion.div
                    className="hidden md:flex w-3 h-3 mb-4 relative"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.12 + 0.2, type: 'spring', stiffness: 400 }}
                  >
                    <div className="w-3 h-3 rounded-full" style={{ background: 'white' }} />
                    <div className="absolute inset-0 rounded-full animate-ping" style={{ background: 'white', opacity: 0.3 }} />
                  </motion.div>
                  <div className="typo-headline-big font-bebas-neue mb-2" style={{ color: 'white' }}>
                    {m.year}
                  </div>
                  <div className="w-6 h-[1px] mb-3" style={{ background: 'rgba(255,255,255,0.35)' }} />
                  <p className="typo-copy-small font-inter" style={{ color: 'rgba(255,255,255,0.85)' }}>
                    {m.event}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}


// ═══════════════════════════════════════════════════════════
// SECTION 2: PORTFOLIO GRID — Bento Layout
// ═══════════════════════════════════════════════════════════

export function GroupWireframe_PortfolioGrid(): ReactNode {
  const IMAGES = {
    construction: 'https://i0.wp.com/vharananiproperties.co.za/wp-content/uploads/2021/07/DJI_0673-scaled.jpg?w=1440&ssl=1',
    foundation: 'https://i0.wp.com/vharananiproperties.co.za/wp-content/uploads/2020/08/rsz_dsc_0127.jpg?w=1080&ssl=1',
    dmft: 'https://i0.wp.com/vharananiproperties.co.za/wp-content/uploads/2020/08/rsz_faranani-estate-1-1.jpg?w=1080&ssl=1',
  };

  const bentoItems = [
    {
      id: 'properties',
      title: 'Vharanani Properties',
      tag: 'CONSTRUCTION & INFRASTRUCTURE',
      icon: <Building2 size={18} />,
      image: IMAGES.construction,
      description: 'Delivering large-scale civil engineering and infrastructure projects that improve quality of life and restore dignity to communities.',
      stats: [{ value: '200+', label: 'Projects' }, { value: 'Grade 9', label: 'CIDB' }],
      capabilities: ['Roads & Highways', 'Water & Sanitation', 'Public Buildings'],
      size: 'large', // spans 2 cols, 2 rows
    },
    {
      id: 'dmft',
      title: 'DMFT Property Developers',
      tag: 'PROPERTY DEVELOPMENT',
      icon: <Home size={18} />,
      image: IMAGES.dmft,
      description: 'Delivering high-quality residential and mixed-use developments as part of the Vharanani Group.',
      stats: [{ value: '15+', label: 'Developments' }, { value: 'R2B+', label: 'Portfolio' }],
      capabilities: ['Residential Estates', 'Mixed-Use Precincts'],
      size: 'medium',
    },
    {
      id: 'foundation',
      title: 'The David Mabilu Foundation',
      tag: 'SOCIAL IMPACT',
      icon: <Landmark size={18} />,
      image: IMAGES.foundation,
      description: 'Advancing education, housing access, and community upliftment across South Africa.',
      stats: [{ value: '34', label: 'Scholarships' }, { value: '5+', label: 'Provinces' }],
      capabilities: ['Education', 'Housing', 'Community Upliftment'],
      size: 'medium',
    },
  ];

  const metrics = [
    { value: 'R5B+', label: 'Portfolio Value' },
    { value: '20+', label: 'Years' },
    { value: '3', label: 'Divisions' },
    { value: '9', label: 'Provinces' },
  ];

  return (
    <SectionWrapper dark className="!py-0 !px-0">
      <div className="px-6 md:px-12 lg:px-20 pt-10 md:pt-14 pb-10 md:pb-14" style={{ background: '#0a0a0a' }}>
        <div className="max-w-7xl mx-auto">

          {/* ── HEADER ── */}
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[2px]" style={{ background: 'var(--vharanani-burgundy)' }} />
                <span className="typo-caption tracking-[0.25em] uppercase font-inter" style={{ color: 'var(--vharanani-burgundy)' }}>
                  HOLDINGS
                </span>
              </div>
              <h2 className="typo-header font-bebas-neue uppercase tracking-wide text-white" style={{ lineHeight: 0.95 }}>
                Our Portfolio
              </h2>
            </div>
            <p className="hidden lg:block typo-copy-small font-inter max-w-xs text-right" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Three divisions working in concert to deliver infrastructure, property, and social impact across South Africa.
            </p>
          </div>

          {/* ── BENTO GRID ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">

            {/* LARGE CELL — Vharanani Properties (spans 7 cols, 2 rows) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 lg:row-span-2 relative overflow-hidden group"
              style={{ minHeight: '520px', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <ImageWithFallback
                src={bentoItems[0].image}
                alt={bentoItems[0].title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.88) 100%)' }} />

              {/* Tag top-left */}
              <div className="absolute top-6 left-6 flex items-center gap-2">
                <div className="w-7 h-7 flex items-center justify-center" style={{ border: '1px solid rgba(255,255,255,0.3)', color: 'white' }}>
                  {bentoItems[0].icon}
                </div>
                <span className="typo-meta tracking-[0.18em] uppercase font-inter" style={{ color: 'rgba(255,255,255,0.7)' }}>{bentoItems[0].tag}</span>
              </div>

              {/* Ghost number */}
              <div className="absolute top-4 right-6">
                <span className="font-bebas-neue" style={{ fontSize: '120px', lineHeight: 1, color: 'rgba(255,255,255,0.04)' }}>01</span>
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="typo-headline-big font-bebas-neue uppercase tracking-wide text-white mb-3">
                  {bentoItems[0].title}
                </h3>
                <p className="typo-copy-small font-inter mb-6" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  {bentoItems[0].description}
                </p>
                {/* Stats + capabilities */}
                <div className="flex items-center gap-0" style={{ border: '1px solid rgba(255,255,255,0.12)' }}>
                  {bentoItems[0].stats.map((s, i) => (
                    <div key={s.label} className="flex-1 py-3 px-4 text-center" style={{ borderRight: i < bentoItems[0].stats.length - 1 ? '1px solid rgba(255,255,255,0.12)' : 'none' }}>
                      <div className="font-bebas-neue typo-subline text-white">{s.value}</div>
                      <div className="typo-meta tracking-[0.1em] uppercase font-inter mt-0.5" style={{ color: 'rgba(255,255,255,0.5)' }}>{s.label}</div>
                    </div>
                  ))}
                  <div className="flex-1 py-3 px-4" style={{ borderLeft: '1px solid rgba(255,255,255,0.12)' }}>
                    <div className="flex flex-wrap gap-1">
                      {bentoItems[0].capabilities.map(cap => (
                        <span key={cap} className="typo-meta font-inter px-1.5 py-0.5" style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.6)', fontSize: '10px' }}>{cap}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* MEDIUM CELL — DMFT (spans 5 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-5 relative overflow-hidden group"
              style={{ minHeight: '250px', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <ImageWithFallback
                src={bentoItems[1].image}
                alt={bentoItems[1].title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.75) 100%)' }} />

              <div className="absolute top-5 left-5 flex items-center gap-2">
                <div className="w-7 h-7 flex items-center justify-center" style={{ border: '1px solid rgba(255,255,255,0.3)', color: 'white' }}>
                  {bentoItems[1].icon}
                </div>
                <span className="typo-meta tracking-[0.15em] uppercase font-inter" style={{ color: 'rgba(255,255,255,0.7)' }}>{bentoItems[1].tag}</span>
              </div>

              <div className="absolute top-4 right-5">
                <span className="font-bebas-neue" style={{ fontSize: '80px', lineHeight: 1, color: 'rgba(255,255,255,0.05)' }}>02</span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="typo-subline font-bebas-neue uppercase tracking-wide text-white mb-2">{bentoItems[1].title}</h3>
                <p className="typo-copy-small font-inter mb-4" style={{ color: 'rgba(255,255,255,0.65)' }}>{bentoItems[1].description}</p>
                <div className="flex items-center gap-3">
                  {bentoItems[1].stats.map((s) => (
                    <div key={s.label} className="px-3 py-1.5 text-center" style={{ border: '1px solid rgba(255,255,255,0.15)' }}>
                      <span className="font-bebas-neue typo-headline-small text-white">{s.value}</span>
                      <span className="typo-meta font-inter ml-2" style={{ color: 'rgba(255,255,255,0.5)' }}>{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* MEDIUM CELL — Foundation (spans 5 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 relative overflow-hidden group"
              style={{ minHeight: '250px', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <ImageWithFallback
                src={bentoItems[2].image}
                alt={bentoItems[2].title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.75) 100%)' }} />

              <div className="absolute top-5 left-5 flex items-center gap-2">
                <div className="w-7 h-7 flex items-center justify-center" style={{ border: '1px solid rgba(255,255,255,0.3)', color: 'white' }}>
                  {bentoItems[2].icon}
                </div>
                <span className="typo-meta tracking-[0.15em] uppercase font-inter" style={{ color: 'rgba(255,255,255,0.7)' }}>{bentoItems[2].tag}</span>
              </div>

              <div className="absolute top-4 right-5">
                <span className="font-bebas-neue" style={{ fontSize: '80px', lineHeight: 1, color: 'rgba(255,255,255,0.05)' }}>03</span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="typo-subline font-bebas-neue uppercase tracking-wide text-white mb-2">{bentoItems[2].title}</h3>
                <p className="typo-copy-small font-inter mb-4" style={{ color: 'rgba(255,255,255,0.65)' }}>{bentoItems[2].description}</p>
                <div className="flex items-center gap-3">
                  {bentoItems[2].stats.map((s) => (
                    <div key={s.label} className="px-3 py-1.5 text-center" style={{ border: '1px solid rgba(255,255,255,0.15)' }}>
                      <span className="font-bebas-neue typo-headline-small text-white">{s.value}</span>
                      <span className="typo-meta font-inter ml-2" style={{ color: 'rgba(255,255,255,0.5)' }}>{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* METRICS STRIP — full width */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-0"
              style={{ border: '1px solid rgba(255,255,255,0.08)' }}
            >
              {metrics.map((m, i) => (
                <div
                  key={m.label}
                  className="py-6 px-8 text-center"
                  style={{ borderRight: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none', background: 'rgba(255,255,255,0.02)' }}
                >
                  <div className="typo-headline-big font-bebas-neue" style={{ color: 'var(--vharanani-burgundy)' }}>{m.value}</div>
                  <div className="typo-meta tracking-[0.15em] uppercase font-inter mt-1" style={{ color: 'rgba(255,255,255,0.45)' }}>{m.label}</div>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}


// ═══════════════════════════════════════════════════════════
// SECTION 3: STRATEGIC PILLARS
// 4-column pillar cards with step numbers
// ═══════════════════════════════════════════════════════════

export function GroupWireframe_StrategicPillars(): ReactNode {
  const PILLAR_IMAGES = {
    infrastructure: 'https://images.unsplash.com/photo-1750580037263-1b012684fb44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdod2F5JTIwYnJpZGdlJTIwY29uc3RydWN0aW9uJTIwU291dGglMjBBZnJpY2ElMjBpbmZyYXN0cnVjdHVyZXxlbnwxfHx8fDE3NzM3NDg3NTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    assets: 'https://images.unsplash.com/photo-1769697694222-016642c08125?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb21tZXJjaWFsJTIwcHJvcGVydHklMjBpbnZlc3RtZW50JTIwcmVhbCUyMGVzdGF0ZXxlbnwxfHx8fDE3NzM3NDg3NTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    innovation: 'https://images.unsplash.com/photo-1759836096317-e746643cc277?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbiUyMGRpZ2l0YWwlMjB0cmFuc2Zvcm1hdGlvbiUyMHNlcnZlcnxlbnwxfHx8fDE3NzM3NDg3NTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    social: 'https://images.unsplash.com/photo-1761039808115-77b271985e47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwY29tbXVuaXR5JTIwZW1wb3dlcm1lbnQlMjBzb2NpYWwlMjB1cGxpZnRtZW50JTIweW91dGh8ZW58MXx8fHwxNzczNzQ4NzU0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    panorama: 'https://images.unsplash.com/photo-1765475467677-579353b25ce0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJpYWwlMjB2aWV3JTIwQWZyaWNhbiUyMGNpdHklMjB1cmJhbiUyMHBsYW5uaW5nJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc3Mzc0ODc1NXww&ixlib=rb-4.1.0&q=80&w=1080',
  };

  const pillars = [
    {
      icon: <HardHat size={22} />,
      title: 'Infrastructure',
      step: '01',
      image: PILLAR_IMAGES.infrastructure,
      headline: 'Building the Backbone of Progress',
      description: 'Building roads, bridges, clinics, schools, and essential services that support national growth and community development.',
      capabilities: ['Roads & Highways', 'Bridges & Culverts', 'Public Facilities', 'Water Infrastructure'],
      metric: { value: '200+', label: 'Projects Delivered' },
    },
    {
      icon: <Landmark size={22} />,
      title: 'Asset Ownership',
      step: '02',
      image: PILLAR_IMAGES.assets,
      headline: 'Long-Term Value Creation',
      description: 'Developing and managing property assets that generate sustainable economic value and build lasting equity for future generations.',
      capabilities: ['Commercial Property', 'Residential Estates', 'Industrial Assets', 'Land Banking'],
      metric: { value: 'R5B+', label: 'Asset Portfolio' },
    },
    {
      icon: <Cpu size={22} />,
      title: 'Innovation',
      step: '03',
      image: PILLAR_IMAGES.innovation,
      headline: 'Pioneering New Frontiers',
      description: 'Exploring growth opportunities across technology, aviation, and resource-driven industries.',
      capabilities: ['Digital Solutions', 'Aviation Services', 'Resource Management', 'Smart Infrastructure'],
      metric: { value: '4', label: 'Emerging Sectors' },
    },
    {
      icon: <Heart size={22} />,
      title: 'Social Impact',
      step: '04',
      image: PILLAR_IMAGES.social,
      headline: 'Empowering Communities',
      description: 'Investing in people, education, and entrepreneurial development to ensure inclusive and sustainable progress.',
      capabilities: ['Education Bursaries', 'Skills Training', 'Housing Programmes', 'Health Initiatives'],
      metric: { value: '50K+', label: 'Lives Impacted' },
    },
  ];

  return (
    <SectionWrapper className="!py-0 !px-0">
      {/* ── CINEMATIC HEADER BAND ── */}
      <div className="relative h-[40vh] min-h-[340px] overflow-hidden">
        <ImageWithFallback
          src={PILLAR_IMAGES.panorama}
          alt="Strategic growth across Africa"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.98) 100%)'
        }} />
        <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: 'var(--vharanani-burgundy)' }} />

        <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-12 lg:px-20 pb-12">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-[2px]" style={{ background: 'var(--vharanani-burgundy)' }} />
                  <span className="typo-caption tracking-[0.25em] uppercase font-inter" style={{ color: 'var(--vharanani-burgundy-60)' }}>
                    STRATEGY
                  </span>
                </div>
                <h2 className="typo-header font-bebas-neue uppercase tracking-wide text-white" style={{ lineHeight: 0.95 }}>
                  Strategic<br />Pillars
                </h2>
              </div>
              <div className="lg:col-span-5">
                <p className="typo-copy font-inter text-white/50">
                  Four interconnected pillars that define our growth trajectory — each reinforcing the others to create a resilient, diversified platform for sustainable value creation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── PILLAR CARDS — Alternating layout ── */}
      <div style={{ background: '#ffffff' }}>
        {pillars.map((pillar, i) => {
          const isEven = i % 2 === 0;
          return (
            <motion.div
              key={pillar.step}
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
                    <motion.div
                      className="absolute inset-0"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                    <ImageWithFallback
                      src={pillar.image}
                      alt={pillar.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    </motion.div>
                    <div className="absolute inset-0" style={{
                      background: isEven
                        ? 'linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.5) 100%)'
                        : 'linear-gradient(225deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.5) 100%)'
                    }} />
                    {/* Large ghost step number */}
                    <div className="absolute top-4 left-6">
                      <span className="font-bebas-neue" style={{ fontSize: '120px', lineHeight: 1, color: 'rgba(255,255,255,0.07)' }}>
                        {pillar.step}
                      </span>
                    </div>
                    {/* Bottom metric overlay */}
                    <div className="absolute bottom-0 left-0 right-0 px-6 py-4" style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }}>
                      <div className="flex items-center gap-4">
                        <div className="typo-headline-big font-bebas-neue" style={{ color: 'var(--vharanani-burgundy)' }}>
                          {pillar.metric.value}
                        </div>
                        <div className="typo-caption tracking-[0.15em] uppercase font-inter text-white/50">
                          {pillar.metric.label}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content side */}
                  <div className={`lg:col-span-7 p-8 md:p-12 flex flex-col justify-center ${isEven ? '' : 'lg:order-1'}`} style={{ background: i % 2 === 0 ? '#ffffff' : '#fafafa' }}>
                    {/* Icon + tag row */}
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 flex items-center justify-center" style={{ border: '1.5px solid var(--vharanani-burgundy)', color: 'var(--vharanani-burgundy)' }}>
                        {pillar.icon}
                      </div>
                      <div>
                        <span className="typo-caption tracking-[0.2em] uppercase font-inter" style={{ color: 'var(--vharanani-burgundy)' }}>
                          PILLAR {pillar.step}
                        </span>
                      </div>
                      {/* Horizontal line */}
                      <div className="flex-1 h-[1px] ml-2" style={{ background: 'var(--vharanani-charcoal-20)' }} />
                    </div>

                    <h3 className="typo-headline-big font-bebas-neue uppercase tracking-wide mb-2" style={{ color: 'var(--vharanani-charcoal)' }}>
                      {pillar.title}
                    </h3>
                    <p className="typo-subline font-bebas-neue uppercase tracking-wide mb-5" style={{ color: 'var(--vharanani-burgundy)', lineHeight: 1.2 }}>
                      {pillar.headline}
                    </p>
                    <p className="typo-copy font-inter mb-8" style={{ color: 'var(--vharanani-charcoal-60)' }}>
                      {pillar.description}
                    </p>

                    {/* Capabilities grid */}
                    <div className="grid grid-cols-2 gap-0" style={{ border: '1px solid var(--vharanani-charcoal-20)' }}>
                      {pillar.capabilities.map((cap, ci) => (
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

      {/* ── CLOSING SUMMARY BAND ── */}
      <div className="relative overflow-hidden" style={{ background: 'var(--vharanani-burgundy)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 py-12" style={{ borderTop: '1px solid rgba(255,255,255,0.2)' }}>
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.step + '-summary'}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 text-center"
                style={{ borderRight: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}
              >
                <div className="w-10 h-10 mx-auto mb-3 flex items-center justify-center" style={{ border: '1px solid rgba(255,255,255,0.4)', color: 'white' }}>
                  {pillar.icon}
                </div>
                <div className="typo-headline-small font-bebas-neue uppercase tracking-wide text-white mb-1">
                  {pillar.title}
                </div>
                <div className="typo-headline-big font-bebas-neue text-white">
                  {pillar.metric.value}
                </div>
                <div className="typo-meta tracking-[0.1em] uppercase font-inter text-white/60 mt-1">
                  {pillar.metric.label}
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
// SECTION 4: LEADERSHIP
// Founder profile + executive team grid
// ═══════════════════════════════════════════════════════════

export function GroupWireframe_Leadership(): ReactNode {
  const executives = [
    { name: 'Chief Operating Officer', role: 'Operations & Delivery', initial: 'CO' },
    { name: 'Chief Financial Officer', role: 'Finance & Governance', initial: 'CF' },
    { name: 'Group Legal Counsel', role: 'Legal & Compliance', initial: 'GL' },
    { name: 'Head of Development', role: 'Strategy & Growth', initial: 'HD' },
  ];

  return (
    <SectionWrapper>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-[2px]" style={{ background: 'var(--vharanani-burgundy)' }} />
          <span className="typo-caption tracking-[0.25em] uppercase font-inter" style={{ color: 'var(--vharanani-burgundy)' }}>
            PEOPLE
          </span>
        </div>
        <p className="typo-meta tracking-[0.25em] uppercase font-inter mb-2" style={{ color: 'var(--vharanani-burgundy)' }}>LEADERSHIP</p>
        <h2 className="typo-headline-big font-bebas-neue uppercase tracking-wide mb-8" style={{ color: 'var(--vharanani-charcoal)' }}>
          Leadership
        </h2>

        {/* Founder spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 mb-8" style={{ border: '1px solid var(--vharanani-charcoal-20)' }}>
          <div className="lg:col-span-2 relative h-[360px] lg:h-auto overflow-hidden flex items-center justify-center" style={{ background: '#f5f0ef' }}>
            <ImageWithFallback
              src={IMAGES.leadership}
              alt="Executive Leadership"
              className="w-full h-full object-contain object-center"
            />
          </div>
          <div className="lg:col-span-3 p-8 md:p-12 flex flex-col justify-center" style={{ background: '#fafafa' }}>
            <div className="typo-caption tracking-[0.2em] uppercase font-inter mb-4" style={{ color: 'var(--vharanani-burgundy)' }}>
              FOUNDER & GROUP EXECUTIVE CHAIRMAN
            </div>
            <h3 className="typo-headline-big font-bebas-neue uppercase tracking-wide mb-4" style={{ color: 'var(--vharanani-charcoal)' }}>
              David Mabilu
            </h3>
            <div className="w-10 h-[2px] mb-6" style={{ background: 'var(--vharanani-burgundy)' }} />
            <p className="typo-copy font-inter mb-4" style={{ color: 'var(--vharanani-charcoal-80)' }}>
              David Mabilu founded Vharanani Group with a clear vision: to build a diversified African enterprise rooted in infrastructure, ownership, and impact. With over two decades of experience in construction and property development, he has led the Group's expansion across multiple sectors while maintaining a firm commitment to economic transformation and community advancement.
            </p>
            <p className="typo-copy-small font-inter mb-4" style={{ color: 'var(--vharanani-charcoal-60)' }}>
              Under his leadership, Vharanani Group continues to strengthen its national footprint and long-term investment strategy.
            </p>
          </div>
        </div>

        {/* Executive team */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0" style={{ border: '1px solid var(--vharanani-charcoal-20)' }}>
          {executives.map((exec, i) => (
            <motion.div
              key={exec.initial}
              className="p-6 text-center cursor-default group"
              style={{
                borderRight: i < 3 ? '1px solid var(--vharanani-charcoal-20)' : 'none',
                borderLeft: '3px solid var(--vharanani-burgundy)',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
            >
              <motion.div
                className="w-16 h-16 mx-auto mb-4 flex items-center justify-center typo-subline font-bebas-neue transition-colors duration-300"
                style={{ background: 'var(--vharanani-burgundy)', color: 'white' }}
                whileHover={{ background: '#812921' }}
              >
                {exec.initial}
              </motion.div>
              <div className="typo-headline-small font-bebas-neue uppercase tracking-wide" style={{ color: 'var(--vharanani-charcoal)' }}>
                {exec.name}
              </div>
              <div className="typo-caption font-inter mt-1" style={{ color: 'var(--vharanani-charcoal-60)' }}>
                {exec.role}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}


// ═══════════════════════════════════════════════════════════
// SECTION 5: IMPACT & GOVERNANCE (combined)
// Stats + governance principles side by side
// ═══════════════════════════════════════════════════════════

export function GroupWireframe_ImpactGovernance(): ReactNode {
  const governancePrinciples = [
    { icon: <Shield size={20} />, label: 'Ethical Leadership', description: 'Principled decision-making at every level of the organisation.' },
    { icon: <Layers size={20} />, label: 'Financial Discipline', description: 'Rigorous fiscal management and transparent oversight.' },
    { icon: <Globe size={20} />, label: 'Risk Management', description: 'Proactive identification, assessment, and mitigation.' },
  ];

  const impactStats = [
    { value: 50000, suffix: '+', label: 'Lives Impacted' },
    { value: 500, suffix: '+', label: 'Bursaries Awarded' },
    { value: 200, suffix: '+', label: 'Infrastructure Projects' },
    { value: 5, suffix: '', label: 'Provinces Reached' },
  ];

  return (
    <SectionWrapper dark>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-[2px]" style={{ background: 'rgba(255,255,255,0.5)' }} />
          <span className="typo-caption tracking-[0.25em] uppercase font-inter" style={{ color: 'rgba(255,255,255,0.7)' }}>
            IMPACT
          </span>
        </div>
        <h2 className="typo-headline-big font-bebas-neue uppercase tracking-wide mb-4 text-white">
          Impact & Responsibility
        </h2>
        <p className="typo-copy font-inter mb-8 max-w-3xl" style={{ color: 'rgba(255,255,255,0.8)' }}>
          Vharanani Group recognizes that infrastructure and investment must translate into tangible community benefit. Through responsible project delivery, employment creation, and the work of The David Mabilu Foundation, the Group actively contributes to social upliftment and economic participation in underserved communities. Our approach integrates disciplined business growth with measurable social responsibility.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Impact stats */}
          <div>
            <div className="relative h-[240px] mb-8 overflow-hidden">
              <ImageWithFallback
                src={IMAGES.impact}
                alt="Community development impact"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.4)' }} />
            </div>
            <div className="grid grid-cols-2 gap-6">
              {impactStats.map((stat) => (
                <div key={stat.label} className="p-6" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} color="white" />
                  <div className="typo-caption tracking-[0.15em] uppercase font-inter mt-1" style={{ color: 'rgba(255,255,255,0.7)' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Governance principles */}
          <div>
            <h3 className="typo-subline font-bebas-neue uppercase tracking-wide text-white mb-6">
              Governance Principles
            </h3>
            <div className="space-y-0">
              {governancePrinciples.map((principle, i) => (
                <div
                  key={principle.label}
                  className="flex items-start gap-4 p-5"
                  style={{
                    borderBottom: i < governancePrinciples.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                  }}
                >
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center" style={{ border: '1px solid rgba(255,255,255,0.4)', color: 'white' }}>
                    {principle.icon}
                  </div>
                  <div>
                    <div className="typo-headline-small font-bebas-neue uppercase tracking-wide text-white">
                      {principle.label}
                    </div>
                    <div className="typo-copy-small font-inter mt-1" style={{ color: 'rgba(255,255,255,0.7)' }}>
                      {principle.description}
                    </div>
                  </div>
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
// SECTION 6: VISION & MISSION
// Full-width cinematic split with strategic objectives
// ═══════════════════════════════════════════════════════════

export function GroupWireframe_VisionMission(): ReactNode {
  const objectives = [
    { icon: <Sprout size={28} />, text: 'Develop sustainable businesses across high-impact sectors.', label: 'SUSTAINABLE GROWTH' },
    { icon: <Route size={28} />, text: 'Deliver infrastructure that improves quality of life.', label: 'INFRASTRUCTURE' },
    { icon: <TrendingUp size={28} />, text: 'Build and manage long-term asset portfolios.', label: 'ASSET MANAGEMENT' },
    { icon: <Users size={28} />, text: 'Foster entrepreneurship and community development.', label: 'COMMUNITY' },
  ];

  return (
    <SectionWrapper>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-[2px]" style={{ background: 'var(--vharanani-burgundy)' }} />
          <span className="typo-caption tracking-[0.25em] uppercase font-inter" style={{ color: 'var(--vharanani-burgundy)' }}>
            MANDATE
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0" style={{ border: '1px solid var(--vharanani-charcoal-20)' }}>
          {/* Vision */}
          <div className="p-8 md:p-12" style={{ background: '#812921' }}>
            <div className="typo-caption tracking-[0.2em] uppercase font-inter mb-6" style={{ color: 'rgba(255,255,255,0.85)' }}>
              OUR VISION
            </div>
            <h2 className="typo-headline-big font-bebas-neue uppercase tracking-wide text-white mb-6">
              To build a diversified African enterprise that strengthens national infrastructure, drives innovation, and advances inclusive economic growth.
            </h2>
            <div className="w-12 h-[2px] mb-6" style={{ background: 'rgba(255,255,255,0.4)' }} />
          </div>

          {/* Mission */}
          <div className="p-8 md:p-12" style={{ background: '#fafafa' }}>
            <div className="typo-caption tracking-[0.2em] uppercase font-inter mb-6" style={{ color: 'var(--vharanani-burgundy)' }}>
              OUR MISSION
            </div>
            <h3 className="typo-subline font-bebas-neue uppercase tracking-wide mb-6" style={{ color: 'var(--vharanani-charcoal)' }}>
              Strategic Objectives
            </h3>
            <div className="space-y-6">
              {objectives.map((obj) => (
                <div key={obj.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center" style={{ border: '1.5px solid var(--vharanani-burgundy)', color: 'var(--vharanani-burgundy)' }}>
                    {obj.icon}
                  </div>
                  <div>
                    <div className="typo-caption tracking-[0.15em] uppercase font-inter mb-1" style={{ color: 'var(--vharanani-burgundy)' }}>
                      {obj.label}
                    </div>
                    <div className="typo-copy-small font-inter" style={{ color: 'var(--vharanani-charcoal-60)' }}>
                      {obj.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image strip */}
        <div className="relative h-[180px] overflow-hidden">
          <ImageWithFallback
            src={IMAGES.visionMission}
            alt="Vision and mission"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.6)' }} />
        </div>
      </div>
    </SectionWrapper>
  );
}


// ═══════════════════════════════════════════════════════════
// SECTION 7: GOVERNANCE & COMPLIANCE
// Detailed governance framework
// ═══════════════════════════════════════════════════════════

export function GroupWireframe_Governance(): ReactNode {
  const principles = [
    { icon: <Gavel size={20} />, label: 'Ethical Leadership', description: 'Principled decision-making at every level' },
    { icon: <FileCheck size={20} />, label: 'Regulatory Compliance', description: 'Adherence to all statutory requirements' },
    { icon: <Scale size={20} />, label: 'Financial Discipline', description: 'Rigorous fiscal management and oversight' },
    { icon: <Shield size={20} />, label: 'Risk Management', description: 'Proactive identification and mitigation' },
    { icon: <Eye size={20} />, label: 'Transparent Reporting', description: 'Open stakeholder communication' },
  ];

  return (
    <SectionWrapper>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-[2px]" style={{ background: 'var(--vharanani-burgundy)' }} />
          <span className="typo-caption tracking-[0.25em] uppercase font-inter" style={{ color: 'var(--vharanani-burgundy)' }}>
            COMPLIANCE
          </span>
        </div>
        <h2 className="typo-headline-big font-bebas-neue uppercase tracking-wide mb-2" style={{ color: 'var(--vharanani-charcoal)' }}>
          Governance & Compliance
        </h2>
        <p className="typo-copy font-inter mb-8 max-w-2xl" style={{ color: 'var(--vharanani-charcoal-60)' }}>
          Ethics, risk management, and transparent reporting define our operational framework.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0" style={{ border: '1px solid var(--vharanani-charcoal-20)' }}>
          {/* Image */}
          <div className="relative h-[300px] lg:h-auto overflow-hidden">
            <ImageWithFallback
              src={IMAGES.governance}
              alt="Corporate governance"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 20%, rgba(0,0,0,0.5) 100%)' }} />
            <div className="absolute bottom-6 left-6">
              <div className="typo-headline-small font-bebas-neue uppercase tracking-wide text-white">
                King IV Aligned
              </div>
              <div className="typo-caption font-inter text-white/70 mt-1">
                Corporate governance best practices
              </div>
            </div>
          </div>

          {/* Principles list */}
          <div className="lg:col-span-2">
            {principles.map((p, i) => (
              <div
                key={p.label}
                className="flex items-start gap-4 p-6"
                style={{
                  borderBottom: i < principles.length - 1 ? '1px solid var(--vharanani-charcoal-20)' : 'none',
                }}
              >
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center" style={{ border: '1px solid var(--vharanani-burgundy)', color: 'var(--vharanani-burgundy)' }}>
                  {p.icon}
                </div>
                <div className="flex-1">
                  <div className="typo-headline-small font-bebas-neue uppercase tracking-wide" style={{ color: 'var(--vharanani-charcoal)' }}>
                    {p.label}
                  </div>
                  <div className="typo-copy-small font-inter mt-1" style={{ color: 'var(--vharanani-charcoal-60)' }}>
                    {p.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}


// ═══════════════════════════════════════════════════════════
// SECTION 8: OUR COMPANIES
// Subsidiary cards with quick-link navigation
// ═══════════════════════════════════════════════════════════

export function GroupWireframe_Companies(): ReactNode {
  const companies = [
    {
      title: 'Vharanani Properties',
      tag: 'CONSTRUCTION',
      icon: <Building2 size={20} />,
      image: IMAGES.construction,
      description: 'Construction, civil engineering, infrastructure development, and facilities management. Delivering large-scale public and private sector projects across South Africa.',
      highlights: ['CIDB Grade 9 CE & GB', 'B-BBEE Level 1', 'ISO 9001 Certified'],
    },
    {
      title: 'The David Mabilu Foundation',
      tag: 'SOCIAL IMPACT',
      icon: <Landmark size={20} />,
      image: IMAGES.foundation,
      description: 'Driving educational support, housing initiatives, entrepreneurship programs, and community upliftment.',
      highlights: ['Education Programmes', 'Housing Initiatives', 'Community Upliftment'],
    },
    {
      title: 'DMFT Property Developers',
      tag: 'PROPERTY DEVELOPMENT',
      icon: <Heart size={20} />,
      image: IMAGES.dmft,
      description: 'Property development, investment management, and facilities oversight supported by a substantial unencumbered property portfolio.',
      highlights: ['Residential Estates', 'Mixed-Use Developments', 'Townhouse Complexes'],
    },
  ];

  return (
    <SectionWrapper dark>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-[2px]" style={{ background: 'rgba(255,255,255,0.5)' }} />
          <span className="typo-caption tracking-[0.25em] uppercase font-inter" style={{ color: 'rgba(255,255,255,0.7)' }}>
            SUBSIDIARIES
          </span>
        </div>
        <p className="typo-meta tracking-[0.25em] uppercase font-inter mb-2" style={{ color: 'rgba(255,255,255,0.7)' }}>COMPANIES</p>
        <h2 className="typo-headline-big font-bebas-neue uppercase tracking-wide mb-8 text-white">
          Our Companies
        </h2>

        <div className="space-y-6">
          {companies.map((company, i) => (
            <div
              key={company.title}
              className="grid grid-cols-1 md:grid-cols-3 gap-0 overflow-hidden hover:shadow-lg transition-shadow duration-300"
              style={{ border: '1px solid rgba(255,255,255,0.1)' }}
            >
              {/* Image */}
              <div className="relative h-[200px] md:h-auto overflow-hidden">
                <ImageWithFallback
                  src={company.image}
                  alt={company.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.3)' }} />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span style={{ color: 'white' }}>{company.icon}</span>
                  <span className="typo-caption tracking-[0.2em] uppercase font-inter" style={{ color: 'rgba(255,255,255,0.9)' }}>
                    {company.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="md:col-span-2 p-6 md:p-8 flex flex-col justify-center" style={{ background: 'rgba(255,255,255,0.03)' }}>
                <h3 className="typo-subline font-bebas-neue uppercase tracking-wide text-white mb-3">
                  {company.title}
                </h3>
                <p className="typo-copy-small font-inter text-white/60 mb-4">
                  {company.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {company.highlights.map((h) => (
                    <span key={h} className="typo-caption tracking-[0.1em] uppercase font-inter px-3 py-1" style={{ border: '1px solid rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.8)' }}>
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}


// ═══════════════════════════════════════════════════════════
// SECTION 9: NEWS & CONTACT
// Latest news + contact form + social links
// ═══════════════════════════════════════════════════════════

export function GroupWireframe_NewsContact(): ReactNode {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const newsItems = [
    { date: 'MAR 2026', title: 'Vharanani Group Expands Infrastructure Portfolio', description: 'New multi-billion rand highway project awarded in Limpopo province.' },
    { date: 'FEB 2026', title: 'Foundation Awards 100 New Bursaries', description: 'The David Mabilu Foundation continues its commitment to education.' },
    { date: 'JAN 2026', title: 'DMFT Launches New Estate Development', description: 'A premium residential estate breaking ground in Gauteng.' },
  ];

  const socialLinks = [
    { icon: <Linkedin size={14} />, label: 'LinkedIn' },
    { icon: <Twitter size={14} />, label: 'Twitter' },
    { icon: <Facebook size={14} />, label: 'Facebook' },
  ];

  return (
    <SectionWrapper>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-[2px]" style={{ background: 'var(--vharanani-burgundy)' }} />
          <span className="typo-caption tracking-[0.25em] uppercase font-inter" style={{ color: 'var(--vharanani-burgundy)' }}>
            UPDATES
          </span>
        </div>
        <h2 className="typo-headline-big font-bebas-neue uppercase tracking-wide mb-4" style={{ color: 'var(--vharanani-charcoal)' }}>
          News & Announcements
        </h2>
        <p className="typo-copy font-inter mb-8 max-w-2xl" style={{ color: 'var(--vharanani-charcoal-60)' }}>
          Stay informed on Vharanani Group's latest developments, project milestones, partnerships, and corporate updates.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* News */}
          <div>
            <h3 className="typo-subline font-bebas-neue uppercase tracking-wide mb-6" style={{ color: 'var(--vharanani-charcoal)' }}>
              Latest Updates
            </h3>
            <div className="space-y-0" style={{ border: '1px solid var(--vharanani-charcoal-20)' }}>
              {newsItems.map((news, i) => (
                <motion.div
                  key={news.title}
                  className="p-5 cursor-pointer"
                  style={{
                    borderBottom: i < newsItems.length - 1 ? '1px solid var(--vharanani-charcoal-20)' : 'none',
                  }}
                  whileHover={{ backgroundColor: '#fafafa' }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="typo-caption tracking-[0.15em] uppercase font-inter mb-2" style={{ color: 'var(--vharanani-burgundy)' }}>
                    {news.date}
                  </div>
                  <div className="typo-headline-small font-bebas-neue uppercase tracking-wide mb-1" style={{ color: 'var(--vharanani-charcoal)' }}>
                    {news.title}
                  </div>
                  <div className="typo-copy-small font-inter" style={{ color: 'var(--vharanani-charcoal-60)' }}>
                    {news.description}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Image strip */}
            <div className="relative h-[160px] mt-6 overflow-hidden">
              <ImageWithFallback
                src={IMAGES.news}
                alt="Corporate news and updates"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.5)' }} />
            </div>
          </div>

          {/* Contact form */}
          <div>
            <h3 className="typo-subline font-bebas-neue uppercase tracking-wide mb-2" style={{ color: 'var(--vharanani-charcoal)' }}>
              Contact Us
            </h3>
            <p className="typo-copy-small font-inter mb-6" style={{ color: 'var(--vharanani-charcoal-60)' }}>
              For corporate, partnership, or media inquiries, please contact our head office.
            </p>

            {/* Contact info */}
            <div className="space-y-3 mb-8">
              {[
                { icon: <Mail size={16} />, text: 'info@vharananigroup.co.za' },
                { icon: <Phone size={16} />, text: '+27 11 656 1418' },
                { icon: <MapPin size={16} />, text: '18 Hume Road, Dunkeld West, Johannesburg' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <span style={{ color: 'var(--vharanani-burgundy)' }}>{item.icon}</span>
                  <span className="typo-copy-small font-inter" style={{ color: 'var(--vharanani-charcoal-80)' }}>{item.text}</span>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="space-y-4" style={{ border: '1px solid var(--vharanani-charcoal-20)', padding: '24px' }}>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full typo-copy-small text-base font-inter px-4 py-3 outline-none focus:outline-none transition-colors duration-200 focus:border-[var(--vharanani-burgundy)] min-h-[48px]"
                style={{ border: '1px solid var(--vharanani-charcoal-20)', background: '#fafafa', color: 'var(--vharanani-charcoal)' }}
              />
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full typo-copy-small text-base font-inter px-4 py-3 outline-none focus:outline-none transition-colors duration-200 focus:border-[var(--vharanani-burgundy)] min-h-[48px]"
                style={{ border: '1px solid var(--vharanani-charcoal-20)', background: '#fafafa', color: 'var(--vharanani-charcoal)' }}
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full typo-copy-small font-inter px-4 py-3 outline-none focus:outline-none resize-none transition-colors duration-200 focus:border-[var(--vharanani-burgundy)]"
                style={{ border: '1px solid var(--vharanani-charcoal-20)', background: '#fafafa', color: 'var(--vharanani-charcoal)' }}
              />
              <button
                className="typo-headline-small font-bebas-neue uppercase tracking-[0.15em] px-8 py-3 cursor-pointer transition-opacity hover:opacity-80"
                style={{ background: 'var(--vharanani-burgundy)', color: 'white' }}
              >
                Send Message
              </button>
            </div>

            {/* Tagline */}
            <div className="mt-6 mb-4 pt-4" style={{ borderTop: '1px solid var(--vharanani-charcoal-20)' }}>
              <div className="typo-headline-small font-bebas-neue uppercase tracking-wide" style={{ color: 'var(--vharanani-charcoal)' }}>Vharanani Group</div>
              <div className="typo-copy-small font-inter" style={{ color: 'var(--vharanani-charcoal-60)' }}>Building sustainable enterprises. Advancing African growth.</div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 mt-4">
              <span className="typo-caption tracking-[0.15em] uppercase font-inter" style={{ color: 'var(--vharanani-charcoal-60)' }}>
                Follow Us
              </span>
              {socialLinks.map((link) => (
                <motion.div
                  key={link.label}
                  className="w-8 h-8 flex items-center justify-center cursor-pointer"
                  style={{ border: '1px solid var(--vharanani-charcoal-20)', color: 'var(--vharanani-charcoal-60)' }}
                  whileHover={{ borderColor: 'var(--vharanani-burgundy)', color: 'var(--vharanani-burgundy)' }}
                >
                  {link.icon}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}