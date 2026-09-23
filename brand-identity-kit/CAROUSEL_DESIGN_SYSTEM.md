# MedZen Writes — Social Carousel Design System & Blueprint

This blueprint establishes the exact visual identity, layout rules, typography hierarchies, and slide formulas for generating publishable **Instagram (1080 × 1350 px)** and **LinkedIn Document** carousels that match the MedZen Writes website.

---

## 1. Canvas Dimensions & Safe Zones

| Platform | Canvas Size | Aspect Ratio | Format | Recommended |
| :--- | :--- | :--- | :--- | :--- |
| **Instagram Carousel** | **1080 × 1350 px** | **4:5 Portrait** | PNG / JPG | **Primary Standard** |
| **LinkedIn Document** | **1080 × 1350 px** | **4:5 Portrait** | PDF Carousel | **Primary Standard** |
| **Instagram Square** | 1080 × 1080 px | 1:1 Square | PNG / JPG | Alternative |

### Safe Margin Rules (1080 × 1350 px Canvas)
- **Top Safe Zone**: `110px` — Reserved for top navigation (Logo + Category Pill + Slide Counter `01/06`).
- **Bottom Safe Zone**: `110px` — Reserved for footer navigation (Handle `@medzenwrites` + Swipe Cue / Bookmark Cue).
- **Side Margins**: `88px` on Left and Right edges.
- **Content Area**: `904px × 1130px` — Keep all text, cards, and diagrams strictly inside this zone to prevent edge cutoff on different mobile displays.

---

## 2. The 6-Slide MedZen Writes Carousel Architecture

```
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│   SLIDE 1    │  │   SLIDE 2    │  │  SLIDES 3-4  │
│  Cover Hook  │─>│ The Dilemma  │─>│ The Action   │
│  (Dark Teal) │  │ (Soft Sage)  │  │  Framework   │
└──────────────┘  └──────────────┘  └──────────────┘
       │                 │                 │
       v                 v                 v
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│   SLIDE 5    │  │   SLIDE 6    │  │  PERSISTENT  │
│ PubMed Proof │─>│ Double CTA & │  │  BRANDING   │
│ & Case Study │  │  Save Slide  │  │  EVERY SLIDE │
└──────────────┘  └──────────────┘  └──────────────┘
```

---

### Slide 1: The High-Converting Cover (Hook)
- **Background**: Deep Oceanic Teal (`--grad-hero: linear-gradient(135deg, #00434b 0%, #004e57 55%, #003b42 100%)`) or Pure Clinical White (`#FFFFFF`).
- **Top Bar**:
  - Left: `medzen-writes-logo-light.png` (height: `44px`).
  - Right: Slide counter pill `01 / 06` in glass white.
- **Eyebrow Pill**:
  - Code: `<span class="eyebrow-badge eyebrow-badge-mint"><span class="material-symbols-outlined">school</span> PG Thesis Blueprint</span>`
- **Main Headline (Super Title)**:
  - Font: `Plus Jakarta Sans`, `800 ExtraBold` or `900 Black`, `68px – 76px`, line-height `1.12`.
  - Highlight 1–2 power words in **Fresh Mint (`#00C2B2`)** or bold white.
  - *Example*: *"Why 78% of MD Dissertations Get Flagged by Scrutiny (And The 3 Fixes)"*
- **Sub-Hook**:
  - Font: `Inter`, `500 Medium`, `28px – 32px`, `rgba(255, 255, 255, 0.85)`.
- **Bottom Bar**:
  - Left: Verified Author Badge (`Dr. Consultant & Biostatistician Panel`).
  - Right: `Swipe 👉` with `arrow_forward` icon.

---

### Slide 2: The Problem / Resident Dilemma
- **Background**: Soft Sage (`#EDF5F4`) or Clean White (`#FFFFFF`).
- **Top Bar**: Dark logo (`medzen-writes-logo-dark.png`) + `02 / 06`.
- **Slide Heading**:
  - Font: `Plus Jakarta Sans`, `800 ExtraBold`, `52px`, color: `#002B30`.
- **Content Module**:
  - 2 to 3 elevated medical cards (`background: #ffffff`, `border: 1px solid #E8F2F2`, `border-radius: 20px`, `box-shadow: var(--shadow-sm)`).
  - Each card features a red/warning icon (`error` or `clinical_notes`) contrasting with a clear resident pain point (e.g. *"Underpowered Sample Size," "Discrepant Ethics Synopsis," "Post-Hoc Hypothesis Testing"*).

---

