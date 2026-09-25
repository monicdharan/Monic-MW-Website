# MedZen Writes — Iconography System Guide

## 1. Primary Icon Family: Google Material Symbols Outlined

MedZen Writes uses **Google Material Symbols Outlined** as its core system icon family. It provides clinical precision, crisp geometric lines, and seamless rendering across all responsive viewports and high-res social carousel canvases.

### Icon Configuration
- **Style**: `Outlined`
- **Weight**: `400` (Regular)
- **Optical Size (`opsz`)**: `20..48` (Default `24` for web; `28..36` for carousel slides)
- **Fill (`FILL`)**: `0` (Outline stroke)
- **Grade (`GRAD`)**: `0`

### CSS Standard Implementation
```css
.material-symbols-outlined {
  font-family: 'Material Symbols Outlined';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
  vertical-align: middle;
}
```

---

## 2. Categorized Brand Icon Library

### A. Clinical & Medical Domain
Used in doctor specialization badges, medical writing service cards, and ethics compliance slides:

| Icon Name | Rendered Glyph Code | Primary Usage / Meaning |
| :--- | :--- | :--- |
| `medical_services` | `<span class="material-symbols-outlined">medical_services</span>` | General clinical writing & medical services |
| `stethoscope` | `<span class="material-symbols-outlined">stethoscope</span>` | Clinician & resident advisory |
| `clinical_notes` | `<span class="material-symbols-outlined">clinical_notes</span>` | Case reports (CARE guidelines), clinical documentation |
| `medical_information` | `<span class="material-symbols-outlined">medical_information</span>` | Patient data, case histories |
| `pill` | `<span class="material-symbols-outlined">pill</span>` | Pharmacology, drug trials, therapeutics |
| `health_and_safety` | `<span class="material-symbols-outlined">health_and_safety</span>` | Ethics committee (IEC) protocol compliance |
| `biotech` | `<span class="material-symbols-outlined">biotech</span>` | Laboratory research, molecular biology |
| `psychology` | `<span class="material-symbols-outlined">psychology</span>` | Psychiatry, neuroscience, mental health |

### B. Academic & Research Publication
Used in thesis services, journal manuscript conversions, and literature reviews:

| Icon Name | Rendered Glyph Code | Primary Usage / Meaning |
| :--- | :--- | :--- |
| `school` | `<span class="material-symbols-outlined">school</span>` | PG Medical Thesis / Dissertation writing (MD/MS/DNB) |
| `menu_book` | `<span class="material-symbols-outlined">menu_book</span>` | Original research manuscripts (IMRaD format) |
| `auto_stories` | `<span class="material-symbols-outlined">auto_stories</span>` | Narrative review articles (SANRA guidelines) |
| `checklist` | `<span class="material-symbols-outlined">checklist</span>` | Free PG Thesis Checklist, submission criteria |
| `description` | `<span class="material-symbols-outlined">description</span>` | Research protocols, synopses |
| `edit_document` | `<span class="material-symbols-outlined">edit_document</span>` | Manuscript proofreading & editorial enhancement |
| `rate_review` | `<span class="material-symbols-outlined">rate_review</span>` | Peer-review reviewer response letters |
| `collections_bookmark`| `<span class="material-symbols-outlined">collections_bookmark</span>` | Citation indexing (EndNote, Zotero, Mendeley) |

### C. Biostatistics & Data Analysis
Used in SPSS/R analysis, sample size calculations, and meta-analyses:

| Icon Name | Rendered Glyph Code | Primary Usage / Meaning |
| :--- | :--- | :--- |
| `analytics` | `<span class="material-symbols-outlined">analytics</span>` | Biostatistical analysis & study design |
| `bar_chart` | `<span class="material-symbols-outlined">bar_chart</span>` | SPSS, R, STATA statistical modeling |
| `timeline` | `<span class="material-symbols-outlined">timeline</span>` | Longitudinal data, survival curves |
| `insights` | `<span class="material-symbols-outlined">insights</span>` | Meta-analysis forest plots, effect sizes |
| `science` | `<span class="material-symbols-outlined">science</span>` | Hypothesis testing, p-values |
| `fact_check` | `<span class="material-symbols-outlined">fact_check</span>` | Statistical power & methodology audit |

### D. Credibility, Trust & Proof
Used in publication metrics, doctor testimonials, and guarantees:

| Icon Name | Rendered Glyph Code | Primary Usage / Meaning |
| :--- | :--- | :--- |
| `verified` | `<span class="material-symbols-outlined">verified</span>` | Scopus / PubMed indexing guaranteed |
| `check_circle` | `<span class="material-symbols-outlined">check_circle</span>` | Approved protocol, university compliance |
| `star` | `<span class="material-symbols-outlined">star</span>` | 5.0 Star Doctor Rating, verified reviews |
| `reviews` | `<span class="material-symbols-outlined">reviews</span>` | Doctor & resident testimonials |
| `military_tech` | `<span class="material-symbols-outlined">military_tech</span>` | Academic excellence & track record |
| `all_inclusive` | `<span class="material-symbols-outlined">all_inclusive</span>` | Unlimited revisions until guide approval |
| `handshake` | `<span class="material-symbols-outlined">handshake</span>` | Academic integrity & confidentiality |

### E. Social Carousel Cues & Action Triggers
Used for slide swipe cues, save triggers, and profile footers:

| Icon Name | Rendered Glyph Code | Primary Usage / Meaning |
| :--- | :--- | :--- |
| `arrow_forward` | `<span class="material-symbols-outlined">arrow_forward</span>` | Swipe cue (**Swipe 👉**) |
| `download` | `<span class="material-symbols-outlined">download</span>` | Save this post for your thesis defense |
| `calendar_month`| `<span class="material-symbols-outlined">calendar_month</span>` | Book free consultation |
| `chat` | `<span class="material-symbols-outlined">chat</span>` | WhatsApp consultation / DM prompt |
| `schedule` | `<span class="material-symbols-outlined">schedule</span>` | 14-Day express delivery timeline |
| `support_agent` | `<span class="material-symbols-outlined">support_agent</span>` | Dedicated academic coordinator |
| `open_in_new` | `<span class="material-symbols-outlined">open_in_new</span>` | Link in bio / visit medzenwrites.com |

---

## 3. Carousel Specific Icon Styling Guidelines

1. **Eyebrow Pill Badges**:
   - Always pair an icon with the eyebrow title (e.g. `<span class="material-symbols-outlined">school</span> PG Thesis Strategy`).
   - Icon font-size: `16px` (Web) or `20px` (Carousel).
2. **Step Number Icons**:
   - When numbering slides, use `.step-number-badge` (`56px × 56px` circle in Mint `#00C2B2` with dark teal bold numeral `01`, `02`).
3. **Swipe Indicator (Slide Footer)**:
   - Combine text with `arrow_forward`:
   ```html
   <div class="carousel-swipe-indicator">
     <span>Swipe</span>
     <span class="material-symbols-outlined">arrow_forward</span>
   </div>
   ```
4. **Color Rules**:
   - Icons on dark slides: Fresh Mint (`#00C2B2`) or White (`#FFFFFF`).
   - Icons on light slides: Deep Teal (`#004E57`) or Mint (`#00C2B2`).
   - Never use random unbranded accent colors (e.g., orange, purple, red) for icons.
