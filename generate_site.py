import os

base_dir = os.path.dirname(os.path.abspath(__file__))

def get_header(current_page="", is_subpage=False):
    prefix = "../" if is_subpage else ""
    
    # Active states
    home_active = "active" if current_page == "home" else ""
    about_active = "active" if current_page == "about" else ""
    services_active = "active" if current_page == "services" or is_subpage else ""
    pub_active = "active" if current_page == "publications" else ""
    test_active = "active" if current_page == "testimonials" else ""
    blog_active = "active" if current_page == "blog" else ""
    contact_active = "active" if current_page == "contact" else ""

    return f"""
  <!-- Site Navigation Bar (Novadent Deep Oceanic Teal Header) -->
  <header class="site-navbar" role="banner">
    <div class="container nav-container">
      <a href="{prefix}index.html" class="site-logo" title="MedZen Writes - Medical Research & Thesis Writing Services">
        <img src="{prefix}assets/images/medzen-writes-logo.png" alt="MedZen Writes Logo" class="brand-logo-img">
      </a>

      <nav class="nav-menu" role="navigation" aria-label="Main Navigation">
        <li class="nav-item">
          <a href="{prefix}index.html" class="nav-link {home_active}">Home</a>
        </li>
        <li class="nav-item">
          <a href="{prefix}about.html" class="nav-link {about_active}">About</a>
        </li>
        <li class="nav-item">
          <a href="{prefix}services.html" class="nav-link {services_active}">
            Services
            <span class="material-symbols-outlined dropdown-arrow">expand_more</span>
          </a>
          <ul class="nav-dropdown" aria-label="Services Submenu">
            <li><a href="{prefix}services/original-research.html" class="dropdown-link"><span class="material-symbols-outlined">menu_book</span> Original Research Articles</a></li>
            <li><a href="{prefix}services/systematic-review.html" class="dropdown-link"><span class="material-symbols-outlined">join_inner</span> Systematic Review &amp; Meta-Analysis</a></li>
            <li><a href="{prefix}services/case-report.html" class="dropdown-link"><span class="material-symbols-outlined">medical_services</span> Medical Case Reports</a></li>
            <li><a href="{prefix}services/thesis.html" class="dropdown-link"><span class="material-symbols-outlined">fact_check</span> Thesis &amp; Dissertation Writing</a></li>
            <li><a href="{prefix}services/statistical-analysis.html" class="dropdown-link"><span class="material-symbols-outlined">bar_chart</span> Medical Statistical Analysis</a></li>
            <li><a href="{prefix}services/review-article.html" class="dropdown-link"><span class="material-symbols-outlined">science</span> Narrative &amp; Scoping Reviews</a></li>
            <li><a href="{prefix}services/protocol.html" class="dropdown-link"><span class="material-symbols-outlined">checklist</span> Research Protocols &amp; Synopsis</a></li>
            <li><a href="{prefix}services/thesis-to-manuscript.html" class="dropdown-link"><span class="material-symbols-outlined">swap_horiz</span> Thesis to Manuscript</a></li>
            <li><a href="{prefix}services/abstract-poster.html" class="dropdown-link"><span class="material-symbols-outlined">hub</span> Abstract &amp; E-Poster</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a href="{prefix}publications.html" class="nav-link {pub_active}">Publications</a>
        </li>
        <li class="nav-item">
          <a href="{prefix}testimonials.html" class="nav-link {test_active}">Testimonials</a>
        </li>
        <li class="nav-item">
          <a href="{prefix}blog.html" class="nav-link {blog_active}">Blog</a>
        </li>
        <li class="nav-item">
          <a href="{prefix}contact.html" class="nav-link {contact_active}">Contact</a>
        </li>
      </nav>

      <div class="nav-actions">
        <button type="button" class="btn btn-mint btn-sm" data-modal-target="consultationModal">
          <span class="material-symbols-outlined" style="font-size: 18px;">calendar_month</span>
          <span>Book Consultation</span>
        </button>
        <button type="button" class="mobile-toggle" aria-label="Open Navigation Menu">
          <span class="material-symbols-outlined" style="font-size: 30px;">menu</span>
        </button>
      </div>
    </div>
  </header>

  <!-- Mobile Drawer -->
  <div class="mobile-nav-drawer" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
    <div class="mobile-nav-header">
      <a href="{prefix}index.html" class="site-logo" title="MedZen Writes">
        <img src="{prefix}assets/images/medzen-writes-logo-dark.png" alt="MedZen Writes Logo" class="brand-logo-img">
      </a>
      <button class="mobile-drawer-close" aria-label="Close Navigation" style="background: none; border: none; cursor: pointer;">
        <span class="material-symbols-outlined" style="font-size: 26px;">close</span>
      </button>
    </div>
    <ul class="mobile-nav-links">
      <li><a href="{prefix}index.html">Home</a></li>
      <li><a href="{prefix}about.html">About MedZen Writes</a></li>
      <li><a href="{prefix}services.html">All Services (9 Specialties)</a></li>
      <li><a href="{prefix}publications.html">Publications Portfolio</a></li>
      <li><a href="{prefix}testimonials.html">Doctor Reviews &amp; Testimonials</a></li>
      <li><a href="{prefix}blog.html">Medical Thesis &amp; Research Blog</a></li>
      <li><a href="{prefix}contact.html">Contact Us</a></li>
    </ul>
    <div style="margin-top: auto; padding-top: 20px; border-top: 1px solid var(--border-subtle);">
      <button type="button" class="btn btn-mint" style="width: 100%;" data-modal-target="consultationModal">
        <span class="material-symbols-outlined">calendar_month</span>
        <span>Book Consultation</span>
      </button>
    </div>
  </div>
"""

