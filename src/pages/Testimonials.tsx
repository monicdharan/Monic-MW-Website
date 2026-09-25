import React from 'react';
import { useAdminData } from '../context/AdminDataContext';
import { WhatsAppReviewCard } from '../components/cards/WhatsAppReviewCard';
import { SectionHeading } from '../components/layout/SectionHeading';
import { CtaBanner } from '../components/sections/CtaBanner';

export const Testimonials: React.FC = () => {
  const { testimonials, getHeader, getEyebrow, getHeaderSubtext } = useAdminData();

  const whatsappList = testimonials.filter((t) => t.type === 'whatsapp');

  return (
    <div className="page-testimonials">
      {/* Hero Header */}
      <section className="editorial-hero" aria-label="Testimonials & Reviews">
        <div className="site-container">
          <div style={{ maxWidth: '820px' }}>
            <span className="hero-eyebrow">{getEyebrow('testi-hero-eyebrow', 'Author Feedback & Evidence')}</span>
            <h1 className="hero-title">
              {getHeader('testi-hero-h1', 'Doctor Reviews & Testimonials')}
            </h1>
            <p className="hero-lead">
              {getHeaderSubtext('testi-hero-h1', 'Verified feedback and direct review screenshots from clinicians, postgraduate residents, and researchers who entrusted their manuscripts to MedZen Writes.')}
            </p>
          </div>
        </div>
      </section>

      {/* WhatsApp / Chat Screenshots Section */}
      <section className="editorial-section section-bg-white" aria-labelledby="whatsapp-heading">
        <div className="site-container">
          <SectionHeading
            eyebrow={getEyebrow('testi-whatsapp-eyebrow', 'Author Communication')}
            title={getHeader('testi-whatsapp-h2', 'Direct Client Conversations')}
            subtitle={getHeaderSubtext('testi-whatsapp-h2', 'Unedited message exchanges confirming manuscript submissions, successful revisions, and thesis approvals.')}
          />

          <div className="screenshot-proof-grid">
            {whatsappList.map((rev) => (
              <WhatsAppReviewCard key={rev.id} review={rev} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
};
