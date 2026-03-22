import { useState, type ReactNode } from 'react';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../../ui/ImageWithFallback';
import { SectionWrapper } from '../shared';

const IMAGES = {
  map: 'https://images.unsplash.com/photo-1524813686514-a57563d77965?w=1400&q=85&fit=crop',
};

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
            CONNECT
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
                  <div className="absolute top-5 left-5 whitespace-nowrap px-2 py-1" style={{ background: 'rgba(0,0,0,0.9)', border: '1px solid rgba(255,255,255,0.2)' }}>
                    <span className="font-inter typo-meta text-white tracking-wider uppercase">Johannesburg (HQ)</span>
                  </div>
                </div>
              </div>
              {/* Polokwane pin */}
              <div className="absolute" style={{ top: '38%', left: '56%' }}>
                <div className="relative">
                  <div className="w-3 h-3 animate-ping absolute" style={{ background: 'rgba(255,255,255,0.8)', opacity: 0.5 }} />
                  <div className="w-3 h-3 relative z-10" style={{ background: 'rgba(255,255,255,0.85)' }} />
                  <div className="absolute top-4 left-4 whitespace-nowrap px-2 py-1" style={{ background: 'rgba(0,0,0,0.9)', border: '1px solid rgba(255,255,255,0.2)' }}>
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
                    background: activeTab === tab ? 'rgba(0,0,0,0.04)' : 'transparent',
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
