import React from 'react';
import { Link } from 'react-router-dom';
import { companyData } from '../../data/company';
import { servicesData } from '../../data/services';

export const SiteFooter: React.FC = () => {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="site-container">
        <div className="footer-top-grid">
          {/* Column 1: Brand & Disclaimer */}
          <div>
            <Link to="/" title="MedZen Writes">
              <img
                src="/assets/images/medzen-writes-logo.png"
                alt="MedZen Writes"
                style={{ height: '38px', width: 'auto', marginBottom: '16px' }}
              />
            </Link>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.72)', lineHeight: '1.6', marginBottom: '20px' }}>
              Specialized academic medical writing, biostatistical analysis, and journal manuscript consultancy for postgraduate residents, clinicians, and biomedical researchers.
            </p>
            <p style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.55)', lineHeight: '1.5' }}>
              {companyData.division}
            </p>
          </div>

          {/* Column 2: Core Services */}
          <div>
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links-list">
              {servicesData.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <Link to={`/services/${s.slug}`} className="footer-link">
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="footer-link" style={{ color: 'var(--color-mint)' }}>
                  View All 9 Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation & Evidence */}
          <div>
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/about" className="footer-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/publications" className="footer-link">
                  Publications Portfolio
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="footer-link">
                  Doctor Reviews
                </Link>
              </li>
              <li>
                <Link to="/journal" className="footer-link">
                  Research Journal
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  Contact &amp; Address
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div>
            <h4 className="footer-heading">Consultation Office</h4>
            <p style={{ fontSize: '0.88rem', color: 'rgba(255, 255, 255, 0.72)', lineHeight: '1.55', marginBottom: '12px' }}>
              {companyData.address.line1}, {companyData.address.locality}, {companyData.address.city}, {companyData.address.state} – {companyData.address.pincode}
            </p>
            <p style={{ fontSize: '0.88rem', color: 'rgba(255, 255, 255, 0.72)', marginBottom: '8px' }}>
              <strong>Email:</strong> <a href={`mailto:${companyData.email}`} style={{ color: 'var(--color-mint)' }}>{companyData.email}</a>
            </p>
            <p style={{ fontSize: '0.88rem', color: 'rgba(255, 255, 255, 0.72)', marginBottom: '16px' }}>
              <strong>Phone:</strong> <a href={`tel:${companyData.phone}`} style={{ color: 'var(--color-mint)' }}>{companyData.phoneDisplay}</a>
            </p>
            <p style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.55)' }}>
              {companyData.workingHours}
            </p>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="footer-bottom-bar">
          <div>
            © {new Date().getFullYear()} {companyData.name}. All rights reserved. Operating in compliance with ICMJE and COPE academic standards.
          </div>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <Link to="/privacy-policy" className="footer-link" style={{ fontSize: '0.84rem' }}>
              Privacy Policy
            </Link>
            <Link to="/terms-conditions" className="footer-link" style={{ fontSize: '0.84rem' }}>
              Terms &amp; Conditions
            </Link>
            <Link to="/refund-policy" className="footer-link" style={{ fontSize: '0.84rem' }}>
              Refund Policy
            </Link>
            <Link to="/shipping-policy" className="footer-link" style={{ fontSize: '0.84rem' }}>
              Shipping Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
