import os
import generate_site as gs

base_dir = os.path.dirname(os.path.abspath(__file__))
serv_dir = os.path.join(base_dir, "services")
os.makedirs(serv_dir, exist_ok=True)

# Helper function to generate standardized Service Subpage
def generate_service_subpage(slug, title, meta_desc, h1, subhead, intro_p, aeo_summary, steps, why_points, promise_text, image_name, alt_text, related_services):
    steps_html = ""
    for i, step in enumerate(steps, 1):
        steps_html += f"""
        <div class="card-pillar" style="margin-bottom: 20px;">
          <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 12px;">
            <div class="service-card-number" style="margin: 0; font-size: 0.9rem; color: var(--mint-primary); font-weight: 800;">Step {i:02d}</div>
            <h3 style="font-size: 1.25rem; color: var(--teal-900); margin: 0;">{step['title']}</h3>
          </div>
          <p style="color: var(--text-body); font-size: 0.98rem; line-height: 1.75; margin: 0;">{step['desc']}</p>
        </div>
        """

    why_html = ""
    for pt in why_points:
        why_html += f"""
        <li style="display: flex; align-items: flex-start; gap: 12px; margin-bottom: 16px; font-size: 1rem;">
          <span class="material-symbols-outlined" style="color: var(--mint-primary); font-size: 22px; margin-top: 2px;">check_circle</span>
          <span style="color: var(--text-headline); font-weight: 600;">{pt}</span>
        </li>
        """

    related_html = ""
    for rel in related_services:
        related_html += f"""
        <a href="{rel['link']}" class="service-card">
          <h4 style="font-size: 1.15rem; color: var(--teal-900); margin-bottom: 8px;">{rel['name']}</h4>
          <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 16px; flex-grow: 1;">{rel['desc']}</p>
          <div class="link-arrow"><span>Learn More</span> <span class="material-symbols-outlined">arrow_forward</span></div>
        </a>
        """

    html = f"""{gs.get_base_meta(
      title=title,
      description=meta_desc,
      canonical_url=f"services/{slug}",
      is_subpage=True
    )}
  <!-- JSON-LD Service & Breadcrumbs Schema -->
  <script type="application/ld+json">
  {{
    "@context": "https://schema.org",
    "@graph": [
      {{
        "@type": "BreadcrumbList",
        "itemListElement": [
          {{
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://medzenwrites.in"
          }},
          {{
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://medzenwrites.in/services"
          }},
          {{
            "@type": "ListItem",
            "position": 3,
            "name": "{h1}",
            "item": "https://medzenwrites.in/services/{slug}"
          }}
        ]
      }},
      {{
        "@type": "Service",
        "name": "{h1}",
        "serviceType": "{title.split('|')[0].strip()}",
        "description": "{meta_desc}",
        "provider": {{
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
    ]
  }}
  </script>
</head>
<body>
{gs.get_header("services", is_subpage=True)}

  <main id="main-content">
    <!-- Breadcrumbs -->
    <div class="container" style="padding-top: 24px;">
      <nav class="breadcrumbs" aria-label="Breadcrumbs">
        <a href="../index.html">Home</a>
        <span class="separator">/</span>
        <a href="../services.html">Services</a>
        <span class="separator">/</span>
        <span class="current">{h1}</span>
      </nav>
    </div>

    <!-- Service Hero (Deep Oceanic Teal Banner) -->
    <section class="theme-hero" style="padding: 50px 0 80px;" aria-label="Service Introduction">
      <div class="hero-watermark" aria-hidden="true">medzen</div>
      <div class="container">
        <div class="theme-hero-content" style="max-width: 1080px; text-align: center; margin: 0 auto;">
          <span class="eyebrow-badge eyebrow-badge-white"><span class="material-symbols-outlined">medical_information</span> Specialized Academic Service</span>
          <h1 class="theme-hero-title" style="font-size: clamp(2.2rem, 4.2vw, 3.4rem);">{h1}</h1>
          <p class="theme-hero-subtitle" style="margin: 0 auto 28px;">{subhead}</p>
          <div style="display: flex; justify-content: center; gap: 16px; flex-wrap: wrap;">
            <button type="button" class="btn btn-mint btn-lg" data-modal-target="consultationModal">
              <span class="material-symbols-outlined">calendar_month</span>
              <span>Book Consultation</span>
            </button>
            <a href="../services.html" class="btn btn-outline-white btn-lg">
              <span>View All Services</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Overview & Workflow Section -->
    <section class="section" aria-labelledby="steps-heading">
      <div class="container">
        <div class="grid grid-2" style="align-items: flex-start; gap: clamp(32px, 5vw, 64px);">
          <div>
            <span class="eyebrow-badge"><span class="material-symbols-outlined">description</span> Overview</span>
            <h2 style="font-size: clamp(1.85rem, 3vw, 2.5rem); margin-bottom: 18px; color: var(--teal-900);">Service Scope &amp; Deliverables</h2>
            <p style="font-size: 1.08rem; line-height: 1.8; color: var(--text-body); margin-bottom: 24px;">{intro_p}</p>

            <div class="card-pillar" style="background: var(--bg-soft-mint); border-color: var(--border-mint); padding: 24px; margin-bottom: 24px;">
              <h4 style="color: var(--teal-900); margin-bottom: 10px; display: flex; align-items: center; gap: 8px;">
                <span class="material-symbols-outlined" style="color: var(--mint-primary);">insights</span> Key Academic Takeaway
              </h4>
              <p style="font-size: 0.95rem; color: var(--text-headline); line-height: 1.7; margin: 0;">{aeo_summary}</p>
            </div>

            <div class="live-image-frame" style="height: 320px;">
              <img src="../assets/images/{image_name}" alt="{alt_text}">
              <div class="live-image-badge">
                <span class="material-symbols-outlined">stethoscope</span>
                <span>Doctor &amp; Biostatistician Mentorship</span>
              </div>
            </div>
          </div>

          <div>
            <span class="eyebrow-badge"><span class="material-symbols-outlined">account_tree</span> Structured Process</span>
            <h2 id="steps-heading" style="font-size: clamp(1.85rem, 3vw, 2.5rem); margin-bottom: 18px; color: var(--teal-900);">Our End-to-End Workflow</h2>
            <div>
              {steps_html}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us & What We Promise -->
    <section class="section section-mint-soft" aria-labelledby="why-subpage-heading">
      <div class="container">
        <div class="grid grid-2" style="gap: clamp(32px, 5vw, 64px); align-items: center;">
          <div>
            <span class="eyebrow-badge eyebrow-badge-mint"><span class="material-symbols-outlined">verified</span> Key Advantages</span>
            <h2 id="why-subpage-heading" style="margin-bottom: 24px; font-size: clamp(1.85rem, 3vw, 2.5rem); color: var(--teal-900);">Why Choose Our Specialized Team</h2>
            <ul style="list-style: none; padding: 0;">
              {why_html}
            </ul>
          </div>

          <div>
            <div class="card-pillar" style="padding: 36px; box-shadow: var(--shadow-md); background: #FFFFFF;">
              <h3 style="font-size: 1.35rem; color: var(--teal-hero); margin-bottom: 14px; display: flex; align-items: center; gap: 10px;">
                <span class="material-symbols-outlined" style="color: var(--mint-primary);">handshake</span> What We Promise — And What We Don't
              </h3>
              <p style="font-size: 0.98rem; line-height: 1.75; color: var(--text-body);">{promise_text}</p>
              <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid var(--border-subtle);">
                <button type="button" class="btn btn-mint" data-modal-target="consultationModal" style="width: 100%;">
                  <span class="material-symbols-outlined">calendar_month</span>
                  <span>Book Free Consultation</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Services Interlinking -->
    <section class="section" aria-labelledby="related-heading">
      <div class="container">
        <div class="section-header section-header-left">
          <span class="eyebrow-badge"><span class="material-symbols-outlined">link</span> Natural Next Steps</span>
          <h3 id="related-heading" style="font-size: 1.85rem; color: var(--teal-900);">Related Medical Writing Services</h3>
        </div>
        <div class="grid grid-3">
          {related_html}
        </div>
      </div>
    </section>

    <!-- Closing CTA Banner -->
    <section class="cta-banner-section" aria-label="Closing CTA Banner">
      <div class="container">
        <div class="cta-banner-grid">
          <div>
            <h2 class="cta-banner-title">Ready to Advance Your Medical Research?</h2>
            <p class="cta-banner-desc">Get in touch with our medical writing coordinators today for milestone-based support and unlimited revision guidance.</p>
            <button type="button" class="btn btn-mint btn-lg" data-modal-target="consultationModal">
              <span class="material-symbols-outlined">calendar_month</span>
              <span>Get Started</span>
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
              <a href="../testimonials.html" class="btn btn-mint btn-sm" style="width: 100%;">
                <span>Read Client Reviews</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

{gs.get_footer(is_subpage=True)}
</body>
</html>
"""
    return html

