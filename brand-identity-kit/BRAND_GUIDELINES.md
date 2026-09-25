# MedZen Writes — Master Brand & Visual Identity Guidelines

> **Brand Identity Kit for MedZen Writes (`medzenwrites.com`)**  
> *Novadent-Inspired Medical & Clinical Research Design System*  
> **Primary Color**: Oceanic Deep Teal (`#004E57`) | **Accent Color**: Fresh Mint (`#00C2B2`)  
> **Typography**: Plus Jakarta Sans (Headlines) & Inter (Body) | **Icons**: Material Symbols Outlined

---

## 1. Executive Brand Essence & Archetype

**MedZen Writes** (a specialized academic division of MedZen Innovations Pvt. Ltd.) is India’s premier academic medical writing, biostatistical consulting, and research publication service.

- **Target Audience**: Postgraduate medical residents (MD, MS, DNB), super-specialty fellows (DM, MCh), clinical researchers, medical faculty, and healthcare consultants.
- **Brand Archetype**: **The Authoritative Clinical Mentor** — Combining the peer-level scientific rigor of an international journal editorial board with empathetic, reliable guidance for residents facing high-stakes academic dissertation deadlines.
- **Visual Personality**: High-end clinical, modern, clean, authoritative, trustworthy, and precise. Inspired by Novadent aesthetics: oceanic teals, vibrant mint accents, soft sage surfaces, pill geometry, and micro-interactions.

---

## 2. Master Color System

### A. Primary Color: Oceanic Deep Teal
Conveys deep clinical authority, medical credibility, and academic prestige.

| Token | HEX | RGB | Semantic Usage |
| :--- | :--- | :--- | :--- |
| `--teal-hero` / `--teal-700` | `#004E57` | `rgb(0, 78, 87)` | **Core Brand Color**: Hero banners, primary logo, navbar background, cover slide base |
| `--teal-primary-hover` | `#003F47` | `rgb(0, 63, 71)` | Hover state on dark buttons and link highlights |
| `--teal-primary-dark` | `#002D33` | `rgb(0, 45, 51)` | High-contrast text on white surfaces, dark mode cards |
| `--teal-900` | `#002227` | `rgb(0, 34, 39)` | Deep shadow tints and gradient endpoints |
| `--teal-500` | `#007C8A` | `rgb(0, 124, 138)` | Mid-tone accents, secondary borders |
| `--teal-300` | `#1AB8C9` | `rgb(26, 184, 201)` | Cyan-tinted glow effects and gradient bridges |
| `--teal-100` | `#C0EFF4` | `rgb(192, 239, 244)` | Soft badge borders, card divider tints |
| `--teal-50` | `#EBF8F9` | `rgb(235, 248, 249)` | Subtle button hover state backgrounds |

### B. Accent Color: Fresh Mint / Vibrant Turquoise
Energizes the clinical palette, draws eye focus to key metrics, active triggers, and conversions.

| Token | HEX | RGB | Semantic Usage |
| :--- | :--- | :--- | :--- |
| `--mint-primary` / `--mint-500`| `#00C2B2` | `rgb(0, 194, 178)` | **Primary Accent**: CTAs, eyebrow badges, step numbers (`01`), verified checkmarks |
| `--mint-hover` | `#00AA9C` | `rgb(0, 170, 156)` | Button hover state |
| `--mint-active` | `#008F83` | `rgb(0, 143, 131)` | Button pressed state |
| `--mint-100` | `#CCF8F4` | `rgb(204, 248, 244)` | Eyebrow badge fill background (light mode) |
| `--mint-50` | `#EDFBF9` | `rgb(237, 251, 249)` | Light surface card tints |

### C. Surfaces & Backgrounds
| Token | HEX | Description | Usage |
| :--- | :--- | :--- | :--- |
| `--bg-body` / `--bg-page` | `#FFFFFF` | Pure Clinical White | Standard slide background, primary card surface |
| `--bg-alt` | `#F3F8F8` | Cool Clinical Tint | Alternating website sections, soft slide contrast |
| `--bg-soft-mint` | `#EDF5F4` | Soft Sage / Mint | Distinctive card backgrounds, slide 2/4 dilemma slides |
| `--bg-card-subtle` | `#F9FCFC` | Subtle White Card | Elevated white medical cards |
| `--bg-deep-footer` | `#003238` | Deepest Dark Teal | Footer bar, high-contrast dark bottom slides |

### D. Typography Neutrals
| Token | HEX | Description | Usage |
| :--- | :--- | :--- | :--- |
| `--text-headline` | `#002B30` | Deep Teal-Charcoal | H1, H2, H3 headings on white & light sage backgrounds |
| `--text-body` | `#395256` | Balanced Slate-Teal | Body copy, paragraphs, explanation text |
| `--text-muted` | `#5F7D81` | Muted Steel Teal | Captions, metadata, handles, sub-labels |
| `--text-inverted` | `#FFFFFF` | Pure White | Headlines, body copy, and icons on dark teal slides |
| `--text-mint` | `#00C2B2` | Fresh Mint Accent | Highlight words inside headlines |

