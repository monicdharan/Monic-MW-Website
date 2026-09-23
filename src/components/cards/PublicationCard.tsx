import React from 'react';
import { PublicationItem } from '../../types';
import { useModal } from '../../context/ModalContext';

export const PublicationCard: React.FC<{ publication: PublicationItem }> = ({ publication }) => {
  const { openLightbox } = useModal();

  return (
    <article className="pub-card">
      <div
        className="pub-card-preview"
        onClick={() => openLightbox(publication.image, publication.title, publication.specialty, publication.articleUrl)}
        role="button"
        tabIndex={0}
        aria-label={`View full document preview for ${publication.title}`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openLightbox(publication.image, publication.title, publication.specialty, publication.articleUrl);
          }
        }}
      >
        <img
          src={publication.image}
          alt={publication.title}
          className="pub-card-img"
          loading="lazy"
        />
        <div className="pub-card-zoom-overlay">
          <span className="material-symbols-outlined">zoom_in</span>
          <span>View Document</span>
        </div>
      </div>

      <div className="pub-card-body">
        <div className="pub-card-meta">
          <span className="pub-type-tag">{publication.type}</span>
          {publication.year && <span>• {publication.year}</span>}
        </div>

        <h3 className="pub-card-title">{publication.title}</h3>

        <div className="pub-card-footer">
          <span style={{ fontSize: '0.84rem', color: 'var(--color-ink-soft)', fontWeight: 500 }}>
            {publication.specialty}
          </span>
          {publication.articleUrl && (
            <a
              href={publication.articleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-link"
              style={{ fontSize: '0.84rem' }}
              onClick={(e) => e.stopPropagation()}
              title="Open publication in new tab"
            >
              <span>Article</span>
              <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>open_in_new</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