# -----------------------------------------------------------------------------
# 4.1 ORIGINAL RESEARCH ARTICLES
# -----------------------------------------------------------------------------
p1 = generate_service_subpage(
    slug="original-research.html",
    title="Medical Research Paper Writing Services | MedZen Writes",
    meta_desc="Get expert medical research paper writing services — IMRaD manuscripts, literature review & journal submission support from MedZen Writes.",
    h1="Medical Research Paper Writing Services — Original Research Articles",
    subhead="From Concept to Submission-Ready Manuscript — We've Got You Covered",
    intro_p="Writing a medical research paper requires more than documenting findings — it demands scientific structure, ethical compliance, accurate interpretation, and journal alignment. Our medical research paper writing services transform your clinical or academic research into a well-organized, journal-ready manuscript.",
    aeo_summary="MedZen Writes delivers end-to-end original research article writing adhering strictly to the IMRaD format (Introduction, Methods, Results, Discussion). All writing is 100% human-crafted with biostatistical support and journal submission resubmission guarantees for up to 4 journals.",
    steps=[
        {"title": "Start With Your Study Essentials", "desc": "We begin with your research protocol, ethics committee approval, and raw dataset. Author names, designations, and affiliations are collected to structure the article accurately. We align the manuscript to your department's scope and target journal preferences."},
        {"title": "Writing the Manuscript Section by Section", "desc": "We follow the IMRaD format (Introduction, Methods, Results, Discussion). Each section is written by medical experts for clarity, relevance, and scientific rigor. All writing is 100% human-generated — no plagiarism, no AI content."},
        {"title": "Data Analysis Support", "desc": "If you don't have statistical results, our team performs the analysis using your dataset, incorporating charts, tables, and statistical values per journal guidelines."},
        {"title": "Finalization and Review", "desc": "You receive the full manuscript for review; we revise based on your guide's or co-authors' suggestions. Unlimited revisions included before final submission."}
    ],
    why_points=[
        "Manuscript development from approved protocols & ethics documentation",
        "Field-specific scientific writers with verified clinical & medical expertise",
        "Biostatistical analysis support (SPSS / R / STATA) fully integrated",
        "Author details & institutional affiliations arranged strictly per journal format",
        "Target journal selection and formatting per author submission guidelines",
        "Unlimited revisions until successful submission"
    ],
    promise_text="We do not guarantee publication — acceptance depends on each journal's editorial policies and peer review process. We do offer full support throughout: if your article is rejected, we assist with resubmission to up to 4 journals at no extra cost, including revisions based on editorial and peer-reviewer comments.",
    image_name="medical-editorial-review.jpg",
    alt_text="Medical research paper writing services — original research article manuscript",
    related_services=[
        {"name": "Statistical Analysis Services", "desc": "SPSS, R, and STATA analysis from raw datasets to publication tables.", "link": "statistical-analysis.html"},
        {"name": "Abstract & E-Poster Design", "desc": "Convert key findings into high-impact conference presentations.", "link": "abstract-poster.html"},
        {"name": "Thesis to Manuscript Conversion", "desc": "Transforming completed dissertations into high-impact journal articles.", "link": "thesis-to-manuscript.html"}
    ]
)
with open(os.path.join(serv_dir, "original-research.html"), "w", encoding="utf-8") as f:
    f.write(p1)
