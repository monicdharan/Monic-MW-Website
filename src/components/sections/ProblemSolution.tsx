import React from 'react';
import { Link } from 'react-router-dom';
import { useAdminData } from '../../context/AdminDataContext';

export const ProblemSolution: React.FC = () => {
  const { getHeader, getHeaderSubtext, getEyebrow } = useAdminData();

  return (
    <section className="editorial-section section-bg-white" aria-labelledby="challenges-heading">
      <div className="site-container">
        <div className="problem-solution-grid">
          {/* Problem Column */}
          <div className="problem-box">
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#c25e00', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              {getEyebrow('home-problem-eyebrow', 'The Challenge')}
            </span>
            <h2 id="challenges-heading" style={{ fontSize: '1.65rem', marginTop: '6px', marginBottom: '14px' }}>
              {getHeader('home-problem-h2', 'Clinical Demands Often Delay Publication Milestones')}
            </h2>
            <p style={{ fontSize: '0.96rem', lineHeight: '1.6', color: 'var(--color-ink-soft)' }}>
              {getHeaderSubtext('home-problem-h2', 'Medical residents and clinical faculty generate high-yield clinical data every day. However, navigating complex journal author guidelines, rigorous biostatistical modeling, and strict formatting requirements alongside 70+ hour hospital shifts leads to stalled drafts and missed submission deadlines.')}
            </p>

            <div className="editorial-point-list">
              <div className="editorial-point-item">
                <span className="material-symbols-outlined point-icon-warn">error</span>
                <span>{getHeader('home-problem-pt1', 'Data collection is complete, but structuring the manuscript into standard IMRaD format takes months.')}</span>
              </div>
              <div className="editorial-point-item">
                <span className="material-symbols-outlined point-icon-warn">error</span>
                <span>{getHeader('home-problem-pt2', 'Uncertainty regarding parametric vs. non-parametric statistical tests leads to reviewer rejections.')}</span>
              </div>
              <div className="editorial-point-item">
                <span className="material-symbols-outlined point-icon-warn">error</span>
                <span>{getHeader('home-problem-pt3', 'Postgraduate theses remain archived on university shelves without ever reaching an indexed journal.')}</span>
              </div>
            </div>
          </div>

          {/* Solution Column */}
          <div className="solution-box">
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-teal)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              {getEyebrow('home-solution-eyebrow', 'How MedZen Writes Helps')}
            </span>
            <h2 style={{ fontSize: '1.65rem', marginTop: '6px', marginBottom: '14px' }}>
              {getHeader('home-solution-h2', 'Structured, Ethical Editorial Partnership')}
            </h2>
            <p style={{ fontSize: '0.96rem', lineHeight: '1.6', color: 'var(--color-ink-soft)' }}>
              {getHeaderSubtext('home-solution-h2', 'We partner with clinicians and researchers as a dedicated medical editorial consultancy. We provide the methodological clarity, statistical rigor, and formatting discipline needed to bring your research to completion, while ensuring you maintain complete scientific and intellectual control over your work.')}
            </p>

            <div className="editorial-point-list">
              <div className="editorial-point-item">
                <span className="material-symbols-outlined point-icon-check">check_circle</span>
                <span>{getHeader('home-solution-pt1', 'Rigorous target journal scoping and formatting tailored to PubMed and Scopus standards.')}</span>
              </div>
              <div className="editorial-point-item">
                <span className="material-symbols-outlined point-icon-check">check_circle</span>
                <span>{getHeader('home-solution-pt2', 'Verified biostatistical computations with complete data tables and reproducible scripts.')}</span>
              </div>
              <div className="editorial-point-item">
                <span className="material-symbols-outlined point-icon-check">check_circle</span>
                <span>{getHeader('home-solution-pt3', 'Clear milestone-based delivery schedules with responsive revision and mentor feedback support.')}</span>
              </div>
            </div>

            <div style={{ marginTop: '28px' }}>
              <Link to="/about" className="editorial-link">
                <span>Learn about our research ethics &amp; methodology</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
