import React from 'react';
import { useAdminData } from '../context/AdminDataContext';
import { GoogleReviewCard } from '../components/cards/GoogleReviewCard';
import { WhatsAppReviewCard } from '../components/cards/WhatsAppReviewCard';
import { SectionHeading } from '../components/layout/SectionHeading';
import { CtaBanner } from '../components/sections/CtaBanner';

export const Testimonials: React.FC = () => {
  const { testimonials, doctorReviews } = useAdminData();

  const googleList = testimonials.filter((t) => t.type === 'google');
  const whatsappList = testimonials.filter((t) => t.type === 'whatsapp');

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

      {/* Doctor Text Testimonials Section */}
      {doctorReviews.length > 0 && (
        <section className="editorial-section section-bg-white" aria-labelledby="doctor-reviews-heading">
          <div className="site-container">
            <SectionHeading
              eyebrow="Clinical Mentorship"
              title="Doctor Case Testimonials"
              subtitle="Written testimonials from postgraduate residents and faculty members."
            />

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
              {doctorReviews.map((doc) => (
                <div key={doc.id} style={{ background: 'var(--color-paper)', border: '1px solid var(--color-line)', borderRadius: 'var(--radius-md)', padding: '24px', display: 'flex', flexDirection: 'column' }}>
                  <p style={{ fontStyle: 'italic', color: 'var(--color-ink)', lineHeight: '1.6', marginBottom: '20px', flexGrow: 1 }}>
                    "{doc.quote}"
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', borderTop: '1px solid var(--color-line)', paddingTop: '16px' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--mint-light)', color: 'var(--color-teal)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.1rem' }}>
                      {doc.doctorName.replace('Dr. ', '').charAt(0)}
                    </div>
                    <div>
                      <h4 style={{ margin: 0, fontSize: '0.98rem', fontWeight: 700 }}>{doc.doctorName}</h4>
                      <span style={{ fontSize: '0.82rem', color: 'var(--color-ink-soft)' }}>{doc.qualification} • {doc.specialty}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Google Reviews Screenshots Grid */}
      {googleList.length > 0 && (
        <section className="editorial-section section-bg-paper" aria-labelledby="google-reviews-heading">
          <div className="site-container">
            <SectionHeading
              eyebrow="Public Ratings"
              title="Verified Google Reviews"
              subtitle="Direct screenshot captures from our public Google Business review profile."
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
        <section className="editorial-section section-bg-white section-border-top" aria-labelledby="whatsapp-heading">
          <div className="site-container">
            <SectionHeading
              eyebrow="Author Communication"
              title="Direct Client Conversations"
              subtitle="Unedited message exchanges confirming manuscript submissions and thesis approvals."
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