def get_footer(is_subpage=False):
    prefix = "../" if is_subpage else ""
    return f"""
  <!-- Site-Wide Clean Deep Teal Footer -->
  <footer class="site-footer" role="contentinfo">
    <div class="container">
      <div class="footer-top-grid">
        <div class="footer-brand">
          <a href="{prefix}index.html" class="site-logo" title="MedZen Writes">
            <img src="{prefix}assets/images/medzen-writes-logo.png" alt="MedZen Writes Logo" class="brand-logo-img">
          </a>
          <p style="margin-top: 14px; font-size: 0.92rem; line-height: 1.6; color: rgba(255, 255, 255, 0.75); max-width: 320px;">
            Publishing isn't just an academic milestone — it's a gateway to global recognition, clinical impact, and career advancement.
          </p>
          <div class="social-links">
            <a href="https://linkedin.com/company/medzen-writes" target="_blank" rel="noopener noreferrer" class="social-icon-btn" aria-label="MedZen Writes LinkedIn" title="LinkedIn">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="https://instagram.com/medzenwrites" target="_blank" rel="noopener noreferrer" class="social-icon-btn" aria-label="MedZen Writes Instagram" title="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://facebook.com/medzenwrites" target="_blank" rel="noopener noreferrer" class="social-icon-btn" aria-label="MedZen Writes Facebook" title="Facebook">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="mailto:info@medzeninnovations.in" class="social-icon-btn" aria-label="Email MedZen Writes" title="Email Us">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
            </a>
          </div>
        </div>

        <div>
          <h4 class="footer-heading">Services</h4>
          <ul class="footer-links">
            <li><a href="{prefix}services/original-research.html">Original Research</a></li>
            <li><a href="{prefix}services/systematic-review.html">Systematic Reviews</a></li>
            <li><a href="{prefix}services/thesis.html">Thesis &amp; Dissertations</a></li>
            <li><a href="{prefix}services/statistical-analysis.html">Biostatistics (SPSS/R)</a></li>
            <li><a href="{prefix}services/case-report.html">Case Reports</a></li>
            <li><a href="{prefix}services/abstract-poster.html">Abstract &amp; E-Poster</a></li>
          </ul>
        </div>

        <div>
          <h4 class="footer-heading">Company</h4>
          <ul class="footer-links">
            <li><a href="{prefix}about.html">About Us</a></li>
            <li><a href="{prefix}services.html">All Services</a></li>
            <li><a href="{prefix}publications.html">Publications Portfolio</a></li>
            <li><a href="{prefix}testimonials.html">Doctor Testimonials</a></li>
            <li><a href="{prefix}blog.html">Medical Research Blog</a></li>
            <li><a href="{prefix}contact.html">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 class="footer-heading">Contact Info</h4>
          <div class="footer-contact-item">
            <span class="material-symbols-outlined">location_on</span>
            <span>Old No. 56 / New No. 125, Venkatachalam St, Royapettah, Chennai – 600014</span>
          </div>
          <div class="footer-contact-item">
            <span class="material-symbols-outlined">call</span>
            <a href="tel:+919176365161">+91 91763 65161</a>
          </div>
          <div class="footer-contact-item">
            <span class="material-symbols-outlined">mail</span>
            <a href="mailto:info@medzeninnovations.in">info@medzeninnovations.in</a>
          </div>
          <div class="footer-contact-item">
            <span class="material-symbols-outlined">schedule</span>
            <span>Mon–Fri: 9:00 AM – 6:00 PM</span>
          </div>
        </div>

        <div style="display: flex; align-items: flex-end; justify-content: flex-end;">
          <button type="button" class="back-to-top-btn" id="backToTopBtn" aria-label="Back to top">
            <span class="material-symbols-outlined">arrow_upward</span>
          </button>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2026 MedZen Writes. A unit of MedZen Innovations Pvt. Ltd. All rights reserved.</p>
        <div class="footer-legal-links">
          <a href="{prefix}privacy-policy.html">Privacy Policy</a>
          <a href="{prefix}refund-policy.html">Refund Policy</a>
          <a href="{prefix}terms-conditions.html">Terms &amp; Conditions</a>
          <a href="{prefix}shipping-policy.html">Shipping Policy</a>
          <a href="{prefix}sitemap.xml">Sitemap</a>
        </div>
      </div>
    </div>
  </footer>

  <!-- Floating WhatsApp CTA -->
  <a href="https://wa.me/919176365161?text=Hello%20MedZen%20Writes%20Team%2C%20I%20would%20like%20to%20inquire%20about%20your%20medical%20research%20and%20thesis%20writing%20services." target="_blank" rel="noopener noreferrer" class="whatsapp-float" aria-label="Contact MedZen Writes on WhatsApp">
    <svg class="whatsapp-logo-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M12.011 2.017C6.49 2.017 2.017 6.49 2.017 12.011c0 1.768.461 3.489 1.338 5.008L2 22l5.127-1.345c1.472.803 3.136 1.226 4.884 1.226 5.52 0 9.993-4.473 9.993-9.993 0-5.52-4.473-9.993-9.993-9.993zm5.836 14.167c-.244.685-1.42 1.31-1.954 1.37-.506.057-1.155.082-3.327-.812-2.776-1.144-4.567-3.957-4.706-4.143-.139-.185-1.127-1.498-1.127-2.857 0-1.359.71-2.028.963-2.302.253-.274.552-.343.736-.343.184 0 .368.002.529.01.171.008.4-.065.626.478.233.56.797 1.942.866 2.083.069.141.115.306.023.49-.092.184-.138.298-.276.46-.138.161-.29.36-.414.483-.138.138-.282.288-.121.564.161.276.716 1.18 1.539 1.913 1.059.943 1.952 1.235 2.228 1.373.276.138.437.115.598-.069.161-.184.69-.805.874-1.081.184-.276.368-.23.621-.138.253.092 1.61.759 1.886.897.276.138.46.207.529.322.069.115.069.667-.175 1.352z"/></svg>
    <span>WhatsApp Us</span>
  </a>

  <!-- Consultation Booking Modal -->
  <div class="modal-backdrop" id="consultationModal" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
    <div class="modal-dialog">
      <button type="button" class="modal-close" data-modal-close aria-label="Close modal">
        <span class="material-symbols-outlined">close</span>
      </button>
      <div style="text-align: center; margin-bottom: 24px;">
        <span class="eyebrow-badge eyebrow-badge-mint"><span class="material-symbols-outlined">calendar_month</span> Free Consultation</span>
        <h3 id="modalTitle" style="color: var(--text-headline); margin-top: 8px;">Book Your Medical Writing Consultation</h3>
        <p style="color: var(--text-muted); font-size: 0.95rem;">Speak directly with our academic coordinators about your research, thesis, or manuscript publication needs.</p>
      </div>
      <form class="contact-form-handler">
        <div class="form-group">
          <label class="form-label" for="mName">Full Name *</label>
          <input type="text" id="mName" class="form-control" placeholder="Dr. / Researcher Name" required>
        </div>
        <div class="grid grid-2" style="gap: 16px; margin-bottom: 16px;">
          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="mEmail">Email Address *</label>
            <input type="email" id="mEmail" class="form-control" placeholder="doctor@hospital.edu" required>
          </div>
          <div class="form-group" style="margin: 0;">
            <label class="form-label" for="mPhone">Phone Number *</label>
            <input type="tel" id="mPhone" class="form-control" placeholder="+91 98765 43210" required>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label" for="mService">Select Service Requirement *</label>
          <select id="mService" class="form-control" required>
            <option value="">-- Choose Medical Writing Service --</option>
            <option value="Thesis Writing">PG Medical Thesis / Dissertation Writing</option>
            <option value="Original Research Article">Original Research Article (IMRaD Format)</option>
            <option value="Systematic Review & Meta-Analysis">Systematic Review &amp; Meta-Analysis (PRISMA)</option>
            <option value="Statistical Analysis">Biostatistical Analysis (SPSS, R, STATA)</option>
            <option value="Medical Case Report">Medical Case Report (CARE Guidelines)</option>
            <option value="Thesis to Manuscript">Thesis to Journal Manuscript Conversion</option>
            <option value="Research Protocol">Research Protocol &amp; Synopsis Writing</option>
            <option value="Narrative Review Article">Narrative / Review Article (SANRA Standard)</option>
            <option value="Abstract & E-Poster">Conference Abstract &amp; E-Poster Design</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label" for="mNotes">Brief Research Scope / Department</label>
          <textarea id="mNotes" class="form-control" rows="3" placeholder="E.g. MD General Medicine thesis, Cardiology systematic review, etc."></textarea>
        </div>
        <button type="submit" class="btn btn-mint" style="width: 100%;">
          <span class="material-symbols-outlined">send</span>
          <span>Submit Consultation Request</span>
        </button>
      </form>
    </div>
  </div>

  <!-- Lead Magnet Modal: PG Thesis Checklist -->
  <div class="modal-backdrop" id="checklistModal" role="dialog" aria-modal="true" aria-labelledby="checklistTitle">
    <div class="modal-dialog">
      <button type="button" class="modal-close" data-modal-close aria-label="Close modal">
        <span class="material-symbols-outlined">close</span>
      </button>
      <div style="text-align: center; margin-bottom: 20px;">
        <span class="eyebrow-badge eyebrow-badge-mint"><span class="material-symbols-outlined">download</span> Free Academic Resource</span>
        <h3 id="checklistTitle" style="color: var(--text-headline); margin-top: 8px;">Download the Complete PG Thesis Checklist</h3>
        <p style="color: var(--text-muted); font-size: 0.95rem;">A step-by-step master checklist covering protocol preparation, ethics submission, data collection, statistics, and university guidelines.</p>
      </div>
      <form id="checklist-form">
        <div class="form-group">
          <label class="form-label" for="clName">Your Name *</label>
          <input type="text" id="clName" class="form-control" placeholder="Dr. Full Name" required>
        </div>
        <div class="form-group">
          <label class="form-label" for="clEmail">Your Work/Personal Email *</label>
          <input type="email" id="clEmail" class="form-control" placeholder="yourname@gmail.com" required>
        </div>
        <div class="form-group">
          <label class="form-label" for="clSpecialty">Medical Specialty / Department</label>
          <input type="text" id="clSpecialty" class="form-control" placeholder="e.g., Pediatrics, Radiology, General Surgery">
        </div>
        <button type="submit" class="btn btn-mint" style="width: 100%;">
          <span class="material-symbols-outlined">download</span>
          <span>Get Instant Download Link</span>
        </button>
      </form>
    </div>
  </div>

  <!-- Google Reviews Lightbox Modal -->
  <div id="reviewLightboxModal" class="modal-backdrop review-lightbox-backdrop" role="dialog" aria-modal="true" aria-label="Review Screenshot" onclick="if(event.target===this)closeReviewLightbox()">
    <div class="review-lightbox-container">
      <button type="button" class="review-lightbox-close" onclick="closeReviewLightbox()" aria-label="Close modal">
        <span class="material-symbols-outlined">close</span>
      </button>
      <div class="review-lightbox-content">
        <img id="reviewLightboxImg" src="" alt="Google Review Full Screenshot">
        <p id="reviewLightboxCaption" class="review-lightbox-caption"></p>
      </div>
    </div>
  </div>

  <!-- Shared JavaScript -->
  <script src="{prefix}js/main.js"></script>
"""

