import React from 'react';
import { useModal } from '../../context/ModalContext';
import { ConsultationForm } from '../forms/ConsultationForm';

export const ConsultationModal: React.FC = () => {
  const { isConsultationOpen, closeConsultation, selectedService } = useModal();

  return (
    <div
      className={`modal-backdrop ${isConsultationOpen ? 'is-open' : ''}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeConsultation();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-modal-title"
      aria-hidden={!isConsultationOpen}
    >
      <div className="modal-dialog">
        <button
          type="button"
          className="modal-close-btn"
          onClick={closeConsultation}
          aria-label="Close consultation modal"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <div style={{ marginBottom: '24px' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-teal)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Academic Consultation
          </span>
          <h3 id="consultation-modal-title" style={{ fontSize: '1.45rem', marginTop: '4px', marginBottom: '8px' }}>
            Schedule a Research Consultation
          </h3>
          <p style={{ fontSize: '0.92rem', color: 'var(--color-ink-soft)', lineHeight: '1.5', margin: 0 }}>
            Share your research stage or manuscript scope. An academic coordinator will review your requirements and provide a milestone roadmap.
          </p>
        </div>

        <ConsultationForm
          initialService={selectedService}
          compact={true}
          onSuccessClose={closeConsultation}
        />
      </div>
    </div>
  );
};
