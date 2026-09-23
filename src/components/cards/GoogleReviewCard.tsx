import React from 'react';
import { ReviewScreenshot } from '../../types';
import { useModal } from '../../context/ModalContext';

export const GoogleReviewCard: React.FC<{ review: ReviewScreenshot }> = ({ review }) => {
  const { openLightbox } = useModal();

  return (
    <div
      className="screenshot-card"
      onClick={() => openLightbox(review.image, `Google Review by ${review.authorName}`, review.caption)}
      role="button"
      tabIndex={0}
      aria-label={`View Google review screenshot by ${review.authorName}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(review.image, `Google Review by ${review.authorName}`, review.caption);
        }
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px', padding: '0 4px' }}>
        <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--color-teal)' }}>
          Google Review
        </span>
        <span style={{ color: '#eab308', fontSize: '0.85rem' }}>★★★★★</span>
      </div>
      <img
        src={review.image}
        alt={`Google Review by ${review.authorName}`}
        className="screenshot-card-img"
        loading="lazy"
      />
      <p className="screenshot-caption">{review.caption}</p>
    </div>
  );
};
