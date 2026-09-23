import React from 'react';
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
          <div style={{ maxWidth: '720px' }}>
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

          {/* Blank space on right */}
          <div className="cta-stat-card-wrap" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};
