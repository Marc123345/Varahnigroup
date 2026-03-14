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
import { GridSystemShowcase } from './GridSystem';
import { UIComponentsShowcase } from './UIComponents';
import { HomePageCards } from './HomePageCards';
import { IconLibrary } from './IconLibrary';
import { MobileMenuShowcase } from './MobileMenuShowcase';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

export function ComponentShowcase() {
  return (
    <div className="space-y-12">
      <div>
        <HeadlineBig className="mb-4">Component Library</HeadlineBig>
        <CopyText className="text-[var(--vharanani-text-muted)]">
          Pre-built components using the Vharanani design system
        </CopyText>
      </div>

      <Tabs defaultValue="ui-components" className="w-full">
        <TabsList className="mb-8 grid w-full grid-cols-3 gap-2 sm:grid-cols-5 lg:grid-cols-9">
          <TabsTrigger value="homepage">Home</TabsTrigger>
          <TabsTrigger value="ui-components">UI</TabsTrigger>
          <TabsTrigger value="grid">Grid</TabsTrigger>
          <TabsTrigger value="buttons">Buttons</TabsTrigger>
          <TabsTrigger value="cards">Cards</TabsTrigger>
          <TabsTrigger value="badges">Badges</TabsTrigger>
          <TabsTrigger value="icons">Icons</TabsTrigger>
          <TabsTrigger value="mobile-menu">Mobile Menu</TabsTrigger>
          <TabsTrigger value="text">Text</TabsTrigger>
        </TabsList>

        {/* Home Page Tab */}
        <TabsContent value="homepage">
          <HomePageCards />
        </TabsContent>

        {/* UI Components Tab */}
        <TabsContent value="ui-components">
          <UIComponentsShowcase />
        </TabsContent>

        {/* Grid System Tab */}
        <TabsContent value="grid">
          <GridSystemShowcase />
        </TabsContent>

        {/* Buttons Tab */}
        <TabsContent value="buttons" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>
                <HeadlineSmall as="span">Primary Button Variants</HeadlineSmall>
              </CardTitle>
              <CardDescription>
                <CaptionText as="span">Vharanani brand buttons with square corners</CaptionText>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-wrap gap-4">
                <Button variant="burgundy">
                  Burgundy Primary
                </Button>
                <Button variant="charcoal">
                  Charcoal Primary
                </Button>
                <Button variant="destructive">
                  Delete Action
                </Button>
              </div>
              
              <div className="bg-[var(--vharanani-neutral-darkest)] p-6">
                <CaptionText className="mb-3 text-white">
                  Code Example:
                </CaptionText>
                <code className="block text-xs text-white/80">
                  {`<Button variant="burgundy">Burgundy Primary</Button>
<Button variant="charcoal">Charcoal Primary</Button>
<Button variant="destructive">Delete Action</Button>`}
                </code>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>
                <HeadlineSmall as="span">Outline Button Variants</HeadlineSmall>
              </CardTitle>
              <CardDescription>
                <CaptionText as="span">Transparent buttons with brand color borders</CaptionText>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-wrap gap-4">
                <Button variant="outlineBurgundy">
                  Outline Burgundy
                </Button>
                <Button variant="outline">
                  Outline Charcoal
                </Button>
                <Button variant="ghost">
                  Ghost Button
                </Button>
              </div>
              
              <div className="bg-[var(--vharanani-neutral-darkest)] p-6">
                <CaptionText className="mb-3 text-white">
                  Code Example:
                </CaptionText>
                <code className="block text-xs text-white/80">
                  {`<Button variant="outlineBurgundy">Outline Burgundy</Button>
<Button variant="outline">Outline Charcoal</Button>
<Button variant="ghost">Ghost Button</Button>`}
                </code>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>
                <HeadlineSmall as="span">Button Sizes</HeadlineSmall>
              </CardTitle>
              <CardDescription>
                <CaptionText as="span">Three size options for different contexts</CaptionText>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-wrap items-center gap-4">
                <Button size="sm" variant="burgundy">
                  Small Button
                </Button>
                <Button variant="burgundy">
                  Default Button
                </Button>
                <Button size="lg" variant="burgundy">
                  Large Button
                </Button>
              </div>

              <div className="bg-[var(--vharanani-neutral-darkest)] p-6">
                <CaptionText className="mb-3 text-white">
                  Size Specifications:
                </CaptionText>
                <div className="space-y-2 text-xs text-white/80">
                  <div>• <span className="font-bold">Small:</span> Height 36px (9 * 4px), Padding 16px horizontal</div>
                  <div>• <span className="font-bold">Default:</span> Height 44px (11 * 4px), Padding 24px horizontal</div>
                  <div>• <span className="font-bold">Large:</span> Height 56px (14 * 4px), Padding 32px horizontal</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>
                <HeadlineSmall as="span">Button States</HeadlineSmall>
              </CardTitle>
              <CardDescription>
                <CaptionText as="span">Hover, active, and disabled states</CaptionText>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <CaptionText className="mb-3 text-[var(--vharanani-text-muted)]">Normal State</CaptionText>
                <div className="flex flex-wrap gap-4">
                  <Button variant="burgundy">Normal Button</Button>
                  <Button variant="outlineBurgundy">Outline Button</Button>
                </div>
              </div>

              <div>
                <CaptionText className="mb-3 text-[var(--vharanani-text-muted)]">Disabled State</CaptionText>
                <div className="flex flex-wrap gap-4">
                  <Button variant="burgundy" disabled>Disabled Button</Button>
                  <Button variant="outlineBurgundy" disabled>Disabled Outline</Button>
                </div>
              </div>

              <div className="bg-[var(--vharanani-charcoal-20)] p-6">
                <CaptionText className="mb-3 text-[var(--vharanani-charcoal)]">
                  Design Notes:
                </CaptionText>
                <div className="space-y-2">
                  <CopyText>
                    • <span className="font-bold">Square Corners:</span> All buttons have sharp 90° corners, no border-radius
                  </CopyText>
                  <CopyText>
                    • <span className="font-bold">Hover States:</span> Background transitions to 80% tone on hover
                  </CopyText>
                  <CopyText>
                    • <span className="font-bold">Border Width:</span> 2px borders for outline variants
                  </CopyText>
                  <CopyText>
                    • <span className="font-bold">Disabled State:</span> 50% opacity, pointer-events disabled
                  </CopyText>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[var(--vharanani-neutral-darker)] border-[var(--vharanani-burgundy)]">
            <CardHeader>
              <CardTitle>
                <HeadlineSmall as="span" className="text-white">Buttons on Dark Backgrounds</HeadlineSmall>
              </CardTitle>
              <CardDescription>
                <CaptionText as="span" className="text-white/70">How buttons appear on dark surfaces</CaptionText>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <Button variant="burgundy">
                  Burgundy on Dark
                </Button>
                <Button variant="outlineBurgundy">
                  Outline Burgundy
                </Button>
                <Button className="bg-white text-[var(--vharanani-charcoal)] hover:bg-white/90">
                  White Button
                </Button>
              </div>
              
              <CopyText className="text-white/80">
                On dark backgrounds, use burgundy buttons or white buttons for maximum contrast and visibility.
              </CopyText>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Cards Tab */}
        <TabsContent value="cards" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>
                  <HeadlineSmall as="span">Simple Card</HeadlineSmall>
                </CardTitle>
                <CardDescription>
                  <CaptionText as="span">A basic card with header and content</CaptionText>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CopyText>
                  Cards are versatile containers for grouping related content and actions.
                </CopyText>
              </CardContent>
            </Card>

            <Card className="border-2 border-[var(--vharanani-primary)]">
              <CardHeader>
                <CardTitle>
                  <HeadlineSmall as="span" className="text-[var(--vharanani-primary)]">
                    Highlighted Card
                  </HeadlineSmall>
                </CardTitle>
                <CardDescription>
                  <CaptionText as="span">With primary color accent</CaptionText>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CopyText>
                  Use color accents to draw attention to important content.
                </CopyText>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-br from-[var(--vharanani-primary)] to-[#6a2119] text-white">
            <CardHeader>
              <CardTitle>
                <HeadlineSmall as="span" className="text-white">Featured Card</HeadlineSmall>
              </CardTitle>
              <CardDescription>
                <CaptionText as="span" className="text-white/80">Full background color treatment</CaptionText>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CopyText className="text-white/90">
                Create impact with full-color backgrounds for special promotions or featured content.
              </CopyText>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Badges Tab */}
        <TabsContent value="badges" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>
                <HeadlineSmall as="span">Badge Variants</HeadlineSmall>
              </CardTitle>
              <CardDescription>
                <CaptionText as="span">Status indicators and labels</CaptionText>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-[var(--vharanani-primary)]">Featured</Badge>
                <Badge variant="secondary">Available</Badge>
                <Badge variant="outline">Pending</Badge>
                <Badge variant="destructive">Sold</Badge>
              </div>

              <div className="bg-gray-50 p-4">
                <CaptionText className="mb-3 text-[var(--vharanani-text-muted)]">
                  Usage in Context:
                </CaptionText>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-[var(--vharanani-primary)]">New</Badge>
                    <CopyText>Property Name</CopyText>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">Available</Badge>
                    <CopyText>Another Property</CopyText>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Icons Tab */}
        <TabsContent value="icons">
          <IconLibrary />
        </TabsContent>

        {/* Mobile Menu Tab */}
        <TabsContent value="mobile-menu">
          <MobileMenuShowcase />
        </TabsContent>

        {/* Text Styles Tab */}
        <TabsContent value="text" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>
                <HeadlineSmall as="span">Typography Components</HeadlineSmall>
              </CardTitle>
              <CardDescription>
                <CaptionText as="span">All available text styles and their usage</CaptionText>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-3">
                <Header>Header Component</Header>
                <CaptionText className="text-[var(--vharanani-text-muted)]">
                  Used for page titles and major marketing headers
                </CaptionText>
              </div>

              <div className="space-y-3">
                <HeadlineBig>Big Headline Component</HeadlineBig>
                <CaptionText className="text-[var(--vharanani-text-muted)]">
                  Used for section headers and large emphasis
                </CaptionText>
              </div>

              <div className="space-y-3">
                <Subline>Subline Component</Subline>
                <CaptionText className="text-[var(--vharanani-text-muted)]">
                  Used for subsection titles and medium emphasis
                </CaptionText>
              </div>

              <div className="space-y-3">
                <HeadlineSmall>Headline Small Component</HeadlineSmall>
                <CaptionText className="text-[var(--vharanani-text-muted)]">
                  Used for card titles and small headlines
                </CaptionText>
              </div>

              <div className="space-y-3">
                <SectionHeading>Property Development</SectionHeading>
                <CaptionText className="text-[var(--vharanani-text-muted)]">
                  Used for section headers and navigation items
                </CaptionText>
              </div>

              <div className="space-y-3">
                <CopyText>
                  Copy Text Component - This is the main body text component used for 
                  paragraphs and longer content blocks. It ensures optimal readability.
                </CopyText>
                <CaptionText className="text-[var(--vharanani-text-muted)]">
                  Used for body copy and descriptions
                </CaptionText>
              </div>

              <div className="space-y-3">
                <CaptionText>
                  Caption Text Component - Used for labels, metadata, and supporting information
                </CaptionText>
                <CaptionText className="text-[var(--vharanani-text-muted)]">
                  Used for small labels and annotations
                </CaptionText>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-50">
            <CardHeader>
              <CardTitle>
                <HeadlineSmall as="span">Code Examples</HeadlineSmall>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-white p-4">
                <CaptionText className="mb-2 text-[var(--vharanani-text-muted)]">
                  Import:
                </CaptionText>
                <code className="block text-xs">
                  {`import { Header, HeadlineBig, Subline, HeadlineSmall, CopyText, CaptionText } from './components/design-system';`}
                </code>
              </div>

              <div className="bg-white p-4">
                <CaptionText className="mb-2 text-[var(--vharanani-text-muted)]">
                  Usage:
                </CaptionText>
                <code className="block whitespace-pre text-xs">
                  {`<Header>Page Title</Header>
<CopyText>Body content here</CopyText>
<CaptionText>Additional info</CaptionText>`}
                </code>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}