# MedZen Writes — Complete Brand & Visual Identity Reference

> **Brand Identity Kit for MedZen Writes (`medzenwrites.com`)**  
> *Novadent-Inspired Medical & Clinical Research Design System*  
> **Primary Color**: Oceanic Deep Teal (`#004E57`) | **Accent Color**: Fresh Mint (`#00C2B2`)  
> **Typography**: Plus Jakarta Sans (Headlines) & Inter (Body) | **Icons**: Material Symbols Outlined

---

## 1. Folder Structure & Inventory

All assets, design tokens, typography rules, logos, icons, imagery guidelines, and ready-to-use carousel templates are organized in this folder:

```
brand-identity-kit/
│
├── README.md                      ← Quickstart guide & folder inventory
├── BRAND_AND_VISUAL_IDENTITY.md   ← Complete summary reference (this file)
├── BRAND_GUIDELINES.md             ← Comprehensive brand identity manual
├── CAROUSEL_DESIGN_SYSTEM.md       ← 6-slide carousel formula & 1080x1350 blueprint
├── brand-style-guide.html          ← Interactive style guide (one-click HEX & icon copying)
│
├── tokens/
│   ├── colors.json                 ← Complete machine-readable palette (HEX, RGB, HSL, CSS vars)
│   ├── typography.json             ← Font families, weights, and 1080px carousel scale
│   ├── brand-tokens.json           ← Master design tokens (radii, spacing, shadows, dimensions)
│   └── brand-tokens.css            ← Ready-to-import production stylesheet
│
├── logos/
│   ├── medzen-writes-logo-light.png← White + Mint logo (for dark teal/hero slides)
│   ├── medzen-writes-logo-dark.png ← Oceanic Teal + Mint logo (for white/sage slides)
│   ├── medzen-writes-logo.png      ← Canonical light production logo
│   └── logo-usage-guide.md         ← Sizing, clear space, and background contrast rules
│
├── fonts/
│   ├── fonts-guide.md              ← Typography guide, pairings, weights, and Google Fonts links
│   └── font-specimen.html          ← Live browser specimen of all weights
│
├── icons/
│   ├── ICONS_GUIDE.md              ← Guide to 70+ Google Material Symbols & Social SVGs
│   ├── icons-manifest.json         ← Categorized JSON of medical, research, and UI icons
│   └── social-icons.svg            ← Vector SVG symbols (LinkedIn, Instagram, Facebook, WhatsApp, Email)
│
├── imagery/
│   ├── stethoscope-research-bg.jpg  ← Core medical background texture
│   ├── hero_doctor.jpg             ← Primary clinical doctor portrait
│   ├── doctor-stethoscope-research.jpg
│   ├── doctor-biostatistician-consultation.jpg
│   ├── doctor-resident-mentorship.jpg
│   ├── pubmed-preeclampsia-paper.png← Real publication proof asset
│   └── IMAGERY_GUIDELINES.md       ← Photography, lighting, and duotone teal gradient rules
│
└── templates/
    └── carousel-slide-templates.html← Live 5-slide carousel preview (1080 × 1350 px)
```

---

## 2. Brand Identity & Visual System

### A. Color System

#### 1. Primary Color: Oceanic Deep Teal
- **Hex**: `#004E57`
- **RGB**: `rgb(0, 78, 87)`
- **HSL**: `hsl(186, 100%, 17%)`
- **CSS Variable**: `--teal-hero` / `--teal-primary`
- **Role**: Core Brand Anchor. Used for hero backgrounds, dark carousel covers, navbar, primary branding, and dark card containers. Conveys deep clinical authority, medical credibility, and academic prestige.
- **Related Shades**:
  - Hover: `#003F47` (`--teal-primary-hover`)
  - Dark: `#002D33` (`--teal-primary-dark`)
  - Deep Endpoint: `#002227` (`--teal-900`)
  - Mid Accent: `#007C8A` (`--teal-500`)
  - Cyan Glow: `#1AB8C9` (`--teal-300`)
  - Soft Tint: `#EBF8F9` (`--teal-50`)

#### 2. Accent Color: Fresh Mint / Vibrant Turquoise
- **Hex**: `#00C2B2`
- **RGB**: `rgb(0, 194, 178)`
- **HSL**: `hsl(175, 100%, 38%)`
- **CSS Variable**: `--mint-primary`
- **Role**: High-Converting Accent. Used for CTAs, eyebrow pill borders, active badges, step numbers (`01`, `02`), verified checkmarks, and key impact numbers. Energizes the clinical palette with modern vitality.
- **Related Shades**:
  - Hover: `#00AA9C` (`--mint-hover`)
  - Light Badge Fill: `#CCF8F4` (`--mint-100`)
  - Subtle Surface: `#EDFBF9` (`--mint-50`)

