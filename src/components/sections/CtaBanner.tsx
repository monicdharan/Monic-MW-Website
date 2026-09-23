import React from 'react';
import { useModal } from '../../context/ModalContext';
import { Button } from '../buttons/Button';

interface CtaBannerProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({
  title = "Tell us where your research is today, and we'll help you identify the next practical step.",
  subtitle = "Whether you need a full manuscript draft, biostatistical analysis, or thesis formatting, our academic coordinators provide a customized milestone roadmap.",
  buttonText = "Book a consultation",
}) => {
  const { openConsultation } = useModal();

  return (
    <section className="editorial-cta-banner" aria-label="Closing Consultation Call to Action">
      <div className="site-container">
        <div className="cta-banner-inner">
          <div style={{ maxWidth: '640px' }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 1.95rem)', marginBottom: '10px', color: 'var(--color-ink)' }}>
              {title}
            </h2>
            <p style={{ fontSize: '0.96rem', color: 'var(--color-ink-soft)', lineHeight: '1.6', margin: 0 }}>
              {subtitle}
            </p>
          </div>

          <div>
            <Button variant="primary" size="lg" onClick={() => openConsultation()}>
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
