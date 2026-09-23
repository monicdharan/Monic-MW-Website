import React from 'react';
import { useAdminData } from '../context/AdminDataContext';
import { PublicationCard } from '../components/cards/PublicationCard';
import { CtaBanner } from '../components/sections/CtaBanner';

export const Publications: React.FC = () => {
  const { publications } = useAdminData();
  return (
    <div className="page-publications">
      {/* Hero Header */}
      <section className="editorial-hero" aria-label="Publications Portfolio">
        <div className="site-container">
          <div style={{ maxWidth: '820px' }}>
            <span className="hero-eyebrow">Evidence &amp; Published Research</span>
            <h1 className="hero-title">Medical Publications Portfolio</h1>
            <p className="hero-lead">
              A curated record of client publications and clinical research papers supported by MedZen Writes across peer-reviewed PubMed, Scopus, and UGC-CARE indexed medical journals.
            </p>
          </div>
        </div>
      </section>

      {/* Publications Archive Grid */}
      <section className="editorial-section section-bg-white" aria-labelledby="portfolio-heading">
        <div className="site-container">
          {/* Header */}
          <div style={{ marginBottom: '20px' }}>
            <span className="section-header-eyebrow">Document Archive</span>
            <h2 id="portfolio-heading" style={{ fontSize: '1.7rem', margin: 0 }}>
              Verified Publication Records
            </h2>
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
