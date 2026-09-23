import React from 'react';
import { servicesData } from '../data/services';
import { ServiceListItem } from '../components/cards/ServiceListItem';
import { SectionHeading } from '../components/layout/SectionHeading';
import { CtaBanner } from '../components/sections/CtaBanner';

export const Services: React.FC = () => {
  return (
    <div className="page-services">
      {/* Hero Header */}
      <section className="editorial-hero" aria-label="Services Overview">
        <div className="site-container">
          <div style={{ maxWidth: '820px' }}>
            <span className="hero-eyebrow">Academic &amp; Clinical Services</span>
            <h1 className="hero-title">
              Nine specialized academic services for medical researchers.
            </h1>
            <p className="hero-lead">
              From postgraduate thesis structuring and clinical biostatistics to systematic review synthesis and manuscript conversion, we provide end-to-end academic editorial support.
            </p>
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="editorial-section section-bg-white" aria-labelledby="all-services-heading">
        <div className="site-container">
          <SectionHeading
            eyebrow="Specialty Directory"
            title="Comprehensive Medical Writing Solutions"
            subtitle="Click any service below to review full scope, deliverables, client prerequisites, and working methodology."
          />

          <div className="services-grid-cards services-square-grid">
            {servicesData.map((service) => (
              <ServiceListItem key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Quality Guarantees Strip */}
      <section className="editorial-section section-bg-paper section-border-top">
        <div className="site-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
            <div style={{ padding: '16px 18px', background: 'var(--color-white)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-line)' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '24px', color: 'var(--color-teal)', marginBottom: '8px' }}>
                menu_book
              </span>
              <h4 style={{ fontSize: '0.98rem', marginBottom: '4px' }}>Target Journal Compliance</h4>
              <p style={{ fontSize: '0.86rem', color: 'var(--color-ink-soft)', lineHeight: '1.45', margin: 0 }}>
                Every manuscript is formatted strictly according to author guidelines and word counts.
              </p>
            </div>

            <div style={{ padding: '16px 18px', background: 'var(--color-white)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-line)' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '24px', color: 'var(--color-teal)', marginBottom: '8px' }}>
                bar_chart
              </span>
              <h4 style={{ fontSize: '0.98rem', marginBottom: '4px' }}>Verified Biostatistics</h4>
              <p style={{ fontSize: '0.86rem', color: 'var(--color-ink-soft)', lineHeight: '1.45', margin: 0 }}>
                Computations in SPSS/R with reproducible outputs, exact p-values, and publication tables.
              </p>
            </div>

            <div style={{ padding: '16px 18px', background: 'var(--color-white)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-line)' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '24px', color: 'var(--color-teal)', marginBottom: '8px' }}>
                edit_note
              </span>
              <h4 style={{ fontSize: '0.98rem', marginBottom: '4px' }}>Revision Support</h4>
              <p style={{ fontSize: '0.86rem', color: 'var(--color-ink-soft)', lineHeight: '1.45', margin: 0 }}>
                Post-delivery revisions to address guide, mentor, or journal peer-review feedback.
              </p>
            </div>

            <div style={{ padding: '16px 18px', background: 'var(--color-white)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-line)' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '24px', color: 'var(--color-teal)', marginBottom: '8px' }}>
                lock
              </span>
              <h4 style={{ fontSize: '0.98rem', marginBottom: '4px' }}>Strict Confidentiality</h4>
              <p style={{ fontSize: '0.86rem', color: 'var(--color-ink-soft)', lineHeight: '1.45', margin: 0 }}>
                Enforceable Non-Disclosure Agreements (NDAs) to protect unpublished research findings.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
};
