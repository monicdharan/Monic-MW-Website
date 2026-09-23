import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose, onOpenConsultation }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  return (
    <div
      id="mobile-navigation-drawer"
      className={`mobile-drawer-backdrop ${isOpen ? 'is-open' : ''}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
    >
      <div className="mobile-drawer-panel">
        <div className="mobile-drawer-header">
          <img
            src="/assets/images/medzen-writes-logo-dark.png"
            alt="MedZen Writes"
            style={{ height: '32px', width: 'auto' }}
          />
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close navigation menu"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <nav className="mobile-drawer-links" aria-label="Mobile Menu Links">
          <NavLink to="/" className="mobile-drawer-link" onClick={onClose} end>
            Home
          </NavLink>
          <NavLink to="/about" className="mobile-drawer-link" onClick={onClose}>
            About MedZen Writes
          </NavLink>
          <NavLink to="/services" className="mobile-drawer-link" onClick={onClose}>
            Services (9 Specialties)
          </NavLink>
          <NavLink to="/publications" className="mobile-drawer-link" onClick={onClose}>
            Publications Portfolio
          </NavLink>
          <NavLink to="/testimonials" className="mobile-drawer-link" onClick={onClose}>
            Doctor Reviews &amp; Testimonials
          </NavLink>
          <NavLink to="/journal" className="mobile-drawer-link" onClick={onClose}>
            Research Journal
          </NavLink>
          <NavLink to="/contact" className="mobile-drawer-link" onClick={onClose}>
            Contact &amp; Location
          </NavLink>
        </nav>

        <div style={{ marginTop: 'auto', paddingTop: '24px' }}>
          <button
            type="button"
            className="btn btn-mint"
            style={{ width: '100%' }}
            onClick={onOpenConsultation}
          >
            Book a consultation
          </button>
        </div>
      </div>
    </div>
  );
};
