import React from 'react';
import { useModal } from '../context/ModalContext';
import { SectionHeading } from '../components/layout/SectionHeading';
import { Button } from '../components/buttons/Button';
import { CtaBanner } from '../components/sections/CtaBanner';
import { companyData } from '../data/company';

export const About: React.FC = () => {
  const { openConsultation } = useModal();

  return (
    <div className="page-about">
      {/* Hero Header */}
      <section className="editorial-hero" aria-label="About MedZen Writes">
        <div className="site-container">
          <div style={{ maxWidth: '820px' }}>
            <span className="hero-eyebrow">About MedZen Writes</span>
            <h1 className="hero-title">
              Bridging the gap between clinical excellence and publication standards.
            </h1>
            <p className="hero-lead">
              Founded as an academic medical consultancy division of MedZen Innovations Pvt. Ltd., MedZen Writes provides structured methodological and editorial support for clinicians, postgraduates, and researchers across India and internationally.
            </p>
          </div>
        </div>
      </section>

      {/* Origin & Purpose Section */}
      <section className="editorial-section section-bg-white" aria-labelledby="origin-heading">
        <div className="site-container">
          <div className="hero-grid" style={{ alignItems: 'flex-start' }}>
            <div>
              <span className="section-header-eyebrow">Our Foundation</span>
              <h2 id="origin-heading" style={{ marginBottom: '18px' }}>
                Why MedZen Writes Exists
              </h2>
              <p style={{ marginBottom: '16px' }}>
                Postgraduate residency and hospital practice place immense cognitive and physical demands on doctors. Between long emergency duties, patient care rounds, and surgical procedures, finding uninterrupted weeks to conduct comprehensive literature searches, perform advanced statistical modeling in SPSS, and format manuscripts to strict journal specifications is a formidable barrier.
              </p>
              <p style={{ marginBottom: '16px' }}>
                Consequently, hundreds of well-executed observational studies and postgraduate theses end up shelved indefinitely in hospital libraries without ever reaching peer-reviewed indexed databases.
              </p>
              <p>
                MedZen Writes was established to provide a methodical, ethical academic partnership. We take on the heavy structural, biostatistical, and formatting workloads so that clinical findings are communicated clearly, accurately, and without unnecessary delay.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--color-line)' }}>
                <img
                  src="/assets/images/doctor-stethoscope-research.jpg"
                  alt="Medical research review session"
                  style={{ width: '100%', height: '260px', objectFit: 'cover' }}
                />
              </div>

              <div style={{ background: 'var(--color-sand)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid #e0dad0' }}>
                <h4 style={{ fontSize: '1.05rem', color: 'var(--color-ink)', marginBottom: '8px' }}>
                  Our Ethical Foundation
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-ink-soft)', lineHeight: '1.55', margin: 0 }}>
                  We operate strictly in alignment with the International Committee of Medical Journal Editors (ICMJE) and Committee on Publication Ethics (COPE). We do not provide ghost authorships or fabricate clinical data under any circumstances.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles Section */}
      <section className="editorial-section section-bg-paper section-border-top" aria-labelledby="principles-heading">
        <div className="site-container">
          <SectionHeading
            eyebrow="Our Commitments"
            title="How We Maintain Quality &amp; Transparency"
            subtitle="Clear principles that guide our interactions with authors, mentors, and academic institutions."
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
            <div style={{ background: 'var(--color-white)', padding: '32px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-line)' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '32px', color: 'var(--color-teal)', marginBottom: '14px' }}>
                biotech
              </span>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>Medical Accuracy</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--color-ink-soft)', lineHeight: '1.6', margin: 0 }}>
                All writing is reviewed by experienced medical editors with advanced biomedical backgrounds. We ensure clinical terminologies, anatomical definitions, and diagnostic criteria are technically precise.
              </p>
            </div>

            <div style={{ background: 'var(--color-white)', padding: '32px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-line)' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '32px', color: 'var(--color-teal)', marginBottom: '14px' }}>
                lock
              </span>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>Complete Confidentiality</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--color-ink-soft)', lineHeight: '1.6', margin: 0 }}>
                Your clinical datasets, patient case proformas, and draft manuscripts are treated with strict confidentiality under enforceable Non-Disclosure Agreements (NDAs). De-identification is verified before processing.
              </p>
            </div>

            <div style={{ background: 'var(--color-white)', padding: '32px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-line)' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '32px', color: 'var(--color-teal)', marginBottom: '14px' }}>
                verified
              </span>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>Honest Expectations</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--color-ink-soft)', lineHeight: '1.6', margin: 0 }}>
                We promise methodological rigor, prompt milestone delivery, and comprehensive revision support. We never promise guaranteed journal acceptance, as editorial decisions rest solely with independent peer reviewers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Will and Will Not Promise */}
      <section className="editorial-section section-bg-white section-border-top" aria-labelledby="promises-heading">
        <div className="site-container">
          <SectionHeading
            eyebrow="Academic Standards"
            title="What We Do &amp; Do Not Promise"
            subtitle="Clear boundaries that protect both the author's academic integrity and the consultancy's reputation."
          />

          <div className="problem-solution-grid">
            <div className="solution-box" style={{ background: 'var(--color-paper)', border: '1px solid var(--color-line)' }}>
              <h3 style={{ color: 'var(--color-teal-dark)', fontSize: '1.3rem', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="material-symbols-outlined" style={{ color: 'var(--color-teal)' }}>check_circle</span>
                What We Guarantee
              </h3>
              <ul className="editorial-point-list">
                <li className="editorial-point-item">
                  <span className="material-symbols-outlined point-icon-check">check</span>
                  <span>100% human-crafted medical drafting adhering to STROBE, PRISMA, CARE, and ICMJE guidelines.</span>
                </li>
                <li className="editorial-point-item">
                  <span className="material-symbols-outlined point-icon-check">check</span>
                  <span>Accurate statistical computations with reproducible SPSS/R outputs and formatted data tables.</span>
                </li>
                <li className="editorial-point-item">
                  <span className="material-symbols-outlined point-icon-check">check</span>
                  <span>Turnitin similarity reports verifying authentic academic prose.</span>
                </li>
                <li className="editorial-point-item">
                  <span className="material-symbols-outlined point-icon-check">check</span>
                  <span>Responsive post-delivery revisions based on mentor, guide, or reviewer feedback.</span>
                </li>
              </ul>
            </div>

            <div className="problem-box" style={{ background: '#fdf7f2', border: '1px solid #f2dfd1' }}>
              <h3 style={{ color: '#9a3412', fontSize: '1.3rem', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="material-symbols-outlined" style={{ color: '#c25e00' }}>cancel</span>
                What We Will Never Promise
              </h3>
              <ul className="editorial-point-list">
                <li className="editorial-point-item">
                  <span className="material-symbols-outlined point-icon-warn">close</span>
                  <span>We do not guarantee publication in specific journals or indexings, as peer review is independent.</span>
                </li>
                <li className="editorial-point-item">
                  <span className="material-symbols-outlined point-icon-warn">close</span>
                  <span>We will not fabricate, falsify, or alter raw clinical data points to achieve statistical significance.</span>
                </li>
                <li className="editorial-point-item">
                  <span className="material-symbols-outlined point-icon-warn">close</span>
                  <span>We do not sell author positions or provide surrogate examination submissions.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Registration Details */}
      <section className="editorial-section section-bg-paper section-border-top">
        <div className="site-container" style={{ maxWidth: '840px', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.35rem', marginBottom: '12px' }}>Corporate &amp; Academic Entity</h3>
          <p style={{ fontSize: '0.94rem', color: 'var(--color-ink-soft)', lineHeight: '1.6', marginBottom: '24px' }}>
            {companyData.name} operates as a specialized division of {companyData.parentCompany}, registered in Chennai, Tamil Nadu, India.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Button variant="primary" onClick={() => openConsultation()}>
              Schedule an Academic Consultation
            </Button>
            <Button variant="secondary" to="/contact">
              Contact Our Office
            </Button>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
};
