import React from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';
import { servicesData } from '../data/services';
import { targetJournalLogos } from '../data/publications';
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
          1. HERO SECTION
          =================================================================== */}
      <section className="screenshot-hero" aria-label="Introduction to MedZen Writes">
        <div className="hero-bg-overlay" />
        <div className="site-container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-grid">
            {/* Left Content Column */}
            <div>
              {/* Eyebrow Pill */}
              <div className="hero-pill-badge">
                <span className="material-symbols-outlined" style={{ fontSize: '18px', color: 'var(--mint-primary)' }}>
                  verified_user
                </span>
                <span>Medical Research &amp; Academic Writing Support</span>
              </div>

              {/* Main Headline */}
              <h1 className="hero-main-title">
                Turn Clinical Research Into Clear, Publication-Ready Work
              </h1>

              {/* Subtitle */}
              <p className="hero-main-lead">
                MedZen Writes supports clinicians, postgraduate students, and researchers with structured medical writing, biostatistics, and publication preparation. We help bring clarity to complex research while respecting academic standards, confidentiality, and authorship integrity.
              </p>

              {/* Action Buttons */}
              <div className="hero-cta-buttons">
                <button
                  type="button"
                  className="btn btn-white btn-lg"
                  onClick={() => openConsultation()}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                    calendar_month
                  </span>
                  <span>Book a Consultation</span>
                </button>

                <Link
                  to="/services"
                  className="btn btn-outline-hero btn-lg"
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                    arrow_forward
                  </span>
                  <span>Explore Our Services</span>
                </Link>
              </div>

              {/* Trust Line */}
              <p style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.9)', margin: 0, fontWeight: 500, letterSpacing: '0.01em' }}>
                Ethical academic support • Medical research expertise • Confidential collaboration
              </p>
            </div>

            {/* Right Doctor Portrait Card */}
            <div className="hero-portrait-container">
              <div className="hero-portrait-card">
                <img
                  src="/assets/images/hero_doctor.jpg"
                  alt="Medical Research Specialist at MedZen Writes"
                  className="hero-portrait-img"
                  width="380"
                  height="380"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          2. ACADEMIC RIGOR & EXPERTISE INTRODUCTION SECTION
          =================================================================== */}
      <section className="editorial-section section-bg-white" aria-label="Academic Support Built for Clinical Professionals">
        <div className="site-container">
          {/* Centered Section Header */}
          <div className="section-header text-center">
            <div className="pill-eyebrow-badge">
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>verified_user</span>
              <span>Academic Support Built for Clinical Professionals</span>
            </div>
            <h2 className="section-header-title" style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)' }}>
              Focused Support for Research That Deserves to Be Seen
            </h2>
            <p className="section-header-subtitle">
              Clinical research often begins with strong questions, valuable observations, and demanding timelines. Turning that work into a well-structured thesis, manuscript, or evidence synthesis requires time, methodological care, and attention to detail.
            </p>
            <p className="section-header-subtitle" style={{ marginTop: '8px' }}>
              MedZen Writes helps researchers move from data and drafts to clear, academically sound deliverables—without compromising the ownership, integrity, or clinical relevance of their work.
            </p>
          </div>

          {/* 3-Column Square Cards Grid */}
          <div className="rigor-square-grid">
            <div className="rigor-square-card">
              <span className="material-symbols-outlined rigor-square-icon">
                description
              </span>
              <h3 className="rigor-square-title">Custom Academic Writing</h3>
              <p className="rigor-square-desc">
                Every project is approached individually. We work around your study design, institutional requirements, specialty, and target journal expectations rather than applying generic templates.
              </p>
            </div>

            <div className="rigor-square-card">
              <span className="material-symbols-outlined rigor-square-icon">
                analytics
              </span>
              <h3 className="rigor-square-title">Methodological &amp; Statistical Clarity</h3>
              <p className="rigor-square-desc">
                From study planning and sample-size calculations to data interpretation and reporting, our team helps present results in a way that is accurate, transparent, and easy to defend.
              </p>
            </div>

            <div className="rigor-square-card">
              <span className="material-symbols-outlined rigor-square-icon">
                security
              </span>
              <h3 className="rigor-square-title">Ethical, Confidential Collaboration</h3>
              <p className="rigor-square-desc">
                Your work remains your work. We support responsible research communication, protect confidential information, and work within established academic and publication standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          3. CORE SERVICES CATALOG (9 Specialties)
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
            {servicesData.map((s) => (
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
