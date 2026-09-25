import React from 'react';
import { useAdminData } from '../context/AdminDataContext';
import { GoogleReviewCard } from '../components/cards/GoogleReviewCard';
import { WhatsAppReviewCard } from '../components/cards/WhatsAppReviewCard';
import { SectionHeading } from '../components/layout/SectionHeading';
import { CtaBanner } from '../components/sections/CtaBanner';

export const Testimonials: React.FC = () => {
  const { testimonials, getHeader, getEyebrow, getHeaderSubtext } = useAdminData();

  const googleList = testimonials.filter((t) => t.type === 'google');
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

      {/* Google Reviews Screenshots Grid */}
      {googleList.length > 0 && (
        <section className="editorial-section section-bg-white" aria-labelledby="google-reviews-heading">
          <div className="site-container">
            <SectionHeading
              eyebrow={getEyebrow('testi-screens-eyebrow', 'Public Ratings')}
              title={getHeader('testi-screens-h2', 'Google Reviews & Feedback Screenshots')}
              subtitle={getHeaderSubtext('testi-screens-h2', 'Direct screenshot captures from our public Google Business review profile and client feedback.')}
            />

            <div className="screenshot-proof-grid">
              {googleList.map((rev) => (
                <GoogleReviewCard key={rev.id} review={rev} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* WhatsApp / Chat Screenshots Section */}
      {whatsappList.length > 0 && (
        <section className="editorial-section section-bg-paper section-border-top" aria-labelledby="whatsapp-heading">
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
      )}

      <CtaBanner />
    </div>
  );
};