print("Generated original-research.html")

# -----------------------------------------------------------------------------
# 4.2 SYSTEMATIC REVIEW & META-ANALYSIS
# -----------------------------------------------------------------------------
p2 = generate_service_subpage(
    slug="systematic-review.html",
    title="Systematic Review & Meta-Analysis Writing Services | MedZen",
    meta_desc="PRISMA-compliant systematic review and meta-analysis writing services — PROSPERO registration, statistical synthesis & journal submission support.",
    h1="Systematic Review and Meta-Analysis Writing Services",
    subhead="Transform Your Research Question into a High-Impact Publication",
    intro_p="Our systematic review and meta-analysis writing services follow internationally accepted methodological and reporting standards — from developing a research question and registering your protocol in PROSPERO, to statistical meta-analysis and publication support. Whether you are a medical student, postgraduate resident, researcher, clinician, academic institution, or pharmaceutical organization, our SRMA writing services help you produce transparent, reproducible, publication-ready systematic reviews.",
    aeo_summary="MedZen Writes delivers PRISMA 2020 & MOOSE compliant systematic reviews with PROSPERO protocol registration, comprehensive multi-database searches (PubMed, Scopus, Embase, Cochrane), RevMan/R meta-analysis, RoB 2 risk of bias assessments, and GRADE evidence tables.",
    steps=[
        {"title": "Research Question & PICO Framework", "desc": "Topic selection, PICO/PECO/SPIDER framework, defining objectives, eligibility criteria, and review scope optimization."},
        {"title": "Protocol Development & PROSPERO Registration", "desc": "PRISMA-P compliant protocol drafting, search strategy preparation, and complete PROSPERO registration filing and response support."},
        {"title": "Comprehensive Literature Search & Screening", "desc": "Multi-database searches (PubMed, Embase, Scopus, Cochrane, Web of Science), screening logs, and generation of the PRISMA 2020 flow diagram."},
        {"title": "Data Extraction & Risk of Bias Assessment", "desc": "Standardized extraction sheets, Cochrane RoB 2, ROBINS-I, Newcastle-Ottawa Scale, and QUADAS-2 appraisals."},
        {"title": "Quantitative Meta-Analysis & GRADE Assessment", "desc": "Fixed/random-effects modeling, forest/funnel plots, heterogeneity (I², Tau²), publication bias, and GRADE Summary of Findings tables."},
        {"title": "Scientific Writing & Journal Submission", "desc": "Complete PRISMA 2020 structured manuscript writing, target journal selection, cover letter, and peer-review response support."}
    ],
    why_points=[
        "End-to-end SRMA support under one roof from question to final publication",
        "Experienced medical writers and PhD biostatisticians (RevMan, R, Stata, CMA)",
        "Methodology aligned with international PRISMA 2020 and GRADE standards",
        "Transparent, reproducible workflows with complete screening logs and documentation",
        "Customized solutions for PG dissertations, clinical trials, and faculty publications",
        "Dedicated post-submission assistance for reviewer responses and revisions"
    ],
    promise_text="We do not guarantee publication — acceptance depends on each journal's editorial policies and peer review process. We offer full support throughout, including resubmission to up to 4 journals at no extra cost, plus revisions based on editorial and peer-reviewer comments.",
    image_name="doctor-biostatistician-consultation.jpg",
    alt_text="Systematic review and meta-analysis writing services — PRISMA flow diagram",
    related_services=[
        {"name": "Statistical Analysis Services", "desc": "Advanced biostatistical computations, forest plots, and funnel plots.", "link": "statistical-analysis.html"},
        {"name": "Review Articles (SANRA)", "desc": "Narrative and scoping review writing for broader clinical overviews.", "link": "review-article.html"},
        {"name": "Original Research Articles", "desc": "Comprehensive manuscript writing from clinical trial data.", "link": "original-research.html"}
    ]
)
with open(os.path.join(serv_dir, "systematic-review.html"), "w", encoding="utf-8") as f:
    f.write(p2)
