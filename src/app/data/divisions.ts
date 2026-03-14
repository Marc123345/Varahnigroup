import { type ReactNode } from 'react';

// ═══════════════════════════════════════════════════════════
// TYPE DEFINITIONS
// ═══════════════════════════════════════════════════════════

export interface Section {
  id: string;
  index: string;
  title: string;
  type: string;
  description: string;
  image: string;
}

export interface Division {
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

// ═══════════════════════════════════════════════════════════
// DIVISION LOGOS (ImageKit hosted)
// ═══════════════════════════════════════════════════════════

export const DIVISION_LOGOS: Record<string, string> = {
  group: 'https://ik.imagekit.io/qcvroy8xpd/Frame%202.png',
  properties: 'https://ik.imagekit.io/qcvroy8xpd/Frame%203.png',
  foundation: 'https://ik.imagekit.io/qcvroy8xpd/DMLogo1-02%201.png',
  dmft: 'https://ik.imagekit.io/qcvroy8xpd/David%20Mabilu%20FT%20Property%20Developers%20logo%201.png',
};

// ═══════════════════════════════════════════════════════════
// EXTRA CUBE IMAGES (for padding when fewer than 6 divisions)
// ═══════════════════════════════════════════════════════════

export const extraCubeImages = [
  'https://images.unsplash.com/photo-1694286068561-3233c946e9be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBlbXBvd2VybWVudCUyMGVkdWNhdGlvbiUyMEFmcmljYXxlbnwxfHx8fDE3NzI3MzQ5OTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1656088304789-02d1ad6c9149?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZyUyMGZhY2FkZXxlbnwxfHx8fDE3NzI2ODMwODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
];

// ═══════════════════════════════════════════════════════════
// DIVISIONS DATA
// ═══════════════════════════════════════════════════════════

export const divisions: Division[] = [
  {
    id: 'group',
    index: '01',
    title: 'Vharani Group',
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
      { id: 'companies', index: 'Sec 8', title: 'Our Companies', type: 'SUBSIDIARIES', description: 'Vharani Properties, DMFT, David Mabilu Foundation', image: 'https://images.unsplash.com/photo-1682924754699-dcf11b641343?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGluZnJhc3RydWN0dXJlJTIwZGV2ZWxvcG1lbnQlMjBBZnJpY2ElMjByb2Fkc3xlbnwxfHx8fDE3NzMwNTYzMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'sustainable-impact', index: 'Sec 9', title: 'Sustainable Impact & News', type: 'UPDATES', description: 'Driving impact, news, and contact information', image: 'https://images.unsplash.com/photo-1766740606233-6573571caa6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXdzJTIwbWVkaWElMjB1cGRhdGUlMjBjb3Jwb3JhdGUlMjBvZmZpY2V8ZW58MXx8fHwxNzczMDU2MzQyfDA&ixlib=rb-4.1.0&q=80&w=1080' },
    ],
  },
  {
    id: 'properties',
    index: '02',
    title: 'Vharani Properties',
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
      { id: 'partnerships', index: 'Sec 6', title: 'Partnerships', type: 'NETWORK', description: 'Collaborative partnerships and the Vharani Group', image: 'https://images.unsplash.com/photo-1697665387559-253e7a645e96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub25wcm9maXQlMjBwYXJ0bmVyc2hpcCUyMGhhbmRzaGFrZSUyMGNvbW11bml0eXxlbnwxfHx8fDE3NzMwNTc2OTN8MA&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'heritage', index: 'Sec 7', title: 'Vharani Group Heritage', type: 'HERITAGE', description: 'The backbone — supported by the Vharani Group', image: 'https://images.unsplash.com/photo-1517598024396-46c53fb391a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwZm91bmRlciUyMHBoaWxhbnRocm9waXN0JTIwcG9ydHJhaXQlMjBjYW5kaWR8ZW58MXx8fHwxNzczMTg2MTAwfDA&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'get-involved', index: 'Sec 8', title: 'Contact & Get Involved', type: 'CONTACT', description: 'Join us in building opportunity', image: 'https://images.unsplash.com/photo-1665848170858-359b25d5eb81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwc3R1ZGVudHMlMjBzbWlsaW5nJTIwY29tbXVuaXR5JTIwZ2F0aGVyaW5nJTIwd2FybXxlbnwxfHx8fDE3NzMxODYwOTh8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    ],
  },
  {
    id: 'dmft',
    index: '04',
    title: 'DMFT Property Developers',
    subtitle: 'Creating Exceptional Property Developments',
    type: 'PROPERTY DEVELOPMENT',
    ref: 'Part of Vharani Group',
    description: 'A property development company focused on the creation of high-quality residential and mixed-use developments across South Africa',
    image: 'https://images.unsplash.com/photo-1707410148802-fe08fe956398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBkZXZlbG9wbWVudCUyMGluZnJhc3RydWN0dXJlJTIwc291dGglMjBhZnJpY2F8ZW58MXx8fHwxNzcyNzM0OTg3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    sections: [
      { id: 'about', index: 'Sec 1', title: 'About DMFT', type: 'INTELLIGENCE', description: 'Company overview and Vharani Group partnership', image: 'https://images.unsplash.com/photo-1762146828422-50a8bd416d3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9wZXJ0eSUyMGRldmVsb3BtZW50JTIwcGxhbm5pbmclMjBhcmNoaXRlY3R1cmFsJTIwYmx1ZXByaW50fGVufDF8fHx8MTc3MzA1NzQ0OHww&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'approach', index: 'Sec 2', title: 'Development Approach', type: 'PROCESS', description: 'Full lifecycle from land acquisition to delivery', image: 'https://images.unsplash.com/photo-1609561515089-91b7fa540820?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFsaXR5JTIwY29uc3RydWN0aW9uJTIwc3RhbmRhcmRzJTIwaW5zcGVjdGlvbnxlbnwxfHx8fDE3NzMwNTc0NDh8MA&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'residential-estates', index: 'Sec 3', title: 'Residential Estates', type: 'DEVELOPMENTS', description: 'Secure estates for modern living', image: 'https://images.unsplash.com/photo-1722293862101-6511f044073b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNpZGVudGlhbCUyMGVzdGF0ZSUyMGdhdGVkJTIwY29tbXVuaXR5fGVufDF8fHx8MTc3MzA1NzQ0Nnww&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'apartments-townhouses', index: 'Sec 4', title: 'Apartments & Townhouses', type: 'DEVELOPMENTS', description: 'Urban apartments and modern townhouse complexes', image: 'https://images.unsplash.com/photo-1623752938001-25a3f247ad4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBidWlsZGluZyUyMHVyYmFuJTIwZGV2ZWxvcG1lbnR8ZW58MXx8fHwxNzczMDU3NDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'mixed-use', index: 'Sec 5', title: 'Mixed-Use Developments', type: 'DEVELOPMENTS', description: 'Integrated residential, commercial, and community spaces', image: 'https://images.unsplash.com/photo-1758304480521-e6906c8ead7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaXhlZCUyMHVzZSUyMGRldmVsb3BtZW50JTIwdXJiYW4lMjBwbGFubmluZyUyMGFlcmlhbHxlbnwxfHx8fDE3NzMwNTc0NDd8MA&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'capabilities', index: 'Sec 6', title: 'Capabilities & Quality', type: 'STANDARDS', description: 'Development expertise and quality commitment', image: 'https://images.unsplash.com/photo-1767818017596-b9e8504704a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3duaG91c2UlMjBjb21wbGV4JTIwbW9kZXJuJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3MzA1NzQ0N3ww&ixlib=rb-4.1.0&q=80&w=1080' },
      { id: 'heritage-contact', index: 'Sec 7', title: 'Heritage & Contact', type: 'CONTACT', description: 'Vharani Group heritage and partnership enquiries', image: 'https://images.unsplash.com/photo-1646678667054-d68e27a3f085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBkcm9uZSUyMGFlcmlhbCUyMG1vZGVybiUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc3MzE4NTY3OXww&ixlib=rb-4.1.0&q=80&w=1080' },
    ],
  },
];