#### 3. Surfaces & Backgrounds
- **Clinical White (`#FFFFFF`)**: Standard slide background, primary card canvas, white buttons on dark hero slides.
- **Soft Sage / Mint (`#EDF5F4`)**: Subtle tinted surface for problem/dilemma slides, secondary cards, and badge fills.
- **Cool Alt Surface (`#F3F8F8`)**: Alternating section contrast.
- **Deepest Footer Teal (`#003238`)**: Deep dark slide base and footer bar.

#### 4. Typography Neutrals
- **Headline Dark Teal (`#002B30`)**: H1, H2, H3 headings on white and light sage backgrounds (14.2:1 contrast ratio).
- **Slate Body (`#395256`)**: Body copy, paragraphs, explanation sentences.
- **Muted Metadata (`#5F7D81`)**: Captions, timestamps, handles (`@medzenwrites`), sub-labels.
- **Inverted Pure White (`#FFFFFF`)**: Headlines and body copy on dark teal slides (9.8:1 contrast ratio).

#### 5. Gradients
- **Hero Dark Teal**: `linear-gradient(135deg, #00434b 0%, #004e57 55%, #003b42 100%)`
- **Primary Brand**: `linear-gradient(135deg, #004e57 0%, #006874 50%, #00c2b2 100%)`
- **Fresh Mint**: `linear-gradient(135deg, #00c2b2 0%, #1ed0c1 100%)`
- **Soft Sage**: `linear-gradient(135deg, #edf5f4 0%, #f4fbfb 100%)`
- **Text Gradient**: `linear-gradient(135deg, #004e57 0%, #00c2b2 100%)`

---

### B. Typography & Fonts

#### 1. Primary Headline Font: Plus Jakarta Sans
- **Google Font**: `'Plus Jakarta Sans', sans-serif`
- **Weights Used**:
  - `900 Black`: Carousel cover main titles, huge statistics (`98.6%`, `45 Days`, `01`)
  - `800 ExtraBold`: Slide H1 headlines, website hero titles
  - `700 Bold`: Section titles, pill eyebrow badges, button labels
  - `600 SemiBold`: Subheadings, card titles, doctor names

#### 2. Secondary Body Font: Inter & Plus Jakarta Sans
- **Google Font**: `'Inter', sans-serif`
- **Weights Used**:
  - `600 SemiBold`: Inline highlights, checklist items, journal citations
  - `500 Medium`: Primary bullet points, quote copy
  - `400 Regular`: Detailed clinical explanations, body paragraphs

#### 3. Carousel Typography Scale (1080 × 1350 px Canvas)
- **Cover Super Title**: `68px – 76px` | Weight: `900 Black` | Line Height: `1.12` | Letter Spacing: `-0.035em`
- **Slide H1 Title**: `52px – 60px` | Weight: `800 ExtraBold` | Line Height: `1.2`
- **Step Heading**: `38px – 44px` | Weight: `700 Bold`
- **Body Bullets**: `28px – 32px` | Weight: `400` or `500` | Line Height: `1.5`
- **Eyebrow Badge**: `20px` | Weight: `700 Bold` | Letter Spacing: `0.08em` | `UPPERCASE`
- **Stat Number**: `88px – 100px` | Weight: `900 Black`
- **Footer / Handle**: `20px – 22px` | Weight: `600 SemiBold`

#### 4. Embed Codes
```html
<!-- Google Fonts Embed -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap" rel="stylesheet">
```

```css
/* CSS Imports */
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');

:root {
  --font-family-heading: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-family-body: 'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
```

---

### C. Logo Usage Rules

| File Name | Description | Placement |
| :--- | :--- | :--- |
| `logos/medzen-writes-logo-light.png` | White text with Fresh Mint accent | **Dark Surfaces**: Oceanic Teal (`#004E57`), Dark Gradients, Cover Slides |
| `logos/medzen-writes-logo-dark.png` | Oceanic Teal text with Fresh Mint accent | **Light Surfaces**: Pure White (`#FFFFFF`), Soft Sage (`#EDF5F4`) |
| `logos/medzen-writes-logo.png` | Canonical light production logo | General production fallback |

- **Clear Space**: Maintain a boundary equal to half the logo height on all four sides.
- **Carousel Cover Size**: Height `52px – 64px`.
- **Slide Footer Watermark**: Height `36px – 44px`.
- **Never**: Stretch, distort, change brand colors, or place dark logos on dark teal.

---

### D. Iconography System