print("Generated systematic-review.html")

# -----------------------------------------------------------------------------
# 4.3 CASE REPORTS
# -----------------------------------------------------------------------------
p3 = generate_service_subpage(
    slug="case-report.html",
    title="Medical Case Report Writing Services | MedZen Writes",
    meta_desc="CARE guideline-compliant medical case report writing services with journal submission & peer review support. Start your case report with MedZen Writes.",
    h1="Medical Case Report Writing Services",
    subhead="Simple, Structured, Supportive Clinical Case Documentation",
    intro_p="Sharing unique clinical presentations, unexpected treatment outcomes, or rare pathology is vital for medical education. Our medical case report writing services transform your clinical cases, patient notes, or hospital records into CARE guideline-compliant, journal-ready case reports.",
    aeo_summary="MedZen Writes crafts structured medical case reports following the international CARE guidelines. From case timeline synthesis to patient consent guidance, high-resolution radiology legends, and journal submissions with up to 4 resubmissions included.",
    steps=[
        {"title": "We Accept Any Case Format", "desc": "Send us your case as a Word document or even scanned hospital case sheets — we'll extract the clinical narrative and laboratory timeline."},
        {"title": "What We Need to Begin", "desc": "Full case history, clinical investigations, high-resolution diagnostic images/histopathology, and institutional patient consent forms."},
        {"title": "Drafting per CARE Guidelines", "desc": "Our writers create a structured case report with introduction, case presentation, diagnostic timeline, therapeutic intervention, follow-up, and focused literature review."},
        {"title": "Review, Journal Submission & Peer Support", "desc": "You review and approve the draft. We format the manuscript to your target journal's requirements, assist in portal submission, and address peer review comments."}
    ],
    why_points=[
        "Structured strictly as per international CARE guidelines",
        "Journal-specific formatting, word count adherence, and image legend preparation",
        "Assistance with ethics, patient anonymity, and consent compliance",
        "Unlimited pre-submission revisions until you and your department guide are satisfied",
        "Post-submission support including reviewer response drafting",
        "No additional fees for editorial revisions or resubmissions to up to 4 journals"
    ],
    promise_text="We do not guarantee publication — acceptance depends on each journal's editorial policies and peer review process. We offer full support throughout, including resubmission to up to 4 journals at no extra cost, plus revisions based on editorial and peer-reviewer comments.",
    image_name="doctor-stethoscope-research.jpg",
    alt_text="Medical case report writing services following CARE guidelines",
    related_services=[
        {"name": "Original Research Articles", "desc": "Expand your clinical series into a multi-patient observational study.", "link": "original-research.html"},
        {"name": "Abstract & E-Poster Design", "desc": "Convert your rare case report into a striking conference poster.", "link": "abstract-poster.html"},
        {"name": "Review Articles (SANRA)", "desc": "Contextualize rare case presentations within a broader literature review.", "link": "review-article.html"}
    ]
)
with open(os.path.join(serv_dir, "case-report.html"), "w", encoding="utf-8") as f:
    f.write(p3)
print("Generated case-report.html")

