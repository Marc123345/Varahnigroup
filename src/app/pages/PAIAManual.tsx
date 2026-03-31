import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function PAIAManual() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header band */}
      <div className="py-16 px-6 md:px-16 lg:px-24" style={{ background: 'var(--vharanani-burgundy)' }}>
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8">
            <ArrowLeft size={16} />
            <span className="font-inter typo-meta tracking-[0.15em] uppercase">Back to Home</span>
          </Link>
          <h1 className="font-bebas-neue uppercase text-white" style={{ fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1 }}>
            PAIA Manual
          </h1>
          <p className="font-inter typo-copy text-white/70 mt-4">
            Promotion of Access to Information Act, 2000 (Act No. 2 of 2000) — Section 51 Manual
          </p>
          <p className="font-inter typo-copy text-white/50 mt-2">Last updated: 31 March 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-16 lg:px-24 py-12 md:py-16">
        <div className="font-inter" style={{ color: 'var(--vharanani-charcoal)' }}>

          <h2 className="font-bebas-neue text-2xl uppercase tracking-wide mt-10 mb-4" style={{ color: 'var(--vharanani-burgundy)' }}>1. Purpose of This Manual</h2>
          <p className="typo-copy leading-relaxed mb-4" style={{ color: 'var(--vharanani-charcoal-80)' }}>
            This manual is published in terms of Section 51 of the Promotion of Access to Information Act, 2000 (Act No. 2 of 2000) ("PAIA") and Section 17 of the Protection of Personal Information Act, 2013 (Act No. 4 of 2013) ("POPIA"). It provides information about Vharanani Group (Pty) Ltd and its procedures for requesting access to records held by the Group.
          </p>
          <p className="typo-copy leading-relaxed mb-4" style={{ color: 'var(--vharanani-charcoal-80)' }}>
            PAIA gives effect to the constitutional right of access to any information held by another person that is required for the exercise or protection of any right (Section 32 of the Constitution of the Republic of South Africa, 1996).
          </p>

          <h2 className="font-bebas-neue text-2xl uppercase tracking-wide mt-10 mb-4" style={{ color: 'var(--vharanani-burgundy)' }}>2. Contact Details of the Information Officer</h2>
          <div className="p-6 mb-6" style={{ background: '#f9f9f9', border: '1px solid var(--vharanani-charcoal-20)' }}>
            <p className="typo-copy mb-1"><strong>Head of Body / Information Officer:</strong></p>
            <p className="typo-copy" style={{ color: 'var(--vharanani-charcoal-60)' }}>David Mabilu — Group Executive Chairman</p>
            <p className="typo-copy mt-3 mb-1"><strong>Registered Address:</strong></p>
            <p className="typo-copy" style={{ color: 'var(--vharanani-charcoal-60)' }}>18 Hume Road, Dunkeld West, Johannesburg, 2196</p>
            <p className="typo-copy mt-3 mb-1"><strong>Contact:</strong></p>
            <p className="typo-copy" style={{ color: 'var(--vharanani-charcoal-60)' }}>Telephone: +27 11 656 1418</p>
            <p className="typo-copy" style={{ color: 'var(--vharanani-charcoal-60)' }}>Email: info@vharanani.com</p>
          </div>

          <h2 className="font-bebas-neue text-2xl uppercase tracking-wide mt-10 mb-4" style={{ color: 'var(--vharanani-burgundy)' }}>3. Guide on How to Use PAIA</h2>
          <p className="typo-copy leading-relaxed mb-4" style={{ color: 'var(--vharanani-charcoal-80)' }}>
            The South African Human Rights Commission ("SAHRC") has compiled a guide on how to use PAIA, as required by Section 10 of PAIA. This guide is available from the SAHRC:
          </p>
          <div className="p-6 mb-6" style={{ background: '#f9f9f9', border: '1px solid var(--vharanani-charcoal-20)' }}>
            <p className="typo-copy mb-1"><strong>South African Human Rights Commission</strong></p>
            <p className="typo-copy" style={{ color: 'var(--vharanani-charcoal-60)' }}>PAIA Unit, Research and Documentation Department</p>
            <p className="typo-copy" style={{ color: 'var(--vharanani-charcoal-60)' }}>Private Bag X2700, Houghton, 2041</p>
            <p className="typo-copy" style={{ color: 'var(--vharanani-charcoal-60)' }}>Telephone: 011 877 3600</p>
            <p className="typo-copy" style={{ color: 'var(--vharanani-charcoal-60)' }}>Website: www.sahrc.org.za</p>
          </div>

          <h2 className="font-bebas-neue text-2xl uppercase tracking-wide mt-10 mb-4" style={{ color: 'var(--vharanani-burgundy)' }}>4. Applicable Legislation</h2>
          <p className="typo-copy leading-relaxed mb-4" style={{ color: 'var(--vharanani-charcoal-80)' }}>The following legislation, among others, applies to the records held by Vharanani Group:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4" style={{ color: 'var(--vharanani-charcoal-80)' }}>
            <li className="typo-copy">Companies Act, 2008 (Act No. 71 of 2008)</li>
            <li className="typo-copy">Income Tax Act, 1962 (Act No. 58 of 1962)</li>
            <li className="typo-copy">Value-Added Tax Act, 1991 (Act No. 89 of 1991)</li>
            <li className="typo-copy">Basic Conditions of Employment Act, 1997 (Act No. 75 of 1997)</li>
            <li className="typo-copy">Labour Relations Act, 1995 (Act No. 66 of 1995)</li>
            <li className="typo-copy">Occupational Health and Safety Act, 1993 (Act No. 85 of 1993)</li>
            <li className="typo-copy">Broad-Based Black Economic Empowerment Act, 2003 (Act No. 53 of 2003)</li>
            <li className="typo-copy">Construction Industry Development Board Act, 2000 (Act No. 38 of 2000)</li>
            <li className="typo-copy">National Building Regulations and Building Standards Act, 1977 (Act No. 103 of 1977)</li>
            <li className="typo-copy">Protection of Personal Information Act, 2013 (Act No. 4 of 2013)</li>
            <li className="typo-copy">Electronic Communications and Transactions Act, 2002 (Act No. 25 of 2002)</li>
            <li className="typo-copy">Consumer Protection Act, 2008 (Act No. 68 of 2008)</li>
          </ul>

          <h2 className="font-bebas-neue text-2xl uppercase tracking-wide mt-10 mb-4" style={{ color: 'var(--vharanani-burgundy)' }}>5. Categories of Records Held</h2>
          <p className="typo-copy leading-relaxed mb-4" style={{ color: 'var(--vharanani-charcoal-80)' }}>Records held by Vharanani Group may include, but are not limited to:</p>

          <h3 className="font-bebas-neue text-xl uppercase tracking-wide mt-6 mb-3" style={{ color: 'var(--vharanani-charcoal)' }}>5.1 Company Records</h3>
          <ul className="list-disc pl-6 space-y-1 mb-4" style={{ color: 'var(--vharanani-charcoal-80)' }}>
            <li className="typo-copy">Memorandum of Incorporation and related documents</li>
            <li className="typo-copy">Minutes of board meetings and resolutions</li>
            <li className="typo-copy">Share register and records of directors</li>
          </ul>

          <h3 className="font-bebas-neue text-xl uppercase tracking-wide mt-6 mb-3" style={{ color: 'var(--vharanani-charcoal)' }}>5.2 Financial Records</h3>
          <ul className="list-disc pl-6 space-y-1 mb-4" style={{ color: 'var(--vharanani-charcoal-80)' }}>
            <li className="typo-copy">Annual financial statements and audited accounts</li>
            <li className="typo-copy">Tax returns, assessments, and VAT records</li>
            <li className="typo-copy">Banking records and asset registers</li>
          </ul>

          <h3 className="font-bebas-neue text-xl uppercase tracking-wide mt-6 mb-3" style={{ color: 'var(--vharanani-charcoal)' }}>5.3 Employment and Human Resources</h3>
          <ul className="list-disc pl-6 space-y-1 mb-4" style={{ color: 'var(--vharanani-charcoal-80)' }}>
            <li className="typo-copy">Employment contracts and personnel files</li>
            <li className="typo-copy">Payroll records and UIF submissions</li>
            <li className="typo-copy">COIDA records and health and safety documentation</li>
            <li className="typo-copy">Skills development and training records</li>
          </ul>

          <h3 className="font-bebas-neue text-xl uppercase tracking-wide mt-6 mb-3" style={{ color: 'var(--vharanani-charcoal)' }}>5.4 Construction and Project Records</h3>
          <ul className="list-disc pl-6 space-y-1 mb-4" style={{ color: 'var(--vharanani-charcoal-80)' }}>
            <li className="typo-copy">CIDB registration and grading certificates</li>
            <li className="typo-copy">Project contracts, tenders, and specifications</li>
            <li className="typo-copy">ISO 9001 quality management system records</li>
            <li className="typo-copy">B-BBEE certificates and scorecards</li>
          </ul>

          <h3 className="font-bebas-neue text-xl uppercase tracking-wide mt-6 mb-3" style={{ color: 'var(--vharanani-charcoal)' }}>5.5 Client and Supplier Records</h3>
          <ul className="list-disc pl-6 space-y-1 mb-4" style={{ color: 'var(--vharanani-charcoal-80)' }}>
            <li className="typo-copy">Client agreements and correspondence</li>
            <li className="typo-copy">Supplier and subcontractor contracts</li>
            <li className="typo-copy">Procurement documentation</li>
          </ul>

          <h2 className="font-bebas-neue text-2xl uppercase tracking-wide mt-10 mb-4" style={{ color: 'var(--vharanani-burgundy)' }}>6. How to Request Access to Records</h2>
          <p className="typo-copy leading-relaxed mb-4" style={{ color: 'var(--vharanani-charcoal-80)' }}>
            A request for access to records must be made on the prescribed form (Form C) as set out in Annexure B of the PAIA Regulations. The completed form must be submitted to the Information Officer at the address set out in Section 2 above. The requester must provide sufficient detail to enable the Information Officer to identify the record and the requester, indicate which form of access is required, and specify the postal or email address for correspondence.
          </p>

          <h2 className="font-bebas-neue text-2xl uppercase tracking-wide mt-10 mb-4" style={{ color: 'var(--vharanani-burgundy)' }}>7. Prescribed Fees</h2>
          <p className="typo-copy leading-relaxed mb-4" style={{ color: 'var(--vharanani-charcoal-80)' }}>
            A request fee of R50.00 is payable upon submission of a request (except for personal requesters). An access fee may also be payable if the request is granted, calculated in accordance with the fees prescribed in the PAIA Regulations. The Information Officer will notify the requester of any applicable fees before processing the request.
          </p>

          <h2 className="font-bebas-neue text-2xl uppercase tracking-wide mt-10 mb-4" style={{ color: 'var(--vharanani-burgundy)' }}>8. Grounds for Refusal</h2>
          <p className="typo-copy leading-relaxed mb-4" style={{ color: 'var(--vharanani-charcoal-80)' }}>
            Access to records may be refused on the grounds set out in Chapter 4 of PAIA, including but not limited to the protection of personal information of third parties (Section 63), the protection of commercial information (Section 64), the protection of confidential information (Section 65), the protection of safety of individuals (Section 66), legally privileged records (Section 67), and records relating to research information (Section 69).
          </p>

          <h2 className="font-bebas-neue text-2xl uppercase tracking-wide mt-10 mb-4" style={{ color: 'var(--vharanani-burgundy)' }}>9. Processing of Personal Information (POPIA)</h2>
          <p className="typo-copy leading-relaxed mb-4" style={{ color: 'var(--vharanani-charcoal-80)' }}>
            In terms of Section 17 of POPIA, the following additional information is provided:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4" style={{ color: 'var(--vharanani-charcoal-80)' }}>
            <li className="typo-copy"><strong>Purpose of processing:</strong> Personal information is processed for the purposes set out in our Privacy Policy, including the provision of construction, property development, and social impact services.</li>
            <li className="typo-copy"><strong>Categories of data subjects:</strong> Employees, clients, suppliers, subcontractors, bursary recipients, foundation beneficiaries, and website visitors.</li>
            <li className="typo-copy"><strong>Recipients of personal information:</strong> Subsidiaries, professional service providers, regulatory bodies, and government authorities as required by law.</li>
            <li className="typo-copy"><strong>Cross-border transfers:</strong> We do not transfer personal information outside the borders of the Republic of South Africa unless required to do so and in compliance with Section 72 of POPIA.</li>
            <li className="typo-copy"><strong>Security measures:</strong> Appropriate technical and organisational measures are in place to protect personal information, as described in our Privacy Policy.</li>
          </ul>

          <h2 className="font-bebas-neue text-2xl uppercase tracking-wide mt-10 mb-4" style={{ color: 'var(--vharanani-burgundy)' }}>10. Availability of This Manual</h2>
          <p className="typo-copy leading-relaxed mb-4" style={{ color: 'var(--vharanani-charcoal-80)' }}>
            This manual is available for inspection at the offices of Vharanani Group at 18 Hume Road, Dunkeld West, Johannesburg, 2196, on our website, and from the Information Regulator upon request.
          </p>

          <h2 className="font-bebas-neue text-2xl uppercase tracking-wide mt-10 mb-4" style={{ color: 'var(--vharanani-burgundy)' }}>11. Updates to This Manual</h2>
          <p className="typo-copy leading-relaxed mb-8" style={{ color: 'var(--vharanani-charcoal-80)' }}>
            This manual will be updated from time to time as required. The most current version will always be available on our website.
          </p>
        </div>
      </div>

      <div className="h-[4px]" style={{ background: 'var(--vharanani-burgundy)' }} />
    </div>
  );
}
