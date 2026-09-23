# MedZen Writes — Full Website React Redesign Brief

## Instructions for Antigravity

Rebuild the existing MedZen Writes website as a polished, production-ready React website. Use the current project content, brand assets, publication images, journal logos, testimonials, contact details, and service information as source material, but redesign the visual system and component structure.

Do not make the result look like an AI-generated SaaS landing page. The finished website should feel like a calm, credible medical research editorial consultancy: precise, human, academic, and trustworthy.

The current website is static HTML/CSS/JavaScript. Convert it to React rather than continuing to duplicate HTML pages.

## 1. Technical requirements

- Use React with Vite.
- Use JavaScript or TypeScript consistently; TypeScript is preferred.
- Use React Router for all pages.
- Create reusable components instead of duplicating page markup.
- Keep content in structured data files where practical.
- Use a shared design-token stylesheet or theme file.
- Use semantic HTML and accessible interactive controls.
- Preserve existing SEO titles, descriptions, canonical URLs, structured data, and image alt text, while improving their quality where necessary.
- Do not use inline styles except for truly dynamic values.
- Do not hard-code repeated cards or navigation items in every page.
- Keep all existing working assets unless a replacement is clearly better.
- Do not invent fake client names, publication claims, statistics, or testimonials.

Suggested structure:

```text
src/
  app/
    App.tsx
    routes.tsx
  components/
    layout/
    navigation/
    buttons/
    cards/
    sections/
    forms/
    testimonials/
  data/
    services.ts
    publications.ts
    testimonials.ts
    faqs.ts
  pages/
    Home.tsx
    About.tsx
    Services.tsx
    ServiceDetail.tsx
    Publications.tsx
    Testimonials.tsx
    Blog.tsx
    Contact.tsx
    Legal.tsx
  styles/
    tokens.css
    globals.css
    components.css
```

## 2. Visual direction

Design MedZen Writes as a medical research editorial consultancy, not as a generic startup dashboard.

The visual tone should be:

- Calm
- Clinical but warm
- Editorial
- Credible
- Human
- Spacious
- Easy to scan

Avoid:

- Excessive gradients
- Glow effects
- Floating decorative blobs
- Repeated pill badges
- Too many icons
- Every section becoming a card grid
- Generic “world-class” marketing language
- Oversized statistics without verifiable proof
- Constant animations
- The visual appearance of a component-library demo

## 3. New design tokens

Use a restrained palette:

```css
:root {
  --color-ink: #173234;
  --color-ink-soft: #40575a;
  --color-teal: #07545a;
  --color-teal-dark: #063d42;
  --color-mint: #1aa99c;
  --color-mint-soft: #e8f4f1;
  --color-paper: #fbfaf6;
  --color-sand: #eee9df;
  --color-white: #ffffff;
  --color-line: #dce6e3;
  --color-muted: #6c7d7e;
  --shadow-soft: 0 8px 24px rgba(23, 50, 52, 0.08);
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --max-width: 1180px;
}
```

Rules:

- Use solid backgrounds for most sections.
- Use one dark teal hero background.
- Use mint for buttons, links, small highlights, and active states.
- Use warm ivory or white for page sections.
- Use thin borders and subtle shadows instead of heavy card elevation.
- Do not use more than one gradient on the entire homepage, and only if it materially improves the hero.

## 4. Typography

Use a distinctive editorial heading font paired with a readable interface font.

Preferred combination:

- Headings: Fraunces, DM Serif Display, or another restrained editorial serif.
- Body and interface: Inter, Source Sans 3, or Manrope.

Typography rules:

- Keep the homepage H1 under approximately 12 words.
- Use sentence case, not excessive uppercase text.
- Use a maximum readable paragraph width of about 62–70 characters.
- Reduce the number of font weights.
- Use strong contrast between H1, H2, body copy, metadata, and labels.
- Do not place every heading inside an eyebrow badge.

## 5. Global layout rules

- Use a consistent max-width container of approximately 1180px.
- Use generous but controlled vertical spacing: roughly 88–120px for major sections on desktop.
- Use a 12-column grid for complex layouts and simpler flex/grid layouts for smaller sections.
- Use asymmetry where it improves editorial character.
- Alternate section backgrounds sparingly.
- Do not repeat the same centered heading + three cards pattern throughout the site.
- Use responsive breakpoints around 1100px, 800px, and 560px.
- Ensure mobile layouts are intentionally composed, not merely stacked desktop columns.

## 6. Navigation

Create one reusable `SiteHeader` component.

Desktop:

- Logo on the left.
- Short navigation: About, Services, Publications, Testimonials, Journal, Contact.
- One primary action: “Book a consultation”.
- Avoid placing a long services dropdown in the first-level navigation if it makes the header crowded.

Mobile:

- Accessible menu button with `aria-expanded` and `aria-controls`.
- Drawer or panel with clear spacing.
- Keep the consultation action visible.
- Lock background scrolling while the menu is open.

The header should be visually quiet. Do not use a large floating capsule navigation bar.

## 7. Homepage structure

### Hero

Use an editorial two-column hero:

Left:

- Short eyebrow: “Medical research support for clinicians and researchers”.
- H1 focused on the outcome, for example: “Move your research from draft to submission with confidence.”
- Two-sentence supporting copy.
- Primary CTA: “Book a consultation”.
- Secondary action: “Explore services”.
- One concise proof row, such as “Thesis support · Manuscript preparation · Biostatistics”.

Right:

- One strong, authentic medical/research image.
- Avoid overlapping badges and floating chips.
- Use a simple caption or image note if useful.

Remove from the hero:

- Phone number, email, address, and business hours chips.
- Multiple verification pills.
- Watermark text such as “medzen”.
- A second large CTA such as a checklist download unless it is a major campaign.

### Trust strip

Immediately after the hero, show a restrained trust strip with three or four concise items:

- Medical writing support
- Biostatistical review
- Journal-ready formatting
- Confidential consultation

Use text and small separators rather than four large cards.

### Problem and solution section

Explain the customer problem in plain language:

- Research ideas are often strong but difficult to structure.
- Statistical and journal requirements can slow submission.
- Clinicians need support without losing authorship or subject-matter control.

Then explain how MedZen Writes helps. Use an editorial two-column layout rather than three cards.

### Services section

Show the nine services as a clean numbered list or two-column list. Each item should include:

- Service name
- One-sentence description
- “View service” link

Use icons only when they genuinely improve scanning. Do not put every item in a rounded card.

### Process section

Use a four-step horizontal timeline on desktop and vertical timeline on mobile:

1. Understand your research question
2. Plan the methodology and analysis
3. Write, edit, and format the manuscript
4. Prepare for submission and revisions

Keep the copy specific and short.

### Publication proof

Use real publication documents, journal logos, or verified work samples from the existing assets.

- Highlight three to six representative examples.
- Show the title, publication type, specialty, and year where available.
- Do not imply guaranteed acceptance or guaranteed indexing.
- Separate “published work” from “target journals” so users cannot confuse the two.

### Testimonial section

Use one featured testimonial and two smaller supporting quotes.

Each testimonial should include only verified information. Show:

- Person’s name if permission exists
- Specialty or role
- City/institution if permitted
- Short quote

Place full Google review screenshots in a separate expandable proof area instead of making every screenshot a large UI card.

### FAQ

Create an accessible accordion with real questions, such as:

- Do you work with original research and theses?
- Can you help with statistical analysis?
- Do you guarantee journal acceptance?
- How is confidentiality handled?
- What information is needed to begin?

Never promise acceptance, indexing, or a specific publication outcome unless legally and factually supportable.

### Final CTA

Use one calm CTA block:

“Tell us where your research is today, and we’ll help you identify the next practical step.”

Button: “Book a consultation”.

Avoid percentage claims such as “98% satisfied researchers” unless there is a documented, auditable source.

## 8. Services pages

Create a reusable `ServiceDetail` page driven by route data.

Each service page should include:

- Clear service title
- Who it is for
- What is included
- What the client provides
- Expected process
- Deliverables
- Related services
- Consultation CTA

Suggested services:

- Original Research Articles
- Systematic Review and Meta-analysis
- Medical Case Reports
- Thesis and Dissertation Writing
- Medical Statistical Analysis
- Narrative and Scoping Reviews
- Research Protocols and Synopsis
- Thesis-to-Manuscript Conversion
- Abstract and E-poster Design

Use a simple side navigation or anchored contents list on desktop. Avoid nine visually identical card pages.

## 9. About page

Focus on the people, working method, and ethics of the business.

Include:

- Why MedZen Writes exists
- Who the team supports
- How medical accuracy is maintained
- How client confidentiality is handled
- What the company will and will not promise

Use real team details or neutral copy. Do not create invented credentials.

## 10. Publications page

Create filters for publication type and specialty only if there are enough real records to justify them.

Each publication item should have:

- Real image or document preview
- Publication title
- Publication type
- Specialty
- Year or journal, if available
- Optional external link

Use a clean archive layout. Avoid making every document look like a glossy marketing card.

## 11. Testimonials page

Use editorial quotes, review screenshots, and clear source labels.

- Do not fabricate star ratings.
- Do not modify review wording.
- Add keyboard-accessible lightbox controls for screenshots.
- Provide useful alt text and captions.

## 12. Blog or Journal page

Use the term “Journal” or “Research Journal” if it better matches the brand.

Create reusable article cards with:

- Category
- Title
- Short excerpt
- Reading time
- Date
- Clear link

Avoid generic AI-style article titles such as “Unlocking the Power of…” or “The Ultimate Guide to…”.

## 13. Contact and consultation form

Create one reusable accessible form component.

Fields:

- Full name
- Email
- Phone number
- Specialty or department
- Required service
- Brief research scope

Requirements:

- Visible labels, not placeholder-only labels.
- Clear required-field indicators.
- Inline validation messages.
- Loading, success, and error states.
- No fake “instant download” or fake submission confirmation.
- Use a real backend or clearly label the current form as a demo until connected.

Keep phone, email, address, and hours in the contact page and footer rather than repeating them in multiple hero chips.

## 14. Buttons, cards, icons, and imagery

Buttons:

- Use one primary style and one secondary style.
- Avoid gradient buttons as the default.
- Use sentence case.
- Do not place icons in every button.

Cards:

- Prefer borders and spacing over shadows.
- Use rounded corners consistently, but keep them moderate.
- Do not use a card for content that can be a simple list.

Icons:

- Use a small, consistent icon set.
- Do not combine Material Symbols, random SVGs, and decorative icon circles without a clear reason.
- Use icons for navigation, actions, and genuinely scannable metadata.

Images:

- Use `object-fit` intentionally.
- Provide meaningful alt text.
- Lazy-load below-the-fold images.
- Set width and height to reduce layout shift.
- Prefer real research, editorial, and team imagery over generic stock photos.

## 15. Animation and interaction rules

Use motion sparingly:

- Subtle hover state on links and buttons.
- Gentle page or section reveal when appropriate.
- Simple menu, modal, and accordion transitions.
- No pulsing glow effects.
- No continuously floating decorations.
- No excessive parallax.
- Support `prefers-reduced-motion: reduce`.

All modals, drawers, accordions, lightboxes, and menus must be keyboard accessible and closable with Escape.

## 16. Accessibility and quality requirements

- One logical H1 per page.
- Correct heading hierarchy.
- Keyboard navigation for all controls.
- Visible focus states.
- Sufficient color contrast.
- `aria-expanded`, `aria-controls`, and dialog semantics where needed.
- No clickable `div` elements where a button or link is appropriate.
- Form errors announced accessibly.
- Respect reduced-motion preferences.
- Test at 320px, 375px, 768px, 1024px, and 1440px widths.

## 17. Content cleanup

Rewrite or remove repetitive claims such as:

- “World-class standards”
- “Global recognition”
- “High-impact journals”
- “End-to-end solutions”
- “100% human-written” repeated in multiple sections

Replace them with concrete descriptions of process, deliverables, scope, and evidence.

Do not use these claims unless they are documented:

- Guaranteed publication
- Guaranteed indexing
- Guaranteed acceptance
- Exact client satisfaction percentages
- Exact review counts
- Plagiarism percentages presented as universal guarantees

## 18. Migration requirements

Preserve the following from the existing project:

- Brand logo and approved logo variants
- Existing useful image assets
- Journal logos and publication records
- Service names and service detail content
- Contact information
- Legal pages
- Social links
- Existing structured data where accurate

Replace:

- Duplicated HTML pages
- Inline layout styles
- Repeated navigation markup
- Repeated card markup
- Excessive badges
- Excessive gradient and glow decoration
- Generic or unsupported marketing claims

Add:

- React Router routes
- Shared layout components
- Data-driven service and publication components
- Reusable modal, form, accordion, lightbox, and CTA components
- Responsive design system
- Accessibility states
- Proper loading and error states

## 19. Acceptance criteria

The redesign is complete only when:

- The website runs as a React application with a working development and production build.
- All primary pages are reachable through React Router without duplicated page templates.
- Navigation works on desktop and mobile.
- The homepage has a clear visual hierarchy and does not resemble a generic AI-generated template.
- The hero contains one main message and one dominant CTA.
- The visual system uses restrained colors, typography, cards, icons, gradients, and motion.
- Services, publications, testimonials, FAQs, and articles are data-driven where practical.
- Forms have real validation and honest submission states.
- No unsupported guarantees or invented proof points remain.
- The site is responsive at mobile, tablet, and desktop widths.
- Keyboard navigation and reduced-motion behavior work correctly.
- Images have meaningful alt text and do not cause layout shift.
- The final build has no console errors, broken routes, missing assets, or broken links.

## 20. Final instruction

Implement the redesign across the full website, not just the homepage. Before finishing, review every route for consistency and remove any remaining visual patterns that make the site look automatically generated: excessive badges, repetitive cards, decorative gradients, generic copy, unnecessary icons, and identical section layouts.

The final result should feel intentionally designed by a thoughtful medical editorial brand with a clear point of view.