# -----------------------------------------------------------------------------
# 4.4 THESIS WRITING
# -----------------------------------------------------------------------------
p4 = generate_service_subpage(
    slug="thesis.html",
    title="Medical Thesis Writing Services for PG Residents | MedZen",
    meta_desc="Expert medical thesis writing services for MD, MS & DNB residents — chapter-wise delivery, unlimited revisions & print-ready PDF formatting.",
    h1="Medical Thesis Writing Services",
    subhead="From Protocol to Perfection — Built for MD, MS, DNB & PhD Scholars",
    intro_p="Balancing demanding hospital duties, ICU rotations, night shifts, and exam preparation with the rigorous demands of writing a medical thesis is one of the greatest challenges of postgraduate life. MedZen Writes provides end-to-end, chapter-wise medical thesis writing services tailored to your university's exact guidelines.",
    aeo_summary="MedZen Writes delivers chapter-wise MD, MS, and DNB medical thesis writing with under 10% plagiarism certification, university template alignment, biostatistical analysis, and print-ready PDF formatting with unlimited post-defense revisions.",
    steps=[
        {"title": "Share Your Protocol & Master Chart", "desc": "We begin with your approved research protocol and collected master dataset — forming the solid foundation for writing and statistics."},
        {"title": "Chapter-by-Chapter Writing & Delivery", "desc": "Delivered systematically: Introduction, Aims & Objectives, Review of Literature, Materials & Methods, Results & Statistics, Discussion, Conclusion, Summary, References & Annexures."},
        {"title": "Plagiarism Under 10% with Certificate", "desc": "Every chapter is checked against authentic academic databases to guarantee originality under 10% with a certificate for your guide."},
        {"title": "Final Formatting & Print-Ready PDF", "desc": "Formatted to your university's specific font, margin, line-spacing, and binding standards — delivered in editable Word and print-ready PDF."},
        {"title": "Unlimited Revisions & Defense Support", "desc": "Structure, flow, and interpretation revised until your thesis guide and university committee approve, with zero hidden fees."}
    ],
    why_points=[
        "End-to-end thesis support from raw data to final university bound PDF",
        "Chapter-wise progressive delivery so you remain in complete control",
        "Verified plagiarism kept under 10% with an authentic certificate included",
        "Unlimited revisions at no extra cost based on guide feedback",
        "University-specific template compliance (NBE, RGUHS, MUHS, TNMGRMU, AIIMS, etc.)",
        "Transparent milestone pricing with no hidden charges"
    ],
    promise_text="Important Note: We guarantee complete academic rigor, formatting compliance, and plagiarism under 10%. If your entire dataset or results section changes fundamentally after writing is completed, additional charges apply — as this requires rewriting major empirical sections.",
    image_name="doctor-resident-mentorship.jpg",
    alt_text="Medical thesis writing services for MD MS DNB postgraduate students",
    related_services=[
        {"name": "Statistical Analysis Services", "desc": "Master chart cleaning, ANOVA, Chi-Square, and regression models.", "link": "statistical-analysis.html"},
        {"name": "Thesis to Manuscript Conversion", "desc": "Publish your approved PG thesis as a peer-reviewed journal article.", "link": "thesis-to-manuscript.html"},
        {"name": "Research Protocols & Synopsis", "desc": "Drafting initial thesis protocols and synopsis submissions.", "link": "protocol.html"}
    ]
)
with open(os.path.join(serv_dir, "thesis.html"), "w", encoding="utf-8") as f:
    f.write(p4)
print("Generated thesis.html")

