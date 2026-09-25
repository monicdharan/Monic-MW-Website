import os
import generate_site as gs

base_dir = os.path.dirname(os.path.abspath(__file__))

# -----------------------------------------------------------------------------
# 5. PUBLICATIONS PAGE: publications.html
# -----------------------------------------------------------------------------
publications_html = f"""{gs.get_base_meta(
  title="Published Research Papers & Client Publications | MedZen Writes",
  description="See real research papers and theses published with MedZen Writes' medical research paper publication services — our client publication portfolio.",
  canonical_url="publications"
)}
  <script type="application/ld+json">
  {{
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Medical Research Publications Portfolio",
    "description": "Explore our portfolio of research and client publications delivered through our medical research paper publication and thesis writing services.",
    "url": "https://www.medzenwrites.com/publications",
    "provider": {{
      "@type": "MedicalBusiness",
      "name": "MedZen Writes"
    }}
  }}
  </script>
</head>
<body>
{gs.get_header("publications")}

  <main id="main-content">
    <div class="container" style="padding-top: 24px;">
      <nav class="breadcrumbs" aria-label="Breadcrumbs">
        <a href="index.html">Home</a>
        <span class="separator">/</span>
        <span class="current">Publications Portfolio</span>
      </nav>
    </div>

    <!-- Hero -->
    <section class="theme-hero" style="padding: 50px 0 80px;" aria-label="Publications Introduction">
      <div class="hero-watermark" aria-hidden="true">publications</div>
      <div class="container">
        <div class="theme-hero-content" style="max-width: 1080px; text-align: center; margin: 0 auto;">
          <span class="eyebrow-badge eyebrow-badge-white"><span class="material-symbols-outlined">collections_bookmark</span> Proven Track Record</span>
          <h1 class="theme-hero-title">Our Medical Research Publications Portfolio</h1>
          <p class="theme-hero-subtitle" style="margin: 0 auto 28px;">
            Explore our extensive track record of client publications across leading PubMed, Scopus, Web of Science, and UGC-CARE indexed medical journals.
          </p>

          <!-- Filter Tabs -->
          <div style="display: flex; justify-content: center; gap: 10px; flex-wrap: wrap;">
            <button type="button" class="btn btn-white btn-sm filter-btn active" data-filter="all">All Publications</button>
            <button type="button" class="btn btn-outline-white btn-sm filter-btn" data-filter="srma">Systematic Reviews</button>
            <button type="button" class="btn btn-outline-white btn-sm filter-btn" data-filter="original">Original Research</button>
            <button type="button" class="btn btn-outline-white btn-sm filter-btn" data-filter="case">Case Reports</button>
            <button type="button" class="btn btn-outline-white btn-sm filter-btn" data-filter="thesis">Theses</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio Showcase Grid -->
    <section class="section" aria-labelledby="portfolio-grid-heading">
      <div class="container">
        <!-- Portfolio Live Highlights Showcase -->
        <div style="margin-bottom: 40px;">
          <div class="grid grid-2" style="align-items: center; gap: clamp(24px, 4vw, 48px); background: #FFFFFF; border-radius: var(--radius-2xl); padding: clamp(24px, 3vw, 40px); border: 1px solid var(--border-subtle); box-shadow: var(--shadow-sm);">
            <div>
              <span class="eyebrow-badge"><span class="material-symbols-outlined">auto_stories</span> High-Impact Indexed Journals</span>
              <h2 id="portfolio-grid-heading" style="font-size: clamp(1.6rem, 2.5vw, 2.2rem); color: var(--teal-900); margin-bottom: 16px;">
                Published Across PubMed, Scopus, Web of Science &amp; Embase
              </h2>
              <p style="font-size: 1.02rem; line-height: 1.75; color: var(--text-body); margin-bottom: 20px;">
                From high-powered multicentric clinical trials to systematic reviews and first-author PG medical dissertations, our authors celebrate successful acceptance without stress.
              </p>
              <div style="display: flex; gap: 14px; flex-wrap: wrap;">
                <div style="background: var(--bg-soft-mint); padding: 10px 18px; border-radius: var(--radius-md); font-weight: 700; color: var(--teal-900); font-size: 0.92rem;">
                  <span style="color: var(--mint-primary); font-size: 1.2rem; font-weight: 800;">450+</span> Manuscripts Published
                </div>
                <div style="background: var(--bg-soft-mint); padding: 10px 18px; border-radius: var(--radius-md); font-weight: 700; color: var(--teal-900); font-size: 0.92rem;">
                  <span style="color: var(--mint-primary); font-size: 1.2rem; font-weight: 800;">98.4%</span> Guide Approval Rate
                </div>
              </div>
            </div>
            <div>
              <div class="live-image-frame" style="height: 300px;">
                <img src="assets/images/doctors-group-celebrating.jpg" alt="Medical doctors and researchers celebrating publication acceptance">
                <div class="live-image-badge">
                  <span class="material-symbols-outlined">military_tech</span>
                  <span>Peer-Reviewed Author Success</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="publications-grid-custom" id="publicationsGrid">
          <!-- Item 1: Uploaded Publication Document (PubMed Cureus Preeclampsia Study) -->
          <div class="service-card portfolio-card-item publication-doc-card" data-category="original" data-card-link="https://pubmed.ncbi.nlm.nih.gov/" title="Click to view publication preview">
            <a href="https://pubmed.ncbi.nlm.nih.gov/" target="_blank" rel="noopener noreferrer" class="card-link-badge" title="Open PubMed article in new tab" onclick="event.stopPropagation()">
              <span class="material-symbols-outlined" style="font-size: 13px;">open_in_new</span>
              <span>View Article</span>
            </a>
            <img src="assets/images/pubmed-preeclampsia-paper.png" alt="A Multimarker Approach for Early Prediction of Preeclampsia Using Uterine Artery Doppler Pulsatility Index - PubMed" class="publication-doc-img" loading="lazy">
          </div>

          <!-- Item 2: Solitary Osteochondroma of the Calcaneum (Matching User Screenshot) -->
          <div class="service-card portfolio-card-item publication-doc-card" data-category="case" data-card-link="https://doi.org/10.7759/cureus.10543" title="Click to view publication preview">
            <a href="https://doi.org/10.7759/cureus.10543" target="_blank" rel="noopener noreferrer" class="card-link-badge" title="Open Case Report article in new tab" onclick="event.stopPropagation()">
              <span class="material-symbols-outlined" style="font-size: 13px;">open_in_new</span>
              <span>View Article</span>
            </a>
            <img src="assets/images/pub_card_2_osteochondroma.png" alt="Solitary Osteochondroma of the Calcaneum: A Rare Case Report" class="publication-doc-img" loading="lazy">
          </div>

          <!-- Item 3: Annals of Medicine - Clinical Determinants of Failed Induction of Labour (Matching User Screenshot) -->
          <div class="service-card portfolio-card-item publication-doc-card" data-category="original" data-card-link="https://doi.org/10.4103/amms.amms_11_20" title="Click to view publication preview">
            <a href="https://doi.org/10.4103/amms.amms_11_20" target="_blank" rel="noopener noreferrer" class="card-link-badge" title="Open Annals of Medicine publication in new tab" onclick="event.stopPropagation()">
              <span class="material-symbols-outlined" style="font-size: 13px;">open_in_new</span>
              <span>View Article</span>
            </a>
            <img src="assets/images/pub_card_3_failed_induction.png" alt="Annals of Medicine and Medical Sciences - Clinical Determinants of Failed Induction of Labour in Women with Unfavourable Cervix: A Multivariable Analysis" class="publication-doc-img" loading="lazy">
          </div>

          <!-- Item 4: Empty Space / Slot for Next Publication Image (Default Size: Auto-Fit) -->
          <div class="service-card portfolio-card-item publication-upload-slot" data-category="all" title="Empty space for next publication image">
            <div class="upload-slot-inner">
              <span class="material-symbols-outlined upload-slot-icon">add_photo_alternate</span>
              <span class="upload-slot-title">Upload New Publication</span>
              <span class="upload-slot-dim">Auto-Fits Any Image Size</span>
              <span class="upload-slot-hint">Ready for new publication image. Click to upload in Studio.</span>
            </div>
          </div>

          <!-- Item 3 (Moved) -->
          <div class="service-card portfolio-card-item" data-category="srma">
            <div class="service-card-header">
              <span class="tag-pill">Systematic Review</span>
              <span style="font-size: 0.8rem; color: var(--text-muted); font-weight: 600;">2026 · PubMed</span>
            </div>
            <h3 style="font-size: 1.2rem; margin-bottom: 10px; color: var(--teal-900);">Efficacy of SGLT2 Inhibitors in Non-Diabetic Heart Failure</h3>
            <p style="font-size: 0.925rem; color: var(--text-body); line-height: 1.65; margin-bottom: 20px;">Comprehensive PRISMA-compliant meta-analysis across 18 randomized controlled trials with RevMan forest plots and GRADE evidence synthesis.</p>
            <div class="service-card-footer" style="display: flex; justify-content: space-between; align-items: center;">
              <span style="font-size: 0.85rem; color: var(--teal-hero); font-weight: 700;">Indexed: PubMed / MEDLINE</span>
              <span class="material-symbols-outlined" style="color: var(--mint-primary); font-size: 20px;">verified</span>
            </div>
          </div>

          <!-- Item 2 -->
          <div class="service-card portfolio-card-item" data-category="original">
            <div class="service-card-header">
              <span class="tag-pill">Original Research</span>
              <span style="font-size: 0.8rem; color: var(--text-muted); font-weight: 600;">2026 · Scopus</span>
            </div>
            <h3 style="font-size: 1.2rem; margin-bottom: 10px; color: var(--teal-900);">Comparison of Robotic vs. Laparoscopic Colectomy Outcomes</h3>
            <p style="font-size: 0.925rem; color: var(--text-body); line-height: 1.65; margin-bottom: 20px;">Multi-centric observational cohort study written in standard IMRaD format, featuring multivariable regression and survival analysis.</p>
            <div class="service-card-footer" style="display: flex; justify-content: space-between; align-items: center;">
              <span style="font-size: 0.85rem; color: var(--teal-hero); font-weight: 700;">Indexed: Scopus / Embase</span>
              <span class="material-symbols-outlined" style="color: var(--mint-primary); font-size: 20px;">verified</span>
            </div>
          </div>

          <!-- Item 3 -->
          <div class="service-card portfolio-card-item" data-category="case">
            <div class="service-card-header">
              <span class="tag-pill">Case Report</span>
              <span style="font-size: 0.8rem; color: var(--text-muted); font-weight: 600;">2026 · CARE Standard</span>
            </div>
            <h3 style="font-size: 1.2rem; margin-bottom: 10px; color: var(--teal-900);">Atypical Presentation of Anti-NMDA Receptor Encephalitis</h3>
            <p style="font-size: 0.925rem; color: var(--text-body); line-height: 1.65; margin-bottom: 20px;">CARE-compliant case report detailing rare diagnostic presentation, neuro-imaging findings, treatment protocols, and successful recovery timeline.</p>
            <div class="service-card-footer" style="display: flex; justify-content: space-between; align-items: center;">
              <span style="font-size: 0.85rem; color: var(--teal-hero); font-weight: 700;">Indexed: UGC-CARE Group II</span>
              <span class="material-symbols-outlined" style="color: var(--mint-primary); font-size: 20px;">verified</span>
            </div>
          </div>

          <!-- Item 4 -->
          <div class="service-card portfolio-card-item" data-category="thesis">
            <div class="service-card-header">
              <span class="tag-pill">MD Thesis</span>
              <span style="font-size: 0.8rem; color: var(--text-muted); font-weight: 600;">2026 · Approved</span>
            </div>
            <h3 style="font-size: 1.2rem; margin-bottom: 10px; color: var(--teal-900);">Biomarkers in Early Diabetic Nephropathy Progression</h3>
            <p style="font-size: 0.925rem; color: var(--text-body); line-height: 1.65; margin-bottom: 20px;">Full postgraduate dissertation featuring protocol approval, SPSS data synthesis, ROC curve analysis, and university-compliant binding formats.</p>
            <div class="service-card-footer" style="display: flex; justify-content: space-between; align-items: center;">
              <span style="font-size: 0.85rem; color: var(--teal-hero); font-weight: 700;">Degree: MD General Medicine</span>
              <span class="material-symbols-outlined" style="color: var(--mint-primary); font-size: 20px;">school</span>
            </div>
          </div>

          <!-- Item 5 -->
          <div class="service-card portfolio-card-item" data-category="srma">
            <div class="service-card-header">
              <span class="tag-pill">Meta-Analysis</span>
              <span style="font-size: 0.8rem; color: var(--text-muted); font-weight: 600;">2026 · Elsevier</span>
            </div>
            <h3 style="font-size: 1.2rem; margin-bottom: 10px; color: var(--teal-900);">Comparative Neuroprotective Agents in Acute Ischemic Stroke</h3>
            <p style="font-size: 0.925rem; color: var(--text-body); line-height: 1.65; margin-bottom: 20px;">Network meta-analysis utilizing Bayesian framework, assessing relative risk ratios and cumulative rank probabilities across 24 clinical trials.</p>
            <div class="service-card-footer" style="display: flex; justify-content: space-between; align-items: center;">
              <span style="font-size: 0.85rem; color: var(--teal-hero); font-weight: 700;">Indexed: Elsevier / ScienceDirect</span>
              <span class="material-symbols-outlined" style="color: var(--mint-primary); font-size: 20px;">verified</span>
            </div>
          </div>

          <!-- Item 6 -->
          <div class="service-card portfolio-card-item" data-category="original">
            <div class="service-card-header">
              <span class="tag-pill">Original Research</span>
              <span style="font-size: 0.8rem; color: var(--text-muted); font-weight: 600;">2026 · Springer</span>
            </div>
            <h3 style="font-size: 1.2rem; margin-bottom: 10px; color: var(--teal-900);">Comparative Study of Minimally Invasive Orthopedic Fixation</h3>
            <p style="font-size: 0.925rem; color: var(--text-body); line-height: 1.65; margin-bottom: 20px;">Clinical trial manuscript formatted to Springer Nature author specifications with full radiographical follow-up metrics and statistical analysis.</p>
            <div class="service-card-footer" style="display: flex; justify-content: space-between; align-items: center;">
              <span style="font-size: 0.85rem; color: var(--teal-hero); font-weight: 700;">Indexed: Springer / PubMed</span>
              <span class="material-symbols-outlined" style="color: var(--mint-primary); font-size: 20px;">verified</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Closing CTA Banner -->
    <section class="cta-banner-section" aria-label="Closing CTA Banner">
      <div class="container">
        <div class="cta-banner-grid">
          <div>
            <h2 class="cta-banner-title">Want Your Research to Be Our Next Success Story?</h2>
            <p class="cta-banner-desc">Partner with MedZen Writes for ethical, peer-reviewed medical publication and thesis writing support.</p>
            <button type="button" class="btn btn-mint btn-lg" data-modal-target="consultationModal">
              <span class="material-symbols-outlined">calendar_month</span>
              <span>Book a Consultation</span>
            </button>
          </div>
          <div>
            <div class="verified-review-card">
              <div class="verified-tag">
                <span class="material-symbols-outlined" style="font-size: 16px; color: var(--mint-primary);">verified</span>
                <span>Verified Authors</span>
              </div>
              <div class="verified-percentage">98%</div>
              <div class="verified-label">Satisfied Medical Researchers</div>
              <div class="verified-stars-row">
                <span class="material-symbols-outlined" style="font-size: 18px; font-variation-settings: 'FILL' 1;">star</span>
                <span class="material-symbols-outlined" style="font-size: 18px; font-variation-settings: 'FILL' 1;">star</span>
                <span class="material-symbols-outlined" style="font-size: 18px; font-variation-settings: 'FILL' 1;">star</span>
                <span class="material-symbols-outlined" style="font-size: 18px; font-variation-settings: 'FILL' 1;">star</span>
                <span class="material-symbols-outlined" style="font-size: 18px; font-variation-settings: 'FILL' 1;">star</span>
                <span style="color: var(--teal-900); margin-left: 4px;">315+ Reviews</span>
              </div>
              <a href="testimonials.html" class="btn btn-mint btn-sm" style="width: 100%;">
                <span>Read Client Reviews</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

{gs.get_footer()}
</body>
</html>
"""

