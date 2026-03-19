import { useState, useEffect, useRef, type ReactNode } from 'react';
import { useInView } from '../../hooks/useInView';
import { motion } from 'motion/react';
import {
  GraduationCap, Home, Heart, Users, Landmark, Globe,
  Building2, MapPin, Mail, Phone, ArrowRight, Layers,
  BookOpen, Shield,
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
      className={`py-16 md:py-24 px-6 md:px-12 lg:px-20 ${className}`}
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
  communityGathering: 'https://images.unsplash.com/photo-1655720359248-eeace8c709c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwY29tbXVuaXR5JTIwY2VsZWJyYXRpb24lMjB1bml0eSUyMGdhdGhlcmluZyUyMGhhbmRzfGVufDF8fHx8MTc3Mzg0OTM3NHww&ixlib=rb-4.1.0&q=80&w=1080',
  founderPortrait: 'https://ik.imagekit.io/qcvroy8xpd/image%202.png',
  education: 'https://images.unsplash.com/photo-1758270703250-80a6387439ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwdW5pdmVyc2l0eSUyMHN0dWRlbnRzJTIwZ3JhZHVhdGlvbiUyMGNlbGVicmF0aW9uJTIwY2FtcHVzfGVufDF8fHx8MTc3Mzg0OTM3NHww&ixlib=rb-4.1.0&q=80&w=1080',
  housing: 'https://images.unsplash.com/photo-1707410148802-fe08fe956398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZmZvcmRhYmxlJTIwaG91c2luZyUyMGNvbnN0cnVjdGlvbiUyMHdvcmtlcnMlMjBTb3V0aCUyMEFmcmljYSUyMHRvd25zaGlwfGVufDF8fHx8MTc3Mzg0OTM3NHww&ixlib=rb-4.1.0&q=80&w=1080',
  youthCommunity: 'https://images.unsplash.com/photo-1506185386801-3d7bc0ddd2bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIweW91dGglMjBzcG9ydHMlMjBzb2NjZXIlMjBjb21tdW5pdHklMjBmaWVsZHxlbnwxfHx8fDE3NzM4NDkzNzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
  blanketDrive: 'https://images.unsplash.com/photo-1559154352-06e29e1e11aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyaXR5JTIwYmxhbmtldCUyMGRvbmF0aW9uJTIwd2ludGVyJTIwQWZyaWNhJTIwZWxkZXJseSUyMHdvbWFufGVufDF8fHx8MTc3Mzg0OTM3OXww&ixlib=rb-4.1.0&q=80&w=1080',
  classroom: 'https://images.unsplash.com/photo-1521493959102-bdd6677fdd81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwY2hpbGRyZW4lMjBjbGFzc3Jvb20lMjBsZWFybmluZyUyMHNjaG9vbCUyMGhhcHB5fGVufDF8fHx8MTc3Mzg0OTM4MHww&ixlib=rb-4.1.0&q=80&w=1080',
};


// ═══════════════════════════════════════════════════════════
// SECTION 1: HERO — Cinematic Full-Screen + Vision Split
// ═══════════════════════════════════════════════════════════

