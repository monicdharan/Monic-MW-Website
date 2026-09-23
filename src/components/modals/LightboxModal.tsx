import React from 'react';
import { useModal } from '../../context/ModalContext';

export const LightboxModal: React.FC = () => {
  const { lightbox, closeLightbox } = useModal();

  if (!lightbox.isOpen) return null;

  return (
    <div
      className={`modal-backdrop ${lightbox.isOpen ? 'is-open' : ''}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeLightbox();
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Full-size Image and Document Viewer"
    >
      <div className="modal-dialog lightbox-dialog">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', borderBottom: '1px solid var(--color-line)' }}>
          <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-ink)' }}>
            Document Preview
          </span>
          <button
            type="button"
            className="modal-close-btn"
            style={{ position: 'static' }}
            onClick={closeLightbox}
            aria-label="Close preview"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="lightbox-img-wrap">
          <img
            src={lightbox.imageUrl}
            alt={lightbox.altText}
            className="lightbox-img"
          />
        </div>

        <div className="lightbox-footer">
          <div>
            <div style={{ fontSize: '0.94rem', fontWeight: 700, color: 'var(--color-ink)' }}>
              {lightbox.altText}
            </div>
            {lightbox.caption && (
              <div style={{ fontSize: '0.84rem', color: 'var(--color-muted)', marginTop: '2px' }}>
                {lightbox.caption}
              </div>
            )}
          </div>

          {lightbox.articleUrl && (
            <a
              href={lightbox.articleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-mint btn-sm"
              title="Open full published article in new tab"
            >
              <span>View Full Article</span>
              <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>open_in_new</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
