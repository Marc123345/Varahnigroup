import { type ReactNode } from 'react';
import { Layers, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../../ui/ImageWithFallback';

const IMAGES = {
  blanketDrive: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1080&q=80',
};

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
            background: 'linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.9) 100%)'
          }} />
          <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-12 lg:px-20 pb-10">
            <div className="max-w-7xl mx-auto w-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[2px]" style={{ background: 'rgba(255,255,255,0.5)' }} />
                <span className="typo-caption tracking-[0.28em] uppercase font-inter text-white/50">
                  CONTACT THE FOUNDATION
                </span>
              </div>
              <h2 className="typo-header font-bebas-neue tracking-wide uppercase text-white" style={{ lineHeight: 0.95 }}>
                The David Mabilu<br />Foundation.
              </h2>
            </div>
          </div>
        </div>

        {/* ── FORM SECTION ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Left — Contact info */}
          <div className="p-8 md:p-12 flex flex-col justify-center" style={{ background: 'var(--dmf-primary)' }}>
            <p className="typo-copy font-inter mb-8" style={{ color: 'rgba(255,255,255,0.8)' }}>
              For partnership opportunities, community initiatives, or support enquiries, please contact the David Mabilu Foundation.
            </p>

            {/* Contact details — tappable links */}
            <div className="space-y-0" style={{ border: '1px solid rgba(255,255,255,0.2)' }}>
              {[
                { icon: <Mail size={16} />, label: 'Email', value: 'info@vharananiproperties.co.za', href: 'mailto:info@vharananiproperties.co.za' },
                { icon: <Phone size={16} />, label: 'Phone', value: '+27 11 656 1418', href: 'tel:+27116561418' },
                { icon: <MapPin size={16} />, label: 'Location', value: '18 Hume Road, Dunkeld West, Johannesburg', href: 'https://maps.google.com/?q=18+Hume+Road+Dunkeld+West+Johannesburg' },
              ].map((item, i) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === 'Location' ? '_blank' : undefined}
                  rel={item.label === 'Location' ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-5 min-h-[56px] hover:bg-white/5 transition-colors"
                  style={{ borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.2)' : 'none' }}
                >
                  <div className="w-10 h-10 flex items-center justify-center flex-shrink-0" style={{ border: '1px solid rgba(255,255,255,0.4)', color: 'white' }}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="typo-meta tracking-[0.12em] uppercase font-inter mb-0.5" style={{ color: 'rgba(255,255,255,0.7)' }}>{item.label}</div>
                    <div className="typo-copy-small font-inter text-white">{item.value}</div>
                  </div>
                </a>
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
                  autoComplete="name"
                  required
                  className="w-full px-4 py-3 font-inter typo-copy-small text-base outline-none transition-colors duration-200 focus:border-[var(--dmf-primary)] min-h-[48px]"
                  style={{ border: '1px solid var(--vharanani-charcoal-20)', background: 'white', fontSize: 16 }}
                />
              </div>
              <div>
                <label className="typo-meta tracking-[0.12em] uppercase font-inter mb-2 block" style={{ color: 'var(--vharanani-charcoal-60)' }}>Organisation <span style={{ color: 'var(--vharanani-charcoal-20)' }}>(Optional)</span></label>
                <input
                  type="text"
                  placeholder="Your organisation"
                  autoComplete="organization"
                  className="w-full px-4 py-3 font-inter typo-copy-small text-base outline-none transition-colors duration-200 focus:border-[var(--dmf-primary)] min-h-[48px]"
                  style={{ border: '1px solid var(--vharanani-charcoal-20)', background: 'white', fontSize: 16 }}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="typo-meta tracking-[0.12em] uppercase font-inter mb-2 block" style={{ color: 'var(--vharanani-charcoal-60)' }}>Email *</label>
                  <input
                    type="email"
                    inputMode="email"
                    placeholder="your@email.com"
                    autoComplete="email"
                    required
                    className="w-full px-4 py-3 font-inter typo-copy-small text-base outline-none transition-colors duration-200 focus:border-[var(--dmf-primary)] min-h-[48px]"
                    style={{ border: '1px solid var(--vharanani-charcoal-20)', background: 'white', fontSize: 16 }}
                  />
                </div>
                <div>
                  <label className="typo-meta tracking-[0.12em] uppercase font-inter mb-2 block" style={{ color: 'var(--vharanani-charcoal-60)' }}>Phone</label>
                  <input
                    type="tel"
                    inputMode="tel"
                    placeholder="+27..."
                    autoComplete="tel"
                    className="w-full px-4 py-3 font-inter typo-copy-small text-base outline-none transition-colors duration-200 focus:border-[var(--dmf-primary)] min-h-[48px]"
                    style={{ border: '1px solid var(--vharanani-charcoal-20)', background: 'white', fontSize: 16 }}
                  />
                </div>
              </div>
              <div>
                <label className="typo-meta tracking-[0.12em] uppercase font-inter mb-2 block" style={{ color: 'var(--vharanani-charcoal-60)' }}>Inquiry Type</label>
                <select
                  className="w-full px-4 py-3 font-inter typo-copy-small outline-none focus:outline-none transition-colors duration-200 focus:border-[var(--dmf-primary)]"
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
                  required
                  className="w-full px-4 py-3 font-inter typo-copy-small outline-none resize-none transition-colors duration-200 focus:border-[var(--dmf-primary)]"
                  style={{ border: '1px solid var(--vharanani-charcoal-20)', background: 'white', fontSize: 16 }}
                />
              </div>
              <button
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 transition-all duration-300 hover:gap-3"
                style={{ background: 'var(--dmf-primary)' }}
              >
                <span className="font-bebas-neue typo-headline-small tracking-wider uppercase text-white">Send Message</span>
                <ArrowRight size={14} className="text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Footer bar */}
        <div className="px-6 md:px-12 lg:px-20 py-5 flex flex-col sm:flex-row items-center justify-between gap-3" style={{ background: 'var(--dmf-primary)', borderTop: '3px solid rgba(255,255,255,0.3)' }}>
          <div className="flex items-center gap-4">
            <img src="https://ik.imagekit.io/qcvroy8xpd/Frame%201.png" alt="The David Mabilu Foundation" className="h-6 w-auto object-contain brightness-0 invert" />
            <div className="w-[1px] h-4" style={{ background: 'rgba(255,255,255,0.15)' }} />
            <div className="flex items-center gap-1.5">
              <Layers size={12} style={{ color: 'var(--dmf-primary)' }} />
              <span className="typo-meta tracking-wider uppercase font-inter" style={{ color: 'rgba(255,255,255,0.6)' }}>Vharanani Group</span>
            </div>
          </div>
          <p className="typo-meta font-inter" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Building opportunity. Empowering communities.
          </p>
        </div>
      </div>
    </div>
  );
}
