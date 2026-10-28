# Plan: Nexova Public Website

## Requirements Baseline

The referenced `spec.md` is currently absent following its removal. This plan follows [BRIEFING.md](../BRIEFING.md), the confirmed decisions, and the additional landing-page and form requirements.

This document is a plan only. Implementation and task-folder creation are outside the current scope.

## Confirmed Decisions

- Use English throughout the website and form.
- Select branding: a prominent Nexova wordmark, charcoal typography, white/light-gray surfaces, emerald actions, restrained coral accents, and relevant professional photography.
- Preserve the "12 years of experience" claim, the 2011 founding date, and the 2025 copyright.
- Replace Latin American market references with United States and Spain.
- Use HTML, vanilla JavaScript, and Tailwind CSS v4 only. Development tooling is permitted; additional application frameworks and handwritten CSS are not.
- Simulate submission without a backend, email delivery, or persistent candidate storage.

## Implementation Steps

### 1. Establish Build and Preview

- Work inside `uis/001-milestone/` with local package configuration and a lockfile.
- Configure Tailwind CSS v4 and its CLI to generate styles from HTML and JavaScript utility classes.
- Limit the stylesheet input to Tailwind's import; write no custom CSS rules.
- Use complete utility class names so Tailwind can detect classes used for validation states.
- Document dependency installation, CSS generation, optional watch mode, and preview commands in a local README.
- Build styles using `npx @tailwindcss/cli -i ./tailwind.input.css -o ./assets/tailwind.css --minify`.
- Serve the project from its folder using `npx serve . --listen tcp://0.0.0.0:3000` after installing dependencies and generating styles.
- Reuse the existing Codespaces forwarded port 3000. Document an alternative port if it is occupied.

### 2. Build the Landing Page

Depends on step 1.

- Create `index.html` with semantic HTML5, `lang="en"`, viewport metadata, a descriptive title and description, one main heading, and a skip link.
- Implement the required order: header, hero, services, Why Nexova, contact, footer.
- Use semantic `header`, `nav`, `main`, `section`, `article`, and `footer` elements where appropriate.
- Include the Nexova wordmark and Home, Services, Talent, and Contact navigation.
- Link Home, Services, and Contact to their corresponding landing sections. Link Talent and "Join our talent pool" to `application.html`.
- Preserve the briefing's exact hero headline, subheadline, and CTA.
- Present Executive Headhunting, Customer Support Outsourcing, and Corporate Training with all supplied descriptions.
- Include the Why Nexova benefits: 12 years of experience, United States and Spain presence/market wording, +500 successful selection processes, and sector specialization.
- Use services and Why Nexova as the required additional sections, with three-column and two-column layouts on suitable screens.
- Include contacto@nexova.com, Valencia +34 960 123 456, and Miami +1 305 555 0191, using functional email and telephone links.
- Include contact information in the footer as well as the contact section, preserve the 2025 copyright, and link the supplied LinkedIn and Instagram profiles.
- Apply mobile-first Tailwind utilities with tablet and desktop breakpoints, readable typography, visible focus, and no overflowing content.
- Include relevant, appropriately licensed photography with descriptive alt text, stable dimensions, and optimized delivery.
- Make mobile navigation keyboard accessible; if a toggle is needed, use a native button with `aria-expanded` and `aria-controls`.

### 3. Build the Application Page

Depends on step 1; can proceed alongside step 2 after shared visual conventions are established.

- Create `application.html` with a structured form, shared navigation/footer, and a clear route back to the landing page.
- Include all eleven fields from the briefing with the exact labels and domain-specific options below.

| Field | Control | Required | Rules or Options |
| --- | --- | --- | --- |
| Full name | Text input | Yes | At least two words. |
| Email | Email input | Yes | Valid email with @ and a valid domain. |
| Phone | Telephone input | Yes | International country code and number, such as +34 612 345 678. |
| Country of residence | Select | Yes | Spain / United States / Other. |
| Years of experience | Number input | Yes | Between 0 and 50 inclusive. |
| Sector of interest | Select | Yes | Technology / Retail / Financial Services / Consulting / Other. |
| English level | Select | Yes | Basic / Intermediate / Advanced / Native. |
| Availability | Radio group | Yes | Immediate / 1 month / 2-3 months / Just exploring. |
| LinkedIn (profile URL) | URL input | No | Valid URL using http:// or https://. |
| Additional comments | Textarea | No | Maximum 500 characters with a visible live counter. |
| I accept the data policy | Checkbox | Yes | Must be checked. |