# -----------------------------------------------------------------------------
# 4.5 STATISTICAL ANALYSIS
# -----------------------------------------------------------------------------
p5 = generate_service_subpage(
    slug="statistical-analysis.html",
    title="Medical Statistical Analysis Services | MedZen Writes",
    meta_desc="Medical statistical analysis services using SPSS, R & STATA — from raw data to publication-ready results for thesis & manuscript writing.",
    h1="Medical Statistical Analysis Services",
    subhead="From Raw Data to Results — How Our Statistical Analysis Works",
    intro_p="Statistical methodology makes or breaks medical research. Our medical statistical analysis services help clinicians, PG residents, and life sciences researchers navigate data cleaning, test selection, hypothesis testing, and high-impact visual representation using SPSS, R, STATA, and GraphPad Prism.",
    aeo_summary="MedZen Writes biostatisticians provide descriptive and inferential medical statistical analysis (SPSS, R, STATA) including t-tests, ANOVA, multivariate logistic regression, survival curves, ROC analysis, and publication-ready tables with p-value interpretations.",
    steps=[
        {"title": "You Provide Data, We Handle the Stats", "desc": "Submit your raw Excel dataset and study objectives; our biostatisticians handle variable coding, outlier detection, and data cleaning."},
        {"title": "Selecting the Right Statistical Tests", "desc": "Appropriate parametric or non-parametric tests selected (Student's t-test, Mann-Whitney U, ANOVA, Chi-square, logistic regression, Kaplan-Meier survival, ROC curves)."},
        {"title": "Running the Analysis & Visual Graphs", "desc": "Analysis performed in SPSS / R / STATA with clearly labeled tables, charts, p-values, 95% confidence intervals, and effect size calculations."},
        {"title": "Detailed Report & Unlimited Revisions", "desc": "A comprehensive statistical report with written clinical interpretations is delivered, with revisions included until your guide or journal reviewers are satisfied."}
    ],
    why_points=[
        "Expert support across all study designs: observational, cohort, case-control, and RCTs",
        "Appropriate test selection avoiding statistical overuse or underuse",
        "Analysis using advanced statistical packages: SPSS, R, STATA, and GraphPad Prism",
        "Comprehensive data cleaning, normality tests, and assumption verification",
        "Clear written clinical interpretations with high-resolution graphs and tables",
        "Unlimited revisions on statistical calculations until committee or journal approval"
    ],
    promise_text="What We Promise – And What We Don't: We guarantee accuracy, clarity, and transparency in our statistical work. The conclusions drawn from data, and acceptance by guides or journals, are beyond our control. Unlimited revisions on the analysis are included until your guide or reviewer is satisfied — no extra charges.",
    image_name="female-doctor-specialist.jpg",
    alt_text="Medical statistical analysis services — SPSS R STATA data analysis",
    related_services=[
        {"name": "Thesis Writing Services", "desc": "Integrate statistical outputs into complete thesis chapters.", "link": "thesis.html"},
        {"name": "Original Research Articles", "desc": "Structure your statistical findings into high-impact IMRaD manuscripts.", "link": "original-research.html"},
        {"name": "Systematic Review & Meta-Analysis", "desc": "Quantitative synthesis, RevMan forest plots, and funnel plots.", "link": "systematic-review.html"}
    ]
)
with open(os.path.join(serv_dir, "statistical-analysis.html"), "w", encoding="utf-8") as f:
    f.write(p5)
print("Generated statistical-analysis.html")

# -----------------------------------------------------------------------------
# 4.6 REVIEW ARTICLES
# -----------------------------------------------------------------------------
p6 = generate_service_subpage(
    slug="review-article.html",
    title="Medical Review Article Writing Services | MedZen Writes",
    meta_desc="SANRA-standard medical review article writing services — literature review, journal recommendations & submission support from MedZen Writes.",
    h1="Medical Review Article Writing Services",
    subhead="Narrative, Scoping & State-of-the-Art Literature Reviews",
    intro_p="A well-written medical review article synthesizes existing literature, highlights clinical controversies, and establishes authoritative guidance for healthcare practitioners. Our review article writing services follow the Scale for the Assessment of Narrative Review Articles (SANRA) to deliver balanced, insightful, and publication-ready reviews.",
    aeo_summary="MedZen Writes creates comprehensive narrative, scoping, and state-of-the-art medical review articles adhering to SANRA quality standards, complete with literature search strategies, conceptual diagrams, and journal submission support.",
    steps=[
        {"title": "You Share the Topic or Research Idea", "desc": "Have a topic or just a clinical concept? We help shape it into a focused, highly relevant review tailored to your specialty."},
        {"title": "Target Journal Recommendation & Scope Alignment", "desc": "Suitable indexed journals are identified, and the review format is aligned with their specific word counts, reference limits, and structural expectations."},
        {"title": "Comprehensive Literature Search", "desc": "Latest medical literature searched across PubMed, Scopus, and Cochrane and organized into thematic, logical clinical sections."},
        {"title": "Drafting per SANRA Standards", "desc": "We craft a balanced, ethically cited narrative review emphasizing clinical implications, diagnostic advances, and therapeutic consensus."},
        {"title": "Review, Submission & Post-Support", "desc": "You review and refine the draft. We format and submit to your chosen journal, with resubmission support to up to 4 journals included."}
    ],
    why_points=[
        "Written strictly in accordance with SANRA quality appraisal standards",
        "Expert medical writers with clinical backgrounds across various medical disciplines",
        "Up-to-date literature citation from top peer-reviewed international journals",
        "Conceptual flowcharts and summary tables to enhance reader comprehension",
        "Unlimited revisions before submission based on co-author and mentor feedback",
        "Full post-submission support including reviewer response drafting"
    ],
    promise_text="We do not guarantee publication — acceptance depends on each journal's editorial policies and peer review process. We offer full support throughout, including resubmission to up to 4 journals at no extra cost, plus revisions based on editorial and peer-reviewer comments.",
    image_name="stethoscope-desk-closeup.jpg",
    alt_text="Medical review article writing services following SANRA guidelines",
    related_services=[
        {"name": "Systematic Review & Meta-Analysis", "desc": "Quantitative systematic reviews with PRISMA compliance.", "link": "systematic-review.html"},
        {"name": "Original Research Articles", "desc": "Empirical clinical study manuscript preparation.", "link": "original-research.html"},
        {"name": "Statistical Analysis Services", "desc": "Advanced biostatistical analysis and data visualization.", "link": "statistical-analysis.html"}
    ]
)
with open(os.path.join(serv_dir, "review-article.html"), "w", encoding="utf-8") as f:
    f.write(p6)
