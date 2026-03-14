import * as React from 'react';
import { Monitor, Tablet, Smartphone, Grid3x3 } from 'lucide-react';
import { 
  CaptionText, 
  CopyText, 
  HeadlineSmall, 
  Subline, 
  HeadlineBig 
} from './Typography';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { useResponsive, BREAKPOINTS } from '../../hooks/useResponsive';
import { ResponsiveGuide } from '../property/ResponsiveGuide';

export function ResponsiveGuidelines() {
  const { breakpoint, windowWidth, isMobile, isTablet, isDesktop } = useResponsive();

  return (
    <div className="space-y-12">
      <div>
        <HeadlineBig className="mb-4">Responsive Guidelines</HeadlineBig>
        <CopyText className="text-[var(--vharanani-text-muted)]">
          Comprehensive responsive design system with breakpoints, grid layouts, and mobile-first principles
        </CopyText>
      </div>

      {/* Current Viewport Info */}
      <Card className="border-2 border-[var(--vharanani-burgundy)]">
        <CardHeader>
          <CardTitle>
            <HeadlineSmall as="span">Current Viewport</HeadlineSmall>
          </CardTitle>
          <CardDescription>
            <CaptionText as="span">Live viewport information and responsive state</CaptionText>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-2">
              <CaptionText className="text-[var(--vharanani-text-muted)] uppercase">
                Breakpoint
              </CaptionText>
              <div className="flex items-center gap-2">
                {isMobile && <Smartphone className="w-5 h-5 text-[var(--vharanani-burgundy)]" />}
                {isTablet && <Tablet className="w-5 h-5 text-[var(--vharanani-burgundy)]" />}
                {isDesktop && <Monitor className="w-5 h-5 text-[var(--vharanani-burgundy)]" />}
                <HeadlineSmall className="text-[var(--vharanani-burgundy)] capitalize">
                  {breakpoint}
                </HeadlineSmall>
              </div>
            </div>
            <div className="space-y-2">
              <CaptionText className="text-[var(--vharanani-text-muted)] uppercase">
                Width
              </CaptionText>
              <HeadlineSmall>{windowWidth}px</HeadlineSmall>
            </div>
            <div className="space-y-2">
              <CaptionText className="text-[var(--vharanani-text-muted)] uppercase">
                Device Type
              </CaptionText>
              <HeadlineSmall>
                {isMobile ? 'Mobile' : isTablet ? 'Tablet' : 'Desktop'}
              </HeadlineSmall>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Breakpoints System */}
      <section>
        <Subline className="mb-6">Breakpoint System</Subline>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(BREAKPOINTS).map(([name, width]) => {
            const isActive = breakpoint === name;
            return (
              <Card 
                key={name}
                className={`transition-all ${
                  isActive 
                    ? 'border-2 border-[var(--vharanani-burgundy)] bg-[var(--vharanani-burgundy-20)]' 
                    : 'border-[var(--vharanani-charcoal-20)]'
                }`}
              >
                <CardHeader>
                  <CardTitle>
                    <HeadlineSmall as="span" className={isActive ? 'text-[var(--vharanani-burgundy)]' : ''}>
                      {name}
                    </HeadlineSmall>
                  </CardTitle>
                  <CardDescription>
                    <CaptionText as="span" className={isActive ? 'text-[var(--vharanani-burgundy)]' : 'text-[var(--vharanani-text-muted)]'}>
                      {width}px and up
                    </CaptionText>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CopyText>
                    {name === 'mobile' && 'Smartphones and small devices'}
                    {name === 'tablet' && 'Tablets and medium devices'}
                    {name === 'desktop' && 'Desktop computers and laptops'}
                    {name === 'wide' && 'Large desktop displays'}
                    {name === 'ultrawide' && 'Extra large displays'}
                  </CopyText>
                  {isActive && (
                    <div className="mt-3 inline-flex items-center gap-2 bg-[var(--vharanani-burgundy)] px-3 py-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                      <CaptionText className="text-white uppercase">Active</CaptionText>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Grid Columns per Breakpoint */}
      <section>
        <Subline className="mb-6">Responsive Grid System</Subline>
        <Card>
          <CardHeader>
            <CardTitle>
              <HeadlineSmall as="span">Column Distribution</HeadlineSmall>
            </CardTitle>
            <CardDescription>
              <CaptionText as="span">Recommended grid columns for each breakpoint</CaptionText>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="p-4 border-l-4 border-[var(--vharanani-burgundy)] bg-[var(--vharanani-charcoal-20)]">
                  <div className="flex items-center gap-2 mb-2">
                    <Smartphone className="w-4 h-4 text-[var(--vharanani-burgundy)]" />
                    <HeadlineSmall className="text-[var(--vharanani-burgundy)]">Mobile</HeadlineSmall>
                  </div>
                  <CopyText>1 column layout</CopyText>
                  <CaptionText className="text-[var(--vharanani-text-muted)] mt-2">
                    Stack content vertically for optimal mobile reading
                  </CaptionText>
                </div>

                <div className="p-4 border-l-4 border-[var(--vharanani-burgundy)] bg-[var(--vharanani-charcoal-20)]">
                  <div className="flex items-center gap-2 mb-2">
                    <Tablet className="w-4 h-4 text-[var(--vharanani-burgundy)]" />
                    <HeadlineSmall className="text-[var(--vharanani-burgundy)]">Tablet</HeadlineSmall>
                  </div>
                  <CopyText>2 column layout</CopyText>
                  <CaptionText className="text-[var(--vharanani-text-muted)] mt-2">
                    Utilize medium screen space with dual columns
                  </CaptionText>
                </div>

                <div className="p-4 border-l-4 border-[var(--vharanani-burgundy)] bg-[var(--vharanani-charcoal-20)]">
                  <div className="flex items-center gap-2 mb-2">
                    <Monitor className="w-4 h-4 text-[var(--vharanani-burgundy)]" />
                    <HeadlineSmall className="text-[var(--vharanani-burgundy)]">Desktop</HeadlineSmall>
                  </div>
                  <CopyText>3-4 column layout</CopyText>
                  <CaptionText className="text-[var(--vharanani-text-muted)] mt-2">
                    Maximize screen real estate with multiple columns
                  </CaptionText>
                </div>
              </div>

              {/* Visual Grid Examples */}
              <div className="space-y-4 mt-8">
                <HeadlineSmall>Visual Grid Examples</HeadlineSmall>
                
                {/* Mobile Grid */}
                <div>
                  <CaptionText className="mb-2 text-[var(--vharanani-text-muted)] uppercase">
                    Mobile Grid (1 Column)
                  </CaptionText>
                  <div className="grid grid-cols-1 gap-2">
                    <div className="h-12 bg-[var(--vharanani-burgundy-40)] border-2 border-[var(--vharanani-burgundy)]"></div>
                  </div>
                </div>

                {/* Tablet Grid */}
                <div>
                  <CaptionText className="mb-2 text-[var(--vharanani-text-muted)] uppercase">
                    Tablet Grid (2 Columns)
                  </CaptionText>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-12 bg-[var(--vharanani-burgundy-40)] border-2 border-[var(--vharanani-burgundy)]"></div>
                    <div className="h-12 bg-[var(--vharanani-burgundy-40)] border-2 border-[var(--vharanani-burgundy)]"></div>
                  </div>
                </div>

                {/* Desktop Grid */}
                <div>
                  <CaptionText className="mb-2 text-[var(--vharanani-text-muted)] uppercase">
                    Desktop Grid (3 Columns)
                  </CaptionText>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-12 bg-[var(--vharanani-burgundy-40)] border-2 border-[var(--vharanani-burgundy)]"></div>
                    <div className="h-12 bg-[var(--vharanani-burgundy-40)] border-2 border-[var(--vharanani-burgundy)]"></div>
                    <div className="h-12 bg-[var(--vharanani-burgundy-40)] border-2 border-[var(--vharanani-burgundy)]"></div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Typography Scaling */}
      <section>
        <Subline className="mb-6">Typography Scaling</Subline>
        <Card>
          <CardHeader>
            <CardTitle>
              <HeadlineSmall as="span">Responsive Font Sizes</HeadlineSmall>
            </CardTitle>
            <CardDescription>
              <CaptionText as="span">Typography adjusts based on viewport size</CaptionText>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-[var(--vharanani-charcoal-20)]">
                <CaptionText className="mb-2 text-[var(--vharanani-text-muted)] uppercase">
                  Mobile Typography
                </CaptionText>
                <CopyText>
                  • Headers: Reduce by 20-30%<br />
                  • Body text: Maintain readability at 8-10pt<br />
                  • Line height: Increase for better mobile reading<br />
                  • Letter spacing: Optimize for small screens
                </CopyText>
              </div>

              <div className="p-4 bg-[var(--vharanani-charcoal-20)]">
                <CaptionText className="mb-2 text-[var(--vharanani-text-muted)] uppercase">
                  Desktop Typography
                </CaptionText>
                <CopyText>
                  • Headers: Full size (40-50pt)<br />
                  • Body text: Standard sizing (8pt)<br />
                  • Line height: Balanced for large displays<br />
                  • Letter spacing: As per brand guidelines
                </CopyText>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Mobile-First Principles */}
      <section>
        <Subline className="mb-6">Mobile-First Design Principles</Subline>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>
                <HeadlineSmall as="span">Core Principles</HeadlineSmall>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-1 bg-[var(--vharanani-burgundy)] flex-shrink-0"></div>
                  <div>
                    <HeadlineSmall className="mb-1">Touch-Friendly</HeadlineSmall>
                    <CopyText>Minimum 44×44px touch targets for interactive elements</CopyText>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-1 bg-[var(--vharanani-burgundy)] flex-shrink-0"></div>
                  <div>
                    <HeadlineSmall className="mb-1">Performance</HeadlineSmall>
                    <CopyText>Optimize images and assets for mobile bandwidth</CopyText>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-1 bg-[var(--vharanani-burgundy)] flex-shrink-0"></div>
                  <div>
                    <HeadlineSmall className="mb-1">Progressive Enhancement</HeadlineSmall>
                    <CopyText>Start with mobile, enhance for larger screens</CopyText>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>
                <HeadlineSmall as="span">Spacing Guidelines</HeadlineSmall>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <CaptionText className="text-[var(--vharanani-text-muted)] uppercase mb-1">
                    Mobile Spacing
                  </CaptionText>
                  <CopyText>Padding: 16-24px | Gaps: 12-16px</CopyText>
                </div>
                <div>
                  <CaptionText className="text-[var(--vharanani-text-muted)] uppercase mb-1">
                    Tablet Spacing
                  </CaptionText>
                  <CopyText>Padding: 24-32px | Gaps: 16-24px</CopyText>
                </div>
                <div>
                  <CaptionText className="text-[var(--vharanani-text-muted)] uppercase mb-1">
                    Desktop Spacing
                  </CaptionText>
                  <CopyText>Padding: 32-48px | Gaps: 24-32px</CopyText>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Live Responsive Guide */}
      <section>
        <Subline className="mb-6">Live Responsive Guide</Subline>
        <Card className="bg-gradient-to-br from-[var(--vharanani-charcoal)] to-[var(--vharanani-burgundy)] text-white">
          <CardHeader>
            <CardTitle>
              <HeadlineSmall as="span" className="text-white">Interactive Viewport Tracker</HeadlineSmall>
            </CardTitle>
            <CardDescription>
              <CaptionText as="span" className="text-white/80">
                A floating guide shows in the bottom-right corner of the screen
              </CaptionText>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CopyText className="text-white/90">
              The responsive guide component is always visible and provides real-time information about 
              the current viewport size, active breakpoint, and visual scale indicators. 
              Use this tool while developing to ensure your designs adapt correctly across all devices.
            </CopyText>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
