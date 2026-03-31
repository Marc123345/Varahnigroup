import { useState, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { ImageWithFallback } from '../ui/ImageWithFallback';

const FAQ_IMAGE = 'https://vharananiproperties.co.za/wp-content/uploads/2021/06/hq.png';

const FAQS = [
  {
    question: 'What sectors does Vharanani Group operate in?',
    answer: 'Vharanani Group operates across infrastructure development, property development, construction, facilities management, and social impact through four divisions: Vharanani Properties, DMFT Property Developers, The David Mabilu Foundation, and the Group holding company.',
  },
  {
    question: 'What is the CIDB grading of Vharanani Properties?',
    answer: 'Vharanani Properties holds the highest CIDB grading — Grade 9GB for General Building Works and Grade 9CE for Civil Engineering — allowing the company to undertake projects of unlimited value across South Africa.',
  },
  {
    question: 'Is Vharanani Group B-BBEE compliant?',
    answer: 'Yes, Vharanani Group is a 100% Black-owned company and holds B-BBEE Level 1 status — the highest contributor level under the Broad-Based Black Economic Empowerment framework.',
  },
  {
    question: 'What is the David Mabilu Foundation?',
    answer: 'The David Mabilu Foundation (DMF) is a social development organisation founded by David Mabilu. It is committed to reducing poverty through education scholarships, housing initiatives, community upliftment programmes, and entrepreneurial development across South Africa.',
  },
  {
    question: 'Where are Vharanani Group\'s offices located?',
    answer: 'Vharanani Group\'s head office is at 18 Hume Road, Dunkeld West, Johannesburg 2196. The group also has a regional office at 3a Schoeman Street, Polokwane 0699, and operates across all 9 provinces of South Africa.',
  },
];

export function VharananiGroupFAQ(): ReactNode {
  const [openIndex, setOpenIndex] = useState<number>(1);

  return (
    <section className="relative overflow-hidden" style={{ background: '#f3f3f5' }}>

      {/* Ghost text — decorative */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <span
          className="absolute font-bebas-neue"
          style={{
            top: 30,
            left: 'calc(50% - 280px)',
            fontSize: 100,
            letterSpacing: '0.5px',
            lineHeight: '108px',
            WebkitTextStroke: '1px rgba(0,0,0,0.06)',
            color: 'transparent',
            transform: 'rotate(33.9deg)',
            transformOrigin: '0 0',
          }}
        >
          FAQS
        </span>
        <span
          className="absolute font-bebas-neue"
          style={{
            top: 193,
            left: 'calc(50% - 656px)',
            fontSize: 100,
            letterSpacing: '0.5px',
            lineHeight: '108px',
            WebkitTextStroke: '1px rgba(0,0,0,0.06)',
            color: 'transparent',
            transform: 'rotate(-35.2deg)',
            transformOrigin: '0 0',
          }}
        >
          A FEW
        </span>
      </div>

      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.5]" style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* ── LEFT — IMAGE BLOCK ── */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative" style={{ paddingTop: '120%' }}>
              {/* Background shape */}
              <div
                className="absolute"
                style={{
                  top: '3%',
                  left: '15%',
                  right: 0,
                  bottom: '3%',
                  background: 'var(--vharanani-burgundy)',
                  opacity: 0.15,
                  clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0% 100%)',
                }}
              />
              {/* Main image */}
              <div className="absolute" style={{ top: '2%', left: '17%', right: '2%', bottom: '2%' }}>
                <ImageWithFallback
                  src={FAQ_IMAGE}
                  alt="Vharanani Group headquarters"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* "Since" badge */}
              <div
                className="absolute flex flex-col items-center justify-center"
                style={{
                  left: 0,
                  top: 'calc(50% + 32px)',
                  width: 140,
                  height: 140,
                  background: 'var(--vharanani-burgundy)',
                }}
              >
                <span className="font-inter typo-meta tracking-[0.2em] uppercase" style={{ color: 'rgba(255,255,255,0.8)' }}>Since</span>
                <span className="font-bebas-neue text-white" style={{ fontSize: 48, lineHeight: 1 }}>2001</span>
              </div>
            </div>
          </div>

          {/* ── RIGHT — CONTENT + FAQ ACCORDION ── */}
          <div className="lg:col-span-7">

            {/* Heading */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center">
                  <div className="w-6 h-[1px]" style={{ background: 'var(--vharanani-burgundy)' }} />
                  <div className="w-4 h-4 rounded-full" style={{ border: '1px solid var(--vharanani-burgundy)' }} />
                </div>
                <span
                  className="font-inter tracking-[0.5px]"
                  style={{ fontSize: 18, fontWeight: 600, lineHeight: '26px', color: 'var(--vharanani-burgundy)' }}
                >
                  A FEW FAQS
                </span>
              </div>
              <h2
                className="font-bebas-neue uppercase mb-4"
                style={{ fontSize: 'clamp(32px, 4vw, 48px)', letterSpacing: '0.5px', lineHeight: '56px', color: 'var(--vharanani-charcoal)' }}
              >
                Your Questions About Vharanani, Answered
              </h2>
              <p className="font-inter" style={{ fontSize: 16, lineHeight: '24px', color: 'var(--vharanani-charcoal-60)', maxWidth: 600 }}>
                We provide expert construction, property development, and social impact services — here are answers to the questions we hear most often.
              </p>
            </div>

            {/* FAQ Accordion */}
            <div className="flex flex-col gap-5">
              {FAQS.map((faq, i) => {
                const isOpen = openIndex === i;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? -1 : i)}
                      className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left transition-colors duration-200"
                      style={{
                        background: isOpen ? 'rgba(129,41,33,0.08)' : 'white',
                        border: isOpen ? '1px solid rgba(129,41,33,0.25)' : '1px solid var(--vharanani-charcoal-20)',
                      }}
                    >
                      <span
                        className="font-inter"
                        style={{ fontSize: 18, fontWeight: 600, letterSpacing: '0.5px', lineHeight: '28px', color: 'var(--vharanani-charcoal)' }}
                      >
                        {faq.question}
                      </span>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        <ChevronDown size={20} style={{ color: isOpen ? 'var(--vharanani-burgundy)' : 'var(--vharanani-charcoal-40)' }} />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pt-3 pb-1">
                            <p className="font-inter" style={{ fontSize: 16, lineHeight: '24px', color: 'var(--vharanani-charcoal-60)' }}>
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
