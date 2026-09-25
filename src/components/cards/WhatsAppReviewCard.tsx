import React from 'react';
import { ReviewScreenshot } from '../../types';
import { useModal } from '../../context/ModalContext';

export const WhatsAppReviewCard: React.FC<{ review: ReviewScreenshot }> = ({ review }) => {
  const { openLightbox } = useModal();

  return (
    <div
      className="screenshot-card whatsapp-review-card"
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
      <img
        src={review.image}
        alt={`WhatsApp Feedback - ${review.authorName}`}
        className="screenshot-card-img"
        loading="lazy"
      />
    </div>
  );
};
