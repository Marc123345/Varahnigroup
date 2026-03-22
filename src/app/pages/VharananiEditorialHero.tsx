import { useState, useEffect, useCallback, useMemo, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu, ArrowRight, ArrowLeft, Building2, MapPin, Phone, Mail,
  ChevronDown, Heart, HardHat, Users, Briefcase, GraduationCap,
  Shield, Landmark, TreePine, Globe, Target, Eye, Layers,
  Droplets, Wrench, Award, Home, Factory,
} from 'lucide-react';
import { MobileMenu } from '../components/layout/MobileMenu';
import { CSS3DCube } from '../components/ui/CSS3DCube';
import { GlassmorphismOverlay } from '../components/overlay/GlassmorphismOverlay';
import { VharananiHomeBanner } from './VharananiHomeBanner';
import { useResponsive } from '../hooks/useResponsive';
import { safeVibrate } from '../utils/vibration';
import vectorBg from '../../assets/Vector.svg';
import {
  GroupWireframe_ExecutiveSummary,
  GroupWireframe_PortfolioGrid,
  GroupWireframe_StrategicPillars,
  GroupWireframe_Leadership,
  GroupWireframe_ImpactGovernance,
  GroupWireframe_NewsContact,
  GroupWireframe_VisionMission,
  GroupWireframe_Governance,
  GroupWireframe_Companies,
} from '../components/divisions/VharananiGroupLayouts';
import {
  PropertiesWireframe_AboutImpact,
  PropertiesWireframe_IntegratedServices,
  PropertiesWireframe_FeaturedProjects,
  PropertiesWireframe_Compliance,
  PropertiesWireframe_ValuesImpact,
  PropertiesWireframe_ContactFootprint,
} from '../components/divisions/VharananiPropertiesLayouts';
import {
  DMFTWireframe_HeroAbout,
  DMFTWireframe_DevelopmentApproach,
  DMFTWireframe_Portfolio,
  DMFTWireframe_CapabilitiesQuality,
  DMFTWireframe_HeritageContact,
} from '../components/divisions/VharananiDMFTLayouts';
import {
  FoundationWireframe_Hero,
  FoundationWireframe_PartnerNetwork,
  FoundationWireframe_ProgrammeAreas,
  FoundationWireframe_ImpactStories,
  FoundationWireframe_Heritage,
  FoundationWireframe_Contact,
} from '../components/divisions/VharananiFoundationLayouts';

// ═══════════════════════════════════════════════════════════
// DATA STRUCTURES
// ═══════════════════════════════════════════════════════════

interface Section {
  id: string;
  index: string;
  title: string;
  type: string;
  description: string;
  image: string;
}

interface Division {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  type: string;
  ref: string;
  description: string;
  image: string;
  sections: Section[];
}

