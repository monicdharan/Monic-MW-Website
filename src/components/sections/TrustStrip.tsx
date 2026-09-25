import React from 'react';

export const TrustStrip: React.FC = () => {
  return (
    <section className="trust-strip" aria-label="Core Editorial Standards">
      <div className="site-container">
        <div className="trust-strip-inner">
          <div className="trust-item">
            <span className="material-symbols-outlined trust-item-icon">menu_book</span>
            <span>Medical Writing Support</span>
          </div>
          <div className="trust-item">
            <span className="material-symbols-outlined trust-item-icon">bar_chart</span>
            <span>Biostatistical Review</span>
          </div>
          <div className="trust-item">
            <span className="material-symbols-outlined trust-item-icon">fact_check</span>
            <span>Journal-Ready Formatting</span>
          </div>
          <div className="trust-item">
            <span className="material-symbols-outlined trust-item-icon">verified_user</span>
            <span>Confidential Consultation</span>
          </div>
        </div>
      </div>
    </section>
  );
};
