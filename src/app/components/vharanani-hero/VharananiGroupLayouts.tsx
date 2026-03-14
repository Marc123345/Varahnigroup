import { type ReactNode } from 'react';
import {
  Building2, Landmark, Heart, HardHat, Globe,
  Shield, Layers, MapPin, Mail, Phone,
  ArrowRight, Cpu, Plane, ChevronRight,
  Sprout, Route, TrendingUp, Users,
  Gavel, Scale, Eye, FileCheck, Lock,
} from 'lucide-react';
import { ImagePlaceholder } from '../common/ImagePlaceholder';

// ═══════════════════════════════════════════════════════════
// WIREFRAME LABEL — shows layout name/description
// ═══════════════════════════════════════════════════════════

function WireframeLabel({ layout, description }: { layout: string; description: string }) {
  return (
    <div className="mb-6 pb-4" style={{ borderBottom: '2px solid var(--vharanani-burgundy)' }}>
      <div className="flex items-center gap-3 mb-1">
        <div
          className="typo-caption tracking-[0.2em] uppercase px-2 py-1 font-inter"
          style={{ color: 'white', background: 'var(--vharanani-burgundy)' }}
        >
          WIREFRAME
        </div>
        <div
          className="font-bebas-neue typo-headline-small tracking-wide uppercase"
          style={{ color: 'var(--vharanani-charcoal)' }}
        >
          {layout}
        </div>
      </div>
      <div className="font-inter typo-copy-small mt-1" style={{ color: 'var(--vharanani-charcoal-60)' }}>
        {description}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// WIREFRAME SPEC — shows layout structural notes
// ═══════════════════════════════════════════════════════════

function WireframeSpec({ items }: { items: string[] }) {
  return (
    <div className="mt-6 pt-4" style={{ borderTop: '1px dashed var(--vharanani-charcoal-20)' }}>
      <div className="typo-caption tracking-[0.15em] uppercase mb-2 font-inter" style={{ color: 'var(--vharanani-charcoal-60)' }}>
        LAYOUT SPEC
      </div>
      <div className="space-y-1">
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-2">
            <div className="w-1 h-1 mt-[6px] flex-shrink-0" style={{ background: 'var(--vharanani-burgundy)' }} />
            <div className="font-inter typo-meta" style={{ color: 'var(--vharanani-charcoal-60)' }}>{item}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// SECTION 2: EXECUTIVE SUMMARY — Two-column split (60/40)
// ═══════════════════════════════════════════════════════════

export function GroupWireframe_ExecutiveSummary(): ReactNode {
  return (
    <div>
      <WireframeLabel
        layout="Two-Column Split (60 / 40)"
        description="Executive summary with architectural image left, narrative + animated counters right"
      />

      {/* Wireframe Preview */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-0 overflow-hidden" style={{ border: '2px solid var(--vharanani-charcoal-20)' }}>
        {/* Left Column — 60% (3 of 5) */}
        <div className="md:col-span-3 relative h-[320px] md:h-auto">
          <ImagePlaceholder label="Architectural Detail" className="absolute inset-0 w-full h-full" />
          {/* Wireframe overlay annotation */}
          <div className="absolute bottom-3 left-3 px-2 py-1" style={{ background: 'rgba(0,0,0,0.7)' }}>
            <span className="font-inter typo-meta text-white tracking-wider uppercase">60% — B&W Image / Architectural Detail</span>
          </div>
        </div>

        {/* Right Column — 40% (2 of 5) */}
        <div className="md:col-span-2 p-6 md:p-8 flex flex-col justify-center" style={{ background: 'rgba(44,45,45,0.02)' }}>
          {/* Tagline */}
          <div
            className="typo-caption tracking-[0.3em] uppercase font-inter mb-4"
            style={{ color: 'var(--vharanani-burgundy)' }}
          >
            WHO WE ARE
          </div>

          {/* Body text */}
          <div className="font-inter typo-copy mb-6" style={{ color: 'var(--vharanani-charcoal)' }}>
            Vharani Group is an innovation-driven African conglomerate founded and led by David Mabilu. With a diversified portfolio spanning construction, property development, mining, technology, aviation, and philanthropy.
          </div>

          {/* Counter Animation Stats */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { value: '20+', label: 'Years Experience' },
              { value: '6+', label: 'Diversified Sectors' },
              { value: '100%', label: 'Black-Owned' },
            ].map((stat, i) => (
              <div key={i} className="text-center p-3" style={{ borderTop: '3px solid var(--vharanani-burgundy)', background: 'rgba(137,43,28,0.04)' }}>
                <div className="font-bebas-neue typo-subline" style={{ color: 'var(--vharanani-burgundy)' }}>
                  {stat.value}
                </div>
                <div className="font-inter typo-meta tracking-wider uppercase mt-1" style={{ color: 'var(--vharanani-charcoal-60)' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Wireframe annotation */}
          <div className="mt-4 px-2 py-1 inline-block" style={{ background: 'rgba(137,43,28,0.08)', border: '1px dashed var(--vharanani-burgundy-60)' }}>
            <span className="font-inter typo-meta tracking-wider uppercase" style={{ color: 'var(--vharanani-burgundy)' }}>↑ Counter animation on scroll</span>
          </div>
        </div>
      </div>

      <WireframeSpec items={[
        'Grid: 60/40 split — CSS grid-cols-5 (3 + 2)',
        'Left: Full-bleed B&W image with CSS grayscale filter',
        'Right: Small-caps tagline + body + 3-column stat counters',
        'Stats: Counter animation triggers on scroll-into-view',
        'Mobile: Stack vertically, image on top',
      ]} />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// SECTION 3: PORTFOLIO GRID — Three-card interactive Bento
// ══════════════════════════════════════════════════════════

export function GroupWireframe_PortfolioGrid(): ReactNode {
  const cards = [
    {
      label: 'Construction & Infrastructure',
      company: 'Vharani Properties',
      focus: 'Construction & Infrastructure',
      description: 'Delivering large-scale civil engineering and infrastructure projects across South Africa.',
      icon: <Building2 size={20} />,
    },
    {
      label: 'Property Development',
      company: 'DMFT Property Developers',
      focus: 'Property Development & Investments',
      description: 'Managing strategic real estate assets and long-term property investments.',
      icon: <Landmark size={20} />,
    },
    {
      label: 'Social Impact',
      company: 'David Mabilu Foundation',
      focus: 'Social Impact',
      description: 'Advancing education, housing access, entrepreneurship, and community upliftment.',
      icon: <Heart size={20} />,
    },
  ];

  return (
    <div>
      <WireframeLabel
        layout="Three-Card Interactive Bento Grid"
        description="Portfolio grid with hover-expand cards showing subsidiary companies and sector expertise"
      />

      {/* Wireframe Preview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards.map((card, i) => (
          <div
            key={i}
            className="group relative overflow-hidden transition-all duration-300 hover:-translate-y-1"
            style={{ border: '2px solid var(--vharanani-charcoal-20)' }}
          >
            {/* Card Image */}
            <div className="relative h-[200px] overflow-hidden">
              <ImagePlaceholder label={card.label} className="absolute inset-0 w-full h-full" />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              {/* Company name on image */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-bebas-neue typo-subline tracking-wide text-white">
                  {card.company}
                </h3>
              </div>
              {/* Hover reveal link */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-2 py-1 flex items-center gap-1" style={{ background: 'var(--vharanani-burgundy)' }}>
                <span className="font-inter typo-meta text-white tracking-wider uppercase">View Details</span>
                <ArrowRight size={10} className="text-white" />
              </div>
            </div>

            {/* Card Body */}
            <div className="p-4" style={{ background: 'rgba(44,45,45,0.02)' }}>
              <div className="flex items-center gap-2 mb-2">
                <div style={{ color: 'var(--vharanani-burgundy)' }}>{card.icon}</div>
                <div className="typo-caption tracking-[0.15em] uppercase font-inter" style={{ color: 'var(--vharanani-burgundy)' }}>
                  {card.focus}
                </div>
              </div>
              <div className="font-inter typo-copy-small" style={{ color: 'var(--vharanani-charcoal-60)' }}>
                {card.description}
              </div>
            </div>

            {/* Bottom accent line */}
            <div className="h-[3px] w-0 group-hover:w-full transition-all duration-500" style={{ background: 'var(--vharanani-burgundy)' }} />
          </div>
        ))}
      </div>

      {/* Wireframe annotation */}
      <div className="mt-3 flex items-center gap-2">
        <div className="px-2 py-1" style={{ background: 'rgba(137,43,28,0.08)', border: '1px dashed var(--vharanani-burgundy-60)' }}>
          <span className="font-inter typo-meta tracking-wider uppercase" style={{ color: 'var(--vharanani-burgundy)' }}>Hover: cards expand + reveal CTA link</span>
        </div>
      </div>

      <WireframeSpec items={[
        'Grid: 3-column equal cards (responsive stack on mobile)',
        'Image: 200px height with gradient overlay + company name',
        'Hover: translateY(-4px) + image scale(1.05) + reveal "View Details" CTA',
        'Bottom accent: 3px burgundy line animates width on hover',
        'Interaction: Cards link to respective division overlays',
      ]} />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// SECTION 4: STRATEGIC PILLARS — Horizontal step/timeline
// ═══════════════════════════════════════════════════════════

export function GroupWireframe_StrategicPillars(): ReactNode {
  const pillars = [
    { icon: <HardHat size={24} />, title: 'Infrastructure', description: 'Roads, bridges, clinics, schools, and essential services supporting national growth.', step: '01' },
    { icon: <Landmark size={24} />, title: 'Asset Ownership', description: 'Developing and managing long-term property assets for sustainable economic value.', step: '02' },
    { icon: <Cpu size={24} />, title: 'Innovation', description: 'Exploring growth in technology, aviation, and resource-driven industries.', step: '03' },
    { icon: <Heart size={24} />, title: 'Social Impact', description: 'Investing in education, entrepreneurship, and inclusive community development.', step: '04' },
  ];

  return (
    <div>
      <WireframeLabel
        layout="Horizontal Step / Timeline Layout"
        description="Four strategic pillars as stepped progression with connecting line and minimalist icons"
      />

      {/* Light grey background section */}
      <div className="p-6 md:p-8" style={{ background: 'var(--vharanani-charcoal-20)', border: '2px solid var(--vharanani-charcoal-20)' }}>
        {/* Section heading */}
        <div className="text-center mb-8">
          <div className="typo-caption tracking-[0.3em] uppercase font-inter mb-2" style={{ color: 'var(--vharanani-burgundy)' }}>
            THE FOUNDATION
          </div>
          <h3 className="font-bebas-neue typo-subline" style={{ color: 'var(--vharanani-charcoal)' }}>
            Strategic Pillars
          </h3>
        </div>

        {/* Horizontal timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-[2px]" style={{ background: 'var(--vharanani-burgundy-60)' }} />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {pillars.map((pillar, i) => (
              <div key={i} className="text-center relative">
                {/* Step number + icon */}
                <div className="relative inline-flex flex-col items-center mb-4">
                  <div className="typo-meta font-inter mb-1" style={{ color: 'var(--vharanani-burgundy)' }}>{pillar.step}</div>
                  <div
                    className="w-[56px] h-[56px] flex items-center justify-center relative z-10"
                    style={{ background: 'white', border: '2px solid var(--vharanani-burgundy)' }}
                  >
                    <div style={{ color: 'var(--vharanani-burgundy)' }}>{pillar.icon}</div>
                  </div>
                </div>

                {/* Text */}
                <div className="font-bebas-neue typo-headline-small tracking-wide mb-2" style={{ color: 'var(--vharanani-charcoal)' }}>
                  {pillar.title}
                </div>
                <div className="font-inter typo-copy-small" style={{ color: 'var(--vharanani-charcoal-60)' }}>
                  {pillar.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <WireframeSpec items={[
        'Background: Light grey (#d5d5d5) to separate from visual sections',
        'Grid: 4-column horizontal on desktop, vertical stack on mobile',
        'Icons: 56px square containers with 2px burgundy border, white fill',
        'Connecting line: 2px horizontal at icon center height (desktop only)',
        'Typography: Bebas Neue title + Inter description per pillar',
      ]} />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// SECTION 5: LEADERSHIP FEATURE — Focus/Spotlight layout
// ═══════════════════════════════════════════════════════════

export function GroupWireframe_Leadership(): ReactNode {
  return (
    <div>
      <WireframeLabel
        layout="Focus / Spotlight Layout"
        description="Deep charcoal background with centered portrait left and vision statement right"
      />

      {/* Wireframe Preview */}
      <div
        className="relative overflow-hidden"
        style={{ background: 'var(--vharanani-charcoal)', border: '2px solid var(--vharanani-charcoal)' }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Left: Portrait */}
          <div className="relative h-[300px] md:h-[400px] flex items-end justify-center overflow-hidden" style={{ background: 'var(--vharanani-charcoal)' }}>
            {/* Wireframe portrait placeholder */}
            <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ background: '#e5e5e5', border: '2px dashed #999' }}>
              {/* Diagonal cross lines */}
              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                <line x1="0" y1="0" x2="100%" y2="100%" stroke="#bbb" strokeWidth="1" />
                <line x1="100%" y1="0" x2="0" y2="100%" stroke="#bbb" strokeWidth="1" />
              </svg>
              {/* Person silhouette icon */}
              <div className="relative z-10 flex flex-col items-center gap-3">
                <div className="w-16 h-16 flex items-center justify-center" style={{ border: '2px solid #999' }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="1.5">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1" />
                  </svg>
                </div>
                <span className="font-inter typo-meta tracking-[0.2em] uppercase" style={{ color: '#888' }}>Portrait Placeholder</span>
                <span className="font-inter typo-meta tracking-wider" style={{ color: '#aaa' }}>Branded photo TBD</span>
              </div>
            </div>
            {/* Gradient fade into charcoal */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[var(--vharanani-charcoal)] hidden md:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--vharanani-charcoal)] via-transparent to-transparent md:hidden" />
            {/* Wireframe annotation */}
            <div className="absolute bottom-3 left-3 px-2 py-1" style={{ background: 'rgba(137,43,28,0.9)' }}>
              <span className="font-inter typo-meta text-white tracking-wider uppercase">Portrait — Transparent BG</span>
            </div>
          </div>

          {/* Right: Bio & Quote */}
          <div className="p-6 md:p-10 flex flex-col justify-center" style={{ background: 'var(--vharanani-charcoal)' }}>
            <div className="typo-caption tracking-[0.3em] uppercase font-inter mb-3" style={{ color: 'var(--vharanani-burgundy)' }}>
              FOUNDER & GROUP EXECUTIVE CHAIRMAN
            </div>
            <h2 className="font-bebas-neue typo-headline-big mb-4" style={{ color: 'white' }}>
              David Mabilu
            </h2>
            <div className="font-inter typo-copy mb-6" style={{ color: 'var(--vharanani-charcoal-40)' }}>
              David Mabilu founded Vharani Group with a clear vision: to build a diversified African enterprise rooted in infrastructure, ownership, and impact. With over two decades of experience, he has led the Group's expansion across multiple sectors.
            </div>

            {/* Quote callout */}
            <div className="p-5" style={{ borderLeft: '3px solid var(--vharanani-burgundy)', background: 'rgba(137,43,28,0.08)' }}>
              <div
                className="font-inter typo-headline-small italic"
                style={{ lineHeight: '1.6', color: 'white' }}
              >
                "Building a diversified African enterprise rooted in infrastructure, ownership, and impact."
              </div>
              <div className="mt-2 flex items-center gap-2">
                <div className="w-6 h-[1px]" style={{ background: 'var(--vharanani-burgundy)' }} />
                <div className="font-inter typo-meta tracking-wider uppercase" style={{ color: 'var(--vharanani-burgundy)' }}>David Mabilu</div>
              </div>
            </div>

            {/* Wireframe annotation */}
            <div className="mt-4 px-2 py-1 inline-block" style={{ background: 'rgba(137,43,28,0.15)', border: '1px dashed var(--vharanani-burgundy-60)' }}>
              <span className="font-inter typo-meta tracking-wider uppercase" style={{ color: 'var(--vharanani-burgundy-80)' }}>↑ Large italic serif for premium feel</span>
            </div>
          </div>
        </div>
      </div>

      <WireframeSpec items={[
        'Background: Deep charcoal (#2C2D2D) for spotlight effect',
        'Left: Professional portrait with transparent BG, gradient fade to charcoal',
        'Right: Title hierarchy + vision statement + italic serif quote callout',
        'Quote: 3px burgundy left border, slightly enlarged italic font',
        'Mobile: Stack portrait above bio, gradient fade downward',
      ]} />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// SECTION 6: IMPACT & GOVERNANCE — Two-row horizontal strip
// ═══════════════════════════════════════════════════════════

export function GroupWireframe_ImpactGovernance(): ReactNode {
  const impactImages = [
    { label: 'Schools Built' },
    { label: 'Housing Delivered' },
    { label: 'Communities Served' },
  ];

  const governancePillars = [
    { icon: <Shield size={20} />, label: 'Ethical Leadership' },
    { icon: <Layers size={20} />, label: 'Financial Discipline' },
    { icon: <Globe size={20} />, label: 'Risk Management' },
  ];

  return (
    <div>
      <WireframeLabel
        layout="Two-Row Horizontal Strip"
        description="Row 1: Impact tiled images — Row 2: Governance compliance ribbon with icons"
      />

      {/* Row 1: Impact */}
      <div style={{ border: '2px solid var(--vharanani-charcoal-20)' }}>
        <div className="p-4 md:p-6" style={{ borderBottom: '2px solid var(--vharanani-charcoal-20)' }}>
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="typo-caption tracking-[0.3em] uppercase font-inter mb-1" style={{ color: 'var(--vharanani-burgundy)' }}>
                IMPACT
              </div>
              <h3 className="font-bebas-neue typo-subline" style={{ color: 'var(--vharanani-charcoal)' }}>
                Driving Sustainable Impact
              </h3>
            </div>
            <div className="px-2 py-1" style={{ background: 'rgba(137,43,28,0.08)', border: '1px dashed var(--vharanani-burgundy-60)' }}>
              <span className="font-inter typo-meta tracking-wider uppercase" style={{ color: 'var(--vharanani-burgundy)' }}>ROW 1</span>
            </div>
          </div>

          {/* Tiled images */}
          <div className="grid grid-cols-3 gap-3">
            {impactImages.map((img, i) => (
              <div key={i} className="relative h-[140px] md:h-[180px] overflow-hidden group">
                <ImagePlaceholder label={img.label} className="absolute inset-0 w-full h-full" />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Governance Compliance Ribbon */}
        <div className="p-4 md:p-6" style={{ background: 'rgba(44,45,45,0.03)' }}>
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="typo-caption tracking-[0.3em] uppercase font-inter mb-1" style={{ color: 'var(--vharanani-burgundy)' }}>
                GOVERNANCE
              </div>
              <div className="font-bebas-neue typo-headline-small" style={{ color: 'var(--vharanani-charcoal)' }}>
                Corporate Credibility
              </div>
            </div>
            <div className="px-2 py-1" style={{ background: 'rgba(137,43,28,0.08)', border: '1px dashed var(--vharanani-burgundy-60)' }}>
              <span className="font-inter typo-meta tracking-wider uppercase" style={{ color: 'var(--vharanani-burgundy)' }}>ROW 2</span>
            </div>
          </div>

          {/* Compliance Ribbon */}
          <div className="grid grid-cols-3 gap-4">
            {governancePillars.map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center p-4"
                style={{ borderTop: '3px solid var(--vharanani-burgundy)', background: 'white' }}
              >
                <div className="w-[48px] h-[48px] flex items-center justify-center mb-3" style={{ border: '1px solid var(--vharanani-charcoal-20)' }}>
                  <div style={{ color: 'var(--vharanani-burgundy)' }}>{item.icon}</div>
                </div>
                <div className="font-bebas-neue typo-headline-small tracking-wide" style={{ color: 'var(--vharanani-charcoal)' }}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <WireframeSpec items={[
        'Row 1: 3-column tiled images with gradient overlay + label',
        'Row 2: "Compliance Ribbon" — 3 icon blocks with top burgundy accent',
        'Structure: Clear horizontal division between Impact and Governance',
        'Icons: 48px square containers, centered with label below',
        'Purpose: Builds corporate credibility and trust indicators',
      ]} />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// SECTION 7: NEWS & CONTACT — Clean Footer-Lite
// ═══════════════════════════════════════════════════════════

export function GroupWireframe_NewsContact(): ReactNode {
  const newsItems = [
    { date: 'Mar 2026', title: 'Vharani Group Expands Mining Portfolio', tag: 'CORPORATE' },
    { date: 'Feb 2026', title: 'New Infrastructure Contract Awarded in Limpopo', tag: 'PROJECTS' },
    { date: 'Jan 2026', title: 'DMF Scholarship Programme Reaches 50 Learners', tag: 'FOUNDATION' },
  ];

  return (
    <div>
      <WireframeLabel
        layout="Clean Footer-Lite"
        description="News cards + contact form left, head office info right, with footer tagline"
      />

      <div style={{ border: '2px solid var(--vharanani-charcoal-20)' }}>
        {/* News Row */}
        <div className="p-4 md:p-6" style={{ borderBottom: '2px solid var(--vharanani-charcoal-20)' }}>
          <div className="typo-caption tracking-[0.3em] uppercase font-inter mb-4" style={{ color: 'var(--vharanani-burgundy)' }}>
            LATEST NEWS
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {newsItems.map((item, i) => (
              <div key={i} className="p-4 group cursor-pointer transition-colors hover:bg-[rgba(137,43,28,0.03)]" style={{ border: '1px solid var(--vharanani-charcoal-20)' }}>
                <div className="flex items-center gap-2 mb-2">
                  <div className="typo-meta tracking-[0.15em] uppercase font-inter px-2 py-0.5" style={{ color: 'var(--vharanani-burgundy)', border: '1px solid var(--vharanani-burgundy)' }}>
                    {item.tag}
                  </div>
                  <div className="typo-meta font-inter" style={{ color: 'var(--vharanani-charcoal-60)' }}>{item.date}</div>
                </div>
                <div className="font-bebas-neue typo-headline-small tracking-wide group-hover:underline" style={{ color: 'var(--vharanani-charcoal)' }}>
                  {item.title}
                </div>
                <div className="flex items-center gap-1 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="font-inter typo-meta tracking-wider uppercase" style={{ color: 'var(--vharanani-burgundy)' }}>Read More</span>
                  <ChevronRight size={10} style={{ color: 'var(--vharanani-burgundy)' }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Contact Form (left) */}
          <div className="p-4 md:p-6" style={{ borderRight: '2px solid var(--vharanani-charcoal-20)' }}>
            <div className="typo-caption tracking-[0.3em] uppercase font-inter mb-4" style={{ color: 'var(--vharanani-burgundy)' }}>
              GET IN TOUCH
            </div>
            <div className="space-y-3">
              {['Name', 'Email', 'Message'].map((field, i) => (
                <div key={i}>
                  <div className="typo-meta tracking-[0.1em] uppercase font-inter mb-1" style={{ color: 'var(--vharanani-charcoal-60)' }}>
                    {field}
                  </div>
                  <div
                    className={`w-full ${field === 'Message' ? 'h-[60px]' : 'h-[36px]'}`}
                    style={{ border: '1px solid var(--vharanani-charcoal-20)', background: 'rgba(44,45,45,0.03)' }}
                  />
                </div>
              ))}
              <div className="flex items-center gap-2 mt-2">
                <div className="px-4 py-2 cursor-pointer" style={{ background: 'var(--vharanani-burgundy)' }}>
                  <span className="font-bebas-neue typo-headline-small tracking-wider text-white">Submit</span>
                </div>
                <div className="px-2 py-1" style={{ background: 'rgba(137,43,28,0.08)', border: '1px dashed var(--vharanani-burgundy-60)' }}>
                  <span className="font-inter typo-meta tracking-wider uppercase" style={{ color: 'var(--vharanani-burgundy)' }}>Simple 3-field form</span>
                </div>
              </div>
            </div>
          </div>

          {/* Head Office Info (right) */}
          <div className="p-4 md:p-6" style={{ background: 'rgba(44,45,45,0.03)' }}>
            <div className="typo-caption tracking-[0.3em] uppercase font-inter mb-4" style={{ color: 'var(--vharanani-burgundy)' }}>
              HEAD OFFICE
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--vharanani-burgundy)' }} />
                <div>
                  <div className="font-inter typo-copy-small" style={{ color: 'var(--vharanani-charcoal)' }}>18 Hume Road</div>
                  <div className="font-inter typo-copy-small" style={{ color: 'var(--vharanani-charcoal-60)' }}>Dunkeld West, Johannesburg</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="flex-shrink-0" style={{ color: 'var(--vharanani-burgundy)' }} />
                <div className="font-inter typo-copy-small" style={{ color: 'var(--vharanani-charcoal)' }}>+27 11 656 1418</div>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="flex-shrink-0" style={{ color: 'var(--vharanani-burgundy)' }} />
                <div className="font-inter typo-copy-small" style={{ color: 'var(--vharanani-burgundy)' }}>info@vharanani.com</div>
              </div>

              {/* Social links placeholder */}
              <div className="pt-3 mt-3" style={{ borderTop: '1px solid var(--vharanani-charcoal-20)' }}>
                <div className="typo-meta tracking-[0.15em] uppercase font-inter mb-2" style={{ color: 'var(--vharanani-charcoal-60)' }}>Social</div>
                <div className="flex gap-2">
                  {['Li', 'Tw', 'Fb'].map((social, i) => (
                    <div key={i} className="w-8 h-8 flex items-center justify-center" style={{ border: '1px solid var(--vharanani-charcoal-20)' }}>
                      <span className="font-inter typo-meta" style={{ color: 'var(--vharanani-charcoal-60)' }}>{social}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Tagline */}
        <div className="p-4 text-center" style={{ background: 'var(--vharanani-charcoal)', borderTop: '2px solid var(--vharanani-charcoal)' }}>
          <div className="font-bebas-neue typo-headline-small tracking-wider" style={{ color: 'white' }}>
            Vharani Group
          </div>
          <div className="font-inter typo-meta mt-1" style={{ color: 'var(--vharanani-charcoal-40)' }}>
            Building sustainable enterprises. Advancing African growth.
          </div>
        </div>
      </div>

      <WireframeSpec items={[
        'News: 3 small cards with tag, date, title, hover-reveal "Read More"',
        'Contact: Simple 3-field form (Name, Email, Message) on the left',
        'Office: Address (18 Hume Rd), phone, email, social icons on the right',
        'Footer bar: Charcoal background with company name + tagline',
        'Mobile: Stack news cards vertically, form above office info',
      ]} />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// SECTION 8: VISION & MISSION — 2×2 Grid "Four Pillars of Purpose"
// ═══════════════════════════════════════════════════════════

export function GroupWireframe_VisionMission(): ReactNode {
  const missionPillars = [
    {
      icon: <Sprout size={28} />,
      text: 'Develop sustainable businesses across high-impact sectors.',
      label: 'SUSTAINABLE GROWTH',
    },
    {
      icon: <Route size={28} />,
      text: 'Deliver infrastructure that improves quality of life.',
      label: 'INFRASTRUCTURE',
    },
    {
      icon: <TrendingUp size={28} />,
      text: 'Build and manage long-term asset portfolios.',
      label: 'ASSET MANAGEMENT',
    },
    {
      icon: <Users size={28} />,
      text: 'Foster entrepreneurship and community development.',
      label: 'COMMUNITY',
    },
  ];

  return (
    <div>
      <WireframeLabel
        layout="Vision Statement + 2×2 Mission Grid"
        description="Hero vision callout at top, followed by four mission pillar cards in a balanced 2×2 grid"
      />

      {/* Vision Statement — full-width callout */}
      <div className="mb-6 p-6 md:p-8" style={{ background: 'var(--vharanani-charcoal)', border: '2px solid var(--vharanani-charcoal)' }}>
        <div className="typo-caption tracking-[0.3em] uppercase font-inter mb-3" style={{ color: 'var(--vharanani-burgundy)' }}>
          OUR VISION
        </div>
        <h3
          className="font-bebas-neue typo-subline mb-4"
          style={{ color: 'white' }}
        >
          To build a diversified African enterprise that strengthens national infrastructure, drives innovation, and advances inclusive economic growth.
        </h3>
        <div className="font-inter typo-copy" style={{ color: 'var(--vharanani-charcoal-40)' }}>
          Founded by David Mabilu, Vharani Group is a wholly Black-owned holding company headquartered in South Africa. Since its establishment, the Group has developed a diversified portfolio across construction, property development, mining, technology, aviation, and philanthropy.
        </div>
        {/* Wireframe annotation */}
        <div className="mt-4 px-2 py-1 inline-block" style={{ background: 'rgba(137,43,28,0.15)', border: '1px dashed var(--vharanani-burgundy-60)' }}>
          <span className="font-inter typo-meta tracking-wider uppercase" style={{ color: 'var(--vharanani-burgundy-80)' }}>Dark block — cinematic vision statement</span>
        </div>
      </div>

      {/* Mission Header */}
      <div className="text-center mb-6">
        <div className="typo-caption tracking-[0.3em] uppercase font-inter mb-2" style={{ color: 'var(--vharanani-burgundy)' }}>
          THE FOUR PILLARS OF PURPOSE
        </div>
        <h3 className="font-bebas-neue typo-subline" style={{ color: 'var(--vharanani-charcoal)' }}>
          Our Mission
        </h3>
      </div>

      {/* 2×2 Mission Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {missionPillars.map((pillar, i) => (
          <div
            key={i}
            className="group p-6 transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: 'white',
              border: '2px solid var(--vharanani-charcoal-20)',
              boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
            }}
          >
            {/* Icon container */}
            <div
              className="w-[56px] h-[56px] flex items-center justify-center mb-4 transition-colors duration-300"
              style={{
                border: '2px solid var(--vharanani-burgundy)',
                background: 'rgba(137,43,28,0.04)',
              }}
            >
              <div style={{ color: 'var(--vharanani-burgundy)' }}>{pillar.icon}</div>
            </div>

            {/* Label */}
            <div className="typo-caption tracking-[0.2em] uppercase font-inter mb-2" style={{ color: 'var(--vharanani-burgundy)' }}>
              {pillar.label}
            </div>

            {/* Text */}
            <div className="font-inter typo-copy" style={{ color: 'var(--vharanani-charcoal)' }}>
              {pillar.text}
            </div>

            {/* Bottom accent line on hover */}
            <div className="h-[3px] w-0 group-hover:w-full transition-all duration-500 mt-4" style={{ background: 'var(--vharanani-burgundy)' }} />
          </div>
        ))}
      </div>

      {/* Wireframe annotation */}
      <div className="mt-3 flex items-center gap-2">
        <div className="px-2 py-1" style={{ background: 'rgba(137,43,28,0.08)', border: '1px dashed var(--vharanani-burgundy-60)' }}>
          <span className="font-inter typo-meta tracking-wider uppercase" style={{ color: 'var(--vharanani-burgundy)' }}>White cards on light grey BG — crisp pop effect</span>
        </div>
      </div>

      <WireframeSpec items={[
        'Vision: Full-width charcoal block with Bebas Neue headline + Inter body',
        'Mission: 2×2 grid — each card has icon (56px square), small-caps label, body text',
        'Cards: White bg with subtle shadow on light grey section bg for "pop" effect',
        'Icons: Abstract geometric — Sprout, Route, TrendingUp, Users from Lucide',
        'Hover: translateY(-2px) + 3px burgundy bottom accent animates width',
        'Mobile: Stack cards vertically in single column',
      ]} />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// SECTION 9: GOVERNANCE & COMPLIANCE — Asymmetric Split (40/60) + Node Infographic
// ═══════════════════════════════════════════════════════════

export function GroupWireframe_Governance(): ReactNode {
  const frameworkNodes = [
    { icon: <Gavel size={20} />, label: 'Ethical Leadership', description: 'Principled decision-making at every level' },
    { icon: <FileCheck size={20} />, label: 'Regulatory Compliance', description: 'Adherence to all statutory requirements' },
    { icon: <Scale size={20} />, label: 'Financial Discipline', description: 'Rigorous fiscal management and oversight' },
    { icon: <Shield size={20} />, label: 'Risk Management', description: 'Proactive identification and mitigation' },
    { icon: <Eye size={20} />, label: 'Transparent Reporting', description: 'Open stakeholder communication' },
  ];

  return (
    <div>
      <WireframeLabel
        layout="Asymmetric Split (40 / 60) with Node Infographic"
        description="Left column: governance mandate text — Right column: shield/node visualization of 5 framework pillars"
      />

      <div className="grid grid-cols-1 md:grid-cols-5 gap-0 overflow-hidden" style={{ border: '2px solid var(--vharanani-charcoal-20)' }}>
        {/* Left Column — 40% (2 of 5): Core Mandate */}
        <div className="md:col-span-2 p-6 md:p-8 flex flex-col justify-center" style={{ background: 'rgba(44,45,45,0.02)' }}>
          <div className="typo-caption tracking-[0.3em] uppercase font-inter mb-3" style={{ color: 'var(--vharanani-burgundy)' }}>
            STRUCTURAL FRAMEWORK
          </div>
          <h2
            className="font-bebas-neue typo-headline-big mb-4"
            style={{ color: 'var(--vharanani-charcoal)' }}
          >
            Governance & Compliance
          </h2>
          <div className="font-inter typo-copy mb-6" style={{ color: 'var(--vharanani-charcoal)' }}>
            Vharani Group operates under a structured governance framework that emphasizes accountability, integrity, and operational excellence across all portfolio companies.
          </div>
          <div className="p-5" style={{ borderLeft: '3px solid var(--vharanani-burgundy)', background: 'rgba(137,43,28,0.04)' }}>
            <div className="font-inter typo-copy italic" style={{ color: 'var(--vharanani-charcoal)' }}>
              Our governance model ensures operational excellence and long-term stability across all portfolio companies.
            </div>
          </div>
          {/* Wireframe annotation */}
          <div className="mt-4 px-2 py-1 inline-block" style={{ background: 'rgba(137,43,28,0.08)', border: '1px dashed var(--vharanani-burgundy-60)' }}>
            <span className="font-inter typo-meta tracking-wider uppercase" style={{ color: 'var(--vharanani-burgundy)' }}>40% — Core mandate text block</span>
          </div>
        </div>

        {/* Right Column — 60% (3 of 5): Framework Visualization */}
        <div className="md:col-span-3 p-6 md:p-8" style={{ background: 'var(--vharanani-charcoal)' }}>
          {/* Central Shield Element */}
          <div className="flex flex-col items-center mb-8">
            <div
              className="w-[80px] h-[80px] flex items-center justify-center mb-3"
              style={{ border: '3px solid var(--vharanani-burgundy)', background: 'rgba(137,43,28,0.15)' }}
            >
              <Lock size={32} style={{ color: 'var(--vharanani-burgundy)' }} />
            </div>
            <div className="font-bebas-neue typo-headline-small tracking-wider" style={{ color: 'white' }}>
              Governance Framework
            </div>
            <div className="font-inter typo-meta tracking-wider uppercase mt-1" style={{ color: 'var(--vharanani-charcoal-40)' }}>
              Five interconnected pillars
            </div>
            {/* Wireframe annotation */}
            <div className="mt-2 px-2 py-1" style={{ background: 'rgba(137,43,28,0.15)', border: '1px dashed var(--vharanani-burgundy-60)' }}>
              <span className="font-inter typo-meta tracking-wider uppercase" style={{ color: 'var(--vharanani-burgundy-80)' }}>Central shield — anchor element</span>
            </div>
          </div>

          {/* Five Framework Nodes */}
          <div className="space-y-3">
            {frameworkNodes.map((node, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 transition-all duration-300 hover:translate-x-1"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  borderLeft: '3px solid var(--vharanani-burgundy)',
                }}
              >
                {/* Step indicator */}
                <div className="font-bebas-neue typo-subline flex-shrink-0" style={{ color: 'var(--vharanani-burgundy)', opacity: 0.5 }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                {/* Icon */}
                <div
                  className="w-[44px] h-[44px] flex-shrink-0 flex items-center justify-center"
                  style={{ border: '1px solid var(--vharanani-burgundy)', background: 'rgba(137,43,28,0.1)' }}
                >
                  <div style={{ color: 'var(--vharanani-burgundy)' }}>{node.icon}</div>
                </div>
                {/* Text */}
                <div className="flex-1 min-w-0">
                  <div className="font-bebas-neue typo-headline-small tracking-wide" style={{ color: 'white' }}>
                    {node.label}
                  </div>
                  <div className="font-inter typo-meta" style={{ color: 'var(--vharanani-charcoal-40)' }}>
                    {node.description}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Wireframe annotation */}
          <div className="mt-4 px-2 py-1 inline-block" style={{ background: 'rgba(137,43,28,0.15)', border: '1px dashed var(--vharanani-burgundy-60)' }}>
            <span className="font-inter typo-meta tracking-wider uppercase" style={{ color: 'var(--vharanani-burgundy-80)' }}>60% — Node infographic, fade-in on scroll</span>
          </div>
        </div>
      </div>

      <WireframeSpec items={[
        'Layout: Asymmetric 40/60 split — CSS grid-cols-5 (2 + 3)',
        'Left: Light bg with governance mandate text + italic quote callout',
        'Right: Dark charcoal bg with central shield icon + 5 horizontal node bars',
        'Nodes: Left-border burgundy accent, numbered 01–05, icon + label + description',
        'Interaction: Nodes slide/fade in one-by-one on scroll (staggered animation)',
        'Hover: Nodes shift right 4px (translateX) for subtle interactivity',
      ]} />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// SECTION 10: OUR COMPANIES — Stacked Company Cards
// ═══════════════════════════════════════════════════════════

export function GroupWireframe_Companies(): ReactNode {
  const companies = [
    {
      name: 'Vharani Properties',
      tag: 'CONSTRUCTION',
      imageLabel: 'Construction & Engineering',
      icon: <Building2 size={20} />,
      description: 'Construction, civil engineering, infrastructure development, and facilities management. Delivering large-scale public and private sector projects across South Africa.',
      stats: [
        { label: 'Focus', value: 'Infrastructure' },
        { label: 'Scale', value: 'National' },
        { label: 'Sector', value: 'Public & Private' },
      ],
    },
    {
      name: 'DMFT Property Developers',
      tag: 'PROPERTY',
      imageLabel: 'Property Development',
      icon: <Landmark size={20} />,
      description: 'Property development, investment management, and facilities oversight supported by a substantial unencumbered property portfolio.',
      stats: [
        { label: 'Focus', value: 'Real Estate' },
        { label: 'Portfolio', value: 'Diversified' },
        { label: 'Strategy', value: 'Long-Term' },
      ],
    },
    {
      name: 'The David Mabilu Foundation',
      tag: 'FOUNDATION',
      imageLabel: 'Community & Foundation',
      icon: <Heart size={20} />,
      description: 'Driving educational support, housing initiatives, entrepreneurship programs, and community upliftment across South Africa.',
      stats: [
        { label: 'Focus', value: 'Social Impact' },
        { label: 'Reach', value: 'National' },
        { label: 'Mandate', value: 'Upliftment' },
      ],
    },
  ];

  return (
    <div>
      <WireframeLabel
        layout="Stacked Company Feature Cards"
        description="Full-width stacked cards with image left (40%), company details right (60%), alternating layout"
      />

      {/* Section heading */}
      <div className="mb-6">
        <div className="typo-caption tracking-[0.3em] uppercase font-inter mb-2" style={{ color: 'var(--vharanani-burgundy)' }}>
          PORTFOLIO COMPANIES
        </div>
        <h3 className="font-bebas-neue typo-subline" style={{ color: 'var(--vharanani-charcoal)' }}>
          Our Companies
        </h3>
        <div className="font-inter typo-copy mt-2" style={{ color: 'var(--vharanani-charcoal-60)' }}>
          Vharani Group's portfolio reflects a strategic focus on infrastructure, property ownership, and social impact.
        </div>
      </div>

      {/* Company Cards */}
      <div className="space-y-4">
        {companies.map((company, i) => (
          <div
            key={i}
            className="group overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
            style={{ border: '2px solid var(--vharanani-charcoal-20)' }}
          >
            <div className={`grid grid-cols-1 md:grid-cols-5 gap-0 ${i % 2 === 1 ? 'md:direction-rtl' : ''}`}>
              {/* Image — 40% */}
              <div className={`md:col-span-2 relative h-[200px] md:h-auto overflow-hidden ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                <ImagePlaceholder label={company.imageLabel} className="absolute inset-0 w-full h-full" />
                {/* Tag overlay */}
                <div className="absolute top-3 left-3 px-2 py-1 flex items-center gap-2 z-20" style={{ background: 'var(--vharanani-burgundy)' }}>
                  <div className="text-white">{company.icon}</div>
                  <span className="font-inter typo-meta text-white tracking-wider uppercase">{company.tag}</span>
                </div>
              </div>

              {/* Content — 60% */}
              <div className={`md:col-span-3 p-6 md:p-8 flex flex-col justify-center ${i % 2 === 1 ? 'md:order-1' : ''}`} style={{ background: 'rgba(44,45,45,0.02)' }}>
                <h2 className="font-bebas-neue typo-headline-big mb-3" style={{ color: 'var(--vharanani-charcoal)' }}>
                  {company.name}
                </h2>
                <div className="font-inter typo-copy mb-5" style={{ color: 'var(--vharanani-charcoal-60)' }}>
                  {company.description}
                </div>

                {/* Mini stats row */}
                <div className="grid grid-cols-3 gap-3">
                  {company.stats.map((stat, j) => (
                    <div key={j} className="p-3 text-center" style={{ borderTop: '3px solid var(--vharanani-burgundy)', background: 'rgba(137,43,28,0.04)' }}>
                      <div className="font-bebas-neue typo-subline" style={{ color: 'var(--vharanani-burgundy)' }}>
                        {stat.value}
                      </div>
                      <div className="font-inter typo-meta tracking-wider uppercase mt-1" style={{ color: 'var(--vharanani-charcoal-60)' }}>
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-2 mt-5">
                  <div className="px-4 py-2 cursor-pointer flex items-center gap-2 transition-all duration-300 group-hover:gap-3" style={{ background: 'var(--vharanani-charcoal)' }}>
                    <span className="font-bebas-neue typo-headline-small tracking-wider text-white">Explore Division</span>
                    <ArrowRight size={14} className="text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom accent line */}
            <div className="h-[3px] w-0 group-hover:w-full transition-all duration-500" style={{ background: 'var(--vharanani-burgundy)' }} />
          </div>
        ))}
      </div>

      {/* Wireframe annotation */}
      <div className="mt-3 flex items-center gap-2">
        <div className="px-2 py-1" style={{ background: 'rgba(137,43,28,0.08)', border: '1px dashed var(--vharanani-burgundy-60)' }}>
          <span className="font-inter typo-meta tracking-wider uppercase" style={{ color: 'var(--vharanani-burgundy)' }}>Alternating image/text layout — editorial magazine feel</span>
        </div>
      </div>

      <WireframeSpec items={[
        'Layout: Full-width stacked cards, 40/60 image-to-content split',
        'Alternating: Odd cards image-left, even cards image-right',
        'Image: Full-bleed with hover scale(1.05), category tag overlay',
        'Content: Bebas Neue heading + Inter body + 3-column mini stats',
        'CTA: "Explore Division" button links to respective Level 1 division view',
        'Hover: translateY(-2px) + bottom burgundy accent line animates',
      ]} />
    </div>
  );
}