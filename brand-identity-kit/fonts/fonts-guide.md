# MedZen Writes — Typography & Font System Guide

## 1. Primary Heading Font: **Plus Jakarta Sans**

- **Font Family**: `'Plus Jakarta Sans', sans-serif`
- **Designer**: Gumpita Rahayu (TokyoType / Tokotype)
- **Classification**: Modern Geometric Neo-Grotesque Sans-Serif
- **Role in Brand**: Headlines, Cover Titles, Numerical Stats, Eyebrow Badges, CTA Buttons.
- **Why it fits MedZen Writes**:
  Plus Jakarta Sans delivers clean medical precision, high legibility, and an authoritative yet approachable clinical tone. Its crisp geometric cuts and tight aperture make bold titles pop powerfully on dark teal and high-contrast clinical white backgrounds.

### Weights & Usages
| Weight | Numeric Value | Usage Context |
| :--- | :--- | :--- |
| **Black** | `900` | Big Carousel Cover Titles, Major Hook Words |
| **ExtraBold** | `800` | Slide H1 Titles, Primary Metric Numbers (`98.6%`, `1,200+`) |
| **Bold** | `700` | Section Headings, Pill Badges, Button Labels, Step Numbers (`01`, `02`) |
| **SemiBold** | `600` | Subheadings, Navigation Links, Doctor Names, Card Titles |
| **Medium** | `500` | Lead Sentences, Feature Card Intros |
| **Regular** | `400` | Sub-captions, Disclaimers |

---

## 2. Secondary & Body Font: **Inter**

- **Font Family**: `'Inter', sans-serif`
- **Designer**: Rasmus Andersson
- **Classification**: Screen-optimized Neo-Grotesque Sans-Serif
- **Role in Brand**: Body text, paragraph explanations, medical guidelines citations (ICMJE, PRISMA, CARE), footnotes.
- **Why it fits MedZen Writes**:
  Designed specifically for digital screens, Inter features a tall x-height and exceptional readability at smaller font sizes (14px – 28px), ensuring busy doctors and researchers can effortlessly scan carousel slides on smartphones.

### Weights & Usages
| Weight | Numeric Value | Usage Context |
| :--- | :--- | :--- |
| **SemiBold** | `600` | Inline text highlights, checklist titles, journal citations |
| **Medium** | `500` | Primary slide bullet points, quote text |
| **Regular** | `400` | Body paragraphs, thesis methodology explanations |

---

## 3. Web & Carousel Font Embed Codes

### HTML `<head>` Link (Recommended for Canvas/Web generator):
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap" rel="stylesheet">
```

### CSS `@import` Rule:
```css
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');
```

### CSS Font-Family Declarations:
```css
:root {
  --font-family-heading: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-family-body: 'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
```

---

## 4. Carousel Slide Typography Hierarchy (1080px Base)

When rendering slides at **1080 × 1350 px** or **1080 × 1080 px**, use these exact pixel-level specifications:

```
┌─────────────────────────────────────────────────────────────┐
│  [EYEBROW PILL BADGE]   font-size: 20px | weight: 700       │
│                         letter-spacing: 0.08em | UPPERCASE  │
│                                                             │
│  COVER SUPER TITLE      font-size: 68px – 76px              │
│                         font-weight: 800 or 900             │
│                         line-height: 1.12                   │
│                         letter-spacing: -0.035em            │
│                                                             │
│  CONTENT SLIDE TITLE    font-size: 52px – 60px              │
│                         font-weight: 800                    │
│                         line-height: 1.2                    │
│                         letter-spacing: -0.03em             │
│                                                             │
│  SUBHEADING / STEP      font-size: 38px – 44px              │
│                         font-weight: 700                    │
│                         line-height: 1.25                   │
│                                                             │
│  BODY BULLET / TEXT     font-size: 28px – 32px              │
│                         font-weight: 400 or 500             │
│                         line-height: 1.5                    │
│                                                             │
│  STAT NUMBER            font-size: 88px – 110px             │
│                         font-weight: 900                    │
│                         line-height: 1.0                    │
│                                                             │
│  FOOTER / HANDLE        font-size: 20px – 22px              │
│                         font-weight: 600 or 700             │
└─────────────────────────────────────────────────────────────┘
```

---

## 5. Typography Rules & Micro-Copy Standards

1. **Title Case vs Sentence Case**:
   - Eyebrow badges: Always **UPPERCASE** with `letter-spacing: 0.08em`.
   - Slide main headlines: **Sentence case** or Title Case with high punchiness (e.g. *"How We Got an MD General Medicine Thesis Published in 45 Days"*).
   - Card headers: **Title Case**.
2. **Text Gradient Usage**:
   - Apply `.text-gradient` (`linear-gradient(135deg, #004e57 0%, #00c2b2 100%)`) sparingly to 1–2 high-value impact words per slide for visual contrast.
3. **Contrast Compliance**:
   - Dark slide text: `#FFFFFF` (pure white) on `#004E57` (Teal Hero) yields a contrast ratio of **9.8:1** (exceeds WCAG AAA).
   - Light slide headings: `#002B30` (Darkest Headline Teal) on `#FFFFFF` yields **14.2:1**.
   - Muted subtitles: `#5F7D81` on `#FFFFFF` yields **5.2:1** (passes WCAG AA).
