import * as React from 'react';
import { cn } from '../ui/utils';

function GridDemo({ columns }: { columns: number }) {
  const gridCols = `grid-cols-${columns}`;
  const items = Array.from({ length: columns }, (_, i) => i + 1);
  
  return (
    <div className={cn('grid gap-4', gridCols)}>
      {items.map((item) => (
        <div 
          key={item}
          className="bg-[#822C1E]/10 border border-[#822C1E] h-20 flex items-center justify-center"
        >
          <span 
            className="text-[#822C1E]"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '8px', fontWeight: 600 }}
          >
            {item}
          </span>
        </div>
      ))}
    </div>
  );
}

export function GridSystemShowcase() {
  return (
    <div className="space-y-12">
      {/* 12 Column Grid */}
      <div>
        <h3 
          className="mb-4 text-[#822C1E]"
          style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '20px', fontWeight: 400 }}
        >
          12 Column Grid
        </h3>
        <p 
          className="mb-6 text-[#2C2D2D]"
          style={{ fontFamily: 'Inter, sans-serif', fontSize: '8px', fontWeight: 400 }}
        >
          Standard 12-column grid system for flexible layouts
        </p>
        <GridDemo columns={12} />
      </div>

      {/* 6 Column Grid */}
      <div>
        <h3 
          className="mb-4 text-[#822C1E]"
          style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '20px', fontWeight: 400 }}
        >
          6 Column Grid
        </h3>
        <p 
          className="mb-6 text-[#2C2D2D]"
          style={{ fontFamily: 'Inter, sans-serif', fontSize: '8px', fontWeight: 400 }}
        >
          Half-width columns for balanced content sections
        </p>
        <GridDemo columns={6} />
      </div>

      {/* 4 Column Grid */}
      <div>
        <h3 
          className="mb-4 text-[#822C1E]"
          style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '20px', fontWeight: 400 }}
        >
          4 Column Grid
        </h3>
        <p 
          className="mb-6 text-[#2C2D2D]"
          style={{ fontFamily: 'Inter, sans-serif', fontSize: '8px', fontWeight: 400 }}
        >
          Quarter-width columns ideal for card layouts
        </p>
        <GridDemo columns={4} />
      </div>

      {/* 3 Column Grid */}
      <div>
        <h3 
          className="mb-4 text-[#822C1E]"
          style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '20px', fontWeight: 400 }}
        >
          3 Column Grid
        </h3>
        <p 
          className="mb-6 text-[#2C2D2D]"
          style={{ fontFamily: 'Inter, sans-serif', fontSize: '8px', fontWeight: 400 }}
        >
          Third-width columns for feature showcases
        </p>
        <GridDemo columns={3} />
      </div>

      {/* 2 Column Grid */}
      <div>
        <h3 
          className="mb-4 text-[#822C1E]"
          style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '20px', fontWeight: 400 }}
        >
          2 Column Grid
        </h3>
        <p 
          className="mb-6 text-[#2C2D2D]"
          style={{ fontFamily: 'Inter, sans-serif', fontSize: '8px', fontWeight: 400 }}
        >
          Split layout for content and media
        </p>
        <GridDemo columns={2} />
      </div>

      {/* Spacing System */}
      <div>
        <h3 
          className="mb-4 text-[#822C1E]"
          style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '20px', fontWeight: 400 }}
        >
          Spacing Scale
        </h3>
        <p 
          className="mb-6 text-[#2C2D2D]"
          style={{ fontFamily: 'Inter, sans-serif', fontSize: '8px', fontWeight: 400 }}
        >
          Consistent spacing values for padding, margins, and gaps
        </p>
        <div className="space-y-4">
          {[
            { name: 'xs', value: '0.25rem', px: '4px' },
            { name: 'sm', value: '0.5rem', px: '8px' },
            { name: 'md', value: '1rem', px: '16px' },
            { name: 'lg', value: '1.5rem', px: '24px' },
            { name: 'xl', value: '2rem', px: '32px' },
            { name: '2xl', value: '3rem', px: '48px' },
            { name: '3xl', value: '4rem', px: '64px' },
          ].map(({ name, value, px }) => (
            <div key={name} className="flex items-center gap-4">
              <div 
                className="w-32 text-[#2C2D2D]"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '8px', fontWeight: 600 }}
              >
                {name.toUpperCase()}
              </div>
              <div 
                className="bg-[#822C1E]" 
                style={{ width: value, height: '24px' }}
              />
              <div 
                className="text-[#2C2D2D]"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '8px', fontWeight: 400 }}
              >
                {value} ({px})
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Layout Examples */}
      <div>
        <h3 
          className="mb-4 text-[#822C1E]"
          style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '20px', fontWeight: 400 }}
        >
          Layout Patterns
        </h3>
        
        {/* Asymmetric Grid */}
        <div className="mb-8">
          <p 
            className="mb-4 text-[#2C2D2D]"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '8px', fontWeight: 400 }}
          >
            Asymmetric Layout (8-4 split)
          </p>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-8 bg-[#822C1E] h-32 flex items-center justify-center text-white">
              Main Content (8 cols)
            </div>
            <div className="col-span-4 bg-[#2C2D2D] h-32 flex items-center justify-center text-white">
              Sidebar (4 cols)
            </div>
          </div>
        </div>

        {/* Nested Grid */}
        <div>
          <p 
            className="mb-4 text-[#2C2D2D]"
            style={{ fontFamily: 'Inter, sans-serif', fontSize: '8px', fontWeight: 400 }}
          >
            Nested Grid Layout
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#822C1E] p-4">
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-white/20 h-20" />
                <div className="bg-white/20 h-20" />
                <div className="bg-white/20 h-20" />
                <div className="bg-white/20 h-20" />
              </div>
            </div>
            <div className="bg-[#2C2D2D] p-4">
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-white/20 h-20" />
                <div className="bg-white/20 h-20" />
                <div className="bg-white/20 h-20" />
                <div className="bg-white/20 h-20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}