import { useState, type ReactNode } from 'react';
import { motion } from 'motion/react';
import { Linkedin, Twitter, Facebook, MapPin, Phone, Mail } from 'lucide-react';
import { ImageWithFallback } from '../../ui/ImageWithFallback';
import { SectionWrapper } from '../shared';

const IMAGES = {
  news: 'https://ik.imagekit.io/qcvroy8xpd/Vharnani%20final/40_aerial_view_new_road_intersection_asphalt_laying.jpg?updatedAt=1774955145799',
};

export function GroupWireframe_NewsContact(): ReactNode {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const newsItems = [
    { date: 'MAR 2026', title: 'Vharanani Group Expands Infrastructure Portfolio', description: 'New multi-billion rand highway project awarded in Limpopo province.' },
    { date: 'FEB 2026', title: 'Foundation Awards 100 New Bursaries', description: 'The David Mabilu Foundation continues its commitment to education.' },
    { date: 'JAN 2026', title: 'DMFT Launches New Estate Development', description: 'A premium residential estate breaking ground in Gauteng.' },
  ];

  const socialLinks = [
    { icon: <Linkedin size={16} />, label: 'LinkedIn' },
    { icon: <Twitter size={16} />, label: 'Twitter' },
    { icon: <Facebook size={16} />, label: 'Facebook' },
  ];

  return (
    <SectionWrapper>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-[2px]" style={{ background: 'var(--vharanani-burgundy)' }} />
          <span className="typo-caption tracking-[0.28em] uppercase font-inter" style={{ color: 'var(--vharanani-burgundy)' }}>
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
                <motion.a
                  key={link.label}
                  href="#"
                  aria-label={link.label}
                  className="min-w-[44px] min-h-[44px] w-10 h-10 flex items-center justify-center cursor-pointer"
                  style={{ border: '1px solid var(--vharanani-charcoal-20)', color: 'var(--vharanani-charcoal-60)' }}
                  whileHover={{ borderColor: 'var(--vharanani-burgundy)', color: 'var(--vharanani-burgundy)' }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
