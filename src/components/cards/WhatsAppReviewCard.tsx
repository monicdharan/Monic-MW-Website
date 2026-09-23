import React from 'react';
import { ReviewScreenshot } from '../../types';
import { useModal } from '../../context/ModalContext';

export const WhatsAppReviewCard: React.FC<{ review: ReviewScreenshot }> = ({ review }) => {
  const { openLightbox } = useModal();

  return (
    <div
      className="screenshot-card"
      onClick={() => openLightbox(review.image, `WhatsApp Feedback - ${review.authorName}`, review.caption)}
      role="button"
      tabIndex={0}
      aria-label={`View WhatsApp feedback screenshot: ${review.caption}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(review.image, `WhatsApp Feedback - ${review.authorName}`, review.caption);
        }
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px', padding: '0 4px' }}>
        <span className="material-symbols-outlined" style={{ fontSize: '16px', color: '#16a34a' }}>chat</span>
        <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--color-ink)' }}>
          Verified Message
        </span>
      </div>
      <img
        src={review.image}
        alt={`WhatsApp Feedback - ${review.authorName}`}
        className="screenshot-card-img"
        loading="lazy"
      />
      <p className="screenshot-caption">{review.caption}</p>
    </div>
  );
};
