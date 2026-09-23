import React, { useState } from 'react';
import { publicationsData } from '../data/publications';
import { PublicationCard } from '../components/cards/PublicationCard';
import { CtaBanner } from '../components/sections/CtaBanner';

export const Publications: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'original' | 'case'>('all');

  const filteredPubs = publicationsData.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

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
          {/* Header & Filter Controls */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '16px' }}>
            <div>
              <span className="section-header-eyebrow">Document Archive</span>
              <h2 id="portfolio-heading" style={{ fontSize: '1.7rem', margin: 0 }}>
                Verified Publication Records
              </h2>
            </div>

            {/* Filter Pills */}
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                type="button"
                className={`btn btn-sm ${filter === 'all' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setFilter('all')}
              >
                All Documents ({publicationsData.length})
              </button>
              <button
                type="button"
                className={`btn btn-sm ${filter === 'original' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setFilter('original')}
              >
                Original Research
              </button>
              <button
                type="button"
                className={`btn btn-sm ${filter === 'case' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setFilter('case')}
              >
                Case Reports
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="publications-archive-grid">
            {filteredPubs.map((pub) => (
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
