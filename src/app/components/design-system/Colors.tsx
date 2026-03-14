import * as React from 'react';
import { cn } from '../ui/utils';

export const colors = {
  burgundy: {
    hex: '#892B1C',
    rgb: 'R130 G044 B080',
    cmyk: 'C031 M088 Y087 K038',
    pantone: '7622C',
    hks: '78K',
    tones: {
      100: '#892B1C',
      80: '#a4564a',
      60: '#c08178',
      40: '#dcada7',
      20: '#f7d8d5',
    }
  },
  charcoal: {
    hex: '#2C2D2D',
    rgb: 'R044 G045 B045',
    cmyk: 'C071 M061 Y057 K070',
    pantone: 'Natural Black C',
    hks: '97K',
    tones: {
      100: '#2C2D2D',
      80: '#565757',
      60: '#818181',
      40: '#ababab',
      20: '#d5d5d5',
    }
  },
  // Neutral/Background Palette
  neutral: {
    black: '#020407',
    darkest: '#161A1B',
    darker: '#202527',
    dark: '#293032',
    medium: '#394447',
    light: '#48565B',
  },
  text: '#2C2E35',
  textMuted: '#9B9C9F',
  white: '#FFFFFF',
} as const;

interface ColorSwatchProps {
  color: string;
  name: string;
  value: string;
  className?: string;
}

export function ColorSwatch({ color, name, value, className }: ColorSwatchProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <div 
        className="h-24 w-full border border-gray-200"
        style={{ backgroundColor: color }}
      />
      <div className="space-y-1">
        <p className="font-['Inter',sans-serif] font-medium text-sm text-[var(--vharanani-text)]">
          {name}
        </p>
        <p className="font-['Inter',sans-serif] font-normal text-xs text-[var(--vharanani-text-muted)] uppercase">
          {value}
        </p>
      </div>
    </div>
  );
}

interface DetailedColorSwatchProps {
  colorData: {
    hex: string;
    rgb: string;
    cmyk: string;
    pantone: string;
    hks: string;
  };
  title: string;
  subtitle: string;
  className?: string;
}

export function DetailedColorSwatch({ colorData, title, subtitle, className }: DetailedColorSwatchProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      <div 
        className="h-48 w-full"
        style={{ backgroundColor: colorData.hex }}
      />
      <div className="space-y-3 border border-gray-200 border-t-0 bg-white p-6">
        <div>
          <h3 className="font-['Bebas_Neue',sans-serif] text-[13pt] uppercase leading-[14px] text-[var(--vharanani-text)]">
            Primary Color
          </h3>
          <p className="font-['Bebas_Neue',sans-serif] text-[13pt] uppercase leading-[14px] text-[var(--vharanani-text)]">
            {title}
          </p>
          <p className="font-['Inter',sans-serif] mt-1 text-[12px] leading-[15px] text-[var(--vharanani-text)]">
            -
          </p>
        </div>
        
        <div>
          <h4 className="font-['Bebas_Neue',sans-serif] mb-2 text-[13pt] uppercase leading-[14px] text-[var(--vharanani-text)]">
            Color Codes
          </h4>
          <div className="space-y-1.5 font-['Inter',sans-serif] text-[7.2px] leading-[9px] text-[var(--vharanani-text)]">
            <div className="flex gap-2">
              <span className="w-16">CMYK</span>
              <span>:</span>
              <span>{colorData.cmyk}</span>
            </div>
            <div className="flex gap-2">
              <span className="w-16">Pantone</span>
              <span>:</span>
              <span>{colorData.pantone}</span>
            </div>
            <div className="flex gap-2">
              <span className="w-16">HKS</span>
              <span>:</span>
              <span>{colorData.hks}</span>
            </div>
            <div className="flex gap-2">
              <span className="w-16">RGB</span>
              <span>:</span>
              <span>{colorData.rgb}</span>
            </div>
            <div className="flex gap-2">
              <span className="w-16">Web</span>
              <span>:</span>
              <span className="uppercase">{colorData.hex}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ColorTonesProps {
  tones: { [key: string]: string };
  title: string;
  className?: string;
}

export function ColorTones({ tones, title, className }: ColorTonesProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <h4 className="font-['Bebas_Neue',sans-serif] text-[13pt] uppercase leading-[14px] text-[var(--vharanani-text)]">
        Color Tones
      </h4>
      <div className="flex gap-2">
        {Object.entries(tones).map(([key, value]) => (
          <div key={key} className="flex-1">
            <div 
              className="h-16 w-full"
              style={{ backgroundColor: value }}
            />
            <p className="font-['Source_Sans_Pro',sans-serif] mt-1.5 text-center text-[6px] leading-[8px] text-[var(--vharanani-text)]">
              {key} %
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

interface ColorGradientProps {
  startColor: string;
  endColor: string;
  label: string;
  className?: string;
}

export function ColorGradient({ startColor, endColor, label, className }: ColorGradientProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <h4 className="font-['Bebas_Neue',sans-serif] text-[13pt] uppercase leading-[14px] text-[var(--vharanani-text)]">
        The Gradient
      </h4>
      <div 
        className="h-12 w-full"
        style={{ 
          background: `linear-gradient(90deg, ${startColor} 0%, ${endColor} 100%)` 
        }}
      />
      <p className="font-['Source_Sans_Pro',sans-serif] text-center text-[6px] leading-[8px] text-[var(--vharanani-text)]">
        {label}
      </p>
    </div>
  );
}

export const Colors = {
  colors,
  ColorSwatch,
  DetailedColorSwatch,
  ColorTones,
  ColorGradient,
};