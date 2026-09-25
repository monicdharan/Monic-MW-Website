import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useModal } from '../../context/ModalContext';
import { MobileDrawer } from './MobileDrawer';

export const SiteHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { openConsultation } = useModal();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`} role="banner">
        <div className="site-container">
          <div className="header-inner">
            <Link to="/" className="header-brand" title="MedZen Writes - Medical Research Consultancy">
              <img
                src="/assets/images/medzen-writes-logo.png"
                alt="MedZen Writes"
                className="header-brand-logo"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="desktop-nav" aria-label="Main Navigation">
              <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Home
              </NavLink>
              <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                About
              </NavLink>
              <NavLink to="/services" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Services
              </NavLink>
              <NavLink to="/publications" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Publications
              </NavLink>
              <NavLink to="/testimonials" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Testimonials
              </NavLink>
              <NavLink to="/journal" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Blog
              </NavLink>
              <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Contact
              </NavLink>
            </nav>

            {/* Header Action Button */}
            <div className="header-actions">
              <button
                type="button"
                className="btn btn-white btn-sm"
                onClick={() => openConsultation()}
                aria-label="Book a consultation"
              >
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                  calendar_month
                </span>
                <span>Book Consultation</span>
              </button>

              <button
                type="button"
                className="mobile-menu-toggle"
                onClick={() => setIsMobileOpen(true)}
                aria-label="Open Navigation Menu"
                aria-expanded={isMobileOpen}
                aria-controls="mobile-navigation-drawer"
              >
                <span className="material-symbols-outlined">menu</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileDrawer
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        onOpenConsultation={() => {
          setIsMobileOpen(false);
          openConsultation();
        }}
      />
    </>
  );
};