### Slides 3 & 4: The Step-by-Step Clinical Framework
- **Background**: Pure Clinical White (`#FFFFFF`) or Soft Mint (`#EDF5F4`).
- **Visual Anchor**: `.step-number-badge`
  - A `56px × 56px` circular badge with `background: #00C2B2`, text: `01`, `02`, `03` in `Plus Jakarta Sans 900 Black`.
- **Step Title**:
  - `40px – 44px`, `700 Bold`, `#002B30`.
- **Actionable Bullet Points**:
  - Font: `Inter`, `28px – 30px`, `#395256`.
  - Preceded by green/mint `<span class="material-symbols-outlined" style="color:#00C2B2;">check_circle</span>`.
  - Provide direct, practical value (e.g. exact SPSS test to use, PRISMA diagram requirements, Vancouver reference rules).

---

### Slide 5: The Medical Proof / Evidence Card
- **Background**: Soft Sage (`#EDF5F4`) or Dark Teal (`#004E57`).
- **Headline**: *"Case Study: From 2 Rejections to PubMed Indexing in 45 Days"*.
- **Proof Assets**:
  - Embedded PubMed citation card mockup (Title, PMID, Journal, Impact Factor).
  - Stat callout box:
    - Number: `92px Plus Jakarta Sans 900` in Fresh Mint (`#00C2B2`).
    - Label: *"Turnaround time with 0 plagiarism flags"*.
  - Verified Doctor quote with name and specialty (`Dr. Sneha R., MD Obstetrics & Gynaecology`).

---

### Slide 6: The Save & Action CTA Slide
- **Background**: Oceanic Teal (`#004E57`) with subtle ambient circular accents.
- **Top Bar**: Logo + `06 / 06`.
- **Primary Offer**:
  - Heading: *"Need Expert Guidance on Your Thesis or Research Paper?"* (60px Plus Jakarta Sans).
  - Body: *"Don't risk delayed graduation or journal rejection. Our medical writing specialists and PhD statisticians handle every phase from synopsis to proofreading."*
- **Action Pill Buttons**:
  - Button 1 (White Clinical Pill): `[calendar_month] Book Free 1-on-1 Consultation`
  - Button 2 (Outline Mint Pill): `[download] Save This Post for Your Dissertation`
- **Bottom Sign-Off**:
  - `@medzenwrites` | `medzenwrites.in` | `+91 91763 65161`

---

## 3. Color Palette Cheat Sheet for Slide Designers

```
PRIMARY BRAND ANCHOR
■ Oceanic Deep Teal: #004E57 (rgb: 0, 78, 87)
  - Dominant cover slide background, main website header, primary brand color.

ACCENT / HIGH-CONVERTING CALL-TO-ACTION
■ Fresh Mint / Turquoise: #00C2B2 (rgb: 0, 194, 178)
  - Eyebrow pill borders, step number badges, active icons, CTA highlights.

SURFACES
■ Clinical White: #FFFFFF
  - Content slide cards, white cover slides, primary button fills on dark backgrounds.
■ Soft Sage / Mint: #EDF5F4 (rgb: 237, 245, 244)
  - Alternate slide backgrounds, subtle card container backgrounds.
■ Deepest Footer Teal: #003238 (rgb: 0, 50, 56)
  - Deep dark slide base.

TYPOGRAPHY NEUTRALS
■ Headline Charcoal-Teal: #002B30 (Slide titles on light backgrounds)
■ Slate Body: #395256 (Slide bullet points, explanations)
■ Muted Teal: #5F7D81 (Subtitles, handles, timestamps)
■ Pure White: #FFFFFF (Text on dark teal slides)
```

---

## 4. Copywriting Tone & Rules for MedZen Writes

1. **Academic Rigor Over Hype**:
   - Write like an experienced medical guide or journal peer reviewer who genuinely cares about the resident's success.
   - Use precise medical terminology: *Sample size calculation, power analysis (1 - β), ethics clearance (IEC), CARE guidelines, PRISMA 2020, Vancouver citation style, Scopus Q1/Q2, PubMed/MEDLINE*.
2. **Never Make Unsubstantiated Claims**:
   - Do not invent fake quotes or guarantee acceptance in journals that require independent peer review.
   - Emphasize guaranteed compliance with ICMJE ethics, 100% plagiarism-free thesis structure, and unlimited revisions until guide approval.
3. **Keep Slides Scannable**:
   - Maximum 1 major idea per slide.
   - Maximum 30 to 45 words per content slide.
   - High contrast between text and background on every slide.
