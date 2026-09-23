import React from 'react';
import { useAdminData } from '../context/AdminDataContext';
import { companyData } from '../data/company';
import { ConsultationForm } from '../components/forms/ConsultationForm';

export const Contact: React.FC = () => {
  const { visualContent } = useAdminData();
  const currentPhone = visualContent.phone || companyData.phoneDisplay;
  const currentEmail = visualContent.email || companyData.email;
  return (
    <div className="page-contact">
      {/* Hero Header */}
      <section className="editorial-hero" aria-label="Contact MedZen Writes">
        <div className="site-container">
          <div style={{ maxWidth: '820px' }}>
            <span className="hero-eyebrow">Academic Consultation &amp; Inquiry</span>
            <h1 className="hero-title">Contact Our Academic Editorial Team</h1>
            <p className="hero-lead">
              Have a thesis, systematic review, or clinical dataset you would like to discuss? Share your study parameters below or reach out directly to our consultation desk.
            </p>
          </div>
        </div>
      </section>

      {/* Main 2-Column Content */}
      <section className="editorial-section section-bg-white" aria-labelledby="contact-heading">
        <div className="site-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 'clamp(20px, 3.5vw, 36px)', alignItems: 'flex-start' }}>
            {/* Left: Consultation Form */}
            <div>
              <span className="section-header-eyebrow">Consultation Request</span>
              <h2 id="contact-heading" style={{ fontSize: '1.65rem', marginBottom: '6px' }}>
                Tell Us About Your Research
              </h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-soft)', marginBottom: '16px' }}>
                Complete the inquiry form below. An academic coordinator will review your study requirements and reply within 12 business hours.
              </p>

              <div style={{ background: 'var(--color-paper)', padding: 'clamp(18px, 2.5vw, 24px)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-line)' }}>
                <ConsultationForm />
              </div>
            </div>

            {/* Right: Direct Information & Office Details */}
            <div>
              <div style={{ background: 'var(--color-sand)', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid #e0dad0', marginBottom: '16px' }}>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--color-ink)', marginBottom: '12px' }}>
                  Direct Contact Channels
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div>
                    <span style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-teal)', letterSpacing: '0.05em' }}>
                      Email Inquiries
                    </span>
                    <p style={{ margin: '2px 0 0', fontWeight: 600 }}>
                      <a href={`mailto:${currentEmail}`} style={{ color: 'var(--color-ink)', fontSize: '0.96rem' }}>
                        {currentEmail}
                      </a>
                    </p>
                    <span style={{ fontSize: '0.78rem', color: 'var(--color-muted)' }}>Response time: within 12 hours</span>
                  </div>

                  <div>
                    <span style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-teal)', letterSpacing: '0.05em' }}>
                      Telephone &amp; WhatsApp
                    </span>
                    <p style={{ margin: '2px 0 0', fontWeight: 600 }}>
                      <a href={`tel:${currentPhone.replace(/[^0-9+]/g, '')}`} style={{ color: 'var(--color-ink)', fontSize: '0.96rem' }}>
                        {currentPhone}
                      </a>
                    </p>
                    <span style={{ fontSize: '0.78rem', color: 'var(--color-muted)' }}>Direct line for academic coordinators</span>
                  </div>

                  <div>
                    <span style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-teal)', letterSpacing: '0.05em' }}>
                      Operating Hours
                    </span>
                    <p style={{ margin: '2px 0 0', fontSize: '0.88rem', color: 'var(--color-ink)' }}>
                      {companyData.workingHours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Office Location */}
              <div style={{ background: 'var(--color-white)', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-line)' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '24px', color: 'var(--color-teal)', marginBottom: '6px' }}>
                  location_on
                </span>
                <h4 style={{ fontSize: '1.05rem', marginBottom: '6px' }}>Consultation Office</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-ink-soft)', lineHeight: '1.5', margin: '0 0 8px' }}>
                  {companyData.name} ({companyData.division})<br />
                  {companyData.address.line1}, {companyData.address.locality}<br />
                  {companyData.address.city}, {companyData.address.state} – {companyData.address.pincode}<br />
                  {companyData.address.country}
                </p>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-muted)' }}>
                  In-person consultations available by prior appointment.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
