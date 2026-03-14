import { useState, useEffect, useRef, Suspense } from 'react';
import { CSS3DCube } from './CSS3DCube';
import { motion, useScroll, useTransform } from 'motion/react';
import gsap from 'gsap';

const properties = [
  {
    id: '01',
    title: 'The Diamond Residences',
    category: 'RESIDENTIAL',
    type: 'R&D',
    location: 'Sandton, ZA',
    description: 'Ultra-luxury penthouses redefining urban living',
    image: 'https://images.unsplash.com/photo-1758448756880-01dbaf85597d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNpZGVudGlhbCUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzI0MTQxNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: '02',
    title: 'Corporate Towers',
    category: 'COMMERCIAL',
    type: 'COMMISSION',
    location: 'Johannesburg, ZA',
    description: 'Grade-A office spaces with smart building technology',
    image: 'https://images.unsplash.com/photo-1714601344981-75e003bc5d18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb21tZXJjaWFsJTIwYnVpbGRpbmclMjBnbGFzc3xlbnwxfHx8fDE3NzI0MTQ0Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: '03',
    title: 'Urban Quarter',
    category: 'MIXED-USE',
    type: 'PROTOTYPE',
    location: 'Pretoria, ZA',
    description: 'Integrated live-work-play urban development',
    image: 'https://images.unsplash.com/photo-1758750394367-a5f2ff9ba44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaXhlZCUyMHVzZSUyMGRldmVsb3BtZW50JTIwdXJiYW58ZW58MXx8fHwxNzcyNDk2MTcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: '04',
    title: 'Skyline Penthouses',
    category: 'RESIDENTIAL',
    type: 'LUXURY',
    location: 'Cape Town, ZA',
    description: 'Panoramic views with world-class amenities',
    image: 'https://images.unsplash.com/photo-1677553512940-f79af72efd1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZW50aG91c2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzI0MTI4MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: '05',
    title: 'Executive Suites',
    category: 'COMMERCIAL',
    type: 'PREMIUM',
    location: 'Sandton, ZA',
    description: 'State-of-the-art workspace solutions',
    image: 'https://images.unsplash.com/photo-1641998148499-cb6b55a3c0d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBzcGFjZSUyMGludGVyaW9yfGVufDF8fHx8MTc3MjM5NTQ1MHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: '06',
    title: 'Metro District',
    category: 'MIXED-USE',
    type: 'DEVELOPMENT',
    location: 'Durban, ZA',
    description: 'Vibrant metropolitan living and commerce',
    image: 'https://images.unsplash.com/photo-1766214272421-ca9354ba2cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGRldmVsb3BtZW50JTIwc2t5bGluZXxlbnwxfHx8fDE3NzI0OTYxNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function VharananiPortfolioHero() {
  const [activeProperty, setActiveProperty] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const cubeImages = properties.map(p => p.image);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Auto-rotate through properties
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProperty((prev) => (prev + 1) % properties.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePropertyHover = (index: number) => {
    setActiveProperty(index);
  };

  return (
    <div 
      ref={heroRef}
      className="relative w-full h-screen overflow-hidden"
      style={{ 
        backgroundColor: 'var(--vharanani-neutral-black)',
        fontFamily: 'var(--font-inter)'
      }}
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(var(--vharanani-charcoal-40) 1px, transparent 1px),
              linear-gradient(90deg, var(--vharanani-charcoal-40) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Parallax Elements */}
      <motion.div
        className="absolute top-0 right-0 w-64 h-64 opacity-5"
        style={{
          x: mousePosition.x * 30,
          y: mousePosition.y * 30,
        }}
      >
        <div 
          className="w-full h-full rotate-45"
          style={{ 
            border: '2px solid var(--vharanani-burgundy)',
          }}
        />
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-10 w-40 h-40 opacity-5"
        style={{
          x: mousePosition.x * -20,
          y: mousePosition.y * -20,
        }}
      >
        <div 
          className="w-full h-full rotate-12"
          style={{ 
            border: '1px solid var(--vharanani-burgundy)',
          }}
        />
      </motion.div>

      {/* Main Content Grid */}
      <div className="relative h-full grid grid-cols-12 gap-8 px-8 py-12 lg:px-16 lg:py-16">
        
        {/* Left Column - Meta Information */}
        <div className="col-span-12 lg:col-span-3 flex flex-col justify-between z-10">
          
          {/* Top Meta */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div 
                className="typo-caption tracking-[0.2em] mb-2 uppercase"
                style={{ 
                  color: 'var(--vharanani-charcoal-40)',
                  fontFamily: 'var(--font-inter)',
                }}
              >
                PORTFOLIO
              </div>
              <h1 
                className="font-bebas-neue typo-headline-big tracking-tight"
                style={{ 
                  color: 'var(--vharanani-white)',
                }}
              >
                VHARANANI<br />PROPERTIES
              </h1>
              <div 
                className="font-inter typo-copy mt-3"
                style={{ 
                  lineHeight: '1.7',
                  color: 'var(--vharanani-charcoal)',
                }}
              >
                Real Estate Development Group
              </div>
            </motion.div>

            {/* Edition Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-2 pb-6"
              style={{ borderBottom: `1px solid var(--vharanani-charcoal-60)` }}
            >
              <div className="flex items-center gap-3">
                <div 
                  className="typo-label tracking-[0.15em] uppercase"
                  style={{ color: 'var(--vharanani-charcoal)' }}
                >
                  Est. 2008
                </div>
                <div 
                  className="w-1 h-1 rounded-full"
                  style={{ backgroundColor: 'var(--vharanani-burgundy)' }}
                />
                <div 
                  className="typo-label tracking-[0.15em] uppercase"
                  style={{ color: 'var(--vharanani-charcoal)' }}
                >
                  South Africa
                </div>
              </div>
              <div 
                className="typo-label tracking-[0.1em] uppercase"
                style={{ color: 'var(--vharanani-charcoal)' }}
              >
                Vision. Structure. Impact.
              </div>
              <div 
                className="typo-label tracking-[0.1em] uppercase"
                style={{ color: 'var(--vharanani-charcoal)' }}
              >
                Johannesburg, Gauteng
              </div>
            </motion.div>

            {/* Mission Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div 
                className="font-inter typo-headline-small"
                style={{ 
                  lineHeight: '1.6',
                  color: 'var(--vharanani-charcoal)',
                }}
              >
                "Building spaces with<br />
                <span style={{ color: 'var(--vharanani-burgundy)' }}>architectural intent</span>"
              </div>
            </motion.div>
          </div>

          {/* Bottom Meta - Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="hidden lg:flex items-center gap-3"
          >
            <div 
              className="w-px h-12"
              style={{ backgroundColor: 'var(--vharanani-burgundy)' }}
            />
            <div 
              className="typo-meta tracking-[0.2em] uppercase rotate-90 origin-left"
              style={{ color: 'var(--vharanani-charcoal-40)' }}
            >
              SCROLL TO EXPLORE
            </div>
          </motion.div>
        </div>

        {/* Center Column - 3D Cube */}
        <div className="col-span-12 lg:col-span-6 flex items-center justify-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative w-full h-full max-w-2xl"
          >
            {/* Technical Frame */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{ 
                border: `1px solid var(--vharanani-charcoal-60)`,
              }}
            >
              {/* Corner Brackets */}
              <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2" style={{ borderColor: 'var(--vharanani-burgundy)' }} />
              <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2" style={{ borderColor: 'var(--vharanani-burgundy)' }} />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2" style={{ borderColor: 'var(--vharanani-burgundy)' }} />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2" style={{ borderColor: 'var(--vharanani-burgundy)' }} />

              {/* Top Label */}
              <div className="absolute -top-6 left-0 flex items-center gap-2">
                <div 
                  className="typo-meta tracking-[0.2em] uppercase"
                  style={{ color: 'var(--vharanani-burgundy)' }}
                >
                  INTERACTIVE SHOWCASE
                </div>
              </div>

              {/* Bottom Caption */}
              <div className="absolute -bottom-6 right-0 typo-meta tracking-[0.15em] uppercase" style={{ color: 'var(--vharanani-charcoal-40)' }}>
                DRAG TO ROTATE / HOVER TO INTERACT
              </div>
            </div>

            {/* 3D Cube Container */}
            <CSS3DCube 
              images={cubeImages}
              activeIndex={activeProperty}
            />
          </motion.div>
        </div>

        {/* Right Column - Property Index */}
        <div className="col-span-12 lg:col-span-3 flex flex-col justify-center z-10">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-1"
          >
            <div 
              className="typo-caption tracking-[0.2em] mb-6 uppercase pb-3"
              style={{ 
                color: 'var(--vharanani-burgundy)',
                borderBottom: `1px solid var(--vharanani-charcoal-60)`,
              }}
            >
              STUDIES IN ARCHITECTURE
            </div>

            {/* Property List */}
            <div className="space-y-0">
              {properties.map((property, index) => (
                <motion.div
                  key={property.id}
                  onHoverStart={() => handlePropertyHover(index)}
                  className="group cursor-pointer py-4 border-b transition-all duration-300"
                  style={{
                    borderColor: activeProperty === index 
                      ? 'var(--vharanani-burgundy)' 
                      : 'var(--vharanani-charcoal-60)',
                  }}
                  whileHover={{ x: 8 }}
                >
                  {/* Property Number & Category */}
                  <div className="flex items-center gap-3 mb-2">
                    <div 
                      className="font-bebas-neue text-lg transition-colors"
                      style={{ 
                        color: activeProperty === index 
                          ? 'var(--vharanani-burgundy)' 
                          : 'var(--vharanani-charcoal-40)',
                      }}
                    >
                      {property.id}
                    </div>
                    <div 
                      className="w-px h-3"
                      style={{ 
                        backgroundColor: activeProperty === index 
                          ? 'var(--vharanani-burgundy)' 
                          : 'var(--vharanani-charcoal-60)',
                      }}
                    />
                    <div 
                      className="typo-meta tracking-[0.2em] uppercase transition-colors"
                      style={{ 
                        color: activeProperty === index 
                          ? 'var(--vharanani-burgundy)' 
                          : 'var(--vharanani-charcoal-60)',
                      }}
                    >
                      {property.type}
                    </div>
                  </div>

                  {/* Property Title */}
                  <h4 
                    className="font-bebas-neue typo-headline-small mb-1 transition-colors"
                    style={{ 
                      color: activeProperty === index 
                        ? 'var(--vharanani-white)' 
                        : 'var(--vharanani-charcoal-40)',
                    }}
                  >
                    {property.title}
                  </h4>

                  {/* Property Category */}
                  <div 
                    className="typo-meta tracking-[0.15em] uppercase transition-colors"
                    style={{ 
                      color: activeProperty === index 
                        ? 'var(--vharanani-burgundy)' 
                        : 'var(--vharanani-charcoal-60)',
                    }}
                  >
                    {property.category}
                  </div>

                  {/* Property Description - Only show on active */}
                  {activeProperty === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-2 font-inter typo-meta leading-relaxed"
                      style={{ color: 'var(--vharanani-charcoal-40)' }}
                    >
                      {property.description}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* View All Link */}
            <motion.div
              className="pt-6 flex items-center gap-2 group cursor-pointer"
              whileHover={{ x: 4 }}
            >
              <div 
                className="typo-meta tracking-[0.2em] uppercase transition-colors"
                style={{ color: 'var(--vharanani-burgundy)' }}
              >
                VIEW ALL PROJECTS
              </div>
              <div 
                className="w-8 h-px transition-all group-hover:w-12"
                style={{ backgroundColor: 'var(--vharanani-burgundy)' }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Accent Line - Bottom */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ backgroundColor: 'var(--vharanani-burgundy)' }}
      />
    </div>
  );
}