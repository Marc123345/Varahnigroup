import * as React from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { 
  CaptionText, 
  CopyText, 
  HeadlineSmall, 
  Subline 
} from './Typography';
import { Badge } from '../ui/badge';

interface PropertyCard {
  id: string;
  label: string;
  description: string;
  image: string;
  exclusive?: boolean;
  highlighted?: boolean;
}

const propertyCards: PropertyCard[] = [
  {
    id: 'residential',
    label: 'Residential Properties',
    description: 'Luxury apartments and family homes in prime locations',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
    exclusive: true
  },
  {
    id: 'commercial',
    label: 'Commercial Spaces',
    description: 'Modern office buildings and retail spaces for your business',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
    highlighted: true
  },
  {
    id: 'mixed-use',
    label: 'Mixed-Use Developments',
    description: 'Integrated living and working spaces in urban centers',
    image: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?w=800&h=600&fit=crop'
  },
  {
    id: 'industrial',
    label: 'Industrial Properties',
    description: 'Warehouses and manufacturing facilities with modern amenities',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop'
  },
  {
    id: 'development',
    label: 'New Developments',
    description: 'Upcoming projects and investment opportunities',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop'
  },
  {
    id: 'portfolio',
    label: 'Portfolio Overview',
    description: 'Explore our complete range of property offerings',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop'
  },
  {
    id: 'contact',
    label: 'Get in Touch',
    description: 'Connect with our property specialists today',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop'
  }
];

export function HomePageCards() {
  const [activeCard, setActiveCard] = React.useState<string | null>(null);

  const handleCardClick = (cardId: string) => {
    setActiveCard(cardId === activeCard ? null : cardId);
  };

  return (
    <div className="space-y-12">
      <div>
        <Subline className="mb-4">Home Page Property Cards</Subline>
        <CopyText className="text-[var(--vharanani-text-muted)]">
          Interactive property cards for the home page hero section. Features hover states, badges, and responsive grid layout.
        </CopyText>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {propertyCards.map((item) => (
          <button
            key={item.id}
            onClick={() => handleCardClick(item.id)}
            className={`
              group relative aspect-[4/3] overflow-hidden 
              bg-white border-2 transition-all duration-500
              ${activeCard === item.id 
                ? 'border-[var(--vharanani-burgundy)] shadow-2xl scale-[1.02]' 
                : 'border-[var(--vharanani-charcoal-20)] hover:border-[var(--vharanani-burgundy-40)]'
              }
            `}
          >
            <div className="absolute inset-0">
              <ImageWithFallback
                src={item.image}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--vharanani-charcoal)] via-[var(--vharanani-charcoal-60)] to-transparent" />
            </div>

            <div className="absolute inset-0 p-6 flex flex-col justify-end text-left">
              {/* Badges */}
              {item.exclusive && (
                <div className="mb-3">
                  <Badge className="bg-[var(--vharanani-burgundy)] text-white border-0 uppercase">
                    <CaptionText className="text-white">Exclusive</CaptionText>
                  </Badge>
                </div>
              )}
              {item.highlighted && (
                <div className="mb-3">
                  <Badge className="bg-gradient-to-r from-[#D4AF37] to-[#F4E3B5] text-[var(--vharanani-charcoal)] border-0 uppercase">
                    <CaptionText className="text-[var(--vharanani-charcoal)]">⭐ Featured</CaptionText>
                  </Badge>
                </div>
              )}

              {/* Title */}
              <HeadlineSmall 
                className={`
                  mb-2 text-white transform transition-all duration-500
                  ${activeCard === item.id ? 'text-[#D4AF37]' : 'group-hover:text-[var(--vharanani-burgundy-40)]'}
                `}
              >
                {item.label}
              </HeadlineSmall>

              {/* Description */}
              <CopyText className="text-white/90 transition-all duration-500 group-hover:text-white">
                {item.description}
              </CopyText>

              {/* Active indicator */}
              {activeCard === item.id && (
                <div className="mt-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#D4AF37] animate-pulse" />
                  <CaptionText className="text-[#D4AF37] uppercase">Selected</CaptionText>
                </div>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Design Notes */}
      <div className="mt-12 p-6 bg-[var(--vharanani-charcoal-20)] border-l-4 border-[var(--vharanani-burgundy)]">
        <HeadlineSmall className="mb-4 text-[var(--vharanani-burgundy)]">
          Design Implementation Notes
        </HeadlineSmall>
        <div className="space-y-3">
          <div className="flex gap-3">
            <div className="w-1 bg-[var(--vharanani-burgundy)] flex-shrink-0 mt-1" />
            <div>
              <CopyText className="mb-1">
                <span className="font-bold">Square Corners:</span> No border-radius to maintain sharp, professional edges throughout
              </CopyText>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-1 bg-[var(--vharanani-burgundy)] flex-shrink-0 mt-1" />
            <div>
              <CopyText className="mb-1">
                <span className="font-bold">Hover States:</span> Image scales to 110% with burgundy border accent
              </CopyText>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-1 bg-[var(--vharanani-burgundy)] flex-shrink-0 mt-1" />
            <div>
              <CopyText className="mb-1">
                <span className="font-bold">Typography:</span> HeadlineSmall for titles, CopyText for descriptions, CaptionText for badges
              </CopyText>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-1 bg-[var(--vharanani-burgundy)] flex-shrink-0 mt-1" />
            <div>
              <CopyText className="mb-1">
                <span className="font-bold">Color Overlay:</span> Gradient from charcoal to transparent for text legibility
              </CopyText>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-1 bg-[var(--vharanani-burgundy)] flex-shrink-0 mt-1" />
            <div>
              <CopyText className="mb-1">
                <span className="font-bold">Badge System:</span> Burgundy for "Exclusive", Gold gradient for "Featured"
              </CopyText>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-1 bg-[var(--vharanani-burgundy)] flex-shrink-0 mt-1" />
            <div>
              <CopyText className="mb-1">
                <span className="font-bold">Responsive Grid:</span> 1 column mobile, 2 columns tablet, 3 columns desktop
              </CopyText>
            </div>
          </div>
        </div>
      </div>

      {/* Code Example */}
      <div className="mt-8 p-6 bg-white border-2 border-[var(--vharanani-charcoal-20)]">
        <HeadlineSmall className="mb-4">Usage Example</HeadlineSmall>
        <div className="bg-[var(--vharanani-charcoal)] p-4 overflow-x-auto">
          <pre className="text-white text-xs">
            <code>{`import { HomePageCards } from './components/design-system/HomePageCards';

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-8">
        <Header className="mb-4">Vharanani Properties</Header>
        <Subline className="text-[var(--vharanani-burgundy)]">
          Premier Real Estate Development
        </Subline>
      </section>

      {/* Property Cards Grid */}
      <section className="py-16 px-8">
        <HomePageCards />
      </section>
    </div>
  );
}`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
