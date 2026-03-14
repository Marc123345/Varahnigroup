import * as React from 'react';
import { 
  HeadlineBig, 
  HeadlineSmall, 
  Subline, 
  CopyText, 
  CaptionText,
  SectionHeading 
} from './Typography';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { 
  Building, 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  ArrowRight,
  Menu,
  Search,
  User,
  Heart,
  Phone,
  Mail,
  ChevronRight,
  TrendingUp,
  Award,
  Calendar,
  Sparkles,
  Star,
  Check
} from 'lucide-react';
import { cn } from '../ui/utils';

export function LayoutConcepts() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <HeadlineBig className="mb-4">Layout Concepts</HeadlineBig>
        <CopyText className="mb-6 max-w-3xl text-[var(--vharanani-text-muted)]">
          Professional layout patterns and page structures for static property websites.
          All layouts follow the Vharanani design system with square corners, 8pt grid, 
          and brand colors.
        </CopyText>
      </div>

      {/* Layout 1: Hero + Feature Grid */}
      <Card className="overflow-hidden border-2 border-[var(--vharanani-burgundy)]">
        <CardHeader className="bg-[var(--vharanani-burgundy-20)]">
          <CardTitle>
            <HeadlineSmall as="span">Layout 1: Hero + Feature Grid</HeadlineSmall>
          </CardTitle>
          <CardDescription>
            <CaptionText as="span">Full-width hero with featured property grid below</CaptionText>
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          {/* Visual Mockup */}
          <div className="border-b border-gray-200 bg-gray-50 p-8">
            <div className="space-y-4">
              {/* Hero Section */}
              <div className="relative bg-gradient-to-br from-[var(--vharanani-burgundy)] to-[var(--vharanani-charcoal)] p-12 text-white">
                <div className="absolute left-4 top-4 flex gap-4">
                  <Menu size={20} className="text-white" />
                  <CaptionText className="text-white">VHARANANI PROPERTIES</CaptionText>
                </div>
                <div className="absolute right-4 top-4 flex gap-3">
                  <Search size={16} className="text-white" />
                  <User size={16} className="text-white" />
                </div>
                <div className="mt-8 text-center">
                  <Subline className="mb-2 text-white">Premium Properties</Subline>
                  <CaptionText className="text-white/80">Discover your dream space</CaptionText>
                  <div className="mt-4">
                    <div className="inline-block bg-white px-4 py-2">
                      <CaptionText className="text-[var(--vharanani-burgundy)]">
                        Explore Portfolio
                      </CaptionText>
                    </div>
                  </div>
                </div>
              </div>

              {/* Grid Section */}
              <div className="grid gap-4 md:grid-cols-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="border-2 border-gray-200 bg-white p-4">
                    <div className="mb-2 h-24 bg-gray-300" />
                    <CaptionText className="font-bold">Property {i}</CaptionText>
                    <CaptionText className="text-xs text-gray-500">Location</CaptionText>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Structure Details */}
          <div className="space-y-4 p-6">
            <div>
              <CopyText className="mb-2 font-bold">Structure:</CopyText>
              <div className="space-y-2 text-sm">
                <CopyText>• Full-width hero: 100vw × 500px minimum</CopyText>
                <CopyText>• Navigation: Fixed header with logo + menu</CopyText>
                <CopyText>• Grid: 3 columns on desktop, 1 on mobile</CopyText>
                <CopyText>• Card spacing: 16px gap (2 × 8pt grid)</CopyText>
              </div>
            </div>
            <div>
              <CopyText className="mb-2 font-bold">Best For:</CopyText>
              <CopyText className="text-sm">Landing pages, portfolio showcases, property listings</CopyText>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Layout 2: Sidebar + Content */}
      <Card className="overflow-hidden border-2 border-[var(--vharanani-burgundy)]">
        <CardHeader className="bg-[var(--vharanani-burgundy-20)]">
          <CardTitle>
            <HeadlineSmall as="span">Layout 2: Sidebar Filter + Content</HeadlineSmall>
          </CardTitle>
          <CardDescription>
            <CaptionText as="span">Left sidebar with categories, main content area for property listings</CaptionText>
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          {/* Visual Mockup */}
          <div className="border-b border-gray-200 bg-gray-50 p-8">
            <div className="flex gap-4">
              {/* Sidebar */}
              <div className="w-64 flex-shrink-0 space-y-4 border-r-4 border-[var(--vharanani-burgundy)] bg-white p-4">
                <CaptionText className="font-bold">Categories</CaptionText>
                <div className="space-y-2">
                  <div className="border-l-4 border-[var(--vharanani-burgundy)] bg-[var(--vharanani-burgundy-20)] p-2">
                    <CaptionText className="text-xs">Residential</CaptionText>
                  </div>
                  <div className="border border-gray-300 p-2">
                    <CaptionText className="text-xs">Commercial</CaptionText>
                  </div>
                  <div className="border border-gray-300 p-2">
                    <CaptionText className="text-xs">Mixed-Use</CaptionText>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 space-y-4">
                <div className="flex items-center justify-between border-b-2 border-[var(--vharanani-charcoal)] pb-2">
                  <CaptionText className="font-bold">Featured Properties</CaptionText>
                </div>
                {[1, 2].map((i) => (
                  <div key={i} className="flex gap-4 border-2 border-gray-200 bg-white p-4">
                    <div className="h-20 w-32 flex-shrink-0 bg-gray-300" />
                    <div className="flex-1">
                      <CaptionText className="font-bold">Property Title {i}</CaptionText>
                      <CaptionText className="text-xs text-gray-500">Location details</CaptionText>
                      <div className="mt-2 flex gap-2">
                        <div className="border border-gray-300 px-2 py-1">
                          <CaptionText className="text-xs">3 Bed</CaptionText>
                        </div>
                        <div className="border border-gray-300 px-2 py-1">
                          <CaptionText className="text-xs">2 Bath</CaptionText>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Structure Details */}
          <div className="space-y-4 p-6">
            <div>
              <CopyText className="mb-2 font-bold">Structure:</CopyText>
              <div className="space-y-2 text-sm">
                <CopyText>• Sidebar: Fixed width 280px (35 × 8pt)</CopyText>
                <CopyText>• Content: Flexible width, minimum 600px</CopyText>
                <CopyText>• Breakpoint: Stack vertically below 1024px</CopyText>
                <CopyText>• Mobile: Sidebar becomes top navigation</CopyText>
              </div>
            </div>
            <div>
              <CopyText className="mb-2 font-bold">Best For:</CopyText>
              <CopyText className="text-sm">Category browsing, property catalogs, portfolio organization</CopyText>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Layout 3: Masonry Grid */}
      <Card className="overflow-hidden border-2 border-[var(--vharanani-burgundy)]">
        <CardHeader className="bg-[var(--vharanani-burgundy-20)]">
          <CardTitle>
            <HeadlineSmall as="span">Layout 3: Masonry Card Grid</HeadlineSmall>
          </CardTitle>
          <CardDescription>
            <CaptionText as="span">Pinterest-style masonry layout for varied content heights</CaptionText>
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          {/* Visual Mockup */}
          <div className="border-b border-gray-200 bg-gray-50 p-8">
            <div className="grid grid-cols-3 gap-4">
              {/* Tall Card */}
              <div className="border-2 border-gray-200 bg-white p-4">
                <div className="mb-2 h-40 bg-gray-300" />
                <CaptionText className="font-bold">Luxury Villa</CaptionText>
                <CaptionText className="text-xs text-gray-500">R 12.5M</CaptionText>
                <div className="mt-2 flex gap-2">
                  <div className="flex items-center gap-1">
                    <Bed size={12} />
                    <CaptionText className="text-xs">4</CaptionText>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath size={12} />
                    <CaptionText className="text-xs">3</CaptionText>
                  </div>
                </div>
              </div>

              {/* Short Card */}
              <div className="border-2 border-gray-200 bg-white p-4">
                <div className="mb-2 h-24 bg-gray-300" />
                <CaptionText className="font-bold">Apartment</CaptionText>
                <CaptionText className="text-xs text-gray-500">R 2.8M</CaptionText>
              </div>

              {/* Medium Card */}
              <div className="border-2 border-gray-200 bg-white p-4">
                <div className="mb-2 h-32 bg-gray-300" />
                <CaptionText className="font-bold">Townhouse</CaptionText>
                <CaptionText className="text-xs text-gray-500">R 4.2M</CaptionText>
                <CaptionText className="mt-2 text-xs">Prime location</CaptionText>
              </div>

              {/* Another Short */}
              <div className="border-2 border-gray-200 bg-white p-4">
                <div className="mb-2 h-28 bg-gray-300" />
                <CaptionText className="font-bold">Commercial</CaptionText>
                <CaptionText className="text-xs text-gray-500">R 8.9M</CaptionText>
              </div>

              {/* Medium Card */}
              <div className="border-2 border-gray-200 bg-white p-4">
                <div className="mb-2 h-36 bg-gray-300" />
                <CaptionText className="font-bold">Estate</CaptionText>
                <CaptionText className="text-xs text-gray-500">R 15M</CaptionText>
              </div>

              {/* Tall Card */}
              <div className="border-2 border-gray-200 bg-white p-4">
                <div className="mb-2 h-44 bg-gray-300" />
                <CaptionText className="font-bold">Penthouse</CaptionText>
                <CaptionText className="text-xs text-gray-500">R 9.5M</CaptionText>
              </div>
            </div>
          </div>

          {/* Structure Details */}
          <div className="space-y-4 p-6">
            <div>
              <CopyText className="mb-2 font-bold">Structure:</CopyText>
              <div className="space-y-2 text-sm">
                <CopyText>• Columns: 4 on desktop, 2 on tablet, 1 on mobile</CopyText>
                <CopyText>• Gap: 16px between cards (2 × 8pt)</CopyText>
                <CopyText>• Cards: Variable height based on content</CopyText>
                <CopyText>• Images: Maintain aspect ratio, responsive width</CopyText>
              </div>
            </div>
            <div>
              <CopyText className="mb-2 font-bold">Best For:</CopyText>
              <CopyText className="text-sm">Property galleries, mixed content, visual portfolios</CopyText>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Layout 4: Bento Grid */}
      <Card className="overflow-hidden border-2 border-[var(--vharanani-burgundy)]">
        <CardHeader className="bg-[var(--vharanani-burgundy-20)]">
          <CardTitle>
            <HeadlineSmall as="span">Layout 4: Bento Grid (Asymmetric)</HeadlineSmall>
          </CardTitle>
          <CardDescription>
            <CaptionText as="span">Modern asymmetric grid with varied card sizes and layouts</CaptionText>
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          {/* Visual Mockup */}
          <div className="border-b border-gray-200 bg-gray-50 p-8">
            <div className="grid grid-cols-4 gap-4">
              {/* Large Feature - 2x2 */}
              <div className="col-span-2 row-span-2 border-2 border-[var(--vharanani-burgundy)] bg-white p-6">
                <div className="mb-4 h-48 bg-gray-300" />
                <HeadlineSmall className="mb-2">Featured Estate</HeadlineSmall>
                <CaptionText className="text-xs">Luxury property in prime location</CaptionText>
                <div className="mt-4 bg-[var(--vharanani-burgundy)] px-4 py-2 text-center">
                  <CaptionText className="text-xs text-white">View Details</CaptionText>
                </div>
              </div>

              {/* Small Card 1 */}
              <div className="col-span-1 border-2 border-gray-200 bg-white p-4">
                <div className="mb-2 h-20 bg-gray-300" />
                <CaptionText className="text-xs font-bold">Villa</CaptionText>
                <CaptionText className="text-xs text-gray-500">R 8M</CaptionText>
              </div>

              {/* Small Card 2 */}
              <div className="col-span-1 border-2 border-gray-200 bg-white p-4">
                <div className="mb-2 h-20 bg-gray-300" />
                <CaptionText className="text-xs font-bold">Apartment</CaptionText>
                <CaptionText className="text-xs text-gray-500">R 2.5M</CaptionText>
              </div>

              {/* Wide Card */}
              <div className="col-span-2 border-2 border-gray-200 bg-white p-4">
                <div className="flex gap-4">
                  <div className="h-24 w-32 flex-shrink-0 bg-gray-300" />
                  <div>
                    <CaptionText className="font-bold">Commercial Space</CaptionText>
                    <CaptionText className="text-xs text-gray-500">Prime Location</CaptionText>
                    <CaptionText className="mt-2 text-xs">Perfect for retail or office</CaptionText>
                  </div>
                </div>
              </div>

              {/* Medium Card */}
              <div className="col-span-2 border-2 border-gray-200 bg-white p-4">
                <div className="mb-2 h-32 bg-gray-300" />
                <CaptionText className="font-bold">Townhouse</CaptionText>
                <CaptionText className="text-xs text-gray-500">R 4.2M</CaptionText>
              </div>

              {/* Tall Stats Card */}
              <div className="col-span-2 row-span-1 border-2 border-[var(--vharanani-charcoal)] bg-[var(--vharanani-charcoal)] p-6 text-white">
                <Subline className="mb-4 text-white">150+</Subline>
                <CaptionText className="text-xs text-white">Properties Sold</CaptionText>
                <CaptionText className="mt-2 text-xs text-white/70">Trusted by thousands</CaptionText>
              </div>
            </div>
          </div>

          {/* Structure Details */}
          <div className="space-y-4 p-6">
            <div>
              <CopyText className="mb-2 font-bold">Structure:</CopyText>
              <div className="space-y-2 text-sm">
                <CopyText>• Grid: 4-column system with span variations</CopyText>
                <CopyText>• Featured: 2x2 grid span for hero content</CopyText>
                <CopyText>• Asymmetric: Mixed card sizes for visual interest</CopyText>
                <CopyText>• Mobile: Stack all cards in single column</CopyText>
              </div>
            </div>
            <div>
              <CopyText className="mb-2 font-bold">Best For:</CopyText>
              <CopyText className="text-sm">Modern landing pages, featured content, dynamic portfolios</CopyText>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Layout 5: Magazine/Editorial */}
      <Card className="overflow-hidden border-2 border-[var(--vharanani-burgundy)]">
        <CardHeader className="bg-[var(--vharanani-burgundy-20)]">
          <CardTitle>
            <HeadlineSmall as="span">Layout 5: Magazine/Editorial</HeadlineSmall>
          </CardTitle>
          <CardDescription>
            <CaptionText as="span">Editorial-style layout with large images and structured content</CaptionText>
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          {/* Visual Mockup */}
          <div className="border-b border-gray-200 bg-gray-50 p-8">
            <div className="space-y-8">
              {/* Hero Article */}
              <div className="border-2 border-gray-200 bg-white">
                <div className="h-56 bg-gray-400" />
                <div className="p-6">
                  <div className="mb-2 inline-block border-l-4 border-[var(--vharanani-burgundy)] px-2">
                    <CaptionText className="text-xs">FEATURED</CaptionText>
                  </div>
                  <HeadlineSmall className="mb-3">The Future of Urban Living</HeadlineSmall>
                  <CopyText className="mb-4 text-xs">
                    Exploring modern architectural trends in South African property development...
                  </CopyText>
                  <div className="flex items-center gap-4">
                    <CaptionText className="text-xs text-gray-500">5 min read</CaptionText>
                    <div className="h-1 w-1 bg-gray-300" />
                    <CaptionText className="text-xs text-gray-500">Feb 25, 2026</CaptionText>
                  </div>
                </div>
              </div>

              {/* Article Grid */}
              <div className="grid gap-6 md:grid-cols-2">
                {[1, 2].map((i) => (
                  <div key={i} className="flex gap-4 border-2 border-gray-200 bg-white p-4">
                    <div className="h-24 w-32 flex-shrink-0 bg-gray-300" />
                    <div className="flex-1">
                      <div className="mb-2 inline-block bg-[var(--vharanani-burgundy-20)] px-2 py-1">
                        <CaptionText className="text-xs">INSIGHTS</CaptionText>
                      </div>
                      <CaptionText className="mb-2 font-bold">Article Title {i}</CaptionText>
                      <CaptionText className="text-xs text-gray-500">Brief description...</CaptionText>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Structure Details */}
          <div className="space-y-4 p-6">
            <div>
              <CopyText className="mb-2 font-bold">Structure:</CopyText>
              <div className="space-y-2 text-sm">
                <CopyText>• Hero article: Full-width featured content</CopyText>
                <CopyText>• Grid below: 2-column article preview cards</CopyText>
                <CopyText>• Categories: Labeled sections for organization</CopyText>
                <CopyText>• Metadata: Reading time, date, author info</CopyText>
              </div>
            </div>
            <div>
              <CopyText className="mb-2 font-bold">Best For:</CopyText>
              <CopyText className="text-sm">Blogs, news sections, property insights, market reports</CopyText>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Layout 6: Stats & Numbers */}
      <Card className="overflow-hidden border-2 border-[var(--vharanani-burgundy)]">
        <CardHeader className="bg-[var(--vharanani-burgundy-20)]">
          <CardTitle>
            <HeadlineSmall as="span">Layout 6: Stats & Numbers Showcase</HeadlineSmall>
          </CardTitle>
          <CardDescription>
            <CaptionText as="span">Data-driven layout emphasizing achievements and metrics</CaptionText>
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          {/* Visual Mockup */}
          <div className="border-b border-gray-200 bg-gray-50 p-8">
            <div className="space-y-6">
              {/* Big Stats Row */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: <Building size={24} />, value: '500+', label: 'Properties' },
                  { icon: <Award size={24} />, value: '25 Years', label: 'Experience' },
                  { icon: <Star size={24} />, value: '98%', label: 'Satisfaction' }
                ].map((stat, i) => (
                  <div key={i} className="border-l-4 border-[var(--vharanani-burgundy)] bg-white p-6 text-center">
                    <div className="mb-3 flex justify-center text-[var(--vharanani-burgundy)]">
                      {stat.icon}
                    </div>
                    <Subline className="mb-1">{stat.value}</Subline>
                    <CaptionText className="text-xs text-gray-500">{stat.label}</CaptionText>
                  </div>
                ))}
              </div>

              {/* Info Cards */}
              <div className="grid gap-4 md:grid-cols-2">
                <div className="bg-[var(--vharanani-burgundy)] p-6 text-white">
                  <HeadlineSmall className="mb-3 text-white">Why Choose Us</HeadlineSmall>
                  <div className="space-y-2">
                    {['Premium locations', 'Expert guidance', 'Trusted service'].map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Check size={16} className="text-white" />
                        <CaptionText className="text-xs text-white">{item}</CaptionText>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[var(--vharanani-charcoal)] p-6 text-white">
                  <HeadlineSmall className="mb-3 text-white">Awards & Recognition</HeadlineSmall>
                  <CaptionText className="text-xs text-white/90">
                    Recognized as one of South Africa's leading property developers
                    with multiple industry awards.
                  </CaptionText>
                </div>
              </div>
            </div>
          </div>

          {/* Structure Details */}
          <div className="space-y-4 p-6">
            <div>
              <CopyText className="mb-2 font-bold">Structure:</CopyText>
              <div className="space-y-2 text-sm">
                <CopyText>• Stats row: 3-column equal width cards</CopyText>
                <CopyText>• Icons: Visual emphasis on numbers</CopyText>
                <CopyText>• Info blocks: 2-column supporting content</CopyText>
                <CopyText>• Contrast: Dark backgrounds for impact</CopyText>
              </div>
            </div>
            <div>
              <CopyText className="mb-2 font-bold">Best For:</CopyText>
              <CopyText className="text-sm">About pages, trust building, company achievements, social proof</CopyText>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Layout 7: Timeline/Process */}
      <Card className="overflow-hidden border-2 border-[var(--vharanani-burgundy)]">
        <CardHeader className="bg-[var(--vharanani-burgundy-20)]">
          <CardTitle>
            <HeadlineSmall as="span">Layout 7: Timeline/Process Flow</HeadlineSmall>
          </CardTitle>
          <CardDescription>
            <CaptionText as="span">Step-by-step timeline layout for processes or company history</CaptionText>
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          {/* Visual Mockup */}
          <div className="border-b border-gray-200 bg-gray-50 p-8">
            <div className="relative space-y-8">
              {/* Vertical Line */}
              <div className="absolute left-6 top-0 h-full w-1 bg-[var(--vharanani-burgundy)]" />

              {/* Timeline Items */}
              {[
                { step: '01', title: 'Consultation', desc: 'Initial meeting to understand your needs' },
                { step: '02', title: 'Property Search', desc: 'We find properties matching your criteria' },
                { step: '03', title: 'Site Visits', desc: 'Tour selected properties with our agents' },
                { step: '04', title: 'Offer & Closing', desc: 'Negotiate and finalize your purchase' }
              ].map((item, i) => (
                <div key={i} className="relative flex gap-6 pl-14">
                  {/* Number Badge */}
                  <div className="absolute -left-1 top-0 flex size-14 items-center justify-center bg-[var(--vharanani-burgundy)]">
                    <HeadlineSmall className="text-white">{item.step}</HeadlineSmall>
                  </div>

                  {/* Content */}
                  <div className="flex-1 border-2 border-gray-200 bg-white p-4">
                    <CaptionText className="mb-1 font-bold">{item.title}</CaptionText>
                    <CaptionText className="text-xs text-gray-500">{item.desc}</CaptionText>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Structure Details */}
          <div className="space-y-4 p-6">
            <div>
              <CopyText className="mb-2 font-bold">Structure:</CopyText>
              <div className="space-y-2 text-sm">
                <CopyText>• Vertical timeline: Connecting line through steps</CopyText>
                <CopyText>• Step badges: Numbered indicators in brand color</CopyText>
                <CopyText>• Content cards: Descriptions for each step</CopyText>
                <CopyText>• Mobile: Maintains vertical flow, reduces spacing</CopyText>
              </div>
            </div>
            <div>
              <CopyText className="mb-2 font-bold">Best For:</CopyText>
              <CopyText className="text-sm">Process explanations, company history, how it works pages</CopyText>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Layout 8: Full-Width Sections */}
      <Card className="overflow-hidden border-2 border-[var(--vharanani-burgundy)]">
        <CardHeader className="bg-[var(--vharanani-burgundy-20)]">
          <CardTitle>
            <HeadlineSmall as="span">Layout 8: Alternating Full-Width Sections</HeadlineSmall>
          </CardTitle>
          <CardDescription>
            <CaptionText as="span">Story-telling layout with alternating content and image sections</CaptionText>
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          {/* Visual Mockup */}
          <div className="border-b border-gray-200 bg-gray-50 p-8">
            <div className="space-y-0">
              {/* Section 1: Image Left */}
              <div className="grid md:grid-cols-2">
                <div className="h-40 bg-gray-400" />
                <div className="flex items-center bg-white p-6">
                  <div>
                    <HeadlineSmall className="mb-2">Our Vision</HeadlineSmall>
                    <CaptionText className="text-xs">
                      Creating exceptional spaces for modern living...
                    </CaptionText>
                  </div>
                </div>
              </div>

              {/* Section 2: Image Right */}
              <div className="grid md:grid-cols-2">
                <div className="flex items-center bg-[var(--vharanani-burgundy)] p-6 text-white">
                  <div>
                    <HeadlineSmall className="mb-2 text-white">Premium Quality</HeadlineSmall>
                    <CaptionText className="text-xs text-white/90">
                      Every detail matters in our properties...
                    </CaptionText>
                  </div>
                </div>
                <div className="h-40 bg-gray-400" />
              </div>

              {/* Section 3: Image Left */}
              <div className="grid md:grid-cols-2">
                <div className="h-40 bg-gray-400" />
                <div className="flex items-center bg-[var(--vharanani-charcoal)] p-6 text-white">
                  <div>
                    <HeadlineSmall className="mb-2 text-white">Location Matters</HeadlineSmall>
                    <CaptionText className="text-xs text-white/90">
                      Prime locations across South Africa...
                    </CaptionText>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Structure Details */}
          <div className="space-y-4 p-6">
            <div>
              <CopyText className="mb-2 font-bold">Structure:</CopyText>
              <div className="space-y-2 text-sm">
                <CopyText>• Sections: Full viewport width (100vw)</CopyText>
                <CopyText>• Split: 50/50 image and content</CopyText>
                <CopyText>• Alternating: Left-right pattern for visual rhythm</CopyText>
                <CopyText>• Mobile: Stack image above content</CopyText>
              </div>
            </div>
            <div>
              <CopyText className="mb-2 font-bold">Best For:</CopyText>
              <CopyText className="text-sm">About pages, brand stories, feature showcases, marketing pages</CopyText>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Layout 9: Feature Comparison */}
      <Card className="overflow-hidden border-2 border-[var(--vharanani-burgundy)]">
        <CardHeader className="bg-[var(--vharanani-burgundy-20)]">
          <CardTitle>
            <HeadlineSmall as="span">Layout 9: Property Type Comparison</HeadlineSmall>
          </CardTitle>
          <CardDescription>
            <CaptionText as="span">Side-by-side comparison layout for property types or packages</CaptionText>
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          {/* Visual Mockup */}
          <div className="border-b border-gray-200 bg-gray-50 p-8">
            <div className="grid gap-4 md:grid-cols-3">
              {[
                { type: 'Residential', highlight: false },
                { type: 'Commercial', highlight: true },
                { type: 'Mixed-Use', highlight: false }
              ].map((item, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "border-2 bg-white p-6",
                    item.highlight ? "border-[var(--vharanani-burgundy)] border-4" : "border-gray-200"
                  )}
                >
                  {item.highlight && (
                    <div className="mb-4 bg-[var(--vharanani-burgundy)] px-3 py-1 text-center">
                      <CaptionText className="text-xs text-white">POPULAR</CaptionText>
                    </div>
                  )}
                  <HeadlineSmall className="mb-4 text-center">{item.type}</HeadlineSmall>
                  <div className="mb-4 border-t-2 border-[var(--vharanani-charcoal)] pt-4 text-center">
                    <Subline className="mb-1 text-[var(--vharanani-burgundy)]">From R 2M</Subline>
                  </div>
                  <div className="space-y-3">
                    {['Premium locations', 'Modern design', 'Full amenities', 'Security 24/7'].map((feature, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <Check size={14} className="mt-0.5 text-[var(--vharanani-burgundy)]" />
                        <CaptionText className="text-xs">{feature}</CaptionText>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 bg-[var(--vharanani-charcoal)] px-4 py-3 text-center">
                    <CaptionText className="text-xs text-white">Learn More</CaptionText>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Structure Details */}
          <div className="space-y-4 p-6">
            <div>
              <CopyText className="mb-2 font-bold">Structure:</CopyText>
              <div className="space-y-2 text-sm">
                <CopyText>• Columns: 3 equal-width comparison cards</CopyText>
                <CopyText>• Highlight: Border emphasis on featured option</CopyText>
                <CopyText>• Features: Bullet list with checkmarks</CopyText>
                <CopyText>• CTA: Button at bottom of each card</CopyText>
              </div>
            </div>
            <div>
              <CopyText className="mb-2 font-bold">Best For:</CopyText>
              <CopyText className="text-sm">Service tiers, property types, pricing plans, package comparison</CopyText>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Layout 10: Full-Bleed Hero */}
      <Card className="overflow-hidden border-2 border-[var(--vharanani-burgundy)]">
        <CardHeader className="bg-[var(--vharanani-burgundy-20)]">
          <CardTitle>
            <HeadlineSmall as="span">Layout 10: Full-Bleed Image Hero</HeadlineSmall>
          </CardTitle>
          <CardDescription>
            <CaptionText as="span">Immersive full-screen hero with overlay text and minimal UI</CaptionText>
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          {/* Visual Mockup */}
          <div className="border-b border-gray-200 bg-gray-50 p-8">
            <div className="relative h-96 bg-gray-400">
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-[var(--vharanani-charcoal)]/60" />
              
              {/* Content */}
              <div className="relative flex h-full flex-col items-center justify-center px-8 text-center text-white">
                <div className="mb-4 inline-block bg-[var(--vharanani-burgundy)] px-4 py-2">
                  <CaptionText className="text-xs text-white">NEW DEVELOPMENT</CaptionText>
                </div>
                <Subline className="mb-4 text-white">Luxury Waterfront Estate</Subline>
                <CaptionText className="mb-6 max-w-lg text-white/90">
                  Experience unparalleled luxury in our newest development featuring
                  world-class amenities and breathtaking ocean views
                </CaptionText>
                <div className="flex gap-4">
                  <div className="bg-white px-6 py-3">
                    <CaptionText className="text-xs text-[var(--vharanani-burgundy)]">
                      Explore Properties
                    </CaptionText>
                  </div>
                  <div className="border-2 border-white px-6 py-3">
                    <CaptionText className="text-xs text-white">
                      Contact Us
                    </CaptionText>
                  </div>
                </div>
              </div>

              {/* Scroll Indicator */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                <div className="animate-bounce">
                  <ChevronRight size={20} className="rotate-90 text-white" />
                </div>
              </div>
            </div>

            {/* Content Below */}
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="border-2 border-gray-200 bg-white p-4">
                  <CaptionText className="font-bold">Feature {i}</CaptionText>
                  <CaptionText className="text-xs text-gray-500">Description...</CaptionText>
                </div>
              ))}
            </div>
          </div>

          {/* Structure Details */}
          <div className="space-y-4 p-6">
            <div>
              <CopyText className="mb-2 font-bold">Structure:</CopyText>
              <div className="space-y-2 text-sm">
                <CopyText>• Hero: Full viewport height (100vh)</CopyText>
                <CopyText>• Overlay: Semi-transparent dark layer for text readability</CopyText>
                <CopyText>• Content: Centered with clear CTAs</CopyText>
                <CopyText>• Scroll indicator: Animated chevron for user guidance</CopyText>
              </div>
            </div>
            <div>
              <CopyText className="mb-2 font-bold">Best For:</CopyText>
              <CopyText className="text-sm">Landing pages, campaign pages, new developments, premium properties</CopyText>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Design Principles */}
      <Card className="bg-gradient-to-br from-[var(--vharanani-burgundy)] to-[var(--vharanani-charcoal)]">
        <CardHeader>
          <CardTitle>
            <HeadlineSmall as="span" className="text-white">Layout Design Principles</HeadlineSmall>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <HeadlineSmall className="mb-3 text-white">8pt Grid System</HeadlineSmall>
              <CopyText className="text-white/90">
                All spacing, padding, and margins are multiples of 8px for perfect alignment and consistency.
              </CopyText>
            </div>

            <div>
              <HeadlineSmall className="mb-3 text-white">Square Corners</HeadlineSmall>
              <CopyText className="text-white/90">
                No rounded corners. All containers, cards, and buttons maintain sharp 90° corners for the brand aesthetic.
              </CopyText>
            </div>

            <div>
              <HeadlineSmall className="mb-3 text-white">Responsive First</HeadlineSmall>
              <CopyText className="text-white/90">
                Mobile-first approach with breakpoints at 640px (mobile), 768px (tablet), 1024px (desktop).
              </CopyText>
            </div>

            <div>
              <HeadlineSmall className="mb-3 text-white">Visual Hierarchy</HeadlineSmall>
              <CopyText className="text-white/90">
                Use size, color, and spacing to establish clear content hierarchy. Most important content first.
              </CopyText>
            </div>

            <div>
              <HeadlineSmall className="mb-3 text-white">Brand Colors</HeadlineSmall>
              <CopyText className="text-white/90">
                Burgundy (#892B1C) for accents and CTAs, Charcoal (#2C2D2D) for text and contrasts, white for backgrounds.
              </CopyText>
            </div>

            <div>
              <HeadlineSmall className="mb-3 text-white">Content Density</HeadlineSmall>
              <CopyText className="text-white/90">
                Balance information density with whitespace. Maximum content width 1280px for optimal readability.
              </CopyText>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Responsive Breakpoints */}
      <Card>
        <CardHeader>
          <CardTitle>
            <HeadlineSmall as="span">Responsive Breakpoints</HeadlineSmall>
          </CardTitle>
          <CardDescription>
            <CaptionText as="span">Standard breakpoints for all layouts</CaptionText>
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="border-l-4 border-[var(--vharanani-burgundy)] bg-[var(--vharanani-burgundy-20)] p-4">
              <CaptionText className="mb-1 font-bold">Mobile</CaptionText>
              <CopyText className="text-sm">0 - 639px</CopyText>
              <CaptionText className="mt-2 text-xs">Single column, stacked layout</CaptionText>
            </div>

            <div className="border-l-4 border-[var(--vharanani-burgundy)] bg-[var(--vharanani-burgundy-20)] p-4">
              <CaptionText className="mb-1 font-bold">Tablet</CaptionText>
              <CopyText className="text-sm">640px - 1023px</CopyText>
              <CaptionText className="mt-2 text-xs">2-column grids, condensed spacing</CaptionText>
            </div>

            <div className="border-l-4 border-[var(--vharanani-burgundy)] bg-[var(--vharanani-burgundy-20)] p-4">
              <CaptionText className="mb-1 font-bold">Desktop</CaptionText>
              <CopyText className="text-sm">1024px - 1535px</CopyText>
              <CaptionText className="mt-2 text-xs">3-4 column grids, full features</CaptionText>
            </div>

            <div className="border-l-4 border-[var(--vharanani-burgundy)] bg-[var(--vharanani-burgundy-20)] p-4">
              <CaptionText className="mb-1 font-bold">Large Desktop</CaptionText>
              <CopyText className="text-sm">1536px+</CopyText>
              <CaptionText className="mt-2 text-xs">Max width 1280px, centered</CaptionText>
            </div>
          </div>

          <div className="bg-[var(--vharanani-neutral-darkest)] p-6">
            <CaptionText className="mb-3 text-white">Tailwind Breakpoint Classes:</CaptionText>
            <code className="block text-xs text-white/80">
              {`sm:   // min-width: 640px
md:   // min-width: 768px  
lg:   // min-width: 1024px
xl:   // min-width: 1280px
2xl:  // min-width: 1536px`}
            </code>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}