with open(os.path.join(base_dir, "publications.html"), "w", encoding="utf-8") as f:
    f.write(publications_html)
print("Generated publications.html")

# -----------------------------------------------------------------------------
# 6. TESTIMONIALS PAGE: testimonials.html
# -----------------------------------------------------------------------------
testimonials_html = f"""{gs.get_base_meta(
  title="Client Reviews — Medical Thesis Writing Services | MedZen Writes",
  description="Read what doctors, residents & researchers say about MedZen Writes' medical research paper publication and thesis writing services.",
  canonical_url="testimonials"
)}
  <script type="application/ld+json">
  {{
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Medical Writing Service Reviews & Testimonials",
    "description": "Read verified feedback and testimonials from doctors, PG medical residents, and academic researchers who worked with MedZen Writes.",
    "url": "https://www.medzenwrites.com/testimonials"
  }}
  </script>
</head>
<body>
{gs.get_header("testimonials")}

  <main id="main-content">
    <div class="container" style="padding-top: 24px;">
      <nav class="breadcrumbs" aria-label="Breadcrumbs">
        <a href="index.html">Home</a>
        <span class="separator">/</span>
        <span class="current">Testimonials &amp; Reviews</span>
      </nav>
    </div>

    <!-- Hero -->
    <section class="theme-hero" style="padding: 50px 0 80px;" aria-label="Testimonials Introduction">
      <div class="hero-watermark" aria-hidden="true">reviews</div>
      <div class="container">
        <div class="theme-hero-content" style="max-width: 1080px; text-align: center; margin: 0 auto;">
          <span class="eyebrow-badge eyebrow-badge-white"><span class="material-symbols-outlined">rate_review</span> Verified Doctor Feedback</span>
          <h1 class="theme-hero-title">Doctor Reviews &amp; Testimonials</h1>
          <p class="theme-hero-subtitle" style="margin: 0 auto 28px;">
            Trusted by postgraduate doctors, clinical fellows, and medical faculty across India and internationally. Here is what clinicians say about working with MedZen Writes.
          </p>
        </div>
      </div>
    </section>

    <!-- Reviews Grid -->
    <section class="section section-mint-soft" aria-labelledby="reviews-list-heading">
      <div class="container">
        <div class="section-header" style="margin-bottom: 32px;">
          <span class="eyebrow-badge eyebrow-badge-mint">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style="vertical-align: middle; margin-right: 4px;">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
            </svg>
            Verified Google Reviews
          </span>
          <h2 id="reviews-list-heading" class="section-title">Verified Google Client Reviews</h2>
          <p class="section-subtitle">Real feedback and 5-star ratings directly from Google Reviews.</p>
        </div>

        <div class="grid grid-3 google-reviews-grid" style="margin-bottom: 50px;">
          <!-- Google Review 1: Dr. Avi Shah -->
          <div class="google-review-card" onclick="openReviewLightbox('assets/images/google-reviews/google-review-avi-shah.png', 'Google Review by Dr. Avi Shah — DM Medical Oncology')" role="button" tabindex="0" aria-label="View Google Review by Dr. Avi Shah">
            <div class="google-review-card-header">
              <div class="google-review-meta">
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>
                <span class="google-review-tag">Google Review</span>
              </div>
              <div class="google-review-stars">
                ★★★★★
              </div>
            </div>
            <div class="google-review-img-wrap">
              <img src="assets/images/google-reviews/google-review-avi-shah.png" alt="Google Review by Dr. Avi Shah - DM Medical Oncology" class="google-review-img" loading="lazy">
              <div class="google-review-overlay">
                <span class="material-symbols-outlined">zoom_in</span>
                <span>Click to enlarge</span>
              </div>
            </div>
          </div>

          <!-- Google Review 2: Bharath Ranadeepan -->
          <div class="google-review-card" onclick="openReviewLightbox('assets/images/google-reviews/google-review-bharath.png', 'Google Review by Bharath Ranadeepan — Thesis Publication')" role="button" tabindex="0" aria-label="View Google Review by Bharath Ranadeepan">
            <div class="google-review-card-header">
              <div class="google-review-meta">
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>
                <span class="google-review-tag">Google Review</span>
              </div>
              <div class="google-review-stars">
                ★★★★★
              </div>
            </div>
            <div class="google-review-img-wrap">
              <img src="assets/images/google-reviews/google-review-bharath.png" alt="Google Review by Bharath Ranadeepan" class="google-review-img" loading="lazy">
              <div class="google-review-overlay">
                <span class="material-symbols-outlined">zoom_in</span>
                <span>Click to enlarge</span>
              </div>
            </div>
          </div>

          <!-- Google Review 3: sinjith J -->
          <div class="google-review-card" onclick="openReviewLightbox('assets/images/google-reviews/google-review-sinjith.png', 'Google Review by sinjith J — Medical Post Graduate Thesis Assistance')" role="button" tabindex="0" aria-label="View Google Review by sinjith J">
            <div class="google-review-card-header">
              <div class="google-review-meta">
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>
                <span class="google-review-tag">Google Review</span>
              </div>
              <div class="google-review-stars">
                ★★★★★
              </div>
            </div>
            <div class="google-review-img-wrap">
              <img src="assets/images/google-reviews/google-review-sinjith.png" alt="Google Review by sinjith J" class="google-review-img" loading="lazy">
              <div class="google-review-overlay">
                <span class="material-symbols-outlined">zoom_in</span>
                <span>Click to enlarge</span>
              </div>
            </div>
          </div>
        </div>

        <div class="section-header" style="margin-bottom: 24px;">
          <h3 class="section-title" style="font-size: 1.5rem;">More Client Feedback</h3>
        </div>
        <div class="grid grid-3">
          <!-- Review 1 -->
          <div class="testimonial-card">
            <div class="testimonial-header">
              <div class="testimonial-avatar">
                <img src="assets/images/team_doctor_1.jpg" alt="Dr. Aarthi Narayanan">
              </div>
              <div>
                <h4 class="testimonial-author-name">Dr. Aarthi Narayanan</h4>
                <div class="testimonial-stars">
                  <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
                </div>
              </div>
            </div>
            <p class="testimonial-quote-text">
              <span class="quote-mark">“</span>The quality of research support provided was exceptional. They helped us publish our findings in a top-tier journal. The statistical analysis and IMRaD structuring were flawless.<span class="quote-mark">„</span>
            </p>
          </div>

          <!-- Review 2 -->
          <div class="testimonial-card">
            <div class="testimonial-header">
              <div class="testimonial-avatar">
                <img src="assets/images/team_doctor_4.jpg" alt="Dr. Ravi Sharma">
              </div>
              <div>
                <h4 class="testimonial-author-name">Dr. Ravi Sharma</h4>
                <div class="testimonial-stars">
                  <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
                </div>
              </div>
            </div>
            <p class="testimonial-quote-text">
              <span class="quote-mark">“</span>Professional, thorough, and delivered exactly what we needed for our thesis defense. Highly recommended for any doctor overwhelmed by clinical rotations and tight submission deadlines!<span class="quote-mark">„</span>
            </p>
          </div>

          <!-- Review 3 -->
          <div class="testimonial-card">
            <div class="testimonial-header">
              <div class="testimonial-avatar">
                <img src="assets/images/female-doctor-specialist.jpg" alt="Dr. Meena Kulkarni">
              </div>
              <div>
                <h4 class="testimonial-author-name">Dr. Meena Kulkarni</h4>
                <div class="testimonial-stars">
                  <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
                </div>
              </div>
            </div>
            <p class="testimonial-quote-text">
              <span class="quote-mark">“</span>Their expertise in medical writing and research methodology is outstanding. Great collaboration experience on our Cardiology systematic review and meta-analysis.<span class="quote-mark">„</span>
            </p>
          </div>

          <!-- Review 4 -->
          <div class="testimonial-card">
            <div class="testimonial-header">
              <div class="testimonial-avatar">
                <img src="assets/images/team_doctor_3.jpg" alt="Dr. Vikram K.">
              </div>
              <div>
                <h4 class="testimonial-author-name">Dr. Vikram K.</h4>
                <div class="testimonial-stars">
                  <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
                </div>
              </div>
            </div>
            <p class="testimonial-quote-text">
              <span class="quote-mark">“</span>Converting my MD thesis into a concise journal article felt like a nightmare until I worked with MedZen Writes. They condensed 120 pages into a sharp 3,200-word manuscript accepted in Scopus!<span class="quote-mark">„</span>
            </p>
          </div>

          <!-- Review 5 -->
          <div class="testimonial-card">
            <div class="testimonial-header">
              <div class="testimonial-avatar">
                <img src="assets/images/team_doctor_2.jpg" alt="Dr. Sneha Patel">
              </div>
              <div>
                <h4 class="testimonial-author-name">Dr. Sneha Patel</h4>
                <div class="testimonial-stars">
                  <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
                </div>
              </div>
            </div>
            <p class="testimonial-quote-text">
              <span class="quote-mark">“</span>The statistical analysis in SPSS with clear interpretation of ANOVA and multivariate regression saved our research project. The reviewer had zero queries regarding methodology.<span class="quote-mark">„</span>
            </p>
          </div>

          <!-- Review 6 -->
          <div class="testimonial-card">
            <div class="testimonial-header">
              <div class="testimonial-avatar">
                <img src="assets/images/hero_doctor.jpg" alt="Dr. Tanmay Ghosh">
              </div>
              <div>
                <h4 class="testimonial-author-name">Dr. Tanmay Ghosh</h4>
                <div class="testimonial-stars">
                  <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
                </div>
              </div>
            </div>
            <p class="testimonial-quote-text">
              <span class="quote-mark">“</span>Ethical, transparent, and strictly human-written. Plagiarism was under 6% on Turnitin and all guidelines from CARE were meticulously followed for our rare surgical case report.<span class="quote-mark">„</span>
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Closing CTA Banner -->
    <section class="cta-banner-section" aria-label="Closing CTA Banner">
      <div class="container">
        <div class="cta-banner-grid">
          <div>
            <h2 class="cta-banner-title">Ready to Experience Stress-Free Medical Research Writing?</h2>
            <p class="cta-banner-desc">Connect with our academic team today and discuss your thesis or manuscript publishing requirements.</p>
            <button type="button" class="btn btn-mint btn-lg" data-modal-target="consultationModal">
              <span class="material-symbols-outlined">calendar_month</span>
              <span>Book Your Consultation</span>
            </button>
          </div>
          <div>
            <div class="verified-review-card">
              <div class="verified-tag">
                <span class="material-symbols-outlined" style="font-size: 16px; color: var(--mint-primary);">verified</span>
                <span>Verified Authors</span>
              </div>
              <div class="verified-percentage">98%</div>
              <div class="verified-label">Satisfied Medical Researchers</div>
              <div class="verified-stars-row">
                <span class="material-symbols-outlined" style="font-size: 18px; font-variation-settings: 'FILL' 1;">star</span>
                <span class="material-symbols-outlined" style="font-size: 18px; font-variation-settings: 'FILL' 1;">star</span>
                <span class="material-symbols-outlined" style="font-size: 18px; font-variation-settings: 'FILL' 1;">star</span>
                <span class="material-symbols-outlined" style="font-size: 18px; font-variation-settings: 'FILL' 1;">star</span>
                <span class="material-symbols-outlined" style="font-size: 18px; font-variation-settings: 'FILL' 1;">star</span>
                <span style="color: var(--teal-900); margin-left: 4px;">315+ Reviews</span>
              </div>
              <button type="button" class="btn btn-mint btn-sm" style="width: 100%;" data-modal-target="consultationModal">
                <span>Request Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

{gs.get_footer()}
</body>
</html>
"""