- Associate each control with a visible `label` using matching `for` and `id` attributes.
- Use `fieldset` and `legend` for appropriate groups, particularly availability; label each radio option individually.
- Apply `required` to required controls, suitable autocomplete attributes, and explicit empty placeholders for selects. Do not preselect consent.
- Use stable, field-derived IDs and names. The briefing specifies labels and domain values, not technical entity IDs; do not introduce unrelated entities or fields.
- Use Tailwind v4 utilities for responsive layouts, spacing, control sizes, focus states, and error presentation.
- Include a submit button, a secondary clear/reset button, per-field error containers, and an initially hidden success region.
- Display the exact employer notice visibly near the form: "Are you a company looking for talent? Write to us at contacto@nexova.com". Make the email a working link.
- Do not invent privacy-policy terms. Approved policy content or a URL remains a launch prerequisite.

### 4. Implement Form Validation

Depends on step 3.

- Create `validation.js` and load it with `defer`.
- Centralize validation rules and the briefing's exact error messages so real-time and submission checks remain consistent.
- Validate on blur/change, update the counter on input, and revalidate touched or invalid fields as users correct them.
- Validate all required and supplied optional fields before simulated submission. Trim surrounding whitespace where appropriate.
- Accept names containing accents or apostrophes; require at least two nonempty words.
- Check email structure, leading + and international phone structure, allowed select/radio values, and checked consent.
- Reject empty experience input before numeric conversion, enforce the inclusive 0-50 range, and do not impose an extra integer-only restriction absent from the brief.
- Parse optional LinkedIn URLs and accept only HTTP or HTTPS protocols.
- Enforce the comments limit even if the interface's length restriction is bypassed. Replace X in the specified error message with the remaining count.
- Prevent invalid submission, retain entered values, display specific visible errors, and focus the first invalid control.
- Associate errors using `aria-describedby`, set `aria-invalid` where appropriate, and clear stale error states after correction.
- On valid submission, show the exact success heading and paragraphs from the briefing, include the LinkedIn link, and move focus to the confirmation.
- Explain the simulated nature outside the required success copy; do not transmit, log, or persist candidate details.
- Make clear/reset restore inputs, selections, consent, error and touched states, ARIA state, comments counter, and confirmation state. Return focus to the first field.

### 5. Complete Accessibility and SEO

Depends on steps 2-4.

- Verify logical headings, semantic landmarks, keyboard operation, skip links, visible focus, associated labels, descriptive alt text, and sufficient contrast.
- Use native semantics first and ARIA only where necessary for navigation state and accessible validation feedback.
- Check mobile, tablet, desktop, and zoomed layouts for readable content and usable controls without horizontal page scrolling.
- Target WCAG 2.2 AA practices without claiming certification before verification.
- Embed the complete Organization JSON-LD from the briefing in `index.html`, removing angle brackets from URL strings.
- Preserve the Nexova name and description, 2011 founding date, Valencia and Miami addresses, contact point, company contact languages, and social URLs.
- Keep English and Spanish contact languages in company structured data; this does not require a bilingual website.
- Add unique titles, descriptions, and correct document language to both pages.
- Confirm the production domain before setting production canonical URLs. Do not treat a temporary Codespaces preview as the production Nexova domain.

### 6. Verify and Expose the Preview

Depends on completed pages and behavior.

- Generate Tailwind styles and start the documented npx server.
- Check both pages through navigation and direct URLs, including styles, scripts, images, contact links, and social links.
- Verify representative mobile, tablet, and desktop widths, plus zoom, with no overlapping text or horizontal overflow.
- Check keyboard-only navigation, mobile navigation state, form labels, error announcements, and first-error/success focus.
- Exercise empty submissions, one-word and whitespace-only names, malformed email/phone, blank and out-of-range experience, all selection controls, invalid URL protocols, excessive comments, and unchecked consent.
- Verify valid phone examples, experience boundaries 0 and 50, optional blank fields, comments of exactly 500 characters, successful submission, real-time correction, and full reset after errors or success.
- Confirm that candidate information is neither transmitted nor stored persistently.
- Validate Organization JSON-LD and inspect page metadata and accessibility. Do not create test files unless requested.
- In Codespaces Ports, confirm or add port 3000 and set its visibility to Public.
- Copy the actual forwarded HTTPS URL and verify access in a signed-out/private browser so external audits can reach the site.
- Report any organization policy preventing public forwarding instead of claiming a public URL is available.
- Document that the preview remains available only while its server and Codespace are running.

## Planned Files

All proposed implementation files belong under `uis/001-milestone/`:

- `index.html`: landing page.
- `application.html`: talent registration page.
- `validation.js`: validation, counter, reset, and simulated submission.
- Optional shared navigation JavaScript if mobile navigation requires a toggle.
- `tailwind.input.css` and generated `assets/tailwind.css`.
- Appropriately licensed image assets.
- `package.json` and dependency lockfile.
- `README.md`: installation, build, local preview, and public Codespaces instructions.

## Launch Prerequisites and Exclusions

- Approved privacy/data-processing policy text or URL is still required. Do not fabricate legal content or imply production readiness without it.
- The final production domain remains unconfirmed.
- Public Codespaces visibility depends on account and organization permissions.
- Backend integration, CV uploads, authentication, multilingual support, and task-folder creation are excluded.