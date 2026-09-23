# MedZen Writes — Photography & Visual Imagery Guidelines

## 1. Brand Visual Archetype & Photographic Tone

The photographic identity of **MedZen Writes** bridges two critical worlds:
1. **Academic Authority & Clinical Precision**: Medical specialists, biostatisticians, and journal editors operating with scientific rigor.
2. **Approachable Mentorship for Residents**: Warm, supportive collaboration that alleviates the acute stress of postgraduate medical dissertation deadlines.

### Key Visual Pillars
- **Authentic Medical Environments**: Resident study desks with research laptops, hospital library consultation rooms, clinical research rounds, stethoscope and published manuscripts.
- **Lighting**: Clean, high-key clinical white lighting with cool cyan, teal, or soft sage environmental accents. Never dark, gloomy, or sterile-bleak.
- **Subjects**: Professional clinicians, postgraduate residents (MD/MS/DNB), fellows, and statisticians engaged in real academic and clinical work. Avoid melodramatic or comical stock poses.

---

## 2. Core Image Assets in this Kit

The `brand-identity-kit/imagery/` folder contains the core assets:

| File Name | Aspect Ratio | Primary Usage |
| :--- | :--- | :--- |
| `stethoscope-research-bg.jpg` | 16:9 Landscape | Signature hero background texture with dark teal overlay |
| `hero_doctor.jpg` | Portrait | Primary doctor specialist visual with pill/arch frame |
| `doctor-stethoscope-research.jpg` | Landscape | Editorial review & manuscript preparation slides |
| `doctor-biostatistician-consultation.jpg` | Landscape | Statistical analysis, SPSS/R consultation slides |
| `doctor-resident-mentorship.jpg` | Landscape | 1-on-1 thesis guidance & advisory sessions |
| `pubmed-preeclampsia-paper.png` | Document | Real evidence asset: PubMed-indexed publication proof card |

---

## 3. The Signature Medical Teal Gradient Overlay

Whenever photographic textures (such as `stethoscope-research-bg.jpg`) are used behind carousel text or website hero sections, apply the signature multi-stop gradient overlay to ensure text contrast passes **WCAG AAA**:

```css
/* Signature MedZen Writes Teal Duotone Overlay */
.hero-photo-container {
  background: 
    linear-gradient(
      135deg, 
      rgba(0, 48, 54, 0.90) 0%, 
      rgba(0, 77, 86, 0.84) 45%, 
      rgba(0, 32, 36, 0.95) 100%
    ),
    url('stethoscope-research-bg.jpg') center center / cover no-repeat;
}
```

---

## 4. Arched Doctor Card & Portrait Geometry

MedZen Writes uses the **Novadent-inspired arched geometry** for doctor profiles and resident testimonials:

- **Top-Arch Mask**: `border-radius: 120px 120px 24px 24px;`
- **Standard Card Radius**: `border-radius: 24px;`
- **Background Backing**: Soft Sage Mint Gradient (`linear-gradient(180deg, #d3eeec 0%, #bde4e2 100%)`)
- **Floating Badge Overlay**:
  A floating pill badge positioned at the bottom corner of the photo with a subtle shadow:
  ```html
  <div class="floating-proof-badge">
    <span class="material-symbols-outlined" style="color: #00c2b2;">verified</span>
    <span>PubMed Indexed 2026</span>
  </div>
  ```

---

## 5. Journal & Data Evidence Visuals (Carousel Slides)

When creating carousel slides highlighting proof or case studies:
1. **PubMed Cards**: Embed a crisp preview of the article title, journal name, and PMID number inside a white clinical card with a subtle border (`#E8F2F2`) and soft drop shadow.
2. **Metrics & Stats**: Present numbers prominently in **88px–100px Plus Jakarta Sans 900 Black** accompanied by a Fresh Mint (`#00C2B2`) accent indicator.
3. **Guideline Badges**: Include recognized standard badges:
   - `PRISMA 2020` (Systematic Reviews)
   - `CARE Guidelines` (Case Reports)
   - `IMRaD Architecture` (Original Research)
   - `ICMJE Criteria` (Authorship & Ethics)
   - `SANRA Scale` (Narrative Reviews)
