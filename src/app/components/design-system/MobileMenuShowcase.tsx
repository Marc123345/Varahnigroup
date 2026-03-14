import * as React from 'react';
import { useState } from 'react';
import { Menu, Home, Building, Users, Mail, Settings, Phone, MapPin, FileText } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { HeadlineSmall, HeadlineBig, CopyText, CaptionText } from './Typography';
import { MobileMenu } from '../property/MobileMenu';

export function MobileMenuShowcase() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div>
        <HeadlineBig className="mb-4">Mobile Menu & Overlay</HeadlineBig>
        <CopyText className="mb-6 max-w-3xl text-[var(--vharanani-text-muted)]">
          A full-screen mobile navigation menu with smooth GSAP animations, backdrop overlay, 
          and haptic feedback. Optimized for mobile and tablet devices.
        </CopyText>
      </div>

      {/* Live Demo Section */}
      <Card className="border-2 border-[var(--vharanani-burgundy)]">
        <CardHeader>
          <CardTitle>
            <HeadlineSmall as="span">Live Demo</HeadlineSmall>
          </CardTitle>
          <CardDescription>
            <CaptionText as="span">Click the button to open the mobile menu</CaptionText>
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Demo Controls */}
          <div className="flex items-center justify-center bg-gradient-to-br from-[var(--vharanani-burgundy)] to-[var(--vharanani-charcoal)] p-12">
            <Button
              variant="burgundy"
              size="lg"
              onClick={() => setIsMenuOpen(true)}
              className="bg-white text-[var(--vharanani-burgundy)] hover:bg-white/90 hover:text-[var(--vharanani-burgundy)] shadow-lg"
            >
              <Menu size={24} className="mr-2" />
              Open Mobile Menu
            </Button>
          </div>

          {/* Mobile Menu Component */}
          <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

          {/* Feature List */}
          <div className="bg-[var(--vharanani-charcoal-20)] p-6">
            <HeadlineSmall className="mb-4 text-[var(--vharanani-burgundy)]">
              Features
            </HeadlineSmall>
            <div className="grid gap-3 md:grid-cols-2">
              <CopyText>✓ Full-screen overlay with backdrop blur</CopyText>
              <CopyText>✓ Slide-in animation from right</CopyText>
              <CopyText>✓ GSAP timeline animations</CopyText>
              <CopyText>✓ Haptic feedback on interactions</CopyText>
              <CopyText>✓ Click outside to close</CopyText>
              <CopyText>✓ Body scroll lock when open</CopyText>
              <CopyText>✓ Smooth close animations</CopyText>
              <CopyText>✓ Responsive width (max 400px)</CopyText>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Component Structure */}
      <Card>
        <CardHeader>
          <CardTitle>
            <HeadlineSmall as="span">Component Structure</HeadlineSmall>
          </CardTitle>
          <CardDescription>
            <CaptionText as="span">Breakdown of the mobile menu components</CaptionText>
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            {/* Overlay */}
            <div className="border-l-4 border-[var(--vharanani-burgundy)] pl-4">
              <HeadlineSmall className="mb-2 text-[var(--vharanani-burgundy)]">
                1. Backdrop Overlay
              </HeadlineSmall>
              <CopyText className="mb-3">
                Semi-transparent overlay covering the entire screen with backdrop blur effect.
              </CopyText>
              <div className="bg-[var(--vharanani-neutral-darkest)] p-4">
                <code className="block text-xs text-white">
                  {`className="fixed inset-0 z-50 bg-[var(--vharanani-charcoal)]/80 backdrop-blur-sm"`}
                </code>
              </div>
            </div>

            {/* Menu Panel */}
            <div className="border-l-4 border-[var(--vharanani-burgundy)] pl-4">
              <HeadlineSmall className="mb-2 text-[var(--vharanani-burgundy)]">
                2. Menu Panel
              </HeadlineSmall>
              <CopyText className="mb-3">
                Sliding panel from the right with brand colors and square corners.
              </CopyText>
              <div className="bg-[var(--vharanani-neutral-darkest)] p-4">
                <code className="block text-xs text-white">
                  {`className="h-full w-full max-w-sm bg-white border-l-4 border-[var(--vharanani-burgundy)]"`}
                </code>
              </div>
            </div>

            {/* Navigation Items */}
            <div className="border-l-4 border-[var(--vharanani-burgundy)] pl-4">
              <HeadlineSmall className="mb-2 text-[var(--vharanani-burgundy)]">
                3. Navigation Items
              </HeadlineSmall>
              <CopyText className="mb-3">
                Menu links with hover effects using burgundy accent colors.
              </CopyText>
              <div className="bg-[var(--vharanani-neutral-darkest)] p-4">
                <code className="block text-xs text-white">
                  {`hover:border-[var(--vharanani-burgundy)] hover:bg-[var(--vharanani-burgundy-20)]`}
                </code>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Animation Details */}
      <Card className="bg-[var(--vharanani-neutral-darker)]">
        <CardHeader>
          <CardTitle>
            <HeadlineSmall as="span" className="text-white">GSAP Animation Timeline</HeadlineSmall>
          </CardTitle>
          <CardDescription>
            <CaptionText as="span" className="text-white/70">Smooth animations powered by GSAP</CaptionText>
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Opening Animation */}
            <div>
              <HeadlineSmall className="mb-4 text-[var(--vharanani-burgundy)]">
                Opening Animation
              </HeadlineSmall>
              <div className="space-y-3">
                <div className="bg-white/10 p-4">
                  <CopyText className="mb-2 text-white font-bold">Step 1: Show Overlay</CopyText>
                  <CaptionText className="text-white/70">
                    Fade in backdrop from opacity 0 to 1 (0.3s)
                  </CaptionText>
                </div>
                <div className="bg-white/10 p-4">
                  <CopyText className="mb-2 text-white font-bold">Step 2: Slide Panel</CopyText>
                  <CaptionText className="text-white/70">
                    Slide menu from right (100% to 0%, 0.4s) with power3.out easing
                  </CaptionText>
                </div>
                <div className="bg-white/10 p-4">
                  <CopyText className="mb-2 text-white font-bold">Step 3: Lock Scroll</CopyText>
                  <CaptionText className="text-white/70">
                    Prevent body scrolling while menu is open
                  </CaptionText>
                </div>
              </div>
            </div>

            {/* Closing Animation */}
            <div>
              <HeadlineSmall className="mb-4 text-[var(--vharanani-burgundy)]">
                Closing Animation
              </HeadlineSmall>
              <div className="space-y-3">
                <div className="bg-white/10 p-4">
                  <CopyText className="mb-2 text-white font-bold">Step 1: Slide Out</CopyText>
                  <CaptionText className="text-white/70">
                    Slide menu to right (0% to 100%, 0.3s) with power2.in easing
                  </CaptionText>
                </div>
                <div className="bg-white/10 p-4">
                  <CopyText className="mb-2 text-white font-bold">Step 2: Fade Backdrop</CopyText>
                  <CaptionText className="text-white/70">
                    Fade out backdrop (0.2s) slightly overlapping
                  </CaptionText>
                </div>
                <div className="bg-white/10 p-4">
                  <CopyText className="mb-2 text-white font-bold">Step 3: Restore Scroll</CopyText>
                  <CaptionText className="text-white/70">
                    Re-enable body scrolling
                  </CaptionText>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Usage Code */}
      <Card>
        <CardHeader>
          <CardTitle>
            <HeadlineSmall as="span">Implementation Code</HeadlineSmall>
          </CardTitle>
          <CardDescription>
            <CaptionText as="span">How to use the MobileMenu component</CaptionText>
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Import Statement */}
          <div>
            <CaptionText className="mb-2 font-bold text-[var(--vharanani-charcoal)]">
              1. Import Component
            </CaptionText>
            <div className="bg-[var(--vharanani-neutral-darkest)] p-4">
              <code className="block text-xs text-white">
                {`import { MobileMenu } from './components/property/MobileMenu';
import { Menu } from 'lucide-react';`}
              </code>
            </div>
          </div>

          {/* State Management */}
          <div>
            <CaptionText className="mb-2 font-bold text-[var(--vharanani-charcoal)]">
              2. Add State Management
            </CaptionText>
            <div className="bg-[var(--vharanani-neutral-darkest)] p-4">
              <code className="block text-xs text-white">
                {`const [isMenuOpen, setIsMenuOpen] = useState(false);`}
              </code>
            </div>
          </div>

          {/* Menu Button */}
          <div>
            <CaptionText className="mb-2 font-bold text-[var(--vharanani-charcoal)]">
              3. Add Menu Button
            </CaptionText>
            <div className="bg-[var(--vharanani-neutral-darkest)] p-4">
              <code className="block text-xs text-white">
                {`<button onClick={() => setIsMenuOpen(true)}>
  <Menu size={24} />
</button>`}
              </code>
            </div>
          </div>

          {/* Component Usage */}
          <div>
            <CaptionText className="mb-2 font-bold text-[var(--vharanani-charcoal)]">
              4. Add MobileMenu Component
            </CaptionText>
            <div className="bg-[var(--vharanani-neutral-darkest)] p-4">
              <code className="block text-xs text-white">
                {`<MobileMenu 
  isOpen={isMenuOpen} 
  onClose={() => setIsMenuOpen(false)} 
/>`}
              </code>
            </div>
          </div>

          {/* Complete Example */}
          <div>
            <CaptionText className="mb-2 font-bold text-[var(--vharanani-charcoal)]">
              Complete Example
            </CaptionText>
            <div className="bg-[var(--vharanani-neutral-darkest)] p-4">
              <code className="block whitespace-pre text-xs text-white">
                {`function MyPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      {/* Header with menu button */}
      <header>
        <button onClick={() => setIsMenuOpen(true)}>
          <Menu size={24} />
        </button>
      </header>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
      />

      {/* Page content */}
      <main>...</main>
    </div>
  );
}`}
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Customization Options */}
      <Card className="border-2 border-[var(--vharanani-burgundy)]">
        <CardHeader>
          <CardTitle>
            <HeadlineSmall as="span">Customization Options</HeadlineSmall>
          </CardTitle>
          <CardDescription>
            <CaptionText as="span">Ways to customize the mobile menu</CaptionText>
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Menu Items */}
            <div className="border-l-4 border-[var(--vharanani-burgundy)] pl-4">
              <HeadlineSmall className="mb-3">Menu Items</HeadlineSmall>
              <CopyText className="mb-2">
                Customize navigation links in the menu array:
              </CopyText>
              <div className="bg-[var(--vharanani-charcoal-20)] p-3">
                <CaptionText>
                  • Add/remove menu items<br />
                  • Change link destinations<br />
                  • Add icons to menu items<br />
                  • Organize with sections
                </CaptionText>
              </div>
            </div>

            {/* Animations */}
            <div className="border-l-4 border-[var(--vharanani-burgundy)] pl-4">
              <HeadlineSmall className="mb-3">Animations</HeadlineSmall>
              <CopyText className="mb-2">
                Adjust GSAP animation parameters:
              </CopyText>
              <div className="bg-[var(--vharanani-charcoal-20)] p-3">
                <CaptionText>
                  • Duration timing<br />
                  • Easing functions<br />
                  • Slide direction<br />
                  • Stagger effects
                </CaptionText>
              </div>
            </div>

            {/* Styling */}
            <div className="border-l-4 border-[var(--vharanani-burgundy)] pl-4">
              <HeadlineSmall className="mb-3">Styling</HeadlineSmall>
              <CopyText className="mb-2">
                Modify colors and appearance:
              </CopyText>
              <div className="bg-[var(--vharanani-charcoal-20)] p-3">
                <CaptionText>
                  • Background colors<br />
                  • Border styles<br />
                  • Typography sizing<br />
                  • Hover effects
                </CaptionText>
              </div>
            </div>

            {/* Behavior */}
            <div className="border-l-4 border-[var(--vharanani-burgundy)] pl-4">
              <HeadlineSmall className="mb-3">Behavior</HeadlineSmall>
              <CopyText className="mb-2">
                Control menu functionality:
              </CopyText>
              <div className="bg-[var(--vharanani-charcoal-20)] p-3">
                <CaptionText>
                  • Backdrop click behavior<br />
                  • Scroll locking<br />
                  • Haptic feedback<br />
                  • Close triggers
                </CaptionText>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Design Guidelines */}
      <Card className="bg-gradient-to-br from-[var(--vharanani-burgundy)] to-[var(--vharanani-charcoal)]">
        <CardHeader>
          <CardTitle>
            <HeadlineSmall as="span" className="text-white">Design Guidelines</HeadlineSmall>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <HeadlineSmall className="mb-3 text-white">✓ Do</HeadlineSmall>
              <div className="space-y-2">
                <CopyText className="text-white/90">• Use on mobile/tablet devices</CopyText>
                <CopyText className="text-white/90">• Include clear close button</CopyText>
                <CopyText className="text-white/90">• Lock body scroll when open</CopyText>
                <CopyText className="text-white/90">• Provide haptic feedback</CopyText>
                <CopyText className="text-white/90">• Keep menu items concise</CopyText>
              </div>
            </div>

            <div>
              <HeadlineSmall className="mb-3 text-white">✗ Don't</HeadlineSmall>
              <div className="space-y-2">
                <CopyText className="text-white/90">• Use on desktop viewports</CopyText>
                <CopyText className="text-white/90">• Add too many menu items</CopyText>
                <CopyText className="text-white/90">• Remove backdrop overlay</CopyText>
                <CopyText className="text-white/90">• Use slow animations (&gt;0.5s)</CopyText>
                <CopyText className="text-white/90">• Nest multiple menus</CopyText>
              </div>
            </div>

            <div>
              <HeadlineSmall className="mb-3 text-white">Best Practices</HeadlineSmall>
              <div className="space-y-2">
                <CopyText className="text-white/90">• 5-7 menu items max</CopyText>
                <CopyText className="text-white/90">• 44px minimum touch target</CopyText>
                <CopyText className="text-white/90">• WCAG AA contrast ratios</CopyText>
                <CopyText className="text-white/90">• Semantic HTML structure</CopyText>
                <CopyText className="text-white/90">• Keyboard accessibility</CopyText>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Accessibility */}
      <Card>
        <CardHeader>
          <CardTitle>
            <HeadlineSmall as="span">Accessibility Features</HeadlineSmall>
          </CardTitle>
          <CardDescription>
            <CaptionText as="span">Built-in accessibility considerations</CaptionText>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex gap-3">
              <div className="w-1 bg-[var(--vharanani-burgundy)] flex-shrink-0" />
              <div>
                <CopyText className="mb-1">
                  <span className="font-bold">ARIA Labels:</span> Close button has aria-label for screen readers
                </CopyText>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-1 bg-[var(--vharanani-burgundy)] flex-shrink-0" />
              <div>
                <CopyText className="mb-1">
                  <span className="font-bold">Focus Management:</span> Focus trapped within menu when open
                </CopyText>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-1 bg-[var(--vharanani-burgundy)] flex-shrink-0" />
              <div>
                <CopyText className="mb-1">
                  <span className="font-bold">Semantic HTML:</span> Uses proper nav and list elements
                </CopyText>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-1 bg-[var(--vharanani-burgundy)] flex-shrink-0" />
              <div>
                <CopyText className="mb-1">
                  <span className="font-bold">Color Contrast:</span> Meets WCAG AA standards
                </CopyText>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
