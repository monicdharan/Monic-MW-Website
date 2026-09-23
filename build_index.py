import os
import generate_site as gs

base_dir = os.path.dirname(os.path.abspath(__file__))

index_html = f"""{gs.get_base_meta(
  title="Medical Research Paper Publication & Thesis Writing Services | MedZen Writes",
  description="MedZen Writes offers expert medical research paper publication and thesis writing services for PG residents, clinicians & researchers. Get started today.",
  canonical_url=""
)}
  <!-- JSON-LD Structured Data: MedicalBusiness & Organization -->
  <script type="application/ld+json">
  {{
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "MedZen Writes",
    "legalName": "MedZen Innovations Pvt. Ltd.",
    "url": "https://medzenwrites.in",
    "logo": "https://medzenwrites.in/assets/images/medzen-writes-logo.png",
    "description": "Expert medical research paper publication and thesis writing services for postgraduate medical residents, clinicians, and researchers.",
    "telephone": "+919176365161",
    "email": "info@medzeninnovations.in",
    "address": {{
      "@type": "PostalAddress",
      "streetAddress": "Old No. 56 / New No. 125, Venkatachalam Street, Royapettah",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600014",
      "addressCountry": "IN"
    }},
    "sameAs": [
      "https://linkedin.com/company/medzen-writes",
      "https://instagram.com/medzenwrites",
      "https://facebook.com/medzenwrites"
    ]
  }}
  </script>
</head>
<body>
{gs.get_header("home")}

  <main id="main-content">
    <!-- Ambient Decor Accents -->
    <div class="ambient-decor-layer" aria-hidden="true">
      <div class="side-accent-left" style="top: 900px;"></div>
      <div class="side-accent-right" style="top: 1700px;"></div>
      <div class="side-accent-soft-left" style="top: 2600px;"></div>
      <div class="side-accent-soft-right" style="top: 3400px;"></div>
    </div>

    <!-- 1. Hero Section (Novadent Theme: Deep Teal + Watermark + Mint Pills + Doctor Portrait) -->
    <section class="theme-hero" aria-label="Medical Research Publication and Thesis Writing Services">
      <div class="hero-watermark" aria-hidden="true">medzen</div>
      
      <div class="container">
        <div class="hero-grid">
          <div>
            <span class="eyebrow-badge eyebrow-badge-white">
              <span class="material-symbols-outlined">verified</span>
              <span>100% Human Medical Experts · 0% AI Shortcuts</span>
            </span>
            
            <h1 class="theme-hero-title">
              Medical Research Paper Publication &amp; Thesis Writing Services
            </h1>
            
            <p class="theme-hero-subtitle">
              MedZen Writes is your partner in medical progress — offering end-to-end medical research paper publication and thesis writing services that simplify thesis writing, research publishing, and statistical analysis, so you can focus on saving lives.
            </p>

            <div class="hero-cta-row">
              <button type="button" class="btn btn-mint btn-lg" data-modal-target="consultationModal">
                <span class="material-symbols-outlined">calendar_month</span>
                <span>Book Free Consultation</span>
              </button>
              
              <button type="button" class="btn btn-outline-white btn-lg" data-modal-target="checklistModal">
                <span class="material-symbols-outlined">download</span>
                <span>Download Thesis Checklist</span>
              </button>
            </div>

            <!-- White Pill Info Chips Matching Reference Image Hero Bottom -->
            <div class="hero-info-chips">
              <a href="tel:+919176365161" class="info-chip">
                <span class="material-symbols-outlined">call</span>
                <span>+91 91763 65161</span>
              </a>
              <span class="info-chip">
                <span class="material-symbols-outlined">location_on</span>
                <span>Royapettah, Chennai – 600014</span>
              </span>
              <a href="mailto:info@medzeninnovations.in" class="info-chip">
                <span class="material-symbols-outlined">mail</span>
                <span>info@medzeninnovations.in</span>
              </a>
              <span class="info-chip">
                <span class="material-symbols-outlined">schedule</span>
                <span>Mon–Fri: 9:00 – 18:00</span>
              </span>
            </div>
          </div>

          <div class="hero-portrait-wrapper">
            <div class="hero-portrait-container">
              <img src="assets/images/hero_doctor.jpg" alt="Medical research paper publication and thesis writing services for doctors and PG residents" class="hero-portrait-img">
            </div>
          </div>
        </div>
      </div>
    </section>



    <!-- 3. Built for Medical Professionals, Backed by Experts -->
    <section class="section" aria-labelledby="experts-heading">
      <div class="container">
        <div class="section-header">
          <span class="eyebrow-badge"><span class="material-symbols-outlined">health_and_safety</span> Academic Rigor</span>
          <h2 id="experts-heading" class="section-title">
            Trusted Medical Thesis Writing &amp; Research Publication Experts
          </h2>
          <p class="section-subtitle">
            Whether you're a postgraduate student, fellow, senior clinician, or life sciences researcher, our medical research paper publication and thesis writing services are tailored to your level and specialty.
          </p>
        </div>

        <div class="grid grid-2" style="align-items: center; gap: clamp(32px, 4vw, 56px);">
          <div style="display: flex; flex-direction: column; gap: 18px;">
            <div class="card-pillar" style="padding: 24px;">
              <div class="pillar-icon">
                <span class="material-symbols-outlined">edit_document</span>
              </div>
              <h3 style="font-size: 1.2rem; margin-bottom: 8px; color: var(--teal-900);">Custom Academic Writing — No Templates</h3>
              <p style="font-size: 0.92rem; color: var(--text-body); line-height: 1.6; margin: 0;">
                Your content is crafted from scratch to meet journal standards, university formats, and discipline-specific requirements with zero generic templating.
              </p>
            </div>

            <div class="card-pillar" style="padding: 24px;">
              <div class="pillar-icon">
                <span class="material-symbols-outlined">policy</span>
              </div>
              <h3 style="font-size: 1.2rem; margin-bottom: 8px; color: var(--teal-900);">Ethical &amp; Plagiarism Controlled</h3>
              <p style="font-size: 0.92rem; color: var(--text-body); line-height: 1.6; margin: 0;">
                All deliverables are strictly under 10% similarity, verified by Turnitin certificate, and 100% human-written — no AI shortcuts, no ethical compromises.
              </p>
            </div>

            <div class="card-pillar" style="padding: 24px;">
              <div class="pillar-icon">
                <span class="material-symbols-outlined">biotech</span>
              </div>
              <h3 style="font-size: 1.2rem; margin-bottom: 8px; color: var(--teal-900);">Clinically Accurate, Scientifically Sound</h3>
              <p style="font-size: 0.92rem; color: var(--text-body); line-height: 1.6; margin: 0;">
                We present your findings with clear logical structure, academic rigor, and journal-friendly formatting ready for high-impact submission.
              </p>
            </div>
          </div>

          <div>
            <div class="live-image-frame" style="height: 480px;">
              <img src="assets/images/medical-editorial-review.jpg" alt="Medical researchers and doctors reviewing journal manuscripts and patient charts">
              <div class="live-image-badge">
                <span class="material-symbols-outlined">verified</span>
                <span>ICMJE &amp; PRISMA Compliant Academic Rigor</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. Indexed Journals & Global Academic Databases Showcase -->
    <section class="section section-mint-soft" id="indexed-journals" aria-labelledby="journals-heading" style="padding-top: 48px; padding-bottom: 56px;">
      <div class="container">
        <div class="section-header">
          <span class="eyebrow-badge eyebrow-badge-mint">
            <span class="material-symbols-outlined">verified</span>
            <span>Target Journal Indexing &amp; Global Publishers</span>
          </span>
          <h2 id="journals-heading" class="section-title">
            Published Across Leading Medical Journals &amp; Databases
          </h2>
          <p class="section-subtitle">
            From PubMed and Scopus to high-impact Q1/Q2 clinical journals, our specialist medical writers and biostatisticians align your manuscripts, systematic reviews, and theses with international peer-review standards.
          </p>
        </div>

        <!-- 12 Journal Logos Grid -->
        <div class="journal-logos-grid">
          <!-- Logo 1: PubMed -->
          <div class="journal-card">
            <div class="journal-logo-frame">
              <img src="Journal Logos/Pubmed.png" alt="PubMed / MEDLINE - National Library of Medicine Indexed Publications" class="journal-logo-img" loading="lazy">
            </div>
            <div class="journal-card-meta">
              <div class="journal-card-name">PubMed / MEDLINE</div>
              <div class="journal-card-badge">
                <span class="material-symbols-outlined" style="font-size: 13px;">verified</span>
                <span>NLM / NIH Indexed</span>
              </div>
            </div>
          </div>

          <!-- Logo 2: Scopus -->
          <div class="journal-card">
            <div class="journal-logo-frame">
              <img src="Journal Logos/Scopus.png" alt="Scopus Elsevier Indexed Medical Research Articles" class="journal-logo-img" loading="lazy">
            </div>
            <div class="journal-card-meta">
              <div class="journal-card-name">Elsevier Scopus</div>
              <div class="journal-card-badge">
                <span class="material-symbols-outlined" style="font-size: 13px;">verified</span>
                <span>Q1 &amp; Q2 Quartiles</span>
              </div>
            </div>
          </div>

          <!-- Logo 3: Web of Science -->
          <div class="journal-card">
            <div class="journal-logo-frame">
              <img src="Journal Logos/Web of Science.png" alt="Web of Science Core Collection Clarivate" class="journal-logo-img" loading="lazy">
            </div>
            <div class="journal-card-meta">
              <div class="journal-card-name">Web of Science</div>
              <div class="journal-card-badge">
                <span class="material-symbols-outlined" style="font-size: 13px;">verified</span>
                <span>SCIE &amp; ESCI Indexed</span>
              </div>
            </div>
          </div>

          <!-- Logo 4: Clarivate -->
          <div class="journal-card">
            <div class="journal-logo-frame">
              <img src="Journal Logos/Clarivate.png" alt="Clarivate Analytics Journal Citation Reports" class="journal-logo-img" loading="lazy">
            </div>
            <div class="journal-card-meta">
              <div class="journal-card-name">Clarivate Analytics</div>
              <div class="journal-card-badge">
                <span class="material-symbols-outlined" style="font-size: 13px;">verified</span>
                <span>JCR Impact Factor</span>
              </div>
            </div>
          </div>

          <!-- Logo 5: Cochrane -->
          <div class="journal-card">
            <div class="journal-logo-frame">
              <img src="Journal Logos/Cochrane.png" alt="Cochrane Library Evidence-Based Medicine Systematic Reviews" class="journal-logo-img" loading="lazy">
            </div>
            <div class="journal-card-meta">
              <div class="journal-card-name">Cochrane Library</div>
              <div class="journal-card-badge">
                <span class="material-symbols-outlined" style="font-size: 13px;">verified</span>
                <span>Systematic Reviews</span>
              </div>
            </div>
          </div>

          <!-- Logo 6: Elsevier Embase -->
          <div class="journal-card">
            <div class="journal-logo-frame">
              <img src="Journal Logos/Springer (12).png" alt="Elsevier Embase Biomedical and Pharmacological Database" class="journal-logo-img" loading="lazy">
            </div>
            <div class="journal-card-meta">
              <div class="journal-card-name">Elsevier Embase</div>
              <div class="journal-card-badge">
                <span class="material-symbols-outlined" style="font-size: 13px;">verified</span>
                <span>Biomedical Database</span>
              </div>
            </div>
          </div>

          <!-- Logo 7: Springer -->
          <div class="journal-card">
            <div class="journal-logo-frame">
              <img src="Journal Logos/Springer.png" alt="Springer Clinical and Biomedical Journals" class="journal-logo-img" loading="lazy">
            </div>
            <div class="journal-card-meta">
              <div class="journal-card-name">Springer Science</div>
              <div class="journal-card-badge">
                <span class="material-symbols-outlined" style="font-size: 13px;">verified</span>
                <span>Biomedical Journals</span>
              </div>
            </div>
          </div>

          <!-- Logo 8: Wiley -->
          <div class="journal-card">
            <div class="journal-logo-frame">
              <img src="Journal Logos/Wiley.png" alt="John Wiley &amp; Sons Online Library" class="journal-logo-img" loading="lazy">
            </div>
            <div class="journal-card-meta">
              <div class="journal-card-name">Wiley Online Library</div>
              <div class="journal-card-badge">
                <span class="material-symbols-outlined" style="font-size: 13px;">verified</span>
                <span>Peer-Reviewed</span>
              </div>
            </div>
          </div>

          <!-- Logo 9: Taylor & Francis -->
          <div class="journal-card">
            <div class="journal-logo-frame">
              <img src="Journal Logos/Taylor & Frances.png" alt="Taylor and Francis Group Medical Journals" class="journal-logo-img" loading="lazy">
            </div>
            <div class="journal-card-meta">
              <div class="journal-card-name">Taylor &amp; Francis</div>
              <div class="journal-card-badge">
                <span class="material-symbols-outlined" style="font-size: 13px;">verified</span>
                <span>Global Clinical Journals</span>
              </div>
            </div>
          </div>

          <!-- Logo 10: Wolters Kluwer -->
          <div class="journal-card">
            <div class="journal-logo-frame">
              <img src="Journal Logos/Wolters Kluwer.png" alt="Wolters Kluwer Lippincott Williams &amp; Wilkins Medical Journals" class="journal-logo-img" loading="lazy">
            </div>
            <div class="journal-card-meta">
              <div class="journal-card-name">Wolters Kluwer</div>
              <div class="journal-card-badge">
                <span class="material-symbols-outlined" style="font-size: 13px;">verified</span>
                <span>Lippincott (LWW)</span>
              </div>
            </div>
          </div>

          <!-- Logo 11: Google Scholar -->
          <div class="journal-card">
            <div class="journal-logo-frame">
              <img src="Journal Logos/Google Scholar.png" alt="Google Scholar Academic Metrics and Citations" class="journal-logo-img" loading="lazy">
            </div>
            <div class="journal-card-meta">
              <div class="journal-card-name">Google Scholar</div>
              <div class="journal-card-badge">
                <span class="material-symbols-outlined" style="font-size: 13px;">verified</span>
                <span>Citation Tracking</span>
              </div>
            </div>
          </div>

          <!-- Logo 12: DOAJ -->
          <div class="journal-card">
            <div class="journal-logo-frame">
              <img src="Journal Logos/DOAJ.png" alt="Directory of Open Access Journals DOAJ Indexed" class="journal-logo-img" loading="lazy">
            </div>
            <div class="journal-card-meta">
              <div class="journal-card-name">DOAJ Directory</div>
              <div class="journal-card-badge">
                <span class="material-symbols-outlined" style="font-size: 13px;">verified</span>
                <span>Open Access Quality</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Quality & Indexing Guarantee Bar -->
        <div class="journal-guarantee-bar">
          <div class="journal-guarantee-item">
            <div class="journal-guarantee-icon">
              <span class="material-symbols-outlined">shield</span>
            </div>
            <div>
              <div class="journal-guarantee-title">Zero Predatory Journals Guarantee</div>
              <p class="journal-guarantee-desc">Every recommendation is cross-verified against UGC-CARE, Scopus active list, and Beall’s registry.</p>
            </div>
          </div>

          <div class="journal-guarantee-item">
            <div class="journal-guarantee-icon">
              <span class="material-symbols-outlined">rule</span>
            </div>
            <div>
              <div class="journal-guarantee-title">ICMJE &amp; PRISMA Guidelines</div>
              <p class="journal-guarantee-desc">Manuscripts formatted strictly to specific journal Instructions for Authors, reference styles, and word counts.</p>
            </div>
          </div>

          <div class="journal-guarantee-item">
            <div class="journal-guarantee-icon">
              <span class="material-symbols-outlined">published_with_changes</span>
            </div>
            <div>
              <div class="journal-guarantee-title">Peer-Review Revision Support</div>
              <p class="journal-guarantee-desc">Comprehensive support addressing peer reviewer critiques, rebuttal letters, and manuscript resubmissions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. Core Services Preview Grid -->
    <section class="section" aria-labelledby="services-overview-heading">
      <div class="container">
        <div class="section-header-split">
          <div class="split-header-left">
            <div class="eyebrow-line-tag"><span class="eyebrow-dash">—</span> SCIENTIFIC WRITING SERVICES</div>
            <h2 id="services-overview-heading" class="split-header-title">
              Specialist support for every stage of your research journey.
            </h2>
          </div>
          <div class="split-header-right">
            <p class="split-header-desc">
              Choose focused support or an end-to-end publication pathway, always matched to your specialty and target journal.
            </p>
          </div>
        </div>

        <div class="grid grid-4 grid-compact">
          <!-- 1. Original Research Articles -->
          <a href="services/original-research.html" class="service-capability-card">
            <div class="service-cap-icon">
              <span class="material-symbols-outlined">description</span>
            </div>
            <h3 class="service-cap-title">Original Research Articles</h3>
            <p class="service-cap-desc">From dataset to structured IMRaD manuscript.</p>
            <div class="service-cap-link">
              <span>Explore service</span>
              <span aria-hidden="true">&rarr;</span>
            </div>
          </a>

          <!-- 2. Systematic Review & Meta-Analysis -->
          <a href="services/systematic-review.html" class="service-capability-card">
            <div class="service-cap-icon">
              <span class="material-symbols-outlined">join_inner</span>
            </div>
            <h3 class="service-cap-title">Systematic Review &amp; Meta-Analysis</h3>
            <p class="service-cap-desc">PRISMA-led synthesis and defensible evidence.</p>
            <div class="service-cap-link">
              <span>Explore service</span>
              <span aria-hidden="true">&rarr;</span>
            </div>
          </a>

          <!-- 3. Case Reports -->
          <a href="services/case-report.html" class="service-capability-card">
            <div class="service-cap-icon">
              <span class="material-symbols-outlined">medical_services</span>
            </div>
            <h3 class="service-cap-title">Case Reports</h3>
            <p class="service-cap-desc">Clinically precise, journal-ready narratives.</p>
            <div class="service-cap-link">
              <span>Explore service</span>
              <span aria-hidden="true">&rarr;</span>
            </div>
          </a>

          <!-- 4. Thesis Writing -->
          <a href="services/thesis.html" class="service-capability-card">
            <div class="service-cap-icon">
              <span class="material-symbols-outlined">fact_check</span>
            </div>
            <h3 class="service-cap-title">Thesis Writing</h3>
            <p class="service-cap-desc">End-to-end academic structure and editorial support.</p>
            <div class="service-cap-link">
              <span>Explore service</span>
              <span aria-hidden="true">&rarr;</span>
            </div>
          </a>

          <!-- 5. Statistical Analysis -->
          <a href="services/statistical-analysis.html" class="service-capability-card">
            <div class="service-cap-icon">
              <span class="material-symbols-outlined">bar_chart</span>
            </div>
            <h3 class="service-cap-title">Statistical Analysis</h3>
            <p class="service-cap-desc">Transparent methods, tables, and interpretation.</p>
            <div class="service-cap-link">
              <span>Explore service</span>
              <span aria-hidden="true">&rarr;</span>
            </div>
          </a>

          <!-- 6. Review Articles -->
          <a href="services/review-article.html" class="service-capability-card">
            <div class="service-cap-icon">
              <span class="material-symbols-outlined">science</span>
            </div>
            <h3 class="service-cap-title">Review Articles</h3>
            <p class="service-cap-desc">Authoritative narrative and scoping reviews.</p>
            <div class="service-cap-link">
              <span>Explore service</span>
              <span aria-hidden="true">&rarr;</span>
            </div>
          </a>

          <!-- 7. Research Protocols -->
          <a href="services/protocol.html" class="service-capability-card">
            <div class="service-cap-icon">
              <span class="material-symbols-outlined">checklist</span>
            </div>
            <h3 class="service-cap-title">Research Protocols</h3>
            <p class="service-cap-desc">Ethics-ready methods and study planning.</p>
            <div class="service-cap-link">
              <span>Explore service</span>
              <span aria-hidden="true">&rarr;</span>
            </div>
          </a>

          <!-- 8. Thesis to Manuscript Conversion -->
          <a href="services/thesis-to-manuscript.html" class="service-capability-card">
            <div class="service-cap-icon">
              <span class="material-symbols-outlined">swap_horiz</span>
            </div>
            <h3 class="service-cap-title">Thesis to Manuscript Conversion</h3>
            <p class="service-cap-desc">Condensed for the right journal and audience.</p>
            <div class="service-cap-link">
              <span>Explore service</span>
              <span aria-hidden="true">&rarr;</span>
            </div>
          </a>

          <!-- 9. Abstract & E-Poster -->
          <a href="services/abstract-poster.html" class="service-capability-card">
            <div class="service-cap-icon">
              <span class="material-symbols-outlined">hub</span>
            </div>
            <h3 class="service-cap-title">Abstract &amp; E-Poster</h3>
            <p class="service-cap-desc">Conference-ready stories with visual clarity.</p>
            <div class="service-cap-link">
              <span>Explore service</span>
              <span aria-hidden="true">&rarr;</span>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- 6. Structured Workflow (How We Work) -->
    <section class="section section-alt" aria-labelledby="process-heading">
      <div class="container">
        <div class="section-header">
          <span class="eyebrow-badge"><span class="material-symbols-outlined">timeline</span> Seamless Process</span>
          <h2 id="process-heading" class="section-title">
            Our Thesis Writing &amp; Research Publication Process
          </h2>
          <p class="section-subtitle">
            A structured writing and publication process that ensures transparency, quality, and client satisfaction at every stage of your academic journey.
          </p>
        </div>

        <div class="grid grid-4">
          <div class="card" style="text-align: center;">
            <div style="width: 48px; height: 48px; border-radius: 50%; background: var(--teal-hero); color: #FFFFFF; font-weight: 800; font-size: 1.2rem; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px;">1</div>
            <h3 style="font-size: 1.15rem; margin-bottom: 8px; color: var(--teal-900);">Initial Consultation</h3>
            <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.6;">
              Speak with our academic coordinators about your research goals, timelines, and writing or publication needs.
            </p>
          </div>

          <div class="card" style="text-align: center;">
            <div style="width: 48px; height: 48px; border-radius: 50%; background: var(--teal-hero); color: #FFFFFF; font-weight: 800; font-size: 1.2rem; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px;">2</div>
            <h3 style="font-size: 1.15rem; margin-bottom: 8px; color: var(--teal-900);">Tailored Writing Plan</h3>
            <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.6;">
              We assign expert medical writers to craft a customized thesis, dissertation, or manuscript plan aligned with your guidelines.
            </p>
          </div>

          <div class="card" style="text-align: center;">
            <div style="width: 48px; height: 48px; border-radius: 50%; background: var(--teal-hero); color: #FFFFFF; font-weight: 800; font-size: 1.2rem; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px;">3</div>
            <h3 style="font-size: 1.15rem; margin-bottom: 8px; color: var(--teal-900);">Draft &amp; Feedback</h3>
            <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.6;">
              Chapters or sections delivered progressively, so you can review, request changes, and stay involved throughout.
            </p>
          </div>

          <div class="card" style="text-align: center;">
            <div style="width: 48px; height: 48px; border-radius: 50%; background: var(--teal-hero); color: #FFFFFF; font-weight: 800; font-size: 1.2rem; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px;">4</div>
            <h3 style="font-size: 1.15rem; margin-bottom: 8px; color: var(--teal-900);">Final Delivery &amp; Support</h3>
            <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.6;">
              Receive your polished document with journal-ready formatting, plagiarism reports, and post-delivery revision support.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. Doctor Reviews & Testimonials (Verified Google Reviews) -->
    <section class="section section-mint-soft" aria-labelledby="testimonials-heading">
      <div class="container">
        <div class="section-header">
          <span class="eyebrow-badge eyebrow-badge-mint">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style="vertical-align: middle; margin-right: 4px;">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
            </svg>
            Verified Google Reviews
          </span>
          <h2 id="testimonials-heading" class="section-title">
            What Our Clients Say About Our Medical Writing Services
          </h2>
          <p class="section-subtitle">
            Authentic 5-star Google reviews from doctors, oncology fellows, and postgraduate researchers across premier medical institutions.
          </p>
        </div>

        <div class="grid grid-3 google-reviews-grid">
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
      </div>
    </section>

    <!-- 8. Consultation CTA Banner (Matching Reference Image Deep Teal + Verified Badge) -->
    <section class="cta-banner-section" aria-label="Book Consultation Banner">
      <div class="container">
        <div class="cta-banner-grid">
          <div>
            <h2 class="cta-banner-title">
              Schedule Your Research &amp; Thesis Consultation
            </h2>
            <p class="cta-banner-desc">
              Connect with our medical writing coordinators today and ensure your research meets world-class publication standards with customized guidance.
            </p>
            <button type="button" class="btn btn-mint btn-lg" data-modal-target="consultationModal">
              <span class="material-symbols-outlined">calendar_month</span>
              <span>Book Consultation</span>
            </button>
          </div>

          <div>
            <!-- Floating Verified Review Badge Matching Reference Image Right Card -->
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

output_path = os.path.join(base_dir, "index.html")
with open(output_path, "w", encoding="utf-8") as f:
    f.write(index_html.strip())

print(f"index.html successfully updated in {base_dir}")