def get_base_meta(title, description, canonical_url, is_subpage=False):
    prefix = "../" if is_subpage else ""
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title}</title>
  <meta name="description" content="{description}">
  <meta name="keywords" content="medical research paper publication services, medical thesis writing services, PG thesis writing help, medical manuscript writing India, biostatistical analysis SPSS, systematic review meta-analysis PRISMA, MedZen Writes">
  <meta name="author" content="MedZen Writes — Unit of MedZen Innovations Pvt. Ltd.">
  <link rel="canonical" href="https://medzenwrites.in/{canonical_url}">

  <!-- Open Graph / Facebook / LinkedIn -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://medzenwrites.in/{canonical_url}">
  <meta property="og:title" content="{title}">
  <meta property="og:description" content="{description}">
  <meta property="og:image" content="https://medzenwrites.in/assets/images/hero_doctor.jpg">
  <meta property="og:site_name" content="MedZen Writes">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="{title}">
  <meta name="twitter:description" content="{description}">
  <meta name="twitter:image" content="https://medzenwrites.in/assets/images/hero_doctor.jpg">

  <!-- Google Fonts & Icons -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200">

  <!-- Stylesheets -->
  <link rel="stylesheet" href="{prefix}css/style.css">
  <link rel="stylesheet" href="{prefix}css/components.css">
  <link rel="stylesheet" href="{prefix}css/animations.css">

  <!-- Theme color -->
  <meta name="theme-color" content="#004E57">
"""
