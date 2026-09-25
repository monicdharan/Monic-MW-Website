import React from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';
import { useAdminData } from '../context/AdminDataContext';
import { servicesData } from '../data/services';
import { targetJournalLogos } from '../data/publications';
import { googleReviews } from '../data/testimonials';
import { PublicationCard } from '../components/cards/PublicationCard';
import { GoogleReviewCard } from '../components/cards/GoogleReviewCard';
import { FaqAccordion } from '../components/interactive/FaqAccordion';
import { CtaBanner } from '../components/sections/CtaBanner';

export const Home: React.FC = () => {
  const { openConsultation } = useModal();
  const { publications, faqs, visualContent, getHeader, getEyebrow, getHeaderSubtext } = useAdminData();

  return (
    <div className="page-home">
      {/* ===================================================================
          1. HERO SECTION (Editorial Medical Research & Journal Publication)
          =================================================================== */}
      <section className="editorial-hero-v2" aria-label="Introduction to MedZen Writes">
        <div className="hero-v2-bg-layer" />
        <div className="hero-v2-container">
          <div className="hero-v2-grid">
            {/* Left Content Column */}
            <div className="hero-v2-content">
              {/* Understated Eyebrow Badge */}
              <div className="hero-v2-badge">
                <span>{getEyebrow('home-hero-eyebrow', visualContent.heroBadge || 'Medical Research & Publication Support')}</span>
              </div>

              {/* Main Headline (H1) */}
              <h1 className="hero-v2-title">
                {getHeader('home-hero-h1', visualContent.heroTitle || 'Turn Complex Medical Research Into Clear, Publication-Ready Work')}
              </h1>

              {/* Subtitle */}
              <p className="hero-v2-lead">
                {getHeaderSubtext('home-hero-h1', visualContent.heroLead || 'Medical writing, biostatistics, and publication support for clinicians, postgraduate doctors, researchers, and medical faculty — delivered with research integrity and confidentiality.')}
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
                  <span>{getHeader('home-trust-item1-h4', 'Research integrity')}</span>
                </div>
                <div className="hero-v2-trust-item">
                  <span className="hero-v2-trust-check" aria-hidden="true">✓</span>
                  <span>{getHeader('home-trust-item2-h4', 'Research confidentiality')}</span>
                </div>
                <div className="hero-v2-trust-item">
                  <span className="hero-v2-trust-check" aria-hidden="true">✓</span>
                  <span>{getHeader('home-trust-item3-h4', 'Medical-domain expertise')}</span>
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
              <span>{getEyebrow('home-services-eyebrow', 'Specialised Research Support')}</span>
            </div>
            <h2 className="section-header-title">
              {getHeader('home-services-h2', 'Medical Writing Services Across the Research Journey')}
            </h2>
            <p className="section-header-subtitle">
              {getHeaderSubtext('home-services-h2', 'Whether you are developing a dissertation, preparing a manuscript, analysing clinical data, or responding to reviewer comments, MedZen Writes offers focused support at every stage.')}
            </p>
          </div>

          <div className="services-grid-cards">
            {[
              { ...servicesData[0], title: getHeader('home-service1-h3', servicesData[0].title) }, // 01. Original Research Articles
              { ...servicesData[1], title: getHeader('home-service2-h3', servicesData[1].title) }, // 02. Systematic Reviews & Meta-Analyses
              { ...servicesData[3], title: getHeader('home-service3-h3', servicesData[3].title), number: '03' }, // 03. Thesis & Dissertation Writing
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
            <span className="section-header-eyebrow">{getEyebrow('home-pubs-eyebrow', 'Verified Research Portfolio')}</span>
            <h2 id="home-portfolio-heading" style={{ fontSize: 'clamp(1.5rem, 2.5vw, 1.9rem)', margin: 0, fontWeight: 700 }}>
              {getHeader('home-pubs-h2', 'Recent Peer-Reviewed Publications & Accepted Manuscripts')}
            </h2>
            <p style={{ color: 'var(--color-ink-soft)', marginTop: '6px', fontSize: '0.94rem' }}>
              {getHeaderSubtext('home-pubs-h2', 'A curated selection of published original studies, systematic reviews, and clinical papers developed with our research support.')}
            </p>
          </div>

          {/* Cards Grid: Top 3 Cards */}
          <div className="publications-archive-grid">
            {publications.slice(0, 3).map((pub) => (
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
            <span className="section-header-eyebrow">{getEyebrow('home-journals-eyebrow', 'Indexed Venues')}</span>
            <h2 className="section-header-title">
              {getHeader('home-journals-h2', 'Publication Pathways in High-Impact Indexed Journals')}
            </h2>
            <p className="section-header-subtitle">
              Manuscripts prepared and edited according to the technical and methodological requirements of leading indexing bodies and publisher guidelines.
            </p>
          </div>

          {/* Two-Tier Target Journal Logos */}
          <div className="target-logos-wrapper">
            {/* Row 1: 6 Logos */}
            <div className="target-logos-row row-top">
              {targetJournalLogos.slice(0, 6).map((logo) => (
                <div key={logo.name} className="target-logo-card">
                  <img
                    src={logo.logo}
                    alt={logo.name}
                    className="target-logo-img"
                    loading="lazy"
                  />
                  <span className="target-logo-caption">{logo.name}</span>
                </div>
              ))}
            </div>

            {/* Row 2: 5 Logos */}
            <div className="target-logos-row row-bottom">
              {targetJournalLogos.slice(6, 11).map((logo) => (
                <div key={logo.name} className="target-logo-card">
                  <img
                    src={logo.logo}
                    alt={logo.name}
                    className="target-logo-img"
                    loading="lazy"
                  />
                  <span className="target-logo-caption">{logo.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          5. REVIEWS SCREENSHOT CAROUSEL / GRID
          =================================================================== */}
      <section className="editorial-section section-bg-white" aria-labelledby="google-reviews-heading">
        <div className="site-container">
          <div className="section-header text-center">
            <div className="pill-eyebrow-badge">
              <span className="material-symbols-outlined" style={{ fontSize: '16px', color: '#16a34a' }}>verified</span>
              <span>{getEyebrow('home-reviews-eyebrow', 'Verified Feedback')}</span>
            </div>
            <h2 id="google-reviews-heading" className="section-header-title">
              {getHeader('home-reviews-h2', 'What Researchers & Clinicians Say About Our Work')}
            </h2>
            <p className="section-header-subtitle">
              {getHeaderSubtext('home-reviews-h2', 'Read authentic experiences and direct feedback from clinicians, postgraduate residents, and researchers who entrusted their manuscripts to MedZen Writes.')}
            </p>
          </div>

          {/* Static Google Reviews Cards Grid */}
          <div className="google-reviews-cards-grid">
            {googleReviews.map((review) => (
              <GoogleReviewCard key={review.id} review={review} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '28px' }}>
            <Link to="/testimonials" className="btn btn-outline btn-md">
              <span>View All Verified Doctor Reviews</span>
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===================================================================
          6. FAQS ACCORDION
          =================================================================== */}
      <section className="editorial-section section-bg-sand" aria-label="Frequently Asked Questions">
        <div className="site-container" style={{ maxWidth: '820px' }}>
          <div className="section-header text-center">
            <span className="section-header-eyebrow">{getEyebrow('home-faqs-eyebrow', 'Frequently Asked Questions')}</span>
            <h2 className="section-header-title">{getHeader('home-faqs-h2', 'Clear Answers Before You Begin')}</h2>
            <p className="section-header-subtitle">
              {getHeaderSubtext('home-faqs-h2', 'Common questions regarding confidentiality, timelines, authorship ethics, and the manuscript review process.')}
            </p>
          </div>

          <FaqAccordion items={faqs.slice(0, 5)} />

          <div style={{ textAlign: 'center', marginTop: '28px' }}>
            <Link to="/contact" className="btn btn-secondary btn-md">
              <span>Have a specific question? Ask our editorial team</span>
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===================================================================
          7. GLOBAL CTA BANNER
          =================================================================== */}
      <CtaBanner />
    </div>
  );
};
