import React, { useState } from 'react';
import { journalArticlesData } from '../data/articles';
import { ArticleCard } from '../components/cards/ArticleCard';
import { CtaBanner } from '../components/sections/CtaBanner';


export const Journal: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTopic, setSelectedTopic] = useState<string>('all');

  const categories = Array.from(new Set(journalArticlesData.map((a) => a.category)));
  const topics = Array.from(new Set(journalArticlesData.map((a) => a.topic)));

  const filteredArticles = journalArticlesData.filter((art) => {
    const matchCat = selectedCategory === 'all' || art.category === selectedCategory;
    const matchTop = selectedTopic === 'all' || art.topic === selectedTopic;
    return matchCat && matchTop;
  });

  return (
    <div className="page-journal">
      {/* Hero Header */}
      <section className="editorial-hero" aria-label="Research Journal">
        <div className="site-container">
          <div style={{ maxWidth: '820px' }}>
            <span className="hero-eyebrow">Academic Knowledge Hub</span>
            <h1 className="hero-title">Medical Research &amp; Publishing Journal</h1>
            <p className="hero-lead">
              Practical guides on study methodology, IMRaD structuring, biostatistical analysis, and journal submission strategies for postgraduate residents and clinical authors.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid & Filtering */}
      <section className="editorial-section section-bg-white" aria-labelledby="journal-articles-heading">
        <div className="site-container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', marginBottom: '36px' }}>
            <div>
              <span className="section-header-eyebrow">Latest Academic Guides</span>
              <h2 id="journal-articles-heading" style={{ fontSize: '1.85rem', margin: 0 }}>
                Research &amp; Writing Guides
              </h2>
            </div>

            {/* Filter Dropdowns */}
            <div className="journal-filter-bar" style={{ margin: 0 }}>
              <select
                className="journal-select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                aria-label="Filter articles by category"
              >
                <option value="all">All Categories</option>
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>

              <select
                className="journal-select"
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
                aria-label="Filter articles by topic"
              >
                <option value="all">All Topics</option>
                {topics.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>

              {(selectedCategory !== 'all' || selectedTopic !== 'all') && (
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedTopic('all');
                  }}
                >
                  Reset
                </button>
              )}
            </div>
          </div>

          {/* Cards */}
          {filteredArticles.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', background: 'var(--color-paper)', borderRadius: 'var(--radius-md)', border: '1px dashed var(--color-line)' }}>
              <p style={{ color: 'var(--color-muted)', marginBottom: '16px' }}>No articles match your selected filters.</p>
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedTopic('all');
                }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="journal-grid">
              {filteredArticles.map((art) => (
                <ArticleCard key={art.id} article={art} />
              ))}
            </div>
          )}
        </div>
      </section>

      <CtaBanner />
    </div>
  );
};
