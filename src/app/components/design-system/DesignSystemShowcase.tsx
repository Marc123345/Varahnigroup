import * as React from 'react';
import { 
  CaptionText, 
  CopyText, 
  HeadlineSmall, 
  Subline, 
  HeadlineBig, 
  Header,
  SectionHeading 
} from './Typography';
import { ColorSwatch, DetailedColorSwatch, ColorTones, ColorGradient, colors } from './Colors';
import { BrandCard, BrandCardLarge } from './BrandCard';
import { DiamondShape, DiamondBackground, DiamondPattern } from './DiamondShape';
import { GridSystemShowcase } from './GridSystem';
import { UIComponentsShowcase } from './UIComponents';
import { LayoutConcepts } from './LayoutConcepts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Separator } from '../ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { ComponentShowcase } from './ComponentShowcase';
import { ResponsiveGuidelines } from './ResponsiveGuidelines';
import { ResponsiveGuide } from '../property/ResponsiveGuide';
import { HeroSectionsShowcase } from './HeroSections';

export function DesignSystemShowcase() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="border-b border-gray-200 bg-white px-8 py-12">
        <div className="mx-auto max-w-7xl">
          <Header className="mb-4">Vharanani Properties</Header>
          <Subline className="text-[var(--vharanani-primary)]">Brand Design System</Subline>
          <CopyText className="mt-6 max-w-2xl">
            A comprehensive design system showcasing typography, colors, and components 
            for the Vharanani Properties brand identity.
          </CopyText>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-8 py-12">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="mb-8 grid w-full max-w-4xl grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="components">Components</TabsTrigger>
            <TabsTrigger value="layouts">Layouts</TabsTrigger>
            <TabsTrigger value="responsive">Responsive</TabsTrigger>
            <TabsTrigger value="hero">Hero</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-16">
            {/* Brand Cards Section */}
            <section>
              <div className="mb-8">
                <HeadlineBig className="mb-2">Brand Identity</HeadlineBig>
                <CopyText className="text-[var(--vharanani-text-muted)]">
                  Geometric visual elements that represent the Vharanani Properties brand.
                </CopyText>
              </div>

              {/* Diamond Shapes */}
              <div className="mb-8">
                <HeadlineSmall className="mb-4">Diamond Shape Element</HeadlineSmall>
                <div className="grid gap-8 md:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <CardTitle>
                        <CaptionText as="span">Default Diamond</CaptionText>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center justify-center py-8">
                      <DiamondShape size="sm" color="#822C1E" variant="default" />
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>
                        <CaptionText as="span">Tall Diamond</CaptionText>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center justify-center py-8">
                      <DiamondShape size="sm" color="#822C1E" variant="tall" />
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>
                        <CaptionText as="span">Wide Diamond</CaptionText>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center justify-center py-8">
                      <DiamondShape size="sm" color="#822C1E" variant="wide" />
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Diamond Background Examples */}
              <div className="mb-8">
                <HeadlineSmall className="mb-4">Diamond Background Applications</HeadlineSmall>
                <div className="grid gap-8 md:grid-cols-2">
                  <Card className="overflow-hidden">
                    <CardHeader>
                      <CardTitle>
                        <CaptionText as="span">Top Right Position</CaptionText>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="relative min-h-[200px] bg-white">
                      <DiamondBackground position="top-right" color="#822C1E" opacity={0.1} />
                      <div className="relative z-10 p-4">
                        <HeadlineSmall className="mb-2">Content Area</HeadlineSmall>
                        <CopyText>
                          The diamond shape serves as a subtle background element, 
                          adding visual interest without overwhelming the content.
                        </CopyText>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden">
                    <CardHeader>
                      <CardTitle>
                        <CaptionText as="span">Bottom Left Position</CaptionText>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="relative min-h-[200px] bg-white">
                      <DiamondBackground position="bottom-left" color="#2C2D2D" opacity={0.08} />
                      <div className="relative z-10 p-4">
                        <HeadlineSmall className="mb-2">Charcoal Variant</HeadlineSmall>
                        <CopyText>
                          The shape can be used with different brand colors to create 
                          visual variety while maintaining brand consistency.
                        </CopyText>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Brand Cards */}
              <HeadlineSmall className="mb-4">Brand Cards</HeadlineSmall>
              <div className="grid gap-8 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>
                      <HeadlineSmall as="span">Brand Card - Burgundy</HeadlineSmall>
                    </CardTitle>
                    <CardDescription>
                      <CaptionText as="span">Primary brand visual element</CaptionText>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-center py-8">
                    <BrandCard variant="burgundy" />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>
                      <HeadlineSmall as="span">Brand Card - Charcoal</HeadlineSmall>
                    </CardTitle>
                    <CardDescription>
                      <CaptionText as="span">Alternative brand visual element</CaptionText>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-center py-8">
                    <BrandCard variant="charcoal" />
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle>
                      <HeadlineSmall as="span">Large Format Application</HeadlineSmall>
                    </CardTitle>
                    <CardDescription>
                      <CaptionText as="span">Scaled for headers and hero sections</CaptionText>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="py-8">
                    <BrandCardLarge />
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Color System Section */}
            <section>
              <div className="mb-8">
                <HeadlineBig className="mb-2">Primary Color System</HeadlineBig>
                <CopyText className="mb-4 text-[var(--vharanani-text-muted)]">
                  Vharanani Properties has three official colors: Burgundy, Charcoal Black and White. 
                  These colors have become a recognizable identifier for the company.
                </CopyText>
                <div className="space-y-2">
                  <div>
                    <span className="font-['Inter',sans-serif] text-[7.8px] font-bold leading-[10px] text-[var(--vharanani-text)]">
                      Usage:
                    </span>
                    <span className="font-['Inter',sans-serif] ml-2 text-[8.2px] leading-[10px] text-[var(--vharanani-text)]">
                      Use them as the dominant color palette for all internal and external visual presentations of the company.
                    </span>
                  </div>
                  <div>
                    <span className="font-['Inter',sans-serif] text-[7.8px] font-bold leading-[10px] text-[var(--vharanani-text)]">
                      Explanation:
                    </span>
                    <span className="font-['Inter',sans-serif] ml-2 text-[8.2px] leading-[11px] text-[var(--vharanani-text)]">
                      These colors work together to create a professional and trustworthy brand identity.
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid gap-8 lg:grid-cols-2">
                <DetailedColorSwatch 
                  colorData={colors.burgundy}
                  title="Burgundy"
                  subtitle="Primary brand color"
                />
                <DetailedColorSwatch 
                  colorData={colors.charcoal}
                  title="Charcoal Black"
                  subtitle="Primary text and contrast"
                />
              </div>

              {/* Color Tones */}
              <div className="mt-12 grid gap-8 lg:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>
                      <HeadlineSmall as="span">Burgundy Tones</HeadlineSmall>
                    </CardTitle>
                    <CardDescription>
                      <CaptionText as="span">Opacity variations for depth and hierarchy</CaptionText>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ColorTones tones={colors.burgundy.tones} title="Burgundy" />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>
                      <HeadlineSmall as="span">Charcoal Tones</HeadlineSmall>
                    </CardTitle>
                    <CardDescription>
                      <CaptionText as="span">Opacity variations for depth and hierarchy</CaptionText>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ColorTones tones={colors.charcoal.tones} title="Charcoal" />
                  </CardContent>
                </Card>
              </div>

              {/* Gradients */}
              <div className="mt-8 grid gap-8 lg:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>
                      <HeadlineSmall as="span">Burgundy Gradient</HeadlineSmall>
                    </CardTitle>
                    <CardDescription>
                      <CaptionText as="span">For backgrounds and overlays</CaptionText>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ColorGradient 
                      startColor={colors.burgundy.tones[20]}
                      endColor={colors.burgundy.hex}
                      label="Burgundy Gradient"
                    />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>
                      <HeadlineSmall as="span">Black Gradient</HeadlineSmall>
                    </CardTitle>
                    <CardDescription>
                      <CaptionText as="span">For backgrounds and overlays</CaptionText>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ColorGradient 
                      startColor={colors.charcoal.tones[20]}
                      endColor={colors.charcoal.hex}
                      label="Black Gradient"
                    />
                  </CardContent>
                </Card>
              </div>

              {/* Neutral/Background Palette */}
              <div className="mt-12">
                <Card>
                  <CardHeader>
                    <CardTitle>
                      <HeadlineSmall as="span">Neutral Background Palette</HeadlineSmall>
                    </CardTitle>
                    <CardDescription>
                      <CaptionText as="span">Dark backgrounds and surface colors for depth</CaptionText>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      <ColorSwatch 
                        color={colors.neutral.black}
                        name="Black"
                        value="#020407"
                      />
                      <ColorSwatch 
                        color={colors.neutral.darkest}
                        name="Darkest"
                        value="#161A1B"
                      />
                      <ColorSwatch 
                        color={colors.neutral.darker}
                        name="Darker"
                        value="#202527"
                      />
                      <ColorSwatch 
                        color={colors.neutral.dark}
                        name="Dark"
                        value="#293032"
                      />
                      <ColorSwatch 
                        color={colors.neutral.medium}
                        name="Medium"
                        value="#394447"
                      />
                      <ColorSwatch 
                        color={colors.neutral.light}
                        name="Light"
                        value="#48565B"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Supporting Colors */}
              <div className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle>
                      <HeadlineSmall as="span">Text & Supporting Colors</HeadlineSmall>
                    </CardTitle>
                    <CardDescription>
                      <CaptionText as="span">Text and background colors for UI elements</CaptionText>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      <ColorSwatch 
                        color={colors.text}
                        name="Text"
                        value="#2C2E35"
                      />
                      <ColorSwatch 
                        color={colors.textMuted}
                        name="Text Muted"
                        value="#9B9C9F"
                      />
                      <ColorSwatch 
                        color={colors.white}
                        name="White"
                        value="#FFFFFF"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Typography Section */}
            <section>
              <div className="mb-8">
                <HeadlineBig className="mb-2">Typography</HeadlineBig>
                <CopyText className="text-[var(--vharanani-text-muted)]">
                  The Vharanani type system uses Bebas Neue for headlines and Inter for body text.
                </CopyText>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                {/* Headers and Headlines */}
                <Card>
                  <CardHeader>
                    <CardTitle>
                      <HeadlineSmall as="span">Headers & Headlines</HeadlineSmall>
                    </CardTitle>
                    <CardDescription>
                      <CaptionText as="span">Large text styles for main titles and marketing</CaptionText>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    <div>
                      <Header>The Header</Header>
                      <CaptionText className="mt-2 text-[var(--vharanani-text-muted)]">
                        Bebas Neue Bold - 50pt / 48pt Leading
                      </CaptionText>
                    </div>

                    <Separator />

                    <div>
                      <HeadlineBig>Big Headlines</HeadlineBig>
                      <CaptionText className="mt-2 text-[var(--vharanani-text-muted)]">
                        Bebas Neue Bold - 40pt / 30pt Leading
                      </CaptionText>
                    </div>

                    <Separator />

                    <div>
                      <Subline>Sublines & Sections</Subline>
                      <CaptionText className="mt-2 text-[var(--vharanani-text-muted)]">
                        Bebas Neue Bold - 20pt / 16pt Leading
                      </CaptionText>
                    </div>
                  </CardContent>
                </Card>

                {/* Body Text */}
                <Card>
                  <CardHeader>
                    <CardTitle>
                      <HeadlineSmall as="span">Body Text</HeadlineSmall>
                    </CardTitle>
                    <CardDescription>
                      <CaptionText as="span">Text styles for content and inner headlines</CaptionText>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    <div>
                      <HeadlineSmall>Context Text and Inner Headlines</HeadlineSmall>
                      <CaptionText className="mt-2 text-[var(--vharanani-text-muted)]">
                        Bebas Neue Book - 13pt / 11pt Leading
                      </CaptionText>
                    </div>

                    <Separator />

                    <div>
                      <CopyText>
                        This is copy text used for main content. It provides excellent 
                        readability for longer paragraphs and detailed information about 
                        properties and services.
                      </CopyText>
                      <CaptionText className="mt-2 text-[var(--vharanani-text-muted)]">
                        Inter Regular - 8pt / 11pt Leading
                      </CaptionText>
                    </div>

                    <Separator />

                    <div>
                      <CaptionText>
                        Caption text is used for supporting information, labels, and metadata.
                      </CaptionText>
                      <CaptionText className="mt-2 text-[var(--vharanani-text-muted)]">
                        Inter Regular - 6pt / 9pt Leading
                      </CaptionText>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
          </TabsContent>

          {/* Components Tab */}
          <TabsContent value="components">
            <ComponentShowcase />
          </TabsContent>

          {/* Layouts Tab */}
          <TabsContent value="layouts">
            <LayoutConcepts />
          </TabsContent>

          {/* Responsive Tab */}
          <TabsContent value="responsive">
            <ResponsiveGuidelines />
          </TabsContent>

          {/* Hero Tab */}
          <TabsContent value="hero">
            <HeroSectionsShowcase />
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 bg-[var(--vharanani-neutral-darker)] px-8 py-8">
        <div className="mx-auto max-w-7xl">
          <CaptionText className="text-white/60">
            Vharanani Properties Brand Guideline · Design System v1.0
          </CaptionText>
        </div>
      </div>

      {/* Responsive Guide - Always Visible */}
      <ResponsiveGuide />
    </div>
  );
}