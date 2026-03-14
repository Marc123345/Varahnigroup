// ═══════════════════════════════════════════════════════════
// IMAGE PLACEHOLDER — Wireframe stand-in for branded images
// Displays dashed cross lines + icon + label
// Accepts className for positioning (e.g. "absolute inset-0")
// ═══════════════════════════════════════════════════════════

interface ImagePlaceholderProps {
  label: string;
  aspectClass?: string;
  className?: string;
}

export function ImagePlaceholder({ label, aspectClass = 'h-full', className = '' }: ImagePlaceholderProps) {
  return (
    <div
      className={`${className || `relative w-full ${aspectClass}`} flex flex-col items-center justify-center overflow-hidden`}
      style={{ background: '#e8e8e8' }}
    >
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <line x1="0" y1="0" x2="100%" y2="100%" stroke="#ccc" strokeWidth="1" />
        <line x1="100%" y1="0" x2="0" y2="100%" stroke="#ccc" strokeWidth="1" />
      </svg>
      <div className="relative z-10 flex flex-col items-center gap-2">
        <div className="w-10 h-10 flex items-center justify-center" style={{ border: '1.5px solid #aaa' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="0" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
        </div>
        <span className="font-inter typo-meta tracking-[0.15em] uppercase" style={{ color: '#999' }}>{label}</span>
      </div>
    </div>
  );
}
