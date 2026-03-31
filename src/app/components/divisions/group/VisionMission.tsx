import { useRef, type ReactNode } from 'react';
import { Sprout, Route, TrendingUp, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../../ui/ImageWithFallback';
import { SectionWrapper } from '../shared';
import { useInView } from '../../../hooks/useInView';

const IMAGES = {
  visionMission: 'https://vharananiproperties.co.za/wp-content/uploads/2021/06/Marulaneng-3.jpg',
};

export function GroupWireframe_VisionMission(): ReactNode {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.15 });

  const objectives = [
    { icon: <Sprout size={28} />, text: 'Develop sustainable businesses across high-impact sectors.', label: 'SUSTAINABLE GROWTH' },
    { icon: <Route size={28} />, text: 'Deliver infrastructure that improves quality of life.', label: 'INFRASTRUCTURE' },
    { icon: <TrendingUp size={28} />, text: 'Build and manage long-term asset portfolios.', label: 'ASSET MANAGEMENT' },
    { icon: <Users size={28} />, text: 'Foster entrepreneurship and community development.', label: 'COMMUNITY' },
  ];

  return (
    <SectionWrapper className="!px-0 !py-0">
      <div ref={sectionRef} className="w-full">
        {/* ── SPLIT LAYOUT: BLACK LEFT | WHITE RIGHT ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px]">

          {/* ── LEFT HALF: SOLID BLACK ── */}
          <motion.div
            className="relative p-10 md:p-14 lg:p-16 xl:p-20 flex flex-col justify-center"
            style={{ background: '#0e121d' }}
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Decorative vertical burgundy line */}
            <div
              className="absolute left-0 top-[15%] bottom-[15%] w-[3px]"
              style={{ background: 'var(--vharanani-burgundy)' }}
            />

            {/* Vision block */}
            <div className="mb-10">
              <motion.div
                className="flex items-center gap-3 mb-5"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="w-10 h-[2px]" style={{ background: 'var(--vharanani-burgundy)' }} />
                <span
                  className="typo-caption tracking-[0.3em] uppercase font-inter font-semibold"
                  style={{ color: 'var(--vharanani-burgundy)' }}
                >
                  OUR VISION
                </span>
              </motion.div>

              <motion.h2
                className="typo-headline-big font-bebas-neue uppercase tracking-wide text-white leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.7, delay: 0.35 }}
              >
                To build a diversified African enterprise that strengthens national infrastructure, drives innovation, and advances inclusive economic growth.
              </motion.h2>

              <motion.div
                className="w-16 h-[2px] mt-6"
                style={{ background: 'rgba(255,255,255,0.15)' }}
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.5, delay: 0.55 }}
              />
            </div>

            {/* Mission block */}
            <div>
              <motion.div
                className="flex items-center gap-3 mb-5"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="w-10 h-[2px]" style={{ background: 'var(--vharanani-burgundy)' }} />
                <span
                  className="typo-caption tracking-[0.3em] uppercase font-inter font-semibold"
                  style={{ color: 'var(--vharanani-burgundy)' }}
                >
                  OUR MISSION
                </span>
              </motion.div>

              <motion.p
                className="typo-copy font-inter leading-relaxed"
                style={{ color: 'rgba(255,255,255,0.7)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.65 }}
              >
                To create lasting value across high-impact sectors through strategic investment,
                operational excellence, and a deep commitment to the communities we serve.
              </motion.p>
            </div>
          </motion.div>

          {/* ── RIGHT HALF: WHITE ── */}
          <motion.div
            className="relative p-10 md:p-14 lg:p-16 xl:p-20 flex flex-col justify-center"
            style={{ background: '#ffffff' }}
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Section label */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3
                className="typo-subline font-bebas-neue uppercase tracking-wide"
                style={{ color: 'var(--vharanani-charcoal)' }}
              >
                Strategic Objectives
              </h3>
              <div className="w-12 h-[2px] mt-3" style={{ background: 'var(--vharanani-burgundy)' }} />
            </motion.div>

            {/* Objectives grid */}
            <div className="space-y-7">
              {objectives.map((obj, i) => (
                <motion.div
                  key={obj.label}
                  className="flex items-start gap-5 group"
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.12 }}
                >
                  {/* Icon box */}
                  <div
                    className="w-14 h-14 flex-shrink-0 flex items-center justify-center transition-colors duration-300"
                    style={{
                      border: '2px solid #0e121d',
                      color: '#0e121d',
                    }}
                  >
                    {obj.icon}
                  </div>

                  {/* Text */}
                  <div className="pt-1">
                    <div
                      className="typo-caption tracking-[0.2em] uppercase font-inter font-bold mb-1"
                      style={{ color: '#0e121d' }}
                    >
                      {obj.label}
                    </div>
                    <div
                      className="typo-copy-small font-inter"
                      style={{ color: 'var(--vharanani-charcoal-60)' }}
                    >
                      {obj.text}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── BOTTOM BAND: BURGUNDY + IMAGE ── */}
        <motion.div
          className="relative w-full h-[200px] md:h-[240px] overflow-hidden"
          style={{ background: 'var(--vharanani-burgundy)' }}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          {/* Background image */}
          <ImageWithFallback
            src={IMAGES.visionMission}
            alt="Vision and mission"
            className="w-full h-full object-cover"
          />

          {/* Burgundy overlay */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to right, var(--vharanani-burgundy) 0%, rgba(129,41,33,0.75) 40%, rgba(129,41,33,0.5) 100%)' }}
          />

          {/* Quote overlay */}
          <div className="absolute inset-0 flex items-center px-10 md:px-16 lg:px-20">
            <motion.div
              className="max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.85 }}
            >
              <div className="w-10 h-[2px] bg-white mb-4 opacity-60" />
              <p className="typo-subline font-bebas-neue uppercase tracking-wide text-white leading-snug">
                &ldquo;Building Africa&rsquo;s future through strategic vision, infrastructure excellence, and community empowerment.&rdquo;
              </p>
              <div className="w-10 h-[2px] bg-white mt-4 opacity-60" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
