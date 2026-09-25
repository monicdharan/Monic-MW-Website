# MedZen Writes — Logo Usage & Brand Assets Guide

## 1. Logo Inventory

All official raster logo assets are located in this folder:

| File Name | Description | Recommended Usage Context |
| :--- | :--- | :--- |
| `medzen-writes-logo-light.png` | White lettering with Fresh Mint (`#00C2B2`) accent | **Dark Surfaces**: Oceanic Teal (`#004E57`), Dark Hero Gradients, Navy/Slate slides, Deep Footer (`#003238`) |
| `medzen-writes-logo-dark.png` | Oceanic Deep Teal (`#004E57`) lettering with Fresh Mint (`#00C2B2`) accent | **Light Surfaces**: Pure White (`#FFFFFF`), Soft Sage (`#EDF5F4`), Light Gray (`#F3F8F8`) slides & cards |
| `medzen-writes-logo.png` | Canonical light logo (identical to web deployment) | Production fallback for dark banners & sticky navbar |

---

## 2. Color Breakdown in Logo

- **Primary Text Mark**:
  - Light Version: Pure White (`#FFFFFF`)
  - Dark Version: Oceanic Deep Teal (`#004E57` / `rgb(0, 78, 87)`)
- **Accent Graphic / "Writes" Accent**:
  - Fresh Mint / Turquoise (`#00C2B2` / `rgb(0, 194, 178)`)

---

## 3. Carousel & Social Media Sizing

When generating carousel slides at **1080 × 1350 px** (Instagram 4:5 Portrait / LinkedIn Document) or **1080 × 1080 px** (1:1 Square):

### A. Slide 1 (Cover / Hook Slide)
- **Placement**: Top-left or centered header.
- **Recommended Height**: `52px` to `64px` (maintaining original aspect ratio of ~3.22 : 1).
- **Clearance**: Minimum `80px` from slide edges.

### B. Slides 2 to N (Content & Framework Slides)
- **Placement**: Subdued in top bar (left or right) alongside the slide counter (`03/07`), or in bottom footer next to `@medzenwrites`.
- **Recommended Height**: `36px` to `44px`.
- **Opacity**: 100% or subtle 90% opacity to keep focus on slide content.

### C. Final Slide (CTA / Save & Follow Slide)
- **Placement**: Hero prominent placement above the main headline or below the final doctor testimonial.
- **Recommended Height**: `60px` to `75px`.

---

## 4. Clear Space & Safe Zone

```
        ┌──────────────────────────────────────────────┐
        │                 Clear Space (X)              │
        │      ┌────────────────────────────────┐      │
   (X)  │  (X) │         MEDZEN WRITES          │ (X)  │  (X)
        │      └────────────────────────────────┘      │
        │                 Clear Space (X)              │
        └──────────────────────────────────────────────┘
```

- Always maintain a clear margin **(X)** equal to at least half the height of the logo on all four sides.
- No text, graphics, icons, or busy photography textures should intersect this boundary.

---

## 5. Usage Rules (Do's & Don'ts)

### ✅ DO:
1. Always use `medzen-writes-logo-light.png` on the signature Oceanic Teal (`#004E57`) hero background.
2. Always use `medzen-writes-logo-dark.png` on white carousel slides, light sage backgrounds, and PDF document headers.
3. Keep the aspect ratio locked (`height: auto; width: [scale]` or `object-fit: contain`).
4. Accompany the logo with the verified handle `@medzenwrites` or URL `medzenwrites.com` on carousel footers.

### ❌ DO NOT:
1. **Do NOT squish, stretch, or rotate** the logo mark.
2. **Do NOT invert colors arbitrarily** (e.g. turning the mint mark yellow, red, or purple).
3. **Do NOT apply heavy drop shadows, neon outer glows, or bevel filters** to the logo.
4. **Do NOT place the dark logo on dark teal or busy photo backgrounds** where contrast drops below WCAG AA standards.
5. **Do NOT place the white logo on pure white or light gray surfaces**.
