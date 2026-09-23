import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services';
import { journalArticlesData } from '../data/articles';
import { CtaBanner } from '../components/sections/CtaBanner';

export const Sitemap: React.FC = () => {
  return (
    <div className="page-sitemap">
      {/* Hero Header */}
      <section className="editorial-hero" aria-label="Sitemap Overview">
        <div className="site-container">
          <div style={{ maxWidth: '820px' }}>
            <span className="hero-eyebrow">Navigation Index</span>
            <h1 className="hero-title">Website Sitemap</h1>
            <p className="hero-lead">
              A complete structured index of all pages, specialized medical writing divisions, research articles, and compliance policies across MedZen Writes.
            </p>
          </div>
        </div>
      </section>

      {/* Main Sitemap Directory */}
      <section className="editorial-section section-bg-white" aria-labelledby="sitemap-heading">
        <div className="site-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {/* Column 1: Main Pages */}
            <div style={{ background: 'var(--color-paper)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-line)' }}>
              <h2 id="sitemap-heading" style={{ fontSize: '1.2rem', color: 'var(--color-teal-dark)', marginBottom: '14px', borderBottom: '1px solid var(--color-line)', paddingBottom: '8px' }}>
                Primary Pages
              </h2>
              <ul className="footer-links-list" style={{ listStyle: 'none', padding: 0 }}>
                <li><Link to="/" className="editorial-link">Home</Link></li>
                <li><Link to="/about" className="editorial-link">About MedZen Writes</Link></li>
                <li><Link to="/services" className="editorial-link">All Services Directory</Link></li>
                <li><Link to="/publications" className="editorial-link">Publications Portfolio</Link></li>
                <li><Link to="/testimonials" className="editorial-link">Doctor Reviews &amp; Testimonials</Link></li>
                <li><Link to="/journal" className="editorial-link">Medical Research Journal</Link></li>
                <li><Link to="/contact" className="editorial-link">Contact &amp; Location</Link></li>
              </ul>
            </div>

            {/* Column 2: 9 Specialty Services */}
            <div style={{ background: 'var(--color-paper)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-line)' }}>
              <h2 style={{ fontSize: '1.2rem', color: 'var(--color-teal-dark)', marginBottom: '14px', borderBottom: '1px solid var(--color-line)', paddingBottom: '8px' }}>
                Specialized Services (9)
              </h2>
              <ul className="footer-links-list" style={{ listStyle: 'none', padding: 0 }}>
                {servicesData.map((s) => (
                  <li key={s.id}>
                    <Link to={`/services/${s.slug}`} className="editorial-link">
                      {s.number}. {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Journal Guides & Legal */}
            <div style={{ background: 'var(--color-paper)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-line)' }}>
              <h2 style={{ fontSize: '1.2rem', color: 'var(--color-teal-dark)', marginBottom: '14px', borderBottom: '1px solid var(--color-line)', paddingBottom: '8px' }}>
                Legal &amp; Compliance Policies
              </h2>
              <ul className="footer-links-list" style={{ listStyle: 'none', padding: 0, marginBottom: '20px' }}>
                <li><Link to="/privacy-policy" className="editorial-link">Privacy Policy</Link></li>
                <li><Link to="/terms-conditions" className="editorial-link">Terms &amp; Conditions</Link></li>
                <li><Link to="/refund-policy" className="editorial-link">Refund &amp; Cancellation Policy</Link></li>
                <li><Link to="/shipping-policy" className="editorial-link">Shipping &amp; Digital Delivery Policy</Link></li>
              </ul>

              <h2 style={{ fontSize: '1.2rem', color: 'var(--color-teal-dark)', marginBottom: '14px', borderBottom: '1px solid var(--color-line)', paddingBottom: '8px' }}>
                Featured Research Guides
              </h2>
              <ul className="footer-links-list" style={{ listStyle: 'none', padding: 0 }}>
                {journalArticlesData.map((a) => (
                  <li key={a.id}>
                    <Link to={`/journal/${a.slug}`} className="editorial-link">
                      {a.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
};
