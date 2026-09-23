import React from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';
import { servicesData } from '../data/services';
import { targetJournalLogos, publicationsData } from '../data/publications';
import { PublicationCard } from '../components/cards/PublicationCard';
import { googleReviews } from '../data/testimonials';
import { GoogleReviewCard } from '../components/cards/GoogleReviewCard';
import { faqsData } from '../data/faqs';
import { FaqAccordion } from '../components/interactive/FaqAccordion';
import { CtaBanner } from '../components/sections/CtaBanner';

export const Home: React.FC = () => {
  const { openConsultation } = useModal();

  return (
    <div className="page-home">
      {/* ===================================================================
          1. HERO SECTION (Editorial Medical Research & Academic Publication)
          =================================================================== */}
      <section className="editorial-hero-v2" aria-label="Introduction to MedZen Writes">
        <div className="hero-v2-bg-layer" />
        <div className="hero-v2-container">
          <div className="hero-v2-grid">
            {/* Left Content Column */}
            <div className="hero-v2-content">
              {/* Understated Eyebrow Badge */}
              <div className="hero-v2-badge">
                <span>Medical Research &amp; Publication Support</span>
              </div>

              {/* Main Headline */}
              <h1 className="hero-v2-title">
                Turn Complex Medical Research Into Clear, Publication-Ready Work
              </h1>

              {/* Subtitle */}
              <p className="hero-v2-lead">
                Medical writing, biostatistics, and publication support for clinicians, postgraduate doctors, researchers, and medical faculty — delivered with academic integrity and confidentiality.
              </p>

              {/* Action Buttons */}
              <div className="hero-v2-actions">
                <button
                  type="button"
                  className="hero-v2-btn-primary"
                  onClick={() => openConsultation()}
                >
                  <span>Book a Consultation</span>
                  <span className="hero-v2-arrow" aria-hidden="true">→</span>
                </button>

                <Link
                  to="/services"
                  className="hero-v2-btn-secondary"
                >
                  <span>Explore Services</span>
                  <span className="hero-v2-arrow" aria-hidden="true">→</span>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="hero-v2-trust-row" aria-label="Key Commitments">
                <div className="hero-v2-trust-item">
                  <span className="hero-v2-trust-check" aria-hidden="true">✓</span>
                  <span>Academic integrity</span>
                </div>
                <div className="hero-v2-trust-item">
                  <span className="hero-v2-trust-check" aria-hidden="true">✓</span>
                  <span>Research confidentiality</span>
                </div>
                <div className="hero-v2-trust-item">
                  <span className="hero-v2-trust-check" aria-hidden="true">✓</span>
                  <span>Medical-domain expertise</span>
                </div>
              </div>
            </div>

            {/* Right Doctor Portrait Card */}
            <div className="hero-v2-media">
              <div className="hero-v2-image-frame">
                <img
                  src="/assets/images/hero_doctor.jpg"
                  alt="Medical writing and biostatistics specialist at MedZen Writes"
                  className="hero-v2-photo"
                  width="480"
                  height="520"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          2. CORE SERVICES CATALOG (3 Featured Specialties)
          =================================================================== */}
      <section className="editorial-section" style={{ backgroundColor: 'var(--bg-alt)' }} aria-label="Our Medical Writing Services">
        <div className="site-container">
          <div className="section-header text-center">
            <div className="pill-eyebrow-badge">
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>school</span>
              <span>Specialised Research Support</span>
            </div>
            <h2 className="section-header-title">Medical Writing Services Across the Research Journey</h2>
            <p className="section-header-subtitle">
              Whether you are developing a dissertation, preparing a manuscript, analysing clinical data, or responding to reviewer comments, MedZen Writes offers focused support at every stage.
            </p>
          </div>

          <div className="services-grid-cards">
            {[
              servicesData[0], // 01. Original Research Articles
              servicesData[1], // 02. Systematic Reviews & Meta-Analyses
              { ...servicesData[3], number: '03' }, // 03. Thesis & Dissertation Writing
            ].map((s) => (
              <div key={s.id} className="service-card-clean">
                <div className="service-card-top">
                  <span className="service-card-num">{s.number}</span>
                  <Link to={`/services/${s.slug}`} className="service-card-title-link">
                    <h3>{s.title}</h3>
                  </Link>
                </div>
                <p className="service-card-body-text">{s.shortDesc}</p>
                <div className="service-card-action">
                  <Link to={`/services/${s.slug}`} className="editorial-link">
                    <span>Learn more</span>
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '28px' }}>
            <Link to="/services" className="btn btn-outline btn-md">
              <span>View All Specialized Services</span>
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===================================================================
          3. VERIFIED PUBLICATION RECORDS SECTION (Screenshot Replication)
          =================================================================== */}
      <section className="editorial-section section-bg-white" aria-labelledby="home-portfolio-heading">
        <div className="site-container">
          {/* Header */}
          <div style={{ marginBottom: '20px' }}>
            <span className="section-header-eyebrow">DOCUMENT ARCHIVE</span>
            <h2 id="home-portfolio-heading" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 1.9rem)', margin: 0, fontWeight: 700 }}>
              Verified Publication Records
            </h2>
          </div>

          {/* Cards Grid: Top 3 Cards */}
          <div className="publications-archive-grid">
            {publicationsData.slice(0, 3).map((pub) => (
              <PublicationCard key={pub.id} publication={pub} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '28px' }}>
            <Link to="/publications" className="btn btn-outline btn-md">
              <span>View Full Publications Portfolio</span>
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===================================================================
          4. INDEXING FRAMEWORKS & TARGET DATABASES (6 in Row 1, 5 in Row 2)
          =================================================================== */}
      <section className="editorial-section indexing-frameworks-section" aria-label="Target Databases and International Standards">
        <div className="site-container">
          <div className="section-header text-center">
            <div className="pill-eyebrow-badge">
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>verified_user</span>
              <span>INDEXING FRAMEWORKS</span>
            </div>
            <h2 className="section-header-title">
              Target Databases &amp; International Standards
            </h2>
            <p className="section-header-subtitle">
              We prepare manuscripts and structured synopses complying strictly with international bibliographic databases.
            </p>
          </div>

          <div className="indexing-logos-wrapper">
            {/* Line 1: First 6 Logos */}
            <div className="indexing-logos-row indexing-logos-row-1">
              {targetJournalLogos.slice(0, 6).map((item) => (
                <div key={item.name} className="indexing-logo-card" title={item.name}>
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="indexing-logo-img"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* Line 2: Next 5 Logos */}
            <div className="indexing-logos-row indexing-logos-row-2">
              {targetJournalLogos.slice(6, 11).map((item) => (
                <div key={item.name} className="indexing-logo-card" title={item.name}>
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="indexing-logo-img"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          5. VERIFIED GOOGLE REVIEWS
          =================================================================== */}
      <section className="editorial-section section-bg-paper" aria-labelledby="google-reviews-heading">
        <div className="site-container">
          <div className="section-header text-center">
            <div className="pill-eyebrow-badge">
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>star</span>
              <span>Public Ratings</span>
            </div>
            <h2 id="google-reviews-heading" className="section-header-title">
              Verified Google Reviews
            </h2>
            <p className="section-header-subtitle">
              Direct screenshot captures from our public Google Business review profile.
            </p>
          </div>

          <div className="screenshot-proof-grid">
            {googleReviews.map((rev) => (
              <GoogleReviewCard key={rev.id} review={rev} />
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================
          5. FREQUENTLY ASKED QUESTIONS (FAQ)
          =================================================================== */}
      <section id="faq" className="editorial-section section-bg-white" aria-label="Frequently Asked Questions">
        <div className="site-container site-container-narrow">
          <div className="section-header text-center">
            <div className="pill-eyebrow-badge">
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>help</span>
              <span>Frequently Asked Questions</span>
            </div>
            <h2 className="section-header-title">Clear Answers Before You Begin</h2>
            <p className="section-header-subtitle">
              Understand how we approach confidentiality, academic integrity, timelines, revisions, and statistical support before starting your project.
            </p>
          </div>

          <FaqAccordion items={faqsData} />
        </div>
      </section>

      {/* ===================================================================
          6. SCHEDULE CONSULTATION CTA BANNER
          =================================================================== */}
      <CtaBanner
        title="Ready to Move Your Research Forward?"
        subtitle="Book a confidential consultation to discuss your research stage, requirements, and the support that would be most useful to you."
        buttonText="Schedule a Consultation"
      />
    </div>
  );
};