export function FoundationWireframe_Hero({ onTabChange }: { onTabChange?: (tabId: string) => void } = {}): ReactNode {
  return (
    <div>
      {/* ── CINEMATIC HERO ── */}
      <div className="relative h-[45vh] sm:h-[55vh] min-h-[320px] sm:min-h-[440px] overflow-hidden">
        <ImageWithFallback
          src={IMAGES.communityGathering}
          alt="Community gathering and empowerment"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(129,41,33,0.2) 40%, rgba(0,0,0,0.85) 100%)'
        }} />
        <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: 'var(--vharanani-burgundy)' }} />

        {/* Nav placeholder */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 md:px-12 lg:px-20 py-5">
          <div className="font-bebas-neue typo-headline-small tracking-wider text-white uppercase opacity-80">
            The David Mabilu Foundation
          </div>
          <div className="hidden md:flex items-center gap-6">
            {['About', 'Programmes', 'Our Impact', 'Vharanani Group', 'Contact'].map((item) => (
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
                    THE DAVID MABILU FOUNDATION
                  </span>
                </div>
                <h1 className="typo-header font-bebas-neue tracking-wide uppercase text-white" style={{ lineHeight: 0.95 }}>
                  Building Stronger<br />Communities Through<br />Opportunity.
                </h1>
              </div>
              <div className="lg:col-span-5 flex flex-col gap-6">
                <p className="typo-copy font-inter text-white/60">
                  Empowering individuals and sustainably improving living standards across South Africa through education, housing, and community development.
                </p>
                <div className="flex items-center gap-3">
                  <button onClick={() => onTabChange?.('impact')} className="flex items-center gap-2 px-5 py-3 transition-all duration-300 hover:gap-3" style={{ background: 'var(--vharanani-burgundy)' }}>
                    <span className="font-bebas-neue typo-headline-small tracking-wider uppercase text-white">See Our Impact</span>
                    <ArrowRight size={14} className="text-white" />
                  </button>
                  <button onClick={() => onTabChange?.('get-involved')} className="flex items-center gap-2 px-5 py-3 transition-all duration-300 hover:bg-white/10" style={{ border: '1px solid rgba(255,255,255,0.3)' }}>
                    <span className="font-bebas-neue typo-headline-small tracking-wider uppercase text-white">Partner With Us</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── IMPACT STATS BAR ── */}
      <div style={{ background: '#812921' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0" style={{ borderBottom: '1px solid rgba(255,255,255,0.2)' }}>
            {[
              { target: 50, suffix: 'K+', label: 'Lives Impacted' },
              { target: 34, suffix: '', label: 'Full Scholarships' },
              { target: 5, suffix: '', label: 'Provinces Reached' },
              { target: 12, suffix: '+', label: 'Years of Service' },
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

      {/* ── VISION & FOUNDER SPLIT ── */}
      <div style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 overflow-hidden"
            style={{ border: '1px solid var(--vharanani-charcoal-20)' }}
          >
            {/* Left — Vision text (7 cols) */}
            <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-center" style={{ background: '#fafafa' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[2px]" style={{ background: 'var(--vharanani-burgundy)' }} />
                <span className="typo-caption tracking-[0.25em] uppercase font-inter" style={{ color: 'var(--vharanani-burgundy)' }}>
                  OUR GOAL
                </span>
              </div>
              <h2 className="typo-headline-big font-bebas-neue tracking-wide uppercase mb-4" style={{ color: 'var(--vharanani-charcoal)' }}>
                A Vision for Lasting Change.
              </h2>
              <div className="w-12 h-[3px] mb-6" style={{ background: 'var(--vharanani-burgundy)' }} />
              <p className="typo-copy font-inter mb-4" style={{ color: 'var(--vharanani-charcoal-80)' }}>
                The primary goal of the David Mabilu Foundation is to reduce poverty and sustainably improve the living standards of disadvantaged and marginalised communities throughout South Africa.
              </p>
              <p className="typo-copy-small font-inter mb-8" style={{ color: 'var(--vharanani-charcoal-80)' }}>
                We believe that lasting change is achieved when communities are empowered with access to education, housing, and opportunities for social and economic development. Through targeted programmes, partnerships, and direct support, the Foundation works to address real community challenges while promoting long-term empowerment.
              </p>

              {/* Key pillars */}
              <div className="grid grid-cols-3 gap-0" style={{ border: '1px solid var(--vharanani-charcoal-20)' }}>
                {[
                  { icon: <GraduationCap size={18} />, label: 'Education' },
                  { icon: <Home size={18} />, label: 'Housing' },
                  { icon: <Heart size={18} />, label: 'Community' },
                ].map((item, i) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 p-4"
                    style={{ borderRight: i < 2 ? '1px solid var(--vharanani-charcoal-20)' : 'none' }}
                  >
                    <div style={{ color: 'var(--vharanani-burgundy)' }}>{item.icon}</div>
                    <span className="typo-meta tracking-[0.12em] uppercase font-inter" style={{ color: 'var(--vharanani-charcoal-80)' }}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Founder portrait + quote (5 cols) */}
            <div className="lg:col-span-5 relative min-h-[380px]">
              <ImageWithFallback
                src={IMAGES.founderPortrait}
                alt="David Mabilu, Foundation Founder"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{
                background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.85) 100%)'
              }} />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="p-5" style={{ borderLeft: '3px solid var(--vharanani-burgundy)', background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(8px)' }}>
                  <p className="typo-copy font-inter italic text-white mb-3">
                    "The Foundation was established with a vision to give back meaningfully to the communities that continue to shape South Africa's future."
                  </p>
                  <div className="typo-meta tracking-[0.15em] uppercase font-inter" style={{ color: 'var(--vharanani-burgundy-60)' }}>
                    &mdash; David Mabilu, Founder
                  </div>
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
// SECTION 3: PARTNERSHIP NETWORK — Editorial Layout
// ═══════════════════════════════════════════════════════════

export function FoundationWireframe_PartnerNetwork(): ReactNode {
  const partners = [
    { icon: <Globe size={22} />, title: 'Local & National Partners', description: 'Collaborating with organisations across South Africa to extend reach and impact.', step: '01' },
    { icon: <Landmark size={22} />, title: 'Government Institutions', description: 'Working with national and provincial government departments on development initiatives.', step: '02' },
    { icon: <BookOpen size={22} />, title: 'Faith-Based Organisations', description: 'Partnering with churches and religious bodies to support community education and welfare.', step: '03' },
    { icon: <Shield size={22} />, title: 'Traditional Leaders', description: 'Engaging with traditional authorities to ensure cultural sensitivity and community buy-in.', step: '04' },
    { icon: <Building2 size={22} />, title: 'Private Sector Partners', description: 'Leveraging corporate resources and expertise for sustainable programme delivery.', step: '05' },
    { icon: <Users size={22} />, title: 'Community Organisations', description: 'Empowering grassroots organisations to drive local change and development.', step: '06' },
  ];

  return (
    <SectionWrapper className="!py-0 !px-0">
      {/* ── HEADER BAND ── */}
      <div className="relative h-[30vh] sm:h-[36vh] min-h-[240px] sm:min-h-[290px] overflow-hidden">
        <ImageWithFallback
          src={IMAGES.blanketDrive}
          alt="Community partnership and collaboration"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(180deg, rgba(129,41,33,0.5) 0%, rgba(0,0,0,0.85) 100%)'
        }} />
        <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: 'var(--vharanani-burgundy)' }} />

        <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-12 lg:px-20 pb-10">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-[2px]" style={{ background: 'var(--vharanani-burgundy)' }} />
                  <span className="typo-caption tracking-[0.25em] uppercase font-inter" style={{ color: 'var(--vharanani-burgundy-60)' }}>
                    HOW WE WORK
                  </span>
                </div>
                <h2 className="typo-header font-bebas-neue tracking-wide uppercase text-white" style={{ lineHeight: 0.95 }}>
                  Collaborating for<br />Meaningful Impact.
                </h2>
              </div>
              <div className="lg:col-span-5">
                <p className="typo-copy font-inter text-white/60">
                  The Foundation works collaboratively with a broad network of partners to deliver impactful programmes and extend its reach across communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── PARTNER GRID — 3x2 ── */}
      <div className="px-6 md:px-12 lg:px-20 py-16 md:py-24" style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0" style={{ border: '1px solid var(--vharanani-charcoal-20)' }}>
            {partners.map((partner, i) => (
              <motion.div
                key={partner.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative p-8 group hover:bg-[var(--vharanani-burgundy-20)] transition-colors duration-200"
                style={{
                  borderRight: (i % 3 !== 2) ? '1px solid var(--vharanani-charcoal-20)' : 'none',
                  borderBottom: i < 3 ? '1px solid var(--vharanani-charcoal-20)' : 'none',
                  background: i % 2 === 0 ? '#ffffff' : '#fafafa',
                }}
              >
                {/* Ghost step number */}
                <div className="absolute top-3 right-4">
                  <span className="typo-headline-big font-bebas-neue" style={{ color: 'var(--vharanani-charcoal-20)', opacity: 0.5 }}>
                    {partner.step}
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 flex items-center justify-center" style={{ border: '1.5px solid var(--vharanani-burgundy)', color: 'var(--vharanani-burgundy)' }}>
                    {partner.icon}
                  </div>
                  <div className="flex-1 h-[1px]" style={{ background: 'var(--vharanani-charcoal-20)' }} />
                </div>

                <h4 className="typo-headline-small font-bebas-neue tracking-wide uppercase mb-3" style={{ color: 'var(--vharanani-charcoal)' }}>
                  {partner.title}
                </h4>
                <p className="typo-copy-small font-inter" style={{ color: 'var(--vharanani-charcoal-60)' }}>
                  {partner.description}
                </p>

                {/* Bottom accent line on hover */}
                <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[2px] transition-all duration-500" style={{ background: 'var(--vharanani-burgundy)' }} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}


// ═══════════════════════════════════════════════════════════
// SECTION 4: CORE PROGRAMME AREAS — Alternating Editorial
// ═══════════════════════════════════════════════════════════

export function FoundationWireframe_ProgrammeAreas(): ReactNode {
  const programmes = [
    {
      title: 'Education',
      step: '01',
      icon: <GraduationCap size={22} />,
      image: IMAGES.education,
      headline: 'Breaking the Cycle of Poverty',
      description: 'The Foundation invests in education as the most powerful tool for lasting change — providing full scholarships that cover tuition, stipends, school uniforms, educational trips, and monthly grocery support for families.',
      details: ['Full tuition & stipends', 'School uniforms & supplies', 'Computer labs & classrooms', 'Educational trips'],
      metric: { value: '34', label: 'Full Scholarships Since 2011' },
    },
    {
      title: 'Housing',
      step: '02',
      icon: <Home size={22} />,
      image: IMAGES.housing,
      headline: 'Dignified Shelter for All',
      description: 'Through collaborations with government and private partners, the Foundation provides safe, dignified homes for vulnerable individuals and families — including partnerships with the Dept. of Human Settlements and the Office of the Premier.',
      details: ['Home construction', 'Community housing', 'Government partnerships', 'Nelson Mandela Day builds'],
      metric: { value: '3BR', label: 'Home Built for Elderly in Eenzaam' },
    },
    {
      title: 'Community Upliftment',
      step: '03',
      icon: <Heart size={22} />,
      image: IMAGES.youthCommunity,
      headline: 'Strengthening Social Wellbeing',
      description: 'From youth sports programmes and women\'s empowerment initiatives to winter blanket drives for the elderly, the Foundation invests in the social fabric of communities across South Africa.',
      details: ['Youth development', 'Sports equipment & kits', 'Women\'s empowerment', 'Winter blanket drives'],
      metric: { value: '5', label: 'Provinces Reached' },
    },
  ];

  return (
    <SectionWrapper className="!py-0 !px-0">
      {/* ── SECTION HEADER ── */}
      <div className="px-6 md:px-12 lg:px-20 pt-16 md:pt-24 pb-12" style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[2px]" style={{ background: 'var(--vharanani-burgundy)' }} />
                <span className="typo-caption tracking-[0.25em] uppercase font-inter" style={{ color: 'var(--vharanani-burgundy)' }}>
                  WHAT WE DO
                </span>
              </div>
              <h2 className="typo-header font-bebas-neue tracking-wide uppercase" style={{ color: 'var(--vharanani-charcoal)', lineHeight: 0.95 }}>
                Core Programme<br />Areas
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="typo-copy font-inter" style={{ color: 'var(--vharanani-charcoal-60)' }}>
                Three interconnected programme areas that address the fundamental needs of South Africa's most vulnerable communities — education, housing, and social wellbeing.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── ALTERNATING PROGRAMME CARDS ── */}
      <div style={{ background: '#ffffff' }}>
        {programmes.map((prog, i) => {
          const isEven = i % 2 === 0;
          return (
            <motion.div
              key={prog.step}
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
                  <div className={`lg:col-span-5 relative h-[300px] lg:h-auto lg:min-h-[400px] overflow-hidden ${isEven ? '' : 'lg:order-2'}`}>
                    <ImageWithFallback
                      src={prog.image}
                      alt={prog.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0" style={{
                      background: isEven
                        ? 'linear-gradient(135deg, rgba(129,41,33,0.35) 0%, rgba(0,0,0,0.45) 100%)'
                        : 'linear-gradient(225deg, rgba(129,41,33,0.35) 0%, rgba(0,0,0,0.45) 100%)'
                    }} />
                    {/* Ghost number */}
                    <div className="absolute top-4 left-6">
                      <span className="font-bebas-neue" style={{ fontSize: 'clamp(72px, 10vw, 120px)', lineHeight: 1, color: 'rgba(255,255,255,0.07)' }}>
                        {prog.step}
                      </span>
                    </div>
                    {/* Bottom metric overlay */}
                    <div className="absolute bottom-0 left-0 right-0 px-6 py-4" style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }}>
                      <div className="flex items-center gap-4">
                        <div className="typo-headline-big font-bebas-neue" style={{ color: 'var(--vharanani-burgundy)' }}>
                          {prog.metric.value}
                        </div>
                        <div className="typo-caption tracking-[0.15em] uppercase font-inter text-white/50">
                          {prog.metric.label}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content side */}
                  <div className={`lg:col-span-7 p-8 md:p-12 flex flex-col justify-center ${isEven ? '' : 'lg:order-1'}`} style={{ background: i % 2 === 0 ? '#ffffff' : '#fafafa' }}>
                    {/* Icon + tag */}
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 flex items-center justify-center flex-shrink-0" style={{ border: '1.5px solid var(--vharanani-burgundy)', color: 'var(--vharanani-burgundy)' }}>
                        {prog.icon}
                      </div>
                      <span className="typo-caption tracking-[0.2em] uppercase font-inter" style={{ color: 'var(--vharanani-burgundy)' }}>
                        PROGRAMME {prog.step}
                      </span>
                      <div className="flex-1 h-[1px] ml-2" style={{ background: 'var(--vharanani-charcoal-20)' }} />
                    </div>

                    <h3 className="typo-headline-big font-bebas-neue uppercase tracking-wide mb-2" style={{ color: 'var(--vharanani-charcoal)' }}>
                      {prog.title}
                    </h3>
                    <p className="typo-subline font-bebas-neue uppercase tracking-wide mb-5" style={{ color: 'var(--vharanani-burgundy)', lineHeight: 1.2 }}>
                      {prog.headline}
                    </p>
                    <p className="typo-copy font-inter mb-8" style={{ color: 'var(--vharanani-charcoal-60)' }}>
                      {prog.description}
                    </p>

                    {/* Details grid */}
                    <div className="grid grid-cols-2 gap-0" style={{ border: '1px solid var(--vharanani-charcoal-20)' }}>
                      {prog.details.map((detail, di) => (
                        <div
                          key={detail}
                          className="flex items-center gap-3 p-4"
                          style={{
                            borderRight: di % 2 === 0 ? '1px solid var(--vharanani-charcoal-20)' : 'none',
                            borderBottom: di < 2 ? '1px solid var(--vharanani-charcoal-20)' : 'none',
                          }}
                        >
                          <div className="w-1.5 h-1.5 flex-shrink-0" style={{ background: 'var(--vharanani-burgundy)' }} />
                          <span className="typo-copy-small font-inter" style={{ color: 'var(--vharanani-charcoal-80)' }}>
                            {detail}
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

      {/* ── PROGRAMME SUMMARY BAND ── */}
      <div className="relative overflow-hidden" style={{ background: 'var(--vharanani-charcoal)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 py-12" style={{ borderTop: '3px solid var(--vharanani-burgundy)' }}>
            {programmes.map((prog, i) => (
              <motion.div
                key={prog.step + '-summary'}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 text-center"
                style={{ borderRight: i < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}
              >
                <div className="w-10 h-10 mx-auto mb-3 flex items-center justify-center" style={{ border: '1px solid var(--vharanani-burgundy)', color: 'var(--vharanani-burgundy)' }}>
                  {prog.icon}
                </div>
                <div className="typo-headline-small font-bebas-neue uppercase tracking-wide text-white mb-1">
                  {prog.title}
                </div>
                <div className="typo-headline-big font-bebas-neue" style={{ color: 'var(--vharanani-burgundy)' }}>
                  {prog.metric.value}
                </div>
                <div className="typo-meta tracking-[0.1em] uppercase font-inter text-white/60 mt-1">
                  {prog.metric.label}
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
// SECTION 5: IMPACT STORIES — Cinematic Tabbed Component
// ═══════════════════════════════════════════════════════════

export function FoundationWireframe_ImpactStories(): ReactNode {
  const [activeTab, setActiveTab] = useState<'education' | 'housing' | 'community'>('education');

  const tabs = {
    education: {
      title: 'Education Impact',
      metric: '34',
      metricLabel: 'Full scholarships provided since 2011',
      image: IMAGES.classroom,
      highlight: 'Coverage includes tuition, monthly stipends, school uniforms, educational trips, and monthly grocery support for families.',
      details: [
        { label: 'Galananzhele Primary School', note: 'Computers & additional classrooms' },
        { label: 'Tshifhatani Primary School', note: 'Learning resources & infrastructure' },
        { label: 'Tshidimbini Secondary School', note: 'Computer lab & facilities' },
        { label: 'Tshiavha Primary School', note: 'Classroom construction & supplies' },
      ],
    },
    housing: {
      title: 'Housing Dignity',
      metric: '3',
      metricLabel: 'Bedroom home built for elderly woman in Eenzaam',
      image: IMAGES.housing,
      highlight: 'Through collaborations with government, the Foundation provided a three-bedroom house for an elderly woman in Eenzaam village who had not received her social grant since 1985.',
      details: [
        { label: 'Capricorn FM', note: 'Media partnership for housing initiative' },
        { label: 'Dept. of Human Settlements', note: 'Mpumalanga housing collaboration' },
        { label: 'Office of the Premier', note: 'Limpopo housing programme' },
        { label: 'Office of the President', note: 'National housing day support' },
      ],
    },
    community: {
      title: 'Community & Social Support',
      metric: '2012',
      metricLabel: 'Nelson Mandela Day at Mambo Primary',
      image: IMAGES.youthCommunity,
      highlight: 'David Mabilu and Vharanani Properties staff spent their 67 minutes at Mambo Primary School in Chiawelo, Soweto — painting classrooms, cleaning facilities, and donating hygiene supplies.',
      details: [
        { label: 'UAAC & Church of Christ', note: 'Faith-based student financial assistance' },
        { label: 'Sports equipment donations', note: 'Kits, soccer balls, and boots for youth' },
        { label: 'Women\'s Day 2017', note: 'Blankets for elderly women in Chiawelo' },
        { label: 'Winter blanket drives', note: 'Free State community support' },
      ],
    },
  };

  const current = tabs[activeTab];

  return (
    <SectionWrapper className="!px-0">
      <div className="px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[2px]" style={{ background: 'var(--vharanani-burgundy)' }} />
                <span className="typo-caption tracking-[0.25em] uppercase font-inter" style={{ color: 'var(--vharanani-burgundy)' }}>
                  OUR IMPACT
                </span>
              </div>
              <h2 className="typo-header font-bebas-neue tracking-wide uppercase" style={{ color: 'var(--vharanani-charcoal)', lineHeight: 0.95 }}>
                Stories of<br />Transformation
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="typo-copy font-inter" style={{ color: 'var(--vharanani-charcoal-60)' }}>
                Real stories from the communities we serve — demonstrating the tangible impact of every programme, partnership, and initiative.
              </p>
            </div>
          </div>

          {/* Tab bar */}
          <div className="flex gap-0 mb-0" style={{ borderBottom: '2px solid var(--vharanani-charcoal-20)' }}>
            {([['education', 'Education Impact'], ['housing', 'Housing Dignity'], ['community', 'Community Support']] as const).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className="flex-1 py-5 text-center transition-all duration-200 relative"
                style={{
                  background: activeTab === key ? 'rgba(129,41,33,0.04)' : 'transparent',
                }}
              >
                <span
                  className="typo-headline-small font-bebas-neue tracking-wider uppercase"
                  style={{ color: activeTab === key ? 'var(--vharanani-burgundy)' : 'var(--vharanani-charcoal-60)' }}
                >
                  {label}
                </span>
                {activeTab === key && (
                  <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: 'var(--vharanani-burgundy)', marginBottom: '-2px' }} />
                )}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="overflow-hidden" style={{ border: '1px solid var(--vharanani-charcoal-20)', borderTop: 'none' }}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Left — Image + metric */}
              <div className="lg:col-span-5 relative h-[320px] lg:h-auto lg:min-h-[440px] overflow-hidden">
                <ImageWithFallback
                  src={current.image}
                  alt={current.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0" style={{
                  background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.9) 100%)'
                }} />

                {/* Big metric */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="font-bebas-neue tracking-wider text-white mb-1" style={{ fontSize: 'clamp(48px, 6vw, 80px)', lineHeight: '1' }}>
                    {current.metric}
                  </div>
                  <div className="typo-copy-small font-inter text-white/60">
                    {current.metricLabel}
                  </div>
                </div>
              </div>

              {/* Right — Story + details */}
              <div className="lg:col-span-7 p-8 md:p-10" style={{ background: '#fafafa' }}>
                <h3 className="typo-subline font-bebas-neue tracking-wide uppercase mb-5" style={{ color: 'var(--vharanani-charcoal)' }}>
                  {current.title}
                </h3>

                {/* Highlight */}
                <div className="p-5 mb-8" style={{ borderLeft: '3px solid var(--vharanani-burgundy)', background: 'rgba(129,41,33,0.04)' }}>
                  <p className="typo-copy font-inter" style={{ color: 'var(--vharanani-charcoal-80)' }}>
                    {current.highlight}
                  </p>
                </div>

                {/* Detail items */}
                <div className="grid grid-cols-1 gap-0" style={{ border: '1px solid var(--vharanani-charcoal-20)' }}>
                  {current.details.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 p-4"
                      style={{ borderBottom: i < 3 ? '1px solid var(--vharanani-charcoal-20)' : 'none' }}
                    >
                      <div className="w-1.5 h-1.5 flex-shrink-0 mt-2" style={{ background: 'var(--vharanani-burgundy)' }} />
                      <div>
                        <div className="typo-headline-small font-bebas-neue tracking-wide uppercase" style={{ color: 'var(--vharanani-charcoal)' }}>
                          {item.label}
                        </div>
                        <div className="typo-meta font-inter mt-0.5" style={{ color: 'var(--vharanani-charcoal-60)' }}>
                          {item.note}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}


// ═══════════════════════════════════════════════════════════
// SECTION 6: VHARANANI GROUP HERITAGE — Cinematic Split
// ═══════════════════════════════════════════════════════════

export function FoundationWireframe_Heritage(): ReactNode {
  return (
    <SectionWrapper dark className="!py-0 !px-0">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden"
          style={{ border: '1px solid rgba(255,255,255,0.1)' }}
        >
          {/* Left — Text content */}
          <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-center relative" style={{ background: 'rgba(255,255,255,0.03)' }}>
            {/* Watermark */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 opacity-[0.03] pointer-events-none">
              <div className="font-bebas-neue uppercase tracking-wider" style={{ fontSize: '140px', lineHeight: '1', color: 'white' }}>
                VHARANANI
              </div>
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <Layers size={18} style={{ color: 'var(--vharanani-burgundy)' }} />
                <span className="typo-caption tracking-[0.25em] uppercase font-inter" style={{ color: 'var(--vharanani-burgundy-60)' }}>
                  OUR HERITAGE
                </span>
              </div>

              <h2 className="typo-headline-big font-bebas-neue tracking-wide uppercase text-white mb-4">
                Supported by the Vharanani Group.
              </h2>

              <div className="w-10 h-[2px] mb-6" style={{ background: 'var(--vharanani-burgundy)' }} />

              <p className="typo-copy font-inter text-white/60 mb-4">
                By leveraging the resources, expertise, and partnerships of our parent company, the Foundation scales its reach to build stronger, more resilient communities across South Africa.
              </p>

              <p className="typo-copy-small font-inter text-white/60 mb-8">
                The David Mabilu Foundation works closely with the Vharanani Group and its subsidiary companies to support social development initiatives. Through these relationships, the Foundation is able to leverage resources, expertise, and partnerships that enhance the reach and impact of its programmes.
              </p>

              {/* Group divisions */}
              <div className="grid grid-cols-3 gap-0" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
                {[
                  { icon: <Building2 size={16} />, label: 'Properties' },
                  { icon: <Home size={16} />, label: 'DMFT' },
                  { icon: <Heart size={16} />, label: 'Foundation' },
                ].map((item, i) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 p-4"
                    style={{ borderRight: i < 2 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}
                  >
                    <div style={{ color: 'var(--vharanani-burgundy)' }}>{item.icon}</div>
                    <span className="typo-meta tracking-[0.12em] uppercase font-inter text-white/60">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Image */}
          <div className="lg:col-span-5 relative min-h-[360px]">
            <ImageWithFallback
              src={IMAGES.communityGathering}
              alt="Vharanani Group community engagement"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{
              background: 'linear-gradient(180deg, rgba(129,41,33,0.2) 0%, rgba(0,0,0,0.5) 100%)'
            }} />
            {/* Overlaid quote */}
            <div className="absolute bottom-0 left-0 right-0 p-6" style={{ background: 'rgba(129,41,33,0.85)', backdropFilter: 'blur(4px)' }}>
              <p className="typo-copy-small font-inter italic text-white/80">
                "We build not just infrastructure, but the foundations for a dignified future."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}


// ═══════════════════════════════════════════════════════════
// SECTION 7: CONTACT & GET INVOLVED — Cinematic Form
// ═══════════════════════════════════════════════════════════

export function FoundationWireframe_Contact(): ReactNode {
  return (
    <div>
      <div className="overflow-hidden">
        {/* ── CONTACT HEADER BAND ── */}
        <div className="relative h-[28vh] min-h-[220px] overflow-hidden">
          <ImageWithFallback
            src={IMAGES.blanketDrive}
            alt="Community empowerment"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(180deg, rgba(129,41,33,0.6) 0%, rgba(0,0,0,0.9) 100%)'
          }} />
          <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-12 lg:px-20 pb-10">
            <div className="max-w-7xl mx-auto w-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[2px]" style={{ background: 'rgba(255,255,255,0.5)' }} />
                <span className="typo-caption tracking-[0.25em] uppercase font-inter text-white/50">
                  GET INVOLVED
                </span>
              </div>
              <h2 className="typo-header font-bebas-neue tracking-wide uppercase text-white" style={{ lineHeight: 0.95 }}>
                Join Us in Building<br />Opportunity.
              </h2>
            </div>
          </div>
        </div>

        {/* ── FORM SECTION ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Left — Contact info */}
          <div className="p-8 md:p-12 flex flex-col justify-center" style={{ background: '#812921' }}>
            <p className="typo-copy font-inter mb-8" style={{ color: 'rgba(255,255,255,0.8)' }}>
              Reach out for partnership opportunities, community initiatives, or support enquiries. Together, we can build stronger communities.
            </p>

            {/* Contact details */}
            <div className="space-y-0" style={{ border: '1px solid rgba(255,255,255,0.2)' }}>
              {[
                { icon: <Mail size={16} />, label: 'Email', value: 'info@vharanani.com' },
                { icon: <Phone size={16} />, label: 'Phone', value: '+27 (0) 11 XXX XXXX' },
                { icon: <MapPin size={16} />, label: 'Location', value: 'Johannesburg, South Africa' },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 p-5"
                  style={{ borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.2)' : 'none' }}
                >
                  <div className="w-10 h-10 flex items-center justify-center flex-shrink-0" style={{ border: '1px solid rgba(255,255,255,0.4)', color: 'white' }}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="typo-meta tracking-[0.12em] uppercase font-inter mb-0.5" style={{ color: 'rgba(255,255,255,0.6)' }}>{item.label}</div>
                    <div className="typo-copy-small font-inter text-white cursor-pointer hover:opacity-80 transition-opacity">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Foundation badge */}
            <div className="flex items-center gap-3 mt-8 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.2)' }}>
              <Layers size={14} style={{ color: 'rgba(255,255,255,0.6)' }} />
              <span className="typo-meta tracking-[0.15em] uppercase font-inter" style={{ color: 'rgba(255,255,255,0.6)' }}>
                A Vharanani Group Initiative
              </span>
            </div>
          </div>

          {/* Right — Form */}
          <div className="p-8 md:p-12" style={{ background: '#fafafa' }}>
            <div className="space-y-5">
              <div>
                <label className="typo-meta tracking-[0.12em] uppercase font-inter mb-2 block" style={{ color: 'var(--vharanani-charcoal-60)' }}>Name *</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full px-4 py-3 font-inter typo-copy-small text-base outline-none transition-colors duration-200 focus:border-[var(--vharanani-burgundy)] min-h-[48px]"
                  style={{ border: '1px solid var(--vharanani-charcoal-20)', background: 'white' }}
                />
              </div>
              <div>
                <label className="typo-meta tracking-[0.12em] uppercase font-inter mb-2 block" style={{ color: 'var(--vharanani-charcoal-60)' }}>Organisation <span style={{ color: 'var(--vharanani-charcoal-20)' }}>(Optional)</span></label>
                <input
                  type="text"
                  placeholder="Your organisation"
                  className="w-full px-4 py-3 font-inter typo-copy-small text-base outline-none transition-colors duration-200 focus:border-[var(--vharanani-burgundy)] min-h-[48px]"
                  style={{ border: '1px solid var(--vharanani-charcoal-20)', background: 'white' }}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                <label className="typo-meta tracking-[0.12em] uppercase font-inter mb-2 block" style={{ color: 'var(--vharanani-charcoal-60)' }}>Inquiry Type</label>
                <select
                  className="w-full px-4 py-3 font-inter typo-copy-small outline-none focus:outline-none transition-colors duration-200 focus:border-[var(--vharanani-burgundy)]"
                  style={{ border: '1px solid var(--vharanani-charcoal-20)', background: 'white', color: 'var(--vharanani-charcoal-60)' }}
                  defaultValue=""
                >
                  <option value="" disabled>Select inquiry type</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="support">Community Support</option>
                  <option value="general">General Enquiry</option>
                </select>
              </div>
              <div>
                <label className="typo-meta tracking-[0.12em] uppercase font-inter mb-2 block" style={{ color: 'var(--vharanani-charcoal-60)' }}>Message *</label>
                <textarea
                  placeholder="How can we work together?"
                  rows={4}
                  className="w-full px-4 py-3 font-inter typo-copy-small outline-none resize-none transition-colors duration-200 focus:border-[var(--vharanani-burgundy)]"
                  style={{ border: '1px solid var(--vharanani-charcoal-20)', background: 'white' }}
                />
              </div>
              <button
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 transition-all duration-300 hover:gap-3"
                style={{ background: 'var(--vharanani-burgundy)' }}
              >
                <span className="font-bebas-neue typo-headline-small tracking-wider uppercase text-white">Send Message</span>
                <ArrowRight size={14} className="text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Footer bar */}
        <div className="px-6 md:px-12 lg:px-20 py-5 flex flex-col sm:flex-row items-center justify-between gap-3" style={{ background: 'var(--vharanani-charcoal)', borderTop: '3px solid var(--vharanani-burgundy)' }}>
          <div className="flex items-center gap-4">
            <span className="font-bebas-neue typo-headline-small tracking-wider text-white uppercase">The David Mabilu Foundation</span>
            <div className="w-[1px] h-4" style={{ background: 'rgba(255,255,255,0.15)' }} />
            <div className="flex items-center gap-1.5">
              <Layers size={12} style={{ color: 'var(--vharanani-burgundy)' }} />
              <span className="typo-meta tracking-wider uppercase font-inter" style={{ color: 'rgba(255,255,255,0.6)' }}>Vharanani Group</span>
            </div>
          </div>
          <p className="typo-meta font-inter italic" style={{ color: 'rgba(255,255,255,0.5)' }}>
            "Building opportunity. Empowering communities."
          </p>
        </div>
      </div>
    </div>
  );
}