import React from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';
import { servicesData } from '../data/services';
import { publicationsData, targetJournalLogos } from '../data/publications';
import { doctorTestimonials } from '../data/testimonials';
import { faqsData } from '../data/faqs';
import { TrustStrip } from '../components/sections/TrustStrip';
import { ProblemSolution } from '../components/sections/ProblemSolution';
import { ProcessTimeline } from '../components/sections/ProcessTimeline';
import { CtaBanner } from '../components/sections/CtaBanner';
import { ServiceListItem } from '../components/cards/ServiceListItem';
import { PublicationCard } from '../components/cards/PublicationCard';
import { TestimonialQuote } from '../components/cards/TestimonialQuote';
import { FaqAccordion } from '../components/interactive/FaqAccordion';
import { SectionHeading } from '../components/layout/SectionHeading';
import { Button } from '../components/buttons/Button';

export const Home: React.FC = () => {
  const { openConsultation } = useModal();

  return (
    <div className="page-home">
      {/* 1. Hero Section (Calm, Editorial 2-Column) */}
      <section className="editorial-hero" aria-label="Introduction to MedZen Writes">
        <div className="site-container">
          <div className="hero-grid">
            <div>
              <span className="hero-eyebrow">Medical Research Support for Clinicians &amp; Residents</span>
              <h1 className="hero-title">
                Move your research from draft to submission with confidence.
              </h1>
              <p className="hero-lead">
                Specialized academic medical writing, biostatistical analysis, and manuscript preparation tailored to postgraduate medical residents, clinical faculty, and biomedical researchers.
              </p>

              <div className="hero-actions">
                <Button variant="white" size="lg" onClick={() => openConsultation()}>
                  Book a consultation
                </Button>
                <Link to="/services" className="editorial-link" style={{ color: 'var(--color-white)' }}>
                  <span>Explore 9 Specialties</span>
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </div>

              <div className="hero-proof-strip">
                <span className="hero-proof-item">
                  <span className="material-symbols-outlined" style={{ fontSize: '18px', color: 'var(--color-mint)' }}>check</span>
                  <span>Thesis Support</span>
                </span>
                <span>·</span>
                <span className="hero-proof-item">
                  <span className="material-symbols-outlined" style={{ fontSize: '18px', color: 'var(--color-mint)' }}>check</span>
                  <span>Manuscript Preparation</span>
                </span>
                <span>·</span>
                <span className="hero-proof-item">
                  <span className="material-symbols-outlined" style={{ fontSize: '18px', color: 'var(--color-mint)' }}>check</span>
                  <span>Biostatistics</span>
                </span>
              </div>
            </div>

            <div className="hero-image-wrap">
              <img
                src="/assets/images/hero_doctor.jpg"
                alt="Doctor reviewing clinical data on laptop in hospital research library"
                className="hero-image"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Compact Trust Strip */}
      <TrustStrip />

      {/* 3. Problem and Solution Section */}
      <ProblemSolution />

      {/* 4. Services Section (Numbered Editorial List) */}
      <section className="editorial-section section-bg-paper" aria-labelledby="services-heading">
        <div className="site-container">
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '36px' }}>
            <div>
              <span className="section-header-eyebrow">Academic Scope</span>
              <h2 id="services-heading" style={{ fontSize: '2.2rem', margin: '4px 0 0' }}>
                Specialized Medical Writing Services
              </h2>
            </div>
            <Link to="/services" className="editorial-link">
              <span>View detailed specifications</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>

          <div className="services-editorial-list">
            {servicesData.map((service) => (
              <ServiceListItem key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Four-Step Process Timeline */}
      <ProcessTimeline />

      {/* 6. Publication Proof & Journal Targets */}
      <section className="editorial-section section-bg-white section-border-top" aria-labelledby="publications-heading">
        <div className="site-container">
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '36px' }}>
            <div>
              <span className="section-header-eyebrow">Evidence &amp; Portfolio</span>
              <h2 id="publications-heading" style={{ fontSize: '2.2rem', margin: '4px 0 0' }}>
                Recent Publication Documents
              </h2>
              <p style={{ fontSize: '0.96rem', color: 'var(--color-ink-soft)', marginTop: '6px' }}>
                Representative published manuscripts and clinical case studies supported by our team.
              </p>
            </div>
            <Link to="/publications" className="editorial-link">
              <span>View complete portfolio</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>

          <div className="publications-archive-grid">
            {publicationsData.slice(0, 3).map((pub) => (
              <PublicationCard key={pub.id} publication={pub} />
            ))}
          </div>

          {/* Target Journal Indexing Showcase */}
          <div style={{ marginTop: '56px', paddingTop: '36px', borderTop: '1px solid var(--color-line)' }}>
            <p style={{ fontSize: '0.84rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-muted)', textAlign: 'center', marginBottom: '20px' }}>
              We format and prepare manuscripts adhering to international database guidelines
            </p>
            <div className="journal-logos-ribbon">
              {targetJournalLogos.map((j) => (
                <img
                  key={j.name}
                  src={j.logo}
                  alt={j.name}
                  title={j.name}
                  className="journal-logo-item"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Verified Doctor Testimonials */}
      <section className="editorial-section section-bg-paper section-border-top" aria-labelledby="testimonials-heading">
        <div className="site-container">
          <SectionHeading
            eyebrow="Clinician Feedback"
            title="What Doctors Say About Working With Us"
            subtitle="Authentic feedback from postgraduates, clinical fellows, and department faculty."
          />

          <div className="testimonials-featured-grid">
            <TestimonialQuote testimonial={doctorTestimonials[0]} featured={true} />

            <div className="testimonial-side-column">
              {doctorTestimonials.slice(1, 3).map((t) => (
                <TestimonialQuote key={t.id} testimonial={t} />
              ))}
            </div>
          </div>

          <div style={{ marginTop: '28px', textAlign: 'center' }}>
            <Link to="/testimonials" className="editorial-link">
              <span>View all verified Google reviews &amp; feedback</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Accessible FAQ Accordion */}
      <section className="editorial-section section-bg-white section-border-top" aria-labelledby="faq-heading">
        <div className="site-container" style={{ maxWidth: '840px' }}>
          <SectionHeading
            eyebrow="Clarity on Process &amp; Ethics"
            title="Frequently Asked Questions"
            subtitle="Straightforward answers regarding our services, data handling, and working methodology."
            centered={true}
          />

          <FaqAccordion items={faqsData.slice(0, 5)} />

          <div style={{ marginTop: '32px', textAlign: 'center' }}>
            <p style={{ fontSize: '0.94rem', color: 'var(--color-ink-soft)', marginBottom: '14px' }}>
              Have a specific question about your study dataset or protocol?
            </p>
            <Button variant="secondary" size="sm" onClick={() => openConsultation()}>
              Speak with an academic coordinator
            </Button>
          </div>
        </div>
      </section>

      {/* 9. Final Consultation CTA Banner */}
      <CtaBanner />
    </div>
  );
};
