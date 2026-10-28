# Nexova Website Implementation Tasks

Based on [plan.md](plan.md) and [BRIEFING.md](../BRIEFING.md), with the confirmed English, branding, preserved-date, and United States/Spain decisions.

Complete phases in order, except that landing and application markup can proceed alongside each other after setup and shared visual conventions. Check each item only after its stated outcome has been verified. This checklist does not implement the website.

## 1. Build and Local Preview

Status (2026-10-21): Both pages and validation are implemented. The approved source-detection deferral is resolved. Chromium checks passed for responsive layouts, image loading, labels, navigation, keyboard submission, 57 validation cases, exact error messages, correction, reset, and no submission requests/storage changes. Axe found zero violations; hero image contrast was checked separately. A reset-counter timing bug found during verification was fixed and the same checks passed afterward. Public Codespaces access, the production domain, and approved privacy-policy content still require confirmation. Detailed results are in the local README.

- [x] Create local `package.json` and a lockfile with Tailwind CSS v4, its CLI, and a static server; verify dependency installation succeeds without introducing other application frameworks.
- [x] Create `tailwind.input.css` containing only the Tailwind import; verify there are no handwritten CSS rules or inline style attributes in application source.
- [x] Configure source detection and use complete utility class names; verify generated styles include classes used in both HTML pages and JavaScript-driven validation states.
- [x] Generate `assets/tailwind.css` with `npx @tailwindcss/cli -i ./tailwind.input.css -o ./assets/tailwind.css --minify`; verify the command succeeds and produces a nonempty file.
- [x] Verify `npx serve . --listen tcp://0.0.0.0:3000` serves the project from `uis/001-milestone/`; document an alternative port if 3000 is occupied.
- [x] Create a local `README.md` documenting the working directory, dependency installation, CSS build/watch commands, preview command, and Codespaces public-port procedure; verify the instructions reproduce the preview.

Preview verification (2026-10-21): Port 3000 returned the generated stylesheet with HTTP 200 and `text/css`. If occupied, use `npx serve . --listen tcp://0.0.0.0:3001` and forward port 3001 instead. A missing clipboard helper warning does not prevent serving; `--no-clipboard` suppresses it.

## 2. Landing Page

Depends on phase 1.

- [x] Establish the agreed Nexova visual direction using Tailwind utilities: prominent wordmark, charcoal text, white/light-gray surfaces, emerald actions, and restrained coral accents; verify both pages use the same conventions.
- [x] Create `index.html` with HTML5 doctype, `lang="en"`, viewport metadata, one primary heading, a skip link, and semantic landmarks; verify the skip link reaches main content.
- [x] Implement header navigation labeled Home, Services, Talent, and Contact; verify section links work and Talent opens `application.html`.
- [x] Make navigation usable on mobile and by keyboard; if a menu toggle is used, verify its native button, `aria-controls`, and changing `aria-expanded` state match the visible menu.
- [x] Implement the hero with the briefing's exact headline, subheadline, and "Join our talent pool" CTA; verify the CTA opens the application page.
- [x] Implement all three services with their complete briefing descriptions: Executive Headhunting, Customer Support Outsourcing, and Corporate Training; verify three columns on desktop and stacked content on mobile.
- [x] Implement Why Nexova with 12 years of experience, United States and Spain market/presence wording, +500 successful selection processes, and technology/retail/finance specialization; verify two columns where space permits and no Latin American market claim remains.
- [x] Add the contact section with contacto@nexova.com, Valencia +34 960 123 456, and Miami +1 305 555 0191; verify email and telephone links use the correct destinations.
- [x] Implement the footer with contact details, the exact 2025 copyright, and the briefing's LinkedIn and Instagram destinations; verify links have accessible names.
- [x] Add appropriately licensed professional photography, recording its source/license where required; verify every image loads, has descriptive alt text, and declares stable dimensions.
- [x] Apply mobile-first Tailwind breakpoints and appropriate semantic `section`/`article` elements; verify the final order is header, hero, services, Why Nexova, contact, footer.

## 3. Application Page and Form

