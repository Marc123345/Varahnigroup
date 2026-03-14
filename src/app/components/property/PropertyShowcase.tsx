import * as React from 'react';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import { ExpandableCard } from './ExpandableCard';
import { MobileMenu } from './MobileMenu';
import { ResponsiveGuide } from './ResponsiveGuide';
import { useResponsive } from '../../hooks/useResponsive';
import { safeVibrate } from '../../utils/vibration';

interface Property {
  id: string;
  title: string;
  description: string;
  image: string;
  details?: {
    location?: string;
    units?: string;
    size?: string;
    features?: string[];
  };
}

const propertyGroups: Property[] = [
  {
    id: 'residential',
    title: 'Residential Portfolio',
    description: 'Vharanani Properties offers premium residential developments that combine sophisticated design with modern living. Our residential portfolio includes luxury apartments, townhouses, and estate homes located in prime neighborhoods. Each development is carefully crafted to provide residents with exceptional amenities, secure environments, and a superior quality of life. From contemporary urban living spaces to serene suburban retreats, our properties cater to diverse lifestyle needs while maintaining our commitment to excellence in design and construction.',
    image: 'https://images.unsplash.com/photo-1767105168808-b52b6d9d6007?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNpZGVudGlhbCUyMGJ1aWxkaW5nJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzcxOTk3NjE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    details: {
      location: 'Multiple Prime Locations',
      units: '500+ Residential Units',
      size: 'Various Configurations',
      features: [
        '24/7 Security',
        'Modern Amenities',
        'Prime Locations',
        'Quality Finishes'
      ]
    }
  },
  {
    id: 'commercial',
    title: 'Commercial Properties',
    description: 'Our commercial property division specializes in developing and managing high-quality office spaces, retail centers, and business parks. These properties are strategically positioned in key business districts and commercial hubs, offering businesses the perfect platform for growth and success. With state-of-the-art facilities, flexible floor plans, and premium locations, our commercial spaces are designed to meet the evolving needs of modern businesses. We understand the importance of creating environments that foster productivity, collaboration, and innovation while providing excellent accessibility and visibility.',
    image: 'https://images.unsplash.com/photo-1763046472163-32c74523903e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb21tZXJjaWFsJTIwb2ZmaWNlJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzcyMDMxMzgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    details: {
      location: 'Central Business Districts',
      units: '250,000+ sq ft',
      size: 'Grade A Office Spaces',
      features: [
        'Strategic Locations',
        'Modern Infrastructure',
        'Flexible Layouts',
        'Premium Facilities'
      ]
    }
  },
  {
    id: 'mixed-use',
    title: 'Mixed-Use Developments',
    description: 'Vharanani Properties is at the forefront of creating integrated mixed-use developments that seamlessly blend residential, commercial, and retail spaces into vibrant communities. These developments are designed to create self-sustaining ecosystems where people can live, work, and play within the same precinct. By combining various property types, we create dynamic environments that enhance property values and quality of life. Our mixed-use projects feature thoughtful urban planning, sustainable design principles, and a focus on creating walkable, connected communities that serve as landmarks in their respective locations.',
    image: 'https://images.unsplash.com/photo-1758750394367-a5f2ff9ba44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaXhlZCUyMHVzZSUyMGRldmVsb3BtZW50JTIwdXJiYW58ZW58MXx8fHwxNzcxOTk5ODY4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    details: {
      location: 'Urban Centers',
      units: 'Integrated Communities',
      size: 'Multi-Phase Developments',
      features: [
        'Mixed-Use Integration',
        'Sustainable Design',
        'Community Focus',
        'Smart Planning'
      ]
    }
  }
];

