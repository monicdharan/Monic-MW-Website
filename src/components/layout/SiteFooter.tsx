import React from 'react';
import { Link } from 'react-router-dom';
import { useAdminData } from '../../context/AdminDataContext';
import { companyData } from '../../data/company';
import { servicesData } from '../../data/services';

export const SiteFooter: React.FC = () => {
  const { visualContent, getHeader } = useAdminData();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentPhone = visualContent.phone || companyData.phoneDisplay;
  const currentEmail = visualContent.email || companyData.email;

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
                style={{ height: '32px', width: 'auto', marginBottom: '10px' }}
              />
            </Link>
            <p style={{ fontSize: '0.86rem', color: 'rgba(255, 255, 255, 0.78)', lineHeight: '1.5', marginBottom: '12px' }}>
              {getHeader('footer-brand-blurb', "Publishing isn't just a research milestone — it's a gateway to global recognition, clinical impact, and career advancement.")}
            </p>
            <div className="footer-social-row" style={{ display: 'flex', gap: '10px' }}>
              <a
                href={companyData.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn footer-social-fb"
                aria-label="Facebook"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href={companyData.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn footer-social-ig"
                aria-label="Instagram"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                </svg>
              </a>
              <a
                href={companyData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn footer-social-in"
                aria-label="LinkedIn"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href={`https://wa.me/${companyData.phone.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn footer-social-wa"
                aria-label="WhatsApp"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
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
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.84rem', color: 'rgba(255, 255, 255, 0.78)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '16px', color: 'var(--mint-primary)', marginTop: '2px' }}>location_on</span>
                <span>{companyData.address.line1}, {companyData.address.locality}, {companyData.address.city} {companyData.address.pincode}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '16px', color: 'var(--mint-primary)' }}>call</span>
                <a href={`tel:${currentPhone.replace(/[^0-9+]/g, '')}`} style={{ color: 'rgba(255, 255, 255, 0.88)' }}>{currentPhone}</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '16px', color: 'var(--mint-primary)' }}>mail</span>
                <a href={`mailto:${currentEmail}`} style={{ color: 'rgba(255, 255, 255, 0.88)' }}>{currentEmail}</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '16px', color: 'var(--mint-primary)' }}>schedule</span>
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
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_upward</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="footer-bottom-bar">
          <div>
            © {new Date().getFullYear()} MedZen Writes. A unit of MedZen Innovations Pvt. Ltd. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
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
          </div>
        </div>
      </div>
    </footer>
  );
};
