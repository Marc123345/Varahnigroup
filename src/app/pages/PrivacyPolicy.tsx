import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header band */}
      <div style={{ background: 'var(--vharanani-burgundy)' }} className="py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8">
            <ArrowLeft size={16} />
            <span className="font-inter typo-meta tracking-[0.15em] uppercase">Back to Home</span>
          </Link>
          <h1 className="font-bebas-neue uppercase text-white" style={{ fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1 }}>
            Privacy Policy
          </h1>
          <p className="font-inter typo-copy text-white/70 mt-4">Last updated: 31 March 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-16 lg:px-24 py-12 md:py-16">
        <div className="prose prose-lg max-w-none font-inter" style={{ color: 'var(--vharanani-charcoal)' }}>

          <h2 className="font-bebas-neue text-2xl uppercase tracking-wide mt-10 mb-4" style={{ color: 'var(--vharanani-burgundy)' }}>1. Introduction</h2>
          <p className="typo-copy leading-relaxed mb-4" style={{ color: 'var(--vharanani-charcoal-80)' }}>
            Vharanani Group (Pty) Ltd and its subsidiaries, including Vharanani Properties (Pty) Ltd, DMFT Property Developers (Pty) Ltd, and The David Mabilu Foundation (collectively referred to as "Vharanani Group", "we", "us", or "our"), are committed to protecting your personal information in accordance with the Protection of Personal Information Act, 2013 (Act No. 4 of 2013) ("POPIA") and other applicable South African legislation.
          </p>
          <p className="typo-copy leading-relaxed mb-4" style={{ color: 'var(--vharanani-charcoal-80)' }}>
            This Privacy Policy explains how we collect, use, store, and protect your personal information when you interact with our website, services, or business operations.
          </p>

          <h2 className="font-bebas-neue text-2xl uppercase tracking-wide mt-10 mb-4" style={{ color: 'var(--vharanani-burgundy)' }}>2. Information We Collect</h2>
          <p className="typo-copy leading-relaxed mb-4" style={{ color: 'var(--vharanani-charcoal-80)' }}>We may collect the following categories of personal information:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4" style={{ color: 'var(--vharanani-charcoal-80)' }}>
            <li className="typo-copy"><strong>Identity Information:</strong> Full name, identity number, date of birth, gender, and nationality.</li>
            <li className="typo-copy"><strong>Contact Information:</strong> Physical address, email address, telephone number, and mobile number.</li>
            <li className="typo-copy"><strong>Financial Information:</strong> Bank account details, tax registration numbers, and billing information (where applicable).</li>
            <li className="typo-copy"><strong>Employment Information:</strong> Job title, employer details, and professional qualifications.</li>
            <li className="typo-copy"><strong>Technical Information:</strong> IP address, browser type, device information, and website usage data collected through cookies.</li>
            <li className="typo-copy"><strong>Communication Records:</strong> Correspondence, enquiries, and feedback submitted through our website or other channels.</li>
          </ul>

          <h2 className="font-bebas-neue text-2xl uppercase tracking-wide mt-10 mb-4" style={{ color: 'var(--vharanani-burgundy)' }}>3. Purpose of Processing</h2>
          <p className="typo-copy leading-relaxed mb-4" style={{ color: 'var(--vharanani-charcoal-80)' }}>We process your personal information for the following purposes:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4" style={{ color: 'var(--vharanani-charcoal-80)' }}>
            <li className="typo-copy">To respond to enquiries, requests, and communications.</li>
            <li className="typo-copy">To fulfil contractual obligations related to construction, property development, and related services.</li>
            <li className="typo-copy">To process applications for bursaries, scholarships, and foundation programmes.</li>
            <li className="typo-copy">To comply with legal and regulatory requirements, including B-BBEE verification and CIDB registration.</li>
            <li className="typo-copy">To improve our website, services, and user experience.</li>
            <li className="typo-copy">To send relevant communications about our services, projects, and community initiatives (with your consent).</li>
          </ul>

          <h2 className="font-bebas-neue text-2xl uppercase tracking-wide mt-10 mb-4" style={{ color: 'var(--vharanani-burgundy)' }}>4. Legal Basis for Processing</h2>
          <p className="typo-copy leading-relaxed mb-4" style={{ color: 'var(--vharanani-charcoal-80)' }}>
            In terms of Section 11 of POPIA, we process your personal information based on one or more of the following lawful grounds: your consent; the performance of a contract; compliance with a legal obligation; the protection of your legitimate interests; or the pursuit of our legitimate interests.
          </p>

          <h2 className="font-bebas-neue text-2xl uppercase tracking-wide mt-10 mb-4" style={{ color: 'var(--vharanani-burgundy)' }}>5. Sharing of Personal Information</h2>
          <p className="typo-copy leading-relaxed mb-4" style={{ color: 'var(--vharanani-charcoal-80)' }}>
            We may share your personal information with trusted third parties, including subsidiaries within the Vharanani Group, professional service providers (such as auditors, legal advisors, and IT service providers), government authorities and regulators where required by law, and B-BBEE verification agencies. We do not sell, rent, or trade your personal information to any third party for marketing purposes.
          </p>

          <h2 className="font-bebas-neue text-2xl uppercase tracking-wide mt-10 mb-4" style={{ color: 'var(--vharanani-burgundy)' }}>6. Data Retention</h2>
          <p className="typo-copy leading-relaxed mb-4" style={{ color: 'var(--vharanani-charcoal-80)' }}>
            We retain your personal information only for as long as is necessary to fulfil the purposes for which it was collected, or as required by applicable law. When personal information is no longer needed, it will be securely destroyed or de-identified in accordance with POPIA.
          </p>

          <h2 className="font-bebas-neue text-2xl uppercase tracking-wide mt-10 mb-4" style={{ color: 'var(--vharanani-burgundy)' }}>7. Security Measures</h2>
          <p className="typo-copy leading-relaxed mb-4" style={{ color: 'var(--vharanani-charcoal-80)' }}>
            We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, loss, destruction, or damage. These measures include access controls, encryption, secure hosting environments, and regular security assessments. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="font-bebas-neue text-2xl uppercase tracking-wide mt-10 mb-4" style={{ color: 'var(--vharanani-burgundy)' }}>8. Your Rights Under POPIA</h2>
          <p className="typo-copy leading-relaxed mb-4" style={{ color: 'var(--vharanani-charcoal-80)' }}>As a data subject, you have the following rights:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4" style={{ color: 'var(--vharanani-charcoal-80)' }}>
            <li className="typo-copy">The right to be informed about the collection and use of your personal information.</li>
            <li className="typo-copy">The right to request access to your personal information held by us.</li>
            <li className="typo-copy">The right to request correction or deletion of inaccurate or outdated personal information.</li>
            <li className="typo-copy">The right to object to the processing of your personal information.</li>
            <li className="typo-copy">The right to withdraw consent where processing is based on consent.</li>
            <li className="typo-copy">The right to lodge a complaint with the Information Regulator of South Africa.</li>
          </ul>

          <h2 className="font-bebas-neue text-2xl uppercase tracking-wide mt-10 mb-4" style={{ color: 'var(--vharanani-burgundy)' }}>9. Cookies</h2>
          <p className="typo-copy leading-relaxed mb-4" style={{ color: 'var(--vharanani-charcoal-80)' }}>
            Our website may use cookies and similar technologies to enhance your browsing experience. Cookies are small text files stored on your device that help us understand how you use our website. You may disable cookies through your browser settings, but this may affect the functionality of certain features.
          </p>

          <h2 className="font-bebas-neue text-2xl uppercase tracking-wide mt-10 mb-4" style={{ color: 'var(--vharanani-burgundy)' }}>10. Contact Information</h2>
          <p className="typo-copy leading-relaxed mb-4" style={{ color: 'var(--vharanani-charcoal-80)' }}>
            If you have any questions about this Privacy Policy, wish to exercise your rights, or need to report a data breach, please contact our Information Officer:
          </p>
          <div className="p-6 mb-4" style={{ background: '#f9f9f9', border: '1px solid var(--vharanani-charcoal-20)' }}>
            <p className="typo-copy mb-1"><strong>Information Officer</strong></p>
            <p className="typo-copy" style={{ color: 'var(--vharanani-charcoal-60)' }}>Vharanani Group (Pty) Ltd</p>
            <p className="typo-copy" style={{ color: 'var(--vharanani-charcoal-60)' }}>18 Hume Road, Dunkeld West, Johannesburg, 2196</p>
            <p className="typo-copy" style={{ color: 'var(--vharanani-charcoal-60)' }}>Email: info@vharanani.com</p>
            <p className="typo-copy" style={{ color: 'var(--vharanani-charcoal-60)' }}>Tel: +27 11 656 1418</p>
          </div>

          <h2 className="font-bebas-neue text-2xl uppercase tracking-wide mt-10 mb-4" style={{ color: 'var(--vharanani-burgundy)' }}>11. Information Regulator</h2>
          <p className="typo-copy leading-relaxed mb-4" style={{ color: 'var(--vharanani-charcoal-80)' }}>
            You have the right to lodge a complaint with the Information Regulator of South Africa if you believe your personal information has been unlawfully processed:
          </p>
          <div className="p-6 mb-4" style={{ background: '#f9f9f9', border: '1px solid var(--vharanani-charcoal-20)' }}>
            <p className="typo-copy mb-1"><strong>Information Regulator (South Africa)</strong></p>
            <p className="typo-copy" style={{ color: 'var(--vharanani-charcoal-60)' }}>JD House, 27 Stiemens Street, Braamfontein, Johannesburg, 2001</p>
            <p className="typo-copy" style={{ color: 'var(--vharanani-charcoal-60)' }}>Email: enquiries@inforegulator.org.za</p>
            <p className="typo-copy" style={{ color: 'var(--vharanani-charcoal-60)' }}>Tel: 010 023 5207</p>
          </div>

          <h2 className="font-bebas-neue text-2xl uppercase tracking-wide mt-10 mb-4" style={{ color: 'var(--vharanani-burgundy)' }}>12. Changes to This Policy</h2>
          <p className="typo-copy leading-relaxed mb-8" style={{ color: 'var(--vharanani-charcoal-80)' }}>
            We reserve the right to amend this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.
          </p>
        </div>
      </div>

      {/* Footer accent */}
      <div className="h-[4px]" style={{ background: 'var(--vharanani-burgundy)' }} />
    </div>
  );
}