with open(os.path.join(base_dir, "testimonials.html"), "w", encoding="utf-8") as f:
    f.write(testimonials_html)
print("Generated testimonials.html")

# -----------------------------------------------------------------------------
# 7. BLOG PAGE: blog.html
# -----------------------------------------------------------------------------
blog_html = f"""{gs.get_base_meta(
  title="Medical Thesis Writing & Publication Blog | MedZen Writes",
  description="Practical guides on medical thesis writing, research paper publication, biostatistics & journal submission for PG residents and doctors.",
  canonical_url="blog"
)}
  <script type="application/ld+json">
  {{
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "MedZen Writes Medical Research & Thesis Blog",
    "description": "Practical guides on thesis writing, journal publication, research methodology, biostatistics, and academic success for MD, MS, DNB and healthcare professionals.",
    "url": "https://www.medzenwrites.com/blog",
    "publisher": {{
      "@type": "MedicalBusiness",
      "name": "MedZen Writes"
    }}
  }}
  </script>
</head>
<body>
{gs.get_header("blog")}

  <main id="main-content">
    <div class="container" style="padding-top: 24px;">
      <nav class="breadcrumbs" aria-label="Breadcrumbs">
        <a href="index.html">Home</a>
        <span class="separator">/</span>
        <span class="current">Medical Research Blog</span>
      </nav>
    </div>

    <!-- Hero -->
    <section class="theme-hero" style="padding: 50px 0 80px;" aria-label="Blog Introduction">
      <div class="hero-watermark" aria-hidden="true">articles</div>
      <div class="container">
        <div class="theme-hero-content" style="max-width: 1080px; text-align: center; margin: 0 auto;">
          <span class="eyebrow-badge eyebrow-badge-white"><span class="material-symbols-outlined">menu_book</span> Knowledge Hub</span>
          <h1 class="theme-hero-title">Medical Thesis Writing &amp; Publication Blog</h1>
          <p class="theme-hero-subtitle" style="margin: 0 auto 28px;">
            Practical guides on thesis writing, journal publication, research methodology, biostatistics, and academic success for MD, MS, DNB, and healthcare professionals.
          </p>
        </div>
      </div>
    </section>

    <!-- Main Content Section (Square-Shaped 3-Column Articles Layout as per Reference) -->
    <section class="articles-section" aria-labelledby="articles-heading">
      <div class="container">
        
        <!-- Centered Header -->
        <div class="articles-header-center">
          <h1 id="articles-heading" class="articles-header-title">Latest Articles</h1>
          <p class="articles-header-subtitle">Looking for something specific? Check out the filters below!</p>
        </div>

        <!-- Filter Dropdowns Bar -->
        <div class="articles-filter-bar">
          <div class="articles-select-wrapper">
            <select class="articles-filter-select" id="articleCategorySelect" aria-label="Filter by Category">
              <option value="all">Category</option>
              <option value="publishing">Journal Publishing</option>
              <option value="thesis">Thesis &amp; Dissertation</option>
              <option value="reviews">Systematic Reviews</option>
              <option value="stats">Biostatistics</option>
              <option value="cases">Case Reports</option>
              <option value="protocols">Protocols &amp; Synopsis</option>
            </select>
            <span class="material-symbols-outlined articles-select-icon">expand_more</span>
          </div>

          <div class="articles-select-wrapper">
            <select class="articles-filter-select" id="articleTopicSelect" aria-label="Filter by Topic">
              <option value="all">Topic</option>
              <option value="journal-selection">Journal Selection</option>
              <option value="imrad-structure">IMRaD Structure</option>
              <option value="prospero-prisma">PROSPERO &amp; PRISMA</option>
              <option value="thesis-conversion">Thesis Conversion</option>
              <option value="sample-size">Sample Size &amp; Power</option>
              <option value="care-guidelines">CARE Guidelines</option>
              <option value="ethics-clearance">Ethics &amp; IEC Approval</option>
            </select>
            <span class="material-symbols-outlined articles-select-icon">expand_more</span>
          </div>
        </div>

        <!-- 3-Column Square Articles Grid -->
        <div class="latest-articles-grid" id="latestArticlesGrid">
          
          <!-- Card 1 -->
          <article class="article-card-v2" data-category="publishing" data-topic="journal-selection">
            <div class="article-card-thumb-frame">
              <div class="article-graphic-canvas article-canvas-blue">
                <svg class="article-canvas-shape" style="top: -20px; left: -20px; width: 140px; height: 140px;" viewBox="0 0 100 100">
                  <path fill="#60a5fa" d="M30,-45C42,-39,56,-32,62,-20C68,-9,66,6,60,20C54,34,44,46,31,54C19,62,4,65,-10,63C-24,61,-37,53,-48,42C-59,31,-68,15,-66,1C-64,-14,-50,-27,-38,-35C-27,-42,-13,-44,0,-45C13,-45,26,-44,30,-45Z" transform="translate(50 50)" />
                </svg>
                <div class="article-mockup-badge">
                  <span class="material-symbols-outlined" style="font-size: 26px; color: #0284c7;">verified_user</span>
                  <span>PubMed</span>
                  <span style="color: #94a3b8; font-weight: 400; font-size: 1.1rem;">+</span>
                  <span style="color: #004e57; font-weight: 800;">Scopus</span>
                </div>
                <svg class="article-canvas-shape" style="bottom: -30px; right: -20px; width: 160px; height: 160px;" viewBox="0 0 100 100">
                  <path fill="#3b82f6" d="M42,-58C54,-48,63,-35,67,-20C71,-5,70,12,63,26C56,40,43,51,28,58C13,65,-3,67,-18,63C-33,59,-47,48,-57,34C-67,20,-73,2,-70,-15C-67,-31,-54,-47,-39,-56C-24,-66,-12,-70,2,-73C16,-76,31,-67,42,-58Z" transform="translate(50 50)" />
                </svg>
              </div>
            </div>
            <div class="article-card-meta-line">
              <span class="article-category-pill pill-product">Journal Publishing</span>
              <span class="article-read-time">Read Time: 5 minutes</span>
            </div>
            <h3 class="article-card-h3">
              How to Choose the Right Journal for Your First Medical Research Paper
            </h3>
            <p class="article-card-summary">
              Learn how to assess journal scope, impact factor, indexing in PubMed/Scopus vs. predatory lists, publication charges (APCs), and average peer review turnaround times.
            </p>
            <a href="services/original-research.html" class="article-read-now-link">
              <span>Read now</span>
              <span class="material-symbols-outlined">arrow_forward</span>
            </a>
          </article>

          <!-- Card 2 -->
          <article class="article-card-v2" data-category="publishing" data-topic="imrad-structure">
            <div class="article-card-thumb-frame">
              <div class="article-graphic-canvas article-canvas-teal">
                <svg class="article-canvas-shape" style="top: -20px; right: -20px; width: 150px; height: 150px;" viewBox="0 0 100 100">
                  <path fill="#00c2b2" d="M37,-52C48,-43,57,-31,63,-17C69,-3,71,15,64,28C57,41,40,49,24,56C8,63,-8,69,-24,65C-39,62,-53,49,-61,33C-69,18,-70,0,-66,-17C-61,-33,-50,-48,-36,-56C-22,-65,-11,-67,2,-70C16,-73,32,-61,37,-52Z" transform="translate(50 50)" />
                </svg>
                <div class="article-mockup-badge" style="padding: 10px 14px; gap: 8px;">
                  <span class="material-symbols-outlined" style="font-size: 24px; color: #00c2b2;">menu_book</span>
                  <span style="font-size: 0.95rem; color: #004e57;">IMRaD Blueprint</span>
                  <span style="background: #e0f2fe; color: #0284c7; padding: 2px 8px; border-radius: 6px; font-size: 0.72rem; font-weight: 700;">PG Guide</span>
                </div>
                <svg class="article-canvas-shape" style="bottom: -20px; left: -20px; width: 130px; height: 130px;" viewBox="0 0 100 100">
                  <path fill="#0284c7" d="M38,-49C49,-38,58,-25,61,-10C64,5,60,22,51,36C41,50,26,60,9,63C-8,66,-27,61,-41,50C-55,38,-65,19,-64,1C-63,-17,-52,-34,-38,-45C-25,-56,-12,-61,2,-64C16,-67,31,-60,38,-49Z" transform="translate(50 50)" />
                </svg>
              </div>
            </div>
            <div class="article-card-meta-line">
              <span class="article-category-pill pill-product">Manuscript Structure</span>
              <span class="article-read-time">Read Time: 8 minutes</span>
            </div>
            <h3 class="article-card-h3">
              IMRaD Format Explained: A Step-by-Step Guide for PG Residents
            </h3>
            <p class="article-card-summary">
              Master the Introduction, Methods, Results, and Discussion format. Discover how to craft a compelling clinical narrative and present data without repetitive text.
            </p>
            <a href="services/original-research.html" class="article-read-now-link">
              <span>Read now</span>
              <span class="material-symbols-outlined">arrow_forward</span>
            </a>
          </article>

          <!-- Card 3 -->
          <article class="article-card-v2" data-category="reviews" data-topic="prospero-prisma">
            <div class="article-card-thumb-frame">
              <div class="article-graphic-canvas article-canvas-sky">
                <svg class="article-canvas-shape" style="bottom: -30px; left: -20px; width: 160px; height: 160px;" viewBox="0 0 100 100">
                  <path fill="#38bdf8" d="M41,-54C52,-45,60,-32,64,-17C67,-2,66,15,59,29C52,43,39,53,24,60C9,67,-8,71,-24,67C-39,62,-54,50,-62,34C-71,19,-74,0,-69,-17C-64,-34,-51,-48,-36,-57C-22,-65,-11,-67,3,-71C17,-75,34,-63,41,-54Z" transform="translate(50 50)" />
                </svg>
                <div class="article-mockup-badge" style="padding: 10px 14px; gap: 8px;">
                  <span class="material-symbols-outlined" style="font-size: 24px; color: #0284c7;">join_inner</span>
                  <span style="font-size: 0.95rem; color: #0c2340;">PRISMA 2020</span>
                  <span style="background: #f0fdf4; color: #16a34a; padding: 2px 8px; border-radius: 6px; font-size: 0.72rem; font-weight: 700;">PROSPERO</span>
                </div>
              </div>
            </div>
            <div class="article-card-meta-line">
              <span class="article-category-pill pill-productivity">Systematic Reviews</span>
              <span class="article-read-time">Read Time: 7 minutes</span>
            </div>
            <h3 class="article-card-h3">
              PROSPERO Registration: A Beginner's Guide for Systematic Reviews
            </h3>
            <p class="article-card-summary">
              Step-by-step walkthrough of registering your review protocol in PROSPERO before data extraction, avoiding common eligibility rejection mistakes.
            </p>
            <a href="services/systematic-review.html" class="article-read-now-link">
              <span>Read now</span>
              <span class="material-symbols-outlined">arrow_forward</span>
            </a>
          </article>

          <!-- Card 4 -->
          <article class="article-card-v2" data-category="thesis" data-topic="thesis-conversion">
            <div class="article-card-thumb-frame">
              <div class="article-graphic-canvas article-canvas-indigo">
                <svg class="article-canvas-shape" style="top: -20px; left: -20px; width: 140px; height: 140px;" viewBox="0 0 100 100">
                  <path fill="#818cf8" d="M35,-48C45,-39,53,-28,58,-14C63,0,65,18,58,32C51,46,38,57,22,63C7,70,-10,72,-25,67C-41,61,-55,49,-63,33C-71,18,-72,0,-67,-17C-61,-33,-49,-48,-35,-57C-21,-65,-11,-67,2,-70C15,-72,30,-61,35,-48Z" transform="translate(50 50)" />
                </svg>
                <div class="article-mockup-badge">
                  <span class="material-symbols-outlined" style="font-size: 24px; color: #4338ca;">swap_horiz</span>
                  <span style="font-size: 0.95rem;">150p Thesis</span>
                  <span class="material-symbols-outlined" style="font-size: 16px; color: #6366f1;">trending_flat</span>
                  <span style="font-size: 0.95rem; color: #4338ca;">Paper</span>
                </div>
              </div>
            </div>
            <div class="article-card-meta-line">
              <span class="article-category-pill pill-recruiting">Thesis Conversion</span>
              <span class="article-read-time">Read Time: 6 minutes</span>
            </div>
            <h3 class="article-card-h3">
              Thesis to Manuscript: How to Turn Your Dissertation into a Published Paper
            </h3>
            <p class="article-card-summary">
              Why 90% of PG theses never get published and how strategic condensation, rewrites, and journal matching can turn your hard work into an indexed publication.
            </p>
            <a href="services/thesis-to-manuscript.html" class="article-read-now-link">
              <span>Read now</span>
              <span class="material-symbols-outlined">arrow_forward</span>
            </a>
          </article>

          <!-- Card 5 -->
          <article class="article-card-v2" data-category="stats" data-topic="sample-size">
            <div class="article-card-thumb-frame">
              <div class="article-graphic-canvas article-canvas-purple">
                <svg class="article-canvas-shape" style="top: -20px; right: -20px; width: 140px; height: 140px;" viewBox="0 0 100 100">
                  <path fill="#c084fc" d="M34,-46C44,-37,52,-26,57,-12C62,1,64,19,57,33C50,47,37,57,21,63C5,70,-13,73,-28,68C-44,62,-57,49,-65,33C-73,17,-75,-1,-70,-18C-64,-34,-51,-49,-36,-58C-22,-66,-11,-68,2,-71C15,-74,30,-62,34,-46Z" transform="translate(50 50)" />
                </svg>
                <div class="article-mockup-badge">
                  <span class="material-symbols-outlined" style="font-size: 24px; color: #7e22ce;">bar_chart</span>
                  <span style="font-size: 0.95rem;">SPSS Data</span>
                  <span style="background: #fdf4ff; color: #a21caf; padding: 2px 8px; border-radius: 6px; font-size: 0.72rem; font-weight: 700;">p &lt; 0.001</span>
                </div>
              </div>
            </div>
            <div class="article-card-meta-line">
              <span class="article-category-pill pill-stats">Biostatistics</span>
              <span class="article-read-time">Read Time: 10 minutes</span>
            </div>
            <h3 class="article-card-h3">
              Biostatistical Analysis: Sample Size Calculation &amp; SPSS Testing Explained
            </h3>
            <p class="article-card-summary">
              Choosing between parametric and non-parametric tests, p-value interpretation, confidence intervals, and multivariate logistic regression modeling.
            </p>
            <a href="services/statistical-analysis.html" class="article-read-now-link">
              <span>Read now</span>
              <span class="material-symbols-outlined">arrow_forward</span>
            </a>
          </article>

          <!-- Card 6 -->
          <article class="article-card-v2" data-category="cases" data-topic="care-guidelines">
            <div class="article-card-thumb-frame">
              <div class="article-graphic-canvas article-canvas-ocean">
                <svg class="article-canvas-shape" style="bottom: -20px; right: -20px; width: 150px; height: 150px;" viewBox="0 0 100 100">
                  <path fill="#38bdf8" d="M39,-51C50,-42,59,-30,64,-16C69,-1,70,16,63,30C56,43,42,53,26,60C11,67,-6,71,-21,67C-37,63,-51,51,-60,36C-68,21,-71,3,-67,-14C-63,-31,-51,-46,-37,-55C-23,-64,-12,-66,1,-68C14,-70,29,-60,39,-51Z" transform="translate(50 50)" />
                </svg>
                <div class="article-mockup-badge">
                  <span class="material-symbols-outlined" style="font-size: 24px; color: #0284c7;">medical_services</span>
                  <span style="font-size: 0.95rem;">CARE 2024</span>
                  <span style="background: #f0fdf4; color: #16a34a; padding: 2px 8px; border-radius: 6px; font-size: 0.72rem; font-weight: 700;">Case Series</span>
                </div>
              </div>
            </div>
            <div class="article-card-meta-line">
              <span class="article-category-pill pill-product">Case Reports</span>
              <span class="article-read-time">Read Time: 4 minutes</span>
            </div>
            <h3 class="article-card-h3">
              Writing High-Yield Medical Case Reports: The 2024 CARE Guidelines
            </h3>
            <p class="article-card-summary">
              Transform rare clinical presentations, atypical drug reactions, and diagnostic dilemmas into peer-reviewed published case series without rejection.
            </p>
            <a href="services/case-report.html" class="article-read-now-link">
              <span>Read now</span>
              <span class="material-symbols-outlined">arrow_forward</span>
            </a>
          </article>

          <!-- Card 7 -->
          <article class="article-card-v2" data-category="protocols" data-topic="ethics-clearance">
            <div class="article-card-thumb-frame">
              <div class="article-graphic-canvas article-canvas-blue">
                <svg class="article-canvas-shape" style="top: -20px; left: -20px; width: 140px; height: 140px;" viewBox="0 0 100 100">
                  <path fill="#60a5fa" d="M30,-45C42,-39,56,-32,62,-20C68,-9,66,6,60,20C54,34,44,46,31,54C19,62,4,65,-10,63C-24,61,-37,53,-48,42C-59,31,-68,15,-66,1C-64,-14,-50,-27,-38,-35C-27,-42,-13,-44,0,-45Z" transform="translate(50 50)" />
                </svg>
                <div class="article-mockup-badge">
                  <span class="material-symbols-outlined" style="font-size: 24px; color: #2563eb;">checklist</span>
                  <span style="font-size: 0.95rem;">IEC Clearance</span>
                  <span style="background: #e0f2fe; color: #0284c7; padding: 2px 8px; border-radius: 6px; font-size: 0.72rem; font-weight: 700;">Approved</span>
                </div>
              </div>
            </div>
            <div class="article-card-meta-line">
              <span class="article-category-pill pill-thesis">Protocols &amp; Synopsis</span>
              <span class="article-read-time">Read Time: 6 minutes</span>
            </div>
            <h3 class="article-card-h3">
              PG Synopsis &amp; Ethics Committee (IEC) Clearance Without Delays
            </h3>
            <p class="article-card-summary">
              Essential documentation, informed consent form formulation, and addressing institutional ethics review committee queries on the first submission round.
            </p>
            <a href="services/protocol.html" class="article-read-now-link">
              <span>Read now</span>
              <span class="material-symbols-outlined">arrow_forward</span>
            </a>
          </article>

          <!-- Card 8 -->
          <article class="article-card-v2" data-category="reviews" data-topic="prospero-prisma">
            <div class="article-card-thumb-frame">
              <div class="article-graphic-canvas article-canvas-teal">
                <svg class="article-canvas-shape" style="bottom: -20px; right: -20px; width: 140px; height: 140px;" viewBox="0 0 100 100">
                  <path fill="#00c2b2" d="M37,-52C48,-43,57,-31,63,-17C69,-3,71,15,64,28C57,41,40,49,24,56C8,63,-8,69,-24,65C-39,62,-53,49,-61,33C-69,18,-70,0,-66,-17C-61,-33,-50,-48,-36,-56C-22,-65,-11,-67,2,-70Z" transform="translate(50 50)" />
                </svg>
                <div class="article-mockup-badge">
                  <span class="material-symbols-outlined" style="font-size: 24px; color: #004e57;">science</span>
                  <span style="font-size: 0.95rem;">Narrative vs Scoping</span>
                </div>
              </div>
            </div>
            <div class="article-card-meta-line">
              <span class="article-category-pill pill-productivity">Literature Reviews</span>
              <span class="article-read-time">Read Time: 8 minutes</span>
            </div>
            <h3 class="article-card-h3">
              Narrative vs. Scoping vs. Systematic Reviews: Which Methodology to Choose?
            </h3>
            <p class="article-card-summary">
              Differentiating evidence synthesis methodologies to match your postgraduate timeline, clinical scope, and journal publication expectations.
            </p>
            <a href="services/review-article.html" class="article-read-now-link">
              <span>Read now</span>
              <span class="material-symbols-outlined">arrow_forward</span>
            </a>
          </article>

          <!-- Card 9 -->
          <article class="article-card-v2" data-category="publishing" data-topic="journal-selection">
            <div class="article-card-thumb-frame">
              <div class="article-graphic-canvas article-canvas-sky">
                <svg class="article-canvas-shape" style="top: -20px; right: -20px; width: 150px; height: 150px;" viewBox="0 0 100 100">
                  <path fill="#38bdf8" d="M41,-54C52,-45,60,-32,64,-17C67,-2,66,15,59,29C52,43,39,53,24,60C9,67,-8,71,-24,67C-39,62,-54,50,-62,34C-71,19,-74,0,-69,-17C-64,-34,-51,-48,-36,-57Z" transform="translate(50 50)" />
                </svg>
                <div class="article-mockup-badge">
                  <span class="material-symbols-outlined" style="font-size: 24px; color: #0284c7;">hub</span>
                  <span style="font-size: 0.95rem;">E-Poster &amp; QR</span>
                  <span style="background: #fef3c7; color: #d97706; padding: 2px 8px; border-radius: 6px; font-size: 0.72rem; font-weight: 700;">Conference</span>
                </div>
              </div>
            </div>
            <div class="article-card-meta-line">
              <span class="article-category-pill pill-product">Conference Abstracts</span>
              <span class="article-read-time">Read Time: 5 minutes</span>
            </div>
            <h3 class="article-card-h3">
              Designing Winning E-Posters &amp; Conference Abstracts for Medical Summits
            </h3>
            <p class="article-card-summary">
              Visual data layout hierarchy, QR code integrations for high-res figures, and concise abstract drafting for national and international conferences.
            </p>
            <a href="services/abstract-poster.html" class="article-read-now-link">
              <span>Read now</span>
              <span class="material-symbols-outlined">arrow_forward</span>
            </a>
          </article>

          <!-- Empty Filter State -->
          <div class="articles-empty-state" id="articlesEmptyState" style="display: none;">
            <span class="material-symbols-outlined" style="font-size: 48px; color: #94a3b8; margin-bottom: 12px;">search_off</span>
            <h4 style="font-size: 1.2rem; color: #0c2340; margin-bottom: 8px;">No matching articles found</h4>
            <p style="font-size: 0.92rem; color: #64748b; margin-bottom: 18px;">Try selecting a different category or topic from the filters above.</p>
            <button type="button" class="btn btn-mint btn-sm" onclick="document.getElementById('articleCategorySelect').value='all'; document.getElementById('articleTopicSelect').value='all'; document.getElementById('articleCategorySelect').dispatchEvent(new Event('change'));">
              <span>Reset Filters</span>
            </button>
          </div>

        </div>

      </div>
    </section>

    <!-- Closing CTA Banner -->
    <section class="cta-banner-section" aria-label="Closing CTA Banner">
      <div class="container">
        <div class="cta-banner-grid">
          <div>
            <h2 class="cta-banner-title">Ready to Start Your Medical Research Journey?</h2>
            <p class="cta-banner-desc">Whether you need help with a single statistical test or full thesis writing, MedZen Writes is your trusted academic partner.</p>
            <button type="button" class="btn btn-mint btn-lg" data-modal-target="consultationModal">
              <span class="material-symbols-outlined">calendar_month</span>
              <span>Book Consultation</span>
            </button>
          </div>
          <div>
            <div class="verified-review-card">
              <div class="verified-tag">
                <span class="material-symbols-outlined" style="font-size: 16px; color: var(--mint-primary);">verified</span>
                <span>Verified Authors</span>
              </div>
              <div class="verified-percentage">98%</div>
              <div class="verified-label">Satisfied Medical Researchers</div>
              <div class="verified-stars-row">
                <span class="material-symbols-outlined" style="font-size: 18px; font-variation-settings: 'FILL' 1;">star</span>
                <span class="material-symbols-outlined" style="font-size: 18px; font-variation-settings: 'FILL' 1;">star</span>
                <span class="material-symbols-outlined" style="font-size: 18px; font-variation-settings: 'FILL' 1;">star</span>
                <span class="material-symbols-outlined" style="font-size: 18px; font-variation-settings: 'FILL' 1;">star</span>
                <span class="material-symbols-outlined" style="font-size: 18px; font-variation-settings: 'FILL' 1;">star</span>
                <span style="color: var(--teal-900); margin-left: 4px;">315+ Reviews</span>
              </div>
              <a href="testimonials.html" class="btn btn-mint btn-sm" style="width: 100%;">
                <span>Read Client Reviews</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

{gs.get_footer()}
</body>
</html>
"""