print("Generated review-article.html")

# -----------------------------------------------------------------------------
# 4.7 RESEARCH PROTOCOLS / PROTOCOL & SYNOPSIS
# -----------------------------------------------------------------------------
p7 = generate_service_subpage(
    slug="protocol.html",
    title="Research Protocol Writing Services | MedZen Writes",
    meta_desc="Research protocol and synopsis writing services for PG theses — PICO-based topic selection, university-specific formatting & unlimited revisions.",
    h1="Research Protocol Writing Services",
    subhead="Protocol & Synopsis Writing — Setting the Foundation for Research Success",
    intro_p="A well-crafted research protocol is the vital blueprint for your postgraduate thesis or clinical trial. It ensures ethical committee approval, institutional registration, and methodological feasibility. Our protocol and synopsis writing services guide you from initial topic selection using the PICO framework to a complete, university-compliant protocol.",
    aeo_summary="MedZen Writes prepares university-compliant PG thesis protocols and synopsis documents using the PICO framework. Deliverables include sample size calculations, case record proformas, informed consent forms, and master chart templates.",
    steps=[
        {"title": "Topic Selection & PICO Framework", "desc": "Don't have a topic yet? We help you formulate a novel, feasible research question using Population, Intervention, Comparator, and Outcome (PICO) methodology."},
        {"title": "Drafting Introduction & Literature Review", "desc": "Synthesizing the background rationale, existing clinical gaps, and clear primary and secondary aims and objectives."},
        {"title": "Materials & Methods with Sample Size Calculation", "desc": "Detailed study design, inclusion/exclusion criteria, randomization methods, and statistical power/sample size calculations."},
        {"title": "Annexures, Proformas & Consent Forms", "desc": "Preparing the complete case record proforma, patient information sheets, bilingual informed consent forms, and master data entry templates."},
        {"title": "University Template Formatting", "desc": "Aligned strictly to your university or institutional review board (IRB/IEC) submission guidelines."}
    ],
    why_points=[
        "PICO-based research topic formulation ensuring scientific novelty and feasibility",
        "Accurate sample size calculations backed by biostatistical formulas",
        "Complete package: Proforma, Consent forms, Excel templates, and Literature review",
        "Strict adherence to university-specific synopsis submission guidelines",
        "Unlimited revisions until your guide and Institutional Ethics Committee (IEC) approve",
        "Smooth transition to subsequent thesis data collection and chapter writing"
    ],
    promise_text="Revisions & Support: Unlimited revisions are included until your ethics committee or university guide approves the protocol. A small additional charge applies only if the entire research topic and methodology are fundamentally replaced with a new study after drafting has commenced.",
    image_name="doctor-resident-mentorship.jpg",
    alt_text="Research protocol and synopsis writing services for medical PG students",
    related_services=[
        {"name": "Thesis Writing Services", "desc": "Seamlessly expand your approved protocol into a complete thesis.", "link": "thesis.html"},
        {"name": "Statistical Analysis Services", "desc": "Plan and execute sample size calculations and statistical plans.", "link": "statistical-analysis.html"},
        {"name": "Systematic Review Protocols", "desc": "PROSPERO-compliant systematic review protocol development.", "link": "systematic-review.html"}
    ]
)
with open(os.path.join(serv_dir, "protocol.html"), "w", encoding="utf-8") as f:
    f.write(p7)
print("Generated protocol.html")

