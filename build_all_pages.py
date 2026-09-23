import os
import generate_site as gs

base_dir = os.path.dirname(os.path.abspath(__file__))

# -----------------------------------------------------------------------------
# ABOUT PAGE: about.html
# -----------------------------------------------------------------------------
about_html = f"""{gs.get_base_meta(
  title="About MedZen Writes | Medical Thesis Writing Experts",
  description="Meet MedZen Writes — a medical research writing company helping PG residents & clinicians with thesis writing, manuscript writing & journal publication.",
  canonical_url="about"
)}
  <script type="application/ld+json">
  {{
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About MedZen Writes",
    "description": "A medical research writing company helping PG residents and clinicians with thesis writing, manuscript writing, and journal publication.",
    "url": "https://medzenwrites.in/about",
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
{gs.get_header("about")}

  <main id="main-content">
    <div class="container" style="padding-top: 24px;">
      <nav class="breadcrumbs" aria-label="Breadcrumbs">
        <a href="index.html">Home</a>
        <span class="separator">/</span>
        <span class="current">About MedZen Writes</span>
      </nav>
    </div>

    <!-- About Hero -->
    <section class="theme-hero" style="padding: 50px 0 80px;" aria-label="About Hero">
      <div class="hero-watermark" aria-hidden="true">about</div>
      <div class="container">
        <div class="theme-hero-content" style="max-width: 1080px; text-align: center; margin: 0 auto;">
          <span class="eyebrow-badge eyebrow-badge-white"><span class="material-symbols-outlined">info</span> About MedZen Writes</span>
          <h1 class="theme-hero-title">
            About MedZen Writes — Medical Research Writing Company
          </h1>
          <p class="theme-hero-subtitle" style="margin: 0 auto 28px;">
            Juggling clinical duties, academic writing, and publication deadlines can feel impossible — especially when expectations are high but time is limited. MedZen Writes bridges that gap.
          </p>
          <div style="display: flex; justify-content: center; gap: 16px; flex-wrap: wrap;">
            <button type="button" class="btn btn-mint btn-lg" data-modal-target="consultationModal">
              <span class="material-symbols-outlined">calendar_month</span>
              <span>Get Started Today</span>
            </button>
            <a href="services.html" class="btn btn-outline-white btn-lg">
              <span>View Our Services</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Who We Are -->
    <section class="section" aria-labelledby="who-heading">
      <div class="container">
        <div class="grid grid-2" style="align-items: center; gap: clamp(32px, 5vw, 64px);">
          <div>
            <span class="eyebrow-badge"><span class="material-symbols-outlined">groups</span> Who We Are</span>
            <h2 id="who-heading" style="font-size: clamp(2rem, 3.4vw, 2.6rem); margin-bottom: 20px; color: var(--teal-900);">
              A Medical Research Writing Company <span class="text-gradient">Built for Clinicians</span>
            </h2>
            <p style="font-size: 1.08rem; line-height: 1.8; color: var(--text-body); margin-bottom: 20px;">
              We've seen brilliant research, unique clinical cases, and vital hospital data go unpublished — not for lack of value, but for lack of writing bandwidth and biostatistical guidance. That's where MedZen Writes steps in.
            </p>
            <p style="font-size: 1.04rem; line-height: 1.8; color: var(--text-muted); margin-bottom: 28px;">
              We support medical professionals across all disciplines — from MD, MS, and DNB postgraduate residents to experienced surgical consultants and health science researchers — turning clinical insights into journal-ready publications without compromising patient care.
            </p>

            <div class="card-pillar" style="padding: 24px; background: var(--bg-soft-mint); border-color: var(--border-mint);">
              <h4 style="font-size: 1.15rem; color: var(--teal-900); margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
                <span class="material-symbols-outlined" style="color: var(--mint-primary);">verified</span> Our Strict Academic Pledge
              </h4>
              <p style="font-size: 0.95rem; color: var(--text-headline); line-height: 1.7; margin: 0;">
                100% human-crafted research, under 10% similarity verified by Turnitin, with zero AI shortcuts and complete clinical IP ownership retained by you.
              </p>
            </div>
          </div>

          <div>
            <div class="live-image-frame" style="height: 460px;">
              <img src="assets/images/doctors-multidisciplinary-team.jpg" alt="Multidisciplinary team of medical doctors and research specialists collaborating">
              <div class="live-image-badge">
                <span class="material-symbols-outlined">verified</span>
                <span>Specialist MD/MS Clinicians &amp; Biostatisticians</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Collaborative Mentorship & Research Environment -->
    <section class="section section-alt" aria-labelledby="collaboration-heading">
      <div class="container">
        <div class="grid grid-2" style="align-items: center; gap: clamp(32px, 5vw, 64px);">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
            <div class="live-image-frame" style="height: 280px;">
              <img src="assets/images/doctor-biostatistician-consultation.jpg" alt="Doctor and biostatistician reviewing clinical charts">
              <div class="live-image-badge" style="font-size: 0.75rem; padding: 6px 12px; bottom: 12px; left: 12px;">
                <span class="material-symbols-outlined" style="font-size: 15px;">bar_chart</span>
                <span>Biostatistical Synthesis</span>
              </div>
            </div>
            <div class="live-image-frame" style="height: 280px; margin-top: 24px;">
              <img src="assets/images/doctor-resident-mentorship.jpg" alt="Medical faculty mentoring PG resident on thesis">
              <div class="live-image-badge" style="font-size: 0.75rem; padding: 6px 12px; bottom: 12px; left: 12px;">
                <span class="material-symbols-outlined" style="font-size: 15px;">school</span>
                <span>Faculty Mentorship</span>
              </div>
            </div>
          </div>

          <div>
            <span class="eyebrow-badge"><span class="material-symbols-outlined">handshake</span> Mentorship Model</span>
            <h2 id="collaboration-heading" style="font-size: clamp(1.85rem, 3vw, 2.5rem); margin-bottom: 18px; color: var(--teal-900);">
              Individualized Mentorship Meets Methodological Rigor
            </h2>
            <p style="font-size: 1.05rem; line-height: 1.8; color: var(--text-body); margin-bottom: 18px;">
              Writing an academic thesis or high-impact paper shouldn't be an isolated struggle. At MedZen Writes, you work directly with dedicated medical writers and PhD biostatisticians who understand your clinical specialty.
            </p>
            <p style="font-size: 1rem; line-height: 1.75; color: var(--text-muted); margin-bottom: 24px;">
              We conduct structured milestone reviews, incorporate your guide's feedback promptly, and ensure your manuscript conforms to the exact guidelines of international target journals.
            </p>
            <button type="button" class="btn btn-mint btn-lg" data-modal-target="consultationModal">
              <span class="material-symbols-outlined">calendar_month</span>
              <span>Speak With an Academic Coordinator</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Values / 4 Pillars -->
    <section class="section section-mint-soft" aria-labelledby="values-heading">
      <div class="container">
        <div class="section-header">
          <span class="eyebrow-badge eyebrow-badge-mint"><span class="material-symbols-outlined">psychology</span> How We Work</span>
          <h2 id="values-heading" style="font-size: clamp(2rem, 3.5vw, 2.8rem);">Four Pillars of Academic Excellence</h2>
          <p class="section-subtitle">Every thesis and paper we touch undergoes rigorous multi-layer editorial review.</p>
        </div>

        <div class="grid grid-4">
          <div class="card-pillar">
            <div class="icon-box" style="margin-bottom: 20px;"><span class="material-symbols-outlined">menu_book</span></div>
            <h3 style="font-size: 1.25rem; margin-bottom: 10px; color: var(--teal-900);">Subject Matter Depth</h3>
            <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.65;">Our writers hold MD, MS, and PhD qualifications across diverse clinical specialties.</p>
          </div>
          <div class="card-pillar">
            <div class="icon-box" style="margin-bottom: 20px;"><span class="material-symbols-outlined">analytics</span></div>
            <h3 style="font-size: 1.25rem; margin-bottom: 10px; color: var(--teal-900);">Statistical Precision</h3>
            <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.65;">Advanced analytical modeling using SPSS, R Studio, STATA, and PRISMA meta-analysis methods.</p>
          </div>
          <div class="card-pillar">
            <div class="icon-box" style="margin-bottom: 20px;"><span class="material-symbols-outlined">fact_check</span></div>
            <h3 style="font-size: 1.25rem; margin-bottom: 10px; color: var(--teal-900);">ICMJE Integrity</h3>
            <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.65;">100% adherence to international reporting guidelines (CONSORT, STROBE, PRISMA, CARE).</p>
          </div>
          <div class="card-pillar">
            <div class="icon-box" style="margin-bottom: 20px;"><span class="material-symbols-outlined">support_agent</span></div>
            <h3 style="font-size: 1.25rem; margin-bottom: 10px; color: var(--teal-900);">End-to-End Support</h3>
            <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.65;">Continuous revisions, university guide feedback incorporation, and reviewer response support.</p>
          </div>
        </div>
      </div>
    </section>


    <!-- Closing CTA Banner -->
    <section class="cta-banner-section" aria-label="Closing CTA Banner">
      <div class="container">
        <div class="cta-banner-grid">
          <div>
            <h2 class="cta-banner-title">Ready to Begin Your Medical Writing Journey?</h2>
            <p class="cta-banner-desc">Schedule a confidential consultation with our Chennai medical academic team today.</p>
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

with open(os.path.join(base_dir, "about.html"), "w", encoding="utf-8") as f:
    f.write(about_html)

print("About page about.html built successfully!")
