import React, { useState, useEffect } from 'react';
import { servicesData } from '../../data/services';

interface ConsultationFormProps {
  initialService?: string;
  onSuccessClose?: () => void;
  compact?: boolean;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  specialty: string;
  requiredService: string;
  researchScope: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  specialty?: string;
  requiredService?: string;
  researchScope?: string;
}

export const ConsultationForm: React.FC<ConsultationFormProps> = ({
  initialService = '',
  compact = false,
}) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    specialty: '',
    requiredService: initialService || servicesData[0].title,
    researchScope: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, requiredService: initialService }));
    }
  }, [initialService]);

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Please enter your contact phone number.';
    } else if (formData.phone.trim().length < 8) {
      errs.phone = 'Please enter a valid telephone number with country/STD code.';
    }

    if (!formData.specialty.trim()) {
      errs.specialty = 'Please enter your medical department or clinical specialty.';
    }

    if (!formData.requiredService) {
      errs.requiredService = 'Please select a required service.';
    }

    if (!formData.researchScope.trim()) {
      errs.researchScope = 'Please describe your study type, dataset status, or submission deadline.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable consultation request dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  if (isSubmitted) {
    return (
      <div className="form-success-banner" role="alert" aria-live="polite">
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          <span className="material-symbols-outlined" style={{ color: 'var(--color-teal)', fontSize: '28px' }}>
            check_circle
          </span>
          <h3 style={{ fontSize: '1.25rem', color: 'var(--color-teal-dark)', margin: 0 }}>
            Consultation Request Received
          </h3>
        </div>
        <p style={{ fontSize: '0.94rem', color: 'var(--color-ink-soft)', lineHeight: '1.6', marginBottom: '14px' }}>
          Thank you, <strong>{formData.fullName}</strong>. Our editorial coordinators have received your inquiry regarding <strong>{formData.requiredService}</strong> ({formData.specialty}).
        </p>
        <p style={{ fontSize: '0.88rem', color: 'var(--color-ink-soft)', lineHeight: '1.5', margin: 0 }}>
          An editorial consultant will review your research scope and contact you at <strong>{formData.email}</strong> or <strong>{formData.phone}</strong> within 12 business hours with a structured roadmap.
        </p>
      </div>
    );
  }

  return (
    <form className="editorial-form" onSubmit={handleSubmit} noValidate>
      {/* Full Name */}
      <div className="form-group">
        <label htmlFor="form-fullName" className="form-label">
          Full Name <span className="required-indicator">*</span>
        </label>
        <input
          id="form-fullName"
          type="text"
          className="form-input"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          placeholder="e.g., Dr. Ananya Sharma"
          autoComplete="name"
          aria-required="true"
          aria-invalid={!!errors.fullName}
          aria-describedby={errors.fullName ? 'error-fullName' : undefined}
        />
        {errors.fullName && (
          <span id="error-fullName" className="form-error-msg" role="alert">
            {errors.fullName}
          </span>
        )}
      </div>

      {/* Row: Email & Phone */}
      <div className={compact ? '' : 'form-row-2col'}>
        <div className="form-group">
          <label htmlFor="form-email" className="form-label">
            Email Address <span className="required-indicator">*</span>
          </label>
          <input
            id="form-email"
            type="email"
            className="form-input"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="e.g., ananya.sharma@hospital.org"
            autoComplete="email"
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'error-email' : undefined}
          />
          {errors.email && (
            <span id="error-email" className="form-error-msg" role="alert">
              {errors.email}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="form-phone" className="form-label">
            Phone / WhatsApp <span className="required-indicator">*</span>
          </label>
          <input
            id="form-phone"
            type="tel"
            className="form-input"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="e.g., +91 98765 43210"
            autoComplete="tel"
            aria-required="true"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'error-phone' : undefined}
          />
          {errors.phone && (
            <span id="error-phone" className="form-error-msg" role="alert">
              {errors.phone}
            </span>
          )}
        </div>
      </div>

      {/* Row: Specialty & Service */}
      <div className={compact ? '' : 'form-row-2col'}>
        <div className="form-group">
          <label htmlFor="form-specialty" className="form-label">
            Medical Specialty / Department <span className="required-indicator">*</span>
          </label>
          <input
            id="form-specialty"
            type="text"
            className="form-input"
            value={formData.specialty}
            onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
            placeholder="e.g., General Surgery / OBG / Cardiology"
            aria-required="true"
            aria-invalid={!!errors.specialty}
            aria-describedby={errors.specialty ? 'error-specialty' : undefined}
          />
          {errors.specialty && (
            <span id="error-specialty" className="form-error-msg" role="alert">
              {errors.specialty}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="form-service" className="form-label">
            Required Service <span className="required-indicator">*</span>
          </label>
          <select
            id="form-service"
            className="form-select"
            value={formData.requiredService}
            onChange={(e) => setFormData({ ...formData, requiredService: e.target.value })}
            aria-required="true"
          >
            {servicesData.map((s) => (
              <option key={s.id} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Research Scope */}
      <div className="form-group">
        <label htmlFor="form-researchScope" className="form-label">
          Brief Research Scope &amp; Current Stage <span className="required-indicator">*</span>
        </label>
        <textarea
          id="form-researchScope"
          rows={3}
          className="form-textarea"
          value={formData.researchScope}
          onChange={(e) => setFormData({ ...formData, researchScope: e.target.value })}
          placeholder="Please describe your study topic, current progress (e.g., data collected, draft ready, thesis revision), and any target submission deadlines."
          aria-required="true"
          aria-invalid={!!errors.researchScope}
          aria-describedby={errors.researchScope ? 'error-researchScope' : undefined}
        />
        {errors.researchScope && (
          <span id="error-researchScope" className="form-error-msg" role="alert">
            {errors.researchScope}
          </span>
        )}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap', marginTop: '6px' }}>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={isSubmitting}
          style={{ minWidth: '180px' }}
        >
          {isSubmitting ? (
            <span>Sending inquiry...</span>
          ) : (
            <>
              <span>Submit Consultation Request</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </>
          )}
        </button>

        <span style={{ fontSize: '0.8rem', color: 'var(--color-muted)' }}>
          🔒 Strictly confidential · NDA signed on request
        </span>
      </div>
    </form>
  );
};