Depends on phase 1 and shared visual conventions.

- [x] Create `application.html` with English content, shared navigation/footer, a main heading, and a structured form; verify navigation returns to the landing page and its sections.
- [x] Add required Full name, Email, and Phone controls with text/email/tel types and suitable autocomplete attributes; verify labels match the briefing.
- [x] Add required Country of residence select with exactly Spain, United States, and Other; verify an empty placeholder is selected initially.
- [x] Add required Years of experience number input with inclusive minimum 0 and maximum 50; verify its initial value is empty.
- [x] Add required Sector of interest select with exactly Technology, Retail, Financial Services, Consulting, and Other; verify an empty placeholder is selected initially.
- [x] Add required English level select with exactly Basic, Intermediate, Advanced, and Native; verify an empty placeholder is selected initially.
- [x] Add required Availability radios with exactly Immediate, 1 month, 2-3 months, and Just exploring; verify a shared name, unique IDs, and a fieldset with legend.
- [x] Add optional LinkedIn (profile URL) input and Additional comments textarea; verify URL input type, a 500-character interface limit, and a visible counter initially showing 500 remaining.
- [x] Add the required "I accept the data policy" checkbox; verify consent is unchecked initially and no invented policy content is presented.
- [x] Associate every control with a visible label using matching `for`/`id` attributes, mark required controls with `required`, and group related controls appropriately; verify IDs are unique and field-derived, with no unrelated fields or business entities.
- [x] Display "Are you a company looking for talent? Write to us at contacto@nexova.com" visibly near the form; verify the email link works.
- [x] Add submit and secondary clear/reset buttons, per-field error containers, and an initially hidden confirmation region; verify button types prevent accidental submission on reset.
- [x] Style the form with responsive Tailwind layouts, clear spacing, visible focus, and distinguishable error states; verify controls and labels remain readable on small screens.

## 4. JavaScript Validation and Form States

Depends on phase 3.

- [x] Create `validation.js`, load it with `defer`, and centralize validation rules and all eleven exact error messages from the briefing; verify no browser validation bubble prevents the required custom feedback.
- [x] Validate trimmed Full name as at least two nonempty words; verify blank, whitespace-only, and one-word names fail while accented and apostrophe-containing names remain valid.
- [x] Validate Email for @ and a valid domain; verify malformed addresses fail and `name@company.com` passes.
- [x] Validate Phone for a leading + followed by country-code and number structure; verify missing + or alphabetic input fails and `+34 612 345 678` passes.
- [x] Validate Years of experience without coercing empty input to zero; verify blank, nonnumeric, -1, and 51 fail, 0 and 50 pass, and no extra integer-only restriction is imposed.
- [x] Validate required selects and Availability against their exact allowed values; verify placeholders and no radio selection fail, including values altered outside the offered options.
- [x] Validate optional LinkedIn using URL parsing and HTTP/HTTPS protocol checks; verify blank and valid HTTP/HTTPS URLs pass while malformed URLs and other protocols fail.
- [x] Update the comments counter on input and enforce the 500-character limit in JavaScript; verify 500 characters pass, bypassed 501-character input fails, and X in the error message reflects the remaining count.
- [x] Validate consent; verify an unchecked checkbox produces "You must accept the data processing policy to continue".
- [x] Implement blur/change validation and revalidation while editing touched or invalid fields; verify corrections remove stale errors without showing errors on untouched fields immediately.
- [x] On submission, prevent navigation and validate every required and supplied optional field; verify invalid submissions retain values, display all relevant errors, and focus the first invalid control.
- [x] Connect errors with `aria-describedby`, update `aria-invalid` where appropriate, and provide accessible feedback; verify errors are identifiable without color alone and corrections clear invalid states.
- [x] Show the briefing's exact success heading and paragraphs only after all checks pass; verify confirmation receives focus and includes the correct LinkedIn link.
- [x] Explain simulated submission outside the required confirmation copy; verify no candidate data is sent, logged, or stored persistently.
- [x] Implement complete clear/reset behavior; verify values, selections, consent, errors, touched state, ARIA state, comments counter, and confirmation state reset and focus returns to the first field.

