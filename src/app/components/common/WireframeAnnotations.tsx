// ═══════════════════════════════════════════════════════════
// WIREFRAME ANNOTATIONS — Shared label + spec components
// Used across all division layout wireframe files
// ═══════════════════════════════════════════════════════════

export function WireframeLabel({ layout, description }: { layout: string; description: string }) {
  return (
    <div className="mb-6 pb-4" style={{ borderBottom: '2px solid var(--vharanani-burgundy)' }}>
      <div className="flex items-center gap-3 mb-1">
        <div
          className="typo-caption tracking-[0.2em] uppercase px-2 py-1 font-inter"
          style={{ color: 'white', background: 'var(--vharanani-burgundy)' }}
        >
          WIREFRAME
        </div>
        <div
          className="font-bebas-neue typo-headline-small tracking-wide uppercase"
          style={{ color: 'var(--vharanani-charcoal)' }}
        >
          {layout}
        </div>
      </div>
      <div className="font-inter typo-copy-small mt-1" style={{ color: 'var(--vharanani-charcoal-60)' }}>
        {description}
      </div>
    </div>
  );
}

export function WireframeSpec({ items }: { items: string[] }) {
  return (
    <div className="mt-6 pt-4" style={{ borderTop: '1px dashed var(--vharanani-charcoal-20)' }}>
      <div className="typo-caption tracking-[0.15em] uppercase mb-2 font-inter" style={{ color: 'var(--vharanani-charcoal-60)' }}>
        LAYOUT SPEC
      </div>
      <div className="space-y-1">
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-2">
            <div className="w-1 h-1 mt-[6px] flex-shrink-0" style={{ background: 'var(--vharanani-burgundy)' }} />
            <div className="font-inter typo-meta" style={{ color: 'var(--vharanani-charcoal-60)' }}>{item}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