export const PropertyShowcase: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isMobile, isTablet, isDesktop } = useResponsive();

  const handleMenuToggle = () => {
    safeVibrate(20);
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white relative">
      {/* Header Navigation */}
      <header className="sticky top-0 z-30 bg-white border-b-4 border-[var(--vharanani-burgundy)] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div>
              <h1 className="text-[var(--typo-subline-size)] sm:text-[var(--typo-headline-big-size)] leading-[var(--typo-subline-line-height)] sm:leading-[var(--typo-headline-big-line-height)] font-bebas-neue font-bold text-[var(--vharanani-burgundy)] uppercase tracking-wide">
                Vharanani
              </h1>
            </div>

            {/* Desktop Navigation */}
            {isDesktop && (
              <nav className="hidden lg:flex items-center gap-8">
                {['Portfolio', 'About', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-[var(--typo-headline-small-size)] leading-[var(--typo-headline-small-line-height)] font-bebas-neue text-[var(--vharanani-charcoal)] hover:text-[var(--vharanani-burgundy)] uppercase tracking-wide transition-colors"
                  >
                    {item}
                  </a>
                ))}
                <button className="bg-[var(--vharanani-burgundy)] hover:bg-[var(--vharanani-burgundy-80)] text-white px-6 py-3 text-[var(--typo-headline-small-size)] leading-[var(--typo-headline-small-line-height)] font-bebas-neue uppercase tracking-wide transition-colors duration-300">
                  Inquire
                </button>
              </nav>
            )}

            {/* Mobile Menu Button */}
            {(isMobile || isTablet) && (
              <button
                onClick={handleMenuToggle}
                className="lg:hidden p-2 hover:bg-[var(--vharanani-burgundy-20)] transition-colors"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6 text-[var(--vharanani-charcoal)]" />
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--vharanani-burgundy)] to-[var(--vharanani-charcoal)] text-white py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-[var(--typo-headline-big-size)] sm:text-[var(--typo-header-size)] leading-[var(--typo-headline-big-line-height)] sm:leading-[var(--typo-header-line-height)] font-bebas-neue font-bold mb-4 sm:mb-6 uppercase tracking-wide">
              Property Portfolio
            </h2>
            <p className="text-[var(--typo-subline-size)] leading-[var(--typo-subline-line-height)] font-bebas-neue max-w-3xl mx-auto px-4">
              Discover our comprehensive range of premium properties across residential, commercial, and mixed-use developments
            </p>
          </div>
        </div>
      </section>

      {/* Property Cards Grid */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {propertyGroups.map((property) => (
              <ExpandableCard
                key={property.id}
                title={property.title}
                description={property.description}
                image={property.image}
                maxLines={4}
              >
                {property.details && (
                  <div className="mt-6 pt-6 border-t-2 border-[var(--vharanani-charcoal-20)]">
                    <div className="space-y-3">
                      {property.details.location && (
                        <div>
                          <span className="text-[var(--typo-headline-small-size)] leading-[var(--typo-headline-small-line-height)] font-bebas-neue text-[var(--vharanani-burgundy)] uppercase tracking-wide block mb-1">
                            Location
                          </span>
                          <span className="text-[var(--typo-copy-size)] leading-[var(--typo-copy-line-height)] font-inter text-[var(--vharanani-text)]">
                            {property.details.location}
                          </span>
                        </div>
                      )}
                      {property.details.units && (
                        <div>
                          <span className="text-[var(--typo-headline-small-size)] leading-[var(--typo-headline-small-line-height)] font-bebas-neue text-[var(--vharanani-burgundy)] uppercase tracking-wide block mb-1">
                            Scale
                          </span>
                          <span className="text-[var(--typo-copy-size)] leading-[var(--typo-copy-line-height)] font-inter text-[var(--vharanani-text)]">
                            {property.details.units}
                          </span>
                        </div>
                      )}
                      {property.details.features && (
                        <div>
                          <span className="text-[var(--typo-headline-small-size)] leading-[var(--typo-headline-small-line-height)] font-bebas-neue text-[var(--vharanani-burgundy)] uppercase tracking-wide block mb-2">
                            Key Features
                          </span>
                          <ul className="grid grid-cols-2 gap-2">
                            {property.details.features.map((feature, index) => (
                              <li 
                                key={index}
                                className="text-[var(--typo-copy-size)] leading-[var(--typo-copy-line-height)] font-inter text-[var(--vharanani-text)] flex items-center gap-2"
                              >
                                <span className="w-1.5 h-1.5 bg-[var(--vharanani-burgundy)] block flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </ExpandableCard>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[var(--vharanani-charcoal-20)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t-4 border-[var(--vharanani-burgundy)] pt-12 text-center">
            <h3 className="text-[var(--typo-headline-big-size)] leading-[var(--typo-headline-big-line-height)] font-bebas-neue font-bold text-[var(--vharanani-charcoal)] mb-4 uppercase tracking-wide">
              Ready to Invest?
            </h3>
            <p className="text-[var(--typo-subline-size)] leading-[var(--typo-subline-line-height)] font-bebas-neue text-[var(--vharanani-text)] mb-8">
              Contact us to explore our premium property portfolio
            </p>
            <button className="bg-[var(--vharanani-burgundy)] hover:bg-[var(--vharanani-burgundy-80)] text-white px-8 sm:px-12 py-4 text-[var(--typo-subline-size)] leading-[var(--typo-subline-line-height)] font-bebas-neue uppercase tracking-wide transition-colors duration-300">
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      {/* Responsive Guide */}
      <ResponsiveGuide />
    </div>
  );
};