## 5. Accessibility and SEO

Depends on completed markup and form behavior.

- [x] Add unique descriptive titles and meta descriptions to both pages; verify `lang="en"`, viewport metadata, one primary heading per page, and logical heading levels.
- [x] Embed the complete briefing Organization JSON-LD in `index.html`; verify valid JSON and plain URL strings without source angle brackets.
- [x] Verify structured data preserves Nexova's supplied description, foundingDate 2011, both office addresses, contact point, Spanish/English company contact languages, and both social URLs.
- [ ] Confirm the production domain before adding production canonical URLs; verify no temporary Codespaces URL is misrepresented as the production Nexova domain.
- [x] Check semantic landmarks, labels, legends, accessible names, native control behavior, and necessary ARIA; verify no redundant roles replace native semantics.
- [x] Verify keyboard-only navigation across both pages, visible focus, skip links, radio navigation, menu operation, and first-error/confirmation focus.
- [x] Check text and control contrast against applicable WCAG 2.2 AA thresholds and inspect validation announcements; record findings without claiming unverified certification.

## 6. Verification and Public Codespaces Preview

Depends on phases 1-5. Use focused manual checks or existing tooling; do not add test files unless requested.

- [x] Build styles and run the documented npx preview command; verify direct requests to `index.html`, `application.html`, CSS, JavaScript, and images succeed without missing assets or browser console errors.
- [x] Check both pages at representative mobile, tablet, and desktop widths, such as 375, 768, and 1440 pixels, and at 200% zoom; verify no overlapping content or horizontal page scrolling.
- [x] Verify all navigation, CTA, email, telephone, and social links from both pages, including direct entry to the application page.
- [x] Exercise all invalid-field cases and compare displayed messages against the briefing verbatim; verify no invalid submission reaches success.
- [x] Exercise valid boundary values, blank optional fields, all offered select/radio options, real-time correction, and complete valid submission; verify expected acceptance and confirmation.
- [x] Exercise clear/reset after both errors and successful submission; verify the form returns to its initial accessible state.
- [x] Inspect browser network activity and persistent storage during submission; verify candidate data is not transmitted or retained and no candidate details appear in console output.
- [x] Validate JSON-LD using an appropriate structured-data validator and audit accessibility/SEO with available tooling; record results and unresolved issues without repeatedly running unrelated checks.
- [x] Confirm or add the preview port in Codespaces Ports and set visibility to Public; verify the selected port matches the running server or record a permissions blocker.
- [ ] Copy the actual forwarded HTTPS URL and open it in a signed-out/private browser; verify both pages and assets are externally accessible before marking public exposure complete.
- [x] Record the verified public preview URL and audit results in the local README; document that access depends on a running server/Codespace and note any organization policy restricting public visibility.

External verification (2026-10-21): The public-visibility CLI command succeeded. An unauthenticated HTTP request returned Nexova content, and a fresh Chromium context reached the landing heading after GitHub's standard Continue warning. The two-page external browser workflow is not checked off: the first attempt encountered that warning, and the second stopped at an image-readiness assertion (`false !== true`) before testing the form. The image likely had not finished loading when inspected. Stop after these two attempts under repository limits; resume this specific check with an explicit image-load wait when authorized. Local image, form, and asset checks passed.

## 7. Production Launch Gates

These items require external decisions and do not block documenting or building the simulated demonstration.

- [ ] Obtain approved privacy/data-processing policy text or a public URL, connect it to consent, and verify it is reachable before claiming production readiness.
- [ ] Confirm the final production domain and reconcile public URL metadata with the approved deployment destination.
- [x] Review the finished site against the confirmed scope: English only, preserved dates, United States/Spain wording, Tailwind v4 utilities, and no backend, CV upload, authentication, or unintended candidate storage.

Remaining launch gates: No approved data policy or confirmed production domain has been supplied. Canonical URL confirmation and the two production approval tasks remain unchecked; the temporary Codespaces URL is not treated as the production domain.