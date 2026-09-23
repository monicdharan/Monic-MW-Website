# Antigravity insertion brief: MedZen Writes visual refresh

Apply the following changes directly to the MedZen Writes website in this repository. Do not merely describe the changes. Inspect the existing implementation first, then edit the relevant source and stylesheet files, preserve all content and functionality, and verify that the site still builds.

## Objective

Restyle the site to match the uploaded dental website reference: clean editorial healthcare design, turquoise-teal brand blocks, pale blue-grey surfaces, restrained rounded corners, strong whitespace, and professional sans-serif typography.

Do not use the latest plain color swatch image as the source of truth. Use the previously uploaded dental website reference image.

## Typography

Use Google Fonts or the existing font-loading mechanism:

- Headings and display UI: `Plus Jakarta Sans`
- Body copy, navigation copy, labels, and form text: `Inter`

Update the font tokens to:

```css
--font-family-heading: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
--font-family-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
```

Apply `Plus Jakarta Sans` to `h1` through `h6`, logo text, section labels, navigation headings, and buttons. Apply `Inter` to `body`, paragraphs, navigation links, metadata, forms, and all normal UI copy.

Remove every serif or script heading declaration, including `Playfair Display`, `Georgia`, generic `serif`, `Great Vibes`, and any equivalent fallback. Do not leave a serif fallback in the heading stack.

## Replace the color tokens

Replace the existing oceanic-teal/mint token values with this reference-derived palette:

```css
:root {
  --teal-hero: #0C7180;
  --teal-primary: #0C7180;
  --teal-primary-hover: #095F6D;
  --teal-primary-dark: #064B59;
  --teal-900: #075C6B;
  --teal-800: #0A6573;
  --teal-700: #0C7180;
  --teal-600: #168494;
  --teal-500: #2999A4;

  --mint-primary: #12D1C4;
  --mint-hover: #0DB8AE;
  --mint-active: #099E97;

  --bg-body: #F3F5FA;
  --bg-page: #FFFFFF;
  --bg-alt: #F3F5FA;
  --bg-soft-mint: #DDECEF;
  --bg-card: #FFFFFF;
  --bg-card-subtle: #F8FAFB;
  --bg-dark-teal: #0C7180;
  --bg-deep-footer: #075C6B;

  --text-headline: #123C46;
  --text-body: #334B52;
  --text-muted: #6E858A;
  --text-light: #91A5A9;
  --text-inverted: #FFFFFF;

  --border-subtle: #D9E5E8;
  --border-card: #E4ECEE;
  --border-teal: rgba(12, 113, 128, 0.18);
  --border-mint: rgba(18, 209, 196, 0.35);
  --border-active: #12D1C4;
}
```

Update all hard-coded colors in the active site styles so they do not reintroduce the old palette. Search for the old values, including `#004e57`, `#004E57`, `#00c2b2`, `#00C2B2`, `#003238`, and related old teal/mint variants.

## Visual treatment

- Use `#0C7180` for the main hero and major branded sections.
- Use `#075C6B` for the footer or deepest teal panels.
- Use `#12D1C4` sparingly for primary buttons, active states, labels, stars, and small accents.
- Use `#DDECEF` and `#F3F5FA` for alternating section backgrounds.
- Keep cards white with subtle borders and restrained shadows.
- Reduce excessive gradients, mint glows, glassmorphism, and decorative effects.
- Do not use a gradient on every section. Prefer flat color blocks like the dental reference.
- Keep border radii moderate, generally 8–16px. Avoid making every element a pill.
- Preserve consistent rounded-arch portrait/image treatments where they already exist.
- Maintain a centered content width of approximately 1200–1280px and generous vertical spacing.

## Required implementation checks

1. Search the entire active source tree for serif font names and remove them from rendered UI styles.
2. Confirm that headings compute to Plus Jakarta Sans.
3. Confirm that body copy computes to Inter.
4. Search for old blue, purple, and old teal/mint values and replace active occurrences.
5. Check buttons, hero, service cards, testimonials, CTA, and footer for contrast and readability.
6. Keep all routes, links, forms, responsive behavior, and existing content working.
7. Run the project’s existing build or verification command and fix any errors caused by the changes.

Do not rewrite the copy, change the information architecture, or add new decorative sections. This is a visual-system replacement focused on typography, color, spacing, surfaces, and consistency.