### E. Gradients
- **Hero Gradient**: `linear-gradient(135deg, #00434b 0%, #004e57 55%, #003b42 100%)`
- **Primary Brand Gradient**: `linear-gradient(135deg, #004e57 0%, #006874 50%, #00c2b2 100%)`
- **Fresh Mint Gradient**: `linear-gradient(135deg, #00c2b2 0%, #1ed0c1 100%)`
- **Soft Sage Surface Gradient**: `linear-gradient(135deg, #edf5f4 0%, #f4fbfb 100%)`
- **Text Gradient**: `linear-gradient(135deg, #004e57 0%, #00c2b2 100%)`

---

## 3. Typography Hierarchy

### Primary Headline Font: Plus Jakarta Sans
- **Google Fonts Import**: `family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900`
- **Weights Used**:
  - `900 Black`: Carousel cover titles, huge numbers (`98.6%`, `45 Days`).
  - `800 ExtraBold`: Slide H1 headlines, website hero titles.
  - `700 Bold`: Section titles, button labels, pill eyebrow badges.
  - `600 SemiBold`: Subheadings, doctor names, navigation links.

### Secondary Body Font: Inter & Plus Jakarta Sans
- **Google Fonts Import**: `family=Inter:wght@300;400;500;600;700`
- **Weights Used**:
  - `600 SemiBold`: Key sentence highlights, checklist items.
  - `500 Medium`: Primary bullet points, testimonials.
  - `400 Regular`: Detailed methodology explanations, captions.

---

## 4. Logo Usage Guidelines

### Variations in `brand-identity-kit/logos/`
1. `medzen-writes-logo-light.png`: Pure white text with Fresh Mint accent. **Use only on dark backgrounds** (Oceanic Teal `#004E57`, hero gradient, dark slides).
2. `medzen-writes-logo-dark.png`: Oceanic Teal text with Fresh Mint accent. **Use only on light backgrounds** (White `#FFFFFF`, Soft Sage `#EDF5F4`).
3. `medzen-writes-logo.png`: Canonical light version.

### Rules:
- Minimum clear space equal to half the height of the logo on all sides.
- Never stretch or squash the aspect ratio (~3.22 : 1).
- Never place the dark logo on dark teal, or the white logo on white background.

---

## 5. Geometry & Component Styling

1. **Pill Eyebrow Badges**:
   - `border-radius: 9999px` (Pill geometry).
   - Padding: `8px 18px`.
   - Font: `Plus Jakarta Sans 700 Bold`, `0.82rem`, `letter-spacing: 0.08em`, `UPPERCASE`.
   - Accompanied by a 16px–20px Material Symbol icon.
2. **Buttons**:
   - Novadent soft clinical shape: `border-radius: 10px to 14px`.
   - **Primary Button on Dark**: Solid Pure Clinical White (`#FFFFFF`) with Dark Teal text (`#004D56`) and subtle drop shadow.
   - **Primary Button on Light**: Deep Oceanic Teal (`#004E57`) with White text or Mint (`#00C2B2`) with Dark Teal text.
3. **Elevated Medical Cards**:
   - `border-radius: 20px to 24px`.
   - Background: Pure White (`#FFFFFF`) or Soft Sage (`#EDF5F4`).
   - Border: `1px solid #E8F2F2`.
   - Shadow: `0 10px 25px -4px rgba(0, 43, 48, 0.07)`.
4. **Step Badges**:
   - Circular `56px × 56px` badge in Fresh Mint (`#00C2B2`) with bold dark teal numeral (`01`, `02`, `03`).

---

## 6. Social Carousel Blueprint (1080 × 1350 px)

1. **Slide 1 (Cover)**: Dark Oceanic Teal Hero background, Light Logo top left, Eyebrow badge, Big punchy headline (68-76px 900 Black), Sub-hook, `Swipe 👉` indicator.
2. **Slide 2 (Dilemma)**: Soft Sage background, Dark Logo, Headline introducing the 2–3 resident mistakes, 2 elevated cards with error cues.
3. **Slide 3–4 (Action Framework)**: White background, Step badges (`01`, `02`, `03`), actionable medical guidance with checklist checks.
4. **Slide 5 (Proof / Case Study)**: Soft Sage background, 45-day turnaround stat callout, verified doctor quote, 5-star rating.
5. **Slide 6 (Dual CTA)**: Dark Oceanic Teal background, "Stuck With Your Thesis?" headline, Button 1: "Book Free Consultation", Button 2: "Save This Post", WhatsApp handle & link.

---

## 7. Directory Reference

- `brand-identity-kit/tokens/colors.json` — Raw color palette tokens (HEX, RGB, HSL, CSS var).
- `brand-identity-kit/tokens/typography.json` — Font specifications & 1080px carousel scale.
- `brand-identity-kit/tokens/brand-tokens.json` — Complete master design tokens.
- `brand-identity-kit/tokens/brand-tokens.css` — Ready-to-import CSS file.
- `brand-identity-kit/logos/` — Light and dark PNG logos.
- `brand-identity-kit/fonts/` — Typography guide and live HTML specimen.
- `brand-identity-kit/icons/` — Complete list of 70+ Material Symbols & Social SVGs.
- `brand-identity-kit/imagery/` — Clinical background textures, doctor portraits, and guideline documentation.
- `brand-identity-kit/templates/` — Live 5-slide carousel HTML preview.
- `brand-identity-kit/brand-style-guide.html` — Interactive visual style guide web app.
