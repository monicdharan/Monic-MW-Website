import React from 'react';
import { useAdminData } from '../context/AdminDataContext';
import { PublicationCard } from '../components/cards/PublicationCard';
import { CtaBanner } from '../components/sections/CtaBanner';

export const Publications: React.FC = () => {
  const { publications, getHeader, getEyebrow, getHeaderSubtext } = useAdminData();

  return (
    <div className="page-publications">
      {/* Hero Header */}
      <section className="editorial-hero" aria-label="Publications Portfolio">
        <div className="site-container">
          <div style={{ maxWidth: '820px' }}>
            <span className="hero-eyebrow">{getEyebrow('pubs-hero-eyebrow', 'Evidence & Published Research')}</span>
            <h1 className="hero-title">
              {getHeader('pubs-hero-h1', 'Medical Publications Portfolio')}
            </h1>
            <p className="hero-lead">
              {getHeaderSubtext('pubs-hero-h1', 'A curated record of client publications and clinical research papers supported by MedZen Writes across peer-reviewed PubMed, Scopus, and UGC-CARE indexed medical journals.')}
            </p>
          </div>
        </div>
      </section>

      {/* Publications Archive Grid */}
      <section className="editorial-section section-bg-white" aria-labelledby="portfolio-heading">
        <div className="site-container">
          {/* Header */}
          <div style={{ marginBottom: '20px' }}>
            <span className="section-header-eyebrow">{getEyebrow('pubs-grid-eyebrow', 'Document Archive')}</span>
            <h2 id="portfolio-heading" style={{ fontSize: '1.7rem', margin: 0 }}>
              {getHeader('pubs-grid-h2', 'Recent Accepted Papers & Published Articles')}
            </h2>
            <h4 style={{ fontSize: '0.9rem', color: 'var(--color-ink-soft)', fontWeight: 500, margin: '6px 0 0 0' }}>
              {getHeader('pubs-indexing-h4', 'Indexed in PubMed / Medline, Scopus, Web of Science, Embase, DOAJ, EMBASE')}
            </h4>
          </div>

          {/* Cards Grid */}
          <div className="publications-archive-grid">
            {publications.map((pub) => (
              <PublicationCard key={pub.id} publication={pub} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Have research findings ready for publication?"
        subtitle="Book a consultation to review your dataset and discuss target journal selection."
      />
    </div>
  );
};