# -----------------------------------------------------------------------------
# 4.8 THESIS TO MANUSCRIPT CONVERSION
# -----------------------------------------------------------------------------
p8 = generate_service_subpage(
    slug="thesis-to-manuscript.html",
    title="Thesis to Manuscript Conversion Services | MedZen Writes",
    meta_desc="Convert your completed thesis into a journal-ready manuscript with MedZen Writes' thesis to manuscript conversion services. IMRaD format, 100% original.",
    h1="Thesis to Manuscript Conversion Services",
    subhead="From Thesis to Published Manuscript — Publish Your Research Potential",
    intro_p="A master's or doctoral thesis contains months of rigorous clinical data, yet often remains buried in university archives. Converting a 150-page thesis into a concise, 3,500-word journal manuscript requires strategic condensing, fresh rewriting of key sections, and journal-specific formatting. MedZen Writes makes this transition seamless.",
    aeo_summary="MedZen Writes condenses and transforms completed PG theses and dissertations into concise, IMRaD-formatted journal manuscripts. Includes target journal recommendations, table restructuring, cover letters, and submission assistance to up to 4 journals.",
    steps=[
        {"title": "You Send the Thesis, We Plan the Conversion", "desc": "Share your completed thesis; our team reviews the data, extracts the core clinical findings, and suggests suitable indexed journals in your specialty."},
        {"title": "Fresh & Original Rewriting", "desc": "We condense the thesis into a focused journal article, completely rewriting the Introduction and Discussion to match peer-reviewed journal standards."},
        {"title": "Data & Visual Refinement", "desc": "Key thesis tables and graphs are restructured and redesigned for concise, publication-grade visual clarity."},
        {"title": "Review, Formatting & Journal Submission", "desc": "You review the manuscript; we revise based on your feedback and assist with submission and peer-review correspondence."}
    ],
    why_points=[
        "Specialty-specific journal recommendations (PubMed, Scopus, UGC-CARE)",
        "100% human-written, fresh manuscript drafting in strict IMRaD format",
        "Data verification and restructuring into journal-friendly compact tables",
        "Unlimited revisions before submission based on co-author input",
        "End-to-end support through peer review comments and editor revisions",
        "Resubmission support to up to 4 alternate journals at no extra fee"
    ],
    promise_text="What We Promise: We do not guarantee publication — acceptance depends on each journal's editorial policies and peer review process. We offer full support throughout, including resubmission to up to 4 journals at no extra cost, plus revisions based on editorial and peer-reviewer comments.",
    image_name="doctors-group-celebrating.jpg",
    alt_text="Thesis to manuscript conversion services — journal-ready medical manuscript",
    related_services=[
        {"name": "Original Research Articles", "desc": "Full manuscript writing from raw clinical datasets.", "link": "original-research.html"},
        {"name": "Statistical Analysis Services", "desc": "Re-analyze thesis datasets and verify statistical models.", "link": "statistical-analysis.html"},
        {"name": "Abstract & E-Poster Design", "desc": "Present your thesis findings at upcoming medical conferences.", "link": "abstract-poster.html"}
    ]
)
with open(os.path.join(serv_dir, "thesis-to-manuscript.html"), "w", encoding="utf-8") as f:
    f.write(p8)
print("Generated thesis-to-manuscript.html")

# -----------------------------------------------------------------------------
# 4.9 ABSTRACT & E-POSTER
# -----------------------------------------------------------------------------
p9 = generate_service_subpage(
    slug="abstract-poster.html",
    title="Medical Abstract & E-Poster Writing Services | MedZen",
    meta_desc="Conference abstract writing and e-poster design services for medical professionals — IMRaD abstracts, conference-compliant posters, fast turnaround.",
    h1="Medical Abstract and E-Poster Writing Services",
    subhead="Turn Your Research into a Compelling Scientific Conference Presentation",
    intro_p="Presenting your research at national and international medical conferences requires more than good science — it demands clarity, concise structure, and stunning visual appeal. Our abstract and e-poster writing services help you convert complex data into a compliant abstract and a visually polished e-poster that captures attention.",
    aeo_summary="MedZen Writes develops word-count compliant conference abstracts (IMRaD) and high-resolution digital e-posters (PowerPoint / PDF) aligned with conference display dimensions, color contrast standards, and structured presentation flows.",
    steps=[
        {"title": "Abstract Development from Scratch", "desc": "Written from your thesis, manuscript, or raw dataset. Follows strict IMRaD or conference-specific word counts (250–350 words), 100% original and scientifically accurate."},
        {"title": "High-Impact E-Poster Design", "desc": "Created by medical design specialists in high-resolution digital formats (PPTX / PDF). Optimized for virtual monitors or physical flex printing per conference dimensions."},
        {"title": "Data Visualization & Graphs", "desc": "Key findings represented through custom infographic charts, high-resolution diagnostic images, and clear clinical conclusion callouts."},
        {"title": "Rapid Turnaround & Revisions", "desc": "Quick delivery for tight conference submission deadlines with unlimited revisions based on your mentor's feedback."}
    ],
    why_points=[
        "Abstracts written by experts in your specific medical specialty",
        "Professional poster layouts that communicate scientific findings clearly",
        "Fast turnaround times designed for urgent conference submission deadlines",
        "Zero AI-generated text — 100% human-written and peer-reviewed",
        "Delivered in fully editable PPTX and print-ready high-res PDF formats",
        "End-to-end guidance until you are completely ready to present on stage"
    ],
    promise_text="Please Note: While we ensure top-quality deliverables and strict compliance with conference formatting guidelines, abstract acceptance depends on the conference scientific committee's internal review. We do not guarantee selection, but we support you at every stage.",
    image_name="medical-editorial-review.jpg",
    alt_text="Medical conference abstract and e-poster design services",
    related_services=[
        {"name": "Original Research Articles", "desc": "Expand your conference abstract into a full journal paper.", "link": "original-research.html"},
        {"name": "Thesis to Manuscript Conversion", "desc": "Turn your complete dissertation into a peer-reviewed publication.", "link": "thesis-to-manuscript.html"},
        {"name": "Medical Case Reports", "desc": "Document interesting clinical cases for conference presentations.", "link": "case-report.html"}
    ]
)
with open(os.path.join(serv_dir, "abstract-poster.html"), "w", encoding="utf-8") as f:
    f.write(p9)
print("Generated abstract-poster.html")


