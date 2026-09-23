import React from 'react';
import { googleReviews, whatsappReviews } from '../data/testimonials';
import { GoogleReviewCard } from '../components/cards/GoogleReviewCard';
import { WhatsAppReviewCard } from '../components/cards/WhatsAppReviewCard';
import { SectionHeading } from '../components/layout/SectionHeading';
import { CtaBanner } from '../components/sections/CtaBanner';

export const Testimonials: React.FC = () => {
  return (
    <div className="page-testimonials">
      {/* Hero Header */}
      <section className="editorial-hero" aria-label="Testimonials & Reviews">
        <div className="site-container">
          <div style={{ maxWidth: '820px' }}>
            <span className="hero-eyebrow">Author Feedback &amp; Evidence</span>
            <h1 className="hero-title">Doctor Reviews &amp; Testimonials</h1>
            <p className="hero-lead">
              Verified feedback from postgraduate medical residents, super-specialty fellows, and clinical faculty who have partnered with MedZen Writes for thesis structuring, biostatistics, and manuscript publication.
            </p>
          </div>
        </div>
      </section>

      {/* Google Reviews Screenshots Grid */}
      <section className="editorial-section section-bg-paper" aria-labelledby="google-reviews-heading">
        <div className="site-container">
          <SectionHeading
            eyebrow="Public Ratings"
            title="Verified Google Reviews"
            subtitle="Direct screenshot captures from our public Google Business review profile."
          />

          <div className="screenshot-proof-grid">
            {googleReviews.map((rev) => (
              <GoogleReviewCard key={rev.id} review={rev} />
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Feedback Section */}
      <section className="editorial-section section-bg-white section-border-top" aria-labelledby="whatsapp-heading">
        <div className="site-container">
          <SectionHeading
            eyebrow="Author Communication"
            title="Direct Client Conversations"
            subtitle="Unedited message exchanges confirming manuscript submissions and thesis approvals."
          />

          <div className="screenshot-proof-grid">
            {whatsappReviews.map((rev) => (
              <WhatsAppReviewCard key={rev.id} review={rev} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
};
