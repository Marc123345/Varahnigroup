import { type ReactNode, useState } from 'react';
import {
  Building2, Shield, Target, Eye, Heart, Award, HardHat,
  Droplets, Wrench, Home, Factory, MapPin, Mail, Phone,
  ArrowRight, ArrowLeft, Users, Briefcase,
  GraduationCap, X,
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
// SECTION 2: ABOUT & IMPACT — "The Dignity Narrative"
// 2-Column Split: Portrait left, story + stats + blockquote right
// ═══════════════════════════════════════════════════════════

export function PropertiesWireframe_AboutImpact(): ReactNode {
  return (
    <div>
      <WireframeLabel
        layout="Two-Column Split (50 / 50)"
        description="The 'Dignity' Narrative — CEO portrait or community impact image left, 20-year journey summary + Power Grid stats + mission blockquote right"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden" style={{ border: '2px solid var(--vharanani-charcoal-20)' }}>
        {/* Left Column — Image / Video */}
        <div className="relative h-[360px] md:h-auto md:min-h-[520px]">
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
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          {/* Name overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="font-inter typo-meta tracking-[0.3em] uppercase mb-1" style={{ color: 'var(--vharanani-burgundy-40)' }}>
              FOUNDER & CEO
            </div>
            <h3 className="font-bebas-neue typo-subline tracking-wide text-white uppercase">
              David Mabilu
            </h3>
          </div>
          {/* Wireframe annotation */}
          <div className="absolute top-3 left-3 px-2 py-1" style={{ background: 'rgba(0,0,0,0.7)' }}>
            <span className="font-inter typo-meta text-white tracking-wider uppercase">Portrait / Before-After Image</span>
          </div>
        </div>

        {/* Right Column — Text Content */}
        <div className="p-6 md:p-8 flex flex-col justify-center" style={{ background: 'rgba(44,45,45,0.02)' }}>
          {/* Label */}
          <div
            className="typo-caption tracking-[0.3em] uppercase font-inter mb-3"
            style={{ color: 'var(--vharanani-burgundy)' }}
          >
            OUR STORY
          </div>

          {/* Summary */}
          <h3 className="font-bebas-neue typo-subline tracking-wide uppercase mb-4" style={{ color: 'var(--vharanani-charcoal)' }}>
            Two Decades of Building Africa
          </h3>
          <p className="font-inter typo-copy mb-6" style={{ color: 'var(--vharanani-charcoal)' }}>
            Founded in 2001 by David Mabilu, Vharani Properties has grown from a small construction company into one of South Africa's leading Black-owned infrastructure and property development firms, delivering projects valued at billions of rands across all nine provinces.
          </p>

          {/* "Power" Grid — Core Stats */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {[
              { value: '20+', label: 'Years Experience' },
              { value: 'Level 1', label: 'B-BBEE Contributor' },
              { value: 'Billions', label: 'In Project Value' },
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

          {/* Mission Blockquote */}
          <div className="p-5" style={{ borderLeft: '3px solid var(--vharanani-burgundy)', background: 'rgba(137,43,28,0.04)' }}>
            <div className="font-inter typo-copy italic" style={{ color: 'var(--vharanani-charcoal)' }}>
              "To restore people's dignity through infrastructure development."
            </div>
            <div className="font-inter typo-meta tracking-[0.15em] uppercase mt-2" style={{ color: 'var(--vharanani-charcoal-60)' }}>
              &mdash; Our Mission
            </div>
          </div>

          {/* Wireframe annotation */}
          <div className="mt-4 px-2 py-1 inline-block self-start" style={{ background: 'rgba(137,43,28,0.08)', border: '1px dashed var(--vharanani-burgundy-60)' }}>
            <span className="font-inter typo-meta tracking-wider uppercase" style={{ color: 'var(--vharanani-burgundy)' }}>Counter animation on scroll</span>
          </div>
        </div>
      </div>

      <WireframeSpec items={[
        'Grid: 50/50 split — CSS grid-cols-2',
        'Left: Full-bleed portrait (CEO David Mabilu) or Before/After community development shot',
        'Right: "Our Story" label + narrative copy + 3-column Power Grid stats + mission blockquote',
        'Stats: Counter animation triggers on scroll-into-view',
        'Blockquote: Left-border burgundy accent with italic styling',
        'Mobile: Stack vertically, image on top',
      ]} />
    </div>
  );
}


// ═══════════════════════════════════════════════════════════
// SECTION 3: INTEGRATED SERVICES — "The Capability Hub"
// Interactive Bento Box Grid with hover-reveal tiles
// ═══════════════════════════════════════════════════════════

export function PropertiesWireframe_IntegratedServices(): ReactNode {
  const services = [
    {
      title: 'Roads & Civils',
      subtitle: 'Turnkey solutions for BRT & Highways',
      icon: <Wrench size={22} />,
      imageLabel: 'Roads & Civils',
      span: 'md:col-span-2 md:row-span-2',
      height: 'h-[280px] md:h-full',
    },
    {
      title: 'Water & Sanitation',
      subtitle: 'Large-scale municipal service delivery',
      icon: <Droplets size={22} />,
      imageLabel: 'Water & Sanitation',
      span: '',
      height: 'h-[180px]',
    },
    {
      title: 'Building Construction',
      subtitle: 'Mining, Education & Healthcare',
      icon: <Building2 size={22} />,
      imageLabel: 'Building Construction',
      span: '',
      height: 'h-[180px]',
    },
    {
      title: 'Residential',
      subtitle: 'From RDP to Luxury Estates',
      icon: <Home size={22} />,
      imageLabel: 'Residential Development',
      span: '',
      height: 'h-[180px]',
    },
    {
      title: 'Property Development',
      subtitle: 'Full lifecycle: Land to Construction',
      icon: <Briefcase size={22} />,
      imageLabel: 'Property Development',
      span: '',
      height: 'h-[180px]',
    },
    {
      title: 'Facilities Management',
      subtitle: 'Long-term operational excellence',
      icon: <Factory size={22} />,
      imageLabel: 'Facilities Management',
      span: 'md:col-span-2',
      height: 'h-[180px]',
    },
  ];

  return (
    <div>
      <WireframeLabel
        layout="Interactive Bento Box Grid"
        description="The 'Capability' Hub — large tiles with background images, hover-reveal info panels showing service details"
      />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-[2px]" style={{ background: 'var(--vharanani-charcoal-20)' }}>
        {services.map((svc, i) => (
          <div
            key={i}
            className={`group relative overflow-hidden cursor-pointer ${svc.span} ${svc.height}`}
          >
            {/* Background Placeholder */}
            <ImagePlaceholder label={svc.imageLabel} className="absolute inset-0 w-full h-full" />

            {/* Default dark overlay */}
            <div className="absolute inset-0 bg-black/50 transition-all duration-500 group-hover:bg-black/70" />

            {/* Content — always visible */}
            <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-5">
              {/* Icon + Title */}
              <div className="flex items-center gap-2 mb-1">
                <div className="text-white opacity-70 group-hover:opacity-100 transition-opacity duration-300">{svc.icon}</div>
                <h4 className="font-bebas-neue typo-headline-small tracking-wide text-white uppercase">
                  {svc.title}
                </h4>
              </div>

              {/* Subtitle — slides up on hover */}
              <div className="overflow-hidden max-h-0 group-hover:max-h-20 transition-all duration-500">
                <p className="font-inter typo-copy-small" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  {svc.subtitle}
                </p>
                {/* CTA link */}
                <div className="flex items-center gap-1 mt-2">
                  <span className="font-inter typo-meta tracking-[0.15em] uppercase" style={{ color: 'var(--vharanani-burgundy-40)' }}>
                    View Projects
                  </span>
                  <ArrowRight size={10} style={{ color: 'var(--vharanani-burgundy-40)' }} />
                </div>
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

      {/* Wireframe annotation */}
      <div className="mt-3 flex items-center gap-2">
        <div className="px-2 py-1" style={{ background: 'rgba(137,43,28,0.08)', border: '1px dashed var(--vharanani-burgundy-60)' }}>
          <span className="font-inter typo-meta tracking-wider uppercase" style={{ color: 'var(--vharanani-burgundy)' }}>Hover: image zoom + info reveal + accent line</span>
        </div>
      </div>

      <WireframeSpec items={[
        'Grid: 4-column Bento — first tile spans 2 cols + 2 rows (featured)',
        'Last tile spans 2 columns (wide strip)',
        'Images: Full-bleed with black/50 overlay, scale(1.1) on hover',
        'Hover: Overlay darkens to black/70, subtitle slides up, CTA + badge reveal',
        'Bottom accent: 3px burgundy line animates width on hover',
        'Mobile: Single column stack, each tile 180px height',
      ]} />
    </div>
  );
}


// ═══════════════════════════════════════════════════════════
// SECTION 4: FEATURED PROJECTS — "The Proof"
// Horizontal Slider / Carousel with Quick View modal
// ═══════════════════════════════════════════════════════════

export function PropertiesWireframe_FeaturedProjects(): ReactNode {
  const [activeIdx, setActiveIdx] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const projects = [
    {
      title: 'Tshwane BRT System',
      category: 'Roads & Civils',
      location: 'Gauteng, South Africa',
      imageLabel: 'BRT Infrastructure',
      specs: 'Bus Rapid Transit infrastructure including dedicated lanes, stations, and traffic management systems.',
      impact: 'Connected thousands of daily commuters to affordable, efficient public transport across the Tshwane metropolitan area.',
    },
    {
      title: 'Lepelle Water Revitalization',
      category: 'Water & Sanitation',
      location: 'Limpopo, South Africa',
      imageLabel: 'Water Pipeline',
      specs: 'Bulk water supply programme including pipeline infrastructure and treatment facility upgrades.',
      impact: 'Restored reliable water supply to rural communities, improving health outcomes and quality of life.',
    },
    {
      title: 'Maphutha Malatjie Hospital',
      category: 'Building Construction',
      location: 'Limpopo, South Africa',
      imageLabel: 'Hospital Construction',
      specs: 'Full construction of a public healthcare facility, including surgical theatres, wards, and support infrastructure.',
      impact: 'Provided modern healthcare access to an underserved community, serving thousands of patients annually.',
    },
    {
      title: 'Mamelodi X5 Housing',
      category: 'Residential',
      location: 'Gauteng, South Africa',
      imageLabel: 'Housing Development',
      specs: 'Large-scale residential housing development providing dignified homes for qualifying families.',
      impact: 'Delivered sustainable human settlements and created local employment during the construction phase.',
    },
  ];

  const current = projects[activeIdx];

  return (
    <div>
      <WireframeLabel
        layout="Horizontal Slider / Carousel"
        description="The 'Proof' — large project cards in a carousel with category tags, click-to-open Quick View modal showing specs and community impact"
      />

      {/* Carousel Container */}
      <div className="relative overflow-hidden" style={{ border: '2px solid var(--vharanani-charcoal-20)' }}>
        {/* Active Slide */}
        <div className="relative h-[380px]">
          <ImagePlaceholder label={current.imageLabel} className="absolute inset-0 w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

          {/* Slide Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 max-w-[60%]">
            {/* Category tag */}
            <div className="inline-block self-start px-2 py-1 mb-3" style={{ background: 'var(--vharanani-burgundy)' }}>
              <span className="font-inter typo-meta text-white tracking-[0.2em] uppercase">{current.category}</span>
            </div>
            <h3 className="font-bebas-neue typo-subline tracking-wide text-white uppercase mb-2">
              {current.title}
            </h3>
            <div className="flex items-center gap-2 mb-4">
              <MapPin size={12} style={{ color: 'rgba(255,255,255,0.5)' }} />
              <span className="font-inter typo-label tracking-wider uppercase" style={{ color: 'rgba(255,255,255,0.5)' }}>
                {current.location}
              </span>
            </div>
            {/* Quick View CTA */}
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 self-start px-4 py-2 transition-all duration-300 hover:gap-3"
              style={{ border: '1px solid rgba(255,255,255,0.3)', background: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(4px)' }}
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
        <div className="flex items-center gap-2 p-3" style={{ background: 'rgba(44,45,45,0.04)' }}>
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
          <div className="relative w-full max-w-2xl max-h-[80vh] overflow-y-auto" style={{ background: 'white', border: '2px solid var(--vharanani-charcoal-20)' }}>
            {/* Modal Header */}
            <div className="relative h-[200px]">
              <ImagePlaceholder label={current.imageLabel} className="absolute inset-0 w-full h-full" />
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center"
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
              <p className="font-inter typo-copy mb-6" style={{ color: 'var(--vharanani-charcoal)' }}>{current.specs}</p>
              <div className="p-4" style={{ borderLeft: '3px solid var(--vharanani-burgundy)', background: 'rgba(137,43,28,0.04)' }}>
                <div className="font-inter typo-meta tracking-[0.2em] uppercase mb-1" style={{ color: 'var(--vharanani-burgundy)' }}>Community Impact</div>
                <p className="font-inter typo-copy-small" style={{ color: 'var(--vharanani-charcoal)' }}>{current.impact}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Wireframe annotation */}
      <div className="mt-3 flex items-center gap-2">
        <div className="px-2 py-1" style={{ background: 'rgba(137,43,28,0.08)', border: '1px dashed var(--vharanani-burgundy-60)' }}>
          <span className="font-inter typo-meta tracking-wider uppercase" style={{ color: 'var(--vharanani-burgundy)' }}>Click "Quick View" to open modal with specs + impact</span>
        </div>
      </div>

      <WireframeSpec items={[
        'Layout: Full-width carousel with gradient left-to-right overlay',
        'Slide: Large image, category tag (burgundy), title, location pin, Quick View CTA',
        'Navigation: Left/right arrows + progress bar dots at bottom',
        'Modal: On Quick View click — specs, location, and community impact narrative',
        'Counter: "01 / 04" top-right display',
        'Mobile: Full-width stack, reduced height (280px)',
      ]} />
    </div>
  );
}


// ═══════════════════════════════════════════════════════════
// SECTION 5: COMPLIANCE & ACCREDITATION — "The Trust Anchor"
// Clean White Strip with certification seals
// ═══════════════════════════════════════════════════════════

export function PropertiesWireframe_Compliance(): ReactNode {
  const certifications = [
    {
      icon: <Award size={28} />,
      title: 'ISO 9001:2015',
      subtitle: 'Quality Management Systems',
      highlight: false,
    },
    {
      icon: <Shield size={28} />,
      title: 'B-BBEE Level 1',
      subtitle: 'Highest Contributor Level',
      highlight: false,
    },
    {
      icon: <Building2 size={28} />,
      title: 'CIDB Grade 9GB',
      subtitle: 'General Building — Highest Grading',
      highlight: true,
    },
    {
      icon: <HardHat size={28} />,
      title: 'CIDB Grade 9CE',
      subtitle: 'Civil Engineering — Highest Grading',
      highlight: true,
    },
    {
      icon: <Home size={28} />,
      title: 'NHBRC',
      subtitle: 'National Home Builders Registration',
      highlight: false,
    },
  ];

  return (
    <div>
      <WireframeLabel
        layout="Clean White Strip"
        description="The 'Trust' Anchor — headline 'Certified Excellence' with prominent certification seal icons in a horizontal row"
      />

      <div className="overflow-hidden" style={{ border: '2px solid var(--vharanani-charcoal-20)' }}>
        {/* Header */}
        <div className="text-center py-8 px-6" style={{ background: 'white' }}>
          <div className="typo-caption tracking-[0.3em] uppercase font-inter mb-2" style={{ color: 'var(--vharanani-burgundy)' }}>
            ACCREDITATION & COMPLIANCE
          </div>
          <h2 className="font-bebas-neue uppercase tracking-wide" style={{ color: 'var(--vharanani-charcoal)' }}>
            Certified Excellence.
          </h2>
        </div>

        {/* Certification Seals Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-[1px]" style={{ background: 'var(--vharanani-charcoal-20)' }}>
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center p-6 text-center transition-all duration-300 hover:-translate-y-1"
              style={{
                background: cert.highlight ? 'rgba(137,43,28,0.04)' : 'white',
                borderBottom: cert.highlight ? '3px solid var(--vharanani-burgundy)' : '3px solid transparent',
              }}
            >
              {/* Seal icon */}
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
            </div>
          ))}
        </div>
      </div>

      <WireframeSpec items={[
        'Layout: Centered headline + 5-column seal grid on clean white background',
        'Seals: 64px square icon containers with border, title + subtitle below',
        'Highlight: CIDB Grade 9GB & 9CE get burgundy border, tinted bg, "Highest Grade" badge',
        'Hover: translateY(-4px) lift effect',
        'Mobile: 2-column grid wrapping to fit',
      ]} />
    </div>
  );
}


// ═══════════════════════════════════════════════════════════
// SECTION 6: VALUES & IMPACT — "The Culture"
// 4-Column Icon Grid + Impact Infographic
// ═══════════════════════════════════════════════════════════

export function PropertiesWireframe_ValuesImpact(): ReactNode {
  const values = [
    { icon: <Shield size={24} />, title: 'Professionalism', description: 'Maintaining the highest standards in execution and project delivery.' },
    { icon: <Target size={24} />, title: 'Accountability', description: 'Taking full responsibility for the quality, safety, and success of every project.' },
    { icon: <Eye size={24} />, title: 'Transparency', description: 'Operating with openness and integrity in all engagements.' },
    { icon: <Heart size={24} />, title: 'Honesty', description: 'Building long-term relationships based on trust and ethical conduct.' },
  ];

  const impacts = [
    { icon: <Users size={22} />, label: 'Employment', value: 'Thousands', description: 'Jobs created across construction sites nationally' },
    { icon: <GraduationCap size={22} />, label: 'Skills Development', value: 'Ongoing', description: 'Training and upskilling programmes for local communities' },
    { icon: <Home size={22} />, label: 'Sustainable Settlements', value: 'Multiple', description: 'Dignified housing developments across provinces' },
  ];

  return (
    <div>
      <WireframeLabel
        layout="4-Column Icon Grid + Infographic"
        description="The 'Culture' — core values in a clean icon grid, followed by an impact infographic strip showing Employment, Skills Development, and Sustainable Settlements"
      />

      {/* Values Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[1px] mb-6" style={{ background: 'var(--vharanani-charcoal-20)', border: '2px solid var(--vharanani-charcoal-20)' }}>
        {values.map((val, i) => (
          <div
            key={i}
            className="group p-6 text-center transition-all duration-300 hover:translate-y-[-2px]"
            style={{ background: 'white' }}
          >
            <div
              className="w-14 h-14 mx-auto flex items-center justify-center mb-4 transition-colors duration-300"
              style={{
                border: '2px solid var(--vharanani-charcoal-20)',
                color: 'var(--vharanani-burgundy)',
              }}
            >
              {val.icon}
            </div>
            <h4 className="font-bebas-neue typo-headline-small tracking-wide uppercase mb-2" style={{ color: 'var(--vharanani-charcoal)' }}>
              {val.title}
            </h4>
            <p className="font-inter typo-copy-small" style={{ color: 'var(--vharanani-charcoal-60)' }}>
              {val.description}
            </p>
            {/* Bottom accent */}
            <div className="mx-auto mt-4 w-0 group-hover:w-10 h-[2px] transition-all duration-500" style={{ background: 'var(--vharanani-burgundy)' }} />
          </div>
        ))}
      </div>

      {/* Impact Infographic Strip */}
      <div className="overflow-hidden" style={{ border: '2px solid var(--vharanani-charcoal-20)' }}>
        <div className="p-4 text-center" style={{ background: 'var(--vharanani-charcoal)', borderBottom: '3px solid var(--vharanani-burgundy)' }}>
          <h3 className="font-bebas-neue typo-subline tracking-wide uppercase text-white">Our Impact</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-[1px]" style={{ background: 'var(--vharanani-charcoal-20)' }}>
          {impacts.map((item, i) => (
            <div key={i} className="p-5 text-center" style={{ background: 'rgba(44,45,45,0.02)' }}>
              <div className="w-12 h-12 mx-auto flex items-center justify-center mb-3" style={{ color: 'var(--vharanani-burgundy)', background: 'rgba(137,43,28,0.06)' }}>
                {item.icon}
              </div>
              <div className="font-bebas-neue typo-subline mb-1" style={{ color: 'var(--vharanani-burgundy)' }}>
                {item.value}
              </div>
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

      <WireframeSpec items={[
        'Values Grid: 4-column equal cards — icon (56px square), title, description',
        'Hover: translateY(-2px) + burgundy accent line expands',
        'Impact Strip: Dark header bar + 3-column infographic (Employment, Skills, Settlements)',
        'Icons: Contained in tinted squares with counter values',
        'Mobile: 2-column values grid, single-column impact strip',
      ]} />
    </div>
  );
}


// ═══════════════════════════════════════════════════════════
// SECTION 7: CONTACT & GLOBAL FOOTPRINT
// Split Screen: Stylized map left, tabbed contact + form right
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
    <div>
      <WireframeLabel
        layout="Split Screen (55 / 45)"
        description="Contact & Global Footprint — stylized dark-themed map of South Africa with location pins left, tabbed contact info + partnership enquiry form right"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden" style={{ border: '2px solid var(--vharanani-charcoal-20)' }}>
        {/* Left — Map */}
        <div className="relative h-[340px] md:h-auto md:min-h-[520px]" style={{ background: 'var(--vharanani-charcoal)' }}>
          <ImagePlaceholder label="South Africa Map" className="absolute inset-0 w-full h-full"
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
          <div className="absolute inset-0 flex items-center justify-center">
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

          {/* Wireframe annotation */}
          <div className="absolute bottom-3 left-3 px-2 py-1" style={{ background: 'rgba(0,0,0,0.7)' }}>
            <span className="font-inter typo-meta text-white tracking-wider uppercase">Dark-themed SA Map + animated pins</span>
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
                  background: activeTab === tab ? 'rgba(137,43,28,0.04)' : 'transparent',
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

          {/* Divider */}
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
                className="w-full px-4 py-3 font-inter typo-copy-small outline-none transition-colors duration-200 focus:border-[var(--vharanani-burgundy)]"
                style={{ border: '1px solid var(--vharanani-charcoal-20)', background: 'rgba(44,45,45,0.02)' }}
              />
              <input
                type="text"
                placeholder="Company"
                className="w-full px-4 py-3 font-inter typo-copy-small outline-none transition-colors duration-200 focus:border-[var(--vharanani-burgundy)]"
                style={{ border: '1px solid var(--vharanani-charcoal-20)', background: 'rgba(44,45,45,0.02)' }}
              />
              <select
                className="w-full px-4 py-3 font-inter typo-copy-small outline-none"
                style={{ border: '1px solid var(--vharanani-charcoal-20)', background: 'rgba(44,45,45,0.02)', color: 'var(--vharanani-charcoal-60)' }}
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
                style={{ border: '1px solid var(--vharanani-charcoal-20)', background: 'rgba(44,45,45,0.02)' }}
              />
              <button
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

      <WireframeSpec items={[
        'Grid: 55/45 split — dark map left, white form right',
        'Map: Dark-themed SA map with animated pinging pins on JHB + Polokwane',
        'Tabs: Head Office | Polokwane Office — underline switcher',
        'Contact: Icon + text rows (address, phone, email)',
        'Form: Name, Company, Service Required (dropdown), Message, Submit CTA',
        'Mobile: Stack vertically, map above form',
      ]} />
    </div>
  );
}