import { type ReactNode, useState } from 'react';
import {
  GraduationCap, Home, Heart, Users, Landmark, Globe,
  Building2, MapPin, Mail, Phone, ArrowRight, Layers,
  BookOpen, Shield, ChevronRight,
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
// SECTION 1: HERO — The Human Element
// Full-bleed warm photo, headline, dual CTA buttons
// ═══════════════════════════════════════════════════════════

export function FoundationWireframe_Hero(): ReactNode {
  return (
    <div>
      <WireframeLabel
        layout="Full-Bleed Warm Hero + Goal & Vision Split"
        description="The Human Element — Warm-toned community photograph with emotional headline, dual CTA buttons, followed by an asymmetric 2-column vision/mission split with founder blockquote"
      />

      {/* ── HERO ── */}
      <div className="relative h-[400px] overflow-hidden" style={{ border: '2px solid var(--vharanani-charcoal-20)' }}>
        <ImagePlaceholder label="Community Gathering" className="absolute inset-0 w-full h-full"
        />
        {/* Warm gradient overlay */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(44,45,45,0.3) 0%, rgba(137,43,28,0.25) 50%, rgba(44,45,45,0.7) 100%)' }} />

        {/* Nav placeholder */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-4">
          <div className="font-bebas-neue typo-headline-small tracking-wider text-white uppercase opacity-80">
            The David Mabilu Foundation
          </div>
          <div className="hidden md:flex items-center gap-6">
            {['About', 'Programmes', 'Our Impact', 'Vharani Group', 'Contact'].map((item) => (
              <span key={item} className="font-inter typo-meta tracking-[0.12em] uppercase text-white opacity-50 hover:opacity-100 cursor-pointer transition-opacity">{item}</span>
            ))}
          </div>
        </div>

        {/* Hero content */}
        <div className="absolute inset-0 flex flex-col items-start justify-end p-6 md:p-10 max-w-3xl">
          <h1 className="font-bebas-neue tracking-wide uppercase text-white mb-3">
            Building Stronger Communities Through Opportunity.
          </h1>
          <p className="font-inter typo-copy mb-6" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Empowering individuals and sustainably improving living standards across South Africa.
          </p>
          {/* Dual CTAs */}
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-5 py-3 transition-all duration-300 hover:gap-3" style={{ background: 'var(--vharanani-burgundy)' }}>
              <span className="font-bebas-neue typo-headline-small tracking-wider uppercase text-white">See Our Impact</span>
              <ArrowRight size={14} className="text-white" />
            </button>
            <button className="flex items-center gap-2 px-5 py-3 transition-all duration-300 hover:bg-white/10" style={{ border: '1px solid rgba(255,255,255,0.4)' }}>
              <span className="font-bebas-neue typo-headline-small tracking-wider uppercase text-white">Partner With Us</span>
            </button>
          </div>
        </div>

        {/* Wireframe annotation */}
        <div className="absolute top-3 right-3 px-2 py-1" style={{ background: 'rgba(0,0,0,0.7)' }}>
          <span className="font-inter typo-meta text-white tracking-wider uppercase">Full-bleed warm-toned photograph</span>
        </div>
      </div>

      {/* ── GOAL & VISION SPLIT ── */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-0 overflow-hidden mt-[2px]" style={{ border: '2px solid var(--vharanani-charcoal-20)' }}>
        {/* Left — Text (60%) */}
        <div className="md:col-span-3 p-6 md:p-10 flex flex-col justify-center" style={{ background: 'rgba(44,45,45,0.02)' }}>
          <div className="typo-caption tracking-[0.3em] uppercase font-inter mb-3" style={{ color: 'var(--vharanani-burgundy)' }}>
            OUR GOAL
          </div>
          <h3 className="font-bebas-neue typo-subline tracking-wide uppercase mb-4" style={{ color: 'var(--vharanani-charcoal)' }}>
            A Vision for Lasting Change.
          </h3>
          <p className="font-inter typo-copy mb-4" style={{ color: 'var(--vharanani-charcoal)' }}>
            The primary goal of the David Mabilu Foundation is to reduce poverty and sustainably improve the living standards of disadvantaged and marginalised communities throughout South Africa.
          </p>
          <p className="font-inter typo-copy-small mb-6" style={{ color: 'var(--vharanani-charcoal-60)' }}>
            We believe that lasting change is achieved when communities are empowered with access to education, housing, and opportunities for social and economic development. Through targeted programmes, partnerships, and direct support, the Foundation works to address real community challenges while promoting long-term empowerment.
          </p>
          {/* Key pillars mini-icons */}
          <div className="flex items-center gap-6">
            {[
              { icon: <GraduationCap size={16} />, label: 'Education' },
              { icon: <Home size={16} />, label: 'Housing' },
              { icon: <Heart size={16} />, label: 'Community' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <div style={{ color: 'var(--vharanani-burgundy)' }}>{item.icon}</div>
                <span className="font-inter typo-meta tracking-[0.12em] uppercase" style={{ color: 'var(--vharanani-charcoal-60)' }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Blockquote + Image (40%) */}
        <div className="md:col-span-2 relative">
          <ImagePlaceholder label="Founder Portrait" className="absolute inset-0 w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
          <div className="relative z-10 h-full min-h-[300px] flex flex-col justify-end p-6">
            <div className="p-5" style={{ borderLeft: '3px solid var(--vharanani-burgundy)', background: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(4px)' }}>
              <p className="font-inter typo-copy italic text-white mb-3">
                "The Foundation was established with a vision to give back meaningfully to the communities that continue to shape South Africa's future."
              </p>
              <div className="font-inter typo-meta tracking-[0.15em] uppercase" style={{ color: 'var(--vharanani-burgundy-40)' }}>
                &mdash; David Mabilu, Founder
              </div>
            </div>
          </div>
        </div>
      </div>

      <WireframeSpec items={[
        'Hero: Full-bleed warm-toned community photograph, 400px height',
        'Overlay: Warm gradient (charcoal + burgundy tones) for emotional warmth',
        'CTA: Primary burgundy "See Our Impact" + secondary outline "Partner With Us"',
        'Goal split: 60/40 asymmetric — text left, founder portrait + blockquote right',
        'Right image: Portrait-orientation with glassmorphism blockquote overlay',
        'Pillars: Mini icon row (Education, Housing, Community) as preview anchors',
        'Mobile: Hero stacks above vision split, both full-width',
      ]} />
    </div>
  );
}


// ═══════════════════════════════════════════════════════════
// SECTION 3: PARTNERSHIP NETWORK — Full-Width Icon Grid
// How We Work — 6-item partner type grid
// ═══════════════════════════════════════════════════════════

export function FoundationWireframe_PartnerNetwork(): ReactNode {
  const partners = [
    { icon: <Globe size={24} />, title: 'Local & National Partners', description: 'Collaborating with organisations across South Africa to extend reach and impact.' },
    { icon: <Landmark size={24} />, title: 'Government Institutions', description: 'Working with national and provincial government departments on development initiatives.' },
    { icon: <BookOpen size={24} />, title: 'Faith-Based Organisations', description: 'Partnering with churches and religious bodies to support community education and welfare.' },
    { icon: <Shield size={24} />, title: 'Traditional Leaders', description: 'Engaging with traditional authorities to ensure cultural sensitivity and community buy-in.' },
    { icon: <Building2 size={24} />, title: 'Private Sector Partners', description: 'Leveraging corporate resources and expertise for sustainable programme delivery.' },
    { icon: <Users size={24} />, title: 'Community Organisations', description: 'Empowering grassroots organisations to drive local change and development.' },
  ];

  return (
    <div>
      <WireframeLabel
        layout="Full-Width Banner + 6-Item Icon Grid"
        description="How We Work — Warm earth-toned banner with 'Collaborating for Meaningful Impact' headline and a clean 6-item icon grid representing the partnership network"
      />

      <div className="overflow-hidden" style={{ border: '2px solid var(--vharanani-charcoal-20)' }}>
        {/* Banner header */}
        <div className="text-center py-8 px-6" style={{ background: 'var(--vharanani-burgundy-20)' }}>
          <div className="typo-caption tracking-[0.3em] uppercase font-inter mb-2" style={{ color: 'var(--vharanani-burgundy)' }}>
            HOW WE WORK
          </div>
          <h2 className="font-bebas-neue tracking-wide uppercase" style={{ color: 'var(--vharanani-charcoal)' }}>
            Collaborating for Meaningful Impact.
          </h2>
          <p className="font-inter typo-copy-small mt-3 max-w-xl mx-auto" style={{ color: 'var(--vharanani-charcoal-60)' }}>
            The Foundation works collaboratively with a broad network of partners to deliver impactful programmes and extend its reach across communities.
          </p>
        </div>

        {/* 6-item grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[1px]" style={{ background: 'var(--vharanani-charcoal-20)' }}>
          {partners.map((partner, i) => (
            <div
              key={i}
              className="group p-6 text-center transition-all duration-300 hover:translate-y-[-2px]"
              style={{ background: 'white' }}
            >
              <div
                className="w-14 h-14 mx-auto flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-[rgba(137,43,28,0.06)]"
                style={{ border: '2px solid var(--vharanani-charcoal-20)', color: 'var(--vharanani-burgundy)' }}
              >
                {partner.icon}
              </div>
              <h4 className="font-bebas-neue typo-headline-small tracking-wide uppercase mb-2" style={{ color: 'var(--vharanani-charcoal)' }}>
                {partner.title}
              </h4>
              <p className="font-inter typo-copy-small" style={{ color: 'var(--vharanani-charcoal-60)' }}>
                {partner.description}
              </p>
              {/* Hover accent */}
              <div className="mx-auto mt-4 w-0 group-hover:w-8 h-[2px] transition-all duration-500" style={{ background: 'var(--vharanani-burgundy)' }} />
            </div>
          ))}
        </div>
      </div>

      <WireframeSpec items={[
        'Banner: Warm earth-toned background (burgundy-20) with centered headline',
        'Grid: 3-column × 2 rows, 1px gap borders',
        'Cards: 56px icon squares with border, Bebas title, Inter description',
        'Hover: translateY(-2px) lift, icon bg tint, burgundy accent line expands',
        'Mobile: 2-column grid on tablet, single column on phone',
      ]} />
    </div>
  );
}


// ═══════════════════════════════════════════════════════════
// SECTION 4: CORE PROGRAMME AREAS — 3-Column Cards
// Education, Housing, Community Upliftment pillars
// ═══════════════════════════════════════════════════════════

export function FoundationWireframe_ProgrammeAreas(): ReactNode {
  const programmes = [
    {
      title: 'Education',
      icon: <GraduationCap size={22} />,
      imageLabel: 'Education Programme',
      description: 'Breaking the cycle of poverty through scholarships, resources, and infrastructure.',
      details: ['Full tuition & stipends', 'School uniforms & supplies', 'Computer labs & classrooms', 'Educational trips'],
    },
    {
      title: 'Housing',
      icon: <Home size={22} />,
      imageLabel: 'Housing Initiative',
      description: 'Providing safe, dignified homes for vulnerable individuals and families.',
      details: ['Home construction', 'Community housing', 'Government partnerships', 'Nelson Mandela Day builds'],
    },
    {
      title: 'Community Upliftment',
      icon: <Heart size={22} />,
      imageLabel: 'Youth & Community',
      description: 'Strengthening social wellbeing through youth, sports, and women\'s initiatives.',
      details: ['Youth development', 'Sports equipment & kits', 'Women\'s empowerment', 'Winter blanket drives'],
    },
  ];

  return (
    <div>
      <WireframeLabel
        layout="3-Column Interactive Card Component"
        description="Core Programme Areas — Three pillar cards (Education, Housing, Community) each with a photograph header, icon, description, and detail list. Click opens programme detail view."
      />

      {/* Section header */}
      <div className="text-center mb-6">
        <div className="typo-caption tracking-[0.3em] uppercase font-inter mb-2" style={{ color: 'var(--vharanani-burgundy)' }}>
          WHAT WE DO
        </div>
        <h2 className="font-bebas-neue tracking-wide uppercase" style={{ color: 'var(--vharanani-charcoal)' }}>
          Core Programme Areas
        </h2>
      </div>

      {/* 3-column cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {programmes.map((prog, i) => (
          <div
            key={i}
            className="group overflow-hidden transition-all duration-300 hover:-translate-y-1"
            style={{ border: '2px solid var(--vharanani-charcoal-20)' }}
          >
            {/* Card image */}
            <div className="relative h-[200px] overflow-hidden">
              <ImagePlaceholder
                label={prog.imageLabel}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              {/* Icon badge */}
              <div className="absolute bottom-3 left-3 w-10 h-10 flex items-center justify-center" style={{ background: 'var(--vharanani-burgundy)' }}>
                <div className="text-white">{prog.icon}</div>
              </div>
              {/* Hover CTA */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-2 py-1 flex items-center gap-1" style={{ background: 'var(--vharanani-burgundy)' }}>
                <span className="font-inter typo-meta text-white tracking-wider uppercase">Explore</span>
                <ArrowRight size={10} className="text-white" />
              </div>
            </div>

            {/* Card body */}
            <div className="p-5" style={{ background: 'white' }}>
              <h3 className="font-bebas-neue typo-subline tracking-wide uppercase mb-2" style={{ color: 'var(--vharanani-charcoal)' }}>
                {prog.title}
              </h3>
              <p className="font-inter typo-copy-small mb-4" style={{ color: 'var(--vharanani-charcoal-60)' }}>
                {prog.description}
              </p>
              {/* Detail list */}
              <div className="space-y-1.5">
                {prog.details.map((detail, j) => (
                  <div key={j} className="flex items-center gap-2">
                    <div className="w-1 h-1 flex-shrink-0" style={{ background: 'var(--vharanani-burgundy)' }} />
                    <span className="font-inter typo-meta" style={{ color: 'var(--vharanani-charcoal-60)' }}>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom accent */}
            <div className="h-[3px] w-0 group-hover:w-full transition-all duration-500" style={{ background: 'var(--vharanani-burgundy)' }} />
          </div>
        ))}
      </div>

      <WireframeSpec items={[
        'Grid: 3-column equal cards with 16px gap',
        'Card: 200px image header with gradient overlay + icon badge (40px burgundy square)',
        'Body: Bebas title, Inter description, bullet detail list',
        'Hover: translateY(-4px) lift, image scale(1.05), "Explore" CTA reveals, accent line',
        'Icons: Programme-specific — GraduationCap, Home, Heart',
        'Mobile: Single column stack',
      ]} />
    </div>
  );
}


// ═══════════════════════════════════════════════════════════
// SECTION 5: IMPACT STORIES — Tabbed Component
// Education, Housing, Community tabs with data + stories
// ═══════════════════════════════════════════════════════════

export function FoundationWireframe_ImpactStories(): ReactNode {
  const [activeTab, setActiveTab] = useState<'education' | 'housing' | 'community'>('education');

  const tabs = {
    education: {
      title: 'Education Impact',
      metric: '34',
      metricLabel: 'Full scholarships provided since 2011',
      imageLabel: 'Scholarship Programme',
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
      imageLabel: 'Housing Delivery',
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
      metricLabel: 'Nelson Mandela Day at Mambo Primary — Founder\'s alma mater',
      imageLabel: 'Mandela Day',
      highlight: 'David Mabilu and Vharani Properties staff spent their 67 minutes at Mambo Primary School in Chiawelo, Soweto — painting classrooms, cleaning facilities, and donating hygiene supplies.',
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
    <div>
      <WireframeLabel
        layout="Tabbed Impact Stories Component"
        description="What We Do — Interactive tabbed UI organising historical impact data into digestible sections: Education Impact, Housing Dignity, and Community & Social Support, each with highlight metrics and story details"
      />

      <div className="overflow-hidden" style={{ border: '2px solid var(--vharanani-charcoal-20)' }}>
        {/* Tab bar */}
        <div className="flex items-center gap-0" style={{ borderBottom: '2px solid var(--vharanani-charcoal-20)' }}>
          {([['education', 'Education Impact'], ['housing', 'Housing Dignity'], ['community', 'Community Support']] as const).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className="flex-1 py-4 text-center transition-all duration-200"
              style={{
                borderBottom: activeTab === key ? '3px solid var(--vharanani-burgundy)' : '3px solid transparent',
                marginBottom: '-2px',
                background: activeTab === key ? 'rgba(137,43,28,0.04)' : 'white',
              }}
            >
              <span
                className="font-bebas-neue typo-headline-small tracking-wider uppercase"
                style={{ color: activeTab === key ? 'var(--vharanani-burgundy)' : 'var(--vharanani-charcoal-60)' }}
              >
                {label}
              </span>
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Left — Image + metric */}
          <div className="relative h-[300px] md:h-auto md:min-h-[380px]">
            <ImagePlaceholder label={current.imageLabel} className="absolute inset-0 w-full h-full" />

            {/* Big metric */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="font-bebas-neue tracking-wider text-white mb-1" style={{ fontSize: 'clamp(48px, 6vw, 72px)', lineHeight: '1' }}>
                {current.metric}
              </div>
              <div className="font-inter typo-copy-small" style={{ color: 'rgba(255,255,255,0.7)' }}>
                {current.metricLabel}
              </div>
            </div>
          </div>

          {/* Right — Story + details */}
          <div className="p-6 md:p-8" style={{ background: 'white' }}>
            <h3 className="font-bebas-neue typo-subline tracking-wide uppercase mb-4" style={{ color: 'var(--vharanani-charcoal)' }}>
              {current.title}
            </h3>

            {/* Highlight story */}
            <div className="p-4 mb-6" style={{ borderLeft: '3px solid var(--vharanani-burgundy)', background: 'rgba(137,43,28,0.04)' }}>
              <p className="font-inter typo-copy-small" style={{ color: 'var(--vharanani-charcoal)' }}>
                {current.highlight}
              </p>
            </div>

            {/* Detail list */}
            <div className="space-y-3">
              {current.details.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start justify-between gap-4 py-2"
                  style={{ borderBottom: '1px solid var(--vharanani-charcoal-20)' }}
                >
                  <div>
                    <div className="font-bebas-neue typo-headline-small tracking-wide uppercase" style={{ color: 'var(--vharanani-charcoal)' }}>
                      {item.label}
                    </div>
                    <div className="font-inter typo-meta mt-0.5" style={{ color: 'var(--vharanani-charcoal-60)' }}>
                      {item.note}
                    </div>
                  </div>
                  <ChevronRight size={14} className="flex-shrink-0 mt-1" style={{ color: 'var(--vharanani-charcoal-20)' }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Wireframe annotation */}
      <div className="mt-3 flex items-center gap-2">
        <div className="px-2 py-1" style={{ background: 'rgba(137,43,28,0.08)', border: '1px dashed var(--vharanani-burgundy-60)' }}>
          <span className="font-inter typo-meta tracking-wider uppercase" style={{ color: 'var(--vharanani-burgundy)' }}>Tabs switch content without page reload — data-driven</span>
        </div>
      </div>

      <WireframeSpec items={[
        'Layout: 3-tab bar + 50/50 content split',
        'Tabs: Education Impact | Housing Dignity | Community Support — burgundy underline active',
        'Left: Full-bleed image with oversized metric counter at bottom',
        'Right: Title, blockquote highlight story, detail list with chevron indicators',
        'Metrics: 34 (scholarships), 3 (bedroom home), 2012 (Mandela Day)',
        'Transition: Tab content switches via state — no page reload',
        'Mobile: Full-width tabs, stacked image above content',
      ]} />
    </div>
  );
}


// ═══════════════════════════════════════════════════════════
// SECTION 6: VHARANI GROUP HERITAGE — Modular Block
// ═══════════════════════════════════════════════════════════

export function FoundationWireframe_Heritage(): ReactNode {
  return (
    <div>
      <WireframeLabel
        layout="Modular Heritage Block"
        description="Part of the Vharani Group — Clean modular block with subtle watermark background, heritage copy explaining the group relationship, and a CTA to learn more"
      />

      <div className="relative overflow-hidden p-8 md:p-12" style={{ border: '2px solid var(--vharanani-charcoal-20)', background: 'rgba(44,45,45,0.02)' }}>
        {/* Subtle watermark */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 opacity-[0.03] pointer-events-none">
          <div className="font-bebas-neue uppercase tracking-wider" style={{ fontSize: '160px', lineHeight: '1', color: 'var(--vharanani-charcoal)' }}>
            VHARANI
          </div>
        </div>

        <div className="relative z-10 max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <Layers size={18} style={{ color: 'var(--vharanani-burgundy)' }} />
            <div className="typo-caption tracking-[0.3em] uppercase font-inter" style={{ color: 'var(--vharanani-burgundy)' }}>
              OUR HERITAGE
            </div>
          </div>

          <h2 className="font-bebas-neue tracking-wide uppercase mb-4" style={{ color: 'var(--vharanani-charcoal)' }}>
            Supported by the Vharani Group.
          </h2>

          <div className="w-10 h-[2px] mb-6" style={{ background: 'var(--vharanani-burgundy)' }} />

          <p className="font-inter typo-copy mb-4" style={{ color: 'var(--vharanani-charcoal)' }}>
            By leveraging the resources, expertise, and partnerships of our parent company, the Foundation scales its reach to build stronger, more resilient communities across South Africa.
          </p>

          <p className="font-inter typo-copy-small mb-8" style={{ color: 'var(--vharanani-charcoal-60)' }}>
            The David Mabilu Foundation works closely with the Vharani Group and its subsidiary companies to support social development initiatives. Through these relationships, the Foundation is able to leverage resources, expertise, and partnerships that enhance the reach and impact of its programmes.
          </p>

          <button className="flex items-center gap-2 px-5 py-3 transition-all duration-300 hover:gap-3" style={{ border: '1px solid var(--vharanani-charcoal-20)' }}>
            <span className="font-bebas-neue typo-headline-small tracking-wider uppercase" style={{ color: 'var(--vharanani-charcoal)' }}>Learn More About Our Heritage</span>
            <ArrowRight size={14} style={{ color: 'var(--vharanani-burgundy)' }} />
          </button>
        </div>
      </div>

      <WireframeSpec items={[
        'Layout: Single modular block, left-aligned content, max-width 640px',
        'Background: Subtle Vharani watermark text at 3% opacity, oversized (160px)',
        'Content: Heritage tagline, headline, divider, body copy, CTA button',
        'CTA: Outline button with burgundy arrow — "Learn More About Our Heritage"',
        'Border: Thin charcoal-20 border to define modular separation',
      ]} />
    </div>
  );
}


// ═══════════════════════════════════════════════════════════
// SECTION 7: CONTACT & GET INVOLVED — Welcome Form
// ═══════════════════════════════════════════════════════════

export function FoundationWireframe_Contact(): ReactNode {
  return (
    <div>
      <WireframeLabel
        layout="Welcoming Contact Form + Footer"
        description="Join Us in Building Opportunity — Clean, accessible contact form with inquiry type selector, followed by a foundation footer with tagline and group attribution"
      />

      <div className="overflow-hidden" style={{ border: '2px solid var(--vharanani-charcoal-20)' }}>
        {/* Form section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Left — Copy */}
          <div className="p-8 md:p-12 flex flex-col justify-center" style={{ background: 'var(--vharanani-burgundy)' }}>
            <h2 className="font-bebas-neue tracking-wide uppercase text-white mb-4">
              Join Us in Building Opportunity.
            </h2>
            <div className="w-10 h-[2px] mb-6" style={{ background: 'rgba(255,255,255,0.3)' }} />
            <p className="font-inter typo-copy mb-6" style={{ color: 'rgba(255,255,255,0.8)' }}>
              Reach out for partnership opportunities, community initiatives, or support enquiries. Together, we can build stronger communities.
            </p>

            {/* Contact details */}
            <div className="space-y-3 mt-auto">
              <div className="flex items-center gap-3">
                <Mail size={14} className="text-white opacity-60" />
                <span className="font-inter typo-copy-small text-white">info@vharanani.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={14} className="text-white opacity-60" />
                <span className="font-inter typo-copy-small" style={{ color: 'rgba(255,255,255,0.7)' }}>+27 (0) 11 XXX XXXX</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={14} className="text-white opacity-60" />
                <span className="font-inter typo-copy-small" style={{ color: 'rgba(255,255,255,0.7)' }}>Johannesburg, South Africa</span>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="p-8 md:p-12" style={{ background: 'white' }}>
            <div className="space-y-4">
              <div>
                <label className="font-inter typo-meta tracking-[0.12em] uppercase mb-1.5 block" style={{ color: 'var(--vharanani-charcoal-60)' }}>Name *</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full px-4 py-3 font-inter typo-copy-small outline-none transition-colors duration-200 focus:border-[var(--vharanani-burgundy)]"
                  style={{ border: '1px solid var(--vharanani-charcoal-20)', background: 'rgba(44,45,45,0.02)' }}
                />
              </div>
              <div>
                <label className="font-inter typo-meta tracking-[0.12em] uppercase mb-1.5 block" style={{ color: 'var(--vharanani-charcoal-60)' }}>Organisation <span style={{ color: 'var(--vharanani-charcoal-20)' }}>(Optional)</span></label>
                <input
                  type="text"
                  placeholder="Your organisation"
                  className="w-full px-4 py-3 font-inter typo-copy-small outline-none transition-colors duration-200 focus:border-[var(--vharanani-burgundy)]"
                  style={{ border: '1px solid var(--vharanani-charcoal-20)', background: 'rgba(44,45,45,0.02)' }}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-inter typo-meta tracking-[0.12em] uppercase mb-1.5 block" style={{ color: 'var(--vharanani-charcoal-60)' }}>Email *</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 font-inter typo-copy-small outline-none transition-colors duration-200 focus:border-[var(--vharanani-burgundy)]"
                    style={{ border: '1px solid var(--vharanani-charcoal-20)', background: 'rgba(44,45,45,0.02)' }}
                  />
                </div>
                <div>
                  <label className="font-inter typo-meta tracking-[0.12em] uppercase mb-1.5 block" style={{ color: 'var(--vharanani-charcoal-60)' }}>Phone</label>
                  <input
                    type="tel"
                    placeholder="+27..."
                    className="w-full px-4 py-3 font-inter typo-copy-small outline-none transition-colors duration-200 focus:border-[var(--vharanani-burgundy)]"
                    style={{ border: '1px solid var(--vharanani-charcoal-20)', background: 'rgba(44,45,45,0.02)' }}
                  />
                </div>
              </div>
              <div>
                <label className="font-inter typo-meta tracking-[0.12em] uppercase mb-1.5 block" style={{ color: 'var(--vharanani-charcoal-60)' }}>Inquiry Type</label>
                <select
                  className="w-full px-4 py-3 font-inter typo-copy-small outline-none"
                  style={{ border: '1px solid var(--vharanani-charcoal-20)', background: 'rgba(44,45,45,0.02)', color: 'var(--vharanani-charcoal-60)' }}
                  defaultValue=""
                >
                  <option value="" disabled>Select inquiry type</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="support">Community Support</option>
                  <option value="general">General Enquiry</option>
                </select>
              </div>
              <div>
                <label className="font-inter typo-meta tracking-[0.12em] uppercase mb-1.5 block" style={{ color: 'var(--vharanani-charcoal-60)' }}>Message *</label>
                <textarea
                  placeholder="How can we work together?"
                  rows={3}
                  className="w-full px-4 py-3 font-inter typo-copy-small outline-none resize-none transition-colors duration-200 focus:border-[var(--vharanani-burgundy)]"
                  style={{ border: '1px solid var(--vharanani-charcoal-20)', background: 'rgba(44,45,45,0.02)' }}
                />
              </div>
              <button
                className="w-full flex items-center justify-center gap-2 px-6 py-3 transition-all duration-300 hover:gap-3"
                style={{ background: 'var(--vharanani-burgundy)' }}
              >
                <span className="font-bebas-neue typo-headline-small tracking-wider uppercase text-white">Send Message</span>
                <ArrowRight size={14} className="text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Footer bar */}
        <div className="px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3" style={{ background: 'var(--vharanani-charcoal)', borderTop: '3px solid var(--vharanani-burgundy)' }}>
          <div className="flex items-center gap-4">
            <span className="font-bebas-neue typo-headline-small tracking-wider text-white uppercase">The David Mabilu Foundation</span>
            <div className="w-[1px] h-4" style={{ background: 'rgba(255,255,255,0.15)' }} />
            <div className="flex items-center gap-1.5">
              <Layers size={12} style={{ color: 'var(--vharanani-burgundy)' }} />
              <span className="font-inter typo-meta tracking-wider uppercase" style={{ color: 'rgba(255,255,255,0.4)' }}>Vharani Group</span>
            </div>
          </div>
          <p className="font-inter typo-meta italic" style={{ color: 'rgba(255,255,255,0.3)' }}>
            "Building opportunity. Empowering communities."
          </p>
        </div>
      </div>

      <WireframeSpec items={[
        'Layout: 50/50 split — burgundy copy panel left, white form right',
        'Left: Headline, description, contact details (email, phone, address)',
        'Form fields: Name, Organisation (optional), Email + Phone (2-col), Inquiry Type (select), Message',
        'Submit: Full-width burgundy CTA — "Send Message"',
        'Footer: Charcoal bar with Foundation name, Vharani Group tag, and closing tagline',
        'Border-top: 3px burgundy accent line on footer bar',
        'Mobile: Stack vertically — copy above form',
      ]} />
    </div>
  );
}