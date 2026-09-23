import os
import generate_site as gs

base_dir = os.path.dirname(os.path.abspath(__file__))
serv_dir = os.path.join(base_dir, "services")
os.makedirs(serv_dir, exist_ok=True)

# -----------------------------------------------------------------------------
# SERVICES HUB PAGE: services.html
# -----------------------------------------------------------------------------
services_hub_html = f"""{gs.get_base_meta(
  title="Medical Research Paper Publication Services | MedZen Writes",
  description="Explore MedZen Writes' medical thesis writing services — original research articles, SRMA, case reports, statistical analysis & journal publication support.",
  canonical_url="services"
)}
  <script type="application/ld+json">
  {{
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Medical Research Paper Publication & Thesis Writing Services",
    "description": "Comprehensive medical writing services to support your research and publication goals — from your first protocol to a published, journal-ready manuscript.",
    "url": "https://medzenwrites.in/services",
    "provider": {{
      "@type": "MedicalBusiness",
      "name": "MedZen Writes",
      "telephone": "+919176365161",
      "email": "info@medzeninnovations.in"
    }}
  }}
  </script>
</head>
<body>
{gs.get_header("services")}

  <main id="main-content">
    <div class="container" style="padding-top: 24px;">
      <nav class="breadcrumbs" aria-label="Breadcrumbs">
        <a href="index.html">Home</a>
        <span class="separator">/</span>
        <span class="current">Services Hub</span>
      </nav>
    </div>

    <!-- Hero -->
    <section class="theme-hero" style="padding: 50px 0 80px;" aria-label="Services Introduction">
      <div class="hero-watermark" aria-hidden="true">services</div>
      <div class="container">
        <div class="theme-hero-content" style="max-width: 1080px; text-align: center; margin: 0 auto;">
          <span class="eyebrow-badge eyebrow-badge-white"><span class="material-symbols-outlined">hub</span> Comprehensive Academic Suite</span>
          <h1 class="theme-hero-title">Medical Research Paper Publication &amp; Thesis Services</h1>
          <p class="theme-hero-subtitle" style="margin: 0 auto 28px;">
            Comprehensive medical writing services to support your research and publication goals — from your initial synopsis and protocol to a published, journal-ready manuscript.
          </p>
          <button type="button" class="btn btn-mint btn-lg" data-modal-target="consultationModal">
            <span class="material-symbols-outlined">calendar_month</span>
            <span>Book Consultation</span>
          </button>
        </div>
      </div>
    </section>

    <!-- 10 Services Grid (Spacious Section) -->
    <section class="section" aria-labelledby="all-services-heading">
      <div class="container">
        <div class="section-header">
          <span class="eyebrow-badge"><span class="material-symbols-outlined">view_module</span> Core Capabilities</span>
          <h2 id="all-services-heading" style="font-size: clamp(2rem, 3.5vw, 2.8rem);">9 Specialized Medical Writing Disciplines</h2>
          <p class="section-subtitle">Tailored expertise for postgraduate medical residents, clinical fellows, faculty, and health science researchers.</p>
        </div>

        <div class="grid grid-3">
          <!-- Card 1 -->
          <a href="services/original-research.html" class="service-card">
            <div class="service-card-header">
              <div class="icon-box"><span class="material-symbols-outlined">description</span></div>
              <span class="service-card-number">01</span>
            </div>
            <h3 class="service-card-title">Original Research Articles</h3>
            <p class="service-card-desc">End-to-end original research article writing from study concept to journal submission in full IMRaD format.</p>
            <div class="service-tags">
              <span class="tag-pill">IMRaD Format</span>
              <span class="tag-pill">Literature Review</span>
              <span class="tag-pill">Data Analysis</span>
              <span class="tag-pill">Journal Submission</span>
            </div>
            <div class="service-card-footer">
              <div class="link-arrow"><span>Explore Original Research</span> <span class="material-symbols-outlined">arrow_forward</span></div>
            </div>
          </a>

          <!-- Card 2 -->
          <a href="services/systematic-review.html" class="service-card">
            <div class="service-card-header">
              <div class="icon-box"><span class="material-symbols-outlined">join_inner</span></div>
              <span class="service-card-number">02</span>
            </div>
            <h3 class="service-card-title">Systematic Review &amp; Meta-Analysis</h3>
            <p class="service-card-desc">Comprehensive SRMA services following international PRISMA 2020 guidelines and PROSPERO protocol registration.</p>
            <div class="service-tags">
              <span class="tag-pill">PROSPERO</span>
              <span class="tag-pill">PRISMA 2020</span>
              <span class="tag-pill">RevMan Plots</span>
              <span class="tag-pill">GRADE Quality</span>
            </div>
            <div class="service-card-footer">
              <div class="link-arrow"><span>Explore SRMA Services</span> <span class="material-symbols-outlined">arrow_forward</span></div>
            </div>
          </a>

          <!-- Card 3 -->
          <a href="services/case-report.html" class="service-card">
            <div class="service-card-header">
              <div class="icon-box"><span class="material-symbols-outlined">medical_services</span></div>
              <span class="service-card-number">03</span>
            </div>
            <h3 class="service-card-title">Medical Case Reports</h3>
            <p class="service-card-desc">Expert CARE-compliant case report drafting with clinical timelines, high-res diagnostic image formatting, and literature context.</p>
            <div class="service-tags">
              <span class="tag-pill">CARE Guidelines</span>
              <span class="tag-pill">Diagnostic Images</span>
              <span class="tag-pill">Clinical Timeline</span>
              <span class="tag-pill">Rare Pathologies</span>
            </div>
            <div class="service-card-footer">
              <div class="link-arrow"><span>Explore Case Reports</span> <span class="material-symbols-outlined">arrow_forward</span></div>
            </div>
          </a>

          <!-- Card 4 -->
          <a href="services/thesis.html" class="service-card">
            <div class="service-card-header">
              <div class="icon-box"><span class="material-symbols-outlined">fact_check</span></div>
              <span class="service-card-number">04</span>
            </div>
            <h3 class="service-card-title">PG Thesis &amp; Dissertation Writing</h3>
            <p class="service-card-desc">Comprehensive MD, MS, DNB postgraduate thesis writing assistance adhering to NMC/NBE guidelines and university deadlines.</p>
            <div class="service-tags">
              <span class="tag-pill">NMC/NBE Compliant</span>
              <span class="tag-pill">Turnitin Report</span>
              <span class="tag-pill">Master Chart</span>
              <span class="tag-pill">Ethics Protocol</span>
            </div>
            <div class="service-card-footer">
              <div class="link-arrow"><span>Explore Thesis Services</span> <span class="material-symbols-outlined">arrow_forward</span></div>
            </div>
          </a>

          <!-- Card 5 -->
          <a href="services/statistical-analysis.html" class="service-card">
            <div class="service-card-header">
              <div class="icon-box"><span class="material-symbols-outlined">bar_chart</span></div>
              <span class="service-card-number">05</span>
            </div>
            <h3 class="service-card-title">Medical Statistical Analysis</h3>
            <p class="service-card-desc">Robust biostatistical analysis using SPSS, R Studio, and STATA with sample size calculation, p-values, and publication tables.</p>
            <div class="service-tags">
              <span class="tag-pill">SPSS &amp; R Studio</span>
              <span class="tag-pill">Sample Size</span>
              <span class="tag-pill">Regression Models</span>
              <span class="tag-pill">Kaplan-Meier</span>
            </div>
            <div class="service-card-footer">
              <div class="link-arrow"><span>Explore Statistical Analysis</span> <span class="material-symbols-outlined">arrow_forward</span></div>
            </div>
          </a>

          <!-- Card 6 -->
          <a href="services/review-article.html" class="service-card">
            <div class="service-card-header">
              <div class="icon-box"><span class="material-symbols-outlined">science</span></div>
              <span class="service-card-number">06</span>
            </div>
            <h3 class="service-card-title">Narrative &amp; Scoping Reviews</h3>
            <p class="service-card-desc">In-depth narrative reviews and scoping reviews structured using the SANRA quality scale and comprehensive thematic mapping.</p>
            <div class="service-tags">
              <span class="tag-pill">SANRA Standard</span>
              <span class="tag-pill">Critical Synthesis</span>
              <span class="tag-pill">Thematic Tables</span>
              <span class="tag-pill">Expert Perspectives</span>
            </div>
            <div class="service-card-footer">
              <div class="link-arrow"><span>Explore Review Articles</span> <span class="material-symbols-outlined">arrow_forward</span></div>
            </div>
          </a>

          <!-- Card 7 -->
          <a href="services/protocol.html" class="service-card">
            <div class="service-card-header">
              <div class="icon-box"><span class="material-symbols-outlined">checklist</span></div>
              <span class="service-card-number">07</span>
            </div>
            <h3 class="service-card-title">Research Protocols &amp; Synopsis</h3>
            <p class="service-card-desc">Flawless study synopsis and protocol writing for Institutional Ethics Committee (IEC) review, funding grants, and trial registration.</p>
            <div class="service-tags">
              <span class="tag-pill">IEC / IRB Clearance</span>
              <span class="tag-pill">CTRI Registration</span>
              <span class="tag-pill">Hypothesis Design</span>
              <span class="tag-pill">Methodology Plan</span>
            </div>
            <div class="service-card-footer">
              <div class="link-arrow"><span>Explore Protocols</span> <span class="material-symbols-outlined">arrow_forward</span></div>
            </div>
          </a>

          <!-- Card 8 -->
          <a href="services/thesis-to-manuscript.html" class="service-card">
            <div class="service-card-header">
              <div class="icon-box"><span class="material-symbols-outlined">swap_horiz</span></div>
              <span class="service-card-number">08</span>
            </div>
            <h3 class="service-card-title">Thesis to Manuscript Conversion</h3>
            <p class="service-card-desc">Condense your 150-page postgraduate thesis into a concise, high-impact 3,500-word journal paper ready for PubMed/Scopus submission.</p>
            <div class="service-tags">
              <span class="tag-pill">Length Condensation</span>
              <span class="tag-pill">Journal Adaptation</span>
              <span class="tag-pill">Abstract Tuning</span>
              <span class="tag-pill">Reference Updating</span>
            </div>
            <div class="service-card-footer">
              <div class="link-arrow"><span>Explore Conversion</span> <span class="material-symbols-outlined">arrow_forward</span></div>
            </div>
          </a>

          <!-- Card 9 -->
          <a href="services/abstract-poster.html" class="service-card">
            <div class="service-card-header">
              <div class="icon-box"><span class="material-symbols-outlined">hub</span></div>
              <span class="service-card-number">09</span>
            </div>
            <h3 class="service-card-title">Abstract &amp; E-Poster Design</h3>
            <p class="service-card-desc">Compelling structured conference abstracts and high-resolution academic e-posters formatted for national and international medical summits.</p>
            <div class="service-tags">
              <span class="tag-pill">Conference Abstract</span>
              <span class="tag-pill">Scientific Poster</span>
              <span class="tag-pill">High-DPI Vector</span>
              <span class="tag-pill">Summit Templates</span>
            </div>
            <div class="service-card-footer">
              <div class="link-arrow"><span>Explore E-Posters</span> <span class="material-symbols-outlined">arrow_forward</span></div>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- Academic Excellence In Practice (Live Medical Imagery Showcase) -->
    <section class="section section-mint-soft" aria-labelledby="excellence-heading">
      <div class="container">
        <div class="grid grid-2" style="align-items: center; gap: clamp(32px, 5vw, 64px);">
          <div>
            <span class="eyebrow-badge eyebrow-badge-mint"><span class="material-symbols-outlined">clinical_notes</span> Clinical Standards</span>
            <h2 id="excellence-heading" style="font-size: clamp(1.85rem, 3vw, 2.5rem); margin-bottom: 20px; color: var(--teal-900);">
              Publication-Grade Standards Across Every Medical Discipline
            </h2>
            <p style="font-size: 1.05rem; line-height: 1.8; color: var(--text-body); margin-bottom: 24px;">
              Whether writing a multi-center randomized controlled trial, a PRISMA-compliant meta-analysis, or a 150-page postgraduate medical dissertation, our dedicated writing faculty aligns your work with the highest international reporting guidelines.
            </p>
            <div style="display: flex; flex-direction: column; gap: 14px; margin-bottom: 28px;">
              <div style="display: flex; align-items: center; gap: 12px; font-weight: 600; color: var(--text-headline);">
                <span class="material-symbols-outlined" style="color: var(--mint-primary); font-size: 22px;">check_circle</span>
                <span>ICMJE &amp; Committee on Publication Ethics (COPE) Guidelines</span>
              </div>
              <div style="display: flex; align-items: center; gap: 12px; font-weight: 600; color: var(--text-headline);">
                <span class="material-symbols-outlined" style="color: var(--mint-primary); font-size: 22px;">check_circle</span>
                <span>PRISMA 2020, STROBE, CONSORT &amp; CARE Checklist Verification</span>
              </div>
              <div style="display: flex; align-items: center; gap: 12px; font-weight: 600; color: var(--text-headline);">
                <span class="material-symbols-outlined" style="color: var(--mint-primary); font-size: 22px;">check_circle</span>
                <span>Complete Turnitin Authenticity Reports (&lt;10% Similarity)</span>
              </div>
            </div>
            <button type="button" class="btn btn-mint btn-lg" data-modal-target="consultationModal">
              <span class="material-symbols-outlined">calendar_month</span>
              <span>Discuss Your Academic Goals</span>
            </button>
          </div>

          <div>
            <div class="live-image-frame" style="height: 480px;">
              <img src="assets/images/doctor-stethoscope-research.jpg" alt="Doctor in clinical research institute with stethoscope holding analytics tablet">
              <div class="live-image-badge">
                <span class="material-symbols-outlined">stethoscope</span>
                <span>Doctor-Authored &amp; Peer-Reviewed Research</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Consultation CTA Banner -->
    <section class="cta-banner-section" aria-label="Book Consultation Banner">
      <div class="container">
        <div class="cta-banner-grid">
          <div>
            <h2 class="cta-banner-title">Need a Custom Research Consultation?</h2>
            <p class="cta-banner-desc">
              Our academic coordinators provide customized milestone roadmaps for your thesis, protocol, or manuscript publication.
            </p>
            <button type="button" class="btn btn-mint btn-lg" data-modal-target="consultationModal">
              <span class="material-symbols-outlined">calendar_month</span>
              <span>Schedule Free Call</span>
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

with open(os.path.join(base_dir, "services.html"), "w", encoding="utf-8") as f:
    f.write(services_hub_html)

print("Services Hub services.html built successfully!")
