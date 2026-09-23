import React from 'react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href="https://wa.me/919176365161?text=Hi%20MedZen%20Writes,%20I%20would%20like%20to%20inquire%20about%20medical%20research%20and%20thesis%20writing%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp-btn"
      aria-label="Chat with MedZen Writes on WhatsApp"
    >
      <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>
        chat
      </span>
      <span>WhatsApp Us</span>
    </a>
  );
};