- **Core Icon Family**: **Google Material Symbols Outlined** (`opsz 20..48, wght 400, FILL 0, GRAD 0`).
- **Clinical & Medical**: `medical_services`, `stethoscope`, `clinical_notes`, `pill`, `health_and_safety`, `biotech`, `psychology`
- **Academic & Thesis**: `school`, `menu_book`, `auto_stories`, `description`, `checklist`, `rate_review`, `collections_bookmark`
- **Biostatistics & Data**: `analytics`, `bar_chart`, `timeline`, `insights`, `science`, `fact_check`
- **Proof & Trust**: `verified`, `check_circle`, `star`, `reviews`, `military_tech`, `handshake`
- **Navigation & Social**: `arrow_forward` (Swipe 👉), `download` (Save post), `calendar_month` (Book consultation), `chat` (WhatsApp / DM)
- **Vector Social SVGs**: Located in `icons/social-icons.svg` (LinkedIn, Instagram, Facebook, WhatsApp, Email).

---

### E. Geometry & UI Components

1. **Pill Eyebrow Badges**:
   - `border-radius: 9999px` (Pill geometry).
   - Padding: `8px 18px`.
   - Font: `Plus Jakarta Sans 700 Bold`, `0.82rem`, `letter-spacing: 0.08em`, `UPPERCASE`.
   - Accompanied by a 16px–20px Material Symbol icon.
2. **Buttons (Novadent Clinical Rounded Geometry)**:
   - Soft-rounded corners: `border-radius: 10px to 14px`.
   - **Primary on Dark**: Solid Pure Clinical White (`#FFFFFF`) with Dark Teal text (`#004D56`) and subtle drop shadow.
   - **Primary on Light**: Deep Oceanic Teal (`#004E57`) with White text or Mint (`#00C2B2`) with Dark Teal text.
3. **Elevated Medical Cards**:
   - `border-radius: 20px to 24px`.
   - Background: Pure White (`#FFFFFF`) or Soft Sage (`#EDF5F4`).
   - Border: `1px solid #E8F2F2`.
   - Shadow: `0 10px 25px -4px rgba(0, 43, 48, 0.07)`.
4. **Step Badges**:
   - Circular `56px × 56px` badge in Fresh Mint (`#00C2B2`) with bold dark teal numeral (`01`, `02`, `03`).

---

## 3. Social Carousel Blueprint (1080 × 1350 px)

- **Canvas Size**: `1080 × 1350 px` (Instagram 4:5 Portrait & LinkedIn Document Carousel).
- **Safe Margins**: Top `110px`, Bottom `110px`, Sides `88px`.

### The 5-to-6 Slide Narrative Pacing
1. **Slide 1: Cover Hook (Dark Teal)**:
   - Light logo + counter `01/05`.
   - Eyebrow pill: `[school] PG Thesis Blueprint`.
   - Big bold title (68-76px Plus Jakarta Sans 900 Black) with mint highlight words.
   - Subtitle (28-32px Inter Medium).
   - Footer: `@medzenwrites` + `Swipe to Read 👉`.
2. **Slide 2: The Dilemma / Common Errors (Soft Sage)**:
   - Dark logo + counter `02/05`.
   - Headline: *"The 3 Blunders Scrutiny Committees Flag Instantly"*.
   - 2 elevated white cards with error cues (`cancel` icon) highlighting sample size or synopsis mistakes.
3. **Slide 3–4: The Actionable Clinical Framework (Clinical White)**:
   - Step badges (`01`, `02`, `03` in Fresh Mint `#00C2B2`).
   - Actionable medical guidance with green/mint checkmarks (`check_circle`).
4. **Slide 5: Medical Proof & Case Study (Soft Sage)**:
   - Stat callout box: *"45 Days — From Draft to Journal Acceptance"* + *"0% Plagiarism Similarity"*.
   - 5-Star verified doctor testimonial card.
5. **Slide 6: Dual CTA & Save Trigger (Dark Teal)**:
   - Headline: *"Stuck With Your Thesis or Research Paper?"*.
   - Button 1: *"Book Free 1-on-1 Consultation"*.
   - Button 2: *"Save This Post for Your Dissertation"*.
   - Contact info: WhatsApp `+91 91763 65161` | `medzenwrites.com`.

---

## 4. Interactive Tools in this Kit

- **Interactive Style Guide Webpage**: Open [`brand-style-guide.html`](file:///c:/Users/Dell/OneDrive/Desktop/MW%20Website%205%20-%20Copy/brand-identity-kit/brand-style-guide.html) in any web browser to test interactive color swatches, click-to-copy HEX values and icon glyph names, and inspect component buttons.
- **Carousel Slide Preview**: Open [`templates/carousel-slide-templates.html`](file:///c:/Users/Dell/OneDrive/Desktop/MW%20Website%205%20-%20Copy/brand-identity-kit/templates/carousel-slide-templates.html) in any web browser to view the complete 5-slide carousel deck rendered at native 1080 × 1350 px layout.
- **Typography Specimen**: Open [`fonts/font-specimen.html`](file:///c:/Users/Dell/OneDrive/Desktop/MW%20Website%205%20-%20Copy/brand-identity-kit/fonts/font-specimen.html) to see all font weights and pairings live.
