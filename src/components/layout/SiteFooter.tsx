import React from 'react';
import { Link } from 'react-router-dom';
import { companyData } from '../../data/company';
import { servicesData } from '../../data/services';

export const SiteFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="site-container">
        <div className="footer-top-grid">
          {/* Column 1: Brand & Social */}
          <div>
            <Link to="/" title="MedZen Writes">
              <img
                src="/assets/images/medzen-writes-logo.png"
                alt="MedZen Writes"
                style={{ height: '38px', width: 'auto', marginBottom: '18px' }}
              />
            </Link>
            <p style={{ fontSize: '0.92rem', color: 'rgba(255, 255, 255, 0.78)', lineHeight: '1.65', marginBottom: '22px' }}>
              Publishing isn't just an academic milestone — it's a gateway to global recognition, clinical impact, and career advancement.
            </p>
            <div className="footer-social-row" style={{ display: 'flex', gap: '10px' }}>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="LinkedIn"
              >
                <span>in</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="Instagram"
              >
                <span>ig</span>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="Facebook"
              >
                <span>fb</span>
              </a>
              <a
                href={`mailto:${companyData.email}`}
                className="footer-social-btn"
                aria-label="Email Us"
              >
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>mail</span>
              </a>
            </div>
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
            </ul>
          </div>

          {/* Column 3: Company Links */}
          <div>
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/about" className="footer-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link">
                  All Services
                </Link>
              </li>
              <li>
                <Link to="/publications" className="footer-link">
                  Publications Portfolio
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="footer-link">
                  Doctor Testimonials
                </Link>
              </li>
              <li>
                <Link to="/journal" className="footer-link">
                  Medical Research Blog
                </Link>
              </li>
              <li>
                <a href="#faq" className="footer-link">
                  FAQ &amp; Support
                </a>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div style={{ position: 'relative' }}>
            <h4 className="footer-heading">Contact Info</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.88rem', color: 'rgba(255, 255, 255, 0.78)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '18px', color: 'var(--mint-primary)', marginTop: '2px' }}>location_on</span>
                <span>{companyData.address.line1}, {companyData.address.locality}, {companyData.address.city} {companyData.address.pincode}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '18px', color: 'var(--mint-primary)' }}>call</span>
                <a href={`tel:${companyData.phone}`} style={{ color: 'rgba(255, 255, 255, 0.88)' }}>{companyData.phoneDisplay}</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '18px', color: 'var(--mint-primary)' }}>mail</span>
                <a href={`mailto:${companyData.email}`} style={{ color: 'rgba(255, 255, 255, 0.88)' }}>{companyData.email}</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '18px', color: 'var(--mint-primary)' }}>schedule</span>
                <span>{companyData.workingHours}</span>
              </div>
            </div>

            {/* Scroll To Top Button */}
            <button
              type="button"
              className="footer-scroll-top-btn"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
            >
              <span className="material-symbols-outlined">arrow_upward</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="footer-bottom-bar">
          <div>
            © {new Date().getFullYear()} MedZen Writes. A unit of MedZen Innovations Pvt. Ltd. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <Link to="/privacy-policy" className="footer-link" style={{ fontSize: '0.84rem' }}>
              Privacy Policy
            </Link>
            <Link to="/refund-policy" className="footer-link" style={{ fontSize: '0.84rem' }}>
              Refund Policy
            </Link>
            <Link to="/terms-conditions" className="footer-link" style={{ fontSize: '0.84rem' }}>
              Terms &amp; Conditions
            </Link>
            <Link to="/shipping-policy" className="footer-link" style={{ fontSize: '0.84rem' }}>
              Shipping Policy
            </Link>
            <Link to="/sitemap" className="footer-link" style={{ fontSize: '0.84rem' }}>
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
