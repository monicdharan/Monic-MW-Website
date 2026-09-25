import React, { useEffect } from 'react';
import { legalPagesData } from '../data/legal';
import { Navigate, Link } from 'react-router-dom';

export const LegalPage: React.FC<{ pageSlug: string }> = ({ pageSlug }) => {
  const page = legalPagesData[pageSlug];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pageSlug]);

  if (!page) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="page-legal">
      {/* Editorial Hero Header */}
      <section className="editorial-hero" aria-label={page.title}>
        <div className="site-container">
          <div style={{ maxWidth: '840px' }}>
            <span className="hero-eyebrow">Legal &amp; Compliance Policy</span>
            <h1 className="hero-title" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', marginBottom: '12px' }}>
              {page.title}
            </h1>
            {page.lastUpdated && (
              <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem', margin: 0 }}>
                <strong>Effective Date:</strong> {page.lastUpdated}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Main Document Body */}
      <section className="editorial-section section-bg-white" style={{ padding: '48px 0 80px' }}>
        <div className="site-container" style={{ maxWidth: '860px' }}>
          
          {/* Policy Overview Callout Box */}
          {page.summary && (
            <div style={{
              background: 'var(--color-sand)',
              padding: '24px 28px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid #e0dad0',
              marginBottom: '36px'
            }}>
              <h4 style={{ fontSize: '1.05rem', color: 'var(--color-ink)', marginBottom: '8px', fontWeight: 700 }}>
                Policy Summary &amp; Scope
              </h4>
              <p style={{ fontSize: '0.94rem', color: 'var(--color-ink)', margin: 0, lineHeight: '1.65' }}>
                {page.summary}
              </p>
            </div>
          )}

          {/* Policy Sections */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {page.sections.map((sec, idx) => (
              <article key={idx} className="legal-article-section" style={{
                background: '#ffffff',
                border: '1px solid var(--color-line)',
                borderRadius: 'var(--radius-md)',
                padding: 'clamp(20px, 3.5vw, 36px)',
                boxShadow: '0 1px 3px rgba(0,0,0,0.02)'
              }}>
                <h2 style={{
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  color: 'var(--color-ink)',
                  marginBottom: '20px',
                  paddingBottom: '12px',
                  borderBottom: '2px solid var(--color-mint)'
                }}>
                  {sec.heading}
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  {sec.subsections.map((sub, subIdx) => (
                    <div key={subIdx} className="legal-subsection">
                      {sub.subhead && (
                        <h3 style={{
                          fontSize: '1.12rem',
                          fontWeight: 700,
                          color: 'var(--teal-primary-dark)',
                          marginBottom: '10px',
                          marginTop: subIdx > 0 ? '8px' : '0'
                        }}>
                          {sub.subhead}
                        </h3>
                      )}

                      {sub.paragraphs && sub.paragraphs.length > 0 && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: sub.listItems && sub.listItems.length > 0 ? '12px' : '0' }}>
                          {sub.paragraphs.map((p, pIdx) => (
                            <p
                              key={pIdx}
                              style={{ fontSize: '0.96rem', lineHeight: '1.7', color: 'var(--color-ink-soft)', margin: 0 }}
                              dangerouslySetInnerHTML={{ __html: p }}
                            />
                          ))}
                        </div>
                      )}

                      {sub.listItems && sub.listItems.length > 0 && (
                        <ul style={{
                          listStyleType: 'disc',
                          paddingLeft: '24px',
                          margin: '8px 0 0 0',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '8px'
                        }}>
                          {sub.listItems.map((li, liIdx) => (
                            <li
                              key={liIdx}
                              style={{ fontSize: '0.94rem', lineHeight: '1.65', color: 'var(--color-ink-soft)' }}
                              dangerouslySetInnerHTML={{ __html: li }}
                            />
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>

          {/* Bottom Back / Navigation Links */}
          <div style={{ marginTop: '48px', paddingTop: '24px', borderTop: '1px solid var(--color-line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <Link to="/" className="btn btn-secondary btn-sm" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_back</span>
              <span>Back to Home</span>
            </Link>
            <div style={{ display: 'flex', gap: '16px', fontSize: '0.86rem' }}>
              <Link to="/privacy-policy" style={{ color: 'var(--color-teal)', fontWeight: pageSlug === 'privacy-policy' ? 700 : 500 }}>Privacy</Link>
              <span>·</span>
              <Link to="/refund-policy" style={{ color: 'var(--color-teal)', fontWeight: pageSlug === 'refund-policy' ? 700 : 500 }}>Refunds</Link>
              <span>·</span>
              <Link to="/terms-conditions" style={{ color: 'var(--color-teal)', fontWeight: pageSlug === 'terms-conditions' ? 700 : 500 }}>Terms</Link>
              <span>·</span>
              <Link to="/shipping-policy" style={{ color: 'var(--color-teal)', fontWeight: pageSlug === 'shipping-policy' ? 700 : 500 }}>Shipping</Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