with open(os.path.join(base_dir, "blog.html"), "w", encoding="utf-8") as f:
    f.write(blog_html)
print("Generated blog.html")

# -----------------------------------------------------------------------------
# 8. CONTACT PAGE: contact.html
# -----------------------------------------------------------------------------
contact_html = f"""{gs.get_base_meta(
  title="Contact MedZen Writes | Medical Thesis Writing Services",
  description="Get in touch with MedZen Writes for medical research paper publication and thesis writing services. Call, email or WhatsApp us today.",
  canonical_url="contact"
)}
  <script type="application/ld+json">
  {{
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact MedZen Writes",
    "description": "Get in touch with MedZen Writes for medical research paper publication and thesis writing services. Call, email, or visit our Chennai office.",
    "url": "https://www.medzenwrites.com/contact",
    "mainEntity": {{
      "@type": "MedicalBusiness",
      "name": "MedZen Writes",
      "telephone": "+919176365161",
      "email": "info@medzeninnovations.in",
      "address": {{
        "@type": "PostalAddress",
        "streetAddress": "Old No. 56 / New No. 125, Venkatachalam Street, Royapettah",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "postalCode": "600014",
        "addressCountry": "IN"
      }}
    }}
  }}
  </script>
</head>
<body>
{gs.get_header("contact")}

  <main id="main-content">
    <div class="container" style="padding-top: 24px;">
      <nav class="breadcrumbs" aria-label="Breadcrumbs">
        <a href="index.html">Home</a>
        <span class="separator">/</span>
        <span class="current">Contact Us</span>
      </nav>
    </div>

    <!-- Hero -->
    <section class="theme-hero" style="padding: 50px 0 80px;" aria-label="Contact Introduction">
      <div class="hero-watermark" aria-hidden="true">contact</div>
      <div class="container">
        <div class="theme-hero-content" style="max-width: 1080px; text-align: center; margin: 0 auto;">
          <span class="eyebrow-badge eyebrow-badge-white"><span class="material-symbols-outlined">headset_mic</span> Get in Touch</span>
          <h1 class="theme-hero-title">Contact MedZen Writes</h1>
          <p class="theme-hero-subtitle" style="margin: 0 auto 28px;">
            Ready to collaborate or have questions? Speak directly with our medical academic coordinators today.
          </p>
        </div>
      </div>
    </section>

    <!-- Main Contact Section -->
    <section class="section" aria-labelledby="contact-heading">
      <div class="container">
        <h2 id="contact-heading" style="display: none;">Contact Form and Office Information</h2>
        <div class="grid grid-2" style="gap: clamp(32px, 5vw, 64px); align-items: flex-start;">
          <!-- Left: NAP & Information -->
          <div>
            <div class="card-pillar" style="margin-bottom: 24px;">
              <h3 style="font-size: 1.4rem; color: var(--teal-900); margin-bottom: 16px;">Office &amp; Contact Details</h3>
              <p style="color: var(--text-body); font-size: 0.98rem; line-height: 1.75; margin-bottom: 24px;">
                Whether you're a clinician with questions about our thesis writing services, a faculty member preparing a systematic review, or looking for statistical analysis, we're here to help.
              </p>

              <div style="display: flex; flex-direction: column; gap: 20px;">
                <div style="display: flex; align-items: flex-start; gap: 14px;">
                  <div class="icon-box"><span class="material-symbols-outlined">call</span></div>
                  <div>
                    <h5 style="font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase;">Direct Phone Line</h5>
                    <a href="tel:+919176365161" style="font-size: 1.15rem; font-weight: 700; color: var(--teal-hero);">+91 91763 65161</a>
                  </div>
                </div>

                <div style="display: flex; align-items: flex-start; gap: 14px;">
                  <div class="icon-box"><span class="material-symbols-outlined">mail</span></div>
                  <div>
                    <h5 style="font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase;">Official Email</h5>
                    <a href="mailto:info@medzeninnovations.in" style="font-size: 1.15rem; font-weight: 700; color: var(--teal-hero);">info@medzeninnovations.in</a>
                  </div>
                </div>

                <div style="display: flex; align-items: flex-start; gap: 14px;">
                  <div class="icon-box"><span class="material-symbols-outlined">location_on</span></div>
                  <div>
                    <h5 style="font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase;">Chennai Registered Office</h5>
                    <p style="font-size: 0.95rem; color: var(--text-headline); font-weight: 600; margin: 0;">
                      Old No. 56 / New No. 125, Venkatachalam Street, Royapettah, Chennai – 600014, Tamil Nadu, India
                    </p>
                  </div>
                </div>

                <div style="display: flex; align-items: flex-start; gap: 14px;">
                  <div class="icon-box"><span class="material-symbols-outlined">schedule</span></div>
                  <div>
                    <h5 style="font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase;">Office Working Hours</h5>
                    <p style="font-size: 0.95rem; color: var(--text-headline); margin: 0;">
                      Monday – Friday: 9:00 AM – 6:00 PM IST<br>
                      Saturday: 10:00 AM – 4:00 PM IST<br>
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="live-image-frame" style="height: 240px;">
              <img src="assets/images/doctor-stethoscope-research.jpg" alt="Academic medical coordinator ready to assist with thesis and research writing">
              <div class="live-image-badge">
                <span class="material-symbols-outlined">support_agent</span>
                <span>Dedicated Medical Coordinator Support</span>
              </div>
            </div>
          </div>

          <!-- Right: Send Us a Message Form -->
          <div class="card-pillar" style="box-shadow: var(--shadow-md);">
            <h3 style="font-size: 1.4rem; color: var(--teal-900); margin-bottom: 8px;">Send Us a Message</h3>
            <p style="color: var(--text-muted); font-size: 0.925rem; margin-bottom: 24px;">
              Fill in your research requirements below. We guarantee a response from an academic specialist within 2 hours during business hours.
            </p>

            <form class="contact-form-handler">
              <div class="form-group">
                <label class="form-label" for="cName">Full Name *</label>
                <input type="text" id="cName" class="form-control" placeholder="Dr. / Researcher Name" required>
              </div>

              <div class="grid grid-2" style="gap: 16px; margin-bottom: 16px;">
                <div class="form-group" style="margin: 0;">
                  <label class="form-label" for="cEmail">Email Address *</label>
                  <input type="email" id="cEmail" class="form-control" placeholder="doctor@hospital.edu" required>
                </div>
                <div class="form-group" style="margin: 0;">
                  <label class="form-label" for="cPhone">Phone Number *</label>
                  <input type="tel" id="cPhone" class="form-control" placeholder="+91 98765 43210" required>
                </div>
              </div>

              <div class="form-group">
                <label class="form-label" for="cSubject">Subject / Service Interest *</label>
                <select id="cSubject" class="form-control" required>
                  <option value="">-- Select Subject / Service --</option>
                  <option value="PG Thesis Writing Enquiry">PG Thesis Writing Enquiry (MD / MS / DNB)</option>
                  <option value="Original Research Article Publication">Original Research Article Publication</option>
                  <option value="Systematic Review and Meta-Analysis">Systematic Review &amp; Meta-Analysis</option>
                  <option value="Statistical Analysis Assistance">Biostatistical Analysis (SPSS / R)</option>
                  <option value="Case Report Writing">Medical Case Report Writing</option>
                  <option value="Thesis to Manuscript Conversion">Thesis to Manuscript Conversion</option>
                  <option value="Protocol and Synopsis Writing">Protocol &amp; Synopsis Writing</option>
                  <option value="General Academic Partnership">General Academic Partnership</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label" for="cMessage">Message / Project Details *</label>
                <textarea id="cMessage" class="form-control" rows="4" placeholder="Please describe your study topic, timeline, target journal, or any specific university requirements." required></textarea>
              </div>

              <button type="submit" class="btn btn-mint btn-lg" style="width: 100%;">
                <span class="material-symbols-outlined">send</span>
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>

{gs.get_footer()}
</body>
</html>
"""

