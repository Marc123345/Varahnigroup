import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header band */}
      <div style={{ background: '#111111' }} className="py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8">
            <ArrowLeft size={16} />
            <span className="font-inter typo-meta tracking-[0.15em] uppercase">Back to Home</span>
          </Link>
          <h1 className="font-bebas-neue uppercase text-white" style={{ fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1 }}>
            Terms of Use
          </h1>
          <p className="font-inter typo-copy text-white/70 mt-4">Last updated: 31 March 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-16 lg:px-24 py-12 md:py-16">
        <div className="font-inter" style={{ color: 'var(--vharanani-charcoal)' }}>

          <h2 className="font-bebas-neue text-2xl uppercase tracking-wide mt-10 mb-4" style={{ color: 'var(--vharanani-burgundy)' }}>1. Acceptance of Terms</h2>
          <p className="typo-copy leading-relaxed mb-4" style={{ color: 'var(--vharanani-charcoal-80)' }}>
            By accessing and using this website (varahnigroup.vercel.app), you acknowledge that you have read, understood, and agree to be bound by these Terms of Use. If you do not agree to these terms, you must not use this website. These terms constitute a legally binding agreement between you and Vharanani Group (Pty) Ltd.
          </p>

          <h2 className="font-bebas-neue text-2xl uppercase tracking-wide mt-10 mb-4" style={{ color: 'var(--vharanani-burgundy)' }}>2. About Vharanani Group</h2>
          <p className="typo-copy leading-relaxed mb-4" style={{ color: 'var(--vharanani-charcoal-80)' }}>
            Vharanani Group (Pty) Ltd is a South African registered company with its principal place of business at 18 Hume Road, Dunkeld West, Johannesburg, 2196. The Group operates through its subsidiaries including Vharanani Properties (Pty) Ltd, DMFT Property Developers (Pty) Ltd, and The David Mabilu Foundation.
          </p>

          <h2 className="font-bebas-neue text-2xl uppercase tracking-wide mt-10 mb-4" style={{ color: 'var(--vharanani-burgundy)' }}>3. Use of Website</h2>
          <p className="typo-copy leading-relaxed mb-4" style={{ color: 'var(--vharanani-charcoal-80)' }}>You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of, or restrict or inhibit the use of this website by, any third party. Prohibited conduct includes:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4" style={{ color: 'var(--vharanani-charcoal-80)' }}>
            <li className="typo-copy">Using the website for any unlawful, fraudulent, or harmful purpose.</li>
            <li className="typo-copy">Transmitting any material that is defamatory, offensive, or otherwise objectionable.</li>
            <li className="typo-copy">Attempting to gain unauthorised access to any part of the website, server, or database.</li>
            <li className="typo-copy">Introducing viruses, trojans, or other malicious software.</li>
            <li className="typo-copy">Scraping, data mining, or harvesting content from the website without prior written consent.</li>
          </ul>

          <h2 className="font-bebas-neue text-2xl uppercase tracking-wide mt-10 mb-4" style={{ color: 'var(--vharanani-burgundy)' }}>4. Intellectual Property</h2>
          <p className="typo-copy leading-relaxed mb-4" style={{ color: 'var(--vharanani-charcoal-80)' }}>
            All content on this website, including but not limited to text, graphics, logos, images, photographs, video, audio, software, and design elements, is the property of Vharanani Group (Pty) Ltd or its licensors and is protected by South African copyright law (Copyright Act 98 of 1978), trade mark law, and other intellectual property legislation. You may not reproduce, distribute, modify, or create derivative works from any content on this website without our prior written permission.
          </p>

          <h2 className="font-bebas-neue text-2xl uppercase tracking-wide mt-10 mb-4" style={{ color: 'var(--vharanani-burgundy)' }}>5. Disclaimer of Warranties</h2>
          <p className="typo-copy leading-relaxed mb-4" style={{ color: 'var(--vharanani-charcoal-80)' }}>
            This website and its content are provided "as is" and "as available" without any warranties of any kind, whether express or implied. While we endeavour to ensure that the information on this website is accurate and up to date, we make no representations or warranties regarding the completeness, accuracy, reliability, suitability, or availability of any information, products, services, or related graphics. Project descriptions, statistics, and capability statements are provided for informational purposes only and do not constitute contractual commitments.
          </p>

          <h2 className="font-bebas-neue text-2xl uppercase tracking-wide mt-10 mb-4" style={{ color: 'var(--vharanani-burgundy)' }}>6. Limitation of Liability</h2>
          <p className="typo-copy leading-relaxed mb-4" style={{ color: 'var(--vharanani-charcoal-80)' }}>
            To the maximum extent permitted by South African law, Vharanani Group (Pty) Ltd and its directors, employees, agents, and subsidiaries shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of this website. This limitation applies regardless of the cause of action, including negligence, breach of contract, or any other legal theory.
          </p>

          <h2 className="font-bebas-neue text-2xl uppercase tracking-wide mt-10 mb-4" style={{ color: 'var(--vharanani-burgundy)' }}>7. Third-Party Links</h2>
          <p className="typo-copy leading-relaxed mb-4" style={{ color: 'var(--vharanani-charcoal-80)' }}>
            This website may contain links to third-party websites. These links are provided for your convenience only. We have no control over the content, privacy practices, or policies of third-party websites and accept no responsibility or liability for them. Your use of any third-party website is at your own risk.
          </p>

          <h2 className="font-bebas-neue text-2xl uppercase tracking-wide mt-10 mb-4" style={{ color: 'var(--vharanani-burgundy)' }}>8. Indemnification</h2>
          <p className="typo-copy leading-relaxed mb-4" style={{ color: 'var(--vharanani-charcoal-80)' }}>
            You agree to indemnify, defend, and hold harmless Vharanani Group (Pty) Ltd, its subsidiaries, directors, officers, employees, and agents from and against any claims, liabilities, damages, costs, and expenses (including legal fees) arising out of or related to your use of this website or your violation of these Terms of Use.
          </p>

          <h2 className="font-bebas-neue text-2xl uppercase tracking-wide mt-10 mb-4" style={{ color: 'var(--vharanani-burgundy)' }}>9. Governing Law and Jurisdiction</h2>
          <p className="typo-copy leading-relaxed mb-4" style={{ color: 'var(--vharanani-charcoal-80)' }}>
            These Terms of Use shall be governed by and construed in accordance with the laws of the Republic of South Africa. Any dispute arising from or relating to these terms shall be subject to the exclusive jurisdiction of the courts of the Republic of South Africa, specifically the High Court of South Africa, Gauteng Division, Johannesburg.
          </p>

          <h2 className="font-bebas-neue text-2xl uppercase tracking-wide mt-10 mb-4" style={{ color: 'var(--vharanani-burgundy)' }}>10. Consumer Protection Act</h2>
          <p className="typo-copy leading-relaxed mb-4" style={{ color: 'var(--vharanani-charcoal-80)' }}>
            Nothing in these Terms of Use is intended to limit or exclude any rights you may have under the Consumer Protection Act, 2008 (Act No. 68 of 2008) ("CPA"). Where the CPA applies, these terms shall be read subject to the provisions of the CPA, and any provision that contravenes the CPA shall be deemed to be amended to the extent necessary to comply.
          </p>

          <h2 className="font-bebas-neue text-2xl uppercase tracking-wide mt-10 mb-4" style={{ color: 'var(--vharanani-burgundy)' }}>11. Electronic Communications and Transactions Act</h2>
          <p className="typo-copy leading-relaxed mb-4" style={{ color: 'var(--vharanani-charcoal-80)' }}>
            In compliance with the Electronic Communications and Transactions Act, 2002 (Act No. 25 of 2002) ("ECTA"), the following information is provided: Full name: Vharanani Group (Pty) Ltd. Physical address: 18 Hume Road, Dunkeld West, Johannesburg, 2196. Telephone: +27 11 656 1418. Email: info@vharanani.com. Website: varahnigroup.vercel.app.
          </p>

          <h2 className="font-bebas-neue text-2xl uppercase tracking-wide mt-10 mb-4" style={{ color: 'var(--vharanani-burgundy)' }}>12. Modifications</h2>
          <p className="typo-copy leading-relaxed mb-4" style={{ color: 'var(--vharanani-charcoal-80)' }}>
            We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting to this website. Your continued use of the website after any changes constitutes your acceptance of the revised terms.
          </p>

          <h2 className="font-bebas-neue text-2xl uppercase tracking-wide mt-10 mb-4" style={{ color: 'var(--vharanani-burgundy)' }}>13. Contact</h2>
          <div className="p-6 mb-8" style={{ background: '#f9f9f9', border: '1px solid var(--vharanani-charcoal-20)' }}>
            <p className="typo-copy mb-1"><strong>Vharanani Group (Pty) Ltd</strong></p>
            <p className="typo-copy" style={{ color: 'var(--vharanani-charcoal-60)' }}>18 Hume Road, Dunkeld West, Johannesburg, 2196</p>
            <p className="typo-copy" style={{ color: 'var(--vharanani-charcoal-60)' }}>Email: info@vharanani.com</p>
            <p className="typo-copy" style={{ color: 'var(--vharanani-charcoal-60)' }}>Tel: +27 11 656 1418</p>
          </div>
        </div>
      </div>

      <div className="h-[4px]" style={{ background: 'var(--vharanani-burgundy)' }} />
    </div>
  );
}
