import React from 'react';
import { Button } from '../components/buttons/Button';


export const NotFound: React.FC = () => {
  return (
    <div className="page-not-found" style={{ padding: '48px 0', textAlign: 'center' }}>
      <div className="site-container" style={{ maxWidth: '600px' }}>
        <span style={{ fontFamily: 'var(--font-family-heading)', fontSize: '3.2rem', fontWeight: 800, color: 'var(--color-teal)' }}>
          404
        </span>
        <h1 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>Page Not Found</h1>
        <p style={{ fontSize: '0.94rem', color: 'var(--color-ink-soft)', lineHeight: '1.55', marginBottom: '20px' }}>
          The medical research page or publication resource you are looking for may have been moved or updated.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
          <Button variant="primary" to="/">
            Return to Homepage
          </Button>
          <Button variant="secondary" to="/services">
            Explore Services
          </Button>
        </div>
      </div>
    </div>
  );
};
