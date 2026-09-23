# MedZen Writes — Layout-Only Refinement Brief

## Objective

Refine the existing MedZen Writes website so it feels exceptionally premium, credible, calm, and medically authoritative. This is a layout and execution pass, not a redesign.

## Non-negotiable guardrails

- Do not change any copy, wording, page order, sections, colors, font family, font weights, icons, logos, imagery, button labels, brand name, links, or functionality.
- Do not introduce new colors, fonts, gradients, visual motifs, cards, badges, illustrations, or decorative elements.
- Preserve the current dark-teal / white visual theme exactly.
- Keep all existing content. You may only reposition, resize, group, align, or adjust spacing.
- Do not remove the WhatsApp button, header, footer, CTAs, testimonials, FAQs, policies, or service content.

## First, fix functional credibility blockers

1. Ensure every production route exists and works: `/`, `/about`, `/services`, all individual service pages, `/publications`, `/testimonials`, `/journal`, `/contact`, `/privacy-policy`, `/refund-policy`, `/terms-conditions`, `/shipping-policy`, and `/sitemap`.
2. Ensure every header, footer, CTA, service, policy, and checklist link resolves to its intended destination without a 404.
3. Ensure the logo and every page image always load on the deployed site. Use existing image assets only and reserve each image's dimensions so no layout shift occurs.

## Global layout system

- Establish one consistent desktop content container and use it throughout the site. Use a generous but disciplined max width (roughly 1180–1240px), with matching horizontal gutters.
- Use a strict 8px spacing rhythm. Major section spacing should be consistent; do not let adjacent sections feel accidental or compressed.
- Give section intros a restrained text measure: headings should wrap intentionally and body copy should remain comfortable to read rather than spanning overly wide columns.
- Maintain a clear hierarchy: eyebrow, heading, supporting copy, then content. Give each layer adequate separation.
- Standardize corner radii, borders, shadows, image ratios, CTA heights, and the vertical alignment of repeated cards. Keep the existing visual treatment; simply make it consistent.
- All interactive elements need clear hover/focus/pressed states in the existing palette. Preserve a visible keyboard focus ring.

## Header and footer

- Keep the existing header structure and content, but tighten the relationship between logo, navigation, and consultation CTA. It should feel balanced at 1440px without looking stretched.
- Keep the active-navigation treatment consistent on every route.
- On tablet and mobile, prevent navigation crowding. Use the existing menu approach or an accessible menu trigger; do not let labels overlap, wrap awkwardly, or create horizontal scrolling.
- Keep the footer content exactly as-is, but align its columns to the same page container, give columns consistent spacing, and ensure policy links wrap cleanly.

## Home page refinement

### Hero

- Preserve all hero copy, CTAs, contact pills, background, and image.
- Make the hero a deliberate two-column composition on desktop: content on the left and image on the right, vertically balanced.
- Constrain the headline so its line breaks look intentional. Keep the text large but prevent it from dominating the full hero height.
- Limit paragraph width for readability.
- Keep the two hero actions visually distinct through existing treatment only: the consultation CTA is primary and the checklist remains secondary.
- Group contact pills as a supporting cluster below the actions, with equal height, consistent gaps, and sensible wrapping. Avoid a crowded single-line treatment.
- Use one stable, premium image frame with a consistent aspect ratio. Do not allow a blank frame, distorted crop, or image overflow.
- Reduce visual competition: the hero should immediately communicate the service, then the action, then supporting proof.

### Academic rigor section

- Constrain the central heading so it breaks into balanced lines rather than a very wide first line and isolated second line.
- Align the benefits list and adjacent image on a shared grid. Keep item icons, headings, and descriptions aligned.
- Improve vertical separation between benefit items while retaining the same content and visual elements.

### Services

- Preserve all nine services and their descriptions.
- Use a consistent desktop grid with equal card heights per row, aligned number positions, title baselines, descriptions, and “Learn more” links.
- Avoid uneven card depth caused by different description lengths; use internal flex alignment rather than changing copy.
- On smaller screens, collapse cleanly to one column without crowding.

### Testimonials, FAQ, and final CTA

- Standardize testimonial avatar sizes, text spacing, rating position, and card padding. Cards should read as editorial proof, not as loose widgets.
- Give FAQ rows more breathing room and ensure expanded panels have comfortable text measure and clear separation from the next item.
- Keep the final CTA visually calm: reduce unnecessary width and make its copy/action grouping centered and deliberate.

## About page refinement

### Page hero

- Preserve the existing dark-teal intro and all wording.
- Reduce the hero's empty vertical space; use a more disciplined height and align the text block to the global content container.
- Constrain the H1 line length so its wrap is balanced and confident.
- Make the supporting paragraph a clearly subordinate, readable block beneath the heading.

### Why MedZen Writes Exists

- Keep the existing two-column editorial composition: text on the left, image and ethical-foundation panel on the right.
- Align both columns at the top and use stable image/card dimensions.
- Narrow the body-copy measure and increase paragraph rhythm so the dense text feels considered rather than heavy.
- Ensure the ethical-foundation card has consistent spacing and aligns precisely with the image width.

### Commitments and standards

- Keep the three commitment items and the two guarantee lists exactly as they are.
- Apply one repeatable layout: equal icon alignment, consistent title spacing, a stable description measure, and matching vertical gaps.
- Treat “What We Guarantee” and “What We Will Never Promise” as paired sections with matching visual weight and aligned list rhythm. Do not change their colors or text.
- Make the corporate entity section compact, clear, and aligned to the same grid instead of looking like an afterthought.

## Responsiveness and quality bar

- Validate at 375px, 768px, 1024px, and 1440px.
- No horizontal scrolling, overlap, clipped text, or obscured controls.
- Body text should remain comfortably readable; preserve the existing font but do not make mobile body text smaller than 16px.
- Buttons and contact pills must remain tap-friendly and wrap cleanly.
- The floating WhatsApp button must never cover a CTA, form field, footer link, or keyboard-focused element.
- Respect reduced-motion preferences. Avoid decorative motion; if existing motion is present, use only transform/opacity and keep it subtle.

## Acceptance checklist

- Every existing route and link works in production.
- No broken logo or images.
- Home and About feel quieter, more intentional, and more credible without changing their theme or content.
- One coherent container width, spacing scale, grid, card rhythm, and responsive behavior is visible across all pages.
- Existing colors, fonts, copy, imagery, and features are unchanged.
