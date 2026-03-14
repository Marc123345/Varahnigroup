import { type ReactNode, useState } from 'react';
import {
  MapPin, ArrowRight, Search, Layers, HardHat,
  Eye, Target, Briefcase, Home, Building2, Landmark,
  Heart, Globe, Mail, Phone, ChevronRight,
} from 'lucide-react';
import { ImagePlaceholder } from '../common/ImagePlaceholder';

// ═══════════════════════════════════════════════════════════
// WIREFRAME LABEL
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
// WIREFRAME SPEC
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
// SECTION 1+2: CINEMATIC HERO + ABOUT DMFT
// Full-bleed drone shot hero, then asymmetric editorial split
// ═══════════════════════════════════════════════════════════

export function DMFTWireframe_HeroAbout(): ReactNode {
  return (
    <div>
      <WireframeLabel
        layout="Cinematic Hero + Asymmetric Editorial Split"
        description="'Structured Elegance' — Full-bleed cinematic drone video hero with centered typography, followed by 60/40 asymmetric split with parallax image for the About & Vharani collaboration narrative"
      />

      {/* ── HERO BLOCK ── */}
      <div className="relative h-[360px] overflow-hidden mb-[2px]" style={{ border: '2px solid var(--vharanani-charcoal-20)' }}>
        <ImagePlaceholder label="Aerial Development View" className="absolute inset-0 w-full h-full"
        />
        {/* Cinematic overlay */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(26,26,26,0.5) 0%, rgba(26,26,26,0.3) 40%, rgba(26,26,26,0.7) 100%)' }} />

        {/* Transparent nav bar placeholder */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-4">
          <div className="font-bebas-neue typo-headline-small tracking-wider text-white uppercase opacity-60">DMFT</div>
          <div className="flex items-center gap-6">
            {['About', 'Developments', 'Approach', 'Contact'].map((item) => (
              <span key={item} className="font-inter typo-meta tracking-[0.15em] uppercase text-white opacity-40">{item}</span>
            ))}
          </div>
        </div>

        {/* Centered hero text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h2 className="font-bebas-neue tracking-wide uppercase text-white mb-4" style={{ letterSpacing: '0.06em' }}>
            Creating Exceptional<br />Property Developments.
          </h2>
          <div className="flex items-center gap-2 mt-4 opacity-60">
            <div className="w-[1px] h-6" style={{ background: 'rgba(255,255,255,0.3)' }} />
            <span className="font-inter typo-meta tracking-[0.2em] uppercase text-white">Scroll to Explore</span>
            <div className="w-[1px] h-6" style={{ background: 'rgba(255,255,255,0.3)' }} />
          </div>
        </div>

        {/* Wireframe annotation */}
        <div className="absolute bottom-3 left-3 px-2 py-1" style={{ background: 'rgba(0,0,0,0.7)' }}>
          <span className="font-inter typo-meta text-white tracking-wider uppercase">Full-bleed drone video / 3D render (scales on scroll)</span>
        </div>
      </div>

      {/* ── ABOUT SPLIT ── */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-0 overflow-hidden" style={{ border: '2px solid var(--vharanani-charcoal-20)', background: 'var(--vharanani-burgundy-20)' }}>
        {/* Left Column — 60% editorial text */}
        <div className="md:col-span-3 p-6 md:p-10 flex flex-col justify-center" style={{ background: 'rgba(247,216,213,0.3)' }}>
          <div className="typo-caption tracking-[0.3em] uppercase font-inter mb-4" style={{ color: 'var(--vharanani-burgundy)' }}>
            ABOUT DMFT
          </div>

          <h3 className="font-bebas-neue tracking-wide uppercase mb-6" style={{ color: 'var(--vharanani-charcoal)' }}>
            We are a real estate development company dedicated to delivering high-quality property developments.
          </h3>

          <p className="font-inter typo-copy mb-6" style={{ color: 'var(--vharanani-charcoal)' }}>
            Working in collaboration with the Vharani Group, DMFT benefits from extensive construction and infrastructure expertise, enabling the successful delivery of complex property development projects from concept through to completion.
          </p>

          <p className="font-inter typo-copy-small mb-8" style={{ color: 'var(--vharanani-charcoal-60)' }}>
            Our developments are designed with long-term value in mind, combining strong architectural design, efficient infrastructure planning, and quality construction to create environments that enhance both lifestyle and economic opportunity.
          </p>

          {/* Vharani Group badge */}
          <div className="inline-flex items-center gap-3 self-start px-4 py-3" style={{ border: '1px solid var(--vharanani-charcoal-20)', background: 'rgba(255,255,255,0.6)' }}>
            <Layers size={16} style={{ color: 'var(--vharanani-burgundy)' }} />
            <span className="font-inter typo-meta tracking-[0.15em] uppercase" style={{ color: 'var(--vharanani-charcoal-60)' }}>
              Part of the Vharani Group
            </span>
          </div>
        </div>

        {/* Right Column — 40% portrait image (parallax) */}
        <div className="md:col-span-2 relative h-[300px] md:h-auto md:min-h-[400px]">
          <ImagePlaceholder label="Architectural Detail" className="absolute inset-0 w-full h-full"
          />
          {/* Wireframe annotation */}
          <div className="absolute bottom-3 right-3 px-2 py-1" style={{ background: 'rgba(0,0,0,0.7)' }}>
            <span className="font-inter typo-meta text-white tracking-wider uppercase">Portrait — Parallax scroll offset</span>
          </div>
        </div>
      </div>

      <WireframeSpec items={[
        'Hero: Full-bleed cinematic drone video or 3D architectural render, 360px height',
        'Text: Centered Bebas Neue with generous letter-spacing (0.06em), "Scroll to Explore" prompt',
        'Scroll interaction: Hero image scales down and fades as user scrolls past',
        'About: 60/40 asymmetric split — editorial text left, portrait-orientation image right',
        'Warm concrete background tint (burgundy-20) for editorial warmth',
        'Right image: Different scroll speed (parallax) — 0.7x rate vs. text',
        'Vharani Group badge: Inline lockup with Layers icon',
      ]} />
    </div>
  );
}


// ═══════════════════════════════════════════════════════════
// SECTION 3: DEVELOPMENT APPROACH — Horizontal Lifecycle Steps
// Sticky left title, horizontal scrolling step cards right
// ═══════════════════════════════════════════════════════════

export function DMFTWireframe_DevelopmentApproach(): ReactNode {
  const phases = [
    {
      step: '01',
      title: 'Land Identification',
      icon: <Search size={24} />,
      description: 'Carefully identifying strategic locations with strong growth potential and development viability.',
    },
    {
      step: '02',
      title: 'Planning & Feasibility',
      icon: <Target size={24} />,
      description: 'Conducting detailed feasibility studies, zoning processes, and comprehensive development planning.',
    },
    {
      step: '03',
      title: 'Design & Architecture',
      icon: <Eye size={24} />,
      description: 'Working with experienced professionals to design modern, functional, and aesthetically compelling developments.',
    },
    {
      step: '04',
      title: 'Construction & Delivery',
      icon: <HardHat size={24} />,
      description: 'Leveraging Vharani Group expertise to deliver projects efficiently, safely, and to the highest quality standards.',
    },
    {
      step: '05',
      title: 'Sales & Handover',
      icon: <Briefcase size={24} />,
      description: 'Delivering completed developments that provide lasting value for homeowners, investors, and communities.',
    },
  ];

  return (
    <div>
      <WireframeLabel
        layout="Sticky-Left + Horizontal Scroll Cards"
        description="Development Lifecycle — Left column stays fixed with section title + progress bar while right side scrolls horizontally through 5 phase cards with minimalist line-art icons"
      />

      <div className="grid grid-cols-1 md:grid-cols-10 gap-0 overflow-hidden" style={{ border: '2px solid var(--vharanani-charcoal-20)' }}>
        {/* Left — Sticky section title (30%) */}
        <div
          className="md:col-span-3 p-6 md:p-8 flex flex-col justify-center"
          style={{ background: 'var(--vharanani-charcoal)', borderRight: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div className="typo-caption tracking-[0.3em] uppercase font-inter mb-3" style={{ color: 'var(--vharanani-burgundy)' }}>
            OUR PROCESS
          </div>
          <h2 className="font-bebas-neue tracking-wide uppercase text-white mb-6">
            Development<br />Approach
          </h2>
          <p className="font-inter typo-copy-small mb-8" style={{ color: 'rgba(255,255,255,0.5)' }}>
            We manage the full lifecycle of property development. Our integrated approach ensures every project is delivered efficiently, sustainably, and to the highest standards.
          </p>

          {/* Progress indicator */}
          <div className="space-y-2">
            {phases.map((phase, i) => (
              <div key={i} className="flex items-center gap-3">
                <div
                  className="w-6 h-[2px]"
                  style={{ background: i === 0 ? 'var(--vharanani-burgundy)' : 'rgba(255,255,255,0.15)' }}
                />
                <span
                  className="font-inter typo-meta tracking-[0.15em] uppercase"
                  style={{ color: i === 0 ? 'var(--vharanani-burgundy)' : 'rgba(255,255,255,0.3)' }}
                >
                  {phase.title}
                </span>
              </div>
            ))}
          </div>

          {/* Wireframe annotation */}
          <div className="mt-6 px-2 py-1 inline-block self-start" style={{ background: 'rgba(137,43,28,0.2)', border: '1px dashed var(--vharanani-burgundy-60)' }}>
            <span className="font-inter typo-meta tracking-wider uppercase" style={{ color: 'var(--vharanani-burgundy-40)' }}>Sticky on scroll</span>
          </div>
        </div>

        {/* Right — Horizontal scrolling cards (70%) */}
        <div className="md:col-span-7 overflow-x-auto vharanani-scrollbar" style={{ background: 'rgba(44,45,45,0.02)' }}>
          <div className="flex min-w-max">
            {phases.map((phase, i) => (
              <div
                key={i}
                className="group flex flex-col justify-between p-6 md:p-8 w-[260px] md:w-[280px] flex-shrink-0 transition-all duration-300 hover:bg-[rgba(137,43,28,0.03)]"
                style={{
                  borderRight: i < phases.length - 1 ? '1px solid var(--vharanani-charcoal-20)' : 'none',
                }}
              >
                {/* Step number */}
                <div>
                  <div
                    className="font-bebas-neue typo-header tracking-wider mb-6 transition-colors duration-300"
                    style={{ color: 'var(--vharanani-charcoal-20)' }}
                  >
                    {phase.step}
                  </div>

                  {/* Icon */}
                  <div
                    className="w-12 h-12 flex items-center justify-center mb-4"
                    style={{ border: '1px solid var(--vharanani-charcoal-20)', color: 'var(--vharanani-burgundy)' }}
                  >
                    {phase.icon}
                  </div>

                  {/* Title */}
                  <h4 className="font-bebas-neue typo-headline-small tracking-wide uppercase mb-3" style={{ color: 'var(--vharanani-charcoal)' }}>
                    {phase.title}
                  </h4>

                  {/* Description */}
                  <p className="font-inter typo-copy-small" style={{ color: 'var(--vharanani-charcoal-60)' }}>
                    {phase.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="mt-6 w-0 group-hover:w-full h-[2px] transition-all duration-500" style={{ background: 'var(--vharanani-burgundy)' }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wireframe annotation */}
      <div className="mt-3 flex items-center gap-2 flex-wrap">
        <div className="px-2 py-1" style={{ background: 'rgba(137,43,28,0.08)', border: '1px dashed var(--vharanani-burgundy-60)' }}>
          <span className="font-inter typo-meta tracking-wider uppercase" style={{ color: 'var(--vharanani-burgundy)' }}>Vertical scroll triggers horizontal card movement</span>
        </div>
        <div className="px-2 py-1" style={{ background: 'rgba(137,43,28,0.08)', border: '1px dashed var(--vharanani-burgundy-60)' }}>
          <span className="font-inter typo-meta tracking-wider uppercase" style={{ color: 'var(--vharanani-burgundy)' }}>Progress bar highlights active step</span>
        </div>
      </div>

      <WireframeSpec items={[
        'Layout: 30/70 sticky-left + horizontal-scroll-right',
        'Left: Charcoal background, section title, body text, step progress indicators',
        'Left stays position:sticky during scroll, right pans horizontally',
        'Cards: 280px wide, step number (typo-header, faded), icon (48px square), title, description',
        'Hover: Subtle burgundy bg tint + accent line expands at bottom',
        'Icons: Minimalist line-art in 48px bordered squares',
        'Scroll: Custom Vharanani scrollbar, horizontal overflow',
      ]} />
    </div>
  );
}


// ═══════════════════════════════════════════════════════════
// SECTION 4: PORTFOLIO — Interactive Masonry Grid
// Hover-reveal image cards for development categories
// ═══════════════════════════════════════════════════════════

export function DMFTWireframe_Portfolio(): ReactNode {
  const developments = [
    {
      title: 'Residential Estates',
      category: 'ESTATES',
      imageLabel: 'Residential Estate',
      description: 'Secure gated communities designed for modern living with 24/7 access control and premium amenities.',
      span: 'md:col-span-2 md:row-span-2',
      height: 'h-[240px] md:h-full',
    },
    {
      title: 'Apartments',
      category: 'URBAN',
      imageLabel: 'Apartment Interior',
      description: 'Well-designed apartment developments offering efficient living spaces in growing urban areas.',
      span: '',
      height: 'h-[220px]',
    },
    {
      title: 'Townhouses',
      category: 'RESIDENTIAL',
      imageLabel: 'Townhouse Complex',
      description: 'Modern townhouse developments for families and young professionals with contemporary finishes.',
      span: '',
      height: 'h-[220px]',
    },
    {
      title: 'Mixed-Use Precincts',
      category: 'INTEGRATED',
      imageLabel: 'Mixed-Use Precinct',
      description: 'Self-sustaining environments where people live, work, and engage within one well-planned precinct.',
      span: 'md:col-span-2',
      height: 'h-[220px]',
    },
  ];

  return (
    <div>
      <WireframeLabel
        layout="Interactive Masonry Grid with Hover-Reveal"
        description="Portfolio — Large rendered images in an asymmetric masonry grid. Text hidden by default; on hover, image darkens and category/description slides in elegantly. Click opens full-screen project gallery."
      />

      {/* Section header */}
      <div className="text-center mb-6">
        <div className="typo-caption tracking-[0.3em] uppercase font-inter mb-2" style={{ color: 'var(--vharanani-burgundy)' }}>
          PORTFOLIO
        </div>
        <h2 className="font-bebas-neue tracking-wide uppercase" style={{ color: 'var(--vharanani-charcoal)' }}>
          Our Developments
        </h2>
      </div>

      {/* Masonry Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[3px]">
        {developments.map((dev, i) => (
          <div
            key={i}
            className={`group relative overflow-hidden cursor-pointer ${dev.span} ${dev.height}`}
          >
            {/* Background Placeholder */}
            <ImagePlaceholder label={dev.imageLabel} className="absolute inset-0 w-full h-full" />

            {/* Default: very subtle gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent transition-all duration-500 group-hover:from-black/70 group-hover:via-black/40 group-hover:to-black/20" />

            {/* Default: only subtle category badge at bottom-left */}
            <div className="absolute bottom-0 left-0 right-0 p-5 transition-all duration-500">
              {/* Category tag — always visible */}
              <div className="inline-block px-2 py-1 mb-2 opacity-60 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'var(--vharanani-burgundy)' }}>
                <span className="font-inter typo-meta text-white tracking-[0.2em] uppercase">{dev.category}</span>
              </div>

              {/* Title — always visible */}
              <h3 className="font-bebas-neue typo-subline tracking-wide text-white uppercase">
                {dev.title}
              </h3>

              {/* Description — reveals on hover */}
              <div className="overflow-hidden max-h-0 group-hover:max-h-24 transition-all duration-500 ease-out">
                <p className="font-inter typo-copy-small mt-2" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  {dev.description}
                </p>
                <div className="flex items-center gap-2 mt-3">
                  <span className="font-inter typo-meta tracking-[0.15em] uppercase" style={{ color: 'var(--vharanani-burgundy-40)' }}>
                    View Gallery
                  </span>
                  <ArrowRight size={12} style={{ color: 'var(--vharanani-burgundy-40)' }} />
                </div>
              </div>
            </div>

            {/* Hover cursor hint — top right */}
            <div className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100" style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(4px)' }}>
              <ArrowRight size={16} className="text-white" />
            </div>
          </div>
        ))}
      </div>

      {/* Wireframe annotation */}
      <div className="mt-3 flex items-center gap-2">
        <div className="px-2 py-1" style={{ background: 'rgba(137,43,28,0.08)', border: '1px dashed var(--vharanani-burgundy-60)' }}>
          <span className="font-inter typo-meta tracking-wider uppercase" style={{ color: 'var(--vharanani-burgundy)' }}>Hover: darken + description slide-up + cursor expand to "View"</span>
        </div>
      </div>

      <WireframeSpec items={[
        'Grid: 3-column masonry — first item spans 2 cols + 2 rows (featured estate)',
        'Last item spans 2 columns (wide mixed-use landscape)',
        'Gap: 3px hairline gap between tiles',
        'Default: Subtle gradient overlay, category badge + title visible',
        'Hover: Image scale(1.05), overlay darkens, description + "View Gallery" CTA slides up',
        'Custom cursor: Dot expands into "View" circle on hover (micro-interaction)',
        'Click: Opens full-screen modal with project image gallery',
        'Mobile: Single column stack',
      ]} />
    </div>
  );
}


// ═══════════════════════════════════════════════════════════
// SECTION 5: CAPABILITIES & QUALITY — Brutalist Typography
// Dark background, interactive capability list, quality manifesto
// ═══════════════════════════════════════════════════════════

export function DMFTWireframe_CapabilitiesQuality(): ReactNode {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const capabilities = [
    { title: 'Land Development' },
    { title: 'Property Planning' },
    { title: 'Project Management' },
    { title: 'Infrastructure Integration' },
    { title: 'Residential Construction' },
    { title: 'Mixed-Use Delivery' },
  ];

  return (
    <div>
      <WireframeLabel
        layout="Brutalist Typography — Dark Section"
        description="Capabilities & Quality Manifesto — Matte charcoal background, interactive capability list with hover-revealed background images, adjacent manifesto-style quality blockquote"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden" style={{ border: '2px solid var(--vharanani-charcoal-20)' }}>
        {/* Left — Capability List */}
        <div className="relative p-6 md:p-8" style={{ background: 'var(--vharanani-charcoal)' }}>
          {/* Hover background image — subtle reveal */}
          {hoveredIdx !== null && (
            <div className="absolute inset-0 transition-opacity duration-500 opacity-15">
              <ImagePlaceholder label={capabilities[hoveredIdx].title} className="absolute inset-0 w-full h-full" />
            </div>
          )}

          <div className="relative z-10">
            <div className="typo-caption tracking-[0.3em] uppercase font-inter mb-6" style={{ color: 'var(--vharanani-burgundy)' }}>
              CAPABILITIES
            </div>

            <div className="space-y-0">
              {capabilities.map((cap, i) => (
                <div
                  key={i}
                  className="group cursor-pointer py-4 transition-all duration-300"
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
                      <h3
                        className="font-bebas-neue typo-subline tracking-wide uppercase text-white transition-all duration-300 group-hover:translate-x-2"
                      >
                        {cap.title}
                      </h3>
                    </div>
                    <ChevronRight
                      size={18}
                      className="text-white opacity-0 group-hover:opacity-60 transition-all duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Wireframe annotation */}
            <div className="mt-6 px-2 py-1 inline-block" style={{ background: 'rgba(137,43,28,0.2)', border: '1px dashed var(--vharanani-burgundy-60)' }}>
              <span className="font-inter typo-meta tracking-wider uppercase" style={{ color: 'var(--vharanani-burgundy-40)' }}>Hover: bg image fades in behind text</span>
            </div>
          </div>
        </div>

        {/* Right — Quality Manifesto */}
        <div className="p-6 md:p-10 flex flex-col justify-center" style={{ background: '#1A1A1A' }}>
          <div className="typo-caption tracking-[0.3em] uppercase font-inter mb-6" style={{ color: 'var(--vharanani-burgundy)' }}>
            COMMITMENT TO QUALITY
          </div>

          {/* Manifesto blockquote */}
          <div className="mb-8" style={{ borderLeft: '3px solid var(--vharanani-burgundy)' }}>
            <p className="font-bebas-neue tracking-wide uppercase text-white pl-6" style={{ fontSize: 'clamp(24px, 3vw, 36px)', lineHeight: '1.2' }}>
              "Quality is central to every development we undertake."
            </p>
          </div>

          {/* Quality pillars */}
          <div className="space-y-5">
            {[
              { icon: <Globe size={16} />, label: 'Sustainable Growth', text: 'Supporting sustainable urban growth through responsible development.' },
              { icon: <Landmark size={16} />, label: 'Long-Term Value', text: 'Providing lasting value to residents and investors.' },
              { icon: <Heart size={16} />, label: 'Community Contribution', text: 'Contributing positively to the communities we operate in.' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0" style={{ color: 'var(--vharanani-burgundy)' }}>{item.icon}</div>
                <div>
                  <div className="font-bebas-neue typo-headline-small tracking-wide uppercase text-white mb-1">{item.label}</div>
                  <p className="font-inter typo-copy-small" style={{ color: 'rgba(255,255,255,0.4)' }}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <WireframeSpec items={[
        'Layout: 50/50 dark split — capability list left, quality manifesto right',
        'Left: Charcoal bg, numbered list (01-06) with Bebas Neue titles',
        'Hover: Background image fades in at 15% opacity behind text, title shifts right',
        'Right: Matte black (#1A1A1A) bg, large italic blockquote with burgundy left-border',
        'Quality pillars: Icon + title + description in vertical stack',
        'Typography: Brutalist oversized text, letting whitespace breathe',
        'No images in the quality column — pure typography focus',
      ]} />
    </div>
  );
}


// ═══════════════════════════════════════════════════════════
// SECTION 6: HERITAGE & CONTACT — Mega-Footer
// Group heritage left, minimalist contact form right
// ═══════════════════════════════════════════════════════════

export function DMFTWireframe_HeritageContact(): ReactNode {
  return (
    <div>
      <WireframeLabel
        layout="Mega-Footer — Group Heritage + Contact"
        description="Footer as a destination — Seamless transition into a grid-based mega-footer with Vharani Group heritage left and minimalist partnership enquiry form right"
      />

      <div className="overflow-hidden" style={{ border: '2px solid var(--vharanani-charcoal-20)' }}>
        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Left — Heritage */}
          <div className="p-8 md:p-12 flex flex-col justify-center" style={{ background: 'var(--vharanani-charcoal)' }}>
            <div className="typo-caption tracking-[0.3em] uppercase font-inter mb-4" style={{ color: 'var(--vharanani-burgundy)' }}>
              OUR HERITAGE
            </div>

            <h2 className="font-bebas-neue tracking-wide uppercase text-white mb-4">
              Part of the<br />Vharani Group
            </h2>

            <div className="w-10 h-[2px] mb-6" style={{ background: 'var(--vharanani-burgundy)' }} />

            <p className="font-inter typo-copy mb-6" style={{ color: 'rgba(255,255,255,0.6)' }}>
              DMFT Property Developers forms part of the Vharani Group, a diversified African holding company with interests across infrastructure, construction, property development, and investment sectors.
            </p>

            <p className="font-inter typo-copy-small mb-8" style={{ color: 'rgba(255,255,255,0.4)' }}>
              This relationship provides DMFT with access to strong technical expertise, established infrastructure capabilities, and an experienced leadership team with over 20 years of industry experience.
            </p>

            {/* Group companies */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { name: 'Vharani Properties', type: 'Construction' },
                { name: 'DMFT', type: 'Property Dev' },
                { name: 'DMF Foundation', type: 'Social Impact' },
              ].map((company, i) => (
                <div key={i} className="p-3 text-center" style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)' }}>
                  <div className="font-bebas-neue typo-headline-small tracking-wide text-white uppercase">{company.name}</div>
                  <div className="font-inter typo-meta tracking-wider uppercase mt-1" style={{ color: 'rgba(255,255,255,0.3)' }}>{company.type}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Contact */}
          <div className="p-8 md:p-12 flex flex-col justify-center" style={{ background: '#1A1A1A' }}>
            <div className="typo-caption tracking-[0.3em] uppercase font-inter mb-4" style={{ color: 'var(--vharanani-burgundy)' }}>
              GET IN TOUCH
            </div>

            <h3 className="font-bebas-neue typo-subline tracking-wide uppercase text-white mb-6">
              Ready to partner?
            </h3>

            {/* Minimalist form */}
            <div className="space-y-4 mb-8">
              <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-transparent py-3 font-inter typo-copy-small text-white placeholder-white/30 outline-none"
                />
              </div>
              <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-transparent py-3 font-inter typo-copy-small text-white placeholder-white/30 outline-none"
                />
              </div>
              <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <textarea
                  placeholder="Message"
                  rows={3}
                  className="w-full bg-transparent py-3 font-inter typo-copy-small text-white placeholder-white/30 outline-none resize-none"
                />
              </div>
              <button
                className="flex items-center gap-3 px-6 py-3 transition-all duration-300 hover:gap-4 mt-2"
                style={{ background: 'var(--vharanani-burgundy)' }}
              >
                <span className="font-bebas-neue typo-headline-small tracking-wider uppercase text-white">Submit</span>
                <ArrowRight size={14} className="text-white" />
              </button>
            </div>

            {/* Contact details */}
            <div className="space-y-2 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="flex items-center gap-3">
                <Mail size={14} style={{ color: 'var(--vharanani-burgundy)' }} />
                <span className="font-inter typo-copy-small" style={{ color: 'var(--vharanani-burgundy)' }}>info@vharanani.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={14} style={{ color: 'rgba(255,255,255,0.3)' }} />
                <span className="font-inter typo-copy-small" style={{ color: 'rgba(255,255,255,0.4)' }}>+27 (0) 11 XXX XXXX</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={14} style={{ color: 'rgba(255,255,255,0.3)' }} />
                <span className="font-inter typo-copy-small" style={{ color: 'rgba(255,255,255,0.4)' }}>Johannesburg, South Africa</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between px-6 py-3" style={{ background: '#111111', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <span className="font-inter typo-meta tracking-wider uppercase" style={{ color: 'rgba(255,255,255,0.2)' }}>
            &copy; 2026 DMFT Property Developers. All rights reserved.
          </span>
          <div className="flex items-center gap-4">
            <span className="font-inter typo-meta tracking-wider uppercase" style={{ color: 'rgba(255,255,255,0.2)' }}>Privacy Policy</span>
            <span className="font-inter typo-meta tracking-wider uppercase" style={{ color: 'rgba(255,255,255,0.2)' }}>Terms</span>
          </div>
        </div>
      </div>

      <WireframeSpec items={[
        'Layout: 50/50 dark split — heritage left (charcoal), contact right (matte black)',
        'Heritage: "Part of the Vharani Group" with 3-column subsidiary cards',
        'Contact: Minimalist borderless inputs (underline only), burgundy submit CTA',
        'Bottom bar: Copyright + Privacy/Terms links on ultra-dark strip',
        'Transition: Previous section fades seamlessly into footer (no hard break)',
        'Form: Single-line inputs for Name, Email + multi-line Message',
        'Mobile: Stack vertically — heritage above, contact below',
      ]} />
    </div>
  );
}