const divisions: Division[] = [
  {
    id: 'group',
    index: '01',
    title: 'Vharanani Group',
    subtitle: 'Vision. Structure. Impact.',
    type: 'GROUP',
    ref: 'Building Africa\'s Future',
    description: 'A wholly Black-owned investment holding company driving infrastructure, property development, innovation, and social impact across South Africa',
    image: 'https://images.unsplash.com/photo-1763932811684-7140aa52a254?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBoZWFkcXVhcnRlcnMlMjBidWlsZGluZyUyMG1vZGVybiUyMEFmcmljYXxlbnwxfHx8fDE3NzMwNTU5MTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    sections: [
      { id: 'about', index: 'Sec 1', title: 'Who We Are', type: 'INTELLIGENCE', description: 'Our story, mandate, and founding vision', image: 'https://images.unsplash.com/photo-1763932811684-7140aa52a254?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBoZWFkcXVhcnRlcnMlMjBidWlsZGluZyUyMG1vZGVybiUyMEFmcmljYXxlbnwxfHx8fDE3NzMwNTU5MTF8MA&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'portfolio', index: 'Sec 2', title: 'Our Portfolio', type: 'HOLDINGS', description: 'Subsidiary companies and sector expertise', image: 'https://images.unsplash.com/photo-1653378972336-103e1ea62721?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwaW52ZXN0bWVudCUyMHBvcnRmb2xpbyUyMGJ1c2luZXNzJTIwc3RyYXRlZ3l8ZW58MXx8fHwxNzczMDU2MzM0fDA&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'pillars', index: 'Sec 3', title: 'Strategic Pillars', type: 'STRATEGY', description: 'Infrastructure, assets, innovation, and social impact', image: 'https://images.unsplash.com/photo-1769738360873-3ba6cac0b308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm93dGglMjBwaWxsYXJzJTIwY29ycG9yYXRlJTIwcGxhbm5pbmclMjB3aGl0ZWJvYXJkfGVufDF8fHx8MTc3MzA1NjMzOHww&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'leadership', index: 'Sec 4', title: 'Leadership', type: 'PEOPLE', description: 'Founder & Group Executive Chairman', image: 'https://images.unsplash.com/photo-1758518727707-b023e285b709?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBncm91cCUyMGxlYWRlcnNoaXAlMjBib2FyZHJvb20lMjBleGVjdXRpdmV8ZW58MXx8fHwxNzczMDU1OTEyfDA&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'impact', index: 'Sec 5', title: 'Impact & Responsibility', type: 'IMPACT', description: 'Community benefit and social upliftment', image: 'https://images.unsplash.com/photo-1658129850537-ea7517a9682f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBpbXBhY3QlMjBjb21tdW5pdHklMjBkZXZlbG9wbWVudCUyMEFmcmljYXxlbnwxfHx8fDE3NzMwNTYzMzV8MA&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'vision-mission', index: 'Sec 6', title: 'Vision & Mission', type: 'MANDATE', description: 'Our vision, mission, and corporate overview', image: 'https://images.unsplash.com/photo-1656646424292-cf207f3f1749?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB2aXNpb24lMjBtaXNzaW9uJTIwc3RhdGVtZW50JTIwYm9hcmRyb29tfGVufDF8fHx8MTc3MzA1NjMzNXww&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'governance', index: 'Sec 7', title: 'Governance & Compliance', type: 'COMPLIANCE', description: 'Ethics, risk management, and transparent reporting', image: 'https://images.unsplash.com/photo-1556219845-95c1847629e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBnb3Zlcm5hbmNlJTIwYW5udWFsJTIwcmVwb3J0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MzA1NTkxM3ww&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'companies', index: 'Sec 8', title: 'Our Companies', type: 'SUBSIDIARIES', description: 'Vharanani Properties, DMFT, David Mabilu Foundation', image: 'https://images.unsplash.com/photo-1682924754699-dcf11b641343?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGluZnJhc3RydWN0dXJlJTIwZGV2ZWxvcG1lbnQlMjBBZnJpY2ElMjByb2Fkc3xlbnwxfHx8fDE3NzMwNTYzMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'sustainable-impact', index: 'Sec 9', title: 'Sustainable Impact & News', type: 'UPDATES', description: 'Driving impact, news, and contact information', image: 'https://images.unsplash.com/photo-1766740606233-6573571caa6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXdzJTIwbWVkaWElMjB1cGRhdGUlMjBjb3Jwb3JhdGUlMjBvZmZpY2V8ZW58MXx8fHwxNzczMDU2MzQyfDA&ixlib=rb-4.1.0&q=80&w=1080' },
    ],
  },
  {
    id: 'properties',
    index: '02',
    title: 'Vharanani Properties',
    subtitle: 'Infrastructure Provider of Distinction',
    type: 'CONSTRUCTION',
    ref: 'Est. 2001',
    description: 'A leading Black-owned construction and infrastructure development company delivering large-scale projects across South Africa for both public and private sector clients',
    image: 'https://images.unsplash.com/photo-1764222233275-87dc016c11dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwcm9wZXJ0eSUyMGRldmVsb3BtZW50JTIwYWVyaWFsfGVufDF8fHx8MTc3MjczNDk4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    sections: [
      { id: 'about', index: 'Sec 1', title: 'About Us', type: 'INTELLIGENCE', description: 'Company history, leadership, and national reputation', image: 'https://images.unsplash.com/photo-1549280192-a63c556a0e26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBjb21wYW55JTIwZm91bmRlciUyMENFTyUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MzA1NzE0OXww&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'vision-values', index: 'Sec 2', title: 'Vision, Mission & Values', type: 'MANDATE', description: 'Our guiding principles and purpose', image: 'https://images.unsplash.com/photo-1656646424292-cf207f3f1749?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB2aXNpb24lMjBtaXNzaW9uJTIwdmFsdWVzJTIwYm9hcmRyb29tfGVufDF8fHx8MTc3MzA1NzE0OHww&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'roads-civils', index: 'Sec 3', title: 'Roads & Civil Engineering', type: 'SERVICES', description: 'Turnkey civil construction, BRT systems, highways', image: 'https://images.unsplash.com/photo-1669380365306-eb1cc4dd47df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2FkJTIwY29uc3RydWN0aW9uJTIwaGlnaHdheSUyMFNvdXRoJTIwQWZyaWNhfGVufDF8fHx8MTc3MzA1NzE0Nnww&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'water-sanitation', index: 'Sec 4', title: 'Water & Sanitation', type: 'SERVICES', description: 'Bulk water supply, pipelines, sewer reticulation', image: 'https://images.unsplash.com/photo-1768967271510-0d6858f089a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMHBpcGVsaW5lJTIwaW5mcmFzdHJ1Y3R1cmUlMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzczMDU3MTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'building-construction', index: 'Sec 5', title: 'Building Construction', type: 'SERVICES', description: 'Public, commercial, and institutional building projects', image: 'https://images.unsplash.com/photo-1763665814657-919dac53ea26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidWlsZGluZyUyMGNvbnN0cnVjdGlvbiUyMHNpdGUlMjBzY2FmZm9sZGluZ3xlbnwxfHx8fDE3NzMwNTcxNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'residential', index: 'Sec 6', title: 'Residential Development', type: 'SERVICES', description: 'RDP housing, apartments, townhouses, and estates', image: 'https://images.unsplash.com/photo-1759670509449-23a374206521?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGhvdXNpbmclMjBkZXZlbG9wbWVudCUyMGVzdGF0ZXxlbnwxfHx8fDE3NzMwNTcxNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'property-dev', index: 'Sec 7', title: 'Property Development', type: 'SERVICES', description: 'Turnkey development from land acquisition to construction', image: 'https://images.unsplash.com/photo-1628697467370-2aeb6253b569?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9wZXJ0eSUyMGRldmVsb3BtZW50JTIwbWFzdGVycGxhbiUyMGFlcmlhbHxlbnwxfHx8fDE3NzMwNTcxNDd8MA&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'accreditation', index: 'Sec 8', title: 'Accreditation & Compliance', type: 'COMPLIANCE', description: 'ISO 9001, B-BBEE Level 1, CIDB Grade 9', image: 'https://images.unsplash.com/photo-1742112125635-6f8201c6ee3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJU08lMjBjZXJ0aWZpY2F0aW9uJTIwcXVhbGl0eSUyMGNvbXBsaWFuY2UlMjBjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzczMDU3MTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'featured-projects', index: 'Sec 9', title: 'Featured Projects & Impact', type: 'PROJECTS', description: 'Major infrastructure projects and socioeconomic impact', image: 'https://images.unsplash.com/photo-1636783187647-cc97111bffdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMGNvbnN0cnVjdGlvbiUyMHB1YmxpYyUyMGluZnJhc3RydWN0dXJlJTIwQWZyaWNhfGVufDF8fHx8MTc3MzA1NzE1MXww&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'contact-footprint', index: 'Sec 10', title: 'Contact & Footprint', type: 'CONTACT', description: 'Office locations, enquiry form, and national reach', image: 'https://images.unsplash.com/photo-1619428602382-a370e5b73fd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTb3V0aCUyMEFmcmljYSUyMG1hcCUyMGRhcmslMjB0aGVtZSUyMGdlb2dyYXBoaWN8ZW58MXx8fHwxNzczMTgyMjYwfDA&ixlib=rb-4.1.0&q=80&w=1080' },
    ],
  },
  {
    id: 'foundation',
    index: '03',
    title: 'The David Mabilu Foundation',
    subtitle: 'Building Stronger Communities Through Opportunity',
    type: 'SOCIAL DEVELOPMENT',
    ref: 'Est. 2011',
    description: 'A social development organisation committed to reducing poverty and sustainably improving the living standards of marginalised communities across South Africa',
    image: 'https://images.unsplash.com/photo-1694286068274-1058e6b04dcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY2hhcml0eSUyMGZvdW5kYXRpb24lMjBjb21tdW5pdHl8ZW58MXx8fHwxNzcyNzM0OTg2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    sections: [
      { id: 'about', index: 'Sec 1', title: 'About the Foundation', type: 'INTELLIGENCE', description: 'Our goal, approach, and founding vision', image: 'https://images.unsplash.com/photo-1694286068274-1058e6b04dcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY2hhcml0eSUyMGZvdW5kYXRpb24lMjBjb21tdW5pdHl8ZW58MXx8fHwxNzcyNzM0OTg2fDA&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'education', index: 'Sec 2', title: 'Education', type: 'PROGRAMMES', description: 'Scholarships, school support, and infrastructure', image: 'https://images.unsplash.com/photo-1770843093640-c44ae557928b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwY2hpbGRyZW4lMjBlZHVjYXRpb24lMjBjbGFzc3Jvb20lMjBsZWFybmluZ3xlbnwxfHx8fDE3NzMwNTc2OTB8MA&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'housing', index: 'Sec 3', title: 'Housing', type: 'PROGRAMMES', description: 'Housing initiatives for disadvantaged families', image: 'https://images.unsplash.com/photo-1615027212409-2628cc0cc11a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBob3VzaW5nJTIwY29uc3RydWN0aW9uJTIwQWZyaWNhJTIwdmlsbGFnZXxlbnwxfHx8fDE3NzMwNTc2OTF8MA&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'community', index: 'Sec 4', title: 'Community Upliftment', type: 'PROGRAMMES', description: 'Youth, women, sports, and community support', image: 'https://images.unsplash.com/photo-1761039808597-5639866bab8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3V0aCUyMHNwb3J0cyUyMGNvbW11bml0eSUyMGRldmVsb3BtZW50JTIwQWZyaWNhfGVufDF8fHx8MTc3MzA1NzY5MXww&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'impact', index: 'Sec 5', title: 'Our Impact', type: 'RESULTS', description: 'Meaningful contributions and lasting change', image: 'https://images.unsplash.com/photo-1611502029437-54521b5e6ada?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBpbXBhY3QlMjBkZXZlbG9wbWVudCUyMHJ1cmFsJTIwU291dGglMjBBZnJpY2F8ZW58MXx8fHwxNzczMDU3NjkyfDA&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'partnerships', index: 'Sec 6', title: 'Partnerships', type: 'NETWORK', description: 'Collaborative partnerships and the Vharanani Group', image: 'https://images.unsplash.com/photo-1697665387559-253e7a645e96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub25wcm9maXQlMjBwYXJ0bmVyc2hpcCUyMGhhbmRzaGFrZSUyMGNvbW11bml0eXxlbnwxfHx8fDE3NzMwNTc2OTN8MA&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'heritage', index: 'Sec 7', title: 'Vharanani Group Heritage', type: 'HERITAGE', description: 'The backbone — supported by the Vharanani Group', image: 'https://images.unsplash.com/photo-1517598024396-46c53fb391a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwZm91bmRlciUyMHBoaWxhbnRocm9waXN0JTIwcG9ydHJhaXQlMjBjYW5kaWR8ZW58MXx8fHwxNzczMTg2MTAwfDA&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'get-involved', index: 'Sec 8', title: 'Contact & Get Involved', type: 'CONTACT', description: 'Join us in building opportunity', image: 'https://images.unsplash.com/photo-1665848170858-359b25d5eb81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwc3R1ZGVudHMlMjBzbWlsaW5nJTIwY29tbXVuaXR5JTIwZ2F0aGVyaW5nJTIwd2FybXxlbnwxfHx8fDE3NzMxODYwOTh8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    ],
  },
  {
    id: 'dmft',
    index: '04',
    title: 'DMFT Property Developers',
    subtitle: 'Creating Exceptional Property Developments',
    type: 'PROPERTY DEVELOPMENT',
    ref: 'Part of Vharanani Group',
    description: 'A property development company focused on the creation of high-quality residential and mixed-use developments across South Africa',
    image: 'https://images.unsplash.com/photo-1707410148802-fe08fe956398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBkZXZlbG9wbWVudCUyMGluZnJhc3RydWN0dXJlJTIwc291dGglMjBhZnJpY2F8ZW58MXx8fHwxNzcyNzM0OTg3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    sections: [
      { id: 'about', index: 'Sec 1', title: 'About DMFT', type: 'INTELLIGENCE', description: 'Company overview and Vharanani Group partnership', image: 'https://images.unsplash.com/photo-1762146828422-50a8bd416d3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9wZXJ0eSUyMGRldmVsb3BtZW50JTIwcGxhbm5pbmclMjBhcmNoaXRlY3R1cmFsJTIwYmx1ZXByaW50fGVufDF8fHx8MTc3MzA1NzQ0OHww&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'approach', index: 'Sec 2', title: 'Development Approach', type: 'PROCESS', description: 'Full lifecycle from land acquisition to delivery', image: 'https://images.unsplash.com/photo-1609561515089-91b7fa540820?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFsaXR5JTIwY29uc3RydWN0aW9uJTIwc3RhbmRhcmRzJTIwaW5zcGVjdGlvbnxlbnwxfHx8fDE3NzMwNTc0NDh8MA&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'residential-estates', index: 'Sec 3', title: 'Residential Estates', type: 'DEVELOPMENTS', description: 'Secure estates for modern living', image: 'https://images.unsplash.com/photo-1722293862101-6511f044073b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNpZGVudGlhbCUyMGVzdGF0ZSUyMGdhdGVkJTIwY29tbXVuaXR5fGVufDF8fHx8MTc3MzA1NzQ0Nnww&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'apartments-townhouses', index: 'Sec 4', title: 'Apartments & Townhouses', type: 'DEVELOPMENTS', description: 'Urban apartments and modern townhouse complexes', image: 'https://images.unsplash.com/photo-1623752938001-25a3f247ad4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBidWlsZGluZyUyMHVyYmFuJTIwZGV2ZWxvcG1lbnR8ZW58MXx8fHwxNzczMDU3NDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'mixed-use', index: 'Sec 5', title: 'Mixed-Use Developments', type: 'DEVELOPMENTS', description: 'Integrated residential, commercial, and community spaces', image: 'https://images.unsplash.com/photo-1758304480521-e6906c8ead7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaXhlZCUyMHVzZSUyMGRldmVsb3BtZW50JTIwdXJiYW4lMjBwbGFubmluZyUyMGFlcmlhbHxlbnwxfHx8fDE3NzMwNTc0NDd8MA&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'capabilities', index: 'Sec 6', title: 'Capabilities & Quality', type: 'STANDARDS', description: 'Development expertise and quality commitment', image: 'https://images.unsplash.com/photo-1767818017596-b9e8504704a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3duaG91c2UlMjBjb21wbGV4JTIwbW9kZXJuJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3MzA1NzQ0N3ww&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'heritage-contact', index: 'Sec 7', title: 'Heritage & Contact', type: 'CONTACT', description: 'Vharanani Group heritage and partnership enquiries', image: 'https://images.unsplash.com/photo-1646678667054-d68e27a3f085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBkcm9uZSUyMGFlcmlhbCUyMG1vZGVybiUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc3MzE4NTY3OXww&ixlib=rb-4.1.0&q=80&w=1080' },
    ],
  },
];

const extraCubeImages = [
  'https://images.unsplash.com/photo-1694286068561-3233c946e9be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBlbXBvd2VybWVudCUyMGVkdWNhdGlvbiUyMEFmcmljYXxlbnwxfHx8fDE3NzI3MzQ5OTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1656088304789-02d1ad6c9149?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZyUyMGZhY2FkZXxlbnwxfHx8fDE3NzI2ODMwODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
];

// ═══════════════════════════════════════════════════════════
// DIVISION LOGOS
// ═══════════════════════════════════════════════════════════

const DIVISION_LOGOS: Record<string, string> = {
  group: 'https://ik.imagekit.io/qcvroy8xpd/Frame%207%20(1).png',
  properties: 'https://ik.imagekit.io/qcvroy8xpd/Frame%203.png',
  foundation: 'https://scontent.ftlv19-3.fna.fbcdn.net/v/t39.30808-6/307124543_1035071653876386_5610287523756278216_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=QB-ZZq8SIS8Q7kNvwGPK0-N&_nc_oc=AdpuJc1437ohUXjWZmGdnJWOBWDcCkRCTSArttvEkQ4ivqaEeDLKKvkalvcObABkT819UQkQ26U6WH-l2_-Y28AG&_nc_zt=23&_nc_ht=scontent.ftlv19-3.fna&_nc_gid=wEWvJYU88IcAPAivk2VQSg&_nc_ss=7a32e&oh=00_AfznV8l-txtVkYU_EBkQDKoPfMpdyd7D1geoYGVe11F9fw&oe=69C5982B',
  dmft: 'https://ik.imagekit.io/qcvroy8xpd/David%20Mabilu%20FT%20Property%20Developers%20logo%201.png',
};

// ═══════════════════════════════════════════════════════════
// OVERLAY CONTENT COMPONENTS
// ═══════════════════════════════════════════════════════════

function StatCard({ label, value, icon }: { label: string; value: string; icon: ReactNode }) {
  return (
    <div className="p-4" style={{ border: '1px solid var(--vharanani-charcoal-20)', background: 'rgba(0,0,0,0.03)' }}>
      <div className="flex items-center gap-3 mb-2">
        <div style={{ color: 'var(--vharanani-burgundy)' }}>{icon}</div>
        <div className="font-bebas-neue typo-subline" style={{ color: 'var(--vharanani-charcoal)' }}>{value}</div>
      </div>
      <div className="tracking-[0.15em] uppercase font-inter typo-label" style={{ color: 'var(--vharanani-charcoal-60)' }}>{label}</div>
    </div>
  );
}

function ContentBlock({ title, text }: { title: string; text: string }) {
  return (
    <div className="mb-6">
      {title && <h4 className="font-bebas-neue typo-headline-small mb-2 uppercase tracking-wide" style={{ color: 'var(--vharanani-charcoal)' }}>{title}</h4>}
      <p className="font-inter typo-copy" style={{ color: 'var(--vharanani-charcoal)' }}>{text}</p>
    </div>
  );
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="mb-6">
      <h4 className="font-bebas-neue typo-headline-small mb-3 uppercase tracking-wide" style={{ color: 'var(--vharanani-charcoal)' }}>{title}</h4>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 font-inter typo-copy" style={{ lineHeight: '1.6', color: 'var(--vharanani-charcoal)' }}>
            <span className="w-1.5 h-1.5 mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--vharanani-burgundy)' }} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({ title, location, status, type }: { title: string; location: string; status: string; type: string }) {
  return (
    <div className="p-4 mb-3" style={{ border: '1px solid var(--vharanani-charcoal-20)', background: 'rgba(0,0,0,0.02)' }}>
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-bebas-neue typo-headline-small tracking-wide" style={{ color: 'var(--vharanani-charcoal)' }}>{title}</h4>
        <div className="typo-caption tracking-[0.15em] uppercase px-2 py-1" style={{ color: 'var(--vharanani-burgundy)', border: '1px solid var(--vharanani-burgundy)' }}>{status}</div>
      </div>
      <div className="flex items-center gap-3">
        <span className="tracking-[0.1em] uppercase font-inter typo-label" style={{ color: 'var(--vharanani-charcoal-60)' }}>{location}</span>
        <span className="w-1 h-1" style={{ backgroundColor: 'var(--vharanani-charcoal-20)' }} />
        <span className="tracking-[0.1em] uppercase font-inter typo-label" style={{ color: 'var(--vharanani-charcoal-60)' }}>{type}</span>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// OVERLAY SECTION CONTENT (what shows when a section is clicked)
// ═══════════════════════════════════════════════════════════

function getSectionContent(divisionId: string, sectionId: string, onTabChange?: (tabId: string) => void): ReactNode {
  const contentMap: Record<string, Record<string, ReactNode>> = {
    properties: {
      about: (<PropertiesWireframe_AboutImpact />),
      'vision-values': (<PropertiesWireframe_ValuesImpact />),
      'roads-civils': (<PropertiesWireframe_IntegratedServices />),
      'water-sanitation': (<PropertiesWireframe_IntegratedServices />),
      'building-construction': (<PropertiesWireframe_IntegratedServices />),
      residential: (<PropertiesWireframe_IntegratedServices />),
      'property-dev': (<PropertiesWireframe_IntegratedServices />),
      accreditation: (<PropertiesWireframe_Compliance />),
      'featured-projects': (<PropertiesWireframe_FeaturedProjects />),
      'contact-footprint': (<PropertiesWireframe_ContactFootprint />),
    },
    _properties_legacy: {
      _about_legacy: (
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            <StatCard label="Years of Experience" value="20+" icon={<Building2 size={18} />} />
            <StatCard label="National Presence" value="9 Provinces" icon={<MapPin size={18} />} />
            <StatCard label="Projects Value" value="Billions" icon={<Briefcase size={18} />} />
            <StatCard label="B-BBEE Level" value="1" icon={<Award size={18} />} />
          </div>
          <ContentBlock title="About Vharanani Properties" text="Vharanani Properties was founded in 2001 by Chief Executive Officer David Mabilu. What began as a small operation has grown into one of South Africa's leading Black-owned and managed construction companies." />
          <ContentBlock title="Two Decades of Excellence" text="With more than two decades of experience, the company has developed strong technical expertise across a broad range of infrastructure sectors, delivering projects that meet the highest standards of quality, safety, and efficiency." />
          <ContentBlock title="" text="Today, Vharanani Properties operates nationally and has successfully completed numerous high-value construction projects valued at billions of rands. Our multidisciplinary capability enables us to deliver projects of varying scale and complexity while maintaining strict adherence to quality standards, safety protocols, and responsible project management." />
          <div className="my-6 p-5" style={{ borderLeft: '3px solid var(--vharanani-burgundy)', background: 'rgba(129,41,33,0.04)' }}>
            <div className="font-inter typo-copy italic" style={{ color: 'var(--vharanani-charcoal)' }}>
              "Established in 2001, the company has built a national reputation for delivering high-quality infrastructure, property development, and civil engineering projects for both public and private sector clients."
            </div>
          </div>
        </div>
      ),
      'vision-values': (
        <div>
          <div className="my-6 p-5" style={{ borderLeft: '3px solid var(--vharanani-burgundy)', background: 'rgba(129,41,33,0.04)' }}>
            <div className="font-bebas-neue text-lg mb-2 uppercase tracking-wide" style={{ color: 'var(--vharanani-burgundy)' }}>Our Vision</div>
            <div className="font-inter typo-copy italic" style={{ color: 'var(--vharanani-charcoal)' }}>
              To be an infrastructure provider of distinction.
            </div>
          </div>
          <div className="my-6 p-5" style={{ borderLeft: '3px solid var(--vharanani-burgundy)', background: 'rgba(129,41,33,0.04)' }}>
            <div className="font-bebas-neue text-lg mb-2 uppercase tracking-wide" style={{ color: 'var(--vharanani-burgundy)' }}>Our Mission</div>
            <div className="font-inter typo-copy italic" style={{ color: 'var(--vharanani-charcoal)' }}>
              To restore people's dignity through infrastructure development.
            </div>
          </div>
          <div className="font-bebas-neue text-lg mb-4 uppercase tracking-wide" style={{ color: 'var(--vharanani-charcoal)' }}>Our Values</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="p-5" style={{ border: '1px solid var(--vharanani-charcoal-20)', background: 'rgba(0,0,0,0.02)' }}>
              <div className="flex items-center gap-2 mb-3">
                <Shield size={18} style={{ color: 'var(--vharanani-burgundy)' }} />
                <div className="font-bebas-neue tracking-wide" style={{ color: 'var(--vharanani-charcoal)' }}>Professionalism</div>
              </div>
              <div className="font-inter typo-copy-small" style={{ color: 'var(--vharanani-charcoal-60)' }}>Maintaining the highest standards in execution and project delivery.</div>
            </div>
            <div className="p-5" style={{ border: '1px solid var(--vharanani-charcoal-20)', background: 'rgba(0,0,0,0.02)' }}>
              <div className="flex items-center gap-2 mb-3">
                <Target size={18} style={{ color: 'var(--vharanani-burgundy)' }} />
                <div className="font-bebas-neue tracking-wide" style={{ color: 'var(--vharanani-charcoal)' }}>Accountability</div>
              </div>
              <div className="font-inter typo-copy-small" style={{ color: 'var(--vharanani-charcoal-60)' }}>Taking full responsibility for the quality, safety, and success of every project.</div>
            </div>
            <div className="p-5" style={{ border: '1px solid var(--vharanani-charcoal-20)', background: 'rgba(0,0,0,0.02)' }}>
              <div className="flex items-center gap-2 mb-3">
                <Eye size={18} style={{ color: 'var(--vharanani-burgundy)' }} />
                <div className="font-bebas-neue tracking-wide" style={{ color: 'var(--vharanani-charcoal)' }}>Transparency</div>
              </div>
              <div className="font-inter typo-copy-small" style={{ color: 'var(--vharanani-charcoal-60)' }}>Operating with openness and integrity in all engagements.</div>
            </div>
            <div className="p-5" style={{ border: '1px solid var(--vharanani-charcoal-20)', background: 'rgba(0,0,0,0.02)' }}>
              <div className="flex items-center gap-2 mb-3">
                <Heart size={18} style={{ color: 'var(--vharanani-burgundy)' }} />
                <div className="font-bebas-neue tracking-wide" style={{ color: 'var(--vharanani-charcoal)' }}>Honesty</div>
              </div>
              <div className="font-inter typo-copy-small" style={{ color: 'var(--vharanani-charcoal-60)' }}>Building long-term relationships based on trust and ethical conduct.</div>
            </div>
          </div>
        </div>
      ),
      'roads-civils': (
        <div>
          <ContentBlock title="Roads & Civil Engineering" text="We deliver turnkey civil construction solutions using our own plant and equipment. Our capabilities include road construction, earthworks, water infrastructure, and civil structures across diverse terrains and environments." />
          <ContentBlock title="" text="Our work includes major infrastructure developments such as Bus Rapid Transit (BRT) systems, highways, pipelines, and water reticulation projects." />
          <div className="font-bebas-neue text-lg mb-3 uppercase tracking-wide" style={{ color: 'var(--vharanani-charcoal)' }}>Featured Projects</div>
          <ProjectCard title="Polokwane BRT System" location="Limpopo, ZA" status="COMPLETED" type="BRT Infrastructure" />
          <ProjectCard title="Tshwane BRT System" location="Gauteng, ZA" status="COMPLETED" type="BRT Infrastructure" />
          <ProjectCard title="Marulaneng–Sekhukhune Road" location="Limpopo, ZA" status="COMPLETED" type="Road Development" />
          <ProjectCard title="Marulaneng–Mphahlele Road" location="Limpopo, ZA" status="COMPLETED" type="Road Construction" />
          <ListBlock title="Core Capabilities" items={['Road construction & earthworks', 'Bus Rapid Transit (BRT) systems', 'Highway construction', 'Civil structures', 'Pipeline infrastructure', 'Water reticulation projects']} />
        </div>
      ),
      'water-sanitation': (
        <div>
          <ContentBlock title="Water & Sanitation Infrastructure" text="We specialize in large-scale water and sanitation infrastructure including bulk water supply systems, pipeline installations, sewer reticulation, and grey water systems." />
          <ContentBlock title="" text="Our teams have successfully delivered major water infrastructure projects designed to support sustainable municipal service delivery." />
          <div className="font-bebas-neue text-lg mb-3 uppercase tracking-wide" style={{ color: 'var(--vharanani-charcoal)' }}>Featured Projects</div>
          <ProjectCard title="Lepelle Revitalization Programme" location="Limpopo, ZA" status="COMPLETED" type="Bulk Water" />
          <ProjectCard title="Rand Water Pipeline" location="Gauteng, ZA" status="COMPLETED" type="Pipeline Infrastructure" />
          <ListBlock title="Capabilities" items={['Bulk water supply systems', 'Pipeline installations', 'Sewer reticulation', 'Grey water systems', 'Municipal water infrastructure', 'Sustainable service delivery solutions']} />
        </div>
      ),
      'building-construction': (
        <div>
          <ContentBlock title="Building Construction" text="We deliver a wide range of building construction projects for both public and private sector clients. Our expertise includes project management, architectural design, and subcontractor coordination across multiple sectors." />
          <ListBlock title="Sector Expertise" items={['Mining infrastructure', 'Education facilities', 'Healthcare buildings', 'Retail developments', 'Industrial facilities', 'Commercial offices', 'Residential developments']} />
          <div className="font-bebas-neue text-lg mb-3 uppercase tracking-wide" style={{ color: 'var(--vharanani-charcoal)' }}>Key Projects</div>
          <ProjectCard title="Maphutha Malatjie Hospital" location="Limpopo, ZA" status="COMPLETED" type="Healthcare" />
          <ProjectCard title="Mogalakwena Civic Centre" location="Limpopo, ZA" status="COMPLETED" type="Public Infrastructure" />
          <ProjectCard title="Capricorn FET College" location="Limpopo, ZA" status="COMPLETED" type="Education" />
        </div>
      ),
      residential: (
        <div>
          <ContentBlock title="Residential Development" text="Vharanani Properties has contributed significantly to national housing development through large-scale residential construction. These projects have supported both provincial and national housing initiatives across South Africa." />
          <ListBlock title="Project Types" items={['RDP housing projects', 'Walk-up housing developments', 'Apartment complexes', 'Townhouse developments', 'Residential estates']} />
          <div className="font-bebas-neue text-lg mb-3 uppercase tracking-wide" style={{ color: 'var(--vharanani-charcoal)' }}>Featured Developments</div>
          <ProjectCard title="Mamelodi X5 Housing Development" location="Gauteng, ZA" status="COMPLETED" type="Residential" />
          <ProjectCard title="Nellmapius X22 Housing Development" location="Gauteng, ZA" status="COMPLETED" type="Residential" />
        </div>
      ),
      'property-dev': (
        <div>
          <ContentBlock title="Property Development" text="Vharanani Properties provides turnkey property development solutions across the entire development lifecycle. We have developed residential estates, rental apartment blocks, security villages, and business campuses across South Africa." />
          <ListBlock title="Full Lifecycle Capabilities" items={['Land acquisition', 'Property zoning', 'Feasibility studies', 'Architectural design', 'Full project management', 'Construction and development']} />
          <div className="font-bebas-neue text-lg mb-3 uppercase tracking-wide" style={{ color: 'var(--vharanani-charcoal)' }}>Key Developments</div>
          <ProjectCard title="ST Maria Development" location="South Africa" status="COMPLETED" type="Property Development" />
          <ProjectCard title="The Mbilu Development" location="South Africa" status="COMPLETED" type="Property Development" />
          <ListBlock title="Facilities Management" items={['Maintenance of office complexes', 'Cleaning and hygiene services', 'Repairs and operational management', 'Management of institutional housing complexes']} />
          <ProjectCard title="Transnet Facilities Management" location="National, ZA" status="ACTIVE" type="Facilities Management" />
        </div>
      ),
      accreditation: (
        <div>
          <ContentBlock title="Accreditation & Compliance" text="Vharanani Properties maintains industry certifications and regulatory compliance to ensure quality, safety, and operational excellence." />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="p-5" style={{ border: '1px solid var(--vharanani-charcoal-20)', background: 'rgba(0,0,0,0.02)' }}>
              <div className="flex items-center gap-2 mb-3">
                <Award size={18} style={{ color: 'var(--vharanani-burgundy)' }} />
                <div className="font-bebas-neue tracking-wide" style={{ color: 'var(--vharanani-charcoal)' }}>ISO 9001:2015</div>
              </div>
              <div className="font-inter typo-copy-small" style={{ color: 'var(--vharanani-charcoal-60)' }}>Certified Construction Company — Quality Management Systems</div>
            </div>
            <div className="p-5" style={{ border: '1px solid var(--vharanani-charcoal-20)', background: 'rgba(0,0,0,0.02)' }}>
              <div className="flex items-center gap-2 mb-3">
                <Shield size={18} style={{ color: 'var(--vharanani-burgundy)' }} />
                <div className="font-bebas-neue tracking-wide" style={{ color: 'var(--vharanani-charcoal)' }}>B-BBEE Level 1</div>
              </div>
              <div className="font-inter typo-copy-small" style={{ color: 'var(--vharanani-charcoal-60)' }}>Highest level Broad-Based Black Economic Empowerment contributor</div>
            </div>
            <div className="p-5" style={{ border: '1px solid var(--vharanani-charcoal-20)', background: 'rgba(0,0,0,0.02)' }}>
              <div className="flex items-center gap-2 mb-3">
                <Building2 size={18} style={{ color: 'var(--vharanani-burgundy)' }} />
                <div className="font-bebas-neue tracking-wide" style={{ color: 'var(--vharanani-charcoal)' }}>CIDB Grade 9GB</div>
              </div>
              <div className="font-inter typo-copy-small" style={{ color: 'var(--vharanani-charcoal-60)' }}>General Building Works — highest grading designation</div>
            </div>
            <div className="p-5" style={{ border: '1px solid var(--vharanani-charcoal-20)', background: 'rgba(0,0,0,0.02)' }}>
              <div className="flex items-center gap-2 mb-3">
                <HardHat size={18} style={{ color: 'var(--vharanani-burgundy)' }} />
                <div className="font-bebas-neue tracking-wide" style={{ color: 'var(--vharanani-charcoal)' }}>CIDB Grade 9CE</div>
              </div>
              <div className="font-inter typo-copy-small" style={{ color: 'var(--vharanani-charcoal-60)' }}>Civil Engineering — highest grading designation</div>
            </div>
          </div>
          <ListBlock title="Additional Registrations" items={['Registered with the National Home Builders Registration Council (NHBRC)', 'Registered with the Department of Labour (COIDA)']} />
          <ListBlock title="Core Capabilities" items={['Project management', 'Civil engineering construction', 'Construction management', 'Turnkey infrastructure solutions', 'Land development', 'Design and build services', 'Greenfield property development', 'Sustainable human settlement development']} />
        </div>
      ),
      'featured-projects': (
        <div>
          <ContentBlock title="Featured Projects" text="Vharanani Properties has delivered major infrastructure projects across South Africa, spanning roads, water, residential, public institutions, and property development." />
          <div className="font-bebas-neue text-lg mb-3 uppercase tracking-wide" style={{ color: 'var(--vharanani-charcoal)' }}>Roads & Civil Infrastructure</div>
          <ProjectCard title="Polokwane BRT System" location="Limpopo, ZA" status="COMPLETED" type="BRT" />
          <ProjectCard title="Tshwane BRT System" location="Gauteng, ZA" status="COMPLETED" type="BRT" />
          <ProjectCard title="Marulaneng–Sekhukhune Road" location="Limpopo, ZA" status="COMPLETED" type="Road" />
          <div className="font-bebas-neue text-lg mb-3 mt-6 uppercase tracking-wide" style={{ color: 'var(--vharanani-charcoal)' }}>Water Infrastructure</div>
          <ProjectCard title="Lepelle Revitalization Programme" location="Limpopo, ZA" status="COMPLETED" type="Bulk Water" />
          <ProjectCard title="Rand Water Pipeline" location="Gauteng, ZA" status="COMPLETED" type="Pipeline" />
          <div className="font-bebas-neue text-lg mb-3 mt-6 uppercase tracking-wide" style={{ color: 'var(--vharanani-charcoal)' }}>Public & Institutional</div>
          <ProjectCard title="Maphutha Malatjie Hospital" location="Limpopo, ZA" status="COMPLETED" type="Healthcare" />
          <ProjectCard title="Mogalakwena Civic Centre" location="Limpopo, ZA" status="COMPLETED" type="Civic" />
          <ProjectCard title="Capricorn FET College" location="Limpopo, ZA" status="COMPLETED" type="Education" />
          <div className="my-8 p-5" style={{ borderLeft: '3px solid var(--vharanani-burgundy)', background: 'rgba(129,41,33,0.04)' }}>
            <div className="font-bebas-neue text-lg mb-2 uppercase tracking-wide" style={{ color: 'var(--vharanani-burgundy)' }}>Our Impact</div>
            <div className="font-inter typo-copy italic" style={{ color: 'var(--vharanani-charcoal)' }}>
              "To restore people's dignity through infrastructure development."
            </div>
          </div>
          <ListBlock title="Socioeconomic Contribution" items={['Sustainable human settlements', 'Infrastructure development for communities', 'Employment and skills development', 'Economic participation within local communities']} />
        </div>
      ),
    },
    foundation: {
      about: (<FoundationWireframe_Hero onTabChange={onTabChange} />),
      education: (<FoundationWireframe_ImpactStories />),
      housing: (<FoundationWireframe_ImpactStories />),
      community: (<FoundationWireframe_ImpactStories />),
      impact: (<FoundationWireframe_ProgrammeAreas />),
      partnerships: (<FoundationWireframe_PartnerNetwork />),
      heritage: (<FoundationWireframe_Heritage />),
      'get-involved': (<FoundationWireframe_Contact />),
    },
    _foundation_legacy: {
      _about_legacy: (
        <div>
          <ContentBlock title="The David Mabilu Foundation" text="The David Mabilu Foundation (DMF) is a social development organisation committed to reducing poverty and sustainably improving the living standards of poor and marginalised communities across South Africa." />
          <ContentBlock title="" text="Through education support, housing initiatives, and community development programmes, the Foundation works to empower individuals and communities to become self-sustaining and independent. The Foundation was established by David Mabilu with a vision to give back meaningfully to the communities that continue to shape South Africa's future." />
          <div className="my-6 p-5" style={{ borderLeft: '3px solid var(--vharanani-burgundy)', background: 'rgba(129,41,33,0.04)' }}>
            <div className="font-bebas-neue text-lg mb-2 uppercase tracking-wide" style={{ color: 'var(--vharanani-burgundy)' }}>Our Goal</div>
            <div className="font-inter typo-copy italic" style={{ color: 'var(--vharanani-charcoal)' }}>
              The primary goal of the David Mabilu Foundation is to reduce poverty and sustainably improve the living standards of disadvantaged and marginalised communities throughout South Africa.
            </div>
          </div>
          <ContentBlock title="" text="We believe that lasting change is achieved when communities are empowered with access to education, housing, and opportunities for social and economic development." />
          <ContentBlock title="How We Achieve Our Goal" text="The David Mabilu Foundation works collaboratively with a broad network of partners to deliver impactful programmes and initiatives. Through these partnerships, the Foundation is able to extend its reach and ensure that its initiatives deliver meaningful and sustainable impact." />
          <ListBlock title="Our Key Partners Include" items={['Local and national partners', 'Government institutions', 'Faith-based organisations', 'Traditional leaders', 'Private sector partners', 'Community organisations']} />
          <ContentBlock title="What We Do" text="The David Mabilu Foundation focuses on initiatives and projects that assist individuals and communities to become self-sustaining and independent. Through targeted programmes, partnerships, and direct support, the Foundation works to address real community challenges while promoting long-term empowerment." />
          <div className="font-bebas-neue text-lg mb-4 mt-6 uppercase tracking-wide" style={{ color: 'var(--vharanani-charcoal)' }}>Core Programme Areas</div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="p-5" style={{ border: '1px solid var(--vharanani-charcoal-20)', background: 'rgba(0,0,0,0.02)' }}>
              <div className="flex items-center gap-2 mb-3">
                <GraduationCap size={18} style={{ color: 'var(--vharanani-burgundy)' }} />
                <div className="font-bebas-neue tracking-wide" style={{ color: 'var(--vharanani-charcoal)' }}>Education</div>
              </div>
              <div className="font-inter typo-copy-small" style={{ color: 'var(--vharanani-charcoal-60)' }}>Scholarships, school support programmes, and infrastructure development investing in the future of young South Africans.</div>
            </div>
            <div className="p-5" style={{ border: '1px solid var(--vharanani-charcoal-20)', background: 'rgba(0,0,0,0.02)' }}>
              <div className="flex items-center gap-2 mb-3">
                <Home size={18} style={{ color: 'var(--vharanani-burgundy)' }} />
                <div className="font-bebas-neue tracking-wide" style={{ color: 'var(--vharanani-charcoal)' }}>Housing</div>
              </div>
              <div className="font-inter typo-copy-small" style={{ color: 'var(--vharanani-charcoal-60)' }}>Supporting housing initiatives that provide safe and dignified homes for disadvantaged individuals and families.</div>
            </div>
            <div className="p-5" style={{ border: '1px solid var(--vharanani-charcoal-20)', background: 'rgba(0,0,0,0.02)' }}>
              <div className="flex items-center gap-2 mb-3">
                <Heart size={18} style={{ color: 'var(--vharanani-burgundy)' }} />
                <div className="font-bebas-neue tracking-wide" style={{ color: 'var(--vharanani-charcoal)' }}>Community Upliftment</div>
              </div>
              <div className="font-inter typo-copy-small" style={{ color: 'var(--vharanani-charcoal-60)' }}>Community-driven initiatives that strengthen social wellbeing, encourage youth development, and promote economic participation.</div>
            </div>
          </div>
        </div>
      ),
      education: (
        <div>
          <ContentBlock title="Education" text="The David Mabilu Foundation believes that education is one of the most powerful tools for creating a better future for South African children, particularly those from previously disadvantaged backgrounds." />
          <ContentBlock title="" text="Since its establishment in 2011, the Foundation has provided scholarships to approximately thirty-four school-going children from primary school through to tertiary education." />
          <ListBlock title="Scholarship Support Includes" items={['Full tuition payments', 'Monthly stipends', 'School uniforms', 'Educational trips', 'Monthly grocery support for families']} />
          <div className="font-bebas-neue text-lg mb-3 mt-6 uppercase tracking-wide" style={{ color: 'var(--vharanani-charcoal)' }}>Beneficiary Schools</div>
          <ContentBlock title="" text="Beyond individual scholarships, the Foundation also supports schools by providing essential resources and infrastructure. These schools have received computers for learners as well as additional classrooms built to create improved learning environments." />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            <div className="p-4" style={{ border: '1px solid var(--vharanani-charcoal-20)', background: 'rgba(0,0,0,0.03)' }}>
              <div className="font-bebas-neue tracking-wide" style={{ color: 'var(--vharanani-charcoal)' }}>Galananzhele Primary School</div>
            </div>
            <div className="p-4" style={{ border: '1px solid var(--vharanani-charcoal-20)', background: 'rgba(0,0,0,0.03)' }}>
              <div className="font-bebas-neue tracking-wide" style={{ color: 'var(--vharanani-charcoal)' }}>Tshifhatani Primary School</div>
            </div>
            <div className="p-4" style={{ border: '1px solid var(--vharanani-charcoal-20)', background: 'rgba(0,0,0,0.03)' }}>
              <div className="font-bebas-neue tracking-wide" style={{ color: 'var(--vharanani-charcoal)' }}>Tshidimbini Secondary School</div>
            </div>
            <div className="p-4" style={{ border: '1px solid var(--vharanani-charcoal-20)', background: 'rgba(0,0,0,0.03)' }}>
              <div className="font-bebas-neue tracking-wide" style={{ color: 'var(--vharanani-charcoal)' }}>Tshiavha Primary School</div>
            </div>
          </div>
          <div className="font-bebas-neue text-lg mb-3 mt-6 uppercase tracking-wide" style={{ color: 'var(--vharanani-charcoal)' }}>Community Support Initiatives</div>
          <ContentBlock title="" text="The Foundation regularly supports schools, faith-based organisations, and community programmes that contribute to education and social wellbeing." />
          <div className="space-y-4 mb-6">
            <div className="p-5" style={{ border: '1px solid var(--vharanani-charcoal-20)', background: 'rgba(0,0,0,0.02)' }}>
              <div className="flex items-center gap-2 mb-2">
                <div className="typo-caption tracking-[0.15em] uppercase px-2 py-1" style={{ color: 'var(--vharanani-burgundy)', border: '1px solid var(--vharanani-burgundy)' }}>2012</div>
                <div className="typo-caption tracking-[0.15em] uppercase" style={{ color: 'var(--vharanani-charcoal-60)' }}>Nelson Mandela Day</div>
              </div>
              <div className="font-inter typo-copy-small" style={{ color: 'var(--vharanani-charcoal)' }}>Founder David Mabilu and Vharanani Properties staff spent their 67 minutes giving back at Mambo Primary School in Chiawelo, Soweto — a school Mr. Mabilu attended as a learner. The team painted classrooms, cleaned the school facilities, and donated cleaning and hygiene supplies.</div>
            </div>
            <div className="p-5" style={{ border: '1px solid var(--vharanani-charcoal-20)', background: 'rgba(0,0,0,0.02)' }}>
              <div className="flex items-center gap-2 mb-2">
                <div className="typo-caption tracking-[0.15em] uppercase px-2 py-1" style={{ color: 'var(--vharanani-burgundy)', border: '1px solid var(--vharanani-burgundy)' }}>2013</div>
                <div className="typo-caption tracking-[0.15em] uppercase" style={{ color: 'var(--vharanani-charcoal-60)' }}>Faith-Based Support</div>
              </div>
              <div className="font-inter typo-copy-small" style={{ color: 'var(--vharanani-charcoal)' }}>The Foundation supported student financial assistance programmes run by faith-based organisations in Venda, including the United African Apostolic Church (UAAC) and Church of Christ.</div>
            </div>
          </div>
        </div>
      ),
      housing: (
        <div>
          <ContentBlock title="Housing" text="The David Mabilu Foundation supports housing initiatives aimed at improving living conditions for disadvantaged families. Working in partnership with organisations such as Capricorn FM, the Foundation has helped provide housing for vulnerable households." />
          <div className="my-6 p-5" style={{ borderLeft: '3px solid var(--vharanani-burgundy)', background: 'rgba(129,41,33,0.04)' }}>
            <div className="font-bebas-neue text-lg mb-2 uppercase tracking-wide" style={{ color: 'var(--vharanani-burgundy)' }}>Ga-Mphahlele Initiative</div>
            <div className="font-inter typo-copy" style={{ color: 'var(--vharanani-charcoal)' }}>
              One such initiative involved the donation of a home to a designated family in Ga-Mphahlele in Limpopo.
            </div>
          </div>
          <ContentBlock title="Nelson Mandela Day Housing Initiatives" text="The Foundation has supported Nelson Mandela Day initiatives focused on housing development, working with key government partners." />
          <ListBlock title="Government Partners" items={['The Department of Human Settlements in Mpumalanga', 'The Office of the Premier in Limpopo', 'The Office of the President']} />
          <div className="my-6 p-5" style={{ borderLeft: '3px solid var(--vharanani-burgundy)', background: 'rgba(129,41,33,0.04)' }}>
            <div className="font-bebas-neue text-lg mb-2 uppercase tracking-wide" style={{ color: 'var(--vharanani-burgundy)' }}>Eenzaam, Limpopo</div>
            <div className="font-inter typo-copy" style={{ color: 'var(--vharanani-charcoal)' }}>
              Through these collaborations, the Foundation helped provide homes for vulnerable individuals, including the construction of a three-bedroom house for an elderly woman in the village of Eenzaam in Limpopo who had not received her social grant since 1985.
            </div>
          </div>
        </div>
      ),
      community: (
        <div>
          <ContentBlock title="Community Upliftment" text="The David Mabilu Foundation actively supports community upliftment programmes, particularly those focused on women, youth, and disadvantaged communities. The Foundation regularly responds to requests for assistance from community organisations." />
          <ListBlock title="Key Initiatives" items={['Youth development programmes', 'Women\'s community initiatives', 'Local economic development projects', 'Sports and arts development programmes']} />
          <div className="font-bebas-neue text-lg mb-3 mt-6 uppercase tracking-wide" style={{ color: 'var(--vharanani-charcoal)' }}>Community Support Stories</div>
          <div className="space-y-4 mb-6">
            <div className="p-5" style={{ border: '1px solid var(--vharanani-charcoal-20)', background: 'rgba(0,0,0,0.02)' }}>
              <div className="flex items-center gap-2 mb-2">
                <div className="typo-caption tracking-[0.15em] uppercase px-2 py-1" style={{ color: 'var(--vharanani-burgundy)', border: '1px solid var(--vharanani-burgundy)' }}>2012</div>
                <div className="typo-caption tracking-[0.15em] uppercase" style={{ color: 'var(--vharanani-charcoal-60)' }}>Nelson Mandela Day</div>
              </div>
              <div className="font-inter typo-copy-small" style={{ color: 'var(--vharanani-charcoal)' }}>Founder David Mabilu and Vharanani Properties staff spent their 67 minutes giving back at Mambo Primary School in Chiawelo, Soweto — a school Mr. Mabilu attended as a learner. The team painted classrooms, cleaned the school facilities, and donated cleaning and hygiene supplies.</div>
            </div>
            <div className="p-5" style={{ border: '1px solid var(--vharanani-charcoal-20)', background: 'rgba(0,0,0,0.02)' }}>
              <div className="flex items-center gap-2 mb-2">
                <div className="typo-caption tracking-[0.15em] uppercase px-2 py-1" style={{ color: 'var(--vharanani-burgundy)', border: '1px solid var(--vharanani-burgundy)' }}>2013</div>
                <div className="typo-caption tracking-[0.15em] uppercase" style={{ color: 'var(--vharanani-charcoal-60)' }}>Faith-Based Support</div>
              </div>
              <div className="font-inter typo-copy-small" style={{ color: 'var(--vharanani-charcoal)' }}>The Foundation supported student financial assistance programmes run by faith-based organisations in Venda, including the United African Apostolic Church (UAAC) and Church of Christ.</div>
            </div>
            <div className="p-5" style={{ border: '1px solid var(--vharanani-charcoal-20)', background: 'rgba(0,0,0,0.02)' }}>
              <div className="flex items-center gap-2 mb-2">
                <div className="typo-caption tracking-[0.15em] uppercase px-2 py-1" style={{ color: 'var(--vharanani-burgundy)', border: '1px solid var(--vharanani-burgundy)' }}>2017</div>
                <div className="typo-caption tracking-[0.15em] uppercase" style={{ color: 'var(--vharanani-charcoal-60)' }}>Women's Day</div>
              </div>
              <div className="font-inter typo-copy-small" style={{ color: 'var(--vharanani-charcoal)' }}>The Foundation honoured elderly women in Chiawelo by providing blankets and hosting a day of appreciation. That same year, the Foundation donated blankets to vulnerable community members in the Free State during winter.</div>
            </div>
          </div>
          <ListBlock title="Sports & Youth Donations" items={['Sporting kits', 'Soccer balls', 'Boots and sports equipment', 'Donations to schools and community clubs']} />
          <ContentBlock title="" text="These initiatives encourage youth participation in sports, teamwork, and positive community engagement." />
          <div className="p-5 mt-4" style={{ border: '1px solid var(--vharanani-charcoal-20)', background: 'rgba(0,0,0,0.02)' }}>
            <div className="flex items-center gap-2 mb-2">
              <div className="typo-caption tracking-[0.15em] uppercase px-2 py-1" style={{ color: 'var(--vharanani-burgundy)', border: '1px solid var(--vharanani-burgundy)' }}>2017</div>
              <div className="typo-caption tracking-[0.15em] uppercase" style={{ color: 'var(--vharanani-charcoal-60)' }}>Winter Support</div>
            </div>
            <div className="font-inter typo-copy-small" style={{ color: 'var(--vharanani-charcoal)' }}>The Foundation responded to a community request in the Free State by donating blankets to vulnerable members of the community during winter.</div>
          </div>
        </div>
      ),
      impact: (
        <div>
          <ContentBlock title="Our Impact" text="Through its programmes and initiatives, the David Mabilu Foundation continues to make meaningful contributions to communities across South Africa. Our work focuses on creating lasting opportunities that support education, dignity, housing access, and community wellbeing." />
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
            <StatCard label="Scholarships Since 2011" value="34" icon={<GraduationCap size={18} />} />
            <StatCard label="Schools Supported" value="4+" icon={<Building2 size={18} />} />
            <StatCard label="Provinces Reached" value="5+" icon={<MapPin size={18} />} />
          </div>
          <div className="my-6 p-5" style={{ borderLeft: '3px solid var(--vharanani-burgundy)', background: 'rgba(129,41,33,0.04)' }}>
            <div className="font-bebas-neue text-lg mb-2 uppercase tracking-wide" style={{ color: 'var(--vharanani-burgundy)' }}>Our Commitment</div>
            <div className="font-inter typo-copy italic" style={{ color: 'var(--vharanani-charcoal)' }}>
              "Building opportunity. Empowering communities."
            </div>
          </div>
          <ListBlock title="Impact Areas" items={['Education access — scholarships from primary to tertiary level', 'School infrastructure — computers and additional classrooms', 'Housing — homes for vulnerable families in Limpopo and beyond', 'Community wellbeing — support for women, youth, and the elderly', 'Sports development — equipment and participation opportunities']} />
          <ContentBlock title="" text="We remain committed to empowering individuals and strengthening communities through practical and sustainable development initiatives." />
        </div>
      ),
      partnerships: (
        <div>
          <ContentBlock title="How We Work" text="The David Mabilu Foundation works collaboratively with a broad network of partners to deliver impactful programmes and initiatives. Through these partnerships, the Foundation is able to extend its reach and ensure that its initiatives deliver meaningful and sustainable impact." />
          <ListBlock title="Our Key Partners Include" items={['Local and national partners', 'Government institutions', 'Faith-based organisations', 'Traditional leaders', 'Private sector partners', 'Community organisations']} />
          <div className="p-5 mt-6" style={{ border: '1px solid var(--vharanani-charcoal-20)', background: 'rgba(0,0,0,0.02)' }}>
            <div className="flex items-center gap-2 mb-3">
              <Layers size={18} style={{ color: 'var(--vharanani-burgundy)' }} />
              <div className="font-bebas-neue tracking-wide" style={{ color: 'var(--vharanani-charcoal)' }}>Part of the Vharanani Group</div>
            </div>
            <div className="font-inter typo-copy-small" style={{ color: 'var(--vharanani-charcoal-60)' }}>The David Mabilu Foundation works closely with the Vharanani Group and its subsidiary companies to support social development initiatives. Through these relationships, the Foundation is able to leverage resources, expertise, and partnerships that enhance the reach and impact of its programmes.</div>
          </div>
          <div className="my-6 p-5" style={{ borderLeft: '3px solid var(--vharanani-burgundy)', background: 'rgba(129,41,33,0.04)' }}>
            <div className="font-inter typo-copy italic" style={{ color: 'var(--vharanani-charcoal)' }}>
              "Together, these efforts contribute to building stronger, more resilient communities across South Africa."
            </div>
          </div>
          <div className="p-5 mt-6" style={{ border: '1px solid var(--vharanani-charcoal-20)', background: 'rgba(0,0,0,0.02)' }}>
            <div className="flex items-center gap-2 mb-3">
              <Mail size={18} style={{ color: 'var(--vharanani-burgundy)' }} />
              <div className="font-bebas-neue tracking-wide" style={{ color: 'var(--vharanani-charcoal)' }}>Contact the Foundation</div>
            </div>
            <div className="font-inter typo-copy-small" style={{ color: 'var(--vharanani-charcoal-60)' }}>For partnership opportunities, community initiatives, or support enquiries, please contact the David Mabilu Foundation.</div>
            <div className="font-inter typo-copy-small mt-2" style={{ color: 'var(--vharanani-burgundy)' }}>info@vharanani.com</div>
          </div>
          <div className="my-6 p-5" style={{ borderLeft: '3px solid var(--vharanani-burgundy)', background: 'rgba(129,41,33,0.04)' }}>
            <div className="font-inter typo-copy italic" style={{ color: 'var(--vharanani-charcoal)' }}>
              "Building opportunity. Empowering communities."
            </div>
          </div>
        </div>
      ),
    },
    dmft: {
      about: (<DMFTWireframe_HeroAbout onTabChange={onTabChange} />),
      approach: (<DMFTWireframe_DevelopmentApproach />),
      'residential-estates': (<DMFTWireframe_Portfolio />),
      'apartments-townhouses': (<DMFTWireframe_Portfolio />),
      'mixed-use': (<DMFTWireframe_Portfolio />),
      capabilities: (<DMFTWireframe_CapabilitiesQuality />),
      'heritage-contact': (<DMFTWireframe_HeritageContact />),
    },
    _dmft_legacy: {
      _about_legacy: (
        <div>
          <ContentBlock title="About DMFT Property Developers" text="DMFT Property Developers is a real estate development company dedicated to delivering high-quality property developments across South Africa. Working in collaboration with the Vharanani Group, the company benefits from extensive construction and infrastructure expertise, enabling the successful delivery of complex property development projects from concept through to completion." />
          <ContentBlock title="" text="Our developments are designed with long-term value in mind, combining strong architectural design, efficient infrastructure planning, and quality construction to create environments that enhance both lifestyle and economic opportunity." />
          <div className="my-6 p-5" style={{ borderLeft: '3px solid var(--vharanani-burgundy)', background: 'rgba(129,41,33,0.04)' }}>
            <div className="font-inter typo-copy italic" style={{ color: 'var(--vharanani-charcoal)' }}>
              "Our developments combine thoughtful design, quality construction, and strategic location to create sustainable environments for living, working, and investment."
            </div>
          </div>
          <div className="p-5 mt-6" style={{ border: '1px solid var(--vharanani-charcoal-20)', background: 'rgba(0,0,0,0.02)' }}>
            <div className="flex items-center gap-2 mb-3">
              <Layers size={18} style={{ color: 'var(--vharanani-burgundy)' }} />
              <div className="font-bebas-neue tracking-wide" style={{ color: 'var(--vharanani-charcoal)' }}>Part of the Vharanani Group</div>
            </div>
            <div className="font-inter typo-copy-small" style={{ color: 'var(--vharanani-charcoal-60)' }}>DMFT Property Developers forms part of the Vharanani Group, a diversified African holding company with interests across infrastructure, construction, property development, and investment sectors. This relationship provides DMFT with access to strong technical expertise, established infrastructure capabilities, and an experienced leadership team.</div>
          </div>
        </div>
      ),
      approach: (
        <div>
          <ContentBlock title="Our Development Approach" text="At DMFT Property Developers, we manage the full lifecycle of property development. Our integrated approach ensures that every project is delivered efficiently, sustainably, and to the highest standards." />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="p-5" style={{ border: '1px solid var(--vharanani-charcoal-20)', background: 'rgba(0,0,0,0.02)' }}>
              <div className="flex items-center gap-2 mb-3">
                <MapPin size={18} style={{ color: 'var(--vharanani-burgundy)' }} />
                <div className="font-bebas-neue tracking-wide" style={{ color: 'var(--vharanani-charcoal)' }}>Land Identification & Acquisition</div>
              </div>
              <div className="font-inter typo-copy-small" style={{ color: 'var(--vharanani-charcoal-60)' }}>Carefully identifying strategic locations with strong growth potential.</div>
            </div>
            <div className="p-5" style={{ border: '1px solid var(--vharanani-charcoal-20)', background: 'rgba(0,0,0,0.02)' }}>
              <div className="flex items-center gap-2 mb-3">
                <Target size={18} style={{ color: 'var(--vharanani-burgundy)' }} />
                <div className="font-bebas-neue tracking-wide" style={{ color: 'var(--vharanani-charcoal)' }}>Planning & Feasibility</div>
              </div>
              <div className="font-inter typo-copy-small" style={{ color: 'var(--vharanani-charcoal-60)' }}>Conducting detailed feasibility studies, zoning processes, and development planning.</div>
            </div>
            <div className="p-5" style={{ border: '1px solid var(--vharanani-charcoal-20)', background: 'rgba(0,0,0,0.02)' }}>
              <div className="flex items-center gap-2 mb-3">
                <Eye size={18} style={{ color: 'var(--vharanani-burgundy)' }} />
                <div className="font-bebas-neue tracking-wide" style={{ color: 'var(--vharanani-charcoal)' }}>Design & Architecture</div>
              </div>
              <div className="font-inter typo-copy-small" style={{ color: 'var(--vharanani-charcoal-60)' }}>Working with experienced professionals to design modern and functional developments.</div>
            </div>
            <div className="p-5" style={{ border: '1px solid var(--vharanani-charcoal-20)', background: 'rgba(0,0,0,0.02)' }}>
              <div className="flex items-center gap-2 mb-3">
                <HardHat size={18} style={{ color: 'var(--vharanani-burgundy)' }} />
                <div className="font-bebas-neue tracking-wide" style={{ color: 'var(--vharanani-charcoal)' }}>Construction & Project Management</div>
              </div>
              <div className="font-inter typo-copy-small" style={{ color: 'var(--vharanani-charcoal-60)' }}>Leveraging the construction expertise of the Vharanani Group to deliver projects efficiently and safely.</div>
            </div>
          </div>
          <div className="p-5" style={{ border: '1px solid var(--vharanani-charcoal-20)', background: 'rgba(0,0,0,0.02)' }}>
            <div className="flex items-center gap-2 mb-3">
              <Briefcase size={18} style={{ color: 'var(--vharanani-burgundy)' }} />
              <div className="font-bebas-neue tracking-wide" style={{ color: 'var(--vharanani-charcoal)' }}>Sales & Delivery</div>
            </div>
            <div className="font-inter typo-copy-small" style={{ color: 'var(--vharanani-charcoal-60)' }}>Delivering completed developments that provide value for homeowners, investors, and communities.</div>
          </div>
        </div>
      ),
      'residential-estates': (
        <div>
          <ContentBlock title="Residential Estates" text="Secure residential estates designed to provide comfortable and modern living environments. Our estates are carefully planned communities that offer residents a superior quality of life with security, amenities, and thoughtful design." />
          <div className="my-6 p-5" style={{ borderLeft: '3px solid var(--vharanani-burgundy)', background: 'rgba(129,41,33,0.04)' }}>
            <div className="font-inter typo-copy italic" style={{ color: 'var(--vharanani-charcoal)' }}>
              "Every development is approached with careful planning, professional execution, and a focus on creating lasting value."
            </div>
          </div>
          <ListBlock title="Estate Features" items={['Secure gated environments with 24/7 access control', 'Modern architectural design and quality finishes', 'Integrated infrastructure and utilities', 'Community amenities and green spaces', 'Strategic locations with growth potential', 'Long-term investment value']} />
        </div>
      ),
      'apartments-townhouses': (
        <div>
          <ContentBlock title="Apartment Developments" text="Well-designed apartment developments offering efficient living spaces within growing urban areas. Our apartment projects are positioned to meet the increasing demand for quality urban accommodation." />
          <ContentBlock title="Townhouse Complexes" text="Modern townhouse developments designed to meet the needs of families and young professionals. Each complex combines practical layouts with contemporary finishes and secure community living." />
          <ListBlock title="Development Standards" items={['Efficient spatial planning and modern layouts', 'Quality construction materials and finishes', 'Secure access and estate management', 'Proximity to transport, retail, and amenities', 'Energy-efficient design principles', 'Community-focused planning']} />
        </div>
      ),
      'mixed-use': (
        <div>
          <ContentBlock title="Mixed-Use Developments" text="Integrated developments that combine residential, commercial, and community spaces. Our mixed-use projects create self-sustaining environments where people can live, work, and engage with their communities in one well-planned precinct." />
          <ListBlock title="Mixed-Use Components" items={['Residential units — apartments, townhouses, and penthouses', 'Commercial spaces — offices and business suites', 'Retail precincts — shops, restaurants, and services', 'Community facilities — parks, recreation, and public spaces', 'Integrated infrastructure and parking', 'Sustainable design and planning']} />
          <div className="my-6 p-5" style={{ borderLeft: '3px solid var(--vharanani-burgundy)', background: 'rgba(129,41,33,0.04)' }}>
            <div className="font-inter typo-copy italic" style={{ color: 'var(--vharanani-charcoal)' }}>
              "Our developments combine thoughtful design, quality construction, and strategic location to create sustainable environments for living, working, and investment."
            </div>
          </div>
        </div>
      ),
      capabilities: (
        <div>
          <ContentBlock title="Development Capabilities" text="Through its partnership with the Vharanani Group, DMFT Property Developers has access to extensive development and infrastructure expertise. This integrated capability allows us to deliver developments from initial concept through to completed projects." />
          <ListBlock title="Core Capabilities" items={['Land development and township establishment', 'Property development planning', 'Project management', 'Infrastructure integration', 'Residential development construction', 'Mixed-use development delivery']} />
          <div className="font-bebas-neue text-lg mb-4 mt-8 uppercase tracking-wide" style={{ color: 'var(--vharanani-charcoal)' }}>Commitment to Quality</div>
          <ContentBlock title="" text="At DMFT Property Developers, quality is central to every development we undertake." />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="p-5" style={{ border: '1px solid var(--vharanani-charcoal-20)', background: 'rgba(0,0,0,0.02)' }}>
              <div className="flex items-center gap-2 mb-3">
                <Award size={18} style={{ color: 'var(--vharanani-burgundy)' }} />
                <div className="font-bebas-neue tracking-wide" style={{ color: 'var(--vharanani-charcoal)' }}>High Construction Standards</div>
              </div>
              <div className="font-inter typo-copy-small" style={{ color: 'var(--vharanani-charcoal-60)' }}>Meeting and exceeding industry benchmarks for build quality and safety.</div>
            </div>
            <div className="p-5" style={{ border: '1px solid var(--vharanani-charcoal-20)', background: 'rgba(0,0,0,0.02)' }}>
              <div className="flex items-center gap-2 mb-3">
                <Landmark size={18} style={{ color: 'var(--vharanani-burgundy)' }} />
                <div className="font-bebas-neue tracking-wide" style={{ color: 'var(--vharanani-charcoal)' }}>Long-Term Value</div>
              </div>
              <div className="font-inter typo-copy-small" style={{ color: 'var(--vharanani-charcoal-60)' }}>Providing lasting value to residents and investors through quality and strategic positioning.</div>
            </div>
            <div className="p-5" style={{ border: '1px solid var(--vharanani-charcoal-20)', background: 'rgba(0,0,0,0.02)' }}>
              <div className="flex items-center gap-2 mb-3">
                <Heart size={18} style={{ color: 'var(--vharanani-burgundy)' }} />
                <div className="font-bebas-neue tracking-wide" style={{ color: 'var(--vharanani-charcoal)' }}>Community Contribution</div>
              </div>
              <div className="font-inter typo-copy-small" style={{ color: 'var(--vharanani-charcoal-60)' }}>Contributing positively to the communities in which we operate.</div>
            </div>
            <div className="p-5" style={{ border: '1px solid var(--vharanani-charcoal-20)', background: 'rgba(0,0,0,0.02)' }}>
              <div className="flex items-center gap-2 mb-3">
                <Globe size={18} style={{ color: 'var(--vharanani-burgundy)' }} />
                <div className="font-bebas-neue tracking-wide" style={{ color: 'var(--vharanani-charcoal)' }}>Sustainable Growth</div>
              </div>
              <div className="font-inter typo-copy-small" style={{ color: 'var(--vharanani-charcoal-60)' }}>Supporting sustainable urban growth through responsible development practices.</div>
            </div>
          </div>
        </div>
      ),
    },
    group: {
      about: (<GroupWireframe_ExecutiveSummary />),
      portfolio: (<GroupWireframe_PortfolioGrid />),
      pillars: (<GroupWireframe_StrategicPillars />),
      leadership: (<GroupWireframe_Leadership />),
      impact: (<GroupWireframe_ImpactGovernance />),
      'vision-mission': (<GroupWireframe_VisionMission />),
      governance: (<GroupWireframe_Governance />),
      companies: (<GroupWireframe_Companies />),
      'sustainable-impact': (<GroupWireframe_NewsContact />),
    },
  };

  return contentMap[divisionId]?.[sectionId] || <div className="font-inter typo-copy" style={{ color: 'var(--vharanani-charcoal-60)' }}>Content coming soon.</div>;
}

// ═══════════════════════════════════════════════════════════
// MAIN COMPONENT — 3-LEVEL NAVIGATION
// Level 0: Home — 4 divisions in sidebar
// Level 1: Division — sections in sidebar, cube stays
// Level 2: Section — full-screen overlay opens
// ═══════════════════════════════════════════════════════════

export function VharananiEditorialHero() {
  // Navigation state
  const [currentLevel, setCurrentLevel] = useState(0);                // 0 = Home, 1 = Division view
  const [activeDivisionIndex, setActiveDivisionIndex] = useState(0);  // which division is highlighted/selected
  const [selectedDivision, setSelectedDivision] = useState<Division | null>(null); // Level 1 selected division
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);    // which section is highlighted in Level 1

  // UI state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [overlaySection, setOverlaySection] = useState<{ divisionId: string; section: Section } | null>(null);

  const { isMobile, isTablet, isDesktop } = useResponsive();

  // Cube data — dynamically switches between division-level and section-level
  const { images: cubeImages, labels: cubeLabels } = useMemo(() => {
    if (currentLevel === 1 && selectedDivision) {
      const sectionImages = selectedDivision.sections.map((s) => s.image);
      const sectionLabels = selectedDivision.sections.map((s) => ({ title: s.title, category: s.type }));
      while (sectionImages.length < 6) {
        sectionImages.push(selectedDivision.image);
        sectionLabels.push({ title: selectedDivision.title.replace('Vharanani ', ''), category: selectedDivision.type });
      }
      return { images: sectionImages.slice(0, 6), labels: sectionLabels.slice(0, 6) };
    }
    return {
      images: [...divisions.map((d) => d.image), ...extraCubeImages],
      labels: [
        ...divisions.map((d) => ({ title: d.title.replace('Vharanani ', ''), category: d.type })),
        { title: 'Community', category: 'IMPACT' },
        { title: 'Architecture', category: 'DESIGN' },
      ],
    };
  }, [currentLevel, selectedDivision]);

  // The activeIndex for the cube: at Level 0 it's the division index, at Level 1 it's the section index
  const cubeActiveIndex = currentLevel === 1 ? activeSectionIndex : activeDivisionIndex;

  const handleMenuToggle = () => {
    safeVibrate(20);
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Auto-rotate cube
  useEffect(() => {
    if (!isAutoRotating) return;
    const interval = setInterval(() => {
      if (currentLevel === 0) {
        setActiveDivisionIndex((prev) => (prev + 1) % divisions.length);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoRotating, currentLevel]);

  const pauseAutoRotate = useCallback(() => {
    setIsAutoRotating(false);
    const timer = setTimeout(() => setIsAutoRotating(true), 6000);
    return () => clearTimeout(timer);
  }, []);

  // Level 0: Hover a division
  const handleDivisionHover = useCallback((index: number) => {
    if (currentLevel !== 0) return;
    safeVibrate(3);
    setActiveDivisionIndex(index);
    pauseAutoRotate();
  }, [currentLevel, pauseAutoRotate]);

  // Level 0 → Level 1: Click a division
  const handleDivisionClick = useCallback((division: Division, index: number) => {
    safeVibrate(10);
    setSelectedDivision(division);
    setActiveDivisionIndex(index);
    setActiveSectionIndex(0);
    setCurrentLevel(1);
    setIsAutoRotating(false);
  }, []);

  // Level 1: Back to Level 0
  const handleBackToHome = useCallback(() => {
    safeVibrate(5);
    setCurrentLevel(0);
    setSelectedDivision(null);
    setIsAutoRotating(true);
  }, []);

  // Level 1: Hover a section
  const handleSectionHover = useCallback((index: number) => {
    safeVibrate(3);
    setActiveSectionIndex(index);
  }, []);

  // Level 1 → Level 2: Click a section → open overlay
  const handleSectionClick = useCallback((divisionId: string, section: Section) => {
    safeVibrate(10);
    setOverlaySection({ divisionId, section });
    setOverlayOpen(true);
  }, []);

  // Level 2: Close overlay (back to Level 1)
  const handleOverlayClose = useCallback(() => {
    setOverlayOpen(false);
    setOverlaySection(null);
  }, []);

  // Header nav click → go to Level 1 for that division
  const handleHeaderNavClick = useCallback((divId: string) => {
    const idx = divisions.findIndex((d) => d.id === divId);
    if (idx >= 0) handleDivisionClick(divisions[idx], idx);
  }, [handleDivisionClick]);

  // Build overlay tabs from the selected division's sections (so user can switch sections inside the overlay)
  const handleOverlayTabChange = useCallback((tabId: string) => {
    if (!selectedDivision) return;
    const sec = selectedDivision.sections.find((s) => s.id === tabId);
    if (sec) {
      setOverlaySection({ divisionId: selectedDivision.id, section: sec });
      setActiveSectionIndex(selectedDivision.sections.indexOf(sec));
    }
  }, [selectedDivision]);

  const overlayTabs = useMemo(() =>
    selectedDivision
      ? selectedDivision.sections.map((sec) => ({
          id: sec.id,
          label: sec.title,
          content: getSectionContent(selectedDivision.id, sec.id, handleOverlayTabChange),
        }))
      : [],
  [selectedDivision, handleOverlayTabChange]);
  const overlayActiveTab = overlaySection?.section.id || '';

  // Left column meta adapts to level
  const leftMeta = currentLevel === 1 && selectedDivision
    ? { label: selectedDivision.type, title: selectedDivision.title, sub: selectedDivision.subtitle, ref: selectedDivision.ref }
    : { label: 'UNIFIED ECOSYSTEM', title: 'VHARANANI\nGROUP', sub: 'Properties / Foundation / DMFT', ref: 'Vision. Structure. Impact.' };

  return (
    <div className="min-h-screen relative" style={{
      backgroundImage: `url('https://ik.imagekit.io/qcvroy8xpd/Rectangle.png')`,
      backgroundRepeat: 'repeat',
      backgroundSize: '600px',
    }}>
      {/* ── HEADER ── */}
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-sm border-b-4 border-[var(--vharanani-burgundy)] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <button className="flex items-center gap-3" onClick={handleBackToHome}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentLevel === 1 && selectedDivision ? selectedDivision.id : 'home'}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.25 }}
                  className="flex items-center gap-3"
                >
                  {currentLevel === 1 && selectedDivision && DIVISION_LOGOS[selectedDivision.id] ? (
                    <img
                      src={DIVISION_LOGOS[selectedDivision.id]}
                      alt={selectedDivision.title}
                      className="h-8 sm:h-10 w-auto object-contain"
                    />
                  ) : (
                    <img
                      src="https://ik.imagekit.io/qcvroy8xpd/Frame%205.png"
                      alt="Vharanani Group"
                      className="h-8 sm:h-10 w-auto object-contain"
                    />
                  )}
                </motion.div>
              </AnimatePresence>
            </button>

            {isDesktop && (
              <nav className="hidden lg:flex items-center gap-6">
                {divisions.map((div) => (
                  <button
                    key={div.id}
                    onClick={() => handleHeaderNavClick(div.id)}
                    className="typo-headline-small font-bebas-neue uppercase tracking-wide transition-colors"
                    style={{
                      color: currentLevel === 1 && selectedDivision?.id === div.id
                        ? 'var(--vharanani-burgundy)'
                        : 'var(--vharanani-charcoal)',
                    }}
                  >
                    {div.title.replace('Vharanani ', '')}
                  </button>
                ))}
                <button
                  onClick={() => document.querySelector('footer')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-[var(--vharanani-burgundy)] hover:bg-[var(--vharanani-burgundy-80)] text-white px-6 py-3 typo-headline-small font-bebas-neue uppercase tracking-wide transition-colors duration-300"
                >
                  Inquire
                </button>
              </nav>
            )}

            {(isMobile || isTablet) && (
              <button onClick={handleMenuToggle} className="lg:hidden p-2 hover:bg-[var(--vharanani-burgundy-20)] transition-colors" aria-label="Open menu">
                <Menu className="w-6 h-6 text-[var(--vharanani-charcoal)]" />
              </button>
            )}
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} onNavigate={handleHeaderNavClick} />

      {/* ── HOME HERO BANNER — Level 0 only, above the cube ── */}
      {currentLevel === 0 && (
        <VharananiHomeBanner
          onExplorePortfolio={() => {
            // Smooth scroll down to the cube section
            const cube = document.getElementById('vharanani-cube-section');
            if (cube) cube.scrollIntoView({ behavior: 'smooth' });
          }}
          onAboutGroup={() => {
            // Navigate to Group division (Level 1)
            const groupIdx = divisions.findIndex((d) => d.id === 'group');
            if (groupIdx >= 0) {
              handleDivisionClick(divisions[groupIdx], groupIdx);
            }
          }}
        />
      )}

      {/* ── HERO SECTION — same layout for Level 0 and Level 1 ── */}
      <div id="vharanani-cube-section" className="relative z-[1] w-full min-h-[calc(100vh-80px)] overflow-hidden bg-white/80" style={{ fontFamily: 'var(--font-inter)' }}>
        {/* Vector Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.35]">
          <img src={vectorBg} alt="" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-auto max-w-none select-none" />
        </div>
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(129,41,33,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(129,41,33,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        </div>

        {/* Main Content Grid */}
        <div className="relative grid grid-cols-12 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-8 py-8 sm:py-12 lg:px-16 lg:py-16 max-w-7xl mx-auto">

          {/* ── LEFT COLUMN — adapts to level ── */}
          <div className="col-span-12 lg:col-span-3 flex flex-col justify-between z-10">
            <div className="space-y-6 sm:space-y-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentLevel === 1 ? selectedDivision?.id : 'home'}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Back button (Level 1 only) */}
                  {currentLevel === 1 && (
                    <button
                      onClick={handleBackToHome}
                      className="flex items-center gap-2 mb-4 group"
                    >
                      <ArrowLeft size={14} style={{ color: 'var(--vharanani-burgundy)' }} className="group-hover:-translate-x-1 transition-transform" />
                      <span className="font-inter typo-meta tracking-[0.2em] uppercase" style={{ color: 'var(--vharanani-burgundy)' }}>
                        BACK TO DIVISIONS
                      </span>
                    </button>
                  )}

                  {currentLevel === 1 && selectedDivision && DIVISION_LOGOS[selectedDivision.id] && (
                    <div className="mb-4">
                      <img
                        src={DIVISION_LOGOS[selectedDivision.id]}
                        alt={selectedDivision.title}
                        className="h-10 sm:h-12 w-auto object-contain"
                      />
                    </div>
                  )}
                  <div className="typo-caption tracking-[0.2em] mb-2 uppercase font-inter" style={{ color: 'var(--vharanani-charcoal-60)' }}>
                    {leftMeta.label}
                  </div>
                  <h2 className="font-bebas-neue typo-headline-big tracking-tight whitespace-pre-line" style={{ color: 'var(--vharanani-charcoal)' }}>
                    {leftMeta.title}
                  </h2>
                  <div className="font-inter typo-copy mt-3" style={{ color: 'var(--vharanani-charcoal)' }}>
                    {leftMeta.sub}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Edition Info */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="space-y-2 pb-6" style={{ borderBottom: '1px solid var(--vharanani-charcoal-20)' }}>
                <div className="flex items-center gap-3">
                  <div className="tracking-[0.15em] uppercase font-inter typo-label" style={{ color: 'var(--vharanani-charcoal)' }}>Est. 2008</div>
                  <div className="w-1 h-1" style={{ backgroundColor: 'var(--vharanani-burgundy)' }} />
                  <div className="tracking-[0.15em] uppercase font-inter typo-label" style={{ color: 'var(--vharanani-charcoal)' }}>South Africa</div>
                </div>
                <div className="tracking-[0.1em] uppercase font-inter typo-label" style={{ color: 'var(--vharanani-charcoal-60)' }}>{leftMeta.ref}</div>
                <div className="tracking-[0.1em] uppercase font-inter typo-label" style={{ color: 'var(--vharanani-charcoal-60)' }}>Dunkeld West, Johannesburg</div>
              </motion.div>

              {/* Mission / Description */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
                {currentLevel === 0 ? (
                  <>
                    <div className="font-inter typo-headline-small" style={{ lineHeight: '1.6', color: 'var(--vharanani-charcoal)' }}>
                      "Vision. Structure.
                      <br />
                      <span style={{ color: 'var(--vharanani-burgundy)' }}>Impact.</span>"
                    </div>
                    <div className="mt-3 font-inter typo-copy" style={{ color: 'var(--vharanani-charcoal)' }}>
                      A wholly Black-owned holding company founded and led by David Mabilu.
                    </div>
                  </>
                ) : selectedDivision ? (
                  <div className="font-inter typo-copy" style={{ color: 'var(--vharanani-charcoal)' }}>
                    {selectedDivision.description}
                  </div>
                ) : null}
              </motion.div>
            </div>

            {/* Bottom Stats */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }} className="hidden lg:block space-y-4 pt-8" style={{ borderTop: '1px solid var(--vharanani-charcoal-20)' }}>
              <div className="flex items-center gap-3">
                <Building2 size={16} style={{ color: 'var(--vharanani-burgundy)' }} />
                <div>
                  <div className="font-bebas-neue text-xl" style={{ color: 'var(--vharanani-charcoal)' }}>4</div>
                  <div className="tracking-[0.15em] uppercase font-inter typo-meta" style={{ color: 'var(--vharanani-text-muted)' }}>DIVISIONS</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} style={{ color: 'var(--vharanani-burgundy)' }} />
                <div>
                  <div className="font-bebas-neue text-xl" style={{ color: 'var(--vharanani-charcoal)' }}>9</div>
                  <div className="tracking-[0.15em] uppercase font-inter typo-meta" style={{ color: 'var(--vharanani-text-muted)' }}>PROVINCES</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── CENTER COLUMN — 3D CUBE (always visible) ── */}
          <div className="col-span-12 lg:col-span-6 flex flex-col items-center justify-start z-10 py-8 lg:py-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative w-full"
              style={{ height: isMobile ? '380px' : '520px' }}
            >
              <CSS3DCube images={cubeImages} activeIndex={cubeActiveIndex} labels={cubeLabels} />
            </motion.div>

            {/* Active Info Below Cube */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="text-center mt-4 sm:mt-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentLevel === 0 ? `div-${activeDivisionIndex}` : `sec-${activeSectionIndex}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  {currentLevel === 0 ? (
                    <>
                      {DIVISION_LOGOS[divisions[activeDivisionIndex].id] ? (
                        <div className="flex justify-center mb-2">
                          <img
                            src={DIVISION_LOGOS[divisions[activeDivisionIndex].id]}
                            alt={divisions[activeDivisionIndex].title}
                            className="h-7 w-auto object-contain"
                          />
                        </div>
                      ) : (
                        <h3 className="font-bebas-neue typo-subline tracking-wide" style={{ color: 'var(--vharanani-charcoal)' }}>
                          {divisions[activeDivisionIndex].title}
                        </h3>
                      )}
                      <div className="flex items-center justify-center gap-3 mt-1">
                        <span className="font-inter typo-meta tracking-[0.2em] uppercase" style={{ color: 'var(--vharanani-burgundy)' }}>{divisions[activeDivisionIndex].type}</span>
                        <span className="w-1 h-1" style={{ backgroundColor: 'var(--vharanani-charcoal-40)' }} />
                        <span className="font-inter typo-meta tracking-[0.15em] uppercase" style={{ color: 'var(--vharanani-charcoal-60)' }}>{divisions[activeDivisionIndex].ref}</span>
                      </div>
                    </>
                  ) : selectedDivision ? (
                    <>
                      <h3 className="font-bebas-neue typo-subline tracking-wide" style={{ color: 'var(--vharanani-charcoal)' }}>
                        {selectedDivision.sections[activeSectionIndex]?.title}
                      </h3>
                      <div className="flex items-center justify-center gap-3 mt-1">
                        <span className="font-inter typo-meta tracking-[0.2em] uppercase" style={{ color: 'var(--vharanani-burgundy)' }}>{selectedDivision.sections[activeSectionIndex]?.type}</span>
                        <span className="w-1 h-1" style={{ backgroundColor: 'var(--vharanani-charcoal-40)' }} />
                        <span className="font-inter typo-meta tracking-[0.15em] uppercase" style={{ color: 'var(--vharanani-charcoal-60)' }}>{selectedDivision.title}</span>
                      </div>
                    </>
                  ) : null}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN — INDEX (switches between divisions and sections) ── */}
          <div className="col-span-12 lg:col-span-3 flex flex-col justify-center z-10 lg:sticky lg:top-[100px] lg:self-start lg:max-h-[calc(100vh-140px)]">
            <AnimatePresence mode="wait">
              {/* ═══ LEVEL 0: Division Index ═══ */}
              {currentLevel === 0 && (
                <motion.div
                  key="divisions-index"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col"
                  style={{ maxHeight: 'calc(100vh - 180px)' }}
                >
                  <div className="typo-caption tracking-[0.2em] mb-4 uppercase pb-3 flex-shrink-0 font-inter" style={{ color: 'var(--vharanani-burgundy)', borderBottom: '2px solid var(--vharanani-burgundy)' }}>
                    EXPLORE DIVISIONS
                  </div>

                  <div className="space-y-0 overflow-y-auto flex-1 pr-2 vharanani-scrollbar" style={{ maxHeight: 'calc(100vh - 280px)' }}>
                    {divisions.map((division, index) => (
                      <motion.button
                        key={division.id}
                        onHoverStart={() => handleDivisionHover(index)}
                        onClick={() => handleDivisionClick(division, index)}
                        className="group cursor-pointer py-4 sm:py-5 border-b transition-all duration-300 w-full text-left block"
                        style={{ borderColor: activeDivisionIndex === index ? 'var(--vharanani-burgundy)' : 'var(--vharanani-charcoal-20)' }}
                        whileHover={{ x: 8 }}
                      >
                        <div className="flex items-center gap-3 mb-1">
                          <div className="font-bebas-neue text-lg transition-colors" style={{ color: activeDivisionIndex === index ? 'var(--vharanani-burgundy)' : 'var(--vharanani-charcoal-60)' }}>
                            {division.index}
                          </div>
                          <div className="w-4 h-px transition-all" style={{ backgroundColor: activeDivisionIndex === index ? 'var(--vharanani-burgundy)' : 'var(--vharanani-charcoal-40)' }} />
                          <div className="font-inter typo-meta tracking-[0.2em] uppercase transition-colors" style={{ color: activeDivisionIndex === index ? 'var(--vharanani-burgundy)' : 'var(--vharanani-text-muted)' }}>
                            {division.type}
                          </div>
                        </div>

                        <div className="flex items-center gap-3 mb-1">
                          {DIVISION_LOGOS[division.id] ? (
                            <img
                              src={DIVISION_LOGOS[division.id]}
                              alt={division.title}
                              className="h-5 w-auto object-contain flex-shrink-0 transition-opacity"
                              style={{ opacity: activeDivisionIndex === index ? 1 : 0.35 }}
                            />
                          ) : (
                            <h4 className="font-bebas-neue typo-headline-small transition-colors" style={{ color: activeDivisionIndex === index ? 'var(--vharanani-charcoal)' : 'var(--vharanani-charcoal-60)' }}>
                              {division.title}
                            </h4>
                          )}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="font-inter typo-meta tracking-[0.15em] uppercase transition-colors" style={{ color: activeDivisionIndex === index ? 'var(--vharanani-burgundy)' : 'var(--vharanani-text-muted)' }}>
                            {division.subtitle}
                          </div>
                          {activeDivisionIndex === index && (
                            <motion.div initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}>
                              <ArrowRight size={14} style={{ color: 'var(--vharanani-burgundy)' }} />
                            </motion.div>
                          )}
                        </div>

                        <AnimatePresence>
                          {activeDivisionIndex === index && (
                            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                              <div className="mt-2 font-inter typo-copy-small" style={{ color: 'var(--vharanani-charcoal)' }}>
                                {division.description}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* ═══ LEVEL 1: Section Index ═══ */}
              {currentLevel === 1 && selectedDivision && (
                <motion.div
                  key={`sections-${selectedDivision.id}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col"
                  style={{ maxHeight: 'calc(100vh - 180px)' }}
                >
                  {/* Section header with logo + back */}
                  <div className="mb-4 pb-3 flex-shrink-0" style={{ borderBottom: '2px solid var(--vharanani-burgundy)' }}>
                    {DIVISION_LOGOS[selectedDivision.id] ? (
                      <div className="mb-3">
                        <img
                          src={DIVISION_LOGOS[selectedDivision.id]}
                          alt={selectedDivision.title}
                          className="h-8 w-auto object-contain"
                        />
                      </div>
                    ) : (
                      <div className="mb-3 font-inter typo-caption tracking-[0.2em] uppercase" style={{ color: 'var(--vharanani-burgundy)' }}>
                        {selectedDivision.title.toUpperCase()}
                      </div>
                    )}
                    <div className="flex items-center justify-between">
                      <div />
                      <button onClick={handleBackToHome} className="flex items-center gap-1 group">
                        <ArrowLeft size={12} style={{ color: 'var(--vharanani-charcoal-60)' }} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="font-inter typo-meta tracking-[0.15em] uppercase" style={{ color: 'var(--vharanani-charcoal-60)' }}>BACK</span>
                      </button>
                    </div>
                  </div>

                  <div className="space-y-0 overflow-y-auto flex-1 pr-2 vharanani-scrollbar" style={{ maxHeight: 'calc(100vh - 280px)' }}>
                    {selectedDivision.sections.map((section, index) => (
                      <motion.button
                        key={section.id}
                        onHoverStart={() => handleSectionHover(index)}
                        onClick={() => handleSectionClick(selectedDivision.id, section)}
                        className="group cursor-pointer py-4 sm:py-5 border-b transition-all duration-300 w-full text-left block"
                        style={{ borderColor: activeSectionIndex === index ? 'var(--vharanani-burgundy)' : 'var(--vharanani-charcoal-20)' }}
                        whileHover={{ x: 8 }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.08 }}
                      >
                        <div className="flex items-center gap-3 mb-1">
                          <div className="font-bebas-neue text-lg transition-colors" style={{ color: activeSectionIndex === index ? 'var(--vharanani-burgundy)' : 'var(--vharanani-charcoal-60)' }}>
                            {String(index + 1).padStart(2, '0')}
                          </div>
                          <div className="w-4 h-px transition-all" style={{ backgroundColor: activeSectionIndex === index ? 'var(--vharanani-burgundy)' : 'var(--vharanani-charcoal-40)' }} />
                          <div className="font-inter typo-meta tracking-[0.2em] uppercase transition-colors" style={{ color: activeSectionIndex === index ? 'var(--vharanani-burgundy)' : 'var(--vharanani-text-muted)' }}>
                            {section.type}
                          </div>
                        </div>

                        <h4 className="font-bebas-neue typo-headline-small mb-1 transition-colors" style={{ color: activeSectionIndex === index ? 'var(--vharanani-charcoal)' : 'var(--vharanani-charcoal-60)' }}>
                          {section.title}
                        </h4>

                        <div className="flex items-center justify-between">
                          <div className="font-inter typo-meta tracking-[0.15em] uppercase transition-colors" style={{ color: activeSectionIndex === index ? 'var(--vharanani-burgundy)' : 'var(--vharanani-text-muted)' }}>
                            {section.description}
                          </div>
                          {activeSectionIndex === index && (
                            <motion.div initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} className="flex-shrink-0 ml-2">
                              <ArrowRight size={14} style={{ color: 'var(--vharanani-burgundy)' }} />
                            </motion.div>
                          )}
                        </div>
                      </motion.button>
                    ))}
                  </div>

                  {/* Hint */}
                  <div className="pt-4 flex-shrink-0">
                    <div className="typo-caption tracking-[0.2em] uppercase" style={{ color: 'var(--vharanani-charcoal-60)' }}>
                      CLICK A SECTION TO VIEW FULL DETAILS
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="font-inter typo-caption tracking-[0.3em] uppercase" style={{ color: 'var(--vharanani-charcoal-60)' }}>
            {currentLevel === 0 ? 'SELECT A DIVISION' : 'SELECT A SECTION'}
          </div>
          <motion.div animate={{ y: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronDown size={16} style={{ color: 'var(--vharanani-burgundy)' }} />
          </motion.div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-1" style={{ backgroundColor: 'var(--vharanani-burgundy)' }} />
      </div>

      {/* ── FOOTER ── */}
      <footer className="relative z-[1] text-white py-12 sm:py-16 lg:py-20" style={{ backgroundColor: '#222222' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b-2 border-[var(--vharanani-burgundy)]">
            <div>
              <div className="mb-5">
                <img
                  src="https://ik.imagekit.io/qcvroy8xpd/Frame%205.png"
                  alt="Vharanani Group"
                  className="h-10 w-auto object-contain"
                />
              </div>
              <p className="font-inter typo-copy leading-[1.75] text-white/90">
                A wholly Black-owned holding company spanning construction, property development, community impact, and infrastructure — founded and led by David Mabilu.
              </p>
            </div>

            <div>
              <h4 className="font-bebas-neue text-lg mb-5 uppercase tracking-wide">Divisions</h4>
              <ul className="space-y-3">
                {divisions.map((div) => (
                  <li key={div.id}>
                    <button onClick={() => { handleHeaderNavClick(div.id); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="font-inter typo-copy text-white/85 hover:text-[var(--vharanani-burgundy)] transition-colors">
                      {div.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bebas-neue text-lg mb-5 uppercase tracking-wide">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { label: 'About the Group', divId: 'group', secId: 'about' },
                  { label: 'Leadership', divId: 'group', secId: 'leadership' },
                  { label: 'B-BBEE & Compliance', divId: 'group', secId: 'governance' },
                  { label: 'Projects Portfolio', divId: 'properties', secId: 'featured-projects' },
                  { label: 'Our Impact', divId: 'group', secId: 'impact' },
                ].map((item) => (
                  <li key={item.label}>
                    <button
                      onClick={() => {
                        const divIdx = divisions.findIndex((d) => d.id === item.divId);
                        if (divIdx >= 0) {
                          const div = divisions[divIdx];
                          handleDivisionClick(div, divIdx);
                          const sec = div.sections.find((s) => s.id === item.secId);
                          if (sec) {
                            setTimeout(() => handleSectionClick(div.id, sec), 300);
                          }
                        }
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="font-inter typo-copy text-white/85 hover:text-[var(--vharanani-burgundy)] transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bebas-neue text-lg mb-5 uppercase tracking-wide">Head Office</h4>
              <div className="space-y-4 font-inter typo-copy text-white/90">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--vharanani-burgundy)' }} />
                  <div>
                    <span>18 Hume Road, Dunkeld West<br />Johannesburg, 2196</span>
                    <a href="https://maps.app.goo.gl/3w3g7J9pE1mH4CMr8" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 mt-1 typo-label tracking-[0.1em] uppercase text-[var(--vharanani-burgundy)] hover:text-white transition-colors">
                      View on Map <ArrowRight size={10} />
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--vharanani-burgundy)' }} />
                  <span className="text-white/70 typo-copy-small">3a Schoeman Street<br />Polokwane, 0699</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="flex-shrink-0" style={{ color: 'var(--vharanani-burgundy)' }} />
                  <div>
                    <a href="tel:+27116561418" className="hover:text-[var(--vharanani-burgundy)] transition-colors">+27 11 656 1418</a>
                    <span className="text-white/50 mx-2">|</span>
                    <a href="tel:+27152956085" className="text-white/70 typo-copy-small hover:text-[var(--vharanani-burgundy)] transition-colors">+27 15 295 6085</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="flex-shrink-0" style={{ color: 'var(--vharanani-burgundy)' }} />
                  <a href="mailto:info@vharanani.com" className="hover:text-[var(--vharanani-burgundy)] transition-colors">info@vharanani.com</a>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="font-inter typo-copy-small text-white/70">
              © 2026 Vharanani Group. All rights reserved.
            </div>
            <div className="flex items-center gap-6 font-inter typo-copy-small text-white/70">
              <a href="mailto:info@vharanani.com?subject=Privacy%20Policy%20Enquiry" className="hover:text-[var(--vharanani-burgundy)] transition-colors">Privacy Policy</a>
              <span className="w-px h-3 bg-white/20" />
              <a href="mailto:info@vharanani.com?subject=Terms%20of%20Use%20Enquiry" className="hover:text-[var(--vharanani-burgundy)] transition-colors">Terms of Use</a>
              <span className="w-px h-3 bg-white/20" />
              <a href="mailto:info@vharanani.com?subject=PAIA%20Manual%20Request" className="hover:text-[var(--vharanani-burgundy)] transition-colors">PAIA Manual</a>
            </div>
          </div>

          <div className="mt-8 pt-6" style={{ borderTop: '1px solid var(--vharanani-charcoal-80)' }}>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
              <div className="font-inter typo-label tracking-[0.1em] sm:tracking-[0.3em] uppercase text-white/50">VISION. STRUCTURE. IMPACT.</div>
              <div className="font-inter typo-label tracking-[0.1em] sm:tracking-[0.15em] uppercase text-white/50">© VHARANANI GROUP 2026</div>
            </div>
          </div>
        </div>
      </footer>

      {/* ── GLASSMORPHISM OVERLAY (Level 2) ── */}
      <AnimatePresence>
        {overlayOpen && overlaySection && selectedDivision && (
          <GlassmorphismOverlay
            isOpen={overlayOpen}
            onClose={handleOverlayClose}
            title={overlaySection.section.title}
            subtitle={`${selectedDivision.title} — ${overlaySection.section.type}`}
            tabs={overlayTabs}
            activeTab={overlayActiveTab}
            divisionLogo={DIVISION_LOGOS[selectedDivision.id]}
            onTabChange={handleOverlayTabChange}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
