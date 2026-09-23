import React from 'react';
import { legalPagesData } from '../data/legal';
import { Navigate } from 'react-router-dom';

export const LegalPage: React.FC<{ pageSlug: string }> = ({ pageSlug }) => {
  const page = legalPagesData[pageSlug];

  if (!page) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="page-legal">
      {/* Header */}
      <section className="editorial-hero" aria-label={page.title}>
        <div className="site-container">
          <div style={{ maxWidth: '820px' }}>
            <span className="hero-eyebrow">Academic Compliance &amp; Terms</span>
            <h1 className="hero-title" style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.6rem)' }}>
              {page.title}
            </h1>
            <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.86rem' }}>
              Last reviewed &amp; updated: {page.lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="editorial-section section-bg-white">
        <div className="site-container" style={{ maxWidth: '780px' }}>
          <div style={{ background: 'var(--color-paper)', padding: '18px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-line)', marginBottom: '20px' }}>
            <h4 style={{ fontSize: '0.98rem', color: 'var(--color-ink)', marginBottom: '4px' }}>Policy Overview</h4>
            <p style={{ fontSize: '0.88rem', color: 'var(--color-ink-soft)', margin: 0, lineHeight: '1.5' }}>
              {page.summary}
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {page.sections.map((sec, idx) => (
              <div key={idx}>
                <h2 style={{ fontSize: '1.25rem', color: 'var(--color-ink)', marginBottom: '10px', borderBottom: '1px solid var(--color-line)', paddingBottom: '6px' }}>
                  {sec.heading}
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {sec.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} style={{ fontSize: '0.92rem', lineHeight: '1.6', color: 'var(--color-ink-soft)' }}>
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
