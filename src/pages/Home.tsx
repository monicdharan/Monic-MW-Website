import React from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';
import { servicesData } from '../data/services';
import { doctorTestimonials } from '../data/testimonials';
import { faqsData } from '../data/faqs';
import { companyData } from '../data/company';
import { FaqAccordion } from '../components/interactive/FaqAccordion';

export const Home: React.FC = () => {
  const { openConsultation } = useModal();

  return (
    <div className="page-home">
      {/* ===================================================================
          1. HERO SECTION (Screenshot 1)
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
                <span>100% HUMAN MEDICAL EXPERTS · 0% AI SHORTCUTS</span>
              </div>

              {/* Main Headline */}
              <h1 className="hero-main-title">
                Medical Research Paper Publication &amp; Thesis Writing Services
              </h1>

              {/* Subtitle */}
              <p className="hero-main-lead">
                MedZen Writes is your partner in medical progress — offering end-to-end medical research paper publication and thesis writing services that simplify thesis writing, research publishing, and statistical analysis, so you can focus on saving lives.
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
                  <span>Book Free Consultation</span>
                </button>

                <a
                  href="/services"
                  className="btn btn-outline-hero btn-lg"
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                    download
                  </span>
                  <span>Download Thesis Checklist</span>
                </a>
              </div>

              {/* Contact Information Pills Bar */}
              <div className="hero-contact-pills-row">
                <div className="hero-info-pill">
                  <span className="material-symbols-outlined pill-icon">call</span>
                  <span>{companyData.phoneDisplay}</span>
                </div>
                <div className="hero-info-pill">
                  <span className="material-symbols-outlined pill-icon">location_on</span>
                  <span>{companyData.address.locality}, {companyData.address.city} – {companyData.address.pincode}</span>
                </div>
                <div className="hero-info-pill">
                  <span className="material-symbols-outlined pill-icon">mail</span>
                  <span>{companyData.email}</span>
                </div>
                <div className="hero-info-pill">
                  <span className="material-symbols-outlined pill-icon">schedule</span>
                  <span>{companyData.workingHours}</span>
                </div>
              </div>
            </div>

            {/* Right Doctor Portrait Card */}
            <div className="hero-portrait-container">
              <div className="hero-portrait-card">
                <img
                  src="/assets/images/hero_doctor.jpg"
                  alt="Medical Research Specialist Dr. at MedZen Writes"
                  className="hero-portrait-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          2. ACADEMIC RIGOR & EXPERTISE SECTION (Screenshot 2)
          =================================================================== */}
      <section className="editorial-section section-bg-white" aria-label="Academic Rigor and Medical Writing Experts">
        <div className="site-container">
          {/* Centered Section Header */}
          <div className="section-header text-center">
            <div className="pill-eyebrow-badge">
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>verified_user</span>
              <span>ACADEMIC RIGOR</span>
            </div>
            <h2 className="section-header-title" style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)' }}>
              Trusted Medical Thesis Writing &amp; Research Publication Experts
            </h2>
            <p className="section-header-subtitle">
              Whether you're a postgraduate student, fellow, senior clinician, or life sciences researcher, our medical research paper publication and thesis writing services are tailored to your level and specialty.
            </p>
          </div>

          {/* 2-Column Content Grid */}
          <div className="rigor-grid">
            {/* Left Column: Stack of 3 Feature Cards */}
            <div className="rigor-cards-column">
              <div className="rigor-feature-card">
                <div className="rigor-icon-box">
                  <span className="material-symbols-outlined">description</span>
                </div>
                <div>
                  <h3 className="rigor-card-title">Custom Academic Writing — No Templates</h3>
                  <p className="rigor-card-desc">
                    Your content is crafted from scratch to meet journal standards, university formats, and discipline-specific requirements with zero generic templating.
                  </p>
                </div>
              </div>

              <div className="rigor-feature-card">
                <div className="rigor-icon-box">
                  <span className="material-symbols-outlined">security</span>
                </div>
                <div>
                  <h3 className="rigor-card-title">Ethical &amp; Plagiarism Controlled</h3>
                  <p className="rigor-card-desc">
                    All deliverables are strictly under 10% similarity, verified by Turnitin certificate, and 100% human-written — no AI shortcuts, no ethical compromises.
                  </p>
                </div>
              </div>

              <div className="rigor-feature-card">
                <div className="rigor-icon-box">
                  <span className="material-symbols-outlined">biotech</span>
                </div>
                <div>
                  <h3 className="rigor-card-title">Biostatistical Precision &amp; Modeling</h3>
                  <p className="rigor-card-desc">
                    From sample size calculations to multivariable regression, survival analyses, and meta-analyses using SPSS, R, and STATA.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Doctor Mentorship Image with Floating Badge */}
            <div className="rigor-image-wrapper">
              <img
                src="/assets/images/doctor-resident-mentorship.jpg"
                alt="Two doctors in library discussing medical research publication poster"
                className="rigor-photo"
              />
              <div className="rigor-floating-badge">
                <span className="material-symbols-outlined" style={{ fontSize: '18px', color: 'var(--mint-primary)' }}>
                  verified
                </span>
                <span>ICMJE &amp; PRISMA Compliant Academic Rigor</span>
              </div>
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
              <span>SPECIALIZED DIVISIONS</span>
            </div>
            <h2 className="section-header-title">Comprehensive Academic &amp; Research Services</h2>
            <p className="section-header-subtitle">
              End-to-end medical research solutions structured around strict university dissertation deadlines and peer-reviewed journal criteria.
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
          4. DOCTOR REVIEWS & TESTIMONIALS (Screenshot 3)
          =================================================================== */}
      <section className="editorial-section screenshot-testimonials-section" aria-label="Doctor Reviews and Client Testimonials">
        <div className="site-container">
          <div className="section-header text-center">
            <div className="pill-eyebrow-badge">
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>chat</span>
              <span>DOCTOR FEEDBACK</span>
            </div>
            <h2 className="section-header-title">
              What Our Clients Say About Our Medical Writing Services
            </h2>
            <p className="section-header-subtitle">
              Trusted by researchers, postgraduate students, and healthcare professionals across premier medical institutions.
            </p>
          </div>

          {/* 3 Testimonial Cards in a Row */}
          <div className="testimonials-row-grid">
            {doctorTestimonials.slice(0, 3).map((item) => (
              <div key={item.id} className="screenshot-testimonial-card">
                <div className="card-author-header">
                  <img
                    src={item.avatarImage}
                    alt={item.doctorName}
                    className="card-author-avatar"
                  />
                  <div>
                    <h4 className="card-author-name">{item.doctorName}</h4>
                    <div className="card-star-rating">
                      ★★★★★
                    </div>
                  </div>
                </div>
                <p className="card-quote-content">
                  “{item.quote}”
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================
          5. SCHEDULE CONSULTATION CTA BANNER (Screenshot 4)
          =================================================================== */}
      <section className="screenshot-cta-banner" aria-label="Schedule Your Research and Thesis Consultation">
        <div className="cta-bg-overlay" />
        <div className="site-container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="cta-grid">
            {/* Left CTA Text & Button */}
            <div>
              <h2 className="cta-main-title">
                Schedule Your Research &amp; Thesis Consultation
              </h2>
              <p className="cta-main-lead">
                Connect with our medical writing coordinators today and ensure your research meets world-class publication standards with customized guidance.
              </p>
              <button
                type="button"
                className="btn btn-white btn-lg"
                onClick={() => openConsultation()}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                  calendar_month
                </span>
                <span>Book Consultation</span>
              </button>
            </div>

            {/* Right Verified Authors Stat Card */}
            <div className="cta-stat-card-wrap">
              <div className="cta-stat-card">
                <div className="stat-card-pill">
                  <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>verified_user</span>
                  <span>VERIFIED AUTHORS</span>
                </div>
                <div className="stat-card-number">98%</div>
                <div className="stat-card-label">Satisfied Medical Researchers</div>
                <div className="stat-card-rating">
                  <span className="stat-stars">★★★★★</span>
                  <span className="stat-reviews-count">315+ Reviews</span>
                </div>
                <Link to="/testimonials" className="btn btn-secondary btn-sm" style={{ width: '100%', marginTop: '16px', borderRadius: '8px' }}>
                  Read Client Reviews
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          6. FREQUENTLY ASKED QUESTIONS (FAQ)
          =================================================================== */}
      <section id="faq" className="editorial-section section-bg-white" aria-label="Frequently Asked Questions">
        <div className="site-container site-container-narrow">
          <div className="section-header text-center">
            <div className="pill-eyebrow-badge">
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>help</span>
              <span>FAQ &amp; SUPPORT</span>
            </div>
            <h2 className="section-header-title">Frequently Asked Questions</h2>
            <p className="section-header-subtitle">
              Clear answers regarding thesis confidentiality, Turnitin compliance, revisions, and biostatistics workflows.
            </p>
          </div>

          <FaqAccordion items={faqsData} />
        </div>
      </section>
    </div>
  );
};