with open(os.path.join(base_dir, "contact.html"), "w", encoding="utf-8") as f:
    f.write(contact_html)
print("Generated contact.html")

# -----------------------------------------------------------------------------
# 10. LEGAL PAGES
# -----------------------------------------------------------------------------
def generate_legal_page(filename, title, heading, content_body):
    html = f"""{gs.get_base_meta(
      title=f"{title} | MedZen Writes",
      description=f"{title} for MedZen Writes — medical research paper publication and thesis writing services.",
      canonical_url=filename.replace('.html', '')
    )}
  <meta name="robots" content="noindex, follow">
</head>
<body>
{gs.get_header()}

  <main id="main-content">
    <div class="container" style="padding-top: 24px;">
      <nav class="breadcrumbs" aria-label="Breadcrumbs">
        <a href="index.html">Home</a>
        <span class="separator">/</span>
        <span class="current">{title}</span>
      </nav>
    </div>

    <!-- Legal Header -->
    <section class="theme-hero" style="padding: 40px 0 60px;">
      <div class="container">
        <div class="theme-hero-content" style="text-align: center;">
          <h1 class="theme-hero-title" style="font-size: 2.4rem; margin-bottom: 10px;">{heading}</h1>
          <p style="color: rgba(255, 255, 255, 0.85); font-size: 0.95rem; margin: 0;">Last Updated: 2026 | Unit of MedZen Innovations Pvt. Ltd.</p>
        </div>
      </div>
    </section>

    <!-- Legal Body -->
    <section class="section">
      <div class="container container-sm">
        <div class="card-pillar" style="padding: 40px; line-height: 1.85; color: var(--text-body);">
          {content_body}
        </div>
      </div>
    </section>
  </main>

{gs.get_footer()}
</body>
</html>
"""
    with open(os.path.join(base_dir, filename), "w", encoding="utf-8") as f:
        f.write(html)
    print(f"Generated {filename}")

