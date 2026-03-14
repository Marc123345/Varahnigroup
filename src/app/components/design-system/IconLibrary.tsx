import * as React from 'react';
import {
  // Navigation Icons
  Home,
  Search,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  
  // Property & Building Icons
  Building,
  Building2,
  Home as HomeIcon,
  MapPin,
  Map,
  Landmark,
  School,
  Store,
  Warehouse,
  Hotel,
  
  // UI Actions
  Plus,
  Minus,
  Edit,
  Trash2,
  Save,
  Download,
  Upload,
  Share2,
  Copy,
  Check,
  AlertCircle,
  Info,
  HelpCircle,
  Settings,
  Filter,
  SlidersHorizontal,
  
  // Communication
  Mail,
  Phone,
  MessageSquare,
  Send,
  Bell,
  Calendar,
  Clock,
  
  // User & Account
  User,
  Users,
  UserPlus,
  UserMinus,
  Heart,
  Star,
  Eye,
  EyeOff,
  
  // File & Document
  File,
  FileText,
  Folder,
  Image,
  Paperclip,
  
  // Social & External
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ExternalLink,
  Globe,
  
  // Property Features
  BedDouble,
  ShowerHead,
  CarFront,
  Wifi,
  Tv,
  Wind,
  Zap,
  Droplet,
  
  // Commerce
  DollarSign,
  CreditCard,
  ShoppingCart,
  Tag,
  TrendingUp,
  TrendingDown,
  BarChart,
  PieChart,
  
  // Status
  CheckCircle,
  XCircle,
  AlertTriangle,
  Loader,
  Lock,
  Unlock,
  Shield,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { CaptionText, CopyText, HeadlineSmall, HeadlineBig } from './Typography';
import { cn } from '../ui/utils';

// Icon size variants
export const iconSizes = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
  '2xl': 40,
  '3xl': 48,
} as const;

export type IconSize = keyof typeof iconSizes;

interface IconDisplayProps {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  name: string;
  category?: string;
}

function IconDisplay({ icon: Icon, name }: IconDisplayProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(`<${name} />`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      onClick={handleCopy}
      className={cn(
        "group relative flex cursor-pointer flex-col items-center gap-3 border border-gray-200 bg-white p-4 transition-all hover:border-[var(--vharanani-burgundy)] hover:shadow-md",
        copied && "border-[var(--vharanani-burgundy)] bg-[var(--vharanani-burgundy-20)]"
      )}
    >
      <div className="flex size-12 items-center justify-center">
        <Icon 
          size={24} 
          className="text-[var(--vharanani-charcoal)] transition-colors group-hover:text-[var(--vharanani-burgundy)]" 
        />
      </div>
      <CaptionText className="text-center text-[var(--vharanani-text-muted)] group-hover:text-[var(--vharanani-burgundy)]">
        {name}
      </CaptionText>
      {copied && (
        <div className="absolute inset-0 flex items-center justify-center bg-[var(--vharanani-burgundy)]/10">
          <CaptionText className="font-bold text-[var(--vharanani-burgundy)]">
            Copied!
          </CaptionText>
        </div>
      )}
    </div>
  );
}

interface IconCategoryProps {
  title: string;
  description: string;
  icons: Array<{ icon: React.ComponentType<any>; name: string }>;
}

