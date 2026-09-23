import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { journalArticlesData } from '../data/articles';
import { useModal } from '../context/ModalContext';
import { Button } from '../components/buttons/Button';
import { CtaBanner } from '../components/sections/CtaBanner';

export const JournalArticle: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { openConsultation } = useModal();

  const article = journalArticlesData.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/journal" replace />;
  }

  return (
    <div className="page-journal-article">
      {/* Header */}
      <section className="editorial-hero" aria-label="Article Details">
        <div className="site-container">
          <div style={{ maxWidth: '820px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <Link to="/journal" style={{ color: 'var(--color-mint)', fontSize: '0.88rem', fontWeight: 600 }}>
                ← Back to Research Journal
              </Link>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <span style={{ background: 'rgba(26, 169, 156, 0.2)', color: 'var(--color-mint)', padding: '3px 10px', borderRadius: 'var(--radius-xs)', fontSize: '0.8rem', fontWeight: 600 }}>
                {article.category}
              </span>
              <span style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.85rem' }}>
                {article.readTime}
              </span>
              <span style={{ color: 'rgba(255, 255, 255, 0.5)' }}>·</span>
              <span style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.85rem' }}>
                {article.date}
              </span>
            </div>

            <h1 className="hero-title" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)' }}>
              {article.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="editorial-section section-bg-white">
        <div className="site-container" style={{ maxWidth: '780px' }}>
          {/* Key Takeaways Box */}
          {article.keyTakeaways && article.keyTakeaways.length > 0 && (
            <div style={{ background: 'var(--color-sand)', padding: '28px', borderRadius: 'var(--radius-md)', border: '1px solid #e0dad0', marginBottom: '36px' }}>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--color-ink)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="material-symbols-outlined" style={{ color: 'var(--color-teal)' }}>lightbulb</span>
                Key Clinical Takeaways
              </h3>
              <ul className="editorial-point-list" style={{ marginTop: '8px' }}>
                {article.keyTakeaways.map((k, i) => (
                  <li key={i} className="editorial-point-item">
                    <span className="material-symbols-outlined point-icon-check" style={{ fontSize: '18px' }}>arrow_right</span>
                    <span style={{ fontSize: '0.94rem' }}>{k}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Paragraphs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '1.05rem', lineHeight: '1.75', color: 'var(--color-ink)' }}>
            {article.content.map((paragraph, index) => (
              <p key={index} style={{ fontSize: '1.05rem', lineHeight: '1.75' }}>
                {paragraph}
              </p>
            ))}
          </div>

          {/* Related Support Box */}
          <div style={{ marginTop: '56px', padding: '32px', background: 'var(--color-paper)', border: '1px solid var(--color-line)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap' }}>
            <div>
              <h4 style={{ fontSize: '1.15rem', marginBottom: '6px' }}>Need assistance implementing this in your research?</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-ink-soft)', margin: 0 }}>
                Our medical writing specialists and biostatisticians can guide your study from protocol to submission.
              </p>
            </div>
            <Button variant="primary" onClick={() => openConsultation()}>
              Book Consultation
            </Button>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
};