generate_legal_page(
    "privacy-policy.html",
    "Privacy Policy",
    "Privacy Policy — MedZen Writes",
    """
    <p>MedZen Writes ("we", "our", or "us"), a unit of MedZen Innovations Pvt. Ltd., is committed to protecting the privacy and confidentiality of our clients, doctors, postgraduate scholars, and researchers.</p>
    <h3 style="color: var(--teal-hero); margin: 24px 0 12px;">1. Information We Collect</h3>
    <p>We collect information provided directly by you when inquiring about or engaging our medical research paper publication and thesis writing services. This includes contact details (name, email, phone number), institutional affiliations, academic department, research protocols, raw datasets, hospital case records, and mentor feedback.</p>
    <h3 style="color: var(--teal-hero); margin: 24px 0 12px;">2. Confidentiality & Non-Disclosure</h3>
    <p>All academic and clinical data submitted to MedZen Writes is strictly confidential. We maintain robust technical safeguards and non-disclosure standards to ensure that patient records, unpublished clinical trial data, and proprietary research findings are never shared, published, or distributed without explicit authorization.</p>
    <h3 style="color: var(--teal-hero); margin: 24px 0 12px;">3. Use of Data</h3>
    <p>Your data is used solely for the fulfillment of contracted academic writing, biostatistical analysis, and manuscript preparation services. We do not sell or monetize personal or research data to third parties.</p>
    <h3 style="color: var(--teal-hero); margin: 24px 0 12px;">4. Contact Regarding Privacy</h3>
    <p>If you have any questions regarding our privacy practices, please contact us at <a href="mailto:info@medzeninnovations.in">info@medzeninnovations.in</a> or write to our registered office: Old No. 56 / New No. 125, Venkatachalam Street, Royapettah, Chennai – 600014, Tamil Nadu, India.</p>
    """
)

