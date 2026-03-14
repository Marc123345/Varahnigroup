import React, { useState, useEffect, useRef, useCallback, Suspense, lazy } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { CircleArrowDown as ArrowDownCircle } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ErrorBoundary } from 'react-error-boundary';
import { useDeviceDetect } from '../hooks/useDeviceDetect';
import { useGestures } from '../hooks/useGestures';
import { useMemorySafe } from '../hooks/useMemorySafe';
import { useAnimationCleanup } from '../hooks/useAnimationCleanup';
import { useParticleSystem } from '../hooks/useParticleSystem';

const TextScramble = lazy(() => import('./TextScramble'));

gsap.registerPlugin(ScrollTrigger);

const ErrorFallback = ({ error }: { error: Error }) => (
  <div className="text-red-400 p-3 bg-red-900/40 rounded-lg shadow-md">
    <p className="font-semibold text-sm">Oops! Text animation failed:</p>
    <pre className="text-xs mt-1.5 whitespace-pre-wrap opacity-80">{error.message}</pre>
  </div>
);

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  const { isMobile } = useDeviceDetect();
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const { isUnmountedRef, setStateSafely } = useMemorySafe();
  const { cleanup: cleanupIntroAnimations, createTimeline } = useAnimationCleanup();
  const { rippleRef, particlesRef } = useParticleSystem({ disabled: isMobile });

  const { ref: videoContainerRef, isIntersecting: isVideoVisible } = useIntersectionObserver({
    threshold: 0.1
  });

  const phrases = [
    'Power',
    'Transformation',
    'Infrastructure',
    'Impact'
  ];

  useEffect(() => {
    const tl = createTimeline();
    let parallax: ScrollTrigger | undefined;

    if (headingRef.current && subheadingRef.current && scrollIndicatorRef.current) {
      tl.fromTo(headingRef.current,
        { opacity: 0, y: 60, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: 'elastic.out(1, 0.65)' },
        '+=0.3'
      ).fromTo(subheadingRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.0, ease: 'power3.out' },
        '-=0.7'
      ).fromTo(scrollIndicatorRef.current,
        { opacity: 0, y: -30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          onComplete: () => {
            const dot = scrollIndicatorRef.current?.querySelector('.scroll-dot');
            if (dot) {
              gsap.to(dot, {
                y: 8,
                opacity: 0.5,
                duration: 1.2,
                repeat: -1,
                ease: 'sine.inOut',
                yoyo: true
              });
            }
          }
        },
        '-=0.5'
      );
    }

    if (containerRef.current) {
      gsap.set(containerRef.current, { y: 0 });
      parallax = ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1.2,
        onUpdate: self => {
          if (!containerRef.current) return;
          
          const factor = isMobile ? 0.1 : 0.2;
          gsap.to(containerRef.current, {
            y: self.progress * -(containerRef.current.offsetHeight * factor),
            ease: 'none'
          });
        }
      });
    }

    return () => {
      cleanupIntroAnimations();
      if (parallax) {
        parallax.kill();
      }
    };
  }, [createTimeline, cleanupIntroAnimations, isMobile]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isVideoVisible && video.paused) {
      video.play().catch(() => {
        if (!isUnmountedRef.current) {
          setStateSafely(setIsVideoLoaded, true);
        }
      });
    } else if (!isVideoVisible && !video.paused) {
      video.pause();
    }
  }, [isVideoVisible, isUnmountedRef, setStateSafely]);

  const handleVideoLoad = useCallback(() => {
    setStateSafely(setIsVideoLoaded, true);
  }, [setStateSafely]);

  const scrollToServices = useCallback(() => {
    const section = document.getElementById('services');
    if (section) {
      section.scrollIntoView({ behavior: isMobile ? 'auto' : 'smooth' });
    }
  }, [isMobile]);

  const gestureBindings = useGestures({
    onSwipeUp: scrollToServices,
    threshold: isMobile ? 30 : 40,
    velocityThreshold: 0.25
  });

  return (
    <section
      ref={containerRef}
      {...(isMobile ? gestureBindings() : {})}
      className="relative min-h-screen flex items-center justify-center text-center sm:text-left overflow-hidden bg-neutral-darkest isolate"
      style={{ touchAction: 'pan-y' }}
    >
      {!isMobile && (
        <>
          <div  
            ref={rippleRef}
            className="fixed inset-0 pointer-events-none z-[1001] overflow-hidden"
          />
          <div  
            ref={particlesRef}
            className="fixed inset-0 pointer-events-none z-[1000] overflow-hidden"
          />
        </>
      )}

      <div ref={videoContainerRef} className="absolute inset-0 z-[-1]">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            isVideoLoaded ? 'opacity-50 md:opacity-60' : 'opacity-0'
          }`}
          onLoadedData={handleVideoLoad}
        >
          <source
            src="https://res.cloudinary.com/dadgglcaq/video/upload/q_auto:eco/v1748255726/abstract-water-background-2023-11-27-05-02-14-utc_pkg6bc.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/80" />
      </div>

      <div className="container mx-auto px-4 pt-28 pb-16 md:pt-0 md:pb-0 relative z-10">
        <div className="max-w-2xl lg:max-w-3xl text-center sm:text-left">
          <h1
            ref={headingRef}
            className="h1-style text-white font-serif mb-12 sm:mb-16 md:mb-20 opacity-0"
            style={{ willChange: 'transform, opacity' }}
          >
            Water is{' '}
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Suspense fallback={<span className="text-clay-earth">Power</span>}>
                <TextScramble phrases={phrases} className="text-clay-earth" />
              </Suspense>
            </ErrorBoundary>
          </h1>
          <p
            ref={subheadingRef}
            className="body-large relative opacity-0 group"
            style={{ willChange: 'transform, opacity' }}
          >
            <span className="relative block p-6 rounded-xl overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-br from-clay-earth/5 via-black/50 to-black/50 backdrop-blur-md opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="absolute inset-0 border border-clay-earth/10 rounded-xl group-hover:border-clay-earth/20 transition-colors duration-500" />
              <span className="absolute inset-0 bg-gradient-to-br from-clay-earth/5 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              <span className="relative">
                Communities across Africa are rising—held back only by limited access to clean water.
              </span>
            </span>
          </p>
        </div>
      </div>

      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20 opacity-0"
        style={{ willChange: 'transform, opacity' }}
      >
        <div className="w-6 h-10 border-2 border-clay-earth/60 rounded-full p-1 flex justify-center items-start">
          <div className="scroll-dot w-2 h-2 bg-clay-earth rounded-full mt-0.5" />
        </div>
        <button
          onClick={scrollToServices}
          className="text-clay-earth/90 hover:text-clay-earth focus:text-clay-earth transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-clay-earth rounded-full p-1"
          aria-label="Scroll to services section"
        >
          <ArrowDownCircle size={isMobile ? 30 : 34} strokeWidth={1.5} />
        </button>
      </div>
    </section>
  );
};

export default Hero;