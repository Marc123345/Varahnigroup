import { type ReactNode } from 'react';
import { Building2, Home, Heart, Layers, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../../ui/ImageWithFallback';

const IMAGES = {
  aerialDev: 'https://images.unsplash.com/photo-1524813686514-a57563d77965?w=1400&q=85&fit=crop',
};

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
                <span className="typo-caption tracking-[0.28em] uppercase font-inter text-white/50">
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
                <span className="typo-caption tracking-[0.28em] uppercase font-inter text-white/50">
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
              <span className="typo-caption tracking-[0.28em] uppercase font-inter" style={{ color: 'var(--vharanani-burgundy)' }}>
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