generate_legal_page(
    "refund-policy.html",
    "Cancellation and Refund Policy",
    "Cancellation & Refund Policy",
    """
    <p>At MedZen Writes, we pride ourselves on providing high-quality, milestone-based medical research paper publication and thesis writing services.</p>
    <h3 style="color: var(--teal-hero); margin: 24px 0 12px;">1. Service Milestone Structure</h3>
    <p>Our academic writing and thesis projects are executed in defined stages (e.g., Protocol, Literature Review, Methodology & Statistics, Final Manuscript). Payment milestones correspond directly to the research work performed in each phase.</p>
    <h3 style="color: var(--teal-hero); margin: 24px 0 12px;">2. Revisions Policy</h3>
    <p>We provide unlimited revisions within the original agreed scope of work to ensure your thesis or manuscript aligns with institutional guidelines and guide recommendations.</p>
    <h3 style="color: var(--teal-hero); margin: 24px 0 12px;">3. Cancellation and Refunds</h3>
    <p>If a project is cancelled prior to the commencement of drafting, a refund minus administrative processing fees may be issued. Once a milestone draft has been delivered and approved, payments allocated to that milestone are non-refundable. Any refund requests must be formally submitted in writing to <a href="mailto:info@medzeninnovations.in">info@medzeninnovations.in</a>.</p>
    """
)

