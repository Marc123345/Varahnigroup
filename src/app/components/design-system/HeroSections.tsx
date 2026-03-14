import * as React from 'react';
import { cn } from '../ui/utils';
import { Header, HeadlineBig, HeadlineSmall, Subline, CopyText, CaptionText } from './Typography';
import { DiamondShape } from './DiamondShape';

interface DiamondImageMaskProps {
  src: string;
  alt: string;
  variant?: 'default' | 'tall' | 'wide';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  className?: string;
}

/**
 * Enhanced Diamond-shaped image mask component with advanced effects
 */
export function DiamondImageMask({ 
  src, 
  alt, 
  variant = 'default', 
  size = 'md',
  className 
}: DiamondImageMaskProps) {
  const [clipId] = React.useState(`diamond-clip-${variant}-${Math.random().toString(36).substr(2, 9)}`);
  
  const sizeMap = {
    sm: 'w-40 h-40',
    md: 'w-72 h-72',
    lg: 'w-[400px] h-[400px]',
    xl: 'w-[550px] h-[550px]',
    '2xl': 'w-[700px] h-[700px]',
    '3xl': 'w-[850px] h-[850px]',
  };

  const pathMap = {
    default: "M-124.993 34.049L216.444 -307.388C240.398 -331.342 279.594 -331.342 303.548 -307.388L644.985 34.049C668.938 58.002 668.938 97.199 644.985 121.152L303.548 462.59C279.594 486.543 240.398 486.543 216.444 462.59L-124.993 121.152C-148.947 97.199 -148.947 58.002 -124.993 34.049Z",
    tall: "M-306.728 421.008L93.236 21.0443C121.296 -7.01476 167.21 -7.01476 195.27 21.0443L595.235 421.008C623.293 449.068 623.293 494.982 595.234 523.041L195.27 923.006C167.21 951.066 121.296 951.066 93.236 923.006L-306.728 523.041C-334.787 494.983 -334.787 449.068 -306.728 421.008Z",
    wide: "M-184.243 442.134L235.791 22.1002C265.258 -7.36674 313.477 -7.36674 342.944 22.1002L762.978 442.134C792.444 471.601 792.444 519.82 762.978 549.287L342.944 969.321C313.477 998.788 265.258 998.788 235.791 969.321L-184.243 549.286C-213.71 519.82 -213.71 471.602 -184.243 442.134Z",
  };

  const viewBoxMap = {
    default: "0 0 596 481",
    tall: "0 0 596 574",
    wide: "0 0 596 407",
  };

  return (
    <div className={cn('relative overflow-hidden pointer-events-none', sizeMap[size], className)}>
      <svg 
        width="100%" 
        height="100%" 
        viewBox={viewBoxMap[variant]}
        className="absolute inset-0"
      >
        <defs>
          <clipPath id={clipId}>
            <path d={pathMap[variant]} />
          </clipPath>
          <filter id={`shadow-${clipId}`}>
            <feGaussianBlur in="SourceAlpha" stdDeviation="12" />
            <feOffset dx="0" dy="10" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.3" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <image
          href={src}
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
          clipPath={`url(#${clipId})`}
          filter={`url(#shadow-${clipId})`}
        />
      </svg>
    </div>
  );
}

/**
 * Animated particles background component
 */
function AnimatedParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-[var(--vharanani-primary)] opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
          }}
        />
      ))}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
          10% { opacity: 0.2; }
          90% { opacity: 0.2; }
          50% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(180deg); }
        }
      `}</style>
    </div>
  );
}

/**
 * Hero Section 1: Ultra-Modern Split with Layered Diamonds
 */
export function HeroSplit() {
  return (
    <section className="relative min-h-[900px] bg-white overflow-hidden">
      {/* Sophisticated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 z-0" />
      
      {/* Animated particles */}
      <AnimatedParticles />

      {/* Large decorative diamonds in background */}
      <div className="absolute -top-40 -right-60 opacity-[0.03] pointer-events-none rotate-12 z-0">
        <DiamondShape size="3xl" color="#892B1C" variant="wide" />
      </div>
      <div className="absolute -bottom-40 -left-60 opacity-[0.03] pointer-events-none -rotate-12 z-0">
        <DiamondShape size="3xl" color="#2C2D2D" variant="tall" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.015] z-0" style={{ 
        backgroundImage: 'linear-gradient(var(--vharanani-charcoal) 1px, transparent 1px), linear-gradient(90deg, var(--vharanani-charcoal) 1px, transparent 1px)', 
        backgroundSize: '60px 60px' 
      }} />

      <div className="relative mx-auto max-w-[1400px] px-8 lg:px-12 py-28 lg:py-36 z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Content Side */}
          <div className="relative z-50 space-y-10 lg:pr-12">
            {/* Animated badge */}
            <div className="inline-flex items-center gap-4 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[var(--vharanani-primary)] to-[var(--vharanani-charcoal)] opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-500" />
              <div className="relative flex items-center gap-4 px-6 py-3.5 bg-[var(--vharanani-charcoal)] overflow-hidden">
                <div className="absolute inset-0 bg-[var(--vharanani-primary)] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out" />
                <div className="flex gap-1.5 relative z-10">
                  {[0, 1, 2].map((i) => (
                    <div 
                      key={i}
                      className="w-1.5 h-1.5 bg-[var(--vharanani-primary)] group-hover:bg-white transition-colors duration-500" 
                      style={{ 
                        clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                        animation: 'pulse 2s ease-in-out infinite',
                        animationDelay: `${i * 0.2}s`
                      }} 
                    />
                  ))}
                </div>
                <CaptionText className="text-white uppercase tracking-[0.25em] relative z-10 font-medium">
                  2024 Featured Collection
                </CaptionText>
              </div>
            </div>

            {/* Main Headline with decorative elements */}
            <div className="space-y-6">
              <div className="relative">
                {/* Decorative bracket */}
                <div className="absolute -left-8 top-0 w-20 h-20 border-l-[3px] border-t-[3px] border-[var(--vharanani-primary)] opacity-40" />
                
                <Header className="leading-[0.85] relative">
                  <span className="block">REDEFINING</span>
                  <span className="block text-[var(--vharanani-primary)]">LUXURY</span>
                  <span className="block">LIVING</span>
                </Header>
                
                {/* Accent line with animation */}
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-[3px] w-24 bg-[var(--vharanani-primary)]" />
                  <div className="h-[3px] w-12 bg-[var(--vharanani-primary)] opacity-60" />
                  <div className="h-[3px] w-6 bg-[var(--vharanani-primary)] opacity-30" />
                </div>
              </div>
              
              <Subline className="text-[var(--vharanani-charcoal)] tracking-[0.15em] opacity-80">
                Premium Residential &amp; Commercial Spaces
              </Subline>
            </div>

            {/* Enhanced description */}
            <div className="relative pl-6 border-l-2 border-[var(--vharanani-primary)]">
              <CopyText className="text-[var(--vharanani-text-muted)] leading-[1.8] text-[17px]">
                Experience architectural excellence with our curated selection of 
                properties that combine modern design, prime locations, and 
                unparalleled amenities. Every detail crafted to perfection.
              </CopyText>
            </div>

            {/* Enhanced stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              {[
                { number: "150+", label: "Properties", sublabel: "Managed" },
                { number: "25", label: "Years", sublabel: "Experience" },
                { number: "98%", label: "Satisfaction", sublabel: "Rate" }
              ].map((stat, i) => (
                <div key={i} className="group relative cursor-pointer">
                  <div className="absolute -inset-2 bg-gradient-to-br from-[var(--vharanani-primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative text-center p-4">
                    <div className="text-5xl font-['Bebas_Neue',sans-serif] text-[var(--vharanani-primary)] mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <CaptionText className="text-[var(--vharanani-charcoal)] uppercase tracking-[0.2em] block mb-1">
                      {stat.label}
                    </CaptionText>
                    <CaptionText className="text-[var(--vharanani-text-muted)] uppercase tracking-wider text-xs">
                      {stat.sublabel}
                    </CaptionText>
                    <div className="h-0.5 w-0 group-hover:w-full bg-[var(--vharanani-primary)] mx-auto mt-2 transition-all duration-500" />
                  </div>
                </div>
              ))}
            </div>

            {/* Premium CTA Buttons */}
            <div className="flex flex-wrap gap-5 pt-8">
              <button className="group relative px-12 py-6 bg-[var(--vharanani-primary)] text-white overflow-hidden transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(137,43,28,0.5)] hover:-translate-y-2">
                <div className="absolute inset-0 bg-[var(--vharanani-charcoal)] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20">
                  <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(45deg, transparent 30%, white 50%, transparent 70%)', backgroundSize: '200% 200%', animation: 'shimmer 2s infinite' }} />
                </div>
                <CopyText className="text-white uppercase tracking-[0.2em] relative z-10 font-medium">Explore Properties</CopyText>
                <style>{`@keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }`}</style>
              </button>
              
              <button className="group relative px-12 py-6 border-[2.5px] border-[var(--vharanani-charcoal)] overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
                <div className="absolute inset-0 bg-[var(--vharanani-charcoal)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <CopyText className="uppercase tracking-[0.2em] relative z-10 group-hover:text-white transition-colors duration-500">Schedule Tour</CopyText>
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-8 pt-6 opacity-60">
              {['Award Winning Design', 'Trusted Since 1999', 'ISO Certified'].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 bg-[var(--vharanani-primary)]" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
                  <CaptionText className="uppercase tracking-wider">{item}</CaptionText>
                </div>
              ))}
            </div>
          </div>

          {/* Diamond Images Side - Fixed z-index layering */}
          <div className="relative h-[800px] lg:h-[900px] z-10">
            {/* Background glow */}
            <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-[var(--vharanani-primary)] opacity-10 blur-[120px] rounded-full pointer-events-none -z-10" />
            
            {/* Large primary diamond */}
            <div className="absolute top-10 right-0 z-10">
              <DiamondImageMask
                src="https://images.unsplash.com/photo-1771090904152-264a71f4fb57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Luxury residential building"
                variant="tall"
                size="3xl"
              />
            </div>
            
            {/* Medium secondary diamond */}
            <div className="absolute bottom-32 left-20 z-20">
              <DiamondImageMask
                src="https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Luxury interior"
                variant="default"
                size="xl"
              />
            </div>

            {/* Small accent diamond top */}
            <div className="absolute top-52 left-0 z-5">
              <DiamondImageMask
                src="https://images.unsplash.com/photo-1763046472163-32c74523903e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Commercial building"
                variant="wide"
                size="md"
                className="opacity-80"
              />
            </div>

            {/* Additional micro diamond */}
            <div className="absolute top-[30%] right-[25%] z-5 opacity-40">
              <DiamondImageMask
                src="https://images.unsplash.com/photo-1718066236074-13f8cf7ae93e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Architecture detail"
                variant="default"
                size="sm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Hero Section 2: Immersive Dark Centered Composition
 */
export function HeroCentered() {
  return (
    <section className="relative min-h-[1000px] bg-[var(--vharanani-charcoal)] overflow-hidden">
      {/* Multi-layer background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--vharanani-charcoal)] via-black to-[#1a1a1a] z-0" />
      
      {/* Radial gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[var(--vharanani-primary)] opacity-15 blur-[150px] rounded-full animate-pulse pointer-events-none z-0" style={{ animationDuration: '8s' }} />
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-blue-900 opacity-5 blur-[100px] rounded-full pointer-events-none z-0" />

      {/* Animated grid */}
      <div className="absolute inset-0 opacity-[0.03] z-0" style={{ 
        backgroundImage: 'linear-gradient(var(--vharanani-primary) 1.5px, transparent 1.5px), linear-gradient(90deg, var(--vharanani-primary) 1.5px, transparent 1.5px)', 
        backgroundSize: '80px 80px',
        backgroundPosition: '0 0, 0 0',
      }} />

      <AnimatedParticles />

      <div className="relative mx-auto max-w-[1400px] px-8 py-28 z-20">
        {/* Centered Header Content */}
        <div className="text-center mb-24 space-y-10 relative z-50">
          {/* Animated badge */}
          <div className="inline-flex items-center gap-4 px-8 py-4 border border-[var(--vharanani-primary)]/30 bg-[var(--vharanani-primary)]/5 backdrop-blur-xl relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--vharanani-primary)]/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <div className="w-2 h-2 bg-[var(--vharanani-primary)] animate-ping absolute left-4" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
            <div className="w-2 h-2 bg-[var(--vharanani-primary)]" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
            <CaptionText className="text-[var(--vharanani-primary)] uppercase tracking-[0.3em] relative z-10">
              Portfolio Showcase 2024
            </CaptionText>
          </div>
          
          {/* Main headline */}
          <div className="space-y-8">
            <div className="relative inline-block">
              {/* Decorative corners */}
              <div className="absolute -top-6 -left-6 w-12 h-12">
                <div className="w-full h-0.5 bg-gradient-to-r from-[var(--vharanani-primary)] to-transparent" />
                <div className="w-0.5 h-full bg-gradient-to-b from-[var(--vharanani-primary)] to-transparent" />
              </div>
              <div className="absolute -top-6 -right-6 w-12 h-12">
                <div className="w-full h-0.5 bg-gradient-to-l from-[var(--vharanani-primary)] to-transparent" />
                <div className="absolute right-0 w-0.5 h-full bg-gradient-to-b from-[var(--vharanani-primary)] to-transparent" />
              </div>
              
              <Header className="text-white leading-[0.75] max-w-5xl mx-auto px-12">
                <span className="block">VHARANANI</span>
                <span className="block text-[var(--vharanani-primary)] text-[1.2em]">PROPERTIES</span>
              </Header>
            </div>
            
            <div className="flex items-center justify-center gap-4">
              <div className="w-20 h-0.5 bg-gradient-to-r from-transparent to-[var(--vharanani-primary)]" />
              <div className="w-4 h-4 border border-[var(--vharanani-primary)] rotate-45" />
              <div className="w-20 h-0.5 bg-gradient-to-l from-transparent to-[var(--vharanani-primary)]" />
            </div>
            
            <Subline className="text-[var(--vharanani-primary)] tracking-[0.2em]">
              Where Vision Meets Reality
            </Subline>
          </div>
          
          <CopyText className="max-w-2xl mx-auto text-white/70 leading-[1.9] text-[17px]">
            Discover exceptional properties across residential, commercial, and mixed-use developments.
            Each space meticulously designed to exceed expectations and redefine modern living.
          </CopyText>
        </div>

        {/* Ultra-sophisticated Diamond Cluster */}
        <div className="relative h-[700px] mx-auto max-w-6xl mb-24">
          {/* Center massive diamond */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
            <DiamondImageMask
              src="https://images.unsplash.com/photo-1763046472163-32c74523903e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Commercial property"
              variant="default"
              size="3xl"
            />
          </div>

          {/* Top left - Large supporting diamond */}
          <div className="absolute top-0 left-10 z-20">
            <DiamondImageMask
              src="https://images.unsplash.com/photo-1718066236074-13f8cf7ae93e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Modern architecture"
              variant="wide"
              size="xl"
              className="opacity-90"
            />
          </div>

          {/* Bottom right - Large supporting diamond */}
          <div className="absolute bottom-0 right-10 z-20">
            <DiamondImageMask
              src="https://images.unsplash.com/photo-1758750394367-a5f2ff9ba44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Urban development"
              variant="tall"
              size="xl"
              className="opacity-90"
            />
          </div>

          {/* Small accent diamonds */}
          <div className="absolute top-24 right-24 z-15 opacity-60">
            <DiamondImageMask
              src="https://images.unsplash.com/photo-1646678667054-d68e27a3f085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Residential aerial"
              variant="default"
              size="lg"
            />
          </div>

          <div className="absolute bottom-24 left-24 z-15 opacity-60">
            <DiamondImageMask
              src="https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Interior luxury"
              variant="default"
              size="lg"
            />
          </div>

          {/* Micro diamonds for depth */}
          <div className="absolute top-1/3 left-1/4 z-10 opacity-30">
            <DiamondImageMask
              src="https://images.unsplash.com/photo-1771090904152-264a71f4fb57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Accent"
              variant="wide"
              size="sm"
            />
          </div>
          <div className="absolute bottom-1/3 right-1/4 z-10 opacity-30">
            <DiamondImageMask
              src="https://images.unsplash.com/photo-1763046472163-32c74523903e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Accent"
              variant="tall"
              size="sm"
            />
          </div>
        </div>

        {/* Premium CTA */}
        <div className="text-center relative z-50">
          <button className="group relative px-20 py-7 bg-[var(--vharanani-primary)] text-white overflow-hidden transition-all duration-700 hover:shadow-[0_0_60px_rgba(137,43,28,0.6)] hover:-translate-y-3">
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--vharanani-primary)] via-[#a03420] to-[var(--vharanani-primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[length:200%_100%] animate-shimmer" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-30">
              <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(45deg, transparent 30%, white 50%, transparent 70%)', backgroundSize: '200% 200%', animation: 'shimmer 2s infinite' }} />
            </div>
            <CopyText className="text-white uppercase tracking-[0.3em] relative z-10 font-medium">Explore Full Portfolio</CopyText>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </section>
  );
}

/**
 * Hero Section 3: Kinetic Diagonal Flow
 */
export function HeroDiagonal() {
  return (
    <section className="relative min-h-[950px] bg-white overflow-hidden">
      {/* Multi-layer diagonal backgrounds */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[65%] h-full bg-gradient-to-br from-gray-100 via-gray-50 to-white transform skew-x-[-12deg] origin-top-right translate-x-[8%] shadow-2xl" />
        <div className="absolute top-[10%] right-0 w-[60%] h-[80%] bg-gradient-to-br from-[var(--vharanani-primary)]/5 to-transparent transform skew-x-[-12deg] origin-top-right translate-x-[10%]" />
      </div>
      
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--vharanani-primary)] opacity-[0.04] blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--vharanani-charcoal)] opacity-[0.03] blur-3xl pointer-events-none z-0" />

      <div className="relative mx-auto max-w-[1400px] px-8 lg:px-12 py-28 lg:py-36 z-20">
        {/* Content Section */}
        <div className="max-w-2xl space-y-10 mb-20 relative z-50">
          {/* Premium badge */}
          <div className="inline-flex items-center gap-5 relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-[var(--vharanani-primary)] via-[var(--vharanani-charcoal)] to-[var(--vharanani-primary)] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-700" />
            <div className="relative flex items-center gap-5 px-7 py-4 border-l-4 border-[var(--vharanani-primary)] bg-white shadow-2xl shadow-[var(--vharanani-primary)]/10">
              <div className="flex flex-col gap-1">
                <div className="w-3 h-3 bg-[var(--vharanani-primary)] animate-pulse" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
                <div className="w-3 h-3 bg-[var(--vharanani-primary)] animate-pulse opacity-60" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', animationDelay: '0.5s' }} />
              </div>
              <div>
                <CaptionText className="text-[var(--vharanani-primary)] uppercase tracking-[0.25em] font-medium block mb-0.5">
                  New Development 2024
                </CaptionText>
                <CaptionText className="text-[var(--vharanani-text-muted)] uppercase tracking-wider text-xs">
                  Limited Availability
                </CaptionText>
              </div>
            </div>
          </div>
          
          {/* Headline */}
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -left-6 top-0 bottom-0 w-2 bg-gradient-to-b from-[var(--vharanani-primary)] via-[var(--vharanani-primary)]/60 to-transparent" />
              
              <Header className="leading-[0.85]">
                <span className="block mb-3">ELEVATED</span>
                <span className="block text-[var(--vharanani-primary)] mb-3">URBAN</span>
                <span className="block">LIVING</span>
              </Header>
              
              <div className="mt-8 space-y-2">
                <div className="flex gap-2">
                  <div className="h-[2px] w-28 bg-[var(--vharanani-primary)]" />
                  <div className="h-[2px] w-16 bg-[var(--vharanani-primary)] opacity-60" />
                </div>
                <div className="flex gap-2 ml-4">
                  <div className="h-[2px] w-20 bg-[var(--vharanani-primary)] opacity-40" />
                  <div className="h-[2px] w-8 bg-[var(--vharanani-primary)] opacity-20" />
                </div>
              </div>
            </div>
            
            <Subline className="text-[var(--vharanani-charcoal)] tracking-[0.15em]">
              The Future of Residential Excellence
            </Subline>
          </div>
          
          <div className="relative pl-8 py-6">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--vharanani-primary)] to-transparent" />
            <CopyText className="text-[var(--vharanani-text-muted)] leading-[1.9] text-[17px]">
              A new standard in residential excellence. Meticulously designed spaces 
              that reflect your aspirations and redefine modern living.
            </CopyText>
          </div>

          {/* Premium CTAs */}
          <div className="flex flex-wrap gap-5 pt-6">
            <button className="group relative px-14 py-6 bg-[var(--vharanani-charcoal)] text-white overflow-hidden transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(44,45,45,0.5)] hover:-translate-y-2">
              <div className="absolute inset-0 bg-[var(--vharanani-primary)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              <CopyText className="text-white uppercase tracking-[0.22em] relative z-10 font-medium">Schedule Viewing</CopyText>
            </button>
            
            <button className="group relative px-14 py-6 border-[2.5px] border-[var(--vharanani-charcoal)] overflow-hidden transition-all duration-500 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--vharanani-primary)]/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <CopyText className="uppercase tracking-[0.22em] relative z-10">Download Brochure</CopyText>
            </button>
          </div>
        </div>

        {/* Diamond Flow - Fixed z-index */}
        <div className="relative h-[650px] z-10">
          <div className="absolute top-0 left-0 z-10">
            <DiamondImageMask
              src="https://images.unsplash.com/photo-1771090904152-264a71f4fb57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Luxury residential"
              variant="tall"
              size="2xl"
            />
          </div>

          <div className="absolute top-40 left-[450px] z-10">
            <DiamondImageMask
              src="https://images.unsplash.com/photo-1763046472163-32c74523903e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Commercial building"
              variant="default"
              size="2xl"
            />
          </div>

          <div className="absolute bottom-0 right-0 z-10">
            <DiamondImageMask
              src="https://images.unsplash.com/photo-1718066236074-13f8cf7ae93e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Glass architecture"
              variant="wide"
              size="2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Hero Section 4: Museum-Quality Interactive Grid
 */
export function HeroGrid() {
  const properties = [
    {
      image: "https://images.unsplash.com/photo-1771090904152-264a71f4fb57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      alt: "Residential",
      variant: "tall" as const,
      title: "RESIDENTIAL",
      count: "45+ Properties",
      description: "Luxury homes and apartments"
    },
    {
      image: "https://images.unsplash.com/photo-1763046472163-32c74523903e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      alt: "Commercial",
      variant: "default" as const,
      title: "COMMERCIAL",
      count: "28+ Properties",
      description: "Office spaces and retail"
    },
    {
      image: "https://images.unsplash.com/photo-1758750394367-a5f2ff9ba44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      alt: "Mixed-Use",
      variant: "wide" as const,
      title: "MIXED-USE",
      count: "12+ Properties",
      description: "Integrated developments"
    },
  ];

  return (
    <section className="relative min-h-[1000px] bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-[0.015]" style={{ 
          backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 2px, transparent 0, transparent 50%)', 
          backgroundSize: '40px 40px' 
        }} />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-8 py-28 z-20">
        {/* Premium Header */}
        <div className="text-center mb-24 space-y-10 relative z-50">
          <div className="inline-block relative">
            <div className="absolute -top-12 left-1/2 -translate-x-1/2">
              <div className="flex gap-2">
                {[0, 1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="w-1 bg-[var(--vharanani-primary)]" 
                    style={{ 
                      height: `${24 + i * 4}px`,
                      opacity: 1 - i * 0.15,
                      animation: 'pulse 2s ease-in-out infinite',
                      animationDelay: `${i * 0.1}s`
                    }} 
                  />
                ))}
              </div>
            </div>
            
            <div className="relative px-12 py-5">
              <div className="absolute top-0 left-0 w-16 h-16 border-t-[3px] border-l-[3px] border-[var(--vharanani-primary)]" />
              <div className="absolute top-0 right-0 w-16 h-16 border-t-[3px] border-r-[3px] border-[var(--vharanani-primary)]" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-[3px] border-l-[3px] border-[var(--vharanani-primary)]" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-[3px] border-r-[3px] border-[var(--vharanani-primary)]" />
              
              <Subline className="text-[var(--vharanani-primary)] tracking-[0.25em]">Our Portfolio</Subline>
            </div>
          </div>
          
          <div className="space-y-6">
            <Header className="leading-[0.8]">
              <span className="block">PREMIUM</span>
              <span className="block text-[var(--vharanani-primary)]">PROPERTIES</span>
            </Header>
            
            <div className="flex items-center justify-center gap-6">
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-[var(--vharanani-primary)] to-transparent" />
              <CopyText className="text-[var(--vharanani-text-muted)] uppercase tracking-[0.2em]">Three Categories</CopyText>
              <div className="w-24 h-px bg-gradient-to-l from-transparent via-[var(--vharanani-primary)] to-transparent" />
            </div>
          </div>
          
          <CopyText className="max-w-2xl mx-auto text-[var(--vharanani-text-muted)] leading-[1.9] text-[17px]">
            Explore our comprehensive collection of residential, commercial, and mixed-use properties.
            Each development represents the pinnacle of design and functionality.
          </CopyText>
        </div>

        {/* Diamond Grid - Fixed z-index */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24 items-end justify-items-center mb-28 relative z-10">
          {properties.map((property, index) => (
            <div key={index} className="w-full max-w-md">
              <div className="relative mx-auto" style={{ width: 'fit-content' }}>
                <DiamondImageMask
                  src={property.image}
                  alt={property.alt}
                  variant={property.variant}
                  size="2xl"
                />
              </div>

              <div className="text-center mt-10">
                <div className="mb-4">
                  <HeadlineSmall className="mb-2">{property.title}</HeadlineSmall>
                  <div className="w-16 h-0.5 bg-[var(--vharanani-primary)] mx-auto mb-3" />
                  <CopyText className="text-[var(--vharanani-text-muted)] mb-1">{property.description}</CopyText>
                  <CaptionText className="text-[var(--vharanani-primary)] uppercase tracking-wider">{property.count}</CaptionText>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="relative z-50">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100 to-transparent opacity-50" />
          
          <div className="relative grid grid-cols-3 gap-16 py-16">
            {[
              { number: "150+", label: "Properties Managed", sublabel: "Across all categories", icon: "🏢" },
              { number: "25", label: "Years Experience", sublabel: "Industry leadership", icon: "⭐" },
              { number: "98%", label: "Client Satisfaction", sublabel: "Verified reviews", icon: "❤️" }
            ].map((stat, i) => (
              <div key={i} className="text-center group cursor-pointer relative">
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                
                <div className="mb-6 pb-6 border-b-[3px] border-transparent group-hover:border-[var(--vharanani-primary)] transition-colors duration-500">
                  <Header className="text-[var(--vharanani-primary)] leading-none transform group-hover:scale-110 transition-transform duration-500 inline-block">
                    {stat.number}
                  </Header>
                </div>
                
                <CopyText className="font-bold uppercase tracking-[0.15em] mb-2 group-hover:text-[var(--vharanani-primary)] transition-colors duration-300">
                  {stat.label}
                </CopyText>
                <CaptionText className="text-[var(--vharanani-text-muted)] uppercase tracking-wider">
                  {stat.sublabel}
                </CaptionText>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Hero Section 5: Editorial Asymmetric
 */
export function HeroAsymmetric() {
  return (
    <section className="relative min-h-[1000px] bg-[var(--vharanani-neutral-light)] overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 z-0" />
      
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-[var(--vharanani-primary)] via-[var(--vharanani-primary)]/30 to-transparent z-0" />
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[var(--vharanani-primary)]/30 to-[var(--vharanani-primary)] z-0" />

      <AnimatedParticles />

      <div className="relative mx-auto max-w-[1400px] px-8 lg:px-12 py-32 lg:py-40 z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column - Showcase Diamond */}
          <div className="lg:col-span-6 flex items-center justify-center relative z-10">
            <div className="relative">
              <DiamondImageMask
                src="https://images.unsplash.com/photo-1771090904152-264a71f4fb57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Featured property"
                variant="default"
                size="3xl"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-12 relative z-50">
            <div className="space-y-10">
              <div className="space-y-6">
                <div className="flex items-center gap-5">
                  <div className="flex flex-col gap-2">
                    <div className="w-16 h-px bg-[var(--vharanani-primary)]" />
                    <div className="w-12 h-px bg-[var(--vharanani-primary)] opacity-60" />
                    <div className="w-8 h-px bg-[var(--vharanani-primary)] opacity-30" />
                  </div>
                  <Subline className="text-[var(--vharanani-primary)] tracking-[0.3em]">
                    Signature Collection
                  </Subline>
                </div>
                
                <div className="relative">
                  <Header className="leading-[0.8] max-w-xl">
                    <span className="block mb-3">ARCHITECTURAL</span>
                    <span className="block text-[var(--vharanani-primary)] mb-3">EXCELLENCE</span>
                  </Header>

                  <div className="mt-8 flex gap-3">
                    <div className="w-2 h-2 bg-[var(--vharanani-charcoal)]" />
                    <div className="w-24 h-2 bg-[var(--vharanani-charcoal)]" />
                  </div>
                </div>
              </div>
              
              <div className="relative pl-8 py-6 border-l-[3px] border-[var(--vharanani-primary)]">
                <CopyText className="text-[var(--vharanani-text)] leading-[1.9] text-[17px]">
                  Each property in our collection represents the pinnacle of design, 
                  combining timeless aesthetics with modern functionality to create 
                  spaces that inspire and elevate everyday living.
                </CopyText>
              </div>
              
              <div className="pt-4">
                <button className="group relative px-16 py-7 bg-[var(--vharanani-primary)] text-white overflow-hidden transition-all duration-700 hover:shadow-[0_20px_60px_-15px_rgba(137,43,28,0.6)] hover:-translate-y-2">
                  <div className="absolute inset-0 bg-[var(--vharanani-charcoal)] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                  <CopyText className="text-white uppercase tracking-[0.25em] relative z-10 font-medium">View Collection</CopyText>
                </button>
              </div>
            </div>

            {/* Small Diamond Gallery Grid */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              {[
                { src: "https://images.unsplash.com/photo-1763046472163-32c74523903e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", variant: "wide" as const },
                { src: "https://images.unsplash.com/photo-1718066236074-13f8cf7ae93e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", variant: "tall" as const },
                { src: "https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", variant: "default" as const }
              ].map((img, i) => (
                <div key={i} className="relative">
                  <DiamondImageMask
                    src={img.src}
                    alt={`Gallery ${i + 1}`}
                    variant={img.variant}
                    size="xl"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Hero Section 6: Cinematic Immersive Banner
 */
export function HeroBanner() {
  return (
    <section className="relative h-[800px] lg:h-[900px] bg-[var(--vharanani-charcoal)] overflow-hidden">
      {/* Multi-layer background system */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--vharanani-charcoal)] via-black to-[#1a1a1a]" />
        
        <div className="absolute inset-0 opacity-15">
          <DiamondImageMask
            src="https://images.unsplash.com/photo-1771090904152-264a71f4fb57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Background"
            variant="wide"
            className="w-full h-full scale-150"
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--vharanani-charcoal)] via-[var(--vharanani-charcoal)]/90 to-[var(--vharanani-charcoal)]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--vharanani-charcoal)] via-transparent to-transparent" />
      </div>

      {/* Animated grid */}
      <div className="absolute inset-0 opacity-[0.06] z-0" style={{ 
        backgroundImage: 'linear-gradient(var(--vharanani-primary) 2px, transparent 2px), linear-gradient(90deg, var(--vharanani-primary) 2px, transparent 2px)', 
        backgroundSize: '100px 100px',
      }} />

      {/* Radial spotlight */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--vharanani-primary)] opacity-15 blur-[150px] rounded-full animate-pulse pointer-events-none z-0" style={{ animationDuration: '6s' }} />

      <AnimatedParticles />

      {/* Content Layer */}
      <div className="relative z-50 h-full flex items-center">
        <div className="mx-auto max-w-[1400px] px-8 lg:px-12 w-full">
          <div className="max-w-4xl space-y-12">
            {/* Premium badge */}
            <div className="inline-flex items-center gap-6 relative group">
              <div className="absolute -inset-3 bg-gradient-to-r from-[var(--vharanani-primary)] via-white to-[var(--vharanani-primary)] opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-1000" />
              
              <div className="relative flex items-center gap-6 px-8 py-5 bg-[var(--vharanani-primary)]/95 backdrop-blur-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1500" />
                
                <div className="flex gap-2 relative z-10">
                  {[0, 1, 2, 3].map((i) => (
                    <div 
                      key={i}
                      className="w-2 h-2 bg-white animate-pulse" 
                      style={{ 
                        clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                        animationDelay: `${i * 0.3}s`,
                        animationDuration: '2s'
                      }} 
                    />
                  ))}
                </div>
                
                <div className="relative z-10">
                  <CopyText className="text-white uppercase tracking-[0.3em] font-medium mb-0.5">
                    Limited Exclusive Availability
                  </CopyText>
                  <CaptionText className="text-white/70 uppercase tracking-wider text-xs">
                    Reserve your viewing today
                  </CaptionText>
                </div>
              </div>
            </div>

            {/* Ultra-premium headline */}
            <div className="space-y-8">
              <div className="relative">
                <Header className="text-white leading-[0.75] max-w-4xl">
                  <span className="block mb-4">EXCEPTIONAL</span>
                  <span className="block mb-4">SPACES</span>
                  <span className="block text-[var(--vharanani-primary)] text-[1.1em] mb-4">EXTRAORDINARY</span>
                  <span className="block">LIVES</span>
                </Header>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-40 h-1 bg-[var(--vharanani-primary)]" />
                <div className="w-3 h-3 border-2 border-[var(--vharanani-primary)] rotate-45" />
                <div className="w-24 h-1 bg-[var(--vharanani-primary)] opacity-60" />
                <div className="w-12 h-1 bg-[var(--vharanani-primary)] opacity-30" />
              </div>
              
              <Subline className="text-white/90 tracking-[0.25em]">
                Begin Your Journey to Luxury
              </Subline>
            </div>

            {/* Enhanced description */}
            <div className="relative pl-8 py-1">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--vharanani-primary)] to-transparent" />
              
              <CopyText className="text-white/80 leading-[2] text-[18px] max-w-3xl">
                Step into a world where every detail matters. Where architecture meets artistry, 
                and spaces become sanctuaries. Discover your perfect property today.
              </CopyText>
            </div>

            {/* Premium CTA Section */}
            <div className="flex flex-wrap gap-6 pt-8">
              <button className="group relative px-16 py-7 bg-[var(--vharanani-primary)] text-white overflow-hidden transition-all duration-700 hover:shadow-[0_0_80px_rgba(137,43,28,0.8)] hover:-translate-y-3">
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--vharanani-primary)] via-white to-[var(--vharanani-primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[length:200%_100%]" />
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left opacity-20" />
                <CopyText className="text-white group-hover:text-[var(--vharanani-charcoal)] uppercase tracking-[0.28em] relative z-10 transition-colors duration-700 font-medium">
                  Get Started Now
                </CopyText>
              </button>
              
              <button className="group relative px-16 py-7 border-[2.5px] border-white text-white overflow-hidden transition-all duration-700 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:-translate-y-3">
                <div className="absolute inset-0 bg-white transform scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-bottom" />
                <CopyText className="uppercase tracking-[0.28em] relative z-10 group-hover:text-[var(--vharanani-charcoal)] transition-colors duration-700">
                  Contact Sales Team
                </CopyText>
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-12 pt-10 border-t border-white/10">
              {[
                { icon: '🏆', text: 'Award Winning', subtext: 'Industry Recognition' },
                { icon: '👥', text: 'Trusted by 1000+', subtext: 'Happy Clients' },
                { icon: '⚡', text: 'Premium Service', subtext: '24/7 Support' }
              ].map((item, i) => (
                <div key={i} className="group flex items-center gap-4 cursor-pointer">
                  <div className="text-3xl transform group-hover:scale-125 transition-transform duration-500">
                    {item.icon}
                  </div>
                  <div>
                    <CopyText className="text-white/90 uppercase tracking-wider font-medium mb-0.5 group-hover:text-[var(--vharanani-primary)] transition-colors duration-300">
                      {item.text}
                    </CopyText>
                    <CaptionText className="text-white/60 uppercase tracking-wider text-xs">
                      {item.subtext}
                    </CaptionText>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Decorative Diamonds */}
      <div className="absolute bottom-32 left-24 opacity-15 z-10">
        <div className="animate-pulse" style={{ animationDuration: '4s' }}>
          <DiamondImageMask
            src="https://images.unsplash.com/photo-1763046472163-32c74523903e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Accent"
            variant="default"
            size="xl"
          />
        </div>
      </div>
      
      <div className="absolute top-32 right-20 opacity-12 z-10">
        <div className="animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }}>
          <DiamondImageMask
            src="https://images.unsplash.com/photo-1718066236074-13f8cf7ae93e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Accent"
            variant="tall"
            size="xl"
          />
        </div>
      </div>
    </section>
  );
}

/**
 * Main Hero Sections Showcase Component
 */
export function HeroSectionsShowcase() {
  return (
    <div className="space-y-0">
      {/* Hero 1 */}
      <div className="border-b-8 border-[var(--vharanani-primary)]">
        <div className="bg-gradient-to-r from-[var(--vharanani-charcoal)] via-[#1a1b1b] to-black px-8 lg:px-12 py-8 relative z-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-start gap-4 mb-3">
              <div className="flex flex-col gap-1 mt-1">
                <div className="w-1 h-6 bg-[var(--vharanani-primary)]" />
                <div className="w-1 h-4 bg-[var(--vharanani-primary)] opacity-60" />
              </div>
              <div className="flex-1">
                <HeadlineSmall className="text-white mb-2">1. Ultra-Modern Split Layout</HeadlineSmall>
                <CopyText className="text-white/70">Perfect for homepage hero - sophisticated balance with layered floating diamonds and premium interactive elements</CopyText>
              </div>
            </div>
          </div>
        </div>
        <HeroSplit />
      </div>

      {/* Hero 2 */}
      <div className="border-b-8 border-[var(--vharanani-primary)]">
        <div className="bg-gradient-to-r from-[var(--vharanani-charcoal)] via-[#1a1b1b] to-black px-8 lg:px-12 py-8 relative z-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-start gap-4 mb-3">
              <div className="flex flex-col gap-1 mt-1">
                <div className="w-1 h-6 bg-[var(--vharanani-primary)]" />
                <div className="w-1 h-4 bg-[var(--vharanani-primary)] opacity-60" />
              </div>
              <div className="flex-1">
                <HeadlineSmall className="text-white mb-2">2. Immersive Dark Centered Composition</HeadlineSmall>
                <CopyText className="text-white/70">Ideal for portfolio showcases - dramatic focal point with sophisticated diamond cluster</CopyText>
              </div>
            </div>
          </div>
        </div>
        <HeroCentered />
      </div>

      {/* Hero 3 */}
      <div className="border-b-8 border-[var(--vharanani-primary)]">
        <div className="bg-gradient-to-r from-[var(--vharanani-charcoal)] via-[#1a1b1b] to-black px-8 lg:px-12 py-8 relative z-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-start gap-4 mb-3">
              <div className="flex flex-col gap-1 mt-1">
                <div className="w-1 h-6 bg-[var(--vharanani-primary)]" />
                <div className="w-1 h-4 bg-[var(--vharanani-primary)] opacity-60" />
              </div>
              <div className="flex-1">
                <HeadlineSmall className="text-white mb-2">3. Kinetic Diagonal Flow</HeadlineSmall>
                <CopyText className="text-white/70">Best for property detail pages - creates dynamic movement with multi-layer backgrounds</CopyText>
              </div>
            </div>
          </div>
        </div>
        <HeroDiagonal />
      </div>

      {/* Hero 4 */}
      <div className="border-b-8 border-[var(--vharanani-primary)]">
        <div className="bg-gradient-to-r from-[var(--vharanani-charcoal)] via-[#1a1b1b] to-black px-8 lg:px-12 py-8 relative z-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-start gap-4 mb-3">
              <div className="flex flex-col gap-1 mt-1">
                <div className="w-1 h-6 bg-[var(--vharanani-primary)]" />
                <div className="w-1 h-4 bg-[var(--vharanani-primary)] opacity-60" />
              </div>
              <div className="flex-1">
                <HeadlineSmall className="text-white mb-2">4. Museum-Quality Interactive Grid</HeadlineSmall>
                <CopyText className="text-white/70">Perfect for category pages - ultra-premium presentation with sophisticated stats</CopyText>
              </div>
            </div>
          </div>
        </div>
        <HeroGrid />
      </div>

      {/* Hero 5 */}
      <div className="border-b-8 border-[var(--vharanani-primary)]">
        <div className="bg-gradient-to-r from-[var(--vharanani-charcoal)] via-[#1a1b1b] to-black px-8 lg:px-12 py-8 relative z-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-start gap-4 mb-3">
              <div className="flex flex-col gap-1 mt-1">
                <div className="w-1 h-6 bg-[var(--vharanani-primary)]" />
                <div className="w-1 h-4 bg-[var(--vharanani-primary)] opacity-60" />
              </div>
              <div className="flex-1">
                <HeadlineSmall className="text-white mb-2">5. Editorial Asymmetric Layout</HeadlineSmall>
                <CopyText className="text-white/70">Great for featured collections - magazine-quality sophistication with gallery grid</CopyText>
              </div>
            </div>
          </div>
        </div>
        <HeroAsymmetric />
      </div>

      {/* Hero 6 */}
      <div className="border-b-8 border-[var(--vharanani-primary)]">
        <div className="bg-gradient-to-r from-[var(--vharanani-charcoal)] via-[#1a1b1b] to-black px-8 lg:px-12 py-8 relative z-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-start gap-4 mb-3">
              <div className="flex flex-col gap-1 mt-1">
                <div className="w-1 h-6 bg-[var(--vharanani-primary)]" />
                <div className="w-1 h-4 bg-[var(--vharanani-primary)] opacity-60" />
              </div>
              <div className="flex-1">
                <HeadlineSmall className="text-white mb-2">6. Cinematic Immersive Banner</HeadlineSmall>
                <CopyText className="text-white/70">Ideal for landing pages - Hollywood-grade storytelling with layered depth</CopyText>
              </div>
            </div>
          </div>
        </div>
        <HeroBanner />
      </div>

      {/* Implementation Guide */}
      <div className="bg-gradient-to-br from-[var(--vharanani-charcoal)] via-black to-[#0a0a0a] px-8 lg:px-12 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <HeadlineBig className="text-white mb-6 leading-[0.9]">
              HERO SECTION<br />
              <span className="text-[var(--vharanani-primary)]">SYSTEM</span>
            </HeadlineBig>
            
            <CopyText className="text-white/70 max-w-3xl mx-auto leading-[1.9] text-[17px]">
              A comprehensive collection of hero components designed for maximum visual impact with proper z-index management
            </CopyText>
          </div>

          <div className="relative group">
            <div className="relative p-10 bg-[var(--vharanani-primary)]/10 border-l-4 border-[var(--vharanani-primary)]">
              <div className="flex items-start gap-8">
                <div className="text-5xl">💻</div>
                <div className="flex-1">
                  <HeadlineSmall className="text-white mb-4">Quick Start Implementation</HeadlineSmall>
                  <CopyText className="text-white/80 mb-6">Import any hero section into your pages:</CopyText>
                  
                  <div className="bg-black/40 backdrop-blur-sm p-8 border border-[var(--vharanani-primary)]/20 font-mono text-sm overflow-x-auto">
                    <div className="text-gray-400 mb-4">// Import hero components</div>
                    <div className="text-[var(--vharanani-primary)] mb-6">
                      import &#123; HeroSplit, HeroCentered, HeroDiagonal, <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HeroGrid, HeroAsymmetric, HeroBanner &#125; from './components/design-system/HeroSections';
                    </div>
                    
                    <div className="text-gray-400 mb-4">// Use in your page</div>
                    <div className="text-blue-400">
                      &lt;<span className="text-green-400">HeroSplit</span> /&gt;
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
