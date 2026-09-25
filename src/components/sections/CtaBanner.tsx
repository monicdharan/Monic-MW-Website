import React from 'react';
import { useModal } from '../../context/ModalContext';
import { useAdminData } from '../../context/AdminDataContext';

interface CtaBannerProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({
  title,
  subtitle,
  buttonText = "Book Consultation",
}) => {
  const { openConsultation } = useModal();
  const { getHeader, getHeaderSubtext } = useAdminData();

  const displayTitle = title || getHeader('global-cta-h2', 'Ready to Advance Your Medical Research?');
  const displaySubtitle = subtitle || getHeaderSubtext('global-cta-h2', 'Schedule a confidential discussion with our editorial and biostatistics team. We review your draft, outline a project plan, and provide clear timeline estimates.');

  return (
    <section className="screenshot-cta-banner" aria-label="Schedule Your Research and Thesis Consultation">
      <div className="cta-bg-overlay" />
      <div className="site-container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="cta-grid">
          {/* Left CTA Text & Button */}
          <div style={{ maxWidth: '720px' }}>
            <h2 className="cta-main-title">
              {displayTitle}
            </h2>
            <p className="cta-main-lead">
              {displaySubtitle}
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