generate_legal_page(
    "terms-conditions.html",
    "Terms & Conditions",
    "Terms and Conditions of Service",
    """
    <p>Welcome to MedZen Writes. By accessing our website or engaging our medical research paper publication and thesis writing services, you agree to comply with and be bound by the following terms and conditions.</p>
    <h3 style="color: var(--teal-hero); margin: 24px 0 12px;">1. Academic Ethics & Integrity</h3>
    <p>MedZen Writes provides ethical academic writing, editing, formatting, and biostatistical analysis support. We adhere strictly to ICMJE, PRISMA, CARE, and SANRA academic reporting benchmarks. Clients remain the primary authors and intellectual owners of their research.</p>
    <h3 style="color: var(--teal-hero); margin: 24px 0 12px;">2. Publication Disclaimers</h3>
    <p>While MedZen Writes ensures maximum scientific quality, formatting precision, and resubmission assistance to up to 4 journals, final journal acceptance is governed exclusively by third-party peer review and editorial boards. Acceptance cannot be guaranteed by any ethical academic service.</p>
    <h3 style="color: var(--teal-hero); margin: 24px 0 12px;">3. Governing Law & Jurisdiction</h3>
    <p>These terms and conditions are governed by the laws of India. Any disputes arising in connection with our services shall be subject to the exclusive jurisdiction of the competent courts in Chennai, Tamil Nadu, India.</p>
    """
)

generate_legal_page(
    "shipping-policy.html",
    "Shipping Policy",
    "Shipping & Digital Delivery Policy",
    """
    <p>MedZen Writes provides digital academic writing, thesis consultation, statistical analysis, and manuscript preparation services.</p>
    <h3 style="color: var(--teal-hero); margin: 24px 0 12px;">Digital Delivery</h3>
    <p>All project deliverables (manuscripts, thesis chapters, statistical reports, plagiarism certificates, PowerPoint posters, and print-ready PDFs) are delivered electronically via secure email or download links. Physical shipping is not applicable for our standard digital service offerings.</p>
    """
)

# -----------------------------------------------------------------------------
# 11. SITEMAP & ROBOTS.TXT
# -----------------------------------------------------------------------------
sitemap_xml = """<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.medzenwrites.com/</loc>
    <lastmod>2026-09-13</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.medzenwrites.com/about</loc>
    <lastmod>2026-09-13</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.medzenwrites.com/services</loc>
    <lastmod>2026-09-13</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.medzenwrites.com/services/original-research</loc>
    <lastmod>2026-09-13</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.medzenwrites.com/services/systematic-review</loc>
    <lastmod>2026-09-13</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.medzenwrites.com/services/case-report</loc>
    <lastmod>2026-09-13</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.medzenwrites.com/services/thesis</loc>
    <lastmod>2026-09-13</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.medzenwrites.com/services/statistical-analysis</loc>
    <lastmod>2026-09-13</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.medzenwrites.com/services/review-article</loc>
    <lastmod>2026-09-13</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.medzenwrites.com/services/protocol</loc>
    <lastmod>2026-09-13</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.medzenwrites.com/services/thesis-to-manuscript</loc>
    <lastmod>2026-09-13</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.medzenwrites.com/services/abstract-poster</loc>
    <lastmod>2026-09-13</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.medzenwrites.com/publications</loc>
    <lastmod>2026-09-13</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.medzenwrites.com/testimonials</loc>
    <lastmod>2026-09-13</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://www.medzenwrites.com/blog</loc>
    <lastmod>2026-09-13</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.medzenwrites.com/faq</loc>
    <lastmod>2026-09-13</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://www.medzenwrites.com/contact</loc>
    <lastmod>2026-09-13</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
"""

with open(os.path.join(base_dir, "sitemap.xml"), "w", encoding="utf-8") as f:
    f.write(sitemap_xml)
print("Generated sitemap.xml")

robots_txt = """User-agent: *
Allow: /
Disallow: /privacy-policy
Disallow: /refund-policy
Disallow: /terms-conditions
Disallow: /shipping-policy

Sitemap: https://www.medzenwrites.com/sitemap.xml
"""

with open(os.path.join(base_dir, "robots.txt"), "w", encoding="utf-8") as f:
    f.write(robots_txt)
print("Generated robots.txt")