function IconCategory({ title, description, icons }: IconCategoryProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <HeadlineSmall as="span">{title}</HeadlineSmall>
        </CardTitle>
        <CardDescription>
          <CaptionText as="span">{description}</CaptionText>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
          {icons.map(({ icon, name }) => (
            <IconDisplay key={name} icon={icon} name={name} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export function IconLibrary() {
  const navigationIcons = [
    { icon: Home, name: 'Home' },
    { icon: Search, name: 'Search' },
    { icon: Menu, name: 'Menu' },
    { icon: X, name: 'X' },
    { icon: ChevronLeft, name: 'ChevronLeft' },
    { icon: ChevronRight, name: 'ChevronRight' },
    { icon: ChevronUp, name: 'ChevronUp' },
    { icon: ChevronDown, name: 'ChevronDown' },
    { icon: ArrowLeft, name: 'ArrowLeft' },
    { icon: ArrowRight, name: 'ArrowRight' },
    { icon: ArrowUp, name: 'ArrowUp' },
    { icon: ArrowDown, name: 'ArrowDown' },
  ];

  const propertyIcons = [
    { icon: Building, name: 'Building' },
    { icon: Building2, name: 'Building2' },
    { icon: HomeIcon, name: 'HomeIcon' },
    { icon: MapPin, name: 'MapPin' },
    { icon: Map, name: 'Map' },
    { icon: Landmark, name: 'Landmark' },
    { icon: School, name: 'School' },
    { icon: Store, name: 'Store' },
    { icon: Warehouse, name: 'Warehouse' },
    { icon: Hotel, name: 'Hotel' },
  ];

  const actionIcons = [
    { icon: Plus, name: 'Plus' },
    { icon: Minus, name: 'Minus' },
    { icon: Edit, name: 'Edit' },
    { icon: Trash2, name: 'Trash2' },
    { icon: Save, name: 'Save' },
    { icon: Download, name: 'Download' },
    { icon: Upload, name: 'Upload' },
    { icon: Share2, name: 'Share2' },
    { icon: Copy, name: 'Copy' },
    { icon: Check, name: 'Check' },
    { icon: AlertCircle, name: 'AlertCircle' },
    { icon: Info, name: 'Info' },
    { icon: HelpCircle, name: 'HelpCircle' },
    { icon: Settings, name: 'Settings' },
    { icon: Filter, name: 'Filter' },
    { icon: SlidersHorizontal, name: 'SlidersHorizontal' },
  ];

  const communicationIcons = [
    { icon: Mail, name: 'Mail' },
    { icon: Phone, name: 'Phone' },
    { icon: MessageSquare, name: 'MessageSquare' },
    { icon: Send, name: 'Send' },
    { icon: Bell, name: 'Bell' },
    { icon: Calendar, name: 'Calendar' },
    { icon: Clock, name: 'Clock' },
  ];

  const userIcons = [
    { icon: User, name: 'User' },
    { icon: Users, name: 'Users' },
    { icon: UserPlus, name: 'UserPlus' },
    { icon: UserMinus, name: 'UserMinus' },
    { icon: Heart, name: 'Heart' },
    { icon: Star, name: 'Star' },
    { icon: Eye, name: 'Eye' },
    { icon: EyeOff, name: 'EyeOff' },
  ];

  const fileIcons = [
    { icon: File, name: 'File' },
    { icon: FileText, name: 'FileText' },
    { icon: Folder, name: 'Folder' },
    { icon: Image, name: 'Image' },
    { icon: Paperclip, name: 'Paperclip' },
  ];

  const socialIcons = [
    { icon: Facebook, name: 'Facebook' },
    { icon: Twitter, name: 'Twitter' },
    { icon: Instagram, name: 'Instagram' },
    { icon: Linkedin, name: 'Linkedin' },
    { icon: Youtube, name: 'Youtube' },
    { icon: ExternalLink, name: 'ExternalLink' },
    { icon: Globe, name: 'Globe' },
  ];

  const featureIcons = [
    { icon: BedDouble, name: 'BedDouble' },
    { icon: ShowerHead, name: 'ShowerHead' },
    { icon: CarFront, name: 'CarFront' },
    { icon: Wifi, name: 'Wifi' },
    { icon: Tv, name: 'Tv' },
    { icon: Wind, name: 'Wind' },
    { icon: Zap, name: 'Zap' },
    { icon: Droplet, name: 'Droplet' },
  ];

  const commerceIcons = [
    { icon: DollarSign, name: 'DollarSign' },
    { icon: CreditCard, name: 'CreditCard' },
    { icon: ShoppingCart, name: 'ShoppingCart' },
    { icon: Tag, name: 'Tag' },
    { icon: TrendingUp, name: 'TrendingUp' },
    { icon: TrendingDown, name: 'TrendingDown' },
    { icon: BarChart, name: 'BarChart' },
    { icon: PieChart, name: 'PieChart' },
  ];

  const statusIcons = [
    { icon: CheckCircle, name: 'CheckCircle' },
    { icon: XCircle, name: 'XCircle' },
    { icon: AlertTriangle, name: 'AlertTriangle' },
    { icon: Loader, name: 'Loader' },
    { icon: Lock, name: 'Lock' },
    { icon: Unlock, name: 'Unlock' },
    { icon: Shield, name: 'Shield' },
  ];

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div>
        <HeadlineBig className="mb-4">Icon Library</HeadlineBig>
        <CopyText className="mb-6 max-w-3xl text-[var(--vharanani-text-muted)]">
          A comprehensive collection of icons from Lucide React, carefully selected for property 
          management and real estate applications. Click any icon to copy its import name.
        </CopyText>

        {/* Usage Guide */}
        <Card className="mb-8 border-[var(--vharanani-burgundy)]">
          <CardHeader>
            <CardTitle>
              <HeadlineSmall as="span">Usage Guide</HeadlineSmall>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <CopyText className="mb-2 font-bold text-[var(--vharanani-charcoal)]">
                Import Icons:
              </CopyText>
              <div className="bg-[var(--vharanani-neutral-darkest)] p-4">
                <code className="text-xs text-white">
                  {`import { Building, MapPin, User } from 'lucide-react';`}
                </code>
              </div>
            </div>

            <div>
              <CopyText className="mb-2 font-bold text-[var(--vharanani-charcoal)]">
                Basic Usage:
              </CopyText>
              <div className="bg-[var(--vharanani-neutral-darkest)] p-4">
                <code className="text-xs text-white">
                  {`<Building size={24} className="text-[var(--vharanani-burgundy)]" />`}
                </code>
              </div>
            </div>

            <div>
              <CopyText className="mb-2 font-bold text-[var(--vharanani-charcoal)]">
                Icon Sizes:
              </CopyText>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Building size={12} className="text-[var(--vharanani-burgundy)]" />
                  <CaptionText>12px (xs)</CaptionText>
                </div>
                <div className="flex items-center gap-2">
                  <Building size={16} className="text-[var(--vharanani-burgundy)]" />
                  <CaptionText>16px (sm)</CaptionText>
                </div>
                <div className="flex items-center gap-2">
                  <Building size={20} className="text-[var(--vharanani-burgundy)]" />
                  <CaptionText>20px (md)</CaptionText>
                </div>
                <div className="flex items-center gap-2">
                  <Building size={24} className="text-[var(--vharanani-burgundy)]" />
                  <CaptionText>24px (lg)</CaptionText>
                </div>
                <div className="flex items-center gap-2">
                  <Building size={32} className="text-[var(--vharanani-burgundy)]" />
                  <CaptionText>32px (xl)</CaptionText>
                </div>
                <div className="flex items-center gap-2">
                  <Building size={40} className="text-[var(--vharanani-burgundy)]" />
                  <CaptionText>40px (2xl)</CaptionText>
                </div>
              </div>
            </div>

            <div>
              <CopyText className="mb-2 font-bold text-[var(--vharanani-charcoal)]">
                Color Variants:
              </CopyText>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Building size={24} className="text-[var(--vharanani-burgundy)]" />
                  <CaptionText>Burgundy</CaptionText>
                </div>
                <div className="flex items-center gap-2">
                  <Building size={24} className="text-[var(--vharanani-charcoal)]" />
                  <CaptionText>Charcoal</CaptionText>
                </div>
                <div className="flex items-center gap-2">
                  <Building size={24} className="text-[var(--vharanani-text-muted)]" />
                  <CaptionText>Muted</CaptionText>
                </div>
                <div className="flex items-center gap-2 bg-[var(--vharanani-charcoal)] p-2">
                  <Building size={24} className="text-white" />
                  <CaptionText className="text-white">White</CaptionText>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Icon Categories */}
      <IconCategory
        title="Navigation Icons"
        description="Icons for navigation, menus, and directional controls"
        icons={navigationIcons}
      />

      <IconCategory
        title="Property & Building Icons"
        description="Icons representing different property types and locations"
        icons={propertyIcons}
      />

      <IconCategory
        title="UI Actions"
        description="Icons for common interface actions and controls"
        icons={actionIcons}
      />

      <IconCategory
        title="Communication"
        description="Icons for messaging, notifications, and scheduling"
        icons={communicationIcons}
      />

      <IconCategory
        title="User & Account"
        description="Icons for user profiles, authentication, and favorites"
        icons={userIcons}
      />

      <IconCategory
        title="File & Document"
        description="Icons for file management and document handling"
        icons={fileIcons}
      />

      <IconCategory
        title="Social & External"
        description="Social media and external link icons"
        icons={socialIcons}
      />

      <IconCategory
        title="Property Features"
        description="Icons representing property amenities and features"
        icons={featureIcons}
      />

      <IconCategory
        title="Commerce"
        description="Icons for pricing, transactions, and analytics"
        icons={commerceIcons}
      />

      <IconCategory
        title="Status & Security"
        description="Icons for status indicators and security features"
        icons={statusIcons}
      />

      {/* Design Guidelines */}
      <Card className="bg-[var(--vharanani-neutral-darker)]">
        <CardHeader>
          <CardTitle>
            <HeadlineSmall as="span" className="text-white">Icon Design Guidelines</HeadlineSmall>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <HeadlineSmall className="mb-3 text-[var(--vharanani-burgundy)]">
                Size Guidelines
              </HeadlineSmall>
              <CopyText className="space-y-2 text-white/90">
                • Use 16px (sm) for inline text icons<br />
                • Use 20px (md) for small buttons and chips<br />
                • Use 24px (lg) for standard buttons<br />
                • Use 32px+ (xl, 2xl) for feature cards<br />
                • Maintain consistent sizing within sections
              </CopyText>
            </div>

            <div>
              <HeadlineSmall className="mb-3 text-[var(--vharanani-burgundy)]">
                Color Usage
              </HeadlineSmall>
              <CopyText className="space-y-2 text-white/90">
                • Primary actions: Burgundy<br />
                • Default UI: Charcoal<br />
                • Disabled/inactive: Text Muted<br />
                • On dark backgrounds: White<br />
                • Maintain WCAG AA contrast ratios
              </CopyText>
            </div>

            <div>
              <HeadlineSmall className="mb-3 text-[var(--vharanani-burgundy)]">
                Spacing & Alignment
              </HeadlineSmall>
              <CopyText className="space-y-2 text-white/90">
                • Align icons vertically with text<br />
                • Use 8px gap between icon and text<br />
                • Center icons in buttons and badges<br />
                • Add proper padding in clickable areas<br />
                • Minimum touch target: 44x44px
              </CopyText>
            </div>

            <div>
              <HeadlineSmall className="mb-3 text-[var(--vharanani-burgundy)]">
                Best Practices
              </HeadlineSmall>
              <CopyText className="space-y-2 text-white/90">
                • Use icons to support, not replace text<br />
                • Keep icon usage consistent<br />
                • Don't rotate or skew icons<br />
                • Ensure icons are semantic and clear<br />
                • Add aria-labels for accessibility
              </CopyText>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}