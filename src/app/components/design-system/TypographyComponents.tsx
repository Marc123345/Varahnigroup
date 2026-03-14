import React from 'react';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  as?: keyof JSX.IntrinsicElements;
}

/* ── Display / Hero — Bebas Neue Bold, 64px/64px ── */
export function Header({ children, className = '', style = {}, as: Tag = 'div' }: TypographyProps) {
  return (
    <Tag
      className={`font-bebas-neue ${className}`}
      style={{
        fontSize: 'var(--typo-header-size)',
        lineHeight: 'var(--typo-header-line-height)',
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}

/* ── Major Headlines — Bebas Neue Bold, 48px/52px ── */
export function HeadlineBig({ children, className = '', style = {}, as: Tag = 'div' }: TypographyProps) {
  return (
    <Tag
      className={`font-bebas-neue ${className}`}
      style={{
        fontSize: 'var(--typo-headline-big-size)',
        lineHeight: 'var(--typo-headline-big-line-height)',
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}

/* ── Section Headers — Bebas Neue Bold, 27px/32px ── */
export function Subline({ children, className = '', style = {}, as: Tag = 'div' }: TypographyProps) {
  return (
    <Tag
      className={`font-bebas-neue ${className}`}
      style={{
        fontSize: 'var(--typo-subline-size)',
        lineHeight: 'var(--typo-subline-line-height)',
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}

/* ── Nav / Buttons / Small Titles — Bebas Neue Book, 17px/20px ── */
export function HeadlineSmall({ children, className = '', style = {}, as: Tag = 'div' }: TypographyProps) {
  return (
    <Tag
      className={`font-bebas-neue ${className}`}
      style={{
        fontSize: 'var(--typo-headline-small-size)',
        lineHeight: 'var(--typo-headline-small-line-height)',
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}

/* ── Primary Body Copy — Inter Regular, 15px/26px ── */
export function CopyText({ children, className = '', style = {}, as: Tag = 'div' }: TypographyProps) {
  return (
    <Tag
      className={`font-inter ${className}`}
      style={{
        fontSize: 'var(--typo-copy-size)',
        lineHeight: 'var(--typo-copy-line-height)',
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}

/* ── Secondary Body Text — Inter Regular, 14px/24px ── */
export function CopySmall({ children, className = '', style = {}, as: Tag = 'div' }: TypographyProps) {
  return (
    <Tag
      className={`font-inter ${className}`}
      style={{
        fontSize: 'var(--typo-copy-small-size)',
        lineHeight: 'var(--typo-copy-small-line-height)',
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}

/* ── Labels / Tags — Inter Regular, 11px/16px ── */
export function LabelText({ children, className = '', style = {}, as: Tag = 'div' }: TypographyProps) {
  return (
    <Tag
      className={`font-inter ${className}`}
      style={{
        fontSize: 'var(--typo-label-size)',
        lineHeight: 'var(--typo-label-line-height)',
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}

/* ── Small Labels / Categories — Inter Regular, 10px/14px ── */
export function CaptionText({ children, className = '', style = {}, as: Tag = 'div' }: TypographyProps) {
  return (
    <Tag
      className={`font-inter ${className}`}
      style={{
        fontSize: 'var(--typo-caption-size)',
        lineHeight: 'var(--typo-caption-line-height)',
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}

/* ── Tiny Metadata — Inter Regular, 9px/14px ── */
export function MetaText({ children, className = '', style = {}, as: Tag = 'div' }: TypographyProps) {
  return (
    <Tag
      className={`font-inter ${className}`}
      style={{
        fontSize: 'var(--typo-meta-size)',
        lineHeight: 'var(--typo-meta-line-height)',
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}
