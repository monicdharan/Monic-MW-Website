import React from 'react';
import { Button } from '../components/buttons/Button';


export const NotFound: React.FC = () => {
  return (
    <div className="page-not-found" style={{ padding: '100px 0', textAlign: 'center' }}>
      <div className="site-container" style={{ maxWidth: '600px' }}>
        <span style={{ fontFamily: 'var(--font-serif)', fontSize: '4rem', fontWeight: 700, color: 'var(--color-teal)' }}>
          404
        </span>
        <h1 style={{ fontSize: '2rem', marginBottom: '14px' }}>Page Not Found</h1>
        <p style={{ fontSize: '1rem', color: 'var(--color-ink-soft)', lineHeight: '1.6', marginBottom: '32px' }}>
          The medical research page or academic document you are looking for may have been moved or updated.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
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
