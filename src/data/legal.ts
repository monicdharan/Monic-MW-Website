export interface LegalPageContent {
  slug: string;
  title: string;
  lastUpdated: string;
  summary: string;
  sections: { heading: string; paragraphs: string[] }[];
}

export const legalPagesData: Record<string, LegalPageContent> = {
  "privacy-policy": {
    slug: "privacy-policy",
    title: "Privacy Policy",
    lastUpdated: "January 2025",
    summary: "How MedZen Writes collects, uses, protects, and handles research datasets, clinical records, and personal contact information.",
    sections: [
      {
        heading: "1. Academic & Medical Data Confidentiality",
        paragraphs: [
          "MedZen Writes (a unit of MedZen Innovations Pvt. Ltd.) treats all academic research synopses, clinical trial datasets, hospital master charts, patient case notes, and draft manuscripts as strictly confidential intellectual property.",
          "We do not claim any copyright, authorship ownership, or patent rights over client research datasets or manuscripts. All rights remain solely with the client and their institutional authors.",
          "All patient records and clinical datasets shared with us must be stripped of direct patient identifiers (names, national identity numbers, exact addresses) prior to transmission, in accordance with applicable medical confidentiality laws."
        ]
      },
      {
        heading: "2. Information We Collect",
        paragraphs: [
          "When you request an academic consultation or submit a contact inquiry, we collect information such as your name, email address, telephone number, medical specialty, institution, and study scope.",
          "We use this information exclusively to communicate regarding your specific academic inquiry, provide milestone estimates, and execute agreed medical writing or biostatistical services."
        ]
      },
      {
        heading: "3. Non-Disclosure & Third-Party Protection",
        paragraphs: [
          "We do not sell, rent, or trade client personal information or research datasets to any external commercial entities, marketing agencies, or public repositories.",
          "We readily sign Non-Disclosure Agreements (NDAs) upon request before reviewing proprietary clinical data or unpublished research synopses."
        ]
      },
      {
        heading: "4. Data Retention & Erasure",
        paragraphs: [
          "Research datasets and draft manuscripts are stored securely on encrypted drives during the active project lifecycle and retained for 90 days following final delivery to accommodate revision requests, after which files can be permanently erased upon written request."
        ]
      },
      {
        heading: "5. Contacting Our Data Protection Officer",
        paragraphs: [
          "If you have questions regarding data privacy or wish to request data erasure, please contact info@medzeninnovations.in with 'Data Privacy Inquiry' in the subject line."
        ]
      }
    ]
  },
  "terms-conditions": {
    slug: "terms-conditions",
    title: "Terms & Conditions",
    lastUpdated: "January 2025",
    summary: "Terms governing academic consulting, medical writing, biostatistical analysis, and intellectual property.",
    sections: [
      {
        heading: "1. Scope of Academic Consultancy",
        paragraphs: [
          "MedZen Writes provides technical medical writing, literature synthesis, biostatistical computation, formatting, and editorial consultation to medical professionals, postgraduates, and researchers.",
          "Our role is strictly editorial and methodological. Clients are responsible for ensuring that all underlying clinical data is genuine, ethically collected with Institutional Ethics Committee (IEC) clearance, and free from clinical fraud."
        ]
      },
      {
        heading: "2. Authorship & Ethical Compliance",
        paragraphs: [
          "We operate strictly within international guidelines established by the International Committee of Medical Journal Editors (ICMJE) and the Committee on Publication Ethics (COPE).",
          "Authorship decisions belong entirely to the client and their institutional collaborators. We provide writing, statistical, and editorial assistance; we do not provide honorary authorships or sell author positions under any circumstances."
        ]
      },
      {
        heading: "3. No Guarantee of Acceptance or Indexing",
        paragraphs: [
          "While we guarantee rigorous methodological formatting and adherence to author instructions, acceptance decisions rest exclusively with journal editors and independent peer-reviewers.",
          "MedZen Writes makes no representation or warranty of guaranteed publication, guaranteed impact factor, or guaranteed indexing."
        ]
      },
      {
        heading: "4. Payment & Milestones",
        paragraphs: [
          "Services are delivered on agreed milestone schedules. Invoices are payable according to the milestone payment terms outlined in the service agreement."
        ]
      }
    ]
  },
  "refund-policy": {
    slug: "refund-policy",
    title: "Refund & Cancellation Policy",
    lastUpdated: "January 2025",
    summary: "Clear guidelines on project milestones, cancellations, revision support, and refund eligibility.",
    sections: [
      {
        heading: "1. Milestone-Based Service Delivery",
        paragraphs: [
          "Because academic writing and biostatistical analysis involve dedicated clinical specialist hours, work is delivered and reviewed in structured milestone stages.",
          "Clients review and approve each milestone draft before the team proceeds to subsequent project phases."
        ]
      },
      {
        heading: "2. Cancellation Terms",
        paragraphs: [
          "If a client cancels an engagement before work has commenced on a milestone, any unallocated advance payments for that milestone will be refunded within 7 to 10 working days.",
          "For work already commenced or completed for a milestone, fees covering the specialist hours invested up to the date of written cancellation notice are non-refundable."
        ]
      },
      {
        heading: "3. Revision Guarantee",
        paragraphs: [
          "If a delivered draft requires revisions to align with the agreed study synopsis or mentor instructions within the original scope, revisions will be performed at no additional charge during the active review window."
        ]
      }
    ]
  },
  "shipping-policy": {
    slug: "shipping-policy",
    title: "Shipping & Digital Delivery Policy",
    lastUpdated: "January 2025",
    summary: "Information regarding the delivery of digital manuscripts, data files, and physical thesis print copies.",
    sections: [
      {
        heading: "1. Digital Deliverables",
        paragraphs: [
          "All primary deliverables—including manuscript documents (.docx), biostatistical output files (.spv / .sav / .r), data tables, high-resolution figures, and similarity reports—are delivered digitally via secure email or direct download links.",
          "Digital delivery occurs immediately upon completion of the respective project milestone."
        ]
      },
      {
        heading: "2. Physical Thesis Hard-Bound Copies (Optional)",
        paragraphs: [
          "For postgraduate residents requesting university-formatted hard-bound or soft-bound thesis book printing, physical copies are dispatched via tracked courier services (BlueDart / DTDC / India Post Speed Post).",
          "Standard physical delivery takes 3 to 5 business days following client sign-off on the final digital print proof. Tracking numbers are shared immediately upon dispatch."
        ]
      }
    ]
  }
};
