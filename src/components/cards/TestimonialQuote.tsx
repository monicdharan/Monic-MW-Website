import React from 'react';
import { DoctorTestimonial } from '../../types';

export const TestimonialQuote: React.FC<{ testimonial: DoctorTestimonial; featured?: boolean }> = ({
  testimonial,
  featured = false,
}) => {
  if (featured) {
    return (
      <div className="testimonial-featured-card">
        <div>
          <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-teal)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Featured Author Review
          </span>
          <p className="testimonial-quote-text">
            “{testimonial.quote}”
          </p>
        </div>

        <div className="testimonial-author-row">
          {testimonial.avatarImage && (
            <img
              src={testimonial.avatarImage}
              alt={testimonial.doctorName}
              className="testimonial-avatar"
              loading="lazy"
            />
          )}
          <div>
            <div className="testimonial-author-name">
              {testimonial.doctorName}, <span style={{ fontWeight: 500, fontSize: '0.92rem' }}>{testimonial.qualification}</span>
            </div>
            <div className="testimonial-author-role">
              {testimonial.specialty} {testimonial.cityOrInstitution && `· ${testimonial.cityOrInstitution}`}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="testimonial-compact-card">
      <p style={{ fontStyle: 'italic', fontSize: '0.96rem', color: 'var(--color-ink)', lineHeight: '1.6', marginBottom: '16px' }}>
        “{testimonial.quote}”
      </p>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {testimonial.avatarImage && (
          <img
            src={testimonial.avatarImage}
            alt={testimonial.doctorName}
            style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }}
            loading="lazy"
          />
        )}
        <div>
          <div style={{ fontWeight: 700, fontSize: '0.94rem', color: 'var(--color-ink)' }}>
            {testimonial.doctorName}
          </div>
          <div style={{ fontSize: '0.8rem', color: 'var(--color-muted)' }}>
            {testimonial.specialty}
          </div>
        </div>
      </div>
    </div>
  );
};
