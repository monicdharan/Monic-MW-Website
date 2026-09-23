import React from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../../context/ModalContext';

interface CtaBannerProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({
  title = "Schedule Your Research & Thesis Consultation",
  subtitle = "Connect with our medical writing coordinators today and ensure your research meets world-class publication standards with customized guidance.",
  buttonText = "Book Consultation",
}) => {
  const { openConsultation } = useModal();

  return (
    <section className="screenshot-cta-banner" aria-label="Schedule Your Research and Thesis Consultation">
      <div className="cta-bg-overlay" />
      <div className="site-container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="cta-grid">
          {/* Left CTA Text & Button */}
          <div>
            <h2 className="cta-main-title">
              {title}
            </h2>
            <p className="cta-main-lead">
              {subtitle}
            </p>
            <button
              type="button"
              className="btn btn-white btn-lg"
              onClick={() => openConsultation()}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                calendar_month
              </span>
              <span>{buttonText}</span>
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
  );
};
