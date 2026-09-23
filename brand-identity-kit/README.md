# MedZen Writes — Brand & Visual Identity Kit

Welcome to the official Brand & Visual Identity Kit for **MedZen Writes** (`medzenwrites.in`). This self-contained folder provides all assets, design tokens, typography rules, logos, icons, imagery guidelines, and ready-to-use carousel templates needed to maintain identical visual branding across external projects, social carousels (Instagram & LinkedIn), and academic presentations.

---

## 📂 Folder Structure & Inventory

```
brand-identity-kit/
│
├── README.md                      ← Quickstart guide & inventory (you are here)
├── BRAND_GUIDELINES.md             ← Comprehensive brand manual (Colors, Typography, Geometry, Rules)
├── CAROUSEL_DESIGN_SYSTEM.md       ← Master blueprint for creating 1080x1350 & 1080x1080 carousels
├── brand-style-guide.html          ← Interactive visual style guide (open in browser to copy HEX codes & icons)
│
├── tokens/
│   ├── brand-tokens.json           ← Complete machine-readable master design tokens
│   ├── colors.json                 ← Complete color palette JSON (HEX, RGB, HSL, CSS variable names)
│   ├── typography.json             ← Font specifications & carousel typography scale
│   └── brand-tokens.css            ← Standalone production stylesheet with all CSS variables & utilities
│
├── logos/
│   ├── medzen-writes-logo-light.png← Light logo for dark teal/black surfaces
│   ├── medzen-writes-logo-dark.png ← Dark logo for pure white/light sage surfaces
│   ├── medzen-writes-logo.png      ← Canonical light production logo
│   └── logo-usage-guide.md         ← Sizing, clear space, and background contrast rules
│
├── fonts/
│   ├── fonts-guide.md              ← Font weights, pairings, Google Fonts links, and fallback stacks
│   └── font-specimen.html          ← Live HTML preview showing all weights of Plus Jakarta Sans & Inter
│
├── icons/
│   ├── ICONS_GUIDE.md              ← Complete reference of 70+ Google Material Symbols & Social SVGs
│   ├── icons-manifest.json         ← Categorized JSON list of all brand icons
│   └── social-icons.svg            ← Vector SVG symbols for LinkedIn, Instagram, Facebook, WhatsApp, Email
│
├── imagery/
│   ├── stethoscope-research-bg.jpg  ← Core hero medical background texture
│   ├── hero_doctor.jpg             ← Primary doctor portrait
│   ├── doctor-stethoscope-research.jpg
│   ├── doctor-biostatistician-consultation.jpg
│   ├── doctor-resident-mentorship.jpg
│   ├── pubmed-preeclampsia-paper.png← Real evidence asset (PubMed indexed paper card)
│   └── IMAGERY_GUIDELINES.md       ← Photography direction, gradient overlays, clinical tones, and aspect ratios
│
└── templates/
    └── carousel-slide-templates.html← Interactive 5-slide carousel preview (1080x1350 portrait format)
```

---

## ⚡ Quick Reference: Brand Core Tokens

### 1. Brand Palette
- **Primary Color**: Oceanic Deep Teal (`#004E57` / `rgb(0, 78, 87)`)
- **Accent Color**: Fresh Mint / Vibrant Turquoise (`#00C2B2` / `rgb(0, 194, 178)`)
- **Canvas / Surfaces**:
  - Clinical Pure White: `#FFFFFF`
  - Soft Sage Mint: `#EDF5F4`
  - Cool Alt Surface: `#F3F8F8`
  - Deep Footer Teal: `#003238`
- **Text**:
  - Headline Teal-Charcoal: `#002B30`
  - Slate Body: `#395256`
  - Muted Metadata: `#5F7D81`
  - Inverted White: `#FFFFFF`

### 2. Fonts
- **Headlines, Buttons & Numbers**: **Plus Jakarta Sans** (Weights: `800 ExtraBold`, `900 Black`, `700 Bold`)
- **Body & Micro-Copy**: **Inter** & **Plus Jakarta Sans** (Weights: `400 Regular`, `500 Medium`, `600 SemiBold`)
- **Iconography**: **Google Material Symbols Outlined**

### 3. Key Embed Links
```html
<!-- Google Fonts Embed -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap" rel="stylesheet">

<!-- CSS Import -->
<link rel="stylesheet" href="tokens/brand-tokens.css">
```

---

## 🎨 How to Use This Kit for Carousel Generation

1. **For Programmatic / Node / Python Generators**:
   - Read `tokens/colors.json` and `tokens/typography.json` to configure your canvas renderers (Canvas API, Pillow, Puppeteer, Playwright).
   - Use `templates/carousel-slide-templates.html` as the HTML template to inject text and screenshot at 1080 × 1350 px.
2. **For Figma / Canva / Adobe XD Workflows**:
   - Open `brand-style-guide.html` in your browser to quickly copy HEX color codes and inspect typography weights.
   - Import logos from `logos/` (`medzen-writes-logo-light.png` for dark covers; `medzen-writes-logo-dark.png` for light content slides).
   - Use `CAROUSEL_DESIGN_SYSTEM.md` for exact slide margins, font sizes, and 6-slide narrative pacing.
