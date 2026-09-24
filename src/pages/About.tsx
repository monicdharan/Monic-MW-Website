import React from 'react';
import { useModal } from '../context/ModalContext';
import { useAdminData } from '../context/AdminDataContext';
import { SectionHeading } from '../components/layout/SectionHeading';
import { Button } from '../components/buttons/Button';
import { CtaBanner } from '../components/sections/CtaBanner';
import { companyData } from '../data/company';

export const About: React.FC = () => {
  const { openConsultation } = useModal();
  const { getHeader, getEyebrow, getHeaderSubtext } = useAdminData();

  return (
    <div className="page-about">
      {/* Hero Header */}
      <section className="editorial-hero" aria-label="About MedZen Writes">
        <div className="site-container">
          <div style={{ maxWidth: '780px' }}>
            <span className="hero-eyebrow">{getEyebrow('about-hero-eyebrow', 'About MedZen Writes')}</span>
            <h1 className="hero-title" style={{ maxWidth: '740px' }}>
              {getHeader('about-hero-h1', 'Academic Support for Research With Clinical Purpose')}
            </h1>
            <p className="hero-lead" style={{ maxWidth: '680px' }}>
              {getHeaderSubtext('about-hero-h1', 'MedZen Writes is the academic medical consultancy division of MedZen Innovations Pvt. Ltd. We support clinicians, postgraduates, and researchers in presenting their work with clarity, methodological discipline, and respect for publication ethics.')}
            </p>
          </div>
        </div>
      </section>

      {/* Origin & Purpose Section */}
      <section className="editorial-section section-bg-white" aria-labelledby="origin-heading">
        <div className="site-container">
          <div className="hero-grid" style={{ alignItems: 'flex-start', gap: 'clamp(24px, 4vw, 48px)' }}>
            <div style={{ maxWidth: '620px' }}>
              <span className="section-header-eyebrow">{getEyebrow('about-purpose-eyebrow', 'Our Purpose')}</span>
              <h2 id="origin-heading" style={{ marginBottom: '14px' }}>
                {getHeader('about-purpose-h2', 'Good Clinical Research Should Not Remain Unseen')}
              </h2>
              <p style={{ marginBottom: '14px', lineHeight: '1.65' }}>
                Doctors and researchers often work under intense professional demands. Clinical responsibilities, hospital schedules, academic deadlines, and patient care can leave little time for the detailed work required to structure a thesis, interpret data, prepare a manuscript, or respond to publication requirements.
              </p>
              <p style={{ marginBottom: '14px', lineHeight: '1.65' }}>
                As a result, valuable research can remain incomplete, unpublished, or difficult to communicate clearly.
              </p>
              <p style={{ marginBottom: '14px', lineHeight: '1.65' }}>
                MedZen Writes exists to provide dependable academic support around that challenge. We help researchers organise their work, strengthen its presentation, and navigate the practical demands of medical writing and publication preparation.
              </p>
              <p style={{ margin: 0, lineHeight: '1.65' }}>
                Our role is not to replace the researcher’s contribution. It is to support the process with structure, clarity, and responsible academic guidance.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
              <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--color-line)', width: '100%', height: '240px' }}>
                <img
                  src="/assets/images/doctor-stethoscope-research.jpg"
                  alt="Medical research review session"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  width="500"
                  height="240"
                  loading="lazy"
                />
              </div>

              <div style={{ background: 'var(--color-sand)', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid #e0dad0', width: '100%' }}>
                <h4 style={{ fontSize: '1rem', color: 'var(--color-ink)', marginBottom: '6px' }}>
                  {getHeader('about-integrity-h4', 'Built on Academic Integrity')}
                </h4>
                <p style={{ fontSize: '0.86rem', color: 'var(--color-ink-soft)', lineHeight: '1.5', margin: 0 }}>
                  We believe credible research support must be transparent, ethical, and respectful of authorship. Our work is guided by recognised publication principles, including ICMJE and COPE standards. We do not fabricate data, misrepresent findings, provide ghost authorship, or promise publication outcomes. Editorial and peer-review decisions remain independent.
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
            eyebrow={getEyebrow('about-principles-eyebrow', 'How We Work')}
            title={getHeader('about-principles-h2', 'A Clear, Responsible Approach to Every Project')}
            subtitle={getHeaderSubtext('about-principles-h2', 'Clear principles that guide our interactions with authors, mentors, and academic institutions.')}
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
            <div style={{ background: 'var(--color-white)', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-line)', display: 'flex', flexDirection: 'column' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '28px', color: 'var(--color-teal)', marginBottom: '10px' }}>
                biotech
              </span>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '6px' }}>
                {getHeader('about-principle1-h3', 'Medical Accuracy')}
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-ink-soft)', lineHeight: '1.5', margin: 0 }}>
                Medical writing demands precision. We focus on clear terminology, sound interpretation, and a presentation that remains faithful to the clinical and scientific context of the work.
              </p>
            </div>

            <div style={{ background: 'var(--color-white)', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-line)', display: 'flex', flexDirection: 'column' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '28px', color: 'var(--color-teal)', marginBottom: '10px' }}>
                lock
              </span>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '6px' }}>
                {getHeader('about-principle2-h3', 'Confidentiality')}
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-ink-soft)', lineHeight: '1.5', margin: 0 }}>
                Research data, patient-related documentation, study materials, and drafts are handled with care. Confidentiality and responsible data handling are central to every engagement.
              </p>
            </div>

            <div style={{ background: 'var(--color-white)', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-line)', display: 'flex', flexDirection: 'column' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '28px', color: 'var(--color-teal)', marginBottom: '10px' }}>
                analytics
              </span>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '6px' }}>
                {getHeader('about-principle3-h3', 'Statistical Rigour')}
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-ink-soft)', lineHeight: '1.5', margin: 0 }}>
                We communicate clearly about scope, timelines, revision support, and the realities of academic publishing. We do not make promises that cannot be ethically guaranteed.
              </p>
            </div>

            <div style={{ background: 'var(--color-white)', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-line)', display: 'flex', flexDirection: 'column' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '28px', color: 'var(--color-teal)', marginBottom: '10px' }}>
                verified
              </span>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '6px' }}>
                {getHeader('about-principle4-h3', 'Ethical Publication Guidance')}
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-ink-soft)', lineHeight: '1.5', margin: 0 }}>
                Adherence to ICMJE guidelines, COPE standards, and transparent authorship frameworks across every manuscript.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Will and Will Not Promise */}
      <section className="editorial-section section-bg-white section-border-top" aria-labelledby="promises-heading">
        <div className="site-container">
          <SectionHeading
            eyebrow="Our Standards"
            title="What You Can Expect From Us"
            subtitle="Clear boundaries that protect both the author's academic integrity and the consultancy's reputation."
          />

          <div className="problem-solution-grid">
            <div className="solution-box" style={{ background: 'var(--color-paper)', border: '1px solid var(--color-line)', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ color: 'var(--color-teal-dark)', fontSize: '1.2rem', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="material-symbols-outlined" style={{ color: 'var(--color-teal)' }}>check_circle</span>
                What You Can Expect From Us
              </h3>
              <ul className="editorial-point-list" style={{ marginTop: 0 }}>
                <li className="editorial-point-item">
                  <span className="material-symbols-outlined point-icon-check">check</span>
                  <span>Structured support for medical theses, manuscripts, reviews, protocols, and statistical reporting.</span>
                </li>
                <li className="editorial-point-item">
                  <span className="material-symbols-outlined point-icon-check">check</span>
                  <span>Clear, academically appropriate writing aligned with the needs of the research project.</span>
                </li>
                <li className="editorial-point-item">
                  <span className="material-symbols-outlined point-icon-check">check</span>
                  <span>Careful attention to recognised reporting frameworks and journal or institutional requirements.</span>
                </li>
                <li className="editorial-point-item">
                  <span className="material-symbols-outlined point-icon-check">check</span>
                  <span>Transparent communication throughout the project.</span>
                </li>
                <li className="editorial-point-item">
                  <span className="material-symbols-outlined point-icon-check">check</span>
                  <span>Revision support based on academic, mentor, or reviewer feedback where agreed.</span>
                </li>
              </ul>
            </div>

            <div className="problem-box" style={{ background: '#fdf7f2', border: '1px solid #f2dfd1', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ color: '#9a3412', fontSize: '1.2rem', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="material-symbols-outlined" style={{ color: '#c25e00' }}>cancel</span>
                What We Will Never Compromise
              </h3>
              <ul className="editorial-point-list" style={{ marginTop: 0 }}>
                <li className="editorial-point-item">
                  <span className="material-symbols-outlined point-icon-warn">close</span>
                  <span>We will not fabricate, manipulate, or alter research data.</span>
                </li>
                <li className="editorial-point-item">
                  <span className="material-symbols-outlined point-icon-warn">close</span>
                  <span>We will not guarantee publication, indexing, or editorial acceptance.</span>
                </li>
                <li className="editorial-point-item">
                  <span className="material-symbols-outlined point-icon-warn">close</span>
                  <span>We will not sell authorship positions or misrepresent contribution.</span>
                </li>
                <li className="editorial-point-item">
                  <span className="material-symbols-outlined point-icon-warn">close</span>
                  <span>We will not support work that compromises academic or clinical integrity.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Registration Details */}
      <section className="editorial-section section-bg-paper section-border-top">
        <div className="site-container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <h5 style={{ fontSize: '1.25rem', marginBottom: '10px', color: 'var(--color-ink)' }}>
            {getHeader('about-governance-h5', 'Corporate & Academic Entity')}
          </h5>
          <p style={{ fontSize: '0.92rem', color: 'var(--color-ink-soft)', lineHeight: '1.55', marginBottom: '18px', marginLeft: 'auto', marginRight: 'auto' }}>
            {companyData.name} operates as a specialized division of {companyData.parentCompany}, registered in Chennai, Tamil Nadu, India.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <Button variant="primary" onClick={() => openConsultation()}>
              Schedule an Academic Consultation
            </Button>
            <Button variant="secondary" to="/contact">
              Contact Our Office
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <CtaBanner
        title="Discuss Your Research With Our Team"
        subtitle="Tell us where you are in your research journey, and we will help you understand the next practical step."
        buttonText="Schedule an Academic Consultation"
      />
    </div>
  );
};
